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

/***/ "./src/pages/components/projects/Projects.js":
/*!***************************************************!*\
  !*** ./src/pages/components/projects/Projects.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AWS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AWS */ \"./src/pages/components/projects/AWS.js\");\n/* harmony import */ var _FullStackWebDev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FullStackWebDev */ \"./src/pages/components/projects/FullStackWebDev.js\");\n/* harmony import */ var _FullStackAndroid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FullStackAndroid */ \"./src/pages/components/projects/FullStackAndroid.js\");\n/* harmony import */ var _project_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.module.css */ \"./src/pages/components/projects/project.module.css\");\n/* harmony import */ var _project_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_project_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n // import the components to render based on the active tab\n\n\n\nconst ContactInfo = ()=>{\n    _s();\n    const [activeComponent, setActiveComponent] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const handleClick = (component)=>{\n        setActiveComponent(component);\n    };\n    let componentToRender;\n    switch(activeComponent){\n        case \"AWSCertifiedCloudPractioner\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AWS__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\projects\\\\Projects.js\",\n                lineNumber: 18,\n                columnNumber: 27\n            }, undefined);\n            break;\n        case \"FullStackWebDevelopHotelApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FullStackWebDev__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\projects\\\\Projects.js\",\n                lineNumber: 21,\n                columnNumber: 27\n            }, undefined);\n            break;\n        case \"FullStackAndroidMealerApplication\":\n            componentToRender = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FullStackAndroid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\projects\\\\Projects.js\",\n                lineNumber: 24,\n                columnNumber: 27\n            }, undefined);\n            break;\n        default:\n            componentToRender = null;\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                class: (_project_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                children: \" Here are Some of my Side Projects \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\projects\\\\Projects.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: (_project_module_css__WEBPACK_IMPORTED_MODULE_5___default().subContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        class: (_project_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                        onClick: ()=>handleClick(\"AWSCertifiedCloudPractioner\"),\n                        children: \"AWS Certified Cloud Practioner\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\projects\\\\Projects.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        class: (_project_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                        onClick: ()=>handleClick(\"FullStackWebDevelopHotelApplication\"),\n                        children: \"Full Stack Web Dev Hotel Application\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\projects\\\\Projects.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        class: (_project_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                        onClick: ()=>handleClick(\"FullStackAndroidMealerApplication\"),\n                        children: \"Full Stack Android Mealer Application\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\projects\\\\Projects.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\projects\\\\Projects.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            componentToRender\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Desktop\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\projects\\\\Projects.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContactInfo, \"OnPOtdDaXS4mKD4D2zC3/KKod78=\");\n_c = ContactInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactInfo);\nvar _c;\n$RefreshReg$(_c, \"ContactInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRixDQUFDLDBEQUEwRDtBQUNuQztBQUNFO0FBRVI7QUFFMUMsTUFBTUssY0FBYyxJQUFNOztJQUN4QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdQLHFEQUFjLENBQUMsSUFBSTtJQUVqRSxNQUFNUyxjQUFjLENBQUNDLFlBQWM7UUFDakNILG1CQUFtQkc7SUFDckI7SUFFQSxJQUFJQztJQUNKLE9BQVFMO1FBQ04sS0FBSztZQUNISyxrQ0FBb0IsOERBQUNWLDRDQUFHQTs7Ozs7WUFDeEIsS0FBTTtRQUNSLEtBQUs7WUFDSFUsa0NBQW9CLDhEQUFDVCx3REFBZUE7Ozs7O1lBQ3BDLEtBQU07UUFDUixLQUFLO1lBQ0hTLGtDQUFvQiw4REFBQ1IseURBQWdCQTs7Ozs7WUFDckMsS0FBTTtRQUNSO1lBQ0VRLG9CQUFvQixJQUFJO1lBQ3hCLEtBQU07SUFDVjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFHQyxPQUFPVixrRUFBWTswQkFBRTs7Ozs7OzBCQUV6Qiw4REFBQ1E7Z0JBQUlFLE9BQU9WLHlFQUFtQjs7a0NBQzdCLDhEQUFDYTt3QkFDQ0gsT0FBT1YsbUVBQWE7d0JBQ3BCYyxTQUFTLElBQU1ULFlBQVk7a0NBQzVCOzs7Ozs7a0NBR0QsOERBQUNRO3dCQUNDSCxPQUFPVixtRUFBYTt3QkFDcEJjLFNBQVMsSUFBTVQsWUFBWTtrQ0FDNUI7Ozs7OztrQ0FHRCw4REFBQ1E7d0JBQ0NILE9BQU9WLG1FQUFhO3dCQUNwQmMsU0FBUyxJQUFNVCxZQUFZO2tDQUM1Qjs7Ozs7Ozs7Ozs7O1lBSUZFOzs7Ozs7O0FBR1A7R0FsRE1OO0tBQUFBO0FBb0ROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RzLmpzP2RmNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQVdTIGZyb20gXCIuL0FXU1wiOyAvLyBpbXBvcnQgdGhlIGNvbXBvbmVudHMgdG8gcmVuZGVyIGJhc2VkIG9uIHRoZSBhY3RpdmUgdGFiXHJcbmltcG9ydCBGdWxsU3RhY2tXZWJEZXYgZnJvbSBcIi4vRnVsbFN0YWNrV2ViRGV2XCI7XHJcbmltcG9ydCBGdWxsU3RhY2tBbmRyb2lkIGZyb20gXCIuL0Z1bGxTdGFja0FuZHJvaWRcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvamVjdC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDb250YWN0SW5mbyA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlQ29tcG9uZW50LCBzZXRBY3RpdmVDb21wb25lbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGNvbXBvbmVudFRvUmVuZGVyO1xyXG4gIHN3aXRjaCAoYWN0aXZlQ29tcG9uZW50KSB7XHJcbiAgICBjYXNlIFwiQVdTQ2VydGlmaWVkQ2xvdWRQcmFjdGlvbmVyXCI6XHJcbiAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPEFXUyAvPjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiRnVsbFN0YWNrV2ViRGV2ZWxvcEhvdGVsQXBwbGljYXRpb25cIjpcclxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8RnVsbFN0YWNrV2ViRGV2IC8+O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJGdWxsU3RhY2tBbmRyb2lkTWVhbGVyQXBwbGljYXRpb25cIjpcclxuICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8RnVsbFN0YWNrQW5kcm9pZCAvPjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjb21wb25lbnRUb1JlbmRlciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzcz17c3R5bGVzLnRpdGxlfT4gSGVyZSBhcmUgU29tZSBvZiBteSBTaWRlIFByb2plY3RzIDwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMuc3ViQ29udGFpbmVyfT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz17c3R5bGVzLmJ1dHRvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiQVdTQ2VydGlmaWVkQ2xvdWRQcmFjdGlvbmVyXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFXUyBDZXJ0aWZpZWQgQ2xvdWQgUHJhY3Rpb25lclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzPXtzdHlsZXMuYnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCJGdWxsU3RhY2tXZWJEZXZlbG9wSG90ZWxBcHBsaWNhdGlvblwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBGdWxsIFN0YWNrIFdlYiBEZXYgSG90ZWwgQXBwbGljYXRpb25cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz17c3R5bGVzLmJ1dHRvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiRnVsbFN0YWNrQW5kcm9pZE1lYWxlckFwcGxpY2F0aW9uXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEZ1bGwgU3RhY2sgQW5kcm9pZCBNZWFsZXIgQXBwbGljYXRpb25cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0SW5mbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQVdTIiwiRnVsbFN0YWNrV2ViRGV2IiwiRnVsbFN0YWNrQW5kcm9pZCIsInN0eWxlcyIsIkNvbnRhY3RJbmZvIiwiYWN0aXZlQ29tcG9uZW50Iiwic2V0QWN0aXZlQ29tcG9uZW50IiwidXNlU3RhdGUiLCJoYW5kbGVDbGljayIsImNvbXBvbmVudCIsImNvbXBvbmVudFRvUmVuZGVyIiwiZGl2IiwiaDIiLCJjbGFzcyIsInRpdGxlIiwic3ViQ29udGFpbmVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/projects/Projects.js\n"));

/***/ })

});