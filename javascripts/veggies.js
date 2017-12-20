'use strict';
let vegPrices = {
    "peppers" : 0.10,
    "onions" : 0.15,
    "lettuce" : 0.12,
    "none" : 0
};
module.exports.addVeg = function (vegType){
    return vegPrices[vegType];
};