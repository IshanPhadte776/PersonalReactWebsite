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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_extra_GitHubRepos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/extra/GitHubRepos */ \"./src/pages/components/extra/GitHubRepos.js\");\n/* harmony import */ var _components_extra_GithubStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/extra/GithubStats */ \"./src/pages/components/extra/GithubStats.jsx\");\n/* harmony import */ var _components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/technology/TechnologyUsed */ \"./src/pages/components/technology/TechnologyUsed.js\");\n/* harmony import */ var _components_sideBar_VerticalComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sideBar/VerticalComponent */ \"./src/pages/components/sideBar/VerticalComponent.jsx\");\n/* harmony import */ var _components_hero_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero/Hero */ \"./src/pages/components/hero/Hero.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const scrollToTop = ()=>{\n        const scrollDuration = 500; // Duration of the scroll animation in milliseconds\n        const easing = (t)=>t * t * t; // Easing function for gradual acceleration\n        let currentTime = 0;\n        const animateScroll = ()=>{\n            currentTime += 15; // Time increment for each interval\n            const progress = currentTime / scrollDuration;\n            const scrollStep = -window.scrollY * easing(progress);\n            if (progress < 1) {\n                window.scrollBy(0, scrollStep);\n                requestAnimationFrame(animateScroll);\n            } else {\n                window.scrollTo(0, 0); // Scroll to the exact top when animation completes\n            }\n        };\n        requestAnimationFrame(animateScroll);\n    };\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"English\");\n    const handleLanguageChange = (event)=>{\n        setLanguage(event);\n        console.log(language);\n    };\n    const handleClick = (event)=>{\n        console.log(event.currentTarget.className);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen grid grid-cols-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1 border border-red\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sideBar_VerticalComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            language: language,\n                            onLanguageChange: handleLanguageChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-3 h-full border border-blue\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: \" \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: scrollToTop,\n                                className: \"fixed bottom-4 right-4 z-50 p-3 text-C8C8FA text-4xl hover:text-929BE5 hover:cursor-pointer transition-colors duration-300\",\n                                children: \"▲\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_GitHubRepos__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                language: language\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"pZYUEyK8xhNWmY+gnWXUFnrkLsg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSTtBQUNVO0FBQ2M7QUFDQTtBQUNXO0FBQ0c7QUFFN0I7QUFFM0IsU0FBU1EsT0FBTzs7SUFDN0IsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCLE1BQU1DLGlCQUFpQixLQUFLLG1EQUFtRDtRQUMvRSxNQUFNQyxTQUFTLENBQUNDLElBQU1BLElBQUlBLElBQUlBLEdBQUcsMkNBQTJDO1FBQzVFLElBQUlDLGNBQWM7UUFFbEIsTUFBTUMsZ0JBQWdCLElBQU07WUFDMUJELGVBQWUsSUFBSSxtQ0FBbUM7WUFDdEQsTUFBTUUsV0FBV0YsY0FBY0g7WUFDL0IsTUFBTU0sYUFBYSxDQUFDQyxPQUFPQyxPQUFPLEdBQUdQLE9BQU9JO1lBRTVDLElBQUlBLFdBQVcsR0FBRztnQkFDaEJFLE9BQU9FLFFBQVEsQ0FBQyxHQUFHSDtnQkFDbkJJLHNCQUFzQk47WUFDeEIsT0FBTztnQkFDTEcsT0FBT0ksUUFBUSxDQUFDLEdBQUcsSUFBSSxtREFBbUQ7WUFDNUUsQ0FBQztRQUNIO1FBRUFELHNCQUFzQk47SUFDeEI7SUFFQSxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU11Qix1QkFBdUIsQ0FBQ0MsUUFBVTtRQUN0Q0YsWUFBWUU7UUFDWkMsUUFBUUMsR0FBRyxDQUFDTDtJQUNkO0lBRUEsTUFBTU0sY0FBYyxDQUFDSCxRQUFVO1FBQzdCQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1JLGFBQWEsQ0FBQ0MsU0FBUztJQUMzQztJQUVBLHFCQUNFOzswQkFDRSw4REFBQzlCLGtEQUFJQTswQkFDSCw0RUFBQytCOzhCQUFNOzs7Ozs7Ozs7OzswQkFHVCw4REFBQ0M7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBSUYsV0FBVTtrQ0FDYiw0RUFBQ3hCLDZFQUFpQkE7NEJBQ2hCZ0IsVUFBVUE7NEJBQ1ZXLGtCQUFrQlQ7Ozs7Ozs7Ozs7O2tDQUl0Qiw4REFBQ1E7d0JBQUlGLFdBQVU7OzBDQVViLDhEQUFDdkIsNkRBQUlBOzBDQUFDOzs7Ozs7MENBQ04sOERBQUMyQjtnQ0FDQ0MsU0FBUzFCO2dDQUNUcUIsV0FBVTswQ0FDWDs7Ozs7OzBDQUlELDhEQUFDM0IscUVBQVdBOzs7OzswQ0FFWiw4REFBQ0UsNkVBQWNBO2dDQUFDaUIsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDLENBQUM7R0F4RXVCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFDYXJldFVwIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgR2l0aHViUmVwb3MgZnJvbSBcIi4vY29tcG9uZW50cy9leHRyYS9HaXRIdWJSZXBvc1wiO1xuaW1wb3J0IEdpdGh1YlN0YXRzIGZyb20gXCIuL2NvbXBvbmVudHMvZXh0cmEvR2l0aHViU3RhdHNcIjtcbmltcG9ydCBUZWNobm9sb2d5VXNlZCBmcm9tIFwiLi9jb21wb25lbnRzL3RlY2hub2xvZ3kvVGVjaG5vbG9neVVzZWRcIjtcbmltcG9ydCBWZXJ0aWNhbENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGVCYXIvVmVydGljYWxDb21wb25lbnRcIjtcblxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vY29tcG9uZW50cy9oZXJvL0hlcm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsRHVyYXRpb24gPSA1MDA7IC8vIER1cmF0aW9uIG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgIGNvbnN0IGVhc2luZyA9ICh0KSA9PiB0ICogdCAqIHQ7IC8vIEVhc2luZyBmdW5jdGlvbiBmb3IgZ3JhZHVhbCBhY2NlbGVyYXRpb25cbiAgICBsZXQgY3VycmVudFRpbWUgPSAwO1xuXG4gICAgY29uc3QgYW5pbWF0ZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGN1cnJlbnRUaW1lICs9IDE1OyAvLyBUaW1lIGluY3JlbWVudCBmb3IgZWFjaCBpbnRlcnZhbFxuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBjdXJyZW50VGltZSAvIHNjcm9sbER1cmF0aW9uO1xuICAgICAgY29uc3Qgc2Nyb2xsU3RlcCA9IC13aW5kb3cuc2Nyb2xsWSAqIGVhc2luZyhwcm9ncmVzcyk7XG5cbiAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIHNjcm9sbFN0ZXApO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVNjcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IC8vIFNjcm9sbCB0byB0aGUgZXhhY3QgdG9wIHdoZW4gYW5pbWF0aW9uIGNvbXBsZXRlc1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVNjcm9sbCk7XG4gIH07XG5cbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcIkVuZ2xpc2hcIik7XG5cbiAgY29uc3QgaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRMYW5ndWFnZShldmVudCk7XG4gICAgY29uc29sZS5sb2cobGFuZ3VhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SXNoYW4ncyBSZWFjdCBXZWJzaXRlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZ3JpZCBncmlkLWNvbHMtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgYm9yZGVyIGJvcmRlci1yZWRcIj5cbiAgICAgICAgICA8VmVydGljYWxDb21wb25lbnRcbiAgICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgICAgICAgIG9uTGFuZ3VhZ2VDaGFuZ2U9e2hhbmRsZUxhbmd1YWdlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBoLWZ1bGwgYm9yZGVyIGJvcmRlci1ibHVlXCI+XG4gICAgICAgICAgey8qIDxIZWFkZXJcbiAgICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgICAgICAgIG9uTGFuZ3VhZ2VDaGFuZ2U9e2hhbmRsZUxhbmd1YWdlQ2hhbmdlfVxuICAgICAgICAgID48L0hlYWRlcj4gKi99XG5cbiAgICAgICAgICB7LyogPEltYWdlV2l0aFRleHQgbGFuZ3VhZ2U9e2xhbmd1YWdlfT48L0ltYWdlV2l0aFRleHQ+ICovfVxuXG4gICAgICAgICAgey8qIDxDb250YWN0SW5mb0FuZFByb2plY3RzIGxhbmd1YWdlPXtsYW5ndWFnZX0+PC9Db250YWN0SW5mb0FuZFByb2plY3RzPiAqL31cblxuICAgICAgICAgIDxIZXJvPiA8L0hlcm8+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTQgcmlnaHQtNCB6LTUwIHAtMyB0ZXh0LUM4QzhGQSB0ZXh0LTR4bCBob3Zlcjp0ZXh0LTkyOUJFNSBob3ZlcjpjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICYjOTY1MDtcbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8R2l0aHViUmVwb3M+PC9HaXRodWJSZXBvcz5cblxuICAgICAgICAgIDxUZWNobm9sb2d5VXNlZCBsYW5ndWFnZT17bGFuZ3VhZ2V9PjwvVGVjaG5vbG9neVVzZWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwiRmFDYXJldFVwIiwiR2l0aHViUmVwb3MiLCJHaXRodWJTdGF0cyIsIlRlY2hub2xvZ3lVc2VkIiwiVmVydGljYWxDb21wb25lbnQiLCJIZXJvIiwiSG9tZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsRHVyYXRpb24iLCJlYXNpbmciLCJ0IiwiY3VycmVudFRpbWUiLCJhbmltYXRlU2Nyb2xsIiwicHJvZ3Jlc3MiLCJzY3JvbGxTdGVwIiwid2luZG93Iiwic2Nyb2xsWSIsInNjcm9sbEJ5IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG8iLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRpdiIsIm9uTGFuZ3VhZ2VDaGFuZ2UiLCJzcGFuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});