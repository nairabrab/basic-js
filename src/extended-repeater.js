const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  function repeat (str = '',sep = '' ,rep = 0) {
    str = str + '';
    sep = sep + '' || '';
   return (sep && rep) ? Array(rep).fill(str).join(sep) : str; 
  }


  let addition = repeat(options.addition, options.additionSeparator || '|', options.additionRepeatTimes);
  //if (options.additionRepeatTimes) addition = addition.repeat(options.additionRepeatTimes); 
  str = str + addition;
  return repeat(str, options.separator || '+', options.repeatTimes);

// let separator = options.separator || '+';
// if (options.additionSeparator) separator += options.additionSeparator;
// if (options.repeatTimes) str = Array(options.repeatTimes).fill(str).join(separator || '+')

// return str;

};
  