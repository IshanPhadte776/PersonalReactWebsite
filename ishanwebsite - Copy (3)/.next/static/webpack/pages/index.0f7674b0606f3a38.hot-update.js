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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleSlider.module.css */ \"./src/pages/components/header/ToggleSlider.module.css\");\n/* harmony import */ var _ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ToggleSlider(props) {\n    _s();\n    const [isToggled, setIsToggled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleToggle = ()=>{\n        setIsToggled(!isToggled);\n        if (!isToggled) {\n            props.onLanguageChange(\"English\");\n            console.log(props.language);\n        } else {\n            props.onLanguageChange(\"French\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleSliderText),\n        onClick: handleToggle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleSliderSwitch),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleSliderSwitchKnob),\n                    style: {\n                        marginLeft: isToggled ? \"40px\" : \"0\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ToggleSlider_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggleSliderLabel),\n                children: [\n                    isToggled ? \"English\" : \"French\",\n                    \"  value=\",\n                    props.language,\n                    \" onChange=\",\n                    props.onLanguageChange,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\header\\\\ToggleSlider.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(ToggleSlider, \"BfAUiqoWRJivSt7ElaSfVLryCwQ=\");\n_c = ToggleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleSlider);\nvar _c;\n$RefreshReg$(_c, \"ToggleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIvVG9nZ2xlU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUNPO0FBRS9DLFNBQVNHLGFBQWFDLEtBQUssRUFBRTs7SUFDM0IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsTUFBTU0sZUFBZSxJQUFNO1FBQ3pCRCxhQUFhLENBQUNEO1FBRWQsSUFBSSxDQUFDQSxXQUFXO1lBQ2RELE1BQU1JLGdCQUFnQixDQUFDO1lBQ3ZCQyxRQUFRQyxHQUFHLENBQUNOLE1BQU1PLFFBQVE7UUFDNUIsT0FBTztZQUNMUCxNQUFNSSxnQkFBZ0IsQ0FBQztRQUN6QixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBV1gsa0ZBQXVCO1FBQUVhLFNBQVNSOzswQkFDaEQsOERBQUNLO2dCQUFJQyxXQUFXWCxvRkFBeUI7MEJBQ3ZDLDRFQUFDVTtvQkFBSUMsV0FBV1gsd0ZBQTZCO29CQUFFZ0IsT0FBTzt3QkFBQ0MsWUFBWWQsWUFBWSxTQUFTLEdBQUc7b0JBQUE7Ozs7Ozs7Ozs7OzBCQUU3Riw4REFBQ087Z0JBQUlDLFdBQVdYLG1GQUF3Qjs7b0JBQUdHLFlBQVksWUFBWSxRQUFRO29CQUFDO29CQUFTRCxNQUFNTyxRQUFRO29CQUFDO29CQUFXUCxNQUFNSSxnQkFBZ0I7b0JBQUM7Ozs7Ozs7Ozs7Ozs7QUFHNUk7R0F0QlNMO0tBQUFBO0FBd0JULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL2hlYWRlci9Ub2dnbGVTbGlkZXIuanM/NThiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ub2dnbGVTbGlkZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gVG9nZ2xlU2xpZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0SXNUb2dnbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNUb2dnbGVkKCFpc1RvZ2dsZWQpO1xyXG5cclxuICAgIGlmICghaXNUb2dnbGVkKSB7XHJcbiAgICAgIHByb3BzLm9uTGFuZ3VhZ2VDaGFuZ2UoXCJFbmdsaXNoXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9wcy5sYW5ndWFnZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb3BzLm9uTGFuZ3VhZ2VDaGFuZ2UoXCJGcmVuY2hcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlU2xpZGVyVGV4dH0gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVTbGlkZXJTd2l0Y2h9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlU2xpZGVyU3dpdGNoS25vYn0gc3R5bGU9e3ttYXJnaW5MZWZ0OiBpc1RvZ2dsZWQgPyAnNDBweCcgOiAnMCd9fT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlU2xpZGVyTGFiZWx9Pntpc1RvZ2dsZWQgPyBcIkVuZ2xpc2hcIiA6IFwiRnJlbmNoXCJ9ICB2YWx1ZT17cHJvcHMubGFuZ3VhZ2V9IG9uQ2hhbmdlPXtwcm9wcy5vbkxhbmd1YWdlQ2hhbmdlfSA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZVNsaWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJUb2dnbGVTbGlkZXIiLCJwcm9wcyIsImlzVG9nZ2xlZCIsInNldElzVG9nZ2xlZCIsImhhbmRsZVRvZ2dsZSIsIm9uTGFuZ3VhZ2VDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwibGFuZ3VhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ0b2dnbGVTbGlkZXJUZXh0Iiwib25DbGljayIsInRvZ2dsZVNsaWRlclN3aXRjaCIsInRvZ2dsZVNsaWRlclN3aXRjaEtub2IiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJ0b2dnbGVTbGlkZXJMYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/header/ToggleSlider.js\n"));

/***/ })

});