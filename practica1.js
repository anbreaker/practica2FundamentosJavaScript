'use strict';
// Conversor de números romanos javascript
// I  1   | V  5    |  X  10
// L  50  | C  100  |  D  500 |  M  1000

const {forIn} = require('lodash');

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
function decomposingArabNumber(num) {
  let res = '';
  if (num > 0 && num < 4000) {
    for (const key in numRomans) {
      let quotient = Math.floor(num / numRomans[key]);

      if (quotient > 0) {
        num = num - numRomans[key] * quotient;
        res += key.repeat(quotient);
      }
    }
  } else {
    return 'Only numbers from 1 to 3999';
  }
  return res;
}
console.log(decomposingArabNumber(73));
console.log(decomposingArabNumber(3));
console.log(decomposingArabNumber(0));
console.log(decomposingArabNumber(16));
console.log(decomposingArabNumber(23));
console.log(decomposingArabNumber(300));
