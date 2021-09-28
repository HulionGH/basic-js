import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  getLength() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  addLink(/* value */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  removeLink(/* position */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
};
/*
const chainMaker = {
  getLength() {
    return this.val.length;
  },
  addLink(value) {
    if (value === undefined) {
      return this;
    }
    this.val.push(value);
    return this;
  },

  removeLink(position) {
    if (position <= 0 || position > this.val.length) {
      this.val = [];
      throw "Error";
    }
    this.val.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.val = this.val.reverse();
    return this;
  },
  finishChain() {
    const str = this.val.map((v) => `( ${v} )`).join("~~");
    this.val = [];
    return str;
  },
};

*/
