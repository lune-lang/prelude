# Prelude
## Functions 
<a name="type-(->)"></a>
#### type (->)
```
:: Type -> Type -> Type
```
The type of functions. For example, a function that takes an integer and
returns a string would have the type `int -> string`.

<a name="identity"></a>
#### val identity
```
:: any a. a -> a
```
A function that does nothing. `identity x` is equivalent to `x`.

<a name="const"></a>
#### val const
```
:: any a b. a -> b -> a
```
`const x` is a function that ignores its argument and returns `x`.
You can also use the notation `{ x }`.

<a name="($)"></a>
#### expand ($)
```
($) f x = f x
```
Apply the function on the left to the value on the right.
The `$` operator has a relatively low precedence,
so it is useful for avoiding parentheses. For example `f (g (h x))`
can be written `f $ g $ h x`.

<a name="(#)"></a>
#### expand (#)
```
(#) x f = f x
```
Apply the function on the right to the value on the left.
For example, `f (g (h x)) can be written h x # g # f`.

<a name="(<<)"></a>
#### val (<<)
```
:: any a b c. (b -> c) -> (a -> b) -> (a -> c)
```
Right-to-left function composition. `f << g` performs `g` and then `f`.

<a name="(>>)"></a>
#### val (>>)
```
:: any a b c. (a -> b) -> (b -> c) -> (a -> c)
```
Left-to-right function composition. `f >> g` performs `f` and then `g`.

## Numeric types and conversions 
<a name="type-i"></a>
#### type i
```
:: Num
```
<a name="type-f"></a>
#### type f
```
:: Num
```
<a name="type-num"></a>
#### type num
```
:: Num -> Type
```
The type-level values `i` and `f` are of a different _kind_ than normal types.
You can convert them into types with the constructor `num`; `num i` is
the type of integers and `num f` is the type of floats. You
can define functions that work on both integers and floats by writing
`any x. num x`.

<a name="type-int"></a>
#### type int
```
int = num i
```
The type of integers. Lune compiles to Javascript, so integers and floats
have the same representation at runtime. Nevertheless, the Lune type system
distinguishes the two, because there are some computations (such as [`mod`](#mod))
that only make sense with integers.

<a name="type-float"></a>
#### type float
```
float = num f
```
The type of floating-point numbers.

<a name="float"></a>
#### val float
```
:: int -> float
```
Convert an integer into a float. Lune does not perform such coercions implicitly.

<a name="round"></a>
#### val round
```
:: float -> int
```
Round a number to the nearest integer.

<a name="floor"></a>
#### val floor
```
:: float -> int
```
Round a number down.
```
floor 1.5  --> 1
floor -1.5 --> -2
```

<a name="ceil"></a>
#### val ceil
```
:: float -> int
```
Round a number up.
```
ceil 1.5  --> 2
ceil -1.5 --> -1
```

<a name="trunc"></a>
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

## Mathematical operations 
<a name="(+)"></a>
<a name="(~)"></a>
<a name="(*)"></a>
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

<a name="negate"></a>
#### val negate
```
:: any x. num x -> num x
```
Negate a number. `-x` is syntactic sugar for `Prelude.negate x`.

<a name="abs"></a>
#### val abs
```
:: any x. num x -> num x
```
Take the absolute value of a number.

<a name="signum"></a>
#### val signum
```
:: any x. num x -> num x
```
Find the "sign" of a number. For positive numbers, `signum` returns 1,
for negative numbers, it returns -1, and for 0, it returns 0. Note that
`abs x * signum x` is always equal to `x`.

<a name="constrain"></a>
#### val constrain
```
:: any x. num x -> num x -> num x -> num x
```
Constrain a number between a lower bound (the first argument) and an
upper bound (the second argument).
```
constrain 0 10 11 --> 10
constrain 0 10 -2 --> 0
constrain 0 10 6  --> 6
```

<a name="div"></a>
<a name="quot"></a>
#### val div, quot
```
:: int -> int -> int
```
Integer division. `div` rounds the result down, and `quot` truncates it.
For positive arguments, these are the same thing.

_Haskellers beware:_ the arguments to `div` and `quot` are the opposite
of the Haskell definitions. `div 2` is a function that divides a number by 2,
so `div 2 10` is equal to 5.

<a name="mod"></a>
<a name="rem"></a>
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

<a name="(/)"></a>
#### val (/)
```
:: float -> float -> float
```
Floating-point division.

## Rows 
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

<a name="type-nil"></a>
#### type nil
```
:: Row
```
The empty row.

<a name="type-(:=)"></a>
#### type (:=)
```
:: Label -> Type -> Row -> Row
```
Add a label and a type to a row. The `:=` operator is usually
used in conjunction with [`;`](#type-(;)). For example, to add the label `X`
along with the type `float` to the row `r`, you can write `X := float; r`.

<a name="type-(|)"></a>
#### type (|)
```
(|) s = s := unit
```
Add a label to a row, along with the unit type. This is useful in variants
where one of the states has no associated data.

<a name="type-(;)"></a>
#### type (;)
```
(;) f x = f x
```
Apply a type constructor to an argument.

<a name="type-record"></a>
#### type record
```
:: Row -> Type
```
Convert an abstract row into a record type. `{r}` is
syntactic sugar for `Prelude.record r`.

<a name="type-variant"></a>
#### type variant
```
:: Row -> Type
```
Convert an abstract row into a variant type. `[r]` is
syntactic sugar for `Prelude.variant r`.

<a name="type-label"></a>
#### type label
```
:: Label -> Type
```
In Lune, labels are first-class values. The expression-level label
`X` has the type `label X`.

<a name="type-unit"></a>
#### type unit
```
unit = {nil}
```
The unit type. The only value of type `unit` is the empty record, also
denoted `unit`.

## Records 
<a name="unit"></a>
#### val unit
```
:: unit
```
The empty record.

<a name="(?)"></a>
#### val (?)
```
:: any s a r. label s -> {s := a; r} -> a
```
Extract a value from a record.
```
let person = Name := "Owen"; Age := 16; unit
Name ? person --> "Owen"
Age ? person  --> 16
```

<a name="delete"></a>
#### val delete
```
:: any s a r. label s -> {s := a; r} -> {r}
```
Delete a label and its associated value from a record.
```
let person = Name := "Owen"; Age := 16; unit
delete Age person --> Name := "Owen"; unit
```

<a name="(:=)"></a>
#### val (:=)
```
:: any s a r. label s -> a -> {r} -> {s := a; r}
```
Add a label and a value to a record. The `:=` operator is usually
used in conjunction with [`;`](#(;)). For example, to add the label `X`
along with the value `5` to the record `r`, you can write `X := 5; r`.

<a name="(!=)"></a>
#### val (!=)
```
:: any s a b r. label s -> b -> {s := a; r} -> {s := b; r}
```
Replace a value in a record.
```
let person = Name := "Owen"; Age := 16; unit
Name != "Jack"; person --> Name := "Jack"; Age := 16; unit
```

<a name="(#=)"></a>
#### val (#=)
```
:: any s a b r. label s -> (a -> b) -> {s := a; r} -> {s := b; r}
```
Update a value in a record by applying the given function to it.
```
let person = Name := "Owen"; Age := 16; unit
Age #= (+1); person --> Name := "Owen"; Age := 17; unit
```

<a name="(;)"></a>
#### val (;)
```
:: any a b. (a -> b) -> a -> b
```
Apply the function on the left to the value on the right. The `;` operator
is similar to [`$`](#($)), but has an even lower precedence and is typically
used in records.

## Variants 
<a name="(^)"></a>
#### val (^)
```
:: any s a r. label s -> a -> [s := a; r]
```
Attach a label to a value. The `^` operator is polymorphic in its return
type, so `X ^ 3.5` could have any of the following types:
```
[ X := float; nil ]
[ X := float; Y := float; nil ]
[ X := float; Foo := list string; Qwerty := unit; nil ]
...
```

<a name="embed"></a>
#### val embed
```
:: any s a r. label s -> [r] -> [s := a; r]
```
Suppose we have a value `v` that's annotated as a [`bool`](#type-bool),
represented in Lune as `[ True | False | nil ]`. Now suppose we need to convert `v`
into a value of the type `[ True | False | Maybe | nil ]`
We aren't actually changing the value; we're just "adding a possibility."
In Lune, this is written as `embed Maybe v`.

<a name="match"></a>
#### val match
```
:: any s a b r. label s -> (a -> b) -> ([r] -> b) -> [s := a; r] -> b
```
Match a variant against a label and apply the appropriate function.
`variant # match Label f g` represents the following process:
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

<a name="else"></a>
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

<a name="absurd"></a>
#### val absurd
```
:: any a. [nil] -> a
```
Sometimes, you need test every possible label.
In this case, [`match`](#match) requires you
to give it a function of type `[nil] -> b`. This is where `absurd`
comes in:
```
let toInt =
  match Red { 0 }
  $ match Green { 1 }
  $ match Blue { 2 }
  absurd
```

<a name="only"></a>
#### val only
```
:: any s r. label s -> [s := unit; r]
```
A label with no information attached to it.
```
val red :: color
let red = only Red
```

## Delayed computations 
<a name="type-delay"></a>
#### type delay
```
delay a = unit -> a
```
A "delayed computation" is a function that takes no arguments. (More
precisely, it takes a useless argument of type [`unit`](#type-unit).)

<a name="force"></a>
#### val force
```
:: any a. delay a -> a
```
Force a delayed computation.

<a name="general"></a>
#### val general
```
:: any a b. delay a -> b -> a
```
Generalise a delayed computation, so you can apply it to any value
instead of just [`unit`](#unit).

## Pairs 
<a name="type-(&)"></a>
#### type (&)
```
(&) a b = { First := a; Second := b; nil }
```
Pairs (also known as tuples) are represented as
records with a `First` field and a `Second` field.

<a name="(&)"></a>
#### val (&)
```
:: any a b. a -> b -> a & b
```
Construct a pair from two values.

## Booleans 
<a name="type-bool"></a>
#### type bool
```
bool = [ True | False | nil ]
```
Unlike most languages, Lune does not have built-in booleans.
The `bool` type and all boolean operations can be defined
with Lune's variant system.

<a name="true"></a>
<a name="false"></a>
#### val true, false
```
:: bool
```
A boolean can be either `true` or `false`. These are defined as
`only True` and `only False` respectively.

<a name="not"></a>
#### val not
```
:: bool -> bool
```
Boolean inversion. Truth is fantasy, and fantasy is truth.
```
not true  --> false
not false --> true
```

<a name="(&&)"></a>
#### expand (&&)
```
(&&) x y = and x { y }
```
Test if both statements are true. The `&&` operator
"short-circuits", so the second argument will not be evaluated
if the first one is `false`.

<a name="(||)"></a>
#### expand (||)
```
(||) x y = or x { y }
```
Test if at least one of the statements is true. The `||` operator
"short-circuits", so the second argument will not be evaluated if the
first one is `true`.

This short-circuiting behavior is not built in. There is nothing
special about `&&` and `||`; they are defined using Lune's
expression synonym feature.

<a name="if"></a>
#### val if
```
:: any a. bool -> delay a -> delay a -> a
```
`if condition x y` evaluates `x` if the condition
is true, and `y` if it is false. For example,
the [`trunc`](#trunc) function is defined as follows:
```
val trunc :: float -> float
let trunc x = if (x < 0) { ceil x } { floor x }
```
which could also be written as:
```
let trunc x = if (x < 0) { ceil x } $ else (floor x)
```

## Comparisons and predicates 
<a name="(==)"></a>
#### val (==)
```
:: any a. a -> a -> bool
```
Test if two values are equal. The `==` operator checks for _actual_
equality, not referential equality.

<a name="(/=)"></a>
#### val (/=)
```
:: any a. a -> a -> bool
```
Test if two values are not equal.

<a name="(<)"></a>
<a name="(>)"></a>
#### val (<), (>)
```
:: any a. a -> a -> bool
```
Test if one value is less than the other. Record fields and variant
labels are compared in alphabetical order.

<a name="(<=)"></a>
<a name="(>=)"></a>
#### val (<=), (>=)
```
:: any a. a -> a -> bool
```
Test if one value is less than or equal to the other.

<a name="isFinite"></a>
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

<a name="isInfinite"></a>
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

<a name="isNaN"></a>
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

<a name="min"></a>
<a name="max"></a>
#### val min, max
```
:: any a. a -> a -> a
```
Find the minimum or maximum of two values.

<a name="type-order"></a>
#### type order
```
order = [ Less | Greater | Equal | nil ]
```
<a name="compare"></a>
#### val compare
```
:: any a. a -> a -> order
```
Compare two values and return an `order`.

