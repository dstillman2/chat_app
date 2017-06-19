import request from 'request';

// Store file contents in memory
let fileContent;

const filePath = 'http://localhost:8080/web.bundle.js';

// Fetch the chat javascript file.
request.get(filePath, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fileContent = body;
  } else {
    throw new Error('Fatal: cannot read web.bundle.js');
  }
});

/**
 * Compiles global variables and chat javascript file.
 */
const embedHandler = {
  get(req, res) {
    const host = 'http://localhost:3000';
    const dsChatPathLocation = (
      `window.dsChatPathLocation='${host}/config-${req.params.identifier}.js';`
    );

    res.send(`${dsChatPathLocation}${fileContent}`);
  },
};

export default embedHandler;
