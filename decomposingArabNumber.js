const {numRomansDict} = require('./utils');

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
  return res;
}

module.exports = {
  decomposingArabNumber,
};
