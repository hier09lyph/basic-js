const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!');
        }

        message = message.toUpperCase();
        key = key.toUpperCase();

        let keyIndex = 0;
        let encryptedMessage = '';

        for (let i = 0; i < message.length; i++) {
            const messageChar = message[i];

            // если нет такого символа в алфавите - добаляем его в начало encryptedMessage
            if (this.alphabet.indexOf(messageChar) === -1) {
                encryptedMessage += messageChar;
                continue;
            }

            // определяем символ ключа на текущей итерации шифрования, keyIndex % key.length срабатывает если key.length < message.length
            const keyChar = key[keyIndex % key.length];

            // определяем индекс символа ключа в алфавите
            const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);

            // определяем индекс символа сообщения в алфавите
            const messageIndex = this.alphabet.indexOf(messageChar);

            // определяем новый индекс символа после применения алгоритма Виженера
            const newIndex = (messageIndex + keyIndexInAlphabet) % this.alphabet.length;

            encryptedMessage += this.alphabet[newIndex];

            keyIndex++;
        }

        if (!this.direct) {
            encryptedMessage = encryptedMessage.split('').reverse().join('');
        }

        return encryptedMessage;
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Incorrect arguments!');
        }

        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();

        let keyIndex = 0;
        let decryptedMessage = '';

        for (let i = 0; i < encryptedMessage.length; i++) {
            const encryptedChar = encryptedMessage[i];

            if (this.alphabet.indexOf(encryptedChar) === -1) {
                decryptedMessage += encryptedChar;
                continue;
            }

            const keyChar = key[keyIndex % key.length];
            const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);
            const encryptedIndex = this.alphabet.indexOf(encryptedChar);

            let newIndex = (encryptedIndex - keyIndexInAlphabet) % this.alphabet.length;

            if (newIndex < 0) {
                newIndex += this.alphabet.length;
            }

            decryptedMessage += this.alphabet[newIndex];

            keyIndex++;
        }

        if (!this.direct) {
            decryptedMessage = decryptedMessage.split('').reverse().join('');
        }

        return decryptedMessage;
    }
}


module.exports = {
    VigenereCipheringMachine
};