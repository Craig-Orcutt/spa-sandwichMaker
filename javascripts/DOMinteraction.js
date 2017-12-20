'use strict';

let menu = document.getElementById('menu');
let submit = document.getElementById("submit");
let bread  = document.getElementById('bread');
let meat = document.getElementById('meat');
let cheese = document.getElementById('cheese');
let condiments = document.getElementById('condiments');
let veggies = document.getElementById('veggies');
let output = document.getElementById('output');
// required the sandwich maker module into dom module
let sandwichMaker = require("./sandwichMaker");


// EL for submit button
submit.addEventListener('click', function(){
    output.innerHTML = `${sandwichMaker.getTotal()} ${sandwichOutput(sandwichMaker.getSandwich())}`;
});
// When 'none' is selected, the other checkboxes are unchecked.
// if 'none' is selected and another option is then checked, 'none' needs to be unchecked
// if none is selected, then categories total is zeroed out.
menu.addEventListener('change', function(){
    sandwichMaker.addIngredient(event.target.closest('div').id, event.target.value);
});

let sandwichOutput = function (sandwichObject) {
    let sandwichString = "";
    for(let ingredient in sandwichObject){
        console.log(sandwichObject[ingredient]);
        for(let i = 0; i < sandwichObject[ingredient].length; i++){
            sandwichString += `${sandwichObject[ingredient][i]} `;
        }
    }
    return sandwichString;
};

