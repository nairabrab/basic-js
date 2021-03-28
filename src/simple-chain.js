const CustomError = require("../extensions/custom-error");

const chainMaker = {
  s: '',
  //virgin: true,
  getLength() {
    return this.s.split('~~').length;
  },

  addLink(value) {
   // if (!this.virgin) this.s = '';
     this.s ? this.s += `~~( ${value} )` : this.s = '' + `( ${value} )`;
    return this;
  },

  removeLink(position) {
    if ( typeof position !== 'number' || position < 0) {
    //  this.virgin = false;
    this.s = '';
      throw new Error;}
    let arr = this.s.split('~~');
    arr.splice(position-1,1);
    this.s = arr.join(`~~`);
    return this;
  },

  reverseChain() {
    this.s = this.s.split('~~').reverse().join('~~');
    return this;
  },

  finishChain() {
    let s1 = this.s;
    this.s = '';
   // this.virgin = true;
    return s1;
  }
};

module.exports = chainMaker;
