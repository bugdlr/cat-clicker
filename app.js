// const green = new Cat('Green');
// const blue = new Cat('Blue');
// const orange = new Cat('Orange')
// const grumps = new Cat('Grumps');
// const ninja = new Cat('Ninja');
//
//
// function Cat(name) {
//
//   // set values
//   this.name = name;
//   this.clicks = 0;
//   this.picSrc = `${this.name}.jpg`;
//
//   // set html
//   let tree = document.createDocumentFragment();
//   let div = document.createElement('div');
//   div.setAttribute("id", "name-" + this.name);
//   div.setAttribute("class", "tile");
//   div.setAttribute("class", "hiding");
//   div.appendChild(document.createTextNode(this.name));
//
//   let pic = document.createElement('img');
//   pic.setAttribute("src", this.picSrc);
//   pic.setAttribute("alt", "kitty");
//   pic.setAttribute("id", `pic-${this.name}` );
//
//   let counterElement = document.createElement('p');
//   counterElement.setAttribute("class", "counter");
//   counterElement.setAttribute("id", `counter-${this.name}`);
//   counterElement.appendChild(document.createTextNode(0));
//
//   tree.appendChild(div);
//   div.appendChild(pic);
//   div.appendChild(counterElement);
//   document.getElementById('cat-cards').appendChild(tree);
//
//   // get DOM elements
//   this.picLocation = document.getElementById("pic-" + this.name);
//   this.counter = document.getElementById("counter-" + this.name);
//   this.item = document.getElementById("item-" + this.name);
//   this.nameId = document.getElementById("name-" + this.name);
//
//   // attach click event for counter
//   this.clickEvent = function(clicks, counter) {
//     this.picLocation.addEventListener('click', function(){
//       clicks++;
//       counter.innerHTML = clicks;
//     }, false);
//   }
//
//   // display cat's name on the list
//   this.addToList = function addToList(name) {
//     let el = document.createElement("li");
//     el.setAttribute("id", `item-${this.name}`);
//     el.innerHTML = name;
//     document.getElementById('list').appendChild(el);
//   }
//
//   // pic slides when name on list is clicked
//   this.showPic = function showPic(nameId) {
//     document.getElementById("item-" + this.name).addEventListener('click', function(){
//       let listEls = Array.from(document.getElementsByClassName("hiding"));
//       listEls.forEach (element => {
//         element.classList.remove('slidein');
//       })
//       nameId.classList.toggle("slidein");
//     })
//   }
//
//   this.clickEvent(this.clicks, this.counter);
//   this.addToList(this.name);
//   this.showPic(this.nameId);
// }






let model = {
  currentCat: null,
  cats: [
    {
      clickCount : 0,
      name : 'Green',
      imgSrc : 'Green.jpg',
      imgAttribution : 'google'
    },
    {
      clickCount : 0,
      name : 'Blue',
      imgSrc : 'Blue.jpg',
      imgAttribution : 'google'
    },
    {
      clickCount : 0,
      name : 'Orange',
      imgSrc : 'Orange.jpg',
      imgAttribution : 'google'
    },
    {
      clickCount : 0,
      name : 'Grumps',
      imgSrc : 'Grumps.jpg',
      imgAttribution : 'google'
    },
    {
      clickCount : 0,
      name : 'Ninja',
      imgSrc : 'Ninja.jpg',
      imgAttribution : 'google'
    },
  ],
};

let octopus = {

    init: function() {
      // set current cat to first one on list
      model.currentCat = model.cats[0];

      //tell views to initialize
      catListView.init();
      catView.init();
    },

    getCurrentCat: function() {
      return model.currentCat;
    },

    getCats: function() {
      return model.cats;
    },

    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },

    incrementCounter: function () {
      model.currentCat.clickCount++;
      catView.render();
    }
};


let catView = {

    init: function() {
      // store pointers to DOM elements
      this.catElem = document.getElementById('cat');
      this.catNameElem = document.getElementById('cat-name');
      this.catImageElem = document.getElementById('cat-img');
      this.countElem = document.getElementById('cat-count');

      // increment the current cat's counter when clicked
      this.catImageElem.addEventListener('click', function(e) {
        octopus.incrementCounter();
      });

      // render this view (update DOM element values)
      this.render();
    },

  render: function() {
    // update DOM elements with values from the current cat
    let currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }
};

let catListView = {
    init: function() {
      // store pointers to DOM elements
      this.catListElem = document.getElementById('cat-list');

      // render this view (update DOM element values)
      this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

octopus.init();
