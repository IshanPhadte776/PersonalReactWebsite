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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_extra_GitHubRepos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/extra/GitHubRepos */ \"./src/pages/components/extra/GitHubRepos.js\");\n/* harmony import */ var _components_extra_GithubStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/extra/GithubStats */ \"./src/pages/components/extra/GithubStats.jsx\");\n/* harmony import */ var _components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/technology/TechnologyUsed */ \"./src/pages/components/technology/TechnologyUsed.js\");\n/* harmony import */ var _components_sideBar_VerticalComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sideBar/VerticalComponent */ \"./src/pages/components/sideBar/VerticalComponent.jsx\");\n/* harmony import */ var _components_hero_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero/Hero */ \"./src/pages/components/hero/Hero.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const scrollToTop = ()=>{\n        const scrollDuration = 500; // Duration of the scroll animation in milliseconds\n        const easing = (t)=>t * t; // Easing function for gradual acceleration\n        let currentTime = 0;\n        const animateScroll = ()=>{\n            currentTime += 15; // Time increment for each interval\n            const progress = currentTime / scrollDuration;\n            const scrollStep = -window.scrollY * easing(progress);\n            if (progress < 1) {\n                window.scrollBy(0, scrollStep);\n                requestAnimationFrame(animateScroll);\n            } else {\n                window.scrollTo(0, 0); // Scroll to the exact top when animation completes\n            }\n        };\n        requestAnimationFrame(animateScroll);\n    };\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"English\");\n    const handleLanguageChange = (event)=>{\n        setLanguage(event);\n        console.log(language);\n    };\n    const handleClick = (event)=>{\n        console.log(event.currentTarget.className);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen grid grid-cols-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sideBar_VerticalComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            language: language,\n                            onLanguageChange: handleLanguageChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-3 h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: \" \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaCaretUp, {\n                                onClick: scrollToTop,\n                                className: \"fixed bottom-4 right-4 z-50 p-3 bg-black rounded-full text-white text-2xl shadow-md hover:bg-gray-700 transition-colors duration-300\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_GitHubRepos__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                language: language\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"pZYUEyK8xhNWmY+gnWXUFnrkLsg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0k7QUFDVTtBQUNjO0FBQ0E7QUFDVztBQUNHO0FBRTdCO0FBRTNCLFNBQVNRLE9BQU87O0lBQzdCLE1BQU1DLGNBQWMsSUFBTTtRQUN4QixNQUFNQyxpQkFBaUIsS0FBSyxtREFBbUQ7UUFDL0UsTUFBTUMsU0FBU0MsQ0FBQUEsSUFBS0EsSUFBSUEsR0FBRywyQ0FBMkM7UUFDdEUsSUFBSUMsY0FBYztRQUVsQixNQUFNQyxnQkFBZ0IsSUFBTTtZQUMxQkQsZUFBZSxJQUFJLG1DQUFtQztZQUN0RCxNQUFNRSxXQUFXRixjQUFjSDtZQUMvQixNQUFNTSxhQUFhLENBQUNDLE9BQU9DLE9BQU8sR0FBR1AsT0FBT0k7WUFFNUMsSUFBSUEsV0FBVyxHQUFHO2dCQUNoQkUsT0FBT0UsUUFBUSxDQUFDLEdBQUdIO2dCQUNuQkksc0JBQXNCTjtZQUN4QixPQUFPO2dCQUNMRyxPQUFPSSxRQUFRLENBQUMsR0FBRyxJQUFJLG1EQUFtRDtZQUM1RSxDQUFDO1FBQ0g7UUFFQUQsc0JBQXNCTjtJQUN4QjtJQUlBLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHdEIsK0NBQVFBLENBQUM7SUFFekMsTUFBTXVCLHVCQUF1QixDQUFDQyxRQUFVO1FBQ3RDRixZQUFZRTtRQUNaQyxRQUFRQyxHQUFHLENBQUNMO0lBQ2Q7SUFFQSxNQUFNTSxjQUFjLENBQUNILFFBQVU7UUFDN0JDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUksYUFBYSxDQUFDQyxTQUFTO0lBQzNDO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDOUIsa0RBQUlBOzBCQUNILDRFQUFDK0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDQztnQkFBSUYsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFJRixXQUFVO2tDQUNiLDRFQUFDeEIsNkVBQWlCQTs0QkFDaEJnQixVQUFVQTs0QkFDVlcsa0JBQWtCVDs7Ozs7Ozs7Ozs7a0NBSXRCLDhEQUFDUTt3QkFBSUYsV0FBVTs7MENBVWIsOERBQUN2Qiw2REFBSUE7MENBQUM7Ozs7OzswQ0FDTiw4REFBQ0wscURBQVNBO2dDQUNSZ0MsU0FBU3pCO2dDQUNUcUIsV0FBVTs7Ozs7OzBDQUdaLDhEQUFDM0IscUVBQVdBOzs7OzswQ0FFWiw4REFBQ0UsNkVBQWNBO2dDQUFDaUIsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDLENBQUM7R0F4RXVCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFDYXJldFVwIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgR2l0aHViUmVwb3MgZnJvbSBcIi4vY29tcG9uZW50cy9leHRyYS9HaXRIdWJSZXBvc1wiO1xuaW1wb3J0IEdpdGh1YlN0YXRzIGZyb20gXCIuL2NvbXBvbmVudHMvZXh0cmEvR2l0aHViU3RhdHNcIjtcbmltcG9ydCBUZWNobm9sb2d5VXNlZCBmcm9tIFwiLi9jb21wb25lbnRzL3RlY2hub2xvZ3kvVGVjaG5vbG9neVVzZWRcIjtcbmltcG9ydCBWZXJ0aWNhbENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGVCYXIvVmVydGljYWxDb21wb25lbnRcIjtcblxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vY29tcG9uZW50cy9oZXJvL0hlcm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsRHVyYXRpb24gPSA1MDA7IC8vIER1cmF0aW9uIG9mIHRoZSBzY3JvbGwgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kc1xuICAgIGNvbnN0IGVhc2luZyA9IHQgPT4gdCAqIHQ7IC8vIEVhc2luZyBmdW5jdGlvbiBmb3IgZ3JhZHVhbCBhY2NlbGVyYXRpb25cbiAgICBsZXQgY3VycmVudFRpbWUgPSAwO1xuICBcbiAgICBjb25zdCBhbmltYXRlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY3VycmVudFRpbWUgKz0gMTU7IC8vIFRpbWUgaW5jcmVtZW50IGZvciBlYWNoIGludGVydmFsXG4gICAgICBjb25zdCBwcm9ncmVzcyA9IGN1cnJlbnRUaW1lIC8gc2Nyb2xsRHVyYXRpb247XG4gICAgICBjb25zdCBzY3JvbGxTdGVwID0gLXdpbmRvdy5zY3JvbGxZICogZWFzaW5nKHByb2dyZXNzKTtcbiAgXG4gICAgICBpZiAocHJvZ3Jlc3MgPCAxKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCBzY3JvbGxTdGVwKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVTY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApOyAvLyBTY3JvbGwgdG8gdGhlIGV4YWN0IHRvcCB3aGVuIGFuaW1hdGlvbiBjb21wbGV0ZXNcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVNjcm9sbCk7XG4gIH07XG4gIFxuICBcblxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKFwiRW5nbGlzaFwiKTtcblxuICBjb25zdCBoYW5kbGVMYW5ndWFnZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldExhbmd1YWdlKGV2ZW50KTtcbiAgICBjb25zb2xlLmxvZyhsYW5ndWFnZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Jc2hhbidzIFJlYWN0IFdlYnNpdGU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBncmlkIGdyaWQtY29scy00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxuICAgICAgICAgIDxWZXJ0aWNhbENvbXBvbmVudFxuICAgICAgICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlfVxuICAgICAgICAgICAgb25MYW5ndWFnZUNoYW5nZT17aGFuZGxlTGFuZ3VhZ2VDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIGgtZnVsbFwiPlxuICAgICAgICAgIHsvKiA8SGVhZGVyXG4gICAgICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XG4gICAgICAgICAgICBvbkxhbmd1YWdlQ2hhbmdlPXtoYW5kbGVMYW5ndWFnZUNoYW5nZX1cbiAgICAgICAgICA+PC9IZWFkZXI+ICovfVxuXG4gICAgICAgICAgey8qIDxJbWFnZVdpdGhUZXh0IGxhbmd1YWdlPXtsYW5ndWFnZX0+PC9JbWFnZVdpdGhUZXh0PiAqL31cblxuICAgICAgICAgIHsvKiA8Q29udGFjdEluZm9BbmRQcm9qZWN0cyBsYW5ndWFnZT17bGFuZ3VhZ2V9PjwvQ29udGFjdEluZm9BbmRQcm9qZWN0cz4gKi99XG5cbiAgICAgICAgICA8SGVybz4gPC9IZXJvPlxuICAgICAgICAgIDxGYUNhcmV0VXBcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTQgcmlnaHQtNCB6LTUwIHAtMyBiZy1ibGFjayByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSB0ZXh0LTJ4bCBzaGFkb3ctbWQgaG92ZXI6YmctZ3JheS03MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEdpdGh1YlJlcG9zPjwvR2l0aHViUmVwb3M+XG5cbiAgICAgICAgICA8VGVjaG5vbG9neVVzZWQgbGFuZ3VhZ2U9e2xhbmd1YWdlfT48L1RlY2hub2xvZ3lVc2VkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsIkZhQ2FyZXRVcCIsIkdpdGh1YlJlcG9zIiwiR2l0aHViU3RhdHMiLCJUZWNobm9sb2d5VXNlZCIsIlZlcnRpY2FsQ29tcG9uZW50IiwiSGVybyIsIkhvbWUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbER1cmF0aW9uIiwiZWFzaW5nIiwidCIsImN1cnJlbnRUaW1lIiwiYW5pbWF0ZVNjcm9sbCIsInByb2dyZXNzIiwic2Nyb2xsU3RlcCIsIndpbmRvdyIsInNjcm9sbFkiLCJzY3JvbGxCeSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFRvIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkaXYiLCJvbkxhbmd1YWdlQ2hhbmdlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});