'use strict';
let menu = document.getElementById('menu');
let submit = document.getElementById("submit");
let bread  = document.getElementById('bread');
let meat = document.getElementById('meat');
let cheese = document.getElementById('cheese');
let condiments = document.getElementById('condiments');
let veggies = document.getElementById('veggies');


// EL for submit button
submit.addEventListener('click', function(){
    console.log('button clicked');
});

menu.addEventListener('change', function(){
    console.log(event.target.value);
    console.log(event.target.closest('div').id);
});

