(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["additional-views"],{

/***/ "./node_modules/ramda/src/prop.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/src/prop.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(/*! ./internal/_curry2 */ "./node_modules/ramda/src/internal/_curry2.js");

var path = /*#__PURE__*/__webpack_require__(/*! ./path */ "./node_modules/ramda/src/path.js");

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */

var prop = /*#__PURE__*/_curry2(function prop(p, obj) {
  return path([p], obj);
});
module.exports = prop;

/***/ }),

/***/ "./src/generic/scripts/app/components/AllowedLengthsController.js":
/*!************************************************************************!*\
  !*** ./src/generic/scripts/app/components/AllowedLengthsController.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda_src_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda/src/update */ "./node_modules/ramda/src/update.js");
/* harmony import */ var ramda_src_update__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda_src_update__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_NotePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/NotePanel */ "./src/generic/scripts/app/components/NotePanel.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();









(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var AllowedLengthsController =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(AllowedLengthsController, _Component);

  function AllowedLengthsController() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AllowedLengthsController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(AllowedLengthsController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.shouldComponentUpdate = function (nextProps) {
      return !deep_equal__WEBPACK_IMPORTED_MODULE_8___default()(nextProps.allowedLengths, _this.props.allowedLengths);
    };

    _this.onLengthUpdate = function (newLength) {
      var _this$props = _this.props,
          allowedLengths = _this$props.allowedLengths,
          onUpdate = _this$props.onUpdate;
      var newLengthIndex = allowedLengths.indexOf(allowedLengths.find(function (l) {
        return newLength.id === l.id;
      }));

      var newAllowedLengths = ramda_src_update__WEBPACK_IMPORTED_MODULE_1___default()(newLengthIndex, newLength, allowedLengths);

      onUpdate(newAllowedLengths);
    };

    _this.render = function () {
      var allowedLengths = _this.props.allowedLengths;
      var totalAmount = allowedLengths.reduce(function (acc, next) {
        return acc + next.amount;
      }, 0);
      var notePanelProps = {
        onUpdate: _this.onLengthUpdate,
        totalAmount: totalAmount
      };
      var lengths = allowedLengths.map(function (length, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "grid__item one-fifth alpha--one-third",
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "u-mb1",
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_NotePanel__WEBPACK_IMPORTED_MODULE_9__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          length: length
        }, notePanelProps))));
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "grid grid--center"
      }, lengths);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AllowedLengthsController, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AllowedLengthsController;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var _default = AllowedLengthsController;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AllowedLengthsController, "AllowedLengthsController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\AllowedLengthsController.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\AllowedLengthsController.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AllowedLengthsController, "AllowedLengthsController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\AllowedLengthsController.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\AllowedLengthsController.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\AllowedLengthsController.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/components/FadeOutDurationController.js":
/*!*************************************************************************!*\
  !*** ./src/generic/scripts/app/components/FadeOutDurationController.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_InputBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/InputBox */ "./src/generic/scripts/app/components/InputBox.js");
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/tools */ "./src/generic/scripts/app/utils/tools.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





var FadeOutDurationController =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FadeOutDurationController, _Component);

  function FadeOutDurationController() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FadeOutDurationController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FadeOutDurationController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.shouldComponentUpdate = function (nextProps) {
      return nextProps.fadeOutDuration !== _this.props.fadeOutDuration;
    };

    _this.onChange = function (event) {
      var value = Object(utils_tools__WEBPACK_IMPORTED_MODULE_7__["roundToXPlaces"])(3, parseFloat(event.target.value)) / 1000;

      _this.props.onUpdate(value);
    };

    _this.render = function () {
      var props = {
        label: 'Crossfade (ms)',
        labelTitle: 'Samples\' crossfade time in milliseconds',
        id: "fadeOutDuration-".concat(_this.props.instrumentID),
        type: 'number',
        defaultValue: Math.round(_this.props.fadeOutDuration * 1000),
        onChange: _this.onChange,
        step: 25,
        minVal: 0,
        maxVal: 2000,
        className: 'input-container__input input-container__input--bare input-container__input--large input-container__input--short@above-alpha',
        labelClassName: 'input-container__label'
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_InputBox__WEBPACK_IMPORTED_MODULE_6__["default"], props);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FadeOutDurationController, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return FadeOutDurationController;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = FadeOutDurationController;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FadeOutDurationController, "FadeOutDurationController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\FadeOutDurationController.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\FadeOutDurationController.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FadeOutDurationController, "FadeOutDurationController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\FadeOutDurationController.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\FadeOutDurationController.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\FadeOutDurationController.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/components/HitChanceController.js":
/*!*******************************************************************!*\
  !*** ./src/generic/scripts/app/components/HitChanceController.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_InputBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/InputBox */ "./src/generic/scripts/app/components/InputBox.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var HitChanceController =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(HitChanceController, _Component);

  function HitChanceController() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HitChanceController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HitChanceController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.shouldComponentUpdate = function (nextProps) {
      return nextProps.hitChance !== _this.props.hitChance;
    };

    _this.onChange = function (event) {
      var value = Math.round(parseFloat(event.target.value)) / 100;
      if (value) _this.props.onUpdate(value);
    };

    _this.render = function () {
      var props = {
        label: 'Hit Chance (%)',
        id: 'hitChance',
        type: 'number',
        defaultValue: Math.round(_this.props.hitChance * 100),
        onChange: _this.onChange,
        minVal: 0,
        maxVal: 100,
        step: 5,
        className: 'input-container__input input-container__input--bare input-container__input--large input-container__input--short@above-alpha',
        labelClassName: 'input-container__label'
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_InputBox__WEBPACK_IMPORTED_MODULE_6__["default"], props);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HitChanceController, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return HitChanceController;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = HitChanceController;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HitChanceController, "HitChanceController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\HitChanceController.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\HitChanceController.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HitChanceController, "HitChanceController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\HitChanceController.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\HitChanceController.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\HitChanceController.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/components/InstrumentList.js":
/*!**************************************************************!*\
  !*** ./src/generic/scripts/app/components/InstrumentList.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InstrumentList; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda/src/map */ "./node_modules/ramda/src/map.js");
/* harmony import */ var ramda_src_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ramda_src_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ramda_src_prop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda/src/prop */ "./node_modules/ramda/src/prop.js");
/* harmony import */ var ramda_src_prop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ramda_src_prop__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ramda_src_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ramda/src/compose */ "./node_modules/ramda/src/compose.js");
/* harmony import */ var ramda_src_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ramda_src_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ramda_src_curry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ramda/src/curry */ "./node_modules/ramda/src/curry.js");
/* harmony import */ var ramda_src_curry__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ramda_src_curry__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_Expandable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Expandable */ "./src/generic/scripts/app/components/Expandable.js");
/* harmony import */ var components_FadeOutDurationController__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/FadeOutDurationController */ "./src/generic/scripts/app/components/FadeOutDurationController.js");
/* harmony import */ var components_PitchController__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/PitchController */ "./src/generic/scripts/app/components/PitchController.js");
/* harmony import */ var components_RepeatingHitsController__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/RepeatingHitsController */ "./src/generic/scripts/app/components/RepeatingHitsController.js");
/* harmony import */ var components_SequenceController__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/SequenceController */ "./src/generic/scripts/app/components/SequenceController.js");
/* harmony import */ var components_SVG__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/SVG */ "./src/generic/scripts/app/components/SVG.js");
/* harmony import */ var components_Tabgroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/Tabgroup */ "./src/generic/scripts/app/components/Tabgroup.js");
/* harmony import */ var components_VolumeController__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/VolumeController */ "./src/generic/scripts/app/components/VolumeController.js");
/* harmony import */ var modules_getPercentage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! modules/getPercentage */ "./src/generic/scripts/app/modules/getPercentage.js");
/* harmony import */ var utils_audio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! utils/audio */ "./src/generic/scripts/app/utils/audio.js");
/* harmony import */ var utils_audioContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! utils/audioContext */ "./src/generic/scripts/app/utils/audioContext.js");
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! utils/tools */ "./src/generic/scripts/app/utils/tools.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();














(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();













 //    getCategoriesFromSounds :: [cat] -> sound -> [cat]

var getCategoriesFromSounds = function getCategoriesFromSounds(cats, sound) {
  if (!cats.includes(sound.category)) {
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default()(cats), [sound.category]);
  }

  return cats;
};

var PercentageViewer = function PercentageViewer(_ref) {
  var amount = _ref.amount,
      onAmountChange = _ref.onAmountChange,
      totalAmount = _ref.totalAmount;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "u-flex-row u-flex-center group-spacing-x-med"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
    className: "button-primary button-primary--tiny button-primary--rounded button-primary--dark u-txt-small",
    onClick: function onClick() {
      return onAmountChange(amount - 1 >= 0 ? amount - 1 : 0);
    }
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow arrow--up"
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "group-padding-y-med group-padding-x-med u-w-3 u-tac u-txt-small"
  }, "".concat(Object(modules_getPercentage__WEBPACK_IMPORTED_MODULE_21__["default"])(totalAmount, amount), "%")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("button", {
    className: "button-primary button-primary--tiny button-primary--rounded button-primary--dark u-txt-small",
    onClick: function onClick() {
      return onAmountChange(amount + 1);
    }
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "arrow arrow--down"
  })));
};

var SoundRow = function SoundRow(_ref2) {
  var instrument = _ref2.instrument,
      isPlaying = _ref2.isPlaying,
      onSoundAmountChange = _ref2.onSoundAmountChange,
      onSoundPlayButtonClick = _ref2.onSoundPlayButtonClick,
      totalSoundsAmount = _ref2.totalSoundsAmount,
      sound = _ref2.sound;
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "block-list__item u-flex-row",
    key: sound.id
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "sound-row__icon group-padding-y-med group-padding-x-med",
    onClick: function onClick() {
      return onSoundPlayButtonClick(sound);
    }
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_SVG__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: "sound-row__icon-svg",
    icon: isPlaying ? 'stop' : 'play'
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "group-padding-y-med group-padding-x-med u-pl0 u-txt-small u-flex-grow-1",
    onClick: function onClick() {
      return onSoundAmountChange(sound.id, instrument.id, sound.amount === 0 ? 1 : 0);
    }
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "toggle-input ".concat(sound.amount ? 'is-enabled' : '')
  }, "".concat(sound.description || sound.id))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(PercentageViewer, {
    amount: sound.amount,
    totalAmount: totalSoundsAmount,
    onAmountChange: onSoundAmountChange(sound.id, instrument.id)
  }));
};

var renderSoundsInCategories = ramda_src_curry__WEBPACK_IMPORTED_MODULE_10___default()(function (instrument, onSoundAmountChange, onSoundPlayButtonClick, currentlyPlayingSoundId) {
  return function (id, catIndex, arr) {
    var sounds = instrument.sounds.filter(function (sound) {
      return sound.category === id;
    });
    var isExpanded = !!sounds.find(function (sound) {
      return sound.amount;
    });
    var title = id || "".concat(instrument.description || Object(utils_tools__WEBPACK_IMPORTED_MODULE_24__["capitalize"])(instrument.id));
    var totalSoundsAmount = instrument.sounds.reduce(function (total, sound) {
      return total + sound.amount;
    }, 0);
    return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_Expandable__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: title,
      className: "\n                expandable-panel\n                ".concat(catIndex !== arr.length - 1 ? 'u-mb05' : '', "\n            "),
      titleClassName: "expandable-panel__title",
      bodyClassName: "expandable-panel__body",
      isExpanded: isExpanded,
      key: catIndex
    }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
      className: "block-list block-list--compact"
    }, sounds.map(function (sound, i) {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(SoundRow, {
        key: i,
        instrument: instrument,
        isPlaying: currentlyPlayingSoundId === sound.id,
        onSoundAmountChange: onSoundAmountChange,
        onSoundPlayButtonClick: onSoundPlayButtonClick,
        totalSoundsAmount: totalSoundsAmount,
        sound: sound
      });
    })));
  };
});

var SoundsPane = function SoundsPane(_ref3) {
  var currentlyPlayingSoundId = _ref3.currentlyPlayingSoundId,
      instrument = _ref3.instrument,
      onSoundAmountChange = _ref3.onSoundAmountChange,
      onSoundPlayButtonClick = _ref3.onSoundPlayButtonClick;
  var categories = instrument.sounds.reduce(getCategoriesFromSounds, []).map(renderSoundsInCategories(instrument, onSoundAmountChange, onSoundPlayButtonClick, currentlyPlayingSoundId));
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, categories);
};

var renderSequencesPane = function renderSequencesPane(instrument, sequences, updateInstrumentSequences) {
  var randomisedSequences = sequences.filter(function (b) {
    return b.id !== 'total';
  }).reduce(function (newObj, b) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_9___default()({}, newObj, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()({}, b.id, {
      description: b.description,
      id: b.id
    }));
  }, {});
  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_SequenceController__WEBPACK_IMPORTED_MODULE_17__["default"], {
    instrumentSequences: instrument.sequences,
    randomisedSequences: randomisedSequences,
    onChange: function onChange(val) {
      return updateInstrumentSequences(instrument.id, val);
    }
  });
};

var renderSettingsPane = function renderSettingsPane(instrument, actions) {
  var onFadeOutDurationUpdate = function onFadeOutDurationUpdate(value) {
    return actions.updateInstrumentFadeOutDuration({
      instrumentID: instrument.id,
      value: value
    });
  };

  var onPitchUpdate = function onPitchUpdate(value) {
    return actions.updateInstrumentPitch({
      instrumentID: instrument.id,
      value: value
    });
  };

  var onRepeatingHitsUpdate = function onRepeatingHitsUpdate(value) {
    return actions.updateInstrumentRepeatingHits({
      instrumentID: instrument.id,
      value: value
    });
  };

  var onInstrumentVolumeUpdate = function onInstrumentVolumeUpdate(value) {
    return actions.updateInstrumentVolume({
      instrumentID: instrument.id,
      value: value
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "u-flex-row u-flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "u-mr1 u-mb05"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_VolumeController__WEBPACK_IMPORTED_MODULE_20__["default"], {
    instrumentID: instrument.id,
    volume: instrument.volume,
    onUpdate: onInstrumentVolumeUpdate
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "u-mr1 u-mb05"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_PitchController__WEBPACK_IMPORTED_MODULE_15__["default"], {
    instrumentID: instrument.id,
    pitch: instrument.pitch,
    onUpdate: onPitchUpdate
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: "u-mr1 u-mb05"
  }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_RepeatingHitsController__WEBPACK_IMPORTED_MODULE_16__["default"], {
    instrumentID: instrument.id,
    repeatHitTypeForXBeat: instrument.repeatHitTypeForXBeat,
    onUpdate: onRepeatingHitsUpdate
  })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_FadeOutDurationController__WEBPACK_IMPORTED_MODULE_14__["default"], {
    instrumentID: instrument.id,
    fadeOutDuration: instrument.fadeOutDuration,
    onUpdate: onFadeOutDurationUpdate
  }));
}; //    getBufferURLFromSound :: sound -> IO Buffer


var getBufferFromSound = ramda_src_compose__WEBPACK_IMPORTED_MODULE_7___default()(Object(utils_audio__WEBPACK_IMPORTED_MODULE_22__["getBufferFromURL"])(utils_audioContext__WEBPACK_IMPORTED_MODULE_23__["default"]), ramda_src_prop__WEBPACK_IMPORTED_MODULE_6___default()('path')); //    playInstrumentSound :: sound -> Task Error source


var playInstrumentSound = ramda_src_compose__WEBPACK_IMPORTED_MODULE_7___default()(ramda_src_map__WEBPACK_IMPORTED_MODULE_5___default()(function (sound) {
  return sound.runIO();
}), ramda_src_map__WEBPACK_IMPORTED_MODULE_5___default()(Object(utils_audio__WEBPACK_IMPORTED_MODULE_22__["playSoundSimple"])(utils_audioContext__WEBPACK_IMPORTED_MODULE_23__["default"])), getBufferFromSound);

var InstrumentList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(InstrumentList, _Component);

  function InstrumentList() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, InstrumentList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(InstrumentList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      currentlyPlayingSoundId: null,
      currentSource: null
    };

    _this.resetState = function () {
      return _this.setState({
        currentlyPlayingSoundId: null,
        currentSource: null
      });
    };

    _this.stopCurrentSource = function () {
      var currentSource = _this.state.currentSource;

      if (currentSource) {
        Object(utils_audio__WEBPACK_IMPORTED_MODULE_22__["stopSource"])(currentSource);
      }
    };

    _this.onSoundAmountChange = ramda_src_curry__WEBPACK_IMPORTED_MODULE_10___default()(function (soundID, parentID, value) {
      var property = 'amount';

      _this.props.onSoundAmountChange({
        soundID: soundID,
        parentID: parentID,
        prop: property,
        value: value
      });
    });

    _this.onSoundPlayButtonClick = function (sound) {
      if (sound.id === _this.state.currentlyPlayingSoundId) {
        _this.stopCurrentSource();

        _this.resetState();

        return;
      }

      playInstrumentSound(sound).fork(utils_tools__WEBPACK_IMPORTED_MODULE_24__["logError"], function (source) {
        _this.stopCurrentSource();

        source.onended = _this.resetState;

        _this.setState({
          currentlyPlayingSoundId: sound.id,
          currentSource: source
        });
      });
    };

    _this.render = function () {
      var _this$props = _this.props,
          actions = _this$props.actions,
          instruments = _this$props.instruments,
          sequences = _this$props.sequences;
      var instrumentViews = instruments.map(function (instrument, index, instArr) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: "".concat(index < instArr.length - 1 ? 'u-mb2' : ''),
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
          className: "title-secondary u-mb05"
        }, instrument.description || instrument.id), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_Tabgroup__WEBPACK_IMPORTED_MODULE_19__["default"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_Tabgroup__WEBPACK_IMPORTED_MODULE_19__["Tabpane"], {
          title: "Sounds"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(SoundsPane, {
          instrument: instrument,
          onSoundAmountChange: _this.onSoundAmountChange,
          onSoundPlayButtonClick: _this.onSoundPlayButtonClick,
          currentlyPlayingSoundId: _this.state.currentlyPlayingSoundId
        })), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_Tabgroup__WEBPACK_IMPORTED_MODULE_19__["Tabpane"], {
          title: "Sequences"
        }, renderSequencesPane(instrument, sequences, actions.updateInstrumentSequences)), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(components_Tabgroup__WEBPACK_IMPORTED_MODULE_19__["Tabpane"], {
          title: "Settings"
        }, renderSettingsPane(instrument, actions))));
      });
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, instrumentViews);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(InstrumentList, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return InstrumentList;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getCategoriesFromSounds, "getCategoriesFromSounds", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(PercentageViewer, "PercentageViewer", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(SoundRow, "SoundRow", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(renderSoundsInCategories, "renderSoundsInCategories", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(SoundsPane, "SoundsPane", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(renderSequencesPane, "renderSequencesPane", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(renderSettingsPane, "renderSettingsPane", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(getBufferFromSound, "getBufferFromSound", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(playInstrumentSound, "playInstrumentSound", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(InstrumentList, "InstrumentList", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getCategoriesFromSounds, "getCategoriesFromSounds", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(PercentageViewer, "PercentageViewer", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(SoundRow, "SoundRow", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(renderSoundsInCategories, "renderSoundsInCategories", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(SoundsPane, "SoundsPane", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(renderSequencesPane, "renderSequencesPane", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(renderSettingsPane, "renderSettingsPane", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(getBufferFromSound, "getBufferFromSound", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(playInstrumentSound, "playInstrumentSound", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  reactHotLoader.register(InstrumentList, "InstrumentList", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\InstrumentList.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/components/NotePanel.js":
/*!*********************************************************!*\
  !*** ./src/generic/scripts/app/components/NotePanel.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var modules_getAbsolutePath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modules/getAbsolutePath */ "./src/generic/scripts/app/modules/getAbsolutePath.js");
/* harmony import */ var modules_getPercentage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! modules/getPercentage */ "./src/generic/scripts/app/modules/getPercentage.js");
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/tools */ "./src/generic/scripts/app/utils/tools.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var getNewAllowedLength = function getNewAllowedLength(allowedLength, prop, value) {
  var newObj = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_5___default()({}, allowedLength);

  newObj[prop] = value;
  return newObj;
};

var absolutePath = Object(modules_getAbsolutePath__WEBPACK_IMPORTED_MODULE_7__["default"])();

var NotePanel =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NotePanel, _Component);

  function NotePanel() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NotePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NotePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onLengthAmountChange = function (event, value) {
      var length = _this.props.length;
      var amount = length.amount;
      var newAmount = amount + value;
      if (newAmount < 0) return;

      _this.updateAllowedLength(length, 'amount', newAmount);
    };

    _this.onModifierClick = function (m1, m2) {
      var length = _this.props.length;
      var newValue = !length[m1];
      var newAllowedLength = getNewAllowedLength(length, m1, newValue);

      if (newValue && length[m2]) {
        newAllowedLength = getNewAllowedLength(newAllowedLength, m2, false);
      }

      _this.props.onUpdate(newAllowedLength);
    };

    _this.updateAllowedLength = function (length, prop, value) {
      var newAllowedLength = getNewAllowedLength(length, prop, value);

      _this.props.onUpdate(newAllowedLength);
    };

    _this.render = function () {
      var _this$props = _this.props,
          length = _this$props.length,
          totalAmount = _this$props.totalAmount;
      var noteName = "".concat(Object(utils_tools__WEBPACK_IMPORTED_MODULE_9__["capitalize"])(length.name), " note");
      var percentage = totalAmount ? Object(modules_getPercentage__WEBPACK_IMPORTED_MODULE_8__["default"])(totalAmount, length.amount) : 0;
      var isOn = length.amount > 0;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "note-panel ".concat(isOn ? '' : 'note-panel--disabled')
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "note-panel__svg",
        src: "".concat(absolutePath, "assets/images/notes/").concat(length.name, ".svg"),
        alt: noteName,
        title: noteName
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "note-panel__amount-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "note-panel__amount",
        title: "Chance"
      }, percentage, "%"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "note-panel__btn-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "note-panel__btn note-panel__btn--".concat(length.name, " note-panel__btn--up"),
        title: "Increase chance",
        onClick: function onClick(e) {
          return _this.onLengthAmountChange(e, 1);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "note-panel__btn note-panel__btn--".concat(length.name, " note-panel__btn--down"),
        title: "Decrease chance",
        onClick: function onClick(e) {
          return _this.onLengthAmountChange(e, -1);
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "note-panel__checkbox-container u-flex-row u-flex-justify-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "toggle-input toggle-input--triplet u-txt-small u-txt-light ".concat(length.isTriplet ? 'is-enabled' : ''),
        onClick: function onClick() {
          return _this.onModifierClick('isTriplet', 'isDotted');
        }
      }, "Triplet"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "toggle-input toggle-input--dotted u-txt-small u-txt-light ".concat(length.isDotted ? 'is-enabled' : ''),
        onClick: function onClick() {
          return _this.onModifierClick('isDotted', 'isTriplet');
        }
      }, "Dotted"))));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NotePanel, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return NotePanel;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var _default = NotePanel;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getNewAllowedLength, "getNewAllowedLength", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\NotePanel.js");
  reactHotLoader.register(absolutePath, "absolutePath", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\NotePanel.js");
  reactHotLoader.register(NotePanel, "NotePanel", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\NotePanel.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\NotePanel.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getNewAllowedLength, "getNewAllowedLength", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\NotePanel.js");
  reactHotLoader.register(absolutePath, "absolutePath", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\NotePanel.js");
  reactHotLoader.register(NotePanel, "NotePanel", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\NotePanel.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\NotePanel.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\NotePanel.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/components/PitchController.js":
/*!***************************************************************!*\
  !*** ./src/generic/scripts/app/components/PitchController.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_InputBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/InputBox */ "./src/generic/scripts/app/components/InputBox.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var PitchController =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PitchController, _Component);

  function PitchController() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PitchController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PitchController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.shouldComponentUpdate = function (nextProps) {
      return nextProps.pitch !== _this.props.pitch;
    };

    _this.onChange = function (event) {
      var value = Math.round(parseFloat(event.target.value) * 100);

      _this.props.onUpdate(value);
    };

    _this.render = function () {
      var props = {
        label: 'Pitch',
        id: "pitch-".concat(_this.props.instrumentID),
        type: 'number',
        defaultValue: _this.props.pitch ? _this.props.pitch / 100 : 0,
        onChange: _this.onChange,
        step: 1,
        minVal: -12,
        maxVal: 12,
        className: 'input-container__input input-container__input--bare input-container__input--large input-container__input--short@above-alpha',
        labelClassName: 'input-container__label'
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_InputBox__WEBPACK_IMPORTED_MODULE_6__["default"], props);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PitchController, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return PitchController;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = PitchController;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PitchController, "PitchController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\PitchController.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\PitchController.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PitchController, "PitchController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\PitchController.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\PitchController.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\PitchController.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/components/RepeatingHitsController.js":
/*!***********************************************************************!*\
  !*** ./src/generic/scripts/app/components/RepeatingHitsController.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var ramda_src_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda/src/compose */ "./node_modules/ramda/src/compose.js");
/* harmony import */ var ramda_src_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda_src_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var modules_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modules/events */ "./src/generic/scripts/app/modules/events.js");
/* harmony import */ var components_InputBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/InputBox */ "./src/generic/scripts/app/components/InputBox.js");
/* harmony import */ var utils_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/tools */ "./src/generic/scripts/app/utils/tools.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var RepeatingHitsController =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RepeatingHitsController, _Component);

  function RepeatingHitsController() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RepeatingHitsController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(RepeatingHitsController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.shouldComponentUpdate = function (nextProps) {
      return nextProps.repeatHitTypeForXBeat !== _this.props.repeatHitTypeForXBeat;
    };

    _this.onChange = ramda_src_compose__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.onUpdate, Object(utils_tools__WEBPACK_IMPORTED_MODULE_9__["roundToXPlaces"])(1), modules_events__WEBPACK_IMPORTED_MODULE_7__["getTargetValueFromEvent"]);

    _this.render = function () {
      var props = {
        label: 'Repeating Hits',
        labelTitle: 'Each sample will repeat for x number of beats',
        id: "repeatHitTypeForXBeat-".concat(_this.props.instrumentID),
        type: 'number',
        defaultValue: _this.props.repeatHitTypeForXBeat ? _this.props.repeatHitTypeForXBeat : 0,
        onChange: _this.onChange,
        step: 0.5,
        minVal: 0,
        maxVal: 200,
        className: 'input-container__input input-container__input--bare input-container__input--large input-container__input--short@above-alpha',
        labelClassName: 'input-container__label'
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_InputBox__WEBPACK_IMPORTED_MODULE_8__["default"], props);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RepeatingHitsController, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RepeatingHitsController;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var _default = RepeatingHitsController;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RepeatingHitsController, "RepeatingHitsController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\RepeatingHitsController.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\RepeatingHitsController.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RepeatingHitsController, "RepeatingHitsController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\RepeatingHitsController.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\RepeatingHitsController.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\RepeatingHitsController.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/components/SequenceController.js":
/*!******************************************************************!*\
  !*** ./src/generic/scripts/app/components/SequenceController.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_sequences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/sequences */ "./src/generic/scripts/app/utils/sequences.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var SequenceController =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SequenceController, _Component);

  function SequenceController() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SequenceController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SequenceController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onSequenceClick = function (_ref) {
      var enabledSequences = _ref.enabledSequences,
          sequenceID = _ref.sequenceID;
      var index = enabledSequences.indexOf(sequenceID);
      var newInstrumentSequences = index > -1 ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(enabledSequences.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(enabledSequences.slice(index + 1, enabledSequences.length))) : [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(enabledSequences), [sequenceID]);

      _this.props.onChange(newInstrumentSequences);
    };

    _this.renderSequences = function (sequences, enabledSequences) {
      return Object.keys(sequences).map(function (sequenceID, i) {
        var sequence = sequences[sequenceID];
        var isEnabled = enabledSequences.includes(sequenceID);
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "toggle-input u-txt-small ".concat(isEnabled ? 'is-enabled' : ''),
          onClick: function onClick() {
            return _this.onSequenceClick({
              enabledSequences: enabledSequences,
              sequenceID: sequenceID
            });
          },
          key: i
        }, sequence.description ? unescape(sequence.description) : sequence.id);
      });
    };

    _this.render = function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "u-mb1"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "title-secondary u-mb05"
      }, "Randomised Sequences"), _this.renderSequences(_this.props.randomisedSequences, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.instrumentSequences))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "title-secondary u-mb05"
      }, "Predefined Sequences"), _this.renderSequences(utils_sequences__WEBPACK_IMPORTED_MODULE_7__["predefinedSequences"], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this.props.instrumentSequences))));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SequenceController, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SequenceController;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var _default = SequenceController;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SequenceController, "SequenceController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\SequenceController.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\SequenceController.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SequenceController, "SequenceController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\SequenceController.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\SequenceController.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\SequenceController.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/components/Tabgroup.js":
/*!********************************************************!*\
  !*** ./src/generic/scripts/app/components/Tabgroup.js ***!
  \********************************************************/
/*! exports provided: default, Tabpane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabpane", function() { return Tabpane; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var Tabgroup =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Tabgroup, _Component);

  function Tabgroup() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tabgroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Tabgroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      activeTabIndex: 0
    };
    _this.tabs = [];

    _this.componentWillMount = function () {
      var children = Array.isArray(_this.props.children) ? _this.props.children : [_this.props.children];

      _this.setActiveTab(children);
    };

    _this.setActiveTab = function (children) {
      var activeTab = children.find(function (pane) {
        return pane.props.isActive;
      });
      var activeTabIndex = children.indexOf(activeTab);

      _this.setState({
        activeTabIndex: activeTabIndex > -1 ? activeTabIndex : 0
      });
    };

    _this.onTabClick = function (index) {
      return _this.setState({
        activeTabIndex: index
      });
    };

    _this.render = function () {
      var children = Array.isArray(_this.props.children) ? _this.props.children : [_this.props.children];
      var tabpanes = children.map(function (pane, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: i,
          className: "tabgroup__pane ".concat(i === _this.state.activeTabIndex ? 'is-active' : '')
        }, pane);
      });
      var tabs = children.map(function (pane, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: i,
          className: "tabgroup__tab ".concat(i === _this.state.activeTabIndex ? 'is-active' : ''),
          onClick: function onClick() {
            return _this.onTabClick(i);
          }
        }, pane.props.title);
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tabgroup"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        ref: "tabs",
        className: "tabgroup__tab-container"
      }, tabs), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tabgroup__pane-container"
      }, tabpanes));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tabgroup, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Tabgroup;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var Tabpane =
/*#__PURE__*/
function (_Component2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Tabpane, _Component2);

  function Tabpane() {
    var _getPrototypeOf3;

    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tabpane);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf3 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Tabpane)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _this2.render = function () {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: ""
      }, _this2.props.children);
    };

    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tabpane, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Tabpane;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = Tabgroup;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tabgroup, "Tabgroup", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\Tabgroup.js");
  reactHotLoader.register(Tabpane, "Tabpane", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\Tabgroup.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\Tabgroup.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tabgroup, "Tabgroup", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\Tabgroup.js");
  reactHotLoader.register(Tabpane, "Tabpane", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\Tabgroup.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\Tabgroup.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\Tabgroup.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/components/VolumeController.js":
/*!****************************************************************!*\
  !*** ./src/generic/scripts/app/components/VolumeController.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_InputBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/InputBox */ "./src/generic/scripts/app/components/InputBox.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var VolumeController =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(VolumeController, _Component);

  function VolumeController() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, VolumeController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(VolumeController)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.shouldComponentUpdate = function (nextProps) {
      return nextProps.volume !== _this.props.volume;
    };

    _this.onChange = function (event) {
      var value = parseFloat(event.target.value) / 100;

      _this.props.onUpdate(value);
    };

    _this.render = function () {
      var props = {
        label: 'Volume %',
        id: "volume-".concat(_this.props.instrumentID),
        type: 'number',
        defaultValue: typeof _this.props.volume !== 'undefined' ? _this.props.volume * 100 : 100,
        onChange: _this.onChange,
        step: 10,
        minVal: 0,
        maxVal: 100,
        className: 'input-container__input input-container__input--bare input-container__input--large input-container__input--short@above-alpha',
        labelClassName: 'input-container__label'
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_InputBox__WEBPACK_IMPORTED_MODULE_6__["default"], props);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VolumeController, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return VolumeController;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var _default = VolumeController;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VolumeController, "VolumeController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\VolumeController.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\VolumeController.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VolumeController, "VolumeController", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\VolumeController.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\VolumeController.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\components\\VolumeController.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/containers/Instruments.js":
/*!***********************************************************!*\
  !*** ./src/generic/scripts/app/containers/Instruments.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var routes_Instruments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! routes/Instruments */ "./src/generic/scripts/app/routes/Instruments.js");
/* harmony import */ var actions_instruments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/instruments */ "./src/generic/scripts/app/actions/instruments.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return {
    sequences: state.sequences,
    instruments: state.instruments
  };
};

var actions = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, actions_instruments__WEBPACK_IMPORTED_MODULE_4__);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(actions, dispatch))
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(routes_Instruments__WEBPACK_IMPORTED_MODULE_3__["default"]);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Instruments.js");
  reactHotLoader.register(actions, "actions", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Instruments.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Instruments.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Instruments.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Instruments.js");
  reactHotLoader.register(actions, "actions", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Instruments.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Instruments.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Instruments.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Instruments.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/containers/SequencePanel.js":
/*!*************************************************************!*\
  !*** ./src/generic/scripts/app/containers/SequencePanel.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions_sequences__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/sequences */ "./src/generic/scripts/app/actions/sequences.js");
/* harmony import */ var actions_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/modal */ "./src/generic/scripts/app/actions/modal.js");
/* harmony import */ var components_AllowedLengthsController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/AllowedLengthsController */ "./src/generic/scripts/app/components/AllowedLengthsController.js");
/* harmony import */ var components_BeatsController__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/BeatsController */ "./src/generic/scripts/app/components/BeatsController.js");
/* harmony import */ var components_HitChanceController__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/HitChanceController */ "./src/generic/scripts/app/components/HitChanceController.js");
/* harmony import */ var components_InputBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/InputBox */ "./src/generic/scripts/app/components/InputBox.js");
/* harmony import */ var components_Tabgroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Tabgroup */ "./src/generic/scripts/app/components/Tabgroup.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();












var SequencePanel =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SequencePanel, _Component);

  function SequencePanel() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SequencePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SequencePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onHitChanceChange = function (hitChance) {
      _this.props.actions.updateSequence(_this.props.sequence.id, 'hitChance', hitChance);
    };

    _this.onAllowedLengthsChange = function (allowedLengths) {
      _this.props.actions.updateSequence(_this.props.sequence.id, 'allowedLengths', allowedLengths);
    };

    _this.launchDeleteModal = function () {
      var _this$props = _this.props,
          actions = _this$props.actions,
          sequence = _this$props.sequence;

      var onDeleteClick = function onDeleteClick() {
        actions.deleteSequence(sequence.id);
        actions.disableModal();
      };

      var content = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "button-primary button-primary--small button-primary--negative u-mr05",
        onClick: onDeleteClick
      }, "Delete"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "button-primary button-primary--small",
        onClick: actions.disableModal
      }, "Cancel"));
      var modalTitle = "Are you sure you want to delete '".concat(_this.props.description, "?'");
      actions.enableModal({
        content: content,
        isCloseable: true,
        title: modalTitle
      });
    };

    _this.renderHeader = function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "u-flex-row u-flex-justify u-flex-end u-mb05"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "u-mr05"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "sequence-name-".concat(_this.props.sequence.id),
        className: "u-visually-hidden"
      }, "Sequence Title"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_InputBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "sequence-name-".concat(_this.props.sequence.id),
        type: "text",
        maxLength: "25",
        defaultValue: _this.props.description,
        onChange: function onChange(e) {
          return _this.props.actions.updateSequenceDescription(_this.props.sequence.id, escape(e.target.value));
        },
        className: "input-container__input input-container__input--bare input-container__input--large",
        labelClassName: "input-container__label"
      })), _this.props.isDeletable && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        className: "button-primary button-primary--tiny button-primary--negative",
        onClick: _this.launchDeleteModal
      }, "Delete"));
    };

    _this.render = function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, _this.renderHeader(), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Tabgroup__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_Tabgroup__WEBPACK_IMPORTED_MODULE_15__["Tabpane"], {
        title: "Notes"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_AllowedLengthsController__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onUpdate: _this.onAllowedLengthsChange,
        allowedLengths: _this.props.sequence.allowedLengths
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "u-flex-row u-flex-row u-flex-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "u-mr2@above-alpha u-mb05"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_BeatsController__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onUpdate: _this.props.actions.updateSequence,
        sequence: _this.props.sequence
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(components_HitChanceController__WEBPACK_IMPORTED_MODULE_13__["default"], {
        hitChance: _this.props.sequence.hitChance,
        onUpdate: _this.onHitChanceChange
      })))));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SequencePanel, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SequencePanel;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var actions = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, actions_sequences__WEBPACK_IMPORTED_MODULE_9__, actions_modal__WEBPACK_IMPORTED_MODULE_10__);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(actions, dispatch))
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, mapDispatchToProps)(SequencePanel);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SequencePanel, "SequencePanel", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\SequencePanel.js");
  reactHotLoader.register(actions, "actions", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\SequencePanel.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\SequencePanel.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\SequencePanel.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SequencePanel, "SequencePanel", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\SequencePanel.js");
  reactHotLoader.register(actions, "actions", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\SequencePanel.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\SequencePanel.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\SequencePanel.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\SequencePanel.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/containers/Sequences.js":
/*!*********************************************************!*\
  !*** ./src/generic/scripts/app/containers/Sequences.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var routes_Sequences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! routes/Sequences */ "./src/generic/scripts/app/routes/Sequences.js");
/* harmony import */ var actions_sequences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/sequences */ "./src/generic/scripts/app/actions/sequences.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();






var mapStateToProps = function mapStateToProps(state) {
  return {
    sequences: state.sequences
  };
};

var actions = {
  addSequence: actions_sequences__WEBPACK_IMPORTED_MODULE_4__["addSequence"]
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(actions, dispatch))
  };
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(routes_Sequences__WEBPACK_IMPORTED_MODULE_3__["default"]);

var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Sequences.js");
  reactHotLoader.register(actions, "actions", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Sequences.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Sequences.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Sequences.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Sequences.js");
  reactHotLoader.register(actions, "actions", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Sequences.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Sequences.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Sequences.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\containers\\Sequences.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/modules/getPercentage.js":
/*!**********************************************************!*\
  !*** ./src/generic/scripts/app/modules/getPercentage.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var ramda_src_curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda/src/curry */ "./node_modules/ramda/src/curry.js");
/* harmony import */ var ramda_src_curry__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda_src_curry__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})(); //    getPercentage :: Int -> Int -> Int


var getPercentage = ramda_src_curry__WEBPACK_IMPORTED_MODULE_0___default()(function (total, amount) {
  return total !== 0 ? Math.floor(amount / total * 1000) / 10 : 0;
});

var _default = getPercentage;
var _default2 = _default;
/* harmony default export */ __webpack_exports__["default"] = (_default2);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getPercentage, "getPercentage", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\modules\\getPercentage.js");
  reactHotLoader.register(_default, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\modules\\getPercentage.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getPercentage, "getPercentage", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\modules\\getPercentage.js");
  reactHotLoader.register(_default, "_default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\modules\\getPercentage.js");
  reactHotLoader.register(_default2, "default", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\modules\\getPercentage.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/routes/Instruments.js":
/*!*******************************************************!*\
  !*** ./src/generic/scripts/app/routes/Instruments.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Instruments; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_InstrumentList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/InstrumentList */ "./src/generic/scripts/app/components/InstrumentList.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var Instruments =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Instruments, _Component);

  function Instruments() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Instruments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Instruments)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.render = function () {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _this.props.className
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(components_InstrumentList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onSoundAmountChange: _this.props.actions.updateInstrumentSound,
        actions: {
          updateInstrumentPitch: _this.props.actions.updateInstrumentPitch,
          updateInstrumentVolume: _this.props.actions.updateInstrumentVolume,
          updateInstrumentRepeatingHits: _this.props.actions.updateInstrumentRepeatingHits,
          updateInstrumentSequences: _this.props.actions.updateInstrumentSequences,
          updateInstrumentFadeOutDuration: _this.props.actions.updateInstrumentFadeOutDuration
        },
        sequences: _this.props.sequences,
        instruments: _this.props.instruments
      }));
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Instruments, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Instruments;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Instruments, "Instruments", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\routes\\Instruments.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Instruments, "Instruments", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\routes\\Instruments.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/generic/scripts/app/routes/Sequences.js":
/*!*****************************************************!*\
  !*** ./src/generic/scripts/app/routes/Sequences.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sequences; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var containers_SequencePanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! containers/SequencePanel */ "./src/generic/scripts/app/containers/SequencePanel.js");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();







(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var getDescription = function getDescription(sequence) {
  return sequence.description ? unescape(sequence.description) : sequence.id;
};

var Sequences =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Sequences, _Component);

  function Sequences() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Sequences);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Sequences)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.sequences = [];

    _this.componentWillMount = function () {
      _this.assignSequences(_this.props.sequences);
    };

    _this.componentWillUpdate = function (nextProps) {
      _this.assignSequences(nextProps.sequences);
    };

    _this.assignSequences = function (sequences) {
      _this.sequences = sequences.filter(function (sequence) {
        return sequence.id !== 'total';
      });
    };

    _this.addNewSequence = function () {
      _this.props.actions.addSequence();
    };

    _this.render = function () {
      var sequences = _this.sequences.map(function (sequence, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: i,
          className: "group-padding-y ".concat(i === 0 ? 'u-pt0' : '')
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(containers_SequencePanel__WEBPACK_IMPORTED_MODULE_6__["default"], {
          sequence: sequence,
          description: getDescription(sequence),
          isDeletable: i !== 0
        }));
      });

      var addSequenceButton = _this.sequences.length < 6 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "button-primary button-primary--full button-primary--gamma",
        onClick: _this.addNewSequence
      }, "Add Sequence");
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _this.props.className
      }, sequences, addSequenceButton);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Sequences, [{
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Sequences;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getDescription, "getDescription", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\routes\\Sequences.js");
  reactHotLoader.register(Sequences, "Sequences", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\routes\\Sequences.js");
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getDescription, "getDescription", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\routes\\Sequences.js");
  reactHotLoader.register(Sequences, "Sequences", "C:\\webroot\\octogonio\\apps\\octogon.io\\src\\generic\\scripts\\app\\routes\\Sequences.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyaWMvc2NyaXB0cy9hcHAvY29tcG9uZW50cy9BbGxvd2VkTGVuZ3Roc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyaWMvc2NyaXB0cy9hcHAvY29tcG9uZW50cy9GYWRlT3V0RHVyYXRpb25Db250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmljL3NjcmlwdHMvYXBwL2NvbXBvbmVudHMvSGl0Q2hhbmNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJpYy9zY3JpcHRzL2FwcC9jb21wb25lbnRzL0luc3RydW1lbnRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmljL3NjcmlwdHMvYXBwL2NvbXBvbmVudHMvTm90ZVBhbmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmljL3NjcmlwdHMvYXBwL2NvbXBvbmVudHMvUGl0Y2hDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmljL3NjcmlwdHMvYXBwL2NvbXBvbmVudHMvUmVwZWF0aW5nSGl0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyaWMvc2NyaXB0cy9hcHAvY29tcG9uZW50cy9TZXF1ZW5jZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyaWMvc2NyaXB0cy9hcHAvY29tcG9uZW50cy9UYWJncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJpYy9zY3JpcHRzL2FwcC9jb21wb25lbnRzL1ZvbHVtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyaWMvc2NyaXB0cy9hcHAvY29udGFpbmVycy9JbnN0cnVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJpYy9zY3JpcHRzL2FwcC9jb250YWluZXJzL1NlcXVlbmNlUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyaWMvc2NyaXB0cy9hcHAvY29udGFpbmVycy9TZXF1ZW5jZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyaWMvc2NyaXB0cy9hcHAvbW9kdWxlcy9nZXRQZXJjZW50YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmljL3NjcmlwdHMvYXBwL3JvdXRlcy9JbnN0cnVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJpYy9zY3JpcHRzL2FwcC9yb3V0ZXMvU2VxdWVuY2VzLmpzIl0sIm5hbWVzIjpbIkFsbG93ZWRMZW5ndGhzQ29udHJvbGxlciIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImRlZXBFcXVhbCIsIm5leHRQcm9wcyIsIm9uTGVuZ3RoVXBkYXRlIiwiYWxsb3dlZExlbmd0aHMiLCJvblVwZGF0ZSIsIm5ld0xlbmd0aEluZGV4IiwibmV3TGVuZ3RoIiwibCIsIm5ld0FsbG93ZWRMZW5ndGhzIiwicmVuZGVyIiwidG90YWxBbW91bnQiLCJhY2MiLCJuZXh0Iiwibm90ZVBhbmVsUHJvcHMiLCJsZW5ndGhzIiwiaSIsImxlbmd0aCIsIkNvbXBvbmVudCIsIkZhZGVPdXREdXJhdGlvbkNvbnRyb2xsZXIiLCJvbkNoYW5nZSIsInZhbHVlIiwicm91bmRUb1hQbGFjZXMiLCJwYXJzZUZsb2F0IiwiZXZlbnQiLCJwcm9wcyIsImxhYmVsIiwibGFiZWxUaXRsZSIsImlkIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsIk1hdGgiLCJzdGVwIiwibWluVmFsIiwibWF4VmFsIiwiY2xhc3NOYW1lIiwibGFiZWxDbGFzc05hbWUiLCJIaXRDaGFuY2VDb250cm9sbGVyIiwiZ2V0Q2F0ZWdvcmllc0Zyb21Tb3VuZHMiLCJjYXRzIiwic291bmQiLCJQZXJjZW50YWdlVmlld2VyIiwiYW1vdW50Iiwib25BbW91bnRDaGFuZ2UiLCJnZXRQZXJjZW50YWdlIiwiU291bmRSb3ciLCJpbnN0cnVtZW50IiwiaXNQbGF5aW5nIiwib25Tb3VuZEFtb3VudENoYW5nZSIsIm9uU291bmRQbGF5QnV0dG9uQ2xpY2siLCJ0b3RhbFNvdW5kc0Ftb3VudCIsInJlbmRlclNvdW5kc0luQ2F0ZWdvcmllcyIsInNvdW5kcyIsImlzRXhwYW5kZWQiLCJ0aXRsZSIsImNhcGl0YWxpemUiLCJ0b3RhbCIsImNhdEluZGV4IiwiYXJyIiwiY3VycmVudGx5UGxheWluZ1NvdW5kSWQiLCJTb3VuZHNQYW5lIiwiY2F0ZWdvcmllcyIsInJlbmRlclNlcXVlbmNlc1BhbmUiLCJyYW5kb21pc2VkU2VxdWVuY2VzIiwiYiIsImRlc2NyaXB0aW9uIiwidXBkYXRlSW5zdHJ1bWVudFNlcXVlbmNlcyIsInJlbmRlclNldHRpbmdzUGFuZSIsIm9uRmFkZU91dER1cmF0aW9uVXBkYXRlIiwiaW5zdHJ1bWVudElEIiwib25QaXRjaFVwZGF0ZSIsIm9uUmVwZWF0aW5nSGl0c1VwZGF0ZSIsIm9uSW5zdHJ1bWVudFZvbHVtZVVwZGF0ZSIsImdldEJ1ZmZlckZyb21Tb3VuZCIsImdldEJ1ZmZlckZyb21VUkwiLCJwbGF5SW5zdHJ1bWVudFNvdW5kIiwicGxheVNvdW5kU2ltcGxlIiwiSW5zdHJ1bWVudExpc3QiLCJzdGF0ZSIsImN1cnJlbnRTb3VyY2UiLCJyZXNldFN0YXRlIiwic3RvcEN1cnJlbnRTb3VyY2UiLCJzdG9wU291cmNlIiwicHJvcGVydHkiLCJzb3VuZElEIiwicGFyZW50SUQiLCJwcm9wIiwic291cmNlIiwiYWN0aW9ucyIsImluc3RydW1lbnRzIiwic2VxdWVuY2VzIiwiaW5zdHJ1bWVudFZpZXdzIiwiaW5kZXgiLCJpbnN0QXJyIiwiZ2V0TmV3QWxsb3dlZExlbmd0aCIsIm5ld09iaiIsImFic29sdXRlUGF0aCIsImdldEFic29sdXRlUGF0aCIsIk5vdGVQYW5lbCIsIm9uTGVuZ3RoQW1vdW50Q2hhbmdlIiwibmV3QW1vdW50Iiwib25Nb2RpZmllckNsaWNrIiwibmV3VmFsdWUiLCJuZXdBbGxvd2VkTGVuZ3RoIiwidXBkYXRlQWxsb3dlZExlbmd0aCIsIm5vdGVOYW1lIiwicGVyY2VudGFnZSIsImlzT24iLCJQaXRjaENvbnRyb2xsZXIiLCJSZXBlYXRpbmdIaXRzQ29udHJvbGxlciIsIlNlcXVlbmNlQ29udHJvbGxlciIsIm9uU2VxdWVuY2VDbGljayIsImVuYWJsZWRTZXF1ZW5jZXMiLCJzZXF1ZW5jZUlEIiwibmV3SW5zdHJ1bWVudFNlcXVlbmNlcyIsInJlbmRlclNlcXVlbmNlcyIsInNlcXVlbmNlIiwiaXNFbmFibGVkIiwidW5lc2NhcGUiLCJUYWJncm91cCIsImFjdGl2ZVRhYkluZGV4IiwidGFicyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJzZXRBY3RpdmVUYWIiLCJhY3RpdmVUYWIiLCJwYW5lIiwib25UYWJDbGljayIsInRhYnBhbmVzIiwiVGFicGFuZSIsIlZvbHVtZUNvbnRyb2xsZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0IiwiU2VxdWVuY2VQYW5lbCIsIm9uSGl0Q2hhbmNlQ2hhbmdlIiwib25BbGxvd2VkTGVuZ3Roc0NoYW5nZSIsImxhdW5jaERlbGV0ZU1vZGFsIiwib25EZWxldGVDbGljayIsImNvbnRlbnQiLCJkaXNhYmxlTW9kYWwiLCJtb2RhbFRpdGxlIiwiaXNDbG9zZWFibGUiLCJyZW5kZXJIZWFkZXIiLCJlc2NhcGUiLCJlIiwiYWRkU2VxdWVuY2UiLCJJbnN0cnVtZW50cyIsInVwZGF0ZUluc3RydW1lbnRQaXRjaCIsInVwZGF0ZUluc3RydW1lbnRWb2x1bWUiLCJ1cGRhdGVJbnN0cnVtZW50UmVwZWF0aW5nSGl0cyIsInVwZGF0ZUluc3RydW1lbnRGYWRlT3V0RHVyYXRpb24iLCJnZXREZXNjcmlwdGlvbiIsIlNlcXVlbmNlcyIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJhc3NpZ25TZXF1ZW5jZXMiLCJhZGROZXdTZXF1ZW5jZSIsImFkZFNlcXVlbmNlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFB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USxDQUFSQSxPQUFKO0FBRHBCLE9BQWlCLENBQWpCOzs7VUFJSjBDLGMsR0FBaUIsWUFBTTtBQUNuQjs7O1VBR0pwSixNLEdBQVMsWUFBTTtBQUNYLFVBQU1nRixTQUFTLEdBQUcsb0JBQ1Q7QUFBQSxlQUNEO0FBQUssYUFBRyxFQUFSO0FBQWEsbUJBQVMsNEJBQXFCMUUsQ0FBQyxLQUFEQSxjQUFyQjtBQUF0QixXQUNJO0FBQWUsa0JBQVEsRUFBdkI7QUFBcUMscUJBQVcsRUFBRzBJLGNBQWMsQ0FBakUsUUFBaUUsQ0FBakU7QUFBOEUscUJBQVcsRUFBRTFJLENBQUMsS0FBSztBQUFqRyxVQURKLENBREM7QUFEVCxPQUFrQixDQUFsQjs7QUFPQSxVQUFNK0ksaUJBQWlCLEdBQUcsOEJBQ3RCO0FBQVEsaUJBQVMsRUFBakI7QUFBOEUsZUFBTyxFQUFFLE1BQUtEO0FBQTVGLFNBREosY0FDSSxDQURKO0FBR0EsYUFDSTtBQUFLLGlCQUFTLEVBQUcsWUFBVzNIO0FBQTVCLG9CQURKLGlCQUNJLENBREo7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvQitCakIsK0M7Ozs7Ozs7Ozs7Ozs7OzBCQUZqQ3dJLGM7MEJBRWVDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRmZELGM7MEJBRWVDLFMiLCJmaWxlIjoiYWRkaXRpb25hbC12aWV3cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfY3VycnkyID0gLyojX19QVVJFX18qL3JlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG52YXIgcGF0aCA9IC8qI19fUFVSRV9fKi9yZXF1aXJlKCcuL3BhdGgnKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aGVuIHN1cHBsaWVkIGFuIG9iamVjdCByZXR1cm5zIHRoZSBpbmRpY2F0ZWRcbiAqIHByb3BlcnR5IG9mIHRoYXQgb2JqZWN0LCBpZiBpdCBleGlzdHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHMgLT4ge3M6IGF9IC0+IGEgfCBVbmRlZmluZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwIFRoZSBwcm9wZXJ0eSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcXVlcnlcbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBhdCBgb2JqLnBgLlxuICogQHNlZSBSLnBhdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnByb3AoJ3gnLCB7eDogMTAwfSk7IC8vPT4gMTAwXG4gKiAgICAgIFIucHJvcCgneCcsIHt9KTsgLy89PiB1bmRlZmluZWRcbiAqL1xuXG52YXIgcHJvcCA9IC8qI19fUFVSRV9fKi9fY3VycnkyKGZ1bmN0aW9uIHByb3AocCwgb2JqKSB7XG4gIHJldHVybiBwYXRoKFtwXSwgb2JqKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBwcm9wOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdkZWVwLWVxdWFsJ1xyXG5pbXBvcnQgeyB1cGRhdGUgfSBmcm9tICdyYW1kYSdcclxuXHJcbmltcG9ydCBOb3RlUGFuZWwgZnJvbSAnY29tcG9uZW50cy9Ob3RlUGFuZWwnXHJcblxyXG5jbGFzcyBBbGxvd2VkTGVuZ3Roc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gbmV4dFByb3BzID0+ICFkZWVwRXF1YWwobmV4dFByb3BzLmFsbG93ZWRMZW5ndGhzLCB0aGlzLnByb3BzLmFsbG93ZWRMZW5ndGhzKVxyXG5cclxuICAgIG9uTGVuZ3RoVXBkYXRlID0gKG5ld0xlbmd0aCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWxsb3dlZExlbmd0aHMsIG9uVXBkYXRlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgbmV3TGVuZ3RoSW5kZXggPSBhbGxvd2VkTGVuZ3Rocy5pbmRleE9mKGFsbG93ZWRMZW5ndGhzLmZpbmQobCA9PiBuZXdMZW5ndGguaWQgPT09IGwuaWQpKVxyXG4gICAgICAgIGNvbnN0IG5ld0FsbG93ZWRMZW5ndGhzID0gdXBkYXRlKG5ld0xlbmd0aEluZGV4LCBuZXdMZW5ndGgsIGFsbG93ZWRMZW5ndGhzKVxyXG4gICAgICAgIG9uVXBkYXRlKG5ld0FsbG93ZWRMZW5ndGhzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGFsbG93ZWRMZW5ndGhzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgdG90YWxBbW91bnQgPSBhbGxvd2VkTGVuZ3Roc1xyXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIG5leHQpID0+IGFjYyArIG5leHQuYW1vdW50LCAwKVxyXG4gICAgICAgIGNvbnN0IG5vdGVQYW5lbFByb3BzID0ge1xyXG4gICAgICAgICAgICBvblVwZGF0ZTogdGhpcy5vbkxlbmd0aFVwZGF0ZSxcclxuICAgICAgICAgICAgdG90YWxBbW91bnQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aHMgPSBhbGxvd2VkTGVuZ3Roc1xyXG4gICAgICAgICAgICAubWFwKChsZW5ndGgsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0gb25lLWZpZnRoIGFscGhhLS1vbmUtdGhpcmRcIiBrZXk9e2l9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LW1iMVwiIGtleT17aX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGVQYW5lbCBsZW5ndGg9e2xlbmd0aH0geyAuLi5ub3RlUGFuZWxQcm9wcyB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHsgbGVuZ3RocyB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsb3dlZExlbmd0aHNDb250cm9sbGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBJbnB1dEJveCBmcm9tICdjb21wb25lbnRzL0lucHV0Qm94J1xyXG5pbXBvcnQgeyByb3VuZFRvWFBsYWNlcyB9IGZyb20gJ3V0aWxzL3Rvb2xzJ1xyXG5cclxuY2xhc3MgRmFkZU91dER1cmF0aW9uQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUgPSBuZXh0UHJvcHMgPT4gbmV4dFByb3BzLmZhZGVPdXREdXJhdGlvbiAhPT0gdGhpcy5wcm9wcy5mYWRlT3V0RHVyYXRpb25cclxuXHJcbiAgICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcm91bmRUb1hQbGFjZXMoMywgcGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKSAvIDEwMDBcclxuICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9wcyA9IHtcclxuICAgICAgICAgICAgbGFiZWw6ICdDcm9zc2ZhZGUgKG1zKScsXHJcbiAgICAgICAgICAgIGxhYmVsVGl0bGU6ICdTYW1wbGVzXFwnIGNyb3NzZmFkZSB0aW1lIGluIG1pbGxpc2Vjb25kcycsXHJcbiAgICAgICAgICAgIGlkOiBgZmFkZU91dER1cmF0aW9uLSR7dGhpcy5wcm9wcy5pbnN0cnVtZW50SUR9YCxcclxuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogTWF0aC5yb3VuZCh0aGlzLnByb3BzLmZhZGVPdXREdXJhdGlvbiAqIDEwMDApLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcclxuICAgICAgICAgICAgc3RlcDogMjUsXHJcbiAgICAgICAgICAgIG1pblZhbDogMCxcclxuICAgICAgICAgICAgbWF4VmFsOiAyMDAwLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdpbnB1dC1jb250YWluZXJfX2lucHV0IGlucHV0LWNvbnRhaW5lcl9faW5wdXQtLWJhcmUgaW5wdXQtY29udGFpbmVyX19pbnB1dC0tbGFyZ2UgaW5wdXQtY29udGFpbmVyX19pbnB1dC0tc2hvcnRAYWJvdmUtYWxwaGEnLFxyXG4gICAgICAgICAgICBsYWJlbENsYXNzTmFtZTogJ2lucHV0LWNvbnRhaW5lcl9fbGFiZWwnLFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5wdXRCb3ggeyAuLi5wcm9wcyB9IC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWRlT3V0RHVyYXRpb25Db250cm9sbGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElucHV0Qm94IGZyb20gJ2NvbXBvbmVudHMvSW5wdXRCb3gnXHJcblxyXG5jbGFzcyBIaXRDaGFuY2VDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IG5leHRQcm9wcyA9PiBuZXh0UHJvcHMuaGl0Q2hhbmNlICE9PSB0aGlzLnByb3BzLmhpdENoYW5jZVxyXG5cclxuICAgIG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKSkgLyAxMDBcclxuICAgICAgICBpZiAodmFsdWUpIHRoaXMucHJvcHMub25VcGRhdGUodmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0hpdCBDaGFuY2UgKCUpJyxcclxuICAgICAgICAgICAgaWQ6ICdoaXRDaGFuY2UnLFxyXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBNYXRoLnJvdW5kKHRoaXMucHJvcHMuaGl0Q2hhbmNlICogMTAwKSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXHJcbiAgICAgICAgICAgIG1pblZhbDogMCxcclxuICAgICAgICAgICAgbWF4VmFsOiAxMDAsXHJcbiAgICAgICAgICAgIHN0ZXA6IDUsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2lucHV0LWNvbnRhaW5lcl9faW5wdXQgaW5wdXQtY29udGFpbmVyX19pbnB1dC0tYmFyZSBpbnB1dC1jb250YWluZXJfX2lucHV0LS1sYXJnZSBpbnB1dC1jb250YWluZXJfX2lucHV0LS1zaG9ydEBhYm92ZS1hbHBoYScsXHJcbiAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lOiAnaW5wdXQtY29udGFpbmVyX19sYWJlbCcsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5wdXRCb3ggeyAuLi5wcm9wcyB9IC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaXRDaGFuY2VDb250cm9sbGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29tcG9zZSwgY3VycnksIG1hcCwgcHJvcCB9IGZyb20gJ3JhbWRhJ1xyXG5cclxuaW1wb3J0IEV4cGFuZGFibGUgZnJvbSAnY29tcG9uZW50cy9FeHBhbmRhYmxlJ1xyXG5pbXBvcnQgRmFkZU91dER1cmF0aW9uQ29udHJvbGxlciBmcm9tICdjb21wb25lbnRzL0ZhZGVPdXREdXJhdGlvbkNvbnRyb2xsZXInXHJcbmltcG9ydCBQaXRjaENvbnRyb2xsZXIgZnJvbSAnY29tcG9uZW50cy9QaXRjaENvbnRyb2xsZXInXHJcbmltcG9ydCBSZXBlYXRpbmdIaXRzQ29udHJvbGxlciBmcm9tICdjb21wb25lbnRzL1JlcGVhdGluZ0hpdHNDb250cm9sbGVyJ1xyXG5pbXBvcnQgU2VxdWVuY2VDb250cm9sbGVyIGZyb20gJ2NvbXBvbmVudHMvU2VxdWVuY2VDb250cm9sbGVyJ1xyXG5pbXBvcnQgU1ZHIGZyb20gJ2NvbXBvbmVudHMvU1ZHJ1xyXG5pbXBvcnQgVGFiZ3JvdXAsIHsgVGFicGFuZSB9IGZyb20gJ2NvbXBvbmVudHMvVGFiZ3JvdXAnXHJcbmltcG9ydCBWb2x1bWVDb250cm9sbGVyIGZyb20gJ2NvbXBvbmVudHMvVm9sdW1lQ29udHJvbGxlcidcclxuXHJcbmltcG9ydCBnZXRQZXJjZW50YWdlIGZyb20gJ21vZHVsZXMvZ2V0UGVyY2VudGFnZSdcclxuXHJcbmltcG9ydCB7IGdldEJ1ZmZlckZyb21VUkwsIHBsYXlTb3VuZFNpbXBsZSwgc3RvcFNvdXJjZSB9IGZyb20gJ3V0aWxzL2F1ZGlvJ1xyXG5pbXBvcnQgYXVkaW9Db250ZXh0IGZyb20gJ3V0aWxzL2F1ZGlvQ29udGV4dCdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgbG9nRXJyb3IgfSBmcm9tICd1dGlscy90b29scydcclxuXHJcbi8vICAgIGdldENhdGVnb3JpZXNGcm9tU291bmRzIDo6IFtjYXRdIC0+IHNvdW5kIC0+IFtjYXRdXHJcbmNvbnN0IGdldENhdGVnb3JpZXNGcm9tU291bmRzID0gKGNhdHMsIHNvdW5kKSA9PiB7XHJcbiAgICBpZiAoIWNhdHMuaW5jbHVkZXMoc291bmQuY2F0ZWdvcnkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uY2F0cyxcclxuICAgICAgICAgICAgc291bmQuY2F0ZWdvcnlcclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2F0c1xyXG59XHJcblxyXG5jb25zdCBQZXJjZW50YWdlVmlld2VyID0gKHsgYW1vdW50LCBvbkFtb3VudENoYW5nZSwgdG90YWxBbW91bnQgfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1LWZsZXgtcm93IHUtZmxleC1jZW50ZXIgZ3JvdXAtc3BhY2luZy14LW1lZFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnkgYnV0dG9uLXByaW1hcnktLXRpbnkgYnV0dG9uLXByaW1hcnktLXJvdW5kZWQgYnV0dG9uLXByaW1hcnktLWRhcmsgdS10eHQtc21hbGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFtb3VudENoYW5nZShhbW91bnQgLSAxID49IDAgPyBhbW91bnQgLSAxIDogMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93IGFycm93LS11cFwiPjwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtcGFkZGluZy15LW1lZCBncm91cC1wYWRkaW5nLXgtbWVkIHUtdy0zIHUtdGFjIHUtdHh0LXNtYWxsXCI+XHJcbiAgICAgICAgICAgIHtgJHtnZXRQZXJjZW50YWdlKHRvdGFsQW1vdW50LCBhbW91bnQpfSVgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnkgYnV0dG9uLXByaW1hcnktLXRpbnkgYnV0dG9uLXByaW1hcnktLXJvdW5kZWQgYnV0dG9uLXByaW1hcnktLWRhcmsgdS10eHQtc21hbGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFtb3VudENoYW5nZShhbW91bnQgKyAxKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgYXJyb3ctLWRvd25cIj48L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBTb3VuZFJvdyA9ICh7XHJcbiAgICBpbnN0cnVtZW50LFxyXG4gICAgaXNQbGF5aW5nLFxyXG4gICAgb25Tb3VuZEFtb3VudENoYW5nZSxcclxuICAgIG9uU291bmRQbGF5QnV0dG9uQ2xpY2ssXHJcbiAgICB0b3RhbFNvdW5kc0Ftb3VudCxcclxuICAgIHNvdW5kXHJcbn0pID0+IChcclxuICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJibG9jay1saXN0X19pdGVtIHUtZmxleC1yb3dcIlxyXG4gICAgICAgIGtleT17c291bmQuaWR9XHJcbiAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic291bmQtcm93X19pY29uIGdyb3VwLXBhZGRpbmcteS1tZWQgZ3JvdXAtcGFkZGluZy14LW1lZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNvdW5kUGxheUJ1dHRvbkNsaWNrKHNvdW5kKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTVkcgY2xhc3NOYW1lPVwic291bmQtcm93X19pY29uLXN2Z1wiIGljb249eyBpc1BsYXlpbmcgPyAnc3RvcCcgOiAncGxheScgfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAtcGFkZGluZy15LW1lZCBncm91cC1wYWRkaW5nLXgtbWVkIHUtcGwwIHUtdHh0LXNtYWxsIHUtZmxleC1ncm93LTFcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNvdW5kQW1vdW50Q2hhbmdlKHNvdW5kLmlkLCBpbnN0cnVtZW50LmlkLCBzb3VuZC5hbW91bnQgPT09IDAgPyAxIDogMCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZ2dsZS1pbnB1dCAke3NvdW5kLmFtb3VudCA/ICdpcy1lbmFibGVkJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAge2Ake3NvdW5kLmRlc2NyaXB0aW9uIHx8IHNvdW5kLmlkfWB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQZXJjZW50YWdlVmlld2VyXHJcbiAgICAgICAgICAgIGFtb3VudD17c291bmQuYW1vdW50fVxyXG4gICAgICAgICAgICB0b3RhbEFtb3VudD17dG90YWxTb3VuZHNBbW91bnR9XHJcbiAgICAgICAgICAgIG9uQW1vdW50Q2hhbmdlPXtvblNvdW5kQW1vdW50Q2hhbmdlKHNvdW5kLmlkLCBpbnN0cnVtZW50LmlkKX1cclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmNvbnN0IHJlbmRlclNvdW5kc0luQ2F0ZWdvcmllcyA9IGN1cnJ5KChpbnN0cnVtZW50LCBvblNvdW5kQW1vdW50Q2hhbmdlLCBvblNvdW5kUGxheUJ1dHRvbkNsaWNrLCBjdXJyZW50bHlQbGF5aW5nU291bmRJZCkgPT4gKGlkLCBjYXRJbmRleCwgYXJyKSA9PiB7XHJcbiAgICBjb25zdCBzb3VuZHMgPSBpbnN0cnVtZW50LnNvdW5kc1xyXG4gICAgICAgIC5maWx0ZXIoc291bmQgPT4gc291bmQuY2F0ZWdvcnkgPT09IGlkKVxyXG4gICAgY29uc3QgaXNFeHBhbmRlZCA9ICEhc291bmRzLmZpbmQoc291bmQgPT4gc291bmQuYW1vdW50KVxyXG4gICAgY29uc3QgdGl0bGUgPSBpZFxyXG4gICAgICAgIHx8IGAkeyhpbnN0cnVtZW50LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgfHwgY2FwaXRhbGl6ZShpbnN0cnVtZW50LmlkKSl9YFxyXG4gICAgY29uc3QgdG90YWxTb3VuZHNBbW91bnQgPSBpbnN0cnVtZW50LnNvdW5kc1xyXG4gICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBzb3VuZCkgPT4gdG90YWwgKyBzb3VuZC5hbW91bnQsIDApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RXhwYW5kYWJsZVxyXG4gICAgICAgICAgICB0aXRsZT17IHRpdGxlIH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICBleHBhbmRhYmxlLXBhbmVsXHJcbiAgICAgICAgICAgICAgICAke2NhdEluZGV4ICE9PSBhcnIubGVuZ3RoIC0gMSA/ICd1LW1iMDUnIDogJyd9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIHRpdGxlQ2xhc3NOYW1lPVwiZXhwYW5kYWJsZS1wYW5lbF9fdGl0bGVcIlxyXG4gICAgICAgICAgICBib2R5Q2xhc3NOYW1lPVwiZXhwYW5kYWJsZS1wYW5lbF9fYm9keVwiXHJcbiAgICAgICAgICAgIGlzRXhwYW5kZWQ9e2lzRXhwYW5kZWR9XHJcbiAgICAgICAgICAgIGtleT17Y2F0SW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWxpc3QgYmxvY2stbGlzdC0tY29tcGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgeyBzb3VuZHMubWFwKChzb3VuZCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTb3VuZFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydW1lbnQ9e2luc3RydW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUGxheWluZz17Y3VycmVudGx5UGxheWluZ1NvdW5kSWQgPT09IHNvdW5kLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvdW5kQW1vdW50Q2hhbmdlPXtvblNvdW5kQW1vdW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNvdW5kUGxheUJ1dHRvbkNsaWNrPXtvblNvdW5kUGxheUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFNvdW5kc0Ftb3VudD17dG90YWxTb3VuZHNBbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kPXtzb3VuZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSkgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0V4cGFuZGFibGU+XHJcbiAgICApXHJcbn0pXHJcblxyXG5jb25zdCBTb3VuZHNQYW5lID0gKHsgY3VycmVudGx5UGxheWluZ1NvdW5kSWQsIGluc3RydW1lbnQsIG9uU291bmRBbW91bnRDaGFuZ2UsIG9uU291bmRQbGF5QnV0dG9uQ2xpY2sgfSkgPT4ge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGluc3RydW1lbnQuc291bmRzXHJcbiAgICAgICAgLnJlZHVjZShnZXRDYXRlZ29yaWVzRnJvbVNvdW5kcywgW10pXHJcbiAgICAgICAgLm1hcChyZW5kZXJTb3VuZHNJbkNhdGVnb3JpZXMoaW5zdHJ1bWVudCwgb25Tb3VuZEFtb3VudENoYW5nZSwgb25Tb3VuZFBsYXlCdXR0b25DbGljaywgY3VycmVudGx5UGxheWluZ1NvdW5kSWQpKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyBjYXRlZ29yaWVzIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgcmVuZGVyU2VxdWVuY2VzUGFuZSA9IChpbnN0cnVtZW50LCBzZXF1ZW5jZXMsIHVwZGF0ZUluc3RydW1lbnRTZXF1ZW5jZXMpID0+IHtcclxuICAgIGNvbnN0IHJhbmRvbWlzZWRTZXF1ZW5jZXMgPSBzZXF1ZW5jZXNcclxuICAgICAgICAuZmlsdGVyKGIgPT4gYi5pZCAhPT0gJ3RvdGFsJylcclxuICAgICAgICAucmVkdWNlKChuZXdPYmosIGIpID0+ICh7XHJcbiAgICAgICAgICAgIC4uLm5ld09iaixcclxuICAgICAgICAgICAgW2IuaWRdOiB7IGRlc2NyaXB0aW9uOiBiLmRlc2NyaXB0aW9uLCBpZDogYi5pZCB9XHJcbiAgICAgICAgfSksIHt9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlcXVlbmNlQ29udHJvbGxlclxyXG4gICAgICAgICAgICBpbnN0cnVtZW50U2VxdWVuY2VzPXsgaW5zdHJ1bWVudC5zZXF1ZW5jZXMgfVxyXG4gICAgICAgICAgICByYW5kb21pc2VkU2VxdWVuY2VzPXsgcmFuZG9taXNlZFNlcXVlbmNlcyB9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdmFsID0+IHVwZGF0ZUluc3RydW1lbnRTZXF1ZW5jZXMoaW5zdHJ1bWVudC5pZCwgdmFsKSB9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgcmVuZGVyU2V0dGluZ3NQYW5lID0gKGluc3RydW1lbnQsIGFjdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IG9uRmFkZU91dER1cmF0aW9uVXBkYXRlID0gdmFsdWUgPT5cclxuICAgICAgICBhY3Rpb25zLnVwZGF0ZUluc3RydW1lbnRGYWRlT3V0RHVyYXRpb24oeyBpbnN0cnVtZW50SUQ6IGluc3RydW1lbnQuaWQsIHZhbHVlIH0pXHJcblxyXG4gICAgY29uc3Qgb25QaXRjaFVwZGF0ZSA9IHZhbHVlID0+XHJcbiAgICAgICAgYWN0aW9ucy51cGRhdGVJbnN0cnVtZW50UGl0Y2goeyBpbnN0cnVtZW50SUQ6IGluc3RydW1lbnQuaWQsIHZhbHVlIH0pXHJcblxyXG4gICAgY29uc3Qgb25SZXBlYXRpbmdIaXRzVXBkYXRlID0gdmFsdWUgPT5cclxuICAgICAgICBhY3Rpb25zLnVwZGF0ZUluc3RydW1lbnRSZXBlYXRpbmdIaXRzKHsgaW5zdHJ1bWVudElEOiBpbnN0cnVtZW50LmlkLCB2YWx1ZSB9KVxyXG5cclxuICAgIGNvbnN0IG9uSW5zdHJ1bWVudFZvbHVtZVVwZGF0ZSA9IHZhbHVlID0+XHJcbiAgICAgICAgYWN0aW9ucy51cGRhdGVJbnN0cnVtZW50Vm9sdW1lKHsgaW5zdHJ1bWVudElEOiBpbnN0cnVtZW50LmlkLCB2YWx1ZSB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LWZsZXgtcm93IHUtZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidS1tcjEgdS1tYjA1XCI+XHJcbiAgICAgICAgICAgICAgICA8Vm9sdW1lQ29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgIGluc3RydW1lbnRJRD17aW5zdHJ1bWVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICB2b2x1bWU9e2luc3RydW1lbnQudm9sdW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvbkluc3RydW1lbnRWb2x1bWVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LW1yMSB1LW1iMDVcIj5cclxuICAgICAgICAgICAgICAgIDxQaXRjaENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVtZW50SUQ9e2luc3RydW1lbnQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGl0Y2g9e2luc3RydW1lbnQucGl0Y2h9XHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uUGl0Y2hVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LW1yMSB1LW1iMDVcIj5cclxuICAgICAgICAgICAgICAgIDxSZXBlYXRpbmdIaXRzQ29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgIGluc3RydW1lbnRJRD17aW5zdHJ1bWVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICByZXBlYXRIaXRUeXBlRm9yWEJlYXQ9e2luc3RydW1lbnQucmVwZWF0SGl0VHlwZUZvclhCZWF0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblJlcGVhdGluZ0hpdHNVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZhZGVPdXREdXJhdGlvbkNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgIGluc3RydW1lbnRJRD17aW5zdHJ1bWVudC5pZH1cclxuICAgICAgICAgICAgICAgIGZhZGVPdXREdXJhdGlvbj17IGluc3RydW1lbnQuZmFkZU91dER1cmF0aW9uIH1cclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlPXsgb25GYWRlT3V0RHVyYXRpb25VcGRhdGUgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyAgICBnZXRCdWZmZXJVUkxGcm9tU291bmQgOjogc291bmQgLT4gSU8gQnVmZmVyXHJcbmNvbnN0IGdldEJ1ZmZlckZyb21Tb3VuZCA9IGNvbXBvc2UoXHJcbiAgICBnZXRCdWZmZXJGcm9tVVJMKGF1ZGlvQ29udGV4dCksXHJcbiAgICBwcm9wKCdwYXRoJyksXHJcbilcclxuXHJcbi8vICAgIHBsYXlJbnN0cnVtZW50U291bmQgOjogc291bmQgLT4gVGFzayBFcnJvciBzb3VyY2VcclxuY29uc3QgcGxheUluc3RydW1lbnRTb3VuZCA9IGNvbXBvc2UoXHJcbiAgICBtYXAoc291bmQgPT4gc291bmQucnVuSU8oKSksXHJcbiAgICBtYXAocGxheVNvdW5kU2ltcGxlKGF1ZGlvQ29udGV4dCkpLFxyXG4gICAgZ2V0QnVmZmVyRnJvbVNvdW5kLFxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjdXJyZW50bHlQbGF5aW5nU291bmRJZDogbnVsbCxcclxuICAgICAgICBjdXJyZW50U291cmNlOiBudWxsLFxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U3RhdGUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjdXJyZW50bHlQbGF5aW5nU291bmRJZDogbnVsbCxcclxuICAgICAgICBjdXJyZW50U291cmNlOiBudWxsXHJcbiAgICB9KVxyXG5cclxuICAgIHN0b3BDdXJyZW50U291cmNlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudFNvdXJjZSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgICAgIGlmIChjdXJyZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgIHN0b3BTb3VyY2UoY3VycmVudFNvdXJjZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Tb3VuZEFtb3VudENoYW5nZSA9IGN1cnJ5KChzb3VuZElELCBwYXJlbnRJRCwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9ICdhbW91bnQnXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNvdW5kQW1vdW50Q2hhbmdlKHsgc291bmRJRCwgcGFyZW50SUQsIHByb3A6IHByb3BlcnR5LCB2YWx1ZSB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBvblNvdW5kUGxheUJ1dHRvbkNsaWNrID0gKHNvdW5kKSA9PiB7XHJcbiAgICAgICAgaWYgKHNvdW5kLmlkID09PSB0aGlzLnN0YXRlLmN1cnJlbnRseVBsYXlpbmdTb3VuZElkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEN1cnJlbnRTb3VyY2UoKVxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgcGxheUluc3RydW1lbnRTb3VuZChzb3VuZClcclxuICAgICAgICAgICAgLmZvcmsobG9nRXJyb3IsIChzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEN1cnJlbnRTb3VyY2UoKVxyXG4gICAgICAgICAgICAgICAgc291cmNlLm9uZW5kZWQgPSB0aGlzLnJlc2V0U3RhdGVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVBsYXlpbmdTb3VuZElkOiBzb3VuZC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U291cmNlOiBzb3VyY2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aW9ucywgaW5zdHJ1bWVudHMsIHNlcXVlbmNlcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IGluc3RydW1lbnRWaWV3cyA9IGluc3RydW1lbnRzXHJcbiAgICAgICAgICAgIC5tYXAoKGluc3RydW1lbnQsIGluZGV4LCBpbnN0QXJyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aW5kZXggPCBpbnN0QXJyLmxlbmd0aCAtIDEgPyAndS1tYjInIDogJyd9YH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlLXNlY29uZGFyeSB1LW1iMDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luc3RydW1lbnQuZGVzY3JpcHRpb24gfHwgaW5zdHJ1bWVudC5pZH1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnBhbmUgdGl0bGU9XCJTb3VuZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTb3VuZHNQYW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydW1lbnQ9e2luc3RydW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU291bmRBbW91bnRDaGFuZ2U9e3RoaXMub25Tb3VuZEFtb3VudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3VuZFBsYXlCdXR0b25DbGljaz17dGhpcy5vblNvdW5kUGxheUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlQbGF5aW5nU291bmRJZD17dGhpcy5zdGF0ZS5jdXJyZW50bHlQbGF5aW5nU291bmRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYnBhbmUgdGl0bGU9XCJTZXF1ZW5jZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVuZGVyU2VxdWVuY2VzUGFuZShpbnN0cnVtZW50LCBzZXF1ZW5jZXMsIGFjdGlvbnMudXBkYXRlSW5zdHJ1bWVudFNlcXVlbmNlcykgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJwYW5lIHRpdGxlPVwiU2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVuZGVyU2V0dGluZ3NQYW5lKGluc3RydW1lbnQsIGFjdGlvbnMpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJwYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAge2luc3RydW1lbnRWaWV3c31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBnZXRBYnNvbHV0ZVBhdGggZnJvbSAnbW9kdWxlcy9nZXRBYnNvbHV0ZVBhdGgnXHJcbmltcG9ydCBnZXRQZXJjZW50YWdlIGZyb20gJ21vZHVsZXMvZ2V0UGVyY2VudGFnZSdcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ3V0aWxzL3Rvb2xzJ1xyXG5cclxuY29uc3QgZ2V0TmV3QWxsb3dlZExlbmd0aCA9IChhbGxvd2VkTGVuZ3RoLCBwcm9wLCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3T2JqID0geyAuLi5hbGxvd2VkTGVuZ3RoIH1cclxuICAgIG5ld09ialtwcm9wXSA9IHZhbHVlXHJcbiAgICByZXR1cm4gbmV3T2JqXHJcbn1cclxuXHJcbmNvbnN0IGFic29sdXRlUGF0aCA9IGdldEFic29sdXRlUGF0aCgpXHJcblxyXG5jbGFzcyBOb3RlUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgb25MZW5ndGhBbW91bnRDaGFuZ2UgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IGFtb3VudCB9ID0gbGVuZ3RoXHJcbiAgICAgICAgY29uc3QgbmV3QW1vdW50ID0gYW1vdW50ICsgdmFsdWVcclxuXHJcbiAgICAgICAgaWYgKG5ld0Ftb3VudCA8IDApIHJldHVyblxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUFsbG93ZWRMZW5ndGgobGVuZ3RoLCAnYW1vdW50JywgbmV3QW1vdW50KVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW9kaWZpZXJDbGljayA9IChtMSwgbTIpID0+IHtcclxuICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gIWxlbmd0aFttMV1cclxuICAgICAgICBsZXQgbmV3QWxsb3dlZExlbmd0aCA9IGdldE5ld0FsbG93ZWRMZW5ndGgobGVuZ3RoLCBtMSwgbmV3VmFsdWUpXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICYmIGxlbmd0aFttMl0pIHtcclxuICAgICAgICAgICAgbmV3QWxsb3dlZExlbmd0aCA9IGdldE5ld0FsbG93ZWRMZW5ndGgobmV3QWxsb3dlZExlbmd0aCwgbTIsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKG5ld0FsbG93ZWRMZW5ndGgpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWxsb3dlZExlbmd0aCA9IChsZW5ndGgsIHByb3AsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3QWxsb3dlZExlbmd0aCA9IGdldE5ld0FsbG93ZWRMZW5ndGgobGVuZ3RoLCBwcm9wLCB2YWx1ZSlcclxuICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKG5ld0FsbG93ZWRMZW5ndGgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoLCB0b3RhbEFtb3VudCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IG5vdGVOYW1lID0gYCR7Y2FwaXRhbGl6ZShsZW5ndGgubmFtZSl9IG5vdGVgXHJcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHRvdGFsQW1vdW50ID8gZ2V0UGVyY2VudGFnZSh0b3RhbEFtb3VudCwgbGVuZ3RoLmFtb3VudCkgOiAwXHJcbiAgICAgICAgY29uc3QgaXNPbiA9IGxlbmd0aC5hbW91bnQgPiAwXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbm90ZS1wYW5lbCAke2lzT24gPyAnJyA6ICdub3RlLXBhbmVsLS1kaXNhYmxlZCd9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm5vdGUtcGFuZWxfX3N2Z1wiIHNyYz17YCR7YWJzb2x1dGVQYXRofWFzc2V0cy9pbWFnZXMvbm90ZXMvJHtsZW5ndGgubmFtZX0uc3ZnYH0gYWx0PXtub3RlTmFtZX0gdGl0bGU9e25vdGVOYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RlLXBhbmVsX19hbW91bnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90ZS1wYW5lbF9fYW1vdW50XCIgdGl0bGU9XCJDaGFuY2VcIj57cGVyY2VudGFnZX0lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZS1wYW5lbF9fYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YG5vdGUtcGFuZWxfX2J0biBub3RlLXBhbmVsX19idG4tLSR7bGVuZ3RoLm5hbWV9IG5vdGUtcGFuZWxfX2J0bi0tdXBgfSB0aXRsZT1cIkluY3JlYXNlIGNoYW5jZVwiIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkxlbmd0aEFtb3VudENoYW5nZShlLCAxKX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbm90ZS1wYW5lbF9fYnRuIG5vdGUtcGFuZWxfX2J0bi0tJHtsZW5ndGgubmFtZX0gbm90ZS1wYW5lbF9fYnRuLS1kb3duYH0gdGl0bGU9XCJEZWNyZWFzZSBjaGFuY2VcIiBvbkNsaWNrPXtlID0+IHRoaXMub25MZW5ndGhBbW91bnRDaGFuZ2UoZSwgLTEpfT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RlLXBhbmVsX19jaGVja2JveC1jb250YWluZXIgdS1mbGV4LXJvdyB1LWZsZXgtanVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZ2dsZS1pbnB1dCB0b2dnbGUtaW5wdXQtLXRyaXBsZXQgdS10eHQtc21hbGwgdS10eHQtbGlnaHQgJHtsZW5ndGguaXNUcmlwbGV0ID8gJ2lzLWVuYWJsZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gdGhpcy5vbk1vZGlmaWVyQ2xpY2soJ2lzVHJpcGxldCcsICdpc0RvdHRlZCcpfSA+VHJpcGxldDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZ2dsZS1pbnB1dCB0b2dnbGUtaW5wdXQtLWRvdHRlZCB1LXR4dC1zbWFsbCB1LXR4dC1saWdodCAke2xlbmd0aC5pc0RvdHRlZCA/ICdpcy1lbmFibGVkJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHRoaXMub25Nb2RpZmllckNsaWNrKCdpc0RvdHRlZCcsICdpc1RyaXBsZXQnKX0gPkRvdHRlZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGVQYW5lbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbnB1dEJveCBmcm9tICdjb21wb25lbnRzL0lucHV0Qm94J1xyXG5cclxuY2xhc3MgUGl0Y2hDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IG5leHRQcm9wcyA9PiBuZXh0UHJvcHMucGl0Y2ggIT09IHRoaXMucHJvcHMucGl0Y2hcclxuXHJcbiAgICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkgKiAxMDApXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnUGl0Y2gnLFxyXG4gICAgICAgICAgICBpZDogYHBpdGNoLSR7dGhpcy5wcm9wcy5pbnN0cnVtZW50SUR9YCxcclxuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5waXRjaCA/IHRoaXMucHJvcHMucGl0Y2ggLyAxMDAgOiAwLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcclxuICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgbWluVmFsOiAtMTIsXHJcbiAgICAgICAgICAgIG1heFZhbDogMTIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2lucHV0LWNvbnRhaW5lcl9faW5wdXQgaW5wdXQtY29udGFpbmVyX19pbnB1dC0tYmFyZSBpbnB1dC1jb250YWluZXJfX2lucHV0LS1sYXJnZSBpbnB1dC1jb250YWluZXJfX2lucHV0LS1zaG9ydEBhYm92ZS1hbHBoYScsXHJcbiAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lOiAnaW5wdXQtY29udGFpbmVyX19sYWJlbCcsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dEJveCB7IC4uLnByb3BzIH0gLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpdGNoQ29udHJvbGxlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyYW1kYSdcclxuaW1wb3J0IHsgZ2V0VGFyZ2V0VmFsdWVGcm9tRXZlbnQgfSBmcm9tICdtb2R1bGVzL2V2ZW50cydcclxuXHJcbmltcG9ydCBJbnB1dEJveCBmcm9tICdjb21wb25lbnRzL0lucHV0Qm94J1xyXG5pbXBvcnQgeyByb3VuZFRvWFBsYWNlcyB9IGZyb20gJ3V0aWxzL3Rvb2xzJ1xyXG5cclxuY2xhc3MgUmVwZWF0aW5nSGl0c0NvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gbmV4dFByb3BzID0+IG5leHRQcm9wcy5yZXBlYXRIaXRUeXBlRm9yWEJlYXQgIT09IHRoaXMucHJvcHMucmVwZWF0SGl0VHlwZUZvclhCZWF0XHJcblxyXG4gICAgb25DaGFuZ2UgPSBjb21wb3NlKFxyXG4gICAgICAgIHRoaXMucHJvcHMub25VcGRhdGUsXHJcbiAgICAgICAgcm91bmRUb1hQbGFjZXMoMSksXHJcbiAgICAgICAgZ2V0VGFyZ2V0VmFsdWVGcm9tRXZlbnQsXHJcbiAgICApXHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1JlcGVhdGluZyBIaXRzJyxcclxuICAgICAgICAgICAgbGFiZWxUaXRsZTogJ0VhY2ggc2FtcGxlIHdpbGwgcmVwZWF0IGZvciB4IG51bWJlciBvZiBiZWF0cycsXHJcbiAgICAgICAgICAgIGlkOiBgcmVwZWF0SGl0VHlwZUZvclhCZWF0LSR7dGhpcy5wcm9wcy5pbnN0cnVtZW50SUR9YCxcclxuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5yZXBlYXRIaXRUeXBlRm9yWEJlYXQgPyB0aGlzLnByb3BzLnJlcGVhdEhpdFR5cGVGb3JYQmVhdCA6IDAsXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxyXG4gICAgICAgICAgICBzdGVwOiAwLjUsXHJcbiAgICAgICAgICAgIG1pblZhbDogMCxcclxuICAgICAgICAgICAgbWF4VmFsOiAyMDAsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2lucHV0LWNvbnRhaW5lcl9faW5wdXQgaW5wdXQtY29udGFpbmVyX19pbnB1dC0tYmFyZSBpbnB1dC1jb250YWluZXJfX2lucHV0LS1sYXJnZSBpbnB1dC1jb250YWluZXJfX2lucHV0LS1zaG9ydEBhYm92ZS1hbHBoYScsXHJcbiAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lOiAnaW5wdXQtY29udGFpbmVyX19sYWJlbCcsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dEJveCB7IC4uLnByb3BzIH0gLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGVhdGluZ0hpdHNDb250cm9sbGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgcHJlZGVmaW5lZFNlcXVlbmNlcyB9IGZyb20gJ3V0aWxzL3NlcXVlbmNlcydcclxuXHJcbmNsYXNzIFNlcXVlbmNlQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBvblNlcXVlbmNlQ2xpY2sgPSAoeyBlbmFibGVkU2VxdWVuY2VzLCBzZXF1ZW5jZUlEIH0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGVuYWJsZWRTZXF1ZW5jZXMuaW5kZXhPZihzZXF1ZW5jZUlEKVxyXG4gICAgICAgIGNvbnN0IG5ld0luc3RydW1lbnRTZXF1ZW5jZXMgPSBpbmRleCA+IC0xXHJcbiAgICAgICAgICAgID8gWyAuLi5lbmFibGVkU2VxdWVuY2VzLnNsaWNlKDAsIGluZGV4KSwgLi4uZW5hYmxlZFNlcXVlbmNlcy5zbGljZShpbmRleCArIDEsIGVuYWJsZWRTZXF1ZW5jZXMubGVuZ3RoKSBdXHJcbiAgICAgICAgICAgIDogWyAuLi5lbmFibGVkU2VxdWVuY2VzLCBzZXF1ZW5jZUlEIF1cclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld0luc3RydW1lbnRTZXF1ZW5jZXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2VxdWVuY2VzID0gKHNlcXVlbmNlcywgZW5hYmxlZFNlcXVlbmNlcykgPT5cclxuICAgICAgICBPYmplY3Qua2V5cyhzZXF1ZW5jZXMpXHJcbiAgICAgICAgICAgIC5tYXAoKHNlcXVlbmNlSUQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlID0gc2VxdWVuY2VzW3NlcXVlbmNlSURdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0VuYWJsZWQgPSBlbmFibGVkU2VxdWVuY2VzLmluY2x1ZGVzKHNlcXVlbmNlSUQpXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZ2dsZS1pbnB1dCB1LXR4dC1zbWFsbCAke2lzRW5hYmxlZCA/ICdpcy1lbmFibGVkJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHRoaXMub25TZXF1ZW5jZUNsaWNrKHsgZW5hYmxlZFNlcXVlbmNlcywgc2VxdWVuY2VJRCB9KX0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzZXF1ZW5jZS5kZXNjcmlwdGlvbiA/IHVuZXNjYXBlKHNlcXVlbmNlLmRlc2NyaXB0aW9uKSA6IHNlcXVlbmNlLmlkIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LW1iMVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtc2Vjb25kYXJ5IHUtbWIwNVwiPlJhbmRvbWlzZWQgU2VxdWVuY2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlclNlcXVlbmNlcyh0aGlzLnByb3BzLnJhbmRvbWlzZWRTZXF1ZW5jZXMsIFsgLi4udGhpcy5wcm9wcy5pbnN0cnVtZW50U2VxdWVuY2VzIF0pIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1zZWNvbmRhcnkgdS1tYjA1XCI+UHJlZGVmaW5lZCBTZXF1ZW5jZXM8L3A+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyU2VxdWVuY2VzKHByZWRlZmluZWRTZXF1ZW5jZXMsIFsgLi4udGhpcy5wcm9wcy5pbnN0cnVtZW50U2VxdWVuY2VzIF0pIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcXVlbmNlQ29udHJvbGxlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBUYWJncm91cCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBhY3RpdmVUYWJJbmRleDogMCxcclxuICAgIH1cclxuICAgIHRhYnMgPSBbXVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jaGlsZHJlbikgPyB0aGlzLnByb3BzLmNoaWxkcmVuIDogW3RoaXMucHJvcHMuY2hpbGRyZW5dXHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUYWIoY2hpbGRyZW4pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlVGFiID0gKGNoaWxkcmVuKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiID0gY2hpbGRyZW5cclxuICAgICAgICAgICAgLmZpbmQocGFuZSA9PiBwYW5lLnByb3BzLmlzQWN0aXZlKVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYkluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihhY3RpdmVUYWIpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBhY3RpdmVUYWJJbmRleDogYWN0aXZlVGFiSW5kZXggPiAtMSA/IGFjdGl2ZVRhYkluZGV4IDogMFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25UYWJDbGljayA9IGluZGV4ID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVUYWJJbmRleDogaW5kZXggfSlcclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pID8gdGhpcy5wcm9wcy5jaGlsZHJlbiA6IFt0aGlzLnByb3BzLmNoaWxkcmVuXVxyXG4gICAgICAgIGNvbnN0IHRhYnBhbmVzID0gY2hpbGRyZW5cclxuICAgICAgICAgICAgLm1hcCgocGFuZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17YHRhYmdyb3VwX19wYW5lICR7aSA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWJJbmRleCA/ICdpcy1hY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYW5lIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIGNvbnN0IHRhYnMgPSBjaGlsZHJlblxyXG4gICAgICAgICAgICAubWFwKChwYW5lLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgdGFiZ3JvdXBfX3RhYiAke2kgPT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiSW5kZXggPyAnaXMtYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHRoaXMub25UYWJDbGljayhpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwYW5lLnByb3BzLnRpdGxlIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cInRhYnNcIiBjbGFzc05hbWU9XCJ0YWJncm91cF9fdGFiLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGFicyB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiZ3JvdXBfX3BhbmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0YWJwYW5lcyB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBUYWJwYW5lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJncm91cFxyXG5leHBvcnQge1xyXG4gICAgVGFicGFuZVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBJbnB1dEJveCBmcm9tICdjb21wb25lbnRzL0lucHV0Qm94J1xyXG5cclxuY2xhc3MgVm9sdW1lQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUgPSBuZXh0UHJvcHMgPT4gbmV4dFByb3BzLnZvbHVtZSAhPT0gdGhpcy5wcm9wcy52b2x1bWVcclxuXHJcbiAgICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpIC8gMTAwXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnVm9sdW1lICUnLFxyXG4gICAgICAgICAgICBpZDogYHZvbHVtZS0ke3RoaXMucHJvcHMuaW5zdHJ1bWVudElEfWAsXHJcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHR5cGVvZiB0aGlzLnByb3BzLnZvbHVtZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnByb3BzLnZvbHVtZSAqIDEwMCA6IDEwMCxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2UsXHJcbiAgICAgICAgICAgIHN0ZXA6IDEwLFxyXG4gICAgICAgICAgICBtaW5WYWw6IDAsXHJcbiAgICAgICAgICAgIG1heFZhbDogMTAwLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdpbnB1dC1jb250YWluZXJfX2lucHV0IGlucHV0LWNvbnRhaW5lcl9faW5wdXQtLWJhcmUgaW5wdXQtY29udGFpbmVyX19pbnB1dC0tbGFyZ2UgaW5wdXQtY29udGFpbmVyX19pbnB1dC0tc2hvcnRAYWJvdmUtYWxwaGEnLFxyXG4gICAgICAgICAgICBsYWJlbENsYXNzTmFtZTogJ2lucHV0LWNvbnRhaW5lcl9fbGFiZWwnLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPElucHV0Qm94IHsgLi4ucHJvcHMgfSAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVm9sdW1lQ29udHJvbGxlclxyXG4iLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IEluc3RydW1lbnRzIGZyb20gJ3JvdXRlcy9JbnN0cnVtZW50cydcclxuXHJcbmltcG9ydCAqIGFzIGluc3RydW1lbnRzQWN0aW9ucyBmcm9tICdhY3Rpb25zL2luc3RydW1lbnRzJ1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHNlcXVlbmNlcyAgIDogc3RhdGUuc2VxdWVuY2VzLFxyXG4gICAgaW5zdHJ1bWVudHMgOiBzdGF0ZS5pbnN0cnVtZW50cyxcclxufSlcclxuXHJcbmNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICAuLi5pbnN0cnVtZW50c0FjdGlvbnMsXHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgLi4uYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKVxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5zdHJ1bWVudHMpXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCAqIGFzIHNlcXVlbmNlc0FjdGlvbnMgZnJvbSAnYWN0aW9ucy9zZXF1ZW5jZXMnXHJcbmltcG9ydCAqIGFzIG1vZGFsQWN0aW9ucyBmcm9tICdhY3Rpb25zL21vZGFsJ1xyXG5cclxuaW1wb3J0IEFsbG93ZWRMZW5ndGhzQ29udHJvbGxlciBmcm9tICdjb21wb25lbnRzL0FsbG93ZWRMZW5ndGhzQ29udHJvbGxlcidcclxuaW1wb3J0IEJlYXRzQ29udHJvbGxlciAgICAgICAgICBmcm9tICdjb21wb25lbnRzL0JlYXRzQ29udHJvbGxlcidcclxuaW1wb3J0IEhpdENoYW5jZUNvbnRyb2xsZXIgICAgICBmcm9tICdjb21wb25lbnRzL0hpdENoYW5jZUNvbnRyb2xsZXInXHJcbmltcG9ydCBJbnB1dEJveCAgICAgICAgICAgICAgICAgZnJvbSAnY29tcG9uZW50cy9JbnB1dEJveCdcclxuaW1wb3J0IFRhYmdyb3VwLCB7IFRhYnBhbmUgfSAgICBmcm9tICdjb21wb25lbnRzL1RhYmdyb3VwJ1xyXG5cclxuY2xhc3MgU2VxdWVuY2VQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBvbkhpdENoYW5jZUNoYW5nZSA9IChoaXRDaGFuY2UpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudXBkYXRlU2VxdWVuY2UodGhpcy5wcm9wcy5zZXF1ZW5jZS5pZCwgJ2hpdENoYW5jZScsIGhpdENoYW5jZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkFsbG93ZWRMZW5ndGhzQ2hhbmdlID0gKGFsbG93ZWRMZW5ndGhzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnVwZGF0ZVNlcXVlbmNlKHRoaXMucHJvcHMuc2VxdWVuY2UuaWQsICdhbGxvd2VkTGVuZ3RocycsIGFsbG93ZWRMZW5ndGhzKVxyXG4gICAgfVxyXG5cclxuICAgIGxhdW5jaERlbGV0ZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aW9ucywgc2VxdWVuY2UgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBvbkRlbGV0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25zLmRlbGV0ZVNlcXVlbmNlKHNlcXVlbmNlLmlkKVxyXG4gICAgICAgICAgICBhY3Rpb25zLmRpc2FibGVNb2RhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1wcmltYXJ5LS1zbWFsbCBidXR0b24tcHJpbWFyeS0tbmVnYXRpdmUgdS1tcjA1XCIgb25DbGljaz17IG9uRGVsZXRlQ2xpY2sgfSA+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1wcmltYXJ5LS1zbWFsbFwiIG9uQ2xpY2s9eyBhY3Rpb25zLmRpc2FibGVNb2RhbCB9ID5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAnJHt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufT8nYFxyXG4gICAgICAgIGFjdGlvbnMuZW5hYmxlTW9kYWwoeyBjb250ZW50LCBpc0Nsb3NlYWJsZTogdHJ1ZSwgdGl0bGU6IG1vZGFsVGl0bGUgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1LWZsZXgtcm93IHUtZmxleC1qdXN0aWZ5IHUtZmxleC1lbmQgdS1tYjA1XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidS1tcjA1XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHNlcXVlbmNlLW5hbWUtJHt0aGlzLnByb3BzLnNlcXVlbmNlLmlkfWB9IGNsYXNzTmFtZT1cInUtdmlzdWFsbHktaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VxdWVuY2UgVGl0bGVcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRCb3hcclxuICAgICAgICAgICAgICAgICAgICBpZD17YHNlcXVlbmNlLW5hbWUtJHt0aGlzLnByb3BzLnNlcXVlbmNlLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuYWN0aW9ucy51cGRhdGVTZXF1ZW5jZURlc2NyaXB0aW9uKHRoaXMucHJvcHMuc2VxdWVuY2UuaWQsIGVzY2FwZShlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQtY29udGFpbmVyX19pbnB1dCBpbnB1dC1jb250YWluZXJfX2lucHV0LS1iYXJlIGlucHV0LWNvbnRhaW5lcl9faW5wdXQtLWxhcmdlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3NOYW1lPSdpbnB1dC1jb250YWluZXJfX2xhYmVsJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNEZWxldGFibGUgJiZcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1wcmltYXJ5LS10aW55IGJ1dHRvbi1wcmltYXJ5LS1uZWdhdGl2ZVwiIG9uQ2xpY2s9eyB0aGlzLmxhdW5jaERlbGV0ZU1vZGFsIH0gPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJIZWFkZXIoKSB9XHJcblxyXG4gICAgICAgICAgICA8VGFiZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8VGFicGFuZSB0aXRsZT1cIk5vdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFsbG93ZWRMZW5ndGhzQ29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZT17IHRoaXMub25BbGxvd2VkTGVuZ3Roc0NoYW5nZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZWRMZW5ndGhzPXt0aGlzLnByb3BzLnNlcXVlbmNlLmFsbG93ZWRMZW5ndGhzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidS1mbGV4LXJvdyB1LWZsZXgtcm93IHUtZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidS1tcjJAYWJvdmUtYWxwaGEgdS1tYjA1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmVhdHNDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9eyB0aGlzLnByb3BzLmFjdGlvbnMudXBkYXRlU2VxdWVuY2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcXVlbmNlPXsgdGhpcy5wcm9wcy5zZXF1ZW5jZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpdENoYW5jZUNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdENoYW5jZT17IHRoaXMucHJvcHMuc2VxdWVuY2UuaGl0Q2hhbmNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXsgdGhpcy5vbkhpdENoYW5jZUNoYW5nZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYnBhbmU+XHJcbiAgICAgICAgICAgIDwvVGFiZ3JvdXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICAuLi5zZXF1ZW5jZXNBY3Rpb25zLFxyXG4gICAgLi4ubW9kYWxBY3Rpb25zLFxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAgIC4uLmJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZXF1ZW5jZVBhbmVsKVxyXG4iLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IFNlcXVlbmNlcyBmcm9tICdyb3V0ZXMvU2VxdWVuY2VzJ1xyXG5cclxuaW1wb3J0IHsgYWRkU2VxdWVuY2UgfSBmcm9tICdhY3Rpb25zL3NlcXVlbmNlcydcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBzZXF1ZW5jZXMgOiBzdGF0ZS5zZXF1ZW5jZXMsXHJcbn0pXHJcblxyXG5jb25zdCBhY3Rpb25zID0ge1xyXG4gICAgYWRkU2VxdWVuY2VcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAuLi5iaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTZXF1ZW5jZXMpXHJcbiIsImltcG9ydCB7IGNvbXBvc2UsIGN1cnJ5IH0gZnJvbSAncmFtZGEnXHJcblxyXG4vLyAgICBnZXRQZXJjZW50YWdlIDo6IEludCAtPiBJbnQgLT4gSW50XHJcbmNvbnN0IGdldFBlcmNlbnRhZ2UgPSBjdXJyeSgodG90YWwsIGFtb3VudCkgPT4gdG90YWwgIT09IDBcclxuICAgID8gTWF0aC5mbG9vcigoYW1vdW50IC8gdG90YWwpICogMTAwMCkgLyAxMFxyXG4gICAgOiAwKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0UGVyY2VudGFnZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbnN0cnVtZW50TGlzdCBmcm9tICdjb21wb25lbnRzL0luc3RydW1lbnRMaXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5wcm9wcy5jbGFzc05hbWUgfT5cclxuICAgICAgICAgICAgPEluc3RydW1lbnRMaXN0XHJcbiAgICAgICAgICAgICAgICBvblNvdW5kQW1vdW50Q2hhbmdlPXsgdGhpcy5wcm9wcy5hY3Rpb25zLnVwZGF0ZUluc3RydW1lbnRTb3VuZCB9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW5zdHJ1bWVudFBpdGNoOiB0aGlzLnByb3BzLmFjdGlvbnMudXBkYXRlSW5zdHJ1bWVudFBpdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUluc3RydW1lbnRWb2x1bWU6IHRoaXMucHJvcHMuYWN0aW9ucy51cGRhdGVJbnN0cnVtZW50Vm9sdW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUluc3RydW1lbnRSZXBlYXRpbmdIaXRzOiB0aGlzLnByb3BzLmFjdGlvbnMudXBkYXRlSW5zdHJ1bWVudFJlcGVhdGluZ0hpdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW5zdHJ1bWVudFNlcXVlbmNlczogdGhpcy5wcm9wcy5hY3Rpb25zLnVwZGF0ZUluc3RydW1lbnRTZXF1ZW5jZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW5zdHJ1bWVudEZhZGVPdXREdXJhdGlvbjogdGhpcy5wcm9wcy5hY3Rpb25zLnVwZGF0ZUluc3RydW1lbnRGYWRlT3V0RHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc2VxdWVuY2VzPXt0aGlzLnByb3BzLnNlcXVlbmNlc31cclxuICAgICAgICAgICAgICAgIGluc3RydW1lbnRzPXt0aGlzLnByb3BzLmluc3RydW1lbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlcXVlbmNlUGFuZWwgZnJvbSAnY29udGFpbmVycy9TZXF1ZW5jZVBhbmVsJ1xyXG5cclxuY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBzZXF1ZW5jZSA9PiBzZXF1ZW5jZS5kZXNjcmlwdGlvbiA/IHVuZXNjYXBlKHNlcXVlbmNlLmRlc2NyaXB0aW9uKSA6IHNlcXVlbmNlLmlkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc2VxdWVuY2VzID0gW11cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25TZXF1ZW5jZXModGhpcy5wcm9wcy5zZXF1ZW5jZXMpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSA9IChuZXh0UHJvcHMpID0+IHtcclxuICAgICAgICB0aGlzLmFzc2lnblNlcXVlbmNlcyhuZXh0UHJvcHMuc2VxdWVuY2VzKVxyXG4gICAgfVxyXG5cclxuICAgIGFzc2lnblNlcXVlbmNlcyA9IChzZXF1ZW5jZXMpID0+IHtcclxuICAgICAgICB0aGlzLnNlcXVlbmNlcyA9IHNlcXVlbmNlc1xyXG4gICAgICAgICAgICAuZmlsdGVyKHNlcXVlbmNlID0+IHNlcXVlbmNlLmlkICE9PSAndG90YWwnKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld1NlcXVlbmNlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5hZGRTZXF1ZW5jZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHRoaXMuc2VxdWVuY2VzXHJcbiAgICAgICAgICAgIC5tYXAoKHNlcXVlbmNlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtgZ3JvdXAtcGFkZGluZy15ICR7aSA9PT0gMCA/ICd1LXB0MCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VxdWVuY2VQYW5lbCBzZXF1ZW5jZT17IHNlcXVlbmNlIH0gZGVzY3JpcHRpb249eyBnZXREZXNjcmlwdGlvbihzZXF1ZW5jZSkgfSBpc0RlbGV0YWJsZT17aSAhPT0gMH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFNlcXVlbmNlQnV0dG9uID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIDwgNiAmJlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1wcmltYXJ5LS1mdWxsIGJ1dHRvbi1wcmltYXJ5LS1nYW1tYVwiIG9uQ2xpY2s9e3RoaXMuYWRkTmV3U2VxdWVuY2V9PkFkZCBTZXF1ZW5jZTwvYnV0dG9uPlxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMucHJvcHMuY2xhc3NOYW1lIH0+XHJcbiAgICAgICAgICAgICAgICB7IHNlcXVlbmNlcyB9XHJcbiAgICAgICAgICAgICAgICB7IGFkZFNlcXVlbmNlQnV0dG9uIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=