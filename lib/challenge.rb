# frozen_string_literal:true
LEGEND = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'].zip([1000,900,500,400,100,90,50,40,10,9,5,4,1])

def arabic_to_roman(num)
  return nil if (!(num.is_a? Integer) || num <= 0)
  result = ''
  LEGEND.each do |roman, arabic|
    while (num >= arabic)
      result += roman
      num -= arabic
    end
  end
  result
end

def roman_to_arabic(numeral_string)
  return nil if !(numeral_string.is_a? String) || # Not a string
    numeral_string == "" ||                       # Empty string
    numeral_string.match(/(
      (.)\2{3}               # More than three of any character
      |[^MDCLXVI]                           # Illegal characters
      |I[^XVI]|V[^I]|X[^CLXVI]|L[^XVI]       # Illegal sequences
      |C[^MDCLXVI]|D[^MCLXVI]|M[^MDCLXVI]
    )/x)
  nums = numeral_string.chars.map{|char| LEGEND.find{|pair| pair[0] == char}[1] }
  nums.map.with_index do |num, i|
    num * ((i < (nums.length - 1) && num < nums[i+1])? -1 : 1)
  end.reduce(:+)
end
