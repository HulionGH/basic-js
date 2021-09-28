import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(a) {
  const parsedA = parseFloat(a);
  if (
    typeof a !== "string" ||
    isNaN(parsedA) ||
    !a ||
    parsedA > 15 ||
    parsedA < 0
  ) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;

  const time = getBaseLog(Math.E, MODERN_ACTIVITY / parsedA) / k;
  return time == Infinity ? false : Math.ceil(time);
}
