import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config()

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERMYSQL,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  insecureAuth: true
});

db.connect((err) => {
  if (!err)
    console.log('DB connection succeded.');
  else
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

export default db;
