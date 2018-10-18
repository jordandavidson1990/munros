const ListView = require('./views/list_view.js');
const Regions = require('./models/regions.js');


document.addEventListener('DOMContentLoaded', () => {
  const regionsListContainer = document.querySelector('#regions');
  const listView = new ListView(regionsListContainer);
  listView.bindEvents();

  const regions = new Regions();
  regions.getData();
});
