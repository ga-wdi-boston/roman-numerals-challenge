from expects import *
import sys
sys.path.append('..')
from lib import challenge
from lib.challenge import *

with description('Challenge'):
    with description('Arabic Numbers to Roman Numerals'):
        with it('produces simple roman numerals'):
            for arabic, roman in zip([3, 20, 100],
                                     ['III', 'XX', 'C']):
                expect(arabic_to_roman(arabic)).to(equal(roman))
        with it('produces non-subtractive roman numerals'):
            for arabic, roman in zip([15, 6, 123, 71],
                                     ['XV', 'VI', 'CXXIII', 'LXXI']):
                expect(arabic_to_roman(arabic)).to(equal(roman))
        with it('produces subtractive roman numerals'):
            for arabic, roman in zip([4, 9, 99, 405],
                                     ['IV', 'IX', 'XCIX', 'CDV']):
                expect(arabic_to_roman(arabic)).to(equal(roman))
    with _description('Roman Numerals to Arabic Numbers'):
        with it('handles simple roman numerals'):
            for arabic, roman in zip([3, 20, 100],
                                     ['III', 'XX', 'C']):
                expect(roman_to_arabic(roman)).to(equal(arabic))
        with it('handles non-subtractive roman numerals'):
            for arabic, roman in zip([15, 6, 123, 71],
                                     ['XV', 'VI', 'CXXIII', 'LXXI']):
                expect(roman_to_arabic(roman)).to(equal(arabic))
        with it('handles subtractive roman numerals'):
            for arabic, roman in zip([4, 9, 99, 405],
                                     ['IV', 'IX', 'XCIX', 'CDV']):
                expect(roman_to_arabic(roman)).to(equal(arabic))
