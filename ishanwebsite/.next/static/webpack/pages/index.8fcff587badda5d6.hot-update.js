/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/pages/components/extra/ToggleButton.module.css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/pages/components/extra/ToggleButton.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* CSS code for toggle button component */\\r\\n.ToggleButton_toggleButton__QIfl8 {\\r\\n    display: inline-flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n    -webkit-user-select: none;\\r\\n       -moz-user-select: none;\\r\\n            user-select: none;\\r\\n    font-size: 14px;\\r\\n  }\\r\\n  \\r\\n  .ToggleButton_toggleButtonLabel__iZyk7 {\\r\\n    margin-left: 10px;\\r\\n  }\\r\\n  \\r\\n  .ToggleButton_toggle-button-switch__upL45 {\\r\\n    display: inline-flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 60px;\\r\\n    height: 30px;\\r\\n    border-radius: 15px;\\r\\n    background-color: #ccc;\\r\\n    transition: background-color 0.2s ease-in-out;\\r\\n  }\\r\\n  \\r\\n  .ToggleButton_toggle-button-switch-knob__TetW7 {\\r\\n    width: 26px;\\r\\n    height: 26px;\\r\\n    border-radius: 50%;\\r\\n    background-color: white;\\r\\n    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\\r\\n    transition: transform 0.2s ease-in-out;\\r\\n  }\\r\\n  \\r\\n  .ToggleButton_toggle-button-switch__upL45.ToggleButton_on__DRTW_ {\\r\\n    background-color: #77dd77;\\r\\n  }\\r\\n  \\r\\n  .ToggleButton_toggle-button-switch__upL45.ToggleButton_off__w0EK_ {\\r\\n    background-color: #ff6961;\\r\\n  }\\r\\n  \\r\\n  .ToggleButton_toggle-button-switch__upL45.ToggleButton_on__DRTW_ .ToggleButton_toggle-button-switch-knob__TetW7 {\\r\\n    transform: translateX(30px);\\r\\n  }\\r\\n  \\r\\n  .ToggleButton_toggle-button-switch__upL45.ToggleButton_off__w0EK_ .ToggleButton_toggle-button-switch-knob__TetW7 {\\r\\n    transform: translateX(4px);\\r\\n  }\\r\\n  \", \"\",{\"version\":3,\"sources\":[\"webpack://src/pages/components/extra/ToggleButton.module.css\"],\"names\":[],\"mappings\":\"AAAA,yCAAyC;AACzC;IACI,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;IACf,yBAAiB;OAAjB,sBAAiB;YAAjB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,6CAA6C;EAC/C;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,0CAA0C;IAC1C,sCAAsC;EACxC;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,0BAA0B;EAC5B\",\"sourcesContent\":[\"/* CSS code for toggle button component */\\r\\n.toggleButton {\\r\\n    display: inline-flex;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n    user-select: none;\\r\\n    font-size: 14px;\\r\\n  }\\r\\n  \\r\\n  .toggleButtonLabel {\\r\\n    margin-left: 10px;\\r\\n  }\\r\\n  \\r\\n  .toggle-button-switch {\\r\\n    display: inline-flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 60px;\\r\\n    height: 30px;\\r\\n    border-radius: 15px;\\r\\n    background-color: #ccc;\\r\\n    transition: background-color 0.2s ease-in-out;\\r\\n  }\\r\\n  \\r\\n  .toggle-button-switch-knob {\\r\\n    width: 26px;\\r\\n    height: 26px;\\r\\n    border-radius: 50%;\\r\\n    background-color: white;\\r\\n    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\\r\\n    transition: transform 0.2s ease-in-out;\\r\\n  }\\r\\n  \\r\\n  .toggle-button-switch.on {\\r\\n    background-color: #77dd77;\\r\\n  }\\r\\n  \\r\\n  .toggle-button-switch.off {\\r\\n    background-color: #ff6961;\\r\\n  }\\r\\n  \\r\\n  .toggle-button-switch.on .toggle-button-switch-knob {\\r\\n    transform: translateX(30px);\\r\\n  }\\r\\n  \\r\\n  .toggle-button-switch.off .toggle-button-switch-knob {\\r\\n    transform: translateX(4px);\\r\\n  }\\r\\n  \"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"toggleButton\": \"ToggleButton_toggleButton__QIfl8\",\n\t\"toggleButtonLabel\": \"ToggleButton_toggleButtonLabel__iZyk7\",\n\t\"toggle-button-switch\": \"ToggleButton_toggle-button-switch__upL45\",\n\t\"toggle-button-switch-knob\": \"ToggleButton_toggle-button-switch-knob__TetW7\",\n\t\"on\": \"ToggleButton_on__DRTW_\",\n\t\"off\": \"ToggleButton_off__w0EK_\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvZXh0cmEvVG9nZ2xlQnV0dG9uLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0S0FBd0Y7QUFDbEk7QUFDQTtBQUNBLDJIQUEySCw2QkFBNkIsNEJBQTRCLHdCQUF3QixrQ0FBa0Msa0NBQWtDLGtDQUFrQyx3QkFBd0IsT0FBTyxvREFBb0QsMEJBQTBCLE9BQU8sdURBQXVELDZCQUE2Qiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixxQkFBcUIsNEJBQTRCLCtCQUErQixzREFBc0QsT0FBTyw0REFBNEQsb0JBQW9CLHFCQUFxQiwyQkFBMkIsZ0NBQWdDLG1EQUFtRCwrQ0FBK0MsT0FBTyw4RUFBOEUsa0NBQWtDLE9BQU8sK0VBQStFLGtDQUFrQyxPQUFPLDZIQUE2SCxvQ0FBb0MsT0FBTyw4SEFBOEgsbUNBQW1DLE9BQU8sYUFBYSwwSEFBMEgsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLHVGQUF1Riw2QkFBNkIsNEJBQTRCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLE9BQU8sZ0NBQWdDLDBCQUEwQixPQUFPLG1DQUFtQyw2QkFBNkIsNEJBQTRCLGdDQUFnQyxvQkFBb0IscUJBQXFCLDRCQUE0QiwrQkFBK0Isc0RBQXNELE9BQU8sd0NBQXdDLG9CQUFvQixxQkFBcUIsMkJBQTJCLGdDQUFnQyxtREFBbUQsK0NBQStDLE9BQU8sc0NBQXNDLGtDQUFrQyxPQUFPLHVDQUF1QyxrQ0FBa0MsT0FBTyxpRUFBaUUsb0NBQW9DLE9BQU8sa0VBQWtFLG1DQUFtQyxPQUFPLHlCQUF5QjtBQUM3dkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvZXh0cmEvVG9nZ2xlQnV0dG9uLm1vZHVsZS5jc3M/NjkyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ1NTIGNvZGUgZm9yIHRvZ2dsZSBidXR0b24gY29tcG9uZW50ICovXFxyXFxuLlRvZ2dsZUJ1dHRvbl90b2dnbGVCdXR0b25fX1FJZmw4IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuVG9nZ2xlQnV0dG9uX3RvZ2dsZUJ1dHRvbkxhYmVsX19pWnlrNyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuVG9nZ2xlQnV0dG9uX3RvZ2dsZS1idXR0b24tc3dpdGNoX191cEw0NSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuVG9nZ2xlQnV0dG9uX3RvZ2dsZS1idXR0b24tc3dpdGNoLWtub2JfX1RldFc3IHtcXHJcXG4gICAgd2lkdGg6IDI2cHg7XFxyXFxuICAgIGhlaWdodDogMjZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLlRvZ2dsZUJ1dHRvbl90b2dnbGUtYnV0dG9uLXN3aXRjaF9fdXBMNDUuVG9nZ2xlQnV0dG9uX29uX19EUlRXXyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2RkNzc7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5Ub2dnbGVCdXR0b25fdG9nZ2xlLWJ1dHRvbi1zd2l0Y2hfX3VwTDQ1LlRvZ2dsZUJ1dHRvbl9vZmZfX3cwRUtfIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjk2MTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLlRvZ2dsZUJ1dHRvbl90b2dnbGUtYnV0dG9uLXN3aXRjaF9fdXBMNDUuVG9nZ2xlQnV0dG9uX29uX19EUlRXXyAuVG9nZ2xlQnV0dG9uX3RvZ2dsZS1idXR0b24tc3dpdGNoLWtub2JfX1RldFc3IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuVG9nZ2xlQnV0dG9uX3RvZ2dsZS1idXR0b24tc3dpdGNoX191cEw0NS5Ub2dnbGVCdXR0b25fb2ZmX193MEVLXyAuVG9nZ2xlQnV0dG9uX3RvZ2dsZS1idXR0b24tc3dpdGNoLWtub2JfX1RldFc3IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3BhZ2VzL2NvbXBvbmVudHMvZXh0cmEvVG9nZ2xlQnV0dG9uLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEseUNBQXlDO0FBQ3pDO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQWlCO09BQWpCLHNCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgY29kZSBmb3IgdG9nZ2xlIGJ1dHRvbiBjb21wb25lbnQgKi9cXHJcXG4udG9nZ2xlQnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRvZ2dsZUJ1dHRvbkxhYmVsIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b2dnbGUtYnV0dG9uLXN3aXRjaCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudG9nZ2xlLWJ1dHRvbi1zd2l0Y2gta25vYiB7XFxyXFxuICAgIHdpZHRoOiAyNnB4O1xcclxcbiAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b2dnbGUtYnV0dG9uLXN3aXRjaC5vbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2RkNzc7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b2dnbGUtYnV0dG9uLXN3aXRjaC5vZmYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2OTYxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudG9nZ2xlLWJ1dHRvbi1zd2l0Y2gub24gLnRvZ2dsZS1idXR0b24tc3dpdGNoLWtub2Ige1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b2dnbGUtYnV0dG9uLXN3aXRjaC5vZmYgLnRvZ2dsZS1idXR0b24tc3dpdGNoLWtub2Ige1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcXHJcXG4gIH1cXHJcXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRvZ2dsZUJ1dHRvblwiOiBcIlRvZ2dsZUJ1dHRvbl90b2dnbGVCdXR0b25fX1FJZmw4XCIsXG5cdFwidG9nZ2xlQnV0dG9uTGFiZWxcIjogXCJUb2dnbGVCdXR0b25fdG9nZ2xlQnV0dG9uTGFiZWxfX2laeWs3XCIsXG5cdFwidG9nZ2xlLWJ1dHRvbi1zd2l0Y2hcIjogXCJUb2dnbGVCdXR0b25fdG9nZ2xlLWJ1dHRvbi1zd2l0Y2hfX3VwTDQ1XCIsXG5cdFwidG9nZ2xlLWJ1dHRvbi1zd2l0Y2gta25vYlwiOiBcIlRvZ2dsZUJ1dHRvbl90b2dnbGUtYnV0dG9uLXN3aXRjaC1rbm9iX19UZXRXN1wiLFxuXHRcIm9uXCI6IFwiVG9nZ2xlQnV0dG9uX29uX19EUlRXX1wiLFxuXHRcIm9mZlwiOiBcIlRvZ2dsZUJ1dHRvbl9vZmZfX3cwRUtfXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/pages/components/extra/ToggleButton.module.css\n"));

/***/ })

});