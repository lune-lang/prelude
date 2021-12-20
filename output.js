var Char = {}; var IO = {}; var Main = {}; var $Math = {}; var Prelude = {}; var $String = {}; var List = {}; var Result = {}; var Variant = {}; 
IO["map"] = function(f) {
  return function(act) {
    return function() {
      return f(act());
    };
  };
};

IO["apply"] = function(act1) {
  return function(act2) {
    return function() {
      return act1()(act2());
    };
  };
};

IO["bind"] = function(f) {
  return function(act) {
      return function() {
        return f(act())();
      };
  };
};

IO["pure"] = function(x) {
  return function() {
    return x;
  };
};
Char.Internal = {
  test: function(regex) {
    return function(x) {
      return Prelude.Internal.convertBool(regex.test(x));
    };
  }
};

Char["isLower"] = Char.Internal.test(/[a-z]/);
Char["isUpper"] = Char.Internal.test(/[A-Z]/);
Char["isAlpha"] = Char.Internal.test(/[a-zA-Z]/);
Char["isAlphaNum"] = Char.Internal.test(/[\da-zA-Z]/);

Char["isDigit"] = Char.Internal.test(/[\d]/);
Char["isHexDigit"] = Char.Internal.test(/[\da-fA-F]/);

Char["isSpace"] = Char.Internal.test(/[\s]/);

Char["toLower"] = function(x) { return x.toLowerCase(); };
Char["toUpper"] = function(x) { return x.toUpperCase(); };

Char["fromCode"] = String.fromCharCode;
Char["toCode"] = function(x) { return x.charCodeAt(0); };
Main["debug"] = function(x) {
  return function() {
    console.log(x);
    return Prelude["void"];
  }
}
$String.Internal = {
  arrayToList: function(array) {
    if(array.length === 0)
      return List["empty"];
    var first = array.shift();
    return List[":"](first)(this.arrayToList(array));
  },

  listToArray: function(list) {
    var self = this;
    return List["deconstruct"]([])(function(x) {
      return function(xs) {
        var array = self.listToArray(xs);
        array.unshift(x);
        return array;
      }
    })(list);
  }
};

$String["length"] = function(str) { return str.length; };

$String["<>"] = function(str1) {
  return function(str2) { str1 + str2; };
};

$String["reverse"] = function(str) {
  return str.split("").reverse().join("");
};

$String["split"] = function(sep) {
  return function(str) {
    return $String.Internal.arrayToList(str.split(sep));
  };
};

$String["words"] = function(str) {
  return $String.Internal.arrayToList(str.split(/\s+/));
};

$String["lines"] = function(str) {
  return $String.Internal.arrayToList(str.split(/\r?\n/));
};

$String["slice"] = function(x) {
  return function(y) {
    return function(str) {
      if(x < 0) x += str.length;
      if(y < 0) y += str.length;
      if(x >= y) return "";
      return str.substring(x, y);
    };
  };
};

$String["toLower"] = function(str) { return str.toLowerCase(); };
$String["toUpper"] = function(str) { return str.toUpperCase(); };

$String["trim"] = function(str) { return str.trim(); };
$String["trimLeft"] = function(str) { return str.trimLeft(); };
$String["trimRight"] = function(str) { return str.trimRight(); };

$String["contains"] = function(sub) {
  return function(str) {
    return Prelude.Internal.convertBool(str.includes(sub));
  };
};

$String["startsWith"] = function(sub) {
  return function(str) {
    return Prelude.Internal.convertBool(str.startsWith(sub));
  };
};

$String["endsWith"] = function(sub) {
  return function(str) {
    return Prelude.Internal.convertBool(str.endsWith(sub));
  };
};

$String["replace"] = function(sub) {
  return function(rep) {
    return function(str) {
      var regex = new RegExp(sub.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      return str.replace(regex, rep);
    };
  };
};

$String["toInt"] = function(str) {
  var x = parseInt(str, 10);
  if(isNaN(x)) return Result["nothing"];
  return Prelude["^"]("Just")(x);
};

$String["fromInt"] = function(x) { return x.toString(); };

$String["toFloat"] = function(str) {
  var x = parseFloat(str, 10);
  if(isNaN(x)) return Result["nothing"];
  return Prelude["^"]("Just")(x);
};

$String["fromFloat"] = function(x) { return x.toString(); };

$String["toList"] = function(str) {
  return $String.Internal.arrayToList(str.split(''));
};

$String["fromList"] = function(list) {
  return $String.Internal.listToArray(list).join('');
};

$String["cons"] = function(c) {
  return function(str) { return c + str; };
};

$String["deconstruct"] = function(x) {
  return function(f) {
    return function(str) {
      if(str.length === 0) return x;
      return f(str.charAt(0))(str.substring(1));
    };
  };
};

$String["single"] = function(c) { return c; };
$Math["sqrt"] = Math.sqrt;
$Math["cbrt"] = Math.cbrt;

$Math["exp"] = Math.exp;

$Math["**"] = function(x) {
  return function(y) {
    return Math.pow(x, y);
  }
}

$Math["log"] = Math.log;

$Math["pi"] = Math.PI;

$Math["sin"] = Math.sin;
$Math["cos"] = Math.cos;
$Math["tan"] = Math.tan;

$Math["asin"] = Math.asin;
$Math["acos"] = Math.acos;
$Math["atan"] = Math.atan;

$Math["atan2"] = function(x) {
  return function(y) {
    return Math.atan2(x, y);
  }
}

$Math["sinh"] = Math.sinh;
$Math["cosh"] = Math.cosh;
$Math["tanh"] = Math.tanh;

$Math["asinh"] = Math.asinh;
$Math["acosh"] = Math.acosh;
$Math["atanh"] = Math.atanh;

$Math["hypot"] = function(x) {
  return function(y) {
    return Math.hypot(x, y);
  }
}
Prelude.Internal = {
  deepCopy: function(object) {
    var result = Array.isArray(object) ? [] : {};
    for(var key in object) {
      var value = object[key];
      if(typeof value === "object")
        result[key] = this.deepCopy(value);
      else result[key] = value;
    }
    return result;
  },

  equals: function(x, y) {
    if(typeof x === "object" && typeof y === "object") {
      if(Array.isArray(x) !== Array.isArray(y))
        return false;
      if(Object.keys(x).length !== Object.keys(y).length)
        return false;
      for(var key in x) {
        if(!this.equals(x[key], y[key]))
          return false;
      }
      return true;
    }
    return x === y;
  },

  lessThan: function(x, y) {
    if(typeof x === "object" && typeof y === "object") {
      if(Array.isArray(x) !== Array.isArray(y))
        return false;
      if(Object.keys(x).length !== Object.keys(y).length)
        return false;
      var keys = Object.keys(x).sort();
      for(var i = 0; i < keys.length; i++) {
        if(this.lessThan(x[keys[i]], y[keys[i]]))
          return true;
        if(this.greaterThan(x[keys[i]], y[keys[i]]))
          return false;
      }
      return false;
    }
    return x < y;
  },

  greaterThan: function(x, y) {
    if(typeof x === "object" && typeof y === "object") {
      if(Array.isArray(x) !== Array.isArray(y))
        return false;
      if(Object.keys(x).length !== Object.keys(y).length)
        return false;
      var keys = Object.keys(x).sort();
      for(var i = 0; i < keys.length; i++) {
        if(this.greaterThan(x[keys[i]], y[keys[i]]))
          return true;
        if(this.lessThan(x[keys[i]], y[keys[i]]))
          return false;
      }
      return false;
    }
    return x > y;
  },

  convertBool: function(bool) {
    return bool ? Prelude["true"] : Prelude["false"];
  }
};

Prelude["float"] = function(x) { return x; };

Prelude["round"] = Math.round;
Prelude["floor"] = Math.floor;
Prelude["ceil"] = Math.ceil;

Prelude["+"] = function(x) {
  return function(y) {
    return x + y;
  };
};

Prelude["-"] = function(x) {
  return function(y) {
    return x - y;
  };
};

Prelude["*"] = function(x) {
  return function(y) {
    return x * y;
  };
};

Prelude["negate"] = function(x) { return -x; };

Prelude["abs"] = Math.abs;
Prelude["signum"] = Math.sign;

Prelude["div"] = function(x) {
  return function(y) {
    return Math.floor(y / x);
  };
};

Prelude["quot"] = function(x) {
  return function(y) {
    var q = y / x;
    return q < 0 ? Math.ceil(q) : Math.floor(q);
  };
};

Prelude["mod"] = function(x) {
  return function(y) {
    return (y % x + x) % x;
  };
};

Prelude["rem"] = function(x) {
  return function(y) {
    return y % x;
  };
};

Prelude["/"] = function(x) {
  return function(y) {
    return x / y;
  };
};

Prelude["void"] = {};

Prelude["?"] = function(label) {
  return function(struct) {
    return struct[label][0];
  };
};

Prelude["delete"] = function(label) {
  return function(struct) {
    struct = Prelude.Internal.deepCopy(struct);
    if(struct[label].length === 0)
      delete struct[label];
    else struct[label].shift();
    return struct;
  };
};

Prelude[":="] = function(label) {
  return function(value) {
    return function(struct) {
      struct = Prelude.Internal.deepCopy(struct);
      if(label in struct)
        struct[label].unshift(value);
      else struct[label] = [value];
      return struct;
    };
  };
};

Prelude["^"] = function(label) {
  return function(value) {
    return [label, value];
  };
};

Prelude["embed"] = function(label) {
  return function(variant) {
    return variant;
  };
};

Prelude["match"] = function(label) {
  return function(f) {
    return function(g) {
      return function(variant) {
        return variant[0] === label ? f(variant[1]) : g(variant);
      };
    };
  };
};

Prelude["=="] = function(x) {
  return function(y) {
    return Prelude.Internal.convertBool(Prelude.Internal.equals(x, y));
  };
};

Prelude["<"] = function(x) {
  return function(y) {
    return Prelude.Internal.convertBool(Prelude.Internal.lessThan(x, y));
  };
};

Prelude[">"] = function(x) {
  return function(y) {
    return Prelude.Internal.convertBool(Prelude.Internal.greaterThan(x, y));
  };
};

Prelude["isFinite"] = isFinite;
Prelude["isNaN"] = isNaN;
List["makeList"] = function(x) { return x; }; List["getList"] = function(x) { return x; }; IO["map2"] = function(f) { return function(act) { return IO["apply"](IO["map"](f)(act)); }; }; IO["none"] = IO["pure"](Prelude["void"]); Main["main"] = Main["debug"](0); $Math["cube"] = function(x) { return Prelude["*"](Prelude["*"](x)(x))(x); }; $Math["distance"] = function(x1) { return function(y1) { return function(x2) { return function(y2) { return $Math["hypot"](Prelude["~"](x2)(x1))(Prelude["~"](y2)(y1)); }; }; }; }; $Math["logBase"] = function(x) { return function(y) { return Prelude["/"]($Math["log"](y))($Math["log"](x)); }; }; $Math["radians"] = function(x) { return x; }; $Math["square"] = function(x) { return Prelude["*"](x)(x); }; $Math["tau"] = Prelude["*"]($Math["pi"])(2); Prelude["#"] = function(x) { return function(f) { return f(x); }; }; Prelude["$"] = function(f) { return function(x) { return f(x); }; }; Prelude[";"] = function(f) { return function(x) { return f(x); }; }; Prelude["<<"] = function(f) { return function(g) { return function(x) { return f(g(x)); }; }; }; Prelude[">>"] = function(g) { return function(f) { return function(x) { return f(g(x)); }; }; }; Prelude["const"] = function(x) { return function(y) { return x; }; }; Prelude["else"] = function(x) { return function(y) { return x; }; }; Prelude["force"] = function(f) { return f(Prelude["void"]); }; Prelude["general"] = function(f) { return function(x) { return f(Prelude["void"]); }; }; Prelude["identity"] = function(x) { return x; }; Prelude["only"] = function(s) { return Prelude["^"](s)(Prelude["void"]); }; $String["foldLeft"] = function(f) { return function(x) { return $String["deconstruct"](x)(function(c) { return function(str) { return f($String["foldLeft"](f)(x)(str))(c); }; }); }; }; $String["foldRight"] = function(f) { return function(x) { return $String["deconstruct"](x)(function(c) { return function(str) { return f(c)($String["foldRight"](f)(x)(str)); }; }); }; }; $String["isEmpty"] = function(str) { return Prelude["=="](str)(""); }; $String["map"] = function(f) { return $String["deconstruct"]("")(function(c) { return function(str) { return $String["cons"](f(c))($String["map"](f)(str)); }; }); }; IO[";;"] = function(act1) { return function(act2) { return Prelude["#"](act1)(IO["bind"](function(_x) { return act2; })); }; }; IO["map3"] = function(f) { return function(act1) { return function(act2) { return IO["apply"](IO["map2"](f)(act1)(act2)); }; }; }; List[":"] = function(x) { return function(xs) { return Prelude["$"](List["makeList"])(Prelude["^"]("Cons")(Prelude[";"](Prelude[":="]("Head")(x))(Prelude[";"](Prelude[":="]("Tail")(xs))(Prelude["void"])))); }; }; List["deconstruct"] = function(x) { return function(f) { return function(xs) { return Prelude["#"](List["getList"](xs))(Prelude["$"](Prelude["match"]("Cons")(function(r) { return f(Prelude["?"]("Head")(r))(Prelude["?"]("Tail")(r)); }))(Prelude["else"](x))); }; }; }; List["empty"] = List["makeList"](Prelude["only"]("Empty")); $Math["degrees"] = function(x) { return Prelude["/"](Prelude["*"](x)($Math["tau"]))(360); }; $Math["turns"] = function(x) { return Prelude["*"](x)($Math["tau"]); }; Prelude["!="] = function(s) { return function(x) { return function(r) { return Prelude[";"](Prelude[":="](s)(x))(Prelude["delete"](s)(r)); }; }; }; Prelude["&"] = function(x) { return function(y) { return Prelude[";"](Prelude[":="]("First")(x))(Prelude[";"](Prelude[":="]("Second")(y))(Prelude["void"])); }; }; Prelude["false"] = Prelude["only"]("False"); Prelude["if"] = function(c) { return function(x) { return function(y) { return Prelude["#"](c)(Prelude["match"]("True")(x)(Prelude["general"](y))); }; }; }; Prelude["true"] = Prelude["only"]("True"); Result["default"] = function(x) { return Prelude["$"](Prelude["match"]("Just")(Prelude["identity"]))(Prelude["else"](x)); }; Result["nothing"] = Prelude["only"]("Error"); $String["mapIndexN"] = function(x) { return function(f) { return $String["deconstruct"]("")(function(c) { return function(str) { return Prelude["$"]($String["cons"](f(x)(c)))($String["mapIndexN"](Prelude["+"](x)(1))(f)(str)); }; }); }; }; Variant["bind"] = function(s) { return function(f) { return Prelude["$"](Prelude["match"](s)(f))(Prelude["embed"](s)); }; }; Variant["map"] = function(s) { return function(f) { return Prelude["$"](Prelude["match"](s)(function(x) { return Prelude["^"](s)(f(x)); }))(Prelude["embed"](s)); }; }; IO["map4"] = function(f) { return function(act1) { return function(act2) { return function(act3) { return IO["apply"](IO["map3"](f)(act1)(act2)(act3)); }; }; }; }; List["++"] = function(xs) { return function(ys) { return Prelude["#"](xs)(List["deconstruct"](ys)(function(x) { return function(xt) { return List[":"](x)(List["++"](xt)(ys)); }; })); }; }; List["findN"] = function(n) { return function(x) { return List["deconstruct"](List["empty"])(function(y) { return function(ys) { return (function() { var indexes = List["findN"](Prelude["+"](n)(1))(x)(ys); return Prelude["$"](Prelude["if"](Prelude["=="](x)(y))(function(_x) { return List[":"](n)(indexes); }))(Prelude["else"](indexes)); })(); }; }); }; }; List["foldLeft"] = function(f) { return function(n) { return List["deconstruct"](n)(function(x) { return function(xs) { return f(List["foldLeft"](f)(n)(xs))(x); }; }); }; }; List["foldRight"] = function(f) { return function(n) { return List["deconstruct"](n)(function(x) { return function(xs) { return f(x)(List["foldRight"](f)(n)(xs)); }; }); }; }; List["get"] = function(n) { return List["deconstruct"](Result["nothing"])(function(x) { return function(xs) { return Prelude["$"](Prelude["if"](Prelude["<"](n)(0))(function(_x) { return Result["nothing"]; }))(Prelude["$"](Prelude["else"])(Prelude["$"](Prelude["if"](Prelude["=="](n)(0))(function(_x) { return Prelude["^"]("Just")(x); }))(Prelude["$"](Prelude["else"])(List["get"](Prelude["~"](n)(1))(xs))))); }; }); }; List["head"] = List["deconstruct"](Result["nothing"])(function(x) { return function(xs) { return Prelude["^"]("Just")(x); }; }); List["isEmpty"] = List["deconstruct"](Prelude["false"])(function(x) { return function(xs) { return Prelude["true"]; }; }); List["length"] = List["deconstruct"](0)(function(x) { return function(xs) { return Prelude["+"](1)(List["length"](xs)); }; }); List["map"] = function(f) { return List["deconstruct"](List["empty"])(function(x) { return function(xs) { return List[":"](f(x))(List["map"](f)(xs)); }; }); }; List["mapIndexN"] = function(n) { return function(f) { return List["deconstruct"](List["empty"])(function(x) { return function(xs) { return List[":"](f(n)(x))(List["mapIndexN"](Prelude["+"](n)(1))(f)(xs)); }; }); }; }; List["single"] = function(x) { return List[":"](x)(List["empty"]); }; List["some"] = function(f) { return List["deconstruct"](Prelude["false"])(function(x) { return function(xs) { return Prelude["if"](f(x))(function(_x) { return Prelude["true"]; })(function(_x) { return List["some"](f)(xs); }); }; }); }; List["tail"] = List["deconstruct"](Result["nothing"])(function(x) { return function(xs) { return Prelude["^"]("Just")(xs); }; }); List["zipApply"] = function(fs) { return function(xs) { return Prelude["#"](fs)(List["deconstruct"](List["empty"])(function(f) { return function(ft) { return Prelude["#"](xs)(List["deconstruct"](List["empty"])(function(x) { return function(xt) { return List[":"](f(x))(List["zipApply"](ft)(xt)); }; })); }; })); }; }; Prelude["#="] = function(s) { return function(f) { return function(r) { return Prelude[";"](Prelude["!="](s)(f(Prelude["?"](s)(r))))(r); }; }; }; Prelude["and"] = function(x) { return function(y) { return Prelude["#"](x)(Prelude["match"]("True")(y)(function(_x) { return Prelude["false"]; })); }; }; Prelude["compare"] = function(x) { return function(y) { return Prelude["$"](Prelude["if"](Prelude["=="](x)(y))(function(_x) { return Prelude["only"]("Equal"); }))(Prelude["$"](Prelude["else"])(Prelude["$"](Prelude["if"](Prelude["<"](x)(y))(function(_x) { return Prelude["only"]("Less"); }))(Prelude["$"](Prelude["else"])(Prelude["only"]("Greater"))))); }; }; Prelude["max"] = function(x) { return function(y) { return Prelude["if"](Prelude[">"](x)(y))(function(_x) { return x; })(function(_x) { return y; }); }; }; Prelude["min"] = function(x) { return function(y) { return Prelude["if"](Prelude["<"](x)(y))(function(_x) { return x; })(function(_x) { return y; }); }; }; Prelude["not"] = Prelude["match"]("True")(function(_x) { return Prelude["false"]; })(function(_x) { return Prelude["true"]; }); Prelude["or"] = function(x) { return function(y) { return Prelude["#"](x)(Prelude["match"]("True")(function(_x) { return Prelude["true"]; })(Prelude["general"](y))); }; }; Prelude["trunc"] = function(x) { return Prelude["if"](Prelude["<"](x)(0))(function(_x) { return Prelude["ceil"](x); })(function(_x) { return Prelude["floor"](x); }); }; Result["bind"] = Variant["bind"]("Just"); Result["map"] = Variant["map"]("Just"); $String["count"] = function(f) { return (function() { var add = function(c) { return function(x) { return Prelude["if"](f(c))(function(_x) { return Prelude["+"](x)(1); })(function(_x) { return x; }); }; }; return $String["foldRight"](add)(0); })(); }; $String["filter"] = function(f) { return (function() { var add = function(c) { return function(str) { return Prelude["if"](f(c))(function(_x) { return $String["cons"](c)(str); })(function(_x) { return str; }); }; }; return $String["foldRight"](add)(""); })(); }; $String["get"] = function(x) { return $String["deconstruct"](Result["nothing"])(function(c) { return function(str) { return Prelude["$"](Prelude["if"](Prelude["<"](x)(0))(function(_x) { return Result["nothing"]; }))(Prelude["$"](Prelude["else"])(Prelude["$"](Prelude["if"](Prelude["=="](x)(0))(function(_x) { return Prelude["^"]("Just")(c); }))(Prelude["$"](Prelude["else"])($String["get"](Prelude["~"](x)(1))(str))))); }; }); }; $String["head"] = $String["deconstruct"](Result["nothing"])(function(c) { return function(str) { return Prelude["^"]("Just")(c); }; }); $String["mapIndex"] = $String["mapIndexN"](0); $String["some"] = function(f) { return $String["deconstruct"](Prelude["false"])(function(c) { return function(str) { return Prelude["if"](f(c))(function(_x) { return Prelude["true"]; })(function(_x) { return $String["some"](f)(str); }); }; }); }; $String["tail"] = $String["deconstruct"](Result["nothing"])(function(c) { return function(str) { return Prelude["^"]("Just")(str); }; }); Variant["apply"] = function(s) { return function(vf) { return function(vx) { return Prelude["#"](vf)(Prelude["$"](Prelude["match"](s)(function(f) { return Variant["map"](s)(f)(vx); }))(Prelude["embed"](s))); }; }; }; IO["sequence"] = List["foldRight"](IO["map2"](List[":"]))(IO["pure"](List["empty"])); List["all"] = function(f) { return List["deconstruct"](Prelude["true"])(function(x) { return function(xs) { return Prelude["if"](Prelude["$"](Prelude["not"])(f(x)))(function(_x) { return Prelude["false"]; })(function(_x) { return List["all"](f)(xs); }); }; }); }; List["apply"] = function(fs) { return function(xs) { return Prelude["#"](fs)(List["deconstruct"](List["empty"])(function(f) { return function(ft) { return List["++"](List["map"](f)(xs))(List["apply"](ft)(xs)); }; })); }; }; List["concat"] = List["foldRight"](List["++"])(List["empty"]); List["contains"] = function(x) { return List["some"](function(_x) { return Prelude["=="](_x)(x); }); }; List["count"] = function(f) { return (function() { var add = function(x) { return function(n) { return Prelude["if"](f(x))(function(_x) { return Prelude["+"](n)(1); })(function(_x) { return n; }); }; }; return List["foldRight"](add)(0); })(); }; List["filter"] = function(f) { return (function() { var add = function(x) { return function(xs) { return Prelude["if"](f(x))(function(_x) { return List[":"](x)(xs); })(function(_x) { return xs; }); }; }; return List["foldRight"](add)(List["empty"]); })(); }; List["find"] = List["findN"](0); List["mapIndex"] = List["mapIndexN"](0); List["mapResult"] = function(f) { return (function() { var add = function(x) { return function(xs) { return Prelude["#"](f(x))(Prelude["$"](Prelude["match"]("Just")(function(_x) { return List[":"](_x)(xs); }))(Prelude["else"](xs))); }; }; return List["foldRight"](add)(List["empty"]); })(); }; List["partition"] = function(f) { return (function() { var add = function(x) { return function(xs) { return Prelude["if"](f(x))(function(_x) { return Prelude[";"](Prelude["#="]("First")(List[":"](x)))(xs); })(function(_x) { return Prelude[";"](Prelude["#="]("Second")(List[":"](x)))(xs); }); }; }; return List["foldRight"](add)(Prelude["&"](List["empty"])(List["empty"])); })(); }; List["product"] = List["foldRight"](Prelude["*"])(1); List["reverse"] = List["deconstruct"](List["empty"])(function(x) { return function(xs) { return List["++"](List["reverse"](xs))(List["single"](x)); }; }); List["separate"] = (function() { var add = function(x) { return function(xs) { return Prelude[";"](Prelude["#="]("First")(List[":"](Prelude["?"]("First")(x))))(Prelude[";"](Prelude["#="]("Second")(List[":"](Prelude["?"]("Second")(x))))(xs)); }; }; return List["foldRight"](add)(Prelude["&"](List["empty"])(List["empty"])); })(); List["sum"] = List["foldRight"](Prelude["+"])(0); List["zip2"] = function(f) { return function(xs) { return List["zipApply"](List["map"](f)(xs)); }; }; Prelude["/="] = function(x) { return function(y) { return Prelude["not"](Prelude["=="](x)(y)); }; }; Prelude["<="] = function(x) { return function(y) { return Prelude["or"](Prelude["<"](x)(y))(function(_x) { return Prelude["=="](x)(y); }); }; }; Prelude[">="] = function(x) { return function(y) { return Prelude["or"](Prelude[">"](x)(y))(function(_x) { return Prelude["=="](x)(y); }); }; }; Prelude["isInfinite"] = function(x) { return Prelude["not"](Prelude["or"](Prelude["isFinite"](x))(function(_x) { return Prelude["isNaN"](x); })); }; Result["apply"] = Variant["apply"]("Just"); $String["all"] = function(f) { return $String["deconstruct"](Prelude["true"])(function(c) { return function(str) { return Prelude["if"](Prelude["$"](Prelude["not"])(f(c)))(function(_x) { return Prelude["false"]; })(function(_x) { return $String["all"](f)(str); }); }; }); }; $String["concat"] = List["foldRight"]($String["<>"])(""); $String["join"] = function(sep) { return (function() { var append = function(str1) { return function(str2) { return Prelude["if"]($String["isEmpty"](str2))(function(_x) { return str1; })(function(_x) { return $String["<>"]($String["<>"](str1)(sep))(str2); }); }; }; return List["foldRight"](append)(""); })(); }; $String["partition"] = function(f) { return (function() { var add = function(c) { return function(str) { return Prelude["if"](f(c))(function(_x) { return Prelude[";"](Prelude["#="]("First")($String["cons"](c)))(str); })(function(_x) { return Prelude[";"](Prelude["#="]("Second")($String["cons"](c)))(str); }); }; }; return $String["foldRight"](add)(Prelude["&"]("")("")); })(); }; Variant["map2"] = function(s) { return function(f) { return function(v) { return Variant["apply"](s)(Variant["map"](s)(f)(v)); }; }; }; IO["sequenceMap"] = function(f) { return function(xs) { return IO["sequence"](List["map"](f)(xs)); }; }; List["concatMap"] = function(f) { return function(xs) { return List["concat"](List["map"](f)(xs)); }; }; List["drop"] = function(n) { return function(xs) { return Prelude["if"](Prelude["<="](n)(0))(function(_x) { return xs; })(function(_x) { return List["deconstruct"](List["empty"])(function(x) { return function(xt) { return List["drop"](Prelude["~"](n)(1))(xt); }; })(xs); }); }; }; List["map2"] = function(f) { return function(xs) { return List["apply"](List["map"](f)(xs)); }; }; List["range"] = function(m) { return function(n) { return Prelude["if"](Prelude["<="](n)(m))(function(_x) { return List["empty"]; })(function(_x) { return List[":"](m)(List["range"](Prelude["+"](m)(1))(n)); }); }; }; List["repeat"] = function(n) { return function(x) { return Prelude["if"](Prelude["<="](n)(0))(function(_x) { return List["empty"]; })(function(_x) { return List[":"](x)(List["repeat"](Prelude["~"](n)(1))(x)); }); }; }; List["sortBy"] = function(f) { return List["deconstruct"](List["empty"])(function(x) { return function(xs) { return (function() { var half = List["partition"](function(y) { return Prelude["<"](f(y))(f(x)); })(xs); return List["++"](List["sortBy"](f)(Prelude["?"]("First")(half)))(List["++"](List["single"](x))(List["sortBy"](f)(Prelude["?"]("Second")(half)))); })(); }; }); }; List["sortWith"] = function(f) { return List["deconstruct"](List["empty"])(function(x) { return function(xs) { return (function() { var half = List["partition"](function(y) { return Prelude["=="](f(y)(x))(Prelude["only"]("Less")); })(xs); return List["++"](List["sortWith"](f)(Prelude["?"]("First")(half)))(List["++"](List["single"](x))(List["sortWith"](f)(Prelude["?"]("Second")(half)))); })(); }; }); }; List["take"] = function(n) { return function(xs) { return Prelude["if"](Prelude["<="](n)(0))(function(_x) { return List["empty"]; })(function(_x) { return List["deconstruct"](List["empty"])(function(x) { return function(xt) { return List[":"](x)(List["take"](Prelude["~"](n)(1))(xt)); }; })(xs); }); }; }; List["zip3"] = function(f) { return function(xs1) { return function(xs2) { return List["zipApply"](List["zip2"](f)(xs1)(xs2)); }; }; }; Prelude["constrain"] = function(x) { return function(y) { return function(z) { return Prelude["$"](Prelude["if"](Prelude["<="](z)(x))(function(_x) { return x; }))(Prelude["$"](Prelude["else"])(Prelude["$"](Prelude["if"](Prelude[">="](z)(y))(function(_x) { return y; }))(Prelude["$"](Prelude["else"])(z)))); }; }; }; Result["map2"] = Variant["map2"]("Just"); $String["concatMap"] = function(f) { return function(xs) { return $String["concat"](List["map"](f)(xs)); }; }; $String["dropLeft"] = function(x) { return function(str) { return Prelude["if"](Prelude["<="](x)(0))(function(_x) { return str; })(function(_x) { return $String["slice"](x)($String["length"](str))(str); }); }; }; $String["dropRight"] = function(x) { return function(str) { return Prelude["if"](Prelude["<="](x)(0))(function(_x) { return str; })(function(_x) { return $String["slice"](0)(Prelude["negate"](x))(str); }); }; }; $String["joinMap"] = function(sep) { return function(f) { return function(xs) { return $String["join"](sep)(List["map"](f)(xs)); }; }; }; $String["padLeft"] = function(x) { return function(str) { return Prelude["if"](Prelude[">="]($String["length"](str))(x))(function(_x) { return str; })(function(_x) { return $String["<>"](" ")($String["padLeft"](Prelude["~"](x)(1))(str)); }); }; }; $String["padRight"] = function(x) { return function(str) { return Prelude["if"](Prelude[">="]($String["length"](str))(x))(function(_x) { return str; })(function(_x) { return $String["<>"]($String["padRight"](Prelude["~"](x)(1))(str))(" "); }); }; }; $String["repeat"] = function(n) { return function(str) { return Prelude["if"](Prelude["<="](n)(0))(function(_x) { return ""; })(function(_x) { return $String["<>"](str)($String["repeat"](Prelude["~"](n)(1))(str)); }); }; }; $String["takeLeft"] = function(x) { return function(str) { return Prelude["if"](Prelude["<="](x)(0))(function(_x) { return ""; })(function(_x) { return $String["slice"](0)(x)(str); }); }; }; $String["takeRight"] = function(x) { return function(str) { return Prelude["if"](Prelude["<="](x)(0))(function(_x) { return ""; })(function(_x) { return $String["slice"](Prelude["negate"](x))($String["length"](str))(str); }); }; }; Variant["map3"] = function(s) { return function(f) { return function(v1) { return function(v2) { return Variant["apply"](s)(Variant["map2"](s)(f)(v1)(v2)); }; }; }; }; Variant["sequence"] = function(s) { return List["foldRight"](Variant["map2"](s)(List[":"]))(Prelude["^"](s)(List["empty"])); }; List["map3"] = function(f) { return function(xs1) { return function(xs2) { return List["apply"](List["map2"](f)(xs1)(xs2)); }; }; }; List["sort"] = List["sortBy"](Prelude["identity"]); List["zip4"] = function(f) { return function(xs1) { return function(xs2) { return function(xs3) { return List["zipApply"](List["zip3"](f)(xs1)(xs2)(xs3)); }; }; }; }; Result["map3"] = Variant["map3"]("Just"); Result["sequence"] = Variant["sequence"]("Just"); $String["find"] = function(sub) { return function(str) { return (function() { var matches = function(i) { return $String["startsWith"](sub)($String["dropLeft"](i)(str)); }; return Prelude["$"](List["filter"](matches))(List["range"](0)($String["length"](str))); })(); }; }; Variant["map4"] = function(s) { return function(f) { return function(v1) { return function(v2) { return function(v3) { return Variant["apply"](s)(Variant["map3"](s)(f)(v1)(v2)(v3)); }; }; }; }; }; Variant["sequenceMap"] = function(s) { return function(f) { return function(xs) { return Variant["sequence"](s)(List["map"](f)(xs)); }; }; }; List["map4"] = function(f) { return function(xs1) { return function(xs2) { return function(xs3) { return List["apply"](List["map3"](f)(xs1)(xs2)(xs3)); }; }; }; }; Result["map4"] = Variant["map4"]("Just"); Result["sequenceMap"] = Variant["sequenceMap"]("Just"); Main["main"]();