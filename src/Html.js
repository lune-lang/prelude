Html["setStyle"] = function(name) {
  return function(value) {
    return function(element) {
      element = Prelude.Internal.deepCopy(element);
      element.style[name] = value;
      return element;
    };
  };
};

Html["setAttribute"] = function(name) {
  return function(value) {
    return function(element) {
      element = Prelude.Internal.deepCopy(element);
      element.setAttribute(name, value);
      return element;
    };
  };
};

Html["setProperty"] = function(name) {
  return function(value) {
    return function(element) {
      element = Prelude.Internal.deepCopy(element);
      element[name] = value;
      return element;
    };
  };
};

Html["append"] = function(child) {
  return function(element) {
    element = Prelude.Internal.deepCopy(element);
    element.appendChild(child);
    return element;
  };
};

Html["prepend"] = function(child) {
  return function(element) {
    element = Prelude.Internal.deepCopy(element);
    element.prepend(child);
    return element;
  };
};

Html["simpleElement"] = document.createElement;

Html["text"] = document.createTextNode;

Html["query"] = function(selector) {
  return function() {
    return document.querySelector(selector);
  }
};

Html["queryAll"] = function(selector) {
  return function() {
    return String.Internal.arrayToList(
      Array.prototype.slice.call(document.querySelectorAll(selector))
    );
  }
};

Html["modify"] = function(selector) {
  return function(update) {
    return function() {
      var element = document.querySelector(selector);
      element.replaceWith(update(element));
    };
  };
};

Html["modifyAll"] = function(selector) {
  return function(update) {
    return function() {
      document.querySelectorAll(selector).forEach(element => {
        element.replaceWith(update(element));
      });
    };
  };
};

Html["remove"] = function(selector) {
  return function() {
    document.querySelector(selector).remove();
  };
};

Html["removeAll"] = function(selector) {
  return function() {
    document.querySelectorAll(selector).forEach(element => {
      element.remove();
    });
  };
};