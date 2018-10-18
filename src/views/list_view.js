const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js');

const ListView = function(container)
{
  this.container = container;
}

ListView.prototype.bindEvents = function(){
  PubSub.subscribe('Regions:regions-data-ready', (evt) => {
    console.log('evt:', evt.detail);
    this.regions = evt.detail;
    this.render();
  });
};

ListView.prototype.render = function(){
  this.regions.forEach((region) =>{
    const detailView = new DetailView(this.container, region);
    console.log('region:',  region);
    detailView.render();
  });
};

module.exports = ListView;
