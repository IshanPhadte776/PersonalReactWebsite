"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tip";
exports.ids = ["pages/api/tip"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/tip.js":
/*!******************************!*\
  !*** ./src/pages/api/tip.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\"data\"));\n    const tip = files[Math.floor(Math.random() * files.length)];\n    const tipData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().resolve(`data/${tip}`), \"utf8\");\n    res.status(200).json(JSON.parse(tipData));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RpcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQjtBQUNJO0FBRVQsU0FBU0UsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTUMsUUFBUUwscURBQWMsQ0FBQ0MsbURBQVksQ0FBQztJQUMxQyxNQUFNTyxNQUFNSCxLQUFLLENBQUNJLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLTixNQUFNTyxNQUFNLEVBQUU7SUFFM0QsTUFBTUMsVUFBVWIsc0RBQWUsQ0FBQ0MsbURBQVksQ0FBQyxDQUFDLEtBQUssRUFBRU8sSUFBSSxDQUFDLEdBQUc7SUFFN0RKLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDLEtBQUtDLEtBQUssQ0FBQ0w7QUFFbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lzaGFud2Vic2l0ZS8uL3NyYy9wYWdlcy9hcGkvdGlwLmpzPzY2ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGgucmVzb2x2ZShcImRhdGFcIikpXG4gIGNvbnN0IHRpcCA9IGZpbGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpbGVzLmxlbmd0aCldO1xuXG4gIGNvbnN0IHRpcERhdGEgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKGBkYXRhLyR7dGlwfWApLCBcInV0ZjhcIik7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oSlNPTi5wYXJzZSh0aXBEYXRhKSk7XG5cbn1cbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsInJlc29sdmUiLCJ0aXAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ0aXBEYXRhIiwicmVhZEZpbGVTeW5jIiwic3RhdHVzIiwianNvbiIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/tip.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/tip.js"));
module.exports = __webpack_exports__;

})();