import fs from 'fs';
import path from 'path';

let defaultTheme;

const styleSheetPath = (
  path.join(__dirname, '../../static/css/chat.window.style.css')
);

fs.readFile(styleSheetPath, 'utf8', (error, data) => {
  defaultTheme = data;
});

const themeHandler = {
  get(req, res) {
    if (req.params.themeName === 'test-theme') {
      res.set('Content-Type', 'text/css');
      res.send(defaultTheme);

      return;
    }

    res.status(404).end();
  },
};

export default themeHandler;
