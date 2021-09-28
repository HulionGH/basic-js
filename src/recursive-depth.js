import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor() {
    this.level = 1;
  }

  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    const hasArray = arr.some((a) => Array.isArray(a));
    if (hasArray) {
      this.level++;
      return this.calculateDepth(arr.flat());
    } else {
      const level = this.level;
      this.level = 1;
      return level;
    }
  }
}
