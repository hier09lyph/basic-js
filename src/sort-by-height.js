const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let arrOfHeights = arr.filter(e => e > 0)
    console.log(arrOfHeights);
    let sortArrOfHeights = arrOfHeights.sort((a, b) => a - b)
    console.log(sortArrOfHeights);
    let sortArrOfHeightsIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = sortArrOfHeights[sortArrOfHeightsIndex]
            sortArrOfHeightsIndex += 1
        }
    }
    return arr
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
}

module.exports = {
    sortByHeight
};