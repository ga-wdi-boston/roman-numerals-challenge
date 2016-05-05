require_relative '../lib/challenge.rb'

RSpec.describe "Challenge: " do

  describe 'arabic_to_roman' do
    it 'produces simple roman numerals' do
      [ [3,'III'],
        [20,'XX'],
        [100,'C']].each do | arabic, roman |
        expect(arabic_to_roman(arabic)).to eql(roman);
      end
    end

    it 'produces non-subtractive roman numerals' do
      [ [15, 'XV'],
        [6, 'VI'],
        [123, 'CXXIII'],
        [71, 'LXXI']].each do | arabic, roman |
        expect(arabic_to_roman(arabic)).to eql(roman);
      end
    end

    it 'produces subtractive roman numerals' do
      [ [4, 'IV'],
        [9, 'IX'],
        [99, 'XCIX'],
        [405, 'CDV']].each do | arabic, roman |
        expect(arabic_to_roman(arabic)).to eql(roman);
      end
    end
  end

  xdescribe 'roman_to_arabic' do
    it 'converts simple roman numerals into arabic numbers' do
      [ [3,'III'],
        [20,'XX'],
        [100,'C']].each do | arabic, roman |
        expect(roman_to_arabic(roman)).to eql(arabic);
      end
    end

    it 'converts non-subtractive roman numerals into arabic numbers' do
      [ [15, 'XV'],
        [6, 'VI'],
        [123, 'CXXIII'],
        [71, 'LXXI']].each do | arabic, roman |
        expect(roman_to_arabic(roman)).to eql(arabic);
      end
    end

    it 'converts subtractive roman numerals into arabic numbers' do
      [ [4, 'IV'],
        [9, 'IX'],
        [99, 'XCIX'],
        [405, 'CDV']].each do | arabic, roman |
        expect(roman_to_arabic(roman)).to eql(arabic);
      end
    end
  end

end
