'use strict';
require("./DOMinteraction");
let bread = require('./bread');
let meat = require('./meat');
let cheese = require('./cheese');
let condiment = require('./condiments');
let veggie = require('./veggies');
let total = 0;
let sandwich = {
    "bread" : [],
    "meat" : [],
    "cheese" : [],
    "condiments" : [],
    "veggies" : []
};
// figure out how to make multiple category calls depending on id 
// module.exports.addIngredient = function (id, value){
//     if (id ==="bread") {
//         sandwich[id].push(value);
//         total +=bread.addBread(value);
//     } if (id ==="cheese") {
//         sandwich[id].push(value);
//         total += cheese.addCheese(value);
//     } if (id==="condiments") {
//         sandwich[id].push(value);
//         total +=condiment.addCond(value);
//     } if (id==="meat") {
//         sandwich[id].push(value);
//         total += meat.addMeat(value);
//     } if (id==="veggies") {
//         sandwich[id].push(value);
//         total += veggie.addVeg(value);
//     }
//     console.log("total", total);
//      return total;
// };

// Switch Statement used insted of 'if statement'
module.exports.addIngredient = function (id , value){
    sandwich[id].push(value);
    switch(id){
        case "bread":
        total += bread.getBreadPrice(value);
        break;
        case "meat":
        total += meat.getMeatPrice(value);
        break;
        case "cheese":
        total += cheese.getCheesePrice(value);
        break;
        case "veggies" :
        total += veggie.getVeggiePrice(value);
        break;
        case "condiments":
        total +=condiment.getCondimentPrice(value);
        }
        return total.toFixed(2);
};
module.exports.removeIngredient = (id, value) => {
    sandwich[id].splice(sandwich[id].indexOf(value), 1);
    switch(id){
        case "bread":
        total -=bread.getBreadPrice(value);
        break;
        case "meat":
        total -= meat.getMeatPrice(value);
        break;
        case "cheese":
        total -= cheese.getCheesePrice(value);
        break;
        case "veggies" :
        total -= veggie.getVeggiePrice(value);
        break;
        case "condiments":
        total -=condiment.getCondimentPrice(value);
    }
    return total.toFixed(2);
};
// THIS IS A GETTER
module.exports.getTotal = function(){
    return total.toFixed(2);
};

module.exports.getSandwich = function(){
    return sandwich;
};

module.exports.clearCategoryTotal = (id ,ingredient) => {
        if (ingredient.checked){
            switch (id){
            case "bread":
            total -= bread.getBreadPrice(ingredient.value).toFixed(2);
            break;
            case "meat":
            total -= meat.getMeatPrice(ingredient.value).toFixed(2);
            break;
            case "cheese":
            total -= cheese.getCheesePrice(ingredient.value).toFixed(2);
            break;
            case "condiment":
            total -= condiment.getCondimentPrice(ingredient.value).toFixed(2);
            break;
            case "veggie":
            total -= veggie.getVeggiePrice(ingredient.value).toFixed(2);
            break;
        }
        }
    };