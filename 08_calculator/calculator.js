const add = function(m,n) {
	return m + n;
};

const subtract = function(m,n) {
	return m-n;
};

const sum = function(arr) {
  if(arr.length == 0){
    return 0
  }
	return arr.reduce((sum, item) => sum += item);
};

const multiply = function(arr) {
  if(arr.length == 0){
    return 0
  }
  return arr.reduce((product, item) => product *= item);
};

const power = function(m,n) {
	let p = 1
  let i = 0
  while(i < n){
    p *= m;
    i++;
  }
  return p;
};

const factorial = function(n) {
	let f = 1;
  if(n == 0 ){
    return f;
  }else{
    for(let i = n; i>1; i--){
      f *= n;
      n--;
    }
    return f;
  }
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