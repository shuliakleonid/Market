import createServer from './utils/server';
import logger from './utils/logger';

const PORT = process.env.PORT || 5000;

const app = createServer();

async function startApp() {
  try {
    app.listen(PORT, async () => logger.info(`App is running at http://localhost:${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();

export default app;
