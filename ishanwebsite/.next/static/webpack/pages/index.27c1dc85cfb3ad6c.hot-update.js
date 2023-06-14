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

/***/ "./src/pages/components/hero/Hero.jsx":
/*!********************************************!*\
  !*** ./src/pages/components/hero/Hero.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pfpPicture_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pfpPicture.jpeg */ \"./src/pages/components/hero/pfpPicture.jpeg\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Hero() {\n    _s();\n    const [screenSize, setScreenSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleMediaQueryChange = (event)=>{\n            if (event.matches) {\n                console.log(\"Screen size changed:\", screenSize, \"to\", event.media);\n                setScreenSize(event.media);\n            }\n        };\n        const mediaQuery = window.matchMedia(\"(min-width: 768px) and (max-width: 1279px)\");\n        mediaQuery.addListener(handleMediaQueryChange);\n        setScreenSize(mediaQuery.media);\n        return ()=>{\n            mediaQuery.removeListener(handleMediaQueryChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"https://media.giphy.com/media/BA8S1tDfyHOkU/giphy.gif\",\n                alt: \"GIF\",\n                className: \"w-full h-auto aspect-w-1 aspect-h-1 filter brightness-50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white p-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-2xl mx-auto\",\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _pfpPicture_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                className: \"w-1/4 xs:w-1/5 sm:w-1/4 md:w-1/2 xl:w-2/5\",\n                                alt: \"pfpPic\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl font-bold text-center mt-1\",\n                            children: \"Ishan Phadte\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-lg text-justify\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Hello, My name is Ishan Phadte. I'm a 3rd-year Computer Science student at the University of Ottawa. I am a great software engineer because I possess exceptional problem-solving skills.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"I am specialized in Full-Stack Development and Cloud Computing. I have created various full-stack projects such as this React Website. I am also an AWS Certified Cloud Practitioner and have developed a Chatbot using various cloud services. Additionally, I have done freelancing work for a small business where I developed a website to display content and send email notifications.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-transparent border border-white rounded-full py-2 px-4 text-white hover:bg-white hover:text-gray-800 transition-colors duration-300 mx-auto\",\n                                        onClick: ()=>window.open(\"https://github.com/IshanPhadte776/IshanPhadte776/blob/main/IshanPhadteResume.pdf\", \"_blank\"),\n                                        children: \"Resume\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ishan\\\\OneDrive\\\\Documents\\\\GitHub\\\\PersonalReactWebsite\\\\ishanwebsite\\\\src\\\\pages\\\\components\\\\hero\\\\Hero.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"ZdGZk140q3yYvKtton0+UjMAO9E=\");\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9oZXJvL0hlcm8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFDWTtBQUUzQyxTQUFTSyxPQUFPOztJQUNkLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1PLHlCQUF5QixDQUFDQyxRQUFVO1lBQ3hDLElBQUlBLE1BQU1DLE9BQU8sRUFBRTtnQkFDakJDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JOLFlBQVksTUFBTUcsTUFBTUksS0FBSztnQkFDakVOLGNBQWNFLE1BQU1JLEtBQUs7WUFDM0IsQ0FBQztRQUNIO1FBRUEsTUFBTUMsYUFBYUMsT0FBT0MsVUFBVSxDQUNsQztRQUVGRixXQUFXRyxXQUFXLENBQUNUO1FBQ3ZCRCxjQUFjTyxXQUFXRCxLQUFLO1FBRTlCLE9BQU8sSUFBTTtZQUNYQyxXQUFXSSxjQUFjLENBQUNWO1FBQzVCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkgsV0FBVTs7Ozs7OzBCQUdaLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3dCQUFvQjtzQ0FDakMsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDakIsbURBQUtBO2dDQUNKbUIsS0FBS2xCLHdEQUFVQTtnQ0FDZmdCLFdBQVU7Z0NBQ1ZHLEtBQUk7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDQzs0QkFBR0osV0FBVTtzQ0FBc0M7Ozs7OztzQ0FDcEQsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNLO2tEQUFFOzs7Ozs7Ozs7Ozs4Q0FNTCw4REFBQ047b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNLO2tEQUFFOzs7Ozs7Ozs7Ozs4Q0FVTCw4REFBQ047b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNNO3dDQUNDTixXQUFVO3dDQUNWTyxTQUFTLElBQ1BaLE9BQU9hLElBQUksQ0FDVCxvRkFDQTtrREFHTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBN0VTdkI7S0FBQUE7QUErRVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvaGVyby9IZXJvLmpzeD80OTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgcHJvZmlsZVBpYyBmcm9tIFwiLi9wZnBQaWN0dXJlLmpwZWdcIjtcclxuXHJcbmZ1bmN0aW9uIEhlcm8oKSB7XHJcbiAgY29uc3QgW3NjcmVlblNpemUsIHNldFNjcmVlblNpemVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVNZWRpYVF1ZXJ5Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5tYXRjaGVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTY3JlZW4gc2l6ZSBjaGFuZ2VkOlwiLCBzY3JlZW5TaXplLCBcInRvXCIsIGV2ZW50Lm1lZGlhKTtcclxuICAgICAgICBzZXRTY3JlZW5TaXplKGV2ZW50Lm1lZGlhKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoXHJcbiAgICAgIFwiKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpXCJcclxuICAgICk7XHJcbiAgICBtZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKGhhbmRsZU1lZGlhUXVlcnlDaGFuZ2UpO1xyXG4gICAgc2V0U2NyZWVuU2l6ZShtZWRpYVF1ZXJ5Lm1lZGlhKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBtZWRpYVF1ZXJ5LnJlbW92ZUxpc3RlbmVyKGhhbmRsZU1lZGlhUXVlcnlDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9CQThTMXREZnlIT2tVL2dpcGh5LmdpZlwiXHJcbiAgICAgICAgYWx0PVwiR0lGXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGFzcGVjdC13LTEgYXNwZWN0LWgtMSBmaWx0ZXIgYnJpZ2h0bmVzcy01MFwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgcC0xXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0b1wiPiB7LyogQWRqdXN0ZWQgbWF4IHdpZHRoICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17cHJvZmlsZVBpY31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvNCB4czp3LTEvNSBzbTp3LTEvNCBtZDp3LTEvMiB4bDp3LTIvNVwiXHJcbiAgICAgICAgICAgICAgYWx0PVwicGZwUGljXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtdC0xXCI+SXNoYW4gUGhhZHRlPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBIZWxsbywgTXkgbmFtZSBpcyBJc2hhbiBQaGFkdGUuIEknbSBhIDNyZC15ZWFyIENvbXB1dGVyIFNjaWVuY2VcclxuICAgICAgICAgICAgICAgIHN0dWRlbnQgYXQgdGhlIFVuaXZlcnNpdHkgb2YgT3R0YXdhLiBJIGFtIGEgZ3JlYXQgc29mdHdhcmVcclxuICAgICAgICAgICAgICAgIGVuZ2luZWVyIGJlY2F1c2UgSSBwb3NzZXNzIGV4Y2VwdGlvbmFsIHByb2JsZW0tc29sdmluZyBza2lsbHMuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBJIGFtIHNwZWNpYWxpemVkIGluIEZ1bGwtU3RhY2sgRGV2ZWxvcG1lbnQgYW5kIENsb3VkIENvbXB1dGluZy4gSVxyXG4gICAgICAgICAgICAgICAgaGF2ZSBjcmVhdGVkIHZhcmlvdXMgZnVsbC1zdGFjayBwcm9qZWN0cyBzdWNoIGFzIHRoaXMgUmVhY3RcclxuICAgICAgICAgICAgICAgIFdlYnNpdGUuIEkgYW0gYWxzbyBhbiBBV1MgQ2VydGlmaWVkIENsb3VkIFByYWN0aXRpb25lciBhbmRcclxuICAgICAgICAgICAgICAgIGhhdmUgZGV2ZWxvcGVkIGEgQ2hhdGJvdCB1c2luZyB2YXJpb3VzIGNsb3VkIHNlcnZpY2VzLlxyXG4gICAgICAgICAgICAgICAgQWRkaXRpb25hbGx5LCBJIGhhdmUgZG9uZSBmcmVlbGFuY2luZyB3b3JrIGZvciBhIHNtYWxsIGJ1c2luZXNzXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBJIGRldmVsb3BlZCBhIHdlYnNpdGUgdG8gZGlzcGxheSBjb250ZW50IGFuZCBzZW5kIGVtYWlsXHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25zLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGJvcmRlciBib3JkZXItd2hpdGUgcm91bmRlZC1mdWxsIHB5LTIgcHgtNCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtZ3JheS04MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIG14LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vSXNoYW5QaGFkdGU3NzYvSXNoYW5QaGFkdGU3NzYvYmxvYi9tYWluL0lzaGFuUGhhZHRlUmVzdW1lLnBkZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlc3VtZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJwcm9maWxlUGljIiwiSGVybyIsInNjcmVlblNpemUiLCJzZXRTY3JlZW5TaXplIiwiaGFuZGxlTWVkaWFRdWVyeUNoYW5nZSIsImV2ZW50IiwibWF0Y2hlcyIsImNvbnNvbGUiLCJsb2ciLCJtZWRpYSIsIm1lZGlhUXVlcnkiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/hero/Hero.jsx\n"));

/***/ })

});