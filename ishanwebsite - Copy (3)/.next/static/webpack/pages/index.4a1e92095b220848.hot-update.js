"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/components/header/ToggleSlider.js":
/*!*****************************************************!*\
  !*** ./src/pages/components/header/ToggleSlider.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ToggleSlider() {\n    _s();\n    const [isToggled, setIsToggled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleToggle = ()=>{\n        setIsToggled(!isToggled);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.toggleSlider,\n        onClick: handleToggle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.toggleSliderSwitch,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.toggleSliderSwitchKnob,\n                    style: {\n                        marginLeft: isToggled ? \"40px\" : \"0\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"toggle-slider-label\",\n                children: isToggled ? \"English\" : \"French\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(ToggleSlider, \"BfAUiqoWRJivSt7ElaSfVLryCwQ=\");\n_c = ToggleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleSlider);\nvar _c;\n$RefreshReg$(_c, \"ToggleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIvVG9nZ2xlU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsU0FBU0UsZUFBZTs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsTUFBTUksZUFBZSxJQUFNO1FBQ3pCRCxhQUFhLENBQUNEO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdDLE9BQU9DLFlBQVk7UUFBRUMsU0FBU0w7OzBCQUM1Qyw4REFBQ0M7Z0JBQUlDLFdBQVdDLE9BQU9HLGtCQUFrQjswQkFDdkMsNEVBQUNMO29CQUFJQyxXQUFXQyxPQUFPSSxzQkFBc0I7b0JBQUVDLE9BQU87d0JBQUNDLFlBQVlYLFlBQVksU0FBUyxHQUFHO29CQUFBOzs7Ozs7Ozs7OzswQkFFN0YsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUF1QkosWUFBWSxZQUFZLFFBQVE7Ozs7Ozs7Ozs7OztBQUc1RTtHQWZTRDtLQUFBQTtBQWlCVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIvVG9nZ2xlU2xpZGVyLmpzPzU4YmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBUb2dnbGVTbGlkZXIoKSB7XHJcbiAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0SXNUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNUb2dnbGVkKCFpc1RvZ2dsZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZVNsaWRlcn0gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVTbGlkZXJTd2l0Y2h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlU2xpZGVyU3dpdGNoS25vYn0gc3R5bGU9e3ttYXJnaW5MZWZ0OiBpc1RvZ2dsZWQgPyAnNDBweCcgOiAnMCd9fT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXNsaWRlci1sYWJlbFwiPntpc1RvZ2dsZWQgPyBcIkVuZ2xpc2hcIiA6IFwiRnJlbmNoXCJ9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVTbGlkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVG9nZ2xlU2xpZGVyIiwiaXNUb2dnbGVkIiwic2V0SXNUb2dnbGVkIiwiaGFuZGxlVG9nZ2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGVzIiwidG9nZ2xlU2xpZGVyIiwib25DbGljayIsInRvZ2dsZVNsaWRlclN3aXRjaCIsInRvZ2dsZVNsaWRlclN3aXRjaEtub2IiLCJzdHlsZSIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/header/ToggleSlider.js\n"));

/***/ })

});