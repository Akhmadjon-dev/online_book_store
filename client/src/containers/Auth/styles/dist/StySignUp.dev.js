"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("../../../styles/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    .container__img{\n        width: 50%;\n        height: 100vh;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: rgba(201, 172, 140, 0.93);\n        img{\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n        }\n    }\n    .form{\n        width: 50%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        background-color: ", ";\n        padding: 0 90px 0 90px;\n\n        .form__title{\n            font-weight: 900;\n            font-size: 36px;\n            line-height: 51px;\n            color: ", ";\n        }\n        .form__subtitle{\n            font-weight: normal;\n            font-size: 13px;\n            line-height: 15px;\n            color: ", ";\n            margin-top: 10px; \n            margin-bottom: 21px;\n        }\n        .form__group{\n            display: grid;\n            grid-template-columns: 1fr;\n            grid-row-gap: 15px;\n            & > *{\n                max-width: 430px;\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var container = _styledComponents["default"].div(_templateObject(), _colors["default"].white, _colors["default"].black, _colors["default"].black);

var _default = container;
exports["default"] = _default;