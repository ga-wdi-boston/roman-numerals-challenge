'use strict';

const arabicToRoman = (num) => {

  let remainingValue = num;
  let newRomanNumeral = "";
  let romanNumerals = [{
    numeral: "M",
    value: 1000
  }, {
    numeral: "CM",
    value: 900
  }, {
    numeral: "D",
    value: 500
  }, {
    numeral: "CD",
    value: 400
  }, {
    numeral: "C",
    value: 100
  }, {
    numeral: "XC",
    value: 90
  }, {
    numeral: "L",
    value: 50
  }, {
    numeral: "XL",
    value: 40
  }, {
    numeral: "X",
    value: 10
  }, {
    numeral: "IX",
    value: 9
  }, {
    numeral: "V",
    value: 5
  }, {
    numeral: "IV",
    value: 4
  }, {
    numeral: "I",
    value: 1
  }];

  for (let i = 0; i < 13; i++) {
    let j = Math.floor(remainingValue / romanNumerals[i].value);
       while (remainingValue >= romanNumerals[i].value) {
         newRomanNumeral += romanNumerals[i].numeral.repeat(j);
         remainingValue -= (romanNumerals[i].value * j);
       }
  }

  // if (newRomanNumeral !== IsNumeric) {
  //   return null;
  // } else {
  //   return newRomanNumeral;
  // }

  // OR
  // return newRomanNumeral.toFixed(0);
  // nope

    return newRomanNumeral;
};


const romanToArabic = (numeralString) => {
  // Your Code Here
};

module.exports = {
  arabicToRoman,
  romanToArabic
};
