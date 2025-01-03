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
  }

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  alphabetObject = [...this.alphabet].reduce((acc, val, index) => {
    acc[val] = index;
    return acc
  }, {});



  setCipher(message, key, encrypt) {

    key = (key.repeat(message.length).slice(0, message.length)).toUpperCase();

    let resultString = '';

    [...message.toUpperCase()].forEach((val, i) => {
      if (!this.alphabet.includes(val)) {
        key = `${key.slice(0, i)} ${key.slice(i)}`;
        resultString += val;
      }
      else {
        if (encrypt) {
          resultString += this.alphabet[(this.alphabetObject[val] + this.alphabetObject[key[i]]) % 26];
        }
        else {
          resultString += this.alphabet[(this.alphabetObject[val] - this.alphabetObject[key[i]] + 26) % 26];
        }

      }
    })

    return this.direct ? resultString : resultString.split('').reverse().join('');

  }

  encrypt(message, key) {
    if (!arguments[0] || !arguments[1]) {
      throw new Error('Incorrect arguments!');
    }
    return this.setCipher(message, key, true);
  }

  decrypt(message, key) {
    if (!arguments[0] || !arguments[1]) {
      throw new Error('Incorrect arguments!');
    }
    return this.setCipher(message, key, false);
  }

}











module.exports = {
  VigenereCipheringMachine
};
