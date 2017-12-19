'use strict';

let menu = document.getElementById('menu');
let submit = document.getElementById("submit");
let bread  = document.getElementById('bread');
let meat = document.getElementById('meat');
let cheese = document.getElementById('cheese');
let condiments = document.getElementById('condiments');
let veggies = document.getElementById('veggies');
// required the sandwich maker module into dom module
let sandwichMaker = require("./sandwichMaker");


// EL for submit button
submit.addEventListener('click', function(){
    console.log('button clicked');
});

menu.addEventListener('change', function(){
    sandwichMaker.addIngredient(event.target.closest('div').id, event.target.value);
});



