const romanOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

// Arrays
const pos = (e) => e === 'D';
console.log(romanOrder.findIndex(pos));

//Strings
let numRoman = 'CDLIIV';
console.log(numRoman.includes('IIV'));
