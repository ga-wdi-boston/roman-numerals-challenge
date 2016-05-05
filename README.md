[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Roman Numeral Challenge

Write code to convert back and forth between arabic numerals (e.g. `23`)
  and strings representing [Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals) (e.g. `"XXIII"`).

## Prerequisites

-   Python

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install all dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

For reference:

| Language   | Install Dependencies | Run Linter      | Run Tests      |
|:----------:|:--------------------:|:---------------:|:--------------:|
| JavaScript | `npm install`        | `grunt nag`     | `grunt test`   |
| Ruby       | `bundle install`     | `rubocop`       | `rspec spec`   |
| Python     | `pip install -r ...` | `pep8`          | `mamba`        |

JavaScript, Ruby, and Python starter code is available in [`lib/challenge.js`](lib/challenge.js), [`lib/challenge.rb`](lib/challenge.rb), and [`lib/challenge.py`](lib/challenge.py), respectively.
A pull request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Requirements

In either Ruby or JavaScript, implement `arabic_to_roman` (`arabicToRoman` in
 JavaScript), a method/function that converts arabic numbers to strings of
 characters representing roman numerals.
It's worth noting that in roman numerals, there is no way to represent either
 zero, negative numbers, or fractions, so if the input is any of these (or any
 other obviously invalid input), `arabic_to_roman` should return `null`/`nil`.

Once you've successfully met all requirements in your language of choice,
 implement that same solution in Python.

You should be running the appropriate linter before diagnosing any bugs, since
 linters find some of the most common sources of errors.
After your linter passes, you should run the corresponding test command to run
 the included tests.
Tests will tell you whether of not you've met these requirements.

## Bonus

Once you've implemented `arabic_to_roman`, implement the inverse method,
 `roman_to_arabic`, in either Ruby of JavaScript.
As with `arabic_to_roman`, you'll need to do some input validation --
 if your receive any strings that don't follow the rules of roman numerals
 (e.g. no more than three of the same character in a row) or are otherwise
 obviously invalid, return `null`/`nil`.
Also: be sure to set `xdescribe` to `describe` in your test file, so that
 the tests for `roman_to_arabic` will also run.

Finally, do this process again in Python, un-hiding the appropriate tests in
 `challenge_spec.py`.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
