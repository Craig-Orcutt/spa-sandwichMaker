'use strict';
let cheesePrices = {
    "american" : 0.23,
    "pepper-jack" : 0.25,
    "munster" : 0.35,
    "none" : 0
};
module.exports.getCheesePrice = (cheeseType) => {
    return cheesePrices[cheeseType];
};