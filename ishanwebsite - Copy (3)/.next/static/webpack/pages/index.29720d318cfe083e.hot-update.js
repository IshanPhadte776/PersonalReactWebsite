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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github.png */ \"./src/github.png\");\n/* harmony import */ var _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IshanLogo.png */ \"./src/IshanLogo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var _components_extra_Popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/extra/Popup */ \"./src/pages/components/extra/Popup.js\");\n/* harmony import */ var _DownloadPdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DownloadPdf */ \"./src/pages/DownloadPdf.js\");\n/* harmony import */ var _DownloadPdf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_DownloadPdf__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // import the components to render based on the active tab\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { tip  } = param;\n    _s();\n    //const [activeTab, setActiveTab] = React.useState(null);\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    const scrollToTop = ()=>{\n        document.documentElement.scrollTop = 0;\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),\n                        children: \" Ishan Phadte \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().jump),\n                        alt: \"Jumping Textbox\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \" \",\n                            \"Here's a Random Tip (Refresh the Page For a Different Fun Fact)\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),\n                        children: [\n                            \" \",\n                            \"These Fun Facts were generated by API Calls\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \" \",\n                            tip.title,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            tip.description,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/IshanPhadte776\",\n                        children: \"Visit My Github \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.linkedin.com/in/ishan-phadte-7b50b2243/\",\n                        children: [\n                            \"Visit My Linkedin\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),\n                        children: [\n                            \" \",\n                            \"Created using React, Next.js, Javascript, HTML5, CSS\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _github_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"My Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Here are some of my side projects \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                                children: \"AWS Certified Cloud Practioner\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                                children: \"Full Stack Web Develop Hotel Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                                children: \"Full Stack Android Mealer Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this),\n                            componentToRender,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>count.current++,\n                                children: [\n                                    \" \",\n                                    count.current\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().scrollToTopButton),\n                        onClick: scrollToTop,\n                        children: \"^\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_Popup__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    \"//\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_DownloadPdf__WEBPACK_IMPORTED_MODULE_10___default()), {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQ2U7QUFDVjtBQUNPO0FBRUw7QUFDTSxDQUFDLDBEQUEwRDtBQUNuQztBQUNFO0FBQ3pCO0FBQ0w7O0FBV3pCLFNBQVNZLEtBQUssS0FBTyxFQUFFO1FBQVQsRUFBRUMsSUFBRyxFQUFFLEdBQVA7O0lBQzNCLHlEQUF5RDtJQUV6RCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdWLHFEQUFjLENBQUMsSUFBSTtJQUVqRSx1RUFBdUU7SUFDdkUscUNBQXFDO0lBQ3JDLE1BQU1ZLFFBQVFYLDZDQUFNQSxDQUFDO0lBRXJCLE1BQU1ZLGNBQWMsQ0FBQ0MsWUFBYztRQUNqQ0osbUJBQW1CSTtJQUNyQjtJQUVBLE1BQU1DLGNBQWMsSUFBTTtRQUN4QkMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLEdBQUc7SUFDdkM7SUFFQSxJQUFJQztJQUNKLE9BQVFWO1FBQ04sS0FBSztZQUNIVSxrQ0FBb0IsOERBQUNqQixnRUFBR0E7Ozs7O1lBQ3hCLEtBQU07UUFDUixLQUFLO1lBQ0hpQixrQ0FBb0IsOERBQUNoQiw0RUFBZUE7Ozs7O1lBQ3BDLEtBQU07UUFDUixLQUFLO1lBQ0hnQixrQ0FBb0IsOERBQUNmLDZFQUFnQkE7Ozs7O1lBQ3JDLEtBQU07UUFDUjtZQUNFZSxvQkFBb0IsSUFBSTtZQUN4QixLQUFNO0lBQ1Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN4QixrREFBSUE7MEJBQ0gsNEVBQUN5Qjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDO2dCQUFLQyxXQUFXekIsc0VBQVc7O2tDQUMxQiw4REFBQzBCO3dCQUFHRCxXQUFXekIsdUVBQVk7a0NBQUU7Ozs7OztrQ0FFN0IsOERBQUNELG1EQUFLQTt3QkFDSjRCLEtBQUt6QixzREFBV0E7d0JBQ2hCdUIsV0FBV3pCLHNFQUFXO3dCQUN0QjZCLEtBQUk7Ozs7OztrQ0FHTiw4REFBQ0g7OzRCQUNFOzRCQUFJOzRCQUMyRDs7Ozs7OztrQ0FFbEUsOERBQUNBO3dCQUFHRCxXQUFXekIsdUVBQVk7OzRCQUN4Qjs0QkFBSTs0QkFDdUM7Ozs7Ozs7a0NBRzlDLDhEQUFDOEI7OzRCQUFHOzRCQUFFbkIsSUFBSVksS0FBSzs0QkFBQzs7Ozs7OztrQ0FDaEIsOERBQUNROzs0QkFBRTs0QkFBRXBCLElBQUlxQixXQUFXOzRCQUFDOzs7Ozs7O2tDQUVyQiw4REFBQ0M7d0JBQUVDLE1BQUs7a0NBQW9DOzs7Ozs7a0NBQzVDLDhEQUFDRDt3QkFBRUMsTUFBSzs7NEJBQXNEOzRCQUMxQzs7Ozs7OztrQ0FHcEIsOERBQUNSO3dCQUFHRCxXQUFXekIsdUVBQVk7OzRCQUN4Qjs0QkFBSTs0QkFDZ0Q7Ozs7Ozs7a0NBR3ZELDhEQUFDRCxtREFBS0E7d0JBQUM0QixLQUFLMUIsbURBQU9BO3dCQUFFNEIsS0FBSTs7Ozs7O2tDQUV6Qiw4REFBQ007OzBDQUNDLDhEQUFDTDswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDTTtnQ0FBT0MsU0FBUyxJQUFNckIsWUFBWTswQ0FBZ0M7Ozs7OzswQ0FHbkUsOERBQUNvQjtnQ0FDQ0MsU0FBUyxJQUFNckIsWUFBWTswQ0FDNUI7Ozs7OzswQ0FHRCw4REFBQ29CO2dDQUNDQyxTQUFTLElBQU1yQixZQUFZOzBDQUM1Qjs7Ozs7OzRCQUdBTTswQ0FFRCw4REFBQ2M7Z0NBQU9DLFNBQVMsSUFBTXRCLE1BQU11QixPQUFPOztvQ0FBSTtvQ0FBRXZCLE1BQU11QixPQUFPOzs7Ozs7Ozs7Ozs7O2tDQUd6RCw4REFBQ0Y7d0JBQU9YLFdBQVd6QixtRkFBd0I7d0JBQUVxQyxTQUFTbkI7a0NBQWE7Ozs7OztrQ0FJbkUsOERBQUNWLCtEQUFLQTs7Ozs7b0JBQ0E7a0NBRU4sOERBQUNDLHNEQUFXQTtrQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFNckIsQ0FBQztHQXpHdUJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgbXlJbWFnZSBmcm9tIFwiLi4vZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IGp1bXBpbmdMb2dvIGZyb20gXCIuLi9Jc2hhbkxvZ28ucG5nXCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBV1MgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0cy9BV1NcIjsgLy8gaW1wb3J0IHRoZSBjb21wb25lbnRzIHRvIHJlbmRlciBiYXNlZCBvbiB0aGUgYWN0aXZlIHRhYlxuaW1wb3J0IEZ1bGxTdGFja1dlYkRldiBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0Z1bGxTdGFja1dlYkRldlwiO1xuaW1wb3J0IEZ1bGxTdGFja0FuZHJvaWQgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0cy9GdWxsU3RhY2tBbmRyb2lkXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vY29tcG9uZW50cy9leHRyYS9Qb3B1cFwiO1xuaW1wb3J0IERvd25sb2FkUGRmIGZyb20gXCIuL0Rvd25sb2FkUGRmXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RpcFwiKTtcbiAgY29uc3QgdGlwID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHRpcCB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdGlwIH0pIHtcbiAgLy9jb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW2FjdGl2ZUNvbXBvbmVudCwgc2V0QWN0aXZlQ29tcG9uZW50XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIC8vdXNlUmVmIGlzIGxpa2UgVXNlU3RhdGUgYnV0IGRvZXNuJ3QgZm9yY2UgYSByZXJlbmRlciBvZiB0aGUgY29tcG9uZW50XG4gIC8vYmVzdCBmb3Igd29ya2luZyB3aXRoIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgY291bnQgPSB1c2VSZWYoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgc2V0QWN0aXZlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH07XG5cbiAgbGV0IGNvbXBvbmVudFRvUmVuZGVyO1xuICBzd2l0Y2ggKGFjdGl2ZUNvbXBvbmVudCkge1xuICAgIGNhc2UgXCJBV1NDZXJ0aWZpZWRDbG91ZFByYWN0aW9uZXJcIjpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPEFXUyAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJGdWxsU3RhY2tXZWJEZXZlbG9wSG90ZWxBcHBsaWNhdGlvblwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8RnVsbFN0YWNrV2ViRGV2IC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZ1bGxTdGFja0FuZHJvaWRNZWFsZXJBcHBsaWNhdGlvblwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8RnVsbFN0YWNrQW5kcm9pZCAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IG51bGw7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SXNoYW4ncyBSZWFjdCBXZWJzaXRlIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PiBJc2hhbiBQaGFkdGUgPC9oMT5cblxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2p1bXBpbmdMb2dvfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmp1bXB9XG4gICAgICAgICAgYWx0PVwiSnVtcGluZyBUZXh0Ym94XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aDE+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIEhlcmUncyBhIFJhbmRvbSBUaXAgKFJlZnJlc2ggdGhlIFBhZ2UgRm9yIGEgRGlmZmVyZW50IEZ1biBGYWN0KXtcIiBcIn1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgVGhlc2UgRnVuIEZhY3RzIHdlcmUgZ2VuZXJhdGVkIGJ5IEFQSSBDYWxsc3tcIiBcIn1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8aDI+IHt0aXAudGl0bGV9IDwvaDI+XG4gICAgICAgIDxwPiB7dGlwLmRlc2NyaXB0aW9ufSA8L3A+XG5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Jc2hhblBoYWR0ZTc3NlwiPlZpc2l0IE15IEdpdGh1YiA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaXNoYW4tcGhhZHRlLTdiNTBiMjI0My9cIj5cbiAgICAgICAgICBWaXNpdCBNeSBMaW5rZWRpbntcIiBcIn1cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIENyZWF0ZWQgdXNpbmcgUmVhY3QsIE5leHQuanMsIEphdmFzY3JpcHQsIEhUTUw1LCBDU1N7XCIgXCJ9XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEltYWdlIHNyYz17bXlJbWFnZX0gYWx0PVwiTXkgSW1hZ2VcIiAvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPiBIZXJlIGFyZSBzb21lIG9mIG15IHNpZGUgcHJvamVjdHMgPC9oMj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiQVdTQ2VydGlmaWVkQ2xvdWRQcmFjdGlvbmVyXCIpfT5cbiAgICAgICAgICAgIEFXUyBDZXJ0aWZpZWQgQ2xvdWQgUHJhY3Rpb25lclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiRnVsbFN0YWNrV2ViRGV2ZWxvcEhvdGVsQXBwbGljYXRpb25cIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRnVsbCBTdGFjayBXZWIgRGV2ZWxvcCBIb3RlbCBBcHBsaWNhdGlvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiRnVsbFN0YWNrQW5kcm9pZE1lYWxlckFwcGxpY2F0aW9uXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZ1bGwgU3RhY2sgQW5kcm9pZCBNZWFsZXIgQXBwbGljYXRpb25cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7Y29tcG9uZW50VG9SZW5kZXJ9XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvdW50LmN1cnJlbnQrK30+IHtjb3VudC5jdXJyZW50fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNjcm9sbFRvVG9wQnV0dG9ufSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XG4gICAgICAgICAgXlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8UG9wdXA+XG4gICAgICA8L1BvcHVwPlxuXG4gICAgICAvLzxEb3dubG9hZFBkZj4gPC9Eb3dubG9hZFBkZj5cblxuXG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwibXlJbWFnZSIsImp1bXBpbmdMb2dvIiwiUmVhY3QiLCJ1c2VSZWYiLCJBV1MiLCJGdWxsU3RhY2tXZWJEZXYiLCJGdWxsU3RhY2tBbmRyb2lkIiwiUG9wdXAiLCJEb3dubG9hZFBkZiIsIkhvbWUiLCJ0aXAiLCJhY3RpdmVDb21wb25lbnQiLCJzZXRBY3RpdmVDb21wb25lbnQiLCJ1c2VTdGF0ZSIsImNvdW50IiwiaGFuZGxlQ2xpY2siLCJjb21wb25lbnQiLCJzY3JvbGxUb1RvcCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiY29tcG9uZW50VG9SZW5kZXIiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsInNyYyIsImp1bXAiLCJhbHQiLCJoMiIsInAiLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImN1cnJlbnQiLCJzY3JvbGxUb1RvcEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});