const {readFile, writeFile} = require('fs');
const {decomposingArabNumber} = require('./decomposingArabNumber');
const {validateRomanNum} = require('./validateRomanNum');

let dataArray;

readFile('dataRandom.csv', 'utf-8', (err, data) => {
  if (err) {
    return console.error('Error, Unread Data :( ', err.code);
  } else {
    //Llamada a la funcion.
    console.log('Hola');

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

    writeFile(
      'results-async.csv',
      arrayRomanNumber.toString().replace(/,/g, '\n'),
      function (err) {
        if (err) throw err;
        console.log('Saved!');
      }
    );
  }
});
console.log('Data Read Successfully!');
