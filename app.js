const green = new Cat('Green');
const blue = new Cat('Blue');
const orange = new Cat('Orange')
const grumps = new Cat('Grumps');
const ninja = new Cat('Ninja');


function Cat(name) {

  // set values
  this.name = name;
  this.clicks = 0;
  this.picSrc = `${this.name}.jpg`;

  // set html
  let tree = document.createDocumentFragment();
  let div = document.createElement('div');
  div.setAttribute("id", "name-" + this.name);
  div.setAttribute("class", "tile");
  div.setAttribute("class", "hiding");
  div.appendChild(document.createTextNode(this.name));

  let pic = document.createElement('img');
  pic.setAttribute("src", this.picSrc);
  pic.setAttribute("alt", "kitty");
  pic.setAttribute("id", `pic-${this.name}` );

  let counterElement = document.createElement('p');
  counterElement.setAttribute("class", "counter");
  counterElement.setAttribute("id", `counter-${this.name}`);
  counterElement.appendChild(document.createTextNode(0));

  tree.appendChild(div);
  div.appendChild(pic);
  div.appendChild(counterElement);
  document.getElementById('cat-cards').appendChild(tree);

  // get DOM elements
  this.picLocation = document.getElementById("pic-" + this.name);
  this.counter = document.getElementById("counter-" + this.name);
  this.item = document.getElementById("item-" + this.name);
  this.nameId = document.getElementById("name-" + this.name);

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
    el.setAttribute("id", `item-${this.name}`);
    el.innerHTML = name;
    document.getElementById('list').appendChild(el);
  }

  // pic slides when name on list is clicked
  this.showPic = function showPic(nameId) {
    document.getElementById("item-" + this.name).addEventListener('click', function(){
      if (nameId.classList.contains("hiding")) {
        nameId.classList.toggle("slidein");
      } else {
      nameId.classList.toggle("hiding");
      }
    })
  }

  this.clickEvent(this.clicks, this.counter);
  this.addToList(this.name);
  this.showPic(this.nameId);
}


// get pics to slide in one at a time
