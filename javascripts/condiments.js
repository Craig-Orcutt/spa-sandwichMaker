'use strict';
let condPrices = {
    "ketchup" : 0.05,
    "mustard" : 0.10,
    "mayo" : 0.13,
    "none" : 0
};
module.exports.addCond = function (condType){
    return condPrices[condType];
};