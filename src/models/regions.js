const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Regions = function(){
  this.regions = [];
};

Regions.prototype.getData = function(){
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const requestHelper = new RequestHelper(url);

  requestHelper.get().then(data => {
    // console.log('hello data:', data);
    this.handleDataReady(data);
    // this.data = data.name;
    // console.log('name data:', data);
    PubSub.publish('Regions:regions-data-ready', this.regions);
    // console.log('regions:', this.regions);
  });
};

Regions.prototype.handleDataReady = function(munros){
  const regionNames =
  this.getRegionNames(munros);
  this.modelRegions(munros, regionNames)
  console.log('info:', munros);
};

Regions.prototype.getRegionNames = function(munros){
  return munros
  .map(munro => munro.region)
  .filter((region, index, regions) =>
regions.indexOf(region) === index);
};

Regions.prototype.modelRegions = function(munros, regionNames){
  this.regions = regionNames.map((regionName)=>{
    return {
      name: regionName,
      munros:
      this.munrosByRegion(munros, regionName)
    };
  })
};

Regions.prototype.munrosByRegion = function(munros, region){
  return munros.filter(munro =>
  munro.region === region);
};

module.exports = Regions;
