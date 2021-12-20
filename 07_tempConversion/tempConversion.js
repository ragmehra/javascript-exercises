const ftoc = function(num) {
  num = (num - 32) * (5/9);
  num = Math.round(num * 10) / 10;
  return num;

};

const ctof = function(num) {
  num = num * (9/5) + 32;
  num = Math.round(num * 10) / 10;
  return num;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
