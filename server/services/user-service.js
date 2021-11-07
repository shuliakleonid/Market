import db from "../database/db.js";

class UserService {
  getAllUsers(result) {
    return db.query("SELECT * FROM USER", (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    });
  }

  getUser(id, result) {
    db.query(
      "SELECT email,first_name,last_name,phone,birth_date FROM user WHERE token = ?",
      [id],
      (err, rows) => {
        if (err) {
          result(null, err);
        } else {
          result(null, rows[0]);
        }
      }
    );
  }

  deleteUser(id,result){
    db.query("DELETE FROM USER WHERE id = ?", [id], (err, rows) => {
      if (err) {
        result(null, err);
      } else {
        result(null, rows);
      }
    })
  }
}

export default new UserService();
