'use strict';
let breadCost = 0;
let breadPrices = {
    "white" : 0.19,
    "wheat" : 0.25,
    "rye" : 0.30,
    "none" : 0
};

// module.exports.breadTotal = () => breadCost;

// module.exports.addBread = function (breadType){
//     breadCost += breadPrices[breadType];
//     return breadCost;
// };

// module.exports.removeBread = function(breadType){
//     breadCost -= breadPrices[breadType];
//     return breadCost;
// };

module.exports.getBreadPrice = (breadType) => {
    return breadPrices[breadType];
};