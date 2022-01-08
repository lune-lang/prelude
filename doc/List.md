# List
<a name="type-list"></a>
#### type list
```
:: Type -> Type
```
<a name="makeList"></a>
#### val makeList
```
:: [Empty := void; Cons := {Head := a; Tail := list a; nil}; nil] -> list a
```
<a name="getList"></a>
#### val getList
```
:: list a -> [Empty := void; Cons := {Head := a; Tail := list a; nil}; nil]
```
<a name="empty"></a>
#### val empty
```
:: any a. list a
```
<a name="(:)"></a>
#### val (:)
```
:: any a. a -> list a -> list a
```
<a name="deconstruct"></a>
#### val deconstruct
```
:: any a b. b -> (a -> list a -> b) -> list a -> b
```
<a name="single"></a>
#### val single
```
:: any a. a -> list a
```
<a name="head"></a>
#### val head
```
:: any a. list a -> maybe a
```
<a name="tail"></a>
#### val tail
```
:: any a. list a -> maybe (list a)
```
<a name="take"></a>
#### val take
```
:: any a. int -> list a -> list a
```
<a name="drop"></a>
#### val drop
```
:: any a. int -> list a -> list a
```
<a name="get"></a>
#### val get
```
:: any a. int -> list a -> maybe a
```
<a name="isEmpty"></a>
#### val isEmpty
```
:: any a. list a -> bool
```
<a name="length"></a>
#### val length
```
:: any a. list a -> int
```
<a name="(++)"></a>
#### val (++)
```
:: any a. list a -> list a -> list a
```
<a name="concat"></a>
#### val concat
```
:: any a. list (list a) -> list a
```
<a name="concatMap"></a>
#### val concatMap
```
:: any a b. (a -> list b) -> list a -> list b
```
<a name="repeat"></a>
#### val repeat
```
:: any a. int -> a -> list a
```
<a name="reverse"></a>
#### val reverse
```
:: any a. list a -> list a
```
<a name="range"></a>
#### val range
```
:: int -> int -> list int
```
<a name="contains"></a>
#### val contains
```
:: any a. a -> list a -> bool
```
<a name="find"></a>
#### val find
```
:: any a. a -> list a -> list int
```
<a name="map"></a>
#### val map
```
:: any a b. (a -> b) -> list a -> list b
```
<a name="mapIndex"></a>
#### val mapIndex
```
:: any a b. (int -> a -> b) -> list a -> list b
```
<a name="mapResult"></a>
#### val mapResult
```
:: any e a b. (a -> result e b) -> list a -> list b
```
<a name="separate"></a>
#### val separate
```
:: any a b. list (a & b) -> list a & list b
```
<a name="filter"></a>
#### val filter
```
:: any a. (a -> bool) -> list a -> list a
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
<a name="count"></a>
#### val count
```
:: any a. (a -> bool) -> list a -> int
```
<a name="some"></a>
#### val some
```
:: any a. (a -> bool) -> list a -> bool
```
<a name="all"></a>
#### val all
```
:: any a. (a -> bool) -> list a -> bool
```
<a name="foldLeft"></a>
#### val foldLeft
```
:: any a b. (a -> b -> b) -> b -> list a -> b
```
<a name="foldRight"></a>
#### val foldRight
```
:: any a b. (a -> b -> b) -> b -> list a -> b
```
<a name="sum"></a>
#### val sum
```
:: any x. list (num x) -> num x
```
<a name="product"></a>
#### val product
```
:: any x. list (num x) -> num x
```
<a name="sort"></a>
#### val sort
```
:: any a. list a -> list a
```
<a name="sortBy"></a>
#### val sortBy
```
:: any a b. (a -> b) -> list a -> list a
```
<a name="sortWith"></a>
#### val sortWith
```
:: any a. (a -> a -> order) -> list a -> list a
```
<a name="apply"></a>
#### val apply
```
:: any a b. list (a -> b) -> list a -> list b
```
<a name="map2"></a>
#### val map2
```
:: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> list a1
  -> list a2
  -> list a3
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
<a name="zipApply"></a>
#### val zipApply
```
:: any a b. list (a -> b) -> list a -> list b
```
<a name="zip2"></a>
#### val zip2
```
:: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> list a1
  -> list a2
  -> list a3
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
