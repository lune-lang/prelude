# Char
<a name="Char.char"></a>
#### type char
```
:: Type
```
<a name="Char.isLower"></a>
<a name="Char.isUpper"></a>
<a name="Char.isAlpha"></a>
<a name="Char.isAlphaNum"></a>
#### val isLower, isUpper, isAlpha, isAlphaNum
```
:: char -> bool
```
<a name="Char.isDigit"></a>
<a name="Char.isHexDigit"></a>
#### val isDigit, isHexDigit
```
:: char -> bool
```
<a name="Char.isSpace"></a>
#### val isSpace
```
:: char -> bool
```
<a name="Char.toLower"></a>
<a name="Char.toUpper"></a>
#### val toLower, toUpper
```
:: char -> char
```
<a name="Char.fromCode"></a>
#### val fromCode
```
:: int -> char
```
<a name="Char.toCode"></a>
#### val toCode
```
:: char -> int
```
# IO
<a name="IO.io"></a>
#### type io
```
:: Type -> Type
```
<a name="IO.map"></a>
#### val map
```
:: any a b. (a -> b) -> io a -> io b
```
<a name="IO.apply"></a>
#### val apply
```
:: any a b. io (a -> b) -> io a -> io b
```
<a name="IO.bind"></a>
#### val bind
```
:: any a b. (a -> io b) -> io a -> io b
```
<a name="IO.then"></a>
#### val then
```
:: any a. io a -> io void -> io a
```
<a name="IO.pure"></a>
#### val pure
```
:: any a. a -> io a
```
<a name="IO.none"></a>
#### val none
```
:: io void
```
<a name="IO.map2"></a>
#### val map2
```
:: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> io a1
  -> io a2
  -> io a3
```
<a name="IO.map3"></a>
#### val map3
```
:: any a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> io a1
  -> io a2
  -> io a3
  -> io a4
```
<a name="IO.map4"></a>
#### val map4
```
:: any a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> io a1
  -> io a2
  -> io a3
  -> io a4
  -> io a5
```
<a name="IO.sequence"></a>
#### val sequence
```
:: any a. list (io a) -> io (list a)
```
<a name="IO.sequenceMap"></a>
#### val sequenceMap
```
:: any a b. (a -> io b) -> list a -> io (list b)
```
# List
<a name="List.list"></a>
#### type list
```
:: Type -> Type
```
<a name="List.makeList"></a>
#### val makeList
```
:: [Empty := void; Cons := {Head := a; Tail := list a; nil}; nil] -> list a
```
<a name="List.getList"></a>
#### val getList
```
:: list a -> [Empty := void; Cons := {Head := a; Tail := list a; nil}; nil]
```
<a name="List.empty"></a>
#### val empty
```
:: any a. list a
```
<a name="List.(:)"></a>
#### val (:)
```
:: any a. a -> list a -> list a
```
<a name="List.deconstruct"></a>
#### val deconstruct
```
:: any a b. b -> (a -> list a -> b) -> list a -> b
```
<a name="List.single"></a>
#### val single
```
:: any a. a -> list a
```
<a name="List.head"></a>
#### val head
```
:: any a. list a -> maybe a
```
<a name="List.tail"></a>
#### val tail
```
:: any a. list a -> maybe (list a)
```
<a name="List.take"></a>
#### val take
```
:: any a. int -> list a -> list a
```
<a name="List.drop"></a>
#### val drop
```
:: any a. int -> list a -> list a
```
<a name="List.get"></a>
#### val get
```
:: any a. int -> list a -> maybe a
```
<a name="List.isEmpty"></a>
#### val isEmpty
```
:: any a. list a -> bool
```
<a name="List.length"></a>
#### val length
```
:: any a. list a -> int
```
<a name="List.(++)"></a>
#### val (++)
```
:: any a. list a -> list a -> list a
```
<a name="List.concat"></a>
#### val concat
```
:: any a. list (list a) -> list a
```
<a name="List.concatMap"></a>
#### val concatMap
```
:: any a b. (a -> list b) -> list a -> list b
```
<a name="List.repeat"></a>
#### val repeat
```
:: any a. int -> a -> list a
```
<a name="List.reverse"></a>
#### val reverse
```
:: any a. list a -> list a
```
<a name="List.range"></a>
#### val range
```
:: int -> int -> list int
```
<a name="List.contains"></a>
#### val contains
```
:: any a. a -> list a -> bool
```
<a name="List.find"></a>
#### val find
```
:: any a. a -> list a -> list int
```
<a name="List.map"></a>
#### val map
```
:: any a b. (a -> b) -> list a -> list b
```
<a name="List.mapIndex"></a>
#### val mapIndex
```
:: any a b. (int -> a -> b) -> list a -> list b
```
<a name="List.mapResult"></a>
#### val mapResult
```
:: any e a b. (a -> result e b) -> list a -> list b
```
<a name="List.separate"></a>
#### val separate
```
:: any a b. list (a & b) -> list a & list b
```
<a name="List.filter"></a>
#### val filter
```
:: any a. (a -> bool) -> list a -> list a
```
<a name="List.partition"></a>
#### val partition
```
:: any a. (a -> bool) -> list a -> list a & list a
```
<a name="List.count"></a>
#### val count
```
:: any a. (a -> bool) -> list a -> int
```
<a name="List.some"></a>
#### val some
```
:: any a. (a -> bool) -> list a -> bool
```
<a name="List.all"></a>
#### val all
```
:: any a. (a -> bool) -> list a -> bool
```
<a name="List.foldLeft"></a>
#### val foldLeft
```
:: any a b. (a -> b -> b) -> b -> list a -> b
```
<a name="List.foldRight"></a>
#### val foldRight
```
:: any a b. (a -> b -> b) -> b -> list a -> b
```
<a name="List.sum"></a>
#### val sum
```
:: any x. list (num x) -> num x
```
<a name="List.product"></a>
#### val product
```
:: any x. list (num x) -> num x
```
<a name="List.sort"></a>
#### val sort
```
:: any a. list a -> list a
```
<a name="List.sortBy"></a>
#### val sortBy
```
:: any a b. (a -> b) -> list a -> list a
```
<a name="List.sortWith"></a>
#### val sortWith
```
:: any a. (a -> a -> order) -> list a -> list a
```
<a name="List.apply"></a>
#### val apply
```
:: any a b. list (a -> b) -> list a -> list b
```
<a name="List.map2"></a>
#### val map2
```
:: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> list a1
  -> list a2
  -> list a3
```
<a name="List.map3"></a>
#### val map3
```
:: any a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
```
<a name="List.map4"></a>
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
<a name="List.zipApply"></a>
#### val zipApply
```
:: any a b. list (a -> b) -> list a -> list b
```
<a name="List.zip2"></a>
#### val zip2
```
:: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> list a1
  -> list a2
  -> list a3
```
<a name="List.zip3"></a>
#### val zip3
```
:: any a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
```
<a name="List.zip4"></a>
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
# Math
<a name="Math.square"></a>
<a name="Math.cube"></a>
#### val square, cube
```
:: any x. num x -> num x
```
<a name="Math.sqrt"></a>
<a name="Math.cbrt"></a>
#### val sqrt, cbrt
```
:: float -> float
```
<a name="Math.exp"></a>
#### val exp
```
:: float -> float
```
<a name="Math.(**)"></a>
#### val (**)
```
:: float -> float -> float
```
<a name="Math.log"></a>
#### val log
```
:: float -> float
```
<a name="Math.logBase"></a>
#### val logBase
```
:: float -> float -> float
```
<a name="Math.pi"></a>
#### val pi
```
:: float
```
<a name="Math.tau"></a>
#### val tau
```
:: float
```
<a name="Math.angle"></a>
#### type angle
```
 = float
```
<a name="Math.radians"></a>
<a name="Math.degrees"></a>
<a name="Math.turns"></a>
#### val radians, degrees, turns
```
:: float -> angle
```
<a name="Math.sin"></a>
<a name="Math.cos"></a>
<a name="Math.tan"></a>
#### val sin, cos, tan
```
:: angle -> float
```
<a name="Math.asin"></a>
<a name="Math.acos"></a>
<a name="Math.atan"></a>
#### val asin, acos, atan
```
:: float -> angle
```
<a name="Math.atan2"></a>
#### val atan2
```
:: float -> float -> angle
```
<a name="Math.sinh"></a>
<a name="Math.cosh"></a>
<a name="Math.tanh"></a>
#### val sinh, cosh, tanh
```
:: angle -> float
```
<a name="Math.asinh"></a>
<a name="Math.acosh"></a>
<a name="Math.atanh"></a>
#### val asinh, acosh, atanh
```
:: float -> angle
```
<a name="Math.hypot"></a>
#### val hypot
```
:: float -> float -> float
```
<a name="Math.distance"></a>
#### val distance
```
:: float -> float -> float -> float -> float
```
# Prelude
### Functions 
<a name="Prelude.(->)"></a>
#### type (->)
```
:: Type -> Type -> Type
```
The type of functions. For example, a function that takes an integer and
returns a string would have the type `int -> string`.

<a name="Prelude.identity"></a>
#### val identity
```
:: any a. a -> a
```
A function that does nothing. `identity x` is equivalent to `x`.

<a name="Prelude.const"></a>
#### val const
```
:: any a b. a -> b -> a
```
`const x` is a function that ignores its argument and returns `x`.
You can also use the notation `{ x }`.

<a name="Prelude.($)"></a>
#### expand ($)
```
f x = f x
```
Apply the function on the left to the value on the right.
The `$` operator has a relatively low precedence,
so it is useful for avoiding parentheses. For example `f (g (h x))`
can be written `f $ g $ h x`.

<a name="Prelude.(#)"></a>
#### expand (#)
```
x f = f x
```
Apply the function on the right to the value on the left.
For example, `f (g (h x)) can be written h x # g # f`.

<a name="Prelude.(<<)"></a>
#### val (<<)
```
:: any a b c. (b -> c) -> (a -> b) -> (a -> c)
```
Right-to-left function composition. `f << g` performs `g` and then `f`.

<a name="Prelude.(>>)"></a>
#### val (>>)
```
:: any a b c. (a -> b) -> (b -> c) -> (a -> c)
```
Left-to-right function composition. `f >> g` performs `f` and then `g`.

### Numeric types and conversions 
<a name="Prelude.i"></a>
#### type i
```
:: Num
```
<a name="Prelude.f"></a>
#### type f
```
:: Num
```
<a name="Prelude.num"></a>
#### type num
```
:: Num -> Type
```
The type-level values `i` and `f` are of a different _kind_ than normal types.
You can convert them into types with the constructor `num`; `num i` is
the type of integers and `num f` is the type of floats. You
can define functions that work on both integers and floats by writing
`any x. num x`.

<a name="Prelude.int"></a>
#### type int
```
 = num i
```
The type of integers. Lune compiles to Javascript, so integers and floats
have the same representation at runtime. Nevertheless, the Lune type system
distinguishes the two, because there are some computations (such as `mod`)
that only make sense with integers.

<a name="Prelude.float"></a>
#### type float
```
 = num f
```
The type of floating-point numbers.

<a name="Prelude.float"></a>
#### val float
```
:: int -> float
```
Convert an integer into a float. Lune does not perform such coercions implicitly.

<a name="Prelude.round"></a>
#### val round
```
:: float -> int
```
Round a number to the nearest integer.

<a name="Prelude.floor"></a>
#### val floor
```
:: float -> int
```
Round a number down.
```
floor 1.5  --> 1
floor -1.5 --> -2
```

<a name="Prelude.ceil"></a>
#### val ceil
```
:: float -> int
```
Round a number up.

ceil 1.5  --> 2
ceil -1.5 --> -1
```

<a name="Prelude.trunc"></a>
#### val trunc
```
:: float -> int
```
If the input is less than zero, round up; otherwise, round down.
In other words, get rid of everything after the decimal point.
```
trunc 1.5  --> 1
trunc -1.5 --> -1
```

### Mathematical operations 
<a name="Prelude.(+)"></a>
<a name="Prelude.(~)"></a>
<a name="Prelude.(*)"></a>
#### val (+), (~), (*)
```
:: any x. num x -> num x -> num x
```
Addition, subtraction, and multiplication.

Why is subtraction denoted with `~`?
Well, consider the following expressions:
```
x -y
(-z)
```
Should `x -y` be interpreted as subtraction? Or is it applying a function to a
negative number? And is `(-z)` a negation or an operator section? I have
decided to avoid these ambiguities by denoting subtraction with `~` and
negation with `-`.

<a name="Prelude.negate"></a>
#### val negate
```
:: any x. num x -> num x
```
Negate a number. `-x` is syntactic sugar for `negate x`.

<a name="Prelude.abs"></a>
#### val abs
```
:: any x. num x -> num x
```
Take the absolute value of a number.

<a name="Prelude.signum"></a>
#### val signum
```
:: any x. num x -> num x
```
Find the "sign" of a number. For positive numbers, `signum` returns 1,
for negative numbers, it returns -1, and for 0, it returns 0. Note that
`abs x * signum x` is equal to `x`.

<a name="Prelude.constrain"></a>
#### val constrain
```
:: any x. num x -> num x -> num x -> num x
```
Constrain a number between a lower bound (the first argument) and an
upper bound (the second argument). For example, `constrain 0 10 11` is
equal to `10`, and `constrain 0 10 5` is equal to `5`.

<a name="Prelude.div"></a>
<a name="Prelude.quot"></a>
#### val div, quot
```
:: int -> int -> int
```
Integer division. `div` rounds the result down, and `quot` truncates it.
For positive arguments, these are the same thing.

_Haskellers beware:_ the arguments to `div` and `quot` are the opposite
of the Haskell definitions. `div 2` is a function that divides a number by 2,
so `div 2 10` is equal to 5.

<a name="Prelude.mod"></a>
<a name="Prelude.rem"></a>
#### val mod, rem
```
:: int -> int -> int
```
Integer modulo. `mod` represents actual modulo, and `rem` is the
so-called "modulo" operation written with a `%` in most languages.
The difference only matters with negative arguments: `mod 3 -1` evaluates to
2, but `rem 3 -1` evaluates to -1.

_Haskellers beware:_ the arguments to `mod` and `rem` are the opposite
of the Haskell definitions. `mod 2` is a function that mods a number by 2,
so `mod 2 10` is equal to 0.

<a name="Prelude.(/)"></a>
#### val (/)
```
:: float -> float -> float
```
Floating-point division.

### Rows 
A row is an unordered collection of types with labels attached to them.
Rows are of the kind `Row`. They can be converted into normal types in two ways:
* Surrounding a row in curly brackets creates a _record_ type,
also known as a labeled product type. If you have a value with more than
one property, use records.
* Surrounding a row in square brackets creates a _variant_ type,
also known as a labeled sum type. If you have a value that can exist in
more than one state, use variants.
Lune's row system is based on the following two papers by Daan Leijen:
* [Extensible records with scoped labels](https://www.microsoft.com/en-us/research/publication/extensible-records-with-scoped-labels/)
* [First-class labels for extensible rows](https://www.microsoft.com/en-us/research/publication/first-class-labels-for-extensible-rows/)

<a name="Prelude.nil"></a>
#### type nil
```
:: Row
```
The empty row.

<a name="Prelude.(:=)"></a>
#### type (:=)
```
:: Label -> Type -> Row -> Row
```
Add a label and a type to a row. The `:=` operator is usually
used in conjunction with `;`. For example, to add the label `X`
along with the type `float` to the row `r`, you can write `X := float; r`.

<a name="Prelude.(|)"></a>
#### type (|)
```
s = s := void
```
Add a label to a row, along with the unit type. This is useful in variants
where one of the states has no associated data.

<a name="Prelude.(;)"></a>
#### type (;)
```
f x = f x
```
Apply a type constructor to an argument.

<a name="Prelude.record"></a>
#### type record
```
:: Row -> Type
```
Convert an abstract row into a record type. The shorthand `{r}` is
syntactic sugar for `Prelude.record r`.

<a name="Prelude.variant"></a>
#### type variant
```
:: Row -> Type
```
Convert an abstract row into a variant type. The shorthand `[r]` is
syntactic sugar for `Prelude.variant r`.

<a name="Prelude.label"></a>
#### type label
```
:: Label -> Type
```
In Lune, labels are first-class values. The expression-level label
`X` has the type `label X`. At the type

<a name="Prelude.void"></a>
#### type void
```
 = {nil}
```
The unit type. The only value of type `void` is the empty record, also
denoted `void`.

### Records 
<a name="Prelude.void"></a>
#### val void
```
:: void
```
The empty record.

<a name="Prelude.(?)"></a>
#### val (?)
```
:: any s a r. label s -> {s := a; r} -> a
```
Extract a value from a record.
```
let person = Name := "Owen"; Age := 16; void
Name ? person --> "Owen"
Age ? person  --> 16
```

<a name="Prelude.delete"></a>
#### val delete
```
:: any s a r. label s -> {s := a; r} -> {r}
```
Delete a label and its associated value from a record.
```
let person = Name := "Owen"; Age := 16; void
delete Age person --> Name := "Owen"; void
```

<a name="Prelude.(:=)"></a>
#### val (:=)
```
:: any s a r. label s -> a -> {r} -> {s := a; r}
```
Add a label and a value to a record. The `:=` operator is usually
used in conjunction with `;`. For example, to add the label `X`
along with the value `5` to the record `r`, you can write `X := 5; r`.

<a name="Prelude.(!=)"></a>
#### val (!=)
```
:: any s a b r. label s -> b -> {s := a; r} -> {s := b; r}
```
Replace a value in a record.
```
let person = Name := "Owen"; Age := 16; void
Name != "Jack"; person --> Name := "Jack"; Age := 16; void
```

<a name="Prelude.(#=)"></a>
#### val (#=)
```
:: any s a b r. label s -> (a -> b) -> {s := a; r} -> {s := b; r}
```
Update a value in a record by applying the given function to it.
```
let person = Name := "Owen"; Age := 16; void
Age #= (+1); person --> Name := "Owen"; Age := 17; void
```

<a name="Prelude.(;)"></a>
#### val (;)
```
:: any a b. (a -> b) -> a -> b
```
Apply the function on the left to the value on the right. The (;) operator
is similar to ($), but has an even lower precedence and is typically
used in records.

### Variants 
<a name="Prelude.(^)"></a>
#### val (^)
```
:: any s a r. label s -> a -> [s := a; r]
```
Attach a label to a value. The `^` operator is polymorphic in its return
type, so `X ^ 3.5` could have any of the following types:
```
[ X := float; nil ]
[ X := float; Y := float; nil ]
[ X := float; Foo := list string; Qwerty := void; nil ]
```
and so on.

<a name="Prelude.embed"></a>
#### val embed
```
:: any s a r. label s -> [r] -> [s := a; r]
```
Suppose we have a value `v` that's annotated as a `bool`, represented in Lune as
`[ True | False | nil ]`. Now suppose we need to convert `v`
into a value of the type `[ True | False | Maybe | nil ]`
We aren't actually changing the value; we're just "adding a possibility."
In Lune, this is written as `embed Maybe v`.

<a name="Prelude.match"></a>
#### val match
```
:: any s a b r. label s -> (a -> b) -> ([r] -> b) -> [s := a; r] -> b
```
Match a variant against a label and apply the appropriate function. The
expression `variant # match Label f g` represents the following process:
* If `variant` is of the form `Label ^ value`, return `f value`.
* Otherwise, return `g variant`.
Matches can be chained. For example:
```
type color = [ Red | Green | Blue | nil ]
val toInt :: color -> int
let toInt =
  match Red { 0 }
  $ match Green { 1 }
  { 2 }
```

<a name="Prelude.else"></a>
#### val else
```
:: any a b. a -> b -> a
```
Using `else` can make matches more readable. The example above
could also be written as:
```
let toInt =
  match Red { 0 }
  $ match Green { 1 }
  $ else 2
```

<a name="Prelude.absurd"></a>
#### val absurd
```
:: any a. [nil] -> a
```
Sometimes, you need test every possible label.
In this case, the type of `match` requires you
to give it a function of type `[nil] -> b`. This is where `absurd`
comes in:
```
let toInt =
  match Red { 0 }
  $ match Green { 1 }
  $ match Blue { 2 }
  absurd
```

<a name="Prelude.only"></a>
#### val only
```
:: any s r. label s -> [s := void; r]
```
A label with no information attached to it.
```
val red :: color
let red = only Red
```

### Delayed computations 
<a name="Prelude.delay"></a>
#### type delay
```
a = void -> a
```
A "delayed computation" is a function that takes no arguments. (More
precisely, it takes a useless argument of type `void`.)

<a name="Prelude.force"></a>
#### val force
```
:: any a. delay a -> a
```
Force a delayed computation.

<a name="Prelude.general"></a>
#### val general
```
:: any a b. delay a -> b -> a
```
Generalise a delayed computation, so you can apply it to any value
instead of just `void`.

### Pairs 
<a name="Prelude.(&)"></a>
#### type (&)
```
a b = { First := a; Second := b; nil }
```
Ordered pairs (also known as tuples) are represented as
records with a `First` field and a `Second` field.

<a name="Prelude.(&)"></a>
#### val (&)
```
:: any a b. a -> b -> a & b
```
Construct an ordered pair from two values.

### Booleans 
<a name="Prelude.bool"></a>
#### type bool
```
 = [ True | False | nil ]
```
Unlike most languages, Lune does not have built-in booleans.
The `bool` type and all boolean operations can be defined
with Lune's variant system.

<a name="Prelude.true"></a>
<a name="Prelude.false"></a>
#### val true, false
```
:: bool
```
A boolean can be either `true` or `false`. These are defined as
`only True` and `only False` respectively.

<a name="Prelude.not"></a>
#### val not
```
:: bool -> bool
```
Boolean inversion. Truth is fantasy, and fantasy is truth.
```
not true  --> false
not false --> true
```

<a name="Prelude.(&&)"></a>
#### expand (&&)
```
x y = and x { y }
```
Test if both statements are true. The `&&` operator
"short-circuits", so the second argument will not be evaluated
if the first one is `false`.

<a name="Prelude.(||)"></a>
#### expand (||)
```
x y = or x { y }
```
Test if at least one of the statements is true. The `||` operator
"short-circuits", so the second argument will not be evaluated if the
first one is `true`.

This short-circuiting behavior is not built in. There is nothing
special about `&&` and `||`; they are defined using Lune's
expression synonym feature.

<a name="Prelude.if"></a>
#### val if
```
:: any a. bool -> delay a -> delay a -> a
```
The expression `if condition x y` evaluates `x` if the condition
is true, and `y` if it is false. For example,
the `trunc` function is defined as follows:
```
val trunc :: float -> float
let trunc x = if (x < 0) { ceil x } { floor x }
```
which could also be written as:
```
let trunc x = if (x < 0) { ceil x } $ else (floor x)
```

### Comparisons and predicates 
<a name="Prelude.(==)"></a>
#### val (==)
```
:: any a. a -> a -> bool
```
Test if two values are equal. The `==` operator checks for _actual_
equality, not referential equality.

<a name="Prelude.(/=)"></a>
#### val (/=)
```
:: any a. a -> a -> bool
```
Test if two values are not equal.

<a name="Prelude.(<)"></a>
<a name="Prelude.(>)"></a>
#### val (<), (>)
```
:: any a. a -> a -> bool
```
Test if one value is less than the other. Record fields and variant
labels are compared in alphabetical order.

<a name="Prelude.(<=)"></a>
<a name="Prelude.(>=)"></a>
#### val (<=), (>=)
```
:: any a. a -> a -> bool
```
Test if one value is less than or equal to the other.

<a name="Prelude.isFinite"></a>
#### val isFinite
```
:: float -> bool
```
Test if a floating-point number is finite.
```
isFinite 6        --> true
isFinite (1 / 0)  --> false
isFinite (0 / 0)  --> false
```

<a name="Prelude.isInfinite"></a>
#### val isInfinite
```
:: float -> bool
```
Test if a floating-point number is infinite.
```
isInfinite 6       --> false
isInfinite (1 / 0) --> true
isInfinite (0 / 0) --> false
```

<a name="Prelude.isNaN"></a>
#### val isNaN
```
:: float -> bool
```
Test if a floating-point number is NaN.
```
isNaN 6       --> false
isNaN (1 / 0) --> false
isNaN (0 / 0) --> true
```

<a name="Prelude.min"></a>
<a name="Prelude.max"></a>
#### val min, max
```
:: any a. a -> a -> a
```
Find the minimum or maximum of two values.

<a name="Prelude.order"></a>
#### type order
```
 = [Less := void; Equal := void; Greater := void; nil]
```
<a name="Prelude.compare"></a>
#### val compare
```
:: any a. a -> a -> order
```
Compare two values and return an `order`.

# Program
<a name="Program.program"></a>
#### type program
```
st a = st -> io { Set := st; Return := a; nil }
```
<a name="Program.get"></a>
#### val get
```
:: any st. program st st
```
<a name="Program.getBy"></a>
#### val getBy
```
:: any st a. (st -> a) -> program st a
```
<a name="Program.put"></a>
#### val put
```
:: any st. st -> program st void
```
<a name="Program.modify"></a>
#### val modify
```
:: any st. (st -> st) -> program st void
```
<a name="Program.map"></a>
#### val map
```
:: any st a b. (a -> b) -> program st a -> program st b
```
<a name="Program.apply"></a>
#### val apply
```
:: any st a b. program st (a -> b) -> program st a -> program st b
```
<a name="Program.bind"></a>
#### val bind
```
:: any st a b. (a -> program st b) -> program st a -> program st b
```
<a name="Program.then"></a>
#### val then
```
:: any st a. program st a -> program st void -> program st a
```
<a name="Program.run"></a>
#### val run
```
:: any st a. st -> program st a -> io a
```
<a name="Program.fromIO"></a>
#### val fromIO
```
:: any st a. io a -> program st a
```
<a name="Program.pure"></a>
#### val pure
```
:: any st a. a -> program st a
```
<a name="Program.none"></a>
#### val none
```
:: any st. program st void
```
<a name="Program.map2"></a>
#### val map2
```
:: any st a1 a2 a3
   . (a1 -> a2 -> a3)
  -> program st a1
  -> program st a2
  -> program st a3
```
<a name="Program.map3"></a>
#### val map3
```
:: any st a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> program st a1
  -> program st a2
  -> program st a3
  -> program st a4
```
<a name="Program.map4"></a>
#### val map4
```
:: any st a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> program st a1
  -> program st a2
  -> program st a3
  -> program st a4
  -> program st a5
```
<a name="Program.sequence"></a>
#### val sequence
```
:: any st a. list (program st a) -> program st (list a)
```
<a name="Program.sequenceMap"></a>
#### val sequenceMap
```
:: any st a b. (a -> program st b) -> list a -> program st (list b)
```
# Result
<a name="Result.result"></a>
#### type result
```
e a = [Error := e; Just := a; nil]
```
<a name="Result.maybe"></a>
#### type maybe
```
a = result void a
```
<a name="Result.nothing"></a>
#### val nothing
```
:: any a. maybe a
```
<a name="Result.default"></a>
#### val default
```
:: any e a. a -> result e a -> a
```
<a name="Result.map"></a>
#### val map
```
:: any e a b. (a -> b) -> result e a -> result e b
```
<a name="Result.apply"></a>
#### val apply
```
:: any e a b. result e (a -> b) -> result e a -> result e b
```
<a name="Result.bind"></a>
#### val bind
```
:: any e a b. (a -> result e b) -> result e a -> result e b
```
<a name="Result.map2"></a>
#### val map2
```
:: any e a1 a2 a3
   . (a1 -> a2 -> a3)
  -> result e a1
  -> result e a2
  -> result e a3
```
<a name="Result.map3"></a>
#### val map3
```
:: any e a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> result e a1
  -> result e a2
  -> result e a3
  -> result e a4
```
<a name="Result.map4"></a>
#### val map4
```
:: any e a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> result e a1
  -> result e a2
  -> result e a3
  -> result e a4
  -> result e a5
```
<a name="Result.sequence"></a>
#### val sequence
```
:: any e a. list (result e a) -> result e (list a)
```
<a name="Result.sequenceMap"></a>
#### val sequenceMap
```
:: any e a b. (a -> result e b) -> list a -> result e (list b)
```
# String
<a name="String.string"></a>
#### type string
```
:: Type
```
<a name="String.isEmpty"></a>
#### val isEmpty
```
:: string -> bool
```
<a name="String.length"></a>
#### val length
```
:: string -> int
```
<a name="String.(<>)"></a>
#### val (<>)
```
:: string -> string -> string
```
<a name="String.concat"></a>
#### val concat
```
:: list string -> string
```
<a name="String.concatMap"></a>
#### val concatMap
```
:: any a. (a -> string) -> list a -> string
```
<a name="String.join"></a>
#### val join
```
:: string -> list string -> string
```
<a name="String.joinMap"></a>
#### val joinMap
```
:: any a. string -> (a -> string) -> list a -> string
```
<a name="String.repeat"></a>
#### val repeat
```
:: int -> string -> string
```
<a name="String.reverse"></a>
#### val reverse
```
:: string -> string
```
<a name="String.split"></a>
#### val split
```
:: string -> string -> list string
```
<a name="String.words"></a>
<a name="String.lines"></a>
#### val words, lines
```
:: string -> list string
```
<a name="String.slice"></a>
#### val slice
```
:: int -> int -> string -> string
```
<a name="String.takeLeft"></a>
#### val takeLeft
```
:: int -> string -> string
```
<a name="String.takeRight"></a>
#### val takeRight
```
:: int -> string -> string
```
<a name="String.dropLeft"></a>
#### val dropLeft
```
:: int -> string -> string
```
<a name="String.dropRight"></a>
#### val dropRight
```
:: int -> string -> string
```
<a name="String.toLower"></a>
<a name="String.toUpper"></a>
#### val toLower, toUpper
```
:: string -> string
```
<a name="String.padLeft"></a>
<a name="String.padRight"></a>
#### val padLeft, padRight
```
:: int -> string -> string
```
<a name="String.trim"></a>
<a name="String.trimLeft"></a>
<a name="String.trimRight"></a>
#### val trim, trimLeft, trimRight
```
:: string -> string
```
<a name="String.contains"></a>
<a name="String.startsWith"></a>
<a name="String.endsWith"></a>
#### val contains, startsWith, endsWith
```
:: string -> string -> bool
```
<a name="String.find"></a>
#### val find
```
:: string -> string -> list int
```
<a name="String.replace"></a>
#### val replace
```
:: string -> string -> string -> string
```
<a name="String.toInt"></a>
#### val toInt
```
:: string -> maybe int
```
<a name="String.fromInt"></a>
#### val fromInt
```
:: int -> string
```
<a name="String.toFloat"></a>
#### val toFloat
```
:: string -> maybe float
```
<a name="String.fromFloat"></a>
#### val fromFloat
```
:: float -> string
```
<a name="String.toList"></a>
#### val toList
```
:: string -> list char
```
<a name="String.fromList"></a>
#### val fromList
```
:: list char -> string
```
<a name="String.cons"></a>
#### val cons
```
:: char -> string -> string
```
<a name="String.deconstruct"></a>
#### val deconstruct
```
:: any a. a -> (char -> string -> a) -> string -> a
```
<a name="String.single"></a>
#### val single
```
:: char -> string
```
<a name="String.head"></a>
#### val head
```
:: string -> maybe char
```
<a name="String.tail"></a>
#### val tail
```
:: string -> maybe string
```
<a name="String.get"></a>
#### val get
```
:: int -> string -> maybe char
```
<a name="String.map"></a>
#### val map
```
:: (char -> char) -> string -> string
```
<a name="String.mapIndex"></a>
#### val mapIndex
```
:: (int -> char -> char) -> string -> string
```
<a name="String.filter"></a>
#### val filter
```
:: (char -> bool) -> string -> string
```
<a name="String.partition"></a>
#### val partition
```
:: (char -> bool) -> string -> string & string
```
<a name="String.count"></a>
#### val count
```
:: (char -> bool) -> string -> int
```
<a name="String.some"></a>
#### val some
```
:: (char -> bool) -> string -> bool
```
<a name="String.all"></a>
#### val all
```
:: (char -> bool) -> string -> bool
```
<a name="String.foldLeft"></a>
#### val foldLeft
```
:: any a. (char -> a -> a) -> a -> string -> a
```
<a name="String.foldRight"></a>
#### val foldRight
```
:: any a. (char -> a -> a) -> a -> string -> a
```
# Variant
<a name="Variant.map"></a>
#### val map
```
:: any s a b r. label s -> (a -> b) -> [s := a; r] -> [s := b; r]
```
<a name="Variant.apply"></a>
#### val apply
```
:: any s a b r. label s -> [s := (a -> b); r] -> [s := a; r] -> [s := b; r]
```
<a name="Variant.bind"></a>
#### val bind
```
:: any s a b r. label s -> (a -> [s := b; r]) -> [s := a; r] -> [s := b; r]
```
<a name="Variant.map2"></a>
#### val map2
```
:: any s a1 a2 a3 r
   . label s
  -> (a1 -> a2 -> a3)
  -> [s := a1; r]
  -> [s := a2; r]
  -> [s := a3; r]
```
<a name="Variant.map3"></a>
#### val map3
```
:: any s a1 a2 a3 a4 r
   . label s
  -> (a1 -> a2 -> a3 -> a4)
  -> [s := a1; r]
  -> [s := a2; r]
  -> [s := a3; r]
  -> [s := a4; r]
```
<a name="Variant.map4"></a>
#### val map4
```
:: any s a1 a2 a3 a4 a5 r
   . label s
  -> (a1 -> a2 -> a3 -> a4 -> a5)
  -> [s := a1; r]
  -> [s := a2; r]
  -> [s := a3; r]
  -> [s := a4; r]
  -> [s := a5; r]
```
<a name="Variant.sequence"></a>
#### val sequence
```
:: any s a r. label s -> list [s := a; r] -> [s := list a; r]
```
<a name="Variant.sequenceMap"></a>
#### val sequenceMap
```
:: any s a b r. label s -> (a -> [s := b; r]) -> list a -> [s := list b; r]
```
