const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

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
function dateSample(sampleActivity) {

  // Отношение активности
  let logActivityRatio = Math.log(MODERN_ACTIVITY / sampleActivity);

  // Коэффициент, связанный с периодом полураспада  (Math.LN2 => 0.693)
  let halfLifeCoefficient = Math.LN2 / HALF_LIFE_PERIOD;

  let age = Math.ceil(logActivityRatio / halfLifeCoefficient);

  if (typeof sampleActivity !== 'string'
    || isNaN(Number(sampleActivity))
    || sampleActivity > MODERN_ACTIVITY
    || sampleActivity <= 0
    ) {
    return false;
  }
  else {
    return age;
  }


}

module.exports = {
  dateSample
};
