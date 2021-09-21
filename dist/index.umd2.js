(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@fluentui/react"), require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@fluentui/react", "prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["MultiTextField"] = factory(require("@fluentui/react"), require("prop-types"), require("react"));
	else
		root["MultiTextField"] = factory(root["FluentUIReact"], root["PropTypes"], root["React"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__20__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__18__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MultiTextFieldDefaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);
/* harmony import */ var _MultiTextFieldInputItem_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







function _getMinItemCount(props) {
  return props.hasOwnProperty('minItemCount') ? Math.max(props.minItemCount, 1) : _MultiTextFieldDefaults_js__WEBPACK_IMPORTED_MODULE_10__["default"].minItemCount;
}

function _getMaxItemCount(props) {
  return props.hasOwnProperty('maxItemCount') ? Math.max(props.maxItemCount, _getMinItemCount(props)) : _MultiTextFieldDefaults_js__WEBPACK_IMPORTED_MODULE_10__["default"].maxItemCount;
}

function _getInitialItemCount(props) {
  return props.hasOwnProperty('initialItemCount') ? Math.max(Math.min(props.initialItemCount, _getMaxItemCount(props)), _getMinItemCount(props)) : _MultiTextFieldDefaults_js__WEBPACK_IMPORTED_MODULE_10__["default"].initialItemCount;
}

function _getDefaultValueForInputeItemAtIndex2(props, itemIndex) {
  return props.onGetDefaultInputItemValue != null ? props.onGetDefaultInputItemValue(itemIndex) : '';
}

function _normalizeValues(props) {
  var normalizedValues = [];
  var rawValues = props.values || [];

  var valueCount = _determineNormalizedValueCount(rawValues, props);

  for (var iVal = 0; iVal < valueCount; iVal++) {
    if (rawValues[iVal] != undefined) {
      normalizedValues.push(rawValues[iVal]);
    } else {
      normalizedValues.push(_getDefaultValueForInputeItemAtIndex2(props, iVal));
    }
  }

  return normalizedValues;
}

function _determineNormalizedValueCount(rawValues, props) {
  return rawValues.length > 0 ? Math.max(rawValues.length, _getMinItemCount(props)) : _getInitialItemCount(props);
}

function _normalizeProps(props) {
  var normalizedProps = {
    minItemCount: _getMinItemCount(props),
    maxItemCount: _getMaxItemCount(props),
    initialItemCount: _getInitialItemCount(props),
    values: _normalizeValues(props)
  };
  return Object.assign({}, props, normalizedProps);
}

function _withNormalizedProps(MultiTextFieldComponent) {
  return /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_class, _React$Component);

    var _super = _createSuper(_class);

    function _class(props) {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _class);

      return _super.call(this, props);
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, [{
      key: "render",
      value: function render() {
        var props = _normalizeProps(this.props);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(MultiTextFieldComponent, props);
      }
    }]);

    return _class;
  }((react__WEBPACK_IMPORTED_MODULE_7___default().Component));
}

var MultiTextField = /*#__PURE__*/function (_React$Component2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MultiTextField, _React$Component2);

  var _super2 = _createSuper(MultiTextField);

  function MultiTextField(props) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MultiTextField);

    return _super2.call(this, props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MultiTextField, [{
    key: "_getDefaultValueForInputeItemAtIndex",
    value: function _getDefaultValueForInputeItemAtIndex(itemIndex) {
      return _getDefaultValueForInputeItemAtIndex2(this.props, itemIndex);
    }
  }, {
    key: "_getMinItemCount",
    value: function _getMinItemCount() {
      return this.props.minItemCount;
    }
  }, {
    key: "_getMaxItemCount",
    value: function _getMaxItemCount() {
      return this.props.maxItemCount;
    }
  }, {
    key: "_getInitialItemCount",
    value: function _getInitialItemCount() {
      return this.props.initialItemCount;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: this._getContainerCssClassName(),
        style: this._getContainerStyle()
      }, this._renderLabel(), this._renderInputList());
    }
  }, {
    key: "_getContainerCssClassName",
    value: function _getContainerCssClassName() {
      var containerCssClass = ['lvd-multitextfied-input-container'];

      var className = this._getClassName();

      if (!!className) {
        containerCssClass.push(className);
      }

      return containerCssClass.join(' ');
    }
  }, {
    key: "_getClassName",
    value: function _getClassName() {
      return this.props.className || null;
    }
  }, {
    key: "_getContainerStyle",
    value: function _getContainerStyle() {
      return this.props.style || {};
    }
  }, {
    key: "_renderLabel",
    value: function _renderLabel() {
      var label = this._getLabel();

      return !!label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.Label, null, label) : null;
    }
  }, {
    key: "_getLabel",
    value: function _getLabel() {
      return this.props.label || '';
    }
  }, {
    key: "_getInputItemErrorMessage",
    value: function _getInputItemErrorMessage(itemValue, itemIndex) {
      return this.props.onGetInputItemErrorMessage != null ? this.props.onGetInputItemErrorMessage(itemValue, itemIndex) : undefined;
    }
  }, {
    key: "_handleInputItemFocused",
    value: function _handleInputItemFocused(itemEvent, itemIndex) {
      if (this.props.onInputItemFocus != null) {
        this.props.onInputItemFocus(itemIndex);
      }
    }
  }, {
    key: "_handleInputItemBlured",
    value: function _handleInputItemBlured(itemEvent, itemIndex) {
      if (this.props.onInputItemBlur != null) {
        this.props.onInputItemBlur(itemIndex);
      }
    }
  }, {
    key: "_handleInputItemChanged",
    value: function _handleInputItemChanged(itemEvent, itemIndex) {
      var newItemValue = itemEvent.target.value;

      var newValues = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props.values);

      newValues[itemIndex] = newItemValue;

      this._raiseValueChanged(newValues);
    }
  }, {
    key: "_raiseValueChanged",
    value: function _raiseValueChanged(values) {
      if (this.props.onChange != null) {
        this.props.onChange(values);
      }
    }
  }, {
    key: "_handleAddInputItemRequested",
    value: function _handleAddInputItemRequested(itemEvent, itemIndex) {
      itemEvent.preventDefault();

      var newValues = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props.values);

      var newItemValue = this._getDefaultValueForInputeItemAtIndex(itemIndex + 1);

      newValues.splice(itemIndex + 1, 0, newItemValue);

      this._raiseInputItemAdded(newItemValue, itemIndex);

      this._raiseValueChanged(newValues);
    }
  }, {
    key: "_raiseInputItemAdded",
    value: function _raiseInputItemAdded(itemValue, itemIndex) {
      if (this.props.onInputItemAdded != null) {
        this.props.onInputItemAdded(itemValue, itemIndex);
      }
    }
  }, {
    key: "_handleRemoveItemRequested",
    value: function _handleRemoveItemRequested(itemEvent, itemIndex) {
      itemEvent.preventDefault();

      var newValues = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props.values);

      var removedValues = newValues.splice(itemIndex, 1);

      this._raiseInputItemRemoved(removedValues[0], itemIndex);

      this._raiseValueChanged(newValues);
    }
  }, {
    key: "_raiseInputItemRemoved",
    value: function _raiseInputItemRemoved(itemValue, itemIndex) {
      if (this.props.onInputItemRemoved != null) {
        this.props.onInputItemRemoved(itemValue, itemIndex);
      }
    }
  }, {
    key: "_renderInputList",
    value: function _renderInputList() {
      var _this = this;

      var values = this._getValues();

      console.log(values);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), null, values.map(function (itemValue, itemIndex) {
        return _this._renderInputItem(itemValue, itemIndex);
      }));
    }
  }, {
    key: "_getValues",
    value: function _getValues() {
      return this.props.values;
    }
  }, {
    key: "_renderInputItem",
    value: function _renderInputItem(itemValue, itemIndex) {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_MultiTextFieldInputItem_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this._getTextFieldItemProps(itemValue, itemIndex), {
        key: itemIndex,
        onChange: function onChange(itemEvent) {
          return _this2._handleInputItemChanged(itemEvent, itemIndex);
        },
        onGetErrorMessage: function onGetErrorMessage(itemValue) {
          return _this2._getInputItemErrorMessage(itemValue, itemIndex);
        },
        onAddRequested: function onAddRequested(itemEvent) {
          return _this2._handleAddInputItemRequested(itemEvent, itemIndex);
        },
        onRemoveRequested: function onRemoveRequested(itemEvent) {
          return _this2._handleRemoveItemRequested(itemEvent, itemIndex);
        },
        onFocus: function onFocus(itemEvent) {
          return _this2._handleInputItemFocused(itemEvent, itemIndex);
        },
        onBlur: function onBlur(itemEvent) {
          return _this2._handleInputItemBlured(itemEvent, itemIndex);
        }
      }));
    }
  }, {
    key: "_getTextFieldItemProps",
    value: function _getTextFieldItemProps(itemValue, itemIndex) {
      return {
        inputProps: this._getMergedInputProps(itemValue, itemIndex),
        addInputItemActionProps: this._getMergedAddInputItemActionProps(itemValue, itemIndex),
        removeInputItemActionProps: this._getMergedRemoveInputItemActionProps(itemValue, itemIndex)
      };
    }
  }, {
    key: "_getMergedInputProps",
    value: function _getMergedInputProps(itemValue, itemIndex) {
      var inputProps = this._getBasicInputProps();

      var customInputProps = this._getCustomInputProps(itemValue, itemIndex);

      if (customInputProps != null) {
        inputProps = Object.assign({}, inputProps, customInputProps);
      }

      return Object.assign({}, inputProps, {
        value: itemValue
      });
    }
  }, {
    key: "_getBasicInputProps",
    value: function _getBasicInputProps() {
      return this.props.inputProps || {};
    }
  }, {
    key: "_getCustomInputProps",
    value: function _getCustomInputProps(itemValue, itemIndex) {
      return this.props.onGetInputProps != null ? this.props.onGetInputProps(itemValue, itemIndex) : null;
    }
  }, {
    key: "_getMergedAddInputItemActionProps",
    value: function _getMergedAddInputItemActionProps(itemValue, itemIndex) {
      var allowAdd = this._canAddAnotherInputItem(itemIndex);

      var addInputItemActionProps = this._getBasicAddInputItemActionProps();

      if (addInputItemActionProps.hasOwnProperty('allowAdd')) {
        allowAdd = allowAdd && !!addInputItemActionProps.allowAdd;
      }

      return Object.assign({}, addInputItemActionProps, {
        allowAdd: allowAdd
      });
    }
  }, {
    key: "_getBasicAddInputItemActionProps",
    value: function _getBasicAddInputItemActionProps() {
      return this.props.addInputItemActionProps || {};
    }
  }, {
    key: "_canAddAnotherInputItem",
    value: function _canAddAnotherInputItem(itemIndex) {
      return this._getValueCount() < this._getMaxItemCount();
    }
  }, {
    key: "_getValueCount",
    value: function _getValueCount() {
      return this._getValues().length;
    }
  }, {
    key: "_getMergedRemoveInputItemActionProps",
    value: function _getMergedRemoveInputItemActionProps(itemValue, itemIndex) {
      var allowRemove = this._canRemoveAnotherInputItem(itemIndex);

      var removeInputItemActionProps = this._getBasicRemoveInputItemActionprops();

      if (removeInputItemActionProps.hasOwnProperty('allowRemove')) {
        allowRemove = allowRemove && !!removeInputItemActionProps.allowRemove;
      }

      return Object.assign({}, removeInputItemActionProps, {
        allowRemove: allowRemove
      });
    }
  }, {
    key: "_getBasicRemoveInputItemActionprops",
    value: function _getBasicRemoveInputItemActionprops() {
      return this.props.removeInputItemActionProps || {};
    }
  }, {
    key: "_canRemoveAnotherInputItem",
    value: function _canRemoveAnotherInputItem(itemIndex) {
      return this._getValueCount() > this._getMinItemCount();
    }
  }]);

  return MultiTextField;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));

MultiTextField.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  addInputItemActionProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  removeInputItemActionProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  minItemCount: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
  initialItemCount: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
  maxItemCount: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number),
  onGetInputProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onGetDefaultInputItemValue: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onGetInputItemErrorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onInputItemAdded: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onInputItemRemoved: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onInputItemFocus: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onInputItemBlur: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_withNormalizedProps(MultiTextField));

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 12 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),
/* 13 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 14 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),
/* 15 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 16 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__20__;

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var MultiTextFieldDefaults = {
  minItemCount: 1,
  maxItemCount: Number.MAX_SAFE_INTEGER,
  initialItemCount: 1,
  label: '',
  inputItem: {
    label: null,
    placeholder: 'Please enter a value',
    description: null,
    messages: {
      empty: 'You must fill in a value'
    }
  },
  addInputItemAction: {
    label: null,
    iconName: 'Add'
  },
  removeInputItemAction: {
    label: null,
    iconName: 'RemoveFilter'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiTextFieldDefaults);

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MultiTextFieldInputItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MultiTextFieldDefaults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var MultiTextFieldInputItem = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MultiTextFieldInputItem, _React$Component);

  var _super = _createSuper(MultiTextFieldInputItem);

  function MultiTextFieldInputItem(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MultiTextFieldInputItem);

    _this = _super.call(this, props);
    _this._handleChanged = _this._handleChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this._handleFocused = _this._handleFocused.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this._handleBlured = _this._handleBlured.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this._getInputErrorMessage = _this._getInputErrorMessage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this._handleAddActionButtonClicked = _this._handleAddActionButtonClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this._handleRemoveActionButtonClicked = _this._handleRemoveActionButtonClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MultiTextFieldInputItem, [{
    key: "_handleChanged",
    value: function _handleChanged(event) {
      if (this.props.onChange != null) {
        this.props.onChange(event);
      }
    }
  }, {
    key: "_handleFocused",
    value: function _handleFocused(event) {
      if (this.props.onFocus != null) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: "_handleBlured",
    value: function _handleBlured(event) {
      if (this.props.onBlur != null) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: "_getInputErrorMessage",
    value: function _getInputErrorMessage(value) {
      var errorMessage = null;

      if (this.props.onGetErrorMessage != null) {
        errorMessage = this.props.onGetErrorMessage(value);
      }

      if (errorMessage === undefined && !value) {
        errorMessage = this._isRequired() ? _MultiTextFieldDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].inputItem.messages.empty : '';
      }

      return errorMessage;
    }
  }, {
    key: "_isRequired",
    value: function _isRequired() {
      var inputProps = this._getInputProps();

      return inputProps.required;
    }
  }, {
    key: "_handleAddActionButtonClicked",
    value: function _handleAddActionButtonClicked(event) {
      if (this.props.onAddRequested != null) {
        this.props.onAddRequested(event);
      }
    }
  }, {
    key: "_handleRemoveActionButtonClicked",
    value: function _handleRemoveActionButtonClicked(event) {
      if (this.props.onRemoveRequested != null) {
        this.props.onRemoveRequested(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: "lvd-multitextfield-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: "lvd-multitextfield-input-container"
      }, this._renderInputField()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: "lvd-multitextfield-ctrl-container"
      }, this._renderControls()));
    }
  }, {
    key: "_renderInputField",
    value: function _renderInputField() {
      var inputProps = this._getInputProps();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.TextField, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputProps, {
        className: this._getInputClassName(),
        onGetErrorMessage: this._getInputErrorMessage,
        onChange: this._handleChanged,
        onFocus: this._handleFocused,
        onBlur: this._handleBlured
      }));
    }
  }, {
    key: "_getInputClassName",
    value: function _getInputClassName() {
      var inputClassName = ['lvd-multitextfield-input'];
      var inputProps = this.props.inputProps || {};

      if (!!inputProps.className) {
        inputClassName.push(inputProps.className);
      }

      return inputClassName.join(' ');
    }
  }, {
    key: "_getInputProps",
    value: function _getInputProps() {
      var inputProps = this.props.inputProps || {};
      return {
        style: inputProps.style || {},
        label: inputProps.label || _MultiTextFieldDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].inputItem.label,
        placeholder: inputProps.placeholder || _MultiTextFieldDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].inputItem.placeholder,
        description: inputProps.description || _MultiTextFieldDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].inputItem.description,
        required: !!inputProps.required,
        underlined: !!inputProps.underlined,
        readOnly: !!inputProps.readOnly,
        disabled: !!inputProps.disabled,
        borderless: !!inputProps.borderless,
        value: inputProps.value || ''
      };
    }
  }, {
    key: "_renderControls",
    value: function _renderControls() {
      var addActionProps = this._getAddActionProps();

      var removeActionProps = this._getRemoveActionProps();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), null, addActionProps.allowAdd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.ActionButton, {
        iconProps: addActionProps.iconProps,
        text: addActionProps.label,
        onClick: this._handleAddActionButtonClicked
      }), removeActionProps.allowRemove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_9__.ActionButton, {
        iconProps: removeActionProps.iconProps,
        text: removeActionProps.label,
        onClick: this._handleRemoveActionButtonClicked
      }));
    }
  }, {
    key: "_getAddActionClassName",
    value: function _getAddActionClassName() {
      var addActionClassName = ['lvd-multitextfield-action-add'];
      var addInputItemActionProps = this.props.addInputItemActionProps || {};

      if (!!addInputItemActionProps.className) {
        addActionClassName.push(addInputItemActionProps.className);
      }

      return addActionClassName.join(' ');
    }
  }, {
    key: "_getAddActionProps",
    value: function _getAddActionProps() {
      var addInputItemActionProps = this.props.addInputItemActionProps || {};
      return {
        allowAdd: addInputItemActionProps.hasOwnProperty('allowAdd') ? !!addInputItemActionProps.allowAdd : true,
        iconProps: addInputItemActionProps.iconProps || {
          iconName: _MultiTextFieldDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].addInputItemAction.iconName
        },
        label: addInputItemActionProps.label || _MultiTextFieldDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].addInputItemAction.label
      };
    }
  }, {
    key: "_getRemoveActionClassName",
    value: function _getRemoveActionClassName() {
      var removeActionClassName = ['lvd-multitextfield-action-remove'];
      var removeInputItemActionProps = this.props.removeInputItemActionProps || {};

      if (!!removeInputItemActionProps.className) {
        removeActionClassName.push(removeInputItemActionProps.className);
      }

      return removeActionClassName.join(' ');
    }
  }, {
    key: "_getRemoveActionProps",
    value: function _getRemoveActionProps() {
      var removeInputItemActionProps = this.props.removeInputItemActionProps || {};
      return {
        allowRemove: removeInputItemActionProps.hasOwnProperty('allowRemove') ? !!removeInputItemActionProps.allowRemove : true,
        iconProps: removeInputItemActionProps.iconProps || {
          iconName: _MultiTextFieldDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].removeInputItemAction.iconName
        },
        label: removeInputItemActionProps.label || _MultiTextFieldDefaults__WEBPACK_IMPORTED_MODULE_10__["default"].removeInputItemAction.label
      };
    }
  }]);

  return MultiTextFieldInputItem;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));


MultiTextFieldInputItem.propTypes = {
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  addInputItemActionProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  removeInputItemActionProps: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  onGetErrorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onAddRequested: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  onRemoveRequested: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiTextField": () => (/* reexport safe */ _MultiTextField_jsx__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _MultiTextField_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});