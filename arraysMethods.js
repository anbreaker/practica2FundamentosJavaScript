const romanOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

// Num Roman to Arabic

// Arrays
const pos = (e) => e === 'D';
console.log(romanOrder.findIndex(pos));

//Strings
let romanNum = 'CDLIIV';
console.log(romanNum.includes('IIV'));
