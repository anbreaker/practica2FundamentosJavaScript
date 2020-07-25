'use strict';

// Javascript Roman numeral converter to Arabic

const romanOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const numRomansDictFive = {D: 500, L: 50, V: 5};
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

// Num Arabic to Roman
function decomposingArabNumber(arabNum) {
  const arabNumTerminal = arabNum;
  let res = '';
  if (arabNum > 0 && arabNum < 4000) {
    for (const key in numRomansDict) {
      let quotient = Math.floor(arabNum / numRomansDict[key]);

      if (quotient > 0) {
        arabNum = arabNum - numRomansDict[key] * quotient;
        res += key.repeat(quotient);
      }
    }
  } else {
    return '    --Only numbers from 1 to 3999--   ';
  }
  const warning = `Arabic Number -> ${arabNumTerminal} \t Roman Number -> ${res}`;
  return warning;
}

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

console.log(decomposingArabNumber(99));
