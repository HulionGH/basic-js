import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let resultStr;
  let addedStr;
  let repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  let separator = options.separator || "+";
  let additionSeparator =
    options.additionSeparator === undefined ? "|" : options.additionSeparator;
  let addition = options.addition === undefined ? "" : options.addition;
  let additionRepeatTimes =
    options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;

  addedStr = (addition + separator)
    .repeat(additionRepeatTimes)
    .split(separator, additionRepeatTimes)
    .join(additionSeparator);

  resultStr = (str + addedStr + separator)
    .repeat(repeatTimes - 1)
    .split(separator)
    .join(separator);

  return resultStr + (str + addedStr);
}
