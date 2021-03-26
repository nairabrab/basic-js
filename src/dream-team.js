const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
 return members.filter(el => typeof el === 'string')
 .map(el => el.toUpperCase().replace(/ /g,''))
 .map(el => el[0])
 .sort()
 .join('')
 ||false;
};
