const romanOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

// Num Roman to Arabic

// Arrays
const pos = (e) => e === 'D';
console.log(romanOrder.findIndex(pos));

//Strings
let romanNum = 'IIIV';
console.log(romanNum.includes('IV'));

let a = [1, 2, 3];

const convertData = a.map(function (current) {
  return current * 2;
});

console.log('Ver', convertData);
