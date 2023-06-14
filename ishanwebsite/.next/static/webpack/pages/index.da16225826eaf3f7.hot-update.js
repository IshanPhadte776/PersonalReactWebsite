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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_extra_GitHubRepos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/extra/GitHubRepos */ \"./src/pages/components/extra/GitHubRepos.js\");\n/* harmony import */ var _components_extra_GithubStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/extra/GithubStats */ \"./src/pages/components/extra/GithubStats.jsx\");\n/* harmony import */ var _components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/technology/TechnologyUsed */ \"./src/pages/components/technology/TechnologyUsed.js\");\n/* harmony import */ var _components_sideBar_VerticalComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sideBar/VerticalComponent */ \"./src/pages/components/sideBar/VerticalComponent.jsx\");\n/* harmony import */ var _components_hero_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero/Hero */ \"./src/pages/components/hero/Hero.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"English\");\n    const [isSmallScreen, setIsSmallScreen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const scrollToTop = ()=>{\n        const scrollDuration = 500; // Duration of the scroll animation in milliseconds\n        const easing = (t)=>t * t * t; // Easing function for gradual acceleration\n        let currentTime = 0;\n        const animateScroll = ()=>{\n            currentTime += 15; // Time increment for each interval\n            const progress = currentTime / scrollDuration;\n            const scrollStep = -window.scrollY * easing(progress);\n            if (progress < 1) {\n                window.scrollBy(0, scrollStep);\n                requestAnimationFrame(animateScroll);\n            } else {\n                window.scrollTo(0, 0); // Scroll to the exact top when animation completes\n            }\n        };\n        requestAnimationFrame(animateScroll);\n    };\n    const handleLanguageChange = (event)=>{\n        setLanguage(event);\n        console.log(language);\n    };\n    const handleClick = (event)=>{\n        console.log(event.currentTarget.className);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const checkScreenSize = ()=>{\n            setIsSmallScreen(window.innerWidth < 850);\n        };\n        window.addEventListener(\"resize\", checkScreenSize);\n        checkScreenSize();\n        return ()=>{\n            window.removeEventListener(\"resize\", checkScreenSize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            !isSmallScreen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen grid grid-cols-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sideBar_VerticalComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            language: language,\n                            onLanguageChange: handleLanguageChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: \" \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: scrollToTop,\n                                className: \"fixed bottom-4 right-4 z-50 p-3 text-C8C8FA text-4xl hover:text-929BE5 hover:cursor-pointer transition-colors duration-300\",\n                                children: \"▲\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_GitHubRepos__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                language: language\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        children: \" \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: scrollToTop,\n                        className: \"fixed bottom-4 right-4 z-50 p-3 text-C8C8FA text-4xl hover:text-929BE5 hover:cursor-pointer transition-colors duration-300\",\n                        children: \"▲\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        language: language\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 93,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_GitHubRepos__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"lVghtD+Pd+DFR5AxTb0TfwBX+44=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDZTtBQUNEO0FBQ2M7QUFDQTtBQUNXO0FBQ0c7QUFFN0I7QUFFM0IsU0FBU1MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csZUFBZUMsaUJBQWlCLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFeEQsTUFBTWEsY0FBYyxJQUFNO1FBQ3hCLE1BQU1DLGlCQUFpQixLQUFLLG1EQUFtRDtRQUMvRSxNQUFNQyxTQUFTLENBQUNDLElBQU1BLElBQUlBLElBQUlBLEdBQUcsMkNBQTJDO1FBQzVFLElBQUlDLGNBQWM7UUFFbEIsTUFBTUMsZ0JBQWdCLElBQU07WUFDMUJELGVBQWUsSUFBSSxtQ0FBbUM7WUFDdEQsTUFBTUUsV0FBV0YsY0FBY0g7WUFDL0IsTUFBTU0sYUFBYSxDQUFDQyxPQUFPQyxPQUFPLEdBQUdQLE9BQU9JO1lBRTVDLElBQUlBLFdBQVcsR0FBRztnQkFDaEJFLE9BQU9FLFFBQVEsQ0FBQyxHQUFHSDtnQkFDbkJJLHNCQUFzQk47WUFDeEIsT0FBTztnQkFDTEcsT0FBT0ksUUFBUSxDQUFDLEdBQUcsSUFBSSxtREFBbUQ7WUFDNUUsQ0FBQztRQUNIO1FBRUFELHNCQUFzQk47SUFDeEI7SUFFQSxNQUFNUSx1QkFBdUIsQ0FBQ0MsUUFBVTtRQUN0Q2pCLFlBQVlpQjtRQUNaQyxRQUFRQyxHQUFHLENBQUNwQjtJQUNkO0lBRUEsTUFBTXFCLGNBQWMsQ0FBQ0gsUUFBVTtRQUM3QkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNSSxhQUFhLENBQUNDLFNBQVM7SUFDM0M7SUFFQS9CLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNZ0Msa0JBQWtCLElBQU07WUFDNUJyQixpQkFBaUJTLE9BQU9hLFVBQVUsR0FBRztRQUN2QztRQUVBYixPQUFPYyxnQkFBZ0IsQ0FBQyxVQUFVRjtRQUNsQ0E7UUFFQSxPQUFPLElBQU07WUFDWFosT0FBT2UsbUJBQW1CLENBQUMsVUFBVUg7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNsQyxrREFBSUE7MEJBQ0gsNEVBQUNzQzs4QkFBTTs7Ozs7Ozs7Ozs7WUFHUixDQUFDMUIsOEJBQ0EsOERBQUMyQjtnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFJTixXQUFVO2tDQUNiLDRFQUFDMUIsNkVBQWlCQTs0QkFDaEJHLFVBQVVBOzRCQUNWOEIsa0JBQWtCYjs7Ozs7Ozs7Ozs7a0NBR3RCLDhEQUFDWTt3QkFBSU4sV0FBVTs7MENBQ2IsOERBQUN6Qiw2REFBSUE7MENBQUM7Ozs7OzswQ0FDTiw4REFBQ2lDO2dDQUNDQyxTQUFTNUI7Z0NBQ1RtQixXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUM3QixxRUFBV0E7Ozs7OzBDQUNaLDhEQUFDRSw2RUFBY0E7Z0NBQUNJLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztxQ0FJOUIsOERBQUM2QjtnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUN6Qiw2REFBSUE7a0NBQUM7Ozs7OztrQ0FDTiw4REFBQ2lDO3dCQUNDQyxTQUFTNUI7d0JBQ1RtQixXQUFVO2tDQUNYOzs7Ozs7a0NBR0csOERBQUMzQiw2RUFBY0E7d0JBQUNJLFVBQVVBOzs7Ozs7a0NBRTFCLDhEQUFDTixxRUFBV0E7Ozs7Ozs7Ozs7b0JBRW5COzs7QUFHUCxDQUFDO0dBekZ1Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFDYXJldFVwIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgR2l0aHViUmVwb3MgZnJvbSBcIi4vY29tcG9uZW50cy9leHRyYS9HaXRIdWJSZXBvc1wiO1xuaW1wb3J0IEdpdGh1YlN0YXRzIGZyb20gXCIuL2NvbXBvbmVudHMvZXh0cmEvR2l0aHViU3RhdHNcIjtcbmltcG9ydCBUZWNobm9sb2d5VXNlZCBmcm9tIFwiLi9jb21wb25lbnRzL3RlY2hub2xvZ3kvVGVjaG5vbG9neVVzZWRcIjtcbmltcG9ydCBWZXJ0aWNhbENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGVCYXIvVmVydGljYWxDb21wb25lbnRcIjtcblxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vY29tcG9uZW50cy9oZXJvL0hlcm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcIkVuZ2xpc2hcIik7XG4gIGNvbnN0IFtpc1NtYWxsU2NyZWVuLCBzZXRJc1NtYWxsU2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxEdXJhdGlvbiA9IDUwMDsgLy8gRHVyYXRpb24gb2YgdGhlIHNjcm9sbCBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzXG4gICAgY29uc3QgZWFzaW5nID0gKHQpID0+IHQgKiB0ICogdDsgLy8gRWFzaW5nIGZ1bmN0aW9uIGZvciBncmFkdWFsIGFjY2VsZXJhdGlvblxuICAgIGxldCBjdXJyZW50VGltZSA9IDA7XG5cbiAgICBjb25zdCBhbmltYXRlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY3VycmVudFRpbWUgKz0gMTU7IC8vIFRpbWUgaW5jcmVtZW50IGZvciBlYWNoIGludGVydmFsXG4gICAgICBjb25zdCBwcm9ncmVzcyA9IGN1cnJlbnRUaW1lIC8gc2Nyb2xsRHVyYXRpb247XG4gICAgICBjb25zdCBzY3JvbGxTdGVwID0gLXdpbmRvdy5zY3JvbGxZICogZWFzaW5nKHByb2dyZXNzKTtcblxuICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgc2Nyb2xsU3RlcCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgLy8gU2Nyb2xsIHRvIHRoZSBleGFjdCB0b3Agd2hlbiBhbmltYXRpb24gY29tcGxldGVzXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVMYW5ndWFnZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldExhbmd1YWdlKGV2ZW50KTtcbiAgICBjb25zb2xlLmxvZyhsYW5ndWFnZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja1NjcmVlblNpemUgPSAoKSA9PiB7XG4gICAgICBzZXRJc1NtYWxsU2NyZWVuKHdpbmRvdy5pbm5lcldpZHRoIDwgODUwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tTY3JlZW5TaXplKTtcbiAgICBjaGVja1NjcmVlblNpemUoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVja1NjcmVlblNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklzaGFuJ3MgUmVhY3QgV2Vic2l0ZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHshaXNTbWFsbFNjcmVlbiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZ3JpZCBncmlkLWNvbHMtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxuICAgICAgICAgICAgPFZlcnRpY2FsQ29tcG9uZW50XG4gICAgICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgICAgICAgICAgb25MYW5ndWFnZUNoYW5nZT17aGFuZGxlTGFuZ3VhZ2VDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tM1wiPlxuICAgICAgICAgICAgPEhlcm8+IDwvSGVybz5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IHotNTAgcC0zIHRleHQtQzhDOEZBIHRleHQtNHhsIGhvdmVyOnRleHQtOTI5QkU1IGhvdmVyOmN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICYjOTY1MDtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxHaXRodWJSZXBvcz48L0dpdGh1YlJlcG9zPlxuICAgICAgICAgICAgPFRlY2hub2xvZ3lVc2VkIGxhbmd1YWdlPXtsYW5ndWFnZX0+PC9UZWNobm9sb2d5VXNlZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlblwiPlxuICAgICAgICAgIDxIZXJvPiA8L0hlcm8+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTQgcmlnaHQtNCB6LTUwIHAtMyB0ZXh0LUM4QzhGQSB0ZXh0LTR4bCBob3Zlcjp0ZXh0LTkyOUJFNSBob3ZlcjpjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjOTY1MDtcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxUZWNobm9sb2d5VXNlZCBsYW5ndWFnZT17bGFuZ3VhZ2V9IC8+XG5cbiAgICAgICAgICAgICAgPEdpdGh1YlJlcG9zIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGYUNhcmV0VXAiLCJHaXRodWJSZXBvcyIsIkdpdGh1YlN0YXRzIiwiVGVjaG5vbG9neVVzZWQiLCJWZXJ0aWNhbENvbXBvbmVudCIsIkhlcm8iLCJIb21lIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzU21hbGxTY3JlZW4iLCJzZXRJc1NtYWxsU2NyZWVuIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxEdXJhdGlvbiIsImVhc2luZyIsInQiLCJjdXJyZW50VGltZSIsImFuaW1hdGVTY3JvbGwiLCJwcm9ncmVzcyIsInNjcm9sbFN0ZXAiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2Nyb2xsQnkiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxUbyIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NOYW1lIiwiY2hlY2tTY3JlZW5TaXplIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGl0bGUiLCJkaXYiLCJvbkxhbmd1YWdlQ2hhbmdlIiwic3BhbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});