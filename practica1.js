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
  let sms = `Arabic Number -> ${arabNumTerminal} \t Roman Number -> ${res}`;
  return sms;
}

// Num Roman to Arabic
function decomposingRomanNumber(romanNum) {
  const romanNumTerminal = romanNum;
  romanNum = romanNum.split(''); // This line is not "necessary" for coercion
  let res = 0;
  let flag = 0;
  let repetitions = 3;
  let compare = romanNum[flag];
  while (flag < romanNum.length) {
    // Conditions order of roman letters
    // CM, CD, XC, XL, IX, IV;
    compare = romanNum[flag];

    if (compare === romanNum[flag - 1]) {
      //sumar repes... ver si va bien etc...
      repetitions -= 1;
    } else {
      repetitions = 3;
    }

    if (repetitions > 0) {
      res += numRomans[romanNum[flag]];
    } else {
      return '    --Only Roman numbers correct--   ';
    }

    flag += 1;
  }
  return res;
}

console.log(decomposingRomanNumber('MMMCCXL'));
// console.log(decomposingRomanNumber('CDLIV'));

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
