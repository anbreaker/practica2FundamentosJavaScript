'use strict';

// Javascript Roman numeral converter to Arabic

// Read data from file
const {numRomansDict} = require('./utils');
const fs = require('fs');

let dataArray;

fs.readFile('dataRandom.csv', 'utf-8', (err, data) => {
  if (err) {
    return console.error('Error, Unread Data :( ', err.code);
  } else {
    dataArray = data.split(/\r?\n/);
    //Llamada a la funcion.
  }
});
console.log('Data Read Successfully!');

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

// dataArray
console.log(dataArray, 'estoy aqui');
