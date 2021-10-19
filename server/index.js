import express from 'express'
import cors from 'cors'
import mysqlConnection from './db.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());

mysqlConnection.connect((err) => {
  if (!err)
    console.log('DB connection succeeded.');
  else
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

async function startApp() {
  try {
    app.listen(PORT, () => console.log('Server started on ' + PORT));
  } catch (e) {
    console.log(e)
  }
}

app.get('/users', (req, res) => {
  mysqlConnection.query('SELECT * FROM USER', (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});

app.get('/user/:id', (req, res) => {
  mysqlConnection.query('SELECT * FROM USER WHERE iduser = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});

app.delete('/user/:id', (req, res) => {
  mysqlConnection.query('DELETE FROM USER WHERE iduser = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
      res.send('Deleted successfully.');
    else
      console.log(err);
  })
});

app.post('/user', (req, res) => {
  const user = req.body;
  console.log(user, 'USER')
  const sql = `CALL UserAddOrEdit('0','${user.user_name}','${user.first_name}','${user.last_name}','${user.email}','${user.role}','${user.password}');`;
  console.log(sql,'SQL')
  mysqlConnection.query(sql,
      (err, rows, fields) => {
        if (!err)
          rows.forEach(element => {
            if (element.constructor === Array)
              res.send('Inserted user id : ' + element[0].iduser);
          });
        else
          console.log(err);
      }
  )
});

app.put('/user', (req, res) => {
  const user = req.body;
  const sql = `CALL UserAddOrEdit('${user.iduser}','${user.user_name}','${user.first_name}','${user.last_name}','${user.email}','${user.role}','${user.password}');`;
  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err)
      res.send('Updated successfully');
    else
      console.log(err);
  })
});

startApp()

