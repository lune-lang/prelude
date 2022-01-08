# module String
<a name="type-string"></a>
#### type string
```
:: Type
```
The type of strings. String literals are written with double quotes.
Unlike in Haskell, strings are not lists of characters; they are
actually strings.

<a name="isEmpty"></a>
#### val isEmpty
```
:: string -> bool
```
Test if a string is empty.

<a name="length"></a>
#### val length
```
:: string -> int
```
Get the length of a string.

### Building strings 
<a name="(<>)"></a>
#### val (<>)
```
:: string -> string -> string
```
Concatenate two strings.
```
"for" <> " " <> "example" --> "for example"
```

<a name="concat"></a>
#### val concat
```
:: list string -> string
```
Concatenate a list of strings.
```
concat ("for" : " " : "example" : empty) --> "for example"
```

<a name="concatMap"></a>
#### val concatMap
```
:: any a. (a -> string) -> list a -> string
```
Apply a function to each element of a list, and concatenate the results.

<a name="join"></a>
#### val join
```
:: string -> list string -> string
```
Join a list of strings with the given separator.
```
join ", " ("1" : "2" : "3" : empty) --> "1, 2, 3"
```

<a name="joinMap"></a>
#### val joinMap
```
:: any a. string -> (a -> string) -> list a -> string
```
Apply a function to each element of a list,
and join the results with the given separator.

<a name="repeat"></a>
#### val repeat
```
:: int -> string -> string
```
Repeat a substring the given number of times.
```
repeat 3 "abc" --> "abcabcabc"
```

<a name="reverse"></a>
#### val reverse
```
:: string -> string
```
Reverse a string.

### Splitting and slicing 
<a name="split"></a>
#### val split
```
:: string -> string -> list string
```
Split a string into a list using the given separator.
```
split "," "56,1,7" --> "56" : "1" : "7" : empty
```

<a name="words"></a>
<a name="lines"></a>
#### val words, lines
```
:: string -> list string
```
Split a string into a list of words or lines.
```
words "a \nweird string" --> "a" : "weird" : "string" : empty
lines "a \nweird string" --> "a " : "weird string" : empty
```

<a name="slice"></a>
#### val slice
```
:: int -> int -> string -> string
```
Get a substring from a string, given a start index (inclusive) and
an end index (exclusive). Negative indices "wrap around" to the end of the string.
```
slice 0 6 "Wissenschaft"  --> "Wissen"
slice 6 -3 "Wissenschaft" --> "sch"
```

<a name="takeLeft"></a>
<a name="takeRight"></a>
#### val takeLeft, takeRight
```
:: int -> string -> string
```
Take the given number of characters from the edge of a string.
```
takeLeft 3 "January"  --> "Jan"
takeRight 4 "January" --> "uary"
```

<a name="dropLeft"></a>
<a name="dropRight"></a>
#### val dropLeft, dropRight
```
:: int -> string -> string
```
Remove the given number of characters from the edge of a string.
```
dropLeft 2 "ahoy!"  --> "oy!"
dropRight 2 "ahoy!" --> "aho"
```

### Formatting 
<a name="toLower"></a>
#### val toLower
```
:: string -> string
```
Convert all the letters in a string to lowercase.

<a name="toUpper"></a>
#### val toUpper
```
:: string -> string
```
Convert all the letters in a string to uppercase.

<a name="padLeft"></a>
<a name="padRight"></a>
#### val padLeft, padRight
```
:: int -> string -> string
```
Pad a string with spaces till it reaches the given length.
```
padLeft 5 "xyz"  --> "  xyz"
padRight 5 "xyz" --> "xyz  "
```

<a name="trim"></a>
<a name="trimLeft"></a>
<a name="trimRight"></a>
#### val trim, trimLeft, trimRight
```
:: string -> string
```
Trim whitespace from the edge of a string.
```
trim " X "      --> "X"
trimLeft " X "  --> "X "
trimRight " X " --> " X"
```

### Substring operations 
<a name="contains"></a>
<a name="startsWith"></a>
<a name="endsWith"></a>
#### val contains, startsWith, endsWith
```
:: string -> string -> bool
```
Test if a string contains the given substring.
```
contains "mon" "monoid"   --> true
startsWith "mon" "monoid" --> true
endsWith "mon" "monoid"   --> false
```

<a name="find"></a>
#### val find
```
:: string -> string -> list int
```
Find every index where the given substring occurs.
```
find "al" "alphabetical" --> 0 : 10 : empty
```

<a name="replace"></a>
#### val replace
```
:: string -> string -> string -> string
```
Replace the given substring wherever it occurs.
```
replace "a" "z" "alphabetical" --> "zlphzbeticzl"
```

### String conversions 
<a name="toInt"></a>
#### val toInt
```
:: string -> maybe int
```
Convert a string into an int.
```
toInt "lol" --> nothing
toInt "16"  --> Just ^ 16
```

<a name="fromInt"></a>
#### val fromInt
```
:: int -> string
```
Convert an int into a string.

<a name="toFloat"></a>
#### val toFloat
```
:: string -> maybe float
```
Convert a string into a float.
```
toFloat "html"  --> nothing
toFloat "2.718" --> Just ^ 2.718
```

<a name="fromFloat"></a>
#### val fromFloat
```
:: float -> string
```
Convert a float into a string.

<a name="toList"></a>
#### val toList
```
:: string -> list char
```
Convert a string into a list of characters.

<a name="fromList"></a>
#### val fromList
```
:: list char -> string
```
Convert a list of characters into a string.

### Listlike operations 
<a name="cons"></a>
#### val cons
```
:: char -> string -> string
```
Build a string from a "head" and a "tail".
```
cons 'C' "omputer" --> "Computer"
```

<a name="deconstruct"></a>
#### val deconstruct
```
:: any a. a -> (char -> string -> a) -> string -> a
```
`deconstruct x f string` represents the following process:
* If the string is empty, return `x`.
* Otherwise, apply `f` to the head and tail of the string.

<a name="single"></a>
#### val single
```
:: char -> string
```
Build a string from a single character.

<a name="head"></a>
#### val head
```
:: string -> maybe char
```
Get the first character of a string.
```
head ""       --> nothing
head "invent" --> Just ^ 'i'
```

<a name="tail"></a>
#### val tail
```
:: string -> maybe string
```
Get the trailing substring of a string.
```
tail ""       --> nothing
tail "invent" --> Just ^ "nvent"
```

<a name="get"></a>
#### val get
```
:: int -> string -> maybe char
```
Get the character at the given index. Return `nothing` if the index
is out of range.
```
get 5 "hello" --> nothing
get 3 "hello" --> Just ^ 'l'
```

<a name="map"></a>
#### val map
```
:: (char -> char) -> string -> string
```
Apply a function to each character in a string.

<a name="mapIndex"></a>
#### val mapIndex
```
:: (int -> char -> char) -> string -> string
```
Apply a function to each index-character pair in a string.

<a name="filter"></a>
#### val filter
```
:: (char -> bool) -> string -> string
```
Keep only the characters in a string that pass the given predicate.
```
filter Char.isUpper "John Quincy Adams" --> "JQA"
```

<a name="partition"></a>
#### val partition
```
:: (char -> bool)
  -> string
  -> { Pass := string
     ; Fail := string
     ; nil }
```
Partition the characters in a string based on whether they pass
the given predicate.
```
partition Char.isUpper "LaTeX" --> Pass := "LTX"; Fail := "ae"; void
```

<a name="count"></a>
#### val count
```
:: (char -> bool) -> string -> int
```
Find the number of characters in a string that pass the given predicate.
```
count Char.isDigit "1-2-3-4" --> 4
```

<a name="some"></a>
#### val some
```
:: (char -> bool) -> string -> bool
```
Test if at least one of the characters passes the given predicate.
```
some Char.isDigit ""    --> false
some Char.isDigit "abc" --> false
some Char.isDigit "gr8" --> true
some Char.isDigit "123" --> true
```

<a name="all"></a>
#### val all
```
:: (char -> bool) -> string -> bool
```
Test if all of the characters pass the given predicate.
```
all Char.isDigit ""    --> true
all Char.isDigit "abc" --> false
all Char.isDigit "gr8" --> false
all Char.isDigit "123" --> true
```

<a name="foldLeft"></a>
#### val foldLeft
```
:: any a. (char -> a -> a) -> a -> string -> a
```
Fold a function over a string, starting with the first character.
`foldLeft f x "gnu"` is eqivalent to `x # f 'g' # f 'n' # f 'u'`.

<a name="foldRight"></a>
#### val foldRight
```
:: any a. (char -> a -> a) -> a -> string -> a
```
Fold a function over a string, starting with the last character.
`foldRight f x "gnu"` is equivalent to `f 'g' $ f 'n' $ f 'u' $ x`

