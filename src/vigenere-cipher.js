const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(directFlag = true) {
    this.flag = directFlag;
  }

  encrypt(message, key) {

  function template (m, k) {
    let i = 0;
    return m.split('').map(el => (el >= 'a' && el <= 'z') ? k[ (i++) % k.length] : el).join('');
  }
  function encode(s,i) {
    return  (s[i] >= 'a' && s[i] <= 'z') 
    ? ((s.charCodeAt(i)+substring.charCodeAt(i)-2*'a'.charCodeAt(0))%26 + 'a'.charCodeAt(0))
    : s.charCodeAt(i);
  }

  if (! message && key) throw new Error;
  message = message.toLowerCase();
  key = key.toLowerCase();
  let substring = template(message, key);

  let result = String.fromCharCode(...message.split('').map((el,i) => encode(message,i))).toUpperCase();
  if (!this.flag) result = result.split('').reverse().join('');
  return result;
  }

  decrypt(encryptedMessage, key) {
    function template (m, k) {
      let i = 0;
      return m.split('').map(el => (el >= 'a' && el <= 'z') ? k[ (i++) % k.length] : el).join('');
    }
    function decode(s,i) {
      return  (s[i] >= 'a' && s[i] <= 'z') 
      ? ((s.charCodeAt(i)-substring.charCodeAt(i)+26)%26 + 'a'.charCodeAt(0))
      : s.charCodeAt(i);
    }

    if (! encryptedMessage && key) throw new Error;
    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.toLowerCase();

    let substring = template(encryptedMessage, key);

   
  let result = String.fromCharCode(...encryptedMessage.split('').map((el,i) => decode(encryptedMessage,i))).toUpperCase();
  if (!this.flag) result = result.split('').reverse().join('');
  return result;
 }
}

module.exports = VigenereCipheringMachine;
