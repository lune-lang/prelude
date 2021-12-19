# Char
<details>
  <summary></summary>

  <h4>
  
    type char :: Type
  
  </h4>
  <h4>
  
    foreign isLower, isUpper, isAlpha, isAlphaNum :: char -> bool
    
  
  </h4>
  <h4>
  
    foreign isDigit, isHexDigit :: char -> bool
    
  
  </h4>
  <h4>
  
    foreign isSpace :: char -> bool
    
  
  </h4>
  <h4>
  
    foreign toLower, toUpper :: char -> char
    
  
  </h4>
  <h4>
  
    foreign fromCode :: int -> char
    
  
  </h4>
  <h4>
  
    foreign toCode :: char -> int
  
  </h4>

</details>

# IO
<details>
  <summary></summary>

  <h4>
  
    infix ;; left 20
    
  
  </h4>
  <h4>
  
    type io :: Type -> Type
    
  
  </h4>
  <h4>
  
    foreign map :: any a b. (a -> b) -> io a -> io b
    
  
  </h4>
  <h4>
  
    foreign apply :: any a b. io (a -> b) -> io a -> io b
    
  
  </h4>
  <h4>
  
    foreign bind :: any a b. (a -> io b) -> io a -> io b
    
  
  </h4>
  <h4>
  
    val (;;) :: any a. io void -> io a -> io a
  
  </h4>
  <h4>
  
    foreign pure :: any a. a -> io a
    
  
  </h4>
  <h4>
  
    val none :: io void
  
  </h4>
  <h4>
  
    val map2
      :: any a1 a2 a3
       . (a1 -> a2 -> a3)
      -> io a1
      -> io a2
      -> io a3
  
  </h4>
  <h4>
  
    val map3
      :: any a1 a2 a3 a4
       . (a1 -> a2 -> a3 -> a4)
      -> io a1
      -> io a2
      -> io a3
      -> io a4
  
  </h4>
  <h4>
  
    val map4
      :: any a1 a2 a3 a4 a5
       . (a1 -> a2 -> a3 -> a4 -> a5)
      -> io a1
      -> io a2
      -> io a3
      -> io a4
      -> io a5
  
  </h4>
  <h4>
  
    val sequence :: any a. list (io a) -> io (list a)
  
  </h4>
  <h4>
  
    val sequenceMap :: any a b. (a -> io b) -> list a -> io (list b)
  
  </h4>

</details>

# List
<details>
  <summary></summary>

  <h4>
  
    infix : right 55
  
  </h4>
  <h4>
  
    infix ++ right 55
    
  
  </h4>
  <h4>
  
    type list :: Type -> Type
      where list a = [Empty := void; Cons := {Head := a; Tail := list a; nil}; nil]
      with makeList, getList
    
  
  </h4>
  <h4>
  
    val empty :: any a. list a
  
  </h4>
  <h4>
  
    val (:) :: any a. a -> list a -> list a
  
  </h4>
  <h4>
  
    val deconstruct :: any a b. b -> (a -> list a -> b) -> list a -> b
  
  </h4>
  <h4>
  
    val single :: any a. a -> list a
  
  </h4>
  <h4>
  
    val head :: any a. list a -> maybe a
  
  </h4>
  <h4>
  
    val tail :: any a. list a -> maybe (list a)
  
  </h4>
  <h4>
  
    val take :: any a. int -> list a -> list a
  
  </h4>
  <h4>
  
    val drop :: any a. int -> list a -> list a
  
  </h4>
  <h4>
  
    val get :: any a. int -> list a -> maybe a
  
  </h4>
  <h4>
  
    val isEmpty :: any a. list a -> bool
  
  </h4>
  <h4>
  
    val length :: any a. list a -> int
  
  </h4>
  <h4>
  
    val (++) :: any a. list a -> list a -> list a
  
  </h4>
  <h4>
  
    val concat :: any a. list (list a) -> list a
  
  </h4>
  <h4>
  
    val concatMap :: any a b. (a -> list b) -> list a -> list b
  
  </h4>
  <h4>
  
    val repeat :: any a. int -> a -> list a
  
  </h4>
  <h4>
  
    val reverse :: any a. list a -> list a
  
  </h4>
  <h4>
  
    val range :: int -> int -> list int
  
  </h4>
  <h4>
  
    val contains :: any a. a -> list a -> bool
  
  </h4>
  <h4>
  
    val find :: any a. a -> list a -> list int
  
  </h4>
  <h4>
  
    val findN :: any a. int -> a -> list a -> list int
  
  </h4>
  <h4>
  
    val map :: any a b. (a -> b) -> list a -> list b
  
  </h4>
  <h4>
  
    val mapIndex :: any a b. (int -> a -> b) -> list a -> list b
  
  </h4>
  <h4>
  
    val mapIndexN :: any a b. int -> (int -> a -> b) -> list a -> list b
  
  </h4>
  <h4>
  
    val mapResult :: any e a b. (a -> result e b) -> list a -> list b
  
  </h4>
  <h4>
  
    val separate :: any a b. list (a & b) -> list a & list b
  
  </h4>
  <h4>
  
    val filter :: any a. (a -> bool) -> list a -> list a
  
  </h4>
  <h4>
  
    val partition :: any a. (a -> bool) -> list a -> list a & list a
  
  </h4>
  <h4>
  
    val count :: any a. (a -> bool) -> list a -> int
  
  </h4>
  <h4>
  
    val some :: any a. (a -> bool) -> list a -> bool
  
  </h4>
  <h4>
  
    val all :: any a. (a -> bool) -> list a -> bool
  
  </h4>
  <h4>
  
    val foldLeft :: any a b. (b -> a -> b) -> b -> list a -> b
  
  </h4>
  <h4>
  
    val foldRight :: any a b. (a -> b -> b) -> b -> list a -> b
  
  </h4>
  <h4>
  
    val sum :: any x. list (num x) -> num x
  
  </h4>
  <h4>
  
    val product :: any x. list (num x) -> num x
  
  </h4>
  <h4>
  
    val sort :: any a. list a -> list a
  
  </h4>
  <h4>
  
    val sortBy :: any a b. (a -> b) -> list a -> list a
  
  </h4>
  <h4>
  
    val sortWith :: any a. (a -> a -> order) -> list a -> list a
  
  </h4>
  <h4>
  
    val apply :: any a b. list (a -> b) -> list a -> list b
  
  </h4>
  <h4>
  
    val map2
      :: any a1 a2 a3
       . (a1 -> a2 -> a3)
      -> list a1
      -> list a2
      -> list a3
  
  </h4>
  <h4>
  
    val map3
      :: any a1 a2 a3 a4
       . (a1 -> a2 -> a3 -> a4)
      -> list a1
      -> list a2
      -> list a3
      -> list a4
  
  </h4>
  <h4>
  
    val map4
      :: any a1 a2 a3 a4 a5
       . (a1 -> a2 -> a3 -> a4 -> a5)
      -> list a1
      -> list a2
      -> list a3
      -> list a4
      -> list a5
  
  </h4>
  <h4>
  
    val zipApply :: any a b. list (a -> b) -> list a -> list b
  
  </h4>
  <h4>
  
    val zip2
      :: any a1 a2 a3
       . (a1 -> a2 -> a3)
      -> list a1
      -> list a2
      -> list a3
  
  </h4>
  <h4>
  
    val zip3
      :: any a1 a2 a3 a4
       . (a1 -> a2 -> a3 -> a4)
      -> list a1
      -> list a2
      -> list a3
      -> list a4
  
  </h4>
  <h4>
  
    val zip4
      :: any a1 a2 a3 a4 a5
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
  
    foreign debug :: any a. a -> io void
    
  
  </h4>
  <h4>
  
    val main :: io void
  
  </h4>

</details>

# Math
<details>
  <summary></summary>

  <h4>
  
    infix ** right 70
    
  
  </h4>
  <h4>
  
    val square, cube :: any x. num x -> num x
  
  </h4>
  <h4>
  
    foreign sqrt, cbrt :: float -> float
    
  
  </h4>
  <h4>
  
    foreign exp :: float -> float
  
  </h4>
  <h4>
  
    foreign (**) :: float -> float -> float
    
  
  </h4>
  <h4>
  
    foreign log :: float -> float
    
  
  </h4>
  <h4>
  
    val logBase :: float -> float -> float
  
  </h4>
  <h4>
  
    foreign pi :: float
    
  
  </h4>
  <h4>
  
    val tau :: float
  
  </h4>
  <h4>
  
    type angle = float
    
  
  </h4>
  <h4>
  
    val radians, degrees, turns :: float -> angle
  
  </h4>
  <h4>
  
    foreign sin, cos, tan :: angle -> float
    
  
  </h4>
  <h4>
  
    foreign asin, acos, atan :: float -> angle
    
  
  </h4>
  <h4>
  
    foreign atan2 :: float -> float -> angle
    
  
  </h4>
  <h4>
  
    foreign sinh, cosh, tanh :: angle -> float
    
  
  </h4>
  <h4>
  
    foreign asinh, acosh, atanh :: float -> angle
    
  
  </h4>
  <h4>
  
    foreign hypot :: float -> float -> float
    
  
  </h4>
  <h4>
  
    val distance :: float -> float -> float -> float -> float
  
  </h4>

</details>

# Prelude
<details>
  <summary></summary>

  <h4>
  
    infix ; right 10
    
  
  </h4>
  <h4>
  
    infix := non 15
  
  </h4>
  <h4>
  
    infix != non 15
  
  </h4>
  <h4>
  
    infix #= non 15
    
  
  </h4>
  <h4>
  
    infix # left 20
    
  
  </h4>
  <h4>
  
    infix $ right 25
    
  
  </h4>
  <h4>
  
    infix -> right 30
    
  
  </h4>
  <h4>
  
    infix & right 35
    
  
  </h4>
  <h4>
  
    infix || right 40
    
  
  </h4>
  <h4>
  
    infix && right 45
    
  
  </h4>
  <h4>
  
    infix == non 50
  
  </h4>
  <h4>
  
    infix /= non 50
  
  </h4>
  <h4>
  
    infix < non 50
  
  </h4>
  <h4>
  
    infix <= non 50
  
  </h4>
  <h4>
  
    infix > non 50
  
  </h4>
  <h4>
  
    infix >= non 50
    
  
  </h4>
  <h4>
  
    infix + left 60
  
  </h4>
  <h4>
  
    infix ~ left 60
    
  
  </h4>
  <h4>
  
    infix * left 65
  
  </h4>
  <h4>
  
    infix / left 65
    
  
  </h4>
  <h4>
  
    infix ? right 70
  
  </h4>
  <h4>
  
    infix ^ right 70
    
  
  </h4>
  <h4>
  
    infix << right 75
  
  </h4>
  <h4>
  
    infix >> left 75
    
  
  </h4>
  <h4>
  
    type (->) :: Type -> Type -> Type
  
  </h4>
  <h4>
  
    val identity :: any a. a -> a
  
  </h4>
  <h4>
  
    val const :: any a b. a -> b -> a
  
  </h4>
  <h4>
  
    val ($) :: any a b. (a -> b) -> a -> b
  
  </h4>
  <h4>
  
    val (#) :: any a b. a -> (a -> b) -> b
  
  </h4>
  <h4>
  
    val (<<) :: any a b c. (b -> c) -> (a -> b) -> (a -> c)
  
  </h4>
  <h4>
  
    val (>>) :: any a b c. (a -> b) -> (b -> c) -> (a -> c)
  
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
  
    type int = num i
  
  </h4>
  <h4>
  
    type float = num f
  
  </h4>
  <h4>
  
    foreign float :: int -> float
    
  
  </h4>
  <h4>
  
    foreign round, floor, ceil :: float -> int
    
  
  </h4>
  <h4>
  
    val trunc :: float -> int
  
  </h4>
  <h4>
  
    foreign (+), (~), (*) :: any x. num x -> num x -> num x
    
  
  </h4>
  <h4>
  
    foreign negate :: any x. num x -> num x
  
  </h4>
  <h4>
  
    foreign abs, signum :: any x. num x -> num x
    
  
  </h4>
  <h4>
  
    val constrain :: any x. num x -> num x -> num x -> num x
  
  </h4>
  <h4>
  
    foreign div, quot :: int -> int -> int
    
  
  </h4>
  <h4>
  
    foreign mod, rem :: int -> int -> int
    
  
  </h4>
  <h4>
  
    foreign (/) :: float -> float -> float
    
  
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
  
    type void = {nil}
    
  
  </h4>
  <h4>
  
    foreign void :: void
    
  
  </h4>
  <h4>
  
    foreign (?) :: any s a r. label s -> {s := a; r} -> a
    
  
  </h4>
  <h4>
  
    foreign delete :: any s a r. label s -> {s := a; r} -> {r}
    
  
  </h4>
  <h4>
  
    foreign (:=) :: any s a r. label s -> a -> {r} -> {s := a; r}
    
  
  </h4>
  <h4>
  
    val (!=) :: any s a b r. label s -> b -> {s := a; r} -> {s := b; r}
  
  </h4>
  <h4>
  
    val (#=) :: any s a b r. label s -> (a -> b) -> {s := a; r} -> {s := b; r}
  
  </h4>
  <h4>
  
    val (;) :: any a b. (a -> b) -> a -> b
  
  </h4>
  <h4>
  
    foreign (^) :: any s a r. label s -> a -> [s := a; r]
    
  
  </h4>
  <h4>
  
    foreign embed :: any s a r. label s -> [r] -> [s := a; r]
    
  
  </h4>
  <h4>
  
    foreign match :: any s a b r. label s -> (a -> b) -> ([r] -> b) -> [s := a; r] -> b
    
  
  </h4>
  <h4>
  
    val else :: any a b. a -> b -> a
  
  </h4>
  <h4>
  
    val only :: any s r. label s -> [s := void; r]
  
  </h4>
  <h4>
  
    type lazy a = void -> a
    
  
  </h4>
  <h4>
  
    val force :: any a. lazy a -> a
  
  </h4>
  <h4>
  
    val general :: any a b. lazy a -> b -> a
  
  </h4>
  <h4>
  
    type (&) a b = {First := a; Second := b; nil}
    
  
  </h4>
  <h4>
  
    val (&) :: any a b. a -> b -> a & b
  
  </h4>
  <h4>
  
    type bool = [True := void; False := void; nil]
    
  
  </h4>
  <h4>
  
    val true, false :: bool
  
  </h4>
  <h4>
  
    val not :: bool -> bool
  
  </h4>
  <h4>
  
    val and, or :: bool -> lazy bool -> bool
  
  </h4>
  <h4>
  
    expand (&&) x y = and x { y }
  
  </h4>
  <h4>
  
    expand (||) x y = or x { y }
    
  
  </h4>
  <h4>
  
    val if :: any a. bool -> lazy a -> lazy a -> a
  
  </h4>
  <h4>
  
    foreign (==) :: any a. a -> a -> bool
    
  
  </h4>
  <h4>
  
    val (/=) :: any a. a -> a -> bool
  
  </h4>
  <h4>
  
    foreign (<), (>) :: any a. a -> a -> bool
    
  
  </h4>
  <h4>
  
    val (<=), (>=) :: any a. a -> a -> bool
  
  </h4>
  <h4>
  
    foreign isFinite :: float -> bool
    
  
  </h4>
  <h4>
  
    val isInfinite :: float -> bool
  
  </h4>
  <h4>
  
    foreign isNaN :: float -> bool
    
  
  </h4>
  <h4>
  
    val min, max :: any a. a -> a -> a
  
  </h4>
  <h4>
  
    type order = [Less := void; Equal := void; Greater := void; nil]
    
  
  </h4>
  <h4>
  
    val compare :: any a. a -> a -> order
  
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
  
    val nothing :: any a. maybe a
  
  </h4>
  <h4>
  
    val default :: any e a. a -> result e a -> a
  
  </h4>
  <h4>
  
    val map :: any e a b. (a -> b) -> result e a -> result e b
  
  </h4>
  <h4>
  
    val apply :: any e a b. result e (a -> b) -> result e a -> result e b
  
  </h4>
  <h4>
  
    val bind :: any e a b. (a -> result e b) -> result e a -> result e b
  
  </h4>
  <h4>
  
    val map2
      :: any e a1 a2 a3
       . (a1 -> a2 -> a3)
      -> result e a1
      -> result e a2
      -> result e a3
  
  </h4>
  <h4>
  
    val map3
      :: any e a1 a2 a3 a4
       . (a1 -> a2 -> a3 -> a4)
      -> result e a1
      -> result e a2
      -> result e a3
      -> result e a4
  
  </h4>
  <h4>
  
    val map4
      :: any e a1 a2 a3 a4 a5
       . (a1 -> a2 -> a3 -> a4 -> a5)
      -> result e a1
      -> result e a2
      -> result e a3
      -> result e a4
      -> result e a5
  
  </h4>
  <h4>
  
    val sequence :: any e a. list (result e a) -> result e (list a)
  
  </h4>
  <h4>
  
    val sequenceMap :: any e a b. (a -> result e b) -> list a -> result e (list b)
  
  </h4>

</details>

# String
<details>
  <summary></summary>

  <h4>
  
    infix <> left 60
    
  
  </h4>
  <h4>
  
    type string :: Type
  
  </h4>
  <h4>
  
    val isEmpty :: string -> bool
  
  </h4>
  <h4>
  
    foreign length :: string -> int
    
  
  </h4>
  <h4>
  
    foreign (<>) :: string -> string -> string
    
  
  </h4>
  <h4>
  
    val concat :: list string -> string
  
  </h4>
  <h4>
  
    val concatMap :: any a. (a -> string) -> list a -> string
  
  </h4>
  <h4>
  
    val join :: string -> list string -> string
  
  </h4>
  <h4>
  
    val joinMap :: any a. string -> (a -> string) -> list a -> string
  
  </h4>
  <h4>
  
    val repeat :: int -> string -> string
  
  </h4>
  <h4>
  
    foreign reverse :: string -> string
    
  
  </h4>
  <h4>
  
    foreign split :: string -> string -> list string
    
  
  </h4>
  <h4>
  
    foreign words, lines :: string -> list string
    
  
  </h4>
  <h4>
  
    foreign slice :: int -> int -> string -> string
    
  
  </h4>
  <h4>
  
    val takeLeft :: int -> string -> string
  
  </h4>
  <h4>
  
    val takeRight :: int -> string -> string
  
  </h4>
  <h4>
  
    val dropLeft :: int -> string -> string
  
  </h4>
  <h4>
  
    val dropRight :: int -> string -> string
  
  </h4>
  <h4>
  
    foreign toLower, toUpper :: string -> string
    
  
  </h4>
  <h4>
  
    val padLeft, padRight :: int -> string -> string
  
  </h4>
  <h4>
  
    foreign trim, trimLeft, trimRight :: string -> string
    
  
  </h4>
  <h4>
  
    foreign contains, startsWith, endsWith :: string -> string -> bool
    
  
  </h4>
  <h4>
  
    val find :: string -> string -> list int
  
  </h4>
  <h4>
  
    foreign replace :: string -> string -> string -> string
    
  
  </h4>
  <h4>
  
    foreign toInt :: string -> maybe int
    
  
  </h4>
  <h4>
  
    foreign fromInt :: int -> string
    
  
  </h4>
  <h4>
  
    foreign toFloat :: string -> maybe float
    
  
  </h4>
  <h4>
  
    foreign fromFloat :: float -> string
    
  
  </h4>
  <h4>
  
    foreign toList :: string -> list char
    
  
  </h4>
  <h4>
  
    foreign fromList :: list char -> string
    
  
  </h4>
  <h4>
  
    foreign cons :: char -> string -> string
    
  
  </h4>
  <h4>
  
    foreign deconstruct :: any a. a -> (char -> string -> a) -> string -> a
    
  
  </h4>
  <h4>
  
    foreign single :: char -> string
    
  
  </h4>
  <h4>
  
    val head :: string -> maybe char
  
  </h4>
  <h4>
  
    val tail :: string -> maybe string
  
  </h4>
  <h4>
  
    val get :: int -> string -> maybe char
  
  </h4>
  <h4>
  
    val map :: (char -> char) -> string -> string
  
  </h4>
  <h4>
  
    val mapIndex :: (int -> char -> char) -> string -> string
  
  </h4>
  <h4>
  
    val mapIndexN :: int -> (int -> char -> char) -> string -> string
  
  </h4>
  <h4>
  
    val filter :: (char -> bool) -> string -> string
  
  </h4>
  <h4>
  
    val partition :: (char -> bool) -> string -> string & string
  
  </h4>
  <h4>
  
    val count :: (char -> bool) -> string -> int
  
  </h4>
  <h4>
  
    val some :: (char -> bool) -> string -> bool
  
  </h4>
  <h4>
  
    val all :: (char -> bool) -> string -> bool
  
  </h4>
  <h4>
  
    val foldLeft :: any a. (a -> char -> a) -> a -> string -> a
  
  </h4>
  <h4>
  
    val foldRight :: any a. (char -> a -> a) -> a -> string -> a
  
  </h4>

</details>

# Variant
<details>
  <summary></summary>

  <h4>
  
    val map :: any s a b r. label s -> (a -> b) -> [s := a; r] -> [s := b; r]
  
  </h4>
  <h4>
  
    val apply :: any s a b r. label s -> [s := (a -> b); r] -> [s := a; r] -> [s := b; r]
  
  </h4>
  <h4>
  
    val bind :: any s a b r. label s -> (a -> [s := b; r]) -> [s := a; r] -> [s := b; r]
  
  </h4>
  <h4>
  
    val map2
      :: any s a1 a2 a3 r
       . label s
      -> (a1 -> a2 -> a3)
      -> [s := a1; r]
      -> [s := a2; r]
      -> [s := a3; r]
  
  </h4>
  <h4>
  
    val map3
      :: any s a1 a2 a3 a4 r
       . label s
      -> (a1 -> a2 -> a3 -> a4)
      -> [s := a1; r]
      -> [s := a2; r]
      -> [s := a3; r]
      -> [s := a4; r]
  
  </h4>
  <h4>
  
    val map4
      :: any s a1 a2 a3 a4 a5 r
       . label s
      -> (a1 -> a2 -> a3 -> a4 -> a5)
      -> [s := a1; r]
      -> [s := a2; r]
      -> [s := a3; r]
      -> [s := a4; r]
      -> [s := a5; r]
  
  </h4>
  <h4>
  
    val sequence :: any s a r. label s -> list [s := a; r] -> [s := list a; r]
  
  </h4>
  <h4>
  
    val sequenceMap :: any s a b r. label s -> (a -> [s := b; r]) -> list a -> [s := list b; r]
  
  </h4>

</details>

