import db from "../database/db.js";
import UserService from "../services/user-service.js";

class UserController {
  async createUser(req, res) {
    try {
      const { user_name, first_name, last_name, email, role, password } =
        req.body;
      const sql = `CALL UserAddOrEdit('0','${user_name}','${first_name}','${last_name}','${email}','${role}','${password}');`;
      await db.query(sql, (err, rows) => {
        rows.forEach((element) => {
          console.log(element, "ELEMENT");
          if (element.constructor === Array)
            res.json("Inserted user id : " + element[0].iduser);
        });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async getUser(req, res) {
    try {
      if (!req.params.id) {
        throw new Error("Id not indicated");
      }

      await UserService.getUser(req.params.id, (err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async getAllUsers(req, res) {
    try {
      await UserService.getAllUsers((err, rows) => res.json(rows));
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateUser(req, res) {
    try {
      const {
        iduser,
        user_name,
        first_name,
        last_name,
        email,
        role,
        password,
      } = req.body;
      const sql = `CALL UserAddOrEdit('${iduser}','${user_name}','${first_name}','${last_name}','${email}','${role}','${password}');`;
      db.query(sql, () => {
        res.json("Updated successfully");
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async deleteUser(req, res) {
    try {
      await UserService.deleteUser(req.params.id, (err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.json("Deleted successfully.");
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new UserController();
