
import dbServer from '../utils/dbServer';
import logger from '../utils/logger';

const db = dbServer();

db.connect(async (err) => {
  if (!err) {
    logger.info('DB connection succeeded.');
  } else
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

export default db;
