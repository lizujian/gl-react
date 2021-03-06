"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");
var invariant = require("invariant");

module.exports = function createComponent(renderGLNode, staticFields) {

  invariant(typeof renderGLNode === "function", "GL.createComponent(props => glnode) must have a function in parameter");

  var GLComponent = function (_React$Component) {
    _inherits(GLComponent, _React$Component);

    function GLComponent() {
      _classCallCheck(this, GLComponent);

      return _possibleConstructorReturn(this, (GLComponent.__proto__ || Object.getPrototypeOf(GLComponent)).apply(this, arguments));
    }

    _createClass(GLComponent, [{
      key: "render",
      value: function render() {
        var glNode = renderGLNode(_extends({}, this.context, this.props));

        invariant(glNode && glNode.type && (glNode.type.isGLNode || glNode.type.isGLComponent), "%s: The GL.createComponent function parameter must return a GL.Node or " + "another GL Component", GLComponent.displayName);

        return glNode;
      }
    }]);

    return GLComponent;
  }(React.Component);

  GLComponent.isGLComponent = true;

  GLComponent.displayName = renderGLNode.name || "";

  if (staticFields) {
    invariant((typeof staticFields === "undefined" ? "undefined" : _typeof(staticFields)) === "object", "second parameter of createComponent must be an object of static fields " + "to set in the React component. (example: propTypes, displayName)");

    for (var key in staticFields) {
      GLComponent[key] = staticFields[key];
    }
  }

  return GLComponent;
};
//# sourceMappingURL=createComponent.js.map