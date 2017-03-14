import re
SYMS = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
VALS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]


def arabic_to_roman(number):
    if (not isinstance(number, int) or number <= 0):
        return None
    result = ''
    for roman, arabic in zip(SYMS, VALS):
        while (number >= arabic):
            result += roman
            number -= arabic
    return result


def roman_to_arabic(roman_numeral):
    if ((not isinstance(roman_numeral, str)) or     # Not a string
        (roman_numeral == '') or                    # Empty string
        re.match(
            re.compile(
                r"""((.)\2\2\2          # More than three of any character
                    |[^MDCLXVI]                       # Illegal characters
                    |I[^XVI]|V[^I]|X[^CLXVI]|L[^XVI]   # Illegal sequences
                    |C[^MDCLXVI]|D[^MCLXVI]|M[^MDCLXVI])""", re.X
            ),
            roman_numeral
      )):
        return None
    nums = list(map(
        lambda c: [val for sym, val in list(zip(SYMS, VALS)) if sym == c][0],
        roman_numeral
    ))
    for i in range(0, len(nums)):
        nums[i] *= (-1 if i < len(nums)-1 and nums[i] < nums[i+1] else 1)
    return sum(nums)
