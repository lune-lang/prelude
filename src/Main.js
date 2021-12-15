Main["debug"] = function(x) {
  return function() {
    console.log(x);
    return Prelude["void"];
  }
}
