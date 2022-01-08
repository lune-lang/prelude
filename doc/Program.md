# module Program
<a name="type-program"></a>
#### type program
```
program st a = st -> io { Set := st; Return := a; nil }
```
<a name="get"></a>
#### val get
```
:: any st. program st st
```
<a name="getBy"></a>
#### val getBy
```
:: any st a. (st -> a) -> program st a
```
<a name="put"></a>
#### val put
```
:: any st. st -> program st void
```
<a name="modify"></a>
#### val modify
```
:: any st. (st -> st) -> program st void
```
<a name="map"></a>
#### val map
```
:: any st a b. (a -> b) -> program st a -> program st b
```
<a name="apply"></a>
#### val apply
```
:: any st a b. program st (a -> b) -> program st a -> program st b
```
<a name="bind"></a>
#### val bind
```
:: any st a b. (a -> program st b) -> program st a -> program st b
```
<a name="then"></a>
#### val then
```
:: any st a. program st a -> program st void -> program st a
```
<a name="run"></a>
#### val run
```
:: any st a. st -> program st a -> io a
```
<a name="fromIO"></a>
#### val fromIO
```
:: any st a. io a -> program st a
```
<a name="pure"></a>
#### val pure
```
:: any st a. a -> program st a
```
<a name="none"></a>
#### val none
```
:: any st. program st void
```
<a name="map2"></a>
#### val map2
```
:: any st a1 a2 a3
   . (a1 -> a2 -> a3)
  -> program st a1
  -> program st a2
  -> program st a3
```
<a name="map3"></a>
#### val map3
```
:: any st a1 a2 a3 a4
   . (a1 -> a2 -> a3 -> a4)
  -> program st a1
  -> program st a2
  -> program st a3
  -> program st a4
```
<a name="map4"></a>
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
<a name="sequence"></a>
#### val sequence
```
:: any st a. list (program st a) -> program st (list a)
```
<a name="sequenceMap"></a>
#### val sequenceMap
```
:: any st a b. (a -> program st b) -> list a -> program st (list b)
```
