const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
    str = String(str);
    if (options) {
        if (!options.separator) {
            options.separator = '+'
        }
        if (!options.additionSeparator) {
            options.additionSeparator = '|'
        }
        let additionStr = '';
        if (options.addition !== undefined) {
            additionStr = String(options.addition);
            if (options.additionRepeatTimes) {
                let additionStrArr = []
                while (options.additionRepeatTimes > 0) {
                    additionStrArr.push(additionStr)
                    options.additionRepeatTimes -= 1
                }
                additionStr = additionStrArr.join(options.additionSeparator)
            }
        }

        let repeaterStringElement = str + additionStr
        let repeaterString = repeaterStringElement

        if (options.repeatTimes) {
            let strArr = []
            while (options.repeatTimes > 0) {
                strArr.push(repeaterStringElement)
                options.repeatTimes -= 1
            }
            repeaterString = strArr.join(options.separator)
        }

        return repeaterString
    }
    return str
}

module.exports = {
    repeater
};