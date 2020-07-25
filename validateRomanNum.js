'use strict';

// Javascript Arabic numeral converter to Roman

const {numRomansDict, numRomansFiveDict, romanOrderArray} = require('./utils');

function validateRomanNum(romanNum) {
  const warning = `\tOnly correct formatted Roman numerals are supported, change the string; `;
  let res = 0;
  let pos = 0;
  let trinomial = [];
  const distance = 2;
  let repetitions = 3;

  while (pos < romanNum.length) {
    let actualPosition = romanNum[pos];
    // The symbols I, X, C and M can be repeated up to three times.
    if (romanNum[pos] === romanNum[pos + 1]) {
      repetitions -= 1;
    } else {
      repetitions = 3;
    }

    // Array comparator
    if (pos > 2) {
      trinomial[0] = trinomial[1];
      trinomial[1] = trinomial[2];
      trinomial[2] = actualPosition;
    } else {
      trinomial[pos % 3] = actualPosition;
    }

    if (pos >= 2) {
      //Check valid number
      if (
        trinomial[0] === trinomial[2] &&
        romanOrderArray.indexOf(trinomial[0]) % 2 !== 0
      ) {
        return warning + romanNum;
      }

      if (
        romanOrderArray.indexOf(trinomial[0]) < romanOrderArray.indexOf(trinomial[1]) &&
        romanOrderArray.indexOf(trinomial[1]) === romanOrderArray.indexOf(trinomial[2])
      ) {
        return warning + romanNum;
      }

      if (
        trinomial[0] === trinomial[2] &&
        romanOrderArray.indexOf(trinomial[0]) % 2 === 0 &&
        romanOrderArray.indexOf(trinomial[1]) % 2 !== 0
      ) {
        return warning + romanNum;
      }

      if (
        trinomial[0] === trinomial[1] &&
        romanOrderArray.indexOf(trinomial[0]) < romanOrderArray.indexOf(trinomial[2])
      ) {
        return warning + romanNum;
      }
    }

    if (repetitions > 0) {
      // The symbols V, L and D cannot be repeated.
      if (romanNum.includes('VV') || romanNum.includes('LL') || romanNum.includes('DD')) {
        return warning + romanNum;
      } else if (
        // The symbols V, L and D cannot be placed to the left of another bigger one.
        numRomansDict[romanNum[pos]] < numRomansDict[romanNum[pos + 1]] &&
        romanNum[pos] in numRomansFiveDict
      ) {
        return warning + romanNum;
      }
    } else {
      return warning + romanNum;
    }

    let valPos = numRomansDict[actualPosition];

    if (pos + 1 < romanNum.length) {
      let next = romanNum[pos + 1];
      let nextValue = numRomansDict[next];

      //Add
      if (valPos >= nextValue) {
        res += valPos;
      } else {
        if (actualPosition in numRomansFiveDict) {
          return warning + romanNum;
        }
        if (
          romanOrderArray.indexOf(next) - romanOrderArray.indexOf(actualPosition) >
          distance
        ) {
          return warning + romanNum;
        }
        //Subtract
        res -= valPos;
      }
    } else {
      res += valPos;
    }

    pos += 1;
  }

  if (res === 0 || isNaN(res)) {
    return warning + romanNum;
  }
  return res;
}

module.exports = {
  validateRomanNum,
};
