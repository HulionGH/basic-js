import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date === undefined || "") {
    return "Unable to determine the time of year!";
  }
  /* let month = date.getMonth();
  let timezone = date.getTimezoneOffset();

  if (typeof timezone !== "number") {
    throw new Error("Invalid date!");
  }
  if (typeof month !== "number") {
    throw new Error("Invalid date!");
  } */
  try {
    let month = date.getMonth();
    let timezone = date.getTimezoneOffset();

    switch (month) {
      case 0:
        return "winter";
      case 1:
        return "winter";
      case 2:
        return "spring";
      case 3:
        return "spring";
      case 4:
        return "spring";
      case 5:
        return "summer";
      case 6:
        return "summer";
      case 7:
        return "summer";
      case 8:
        return "autumn (fall)";
      case 9:
        return "autumn (fall)";
      case 10:
        return "autumn (fall)";
      case 11:
        return "winter";
      default:
        return "Unable to determine the time of year!";
    }
  } catch (e) {
    throw new Error("Invalid date!");
  }
}

/*
import { NotImplementedError } from '../extensions/index.js';

export default function getSeason(date) {
  throw new NotImplementedError('Not implemented');
}
*/
