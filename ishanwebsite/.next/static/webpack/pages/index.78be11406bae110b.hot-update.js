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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github.png */ \"./src/github.png\");\n/* harmony import */ var _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IshanLogo.png */ \"./src/IshanLogo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-custom-scrollbars */ \"./node_modules/react-custom-scrollbars/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // import the components to render based on the active tab\n\n\n//import ScrollBar from \"./components/hero/ScrollBar\";\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { tip  } = param;\n    _s();\n    //const [activeTab, setActiveTab] = React.useState(null);\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().scrollbar) - container\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                        children: \" Ishan Phadte \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().jump),\n                        alt: \"Jumping Textbox\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \" \",\n                            \"Here's a Random Tip (Refresh the Page For a Different Fun Fact)\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                        children: [\n                            \" \",\n                            \"These Fun Facts were generated by API Calls\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \" \",\n                            tip.title,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            tip.description,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/IshanPhadte776\",\n                        children: \"Visit My Github \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.linkedin.com/in/ishan-phadte-7b50b2243/\",\n                        children: [\n                            \"Visit My Linkedin\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                        children: [\n                            \" \",\n                            \"Created using React, Next.js, Javascript, HTML5, CSS\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _github_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"My Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Here are some of my side projects \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                                children: \"AWS Certified Cloud Practioner\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                                children: \"Full Stack Web Develop Hotel Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                                children: \"Full Stack Android Mealer Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this),\n                            componentToRender,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>count.current++,\n                                children: [\n                                    \" \",\n                                    count.current\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUNlO0FBQ1Y7QUFDTztBQUdMO0FBQ00sQ0FBQywwREFBMEQ7QUFDbkM7QUFDRTtBQUN0RSxzREFBc0Q7QUFFRDs7QUFldEMsU0FBU1csS0FBSyxLQUFPLEVBQUU7UUFBVCxFQUFFQyxJQUFHLEVBQUUsR0FBUDs7SUFDM0IseURBQXlEO0lBRXpELE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1QscURBQWMsQ0FBQyxJQUFJO0lBRWpFLHVFQUF1RTtJQUN2RSxxQ0FBcUM7SUFDckMsTUFBTVcsUUFBUVYsNkNBQU1BLENBQUM7SUFFckIsTUFBTVcsY0FBYyxDQUFDQyxZQUFjO1FBQ2pDSixtQkFBbUJJO0lBQ3JCO0lBRUEsSUFBSUM7SUFDSixPQUFRTjtRQUNOLEtBQUs7WUFDSE0sa0NBQW9CLDhEQUFDWixnRUFBR0E7Ozs7O1lBQ3hCLEtBQU07UUFDUixLQUFLO1lBQ0hZLGtDQUFvQiw4REFBQ1gsNEVBQWVBOzs7OztZQUNwQyxLQUFNO1FBQ1IsS0FBSztZQUNIVyxrQ0FBb0IsOERBQUNWLDZFQUFnQkE7Ozs7O1lBQ3JDLEtBQU07UUFDUjtZQUNFVSxvQkFBb0IsSUFBSTtZQUN4QixLQUFNO0lBQ1Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNuQixrREFBSUE7MEJBQ0gsNEVBQUNvQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDO2dCQUFLQyxXQUFXcEIsc0VBQVc7O2tDQUU1Qiw4REFBQ3FCO3dCQUFJRCxXQUFZcEIsMkVBQWdCLEdBQUN1Qjs7Ozs7O2tDQUdoQyw4REFBQ0M7d0JBQUdKLFdBQVdwQix1RUFBWTtrQ0FBRTs7Ozs7O2tDQUU3Qiw4REFBQ0QsbURBQUtBO3dCQUFDMEIsS0FBT3ZCLHNEQUFXQTt3QkFBRWtCLFdBQVdwQixzRUFBVzt3QkFBRTJCLEtBQUk7Ozs7OztrQ0FFdkQsOERBQUNIOzs0QkFDRTs0QkFBSTs0QkFDMkQ7Ozs7Ozs7a0NBRWxFLDhEQUFDQTt3QkFBR0osV0FBV3BCLHVFQUFZOzs0QkFDeEI7NEJBQUk7NEJBQ3VDOzs7Ozs7O2tDQUc5Qyw4REFBQzRCOzs0QkFBRzs0QkFBRWxCLElBQUlRLEtBQUs7NEJBQUM7Ozs7Ozs7a0NBQ2hCLDhEQUFDVzs7NEJBQUU7NEJBQUVuQixJQUFJb0IsV0FBVzs0QkFBQzs7Ozs7OztrQ0FFckIsOERBQUNDO3dCQUFFQyxNQUFLO2tDQUFvQzs7Ozs7O2tDQUM1Qyw4REFBQ0Q7d0JBQUVDLE1BQUs7OzRCQUFzRDs0QkFDMUM7Ozs7Ozs7a0NBR3BCLDhEQUFDUjt3QkFBR0osV0FBV3BCLHVFQUFZOzs0QkFDeEI7NEJBQUk7NEJBQ2dEOzs7Ozs7O2tDQUd2RCw4REFBQ0QsbURBQUtBO3dCQUFDMEIsS0FBS3hCLG1EQUFPQTt3QkFBRTBCLEtBQUk7Ozs7OztrQ0FFekIsOERBQUNOOzswQ0FDQyw4REFBQ087MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0s7Z0NBQU9DLFNBQVMsSUFBTW5CLFlBQVk7MENBQWdDOzs7Ozs7MENBR25FLDhEQUFDa0I7Z0NBQ0NDLFNBQVMsSUFBTW5CLFlBQVk7MENBQzVCOzs7Ozs7MENBR0QsOERBQUNrQjtnQ0FDQ0MsU0FBUyxJQUFNbkIsWUFBWTswQ0FDNUI7Ozs7Ozs0QkFHQUU7MENBRUQsOERBQUNnQjtnQ0FBT0MsU0FBUyxJQUFNcEIsTUFBTXFCLE9BQU87O29DQUFJO29DQUFFckIsTUFBTXFCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRSxDQUFDO0dBN0Z1QjFCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgbXlJbWFnZSBmcm9tIFwiLi4vZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IGp1bXBpbmdMb2dvIGZyb20gXCIuLi9Jc2hhbkxvZ28ucG5nXCI7XG5cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFXUyBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0FXU1wiOyAvLyBpbXBvcnQgdGhlIGNvbXBvbmVudHMgdG8gcmVuZGVyIGJhc2VkIG9uIHRoZSBhY3RpdmUgdGFiXG5pbXBvcnQgRnVsbFN0YWNrV2ViRGV2IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvRnVsbFN0YWNrV2ViRGV2XCI7XG5pbXBvcnQgRnVsbFN0YWNrQW5kcm9pZCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0Z1bGxTdGFja0FuZHJvaWRcIjtcbi8vaW1wb3J0IFNjcm9sbEJhciBmcm9tIFwiLi9jb21wb25lbnRzL2hlcm8vU2Nyb2xsQmFyXCI7XG5cbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5cblxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGlwXCIpO1xuICBjb25zdCB0aXAgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdGlwIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0aXAgfSkge1xuICAvL2NvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbYWN0aXZlQ29tcG9uZW50LCBzZXRBY3RpdmVDb21wb25lbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgLy91c2VSZWYgaXMgbGlrZSBVc2VTdGF0ZSBidXQgZG9lc24ndCBmb3JjZSBhIHJlcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAgLy9iZXN0IGZvciB3b3JraW5nIHdpdGggSFRNTCBlbGVtZW50c1xuICBjb25zdCBjb3VudCA9IHVzZVJlZigwKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChjb21wb25lbnQpID0+IHtcbiAgICBzZXRBY3RpdmVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfTtcblxuICBsZXQgY29tcG9uZW50VG9SZW5kZXI7XG4gIHN3aXRjaCAoYWN0aXZlQ29tcG9uZW50KSB7XG4gICAgY2FzZSBcIkFXU0NlcnRpZmllZENsb3VkUHJhY3Rpb25lclwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8QVdTIC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZ1bGxTdGFja1dlYkRldmVsb3BIb3RlbEFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tXZWJEZXYgLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRnVsbFN0YWNrQW5kcm9pZE1lYWxlckFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tBbmRyb2lkIC8+O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Jc2hhbidzIFJlYWN0IFdlYnNpdGUgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLnNjcm9sbGJhci1jb250YWluZXJ9PlxuICA8L2Rpdj5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PiBJc2hhbiBQaGFkdGUgPC9oMT5cblxuICAgICAgICA8SW1hZ2Ugc3JjID0ge2p1bXBpbmdMb2dvfSBjbGFzc05hbWU9e3N0eWxlcy5qdW1wfSBhbHQ9XCJKdW1waW5nIFRleHRib3hcIiAvPlxuXG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgSGVyZSdzIGEgUmFuZG9tIFRpcCAoUmVmcmVzaCB0aGUgUGFnZSBGb3IgYSBEaWZmZXJlbnQgRnVuIEZhY3Qpe1wiIFwifVxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBUaGVzZSBGdW4gRmFjdHMgd2VyZSBnZW5lcmF0ZWQgYnkgQVBJIENhbGxze1wiIFwifVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxoMj4ge3RpcC50aXRsZX0gPC9oMj5cbiAgICAgICAgPHA+IHt0aXAuZGVzY3JpcHRpb259IDwvcD5cblxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0lzaGFuUGhhZHRlNzc2XCI+VmlzaXQgTXkgR2l0aHViIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9pc2hhbi1waGFkdGUtN2I1MGIyMjQzL1wiPlxuICAgICAgICAgIFZpc2l0IE15IExpbmtlZGlue1wiIFwifVxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgQ3JlYXRlZCB1c2luZyBSZWFjdCwgTmV4dC5qcywgSmF2YXNjcmlwdCwgSFRNTDUsIENTU3tcIiBcIn1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8SW1hZ2Ugc3JjPXtteUltYWdlfSBhbHQ9XCJNeSBJbWFnZVwiIC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+IEhlcmUgYXJlIHNvbWUgb2YgbXkgc2lkZSBwcm9qZWN0cyA8L2gyPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJBV1NDZXJ0aWZpZWRDbG91ZFByYWN0aW9uZXJcIil9PlxuICAgICAgICAgICAgQVdTIENlcnRpZmllZCBDbG91ZCBQcmFjdGlvbmVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tXZWJEZXZlbG9wSG90ZWxBcHBsaWNhdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wIEhvdGVsIEFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tBbmRyb2lkTWVhbGVyQXBwbGljYXRpb25cIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRnVsbCBTdGFjayBBbmRyb2lkIE1lYWxlciBBcHBsaWNhdGlvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY291bnQuY3VycmVudCsrfT4ge2NvdW50LmN1cnJlbnR9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwibXlJbWFnZSIsImp1bXBpbmdMb2dvIiwiUmVhY3QiLCJ1c2VSZWYiLCJBV1MiLCJGdWxsU3RhY2tXZWJEZXYiLCJGdWxsU3RhY2tBbmRyb2lkIiwiU2Nyb2xsYmFycyIsIkhvbWUiLCJ0aXAiLCJhY3RpdmVDb21wb25lbnQiLCJzZXRBY3RpdmVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsImNvdW50IiwiaGFuZGxlQ2xpY2siLCJjb21wb25lbnQiLCJjb21wb25lbnRUb1JlbmRlciIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInNjcm9sbGJhciIsImNvbnRhaW5lciIsImgxIiwic3JjIiwianVtcCIsImFsdCIsImgyIiwicCIsImRlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});