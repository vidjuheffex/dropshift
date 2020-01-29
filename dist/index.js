'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Dropshift = function (_Component) {
  inherits(Dropshift, _Component);

  function Dropshift() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Dropshift);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Dropshift.__proto__ || Object.getPrototypeOf(Dropshift)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _this.handleDocumentClick = function (e) {
      if (e.target !== _this.menuRef) {
        _this.toggleMenu();
      }
    }, _this.handleFocus = function (e) {
      if (e.target instanceof Element && !_this.menuRef.contains(e.target)) {
        _this.toggleMenu();
      }
    }, _this.handleBlur = function () {
      setTimeout(function () {
        if (document.activeElement === document.body) {
          _this.toggleMenu();
        }
      }, 0);
    }, _this.toggleMenu = function () {
      _this.setState(function (state) {
        return { isOpen: !state.isOpen };
      }, function () {
        if (_this.state.isOpen) {
          document.addEventListener("click", _this.handleDocumentClick);
          window.addEventListener("focus", _this.handleFocus, true);
          window.addEventListener("blur", _this.handleBlur, false);
        } else {
          document.removeEventListener("click", _this.handleDocumentClick);
          window.removeEventListener("focus", _this.handleFocus, true);
          window.removeEventListener("blur", _this.handleBlur, false);
        }
      });
    }, _this.getToggleButtonProps = function () {
      return {
        onClick: function onClick() {
          _this.toggleMenu();
        }
      };
    }, _this.getMenuProps = function () {
      var _ref2;

      return _ref2 = {
        ref: function ref(elem) {
          return _this.menuRef = elem;
        }
      }, defineProperty(_ref2, "aria-expanded", _this.state.isOpen), defineProperty(_ref2, "role", "navigation"), _ref2;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Dropshift, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var getToggleButtonProps = this.getToggleButtonProps,
          getMenuProps = this.getMenuProps;


      return React__default.createElement(
        React.Fragment,
        null,
        children(_extends({}, this.state, {
          getToggleButtonProps: getToggleButtonProps,
          getMenuProps: getMenuProps
        }))
      );
    }
  }]);
  return Dropshift;
}(React.Component);

Dropshift.propTypes = {
  text: PropTypes.string
};

module.exports = Dropshift;
//# sourceMappingURL=index.js.map
