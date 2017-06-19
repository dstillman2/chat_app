import mysql from '../config/mysql.config';

const configurationHandler = {
  get(req, res) {
    const query = (
      `SELECT * FROM config WHERE uuid = "${req.params.identifier}"`
    );

    mysql.query(query, (err, results) => {
      if (err || results.length !== 1) {
        res.send('404 Not Found');

        return;
      }

      const configFile = results[0].config;

      res.send(configFile);
    });
  },
};

export default configurationHandler;
