const html = require('xmlhttprequest');

const API = 'https://api.escuelajs.co/api/v1/';

const fetchData = (urlApi, callback) => {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true)
  xhttp.onreadystatechange = (state) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      }
    } else {
      const error = new Error(`An error has ocurred ${urlApi} api call`);
      return callback(error, null)
    }
  }
  xhttp.send();
}