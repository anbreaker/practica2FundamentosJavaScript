'use strict';

// Javascript Arabic numeral converter to Roman

// Read data from file
const fs = require('fs');

fs.readFile('dataRandom.csv', 'utf-8', (err, data) => {
  if (err) {
    return console.error('Error, Unread Data :( ', err.code);
  } else {
    let dataArray = data.split(/\r?\n/);
    console.log(dataArray);
  }
  console.log('Data Read Successfully!');
});

const warning = `\tOnly correct formatted Roman numerals are supported, change the string; `;
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

// console.log(validateRomanNum('XCIX'));

// Num Roman to Arabic
//decomposingRomanNumber

//  'IIV', 'CLD, 'LCD ,'IVI'

// console.log(decomposingRomanNumber('CXI'));
// console.log(decomposingRomanNumber('LXI'));
// console.log(decomposingRomanNumber('VI'));
// console.log(decomposingRomanNumber('IX'));
// console.log(decomposingRomanNumber('CCC'));
// console.log(decomposingRomanNumber('IV'));

// console.log(decomposingRomanNumber('LXXIII'));
// console.log(decomposingRomanNumber('DM'));
// console.log(decomposingRomanNumber('XCIX'));
// console.log(decomposingRomanNumber('CDLIV'));

// console.log(validateRomanNum('VV'));
// console.log(validateRomanNum('CLD'));
// console.log(validateRomanNum('LCD'));
// console.log(validateRomanNum('IVI'));
// console.log(validateRomanNum('IXI'));

/* MAL
  'IIV', 'CLD, 'LCD ,'IVI'  
*/

/* Pruebas
'LXXIII' --> (73)
'III'    --> (3)
'0'      --> (0)
'XXIII'  --> (23)
'XLIX'   --> (49)
'CCC'    --> (300)
'CDLIV'  --> (454)
*/
