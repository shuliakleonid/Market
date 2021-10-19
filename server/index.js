import express from 'express'
import cors from 'cors'
import router from './routes/router.js'

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    app.listen(PORT, () => console.log('Server started on ' + PORT));
  } catch (e) {
    console.log(e)
  }
}

startApp()

