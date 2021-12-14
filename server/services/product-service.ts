// @ts-ignore
// eslint-disable-next-line import/extensions
import db from '../database/db.ts';

class ProductService {
  createProduct(body, image, result) {
    const { title, description, price, quantity } = JSON.parse(body);
    db.query(
      'INSERT INTO product (image, title, description, price, quantity) VALUES (?,?,?,?,?);',
      [image, title, description, price, quantity],
      async (err, rows) => {
        if (err) {
          result(null, err);
        }
        result(null, rows);
      },
    );
  }

  getAllProduct(result) {
    db.query(
      'SELECT id,title,image,description,price,quantity FROM product',
      (err, rows) => {
        if (err) {
          result(null, err);
        }

        if (rows.length > 0) {
          const products = rows.map((pic) => {
            return {
              ...pic,
              image: process.env.URL_IMG + pic.image,
            };
          });
          result(null, products);
        }
      },
    );
  }

  getProduct(id, result) {
    db.query(
      'SELECT id,title,image,description,price,quantity FROM product WHERE id = ?',
      [id],
      (err, rows) => {
        if (err) {
          result(null, err);
        }
        const product = {
          ...rows[0],
          image: process.env.URL_IMG + rows[0].image,
        };
        result(null, product);
      },
    );
  }

  deleteProduct(id, result) {
    db.query('DELETE FROM product WHERE id=?;', [id], async (err, rows) => {
      if (err) {
        result(null, err);
      }
      result(null, rows);
    });
  }

  updateProduct(id, body, imageName = '', result) {
    const { title, description, price, quantity } = JSON.parse(body);
    if (imageName) {
      db.query(
        'UPDATE product SET  image=? ,title=?,description=? ,price=? ,quantity=? WHERE id=?',
        [imageName, title, description, price, quantity, id],
        async (err, rows) => {
          if (err) {
            result(null, err);
          } else {
            result(null, rows);
            console.log('Product Update!');
          }
        },
      );
    } else {
      db.query(
        'UPDATE product SET title=?,description=? ,price=? ,quantity=? WHERE id=?',
        [title, description, price, quantity, id],
        (err, rows) => {
          if (err) {
            result(null, err);
          } else {
            result(null, rows);
          }
        },
      );
    }
  }
}

export default new ProductService();
