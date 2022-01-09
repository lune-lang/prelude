# Math
## Exponents and logarithms 
<a name="square"></a>
<a name="cube"></a>
#### val square, cube
```
:: any x. num x -> num x
```
Square or cube a number.

<a name="sqrt"></a>
<a name="cbrt"></a>
#### val sqrt, cbrt
```
:: float -> float
```
Take the square or cube root of a float.

<a name="exp"></a>
#### val exp
```
:: float -> float
```
Natural exponentiation.
```
exp 0       --> 1
exp 1       --> 2.718281828459045
exp (log 5) --> 5
```

<a name="(**)"></a>
#### val (**)
```
:: float -> float -> float
```
Exponentiation with any base. `x ** y` means "x to the power of y".

<a name="log"></a>
#### val log
```
:: float -> float
```
Natural logarithm.
```
log 1                 --> 0
log 2.718281828459045 --> 1
log (exp 5)           --> 5
```

<a name="logBase"></a>
#### val logBase
```
:: float -> float -> float
```
Logarithm with any base.
```
logBase 2 16 --> 4
```

## Circle constants 
<a name="pi"></a>
#### val pi
```
:: float
```
The area of the unit circle.
```
pi = 3.141592653589793
```

<a name="tau"></a>
#### val tau
```
:: float
```
The circumference of the unit circle.
`tau` is usually more intuitive than `pi` when working with radians.
```
tau = 6.283185307179586
```

## Angles 
<a name="type-angle"></a>
#### type angle
```
angle = float
```
<a name="radians"></a>
#### val radians
```
:: float -> angle
```
Define an angle in radians. Angles are measured in radians by default,
but the `radians` function can make code clearer.
```
radians (tau / 4) = 1.5707963267948966
```

<a name="degrees"></a>
#### val degrees
```
:: float -> angle
```
Define an angle in degrees.
```
degrees 90 = 1.5707963267948966
```

<a name="turns"></a>
#### val turns
```
:: float -> angle
```
Define an angle in turns. (1 turn = tau radians = 360 degrees)
```
turns (1 / 4) = 1.5707963267948966
```

## Trigonometry 
<a name="sin"></a>
<a name="cos"></a>
<a name="tan"></a>
#### val sin, cos, tan
```
:: angle -> float
```
Basic trig functions: sine, cosine, and tangent.

<a name="asin"></a>
<a name="acos"></a>
<a name="atan"></a>
#### val asin, acos, atan
```
:: float -> angle
```
Inverse trig functions.

<a name="atan2"></a>
#### val atan2
```
:: float -> float -> angle
```
`atan2 y x` is equivalent to `atan (y / x)`.
You can use this to calculate the angle from the positive x-axis
to the point (x, y).

<a name="sinh"></a>
<a name="cosh"></a>
<a name="tanh"></a>
#### val sinh, cosh, tanh
```
:: angle -> float
```
Hyperbolic trig functions.

<a name="asinh"></a>
<a name="acosh"></a>
<a name="atanh"></a>
#### val asinh, acosh, atanh
```
:: float -> angle
```
Inverse hyperbolic trig functions.

## Distance functions 
<a name="hypot"></a>
#### val hypot
```
:: float -> float -> float
```
`hypot x y` is the hypoteneuse of a right triangle with
leg lengths `x` and `y`. It is also the distance from the origin
to the point (x, y).

<a name="distance"></a>
#### val distance
```
:: float -> float -> float -> float -> float
```
Calculate the distance between two points on a plane.

