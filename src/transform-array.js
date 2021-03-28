const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 if (!Array.isArray(arr)) throw new Error;
 const result = [];
 let l = arr.length;
 function doubleNext (ar,ind) {
   if (ar[ind] !== '' && ind< l-1) ar[ind] = arr[ind+1];
 }
 function doublePrev (ar,ind) {
  if (ar[ind] !== '' && ind > 0) ar[ind] = ar[ind-1];
 }
 function discardNext (ar,ind) {
  if (ar[ind] !== '' && ind< l-1) ar[ind+1] = '';
 }
 function discardPrev (ar, ind) {
  if (ind > 0) ar[ind-1] = '';
 }
 function transArray(el,i) {
 switch(el) {
   case '--double-next': doubleNext(result,i); break;
   case '--double-prev': doublePrev(result,i); break;
   case '--discard-next': discardNext(result,i); break;
   case '--discard-prev': discardPrev(result,i); break;
   default: if (result[i] !== '') result[i] = el;
   }
  }
arr.map(transArray);
return result.filter(el => el !== '');
};
