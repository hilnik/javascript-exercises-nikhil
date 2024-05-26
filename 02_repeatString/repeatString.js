const repeatString = function(string, num) {
let result = [];
if (num<0) {return 'ERROR'} else{
for (let x = 1; x <= num; x++){
    result += string;
}}
return(result.toString());
};

// Do not edit below this line
module.exports = repeatString;
