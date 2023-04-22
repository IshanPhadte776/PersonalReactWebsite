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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github.png */ \"./src/github.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var _components_extra_Popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/extra/Popup */ \"./src/pages/components/extra/Popup.js\");\n/* harmony import */ var _components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/extra/ImageWithText */ \"./src/pages/components/extra/ImageWithText.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/Header */ \"./src/pages/components/header/Header.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n // import the components to render based on the active tab\n\n\n\n\n\nfunction Home() {\n    _s();\n    //const [activeTab, setActiveTab] = React.useState(null);\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    const scrollToTop = ()=>{\n        document.documentElement.scrollTop = 0;\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),\n                        children: \"Created using React, Next.js, Javascript, HTML5, CSS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Here are some of my side projects \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                                children: \"AWS Certified Cloud Practioner\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                                children: \"Full Stack Web Develop Hotel Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                                children: \"Full Stack Android Mealer Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            componentToRender,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>count.current++,\n                                children: [\n                                    \" \",\n                                    count.current\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().scrollToTopButton),\n                        onClick: scrollToTop,\n                        children: \"^\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_Popup__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUNlO0FBQ1Y7QUFHRTtBQUNNLENBQUMsMERBQTBEO0FBQ25DO0FBQ0U7QUFDekI7QUFDZ0I7QUFDYjtBQUdqQyxTQUFTWSxPQUFPOztJQUM3Qix5REFBeUQ7SUFFekQsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHVixxREFBYyxDQUFDLElBQUk7SUFFakUsdUVBQXVFO0lBQ3ZFLHFDQUFxQztJQUNyQyxNQUFNWSxRQUFRWCw2Q0FBTUEsQ0FBQztJQUVyQixNQUFNWSxjQUFjLENBQUNDLFlBQWM7UUFDakNKLG1CQUFtQkk7SUFDckI7SUFFQSxNQUFNQyxjQUFjLElBQU07UUFDeEJDLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxHQUFHO0lBQ3ZDO0lBRUEsSUFBSUM7SUFDSixPQUFRVjtRQUNOLEtBQUs7WUFDSFUsa0NBQW9CLDhEQUFDakIsZ0VBQUdBOzs7OztZQUN4QixLQUFNO1FBQ1IsS0FBSztZQUNIaUIsa0NBQW9CLDhEQUFDaEIsNEVBQWVBOzs7OztZQUNwQyxLQUFNO1FBQ1IsS0FBSztZQUNIZ0Isa0NBQW9CLDhEQUFDZiw2RUFBZ0JBOzs7OztZQUNyQyxLQUFNO1FBQ1I7WUFDRWUsb0JBQW9CLElBQUk7WUFDeEIsS0FBTTtJQUNWO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDdkIsa0RBQUlBOzBCQUNILDRFQUFDd0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDQztnQkFBS0MsV0FBV3hCLHNFQUFXOztrQ0FHMUIsOERBQUNTLGtFQUFNQTtrQ0FBQzs7Ozs7O2tDQUVSLDhEQUFDRCx1RUFBYUE7a0NBQUM7Ozs7OztrQ0FHZiw4REFBQ2lCO3dCQUFHRCxXQUFXeEIsdUVBQVk7a0NBQUU7Ozs7OztrQ0FNN0IsOERBQUMwQjs7MENBQ0MsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDO2dDQUFPQyxTQUFTLElBQU1kLFlBQVk7MENBQWdDOzs7Ozs7MENBR25FLDhEQUFDYTtnQ0FDQ0MsU0FBUyxJQUFNZCxZQUFZOzBDQUM1Qjs7Ozs7OzBDQUdELDhEQUFDYTtnQ0FDQ0MsU0FBUyxJQUFNZCxZQUFZOzBDQUM1Qjs7Ozs7OzRCQUdBTTswQ0FFRCw4REFBQ087Z0NBQU9DLFNBQVMsSUFBTWYsTUFBTWdCLE9BQU87O29DQUFJO29DQUFFaEIsTUFBTWdCLE9BQU87Ozs7Ozs7Ozs7Ozs7a0NBR3pELDhEQUFDRjt3QkFBT0osV0FBV3hCLG1GQUF3Qjt3QkFBRTZCLFNBQVNaO2tDQUFhOzs7Ozs7a0NBSW5FLDhEQUFDViwrREFBS0E7Ozs7Ozs7Ozs7Ozs7QUFJZCxDQUFDO0dBakZ1Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBteUltYWdlIGZyb20gXCIuLi9naXRodWIucG5nXCI7XG5cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFXUyBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0FXU1wiOyAvLyBpbXBvcnQgdGhlIGNvbXBvbmVudHMgdG8gcmVuZGVyIGJhc2VkIG9uIHRoZSBhY3RpdmUgdGFiXG5pbXBvcnQgRnVsbFN0YWNrV2ViRGV2IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvRnVsbFN0YWNrV2ViRGV2XCI7XG5pbXBvcnQgRnVsbFN0YWNrQW5kcm9pZCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0Z1bGxTdGFja0FuZHJvaWRcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9jb21wb25lbnRzL2V4dHJhL1BvcHVwXCI7XG5pbXBvcnQgSW1hZ2VXaXRoVGV4dCBmcm9tIFwiLi9jb21wb25lbnRzL2V4dHJhL0ltYWdlV2l0aFRleHRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy9jb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW2FjdGl2ZUNvbXBvbmVudCwgc2V0QWN0aXZlQ29tcG9uZW50XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIC8vdXNlUmVmIGlzIGxpa2UgVXNlU3RhdGUgYnV0IGRvZXNuJ3QgZm9yY2UgYSByZXJlbmRlciBvZiB0aGUgY29tcG9uZW50XG4gIC8vYmVzdCBmb3Igd29ya2luZyB3aXRoIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgY291bnQgPSB1c2VSZWYoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgc2V0QWN0aXZlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH07XG5cbiAgbGV0IGNvbXBvbmVudFRvUmVuZGVyO1xuICBzd2l0Y2ggKGFjdGl2ZUNvbXBvbmVudCkge1xuICAgIGNhc2UgXCJBV1NDZXJ0aWZpZWRDbG91ZFByYWN0aW9uZXJcIjpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPEFXUyAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJGdWxsU3RhY2tXZWJEZXZlbG9wSG90ZWxBcHBsaWNhdGlvblwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8RnVsbFN0YWNrV2ViRGV2IC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZ1bGxTdGFja0FuZHJvaWRNZWFsZXJBcHBsaWNhdGlvblwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8RnVsbFN0YWNrQW5kcm9pZCAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IG51bGw7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SXNoYW4ncyBSZWFjdCBXZWJzaXRlIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuXG5cbiAgICAgICAgPEhlYWRlcj4gPC9IZWFkZXI+XG5cbiAgICAgICAgPEltYWdlV2l0aFRleHQ+IDwvSW1hZ2VXaXRoVGV4dD5cblxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgXG4gICAgICAgICAgQ3JlYXRlZCB1c2luZyBSZWFjdCwgTmV4dC5qcywgSmF2YXNjcmlwdCwgSFRNTDUsIENTU1xuICAgICAgICA8L2gxPlxuXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+IEhlcmUgYXJlIHNvbWUgb2YgbXkgc2lkZSBwcm9qZWN0cyA8L2gyPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJBV1NDZXJ0aWZpZWRDbG91ZFByYWN0aW9uZXJcIil9PlxuICAgICAgICAgICAgQVdTIENlcnRpZmllZCBDbG91ZCBQcmFjdGlvbmVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tXZWJEZXZlbG9wSG90ZWxBcHBsaWNhdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wIEhvdGVsIEFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tBbmRyb2lkTWVhbGVyQXBwbGljYXRpb25cIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRnVsbCBTdGFjayBBbmRyb2lkIE1lYWxlciBBcHBsaWNhdGlvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY291bnQuY3VycmVudCsrfT4ge2NvdW50LmN1cnJlbnR9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2Nyb2xsVG9Ub3BCdXR0b259IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICBeXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxQb3B1cD48L1BvcHVwPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIm15SW1hZ2UiLCJSZWFjdCIsInVzZVJlZiIsIkFXUyIsIkZ1bGxTdGFja1dlYkRldiIsIkZ1bGxTdGFja0FuZHJvaWQiLCJQb3B1cCIsIkltYWdlV2l0aFRleHQiLCJIZWFkZXIiLCJIb21lIiwiYWN0aXZlQ29tcG9uZW50Iiwic2V0QWN0aXZlQ29tcG9uZW50IiwidXNlU3RhdGUiLCJjb3VudCIsImhhbmRsZUNsaWNrIiwiY29tcG9uZW50Iiwic2Nyb2xsVG9Ub3AiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNvbXBvbmVudFRvUmVuZGVyIiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjdXJyZW50Iiwic2Nyb2xsVG9Ub3BCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});