const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js');

const ListView = function(container)
{
  this.container = container;
}

ListView.prototype.bindEvents = function(){
  PubSub.subscribe('Munros:munros-data-ready', (evt) => {
    console.log('evt:', evt);
    this.munros = evt.detail;
    this.render();
  });
};

ListView.prototype.render = function(){
  this.munros.forEach((munro) =>{
    const detailView = new DetailView(this.container, munro);
    detailView.render();
  });
};

module.exports = ListView;
