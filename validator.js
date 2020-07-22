'use strict';
const warning = `\n\tOnly correct formatted Roman numerals are supported:\n`;
const romanOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const numRomansFive = {D: 500, L: 50, V: 5};
const numRomans = {
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
  const distance = 2;
  let repetitions = 3;
  while (pos < romanNum.length) {
    // Los símbolos I, X, C y M se pueden repetir hasta tres veces.
    if (romanNum[pos] === romanNum[pos + 1]) {
      repetitions -= 1;
    } else {
      repetitions = 3;
    }

    if (repetitions > 0) {
      // Los símbolos V, L y D no pueden repetirse.
      if (romanNum.includes('VV') || romanNum.includes('LL') || romanNum.includes('DD')) {
        return warning;
      } else if (
        // Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.
        numRomans[romanNum[pos]] < numRomans[romanNum[pos + 1]] &&
        romanNum[pos] in numRomansFive
      ) {
        return warning;
      }
      res += numRomans[romanNum[pos]];
    } else {
      return warning + `\t\t Change this number -->${romanNum}\n`;
    }
    pos += 1;
  }
  return res;
}

console.log(validateRomanNum(''));
