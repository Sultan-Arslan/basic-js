class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    return this._process(message, key, true);
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    return this._process(message, key, false);
  }

  _process(message, key, encrypting) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let j = 0; // индекс ключа

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // только A-Z
        const keyCode = key.charCodeAt(j % key.length) - 65;
        const m = charCode - 65;
        const c = encrypting
          ? (m + keyCode) % 26
          : (m - keyCode + 26) % 26;
        result += String.fromCharCode(c + 65);
        j++;
      } else {
        result += message[i];
      }
    }

    if (!this.direct) result = result.split('').reverse().join('');
    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
