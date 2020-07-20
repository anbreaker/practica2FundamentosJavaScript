'use strict';

// Conversor de números romanos javascript
// I  1   | V  5    |  X  10
// L  50  | C  100  |  D  500 |  M  1000

const romanOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

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

const numRomansFive = {D: 500, L: 50, V: 5};

// Num Roman to Arabic

function iterateDict() {
  for (const key in numRomans) {
    console.log(`Clave -> ${key} \t Valor ${numRomans[key]}`);
  }
}

// Num Arabic to Roman
function decomposingArabNumber(arabNum) {
  const arabNumTerminal = arabNum;
  let res = '';
  if (arabNum > 0 && arabNum < 4000) {
    for (const key in numRomans) {
      let quotient = Math.floor(arabNum / numRomans[key]);

      if (quotient > 0) {
        arabNum = arabNum - numRomans[key] * quotient;
        res += key.repeat(quotient);
      }
    }
  } else {
    return '    --Only numbers from 1 to 3999--   ';
  }
  let warning = `Arabic Number -> ${arabNumTerminal} \t Roman Number -> ${res}`;
  return warning;
}

// Num Roman to Arabic

function decomposingRomanNumber(romanNum) {
  const romanNumTerminal = romanNum;
  const warning = `\t--Only Roman numbers correct--
          \t\tChange this number: ${romanNum}`;
  let res = 0;
  let flag = 0;
  let repetitions = 3;
  let compare = romanNum[flag];
  while (flag < romanNum.length) {
    // Conditions order of roman letters
    compare = romanNum[flag];

    if (compare === romanNum[flag - 1]) {
      repetitions -= 1;
    } else {
      repetitions = 3;
    }
    if (repetitions > 0) {
      // Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.

      if (romanNum.includes('VV') || romanNum.includes('LL') || romanNum.includes('DD')) {
        return warning;
      } else if (
        // Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.
        numRomans[romanNum[flag]] < numRomans[romanNum[flag + 1]] &&
        romanNum[flag] in numRomansFive
      ) {
        return warning;
      } else if (
        // CM, CD, XC, XL, IX, IV;
        (romanNum[flag] === 'M' && romanNum[flag - 1]) === 'C' ||
        (romanNum[flag] === 'D' && romanNum[flag - 1]) === 'C'
      ) {
        // console.log('here', romanNum[flag], romanNum[flag - 1]);
        res -= 200;
      } else if (
        (romanNum[flag] === 'C' && romanNum[flag - 1]) === 'X' ||
        (romanNum[flag] === 'L' && romanNum[flag - 1]) === 'X'
      ) {
        res -= 20;
      } else if (
        (romanNum[flag] === 'X' && romanNum[flag - 1]) === 'I' ||
        (romanNum[flag] === 'V' && romanNum[flag - 1]) === 'I'
      ) {
        res -= 2;
      }
      res += numRomans[romanNum[flag]];
    } else {
      return warning;
    }
    flag += 1;
  }
  return res;
}

console.log(decomposingRomanNumber('MXI'));
console.log(decomposingRomanNumber('DXI'));
console.log(decomposingRomanNumber('CXI'));
console.log(decomposingRomanNumber('LXI'));
console.log(decomposingRomanNumber('VI'));
console.log(decomposingRomanNumber('IX'));

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

function validateRomanNumber(romanNum) {
  const romanNumTerminal = romanNum;
  romanNum = romanNum.split(''); // This line is not "necessary" for coercion
  let res = 0;
  let flag = 0;
  let repetitions = 3;
  const distance = 2;
  let compare = romanNum[flag];
  while (flag < romanNum.length) {
    // Conditions order of roman letters
    compare = romanNum[flag];

    if (compare === romanNum[flag - 1]) {
      repetitions -= 1;
    } else {
      repetitions = 3;
    }

    if (repetitions > 0) {
      res += numRomans[romanNum[flag]];
    } else {
      return `\t--Only Roman numbers correct-- 
      \t\tChange this number: ${romanNum.join('')}`;
    }
    flag += 1;
  }
  return res;
}

// console.log(decomposingRomanNumber('LXXIII'));
// console.log(decomposingRomanNumber('DM'));
// console.log(decomposingRomanNumber('XCIX'));
// console.log(decomposingRomanNumber('CDLIV'));

// console.log(decomposingRomanNumber('VV'), 'mal');
// console.log(decomposingRomanNumber('CLD'), 'mal');
// console.log(decomposingRomanNumber('LCD'), 'mal');
// console.log(decomposingRomanNumber('IVI'), 'mal');
// console.log(decomposingRomanNumber('IXI'), 'mal');

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

/*
// Num Arabic to Roman Manual Test
console.log(decomposingArabNumber(73));
// console.log(decomposingArabNumber(73) === 'LXXIII');
console.log(decomposingArabNumber(3));
console.log(decomposingArabNumber(0));
console.log(decomposingArabNumber(23));
console.log(decomposingArabNumber(49));
console.log(decomposingArabNumber(300));
console.log(decomposingArabNumber(454));
*/
