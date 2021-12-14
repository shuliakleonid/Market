import { fileURLToPath } from 'url';
import { dirname } from 'path';
// @ts-ignore
// eslint-disable-next-line import/extensions
import ProductService from '../services/product-service.ts';

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/naming-convention
// const __filename = fileURLToPath('/server/upload');
// const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = dirname(__filename.replace('controllers', 'upload\\'));

class ProductController {
  async createProduct(req, res) {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json('No files were uploaded.');
      }
      const { image } = req.files;
      const uploadPath = __dirname + image.name;
      await image.mv(uploadPath, async (err) => {
        if (err) {
          return res.status(500).json(err);
        }
        await ProductService.createProduct(
          req.body.body,
          image.name,
          (err, rows) => {
            if (err) {
              res.status(400).json({ message: err });
            } else {
              res.json({ message: 'Product is add' });
            }
          },
        );
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Item is not added' });
    }
  }

  async getAllProduct(req, res) {
    try {
      await ProductService.getAllProduct((err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Something went wrong' });
    }
  }

  async getProduct(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new Error('Id not indicated');
      }
      await ProductService.getProduct(id, (err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Something went wrong' });
    }
  }

  async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new Error('Id not indicated');
      }
      if (id) {
        await ProductService.deleteProduct(id, (err, rows) => {
          if (err) {
            res.json(err);
          } else {
            res.json({ message: `Product with id:${id} deleted successfully` });
          }
        });
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Something went wrong' });
    }
  }

  async updateProduct(req, res) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new Error('Id not indicated');
      }
      if (req.files) {
        const { image } = req.files;
        const uploadPath = __dirname + image.name;

        await image.mv(uploadPath, async (err) => {
          if (err) {
            return res.status(500).json(err);
          }
          await ProductService.updateProduct(
            id,
            req.body.body,
            image.name,
            (err, rows) => {
              if (err) {
                res.json(err);
              }
            },
          );
        });
      } else {
        await ProductService.updateProduct(
          id,
          req.body.body,
          null,
          (err, rows) => {
            if (err) {
              res.json(err);
            }
          },
        );
      }
      await ProductService.getProduct(id, (err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Product is not updated' });
    }
  }
}

export default new ProductController();
