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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleSlider.module.css */ \"./src/pages/components/header/ToggleSlider.module.css\");\n/* harmony import */ var _ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ToggleSlider() {\n    _s();\n    const [isToggled, setIsToggled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleToggle = ()=>{\n        setIsToggled(!isToggled);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleSliderText),\n        onClick: handleToggle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleSliderSwitch),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleSliderSwitchKnob),\n                    style: {\n                        marginLeft: isToggled ? \"40px\" : \"0\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleSliderLabel),\n                children: isToggled ? \"English\" : \"French\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(ToggleSlider, \"BfAUiqoWRJivSt7ElaSfVLryCwQ=\");\n_c = ToggleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleSlider);\nvar _c;\n$RefreshReg$(_c, \"ToggleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIvVG9nZ2xlU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUNPO0FBRS9DLFNBQVNHLGVBQWU7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELE1BQU1LLGVBQWUsSUFBTTtRQUN6QkQsYUFBYSxDQUFDRDtJQUNoQjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXTixrRkFBdUI7UUFBRVEsU0FBU0o7OzBCQUNoRCw4REFBQ0M7Z0JBQUlDLFdBQVdOLG9GQUF5QjswQkFDdkMsNEVBQUNLO29CQUFJQyxXQUFXTix3RkFBNkI7b0JBQUVXLE9BQU87d0JBQUNDLFlBQVlWLFlBQVksU0FBUyxHQUFHO29CQUFBOzs7Ozs7Ozs7OzswQkFFN0YsOERBQUNHO2dCQUFJQyxXQUFXTixtRkFBd0I7MEJBQUdFLFlBQVksWUFBWSxRQUFROzs7Ozs7Ozs7Ozs7QUFHakY7R0FmU0Q7S0FBQUE7QUFpQlQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvaGVhZGVyL1RvZ2dsZVNsaWRlci5qcz81OGJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1RvZ2dsZVNsaWRlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBUb2dnbGVTbGlkZXIoKSB7XHJcbiAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0SXNUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNUb2dnbGVkKCFpc1RvZ2dsZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZVNsaWRlclRleHR9IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlU2xpZGVyU3dpdGNofT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZVNsaWRlclN3aXRjaEtub2J9IHN0eWxlPXt7bWFyZ2luTGVmdDogaXNUb2dnbGVkID8gJzQwcHgnIDogJzAnfX0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZVNsaWRlckxhYmVsfT57aXNUb2dnbGVkID8gXCJFbmdsaXNoXCIgOiBcIkZyZW5jaFwifTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlU2xpZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlRvZ2dsZVNsaWRlciIsImlzVG9nZ2xlZCIsInNldElzVG9nZ2xlZCIsImhhbmRsZVRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsInRvZ2dsZVNsaWRlclRleHQiLCJvbkNsaWNrIiwidG9nZ2xlU2xpZGVyU3dpdGNoIiwidG9nZ2xlU2xpZGVyU3dpdGNoS25vYiIsInN0eWxlIiwibWFyZ2luTGVmdCIsInRvZ2dsZVNsaWRlckxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/header/ToggleSlider.js\n"));

/***/ })

});