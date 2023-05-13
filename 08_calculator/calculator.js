const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let result = 0;
	for (let x in a){
    result+=a[x];
  }
  return result;
};

const multiply = function(a) {
  let result = 1;
  for (let x in a){
    result*=a[x];
  }
  return result;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let result = 1;
	for (let i=a;i>0;i--){
    result=result*i;
  }
  return result;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

