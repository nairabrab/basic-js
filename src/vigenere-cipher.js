const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
  if (! message && key) throw new Error;
  // let keySet = new Set(key);

  function template (m, k) {
    return m.split('').map((el,i) => (el >= 'a' && el <= 'z') ? k[i % k.length] : el).join('');
  }

  function encode(s,i) {
    return  (s >= 'a' && s <= 'z') 
    ? ((s.charCodeAt(i)+substring.charCodeAt(i)-2*'a'.charCodeAt(0))%26 + 'a'.charCodeAt(0))
    : ' '.charCodeAt(0);
  }
  // let substring = key;
  // while (substring.length < message.length) {substring += key};
  // substring = substring.slice(0, message.length);
  let substring = template(message.toLowerCase(), key);

  return String.fromCharCode(...message.split('').map((el,i) => encode(el,i)).join('')).toUpperCase();
  }

  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
