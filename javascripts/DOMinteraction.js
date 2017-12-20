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
        sandwichMaker.clearCategoryTotal(div.id,checkedBoxes[i]);
        checkedBoxes[i].checked = false;
        console.log(checkedBoxes[i].value);
    }
}
menu.addEventListener('change', function(){
    let category = event.target.closest('div');
    let none = category.getElementsByClassName('none');
    if(event.target.value === 'none'){
        clearCheckboxes(category);
        // sandwichMaker.clearCategoryTotal(category);
    }
    else{
        none[0].checked = false;
    }
    if (!event.target.checked){
        sandwichMaker.removeIngredient(category.id, event.target.value);
    }
    // else if (event.target.checked){
    //     sandwichMaker.addIngredient(category.id, event.target.value);
    // }
    else if (event.target.checked){
        sandwichMaker.addIngredient(category.id, event.target.value);
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

