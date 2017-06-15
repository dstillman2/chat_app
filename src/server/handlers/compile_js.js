import mysql from '../config/mysql.config';

const compileJs = {
  get(req, res) {
    const query = (
      `SELECT * FROM config WHERE uuid = "${req.params.identifier}"`
    );

    mysql.query(query, (err, results) => {
      if (err || results.length !== 1) {
        res.send('404 Not Found');

        return;
      }


      res.send('Hello World');
    });
  },
};

export default compileJs;
