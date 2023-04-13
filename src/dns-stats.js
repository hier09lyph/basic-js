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
    const stats = {};
    for (const domain of domains) {
        const parts = domain.split('.').reverse();
        let prevPart = '';
        for (const part of parts) {
            const currPart = `${prevPart}.${part}`;
            stats[currPart] = (stats[currPart] || 0) + 1;
            prevPart = currPart;
        }
    }
    return stats;
}

module.exports = {
    getDNSStats
};