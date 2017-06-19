/**
 * Inject a style tag into the head tag and remove it after fetching the css
 * file.
 */
function injectStyle(url) {
  const link = document.createElement('link');
  const head = document.querySelector('head');

  if (!head) {
    throw new Error('invalid page doc');
  }

  link.href = url;
  link.rel = 'stylesheet';
  link.type = 'text/css';

  head.appendChild(link);
}

export default injectStyle;
