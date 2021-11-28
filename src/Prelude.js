Prelude.JS = {
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

  delay: function(f) {
    var value;
    var evaluated = false;
    return function() {
      if(!evaluated) {
        evaluated = true;
        value = f(Prelude["void"]);
      }
      return f; 
    }
  },

  trunc: function(x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  },

  delete: function(label, struct) {
    struct = this.deepCopy(struct);
    if(struct[label].length === 0)
      delete struct[label];
    else struct[label].shift();
    return struct;
  },

  record: function(label, value, struct) {
    struct = this.deepCopy(struct);
    if(label in struct)
      struct[label].unshift(value);
    else struct[label] = [value];
    return struct;
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
  },

  arrayToList: function(array) {
    if(array.length === 0)
      return List["empty"];
    var first = array.shift();
    return List[":"](first)(this.arrayToList(array));
  },

  listToArray: function(list) {
    return List["deconstruct"]([])(function(x) {
      return function(xs) {
        var array = this.listToArray(xs);
        array.unshift(x);
        return array;
      }
    })(list);
  },

  sliceString: function(x, y, str) {
    if(x < 0) x += str.length;
    if(y < 0) y += str.length;
    if(x >= y) return "";
    return str.substring(x, y);
  },

  stringToInt: function(str) {
    var x = parseInt(str, 10);
    if(isNaN(x)) return Result["nothing"];
    return Prelude["^"]("Just")(x);
  },

  stringToFloat: function(str) {
    var x = parseFloat(str, 10);
    if(isNaN(x)) return Result["nothing"];
    return Prelude["^"]("Just")(x);
  },

  deconstructString: function(x, f, str) {
    if(str.length === 0) return x;
    return f(str.charAt(0), str.substring(1));
  }
};
