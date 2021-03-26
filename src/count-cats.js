const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach(el => 
    el.forEach(elel => {
      if (elel === '^^') cats++;
    }));
  return cats;
};
