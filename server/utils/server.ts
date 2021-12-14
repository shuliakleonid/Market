import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from '../routes/router';
import authRouter from '../routes/auth-router';
import adminRouter from '../routes/admin-router';
import cartRouter from '../routes/cart-router';
import fileUpload from 'express-fileupload';

const createServer = () =>{
  const app = express();
  app.use(cors({ origin: '*' }));
  app.use(fileUpload({}));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/api', router);
  app.use('/auth', authRouter);
  app.use('/admin', adminRouter);
  app.use('/product', express.static('upload'));
  app.use('/cart', cartRouter);
  return app;
};
export default createServer;
