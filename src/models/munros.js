const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function(){
  this.data = [];
};

Munros.prototype.getData = function(){
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const requestHelper = new RequestHelper(url);

  requestHelper.get().then(data => {
    console.log('hello:', data);
    // this.handleDataReady(data);
    this.data = data.name;
    PubSub.publish('Munros:munros-data-ready', this.data);
  });
};
//
// Munros.prototype.handleDataReady = function(munros){
//   const munroNames =
//   this.getMunroNames(munros);
//   this.modelMunros()
// }

module.exports = Munros;
