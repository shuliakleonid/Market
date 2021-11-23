import express from 'express'
import cors from 'cors'
import router from './routes/router.js'
import authRouter from './routes/auth-router.js';
import adminRouter from './routes/admin-router.js';
import cartRouter from './routes/cart-router.js';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';


const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({origin: '*'}));
app.use(fileUpload({}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', router);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/product', express.static('upload'));
app.use('/cart',cartRouter);

async function startApp() {
  try {
    app.listen(PORT, () => console.log('Server started on ' + PORT));
  } catch (e) {
    console.log(e)
  }
}

startApp()

