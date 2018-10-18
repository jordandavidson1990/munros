const DetailView = function(container, munro){
  this.munrosContainer = container;
  this.munro = munro;
};

DetailView.prototype.render = function(){
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);
}

DetailView.prototype.createMunroHeading = function(){
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  if(!this.munro.name){
    name.textContent = "Misc";
  } else {
    name.textContent = this.munro.name;
  }
  return name;
};

// DetailView.prototype.populateList = function(list) {
//   this.munro.
// }

module.exports = DetailView
