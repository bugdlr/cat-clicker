let num1 = 0;
let num2 = 0;
const cat1 = document.getElementById('cat-1');
const cat2 = document.getElementById('cat-2');
const counter1 = document.getElementById('counter-1');
const counter2 = document.getElementById('counter-2');
const name1 = document.getElementById('name-1');
const name2 = document.getElementById('name-2');

cat1.addEventListener('click', function(){
  //the element has been clicked... do stuff here
  num1++;
  if (num1 == 1) {
    counter1.innerHTML = "I've been clicked " + num1 + " time!";
  } else {
    counter1.innerHTML = "I've been clicked " + num1 + " times!";
  }
}, false);

cat2.addEventListener('click', function(){
  //the element has been clicked... do stuff here
  num2++;
  if (num2 == 1) {
    counter2.innerHTML = "I've been clicked " + num2 + " time!";
  } else {
    counter2.innerHTML = "I've been clicked " + num2 + " times!";
  }
}, false);


name1.innerHTML = "Green";

name2.innerHTML = "Blue";
