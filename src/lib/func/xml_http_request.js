function sendAjaxRequest({
  method,
  path,
  data,
  headers,
  onSuccess,
  onFailure,
  onComplete,
}) {
  const request = new XMLHttpRequest();

  request.open(method, path, true);

  request.onload = () => {
    if (request.status >= 200 && request.status <= 400) {
      // Ajax request success
      const data = JSON.parse(request.responseText);

      if (typeof onSuccess === 'function') {
        onSuccess(data);
      }
    } else if (typeof onFailure === 'function') {
      // Ajax request failure
      onFailure(request.responseText);
    }

    if (typeof onComplete === 'function') {
      onComplete(request.responseText);
    }
  };

  request.onerror = () => {
    console.error('Fatal: ERR_CONNECTION_REFUSED');

    if (typeof onFailure === 'function') {
      onFailure(504, 'ERR_CONNECTION_REFUSED');
    }

    if (typeof onComplete === 'function') {
      onComplete(504, 'ERR_CONNECTION_REFUSED');
    }
  };

  // If headers are present, set the headers.
  if (headers) {
    if (Array.isArray(headers)) {
      headers.forEach((header) => {
        request.setRequestHeader(header.key, header.value);
      });
    }
  }

  request.send(data);
}

export default sendAjaxRequest;
