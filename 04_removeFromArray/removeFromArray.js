
const removeFromArray = function(array, ...value) {
     return result = array.filter(x => !value.includes(x))

};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));


// Do not edit below this line
module.exports = removeFromArray;


