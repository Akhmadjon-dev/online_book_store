"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("../../styles/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: ", ";\n    border-radius: ", ";\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 36px;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n    color: ", ";\n    border: none;\n    background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

;

var Container = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.height ? props.height : '46px';
}, function (props) {
  return props.radius ? props.radius : '99px';
}, _colors["default"].white, function (props) {
  return props.color ? props.color : _colors["default"].primary;
});

var _default = Container;
exports["default"] = _default;