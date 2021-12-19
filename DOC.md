# Char
<details>
  <summary></summary>

  <h4>
  
    type char :: Type
  
  </h4>
  <h4>
  
    isLower, isUpper, isAlpha, isAlphaNum :: char -> bool
  
  </h4>
  <h4>
  
    isDigit, isHexDigit :: char -> bool
  
  </h4>
  <h4>
  
    isSpace :: char -> bool
  
  </h4>
  <h4>
  
    toLower, toUpper :: char -> char
  
  </h4>
  <h4>
  
    fromCode :: int -> char
  
  </h4>
  <h4>
  
    toCode :: char -> int
  
  </h4>

</details>

# IO
<details>
  <summary></summary>

  <h4>
  
    type io :: Type -> Type
  
  </h4>
  <h4>
  
    map :: any a b. (a -> b) -> io a -> io b
  
  </h4>
  <h4>
  
    apply :: any a b. io (a -> b) -> io a -> io b
  
  </h4>
  <h4>
  
    bind :: any a b. (a -> io b) -> io a -> io b
  
  </h4>
  <h4>
  
    (;;) :: any a. io void -> io a -> io a
  
  </h4>
  <h4>
  
    pure :: any a. a -> io a
  
  </h4>
  <h4>
  
    none :: io void
  
  </h4>
  <h4>
  
    map2 :: any a1 a2 a3
       . (a1 -> a2 -> a3)
      -> io a1
      -> io a2
      -> io a3
  
  </h4>
  <h4>
  
    map3 :: any a1 a2 a3 a4
       . (a1 -> a2 -> a3 -> a4)
      -> io a1
      -> io a2
      -> io a3
      -> io a4
  
  </h4>
  <h4>
  
    map4 :: any a1 a2 a3 a4 a5
       . (a1 -> a2 -> a3 -> a4 -> a5)
      -> io a1
      -> io a2
      -> io a3
      -> io a4
      -> io a5
  
  </h4>
  <h4>
  
    sequence :: any a. list (io a) -> io (list a)
  
  </h4>
  <h4>
  
    sequenceMap :: any a b. (a -> io b) -> list a -> io (list b)
  
  </h4>

</details>

# List
<details>
  <summary></summary>

  <h4>
  
    type list :: Type -> Type
  
  </h4>
  <h4>
  
    makeList :: [Empty := void; Cons := {Head := a; Tail := list a; nil}; nil] -> list a
  
  </h4>
  <h4>
  
    getList :: list a -> [Empty := void; Cons := {Head := a; Tail := list a; nil}; nil]
  
  </h4>
  <h4>
  
    empty :: any a. list a
  
  </h4>
  <h4>
  
    (:) :: any a. a -> list a -> list a
  
  </h4>
  <h4>
  
    deconstruct :: any a b. b -> (a -> list a -> b) -> list a -> b
  
  </h4>
  <h4>
  
    single :: any a. a -> list a
  
  </h4>
  <h4>
  
    head :: any a. list a -> maybe a
  
  </h4>
  <h4>
  
    tail :: any a. list a -> maybe (list a)
  
  </h4>
  <h4>
  
    take :: any a. int -> list a -> list a
  
  </h4>
  <h4>
  
    drop :: any a. int -> list a -> list a
  
  </h4>
  <h4>
  
    get :: any a. int -> list a -> maybe a
  
  </h4>
  <h4>
  
    isEmpty :: any a. list a -> bool
  
  </h4>
  <h4>
  
    length :: any a. list a -> int
  
  </h4>
  <h4>
  
    (++) :: any a. list a -> list a -> list a
  
  </h4>
  <h4>
  
    concat :: any a. list (list a) -> list a
  
  </h4>
  <h4>
  
    concatMap :: any a b. (a -> list b) -> list a -> list b
  
  </h4>
  <h4>
  
    repeat :: any a. int -> a -> list a
  
  </h4>
  <h4>
  
    reverse :: any a. list a -> list a
  
  </h4>
  <h4>
  
    range :: int -> int -> list int
  
  </h4>
  <h4>
  
    contains :: any a. a -> list a -> bool
  
  </h4>
  <h4>
  
    find :: any a. a -> list a -> list int
  
  </h4>
  <h4>
  
    map :: any a b. (a -> b) -> list a -> list b
  
  </h4>
  <h4>
  
    mapIndex :: any a b. (int -> a -> b) -> list a -> list b
  
  </h4>
  <h4>
  
    mapResult :: any e a b. (a -> result e b) -> list a -> list b
  
  </h4>
  <h4>
  
    separate :: any a b. list (a & b) -> list a & list b
  
  </h4>
  <h4>
  
    filter :: any a. (a -> bool) -> list a -> list a
  
  </h4>
  <h4>
  
    partition :: any a. (a -> bool) -> list a -> list a & list a
  
  </h4>
  <h4>
  
    count :: any a. (a -> bool) -> list a -> int
  
  </h4>
  <h4>
  
    some :: any a. (a -> bool) -> list a -> bool
  
  </h4>
  <h4>
  
    all :: any a. (a -> bool) -> list a -> bool
  
  </h4>
  <h4>
  
    foldLeft :: any a b. (b -> a -> b) -> b -> list a -> b
  
  </h4>
  <h4>
  
    foldRight :: any a b. (a -> b -> b) -> b -> list a -> b
  
  </h4>
  <h4>
  
    sum :: any x. list (num x) -> num x
  
  </h4>
  <h4>
  
    product :: any x. list (num x) -> num x
  
  </h4>
  <h4>
  
    sort :: any a. list a -> list a
  
  </h4>
  <h4>
  
    sortBy :: any a b. (a -> b) -> list a -> list a
  
  </h4>
  <h4>
  
    sortWith :: any a. (a -> a -> order) -> list a -> list a
  
  </h4>
  <h4>
  
    apply :: any a b. list (a -> b) -> list a -> list b
  
  </h4>
  <h4>
  
    map2 :: any a1 a2 a3
       . (a1 -> a2 -> a3)
      -> list a1
      -> list a2
      -> list a3
  
  </h4>
  <h4>
  
    map3 :: any a1 a2 a3 a4
       . (a1 -> a2 -> a3 -> a4)
      -> list a1
      -> list a2
      -> list a3
      -> list a4
  
  </h4>
  <h4>
  
    map4 :: any a1 a2 a3 a4 a5
       . (a1 -> a2 -> a3 -> a4 -> a5)
      -> list a1
      -> list a2
      -> list a3
      -> list a4
      -> list a5
  
  </h4>
  <h4>
  
    zipApply :: any a b. list (a -> b) -> list a -> list b
  
  </h4>
  <h4>
  
    zip2 :: any a1 a2 a3
       . (a1 -> a2 -> a3)
      -> list a1
      -> list a2
      -> list a3
  
  </h4>
  <h4>
  
    zip3 :: any a1 a2 a3 a4
       . (a1 -> a2 -> a3 -> a4)
      -> list a1
      -> list a2
      -> list a3
      -> list a4
  
  </h4>
  <h4>
  
    zip4 :: any a1 a2 a3 a4 a5
       . (a1 -> a2 -> a3 -> a4 -> a5)
      -> list a1
      -> list a2
      -> list a3
      -> list a4
      -> list a5
  
  </h4>

</details>

# Main
<details>
  <summary></summary>

  <h4>
  
    main :: io void
  
  </h4>

</details>

# Math
<details>
  <summary></summary>

  <h4>
  
    square, cube :: any x. num x -> num x
  
  </h4>
  <h4>
  
    sqrt, cbrt :: float -> float
  
  </h4>
  <h4>
  
    exp :: float -> float
  
  </h4>
  <h4>
  
    (**) :: float -> float -> float
  
  </h4>
  <h4>
  
    log :: float -> float
  
  </h4>
  <h4>
  
    logBase :: float -> float -> float
  
  </h4>
  <h4>
  
    pi :: float
  
  </h4>
  <h4>
  
    tau :: float
  
  </h4>
  <h4>
  
    type angle  = float
  
  </h4>
  <h4>
  
    radians, degrees, turns :: float -> angle
  
  </h4>
  <h4>
  
    sin, cos, tan :: angle -> float
  
  </h4>
  <h4>
  
    asin, acos, atan :: float -> angle
  
  </h4>
  <h4>
  
    atan2 :: float -> float -> angle
  
  </h4>
  <h4>
  
    sinh, cosh, tanh :: angle -> float
  
  </h4>
  <h4>
  
    asinh, acosh, atanh :: float -> angle
  
  </h4>
  <h4>
  
    hypot :: float -> float -> float
  
  </h4>
  <h4>
  
    distance :: float -> float -> float -> float -> float
  
  </h4>

</details>

# Prelude
<details>
  <summary></summary>

  <h4>
  
    type (->) :: Type -> Type -> Type
  
  </h4>
  <h4>
  
    identity :: any a. a -> a
  
  </h4>
  <h4>
  
    const :: any a b. a -> b -> a
  
  </h4>
  <h4>
  
    ($) :: any a b. (a -> b) -> a -> b
  
  </h4>
  <h4>
  
    (#) :: any a b. a -> (a -> b) -> b
  
  </h4>
  <h4>
  
    (<<) :: any a b c. (b -> c) -> (a -> b) -> (a -> c)
  
  </h4>
  <h4>
  
    (>>) :: any a b c. (a -> b) -> (b -> c) -> (a -> c)
  
  </h4>
  <h4>
  
    type i :: Num
  
  </h4>
  <h4>
  
    type f :: Num
  
  </h4>
  <h4>
  
    type num :: Num -> Type
  
  </h4>
  <h4>
  
    type int  = num i
  
  </h4>
  <h4>
  
    type float  = num f
  
  </h4>
  <h4>
  
    float :: int -> float
  
  </h4>
  <h4>
  
    round, floor, ceil :: float -> int
  
  </h4>
  <h4>
  
    trunc :: float -> int
  
  </h4>
  <h4>
  
    (+), (~), (*) :: any x. num x -> num x -> num x
  
  </h4>
  <h4>
  
    negate :: any x. num x -> num x
  
  </h4>
  <h4>
  
    abs, signum :: any x. num x -> num x
  
  </h4>
  <h4>
  
    constrain :: any x. num x -> num x -> num x -> num x
  
  </h4>
  <h4>
  
    div, quot :: int -> int -> int
  
  </h4>
  <h4>
  
    mod, rem :: int -> int -> int
  
  </h4>
  <h4>
  
    (/) :: float -> float -> float
  
  </h4>
  <h4>
  
    type nil :: Row
  
  </h4>
  <h4>
  
    type (:=) :: Label -> Type -> Row -> Row
  
  </h4>
  <h4>
  
    type (;) f x = f x
  
  </h4>
  <h4>
  
    type record :: Row -> Type
  
  </h4>
  <h4>
  
    type variant :: Row -> Type
  
  </h4>
  <h4>
  
    type label :: Label -> Type
  
  </h4>
  <h4>
  
    type void  = {nil}
  
  </h4>
  <h4>
  
    void :: void
  
  </h4>
  <h4>
  
    (?) :: any s a r. label s -> {s := a; r} -> a
  
  </h4>
  <h4>
  
    delete :: any s a r. label s -> {s := a; r} -> {r}
  
  </h4>
  <h4>
  
    (:=) :: any s a r. label s -> a -> {r} -> {s := a; r}
  
  </h4>
  <h4>
  
    (!=) :: any s a b r. label s -> b -> {s := a; r} -> {s := b; r}
  
  </h4>
  <h4>
  
    (#=) :: any s a b r. label s -> (a -> b) -> {s := a; r} -> {s := b; r}
  
  </h4>
  <h4>
  
    (;) :: any a b. (a -> b) -> a -> b
  
  </h4>
  <h4>
  
    (^) :: any s a r. label s -> a -> [s := a; r]
  
  </h4>
  <h4>
  
    embed :: any s a r. label s -> [r] -> [s := a; r]
  
  </h4>
  <h4>
  
    match :: any s a b r. label s -> (a -> b) -> ([r] -> b) -> [s := a; r] -> b
  
  </h4>
  <h4>
  
    else :: any a b. a -> b -> a
  
  </h4>
  <h4>
  
    only :: any s r. label s -> [s := void; r]
  
  </h4>
  <h4>
  
    type lazy a = void -> a
  
  </h4>
  <h4>
  
    force :: any a. lazy a -> a
  
  </h4>
  <h4>
  
    general :: any a b. lazy a -> b -> a
  
  </h4>
  <h4>
  
    type (&) a b = {First := a; Second := b; nil}
  
  </h4>
  <h4>
  
    (&) :: any a b. a -> b -> a & b
  
  </h4>
  <h4>
  
    type bool  = [True := void; False := void; nil]
  
  </h4>
  <h4>
  
    true, false :: bool
  
  </h4>
  <h4>
  
    not :: bool -> bool
  
  </h4>
  <h4>
  
    expand (&&) x y = and x { y }
  
  </h4>
  <h4>
  
    expand (||) x y = or x { y }
  
  </h4>
  <h4>
  
    if :: any a. bool -> lazy a -> lazy a -> a
  
  </h4>
  <h4>
  
    (==) :: any a. a -> a -> bool
  
  </h4>
  <h4>
  
    (/=) :: any a. a -> a -> bool
  
  </h4>
  <h4>
  
    (<), (>) :: any a. a -> a -> bool
  
  </h4>
  <h4>
  
    (<=), (>=) :: any a. a -> a -> bool
  
  </h4>
  <h4>
  
    isFinite :: float -> bool
  
  </h4>
  <h4>
  
    isInfinite :: float -> bool
  
  </h4>
  <h4>
  
    isNaN :: float -> bool
  
  </h4>
  <h4>
  
    min, max :: any a. a -> a -> a
  
  </h4>
  <h4>
  
    type order  = [Less := void; Equal := void; Greater := void; nil]
  
  </h4>
  <h4>
  
    compare :: any a. a -> a -> order
  
  </h4>

</details>

# Result
<details>
  <summary></summary>

  <h4>
  
    type result e a = [Error := e; Just := a; nil]
  
  </h4>
  <h4>
  
    type maybe a = result void a
  
  </h4>
  <h4>
  
    nothing :: any a. maybe a
  
  </h4>
  <h4>
  
    default :: any e a. a -> result e a -> a
  
  </h4>
  <h4>
  
    map :: any e a b. (a -> b) -> result e a -> result e b
  
  </h4>
  <h4>
  
    apply :: any e a b. result e (a -> b) -> result e a -> result e b
  
  </h4>
  <h4>
  
    bind :: any e a b. (a -> result e b) -> result e a -> result e b
  
  </h4>
  <h4>
  
    map2 :: any e a1 a2 a3
       . (a1 -> a2 -> a3)
      -> result e a1
      -> result e a2
      -> result e a3
  
  </h4>
  <h4>
  
    map3 :: any e a1 a2 a3 a4
       . (a1 -> a2 -> a3 -> a4)
      -> result e a1
      -> result e a2
      -> result e a3
      -> result e a4
  
  </h4>
  <h4>
  
    map4 :: any e a1 a2 a3 a4 a5
       . (a1 -> a2 -> a3 -> a4 -> a5)
      -> result e a1
      -> result e a2
      -> result e a3
      -> result e a4
      -> result e a5
  
  </h4>
  <h4>
  
    sequence :: any e a. list (result e a) -> result e (list a)
  
  </h4>
  <h4>
  
    sequenceMap :: any e a b. (a -> result e b) -> list a -> result e (list b)
  
  </h4>

</details>

# String
<details>
  <summary></summary>

  <h4>
  
    type string :: Type
  
  </h4>
  <h4>
  
    isEmpty :: string -> bool
  
  </h4>
  <h4>
  
    length :: string -> int
  
  </h4>
  <h4>
  
    (<>) :: string -> string -> string
  
  </h4>
  <h4>
  
    concat :: list string -> string
  
  </h4>
  <h4>
  
    concatMap :: any a. (a -> string) -> list a -> string
  
  </h4>
  <h4>
  
    join :: string -> list string -> string
  
  </h4>
  <h4>
  
    joinMap :: any a. string -> (a -> string) -> list a -> string
  
  </h4>
  <h4>
  
    repeat :: int -> string -> string
  
  </h4>
  <h4>
  
    reverse :: string -> string
  
  </h4>
  <h4>
  
    split :: string -> string -> list string
  
  </h4>
  <h4>
  
    words, lines :: string -> list string
  
  </h4>
  <h4>
  
    slice :: int -> int -> string -> string
  
  </h4>
  <h4>
  
    takeLeft :: int -> string -> string
  
  </h4>
  <h4>
  
    takeRight :: int -> string -> string
  
  </h4>
  <h4>
  
    dropLeft :: int -> string -> string
  
  </h4>
  <h4>
  
    dropRight :: int -> string -> string
  
  </h4>
  <h4>
  
    toLower, toUpper :: string -> string
  
  </h4>
  <h4>
  
    padLeft, padRight :: int -> string -> string
  
  </h4>
  <h4>
  
    trim, trimLeft, trimRight :: string -> string
  
  </h4>
  <h4>
  
    contains, startsWith, endsWith :: string -> string -> bool
  
  </h4>
  <h4>
  
    find :: string -> string -> list int
  
  </h4>
  <h4>
  
    replace :: string -> string -> string -> string
  
  </h4>
  <h4>
  
    toInt :: string -> maybe int
  
  </h4>
  <h4>
  
    fromInt :: int -> string
  
  </h4>
  <h4>
  
    toFloat :: string -> maybe float
  
  </h4>
  <h4>
  
    fromFloat :: float -> string
  
  </h4>
  <h4>
  
    toList :: string -> list char
  
  </h4>
  <h4>
  
    fromList :: list char -> string
  
  </h4>
  <h4>
  
    cons :: char -> string -> string
  
  </h4>
  <h4>
  
    deconstruct :: any a. a -> (char -> string -> a) -> string -> a
  
  </h4>
  <h4>
  
    single :: char -> string
  
  </h4>
  <h4>
  
    head :: string -> maybe char
  
  </h4>
  <h4>
  
    tail :: string -> maybe string
  
  </h4>
  <h4>
  
    get :: int -> string -> maybe char
  
  </h4>
  <h4>
  
    map :: (char -> char) -> string -> string
  
  </h4>
  <h4>
  
    mapIndex :: (int -> char -> char) -> string -> string
  
  </h4>
  <h4>
  
    filter :: (char -> bool) -> string -> string
  
  </h4>
  <h4>
  
    partition :: (char -> bool) -> string -> string & string
  
  </h4>
  <h4>
  
    count :: (char -> bool) -> string -> int
  
  </h4>
  <h4>
  
    some :: (char -> bool) -> string -> bool
  
  </h4>
  <h4>
  
    all :: (char -> bool) -> string -> bool
  
  </h4>
  <h4>
  
    foldLeft :: any a. (a -> char -> a) -> a -> string -> a
  
  </h4>
  <h4>
  
    foldRight :: any a. (char -> a -> a) -> a -> string -> a
  
  </h4>

</details>

# Variant
<details>
  <summary></summary>

  <h4>
  
    map :: any s a b r. label s -> (a -> b) -> [s := a; r] -> [s := b; r]
  
  </h4>
  <h4>
  
    apply :: any s a b r. label s -> [s := (a -> b); r] -> [s := a; r] -> [s := b; r]
  
  </h4>
  <h4>
  
    bind :: any s a b r. label s -> (a -> [s := b; r]) -> [s := a; r] -> [s := b; r]
  
  </h4>
  <h4>
  
    map2 :: any s a1 a2 a3 r
       . label s
      -> (a1 -> a2 -> a3)
      -> [s := a1; r]
      -> [s := a2; r]
      -> [s := a3; r]
  
  </h4>
  <h4>
  
    map3 :: any s a1 a2 a3 a4 r
       . label s
      -> (a1 -> a2 -> a3 -> a4)
      -> [s := a1; r]
      -> [s := a2; r]
      -> [s := a3; r]
      -> [s := a4; r]
  
  </h4>
  <h4>
  
    map4 :: any s a1 a2 a3 a4 a5 r
       . label s
      -> (a1 -> a2 -> a3 -> a4 -> a5)
      -> [s := a1; r]
      -> [s := a2; r]
      -> [s := a3; r]
      -> [s := a4; r]
      -> [s := a5; r]
  
  </h4>
  <h4>
  
    sequence :: any s a r. label s -> list [s := a; r] -> [s := list a; r]
  
  </h4>
  <h4>
  
    sequenceMap :: any s a b r. label s -> (a -> [s := b; r]) -> list a -> [s := list b; r]
  
  </h4>

</details>

