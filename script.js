function convertToRoman(num) {
  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  let result = "";
  for (const [symbol, value] of romanMap) {
    const count = Math.floor(num / value);
    if (count > 0) {
      result += symbol.repeat(count);
      num -= value * count;
    }
  }
  return result;
}

module.exports = convertToRoman;

// Example test
// console.log(convertToRoman(36)); // XXXVI

