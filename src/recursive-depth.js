const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, d = 1) {
  return Math.max(d, ...(arr.filter(el => Array.isArray(el)).map(el => calculateDepth(el, d+1))));
  }
};