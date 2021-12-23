Html["setStyle"] = function(name) {
  return function(value) {
    return function(element) {
      element = element.cloneNode(true);
      element.style[name] = value;
      return element;
    };
  };
};

Html["setAttribute"] = function(name) {
  return function(value) {
    return function(element) {
      element = element.cloneNode(true);
      element.setAttribute(name, value);
      return element;
    };
  };
};

Html["setProperty"] = function(name) {
  return function(value) {
    return function(element) {
      element = element.cloneNode(true);
      element[name] = value;
      return element;
    };
  };
};

Html["append"] = function(child) {
  return function(element) {
    element = element.cloneNode(true);
    element.appendChild(child);
    return element;
  };
};

Html["prepend"] = function(child) {
  return function(element) {
    element = element.cloneNode(true);
    element.prepend(child);
    return element;
  };
};

Html["simpleElement"] = function(tag) {
  return document.createElement(tag);
};

Html["text"] = function(text) {
  return document.createTextNode(text);
}

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
      return {};
    };
  };
};

Html["modifyAll"] = function(selector) {
  return function(update) {
    return function() {
      document.querySelectorAll(selector).forEach(element => {
        element.replaceWith(update(element));
      });
      return {};
    };
  };
};

Html["remove"] = function(selector) {
  return function() {
    document.querySelector(selector).remove();
    return {};
  };
};

Html["removeAll"] = function(selector) {
  return function() {
    document.querySelectorAll(selector).forEach(element => {
      element.remove();
    });
    return {};
  };
};

Html["listen"] = function(event) {
  return function(act) {
    return function(element) {
      element = element.cloneNode(true);
      element.addEventListener(event, act);
      return element;
    };
  };
};
