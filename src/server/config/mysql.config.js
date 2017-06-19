import mysql from 'mysql';

const isProduction = process.env.NODE_ENV === 'production';

const connection = mysql.createConnection({
  host: isProduction ? 'localhost' : 'localhost',
  user: isProduction ? 'root' : 'root',
  password: isProduction ? 'mysql' : 'mysql',
  database: isProduction ? 'new' : 'new',
});

connection.connect();

export default connection;
