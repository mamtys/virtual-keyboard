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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/virtual-keyboard.css":
/*!**************************************!*\
  !*** ./src/css/virtual-keyboard.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/virtual-keyboard.css?");

/***/ }),

/***/ "./src/js/components/Doc/Doc.js":
/*!**************************************!*\
  !*** ./src/js/components/Doc/Doc.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/js/lib/Component.js\");\n\r\n\r\nclass Doc extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super('<div class=\"virtual-keyboard__doc\"></div>');\r\n        this.node.textContent = `Warning: I didn't notice, layout is broken in chrome, use firefox to check functionslity\r\nUPD: fixed chrome layout 08.04.20\r\nUPD: fixed chrome animation 09.04.20\r\nKeyboard was created at Win OS\r\nLang Switch = Shift + LeftAlt`;\r\n    } \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Doc);\n\n//# sourceURL=webpack:///./src/js/components/Doc/Doc.js?");

/***/ }),

/***/ "./src/js/components/Doc/index.js":
/*!****************************************!*\
  !*** ./src/js/components/Doc/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Doc */ \"./src/js/components/Doc/Doc.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Doc__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/js/components/Doc/index.js?");

/***/ }),

/***/ "./src/js/components/Key/Key.js":
/*!**************************************!*\
  !*** ./src/js/components/Key/Key.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/js/lib/Component.js\");\n\r\n\r\nclass Key extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor({\r\n    value,\r\n    code,\r\n    auxiliary,\r\n    isFunctional = false,\r\n  }) {\r\n    super(`<div class=\"keyboard__key\" data-isfunctional=${Number(isFunctional)} data-code=${code}>${value}</div>`);\r\n    this.mainKey = value;\r\n    this.auxTable = auxiliary;\r\n\r\n    this.currentValue = value;\r\n  }\r\n\r\n  getValue() {\r\n    return this.currentValue;\r\n  }\r\n\r\n  displayMainKey() {\r\n    this.node.textContent = this.mainKey;\r\n    this.currentValue = this.mainKey;\r\n  }\r\n\r\n  displayAuxiliaryKey(auxCode) {\r\n    if (!this.auxTable[auxCode]) {\r\n      return;\r\n    }\r\n\r\n    this.node.textContent = this.auxTable[auxCode];\r\n    this.currentValue = this.auxTable[auxCode];\r\n  }\r\n\r\n  makeVisible() {\r\n    this.node.classList.add('keyboard__key_visible');\r\n  }\r\n\r\n  makeInvisible() {\r\n    this.node.classList.remove('keyboard__key_visible');\r\n  }\r\n\r\n  press() {\r\n    this.node.classList.add('keyboard__key_pressed');\r\n  }\r\n\r\n  release() {\r\n    this.node.classList.remove('keyboard__key_pressed');\r\n  }\r\n\r\n  compare(component) {\r\n    const [node1, node2] = [this.node, component.getNode()];\r\n    return node1.isEqualNode(node2);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Key);\r\n\n\n//# sourceURL=webpack:///./src/js/components/Key/Key.js?");

/***/ }),

/***/ "./src/js/components/Key/index.js":
/*!****************************************!*\
  !*** ./src/js/components/Key/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Key */ \"./src/js/components/Key/Key.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/js/components/Key/index.js?");

/***/ }),

/***/ "./src/js/components/KeyCode/KeyCode.js":
/*!**********************************************!*\
  !*** ./src/js/components/KeyCode/KeyCode.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/js/lib/Component.js\");\n/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Key */ \"./src/js/components/Key/index.js\");\n\r\n\r\n\r\n\r\nclass KeyCode extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(code, languageTable, currentLanguage) {\r\n    super(`<div class=\"keyboard__key-code key-code_${code.toLowerCase()}\"></div>`);\r\n    this.code = code;\r\n    this.languageTable = languageTable;\r\n    this.currentLanguage = currentLanguage;\r\n    this.isFunctional = languageTable.isFunctional;\r\n    this.keyTable = {};\r\n    this.activeKey = null;\r\n\r\n    this.initKeyTable(languageTable);\r\n    this.activeKey = this.keyTable[currentLanguage];\r\n    this.activeKey.makeVisible();\r\n\r\n    this.appendChildren();\r\n  }\r\n\r\n  getCurrentValue() {\r\n    return this.activeKey.getValue();\r\n  }\r\n\r\n  initKeyTable(languageTable) {\r\n    const { code, isFunctional, currentLanguage } = this;\r\n\r\n    if (isFunctional) {\r\n      this.keyTable[currentLanguage] = new _Key__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ ...languageTable, code });\r\n      return;\r\n    }\r\n\r\n    this.keyTable = Object\r\n      .keys(languageTable)\r\n      .reduce((acc, lang) => {\r\n        acc[lang] = new _Key__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ ...languageTable[lang], code });\r\n        return acc;\r\n      },\r\n      {});\r\n  }\r\n\r\n\r\n  displayLanguage(language) {\r\n    if (this.isFunctional) {\r\n      return;\r\n    }\r\n\r\n    if (language === this.currentLanguage) {\r\n      return;\r\n    }\r\n\r\n    const newActive = this.keyTable[language];\r\n\r\n    this.activeKey.makeInvisible();\r\n    newActive.makeVisible();\r\n\r\n    this.currentLanguage = language;\r\n    this.activeKey = newActive;\r\n  }\r\n\r\n  displayAuxiliaryKey(keyCode) {\r\n    if (this.isFunctional) {\r\n      return;\r\n    }\r\n\r\n    this.activeKey.displayAuxiliaryKey(keyCode);\r\n  }\r\n\r\n  displayMainKey() {\r\n    this.activeKey.displayMainKey();\r\n  }\r\n\r\n  pressKey() {\r\n    this.activeKey.press();\r\n  }\r\n\r\n  releaseKey() {\r\n    this.activeKey.release();\r\n  }\r\n\r\n  appendChildren() {\r\n    Object.values(this.keyTable).forEach((el) => this.appendComponent(el));\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyCode);\r\n\n\n//# sourceURL=webpack:///./src/js/components/KeyCode/KeyCode.js?");

/***/ }),

/***/ "./src/js/components/KeyCode/index.js":
/*!********************************************!*\
  !*** ./src/js/components/KeyCode/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyCode */ \"./src/js/components/KeyCode/KeyCode.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_KeyCode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/js/components/KeyCode/index.js?");

/***/ }),

/***/ "./src/js/components/Keyboard/Keyboard.js":
/*!************************************************!*\
  !*** ./src/js/components/Keyboard/Keyboard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/js/lib/Component.js\");\n/* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../KeyCode */ \"./src/js/components/KeyCode/index.js\");\n/* harmony import */ var _helpers_pick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/pick */ \"./src/js/helpers/pick.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Keyboard extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(output, codeTable, config) {\r\n    super('<div class=\"virtual-keyboard__keyboard keyboard\"></div>');\r\n    const { languages, currentLanguage, persistedKeys } = config;\r\n\r\n    this.config = config;\r\n    this.output = output;\r\n    this.keyCodeMap = null;\r\n    this.pressedKeys = new Set();\r\n    // for capslock or numlock or alike keys\r\n    this.persistedKeys = new Set(persistedKeys || []);\r\n\r\n    this.initKeyCodeMap(codeTable, languages, currentLanguage);\r\n    this.displayAuxiliaryIfNeed();\r\n    this.appendChildren();\r\n  }\r\n\r\n  getConfig() {\r\n    return { ...this.config, persistedKeys: [...this.persistedKeys] };\r\n  }\r\n\r\n  isAlreadyPressed(keyCode) {\r\n    return this.pressedKeys.has(keyCode) || this.persistedKeys.has(keyCode);\r\n  }\r\n\r\n  initKeyCodeMap(\r\n    codeTable,\r\n    languages,\r\n    currentLanguage,\r\n  ) {\r\n    const map = new Map();\r\n    codeTable.forEach((languageTable, code) => {\r\n      if (languageTable.isFunctional) {\r\n        map.set(code, new _KeyCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"](code, languageTable, currentLanguage));\r\n        return;\r\n      }\r\n      const filteredTable = Object(_helpers_pick__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(languageTable, languages);\r\n      map.set(code, new _KeyCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"](code, filteredTable, currentLanguage));\r\n    });\r\n\r\n    this.keyCodeMap = map;\r\n  }\r\n\r\n  appendChildren() {\r\n    this.keyCodeMap.forEach((el) => this.appendComponent(el));\r\n  }\r\n\r\n  displayLanguage(language) {\r\n    this.keyCodeMap.forEach((el) => el.displayLanguage(language));\r\n  }\r\n\r\n  displayAuxiliaryKey(keyCode) {\r\n    this.keyCodeMap.forEach((el) => el.displayAuxiliaryKey(keyCode));\r\n  }\r\n\r\n  displayMainKeys() {\r\n    this.keyCodeMap.forEach((el) => el.displayMainKey());\r\n  }\r\n\r\n  pressKey(keyCode) {\r\n    const codeObj = this.keyCodeMap.get(keyCode);\r\n    if (codeObj) {\r\n      codeObj.pressKey();\r\n    }\r\n    this.pressedKeys.add(keyCode);\r\n\r\n    this.displayAuxiliaryIfNeed();\r\n\r\n    if (!codeObj || (codeObj || {}).isFunctional) {\r\n      this.funcionalKeyCodeHandler(keyCode);\r\n      return;\r\n    }\r\n\r\n    this.output.insert(codeObj.getCurrentValue());\r\n  }\r\n\r\n  releaseKey(keyCode) {\r\n    const codeObj = this.keyCodeMap.get(keyCode);\r\n\r\n    if (this.shouldLanguageSwitch()) {\r\n      this.switchLanguage();\r\n\r\n      this.displayAuxiliaryIfNeed();\r\n    }\r\n\r\n    if (codeObj) {\r\n      codeObj.releaseKey();\r\n    }\r\n\r\n    this.pressedKeys.delete(keyCode);\r\n\r\n    if (this.shouldDisplayMain()) {\r\n      this.displayMainKeys(keyCode);\r\n    }\r\n\r\n\r\n    this.output.focus();\r\n  }\r\n\r\n\r\n  togglePersistedKey(keyCode) {\r\n    if (this.persistedKeys.has(keyCode)) {\r\n      this.persistedKeys.delete(keyCode);\r\n      return;\r\n    }\r\n\r\n    this.persistedKeys.add(keyCode);\r\n  }\r\n\r\n  displayNextLanguage() {\r\n    const { languages, currentLanguage } = this.config;\r\n    let languageIndex = languages.findIndex((el) => el === currentLanguage);\r\n\r\n    if (languageIndex === languages.length - 1) {\r\n      languageIndex = -1;\r\n    }\r\n\r\n    const newLanguage = languages[languageIndex + 1];\r\n\r\n    this.config.currentLanguage = newLanguage;\r\n    this.displayLanguage(newLanguage);\r\n  }\r\n\r\n  switchLanguage(language) {\r\n    if (language) {\r\n      this.config.currentLanguage = language;\r\n      this.displayLanguage(language);\r\n      return;\r\n    }\r\n    this.displayNextLanguage();\r\n  }\r\n\r\n  shouldLanguageSwitch() {\r\n    const { pressedKeys, config: { languageSwitchCombination } } = this;\r\n    return languageSwitchCombination.every((el) => pressedKeys.has(el));\r\n  }\r\n\r\n  getPressedAuxiliaryTriggers() {\r\n    const { auxiliaryTriggers } = this.config;\r\n    return auxiliaryTriggers.filter(\r\n      (trigger) => this.isAlreadyPressed(trigger),\r\n    );\r\n  }\r\n\r\n  displayAuxiliaryIfNeed() {\r\n    const activeTriggers = this.getPressedAuxiliaryTriggers();\r\n    (activeTriggers || []).forEach((trigger) => this.displayAuxiliaryKey(trigger));\r\n  }\r\n\r\n  shouldDisplayMain() {\r\n    const { auxiliaryTriggers } = this.config;\r\n    return auxiliaryTriggers.every((trigger) => !this.isAlreadyPressed(trigger));\r\n  }\r\n\r\n\r\n  funcionalKeyCodeHandler(keyCode) {\r\n    const handler = {\r\n      Backspace: () => this.output.deletePrevious(),\r\n      Delete: () => this.output.deleteNext(),\r\n      Enter: () => this.output.returnCarriage(),\r\n      Space: () => this.output.insert(' '),\r\n      Tab: () => this.output.insert('\\t'),\r\n      CapsLock: () => {\r\n        this.togglePersistedKey('ShiftLeft');\r\n        this.displayAuxiliaryIfNeed();\r\n      },\r\n      OSLeft: () => alert('Os Button was pressed'),\r\n      ArrowLeft: () => this.output.moveCursorLeft(),\r\n      ArrowRight: () => this.output.moveCursorRight(),\r\n      ArrowUp: () => this.output.moveCursorUp(),\r\n      ArrowDown: () => this.output.moveCursorDown(),\r\n    };\r\n    if (handler[keyCode]) {\r\n      handler[keyCode]();\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard);\r\n\n\n//# sourceURL=webpack:///./src/js/components/Keyboard/Keyboard.js?");

/***/ }),

/***/ "./src/js/components/Keyboard/KeyboardContainer.js":
/*!*********************************************************!*\
  !*** ./src/js/components/Keyboard/KeyboardContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keyboard */ \"./src/js/components/Keyboard/Keyboard.js\");\n\r\n\r\nclass KeyboardContainer extends _Keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(output, codeTable, config) {\r\n    super(output, codeTable, config);\r\n    this.wasClicked = false;\r\n\r\n    this.node.addEventListener('mousedown', this.onMouseDown.bind(this));\r\n    this.node.addEventListener('mouseup', this.onMouseUp.bind(this));\r\n    this.node.addEventListener('mouseout', this.onMouseOut.bind(this));\r\n  }\r\n\r\n  onMouseUp(event) {\r\n    const { target, target: { dataset: { code } } } = event;\r\n    if (!target.matches('.keyboard__key')) {\r\n      return;\r\n    }\r\n    this.wasClicked = false;\r\n    this.releaseKey(code);\r\n  }\r\n\r\n  onMouseDown(event) {\r\n    const { target, target: { dataset: { code } } } = event;\r\n    if (!target.matches('.keyboard__key')) {\r\n      return;\r\n    }\r\n    this.wasClicked = true;\r\n    this.pressKey(code);\r\n  }\r\n\r\n  onMouseOut(event) {\r\n    const { target, target: { dataset: { code } } } = event;\r\n    if (!target.matches('.keyboard__key')) {\r\n      return;\r\n    }\r\n    if (this.wasClicked) {\r\n      this.releaseKey(code);\r\n      this.wasClicked = false;\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyboardContainer);\r\n\n\n//# sourceURL=webpack:///./src/js/components/Keyboard/KeyboardContainer.js?");

/***/ }),

/***/ "./src/js/components/Keyboard/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/Keyboard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _KeyboardContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyboardContainer */ \"./src/js/components/Keyboard/KeyboardContainer.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_KeyboardContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/js/components/Keyboard/index.js?");

/***/ }),

/***/ "./src/js/components/Textarea/Textarea.js":
/*!************************************************!*\
  !*** ./src/js/components/Textarea/Textarea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/js/lib/Component.js\");\n/* harmony import */ var _helpers_getNextEndOfLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/getNextEndOfLine */ \"./src/js/helpers/getNextEndOfLine.js\");\n/* harmony import */ var _helpers_getPreviousEndOfLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/getPreviousEndOfLine */ \"./src/js/helpers/getPreviousEndOfLine.js\");\n\r\n\r\n\r\n\r\nclass Textarea extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super('<textarea class=\"virtual-keyboard__textarea textarea\" autofocus></textarea>');\r\n  }\r\n\r\n  isNotSelected() {\r\n    return this.node.selectionStart === this.node.selectionEnd;\r\n  }\r\n\r\n  insert(value) {\r\n    const start = this.node.selectionStart;\r\n    const end = this.node.selectionEnd - start;\r\n\r\n    const array = this.node.textContent.split('');\r\n    array.splice(start, end, value);\r\n    this.node.textContent = array.join('');\r\n\r\n    this.fixCursorPosition(start + value.length);\r\n  }\r\n\r\n  fixCursorPosition(pos) {\r\n    this.node.selectionStart = pos;\r\n    this.node.selectionEnd = pos;\r\n  }\r\n\r\n  focus() {\r\n    const x = window.scrollX;\r\n    const y = window.scrollY;\r\n\r\n    this.node.focus();\r\n    window.scrollTo(x, y);\r\n  }\r\n\r\n  deletePrevious() {\r\n    if (this.isNotSelected()) {\r\n      this.node.selectionStart -= 1;\r\n    }\r\n\r\n    this.insert('');\r\n  }\r\n\r\n  deleteNext() {\r\n    if (this.node.textContent.length === this.node.selectionStart) {\r\n      return;\r\n    }\r\n\r\n    if (this.isNotSelected()) {\r\n      this.node.selectionEnd += 1;\r\n    }\r\n\r\n    this.insert('');\r\n  }\r\n\r\n  returnCarriage() {\r\n    this.insert('\\n');\r\n  }\r\n\r\n  moveCursorUp() {\r\n    const start = this.node.selectionStart;\r\n    const firstEol = Object(_helpers_getPreviousEndOfLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.node.textContent, start);\r\n    let secondEol = Object(_helpers_getPreviousEndOfLine__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.node.textContent, start - firstEol - 1);\r\n\r\n    if (firstEol === -1) {\r\n      this.fixCursorPosition(0);\r\n      return;\r\n    }\r\n\r\n    if (secondEol === -1) {\r\n      secondEol = 0;\r\n    }\r\n\r\n    if (secondEol > firstEol) {\r\n      this.fixCursorPosition(start - secondEol - 1);\r\n      return;\r\n    }\r\n\r\n    this.fixCursorPosition(start - firstEol - 1);\r\n  }\r\n\r\n  moveCursorDown() {\r\n    const start = this.node.selectionStart;\r\n    const end = this.node.textContent.length;\r\n    const firstEol = Object(_helpers_getNextEndOfLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.node.textContent, start);\r\n    let secondEol = Object(_helpers_getNextEndOfLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.node.textContent, start + firstEol + 1);\r\n\r\n    if (firstEol === -1) {\r\n      this.fixCursorPosition(end);\r\n      return;\r\n    }\r\n\r\n    if (secondEol === -1) {\r\n      secondEol = end;\r\n    }\r\n\r\n    if (firstEol <= secondEol) {\r\n      this.fixCursorPosition(start + firstEol + secondEol + 1);\r\n      return;\r\n    }\r\n\r\n    this.fixCursorPosition(start + secondEol - firstEol + 1);\r\n  }\r\n\r\n  moveCursorRight() {\r\n    const currentPos = this.node.selectionStart;\r\n    if (currentPos > this.node.textContent.length - 1) {\r\n      return;\r\n    }\r\n    this.fixCursorPosition(currentPos + 1);\r\n  }\r\n\r\n  moveCursorLeft() {\r\n    const currentPos = this.node.selectionStart;\r\n    if (currentPos < 1) {\r\n      return;\r\n    }\r\n    this.fixCursorPosition(currentPos - 1);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Textarea);\r\n\n\n//# sourceURL=webpack:///./src/js/components/Textarea/Textarea.js?");

/***/ }),

/***/ "./src/js/components/Textarea/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/Textarea/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textarea */ \"./src/js/components/Textarea/Textarea.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Textarea__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/js/components/Textarea/index.js?");

/***/ }),

/***/ "./src/js/components/VirtualKeyboard/VirtualKeyboard.js":
/*!**************************************************************!*\
  !*** ./src/js/components/VirtualKeyboard/VirtualKeyboard.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/Component */ \"./src/js/lib/Component.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Keyboard */ \"./src/js/components/Keyboard/index.js\");\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Textarea */ \"./src/js/components/Textarea/index.js\");\n/* harmony import */ var _css_virtual_keyboard_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../css/virtual-keyboard.css */ \"./src/css/virtual-keyboard.css\");\n/* harmony import */ var _css_virtual_keyboard_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_virtual_keyboard_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\nclass App extends _lib_Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(data, keyboardConfig) {\r\n    super('<div class=\"virtual-keyboard\"></div>');\r\n    const { layout } = keyboardConfig;\r\n    this.data = data;\r\n    this.layout = layout;\r\n\r\n    this.keyboard = null;\r\n    this.textarea = new _Textarea__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\n    this.initKeyboard(data[layout], keyboardConfig);\r\n    this.appendChildren();\r\n  }\r\n\r\n  initKeyboard(codeTable, keyboardConfig) {\r\n    this.keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n      this.textarea,\r\n      codeTable,\r\n      keyboardConfig,\r\n    );\r\n  }\r\n\r\n  getKeyboardConfig() {\r\n    return this.keyboard.getConfig();\r\n  }\r\n\r\n  appendChildren() {\r\n    this.appendComponent(this.textarea);\r\n    this.appendComponent(this.keyboard);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\n\n//# sourceURL=webpack:///./src/js/components/VirtualKeyboard/VirtualKeyboard.js?");

/***/ }),

/***/ "./src/js/components/VirtualKeyboard/VirtualKeyboardContainer.js":
/*!***********************************************************************!*\
  !*** ./src/js/components/VirtualKeyboard/VirtualKeyboardContainer.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VirtualKeyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VirtualKeyboard */ \"./src/js/components/VirtualKeyboard/VirtualKeyboard.js\");\n\r\n\r\nclass VirtualKeyboardContainer extends _VirtualKeyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(data, keyboardKonfig) {\r\n    super(data, keyboardKonfig);\r\n\r\n    document.addEventListener('keydown', this.onKeyDown.bind(this));\r\n    document.addEventListener('keyup', this.onKeyUp.bind(this));\r\n  }\r\n\r\n  onKeyDown(event) {\r\n    event.preventDefault();\r\n\r\n    const keyCode = event.code;\r\n    this.keyboard.pressKey(keyCode);\r\n  }\r\n\r\n  onKeyUp(event) {\r\n    event.preventDefault();\r\n\r\n    const keyCode = event.code;\r\n    this.keyboard.releaseKey(keyCode);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (VirtualKeyboardContainer);\r\n\n\n//# sourceURL=webpack:///./src/js/components/VirtualKeyboard/VirtualKeyboardContainer.js?");

/***/ }),

/***/ "./src/js/config/KEYBOARD_DEFAULTS.js":
/*!********************************************!*\
  !*** ./src/js/config/KEYBOARD_DEFAULTS.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  languages: ['en', 'ru'],\r\n  layout: 'QWERTY',\r\n  languageSwitchCombination: ['ShiftLeft', 'AltLeft'],\r\n  currentLanguage: 'en',\r\n  auxiliaryTriggers: ['ShiftRight', 'ShiftLeft'],\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/config/KEYBOARD_DEFAULTS.js?");

/***/ }),

/***/ "./src/js/config/KEYBOARD_EVENT_DATA.js":
/*!**********************************************!*\
  !*** ./src/js/config/KEYBOARD_EVENT_DATA.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n    <layout>: {\r\n        <keycode>: {\r\n            isFunctional?: <boolean>,\r\n            value?: <display value for functional codes>\r\n            <locale>: {\r\n                value: <key value>,\r\n                auxiliary?: {\r\n                    <auxiliaryCode>: <auxiliaryKey>\r\n                },\r\n            },\r\n            <locale>: ...\r\n        },\r\n        <keycode>: ...\r\n    }\r\n*/\r\n\r\n// data taken from https://www.w3.org/TR/uievents-code/#key-media\r\nconst KEYBOARD_EVENT_DATA = {\r\n  QWERTY: new Map([\r\n    ['Backquote', {\r\n      en: {\r\n        value: '`',\r\n        auxiliary: {\r\n          ShiftLeft: '~',\r\n          ShiftRight: '~',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ё',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ё',\r\n          ShiftRight: 'Ё',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit1', {\r\n      en: {\r\n        value: '1',\r\n        auxiliary: {\r\n          ShiftLeft: '!',\r\n          ShiftRight: '!',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '1',\r\n        auxiliary: {\r\n          ShiftLeft: '!',\r\n          ShiftRight: '!',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit2', {\r\n      en: {\r\n        value: '2',\r\n        auxiliary: {\r\n          ShiftLeft: '@',\r\n          ShiftRight: '@',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '2',\r\n        auxiliary: {\r\n          ShiftLeft: '\"',\r\n          ShiftRight: '\"',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit3', {\r\n      en: {\r\n        value: '3',\r\n        auxiliary: {\r\n          ShiftLeft: '#',\r\n          ShiftRight: '#',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '3',\r\n        auxiliary: {\r\n          ShiftLeft: '№',\r\n          ShiftRight: '№',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit4', {\r\n      en: {\r\n        value: '4',\r\n        auxiliary: {\r\n          ShiftLeft: '$',\r\n          ShiftRight: '$',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '4',\r\n        auxiliary: {\r\n          ShiftLeft: ';',\r\n          ShiftRight: ';',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit5', {\r\n      en: {\r\n        value: '5',\r\n        auxiliary: {\r\n          ShiftLeft: '%',\r\n          ShiftRight: '%',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '5',\r\n        auxiliary: {\r\n          ShiftLeft: '%',\r\n          ShiftRight: '%',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit6', {\r\n      en: {\r\n        value: '6',\r\n        auxiliary: {\r\n          ShiftLeft: '^',\r\n          ShiftRight: '^',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '6',\r\n        auxiliary: {\r\n          ShiftLeft: ':',\r\n          ShiftRight: ':',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit7', {\r\n      en: {\r\n        value: '7',\r\n        auxiliary: {\r\n          ShiftLeft: '&',\r\n          ShiftRight: '&',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '7',\r\n        auxiliary: {\r\n          ShiftLeft: '?',\r\n          ShiftRight: '?',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit8', {\r\n      en: {\r\n        value: '8',\r\n        auxiliary: {\r\n          ShiftLeft: '*',\r\n          ShiftRight: '*',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '8',\r\n        auxiliary: {\r\n          ShiftLeft: '*',\r\n          ShiftRight: '*',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit9', {\r\n      en: {\r\n        value: '9',\r\n        auxiliary: {\r\n          ShiftLeft: '(',\r\n          ShiftRight: '(',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '9',\r\n        auxiliary: {\r\n          ShiftLeft: '(',\r\n          ShiftRight: '(',\r\n        },\r\n      },\r\n    }],\r\n    ['Digit0', {\r\n      en: {\r\n        value: '0',\r\n        auxiliary: {\r\n          ShiftLeft: ')',\r\n          ShiftRight: ')',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '0',\r\n        auxiliary: {\r\n          ShiftLeft: ')',\r\n          ShiftRight: ')',\r\n        },\r\n      },\r\n    }],\r\n    ['Minus', {\r\n      en: {\r\n        value: '-',\r\n        auxiliary: {\r\n          ShiftLeft: '_',\r\n          ShiftRight: '_',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '-',\r\n        auxiliary: {\r\n          ShiftLeft: '_',\r\n          ShiftRight: '_',\r\n        },\r\n      },\r\n    }],\r\n    ['Equal', {\r\n      en: {\r\n        value: '=',\r\n        auxiliary: {\r\n          ShiftLeft: '+',\r\n          ShiftRight: '+',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '=',\r\n        auxiliary: {\r\n          ShiftLeft: '+',\r\n          ShiftRight: '+',\r\n        },\r\n      },\r\n    }],\r\n    ['Backspace', {\r\n      isFunctional: true,\r\n      value: 'BackSpace',\r\n    }],\r\n    ['Tab', {\r\n      isFunctional: true,\r\n      value: 'Tab',\r\n    }],\r\n    ['KeyQ', {\r\n      en: {\r\n        value: 'q',\r\n        auxiliary: {\r\n          ShiftLeft: 'Q',\r\n          ShiftRight: 'Q',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'й',\r\n        auxiliary: {\r\n          ShiftLeft: 'Й',\r\n          ShiftRight: 'Й',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyW', {\r\n      en: {\r\n        value: 'w',\r\n        auxiliary: {\r\n          ShiftLeft: 'W',\r\n          ShiftRight: 'W',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ц',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ц',\r\n          ShiftRight: 'Ц',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyE', {\r\n      en: {\r\n        value: 'e',\r\n        auxiliary: {\r\n          ShiftLeft: 'E',\r\n          ShiftRight: 'E',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'у',\r\n        auxiliary: {\r\n          ShiftLeft: 'У',\r\n          ShiftRight: 'У',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyR', {\r\n      en: {\r\n        value: 'r',\r\n        auxiliary: {\r\n          ShiftLeft: 'R',\r\n          ShiftRight: 'R',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'к',\r\n        auxiliary: {\r\n          ShiftLeft: 'К',\r\n          ShiftRight: 'К',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyT', {\r\n      en: {\r\n        value: 't',\r\n        auxiliary: {\r\n          ShiftLeft: 'T',\r\n          ShiftRight: 'T',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'е',\r\n        auxiliary: {\r\n          ShiftLeft: 'Е',\r\n          ShiftRight: 'Е',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyY', {\r\n      en: {\r\n        value: 'y',\r\n        auxiliary: {\r\n          ShiftLeft: 'Y',\r\n          ShiftRight: 'Y',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'н',\r\n        auxiliary: {\r\n          ShiftLeft: 'Н',\r\n          ShiftRight: 'Н',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyU', {\r\n      en: {\r\n        value: 'u',\r\n        auxiliary: {\r\n          ShiftLeft: 'U',\r\n          ShiftRight: 'U',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'г',\r\n        auxiliary: {\r\n          ShiftLeft: 'Г',\r\n          ShiftRight: 'Г',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyI', {\r\n      en: {\r\n        value: 'i',\r\n        auxiliary: {\r\n          ShiftLeft: 'I',\r\n          ShiftRight: 'I',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ш',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ш',\r\n          ShiftRight: 'Ш',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyO', {\r\n      en: {\r\n        value: 'o',\r\n        auxiliary: {\r\n          ShiftLeft: 'O',\r\n          ShiftRight: 'O',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'щ',\r\n        auxiliary: {\r\n          ShiftLeft: 'Щ',\r\n          ShiftRight: 'Щ',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyP', {\r\n      en: {\r\n        value: 'p',\r\n        auxiliary: {\r\n          ShiftLeft: 'P',\r\n          ShiftRight: 'P',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'з',\r\n        auxiliary: {\r\n          ShiftLeft: 'З',\r\n          ShiftRight: 'З',\r\n        },\r\n      },\r\n    }],\r\n    ['BracketLeft', {\r\n      en: {\r\n        value: '[',\r\n        auxiliary: {\r\n          ShiftLeft: '{',\r\n          ShiftRight: '{',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'х',\r\n        auxiliary: {\r\n          ShiftLeft: 'Х',\r\n          ShiftRight: 'Х',\r\n        },\r\n      },\r\n    }],\r\n    ['BracketRight', {\r\n      en: {\r\n        value: ']',\r\n        auxiliary: {\r\n          ShiftLeft: '}',\r\n          ShiftRight: '}',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ъ',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ъ',\r\n          ShiftRight: 'Ъ',\r\n        },\r\n      },\r\n    }],\r\n    ['Enter', {\r\n      isFunctional: true,\r\n      value: 'Enter',\r\n    }],\r\n    ['CapsLock', {\r\n      isFunctional: true,\r\n      value: 'Caps Lock',\r\n    }],\r\n    ['KeyA', {\r\n      en: {\r\n        value: 'a',\r\n        auxiliary: {\r\n          ShiftLeft: 'A',\r\n          ShiftRight: 'A',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ф',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ф',\r\n          ShiftRight: 'Ф',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyS', {\r\n      en: {\r\n        value: 's',\r\n        auxiliary: {\r\n          ShiftLeft: 'S',\r\n          ShiftRight: 'S',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ы',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ы',\r\n          ShiftRight: 'Ы',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyD', {\r\n      en: {\r\n        value: 'd',\r\n        auxiliary: {\r\n          ShiftLeft: 'D',\r\n          ShiftRight: 'D',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'в',\r\n        auxiliary: {\r\n          ShiftLeft: 'В',\r\n          ShiftRight: 'В',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyF', {\r\n      en: {\r\n        value: 'f',\r\n        auxiliary: {\r\n          ShiftLeft: 'F',\r\n          ShiftRight: 'F',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'а',\r\n        auxiliary: {\r\n          ShiftLeft: 'А',\r\n          ShiftRight: 'А',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyG', {\r\n      en: {\r\n        value: 'g',\r\n        auxiliary: {\r\n          ShiftLeft: 'G',\r\n          ShiftRight: 'G',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'п',\r\n        auxiliary: {\r\n          ShiftLeft: 'П',\r\n          ShiftRight: 'П',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyH', {\r\n      en: {\r\n        value: 'h',\r\n        auxiliary: {\r\n          ShiftLeft: 'G',\r\n          ShiftRight: 'G',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'р',\r\n        auxiliary: {\r\n          ShiftLeft: 'Р',\r\n          ShiftRight: 'Р',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyJ', {\r\n      en: {\r\n        value: 'j',\r\n        auxiliary: {\r\n          ShiftLeft: 'H',\r\n          ShiftRight: 'H',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'о',\r\n        auxiliary: {\r\n          ShiftLeft: 'О',\r\n          ShiftRight: 'О',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyK', {\r\n      en: {\r\n        value: 'k',\r\n        auxiliary: {\r\n          ShiftLeft: 'J',\r\n          ShiftRight: 'J',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'л',\r\n        auxiliary: {\r\n          ShiftLeft: 'Л',\r\n          ShiftRight: 'Л',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyL', {\r\n      en: {\r\n        value: 'l',\r\n        auxiliary: {\r\n          ShiftLeft: 'L',\r\n          ShiftRight: 'L',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'д',\r\n        auxiliary: {\r\n          ShiftLeft: 'Д',\r\n          ShiftRight: 'Д',\r\n        },\r\n      },\r\n    }],\r\n    ['Semicolon', {\r\n      en: {\r\n        value: ';',\r\n        auxiliary: {\r\n          ShiftLeft: ':',\r\n          ShiftRight: ':',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ж',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ж',\r\n          ShiftRight: 'Ж',\r\n        },\r\n      },\r\n    }],\r\n    ['Quote', {\r\n      en: {\r\n        value: '\\'',\r\n        auxiliary: {\r\n          ShiftLeft: '\"',\r\n          ShiftRight: '\"',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ж',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ж',\r\n          ShiftRight: 'Ж',\r\n        },\r\n      },\r\n    }],\r\n    ['Backslash', {\r\n      en: {\r\n        value: '\\\\',\r\n        auxiliary: {\r\n          ShiftLeft: '|',\r\n          ShiftRight: '|',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '\\\\',\r\n        auxiliary: {\r\n          ShiftLeft: '/',\r\n          ShiftRight: '/',\r\n        },\r\n      },\r\n    }],\r\n    ['ShiftLeft', {\r\n      isFunctional: true,\r\n      value: 'Shift',\r\n    }],\r\n    ['KeyZ', {\r\n      en: {\r\n        value: 'z',\r\n        auxiliary: {\r\n          ShiftLeft: 'Z',\r\n          ShiftRight: 'Z',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'я',\r\n        auxiliary: {\r\n          ShiftLeft: 'Я',\r\n          ShiftRight: 'Я',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyX', {\r\n      en: {\r\n        value: 'x',\r\n        auxiliary: {\r\n          ShiftLeft: 'X',\r\n          ShiftRight: 'X',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ч',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ч',\r\n          ShiftRight: 'Ч',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyC', {\r\n      en: {\r\n        value: 'c',\r\n        auxiliary: {\r\n          ShiftLeft: 'C',\r\n          ShiftRight: 'C',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'с',\r\n        auxiliary: {\r\n          ShiftLeft: 'С',\r\n          ShiftRight: 'С',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyV', {\r\n      en: {\r\n        value: 'v',\r\n        auxiliary: {\r\n          ShiftLeft: 'V',\r\n          ShiftRight: 'V',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'м',\r\n        auxiliary: {\r\n          ShiftLeft: 'М',\r\n          ShiftRight: 'М',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyB', {\r\n      en: {\r\n        value: 'b',\r\n        auxiliary: {\r\n          ShiftLeft: 'B',\r\n          ShiftRight: 'B',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'и',\r\n        auxiliary: {\r\n          ShiftLeft: 'И',\r\n          ShiftRight: 'И',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyN', {\r\n      en: {\r\n        value: 'n',\r\n        auxiliary: {\r\n          ShiftLeft: 'N',\r\n          ShiftRight: 'N',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'т',\r\n        auxiliary: {\r\n          ShiftLeft: 'Т',\r\n          ShiftRight: 'Т',\r\n        },\r\n      },\r\n    }],\r\n    ['KeyM', {\r\n      en: {\r\n        value: 'm',\r\n        auxiliary: {\r\n          ShiftLeft: 'M',\r\n          ShiftRight: 'M',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ь',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ь',\r\n          ShiftRight: 'Ь',\r\n        },\r\n      },\r\n    }],\r\n    ['Comma', {\r\n      en: {\r\n        value: ',',\r\n        auxiliary: {\r\n          ShiftLeft: '<',\r\n          ShiftRight: '<',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'б',\r\n        auxiliary: {\r\n          ShiftLeft: 'Б',\r\n          ShiftRight: 'Б',\r\n        },\r\n      },\r\n    }],\r\n    ['Period', {\r\n      en: {\r\n        value: '.',\r\n        auxiliary: {\r\n          ShiftLeft: '>',\r\n          ShiftRight: '>',\r\n        },\r\n      },\r\n      ru: {\r\n        value: 'ю',\r\n        auxiliary: {\r\n          ShiftLeft: 'Ю',\r\n          ShiftRight: 'Ю',\r\n        },\r\n      },\r\n    }],\r\n    ['Slash', {\r\n      en: {\r\n        value: '/',\r\n        auxiliary: {\r\n          ShiftLeft: '?',\r\n          ShiftRight: '?',\r\n        },\r\n      },\r\n      ru: {\r\n        value: '.',\r\n        auxiliary: {\r\n          ShiftLeft: ',',\r\n          ShiftRight: ',',\r\n        },\r\n      },\r\n    }],\r\n    ['ShiftRight', {\r\n      isFunctional: true,\r\n      value: 'Shift',\r\n    }],\r\n    ['ArrowUp', {\r\n      isFunctional: true,\r\n      value: '↑',\r\n    }],\r\n    ['Delete', {\r\n      isFunctional: true,\r\n      value: 'Del',\r\n    }],\r\n    ['ControlLeft', {\r\n      isFunctional: true,\r\n      value: 'Ctrl',\r\n    }],\r\n    ['OSLeft', {\r\n      isFunctional: true,\r\n      value: 'Win',\r\n    }],\r\n    ['AltLeft', {\r\n      isFunctional: true,\r\n      value: 'Alt',\r\n    }],\r\n    ['Space', {\r\n      isFunctional: true,\r\n      value: 'Space',\r\n    }],\r\n    ['ControlRight', {\r\n      isFunctional: true,\r\n      value: 'Ctrl',\r\n    }],\r\n    ['AltRight', {\r\n      isFunctional: true,\r\n      value: 'Alt',\r\n    }],\r\n    ['ArrowLeft', {\r\n      isFunctional: true,\r\n      value: '←',\r\n    }],\r\n    ['ArrowDown', {\r\n      isFunctional: true,\r\n      value: '↓',\r\n    }],\r\n    ['ArrowRight', {\r\n      isFunctional: true,\r\n      value: '→',\r\n    }],\r\n  ]),\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (KEYBOARD_EVENT_DATA);\r\n\n\n//# sourceURL=webpack:///./src/js/config/KEYBOARD_EVENT_DATA.js?");

/***/ }),

/***/ "./src/js/config/LOCAL_STORAGE_KEYS.js":
/*!*********************************************!*\
  !*** ./src/js/config/LOCAL_STORAGE_KEYS.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  CONFIG: 'keyboard-config',\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/config/LOCAL_STORAGE_KEYS.js?");

/***/ }),

/***/ "./src/js/helpers/LocalStorageManager.js":
/*!***********************************************!*\
  !*** ./src/js/helpers/LocalStorageManager.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_LOCAL_STORAGE_KEYS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/LOCAL_STORAGE_KEYS */ \"./src/js/config/LOCAL_STORAGE_KEYS.js\");\n\r\n\r\nconst {\r\n  CONFIG,\r\n} = _config_LOCAL_STORAGE_KEYS__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\nconst LocalStorageManager = {\r\n  getUserConfig() {\r\n    return JSON.parse(localStorage.getItem(CONFIG));\r\n  },\r\n  setUserConfig(config) {\r\n    return localStorage.setItem(CONFIG, JSON.stringify(config));\r\n  },\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocalStorageManager);\r\n\n\n//# sourceURL=webpack:///./src/js/helpers/LocalStorageManager.js?");

/***/ }),

/***/ "./src/js/helpers/getNextEndOfLine.js":
/*!********************************************!*\
  !*** ./src/js/helpers/getNextEndOfLine.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getNextEndOfLine(text, pos) {\r\n  return text\r\n    .slice(pos)\r\n    .split('')\r\n    .join('')\r\n    .match(/\\n|$/).index;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getNextEndOfLine);\r\n\n\n//# sourceURL=webpack:///./src/js/helpers/getNextEndOfLine.js?");

/***/ }),

/***/ "./src/js/helpers/getPreviousEndOfLine.js":
/*!************************************************!*\
  !*** ./src/js/helpers/getPreviousEndOfLine.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nfunction getPreviousEndOfLine(text, pos) {\r\n  return text\r\n    .slice(0, pos)\r\n    .split('')\r\n    .reverse()\r\n    .join('')\r\n    .match(/\\n|$/).index;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPreviousEndOfLine);\r\n\n\n//# sourceURL=webpack:///./src/js/helpers/getPreviousEndOfLine.js?");

/***/ }),

/***/ "./src/js/helpers/pick.js":
/*!********************************!*\
  !*** ./src/js/helpers/pick.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction pick(table, array) {\r\n  return array.reduce((acc, curr) => {\r\n    acc[curr] = table[curr];\r\n    return acc;\r\n  }, {});\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (pick);\r\n\n\n//# sourceURL=webpack:///./src/js/helpers/pick.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_VirtualKeyboard_VirtualKeyboardContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VirtualKeyboard/VirtualKeyboardContainer */ \"./src/js/components/VirtualKeyboard/VirtualKeyboardContainer.js\");\n/* harmony import */ var _config_KEYBOARD_EVENT_DATA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/KEYBOARD_EVENT_DATA */ \"./src/js/config/KEYBOARD_EVENT_DATA.js\");\n/* harmony import */ var _helpers_LocalStorageManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/LocalStorageManager */ \"./src/js/helpers/LocalStorageManager.js\");\n/* harmony import */ var _components_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Doc */ \"./src/js/components/Doc/index.js\");\n/* harmony import */ var _config_KEYBOARD_DEFAULTS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/KEYBOARD_DEFAULTS */ \"./src/js/config/KEYBOARD_DEFAULTS.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst config = _helpers_LocalStorageManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getUserConfig() || _config_KEYBOARD_DEFAULTS__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\n\r\nconst virtualKeyboard = new _components_VirtualKeyboard_VirtualKeyboardContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_config_KEYBOARD_EVENT_DATA__WEBPACK_IMPORTED_MODULE_1__[\"default\"], config);\r\nconst doc = new _components_Doc__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\nvirtualKeyboard.appendComponent(doc);\r\ndocument.body.appendChild(virtualKeyboard.getNode());\r\n\r\nwindow.addEventListener('beforeunload', () => {\r\n  _helpers_LocalStorageManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setUserConfig(virtualKeyboard.getKeyboardConfig());\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/lib/Component.js":
/*!*********************************!*\
  !*** ./src/js/lib/Component.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nclass Component {\r\n  constructor(template) {\r\n    this.template = template;\r\n    this.node = null;\r\n    this.initNode();\r\n  }\r\n\r\n  getNode() {\r\n    return this.node;\r\n  }\r\n\r\n  appendComponent(component) {\r\n    this.node.appendChild(component.getNode());\r\n  }\r\n\r\n  remove() {\r\n    this.node.remove();\r\n  }\r\n\r\n  initNode() {\r\n    if (!this.template) {\r\n      throw new Error('Component must implement create function');\r\n    }\r\n\r\n    const template = document.createElement('template');\r\n    template.innerHTML = this.template;\r\n\r\n    this.node = template.content.firstElementChild;\r\n\r\n    if (!this.node) {\r\n      throw new Error(`Failed Create node with template: ${this.template}`);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\r\n\n\n//# sourceURL=webpack:///./src/js/lib/Component.js?");

/***/ })

/******/ });