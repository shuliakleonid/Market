import db from "../database/db.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration error", errors });
      }
      const { first_name, last_name, email, password } = req.body;
      await db.query(
        "SELECT email FROM user WHERE email = ?",
        [email],
        async (err, rows) => {
          if (rows.length > 0) {
            return res.status(400).json({ message: "Email is already exist" });
          }
          const hashPassword = await bcrypt.hashSync(password, 6);
          const sql =
            "INSERT INTO user (email,password,first_name,last_name) VALUES (?,?,?,?);";
          await db.query(
            sql,
            [email, hashPassword, first_name, last_name],
            async (err, rows) => {
              return res.json({ message: "User created" });
            }
          );
        }
      );
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration error", errors });
      }
      const { email, password } = req.body;
      await db.query(
        "SELECT email,password,id FROM user WHERE email = ?;",
        [email],
        async (err, rows) => {
          if (!rows.length > 0) {
            return res
              .status(400)
              .json({ message: `User with email:${email} don't exist` });
          }
          const validPassword = bcrypt.compareSync(password, rows[0].password);

          if (!validPassword) {
            return res.status(400).json({ message: "Enter correct password" });
          }
          const token = uuidv4();
          const expireTimeMS = Date.now() + 1000 * 60 * 60;
          const expireDate = new Date(expireTimeMS).toISOString().split(".")[0]; // format YYYY-MM-DDTHH:MM:SS.
          const sql = `UPDATE user SET token = ?, expiration_time = ?  WHERE id = ?;`;

          await db.query(
            sql,
            [token, expireDate, rows[0].id, rows[0].id],
            async (err, row) => {

              await db.query(
                "SELECT token FROM user WHERE id = ?",
                [rows[0].id],
                (err, result) => {
                  return res.json(result[0]);
                }
              );
            }
          );
        }
      );
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
}

export default new AuthController();
