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
        res.json(keyFormat(params));
      } else {
        console.error('ERROR', error);

        res.status(500).send({ error });
      }
    });
  },
};

function keyFormat(obj) {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    let keyName = '';
    let flag = false;

    key.split('').forEach((letter) => {
      if (letter === '_') {
        flag = true;
      } else if (flag) {
        keyName += letter.toUppercase();

        flag = false;
      } else {
        keyName += letter;
      }
    });

    newObj[keyName] = obj[key];
  });

  return newObj;
}

export default chatRoomHandler;

// on agent sign in:
//  - post request: swap mysql to online, subscribe agent_group_id room.
