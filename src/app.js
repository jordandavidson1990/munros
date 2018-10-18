const ListView = require('./views/list_view.js');
const Munros = require('./models/munros.js');


document.addEventListener('DOMContentLoaded', () => {
  const munrosListContainer = document.querySelector('#munros');

  const listView = new ListView(munrosListContainer);
  listView.bindEvents();

  const munros = new Munros();
  munros.getData();
});
