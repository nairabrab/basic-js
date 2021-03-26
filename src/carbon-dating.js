const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity = false) {
    if (!sampleActivity || typeof sampleActivity !== 'string' || sampleActivity > 15 || sampleActivity <= 0) return false;
  const rate = (Math.LN2 / HALF_LIFE_PERIOD);
  return Math.ceil(Math.abs(Math.log(sampleActivity / MODERN_ACTIVITY) / rate))||false;
};
