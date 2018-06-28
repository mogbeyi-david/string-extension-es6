'use strict';

Object.assign(String.prototype, {
  hasVowels() {
    return /[AEIOUaeiou]/.test(this);
  }
});

Object.assign(String.prototype, {
  toUpper() {
    let output = '';
    for (let i = 0; i < this.length; i++) {
      output += String.fromCharCode(this.charCodeAt(i) - 32);
    }
    return output;
  }
});

Object.assign(String.prototype, {
  toLower() {
    let output = '';
    for (let i = 0; i < this.length; i++) {
      output += String.fromCharCode(this.charCodeAt(i) + 32);
    }
    return output;
  }
});

Object.assign(String.prototype, {
  ucFirst() {
    let output = '';
    output += this.charAt(0).toUpper();
    for (let i = 1; i < this.length; i++) {
      output += this.charAt(i);
    }
    return output;
  }
});

Object.assign(String.prototype, {
  isQuestion() {
    return /\?$/.test(this);
  }
});

Object.assign(String.prototype, {
  in() {
    return this.split(' ');
  }
});

Object.assign(String.prototype, {
  wordCount() {
    return this.in().length;
  }
});

Object.assign(String.prototype, {
  isCapitalLetter() {
    return /[A-Z]/.test(this);
  }
});

Object.assign(String.prototype, {
  isSmallLetter() {
    return /[a-z]/.test(this);
  }
});

Object.assign(String.prototype, {
  inverseCase() {
    let output = '';
    for (let i = 0; i < this.length; i++) {
      if (this.charAt(i).isCapitalLetter() === true) {
        output += this.charAt(i).toLower();
      } else {
        output += this.charAt(i).toUpper();
      }
    }
    return output;
  }
});

Object.assign(String.prototype, {
  alternatingCase() {
    let output = '';
    for (let i = 0; i < this.length; i++) {
      if (i % 2 !== 0 && this.charAt(i).isCapitalLetter() === false) {
        output += this.charAt(i).toUpper();
      } else if (i % 2 === 0 && this.charAt(i).isSmallLetter() === false) {
        output += this.charAt(i).toLower();
      } else {
        output += this.charAt(i);
      }
    }
    return output;
  }
});

Object.assign(String.prototype, {
  getMiddle() {
    let stringLength = this.length;
    if (stringLength % 2 === 0) {
      return '' + this.charAt((stringLength / 2) - 1) + this.charAt(stringLength / 2);
    } else {
      return this.charAt((stringLength - 1) / 2);
    }
  }
});

Object.assign(String.prototype, {
  numberWords() {
    let output = '';
    let association = {
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine'
    };
    for (let i = 0; i < this.length; i++) {
      output += association[this.charAt(i)] + (i === this.length - 1 ? '' : ' ');
    }
    return output;
  }
});

Object.assign(String.prototype, {
  isDigit() {
    return /^\d{1,1}$/.test(this);
  }
});

Object.assign(String.prototype, {
  reverseString() {
    return this.split('').reverse().join('');
  }
});

Object.assign(String.prototype, {
  toCurrency() {
    let output = '';
    let wholeValue = this.split('.')[0];
    let reversedWholeValue = wholeValue.reverseString();
    for (let i = 0; i < reversedWholeValue.length; i++) {
      if (i % 3 === 0 && (i !== 0)) {
        output += ',';
      }
      output += this.charAt(i);
    }
    return output + '.' + this.split('.')[1];
  }
});

Object.assign(String.prototype, {
  fromCurrency() {
    let output = '';
    let wholeValue = this.split('.')[0];
    let reversedWholeValue = wholeValue.reverseString();
    for (let i = 0; i < reversedWholeValue.length; i++) {
      if (this.charAt(i) === ',') {
        continue;
      }
      output += this.charAt(i);
    }
    return output + '.' + this.split('.')[1];
  }
});