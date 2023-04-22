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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var _components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/extra/ImageWithText */ \"./src/pages/components/extra/ImageWithText.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/Header */ \"./src/pages/components/header/Header.js\");\n/* harmony import */ var _components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/technology/TechnologyUsed */ \"./src/pages/components/technology/TechnologyUsed.js\");\n/* harmony import */ var _components_contact_ContactInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact/ContactInfo */ \"./src/pages/components/contact/ContactInfo.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n // import the components to render based on the active tab\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    const scrollToTop = ()=>{\n        document.documentElement.scrollTop = 0;\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact_ContactInfo__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Projects, {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaCaretUp, {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().scrollToTopButton),\n                        onClick: scrollToTop\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNpQjtBQUdSO0FBQ00sQ0FBQywwREFBMEQ7QUFDbkM7QUFDRTtBQUNUO0FBQ2I7QUFDb0I7QUFDVDtBQUVoQjtBQUc1QixTQUFTWSxPQUFPOztJQUU3QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdaLHFEQUFjLENBQUMsSUFBSTtJQUVqRSx1RUFBdUU7SUFDdkUscUNBQXFDO0lBQ3JDLE1BQU1jLFFBQVFiLDZDQUFNQSxDQUFDO0lBRXJCLE1BQU1jLGNBQWMsQ0FBQ0MsWUFBYztRQUNqQ0osbUJBQW1CSTtJQUNyQjtJQUVBLE1BQU1DLGNBQWMsSUFBTTtRQUN4QkMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLEdBQUc7SUFDdkM7SUFFQSxJQUFJQztJQUNKLE9BQVFWO1FBQ04sS0FBSztZQUNIVSxrQ0FBb0IsOERBQUNuQixnRUFBR0E7Ozs7O1lBQ3hCLEtBQU07UUFDUixLQUFLO1lBQ0htQixrQ0FBb0IsOERBQUNsQiw0RUFBZUE7Ozs7O1lBQ3BDLEtBQU07UUFDUixLQUFLO1lBQ0hrQixrQ0FBb0IsOERBQUNqQiw2RUFBZ0JBOzs7OztZQUNyQyxLQUFNO1FBQ1I7WUFDRWlCLG9CQUFvQixJQUFJO1lBQ3hCLEtBQU07SUFDVjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3ZCLGtEQUFJQTswQkFDSCw0RUFBQ3dCOzhCQUFNOzs7Ozs7Ozs7OzswQkFHVCw4REFBQ0M7Z0JBQUtDLFdBQVd6QixzRUFBVzs7a0NBRzFCLDhEQUFDTyxpRUFBTUE7a0NBQUM7Ozs7OztrQ0FHUiw4REFBQ0QsdUVBQWFBO2tDQUFDOzs7Ozs7a0NBRWYsOERBQUNHLHVFQUFXQTtrQ0FBQzs7Ozs7O2tDQUdiLDhEQUFDaUI7a0NBQVM7Ozs7OztrQ0FFViw4REFBQ2hCLHNEQUFTQTt3QkFBQ2UsV0FBV3pCLG1GQUF3Qjt3QkFBRTRCLFNBQVNWOzs7Ozs7a0NBRXpELDhEQUFDViw2RUFBY0E7a0NBQUM7Ozs7Ozs7Ozs7Ozs7O0FBTXhCLENBQUM7R0EzRHVCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVdTIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvQVdTXCI7IC8vIGltcG9ydCB0aGUgY29tcG9uZW50cyB0byByZW5kZXIgYmFzZWQgb24gdGhlIGFjdGl2ZSB0YWJcbmltcG9ydCBGdWxsU3RhY2tXZWJEZXYgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0cy9GdWxsU3RhY2tXZWJEZXZcIjtcbmltcG9ydCBGdWxsU3RhY2tBbmRyb2lkIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvRnVsbFN0YWNrQW5kcm9pZFwiO1xuaW1wb3J0IEltYWdlV2l0aFRleHQgZnJvbSBcIi4vY29tcG9uZW50cy9leHRyYS9JbWFnZVdpdGhUZXh0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IFRlY2hub2xvZ3lVc2VkIGZyb20gXCIuL2NvbXBvbmVudHMvdGVjaG5vbG9neS9UZWNobm9sb2d5VXNlZFwiO1xuaW1wb3J0IENvbnRhY3RJbmZvIGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0SW5mb1wiO1xuXG5pbXBvcnQgeyBGYUNhcmV0VXAgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbYWN0aXZlQ29tcG9uZW50LCBzZXRBY3RpdmVDb21wb25lbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgLy91c2VSZWYgaXMgbGlrZSBVc2VTdGF0ZSBidXQgZG9lc24ndCBmb3JjZSBhIHJlcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAgLy9iZXN0IGZvciB3b3JraW5nIHdpdGggSFRNTCBlbGVtZW50c1xuICBjb25zdCBjb3VudCA9IHVzZVJlZigwKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChjb21wb25lbnQpID0+IHtcbiAgICBzZXRBY3RpdmVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfTtcblxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfTtcblxuICBsZXQgY29tcG9uZW50VG9SZW5kZXI7XG4gIHN3aXRjaCAoYWN0aXZlQ29tcG9uZW50KSB7XG4gICAgY2FzZSBcIkFXU0NlcnRpZmllZENsb3VkUHJhY3Rpb25lclwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8QVdTIC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZ1bGxTdGFja1dlYkRldmVsb3BIb3RlbEFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tXZWJEZXYgLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRnVsbFN0YWNrQW5kcm9pZE1lYWxlckFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tBbmRyb2lkIC8+O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Jc2hhbidzIFJlYWN0IFdlYnNpdGUgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cblxuICAgICAgICA8SGVhZGVyPiA8L0hlYWRlcj5cblxuXG4gICAgICAgIDxJbWFnZVdpdGhUZXh0PiA8L0ltYWdlV2l0aFRleHQ+XG5cbiAgICAgICAgPENvbnRhY3RJbmZvPiA8L0NvbnRhY3RJbmZvPlxuXG5cbiAgICAgICAgPFByb2plY3RzPiA8L1Byb2plY3RzPlxuXG4gICAgICAgIDxGYUNhcmV0VXAgY2xhc3NOYW1lPXtzdHlsZXMuc2Nyb2xsVG9Ub3BCdXR0b259IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfSAvPiBcblxuICAgICAgICA8VGVjaG5vbG9neVVzZWQ+IDwvVGVjaG5vbG9neVVzZWQ+XG5cblxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJSZWFjdCIsInVzZVJlZiIsIkFXUyIsIkZ1bGxTdGFja1dlYkRldiIsIkZ1bGxTdGFja0FuZHJvaWQiLCJJbWFnZVdpdGhUZXh0IiwiSGVhZGVyIiwiVGVjaG5vbG9neVVzZWQiLCJDb250YWN0SW5mbyIsIkZhQ2FyZXRVcCIsIkhvbWUiLCJhY3RpdmVDb21wb25lbnQiLCJzZXRBY3RpdmVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsImNvdW50IiwiaGFuZGxlQ2xpY2siLCJjb21wb25lbnQiLCJzY3JvbGxUb1RvcCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiY29tcG9uZW50VG9SZW5kZXIiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJQcm9qZWN0cyIsInNjcm9sbFRvVG9wQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});