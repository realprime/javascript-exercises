const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sumall = 0;
  if (arr.length === 0){
    sumall = 0
  }
  else{
    arr.forEach((item) => sumall += item)
  }
  return sumall;
};

const multiply = function(arr) {
  let productall = 1;
  if (arr.length === 0){
    productall = 0
  }
  else{
    arr.forEach((item) => productall *= item)
  }
  return productall;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let result = 1;
  if (num === 0){
    result = 1;
  }
  else {
    for (let i = 1; i <= num; i++){
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
