import express from 'express'
import cors from 'cors'
import router from './routes/router.js'
import authRouter from './routes/auth-router.js';
import adminRouter from './routes/admin-router.js';
import fileUpload from 'express-fileupload';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({origin: '*'}));
app.use(fileUpload({}))
app.use(express.json());
app.use('/api', router);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);


async function startApp() {
  try {
    app.listen(PORT, () => console.log('Server started on ' + PORT));
  } catch (e) {
    console.log(e)
  }
}

startApp()

