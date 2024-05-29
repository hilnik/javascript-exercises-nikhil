
const sumAll = function(num1, num2) {
    sum = 0; 
    if (typeof(num1)== typeof(1) && typeof(num2)== typeof(1) && num1 >= 0 && num2 >= 0 ){
        if(num1<num2){
            do{
                sum += num1;
                num1++
            } while (num1 != num2+1)
        }else{
            do{
                sum += num2;
                ++num2
            } while (num2 != num1+1)  
        }
    } else {
    return "ERROR"}
return sum;
};

console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;
