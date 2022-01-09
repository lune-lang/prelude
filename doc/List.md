# List
<a name="type-list"></a>
#### type list
```
:: Type -> Type
```
<a name="makeList"></a>
#### val makeList
```
:: [ Empty := unit
    ; Cons := { Head := a; Tail := list a; nil }
    ; nil ] -> list a
```
<a name="getList"></a>
#### val getList
```
:: list a -> [ Empty := unit
    ; Cons := { Head := a; Tail := list a; nil }
    ; nil ]
```
The homogenous linked list is Lune's main array-like data structure.
`list a` represents a list with elements of type `a`. You can use the
`makeList` and `getList` functions to convert between lists and
normal records/variants, but this is rarely necessary.

## Basic operations 
<a name="empty"></a>
#### val empty
```
:: any a. list a
```
The empty list.

<a name="(:)"></a>
#### val (:)
```
:: any a. a -> list a -> list a
```
The "cons" operator. Attach a value to the start of a list.

<a name="deconstruct"></a>
#### val deconstruct
```
:: any a b. b -> (a -> list a -> b) -> list a -> b
```
`deconstruct x f list` represents the following process:
* If the list is empty, return `x`.
* Otherwise, apply `f` to the head and tail of the list.

`deconstruct` is the most general list operation. If none of the
other functions in this module suits your purpose, use `deconstruct`.

<a name="single"></a>
#### val single
```
:: any a. a -> list a
```
Make a list with a single element.

<a name="isEmpty"></a>
#### val isEmpty
```
:: any a. list a -> bool
```
Test if a list is empty.

<a name="length"></a>
#### val length
```
:: any a. list a -> int
```
Get the length of a list.

## Slicing 
<a name="head"></a>
#### val head
```
:: any a. list a -> maybe a
```
Get the first element of a list.
```
head empty               --> nothing
head (1 : 3 : 6 : empty) --> Just ^ 1
```

<a name="tail"></a>
#### val tail
```
:: any a. list a -> maybe (list a)
```
Remove the first element of a list.
```
tail empty               --> nothing
tail (1 : 3 : 6 : empty) --> Just ^ (3 : 6 : empty)
```

<a name="take"></a>
#### val take
```
:: any a. int -> list a -> list a
```
Take the given number of elements from the start of a list.
```
take 3 (1 : 1 : 2 : 3 : 5 : empty) --> 1 : 1 : 2 : empty
```

<a name="drop"></a>
#### val drop
```
:: any a. int -> list a -> list a
```
Remove the given number of elements from the start of a list.
```
drop 2 ('x' : 'y' : 'z' : empty) --> 'z' : empty
```

<a name="get"></a>
#### val get
```
:: any a. int -> list a -> maybe a
```
Get the element at the given index. Return `nothing` if the index
is out of range.
```
get 2 (6 : 5 : 4 : 3 : empty) --> 4
```

## Building lists 
<a name="(++)"></a>
#### val (++)
```
:: any a. list a -> list a -> list a
```
Concatenate two lists.
```
(1 : 2 : 3 : empty) ++ (4 : 5 : 6 : empty)
  --> 1 : 2 : 3 : 4 : 5 : 6 : empty
```

<a name="concat"></a>
#### val concat
```
:: any a. list (list a) -> list a
```
Concatenate a list of lists.
```
concat ((1 : 2 : empty) : (3 : 4 : empty) : (5 : 6 : empty) : empty)
  --> 1 : 2 : 3 : 4 : 5 : 6 : empty
```

<a name="concatMap"></a>
#### val concatMap
```
:: any a b. (a -> list b) -> list a -> list b
```
Apply a function to each element of a list, and concatenate the results.

<a name="repeat"></a>
#### val repeat
```
:: any a. int -> a -> list a
```
Repeat an element the given number of times.
```
repeat 4 "ok" --> "ok" : "ok" : "ok" : "ok" : empty
```

<a name="reverse"></a>
#### val reverse
```
:: any a. list a -> list a
```
Reverse a list.

<a name="range"></a>
#### val range
```
:: int -> int -> list int
```
Create a range of consecutive integers, given a starting value
(inclusive), and an ending value (exclusive).
```
range 4 9 --> 4 : 5 : 6 : 7 : 8 : empty
```

## Lookup operations 
<a name="contains"></a>
#### val contains
```
:: any a. a -> list a -> bool
```
Test if a list contains the given element.
```
contains 6 (range 5 10) --> true
contains 3 (range 5 10) --> false
```

<a name="find"></a>
#### val find
```
:: any a. a -> list a -> list int
```
Find every index where the given element occurs.
```
find 0 (0 : 1 : 4 : 0 : 2 : empty) --> 0 : 3 : empty
```

## Mapping 
<a name="map"></a>
#### val map
```
:: any a b. (a -> b) -> list a -> list b
```
Apply a function to each element in a list.
```
map (+ 10) (0 : 2 : 1 : empty) --> 10 : 12 : 11 : empty
```

<a name="mapIndex"></a>
#### val mapIndex
```
:: any a b. (int -> a -> b) -> list a -> list b
```
Apply a function to each index-element pair in a list.

<a name="mapResult"></a>
#### val mapResult
```
:: any e a b. (a -> result e b) -> list a -> list b
```
Apply a function to each element in a list,
and collect the successful results.
```
mapResult String.toInt ("12" : "abc" : "3" : empty) --> 12 : 3 : empty
```

<a name="separate"></a>
#### val separate
```
:: any a b. list (a & b) -> list a & list b
```
Separate a list of pairs into a pair of lists.

## Filtering 
<a name="filter"></a>
#### val filter
```
:: any a. (a -> bool) -> list a -> list a
```
Keep only the elements of a list that pass the given predicate.
```
filter (> 0) (-2 : 5 : 3 : -3 : empty) --> 5 : 3 : empty
```

<a name="partition"></a>
#### val partition
```
:: any a
   . (a -> bool)
  -> list a
  -> { Pass := list a
     ; Fail := list a
     ; nil }
```
Partition the elements of a list based on whether they pass
the given predicate.
```
partition (> 0) (-2 : 5 : 3 : -3 : empty)
  --> Pass := (5 : 3 : empty)
    ; Fail := (-2 : -3 : empty)
    ; unit
```

<a name="count"></a>
#### val count
```
:: any a. (a -> bool) -> list a -> int
```
Find the number of elements in a list that pass the given predicate.
```
count (> 0) (-2 : 5 : 3 : -3 : empty) --> 2
```

<a name="some"></a>
#### val some
```
:: any a. (a -> bool) -> list a -> bool
```
Test if at least one of the elements passes the given predicate.
```
some (> 0) empty            --> false
some (> 0) (-1 : empty)     --> false
some (> 0) (-1 : 1 : empty) --> true
some (> 0) (1 : empty)      --> true
```

<a name="all"></a>
#### val all
```
:: any a. (a -> bool) -> list a -> bool
```
Test if all of the elements pass the given predicate.
```
all (> 0) empty            --> true
all (> 0) (-1 : empty)     --> false
all (> 0) (-1 : 1 : empty) --> false
all (> 0) (1 : empty)      --> true
```

## Folds 
<a name="foldLeft"></a>
#### val foldLeft
```
:: any a b. (a -> b -> b) -> b -> list a -> b
```
Fold a function over a list, starting with the first element.
`foldLeft f x (0 : 1 : 2 : empty)` is equivalent to
`x # f 0 # f 1 # f 2`.

<a name="foldRight"></a>
#### val foldRight
```
:: any a b. (a -> b -> b) -> b -> list a -> b
```
Fold a function over a list, starting with the last element.
`foldRight f x (0 : 1 : 2 : empty)` is equivalent to
`f 0 $ f 1 $ f 2 $ x`

<a name="sum"></a>
#### val sum
```
:: any x. list (num x) -> num x
```
Find the sum of a list of numbers.

<a name="product"></a>
#### val product
```
:: any x. list (num x) -> num x
```
Find the product of a list of numbers.

## Sorting 
<a name="sort"></a>
#### val sort
```
:: any a. list a -> list a
```
Sort a list.

<a name="sortBy"></a>
#### val sortBy
```
:: any a b. (a -> b) -> list a -> list a
```
Sort a list, but apply the given function to each
element before comparing them.
```
sortBy String.length ("hello" : "hi" : "hey" : empty)
  --> "hi" : "hey" : "hello" : empty
```

<a name="sortWith"></a>
#### val sortWith
```
:: any a. (a -> a -> order) -> list a -> list a
```
Sort a list with a custom comparison function.

## Nondeterministic application 
<a name="apply"></a>
#### val apply
```
:: any a b. list (a -> b) -> list a -> list b
```
`apply fs xs` applies every function in `fs` to every value in `xs`,
and collects the results.

<a name="map2"></a>
#### val map2
```
:: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> list a1
  -> list a2
  -> list a3
```
Map a binary function over two lists by applying it
to every combination of arguments.
```
map2 (+) (1.2 : 2.4 : empty) (0 : 10 : 20 : empty)
  --> 1.2 : 2.4 : 11.2 : 12.4 : 21.2 : 22.4 : empty
```

<a name="map3"></a>
#### val map3
```
:: any a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
```
Map a three-argument function over three lists by applying it
to every combination of arguments.

<a name="map4"></a>
#### val map4
```
:: any a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
  -> list a5
```
Map a four-argument function over four lists by applying it
to every combination of arguments.

## Elementwise application 
<a name="zipApply"></a>
#### val zipApply
```
:: any a b. list (a -> b) -> list a -> list b
```
`zipApply fs xs` applies every function in `fs` to the corresponding
value in `xs`, and collects the results.

<a name="zip2"></a>
#### val zip2
```
:: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> list a1
  -> list a2
  -> list a3
```
Map a binary function over two lists by applying it
to pairs of corresponding elements.
```
zip2 (+) (1.2 : 2.4 : empty) (0 : 10 : 20 : empty)
  --> 1.2 : 12.4 : empty
```

<a name="zip3"></a>
#### val zip3
```
:: any a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
```
Map a three-argument function over three lists by applying it
to triples of corresponding elements.

<a name="zip4"></a>
#### val zip4
```
:: any a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
  -> list a5
```
Map a four-argument function over four lists by applying it
to quadruples of corresponding elements.

