// Conversor de números romanos javascript
// I         1             |   V       5             |   X        10
// L         50           |   C        100         |   D       500 | M                1000

const dictRomans = {
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
  for (const key in dictRomans) {
    console.log(`Clave -> ${key} \t Valor ${dictRomans[key]}`);
  }
}

function arabicToRoman(numArabic) {
  let numRoman = '';

  for (let clave in dictRomans) {
    console.log(clave);
  }
}

arabicToRoman(17);
