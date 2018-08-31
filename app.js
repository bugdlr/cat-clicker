
let names = ["cats"];

const green = new Cat('Green');
const blue = new Cat('Blue');
const orange = new Cat('Orange')
const grumps = new Cat('Grumps');
const orb = new Cat('Orb');


function Cat(name) {
  // add cat names to names array
  names.push(name);

  // set values
  this.name = name;
  this.clicks = 0;
  this.index = names.indexOf(name);
  this.catNumber = "cat" + this.index;
  this.picSrc = `${this.catNumber}.jpg`;

  // set html
  let tree = document.createDocumentFragment();
  let div = document.createElement('div');
  div.setAttribute("id", "name" + this.index);
  div.setAttribute("class", "tile");
  div.appendChild(document.createTextNode(this.name));

  let pic = document.createElement('img');
  pic.setAttribute("src", this.picSrc);
  pic.setAttribute("alt", "kitty");
  pic.setAttribute("id", this.catNumber);

  let counterElement = document.createElement('p');
  counterElement.setAttribute("class", "counter");
  counterElement.setAttribute("id", "counter" + this.index);
  counterElement.appendChild(document.createTextNode(0));

  tree.appendChild(div);
  div.appendChild(pic);
  div.appendChild(counterElement);
  document.getElementById('cat-cards').appendChild(tree);

  // get DOM elements
  this.picLocation = document.getElementById("cat" + this.index);
  this.counter = document.getElementById("counter" + this.index);
  this.item = document.getElementById("item" + this.index);
  this.nameId = document.getElementById("name" + this.index);

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
    el.setAttribute("id", `item${this.index}`);
    el.innerHTML = name;
    document.getElementById('list').appendChild(el);
  }


  // pic slides when name on list is clicked
  this.showPic = function showPic(nameId) {
    document.getElementById("item" + this.index).addEventListener('click', function(){
      nameId.style.display = "block";
    })
  }

  this.clickEvent(this.clicks, this.counter);
  this.addToList(this.name);
  this.showPic(this.nameId);
}


// get pics to slide in, one at a time
