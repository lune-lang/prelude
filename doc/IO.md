# IO
<a name="type-io"></a>
#### type io
```
:: Type -> Type
```
For a program to be useful, it must have some kind of _output_:
an image, a text file, a web application, etc. Most programs also
take _input_ from the user. This is a problem for
pure functional languages: how can you perform side effects
(input and output) while preserving referential transparency?

In Lune, any value that causes side effects is wrapped in the
`io` functor; `io a` represents an action that returns `a`.

## Mapping 
There are three ways to convert an `io a` into an `io b`.
* with a function of type `a -> b` (`map`)
* with an action of type `io (a -> b)` (`apply`)
* with a function of type `a -> io b` (`bind`)

Of these, `bind` is the most general.

<a name="map"></a>
#### val map
```
:: any a b. (a -> b) -> io a -> io b
```
`map f i` is an action that performs `i` and applies `f` to the result.

<a name="apply"></a>
#### val apply
```
:: any a b. io (a -> b) -> io a -> io b
```
`apply i j` is an action that
1. performs `i` to get a function `f`
2. performs `j` to get a value `x`
3. returns `f x`

<a name="bind"></a>
#### val bind
```
:: any a b. (a -> io b) -> io a -> io b
```
`i # bind do x. j` is an action that performs `i`,
names the result `x`, and then performs `j`.

<a name="then"></a>
#### val then
```
:: any a. io a -> io unit -> io a
```
`i # then j` is an action that performs `i` and then performs `j`.

<a name="pure"></a>
#### val pure
```
:: any a. a -> io a
```
Do nothing and return the given value.

<a name="none"></a>
#### val none
```
:: io unit
```
Do nothing and return `unit`.

## Multimapping 
<a name="map2"></a>
#### val map2
```
:: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> io a1
  -> io a2
  -> io a3
```
Map a binary function over two actions by applying the
function to the results.

<a name="map3"></a>
#### val map3
```
:: any a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> io a1
  -> io a2
  -> io a3
  -> io a4
```
Map a three-argument function over three actions by applying the
function to the results.

<a name="map4"></a>
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
Map a four-argument function over four actions by applying the
function to the results.

## Sequencing actions 
<a name="sequence"></a>
#### val sequence
```
:: any a. list (io a) -> io (list a)
```
Perform a list of actions and collect the results.

<a name="sequenceMap"></a>
#### val sequenceMap
```
:: any a b. (a -> io b) -> list a -> io (list b)
```
Map a function over a list, perform the resulting list of actions,
and collect the results.

