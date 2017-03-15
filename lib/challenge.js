'use strict';

// # first, we have to create two arrays: one with he roman numerals and one with the new forms...
//
// # we created another variable, that will hold the final romanized number
//
// # next, we use a for loop, to go through the indices of decimalArray. We will loop until the value of the current index will not fit into num.
//
// # Then, we add the roman numeral and decrease num by the decimal equivalent.
//
// # Then, we return the value of romanized.

const arabicToRoman = (num) => {
  let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let romanized = '';

// we are going through this list of elements in the decimal array...
  for (let index = 0; index < decimalValue.length; index++){
  // while the index of the element we are looking for is less than num...
    while (decimalValue[index] <= num) {
    // then, we add the number from romanNumeral that is lining up with that value
      romanized += romanNumeral[index];
    // we then change the value of num to be that much less than the value we have just converted to roman numerals.
      num -= decimalValue[index];
    }
  }

  return romanized;
};

arabicToRoman(36);

//const romanToArabic = (numeralString) => {
  // Your Code Here
};

module.exports = {
  arabicToRoman,
  romanToArabic
};
