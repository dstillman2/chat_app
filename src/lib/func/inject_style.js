function injectStyle(url) {
  const link = document.createElement('link');
  const head = document.querySelector('head');

  if (!head) {
    throw new Error('invalid page doc');
  }

  link.href = url;
  link.rel = 'stylesheet';

  head.appendChild(link);

  link.parentElement.removeChild(link);
}

export default injectStyle;
