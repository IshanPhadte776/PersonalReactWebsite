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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github.png */ \"./src/github.png\");\n/* harmony import */ var _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IshanLogo.png */ \"./src/IshanLogo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var _components_extra_Popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/extra/Popup */ \"./src/pages/components/extra/Popup.js\");\n/* harmony import */ var _components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/extra/ImageWithText */ \"./src/pages/components/extra/ImageWithText.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // import the components to render based on the active tab\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { tip  } = param;\n    _s();\n    //const [activeTab, setActiveTab] = React.useState(null);\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    const scrollToTop = ()=>{\n        document.documentElement.scrollTop = 0;\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_ImageWithText__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().jump),\n                        alt: \"Jumping Textbox\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \" \",\n                            \"Here's a Random Tip (Refresh the Page For a Different Fun Fact)\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),\n                        children: [\n                            \" \",\n                            \"These Fun Facts were generated by API Calls\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \" \",\n                            tip.title,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            tip.description,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/IshanPhadte776\",\n                        children: \"Visit My Github \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.linkedin.com/in/ishan-phadte-7b50b2243/\",\n                        children: [\n                            \"Visit My Linkedin\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),\n                        children: [\n                            \" \",\n                            \"Created using React, Next.js, Javascript, HTML5, CSS\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _github_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"My Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Here are some of my side projects \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                                children: \"AWS Certified Cloud Practioner\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                                children: \"Full Stack Web Develop Hotel Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                                children: \"Full Stack Android Mealer Application\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            componentToRender,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>count.current++,\n                                children: [\n                                    \" \",\n                                    count.current\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().scrollToTopButton),\n                        onClick: scrollToTop,\n                        children: \"^\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_Popup__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDZTtBQUNWO0FBQ087QUFFTDtBQUNNLENBQUMsMERBQTBEO0FBQ25DO0FBQ0U7QUFDekI7QUFDZ0I7O0FBVTlDLFNBQVNZLEtBQUssS0FBTyxFQUFFO1FBQVQsRUFBRUMsSUFBRyxFQUFFLEdBQVA7O0lBQzNCLHlEQUF5RDtJQUV6RCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdWLHFEQUFjLENBQUMsSUFBSTtJQUVqRSx1RUFBdUU7SUFDdkUscUNBQXFDO0lBQ3JDLE1BQU1ZLFFBQVFYLDZDQUFNQSxDQUFDO0lBRXJCLE1BQU1ZLGNBQWMsQ0FBQ0MsWUFBYztRQUNqQ0osbUJBQW1CSTtJQUNyQjtJQUVBLE1BQU1DLGNBQWMsSUFBTTtRQUN4QkMsU0FBU0MsZUFBZSxDQUFDQyxTQUFTLEdBQUc7SUFDdkM7SUFFQSxJQUFJQztJQUNKLE9BQVFWO1FBQ04sS0FBSztZQUNIVSxrQ0FBb0IsOERBQUNqQixnRUFBR0E7Ozs7O1lBQ3hCLEtBQU07UUFDUixLQUFLO1lBQ0hpQixrQ0FBb0IsOERBQUNoQiw0RUFBZUE7Ozs7O1lBQ3BDLEtBQU07UUFDUixLQUFLO1lBQ0hnQixrQ0FBb0IsOERBQUNmLDZFQUFnQkE7Ozs7O1lBQ3JDLEtBQU07UUFDUjtZQUNFZSxvQkFBb0IsSUFBSTtZQUN4QixLQUFNO0lBQ1Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN4QixrREFBSUE7MEJBQ0gsNEVBQUN5Qjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDO2dCQUFLQyxXQUFXekIsc0VBQVc7O2tDQUUxQiw4REFBQ1Msd0VBQWFBO2tDQUFDOzs7Ozs7a0NBR2YsOERBQUNWLG1EQUFLQTt3QkFDSjJCLEtBQUt4QixzREFBV0E7d0JBQ2hCdUIsV0FBV3pCLHNFQUFXO3dCQUN0QjRCLEtBQUk7Ozs7OztrQ0FHTiw4REFBQ0M7OzRCQUNFOzRCQUFJOzRCQUMyRDs7Ozs7OztrQ0FFbEUsOERBQUNBO3dCQUFHSixXQUFXekIsdUVBQVk7OzRCQUN4Qjs0QkFBSTs0QkFDdUM7Ozs7Ozs7a0NBRzlDLDhEQUFDOEI7OzRCQUFHOzRCQUFFbkIsSUFBSVksS0FBSzs0QkFBQzs7Ozs7OztrQ0FDaEIsOERBQUNROzs0QkFBRTs0QkFBRXBCLElBQUlxQixXQUFXOzRCQUFDOzs7Ozs7O2tDQUVyQiw4REFBQ0M7d0JBQUVDLE1BQUs7a0NBQW9DOzs7Ozs7a0NBQzVDLDhEQUFDRDt3QkFBRUMsTUFBSzs7NEJBQXNEOzRCQUMxQzs7Ozs7OztrQ0FHcEIsOERBQUNMO3dCQUFHSixXQUFXekIsdUVBQVk7OzRCQUN4Qjs0QkFBSTs0QkFDZ0Q7Ozs7Ozs7a0NBR3ZELDhEQUFDRCxtREFBS0E7d0JBQUMyQixLQUFLekIsbURBQU9BO3dCQUFFMkIsS0FBSTs7Ozs7O2tDQUV6Qiw4REFBQ087OzBDQUNDLDhEQUFDTDswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDTTtnQ0FBT0MsU0FBUyxJQUFNckIsWUFBWTswQ0FBZ0M7Ozs7OzswQ0FHbkUsOERBQUNvQjtnQ0FDQ0MsU0FBUyxJQUFNckIsWUFBWTswQ0FDNUI7Ozs7OzswQ0FHRCw4REFBQ29CO2dDQUNDQyxTQUFTLElBQU1yQixZQUFZOzBDQUM1Qjs7Ozs7OzRCQUdBTTswQ0FFRCw4REFBQ2M7Z0NBQU9DLFNBQVMsSUFBTXRCLE1BQU11QixPQUFPOztvQ0FBSTtvQ0FBRXZCLE1BQU11QixPQUFPOzs7Ozs7Ozs7Ozs7O2tDQUd6RCw4REFBQ0Y7d0JBQU9YLFdBQVd6QixtRkFBd0I7d0JBQUVxQyxTQUFTbkI7a0NBQWE7Ozs7OztrQ0FLbkUsOERBQUNWLCtEQUFLQTs7Ozs7Ozs7Ozs7OztBQVFkLENBQUM7R0EzR3VCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IG15SW1hZ2UgZnJvbSBcIi4uL2dpdGh1Yi5wbmdcIjtcbmltcG9ydCBqdW1waW5nTG9nbyBmcm9tIFwiLi4vSXNoYW5Mb2dvLnBuZ1wiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQVdTIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvQVdTXCI7IC8vIGltcG9ydCB0aGUgY29tcG9uZW50cyB0byByZW5kZXIgYmFzZWQgb24gdGhlIGFjdGl2ZSB0YWJcbmltcG9ydCBGdWxsU3RhY2tXZWJEZXYgZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0cy9GdWxsU3RhY2tXZWJEZXZcIjtcbmltcG9ydCBGdWxsU3RhY2tBbmRyb2lkIGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvRnVsbFN0YWNrQW5kcm9pZFwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL2NvbXBvbmVudHMvZXh0cmEvUG9wdXBcIjtcbmltcG9ydCBJbWFnZVdpdGhUZXh0IGZyb20gXCIuL2NvbXBvbmVudHMvZXh0cmEvSW1hZ2VXaXRoVGV4dFwiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGlwXCIpO1xuICBjb25zdCB0aXAgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdGlwIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0aXAgfSkge1xuICAvL2NvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbYWN0aXZlQ29tcG9uZW50LCBzZXRBY3RpdmVDb21wb25lbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgLy91c2VSZWYgaXMgbGlrZSBVc2VTdGF0ZSBidXQgZG9lc24ndCBmb3JjZSBhIHJlcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAgLy9iZXN0IGZvciB3b3JraW5nIHdpdGggSFRNTCBlbGVtZW50c1xuICBjb25zdCBjb3VudCA9IHVzZVJlZigwKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChjb21wb25lbnQpID0+IHtcbiAgICBzZXRBY3RpdmVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfTtcblxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfTtcblxuICBsZXQgY29tcG9uZW50VG9SZW5kZXI7XG4gIHN3aXRjaCAoYWN0aXZlQ29tcG9uZW50KSB7XG4gICAgY2FzZSBcIkFXU0NlcnRpZmllZENsb3VkUHJhY3Rpb25lclwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8QVdTIC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZ1bGxTdGFja1dlYkRldmVsb3BIb3RlbEFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tXZWJEZXYgLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRnVsbFN0YWNrQW5kcm9pZE1lYWxlckFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tBbmRyb2lkIC8+O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Jc2hhbidzIFJlYWN0IFdlYnNpdGUgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cbiAgICAgICAgPEltYWdlV2l0aFRleHQ+IDwvSW1hZ2VXaXRoVGV4dD5cblxuXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17anVtcGluZ0xvZ299XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuanVtcH1cbiAgICAgICAgICBhbHQ9XCJKdW1waW5nIFRleHRib3hcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgSGVyZSdzIGEgUmFuZG9tIFRpcCAoUmVmcmVzaCB0aGUgUGFnZSBGb3IgYSBEaWZmZXJlbnQgRnVuIEZhY3Qpe1wiIFwifVxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBUaGVzZSBGdW4gRmFjdHMgd2VyZSBnZW5lcmF0ZWQgYnkgQVBJIENhbGxze1wiIFwifVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxoMj4ge3RpcC50aXRsZX0gPC9oMj5cbiAgICAgICAgPHA+IHt0aXAuZGVzY3JpcHRpb259IDwvcD5cblxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0lzaGFuUGhhZHRlNzc2XCI+VmlzaXQgTXkgR2l0aHViIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9pc2hhbi1waGFkdGUtN2I1MGIyMjQzL1wiPlxuICAgICAgICAgIFZpc2l0IE15IExpbmtlZGlue1wiIFwifVxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgQ3JlYXRlZCB1c2luZyBSZWFjdCwgTmV4dC5qcywgSmF2YXNjcmlwdCwgSFRNTDUsIENTU3tcIiBcIn1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8SW1hZ2Ugc3JjPXtteUltYWdlfSBhbHQ9XCJNeSBJbWFnZVwiIC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+IEhlcmUgYXJlIHNvbWUgb2YgbXkgc2lkZSBwcm9qZWN0cyA8L2gyPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJBV1NDZXJ0aWZpZWRDbG91ZFByYWN0aW9uZXJcIil9PlxuICAgICAgICAgICAgQVdTIENlcnRpZmllZCBDbG91ZCBQcmFjdGlvbmVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tXZWJEZXZlbG9wSG90ZWxBcHBsaWNhdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wIEhvdGVsIEFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tBbmRyb2lkTWVhbGVyQXBwbGljYXRpb25cIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRnVsbCBTdGFjayBBbmRyb2lkIE1lYWxlciBBcHBsaWNhdGlvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY291bnQuY3VycmVudCsrfT4ge2NvdW50LmN1cnJlbnR9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2Nyb2xsVG9Ub3BCdXR0b259IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICBeXG4gICAgICAgIDwvYnV0dG9uPlxuXG5cbiAgICAgICAgPFBvcHVwPlxuICAgICAgPC9Qb3B1cD5cblxuXG5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJteUltYWdlIiwianVtcGluZ0xvZ28iLCJSZWFjdCIsInVzZVJlZiIsIkFXUyIsIkZ1bGxTdGFja1dlYkRldiIsIkZ1bGxTdGFja0FuZHJvaWQiLCJQb3B1cCIsIkltYWdlV2l0aFRleHQiLCJIb21lIiwidGlwIiwiYWN0aXZlQ29tcG9uZW50Iiwic2V0QWN0aXZlQ29tcG9uZW50IiwidXNlU3RhdGUiLCJjb3VudCIsImhhbmRsZUNsaWNrIiwiY29tcG9uZW50Iiwic2Nyb2xsVG9Ub3AiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNvbXBvbmVudFRvUmVuZGVyIiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwic3JjIiwianVtcCIsImFsdCIsImgxIiwiaDIiLCJwIiwiZGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjdXJyZW50Iiwic2Nyb2xsVG9Ub3BCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});