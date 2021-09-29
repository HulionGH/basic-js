import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  getLength() {
    return this.val.length;
  },
  addLink(value) {
    if (value === undefined) {
      return this;
    }
    if (!this.val) {
      this.val = [];
    }
    this.val.push(value);
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position <= 0 ||
      position > this.val.length
    ) {
      this.val = [];
      throw { message: "You can't remove incorrect link!" };
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
