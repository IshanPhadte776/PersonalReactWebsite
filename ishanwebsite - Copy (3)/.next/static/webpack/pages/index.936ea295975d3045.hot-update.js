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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github.png */ \"./src/github.png\");\n/* harmony import */ var _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../IshanLogo.png */ \"./src/IshanLogo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/projects/AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-custom-scrollbars */ \"./node_modules/react-custom-scrollbars/lib/index.js\");\n/* eslint-disable react/jsx-no-undef */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // import the components to render based on the active tab\n\n\n//import ScrollBar from \"./components/hero/ScrollBar\";\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { tip  } = param;\n    _s();\n    //const [activeTab, setActiveTab] = React.useState(null);\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);\n    //useRef is like UseState but doesn't force a rerender of the component\n    //best for working with HTML elements\n    const count = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_AWS__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackWebDev__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 27\n            }, this);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_FullStackAndroid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 27\n            }, this);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_9__.Scrollbars, {\n                            style: greenScrollbarStyle,\n                            renderTrackHorizontal: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    ...props,\n                                    className: \"track-horizontal\"\n                                }, void 0, false, void 0, void 0),\n                            renderTrackVertical: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    ...props,\n                                    className: \"track-vertical\"\n                                }, void 0, false, void 0, void 0),\n                            renderThumbHorizontal: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    ...props,\n                                    className: \"scrollbar-thumb-horizontal\"\n                                }, void 0, false, void 0, void 0),\n                            renderThumbVertical: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    ...props,\n                                    className: \"scrollbar-thumb-vertical\"\n                                }, void 0, false, void 0, void 0)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                            children: \" Ishan Phadte \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 87,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _IshanLogo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().jump),\n                            alt: \"Jumping Textbox\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \" \",\n                                \"Here's a Random Tip (Refresh the Page For a Different Fun Fact)\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 91,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                            children: [\n                                \" \",\n                                \"These Fun Facts were generated by API Calls\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \" \",\n                                tip.title,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 100,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \" \",\n                                tip.description,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 101,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://github.com/IshanPhadte776\",\n                            children: \"Visit My Github \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 103,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.linkedin.com/in/ishan-phadte-7b50b2243/\",\n                            children: [\n                                \"Visit My Linkedin\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),\n                            children: [\n                                \" \",\n                                \"Created using React, Next.js, Javascript, HTML5, CSS\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 108,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _github_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"My Image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 113,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \" Here are some of my side projects \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                                    children: \"AWS Certified Cloud Practioner\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                                    children: \"Full Stack Web Develop Hotel Application\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                                    children: \"Full Stack Android Mealer Application\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 11\n                                }, this),\n                                componentToRender,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>count.current++,\n                                    children: [\n                                        \" \",\n                                        count.current\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 115,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"PrLMagIR5YDWkuWMZ24UsVn1J+Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTzs7d0NBQUk7d0NBQUUxQixNQUFNMEIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakUsQ0FBQztHQWhIdUIvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtbm8tdW5kZWYgKi9cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgbXlJbWFnZSBmcm9tIFwiLi4vZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IGp1bXBpbmdMb2dvIGZyb20gXCIuLi9Jc2hhbkxvZ28ucG5nXCI7XG5cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFXUyBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0FXU1wiOyAvLyBpbXBvcnQgdGhlIGNvbXBvbmVudHMgdG8gcmVuZGVyIGJhc2VkIG9uIHRoZSBhY3RpdmUgdGFiXG5pbXBvcnQgRnVsbFN0YWNrV2ViRGV2IGZyb20gXCIuL2NvbXBvbmVudHMvcHJvamVjdHMvRnVsbFN0YWNrV2ViRGV2XCI7XG5pbXBvcnQgRnVsbFN0YWNrQW5kcm9pZCBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RzL0Z1bGxTdGFja0FuZHJvaWRcIjtcbi8vaW1wb3J0IFNjcm9sbEJhciBmcm9tIFwiLi9jb21wb25lbnRzL2hlcm8vU2Nyb2xsQmFyXCI7XG5cbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5cblxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdGlwXCIpO1xuICBjb25zdCB0aXAgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdGlwIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0aXAgfSkge1xuICAvL2NvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbYWN0aXZlQ29tcG9uZW50LCBzZXRBY3RpdmVDb21wb25lbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgLy91c2VSZWYgaXMgbGlrZSBVc2VTdGF0ZSBidXQgZG9lc24ndCBmb3JjZSBhIHJlcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAgLy9iZXN0IGZvciB3b3JraW5nIHdpdGggSFRNTCBlbGVtZW50c1xuICBjb25zdCBjb3VudCA9IHVzZVJlZigwKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChjb21wb25lbnQpID0+IHtcbiAgICBzZXRBY3RpdmVDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfTtcblxuICBsZXQgY29tcG9uZW50VG9SZW5kZXI7XG4gIHN3aXRjaCAoYWN0aXZlQ29tcG9uZW50KSB7XG4gICAgY2FzZSBcIkFXU0NlcnRpZmllZENsb3VkUHJhY3Rpb25lclwiOlxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8QVdTIC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZ1bGxTdGFja1dlYkRldmVsb3BIb3RlbEFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tXZWJEZXYgLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRnVsbFN0YWNrQW5kcm9pZE1lYWxlckFwcGxpY2F0aW9uXCI6XG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxGdWxsU3RhY2tBbmRyb2lkIC8+O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Jc2hhbidzIFJlYWN0IFdlYnNpdGUgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cbiAgICAgICAgPGRpdj4gXG5cbiAgICAgICAgPFNjcm9sbGJhcnNcbiAgICAgIHN0eWxlPXtncmVlblNjcm9sbGJhclN0eWxlfVxuICAgICAgcmVuZGVyVHJhY2tIb3Jpem9udGFsPXsocHJvcHMpID0+IChcbiAgICAgICAgPGRpdiB7Li4ucHJvcHN9IGNsYXNzTmFtZT1cInRyYWNrLWhvcml6b250YWxcIiAvPlxuICAgICAgKX1cbiAgICAgIHJlbmRlclRyYWNrVmVydGljYWw9eyhwcm9wcykgPT4gKFxuICAgICAgICA8ZGl2IHsuLi5wcm9wc30gY2xhc3NOYW1lPVwidHJhY2stdmVydGljYWxcIiAvPlxuICAgICAgKX1cbiAgICAgIHJlbmRlclRodW1iSG9yaXpvbnRhbD17KHByb3BzKSA9PiAoXG4gICAgICAgIDxkaXYgey4uLnByb3BzfSBjbGFzc05hbWU9XCJzY3JvbGxiYXItdGh1bWItaG9yaXpvbnRhbFwiIC8+XG4gICAgICApfVxuICAgICAgcmVuZGVyVGh1bWJWZXJ0aWNhbD17KHByb3BzKSA9PiAoXG4gICAgICAgIDxkaXYgey4uLnByb3BzfSBjbGFzc05hbWU9XCJzY3JvbGxiYXItdGh1bWItdmVydGljYWxcIiAvPlxuICAgICAgKX1cbiAgICA+XG4gICAgICB7LyogWW91ciBjb250ZW50IGdvZXMgaGVyZSAqL31cbiAgICA8L1Njcm9sbGJhcnM+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT4gSXNoYW4gUGhhZHRlIDwvaDE+XG5cbiAgICAgICAgPEltYWdlIHNyYyA9IHtqdW1waW5nTG9nb30gY2xhc3NOYW1lPXtzdHlsZXMuanVtcH0gYWx0PVwiSnVtcGluZyBUZXh0Ym94XCIgLz5cblxuICAgICAgICA8aDE+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIEhlcmUncyBhIFJhbmRvbSBUaXAgKFJlZnJlc2ggdGhlIFBhZ2UgRm9yIGEgRGlmZmVyZW50IEZ1biBGYWN0KXtcIiBcIn1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgVGhlc2UgRnVuIEZhY3RzIHdlcmUgZ2VuZXJhdGVkIGJ5IEFQSSBDYWxsc3tcIiBcIn1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8aDI+IHt0aXAudGl0bGV9IDwvaDI+XG4gICAgICAgIDxwPiB7dGlwLmRlc2NyaXB0aW9ufSA8L3A+XG5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Jc2hhblBoYWR0ZTc3NlwiPlZpc2l0IE15IEdpdGh1YiA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaXNoYW4tcGhhZHRlLTdiNTBiMjI0My9cIj5cbiAgICAgICAgICBWaXNpdCBNeSBMaW5rZWRpbntcIiBcIn1cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIENyZWF0ZWQgdXNpbmcgUmVhY3QsIE5leHQuanMsIEphdmFzY3JpcHQsIEhUTUw1LCBDU1N7XCIgXCJ9XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPEltYWdlIHNyYz17bXlJbWFnZX0gYWx0PVwiTXkgSW1hZ2VcIiAvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPiBIZXJlIGFyZSBzb21lIG9mIG15IHNpZGUgcHJvamVjdHMgPC9oMj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiQVdTQ2VydGlmaWVkQ2xvdWRQcmFjdGlvbmVyXCIpfT5cbiAgICAgICAgICAgIEFXUyBDZXJ0aWZpZWQgQ2xvdWQgUHJhY3Rpb25lclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiRnVsbFN0YWNrV2ViRGV2ZWxvcEhvdGVsQXBwbGljYXRpb25cIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRnVsbCBTdGFjayBXZWIgRGV2ZWxvcCBIb3RlbCBBcHBsaWNhdGlvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiRnVsbFN0YWNrQW5kcm9pZE1lYWxlckFwcGxpY2F0aW9uXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZ1bGwgU3RhY2sgQW5kcm9pZCBNZWFsZXIgQXBwbGljYXRpb25cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB7Y29tcG9uZW50VG9SZW5kZXJ9XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvdW50LmN1cnJlbnQrK30+IHtjb3VudC5jdXJyZW50fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIm15SW1hZ2UiLCJqdW1waW5nTG9nbyIsIlJlYWN0IiwidXNlUmVmIiwiQVdTIiwiRnVsbFN0YWNrV2ViRGV2IiwiRnVsbFN0YWNrQW5kcm9pZCIsIlNjcm9sbGJhcnMiLCJIb21lIiwidGlwIiwiYWN0aXZlQ29tcG9uZW50Iiwic2V0QWN0aXZlQ29tcG9uZW50IiwidXNlU3RhdGUiLCJjb3VudCIsImhhbmRsZUNsaWNrIiwiY29tcG9uZW50IiwiY29tcG9uZW50VG9SZW5kZXIiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImdyZWVuU2Nyb2xsYmFyU3R5bGUiLCJyZW5kZXJUcmFja0hvcml6b250YWwiLCJwcm9wcyIsInJlbmRlclRyYWNrVmVydGljYWwiLCJyZW5kZXJUaHVtYkhvcml6b250YWwiLCJyZW5kZXJUaHVtYlZlcnRpY2FsIiwiaDEiLCJzcmMiLCJqdW1wIiwiYWx0IiwiaDIiLCJwIiwiZGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});