import uuidv4 from 'uuid/v4';

import mysql from '../config/mysql.config';

const chatRoomHandler = {
  post(req, res) {
    const params = {
      config_id: req.body.configId,
      agent_group_id: req.body.agentGroupId,
      room_id: uuidv4(),
    };

    const post = Object.assign({}, params, { created_at: new Date() });

    mysql.query('INSERT INTO chat_sessions SET ?', post, (error) => {
      if (!error) {
        // stick into redis queue of which the agent listens to
        // queue is specific to the agent group id

        res.json(params);
      } else {
        console.error('ERROR', error);

        res.status(500).send({ error });
      }
    });
  },
};

export default chatRoomHandler;
