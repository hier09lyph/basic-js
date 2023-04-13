const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let maxNum = 0
    let num = n.toString().split('')

    for (let i = 0; i < num.length; i++) {
        const remainingDigits = [...num.slice(0, i), ...num.slice(i + 1)];
        const curNum = Number(remainingDigits.join(''));
        if (curNum > maxNum) {
            maxNum = curNum;
        }

    }
    return maxNum


    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    deleteDigit
};