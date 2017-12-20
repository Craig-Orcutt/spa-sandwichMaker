'use strict';
let meatPrices = {
    "turkey" : 0.45,
    "ham" : 0.32,
    "bacon" : 0.55,
    "none" : 0
};
module.exports.getMeatPrice = (meatType) => {
    return meatPrices[meatType];
};