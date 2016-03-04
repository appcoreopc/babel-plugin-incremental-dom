var _hasOwn = Object.prototype.hasOwnProperty;

var _forOwn = function _forOwn(object, iterator) {
  for (var prop in object) {
    if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
  }
};

var _renderArbitrary = function _renderArbitrary(child) {
  var type = typeof child;

  if (type === "number" || type === "string" || child && child instanceof String) {
    text(child);
  } else if (type === "function" && child.__jsxDOMWrapper) {
    child();
  } else if (Array.isArray(child)) {
    child.forEach(_renderArbitrary);
  } else if (String(child) === "[object Object]") {
    _forOwn(child, _renderArbitrary);
  }
};

function render() {
  elementOpen("fin");

  _renderArbitrary(children);

  elementOpen("span");
  text("won't be wrapped");
  elementClose("span");
  elementOpen("div");

  _renderArbitrary(one);

  elementVoid("br");

  _renderArbitrary(two);

  elementVoid("br");

  _renderArbitrary(two);

  elementClose("div");
  return elementClose("fin");
}