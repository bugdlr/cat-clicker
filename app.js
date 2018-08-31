let num1 = 0;
let num2 = 0;
const cat1 = document.getElementById('cat-1');
const cat2 = document.getElementById('cat-2');
const counter1 = document.getElementById('counter-1');
const counter2 = document.getElementById('counter-2');
const name1 = document.getElementById('name-1');
const name2 = document.getElementById('name-2');
let names = [];
const list = document.getElementsByClassName('list');
const li = document.querySelectorAll('li');

let green = new Cat('Green', 'cat-1');
let blue = new Cat('Blue', 'cat-2');
let kitty = new Cat('Kitty', 'cat-5');


function Cat(name, id) {
  console.log(this);
  this.name = name;
  this.clicks = 0;
  this.location = document.getElementById(id);
  this.counter = counter1;
  this.clickEvent = function() {
    this.location.addEventListener('click', function(){
      this.clicks++;
      counter1.innerHTML = this.clicks;
    }, false);
  }
  this.addToList = function addToList(name) {
    let el = document.createElement("li");
    el.id = name + "ID";
    el.innerHTML = name;
    document.getElementById('list').appendChild(el);
  }
  this.showPic = function showPic() {
    document.getElementById('item1').addEventListener('click', function(){
      document.getElementById('cat-1').style.display = "block";
    })
  }

  this.clickEvent();
  this.addToList(this.name);
  this.showPic();
}

// maybe take click event out of constructor function

// if item is clicked, update its clicks value and display that to the page

// show image on name click;



showPic();






//
//
// name1.innerHTML = "Green";
//
// name2.innerHTML = "Blue";
//
// function addNames() {
//   for ()
// }
