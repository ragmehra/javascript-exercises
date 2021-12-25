const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  let total = array.reduce((final, num) => {
    return final + num;
  }, 0);

  return total;
};

const multiply = function(arr) {
  let result = arr.reduce( (multiplied, num) => {
    return multiplied * num;
  }, 1);

  return result;
};

const power = function(num1, num2) {
  return num1 ** num2;
	
};

const factorial = function(num) {
  if (num === 0) return 1;

  let result = num;

  for (let i = num -1; i > 0; i--) {
    result *= i;
  }
  console.log(result);
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
