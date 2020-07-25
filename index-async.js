const {readFileSync, writeFileSync} = require('fs');
const {decomposingArabNumber} = require('./decomposingArabNumber');
const {validateRomanNum} = require('./validateRomanNum');

const data = readFileSync('dataRandom.csv', 'utf-8');
console.log('Data Read Successfully!');

const arrayRomanNumber = data.split(/\r?\n/).map(function (arabNum) {
  let transform = parseInt(arabNum);
  if (!Number.isNaN(transform)) {
    const res = decomposingArabNumber(arabNum);
    console.log(`Arabic Number -> ${arabNum} \t Roman Number -> ${res}`);
    return res;
  } else {
    const res = validateRomanNum(arabNum.toUpperCase());
    console.log(`Roman Number -> ${res} \t Arabic Number -> ${arabNum}`);
    return res;
  }
});

// Observe the OS
writeFileSync('results.csv', arrayRomanNumber.toString().replace(/,/g, '\n'), 'utf-8');
