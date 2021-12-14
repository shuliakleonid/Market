import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();
const dbServer = () =>{
  return mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERMYSQL,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    insecureAuth: true,
  });
};
export default dbServer;
