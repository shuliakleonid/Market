// @ts-ignore
// eslint-disable-next-line import/extensions
import db from '../database/db.ts';

class OrderService {
  async setUserInfo(userInfo, id) {
    const { phone, email, country, city, street, postCode } = userInfo;

    const sql = 'INSERT INTO user_inform (id_user, phone, email, country, city, street, post_code)VALUES (?,?,?,?,?,?,?);';
    return new Promise((res, rej) =>
      db.query(
        sql,
        [id, phone, email, country, city, street, postCode],
        (err, rows) => {
          if (err) {
            rej(err);
          }
          res(rows);
        },
      ),
    );
  }

  async getIdAddressUser(id){
    return new Promise((res, rej)=> db.query(
      'SELECT id FROM user_inform WHERE id_user = ?;',
      [id],
      (err, rows) => {
        if (err) {
          rej(err);
        }
        res(rows);
      },
    ),
    );
  }

  async setOrder(productId, id, productQuantity, userAddress, totalPrice){
    return new Promise((res, rej)=>db.query(
      'INSERT INTO order_product (id_product,id_user,quantity,id_user_inform,total_price) VALUE(?,?,?,?,?)',
      [productId, id, productQuantity, userAddress, totalPrice],
      (err, rows) => {
        if (err) {
          rej(err);
        }
        res(rows);
      },
    ));
  }
}

export default new OrderService();
