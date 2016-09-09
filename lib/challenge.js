'use strict';

const arabicToRoman = (num) => {
  let result = '';
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ['M', 'MC', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (let i = 0; i < decimal.length; i++) {
    while (num % decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }

  return result;
};

const romanToArabic = (numeralString) => {
  numeralString = 0;
};

module.exports = {
  arabicToRoman,
  romanToArabic,
};
