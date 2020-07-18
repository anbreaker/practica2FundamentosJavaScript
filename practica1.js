'use strict';

// Conversor de números romanos javascript
// I  1   | V  5    |  X  10
// L  50  | C  100  |  D  500 |  M  1000

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

const numArabic = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};

// Num Roman to Arabic

function iterateDict() {
  for (const key in numRomans) {
    console.log(`Clave -> ${key} \t Valor ${numRomans[key]}`);
  }
}

// Num Arabic to Roman
function decomposingArabNumber(arabNum) {
  const arabNumTermial = arabNum;
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
  let sms = `Arabic Number -> ${arabNumTermial} \t Roman Number -> ${res}`;
  return sms;
}

// Num Roman to Arabic
function decomposingRomanNumber(romanNum) {
  // Code here...
  let res = -1;
  for (const key in numArabic) {
    console.log(key);
  }
}

// console.log(decomposingRomanNumber('III'));

/* Pruebas
'LXXIII' --> (73)
'III'    --> (3)
'0'      --> (0)
'XVI'    --> (16)
'XXIII'  --> (23)
'CCC'    --> (300)
*/

// Num Arabic to Roman Manual Test
console.log(decomposingArabNumber(73));
// console.log(decomposingArabNumber(73) === 'LXXIII');
console.log(decomposingArabNumber(3));
console.log(decomposingArabNumber(0));
console.log(decomposingArabNumber(16));
console.log(decomposingArabNumber(23));
console.log(decomposingArabNumber(300));
console.log(decomposingArabNumber(3));
