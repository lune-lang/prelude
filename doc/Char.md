# Char
<a name="type-char"></a>
#### type char
```
:: Type
```
The type of unicode characters, such as `'a'`, `'?'`, or `'\xE1'`.
Character literals are written with single quotes.

## Predicates 
<a name="isLetter"></a>
#### val isLetter
```
:: char -> bool
```
Detect characters in the general category L (letter).
```
isLetter 'A' --> true
isLetter 'ル' --> true
isLetter '3' --> false
```

<a name="isLower"></a>
#### val isLower
```
:: char -> bool
```
Detect characters in the general subcategory Ll (lowercase letter).
```
isLower 'g' --> true
isLower 'ζ' --> true
isLower 'G' --> false
isLower 'ㅈ' --> false
```

<a name="isUpper"></a>
#### val isUpper
```
:: char -> bool
```
Detect characters in the general subcategory Lu (uppercase letter).

<a name="isLatin"></a>
#### val isLatin
```
:: char -> bool
```
Detect letters in the extended latin alphabet.
```
isLatin 'q' --> true
isLatin 'ß' --> true
isLatin 'λ' --> false
```

<a name="isEnglish"></a>
#### val isEnglish
```
:: char -> bool
```
Detect English letters: a-z and A-Z.

<a name="isDigit"></a>
#### val isDigit
```
:: char -> bool
```
Detect decimal digits: 0-9.

<a name="isHexDigit"></a>
#### val isHexDigit
```
:: char -> bool
```
Detect hexidecimal digits: 0-9, a-f, and A-F.

<a name="isSpace"></a>
#### val isSpace
```
:: char -> bool
```
Detect whitespace characters, such as space, tab, newline, and so on.

## Case conversions 
<a name="toLower"></a>
<a name="toUpper"></a>
#### val toLower, toUpper
```
:: char -> char
```
Change the case of a character.
```
toLower 'S' --> 's'
toLower 'Σ' --> 'σ'
toLower '#' --> '#'
```

## Unicode conversions 
<a name="fromCode"></a>
#### val fromCode
```
:: int -> char
```
Convert a code point into a unicode character.

<a name="toCode"></a>
#### val toCode
```
:: char -> int
```
Get the code point of a unicode character.

