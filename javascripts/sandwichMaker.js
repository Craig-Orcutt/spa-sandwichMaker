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

module.exports.addIngredient = function (id , value){
    sandwich[id].push(value);
    switch(id){
        case "bread":
        total +=bread.addBread(value);
        break;
        case "meat":
        total += meat.addMeat(value);
        break;
        case "cheese":
        total += cheese.addCheese(value);
        break;
        case "veggies" :
        total += veggie.addVeg(value);
        break;
        case "condiments":
        total +=condiment.addCond(value);
        }
        return total;
};

module.exports.getTotal = function(){
    return total;
};

module.exports.getSandwich = function(){
    return sandwich;
};