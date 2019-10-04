// --------------------------CAROUSEL-------------------------- //

var item1 = document.querySelector('.item1');
var item2 = document.querySelector('.item2');
var item3 = document.querySelector('.item3');
var item4 = document.querySelector('.item4');

var bol1 = document.querySelector('.bol1');
var bol2 = document.querySelector('.bol2');
var bol3 = document.querySelector('.bol3');
var bol4 = document.querySelector('.bol4');

var counter = 1;


function heen() {
  counter++;
  //    console.log("counter: " + counter);
  if (counter == 1) {
    item1.classList.add('show');
    item1.classList.remove('hide');
    item2.classList.add('hide');
    item2.classList.remove('show');
    item3.classList.add('hide');
    item3.classList.remove('show');
    item4.classList.add('hide');
    item4.classList.remove('show');

    bol1.classList.add('active');
    bol2.classList.remove('active');
    bol3.classList.remove('active');
    bol4.classList.remove('active');
  } else if (counter == 2) {
    item2.classList.add('show');
    item2.classList.remove('hide');
    item1.classList.add('hide');
    item1.classList.remove('show');
    item3.classList.add('hide');
    item3.classList.remove('show');
    item4.classList.add('hide');
    item4.classList.remove('show');

    bol2.classList.add('active');
    bol1.classList.remove('active');
    bol3.classList.remove('active');
    bol4.classList.remove('active');
  } else if (counter == 3) {
    item3.classList.add('show');
    item3.classList.remove('hide');
    item4.classList.add('show');
    item4.classList.remove('hide');
    item1.classList.add('hide');
    item1.classList.remove('show');
    item2.classList.add('hide');
    item2.classList.remove('show');

    bol3.classList.add('active');
    bol4.classList.remove('active');
    bol1.classList.remove('active');
    bol2.classList.remove('active');

  } else if (counter == 4) {
    item4.classList.add('show');
    item4.classList.remove('hide');
    item1.classList.add('hide');
    item1.classList.remove('show');
    item2.classList.add('hide');
    item2.classList.remove('show');
    item3.classList.add('show');
    item3.classList.remove('hide');

    bol4.classList.add('active');
    bol1.classList.remove('active');
    bol2.classList.remove('active');
    bol3.classList.remove('active');
    counter = 0;
  }
}

// Bolletjes klikbaar //

function bol1_function() {
  item1.classList.remove('show');
  item1.classList.remove('hide');
  item2.classList.remove('show');
  item2.classList.remove('hide');
  item3.classList.remove('show');
  item3.classList.remove('hide');
  item4.classList.remove('show');
  item4.classList.remove('hide');

  item1.classList.add('show');
  item2.classList.add('hide');
  item3.classList.add('hide');
  item4.classList.add('hide');

  bol1.classList.add('active');
  bol2.classList.remove('active');
  bol3.classList.remove('active');
  bol4.classList.remove('active');
  counter = 1;
}


function bol2_function() {
  item1.classList.remove('show');
  item1.classList.remove('hide');
  item2.classList.remove('show');
  item2.classList.remove('hide');
  item3.classList.remove('show');
  item3.classList.remove('hide');
  item4.classList.remove('show');
  item4.classList.remove('hide');

  item1.classList.add('hide');
  item2.classList.add('show');
  item3.classList.add('hide');
  item4.classList.add('hide');

  bol1.classList.remove('active');
  bol2.classList.add('active');
  bol3.classList.remove('active');
  bol4.classList.remove('active');
  counter = 2;
}

function bol3_function() {
  item1.classList.remove('show');
  item1.classList.remove('hide');
  item2.classList.remove('show');
  item2.classList.remove('hide');
  item3.classList.remove('show');
  item3.classList.remove('hide');
  item4.classList.remove('show');
  item4.classList.remove('hide');

  item1.classList.add('hide');
  item2.classList.add('hide');
  item3.classList.add('show');
  item4.classList.add('hide');

  bol1.classList.remove('active');
  bol2.classList.remove('active');
  bol3.classList.add('active');
  bol4.classList.remove('active');
  counter = 3;
}

function bol4_function() {
  item1.classList.remove('show');
  item1.classList.remove('hide');
  item2.classList.remove('show');
  item2.classList.remove('hide');
  item3.classList.remove('show');
  item3.classList.remove('hide');
  item4.classList.remove('show');
  item4.classList.remove('hide');

  item1.classList.add('hide');
  item2.classList.add('hide');
  item3.classList.add('hide');
  item4.classList.add('show');

  bol1.classList.remove('active');
  bol2.classList.remove('active');
  bol3.classList.remove('active');
  bol4.classList.add('active');
  counter = 4;
};

bol1.addEventListener('click', bol1_function);
bol2.addEventListener('click', bol2_function);
bol3.addEventListener('click', bol3_function);
bol4.addEventListener('click', bol4_function);


// --------------------------AUTO SLIDE-------------------------- //

// var carousel = document.getElementsByClassName('carousel');
//
// function autoSlide() {
//   var x = document.getElementsByClassName('mySlides');
//
// counter++;
// if (counter) == 1) {
//   //iets met de x
//
//
//   setTimeout(carousel, 4000);
// }
// }




var slider = document.getElementById("myRange");
var output = document.getElementsById("leesTijd");
output.innerHTML = slider.value;


slider.oninput = function() {
  output.innerHTML = this.value;
}
