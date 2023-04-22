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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var _components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/extra/ImageWithText */ \"./src/pages/components/extra/ImageWithText.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/Header */ \"./src/pages/components/header/Header.js\");\n/* harmony import */ var _components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/technology/TechnologyUsed */ \"./src/pages/components/technology/TechnologyUsed.js\");\n/* harmony import */ var _components_contact_ContactInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact/ContactInfo */ \"./src/pages/components/contact/ContactInfo.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n // import the components to render based on the active tab\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    const scrollToTop = ()=>{\n        document.documentElement.scrollTop = 0;\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact_ContactInfo__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Here are some of my side projects \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                                children: \"AWS Certified Cloud Practioner\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                                children: \"Full Stack Web Dev Hotel Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                                children: \"Full Stack Android Mealer Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            componentToRender\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().scrollToTopButton),\n                        onClick: scrollToTop,\n                        children: \" ^ \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2lCO0FBR1I7QUFDTSxDQUFDLDBEQUEwRDtBQUNuQztBQUNFO0FBQ1Q7QUFDYjtBQUNvQjtBQUNUO0FBRTVDLFNBQVNXLE9BQU87O0lBRTdCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1gscURBQWMsQ0FBQyxJQUFJO0lBRWpFLHVFQUF1RTtJQUN2RSxxQ0FBcUM7SUFDckMsTUFBTWEsUUFBUVosNkNBQU1BLENBQUM7SUFFckIsTUFBTWEsY0FBYyxDQUFDQyxZQUFjO1FBQ2pDSixtQkFBbUJJO0lBQ3JCO0lBRUEsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCQyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsR0FBRztJQUN2QztJQUVBLElBQUlDO0lBQ0osT0FBUVY7UUFDTixLQUFLO1lBQ0hVLGtDQUFvQiw4REFBQ2xCLGdFQUFHQTs7Ozs7WUFDeEIsS0FBTTtRQUNSLEtBQUs7WUFDSGtCLGtDQUFvQiw4REFBQ2pCLDRFQUFlQTs7Ozs7WUFDcEMsS0FBTTtRQUNSLEtBQUs7WUFDSGlCLGtDQUFvQiw4REFBQ2hCLDZFQUFnQkE7Ozs7O1lBQ3JDLEtBQU07UUFDUjtZQUNFZ0Isb0JBQW9CLElBQUk7WUFDeEIsS0FBTTtJQUNWO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDdEIsa0RBQUlBOzBCQUNILDRFQUFDdUI7OEJBQU07Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDQztnQkFBS0MsV0FBV3hCLHNFQUFXOztrQ0FHMUIsOERBQUNPLGlFQUFNQTtrQ0FBQzs7Ozs7O2tDQUdSLDhEQUFDRCx1RUFBYUE7a0NBQUM7Ozs7OztrQ0FFZiw4REFBQ0csdUVBQVdBO2tDQUFDOzs7Ozs7a0NBR2IsOERBQUNnQjs7MENBQ0MsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDO2dDQUFPQyxTQUFTLElBQU1iLFlBQVk7MENBQWdDOzs7Ozs7MENBR25FLDhEQUFDWTtnQ0FDQ0MsU0FBUyxJQUFNYixZQUFZOzBDQUM1Qjs7Ozs7OzBDQUdELDhEQUFDWTtnQ0FDQ0MsU0FBUyxJQUFNYixZQUFZOzBDQUM1Qjs7Ozs7OzRCQUdBTTs7Ozs7OztrQ0FJSCw4REFBQ007d0JBQU9ILFdBQVd4QixtRkFBd0I7d0JBQUU0QixTQUFTWDtrQ0FBYTs7Ozs7O2tDQUVuRSw4REFBQ1QsNkVBQWNBO2tDQUFDOzs7Ozs7Ozs7Ozs7OztBQU14QixDQUFDO0dBNUV1QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFXUyBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0FXU1wiOyAvLyBpbXBvcnQgdGhlIGNvbXBvbmVudHMgdG8gcmVuZGVyIGJhc2VkIG9uIHRoZSBhY3RpdmUgdGFiXG5pbXBvcnQgRnVsbFN0YWNrV2ViRGV2IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvRnVsbFN0YWNrV2ViRGV2XCI7XG5pbXBvcnQgRnVsbFN0YWNrQW5kcm9pZCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0Z1bGxTdGFja0FuZHJvaWRcIjtcbmltcG9ydCBJbWFnZVdpdGhUZXh0IGZyb20gXCIuL2NvbXBvbmVudHMvZXh0cmEvSW1hZ2VXaXRoVGV4dFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCBUZWNobm9sb2d5VXNlZCBmcm9tIFwiLi9jb21wb25lbnRzL3RlY2hub2xvZ3kvVGVjaG5vbG9neVVzZWRcIjtcbmltcG9ydCBDb250YWN0SW5mbyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdEluZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbYWN0aXZlQ29tcG9uZW50LCBzZXRBY3RpdmVDb21wb25lbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgLy91c2VSZWYgaXMgbGlrZSBVc2VTdGF0ZSBidXQgZG9lc24ndCBmb3JjZSBhIHJlcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAgLy9iZXN0IGZvciB3b3JraW5nIHdpdGggSFRNTCBlbGVtZW50c1xuICBjb25zdCBjb3VudCA9IHVzZVJlZigwKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChjb21wb25lbnQpID0+IHtcbiAgICBzZXRBY3RpdmVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfTtcblxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfTtcblxuICBsZXQgY29tcG9uZW50VG9SZW5kZXI7XG4gIHN3aXRjaCAoYWN0aXZlQ29tcG9uZW50KSB7XG4gICAgY2FzZSBcIkFXU0NlcnRpZmllZENsb3VkUHJhY3Rpb25lclwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8QVdTIC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZ1bGxTdGFja1dlYkRldmVsb3BIb3RlbEFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tXZWJEZXYgLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRnVsbFN0YWNrQW5kcm9pZE1lYWxlckFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tBbmRyb2lkIC8+O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Jc2hhbidzIFJlYWN0IFdlYnNpdGUgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cblxuICAgICAgICA8SGVhZGVyPiA8L0hlYWRlcj5cblxuXG4gICAgICAgIDxJbWFnZVdpdGhUZXh0PiA8L0ltYWdlV2l0aFRleHQ+XG5cbiAgICAgICAgPENvbnRhY3RJbmZvPiA8L0NvbnRhY3RJbmZvPlxuXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+IEhlcmUgYXJlIHNvbWUgb2YgbXkgc2lkZSBwcm9qZWN0cyA8L2gyPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJBV1NDZXJ0aWZpZWRDbG91ZFByYWN0aW9uZXJcIil9PlxuICAgICAgICAgICAgQVdTIENlcnRpZmllZCBDbG91ZCBQcmFjdGlvbmVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tXZWJEZXZlbG9wSG90ZWxBcHBsaWNhdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdWxsIFN0YWNrIFdlYiBEZXYgSG90ZWwgQXBwbGljYXRpb25cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIkZ1bGxTdGFja0FuZHJvaWRNZWFsZXJBcHBsaWNhdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdWxsIFN0YWNrIEFuZHJvaWQgTWVhbGVyIEFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2NvbXBvbmVudFRvUmVuZGVyfVxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2Nyb2xsVG9Ub3BCdXR0b259IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT4gXiA8L2J1dHRvbj5cblxuICAgICAgICA8VGVjaG5vbG9neVVzZWQ+IDwvVGVjaG5vbG9neVVzZWQ+XG5cblxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJSZWFjdCIsInVzZVJlZiIsIkFXUyIsIkZ1bGxTdGFja1dlYkRldiIsIkZ1bGxTdGFja0FuZHJvaWQiLCJJbWFnZVdpdGhUZXh0IiwiSGVhZGVyIiwiVGVjaG5vbG9neVVzZWQiLCJDb250YWN0SW5mbyIsIkhvbWUiLCJhY3RpdmVDb21wb25lbnQiLCJzZXRBY3RpdmVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsImNvdW50IiwiaGFuZGxlQ2xpY2siLCJjb21wb25lbnQiLCJzY3JvbGxUb1RvcCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiY29tcG9uZW50VG9SZW5kZXIiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzY3JvbGxUb1RvcEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});