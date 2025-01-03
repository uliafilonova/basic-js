const { NotImplementedError } = require('../extensions/index.js');

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

function getSeason(date) {
  if (date === null || date === undefined) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  }
  catch (error) {
    throw new Error('Invalid date!');
  }
  let season = date.getMonth();
  if ([11, 0, 1].includes(season)) {
    return 'winter';
  };
  if ([2, 3, 4].includes(season)) {
    return 'spring';
  };
  if ([5, 6, 7].includes(season)) {
    return 'summer';
  };
  if ([8, 9, 10].includes(season)) {
    return 'autumn';
  };

}

module.exports = {
  getSeason
};
