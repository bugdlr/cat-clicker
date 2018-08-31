
let names = ["cats"];

const green = new Cat('Green');
const blue = new Cat('Blue');
const kitty = new Cat('Kitty');


function Cat(name) {
  // add cat names to names array
  names.push(name);

  // set values
  this.name = name;
  this.clicks = 0;
  this.index = names.indexOf(name);
  this.picLocation = document.getElementById("cat" + this.index);
  this.counter = document.getElementById("counter" + this.index);
  this.item = document.getElementById("item" + this.index);
  this.nameId = document.getElementById("name" + this.index);

  // set attributes


  // attach click event for counter
  this.clickEvent = function(clicks, counter) {
    this.picLocation.addEventListener('click', function(){
      clicks++;
      counter.innerHTML = clicks;
    }, false);
  }

  // display cat's name on the list
  this.addToList = function addToList(name) {
    let el = document.createElement("li");
    el.innerHTML = name;
    document.getElementById('list').appendChild(el);
  }

  // pic slides when name on list is clicked
  this.showPic = function showPic(item, pic, nameId, name) {
    item.addEventListener('click', function(){
      pic.style.display = "block";
      nameId.innerHTML = name;
    })
  }

  this.clickEvent(this.clicks, this.counter);
  this.addToList(this.name);
  this.showPic(this.item, this.picLocation, this.nameId, this.name);
}


// connect pic to cat dynamically instead of in html
// get pics to slide in
