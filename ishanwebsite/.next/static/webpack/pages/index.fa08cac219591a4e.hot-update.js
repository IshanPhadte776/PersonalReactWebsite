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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_extra_GitHubRepos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/extra/GitHubRepos */ \"./src/pages/components/extra/GitHubRepos.js\");\n/* harmony import */ var _components_extra_GithubStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/extra/GithubStats */ \"./src/pages/components/extra/GithubStats.jsx\");\n/* harmony import */ var _components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/technology/TechnologyUsed */ \"./src/pages/components/technology/TechnologyUsed.js\");\n/* harmony import */ var _components_sideBar_VerticalComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sideBar/VerticalComponent */ \"./src/pages/components/sideBar/VerticalComponent.jsx\");\n/* harmony import */ var _components_hero_Hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero/Hero */ \"./src/pages/components/hero/Hero.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const scrollToTop = ()=>{\n        const scrollDuration = 300; // Duration of the scroll animation in milliseconds\n        const scrollStep = -window.scrollY / (scrollDuration / 15);\n        const scrollInterval = setInterval(()=>{\n            if (window.scrollY !== 0) {\n                window.scrollBy(0, scrollStep);\n            } else {\n                clearInterval(scrollInterval);\n            }\n        }, 15);\n    };\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"English\");\n    const handleLanguageChange = (event)=>{\n        setLanguage(event);\n        console.log(language);\n    };\n    const handleClick = (event)=>{\n        console.log(event.currentTarget.className);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ishan's React Website\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen grid grid-cols-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sideBar_VerticalComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            language: language,\n                            onLanguageChange: handleLanguageChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-3 h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero_Hero__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: \" \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaCaretUp, {\n                                onClick: scrollToTop,\n                                className: \"fixed bottom-4 right-4 z-50 p-3 bg-black rounded-full text-white text-2xl shadow-md hover:bg-gray-700 transition-colors duration-300\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_extra_GitHubRepos__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_technology_TechnologyUsed__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                language: language\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"pZYUEyK8xhNWmY+gnWXUFnrkLsg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0k7QUFDVTtBQUNjO0FBQ0E7QUFDVztBQUNHO0FBRTdCO0FBRTNCLFNBQVNRLE9BQU87O0lBQzdCLE1BQU1DLGNBQWMsSUFBTTtRQUN4QixNQUFNQyxpQkFBaUIsS0FBSyxtREFBbUQ7UUFDL0UsTUFBTUMsYUFBYSxDQUFDQyxPQUFPQyxPQUFPLEdBQUlILENBQUFBLGlCQUFpQixFQUFDO1FBRXhELE1BQU1JLGlCQUFpQkMsWUFBWSxJQUFNO1lBQ3ZDLElBQUlILE9BQU9DLE9BQU8sS0FBSyxHQUFHO2dCQUN4QkQsT0FBT0ksUUFBUSxDQUFDLEdBQUdMO1lBQ3JCLE9BQU87Z0JBQ0xNLGNBQWNIO1lBQ2hCLENBQUM7UUFDSCxHQUFHO0lBQ0w7SUFHQSxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1tQix1QkFBdUIsQ0FBQ0MsUUFBVTtRQUN0Q0YsWUFBWUU7UUFDWkMsUUFBUUMsR0FBRyxDQUFDTDtJQUNkO0lBRUEsTUFBTU0sY0FBYyxDQUFDSCxRQUFVO1FBQzdCQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1JLGFBQWEsQ0FBQ0MsU0FBUztJQUMzQztJQUVBLHFCQUNFOzswQkFDRSw4REFBQzFCLGtEQUFJQTswQkFDSCw0RUFBQzJCOzhCQUFNOzs7Ozs7Ozs7OzswQkFHVCw4REFBQ0M7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBSUYsV0FBVTtrQ0FDYiw0RUFBQ3BCLDZFQUFpQkE7NEJBQ2hCWSxVQUFVQTs0QkFDVlcsa0JBQWtCVDs7Ozs7Ozs7Ozs7a0NBSXRCLDhEQUFDUTt3QkFBSUYsV0FBVTs7MENBVWIsOERBQUNuQiw2REFBSUE7MENBQUM7Ozs7OzswQ0FDTiw4REFBQ0wscURBQVNBO2dDQUNSNEIsU0FBU3JCO2dDQUNUaUIsV0FBVTs7Ozs7OzBDQUdaLDhEQUFDdkIscUVBQVdBOzs7OzswQ0FFWiw4REFBQ0UsNkVBQWNBO2dDQUFDYSxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEMsQ0FBQztHQS9EdUJWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUNhcmV0VXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBHaXRodWJSZXBvcyBmcm9tIFwiLi9jb21wb25lbnRzL2V4dHJhL0dpdEh1YlJlcG9zXCI7XG5pbXBvcnQgR2l0aHViU3RhdHMgZnJvbSBcIi4vY29tcG9uZW50cy9leHRyYS9HaXRodWJTdGF0c1wiO1xuaW1wb3J0IFRlY2hub2xvZ3lVc2VkIGZyb20gXCIuL2NvbXBvbmVudHMvdGVjaG5vbG9neS9UZWNobm9sb2d5VXNlZFwiO1xuaW1wb3J0IFZlcnRpY2FsQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZUJhci9WZXJ0aWNhbENvbXBvbmVudFwiO1xuXG5pbXBvcnQgSGVybyBmcm9tIFwiLi9jb21wb25lbnRzL2hlcm8vSGVyb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxEdXJhdGlvbiA9IDMwMDsgLy8gRHVyYXRpb24gb2YgdGhlIHNjcm9sbCBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzXG4gICAgY29uc3Qgc2Nyb2xsU3RlcCA9IC13aW5kb3cuc2Nyb2xsWSAvIChzY3JvbGxEdXJhdGlvbiAvIDE1KTtcbiAgICBcbiAgICBjb25zdCBzY3JvbGxJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSAhPT0gMCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgc2Nyb2xsU3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKHNjcm9sbEludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCAxNSk7XG4gIH07XG4gIFxuXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoXCJFbmdsaXNoXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoZXZlbnQpO1xuICAgIGNvbnNvbGUubG9nKGxhbmd1YWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPklzaGFuJ3MgUmVhY3QgV2Vic2l0ZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGdyaWQgZ3JpZC1jb2xzLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgPFZlcnRpY2FsQ29tcG9uZW50XG4gICAgICAgICAgICBsYW5ndWFnZT17bGFuZ3VhZ2V9XG4gICAgICAgICAgICBvbkxhbmd1YWdlQ2hhbmdlPXtoYW5kbGVMYW5ndWFnZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgaC1mdWxsXCI+XG4gICAgICAgICAgey8qIDxIZWFkZXJcbiAgICAgICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZX1cbiAgICAgICAgICAgIG9uTGFuZ3VhZ2VDaGFuZ2U9e2hhbmRsZUxhbmd1YWdlQ2hhbmdlfVxuICAgICAgICAgID48L0hlYWRlcj4gKi99XG5cbiAgICAgICAgICB7LyogPEltYWdlV2l0aFRleHQgbGFuZ3VhZ2U9e2xhbmd1YWdlfT48L0ltYWdlV2l0aFRleHQ+ICovfVxuXG4gICAgICAgICAgey8qIDxDb250YWN0SW5mb0FuZFByb2plY3RzIGxhbmd1YWdlPXtsYW5ndWFnZX0+PC9Db250YWN0SW5mb0FuZFByb2plY3RzPiAqL31cblxuICAgICAgICAgIDxIZXJvPiA8L0hlcm8+XG4gICAgICAgICAgPEZhQ2FyZXRVcFxuICAgICAgICAgICAgb25DbGljaz17c2Nyb2xsVG9Ub3B9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCByaWdodC00IHotNTAgcC0zIGJnLWJsYWNrIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlIHRleHQtMnhsIHNoYWRvdy1tZCBob3ZlcjpiZy1ncmF5LTcwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8R2l0aHViUmVwb3M+PC9HaXRodWJSZXBvcz5cblxuICAgICAgICAgIDxUZWNobm9sb2d5VXNlZCBsYW5ndWFnZT17bGFuZ3VhZ2V9PjwvVGVjaG5vbG9neVVzZWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwiRmFDYXJldFVwIiwiR2l0aHViUmVwb3MiLCJHaXRodWJTdGF0cyIsIlRlY2hub2xvZ3lVc2VkIiwiVmVydGljYWxDb21wb25lbnQiLCJIZXJvIiwiSG9tZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsRHVyYXRpb24iLCJzY3JvbGxTdGVwIiwid2luZG93Iiwic2Nyb2xsWSIsInNjcm9sbEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzY3JvbGxCeSIsImNsZWFySW50ZXJ2YWwiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRpdiIsIm9uTGFuZ3VhZ2VDaGFuZ2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});