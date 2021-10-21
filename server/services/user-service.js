import db from '../database/db.js';

class UserService {
  async createUser(user) {
      const {user_name, first_name, last_name, email, role, password} = user;
      const sql = `CALL UserAddOrEdit('0','${user_name}','${first_name}','${last_name}','${email}','${role}','${password}');`;
    const createdUser = await db.query(
          sql,
           (err, rows) => {
          const arr = rows.map((element) => {
              console.log(element, "ELEMENT");
              if (element.constructor === Array)
                return("Inserted user id : " + element[0].iduser);
            });
            console.log(arr,"ARRAY");
            return arr[0];
          }
      );
    console.log(createdUser);
  }
}

export default new UserService();
