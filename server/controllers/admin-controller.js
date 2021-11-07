import db from "../database/db.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename.replace("controllers", "upload\\"));

class AdminController {
  async createProduct(req, res) {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json("No files were uploaded.");
      }
      const { image } = req.files;
      const uploadPath = __dirname + image.name;
      await image.mv(uploadPath, async (err) => {
        if (err) {
          return res.status(500).json(err);
        }
        const { title, description, price, quantity } = JSON.parse(
          req.body.body
        );
        await db.query(
          "INSERT INTO product (image, title, description, price, quantity) VALUES (?,?,?,?,?);",
          [image.name, title, description, price, quantity],
          async (err, rows) => {
            if (err) {
              console.log(err);
              res.status(400).json({ message: err });
            }
            res.json({ message: "Image is add" });
          }
        );
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Item is not added" });
    }
  }

  async getAllProduct(req, res) {
    try {
      await db.query(
        "SELECT id,title,image,description,price,quantity FROM product",
        (err, rows) => {
          console.table(rows);
          if (rows.length > 0) {
            const products = rows.map((pic) => {
              const product = {
                ...pic,
                image: `http://localhost:5000/product/${pic.image}`,
              };
              return product;
            });
            res.json(products);
          }
        }
      );
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Something went wrong" });
    }
  }

  async getProduct(req, res) {
    try {
      const id = req.params.id;
      await db.query(
        "SELECT id,title,image,description,price,quantity FROM product WHERE id = ?",
        [id],
        (err, rows) => {
          const product = {
            ...rows[0],
            image: "http://localhost:5000/product/" + rows[0].image,
          };
          console.table(rows[0]);
          return res.json(product);
        }
      );
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Something went wrong" });
    }
  }

  async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      if (id) {
        await db.query("DELETE FROM product WHERE id=?;", [id], (err, rows) => {
          res.json({ message: `Product with id:${id} deleted successfully` });
        });
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Something went wrong" });
    }
  }

  async updateProduct(req, res) {
    try {
      const id = req.params.id;
      const { title, description, price, quantity } = JSON.parse(req.body.body);
      if (req.files) {
        const { image } = req.files;
        const imageName = image.name;
        const uploadPath = __dirname + image.name;

        await image.mv(uploadPath, async (err) => {
          if (err) {
            return res.status(500).json(err);
          }

          await db.query(
              'UPDATE product SET  image=? ,title=?,description=? ,price=? ,quantity=? WHERE id=?',
              [ imageName ,title, description, price, quantity, id], async (err, rows) => {
                if (err) {
                  console.log(err);
                  res.status(400).json({message: err});
                }
                await db.query('SELECT id,title,image,description,price,quantity FROM product WHERE id = ?',
                    [id], (err, result) => {
                      const product = {
                        ...rows[0],
                        image: 'http://localhost:5000/product/' + result[0].image,// magic string
                      };

                      return res.json(product);
                    });
              });
        });
      } else {
        await db.query(
          "UPDATE product SET title=?,description=? ,price=? ,quantity=? WHERE id=?",
          [title, description, price, quantity, id],
          async (err, rows) => {
            await db.query(
              "SELECT id,title,image,description,price,quantity FROM product WHERE id = ?",
              [id],
              (err, result) => {
                const product = {
                  ...result[0],
                  image: 'http://localhost:5000/product/' + result[0].image,
                };

                return res.json(product);
              }
            );
          }
        );
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Product is not updated" });
    }
  }
}

export default new AdminController();
