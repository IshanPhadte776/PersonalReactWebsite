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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github.png */ \"./src/github.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var _components_extra_Popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/extra/Popup */ \"./src/pages/components/extra/Popup.js\");\n/* harmony import */ var _components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/extra/ImageWithText */ \"./src/pages/components/extra/ImageWithText.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/Header */ \"./src/pages/components/header/Header.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n // import the components to render based on the active tab\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home() {\n    _s();\n    //const [activeTab, setActiveTab] = React.useState(null);\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    const scrollToTop = ()=>{\n        document.documentElement.scrollTop = 0;\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),\n                        children: [\n                            \" \",\n                            \"Created using React, Next.js, Javascript, HTML5, CSS\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _github_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"My Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Here are some of my side projects \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                                children: \"AWS Certified Cloud Practioner\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                                children: \"Full Stack Web Develop Hotel Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                                children: \"Full Stack Android Mealer Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            componentToRender,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>count.current++,\n                                children: [\n                                    \" \",\n                                    count.current\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().scrollToTopButton),\n                        onClick: scrollToTop,\n                        children: \"^\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_Popup__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDZTtBQUNWO0FBR0U7QUFDTSxDQUFDLDBEQUEwRDtBQUNuQztBQUNFO0FBQ3pCO0FBQ2dCO0FBQ2I7O0FBWWpDLFNBQVNZLE9BQU87O0lBQzdCLHlEQUF5RDtJQUV6RCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdWLHFEQUFjLENBQUMsSUFBSTtJQUVqRSx1RUFBdUU7SUFDdkUscUNBQXFDO0lBQ3JDLE1BQU1ZLFFBQVFYLDZDQUFNQSxDQUFDO0lBRXJCLE1BQU1ZLGNBQWMsQ0FBQ0MsWUFBYztRQUNqQ0osbUJBQW1CSTtJQUNyQjtJQUVBLE1BQU1DLGNBQWMsSUFBTTtRQUN4QkMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLEdBQUc7SUFDdkM7SUFFQSxJQUFJQztJQUNKLE9BQVFWO1FBQ04sS0FBSztZQUNIVSxrQ0FBb0IsOERBQUNqQixnRUFBR0E7Ozs7O1lBQ3hCLEtBQU07UUFDUixLQUFLO1lBQ0hpQixrQ0FBb0IsOERBQUNoQiw0RUFBZUE7Ozs7O1lBQ3BDLEtBQU07UUFDUixLQUFLO1lBQ0hnQixrQ0FBb0IsOERBQUNmLDZFQUFnQkE7Ozs7O1lBQ3JDLEtBQU07UUFDUjtZQUNFZSxvQkFBb0IsSUFBSTtZQUN4QixLQUFNO0lBQ1Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN2QixrREFBSUE7MEJBQ0gsNEVBQUN3Qjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDO2dCQUFLQyxXQUFXeEIsc0VBQVc7O2tDQUcxQiw4REFBQ1Msa0VBQU1BO2tDQUFDOzs7Ozs7a0NBRVIsOERBQUNELHVFQUFhQTtrQ0FBQzs7Ozs7O2tDQU1mLDhEQUFDaUI7d0JBQUdELFdBQVd4Qix1RUFBWTs7NEJBQ3hCOzRCQUFJOzRCQUNnRDs7Ozs7OztrQ0FHdkQsOERBQUNELG1EQUFLQTt3QkFBQzJCLEtBQUt6QixtREFBT0E7d0JBQUUwQixLQUFJOzs7Ozs7a0NBRXpCLDhEQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDO2dDQUFPQyxTQUFTLElBQU1oQixZQUFZOzBDQUFnQzs7Ozs7OzBDQUduRSw4REFBQ2U7Z0NBQ0NDLFNBQVMsSUFBTWhCLFlBQVk7MENBQzVCOzs7Ozs7MENBR0QsOERBQUNlO2dDQUNDQyxTQUFTLElBQU1oQixZQUFZOzBDQUM1Qjs7Ozs7OzRCQUdBTTswQ0FFRCw4REFBQ1M7Z0NBQU9DLFNBQVMsSUFBTWpCLE1BQU1rQixPQUFPOztvQ0FBSTtvQ0FBRWxCLE1BQU1rQixPQUFPOzs7Ozs7Ozs7Ozs7O2tDQUd6RCw4REFBQ0Y7d0JBQU9OLFdBQVd4QixtRkFBd0I7d0JBQUUrQixTQUFTZDtrQ0FBYTs7Ozs7O2tDQUluRSw4REFBQ1YsK0RBQUtBOzs7Ozs7Ozs7Ozs7O0FBSWQsQ0FBQztHQXJGdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgbXlJbWFnZSBmcm9tIFwiLi4vZ2l0aHViLnBuZ1wiO1xuXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBV1MgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0cy9BV1NcIjsgLy8gaW1wb3J0IHRoZSBjb21wb25lbnRzIHRvIHJlbmRlciBiYXNlZCBvbiB0aGUgYWN0aXZlIHRhYlxuaW1wb3J0IEZ1bGxTdGFja1dlYkRldiBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0Z1bGxTdGFja1dlYkRldlwiO1xuaW1wb3J0IEZ1bGxTdGFja0FuZHJvaWQgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0cy9GdWxsU3RhY2tBbmRyb2lkXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vY29tcG9uZW50cy9leHRyYS9Qb3B1cFwiO1xuaW1wb3J0IEltYWdlV2l0aFRleHQgZnJvbSBcIi4vY29tcG9uZW50cy9leHRyYS9JbWFnZVdpdGhUZXh0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclwiO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RpcFwiKTtcbiAgY29uc3QgdGlwID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHRpcCB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvL2NvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbYWN0aXZlQ29tcG9uZW50LCBzZXRBY3RpdmVDb21wb25lbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgLy91c2VSZWYgaXMgbGlrZSBVc2VTdGF0ZSBidXQgZG9lc24ndCBmb3JjZSBhIHJlcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAgLy9iZXN0IGZvciB3b3JraW5nIHdpdGggSFRNTCBlbGVtZW50c1xuICBjb25zdCBjb3VudCA9IHVzZVJlZigwKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChjb21wb25lbnQpID0+IHtcbiAgICBzZXRBY3RpdmVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfTtcblxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfTtcblxuICBsZXQgY29tcG9uZW50VG9SZW5kZXI7XG4gIHN3aXRjaCAoYWN0aXZlQ29tcG9uZW50KSB7XG4gICAgY2FzZSBcIkFXU0NlcnRpZmllZENsb3VkUHJhY3Rpb25lclwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8QVdTIC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZ1bGxTdGFja1dlYkRldmVsb3BIb3RlbEFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tXZWJEZXYgLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRnVsbFN0YWNrQW5kcm9pZE1lYWxlckFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tBbmRyb2lkIC8+O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Jc2hhbidzIFJlYWN0IFdlYnNpdGUgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cblxuICAgICAgICA8SGVhZGVyPiA8L0hlYWRlcj5cblxuICAgICAgICA8SW1hZ2VXaXRoVGV4dD4gPC9JbWFnZVdpdGhUZXh0PlxuXG5cblxuXG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgQ3JlYXRlZCB1c2luZyBSZWFjdCwgTmV4dC5qcywgSmF2YXNjcmlwdCwgSFRNTDUsIENTU3tcIiBcIn1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8SW1hZ2Ugc3JjPXtteUltYWdlfSBhbHQ9XCJNeSBJbWFnZVwiIC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+IEhlcmUgYXJlIHNvbWUgb2YgbXkgc2lkZSBwcm9qZWN0cyA8L2gyPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJBV1NDZXJ0aWZpZWRDbG91ZFByYWN0aW9uZXJcIil9PlxuICAgICAgICAgICAgQVdTIENlcnRpZmllZCBDbG91ZCBQcmFjdGlvbmVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tXZWJEZXZlbG9wSG90ZWxBcHBsaWNhdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wIEhvdGVsIEFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tBbmRyb2lkTWVhbGVyQXBwbGljYXRpb25cIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRnVsbCBTdGFjayBBbmRyb2lkIE1lYWxlciBBcHBsaWNhdGlvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY291bnQuY3VycmVudCsrfT4ge2NvdW50LmN1cnJlbnR9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2Nyb2xsVG9Ub3BCdXR0b259IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICBeXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxQb3B1cD48L1BvcHVwPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIm15SW1hZ2UiLCJSZWFjdCIsInVzZVJlZiIsIkFXUyIsIkZ1bGxTdGFja1dlYkRldiIsIkZ1bGxTdGFja0FuZHJvaWQiLCJQb3B1cCIsIkltYWdlV2l0aFRleHQiLCJIZWFkZXIiLCJIb21lIiwiYWN0aXZlQ29tcG9uZW50Iiwic2V0QWN0aXZlQ29tcG9uZW50IiwidXNlU3RhdGUiLCJjb3VudCIsImhhbmRsZUNsaWNrIiwiY29tcG9uZW50Iiwic2Nyb2xsVG9Ub3AiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNvbXBvbmVudFRvUmVuZGVyIiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJzcmMiLCJhbHQiLCJkaXYiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjdXJyZW50Iiwic2Nyb2xsVG9Ub3BCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});