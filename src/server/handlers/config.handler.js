import mysql from '../config/mysql.config';

const configurationHandler = {
  // Fetch configuration file
  get(req, res) {
    const query = (
      `SELECT * FROM configurations
       WHERE unique_id = "${req.params.identifier}" AND is_deleted=0`
    );

    mysql.query(query, (err, results) => {
      if (err || results.length !== 1) {
        res.status(404).send('404 Config Not Found');

        return;
      }

      const configFile = results[0].data;

      res.send(configFile);
    });
  },

  // Update configuration file
  put(req, res) {
    res.status(200).end();
  },
};

export default configurationHandler;
