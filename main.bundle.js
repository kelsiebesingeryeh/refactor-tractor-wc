/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_search_hover_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/search-hover.png */ "./src/images/search-hover.png");
/* harmony import */ var _images_plus_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/plus.png */ "./src/images/plus.png");
/* harmony import */ var _images_checkmark_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/checkmark.png */ "./src/images/checkmark.png");
/* harmony import */ var _images_star_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/star.png */ "./src/images/star.png");
/* harmony import */ var _images_star_filled_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/star-filled.png */ "./src/images/star-filled.png");
/* harmony import */ var _images_hamburger_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/hamburger.png */ "./src/images/hamburger.png");
// Imports











var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_search_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_search_hover_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_plus_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_checkmark_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_star_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_star_filled_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_hamburger_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".navButton {\n  background-color: #FFF;\n  border: none;\n  color: #51364C;\n  cursor: pointer;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 130%;\n  margin: 1%; }\n\n.search-button {\n  background-color: #FFF;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 60px;\n  width: 60px;\n  border: none;\n  margin-right: 11px;\n  margin-top: 11px; }\n  .search-button:hover {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    cursor: pointer; }\n\n.card-button {\n  border: none;\n  cursor: pointer;\n  height: 27px;\n  margin: 3px; }\n\n.card-button:hover,\n.navButton:hover {\n  border-bottom: 10px solid #E95E3E; }\n\n.search-image:active,\n.card-button:active,\n.navButton:active,\n.search-button:active {\n  background-color: #FBF9F3; }\n\n.search-input {\n  border: 1px solid #51364C;\n  border-radius: 10px;\n  font-family: \"Poppins\", sans-serif, sans-serif;\n  font-size: 100%;\n  height: 7vh;\n  margin: 3px 7px 0px 0px;\n  padding-left: 10px;\n  width: 90%; }\n\n.add-button {\n  background-color: #E95E3E;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 30px;\n  width: 30px; }\n\n.add-active {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "); }\n\n.favorite {\n  background-color: #E95E3E;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 40px;\n  width: 40px; }\n\n.favorite-active {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "); }\n\n.view-details,\n.add-ingredients-to-pantry,\n.cook-recipe-button {\n  background-color: #E95E3E;\n  border: none;\n  border-radius: .25rem;\n  color: #FFF;\n  cursor: pointer;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: bold;\n  padding: 7px;\n  margin-bottom: 0.9rem;\n  width: 50%; }\n\n.disabled {\n  background-color: #a18e9d;\n  cursor: not-allowed; }\n\n.card {\n  box-shadow: 0px 3px 10px 2px #51364C;\n  background-color: #FFF;\n  border-radius: 5px;\n  height: 500px;\n  overflow: hidden;\n  width: 300px; }\n\n.card-header {\n  align-items: center;\n  background-color: #E95E3E;\n  border-bottom: 1px solid #51364C;\n  border-radius: 5px 5px 0px 0px;\n  display: flex;\n  height: 50px;\n  justify-content: space-between; }\n\n.info-card {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 9rem;\n  justify-content: space-between; }\n\n.recipe-name {\n  display: block;\n  font-size: 150%;\n  font-weight: bold;\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n  text-align: center;\n  width: 85%; }\n\n.card-picture {\n  height: 300px;\n  width: auto; }\n\n.recipe-details, .cook-recipe {\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 0px 3px 10px 2px #51364C;\n  color: #51364C;\n  display: flex;\n  flex-direction: column;\n  height: 60vh;\n  overflow: hidden;\n  width: 50vw; }\n\n.all-recipe-info {\n  display: flex;\n  height: 60vh;\n  justify-content: space-between; }\n\n.recipe-instructions {\n  height: 42.5vh;\n  margin-left: 10px;\n  margin-top: .5rem;\n  padding: 10px;\n  overflow: scroll;\n  width: 45vw; }\n\n.recipe-ingredients {\n  border-right: 2px solid #51364C;\n  height: 42.5vh;\n  margin-left: 10px;\n  margin-top: .5rem;\n  padding: 10px;\n  overflow: scroll;\n  width: 30vw; }\n\nh3 {\n  background-color: #E95E3E;\n  border-radius: 10px 10px 0px 0px;\n  color: #FFF;\n  font-size: 250%;\n  margin: 0px;\n  padding: 17px;\n  text-align: center;\n  width: 100%; }\n\n.instruction-li {\n  margin-bottom: 10px; }\n\n.cook-recipe {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  text-align: center;\n  width: 28vw; }\n\n.cook-it {\n  width: 25.75vw; }\n\n.details-title {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  margin-top: 0;\n  width: auto; }\n\n.details-message {\n  font-style: italic;\n  margin-bottom: 2rem; }\n\n.details-missing {\n  font-size: 1.25rem;\n  margin-bottom: 3rem; }\n\n.details-cost {\n  margin-bottom: 1rem; }\n\nhtml {\n  background-color: #FBF9F3;\n  color: #51364C; }\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Raleway\", sans-serif;\n  margin: auto; }\n\nmain {\n  background-color: #FBF9F3;\n  height: 100%;\n  width: 100%; }\n\n.main-header {\n  background-color: #FFF;\n  box-shadow: 0px -1px 3px 2px #51364C;\n  display: flex;\n  font-family: \"Poppins\", sans-serif;\n  height: auto;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  width: 100%; }\n\nh1 {\n  color: #FAAC18;\n  font-size: 255%;\n  margin: auto;\n  padding-top: 10px;\n  text-align: center;\n  width: 30%;\n  font-weight: bold; }\n\n.user-info {\n  font-size: 180%;\n  font-style: italic;\n  margin: auto;\n  margin-top: 9rem;\n  text-align: center;\n  width: 40%; }\n\n.search-bar {\n  display: flex;\n  height: 100%;\n  margin: 10px 0px;\n  width: 30%; }\n\n.hidden {\n  display: none; }\n\n.all-cards {\n  display: grid;\n  grid-gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  margin: auto;\n  margin-top: 1rem;\n  justify-items: center;\n  column-gap: 1rem;\n  padding: 30px; }\n\n.all {\n  grid-gap: 2rem;\n  grid-template-columns: repeat(2, 1fr);\n  height: 70vh;\n  margin-top: 9rem; }\n\n@media screen and (min-width: 601px) and (max-width: 1024px) {\n  .all-cards {\n    grid-template-columns: repeat(2, 1fr);\n    margin-top: 8px;\n    width: 70%; }\n  .card {\n    margin: auto;\n    margin-top: 0; }\n  .navButton {\n    font-size: 1.25rem; }\n  h1 {\n    font-size: 1.25rem;\n    margin: auto;\n    width: 22%; }\n  .search-bar {\n    width: 50%;\n    font-size: 1rem;\n    text-align: center;\n    margin: auto;\n    align-items: center; }\n  .search-input {\n    height: 3.5vh; }\n  .search-button {\n    background-size: 40px;\n    margin: auto;\n    margin-right: 3px; }\n  .user-info {\n    font-size: 2rem;\n    margin: auto;\n    margin-top: 8rem;\n    width: 80%; }\n  .cook-recipe {\n    width: 90%; }\n  .recipe-details, .cook-recipe {\n    width: 90%; }\n  .all {\n    grid-template-columns: 1fr; }\n  h3 {\n    width: 95%; } }\n\n@media screen and (max-width: 600px) {\n  .all-cards {\n    grid-template-columns: 1fr;\n    margin: auto;\n    margin-top: 0; }\n  .card {\n    margin: auto; }\n  .card-picture {\n    width: 100%; }\n  .navButton {\n    display: none;\n    font-size: .80rem; }\n  h1 {\n    font-size: 1.5rem;\n    margin: auto;\n    width: 22%; }\n  .search-bar {\n    align-items: center;\n    font-size: .65rem;\n    margin: auto;\n    padding: 1px;\n    text-align: center;\n    width: 60%; }\n  .search-button {\n    background-size: 40px;\n    margin: auto;\n    margin-right: 3px; }\n  .search-input {\n    height: 5vh; }\n  .user-info {\n    font-size: 1rem;\n    margin: auto;\n    margin-top: 6rem;\n    width: 80%; }\n  .hamburger {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    background-color: #FFF;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    height: 60px;\n    width: 60px;\n    z-index: 2; }\n  .hamburger:hover {\n    cursor: pointer;\n    display: flex;\n    flex-direction: column; }\n  .hamburger-content {\n    background-color: #FFF;\n    border-bottom-right-radius: .25em;\n    border-bottom-left-radius: .25em;\n    color: #51364C;\n    cursor: pointer;\n    height: auto;\n    margin-left: 28px;\n    margin-top: 61px;\n    width: auto; }\n  .dropdown-item {\n    border: none;\n    font-size: 1em;\n    line-height: 30px;\n    padding: .35em; }\n  .dropdown-item:hover {\n    box-shadow: inset 0px 0px 4px; }\n  .recipe-details, .cook-recipe {\n    width: 90%; } }\n", "",{"version":3,"sources":["webpack://./src/css/_buttons.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_cards.scss","webpack://./src/css/_recipe-details.scss","webpack://./src/css/index.scss"],"names":[],"mappings":"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","sourcesContent":[".navButton {\n    background-color: $white;\n    border: none;\n    color: $eggplant;\n    cursor: pointer;\n    font-family: $poppins-font;\n    font-size: 130%;\n    margin: 1%;\n}\n\n.search-button {\n    @include card-button('../images/search.png', 60px, $white) border: none;\n    margin-right: 11px;\n    margin-top: 11px;\n\n    &:hover {\n        background-image: url('../images/search-hover.png');\n        cursor: pointer;\n    }\n}\n\n.card-button {\n    border: none;\n    cursor: pointer;\n    height: 27px;\n    margin: 3px;\n}\n\n.card-button:hover,\n.navButton:hover {\n    @include hover-button($copper-rust)\n}\n\n.search-image:active,\n.card-button:active,\n.navButton:active,\n.search-button:active {\n    background-color: $off-white;\n}\n\n.search-input {\n    border: 1px solid $eggplant;\n    border-radius: 10px;\n    font-family: $poppins-font,\n        sans-serif;\n    font-size: 100%;\n    height: 7vh;\n    margin: 3px 7px 0px 0px;\n    padding-left: 10px;\n    width: 90%;\n}\n\n\n.add-button {\n    @include card-button('../images/plus.png', 30px, $copper-rust);\n}\n\n.add-active {\n    background-image: url('../images/checkmark.png');\n}\n\n.favorite {\n    @include card-button('../images/star.png', 40px, $copper-rust);\n}\n\n.favorite-active {\n    background-image: url('../images/star-filled.png');\n}\n\n.view-details,\n.add-ingredients-to-pantry,\n.cook-recipe-button {\n    background-color: $copper-rust;\n    border: none;\n    border-radius: .25rem;\n    color: $white;\n    cursor: pointer;\n    font-family: $raleway-font;\n    font-size: 1.25rem;\n    font-weight: bold;\n    // height: 2.5rem;\n    padding: 7px;\n    margin-bottom: 0.9rem;\n    width: 50%;\n\n}\n\n\n.disabled {\n  background-color: $purple-grey;\n  cursor: not-allowed;\n}\n","$off-white: #FBF9F3;\n$white: #FFF;\n$copper-rust: #E95E3E;\n$eggplant: #51364C;\n$purple-grey: #a18e9d;\n$sun-yellow: #FAAC18;\n$poppins-font: 'Poppins',\nsans-serif;\n$raleway-font: 'Raleway',\nsans-serif;\n$shadow: 0px 3px 10px 2px $eggplant;\n\n@mixin hover-button($color) {\n  border-bottom: 10px solid $color;\n}\n\n@mixin card-button($image, $size, $color) {\n  background-color: $color;\n  background-image: url($image);\n  background-repeat: no-repeat;\n  background-position: center;\n  height: $size;\n  width: $size;\n}\n\n@mixin recipe-info($width) {\n  height: 42.5vh;\n  margin-left: 10px;\n  margin-top: .5rem;\n  padding: 10px;\n  overflow: scroll;\n  width: $width;\n}\n",".card {\n    box-shadow: $shadow;\n    background-color: $white;\n    border-radius: 5px;\n    height: 500px;\n    overflow: hidden;\n    width: 300px;\n}\n\n.card-header {\n    align-items: center;\n    background-color: $copper-rust;\n    border-bottom: 1px solid $eggplant;\n    border-radius: 5px 5px 0px 0px;\n    display: flex;\n    height: 50px;\n    justify-content: space-between;\n}\n\n.info-card {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    height: 9rem;\n    justify-content: space-between;\n}\n\n.recipe-name {\n    display: block;\n    font-size: 150%;\n    font-weight: bold;\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    text-align: center;\n    width: 85%;\n}\n\n.card-picture {\n    height: 300px;\n    width: auto;\n}\n",".recipe-details {\n  background-color: $white;\n  border-radius: 10px;\n  box-shadow: $shadow;\n  color: $eggplant;\n  display: flex;\n  flex-direction: column;\n  height: 60vh;\n  overflow: hidden;\n  width: 50vw;\n}\n\n.all-recipe-info {\n  display: flex;\n  height: 60vh;\n  justify-content: space-between;\n}\n\n.recipe-instructions {\n  @include recipe-info(45vw)\n}\n\n.recipe-ingredients {\n  border-right: 2px solid $eggplant;\n  @include recipe-info(30vw)\n}\n\nh3 {\n  background-color: $copper-rust;\n  border-radius: 10px 10px 0px 0px;\n  color: $white;\n  font-size: 250%;\n  margin: 0px;\n  padding: 17px;\n  text-align: center;\n  width: 100%;\n}\n\n.instruction-li {\n  margin-bottom: 10px;\n}\n\n.cook-recipe {\n  align-items: center;\n  display: flex;\n  @extend .recipe-details;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  text-align: center;\n  width: 28vw;\n}\n\n.cook-it {\n  width: 25.75vw;\n}\n\n.details-title {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 1rem;\n  margin-top: 0;\n  width: auto;\n}\n\n.details-message {\n  font-style: italic;\n  margin-bottom: 2rem;\n}\n\n.details-missing {\n  font-size: 1.25rem;\n  margin-bottom: 3rem;\n}\n\n.details-cost {\n  margin-bottom: 1rem;\n}","@import 'variables';\n@import 'buttons';\n@import 'cards';\n@import 'recipe-details';\n@import 'normalize.css';\n\nhtml {\n  background-color: $off-white;\n  color: $eggplant;\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: $raleway-font;\n  margin: auto;\n}\n\nmain {\n  background-color: $off-white;\n  height: 100%;\n  width: 100%;\n}\n\n.main-header {\n  background-color: $white;\n  box-shadow: 0px -1px 3px 2px $eggplant;\n  display: flex;\n  font-family: $poppins-font;\n  height: auto;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\nh1 {\n  color: $sun-yellow;\n  font-size: 255%;\n  margin: auto;\n  padding-top: 10px;\n  text-align: center;\n  width: 30%;\n  font-weight: bold;\n}\n\n.user-info {\n  font-size: 180%;\n  font-style: italic;\n  margin: auto;\n  margin-top: 9rem;\n  text-align: center;\n  width: 40%;\n}\n\n.search-bar {\n  display: flex;\n  height: 100%;\n  margin: 10px 0px;\n  width: 30%;\n}\n\n.hidden {\n  display: none;\n}\n\n.all-cards {\n  display: grid;\n  grid-gap: 3rem;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  margin: auto;\n  margin-top: 1rem;\n  justify-items: center;\n  column-gap: 1rem;\n  padding: 30px;\n}\n\n.all {\n  grid-gap: 2rem;\n  grid-template-columns: repeat(2, 1fr);\n  height: 70vh;\n  margin-top: 9rem;\n}\n\n\n\n// TABLETS\n\n@media screen and (min-width: 601px) and (max-width: 1024px) {\n  .all-cards {\n    grid-template-columns: repeat(2, 1fr);\n    margin-top: 8px;\n    width: 70%;\n  }\n\n  .card {\n    margin: auto;\n    margin-top: 0;\n  }\n\n  .navButton {\n    font-size: 1.25rem;\n  }\n\n  h1 {\n    font-size: 1.25rem;\n    margin: auto;\n    width: 22%;\n  }\n\n  .search-bar {\n    width: 50%;\n    font-size: 1rem;\n    text-align: center;\n    margin: auto;\n    align-items: center;\n  }\n\n  .search-input {\n    height: 3.5vh;\n  }\n\n  .search-button {\n    background-size: 40px;\n    margin: auto;\n    margin-right: 3px;\n  }\n\n  .user-info {\n    font-size: 2rem;\n    margin: auto;\n    margin-top: 8rem;\n    width: 80%;\n  }\n\n  .cook-recipe {\n    width: 90%;\n  }\n\n  .recipe-details {\n    width: 90%;\n  }\n\n  .all {\n    grid-template-columns: 1fr;\n  }\n\n  h3 {\n    width: 95%;\n  }\n\n}\n\n// MOBILE\n\n@media screen and (max-width: 600px) {\n  .all-cards {\n    grid-template-columns: 1fr;\n    margin: auto;\n    margin-top: 0;\n  }\n\n  .card {\n    margin: auto;\n  }\n\n  .card-picture {\n    width: 100%;\n  }\n\n  .navButton {\n    display: none;\n    font-size: .80rem;\n  }\n\n\n  h1 {\n    font-size: 1.5rem;\n    margin: auto;\n    width: 22%;\n  }\n\n  .search-bar {\n    align-items: center;\n    font-size: .65rem;\n    margin: auto;\n    padding: 1px;\n    text-align: center;\n    width: 60%;\n  }\n\n  .search-button {\n    background-size: 40px;\n    margin: auto;\n    margin-right: 3px;\n  }\n\n  .search-input {\n    height: 5vh;\n  }\n\n  .user-info {\n    font-size: 1rem;\n    margin: auto;\n    margin-top: 6rem;\n    width: 80%;\n  }\n\n  .hamburger {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    @include card-button('../images/hamburger.png', 60px, $white);\n    z-index: 2;\n  }\n\n  .hamburger:hover {\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .hamburger-content {\n    background-color: $white;\n    border-bottom-right-radius: .25em;\n    border-bottom-left-radius: .25em;\n    color: $eggplant;\n    cursor: pointer;\n    height: auto;\n    margin-left: 28px;\n    margin-top: 61px;\n    width: auto;\n  }\n\n  .dropdown-item {\n    border: none;\n    font-size: 1em;\n    line-height: 30px;\n    padding: .35em;\n  }\n\n  .dropdown-item:hover {\n    box-shadow: inset 0px 0px 4px;\n  }\n\n  .recipe-details {\n    width: 90%;\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/cookbook.js":
/*!*************************!*\
  !*** ./src/cookbook.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Cookbook {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData;
    this.ingredients = ingredientsData;
  }

  findRecipesByTagNameOrIngredient(searchText) {
    return this.recipes.filter(recipe => {
      return recipe.ingredients.find(ingredient => {
        let ingredientName = this.convertIngredientIdToName(ingredient);
        return ingredientName.includes(searchText) ||
          recipe.name.toLowerCase().includes(searchText) ||
          recipe.tags.includes(searchText)
      });
    });
  }


  convertIngredientIdToName(ingredient) {
    let ingredientData = this.ingredients.find(entry => entry.id === ingredient.id);
    return ingredientData.name;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cookbook);

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {
  displayCards(recipesList, cardArea, viewLabels) {
    this.interactWithClassList('remove', `all`, event, cardArea);
    this.interactWithClassList('add', `${viewLabels[0]}`, event, cardArea);
    this.interactWithClassList('remove', `${viewLabels[1]}`, event, cardArea);
    this.interactWithClassList('remove', `${viewLabels[2]}`, event, cardArea);
    cardArea.innerHTML = '';
    recipesList.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `<div id='${recipe.id}-card'
      class='card'>
      <header id='${recipe.id}-header' class='card-header'>
      <label for='add-button' class='hidden'>Click to add recipe</label>
      <button id='${recipe.id}-add' aria-label='Add Recipe To Cook List' class='add-button add-button${recipe.id} card-button'></button>
      <label for='favorite-button' class='hidden'>Click to favorite recipe
      </label>
      <button id='${recipe.id}-fav' aria-label='Favorite Button' class='favorite favorite${recipe.id} card-button'>
      </button></header>
      <div class="image-styling">
        <img id='${recipe.id}-img' class='card-picture'
        src='${recipe.image}' alt='Food from recipe'>
      </div>
        <div class='info-card'>
          <p id='${recipe.id}-name' class='recipe-name'>${recipe.name}</p>
          <label for='view-details' class='hidden'>Click to view recipe details
          </label>
          <button id='${recipe.id}' aria-label='View Recipe' class='view-details view-details${recipe.id}'>View Recipe</button>
        </div>
      </div>
      `)
    })
  },

  displayCookDetails(id, missingIngredients, costOfRemainingIngredients) {
    let detailsArticle = document.querySelector(`.cook-recipe`);
    if(missingIngredients.length === 0){
      detailsArticle.innerHTML =
        `<h3>Can I Cook It?</h3>
        <div class='cook-details'>
        <p class='details-title'>Yes You Can!</p><p class='details-message'>You have ALL the ingredients in your pantry to cook this meal.</p>
        </div>
        <label for='add-ingredients-to-pantry' class='hidden'>Click to add missing ingredients to your pantry
        </label>
        <button aria-label='Add Ingredients To Pantry' id='${id}' class='add-ingredients-to-pantry disabled' disabled>Add Ingredients</button>
        <label for='cook-recipe' class='hidden'>Click to cook this recipe, and remove ingredients from your pantry
        </label>
        <button aria-label='Cook This Recipe' id='${id}' class='cook-recipe-button'>Cook Recipe</button>`;
    } else {
      detailsArticle.innerHTML =
        `<h3>Can I Cook It?</h3>
        <div class='cook-details'>
        <p class='details-title'>No You Can't!</p><p class='details-message'>You will have to go shopping to get some of the ingredients needed to cook this meal.</p>
        <p class='details-missing'><b>Missing Ingredients:</b><br>${missingIngredients.join(', ')}</p>
        <p class='details-cost'>To restock these ingredients will cost: $${costOfRemainingIngredients}</p>
        </div>
        <label for='add-ingredients-to-pantry' class='hidden'>Click to add missing ingredients to your pantry
        </label>
        <button aria-label='Add Ingredients To Pantry' id='${id}' class='add-ingredients-to-pantry'>Add Ingredients</button>
        <label for='cook-recipe' class='hidden'>Click to cook this recipe, and remove ingredients from your pantry
        </label>
        <button aria-label='Cook This Recipe' id='${id}' class='cook-recipe-button disabled' disabled>Cook Recipe</button>`;
    };
  },

  greetUser(user) {
    const userName = document.querySelector('.user-info');
    userName.innerText = `Welcome, ${user.name}.`;
  },
  interactWithClassList(method, className, event, element) {
    if (method === 'add' && element && className) {
      element.classList.add(className);
    } else if (method === 'remove' && element && className) {
      element.classList.remove(className);
    } else if (method === 'contains' && className && element) {
      return element.classList.contains(className);
    } else if (method === 'add' && element === undefined && className) {
      event.target.classList.add(className);
    } else if (method === 'remove' && element === undefined && className) {
      event.target.classList.remove(className);
    } else if (method === 'contains' && className && element === undefined) {
      return event.target.classList.contains(className);
    } else if (method === 'toggle' && element && className) {
      element.classList.toggle(className);
    }
  },
  displayOneLiners(element, text) {
    element.innerText = text;
  },
  populateRecipeDetails(cardArea, recipeObject, costInDollars) {
    cardArea.innerHTML = `
    <article class= "recipe-details">
    <h3>${recipeObject.name}</h3>
    <div class='all-recipe-info'>
    <p class='recipe-ingredients'>
    <strong>It will cost: </strong><span class='cost recipe-info'>
    $${costInDollars}</span><br><br>
    <strong>You will need: </strong><span class='ingredients recipe-info'></span>
    </p>
    <div class='recipe-instructions'>
    <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
    </span></ol>
    </div>
    </div>
    </article>
    <article class='cook-recipe'></article>`;

    let ingredientsSpan = document.querySelector('.ingredients');
    let instructionsSpan = document.querySelector('.instructions');

    recipeObject.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
      ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
      ${ingredient.name}</li></ul>
      `)
    })
    recipeObject.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `<li class='instruction-li'>
      ${instruction.instruction}</li>
      `)
    })
  }
}


/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/images/checkmark.png":
/*!**********************************!*\
  !*** ./src/images/checkmark.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/checkmark.png");

/***/ }),

/***/ "./src/images/hamburger.png":
/*!**********************************!*\
  !*** ./src/images/hamburger.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/hamburger.png");

/***/ }),

/***/ "./src/images/plus.png":
/*!*****************************!*\
  !*** ./src/images/plus.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/plus.png");

/***/ }),

/***/ "./src/images/search-hover.png":
/*!*************************************!*\
  !*** ./src/images/search-hover.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search-hover.png");

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search.png");

/***/ }),

/***/ "./src/images/star-filled.png":
/*!************************************!*\
  !*** ./src/images/star-filled.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/star-filled.png");

/***/ }),

/***/ "./src/images/star.png":
/*!*****************************!*\
  !*** ./src/images/star.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/star.png");

/***/ }),

/***/ "./src/pantry.js":
/*!***********************!*\
  !*** ./src/pantry.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

getMissingPartOfRecipe(recipe) {
  let newIngredients = recipe.ingredients.map(ingredient => {
      if(!this.contents.some(entry => entry.ingredient === ingredient.id)) {
        ingredient.missing = ingredient.quantity.amount;
        return ingredient;
      } else {
        this.contents.forEach(entry => {
          if (entry.ingredient === ingredient.id && entry.amount < ingredient.quantity.amount) {
            let missingAmount = ingredient.quantity.amount - entry.amount;
            ingredient.missing = missingAmount;
          } else if (entry.ingredient === ingredient.id && entry.amount >= ingredient.quantity.amount) {
            ingredient.missing = 0;
          }
        })
        return ingredient;
      }
    });
    recipe.ingredients = newIngredients;
    return recipe;
  }

  determineEnoughIngredients(recipe) {
    let recipeCheck = this.getMissingPartOfRecipe(recipe)
    return recipeCheck.ingredients.every(item => item.missing === 0)
  }

  calculateMissingCost(recipe) {
    let shoppingList = this.getMissingPartOfRecipe(recipe);
    const totalCents = shoppingList.ingredients.reduce((costTally, ingredient) => {
      let costForRecipe = ingredient.estimatedCostInCents * ingredient.missing;
      return costTally += costForRecipe;
    }, 0);
    return (totalCents / 100).toFixed(2);
  }

  getIngredientsToUpdate(recipe, updateType){
    let ingredientsInPantry = recipe.ingredients.reduce((acc, ingredient) => {
      if(updateType === 'add' && ingredient.missing > 0){
        let obj = {
          "ingredient": ingredient.id,
          "amountToAdd": (ingredient.missing * 5)
          };
        acc.push(obj)
      } else if(updateType === 'remove') {
        let obj = {
          "ingredient": ingredient.id,
          "amountToRemove": -1 * ingredient.quantity.amount
        };
        acc.push(obj)
      }
      return acc
    }, [])
    return ingredientsInPantry
  }
}


/* harmony default export */ __webpack_exports__["default"] = (Pantry);

/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients.map(recipeIngredient => {
      let ingredientInfo = ingredientsData.find(ingredient => ingredient.id === recipeIngredient.id);
      recipeIngredient.missing = 0;
      return {
        ...recipeIngredient,
        ...ingredientInfo
      };
    });
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
  }


  calculateCost() {
    const totalCents = this.ingredients.reduce((costTally, ingredient) => {
      let costForRecipe = ingredient.estimatedCostInCents * ingredient.quantity.amount;
      return costTally += costForRecipe;
    }, 0);
    return (totalCents / 100).toFixed(2);
  }

  getInstructions() {
    return this.instructions;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _cookbook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookbook */ "./src/cookbook.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");







let favButton = document.querySelector('.view-favorites');
let toCookButton = document.querySelector('.view-to-cook-list')
let homeButton = document.querySelector('.home')
let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input');

let hamburgerMenu = document.querySelector('.hamburger');
let hamburgerMenuContent = document.querySelector(".hamburger-content");
let mobileFavButton = document.querySelector(".view-favorites-mobile");
let mobileToCookButton = document.querySelector(".view-to-cook-list-mobile");
let mobileHomeButton = document.querySelector(".home-mobile");

let cardArea = document.querySelector('.all-cards');

let user, pantry, cookbook;

window.onload = onStartup();

homeButton.addEventListener("click", returnHome);
favButton.addEventListener('click', viewFavorites);
toCookButton.addEventListener('click', viewRecipesToCook);
searchButton.addEventListener("click", searchRecipes);

hamburgerMenu.addEventListener('click', toggleHamburgerMenuDropdown);
mobileFavButton.addEventListener("click", viewFavorites);
mobileToCookButton.addEventListener("click", viewRecipesToCook);
mobileHomeButton.addEventListener("click", returnHome);

cardArea.addEventListener("click", handleCardAreaButtons);

function onStartup() {
  return Promise.all([getUserData(), getRecipeData(), getIngredientData()])
    .then(data => {
      let userData = data[0];
      let recipeData = data[1];
      let ingredientData = data[2];
      buildPage(userData, recipeData, ingredientData);
    })
    .catch(error => console.log(error))
}

function getUserData() {
  return fetch("http://localhost:3001/api/v1/users")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

function getRecipeData() {
  return fetch("http://localhost:3001/api/v1/recipes")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

function getIngredientData() {
  return fetch("http://localhost:3001/api/v1/ingredients")
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

function buildPage(users, recipes, ingredients) {
  createUserWorld(users, recipes, ingredients);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].greetUser(user);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCards(cookbook.recipes, cardArea, ['', '', '']);
}

function createUserWorld(users, recipes, ingredients) {
  let userId = (Math.floor(Math.random() * 49) + 1)
  let newUser = users.find(user => {
    return user.id === Number(userId);
  });
  user = new _user__WEBPACK_IMPORTED_MODULE_2__["default"](userId, newUser.name, newUser.pantry, ingredients)
  pantry = new _pantry__WEBPACK_IMPORTED_MODULE_3__["default"](newUser.pantry)
  cookbook = new _cookbook__WEBPACK_IMPORTED_MODULE_1__["default"](recipes, ingredients);
}

function viewFavorites() {
  if (user.favoriteRecipes.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCards(user.favoriteRecipes, cardArea, ['favoriteRecipes', 'recipesToCook', '']);
  }
  displayRecipeFavoriteOrCooklistLabels(user.favoriteRecipes);
}

function viewRecipesToCook() {
  if (user.recipesToCook.length) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCards(user.recipesToCook, cardArea, ['recipesToCook', 'favoriteRecipes', '']);
  }
  displayRecipeFavoriteOrCooklistLabels(user.recipesToCook);
}

function returnHome() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCards(cookbook.recipes, cardArea, ['', 'favoriteRecipes', 'recipesToCook']);
  displayRecipeFavoriteOrCooklistLabels(cookbook.recipes);
}

function toggleHamburgerMenuDropdown() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList("toggle", "hidden", event, hamburgerMenuContent);
}

function searchRecipes() {
  viewSearchedRecipes();
  searchInput.value = "";
}

function viewSearchedRecipes() {
  let filteredRecipes;
  if (_domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', 'favoriteRecipes', event, cardArea)) {
    filteredRecipes = user.findFavorites(searchInput.value);
  } else {
    filteredRecipes = cookbook.findRecipesByTagNameOrIngredient(searchInput.value.toLowerCase());
  }
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCards(filteredRecipes, cardArea, ['', 'favoriteRecipes', 'recipesToCook']);
  displayRecipeFavoriteOrCooklistLabels(filteredRecipes);
}

function handleCardAreaButtons(event) {
  if (_domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', 'favorite', event)) {
    addCardToFavoritesOrCookList(event, 'favoriteRecipes', 'favorite-active', '-fav');
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', 'add-button', event) || _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', 'add', event)) {
    addCardToFavoritesOrCookList(event, 'recipesToCook', 'add-active', '-add')
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', 'view-details', event)) {
    viewRecipeDetails(event);
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', 'cook-recipe-button', event)) {
    removeIngredientsUsedToCookRecipe(event);
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', 'add-ingredients-to-pantry', event)) {
    addMissingIngredientsNeededForRecipe(event);
  }
}

function addCardToFavoritesOrCookList(event, listCategory, activeClassName, idName) {
  let specicId = Number(event.target.id.replace(idName, ''))
  let specificRecipe = cookbook.recipes.find(recipe => recipe.id === specicId)
  if (!_domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', activeClassName, event)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('add', activeClassName, event);
    user.addToList(specificRecipe, listCategory);
  } else if (_domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', activeClassName, event)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('remove', activeClassName, event);
    user.removeFromList(specificRecipe, listCategory)
    refreshCurrentCardFilterWithUpdatedList(listCategory);
  }
}

function refreshCurrentCardFilterWithUpdatedList(listCategory) {
  if (_domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('contains', `${listCategory}`, event, cardArea)) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCards(user[listCategory], cardArea, [`${listCategory}`, '', '']);
    displayRecipeFavoriteOrCooklistLabels(user[listCategory]);
  }
}

function displayRecipeFavoriteOrCooklistLabels(currentCardFilter) {
  currentCardFilter.forEach(recipe => {
    if (user.favoriteRecipes.includes(recipe)) {
      let recipeID = document.querySelector(`.favorite${recipe.id}`);
      _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('add', 'favorite-active', event, recipeID);
    }
    if (user.recipesToCook.includes(recipe)) {
      let recipeID = document.querySelector(`.add-button${recipe.id}`);
      _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('add', 'add-active', event, recipeID);
    }
  });
}

function viewRecipeDetails(event) {
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id));
  let recipeObject = new _recipe__WEBPACK_IMPORTED_MODULE_4__["default"](newRecipeInfo, cookbook.ingredients);
  let cost = recipeObject.calculateCost();
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].interactWithClassList('add', 'all', event, cardArea);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].populateRecipeDetails(cardArea, recipeObject, cost);
  compilePantryData(recipeObject);
}

function compilePantryData(recipe) {
  let missingIngredients = []
  let costOfRemainingIngredients;
  if (!pantry.determineEnoughIngredients(recipe)) {
    missingIngredients = listMissingIngredients(recipe);
    costOfRemainingIngredients = pantry.calculateMissingCost(recipe);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCookDetails(recipe.id, missingIngredients, costOfRemainingIngredients);
  } else {
    costOfRemainingIngredients = pantry.calculateMissingCost(recipe)
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCookDetails(recipe.id, missingIngredients, costOfRemainingIngredients);
  }
}

function listMissingIngredients(recipe) {
  return pantry.getMissingPartOfRecipe(recipe).ingredients.reduce((acc, ingredient) => {
    if (ingredient.missing > 0) {
      let specificIngredient = cookbook.ingredients.find(item => item.id === ingredient.id);
      acc.push(specificIngredient.name);
    }
    return acc;
  }, []);
}

function addMissingIngredientsNeededForRecipe(event) {
  let replaceRecipe = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id))
  let shoppingList = pantry.getMissingPartOfRecipe(replaceRecipe)
  let newIngredients = pantry.getIngredientsToUpdate(shoppingList, 'add')
  newIngredients.forEach((ingredient) => {
    let postOption = createPostOption(ingredient, 'amountToAdd');
    updatePantryDataWithNewIngredientQuantities(postOption, replaceRecipe);
  })
  displayAlert('add')
};

function removeIngredientsUsedToCookRecipe(event) {
  let newRecipeInfo = cookbook.recipes.find(recipe => recipe.id === Number(event.target.id));
  let cookedRecipe = new _recipe__WEBPACK_IMPORTED_MODULE_4__["default"](newRecipeInfo, cookbook.ingredients);
  let removedIngredients = pantry.getIngredientsToUpdate(cookedRecipe, 'remove')
  removedIngredients.forEach((ingredient) => {
    let postOption = createPostOption(ingredient, 'amountToRemove');
   updatePantryDataWithNewIngredientQuantities(postOption, cookedRecipe);
  })
   displayAlert('remove')
};

function createPostOption(ingredient, modifyingProperty) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: user.id,
      ingredientID: ingredient.ingredient,
      ingredientModification: ingredient[modifyingProperty]
    }),
  };
}

function updatePantryDataWithNewIngredientQuantities(postOption, recipe) {
  return fetch("http://localhost:3001/api/v1/users", postOption)
   .then((response) => response.json())
   .then((message) => {
     console.log(message);
     Promise.all([getUserData(), getRecipeData(), getIngredientData()])
   .then((data) => {
     let updatedUserData = data[0];
     user.pantry = updatedUserData.find(entry => entry.id === user.id).pantry
     pantry.contents = user.pantry
     compilePantryData(recipe);
       })
     })
   .catch((error) => console.log(error));
}

function displayAlert(alertType){
  if(alertType === 'add'){
    alert(`Click OK! To confirm add more of the missing ingredients to your pantry.`);
  } else {
    alert(`Click OK! To cook this meal and take the ingredients out of your pantry.`);
  }
}


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(id, name, pantry, ingredientData) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.ingredients = ingredientData;
  }

  addToList(recipe, list) {
    if (!this[list].includes(recipe)) {
      this[list].push(recipe);
    }
  }

  removeFromList(recipe, list) {
    const i = this[list].indexOf(recipe);
    this[list].splice(i, 1);
  }

  findFavorites(searchText) {
    return this.favoriteRecipes.filter((recipe) => {
      return recipe.ingredients.find((ingredient) => {
        let ingredientName = this.convertIngredientIdToName(ingredient);
        return (
          ingredientName.includes(searchText) ||
          recipe.name.toLowerCase().includes(searchText) ||
          recipe.tags.includes(searchText)
        );
      });
    });
  }

  convertIngredientIdToName(ingredient) {
    let ingredientData = this.ingredients.find(
      (entry) => entry.id === ingredient.id
    );
    return ingredientData.name;
  }

  checkPantry(recipe) {
    let result;
    let singleRecipe = this.favoriteRecipes.find(
      (item) => item.name === recipe
    );
    singleRecipe.ingredients.forEach((ingredient) => {
      this.pantry.forEach((item) => {
        if (
          ingredient.id === item.ingredient &&
          item.amount >= ingredient.quantity.amount
        ) {
          result = "You have the ingredients!";
        } else {
          result = `Sorry, you don't have the ingredients`;
        }
      });
    });
    return result;
  }
}


/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29va2Jvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzPzdhYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jaGVja21hcmsucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGFtYnVyZ2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BsdXMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2VhcmNoLWhvdmVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGFyLWZpbGxlZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8v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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHZSxtRUFBSSxFQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFF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dGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvc2VhcmNoLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi9pbWFnZXMvc2VhcmNoLWhvdmVyLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi9pbWFnZXMvcGx1cy5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi4vaW1hZ2VzL2NoZWNrbWFyay5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyBmcm9tIFwiLi4vaW1hZ2VzL3N0YXIucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gZnJvbSBcIi4uL2ltYWdlcy9zdGFyLWZpbGxlZC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyBmcm9tIFwiLi4vaW1hZ2VzL2hhbWJ1cmdlci5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzUxMzY0QztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzMCU7XFxuICBtYXJnaW46IDElOyB9XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDExcHg7XFxuICBtYXJnaW4tdG9wOiAxMXB4OyB9XFxuICAuc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYXJkLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICBtYXJnaW46IDNweDsgfVxcblxcbi5jYXJkLWJ1dHRvbjpob3ZlcixcXG4ubmF2QnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI0U5NUUzRTsgfVxcblxcbi5zZWFyY2gtaW1hZ2U6YWN0aXZlLFxcbi5jYXJkLWJ1dHRvbjphY3RpdmUsXFxuLm5hdkJ1dHRvbjphY3RpdmUsXFxuLnNlYXJjaC1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkY5RjM7IH1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MTM2NEM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luOiAzcHggN3B4IDBweCAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB3aWR0aDogOTAlOyB9XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5NUUzRTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7IH1cXG5cXG4uYWRkLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpOyB9XFxuXFxuLmZhdm9yaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOTVFM0U7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4OyB9XFxuXFxuLmZhdm9yaXRlLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpOyB9XFxuXFxuLnZpZXctZGV0YWlscyxcXG4uYWRkLWluZ3JlZGllbnRzLXRvLXBhbnRyeSxcXG4uY29vay1yZWNpcGUtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOTVFM0U7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICBjb2xvcjogI0ZGRjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcXG4gIHdpZHRoOiA1MCU7IH1cXG5cXG4uZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExOGU5ZDtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG5cXG4uY2FyZCB7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggMnB4ICM1MTM2NEM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMzAwcHg7IH1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOTVFM0U7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxMzY0QztcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uaW5mby1jYXJkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogOXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5yZWNpcGUtbmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA4NSU7IH1cXG5cXG4uY2FyZC1waWN0dXJlIHtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogYXV0bzsgfVxcblxcbi5yZWNpcGUtZGV0YWlscywgLmNvb2stcmVjaXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IDJweCAjNTEzNjRDO1xcbiAgY29sb3I6ICM1MTM2NEM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNjB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogNTB2dzsgfVxcblxcbi5hbGwtcmVjaXBlLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNjB2aDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGhlaWdodDogNDIuNXZoO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgd2lkdGg6IDQ1dnc7IH1cXG5cXG4ucmVjaXBlLWluZ3JlZGllbnRzIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM1MTM2NEM7XFxuICBoZWlnaHQ6IDQyLjV2aDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHdpZHRoOiAzMHZ3OyB9XFxuXFxuaDMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5NUUzRTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xcbiAgY29sb3I6ICNGRkY7XFxuICBmb250LXNpemU6IDI1MCU7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDE3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5pbnN0cnVjdGlvbi1saSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXFxuLmNvb2stcmVjaXBlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjh2dzsgfVxcblxcbi5jb29rLWl0IHtcXG4gIHdpZHRoOiAyNS43NXZ3OyB9XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHdpZHRoOiBhdXRvOyB9XFxuXFxuLmRldGFpbHMtbWVzc2FnZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtOyB9XFxuXFxuLmRldGFpbHMtbWlzc2luZyB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtOyB9XFxuXFxuLmRldGFpbHMtY29zdCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGOUYzO1xcbiAgY29sb3I6ICM1MTM2NEM7IH1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGOUYzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCAycHggIzUxMzY0QztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5oMSB7XFxuICBjb2xvcjogI0ZBQUMxODtcXG4gIGZvbnQtc2l6ZTogMjU1JTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLnVzZXItaW5mbyB7XFxuICBmb250LXNpemU6IDE4MCU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA5cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDQwJTsgfVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgd2lkdGg6IDMwJTsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5hbGwtY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAzcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDMwcHg7IH1cXG5cXG4uYWxsIHtcXG4gIGdyaWQtZ2FwOiAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGhlaWdodDogNzB2aDtcXG4gIG1hcmdpbi10b3A6IDlyZW07IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmFsbC1jYXJkcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgd2lkdGg6IDcwJTsgfVxcbiAgLmNhcmQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gIC5uYXZCdXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07IH1cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyMiU7IH1cXG4gIC5zZWFyY2gtYmFyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnNlYXJjaC1pbnB1dCB7XFxuICAgIGhlaWdodDogMy41dmg7IH1cXG4gIC5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogM3B4OyB9XFxuICAudXNlci1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDhyZW07XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC5jb29rLXJlY2lwZSB7XFxuICAgIHdpZHRoOiA5MCU7IH1cXG4gIC5yZWNpcGUtZGV0YWlscywgLmNvb2stcmVjaXBlIHtcXG4gICAgd2lkdGg6IDkwJTsgfVxcbiAgLmFsbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XFxuICBoMyB7XFxuICAgIHdpZHRoOiA5NSU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuYWxsLWNhcmRzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMDsgfVxcbiAgLmNhcmQge1xcbiAgICBtYXJnaW46IGF1dG87IH1cXG4gIC5jYXJkLXBpY3R1cmUge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm5hdkJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogLjgwcmVtOyB9XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAyMiU7IH1cXG4gIC5zZWFyY2gtYmFyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAuNjVyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2MCU7IH1cXG4gIC5zZWFyY2gtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogM3B4OyB9XFxuICAuc2VhcmNoLWlucHV0IHtcXG4gICAgaGVpZ2h0OiA1dmg7IH1cXG4gIC51c2VyLWluZm8ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgLmhhbWJ1cmdlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgei1pbmRleDogMjsgfVxcbiAgLmhhbWJ1cmdlcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmhhbWJ1cmdlci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNWVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVlbTtcXG4gICAgY29sb3I6ICM1MTM2NEM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjhweDtcXG4gICAgbWFyZ2luLXRvcDogNjFweDtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gIC5kcm9wZG93bi1pdGVtIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IC4zNWVtOyB9XFxuICAuZHJvcGRvd24taXRlbTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNHB4OyB9XFxuICAucmVjaXBlLWRldGFpbHMsIC5jb29rLXJlY2lwZSB7XFxuICAgIHdpZHRoOiA5MCU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2NhcmRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3JlY2lwZS1kZXRhaWxzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHNCQ0FRO0VEQ1IsWUFBWTtFQUNaLGNDQWM7RURDZCxlQUFlO0VBQ2Ysa0NDRU07RURETixlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdkO0VDT0Usc0JBaEJVO0VBaUJWLHlEQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFlEVm1EO0VDV25ELFdEWG1EO0VBQVUsWUFBWTtFQUN2RSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFIcEI7SUFNUSx5REFBbUQ7SUFDbkQsZUFBZSxFQUFBOztBQUl2QjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjs7RUNmRSxpQ0FYbUIsRUFBQTs7QUQrQnJCOzs7O0VBSUkseUJDckNlLEVBQUE7O0FEd0NuQjtFQUNJLHlCQ3RDYztFRHVDZCxtQkFBbUI7RUFDbkIsOENBQ2M7RUFDZCxlQUFlO0VBQ2Ys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MEI7SUFDMUIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFRjlKakI7SUVrS0ksWUFBWSxFQUFBO0VGN0hoQjtJRWlJSSxXQUFXLEVBQUE7RUp0S2Y7SUkwS0ksYUFBYTtJQUNiLGlCQUFpQixFQUFBO0VBeElyQjtJQTZJSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVUsRUFBQTtFQTVIZDtJQWdJSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFSmpMZDtJSXFMSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VKekpyQjtJSTZKSSxXQUFXLEVBQUE7RUF4SmY7SUE0SkksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVSxFQUFBO0VBR1o7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJSGpNeEIsc0JBaEJVO0lBaUJWLHlEQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFlHOExzRDtJSDdMdEQsV0c2THNEO0lBQ3BELFVBQVUsRUFBQTtFQUdaO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLHNCSDdOUTtJRzhOUixpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLGNIOU5jO0lHK05kLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7RUFHYjtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWMsRUFBQTtFQUdoQjtJQUNFLDZCQUE2QixFQUFBO0VEalBqQztJQ3FQSSxVQUFVLEVBQUEsRUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2QnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAkZWdncGxhbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICRwb3BwaW5zLWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogMTMwJTtcXG4gICAgbWFyZ2luOiAxJTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBAaW5jbHVkZSBjYXJkLWJ1dHRvbignLi4vaW1hZ2VzL3NlYXJjaC5wbmcnLCA2MHB4LCAkd2hpdGUpIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3NlYXJjaC1ob3Zlci5wbmcnKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uY2FyZC1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuLmNhcmQtYnV0dG9uOmhvdmVyLFxcbi5uYXZCdXR0b246aG92ZXIge1xcbiAgICBAaW5jbHVkZSBob3Zlci1idXR0b24oJGNvcHBlci1ydXN0KVxcbn1cXG5cXG4uc2VhcmNoLWltYWdlOmFjdGl2ZSxcXG4uY2FyZC1idXR0b246YWN0aXZlLFxcbi5uYXZCdXR0b246YWN0aXZlLFxcbi5zZWFyY2gtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvZmYtd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZWdncGxhbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAkcG9wcGlucy1mb250LFxcbiAgICAgICAgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDd2aDtcXG4gICAgbWFyZ2luOiAzcHggN3B4IDBweCAwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuXFxuLmFkZC1idXR0b24ge1xcbiAgICBAaW5jbHVkZSBjYXJkLWJ1dHRvbignLi4vaW1hZ2VzL3BsdXMucG5nJywgMzBweCwgJGNvcHBlci1ydXN0KTtcXG59XFxuXFxuLmFkZC1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9jaGVja21hcmsucG5nJyk7XFxufVxcblxcbi5mYXZvcml0ZSB7XFxuICAgIEBpbmNsdWRlIGNhcmQtYnV0dG9uKCcuLi9pbWFnZXMvc3Rhci5wbmcnLCA0MHB4LCAkY29wcGVyLXJ1c3QpO1xcbn1cXG5cXG4uZmF2b3JpdGUtYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvc3Rhci1maWxsZWQucG5nJyk7XFxufVxcblxcbi52aWV3LWRldGFpbHMsXFxuLmFkZC1pbmdyZWRpZW50cy10by1wYW50cnksXFxuLmNvb2stcmVjaXBlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb3BwZXItcnVzdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICRyYWxld2F5LWZvbnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIC8vIGhlaWdodDogMi41cmVtO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG5cXG59XFxuXFxuXFxuLmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwdXJwbGUtZ3JleTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblwiLFwiJG9mZi13aGl0ZTogI0ZCRjlGMztcXG4kd2hpdGU6ICNGRkY7XFxuJGNvcHBlci1ydXN0OiAjRTk1RTNFO1xcbiRlZ2dwbGFudDogIzUxMzY0QztcXG4kcHVycGxlLWdyZXk6ICNhMThlOWQ7XFxuJHN1bi15ZWxsb3c6ICNGQUFDMTg7XFxuJHBvcHBpbnMtZm9udDogJ1BvcHBpbnMnLFxcbnNhbnMtc2VyaWY7XFxuJHJhbGV3YXktZm9udDogJ1JhbGV3YXknLFxcbnNhbnMtc2VyaWY7XFxuJHNoYWRvdzogMHB4IDNweCAxMHB4IDJweCAkZWdncGxhbnQ7XFxuXFxuQG1peGluIGhvdmVyLWJ1dHRvbigkY29sb3IpIHtcXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgJGNvbG9yO1xcbn1cXG5cXG5AbWl4aW4gY2FyZC1idXR0b24oJGltYWdlLCAkc2l6ZSwgJGNvbG9yKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGltYWdlKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBoZWlnaHQ6ICRzaXplO1xcbiAgd2lkdGg6ICRzaXplO1xcbn1cXG5cXG5AbWl4aW4gcmVjaXBlLWluZm8oJHdpZHRoKSB7XFxuICBoZWlnaHQ6IDQyLjV2aDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHdpZHRoOiAkd2lkdGg7XFxufVxcblwiLFwiLmNhcmQge1xcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29wcGVyLXJ1c3Q7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZWdncGxhbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5pbmZvLWNhcmQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDlyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJlY2lwZS1uYW1lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG4uY2FyZC1waWN0dXJlIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblwiLFwiLnJlY2lwZS1kZXRhaWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAkc2hhZG93O1xcbiAgY29sb3I6ICRlZ2dwbGFudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiA1MHZ3O1xcbn1cXG5cXG4uYWxsLXJlY2lwZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIEBpbmNsdWRlIHJlY2lwZS1pbmZvKDQ1dncpXFxufVxcblxcbi5yZWNpcGUtaW5ncmVkaWVudHMge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGVnZ3BsYW50O1xcbiAgQGluY2x1ZGUgcmVjaXBlLWluZm8oMzB2dylcXG59XFxuXFxuaDMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvcHBlci1ydXN0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNTAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAxN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnN0cnVjdGlvbi1saSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29vay1yZWNpcGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBAZXh0ZW5kIC5yZWNpcGUtZGV0YWlscztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI4dnc7XFxufVxcblxcbi5jb29rLWl0IHtcXG4gIHdpZHRoOiAyNS43NXZ3O1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5kZXRhaWxzLW1lc3NhZ2Uge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmRldGFpbHMtbWlzc2luZyB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4uZGV0YWlscy1jb3N0IHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVwiLFwiQGltcG9ydCAndmFyaWFibGVzJztcXG5AaW1wb3J0ICdidXR0b25zJztcXG5AaW1wb3J0ICdjYXJkcyc7XFxuQGltcG9ydCAncmVjaXBlLWRldGFpbHMnO1xcbkBpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9mZi13aGl0ZTtcXG4gIGNvbG9yOiAkZWdncGxhbnQ7XFxufVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAkcmFsZXdheS1mb250O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRvZmYtd2hpdGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCAycHggJGVnZ3BsYW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiAkcG9wcGlucy1mb250O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiAkc3VuLXllbGxvdztcXG4gIGZvbnQtc2l6ZTogMjU1JTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udXNlci1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMTgwJTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDlyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNDAlO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFsbC1jYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDNyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmFsbCB7XFxuICBncmlkLWdhcDogMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBtYXJnaW4tdG9wOiA5cmVtO1xcbn1cXG5cXG5cXG5cXG4vLyBUQUJMRVRTXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5hbGwtY2FyZHMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuXFxuICAuY2FyZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG5cXG4gIC5uYXZCdXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMjIlO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1iYXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1pbnB1dCB7XFxuICAgIGhlaWdodDogMy41dmg7XFxuICB9XFxuXFxuICAuc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gIH1cXG5cXG4gIC51c2VyLWluZm8ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogOHJlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5jb29rLXJlY2lwZSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAucmVjaXBlLWRldGFpbHMge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLmFsbCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcblxcbiAgaDMge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbn1cXG5cXG4vLyBNT0JJTEVcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmFsbC1jYXJkcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICB9XFxuXFxuICAuY2FyZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG5cXG4gIC5jYXJkLXBpY3R1cmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXZCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IC44MHJlbTtcXG4gIH1cXG5cXG5cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDIyJTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtYmFyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAuNjVyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuXFxuICAuc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gIH1cXG5cXG4gIC51c2VyLWluZm8ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBAaW5jbHVkZSBjYXJkLWJ1dHRvbignLi4vaW1hZ2VzL2hhbWJ1cmdlci5wbmcnLCA2MHB4LCAkd2hpdGUpO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgLmhhbWJ1cmdlcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5oYW1idXJnZXItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNWVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVlbTtcXG4gICAgY29sb3I6ICRlZ2dwbGFudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xcbiAgICBtYXJnaW4tdG9wOiA2MXB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1pdGVtIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IC4zNWVtO1xcbiAgfVxcblxcbiAgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDRweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGUtZGV0YWlscyB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBDb29rYm9vayB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZURhdGEsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMucmVjaXBlcyA9IHJlY2lwZURhdGE7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzRGF0YTtcbiAgfVxuXG4gIGZpbmRSZWNpcGVzQnlUYWdOYW1lT3JJbmdyZWRpZW50KHNlYXJjaFRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS5pbmdyZWRpZW50cy5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgICBsZXQgaW5ncmVkaWVudE5hbWUgPSB0aGlzLmNvbnZlcnRJbmdyZWRpZW50SWRUb05hbWUoaW5ncmVkaWVudCk7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50TmFtZS5pbmNsdWRlcyhzZWFyY2hUZXh0KSB8fFxuICAgICAgICAgIHJlY2lwZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dCkgfHxcbiAgICAgICAgICByZWNpcGUudGFncy5pbmNsdWRlcyhzZWFyY2hUZXh0KVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGNvbnZlcnRJbmdyZWRpZW50SWRUb05hbWUoaW5ncmVkaWVudCkge1xuICAgIGxldCBpbmdyZWRpZW50RGF0YSA9IHRoaXMuaW5ncmVkaWVudHMuZmluZChlbnRyeSA9PiBlbnRyeS5pZCA9PT0gaW5ncmVkaWVudC5pZCk7XG4gICAgcmV0dXJuIGluZ3JlZGllbnREYXRhLm5hbWU7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb29rYm9vazsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwibGV0IGRvbVVwZGF0ZXMgPSB7XG4gIGRpc3BsYXlDYXJkcyhyZWNpcGVzTGlzdCwgY2FyZEFyZWEsIHZpZXdMYWJlbHMpIHtcbiAgICB0aGlzLmludGVyYWN0V2l0aENsYXNzTGlzdCgncmVtb3ZlJywgYGFsbGAsIGV2ZW50LCBjYXJkQXJlYSk7XG4gICAgdGhpcy5pbnRlcmFjdFdpdGhDbGFzc0xpc3QoJ2FkZCcsIGAke3ZpZXdMYWJlbHNbMF19YCwgZXZlbnQsIGNhcmRBcmVhKTtcbiAgICB0aGlzLmludGVyYWN0V2l0aENsYXNzTGlzdCgncmVtb3ZlJywgYCR7dmlld0xhYmVsc1sxXX1gLCBldmVudCwgY2FyZEFyZWEpO1xuICAgIHRoaXMuaW50ZXJhY3RXaXRoQ2xhc3NMaXN0KCdyZW1vdmUnLCBgJHt2aWV3TGFiZWxzWzJdfWAsIGV2ZW50LCBjYXJkQXJlYSk7XG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgcmVjaXBlc0xpc3QuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxkaXYgaWQ9JyR7cmVjaXBlLmlkfS1jYXJkJ1xuICAgICAgY2xhc3M9J2NhcmQnPlxuICAgICAgPGhlYWRlciBpZD0nJHtyZWNpcGUuaWR9LWhlYWRlcicgY2xhc3M9J2NhcmQtaGVhZGVyJz5cbiAgICAgIDxsYWJlbCBmb3I9J2FkZC1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGFkZCByZWNpcGU8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiBpZD0nJHtyZWNpcGUuaWR9LWFkZCcgYXJpYS1sYWJlbD0nQWRkIFJlY2lwZSBUbyBDb29rIExpc3QnIGNsYXNzPSdhZGQtYnV0dG9uIGFkZC1idXR0b24ke3JlY2lwZS5pZH0gY2FyZC1idXR0b24nPjwvYnV0dG9uPlxuICAgICAgPGxhYmVsIGZvcj0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBmYXZvcml0ZSByZWNpcGVcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnV0dG9uIGlkPScke3JlY2lwZS5pZH0tZmF2JyBhcmlhLWxhYmVsPSdGYXZvcml0ZSBCdXR0b24nIGNsYXNzPSdmYXZvcml0ZSBmYXZvcml0ZSR7cmVjaXBlLmlkfSBjYXJkLWJ1dHRvbic+XG4gICAgICA8L2J1dHRvbj48L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1zdHlsaW5nXCI+XG4gICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfS1pbWcnIGNsYXNzPSdjYXJkLXBpY3R1cmUnXG4gICAgICAgIHNyYz0nJHtyZWNpcGUuaW1hZ2V9JyBhbHQ9J0Zvb2QgZnJvbSByZWNpcGUnPlxuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J2luZm8tY2FyZCc+XG4gICAgICAgICAgPHAgaWQ9JyR7cmVjaXBlLmlkfS1uYW1lJyBjbGFzcz0ncmVjaXBlLW5hbWUnPiR7cmVjaXBlLm5hbWV9PC9wPlxuICAgICAgICAgIDxsYWJlbCBmb3I9J3ZpZXctZGV0YWlscycgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gdmlldyByZWNpcGUgZGV0YWlsc1xuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbiBpZD0nJHtyZWNpcGUuaWR9JyBhcmlhLWxhYmVsPSdWaWV3IFJlY2lwZScgY2xhc3M9J3ZpZXctZGV0YWlscyB2aWV3LWRldGFpbHMke3JlY2lwZS5pZH0nPlZpZXcgUmVjaXBlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBgKVxuICAgIH0pXG4gIH0sXG5cbiAgZGlzcGxheUNvb2tEZXRhaWxzKGlkLCBtaXNzaW5nSW5ncmVkaWVudHMsIGNvc3RPZlJlbWFpbmluZ0luZ3JlZGllbnRzKSB7XG4gICAgbGV0IGRldGFpbHNBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvb2stcmVjaXBlYCk7XG4gICAgaWYobWlzc2luZ0luZ3JlZGllbnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICBkZXRhaWxzQXJ0aWNsZS5pbm5lckhUTUwgPVxuICAgICAgICBgPGgzPkNhbiBJIENvb2sgSXQ/PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz0nY29vay1kZXRhaWxzJz5cbiAgICAgICAgPHAgY2xhc3M9J2RldGFpbHMtdGl0bGUnPlllcyBZb3UgQ2FuITwvcD48cCBjbGFzcz0nZGV0YWlscy1tZXNzYWdlJz5Zb3UgaGF2ZSBBTEwgdGhlIGluZ3JlZGllbnRzIGluIHlvdXIgcGFudHJ5IHRvIGNvb2sgdGhpcyBtZWFsLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9J2FkZC1pbmdyZWRpZW50cy10by1wYW50cnknIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGFkZCBtaXNzaW5nIGluZ3JlZGllbnRzIHRvIHlvdXIgcGFudHJ5XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nQWRkIEluZ3JlZGllbnRzIFRvIFBhbnRyeScgaWQ9JyR7aWR9JyBjbGFzcz0nYWRkLWluZ3JlZGllbnRzLXRvLXBhbnRyeSBkaXNhYmxlZCcgZGlzYWJsZWQ+QWRkIEluZ3JlZGllbnRzPC9idXR0b24+XG4gICAgICAgIDxsYWJlbCBmb3I9J2Nvb2stcmVjaXBlJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBjb29rIHRoaXMgcmVjaXBlLCBhbmQgcmVtb3ZlIGluZ3JlZGllbnRzIGZyb20geW91ciBwYW50cnlcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSdDb29rIFRoaXMgUmVjaXBlJyBpZD0nJHtpZH0nIGNsYXNzPSdjb29rLXJlY2lwZS1idXR0b24nPkNvb2sgUmVjaXBlPC9idXR0b24+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGV0YWlsc0FydGljbGUuaW5uZXJIVE1MID1cbiAgICAgICAgYDxoMz5DYW4gSSBDb29rIEl0PzwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9J2Nvb2stZGV0YWlscyc+XG4gICAgICAgIDxwIGNsYXNzPSdkZXRhaWxzLXRpdGxlJz5ObyBZb3UgQ2FuJ3QhPC9wPjxwIGNsYXNzPSdkZXRhaWxzLW1lc3NhZ2UnPllvdSB3aWxsIGhhdmUgdG8gZ28gc2hvcHBpbmcgdG8gZ2V0IHNvbWUgb2YgdGhlIGluZ3JlZGllbnRzIG5lZWRlZCB0byBjb29rIHRoaXMgbWVhbC48L3A+XG4gICAgICAgIDxwIGNsYXNzPSdkZXRhaWxzLW1pc3NpbmcnPjxiPk1pc3NpbmcgSW5ncmVkaWVudHM6PC9iPjxicj4ke21pc3NpbmdJbmdyZWRpZW50cy5qb2luKCcsICcpfTwvcD5cbiAgICAgICAgPHAgY2xhc3M9J2RldGFpbHMtY29zdCc+VG8gcmVzdG9jayB0aGVzZSBpbmdyZWRpZW50cyB3aWxsIGNvc3Q6ICQke2Nvc3RPZlJlbWFpbmluZ0luZ3JlZGllbnRzfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9J2FkZC1pbmdyZWRpZW50cy10by1wYW50cnknIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGFkZCBtaXNzaW5nIGluZ3JlZGllbnRzIHRvIHlvdXIgcGFudHJ5XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD0nQWRkIEluZ3JlZGllbnRzIFRvIFBhbnRyeScgaWQ9JyR7aWR9JyBjbGFzcz0nYWRkLWluZ3JlZGllbnRzLXRvLXBhbnRyeSc+QWRkIEluZ3JlZGllbnRzPC9idXR0b24+XG4gICAgICAgIDxsYWJlbCBmb3I9J2Nvb2stcmVjaXBlJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBjb29rIHRoaXMgcmVjaXBlLCBhbmQgcmVtb3ZlIGluZ3JlZGllbnRzIGZyb20geW91ciBwYW50cnlcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSdDb29rIFRoaXMgUmVjaXBlJyBpZD0nJHtpZH0nIGNsYXNzPSdjb29rLXJlY2lwZS1idXR0b24gZGlzYWJsZWQnIGRpc2FibGVkPkNvb2sgUmVjaXBlPC9idXR0b24+YDtcbiAgICB9O1xuICB9LFxuXG4gIGdyZWV0VXNlcih1c2VyKSB7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1pbmZvJyk7XG4gICAgdXNlck5hbWUuaW5uZXJUZXh0ID0gYFdlbGNvbWUsICR7dXNlci5uYW1lfS5gO1xuICB9LFxuICBpbnRlcmFjdFdpdGhDbGFzc0xpc3QobWV0aG9kLCBjbGFzc05hbWUsIGV2ZW50LCBlbGVtZW50KSB7XG4gICAgaWYgKG1ldGhvZCA9PT0gJ2FkZCcgJiYgZWxlbWVudCAmJiBjbGFzc05hbWUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAncmVtb3ZlJyAmJiBlbGVtZW50ICYmIGNsYXNzTmFtZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdjb250YWlucycgJiYgY2xhc3NOYW1lICYmIGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnYWRkJyAmJiBlbGVtZW50ID09PSB1bmRlZmluZWQgJiYgY2xhc3NOYW1lKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAncmVtb3ZlJyAmJiBlbGVtZW50ID09PSB1bmRlZmluZWQgJiYgY2xhc3NOYW1lKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnY29udGFpbnMnICYmIGNsYXNzTmFtZSAmJiBlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICd0b2dnbGUnICYmIGVsZW1lbnQgJiYgY2xhc3NOYW1lKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH0sXG4gIGRpc3BsYXlPbmVMaW5lcnMoZWxlbWVudCwgdGV4dCkge1xuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgfSxcbiAgcG9wdWxhdGVSZWNpcGVEZXRhaWxzKGNhcmRBcmVhLCByZWNpcGVPYmplY3QsIGNvc3RJbkRvbGxhcnMpIHtcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSBgXG4gICAgPGFydGljbGUgY2xhc3M9IFwicmVjaXBlLWRldGFpbHNcIj5cbiAgICA8aDM+JHtyZWNpcGVPYmplY3QubmFtZX08L2gzPlxuICAgIDxkaXYgY2xhc3M9J2FsbC1yZWNpcGUtaW5mbyc+XG4gICAgPHAgY2xhc3M9J3JlY2lwZS1pbmdyZWRpZW50cyc+XG4gICAgPHN0cm9uZz5JdCB3aWxsIGNvc3Q6IDwvc3Ryb25nPjxzcGFuIGNsYXNzPSdjb3N0IHJlY2lwZS1pbmZvJz5cbiAgICAkJHtjb3N0SW5Eb2xsYXJzfTwvc3Bhbj48YnI+PGJyPlxuICAgIDxzdHJvbmc+WW91IHdpbGwgbmVlZDogPC9zdHJvbmc+PHNwYW4gY2xhc3M9J2luZ3JlZGllbnRzIHJlY2lwZS1pbmZvJz48L3NwYW4+XG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9J3JlY2lwZS1pbnN0cnVjdGlvbnMnPlxuICAgIDxzdHJvbmc+SW5zdHJ1Y3Rpb25zOiA8L3N0cm9uZz48b2w+PHNwYW4gY2xhc3M9J2luc3RydWN0aW9ucyByZWNpcGUtaW5mbyc+XG4gICAgPC9zcGFuPjwvb2w+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICAgIDxhcnRpY2xlIGNsYXNzPSdjb29rLXJlY2lwZSc+PC9hcnRpY2xlPmA7XG5cbiAgICBsZXQgaW5ncmVkaWVudHNTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZ3JlZGllbnRzJyk7XG4gICAgbGV0IGluc3RydWN0aW9uc1NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdHJ1Y3Rpb25zJyk7XG5cbiAgICByZWNpcGVPYmplY3QuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGluZ3JlZGllbnRzU3Bhbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPHVsPjxsaT5cbiAgICAgICR7aW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQudG9GaXhlZCgyKX0gJHtpbmdyZWRpZW50LnF1YW50aXR5LnVuaXR9XG4gICAgICAke2luZ3JlZGllbnQubmFtZX08L2xpPjwvdWw+XG4gICAgICBgKVxuICAgIH0pXG4gICAgcmVjaXBlT2JqZWN0Lmluc3RydWN0aW9ucy5mb3JFYWNoKGluc3RydWN0aW9uID0+IHtcbiAgICAgIGluc3RydWN0aW9uc1NwYW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGA8bGkgY2xhc3M9J2luc3RydWN0aW9uLWxpJz5cbiAgICAgICR7aW5zdHJ1Y3Rpb24uaW5zdHJ1Y3Rpb259PC9saT5cbiAgICAgIGApXG4gICAgfSlcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9jaGVja21hcmsucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvaGFtYnVyZ2VyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BsdXMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2VhcmNoLWhvdmVyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NlYXJjaC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zdGFyLWZpbGxlZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zdGFyLnBuZ1wiOyIsImNsYXNzIFBhbnRyeSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJJbmdyZWRpZW50cykge1xuICAgIHRoaXMuY29udGVudHMgPSB1c2VySW5ncmVkaWVudHM7XG4gIH1cblxuZ2V0TWlzc2luZ1BhcnRPZlJlY2lwZShyZWNpcGUpIHtcbiAgbGV0IG5ld0luZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzLm1hcChpbmdyZWRpZW50ID0+IHtcbiAgICAgIGlmKCF0aGlzLmNvbnRlbnRzLnNvbWUoZW50cnkgPT4gZW50cnkuaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZCkpIHtcbiAgICAgICAgaW5ncmVkaWVudC5taXNzaW5nID0gaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQ7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZW50cy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBpZiAoZW50cnkuaW5ncmVkaWVudCA9PT0gaW5ncmVkaWVudC5pZCAmJiBlbnRyeS5hbW91bnQgPCBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkge1xuICAgICAgICAgICAgbGV0IG1pc3NpbmdBbW91bnQgPSBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCAtIGVudHJ5LmFtb3VudDtcbiAgICAgICAgICAgIGluZ3JlZGllbnQubWlzc2luZyA9IG1pc3NpbmdBbW91bnQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5pbmdyZWRpZW50ID09PSBpbmdyZWRpZW50LmlkICYmIGVudHJ5LmFtb3VudCA+PSBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudCkge1xuICAgICAgICAgICAgaW5ncmVkaWVudC5taXNzaW5nID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cyA9IG5ld0luZ3JlZGllbnRzO1xuICAgIHJldHVybiByZWNpcGU7XG4gIH1cblxuICBkZXRlcm1pbmVFbm91Z2hJbmdyZWRpZW50cyhyZWNpcGUpIHtcbiAgICBsZXQgcmVjaXBlQ2hlY2sgPSB0aGlzLmdldE1pc3NpbmdQYXJ0T2ZSZWNpcGUocmVjaXBlKVxuICAgIHJldHVybiByZWNpcGVDaGVjay5pbmdyZWRpZW50cy5ldmVyeShpdGVtID0+IGl0ZW0ubWlzc2luZyA9PT0gMClcbiAgfVxuXG4gIGNhbGN1bGF0ZU1pc3NpbmdDb3N0KHJlY2lwZSkge1xuICAgIGxldCBzaG9wcGluZ0xpc3QgPSB0aGlzLmdldE1pc3NpbmdQYXJ0T2ZSZWNpcGUocmVjaXBlKTtcbiAgICBjb25zdCB0b3RhbENlbnRzID0gc2hvcHBpbmdMaXN0LmluZ3JlZGllbnRzLnJlZHVjZSgoY29zdFRhbGx5LCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICBsZXQgY29zdEZvclJlY2lwZSA9IGluZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHMgKiBpbmdyZWRpZW50Lm1pc3Npbmc7XG4gICAgICByZXR1cm4gY29zdFRhbGx5ICs9IGNvc3RGb3JSZWNpcGU7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuICh0b3RhbENlbnRzIC8gMTAwKS50b0ZpeGVkKDIpO1xuICB9XG5cbiAgZ2V0SW5ncmVkaWVudHNUb1VwZGF0ZShyZWNpcGUsIHVwZGF0ZVR5cGUpe1xuICAgIGxldCBpbmdyZWRpZW50c0luUGFudHJ5ID0gcmVjaXBlLmluZ3JlZGllbnRzLnJlZHVjZSgoYWNjLCBpbmdyZWRpZW50KSA9PiB7XG4gICAgICBpZih1cGRhdGVUeXBlID09PSAnYWRkJyAmJiBpbmdyZWRpZW50Lm1pc3NpbmcgPiAwKXtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICBcImluZ3JlZGllbnRcIjogaW5ncmVkaWVudC5pZCxcbiAgICAgICAgICBcImFtb3VudFRvQWRkXCI6IChpbmdyZWRpZW50Lm1pc3NpbmcgKiA1KVxuICAgICAgICAgIH07XG4gICAgICAgIGFjYy5wdXNoKG9iailcbiAgICAgIH0gZWxzZSBpZih1cGRhdGVUeXBlID09PSAncmVtb3ZlJykge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgIFwiaW5ncmVkaWVudFwiOiBpbmdyZWRpZW50LmlkLFxuICAgICAgICAgIFwiYW1vdW50VG9SZW1vdmVcIjogLTEgKiBpbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudFxuICAgICAgICB9O1xuICAgICAgICBhY2MucHVzaChvYmopXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIGluZ3JlZGllbnRzSW5QYW50cnlcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBhbnRyeTsiLCJjbGFzcyBSZWNpcGUge1xuICBjb25zdHJ1Y3RvcihyZWNpcGUsIGluZ3JlZGllbnRzRGF0YSkge1xuICAgIHRoaXMubmFtZSA9IHJlY2lwZS5uYW1lO1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5pbmdyZWRpZW50cyA9IHJlY2lwZS5pbmdyZWRpZW50cy5tYXAocmVjaXBlSW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgaW5ncmVkaWVudEluZm8gPSBpbmdyZWRpZW50c0RhdGEuZmluZChpbmdyZWRpZW50ID0+IGluZ3JlZGllbnQuaWQgPT09IHJlY2lwZUluZ3JlZGllbnQuaWQpO1xuICAgICAgcmVjaXBlSW5ncmVkaWVudC5taXNzaW5nID0gMDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnJlY2lwZUluZ3JlZGllbnQsXG4gICAgICAgIC4uLmluZ3JlZGllbnRJbmZvXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmluc3RydWN0aW9ucztcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgfVxuXG5cbiAgY2FsY3VsYXRlQ29zdCgpIHtcbiAgICBjb25zdCB0b3RhbENlbnRzID0gdGhpcy5pbmdyZWRpZW50cy5yZWR1Y2UoKGNvc3RUYWxseSwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgbGV0IGNvc3RGb3JSZWNpcGUgPSBpbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzICogaW5ncmVkaWVudC5xdWFudGl0eS5hbW91bnQ7XG4gICAgICByZXR1cm4gY29zdFRhbGx5ICs9IGNvc3RGb3JSZWNpcGU7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuICh0b3RhbENlbnRzIC8gMTAwKS50b0ZpeGVkKDIpO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RydWN0aW9ucztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTsiLCJpbXBvcnQgJy4vY3NzL2luZGV4LnNjc3MnO1xuaW1wb3J0IENvb2tib29rIGZyb20gJy4vY29va2Jvb2snO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuXG5sZXQgZmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctZmF2b3JpdGVzJyk7XG5sZXQgdG9Db29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctdG8tY29vay1saXN0JylcbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKVxubGV0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XG5sZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG5cbmxldCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xubGV0IGhhbWJ1cmdlck1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXItY29udGVudFwiKTtcbmxldCBtb2JpbGVGYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXctZmF2b3JpdGVzLW1vYmlsZVwiKTtcbmxldCBtb2JpbGVUb0Nvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXctdG8tY29vay1saXN0LW1vYmlsZVwiKTtcbmxldCBtb2JpbGVIb21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLW1vYmlsZVwiKTtcblxubGV0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xuXG5sZXQgdXNlciwgcGFudHJ5LCBjb29rYm9vaztcblxud2luZG93Lm9ubG9hZCA9IG9uU3RhcnR1cCgpO1xuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXR1cm5Ib21lKTtcbmZhdkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXdGYXZvcml0ZXMpO1xudG9Db29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlld1JlY2lwZXNUb0Nvb2spO1xuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hSZWNpcGVzKTtcblxuaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUhhbWJ1cmdlck1lbnVEcm9wZG93bik7XG5tb2JpbGVGYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHZpZXdGYXZvcml0ZXMpO1xubW9iaWxlVG9Db29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB2aWV3UmVjaXBlc1RvQ29vayk7XG5tb2JpbGVIb21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXR1cm5Ib21lKTtcblxuY2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhcmRBcmVhQnV0dG9ucyk7XG5cbmZ1bmN0aW9uIG9uU3RhcnR1cCgpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtnZXRVc2VyRGF0YSgpLCBnZXRSZWNpcGVEYXRhKCksIGdldEluZ3JlZGllbnREYXRhKCldKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgbGV0IHVzZXJEYXRhID0gZGF0YVswXTtcbiAgICAgIGxldCByZWNpcGVEYXRhID0gZGF0YVsxXTtcbiAgICAgIGxldCBpbmdyZWRpZW50RGF0YSA9IGRhdGFbMl07XG4gICAgICBidWlsZFBhZ2UodXNlckRhdGEsIHJlY2lwZURhdGEsIGluZ3JlZGllbnREYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG59XG5cbmZ1bmN0aW9uIGdldFVzZXJEYXRhKCkge1xuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxufVxuXG5mdW5jdGlvbiBnZXRSZWNpcGVEYXRhKCkge1xuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3JlY2lwZXNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG59XG5cbmZ1bmN0aW9uIGdldEluZ3JlZGllbnREYXRhKCkge1xuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL2luZ3JlZGllbnRzXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxufVxuXG5mdW5jdGlvbiBidWlsZFBhZ2UodXNlcnMsIHJlY2lwZXMsIGluZ3JlZGllbnRzKSB7XG4gIGNyZWF0ZVVzZXJXb3JsZCh1c2VycywgcmVjaXBlcywgaW5ncmVkaWVudHMpO1xuICBkb21VcGRhdGVzLmdyZWV0VXNlcih1c2VyKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHMoY29va2Jvb2sucmVjaXBlcywgY2FyZEFyZWEsIFsnJywgJycsICcnXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJXb3JsZCh1c2VycywgcmVjaXBlcywgaW5ncmVkaWVudHMpIHtcbiAgbGV0IHVzZXJJZCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0OSkgKyAxKVxuICBsZXQgbmV3VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB7XG4gICAgcmV0dXJuIHVzZXIuaWQgPT09IE51bWJlcih1c2VySWQpO1xuICB9KTtcbiAgdXNlciA9IG5ldyBVc2VyKHVzZXJJZCwgbmV3VXNlci5uYW1lLCBuZXdVc2VyLnBhbnRyeSwgaW5ncmVkaWVudHMpXG4gIHBhbnRyeSA9IG5ldyBQYW50cnkobmV3VXNlci5wYW50cnkpXG4gIGNvb2tib29rID0gbmV3IENvb2tib29rKHJlY2lwZXMsIGluZ3JlZGllbnRzKTtcbn1cblxuZnVuY3Rpb24gdmlld0Zhdm9yaXRlcygpIHtcbiAgaWYgKHVzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aCkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCBjYXJkQXJlYSwgWydmYXZvcml0ZVJlY2lwZXMnLCAncmVjaXBlc1RvQ29vaycsICcnXSk7XG4gIH1cbiAgZGlzcGxheVJlY2lwZUZhdm9yaXRlT3JDb29rbGlzdExhYmVscyh1c2VyLmZhdm9yaXRlUmVjaXBlcyk7XG59XG5cbmZ1bmN0aW9uIHZpZXdSZWNpcGVzVG9Db29rKCkge1xuICBpZiAodXNlci5yZWNpcGVzVG9Db29rLmxlbmd0aCkge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKHVzZXIucmVjaXBlc1RvQ29vaywgY2FyZEFyZWEsIFsncmVjaXBlc1RvQ29vaycsICdmYXZvcml0ZVJlY2lwZXMnLCAnJ10pO1xuICB9XG4gIGRpc3BsYXlSZWNpcGVGYXZvcml0ZU9yQ29va2xpc3RMYWJlbHModXNlci5yZWNpcGVzVG9Db29rKTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuSG9tZSgpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHMoY29va2Jvb2sucmVjaXBlcywgY2FyZEFyZWEsIFsnJywgJ2Zhdm9yaXRlUmVjaXBlcycsICdyZWNpcGVzVG9Db29rJ10pO1xuICBkaXNwbGF5UmVjaXBlRmF2b3JpdGVPckNvb2tsaXN0TGFiZWxzKGNvb2tib29rLnJlY2lwZXMpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVIYW1idXJnZXJNZW51RHJvcGRvd24oKSB7XG4gIGRvbVVwZGF0ZXMuaW50ZXJhY3RXaXRoQ2xhc3NMaXN0KFwidG9nZ2xlXCIsIFwiaGlkZGVuXCIsIGV2ZW50LCBoYW1idXJnZXJNZW51Q29udGVudCk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFJlY2lwZXMoKSB7XG4gIHZpZXdTZWFyY2hlZFJlY2lwZXMoKTtcbiAgc2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiB2aWV3U2VhcmNoZWRSZWNpcGVzKCkge1xuICBsZXQgZmlsdGVyZWRSZWNpcGVzO1xuICBpZiAoZG9tVXBkYXRlcy5pbnRlcmFjdFdpdGhDbGFzc0xpc3QoJ2NvbnRhaW5zJywgJ2Zhdm9yaXRlUmVjaXBlcycsIGV2ZW50LCBjYXJkQXJlYSkpIHtcbiAgICBmaWx0ZXJlZFJlY2lwZXMgPSB1c2VyLmZpbmRGYXZvcml0ZXMoc2VhcmNoSW5wdXQudmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGZpbHRlcmVkUmVjaXBlcyA9IGNvb2tib29rLmZpbmRSZWNpcGVzQnlUYWdOYW1lT3JJbmdyZWRpZW50KHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICB9XG4gIGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKGZpbHRlcmVkUmVjaXBlcywgY2FyZEFyZWEsIFsnJywgJ2Zhdm9yaXRlUmVjaXBlcycsICdyZWNpcGVzVG9Db29rJ10pO1xuICBkaXNwbGF5UmVjaXBlRmF2b3JpdGVPckNvb2tsaXN0TGFiZWxzKGZpbHRlcmVkUmVjaXBlcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNhcmRBcmVhQnV0dG9ucyhldmVudCkge1xuICBpZiAoZG9tVXBkYXRlcy5pbnRlcmFjdFdpdGhDbGFzc0xpc3QoJ2NvbnRhaW5zJywgJ2Zhdm9yaXRlJywgZXZlbnQpKSB7XG4gICAgYWRkQ2FyZFRvRmF2b3JpdGVzT3JDb29rTGlzdChldmVudCwgJ2Zhdm9yaXRlUmVjaXBlcycsICdmYXZvcml0ZS1hY3RpdmUnLCAnLWZhdicpO1xuICB9IGVsc2UgaWYgKGRvbVVwZGF0ZXMuaW50ZXJhY3RXaXRoQ2xhc3NMaXN0KCdjb250YWlucycsICdhZGQtYnV0dG9uJywgZXZlbnQpIHx8IGRvbVVwZGF0ZXMuaW50ZXJhY3RXaXRoQ2xhc3NMaXN0KCdjb250YWlucycsICdhZGQnLCBldmVudCkpIHtcbiAgICBhZGRDYXJkVG9GYXZvcml0ZXNPckNvb2tMaXN0KGV2ZW50LCAncmVjaXBlc1RvQ29vaycsICdhZGQtYWN0aXZlJywgJy1hZGQnKVxuICB9IGVsc2UgaWYgKGRvbVVwZGF0ZXMuaW50ZXJhY3RXaXRoQ2xhc3NMaXN0KCdjb250YWlucycsICd2aWV3LWRldGFpbHMnLCBldmVudCkpIHtcbiAgICB2aWV3UmVjaXBlRGV0YWlscyhldmVudCk7XG4gIH0gZWxzZSBpZiAoZG9tVXBkYXRlcy5pbnRlcmFjdFdpdGhDbGFzc0xpc3QoJ2NvbnRhaW5zJywgJ2Nvb2stcmVjaXBlLWJ1dHRvbicsIGV2ZW50KSkge1xuICAgIHJlbW92ZUluZ3JlZGllbnRzVXNlZFRvQ29va1JlY2lwZShldmVudCk7XG4gIH0gZWxzZSBpZiAoZG9tVXBkYXRlcy5pbnRlcmFjdFdpdGhDbGFzc0xpc3QoJ2NvbnRhaW5zJywgJ2FkZC1pbmdyZWRpZW50cy10by1wYW50cnknLCBldmVudCkpIHtcbiAgICBhZGRNaXNzaW5nSW5ncmVkaWVudHNOZWVkZWRGb3JSZWNpcGUoZXZlbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENhcmRUb0Zhdm9yaXRlc09yQ29va0xpc3QoZXZlbnQsIGxpc3RDYXRlZ29yeSwgYWN0aXZlQ2xhc3NOYW1lLCBpZE5hbWUpIHtcbiAgbGV0IHNwZWNpY0lkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5pZC5yZXBsYWNlKGlkTmFtZSwgJycpKVxuICBsZXQgc3BlY2lmaWNSZWNpcGUgPSBjb29rYm9vay5yZWNpcGVzLmZpbmQocmVjaXBlID0+IHJlY2lwZS5pZCA9PT0gc3BlY2ljSWQpXG4gIGlmICghZG9tVXBkYXRlcy5pbnRlcmFjdFdpdGhDbGFzc0xpc3QoJ2NvbnRhaW5zJywgYWN0aXZlQ2xhc3NOYW1lLCBldmVudCkpIHtcbiAgICBkb21VcGRhdGVzLmludGVyYWN0V2l0aENsYXNzTGlzdCgnYWRkJywgYWN0aXZlQ2xhc3NOYW1lLCBldmVudCk7XG4gICAgdXNlci5hZGRUb0xpc3Qoc3BlY2lmaWNSZWNpcGUsIGxpc3RDYXRlZ29yeSk7XG4gIH0gZWxzZSBpZiAoZG9tVXBkYXRlcy5pbnRlcmFjdFdpdGhDbGFzc0xpc3QoJ2NvbnRhaW5zJywgYWN0aXZlQ2xhc3NOYW1lLCBldmVudCkpIHtcbiAgICBkb21VcGRhdGVzLmludGVyYWN0V2l0aENsYXNzTGlzdCgncmVtb3ZlJywgYWN0aXZlQ2xhc3NOYW1lLCBldmVudCk7XG4gICAgdXNlci5yZW1vdmVGcm9tTGlzdChzcGVjaWZpY1JlY2lwZSwgbGlzdENhdGVnb3J5KVxuICAgIHJlZnJlc2hDdXJyZW50Q2FyZEZpbHRlcldpdGhVcGRhdGVkTGlzdChsaXN0Q2F0ZWdvcnkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hDdXJyZW50Q2FyZEZpbHRlcldpdGhVcGRhdGVkTGlzdChsaXN0Q2F0ZWdvcnkpIHtcbiAgaWYgKGRvbVVwZGF0ZXMuaW50ZXJhY3RXaXRoQ2xhc3NMaXN0KCdjb250YWlucycsIGAke2xpc3RDYXRlZ29yeX1gLCBldmVudCwgY2FyZEFyZWEpKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHModXNlcltsaXN0Q2F0ZWdvcnldLCBjYXJkQXJlYSwgW2Ake2xpc3RDYXRlZ29yeX1gLCAnJywgJyddKTtcbiAgICBkaXNwbGF5UmVjaXBlRmF2b3JpdGVPckNvb2tsaXN0TGFiZWxzKHVzZXJbbGlzdENhdGVnb3J5XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVJlY2lwZUZhdm9yaXRlT3JDb29rbGlzdExhYmVscyhjdXJyZW50Q2FyZEZpbHRlcikge1xuICBjdXJyZW50Q2FyZEZpbHRlci5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgaWYgKHVzZXIuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgIGxldCByZWNpcGVJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mYXZvcml0ZSR7cmVjaXBlLmlkfWApO1xuICAgICAgZG9tVXBkYXRlcy5pbnRlcmFjdFdpdGhDbGFzc0xpc3QoJ2FkZCcsICdmYXZvcml0ZS1hY3RpdmUnLCBldmVudCwgcmVjaXBlSUQpO1xuICAgIH1cbiAgICBpZiAodXNlci5yZWNpcGVzVG9Db29rLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgIGxldCByZWNpcGVJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5hZGQtYnV0dG9uJHtyZWNpcGUuaWR9YCk7XG4gICAgICBkb21VcGRhdGVzLmludGVyYWN0V2l0aENsYXNzTGlzdCgnYWRkJywgJ2FkZC1hY3RpdmUnLCBldmVudCwgcmVjaXBlSUQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHZpZXdSZWNpcGVEZXRhaWxzKGV2ZW50KSB7XG4gIGxldCBuZXdSZWNpcGVJbmZvID0gY29va2Jvb2sucmVjaXBlcy5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IE51bWJlcihldmVudC50YXJnZXQuaWQpKTtcbiAgbGV0IHJlY2lwZU9iamVjdCA9IG5ldyBSZWNpcGUobmV3UmVjaXBlSW5mbywgY29va2Jvb2suaW5ncmVkaWVudHMpO1xuICBsZXQgY29zdCA9IHJlY2lwZU9iamVjdC5jYWxjdWxhdGVDb3N0KCk7XG4gIGRvbVVwZGF0ZXMuaW50ZXJhY3RXaXRoQ2xhc3NMaXN0KCdhZGQnLCAnYWxsJywgZXZlbnQsIGNhcmRBcmVhKTtcbiAgZG9tVXBkYXRlcy5wb3B1bGF0ZVJlY2lwZURldGFpbHMoY2FyZEFyZWEsIHJlY2lwZU9iamVjdCwgY29zdCk7XG4gIGNvbXBpbGVQYW50cnlEYXRhKHJlY2lwZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYW50cnlEYXRhKHJlY2lwZSkge1xuICBsZXQgbWlzc2luZ0luZ3JlZGllbnRzID0gW11cbiAgbGV0IGNvc3RPZlJlbWFpbmluZ0luZ3JlZGllbnRzO1xuICBpZiAoIXBhbnRyeS5kZXRlcm1pbmVFbm91Z2hJbmdyZWRpZW50cyhyZWNpcGUpKSB7XG4gICAgbWlzc2luZ0luZ3JlZGllbnRzID0gbGlzdE1pc3NpbmdJbmdyZWRpZW50cyhyZWNpcGUpO1xuICAgIGNvc3RPZlJlbWFpbmluZ0luZ3JlZGllbnRzID0gcGFudHJ5LmNhbGN1bGF0ZU1pc3NpbmdDb3N0KHJlY2lwZSk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5Q29va0RldGFpbHMocmVjaXBlLmlkLCBtaXNzaW5nSW5ncmVkaWVudHMsIGNvc3RPZlJlbWFpbmluZ0luZ3JlZGllbnRzKTtcbiAgfSBlbHNlIHtcbiAgICBjb3N0T2ZSZW1haW5pbmdJbmdyZWRpZW50cyA9IHBhbnRyeS5jYWxjdWxhdGVNaXNzaW5nQ29zdChyZWNpcGUpXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5Q29va0RldGFpbHMocmVjaXBlLmlkLCBtaXNzaW5nSW5ncmVkaWVudHMsIGNvc3RPZlJlbWFpbmluZ0luZ3JlZGllbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0TWlzc2luZ0luZ3JlZGllbnRzKHJlY2lwZSkge1xuICByZXR1cm4gcGFudHJ5LmdldE1pc3NpbmdQYXJ0T2ZSZWNpcGUocmVjaXBlKS5pbmdyZWRpZW50cy5yZWR1Y2UoKGFjYywgaW5ncmVkaWVudCkgPT4ge1xuICAgIGlmIChpbmdyZWRpZW50Lm1pc3NpbmcgPiAwKSB7XG4gICAgICBsZXQgc3BlY2lmaWNJbmdyZWRpZW50ID0gY29va2Jvb2suaW5ncmVkaWVudHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGluZ3JlZGllbnQuaWQpO1xuICAgICAgYWNjLnB1c2goc3BlY2lmaWNJbmdyZWRpZW50Lm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGFkZE1pc3NpbmdJbmdyZWRpZW50c05lZWRlZEZvclJlY2lwZShldmVudCkge1xuICBsZXQgcmVwbGFjZVJlY2lwZSA9IGNvb2tib29rLnJlY2lwZXMuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKSlcbiAgbGV0IHNob3BwaW5nTGlzdCA9IHBhbnRyeS5nZXRNaXNzaW5nUGFydE9mUmVjaXBlKHJlcGxhY2VSZWNpcGUpXG4gIGxldCBuZXdJbmdyZWRpZW50cyA9IHBhbnRyeS5nZXRJbmdyZWRpZW50c1RvVXBkYXRlKHNob3BwaW5nTGlzdCwgJ2FkZCcpXG4gIG5ld0luZ3JlZGllbnRzLmZvckVhY2goKGluZ3JlZGllbnQpID0+IHtcbiAgICBsZXQgcG9zdE9wdGlvbiA9IGNyZWF0ZVBvc3RPcHRpb24oaW5ncmVkaWVudCwgJ2Ftb3VudFRvQWRkJyk7XG4gICAgdXBkYXRlUGFudHJ5RGF0YVdpdGhOZXdJbmdyZWRpZW50UXVhbnRpdGllcyhwb3N0T3B0aW9uLCByZXBsYWNlUmVjaXBlKTtcbiAgfSlcbiAgZGlzcGxheUFsZXJ0KCdhZGQnKVxufTtcblxuZnVuY3Rpb24gcmVtb3ZlSW5ncmVkaWVudHNVc2VkVG9Db29rUmVjaXBlKGV2ZW50KSB7XG4gIGxldCBuZXdSZWNpcGVJbmZvID0gY29va2Jvb2sucmVjaXBlcy5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IE51bWJlcihldmVudC50YXJnZXQuaWQpKTtcbiAgbGV0IGNvb2tlZFJlY2lwZSA9IG5ldyBSZWNpcGUobmV3UmVjaXBlSW5mbywgY29va2Jvb2suaW5ncmVkaWVudHMpO1xuICBsZXQgcmVtb3ZlZEluZ3JlZGllbnRzID0gcGFudHJ5LmdldEluZ3JlZGllbnRzVG9VcGRhdGUoY29va2VkUmVjaXBlLCAncmVtb3ZlJylcbiAgcmVtb3ZlZEluZ3JlZGllbnRzLmZvckVhY2goKGluZ3JlZGllbnQpID0+IHtcbiAgICBsZXQgcG9zdE9wdGlvbiA9IGNyZWF0ZVBvc3RPcHRpb24oaW5ncmVkaWVudCwgJ2Ftb3VudFRvUmVtb3ZlJyk7XG4gICB1cGRhdGVQYW50cnlEYXRhV2l0aE5ld0luZ3JlZGllbnRRdWFudGl0aWVzKHBvc3RPcHRpb24sIGNvb2tlZFJlY2lwZSk7XG4gIH0pXG4gICBkaXNwbGF5QWxlcnQoJ3JlbW92ZScpXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQb3N0T3B0aW9uKGluZ3JlZGllbnQsIG1vZGlmeWluZ1Byb3BlcnR5KSB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXJJRDogdXNlci5pZCxcbiAgICAgIGluZ3JlZGllbnRJRDogaW5ncmVkaWVudC5pbmdyZWRpZW50LFxuICAgICAgaW5ncmVkaWVudE1vZGlmaWNhdGlvbjogaW5ncmVkaWVudFttb2RpZnlpbmdQcm9wZXJ0eV1cbiAgICB9KSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFudHJ5RGF0YVdpdGhOZXdJbmdyZWRpZW50UXVhbnRpdGllcyhwb3N0T3B0aW9uLCByZWNpcGUpIHtcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91c2Vyc1wiLCBwb3N0T3B0aW9uKVxuICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAudGhlbigobWVzc2FnZSkgPT4ge1xuICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgUHJvbWlzZS5hbGwoW2dldFVzZXJEYXRhKCksIGdldFJlY2lwZURhdGEoKSwgZ2V0SW5ncmVkaWVudERhdGEoKV0pXG4gICAudGhlbigoZGF0YSkgPT4ge1xuICAgICBsZXQgdXBkYXRlZFVzZXJEYXRhID0gZGF0YVswXTtcbiAgICAgdXNlci5wYW50cnkgPSB1cGRhdGVkVXNlckRhdGEuZmluZChlbnRyeSA9PiBlbnRyeS5pZCA9PT0gdXNlci5pZCkucGFudHJ5XG4gICAgIHBhbnRyeS5jb250ZW50cyA9IHVzZXIucGFudHJ5XG4gICAgIGNvbXBpbGVQYW50cnlEYXRhKHJlY2lwZSk7XG4gICAgICAgfSlcbiAgICAgfSlcbiAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGVydChhbGVydFR5cGUpe1xuICBpZihhbGVydFR5cGUgPT09ICdhZGQnKXtcbiAgICBhbGVydChgQ2xpY2sgT0shIFRvIGNvbmZpcm0gYWRkIG1vcmUgb2YgdGhlIG1pc3NpbmcgaW5ncmVkaWVudHMgdG8geW91ciBwYW50cnkuYCk7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoYENsaWNrIE9LISBUbyBjb29rIHRoaXMgbWVhbCBhbmQgdGFrZSB0aGUgaW5ncmVkaWVudHMgb3V0IG9mIHlvdXIgcGFudHJ5LmApO1xuICB9XG59XG4iLCJjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHBhbnRyeSwgaW5ncmVkaWVudERhdGEpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IHBhbnRyeTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50RGF0YTtcbiAgfVxuXG4gIGFkZFRvTGlzdChyZWNpcGUsIGxpc3QpIHtcbiAgICBpZiAoIXRoaXNbbGlzdF0uaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpc1tsaXN0XS5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRnJvbUxpc3QocmVjaXBlLCBsaXN0KSB7XG4gICAgY29uc3QgaSA9IHRoaXNbbGlzdF0uaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXNbbGlzdF0uc3BsaWNlKGksIDEpO1xuICB9XG5cbiAgZmluZEZhdm9yaXRlcyhzZWFyY2hUZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcigocmVjaXBlKSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoKGluZ3JlZGllbnQpID0+IHtcbiAgICAgICAgbGV0IGluZ3JlZGllbnROYW1lID0gdGhpcy5jb252ZXJ0SW5ncmVkaWVudElkVG9OYW1lKGluZ3JlZGllbnQpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGluZ3JlZGllbnROYW1lLmluY2x1ZGVzKHNlYXJjaFRleHQpIHx8XG4gICAgICAgICAgcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0KSB8fFxuICAgICAgICAgIHJlY2lwZS50YWdzLmluY2x1ZGVzKHNlYXJjaFRleHQpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnZlcnRJbmdyZWRpZW50SWRUb05hbWUoaW5ncmVkaWVudCkge1xuICAgIGxldCBpbmdyZWRpZW50RGF0YSA9IHRoaXMuaW5ncmVkaWVudHMuZmluZChcbiAgICAgIChlbnRyeSkgPT4gZW50cnkuaWQgPT09IGluZ3JlZGllbnQuaWRcbiAgICApO1xuICAgIHJldHVybiBpbmdyZWRpZW50RGF0YS5uYW1lO1xuICB9XG5cbiAgY2hlY2tQYW50cnkocmVjaXBlKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgc2luZ2xlUmVjaXBlID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmluZChcbiAgICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHJlY2lwZVxuICAgICk7XG4gICAgc2luZ2xlUmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goKGluZ3JlZGllbnQpID0+IHtcbiAgICAgIHRoaXMucGFudHJ5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGluZ3JlZGllbnQuaWQgPT09IGl0ZW0uaW5ncmVkaWVudCAmJlxuICAgICAgICAgIGl0ZW0uYW1vdW50ID49IGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50XG4gICAgICAgICkge1xuICAgICAgICAgIHJlc3VsdCA9IFwiWW91IGhhdmUgdGhlIGluZ3JlZGllbnRzIVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGBTb3JyeSwgeW91IGRvbid0IGhhdmUgdGhlIGluZ3JlZGllbnRzYDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9