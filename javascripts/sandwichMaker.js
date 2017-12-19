'use strict';
require("./DOMinteraction");
let bread = require('./bread');
let total = 0;

module.exports.addIngredient = function(id, value){
    total += bread.addBread(value);
    console.log(total);
};

