'use strict';

const arabicToRoman = (num) => {
  if (num <= 0 || !num.isInteger()) {
    return null;
  }
  let result = "";
  if (num.toString()[num.toString().length-1] === '9') {
    num += 1;
    result += 'I';
    // console.log("in 2")
  }
  while (num >= 10) {
    result += 'X';
    num -= 10;
    // console.log("in 3")
  }
  if (num.toString()[num.toString().length-1] === '4') {
    result += 'I';
    num += 1;
    // console.log("in 4")
  }
  if (num >= 5) {
    num -= 5;
    result += 'V';
    // console.log("in 5")
  }
  while (num > 0) {
    num -= 1;
    result += 'I';
    // console.log("in 6")
  }
  return result;
};

const romanToArabic = (numeralString) => {
  // Your Code Here
};

module.exports = {
  arabicToRoman,
  romanToArabic
};
