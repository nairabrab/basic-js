const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = { turns: 0, seconds: 0 };
  let cash = [1,3];
  // function movesPerIteration (n) {
  //   return cash[n-1] ? cash[n-1] : 1 + 2 * movesPerIteration(n-1);
  // }
  for (let i = 3; i < 50; i++) {
    cash[i-1] = 2*cash[i-2] + 1;
  }
  result.turns = cash[disksNumber-1];
  //result.turns += (disksNumber - 2) + 1 + (disksNumber - 2) + 1 + (disksNumber - 2) + 1 + (disksNumber - 2);
  result.seconds += Math.floor(result.turns * 3600 / turnsSpeed);
  return result;
};
