const { NotImplementedError } = require('../extensions/index.js');

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
// class DepthCalculator {
//   sum = 1;
//   res = [];
//   calculateDepth(arr) {
//     Object.entries(arr).forEach(val => {
//       if (typeof val === "object") {
//         this.calculateDepth(val)
//         this.sum += 1
//         res.push(sum)
//       }
//     })
//     return this.res;

//   }
// }


// class DepthCalculator {
//   sum = 1;
//   calculateDepth(arr) {

//     if (typeof (arr) === 'object') {
//       return this.sum + Math.max(0, ...arr.map(this.calculateDepth.bind(this)))
//     }
//     else return 0
//   }
// }


class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let sum = 0;
    arr.forEach(val => {
      let depth = this.calculateDepth(val);
      sum = Math.max(sum, depth);
    })
    return sum + 1;
  }
}
module.exports = {
  DepthCalculator
};