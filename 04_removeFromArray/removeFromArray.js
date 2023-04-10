const removeFromArray = function(arr,...args) {
    //removes items belongs to args from arr.
    return arr.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;