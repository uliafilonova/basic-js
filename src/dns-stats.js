const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let obj = {};

  domains.forEach(val => {

    let parts = val.split('.').reverse();
    let prop = '';

    while (parts.length > 0) {
      prop = `.${parts.join('.')}`;
      console.log(prop)

      if (obj[prop]) {
        obj[prop] += 1;
      }
      else obj[prop] = 1;

      parts.pop();
    }

  });

  return obj;
}

module.exports = {
  getDNSStats
};
