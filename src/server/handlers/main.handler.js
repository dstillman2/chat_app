import path from 'path';

const mainHandler = {
  get(req, res) {
    const filePath = path.join(__dirname, '../../creation_wizard/index.html');

    res.sendFile(filePath);
  },
};

export default mainHandler;
