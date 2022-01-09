# IO
<a name="type-io"></a>
#### type io
```
:: Type -> Type
```
<a name="map"></a>
#### val map
```
:: any a b. (a -> b) -> io a -> io b
```
<a name="apply"></a>
#### val apply
```
:: any a b. io (a -> b) -> io a -> io b
```
<a name="bind"></a>
#### val bind
```
:: any a b. (a -> io b) -> io a -> io b
```
<a name="then"></a>
#### val then
```
:: any a. io a -> io unit -> io a
```
<a name="pure"></a>
#### val pure
```
:: any a. a -> io a
```
<a name="none"></a>
#### val none
```
:: io unit
```
<a name="map2"></a>
#### val map2
```
:: any a1 a2 a3
   . (a1 -> a2 -> a3)
  -> io a1
  -> io a2
  -> io a3
```
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
<a name="sequence"></a>
#### val sequence
```
:: any a. list (io a) -> io (list a)
```
<a name="sequenceMap"></a>
#### val sequenceMap
```
:: any a b. (a -> io b) -> list a -> io (list b)
```
