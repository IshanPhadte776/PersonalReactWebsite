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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github.png */ \"./src/github.png\");\n/* harmony import */ var _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IshanLogo.png */ \"./src/IshanLogo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-custom-scrollbars */ \"./node_modules/react-custom-scrollbars/lib/index.js\");\n/* eslint-disable react/jsx-no-undef */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // import the components to render based on the active tab\n\n\n//import ScrollBar from \"./components/hero/ScrollBar\";\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { tip  } = param;\n    _s();\n    //const [activeTab, setActiveTab] = React.useState(null);\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__.Scrollbars, {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                                children: \" Ishan Phadte \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().jump),\n                                alt: \"Jumping Textbox\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" \",\n                                    \"Here's a Random Tip (Refresh the Page For a Different Fun Fact)\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 75,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                                children: [\n                                    \" \",\n                                    \"These Fun Facts were generated by API Calls\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 79,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \" \",\n                                    tip.title,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    tip.description,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 85,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/IshanPhadte776\",\n                                children: \"Visit My Github \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/ishan-phadte-7b50b2243/\",\n                                children: [\n                                    \"Visit My Linkedin\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 88,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                                children: [\n                                    \" \",\n                                    \"Created using React, Next.js, Javascript, HTML5, CSS\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 92,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _github_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"My Image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 97,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \" Here are some of my side projects \"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                                        children: \"AWS Certified Cloud Practioner\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                                        children: \"Full Stack Web Develop Hotel Application\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                                        children: \"Full Stack Android Mealer Application\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 11\n                                    }, this),\n                                    componentToRender,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>count.current++,\n                                        children: [\n                                            \" \",\n                                            count.current\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 99,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXFDOztBQUNSO0FBQ0U7QUFDZTtBQUNWO0FBQ087QUFHTDtBQUNNLENBQUMsMERBQTBEO0FBQ25DO0FBQ0U7QUFDdEUsc0RBQXNEO0FBRUQ7O0FBZXRDLFNBQVNXLEtBQUssS0FBTyxFQUFFO1FBQVQsRUFBRUMsSUFBRyxFQUFFLEdBQVA7O0lBQzNCLHlEQUF5RDtJQUV6RCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdULHFEQUFjLENBQUMsSUFBSTtJQUVqRSx1RUFBdUU7SUFDdkUscUNBQXFDO0lBQ3JDLE1BQU1XLFFBQVFWLDZDQUFNQSxDQUFDO0lBRXJCLE1BQU1XLGNBQWMsQ0FBQ0MsWUFBYztRQUNqQ0osbUJBQW1CSTtJQUNyQjtJQUVBLElBQUlDO0lBQ0osT0FBUU47UUFDTixLQUFLO1lBQ0hNLGtDQUFvQiw4REFBQ1osZ0VBQUdBOzs7OztZQUN4QixLQUFNO1FBQ1IsS0FBSztZQUNIWSxrQ0FBb0IsOERBQUNYLDRFQUFlQTs7Ozs7WUFDcEMsS0FBTTtRQUNSLEtBQUs7WUFDSFcsa0NBQW9CLDhEQUFDViw2RUFBZ0JBOzs7OztZQUNyQyxLQUFNO1FBQ1I7WUFDRVUsb0JBQW9CLElBQUk7WUFDeEIsS0FBTTtJQUNWO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDbkIsa0RBQUlBOzBCQUNILDRFQUFDb0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDQztnQkFBS0MsV0FBV3BCLHNFQUFXOztrQ0FFMUIsOERBQUNRLCtEQUFVQTtrQ0FBQzs7Ozs7O2tDQUVaLDhEQUFDYTs7MENBRUQsOERBQUNDO2dDQUFHRixXQUFXcEIsdUVBQVk7MENBQUU7Ozs7OzswQ0FFN0IsOERBQUNELG1EQUFLQTtnQ0FBQ3dCLEtBQU9yQixzREFBV0E7Z0NBQUVrQixXQUFXcEIsc0VBQVc7Z0NBQUV5QixLQUFJOzs7Ozs7MENBRXZELDhEQUFDSDs7b0NBQ0U7b0NBQUk7b0NBQzJEOzs7Ozs7OzBDQUVsRSw4REFBQ0E7Z0NBQUdGLFdBQVdwQix1RUFBWTs7b0NBQ3hCO29DQUFJO29DQUN1Qzs7Ozs7OzswQ0FHOUMsOERBQUMwQjs7b0NBQUc7b0NBQUVoQixJQUFJUSxLQUFLO29DQUFDOzs7Ozs7OzBDQUNoQiw4REFBQ1M7O29DQUFFO29DQUFFakIsSUFBSWtCLFdBQVc7b0NBQUM7Ozs7Ozs7MENBRXJCLDhEQUFDQztnQ0FBRUMsTUFBSzswQ0FBb0M7Ozs7OzswQ0FDNUMsOERBQUNEO2dDQUFFQyxNQUFLOztvQ0FBc0Q7b0NBQzFDOzs7Ozs7OzBDQUdwQiw4REFBQ1I7Z0NBQUdGLFdBQVdwQix1RUFBWTs7b0NBQ3hCO29DQUFJO29DQUNnRDs7Ozs7OzswQ0FHdkQsOERBQUNELG1EQUFLQTtnQ0FBQ3dCLEtBQUt0QixtREFBT0E7Z0NBQUV3QixLQUFJOzs7Ozs7MENBRXpCLDhEQUFDSjs7a0RBQ0MsOERBQUNLO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNLO3dDQUFPQyxTQUFTLElBQU1qQixZQUFZO2tEQUFnQzs7Ozs7O2tEQUduRSw4REFBQ2dCO3dDQUNDQyxTQUFTLElBQU1qQixZQUFZO2tEQUM1Qjs7Ozs7O2tEQUdELDhEQUFDZ0I7d0NBQ0NDLFNBQVMsSUFBTWpCLFlBQVk7a0RBQzVCOzs7Ozs7b0NBR0FFO2tEQUVELDhEQUFDYzt3Q0FBT0MsU0FBUyxJQUFNbEIsTUFBTW1CLE9BQU87OzRDQUFJOzRDQUFFbkIsTUFBTW1CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqRSxDQUFDO0dBaEd1QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby11bmRlZiAqL1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBteUltYWdlIGZyb20gXCIuLi9naXRodWIucG5nXCI7XG5pbXBvcnQganVtcGluZ0xvZ28gZnJvbSBcIi4uL0lzaGFuTG9nby5wbmdcIjtcblxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVdTIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvQVdTXCI7IC8vIGltcG9ydCB0aGUgY29tcG9uZW50cyB0byByZW5kZXIgYmFzZWQgb24gdGhlIGFjdGl2ZSB0YWJcbmltcG9ydCBGdWxsU3RhY2tXZWJEZXYgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0cy9GdWxsU3RhY2tXZWJEZXZcIjtcbmltcG9ydCBGdWxsU3RhY2tBbmRyb2lkIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvRnVsbFN0YWNrQW5kcm9pZFwiO1xuLy9pbXBvcnQgU2Nyb2xsQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVyby9TY3JvbGxCYXJcIjtcblxuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcblxuXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90aXBcIik7XG4gIGNvbnN0IHRpcCA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB0aXAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHRpcCB9KSB7XG4gIC8vY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFthY3RpdmVDb21wb25lbnQsIHNldEFjdGl2ZUNvbXBvbmVudF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICAvL3VzZVJlZiBpcyBsaWtlIFVzZVN0YXRlIGJ1dCBkb2Vzbid0IGZvcmNlIGEgcmVyZW5kZXIgb2YgdGhlIGNvbXBvbmVudFxuICAvL2Jlc3QgZm9yIHdvcmtpbmcgd2l0aCBIVE1MIGVsZW1lbnRzXG4gIGNvbnN0IGNvdW50ID0gdXNlUmVmKDApO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIHNldEFjdGl2ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICB9O1xuXG4gIGxldCBjb21wb25lbnRUb1JlbmRlcjtcbiAgc3dpdGNoIChhY3RpdmVDb21wb25lbnQpIHtcbiAgICBjYXNlIFwiQVdTQ2VydGlmaWVkQ2xvdWRQcmFjdGlvbmVyXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxBV1MgLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRnVsbFN0YWNrV2ViRGV2ZWxvcEhvdGVsQXBwbGljYXRpb25cIjpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPEZ1bGxTdGFja1dlYkRldiAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJGdWxsU3RhY2tBbmRyb2lkTWVhbGVyQXBwbGljYXRpb25cIjpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPEZ1bGxTdGFja0FuZHJvaWQgLz47XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSBudWxsO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklzaGFuJ3MgUmVhY3QgV2Vic2l0ZSA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cblxuICAgICAgICA8U2Nyb2xsYmFycz4gPC9TY3JvbGxiYXJzPlxuXG4gICAgICAgIDxkaXY+IFxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+IElzaGFuIFBoYWR0ZSA8L2gxPlxuXG4gICAgICAgIDxJbWFnZSBzcmMgPSB7anVtcGluZ0xvZ299IGNsYXNzTmFtZT17c3R5bGVzLmp1bXB9IGFsdD1cIkp1bXBpbmcgVGV4dGJveFwiIC8+XG5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBIZXJlJ3MgYSBSYW5kb20gVGlwIChSZWZyZXNoIHRoZSBQYWdlIEZvciBhIERpZmZlcmVudCBGdW4gRmFjdCl7XCIgXCJ9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIFRoZXNlIEZ1biBGYWN0cyB3ZXJlIGdlbmVyYXRlZCBieSBBUEkgQ2FsbHN7XCIgXCJ9XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGgyPiB7dGlwLnRpdGxlfSA8L2gyPlxuICAgICAgICA8cD4ge3RpcC5kZXNjcmlwdGlvbn0gPC9wPlxuXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSXNoYW5QaGFkdGU3NzZcIj5WaXNpdCBNeSBHaXRodWIgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2lzaGFuLXBoYWR0ZS03YjUwYjIyNDMvXCI+XG4gICAgICAgICAgVmlzaXQgTXkgTGlua2VkaW57XCIgXCJ9XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBDcmVhdGVkIHVzaW5nIFJlYWN0LCBOZXh0LmpzLCBKYXZhc2NyaXB0LCBIVE1MNSwgQ1NTe1wiIFwifVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxJbWFnZSBzcmM9e215SW1hZ2V9IGFsdD1cIk15IEltYWdlXCIgLz5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj4gSGVyZSBhcmUgc29tZSBvZiBteSBzaWRlIHByb2plY3RzIDwvaDI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIkFXU0NlcnRpZmllZENsb3VkUHJhY3Rpb25lclwiKX0+XG4gICAgICAgICAgICBBV1MgQ2VydGlmaWVkIENsb3VkIFByYWN0aW9uZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIkZ1bGxTdGFja1dlYkRldmVsb3BIb3RlbEFwcGxpY2F0aW9uXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZ1bGwgU3RhY2sgV2ViIERldmVsb3AgSG90ZWwgQXBwbGljYXRpb25cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIkZ1bGxTdGFja0FuZHJvaWRNZWFsZXJBcHBsaWNhdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdWxsIFN0YWNrIEFuZHJvaWQgTWVhbGVyIEFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge2NvbXBvbmVudFRvUmVuZGVyfVxuXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb3VudC5jdXJyZW50Kyt9PiB7Y291bnQuY3VycmVudH08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJteUltYWdlIiwianVtcGluZ0xvZ28iLCJSZWFjdCIsInVzZVJlZiIsIkFXUyIsIkZ1bGxTdGFja1dlYkRldiIsIkZ1bGxTdGFja0FuZHJvaWQiLCJTY3JvbGxiYXJzIiwiSG9tZSIsInRpcCIsImFjdGl2ZUNvbXBvbmVudCIsInNldEFjdGl2ZUNvbXBvbmVudCIsInVzZVN0YXRlIiwiY291bnQiLCJoYW5kbGVDbGljayIsImNvbXBvbmVudCIsImNvbXBvbmVudFRvUmVuZGVyIiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJzcmMiLCJqdW1wIiwiYWx0IiwiaDIiLCJwIiwiZGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});