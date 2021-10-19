import db from "../db.js";

class UserController {
  async createUser(req, res) {
    try {
      const {user_name, first_name, last_name, email, role, password} =
          req.body;
      const sql = `CALL UserAddOrEdit('0','${user_name}','${first_name}','${last_name}','${email}','${role}','${password}');`;
      await db.query(
          sql,
          (err, rows, fields) => {
            rows.forEach((element) => {
              console.log(element, "ELEMENT");
              if (element.constructor === Array)
                res.json("Inserted user id : " + element[0].iduser);
            });
          }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async getUser(req,res) {
    try{
    await db.query('SELECT * FROM USER WHERE iduser = ?', [req.params.id], (err, rows, fields) => {
      res.json(rows);
  })
    } catch (err) {
      console.log(err);
    }
  }
  async getAllUsers(req,res) {
    try{
      db.query('SELECT * FROM USER', (err, rows, fields) => {
      res.json(rows);
  })
    } catch (err) {
        console.log(err);
    }
  }
  async updateUser(req,res) {
    try{
      const {iduser, user_name, first_name, last_name, email, role, password} =
          req.body;
  const sql = `CALL UserAddOrEdit('${iduser}','${user_name}','${first_name}','${last_name}','${email}','${role}','${password}');`;
  db.query(sql, (err, rows, fields) => {
      res.json('Updated successfully');
  })
    } catch (err) {
      console.log(err);
    }
  }
  async deleteUser(req,res) {
    try{
      db.query('DELETE FROM USER WHERE iduser = ?', [req.params.id], (err, rows, fields) => {
      res.json('Deleted successfully.');
  })
    } catch (err) {
      console.log(err);
    }
  }
}

export default new UserController();
