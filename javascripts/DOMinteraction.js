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
function clearCheckboxes(div){
    let checkedBoxes = div.getElementsByClassName(div.id);
    for(let i = 0; i < checkedBoxes.length; i++){
        checkedBoxes[i].checked = false;
    }
}
menu.addEventListener('change', function(){
    let category = event.target.closest('div');
    sandwichMaker.addIngredient(category.id, event.target.value);
    if(event.target.value === 'none'){
        console.log("none was checked");
        clearCheckboxes(category);
    }
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

