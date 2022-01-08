# module Variant
<a name="map"></a>
#### val map
```
:: any s a b r. label s -> (a -> b) -> [s := a; r] -> [s := b; r]
```
<a name="apply"></a>
#### val apply
```
:: any s a b r. label s -> [s := (a -> b); r] -> [s := a; r] -> [s := b; r]
```
<a name="bind"></a>
#### val bind
```
:: any s a b r. label s -> (a -> [s := b; r]) -> [s := a; r] -> [s := b; r]
```
<a name="map2"></a>
#### val map2
```
:: any s a1 a2 a3 r
   . label s
  -> (a1 -> a2 -> a3)
  -> [s := a1; r]
  -> [s := a2; r]
  -> [s := a3; r]
```
<a name="map3"></a>
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
<a name="map4"></a>
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
<a name="sequence"></a>
#### val sequence
```
:: any s a r. label s -> list [s := a; r] -> [s := list a; r]
```
<a name="sequenceMap"></a>
#### val sequenceMap
```
:: any s a b r. label s -> (a -> [s := b; r]) -> list a -> [s := list b; r]
```
