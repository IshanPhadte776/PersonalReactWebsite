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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github.png */ \"./src/github.png\");\n/* harmony import */ var _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IshanLogo.png */ \"./src/IshanLogo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var _ScrollToTopButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ScrollToTopButton */ \"./src/pages/ScrollToTopButton.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // import the components to render based on the active tab\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { tip  } = param;\n    _s();\n    //const [activeTab, setActiveTab] = React.useState(null);\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    const scrollToTop = ()=>{\n        document.documentElement.scrollTop = 0;\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                        children: \" Ishan Phadte \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().jump),\n                        alt: \"Jumping Textbox\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \" \",\n                            \"Here's a Random Tip (Refresh the Page For a Different Fun Fact)\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                        children: [\n                            \" \",\n                            \"These Fun Facts were generated by API Calls\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \" \",\n                            tip.title,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            tip.description,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/IshanPhadte776\",\n                        children: \"Visit My Github \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.linkedin.com/in/ishan-phadte-7b50b2243/\",\n                        children: [\n                            \"Visit My Linkedin\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                        children: [\n                            \" \",\n                            \"Created using React, Next.js, Javascript, HTML5, CSS\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _github_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"My Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Here are some of my side projects \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                                children: \"AWS Certified Cloud Practioner\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                                children: \"Full Stack Web Develop Hotel Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                                children: \"Full Stack Android Mealer Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            componentToRender,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>count.current++,\n                                children: [\n                                    \" \",\n                                    count.current\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().scrollToTopButton),\n                        onClick: scrollToTop,\n                        children: \"Scroll to top top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ScrollToTopButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 122,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUNlO0FBQ1Y7QUFDTztBQUdMO0FBQ00sQ0FBQywwREFBMEQ7QUFDbkM7QUFDRTtBQUNsQjs7QUFlckMsU0FBU1csS0FBSyxLQUFPLEVBQUU7UUFBVCxFQUFFQyxJQUFHLEVBQUUsR0FBUDs7SUFDM0IseURBQXlEO0lBRXpELE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1QscURBQWMsQ0FBQyxJQUFJO0lBRWpFLHVFQUF1RTtJQUN2RSxxQ0FBcUM7SUFDckMsTUFBTVcsUUFBUVYsNkNBQU1BLENBQUM7SUFFckIsTUFBTVcsY0FBYyxDQUFDQyxZQUFjO1FBQ2pDSixtQkFBbUJJO0lBQ3JCO0lBRUEsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCQyxTQUFTQyxlQUFlLENBQUNDLFNBQVMsR0FBRztJQUN2QztJQUlBLElBQUlDO0lBQ0osT0FBUVY7UUFDTixLQUFLO1lBQ0hVLGtDQUFvQiw4REFBQ2hCLGdFQUFHQTs7Ozs7WUFDeEIsS0FBTTtRQUNSLEtBQUs7WUFDSGdCLGtDQUFvQiw4REFBQ2YsNEVBQWVBOzs7OztZQUNwQyxLQUFNO1FBQ1IsS0FBSztZQUNIZSxrQ0FBb0IsOERBQUNkLDZFQUFnQkE7Ozs7O1lBQ3JDLEtBQU07UUFDUjtZQUNFYyxvQkFBb0IsSUFBSTtZQUN4QixLQUFNO0lBQ1Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN2QixrREFBSUE7MEJBQ0gsNEVBQUN3Qjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDO2dCQUFLQyxXQUFXeEIsc0VBQVc7O2tDQUUxQiw4REFBQ3lCO3dCQUFHRCxXQUFXeEIsdUVBQVk7a0NBQUU7Ozs7OztrQ0FFN0IsOERBQUNELG1EQUFLQTt3QkFBQzJCLEtBQU94QixzREFBV0E7d0JBQUVzQixXQUFXeEIsc0VBQVc7d0JBQUU0QixLQUFJOzs7Ozs7a0NBRXZELDhEQUFDSDs7NEJBQ0U7NEJBQUk7NEJBQzJEOzs7Ozs7O2tDQUVsRSw4REFBQ0E7d0JBQUdELFdBQVd4Qix1RUFBWTs7NEJBQ3hCOzRCQUFJOzRCQUN1Qzs7Ozs7OztrQ0FHOUMsOERBQUM2Qjs7NEJBQUc7NEJBQUVuQixJQUFJWSxLQUFLOzRCQUFDOzs7Ozs7O2tDQUNoQiw4REFBQ1E7OzRCQUFFOzRCQUFFcEIsSUFBSXFCLFdBQVc7NEJBQUM7Ozs7Ozs7a0NBRXJCLDhEQUFDQzt3QkFBRUMsTUFBSztrQ0FBb0M7Ozs7OztrQ0FDNUMsOERBQUNEO3dCQUFFQyxNQUFLOzs0QkFBc0Q7NEJBQzFDOzs7Ozs7O2tDQUdwQiw4REFBQ1I7d0JBQUdELFdBQVd4Qix1RUFBWTs7NEJBQ3hCOzRCQUFJOzRCQUNnRDs7Ozs7OztrQ0FHdkQsOERBQUNELG1EQUFLQTt3QkFBQzJCLEtBQUt6QixtREFBT0E7d0JBQUUyQixLQUFJOzs7Ozs7a0NBRXpCLDhEQUFDTTs7MENBQ0MsOERBQUNMOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNNO2dDQUFPQyxTQUFTLElBQU1yQixZQUFZOzBDQUFnQzs7Ozs7OzBDQUduRSw4REFBQ29CO2dDQUNDQyxTQUFTLElBQU1yQixZQUFZOzBDQUM1Qjs7Ozs7OzBDQUdELDhEQUFDb0I7Z0NBQ0NDLFNBQVMsSUFBTXJCLFlBQVk7MENBQzVCOzs7Ozs7NEJBR0FNOzBDQUVELDhEQUFDYztnQ0FBT0MsU0FBUyxJQUFNdEIsTUFBTXVCLE9BQU87O29DQUFJO29DQUFFdkIsTUFBTXVCLE9BQU87Ozs7Ozs7Ozs7Ozs7a0NBR3pELDhEQUFDRjt3QkFBT1gsV0FBWXhCLG1GQUF3Qjt3QkFBRW9DLFNBQVNuQjtrQ0FBYTs7Ozs7O2tDQUl4RSw4REFBQ1QsMERBQWlCQTtrQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFPdkIsQ0FBQztHQXRHdUJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgbXlJbWFnZSBmcm9tIFwiLi4vZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IGp1bXBpbmdMb2dvIGZyb20gXCIuLi9Jc2hhbkxvZ28ucG5nXCI7XG5cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFXUyBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0FXU1wiOyAvLyBpbXBvcnQgdGhlIGNvbXBvbmVudHMgdG8gcmVuZGVyIGJhc2VkIG9uIHRoZSBhY3RpdmUgdGFiXG5pbXBvcnQgRnVsbFN0YWNrV2ViRGV2IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvRnVsbFN0YWNrV2ViRGV2XCI7XG5pbXBvcnQgRnVsbFN0YWNrQW5kcm9pZCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0Z1bGxTdGFja0FuZHJvaWRcIjtcbmltcG9ydCBTY3JvbGxUb1RvcEJ1dHRvbiBmcm9tIFwiLi9TY3JvbGxUb1RvcEJ1dHRvblwiO1xuXG5cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RpcFwiKTtcbiAgY29uc3QgdGlwID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHRpcCB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdGlwIH0pIHtcbiAgLy9jb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW2FjdGl2ZUNvbXBvbmVudCwgc2V0QWN0aXZlQ29tcG9uZW50XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIC8vdXNlUmVmIGlzIGxpa2UgVXNlU3RhdGUgYnV0IGRvZXNuJ3QgZm9yY2UgYSByZXJlbmRlciBvZiB0aGUgY29tcG9uZW50XG4gIC8vYmVzdCBmb3Igd29ya2luZyB3aXRoIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgY291bnQgPSB1c2VSZWYoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgc2V0QWN0aXZlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH07XG5cbiAgXG5cbiAgbGV0IGNvbXBvbmVudFRvUmVuZGVyO1xuICBzd2l0Y2ggKGFjdGl2ZUNvbXBvbmVudCkge1xuICAgIGNhc2UgXCJBV1NDZXJ0aWZpZWRDbG91ZFByYWN0aW9uZXJcIjpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPEFXUyAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJGdWxsU3RhY2tXZWJEZXZlbG9wSG90ZWxBcHBsaWNhdGlvblwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8RnVsbFN0YWNrV2ViRGV2IC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZ1bGxTdGFja0FuZHJvaWRNZWFsZXJBcHBsaWNhdGlvblwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8RnVsbFN0YWNrQW5kcm9pZCAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IG51bGw7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SXNoYW4ncyBSZWFjdCBXZWJzaXRlIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+IElzaGFuIFBoYWR0ZSA8L2gxPlxuXG4gICAgICAgIDxJbWFnZSBzcmMgPSB7anVtcGluZ0xvZ299IGNsYXNzTmFtZT17c3R5bGVzLmp1bXB9IGFsdD1cIkp1bXBpbmcgVGV4dGJveFwiIC8+XG5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBIZXJlJ3MgYSBSYW5kb20gVGlwIChSZWZyZXNoIHRoZSBQYWdlIEZvciBhIERpZmZlcmVudCBGdW4gRmFjdCl7XCIgXCJ9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIFRoZXNlIEZ1biBGYWN0cyB3ZXJlIGdlbmVyYXRlZCBieSBBUEkgQ2FsbHN7XCIgXCJ9XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGgyPiB7dGlwLnRpdGxlfSA8L2gyPlxuICAgICAgICA8cD4ge3RpcC5kZXNjcmlwdGlvbn0gPC9wPlxuXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSXNoYW5QaGFkdGU3NzZcIj5WaXNpdCBNeSBHaXRodWIgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2lzaGFuLXBoYWR0ZS03YjUwYjIyNDMvXCI+XG4gICAgICAgICAgVmlzaXQgTXkgTGlua2VkaW57XCIgXCJ9XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBDcmVhdGVkIHVzaW5nIFJlYWN0LCBOZXh0LmpzLCBKYXZhc2NyaXB0LCBIVE1MNSwgQ1NTe1wiIFwifVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxJbWFnZSBzcmM9e215SW1hZ2V9IGFsdD1cIk15IEltYWdlXCIgLz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj4gSGVyZSBhcmUgc29tZSBvZiBteSBzaWRlIHByb2plY3RzIDwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIkFXU0NlcnRpZmllZENsb3VkUHJhY3Rpb25lclwiKX0+XG4gICAgICAgICAgICBBV1MgQ2VydGlmaWVkIENsb3VkIFByYWN0aW9uZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIkZ1bGxTdGFja1dlYkRldmVsb3BIb3RlbEFwcGxpY2F0aW9uXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZ1bGwgU3RhY2sgV2ViIERldmVsb3AgSG90ZWwgQXBwbGljYXRpb25cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIkZ1bGxTdGFja0FuZHJvaWRNZWFsZXJBcHBsaWNhdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdWxsIFN0YWNrIEFuZHJvaWQgTWVhbGVyIEFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2NvbXBvbmVudFRvUmVuZGVyfVxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb3VudC5jdXJyZW50Kyt9PiB7Y291bnQuY3VycmVudH08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9IHtzdHlsZXMuc2Nyb2xsVG9Ub3BCdXR0b259IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgIFNjcm9sbCB0byB0b3AgdG9wXG4gICAgPC9idXR0b24+XG5cbiAgICA8U2Nyb2xsVG9Ub3BCdXR0b24+IDwvU2Nyb2xsVG9Ub3BCdXR0b24+XG5cbiAgICBcbiAgICAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIm15SW1hZ2UiLCJqdW1waW5nTG9nbyIsIlJlYWN0IiwidXNlUmVmIiwiQVdTIiwiRnVsbFN0YWNrV2ViRGV2IiwiRnVsbFN0YWNrQW5kcm9pZCIsIlNjcm9sbFRvVG9wQnV0dG9uIiwiSG9tZSIsInRpcCIsImFjdGl2ZUNvbXBvbmVudCIsInNldEFjdGl2ZUNvbXBvbmVudCIsInVzZVN0YXRlIiwiY291bnQiLCJoYW5kbGVDbGljayIsImNvbXBvbmVudCIsInNjcm9sbFRvVG9wIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJjb21wb25lbnRUb1JlbmRlciIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwic3JjIiwianVtcCIsImFsdCIsImgyIiwicCIsImRlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiY3VycmVudCIsInNjcm9sbFRvVG9wQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});