const DetailView = function(container, region){
  this.regionsContainer = container;
  this.region = region;
};

DetailView.prototype.render = function(){
  const regionContainer = document.createElement('div');
  regionContainer.classList.add('regions');

  const name = this.createRegionHeading();
  regionContainer.appendChild(name);

  const munrosList = this.createMunrosList();
  regionContainer.appendChild(munrosList)

  this.regionsContainer.appendChild(regionContainer);
}

DetailView.prototype.createRegionHeading = function(){
  const name = document.createElement('h2');
  name.classList.add('region-name');
  if(!this.region.name){
    name.textContent = "Misc";
  } else {
    name.textContent = this.region.name;
  }
  return name;
};

DetailView.prototype.createMunrosList = function(){
  const munrosList = document.createElement('ul');
  munrosList.classList.add('munros');
  this.populateList(munrosList);
  return munrosList;
};

DetailView.prototype.populateList = function(list){
  this.region.munros.forEach((munro)=>{
    const munroListItem = document.createElement('li');
    munroListItem.textContent = munro.name;
    list.appendChild(munroListItem);
  });
};

// DetailView.prototype.populateList = function(list) {
//   this.munro.
// }

module.exports = DetailView
