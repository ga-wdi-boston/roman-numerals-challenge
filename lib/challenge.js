'use strict';

const arabicToRoman = (num) => {
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let roman = '';
  let N = num;
  i;

        if (num < 1) {
       return '';
   }
   if (num > 3999) {
       return 'N';
   }
};

for (i = 0; i < numbers.length; i++) {
    while (N >= numbers[i]) {
        roman += letters[i];
        N -= numbers[i];
    }
}
return roman;
}


const romanToArabic = (numeralString) => {
  // Your Code Here
};

module.exports = {
  arabicToRoman,
  romanToArabic
};
