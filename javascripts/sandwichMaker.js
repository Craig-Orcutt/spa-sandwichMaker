'use strict';
require("./DOMinteraction");
let bread = require('./bread');
let total = 0;
let sandwich = {
    "bread" : [],
    "meat" : [],
    "cheese" : [],
    "condiments" : [],
    "veggies" : []
};

module.exports.addIngredient = function(id, value){
    sandwich[id].push(value);
    console.log(sandwich);
    total += bread.addBread(value);
    console.log(total);
};

module.exports.getTotal = function(){
    return total;
};

module.exports.getSandwich = function(){
    return sandwich;
};