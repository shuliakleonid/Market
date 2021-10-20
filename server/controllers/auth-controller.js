import db from "../database/db.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration error", errors });
      }
      const { user_name, first_name, last_name, email, role, password } =
        req.body;
      await db.query(
        "SELECT email FROM user WHERE email = ?",
        [email],
        async (err, rows) => {
          if (rows.length > 0) {
            return res.status(400).json({ message: "Email is already exist" });
          }
          const hashPassword = await bcrypt.hashSync(password, 6);
          const sql = `CALL UserAddOrEdit('0','${user_name}','${first_name}','${last_name}','${email}','${role}','${hashPassword}');`;

          await db.query(sql, (err, rows) => {
            rows.forEach((element) => {
              if (element.constructor === Array)
                return res.json("Inserted user id : " + element[0].iduser);
            });
          });
        }
      );
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const {email, password} = req.body;
      await db.query('SELECT email,password FROM user WHERE email = ?;',[email],(err,rows)=>{
        console.log(rows,"ROWS")
        if(!rows.length > 0){
          return res.status(400).json({message: `User with email:${email} don't exist`})
        }
        const validPassword = bcrypt.compareSync(password,rows[0].password);
        if(!validPassword){
          return res.status(400).json({message:'Enter correct password'})
        }
        // Todo I must understand what use string or JWT
        return res.json({message:'Welcome!'});

      })



    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async getUsers(req, res) {
    try {
      res.json("Server works");
    } catch (e) {}
  }
}

export default new AuthController();
