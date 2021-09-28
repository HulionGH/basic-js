import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  let indexDel;
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length == 0) {
    return [];
  }
  let resultArr = arr.slice();
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] == "--discard-next") {
      if (i == resultArr.length - 1) {
        resultArr.splice(i, 1);
      } else {
        resultArr.splice(i, 2);
        indexDel = i;
      }
      i = i - 1;
    } else if (resultArr[i] == "--discard-prev") {
      if (i == 0) {
        resultArr.splice(i, 1);
      } else {
        if (i == indexDel) {
          resultArr.splice(i, 1);
          indexDel = null;
        } else {
          resultArr.splice(i - 1, 2);
        }
      }
      i = i - 1;
    } else if (resultArr[i] == "--double-next") {
      if (i == resultArr.length - 1) {
        resultArr.splice(i, 1);
      } else {
        resultArr.splice(i, 1, resultArr[i + 1]);
      }
    } else if (resultArr[i] == "--double-prev") {
      if (i == 0) {
        resultArr.splice(i, 1);
      } else {
        if (i == indexDel) {
          resultArr.splice(i, 1);
          indexDel = null;
        } else {
          resultArr.splice(i, 1, resultArr[i - 1]);
        }
      }
    }
  }
  return resultArr;
}
