# frozen_string_literal:true

VALUES = [
  ['M', 1000],
  ['D', 500],
  ['C', 100],
  ['L', 50],
  ['X', 10],
  ['V', 5],
  ['I', 1]
].freeze

def arabic_to_roman(num)
  return nil if !(num.is_a? Integer) || num < 1
  roman = ''

  n = num
  until n <= 0
    VALUES.each do |pair|
      letter = pair[0]
      value = pair[1]
      if (n / value) > 1
        roman << letter
        n -= value
      end
    end
  end
  puts roman
  roman
end

def roman_to_arabic(numeral_string)
  # Your Code Here
end
