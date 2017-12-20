'use strict';
let cheesePrices = {
    "american" : 0.23,
    "pepperjack" : 0.25,
    "munster" : 0.35,
    "none" : 0
};
module.exports.addCheese = function (cheeseType){
    return cheesePrices[cheeseType];
};