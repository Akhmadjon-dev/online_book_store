"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("../../styles/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n\n    .input__label{\n        font-size: 14px;\n        color: ", ";\n    }\n    .input{\n        margin-top: 5px;\n        width: 100%;\n        padding: 16px 29px;\n        border: 1px solid ", "; \n        border-radius: 10px;\n    }\n    .input__error{\n        color: ", ";\n        font-size: 12px;\n        margin-top: 5px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _colors["default"].black, _colors["default"].inputBorder, _colors["default"].red);

var _default = Container;
exports["default"] = _default;