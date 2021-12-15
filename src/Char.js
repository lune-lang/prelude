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
