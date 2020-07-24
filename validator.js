'use strict';

const {result, isNumber} = require('lodash');

const warning = `\n\tOnly correct formatted Roman numerals are supported:\n`;
const romanOrderArray = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const numRomansFiveDict = {D: 500, L: 50, V: 5};
const numRomansDict = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/* 
  Sólo se contemplan números entre el 1 y el 3999:
  - ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  <-- Los símbolos I, X, C y M se pueden repetir hasta tres veces. -->
  <-- Los símbolos V, L y D no pueden repetirse. -->
  <-- Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor. -->
  
    - Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.
    - Los símbolos I, X y C se restan si están a la izquierda de otro mayor y
      solamente pueden anteponerse a los dos símbolos que les siguen en la sucesión.
        - I se resta de V y X
        - X se resta de L y C
        - C se resta de D y M
*/

function validateRomanNum(romanNum) {
  let res = 0;
  let pos = 0;
  let trinomial = [];
  const distance = 2;
  let repetitions = 3;

  while (pos < romanNum.length) {
    let actualPosition = romanNum[pos];
    // Los símbolos I, X, C y M se pueden repetir hasta tres veces.
    if (romanNum[pos] === romanNum[pos + 1]) {
      repetitions -= 1;
    } else {
      repetitions = 3;
    }

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
        console.log(romanOrderArray.indexOf(trinomial[0]) % 2 !== 0);
        return warning;
      }

      // MMMCMXCIX
      if (
        romanOrderArray.indexOf(trinomial[0]) < romanOrderArray.indexOf(trinomial[1]) &&
        romanOrderArray.indexOf(trinomial[1]) === romanOrderArray.indexOf(trinomial[2])
      ) {
        return warning;
      }
      if (
        trinomial[0] === trinomial[2] &&
        romanOrderArray.indexOf(trinomial[0]) % 2 === 0 &&
        romanOrderArray.indexOf(trinomial[1]) % 2 !== 0
      ) {
        return warning;
      }
      if (
        trinomial[0] === trinomial[1] &&
        romanOrderArray.indexOf(trinomial[0]) < romanOrderArray.indexOf(trinomial[2])
      ) {
        return warning;
      }
    }

    if (repetitions > 0) {
      // Los símbolos V, L y D no pueden repetirse.
      if (romanNum.includes('VV') || romanNum.includes('LL') || romanNum.includes('DD')) {
        return warning;
      } else if (
        // Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.
        numRomansDict[romanNum[pos]] < numRomansDict[romanNum[pos + 1]] &&
        romanNum[pos] in numRomansFiveDict
      ) {
        return warning;
      }
    } else {
      return warning + `\t\t Change this number -->${romanNum}\n`;
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
          return warning;
        }
        if (romanOrderArray.indexOf(next) - romanOrderArray.indexOf(actualPosition) > 2) {
          return warning;
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
    return warning;
  }
  return res;
}

console.log(validateRomanNum('javi'));

typeof isNumber;
