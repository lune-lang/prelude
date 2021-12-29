# Char
<a name="Char.char"></a>
<h4>

```
type char :: Type
```
</h4>

<a name="Char.isLower"></a>
<a name="Char.isUpper"></a>
<a name="Char.isAlpha"></a>
<a name="Char.isAlphaNum"></a>
<h4>

```
isLower, isUpper, isAlpha, isAlphaNum :: char -> bool
```
</h4>

<a name="Char.isDigit"></a>
<a name="Char.isHexDigit"></a>
<h4>

```
isDigit, isHexDigit :: char -> bool
```
</h4>

<a name="Char.isSpace"></a>
<h4>

```
isSpace :: char -> bool
```
</h4>

<a name="Char.toLower"></a>
<a name="Char.toUpper"></a>
<h4>

```
toLower, toUpper :: char -> char
```
</h4>

<a name="Char.fromCode"></a>
<h4>

```
fromCode :: int -> char
```
</h4>

<a name="Char.toCode"></a>
<h4>

```
toCode :: char -> int
```
</h4>

# IO
<a name="IO.io"></a>
<h4>

```
type io :: Type -> Type
```
</h4>

<a name="IO.map"></a>
<h4>

```
map :: any a b. (a -> b) -> io a -> io b
```
</h4>

<a name="IO.apply"></a>
<h4>

```
apply :: any a b. io (a -> b) -> io a -> io b
```
</h4>

<a name="IO.bind"></a>
<h4>

```
bind :: any a b. (a -> io b) -> io a -> io b
```
</h4>

<a name="IO.then"></a>
<h4>

```
then :: any a. io a -> io void -> io a
```
</h4>

<a name="IO.pure"></a>
<h4>

```
pure :: any a. a -> io a
```
</h4>

<a name="IO.none"></a>
<h4>

```
none :: io void
```
</h4>

<a name="IO.map2"></a>
<h4>

```
map2 :: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> io a1
  -> io a2
  -> io a3
```
</h4>

<a name="IO.map3"></a>
<h4>

```
map3 :: any a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> io a1
  -> io a2
  -> io a3
  -> io a4
```
</h4>

<a name="IO.map4"></a>
<h4>

```
map4 :: any a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> io a1
  -> io a2
  -> io a3
  -> io a4
  -> io a5
```
</h4>

<a name="IO.sequence"></a>
<h4>

```
sequence :: any a. list (io a) -> io (list a)
```
</h4>

<a name="IO.sequenceMap"></a>
<h4>

```
sequenceMap :: any a b. (a -> io b) -> list a -> io (list b)
```
</h4>

# List
<a name="List.list"></a>
<h4>

```
type list :: Type -> Type
```
</h4>

<a name="List.makeList"></a>
<h4>

```
makeList :: [Empty := void; Cons := {Head := a; Tail := list a; nil}; nil] -> list a
```
</h4>

<a name="List.getList"></a>
<h4>

```
getList :: list a -> [Empty := void; Cons := {Head := a; Tail := list a; nil}; nil]
```
</h4>

<a name="List.empty"></a>
<h4>

```
empty :: any a. list a
```
</h4>

<a name="List.(:)"></a>
<h4>

```
(:) :: any a. a -> list a -> list a
```
</h4>

<a name="List.deconstruct"></a>
<h4>

```
deconstruct :: any a b. b -> (a -> list a -> b) -> list a -> b
```
</h4>

<a name="List.single"></a>
<h4>

`single :: any a. a -> list a`
</h4>

<a name="List.head"></a>
<h4>

```
head :: any a. list a -> maybe a
```
</h4>

<a name="List.tail"></a>
<h4>

```
tail :: any a. list a -> maybe (list a)
```
</h4>

<a name="List.take"></a>
<h4>

```
take :: any a. int -> list a -> list a
```
</h4>

<a name="List.drop"></a>
<h4>

```
drop :: any a. int -> list a -> list a
```
</h4>

<a name="List.get"></a>
<h4>

```
get :: any a. int -> list a -> maybe a
```
</h4>

<a name="List.isEmpty"></a>
<h4>

```
isEmpty :: any a. list a -> bool
```
</h4>

<a name="List.length"></a>
<h4>

```
length :: any a. list a -> int
```
</h4>

<a name="List.(++)"></a>
<h4>

```
(++) :: any a. list a -> list a -> list a
```
</h4>

<a name="List.concat"></a>
<h4>

```
concat :: any a. list (list a) -> list a
```
</h4>

<a name="List.concatMap"></a>
<h4>

```
concatMap :: any a b. (a -> list b) -> list a -> list b
```
</h4>

<a name="List.repeat"></a>
<h4>

```
repeat :: any a. int -> a -> list a
```
</h4>

<a name="List.reverse"></a>
<h4>

```
reverse :: any a. list a -> list a
```
</h4>

<a name="List.range"></a>
<h4>

```
range :: int -> int -> list int
```
</h4>

<a name="List.contains"></a>
<h4>

```
contains :: any a. a -> list a -> bool
```
</h4>

<a name="List.find"></a>
<h4>

```
find :: any a. a -> list a -> list int
```
</h4>

<a name="List.map"></a>
<h4>

```
map :: any a b. (a -> b) -> list a -> list b
```
</h4>

<a name="List.mapIndex"></a>
<h4>

```
mapIndex :: any a b. (int -> a -> b) -> list a -> list b
```
</h4>

<a name="List.mapResult"></a>
<h4>

```
mapResult :: any e a b. (a -> result e b) -> list a -> list b
```
</h4>

<a name="List.separate"></a>
<h4>

```
separate :: any a b. list (a & b) -> list a & list b
```
</h4>

<a name="List.filter"></a>
<h4>

```
filter :: any a. (a -> bool) -> list a -> list a
```
</h4>

<a name="List.partition"></a>
<h4>

```
partition :: any a. (a -> bool) -> list a -> list a & list a
```
</h4>

<a name="List.count"></a>
<h4>

```
count :: any a. (a -> bool) -> list a -> int
```
</h4>

<a name="List.some"></a>
<h4>

```
some :: any a. (a -> bool) -> list a -> bool
```
</h4>

<a name="List.all"></a>
<h4>

```
all :: any a. (a -> bool) -> list a -> bool
```
</h4>

<a name="List.foldLeft"></a>
<h4>

```
foldLeft :: any a b. (a -> b -> b) -> b -> list a -> b
```
</h4>

<a name="List.foldRight"></a>
<h4>

```
foldRight :: any a b. (a -> b -> b) -> b -> list a -> b
```
</h4>

<a name="List.sum"></a>
<h4>

```
sum :: any x. list (num x) -> num x
```
</h4>

<a name="List.product"></a>
<h4>

```
product :: any x. list (num x) -> num x
```
</h4>

<a name="List.sort"></a>
<h4>

```
sort :: any a. list a -> list a
```
</h4>

<a name="List.sortBy"></a>
<h4>

```
sortBy :: any a b. (a -> b) -> list a -> list a
```
</h4>

<a name="List.sortWith"></a>
<h4>

```
sortWith :: any a. (a -> a -> order) -> list a -> list a
```
</h4>

<a name="List.apply"></a>
<h4>

```
apply :: any a b. list (a -> b) -> list a -> list b
```
</h4>

<a name="List.map2"></a>
<h4>

```
map2 :: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> list a1
  -> list a2
  -> list a3
```
</h4>

<a name="List.map3"></a>
<h4>

```
map3 :: any a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
```
</h4>

<a name="List.map4"></a>
<h4>

```
map4 :: any a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
  -> list a5
```
</h4>

<a name="List.zipApply"></a>
<h4>

```
zipApply :: any a b. list (a -> b) -> list a -> list b
```
</h4>

<a name="List.zip2"></a>
<h4>

```
zip2 :: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> list a1
  -> list a2
  -> list a3
```
</h4>

<a name="List.zip3"></a>
<h4>

```
zip3 :: any a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
```
</h4>

<a name="List.zip4"></a>
<h4>

```
zip4 :: any a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> list a1
  -> list a2
  -> list a3
  -> list a4
  -> list a5
```
</h4>

# Math
<a name="Math.square"></a>
<a name="Math.cube"></a>
<h4>

```
square, cube :: any x. num x -> num x
```
</h4>

<a name="Math.sqrt"></a>
<a name="Math.cbrt"></a>
<h4>

```
sqrt, cbrt :: float -> float
```
</h4>

<a name="Math.exp"></a>
<h4>

```
exp :: float -> float
```
</h4>

<a name="Math.(**)"></a>
<h4>

```
(**) :: float -> float -> float
```
</h4>

<a name="Math.log"></a>
<h4>

```
log :: float -> float
```
</h4>

<a name="Math.logBase"></a>
<h4>

```
logBase :: float -> float -> float
```
</h4>

<a name="Math.pi"></a>
<h4>

```
pi :: float
```
</h4>

<a name="Math.tau"></a>
<h4>

```
tau :: float
```
</h4>

<a name="Math.angle"></a>
<h4>

```
type angle  = float
```
</h4>

<a name="Math.radians"></a>
<a name="Math.degrees"></a>
<a name="Math.turns"></a>
<h4>

```
radians, degrees, turns :: float -> angle
```
</h4>

<a name="Math.sin"></a>
<a name="Math.cos"></a>
<a name="Math.tan"></a>
<h4>

```
sin, cos, tan :: angle -> float
```
</h4>

<a name="Math.asin"></a>
<a name="Math.acos"></a>
<a name="Math.atan"></a>
<h4>

```
asin, acos, atan :: float -> angle
```
</h4>

<a name="Math.atan2"></a>
<h4>

```
atan2 :: float -> float -> angle
```
</h4>

<a name="Math.sinh"></a>
<a name="Math.cosh"></a>
<a name="Math.tanh"></a>
<h4>

```
sinh, cosh, tanh :: angle -> float
```
</h4>

<a name="Math.asinh"></a>
<a name="Math.acosh"></a>
<a name="Math.atanh"></a>
<h4>

```
asinh, acosh, atanh :: float -> angle
```
</h4>

<a name="Math.hypot"></a>
<h4>

```
hypot :: float -> float -> float
```
</h4>

<a name="Math.distance"></a>
<h4>

```
distance :: float -> float -> float -> float -> float
```
</h4>

# Prelude
### Functions <a name="Prelude.(->)"></a>
<h4>

```
type (->) :: Type -> Type -> Type
```
</h4>

The type of functions. For example, a function that takes an integer and
returns a string would have the type `int -> string`.
<a name="Prelude.identity"></a>
<h4>

```
identity :: any a. a -> a
```
</h4>

A function that does nothing. `identity x` is equivalent to `x`.
<a name="Prelude.const"></a>
<h4>

```
const :: any a b. a -> b -> a
```
</h4>

`const x` is a function that ignores its argument and returns `x`.
You can also use the notation `{ x }`.
<a name="Prelude.($)"></a>
<h4>

```
expand ($) f x = f x
```
</h4>

Apply the function on the left to the value on the right.
The `$` operator has a relatively low precedence,
so it is useful for avoiding parentheses. For example `f (g (h x))`
can be written `f $ g $ h x`.
<a name="Prelude.(#)"></a>
<h4>

```
expand (#) x f = f x
```
</h4>

Apply the function on the right to the value on the left.
For example, `f (g (h x)) can be written h x # g # f`.
<a name="Prelude.(<<)"></a>
<h4>

```
(<<) :: any a b c. (b -> c) -> (a -> b) -> (a -> c)
```
</h4>

Right-to-left function composition. `f << g` performs `g` and then `f`.
<a name="Prelude.(>>)"></a>
<h4>

```
(>>) :: any a b c. (a -> b) -> (b -> c) -> (a -> c)
```
</h4>

Left-to-right function composition. `f >> g` performs `f` and then `g`.
<a name="Prelude.i"></a>
<h4>

```
type i :: Num
```
</h4>

<a name="Prelude.f"></a>
<h4>

```
type f :: Num
```
</h4>

<a name="Prelude.num"></a>
<h4>

```
type num :: Num -> Type
```
</h4>

The type-level values `i` and `f` are of a different _kind_ than normal types.
You can convert them into types with the constructor `num`; `num i` is
the type of integers and `num f` is the type of floats. You
can define functions that work on both integers and floats by writing
`any x. num x`.
<a name="Prelude.int"></a>
<h4>

```
type int  = num i
```
</h4>

The type of integers. Lune compiles to Javascript, so integers and floats
have the same representation at runtime. Nevertheless, the Lune type system
distinguishes the two, because there are some computations (such as `mod`)
that only make sense with integers.
<a name="Prelude.float"></a>
<h4>

```
type float  = num f
```
</h4>

The type of floating-point numbers.
<a name="Prelude.float"></a>
<h4>

```
float :: int -> float
```
</h4>

Convert an integer into a float. Lune does not perform such coercions implicitly.
<a name="Prelude.round"></a>
<h4>

```
round :: float -> int
```
</h4>

Round a number to the nearest integer.
<a name="Prelude.floor"></a>
<h4>

```
floor :: float -> int
```
</h4>

Round a number down.
```
floor 1.5 == 1
floor -1.5 == -2
```
<a name="Prelude.ceil"></a>
<h4>

```
ceil :: float -> int
```
</h4>

Round a number up.
```
ceil 1.5 == 2
ceil -1.5 == -1
```
<a name="Prelude.trunc"></a>
<h4>

```
trunc :: float -> int
```
</h4>

If the input is less than zero, round up; otherwise, round down.
In other words, get rid of everything after the decimal point.
```
trunc 1.5 == 1
trunc -1.5 == -1
```
<a name="Prelude.(+)"></a>
<a name="Prelude.(~)"></a>
<a name="Prelude.(*)"></a>
<h4>

```
(+), (~), (*) :: any x. num x -> num x -> num x
```
</h4>

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
<h4>

```
negate :: any x. num x -> num x
```
</h4>

Negate a number. `-x` is syntactic sugar for `negate x`.
<a name="Prelude.abs"></a>
<h4>

```
abs :: any x. num x -> num x
```
</h4>

Take the absolute value of a number.
<a name="Prelude.signum"></a>
<h4>

```
signum :: any x. num x -> num x
```
</h4>

Find the "sign" of a number. For positive numbers, `signum` returns 1,
for negative numbers, it returns -1, and for 0, it returns 0. Note that
`abs x * signum x` is equal to `x`.
<a name="Prelude.constrain"></a>
<h4>

```
constrain :: any x. num x -> num x -> num x -> num x
```
</h4>

Constrain a number between a lower bound (the first argument) and an
upper bound (the second argument). For example, `constrain 0 10 11` is
equal to `10`, and `constrain 0 10 5` is equal to `5`.
<a name="Prelude.div"></a>
<a name="Prelude.quot"></a>
<h4>

```
div, quot :: int -> int -> int
```
</h4>

Integer division. `div` rounds the result down, and `quot` truncates it.
For positive arguments, these are the same thing.

__Haskellers beware:___ the arguments to `div` and `quot` are the opposite
of the Haskell definitions. `div 2` is a function that divides a number by 2,
so `div 2 10` is equal to 5.
<a name="Prelude.mod"></a>
<a name="Prelude.rem"></a>
<h4>

```
mod, rem :: int -> int -> int
```
</h4>

Integer modulo. `mod` represents actual modulo, and `rem` is the
so-called "modulo" operation written with a `%` in most languages.
The difference only matters with negative arguments: `mod 3 -1` evaluates to
2, but `rem 3 -1` evaluates to -1.

__Haskellers beware:__ the arguments to `mod` and `rem` are the opposite
of the Haskell definitions. `mod 2` is a function that mods a number by 2,
so `mod 2 10` is equal to 0.
<a name="Prelude.(/)"></a>
<h4>

```
(/) :: float -> float -> float
```
</h4>

Floating-point division.
<a name="Prelude.nil"></a>
<h4>

```
type nil :: Row
```
</h4>

<a name="Prelude.(:=)"></a>
<h4>

```
type (:=) :: Label -> Type -> Row -> Row
```
</h4>

<a name="Prelude.(|)"></a>
<h4>

```
type (|) s = s := void
```
</h4>

<a name="Prelude.(;)"></a>
<h4>

```
type (;) f x = f x
```
</h4>

<a name="Prelude.record"></a>
<h4>

```
type record :: Row -> Type
```
</h4>

<a name="Prelude.variant"></a>
<h4>

```
type variant :: Row -> Type
```
</h4>

<a name="Prelude.label"></a>
<h4>

```
type label :: Label -> Type
```
</h4>

<a name="Prelude.void"></a>
<h4>

```
type void  = {nil}
```
</h4>

<a name="Prelude.void"></a>
<h4>

```
void :: void
```
</h4>

<a name="Prelude.(?)"></a>
<h4>

```
(?) :: any s a r. label s -> {s := a; r} -> a
```
</h4>

<a name="Prelude.delete"></a>
<h4>

```
delete :: any s a r. label s -> {s := a; r} -> {r}
```
</h4>

<a name="Prelude.(:=)"></a>
<h4>

```
(:=) :: any s a r. label s -> a -> {r} -> {s := a; r}
```
</h4>

<a name="Prelude.(!=)"></a>
<h4>

```
(!=) :: any s a b r. label s -> b -> {s := a; r} -> {s := b; r}
```
</h4>

<a name="Prelude.(#=)"></a>
<h4>

```
(#=) :: any s a b r. label s -> (a -> b) -> {s := a; r} -> {s := b; r}
```
</h4>

<a name="Prelude.(;)"></a>
<h4>

```
(;) :: any a b. (a -> b) -> a -> b
```
</h4>

<a name="Prelude.(^)"></a>
<h4>

```
(^) :: any s a r. label s -> a -> [s := a; r]
```
</h4>

<a name="Prelude.embed"></a>
<h4>

```
embed :: any s a r. label s -> [r] -> [s := a; r]
```
</h4>

<a name="Prelude.match"></a>
<h4>

```
match :: any s a b r. label s -> (a -> b) -> ([r] -> b) -> [s := a; r] -> b
```
</h4>

<a name="Prelude.else"></a>
<h4>

```
else :: any a b. a -> b -> a
```
</h4>

<a name="Prelude.absurd"></a>
<h4>

```
absurd :: any a. [nil] -> a
```
</h4>

<a name="Prelude.only"></a>
<h4>

```
only :: any s r. label s -> [s := void; r]
```
</h4>

<a name="Prelude.lazy"></a>
<h4>

```
type lazy a = void -> a
```
</h4>

<a name="Prelude.force"></a>
<h4>

```
force :: any a. lazy a -> a
```
</h4>

<a name="Prelude.general"></a>
<h4>

```
general :: any a b. lazy a -> b -> a
```
</h4>

<a name="Prelude.(&)"></a>
<h4>

```
type (&) a b = {First := a; Second := b; nil}
```
</h4>

<a name="Prelude.(&)"></a>
<h4>

```
(&) :: any a b. a -> b -> a & b
```
</h4>

<a name="Prelude.bool"></a>
<h4>

```
type bool  = [True := void; False := void; nil]
```
</h4>

<a name="Prelude.true"></a>
<a name="Prelude.false"></a>
<h4>

```
true, false :: bool
```
</h4>

<a name="Prelude.not"></a>
<h4>

```
not :: bool -> bool
```
</h4>

<a name="Prelude.(&&)"></a>
<h4>

```
expand (&&) x y = and x { y }
```
</h4>

<a name="Prelude.(||)"></a>
<h4>

```
expand (||) x y = or x { y }
```
</h4>

<a name="Prelude.if"></a>
<h4>

```
if :: any a. bool -> lazy a -> lazy a -> a
```
</h4>

<a name="Prelude.(==)"></a>
<h4>

```
(==) :: any a. a -> a -> bool
```
</h4>

<a name="Prelude.(/=)"></a>
<h4>

```
(/=) :: any a. a -> a -> bool
```
</h4>

<a name="Prelude.(<)"></a>
<a name="Prelude.(>)"></a>
<h4>

```
(<), (>) :: any a. a -> a -> bool
```
</h4>

<a name="Prelude.(<=)"></a>
<a name="Prelude.(>=)"></a>
<h4>

```
(<=), (>=) :: any a. a -> a -> bool
```
</h4>

<a name="Prelude.isFinite"></a>
<h4>

```
isFinite :: float -> bool
```
</h4>

<a name="Prelude.isInfinite"></a>
<h4>

```
isInfinite :: float -> bool
```
</h4>

<a name="Prelude.isNaN"></a>
<h4>

```
isNaN :: float -> bool
```
</h4>

<a name="Prelude.min"></a>
<a name="Prelude.max"></a>
<h4>

```
min, max :: any a. a -> a -> a
```
</h4>

<a name="Prelude.order"></a>
<h4>

```
type order  = [Less := void; Equal := void; Greater := void; nil]
```
</h4>

<a name="Prelude.compare"></a>
<h4>

```
compare :: any a. a -> a -> order
```
</h4>

# Program
<a name="Program.program"></a>
<h4>

```
type program st a = st -> io { Set := st; Return := a; nil }
```
</h4>

<a name="Program.get"></a>
<h4>

```
get :: any st. program st st
```
</h4>

<a name="Program.getBy"></a>
<h4>

```
getBy :: any st a. (st -> a) -> program st a
```
</h4>

<a name="Program.put"></a>
<h4>

```
put :: any st. st -> program st void
```
</h4>

<a name="Program.modify"></a>
<h4>

```
modify :: any st. (st -> st) -> program st void
```
</h4>

<a name="Program.map"></a>
<h4>

```
map :: any st a b. (a -> b) -> program st a -> program st b
```
</h4>

<a name="Program.apply"></a>
<h4>

```
apply :: any st a b. program st (a -> b) -> program st a -> program st b
```
</h4>

<a name="Program.bind"></a>
<h4>

```
bind :: any st a b. (a -> program st b) -> program st a -> program st b
```
</h4>

<a name="Program.then"></a>
<h4>

```
then :: any st a. program st a -> program st void -> program st a
```
</h4>

<a name="Program.run"></a>
<h4>

```
run :: any st a. st -> program st a -> io a
```
</h4>

<a name="Program.fromIO"></a>
<h4>

```
fromIO :: any st a. io a -> program st a
```
</h4>

<a name="Program.pure"></a>
<h4>

```
pure :: any st a. a -> program st a
```
</h4>

<a name="Program.none"></a>
<h4>

```
none :: any st. program st void
```
</h4>

<a name="Program.map2"></a>
<h4>

```
map2 :: any st a1 a2 a3
   . (a1 -> a2 -> a3)
  -> program st a1
  -> program st a2
  -> program st a3
```
</h4>

<a name="Program.map3"></a>
<h4>

```
map3 :: any st a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> program st a1
  -> program st a2
  -> program st a3
  -> program st a4
```
</h4>

<a name="Program.map4"></a>
<h4>

```
map4 :: any st a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> program st a1
  -> program st a2
  -> program st a3
  -> program st a4
  -> program st a5
```
</h4>

<a name="Program.sequence"></a>
<h4>

```
sequence :: any st a. list (program st a) -> program st (list a)
```
</h4>

<a name="Program.sequenceMap"></a>
<h4>

```
sequenceMap :: any st a b. (a -> program st b) -> list a -> program st (list b)
```
</h4>

# Result
<a name="Result.result"></a>
<h4>

```
type result e a = [Error := e; Just := a; nil]
```
</h4>

<a name="Result.maybe"></a>
<h4>

```
type maybe a = result void a
```
</h4>

<a name="Result.nothing"></a>
<h4>

```
nothing :: any a. maybe a
```
</h4>

<a name="Result.default"></a>
<h4>

```
default :: any e a. a -> result e a -> a
```
</h4>

<a name="Result.map"></a>
<h4>

```
map :: any e a b. (a -> b) -> result e a -> result e b
```
</h4>

<a name="Result.apply"></a>
<h4>

```
apply :: any e a b. result e (a -> b) -> result e a -> result e b
```
</h4>

<a name="Result.bind"></a>
<h4>

```
bind :: any e a b. (a -> result e b) -> result e a -> result e b
```
</h4>

<a name="Result.map2"></a>
<h4>

```
map2 :: any e a1 a2 a3
   . (a1 -> a2 -> a3)
  -> result e a1
  -> result e a2
  -> result e a3
```
</h4>

<a name="Result.map3"></a>
<h4>

```
map3 :: any e a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> result e a1
  -> result e a2
  -> result e a3
  -> result e a4
```
</h4>

<a name="Result.map4"></a>
<h4>

```
map4 :: any e a1 a2 a3 a4 a5
   . (a1 -> a2 -> a3 -> a4 -> a5)
  -> result e a1
  -> result e a2
  -> result e a3
  -> result e a4
  -> result e a5
```
</h4>

<a name="Result.sequence"></a>
<h4>

```
sequence :: any e a. list (result e a) -> result e (list a)
```
</h4>

<a name="Result.sequenceMap"></a>
<h4>

```
sequenceMap :: any e a b. (a -> result e b) -> list a -> result e (list b)
```
</h4>

# String
<a name="String.string"></a>
<h4>

```
type string :: Type
```
</h4>

<a name="String.isEmpty"></a>
<h4>

```
isEmpty :: string -> bool
```
</h4>

<a name="String.length"></a>
<h4>

```
length :: string -> int
```
</h4>

<a name="String.(<>)"></a>
<h4>

```
(<>) :: string -> string -> string
```
</h4>

<a name="String.concat"></a>
<h4>

```
concat :: list string -> string
```
</h4>

<a name="String.concatMap"></a>
<h4>

```
concatMap :: any a. (a -> string) -> list a -> string
```
</h4>

<a name="String.join"></a>
<h4>

```
join :: string -> list string -> string
```
</h4>

<a name="String.joinMap"></a>
<h4>

```
joinMap :: any a. string -> (a -> string) -> list a -> string
```
</h4>

<a name="String.repeat"></a>
<h4>

```
repeat :: int -> string -> string
```
</h4>

<a name="String.reverse"></a>
<h4>

```
reverse :: string -> string
```
</h4>

<a name="String.split"></a>
<h4>

```
split :: string -> string -> list string
```
</h4>

<a name="String.words"></a>
<a name="String.lines"></a>
<h4>

```
words, lines :: string -> list string
```
</h4>

<a name="String.slice"></a>
<h4>

```
slice :: int -> int -> string -> string
```
</h4>

<a name="String.takeLeft"></a>
<h4>

```
takeLeft :: int -> string -> string
```
</h4>

<a name="String.takeRight"></a>
<h4>

```
takeRight :: int -> string -> string
```
</h4>

<a name="String.dropLeft"></a>
<h4>

```
dropLeft :: int -> string -> string
```
</h4>

<a name="String.dropRight"></a>
<h4>

```
dropRight :: int -> string -> string
```
</h4>

<a name="String.toLower"></a>
<a name="String.toUpper"></a>
<h4>

```
toLower, toUpper :: string -> string
```
</h4>

<a name="String.padLeft"></a>
<a name="String.padRight"></a>
<h4>

```
padLeft, padRight :: int -> string -> string
```
</h4>

<a name="String.trim"></a>
<a name="String.trimLeft"></a>
<a name="String.trimRight"></a>
<h4>

```
trim, trimLeft, trimRight :: string -> string
```
</h4>

<a name="String.contains"></a>
<a name="String.startsWith"></a>
<a name="String.endsWith"></a>
<h4>

```
contains, startsWith, endsWith :: string -> string -> bool
```
</h4>

<a name="String.find"></a>
<h4>

```
find :: string -> string -> list int
```
</h4>

<a name="String.replace"></a>
<h4>

```
replace :: string -> string -> string -> string
```
</h4>

<a name="String.toInt"></a>
<h4>

```
toInt :: string -> maybe int
```
</h4>

<a name="String.fromInt"></a>
<h4>

```
fromInt :: int -> string
```
</h4>

<a name="String.toFloat"></a>
<h4>

```
toFloat :: string -> maybe float
```
</h4>

<a name="String.fromFloat"></a>
<h4>

```
fromFloat :: float -> string
```
</h4>

<a name="String.toList"></a>
<h4>

```
toList :: string -> list char
```
</h4>

<a name="String.fromList"></a>
<h4>

```
fromList :: list char -> string
```
</h4>

<a name="String.cons"></a>
<h4>

```
cons :: char -> string -> string
```
</h4>

<a name="String.deconstruct"></a>
<h4>

```
deconstruct :: any a. a -> (char -> string -> a) -> string -> a
```
</h4>

<a name="String.single"></a>
<h4>

```
single :: char -> string
```
</h4>

<a name="String.head"></a>
<h4>

```
head :: string -> maybe char
```
</h4>

<a name="String.tail"></a>
<h4>

```
tail :: string -> maybe string
```
</h4>

<a name="String.get"></a>
<h4>

```
get :: int -> string -> maybe char
```
</h4>

<a name="String.map"></a>
<h4>

```
map :: (char -> char) -> string -> string
```
</h4>

<a name="String.mapIndex"></a>
<h4>

```
mapIndex :: (int -> char -> char) -> string -> string
```
</h4>

<a name="String.filter"></a>
<h4>

```
filter :: (char -> bool) -> string -> string
```
</h4>

<a name="String.partition"></a>
<h4>

```
partition :: (char -> bool) -> string -> string & string
```
</h4>

<a name="String.count"></a>
<h4>

```
count :: (char -> bool) -> string -> int
```
</h4>

<a name="String.some"></a>
<h4>

```
some :: (char -> bool) -> string -> bool
```
</h4>

<a name="String.all"></a>
<h4>

```
all :: (char -> bool) -> string -> bool
```
</h4>

<a name="String.foldLeft"></a>
<h4>

```
foldLeft :: any a. (char -> a -> a) -> a -> string -> a
```
</h4>

<a name="String.foldRight"></a>
<h4>

```
foldRight :: any a. (char -> a -> a) -> a -> string -> a
```
</h4>

# Variant
<a name="Variant.map"></a>
<h4>

```
map :: any s a b r. label s -> (a -> b) -> [s := a; r] -> [s := b; r]
```
</h4>

<a name="Variant.apply"></a>
<h4>

```
apply :: any s a b r. label s -> [s := (a -> b); r] -> [s := a; r] -> [s := b; r]
```
</h4>

<a name="Variant.bind"></a>
<h4>

```
bind :: any s a b r. label s -> (a -> [s := b; r]) -> [s := a; r] -> [s := b; r]
```
</h4>

<a name="Variant.map2"></a>
<h4>

```
map2 :: any s a1 a2 a3 r
   . label s
  -> (a1 -> a2 -> a3)
  -> [s := a1; r]
  -> [s := a2; r]
  -> [s := a3; r]
```
</h4>

<a name="Variant.map3"></a>
<h4>

```
map3 :: any s a1 a2 a3 a4 r
   . label s
  -> (a1 -> a2 -> a3 -> a4)
  -> [s := a1; r]
  -> [s := a2; r]
  -> [s := a3; r]
  -> [s := a4; r]
```
</h4>

<a name="Variant.map4"></a>
<h4>

```
map4 :: any s a1 a2 a3 a4 a5 r
   . label s
  -> (a1 -> a2 -> a3 -> a4 -> a5)
  -> [s := a1; r]
  -> [s := a2; r]
  -> [s := a3; r]
  -> [s := a4; r]
  -> [s := a5; r]
```
</h4>

<a name="Variant.sequence"></a>
<h4>

```
sequence :: any s a r. label s -> list [s := a; r] -> [s := list a; r]
```
</h4>

<a name="Variant.sequenceMap"></a>
<h4>

```
sequenceMap :: any s a b r. label s -> (a -> [s := b; r]) -> list a -> [s := list b; r]
```
</h4>
