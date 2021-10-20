import express from 'express'
import cors from 'cors'
import router from './routes/router.js'
import authRouter from './routes/authRouter.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api', router);
app.use('/auth', authRouter);


async function startApp() {
  try {
    app.listen(PORT, () => console.log('Server started on ' + PORT));
  } catch (e) {
    console.log(e)
  }
}

startApp()

