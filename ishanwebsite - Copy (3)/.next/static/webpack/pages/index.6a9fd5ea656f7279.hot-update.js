/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/styles/Home.module.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/styles/Home.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Home_main__EtNt2 {\\r\\n    /* Set the main container to be a flexbox, with items centered vertically and horizontally */\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    /* Use a linear gradient for the background, from a dark purple to a lighter blue */\\r\\n    background: linear-gradient(to bottom right, #9933CC, #0099CC);\\r\\n    /* Set the text color to white */\\r\\n    color: #fff;\\r\\n  }\\r\\n  \\r\\n  /* Define a keyframe animation to make the textbox jump */\\r\\n  /* @keyframes jump {\\r\\n    0% { transform: translateY(0); }\\r\\n    50% { transform: translateY(-10px); }\\r\\n    100% { transform: translateY(0); }\\r\\n  } */\\r\\n  \\r\\n  /* Style the textbox to use the jump animation, and add a red border */\\r\\n  /* .jumpingTextbox {\\r\\n    animation-name: jump;\\r\\n    animation-duration: 1s;\\r\\n    animation-timing-function: ease-in-out;\\r\\n    animation-iteration-count: infinite;\\r\\n  } */\\r\\n\\r\\n\\r\\n\\r\\n  .Home_jump__hwKFe {\\r\\n    animation: Home_jump__hwKFe 1s ease-in-out infinite;\\r\\n    transform-origin: center top;\\r\\n    animation-duration: 2s; /* Slow down the animation */\\r\\n\\r\\n  }\\r\\n  \\r\\n  @keyframes Home_jump__hwKFe {\\r\\n    0% {\\r\\n      transform: translateY(0) scaleY(1);\\r\\n    }\\r\\n    25% {\\r\\n      transform: translateY(-10px) scaleY(0.95);\\r\\n    }\\r\\n    50% {\\r\\n      transform: translateY(0) scaleY(1);\\r\\n    }\\r\\n    75% {\\r\\n      transform: translateY(-5px) ;\\r\\n    }\\r\\n    100% {\\r\\n      transform: translateY(0) scaleY(1);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .Home_scrollToTopButton__8Cu8W {\\r\\n    position: fixed;\\r\\n    bottom: 20px;\\r\\n    right: 20px;\\r\\n    padding: 10px 20px;\\r\\n    background-color: #9933CC;\\r\\n    color: #fff;\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    box-shadow: 0px 2px 10px 10px rgba(0, 0, 0, 0.3);\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  /* .scrollbarContainer {\\r\\n    overflow: auto;\\r\\n    height: 800px; \\r\\n    -webkit-scrollbar-color: #9c3434 #c70f0f;\\r\\n    -webkit-scrollbar-track-background-color: #9c3434;\\r\\n    -webkit-scrollbar-track-border-radius: 10px;\\r\\n    -webkit-scrollbar-thumb-background-color: #6d23dd;\\r\\n    -webkit-scrollbar-thumb-border-radius: 10px;\\r\\n  } */\\r\\n\\r\\n  .Home_NavBar__iyYFy {\\r\\n\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  @media only screen and (max-width: 2048px) {\\r\\n  \\r\\n    .Home_jump__hwKFe {\\r\\n      width: 150px;\\r\\n      height: 150px;\\r\\n    }\\r\\n\\r\\n    .Home_headerText__g6Yhi {\\r\\n      font-size: 60px;\\r\\n    }\\r\\n\\r\\n    .Home_emailIcon__pkAcf {\\r\\n      font-size: 50px;\\r\\n    }\\r\\n\\r\\n    .Home_canadaFlag__MBbQh {\\r\\n      font-size: 50px;\\r\\n    }\\r\\n\\r\\n  }\\r\\n  \\r\\n  @media only screen and (max-width: 1024px) {\\r\\n\\r\\n    .Home_jump__hwKFe {\\r\\n      width: 100px;\\r\\n      height: 100px;\\r\\n    }\\r\\n\\r\\n    .Home_headerText__g6Yhi {\\r\\n      font-size: 40px;\\r\\n    }\\r\\n\\r\\n\\r\\n  }\\r\\n  \\r\\n  @media only screen and (max-width: 512px) {\\r\\n\\r\\n    .Home_jump__hwKFe {\\r\\n      width: 60px;\\r\\n      height: 60px;\\r\\n    }\\r\\n\\r\\n    .Home_headerText__g6Yhi {\\r\\n      font-size: 350px;\\r\\n    }\\r\\n\\r\\n\\r\\n  }\\r\\n  \\r\\n  @media only screen and (max-width: 256px) {\\r\\n\\r\\n    .Home_jump__hwKFe {\\r\\n      width: 40px;\\r\\n      height: 40px;\\r\\n    }\\r\\n\\r\\n    .Home_headerText__g6Yhi {\\r\\n      font-size: 30px;\\r\\n    }\\r\\n\\r\\n\\r\\n  }\\r\\n  \\r\\n  \\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/Home.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,4FAA4F;IAC5F,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,mFAAmF;IACnF,8DAA8D;IAC9D,gCAAgC;IAChC,WAAW;EACb;;EAEA,yDAAyD;EACzD;;;;KAIG;;EAEH,sEAAsE;EACtE;;;;;KAKG;;;;EAIH;IACE,mDAAuC;IACvC,4BAA4B;IAC5B,sBAAsB,EAAE,4BAA4B;;EAEtD;;EAEA;IACE;MACE,kCAAkC;IACpC;IACA;MACE,yCAAyC;IAC3C;IACA;MACE,kCAAkC;IACpC;IACA;MACE,4BAA4B;IAC9B;IACA;MACE,kCAAkC;IACpC;EACF;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gDAAgD;IAChD,iBAAiB;IACjB,eAAe;EACjB;;EAEA;;;;;;;;KAQG;;EAEH;;IAEE,aAAa;IACb,WAAW;EACb;;EAEA;;IAEE;MACE,YAAY;MACZ,aAAa;IACf;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,eAAe;IACjB;;EAEF;;EAEA;;IAEE;MACE,YAAY;MACZ,aAAa;IACf;;IAEA;MACE,eAAe;IACjB;;;EAGF;;EAEA;;IAEE;MACE,WAAW;MACX,YAAY;IACd;;IAEA;MACE,gBAAgB;IAClB;;;EAGF;;EAEA;;IAEE;MACE,WAAW;MACX,YAAY;IACd;;IAEA;MACE,eAAe;IACjB;;;EAGF\",\"sourcesContent\":[\".main {\\r\\n    /* Set the main container to be a flexbox, with items centered vertically and horizontally */\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    /* Use a linear gradient for the background, from a dark purple to a lighter blue */\\r\\n    background: linear-gradient(to bottom right, #9933CC, #0099CC);\\r\\n    /* Set the text color to white */\\r\\n    color: #fff;\\r\\n  }\\r\\n  \\r\\n  /* Define a keyframe animation to make the textbox jump */\\r\\n  /* @keyframes jump {\\r\\n    0% { transform: translateY(0); }\\r\\n    50% { transform: translateY(-10px); }\\r\\n    100% { transform: translateY(0); }\\r\\n  } */\\r\\n  \\r\\n  /* Style the textbox to use the jump animation, and add a red border */\\r\\n  /* .jumpingTextbox {\\r\\n    animation-name: jump;\\r\\n    animation-duration: 1s;\\r\\n    animation-timing-function: ease-in-out;\\r\\n    animation-iteration-count: infinite;\\r\\n  } */\\r\\n\\r\\n\\r\\n\\r\\n  .jump {\\r\\n    animation: jump 1s ease-in-out infinite;\\r\\n    transform-origin: center top;\\r\\n    animation-duration: 2s; /* Slow down the animation */\\r\\n\\r\\n  }\\r\\n  \\r\\n  @keyframes jump {\\r\\n    0% {\\r\\n      transform: translateY(0) scaleY(1);\\r\\n    }\\r\\n    25% {\\r\\n      transform: translateY(-10px) scaleY(0.95);\\r\\n    }\\r\\n    50% {\\r\\n      transform: translateY(0) scaleY(1);\\r\\n    }\\r\\n    75% {\\r\\n      transform: translateY(-5px) ;\\r\\n    }\\r\\n    100% {\\r\\n      transform: translateY(0) scaleY(1);\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .scrollToTopButton {\\r\\n    position: fixed;\\r\\n    bottom: 20px;\\r\\n    right: 20px;\\r\\n    padding: 10px 20px;\\r\\n    background-color: #9933CC;\\r\\n    color: #fff;\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    box-shadow: 0px 2px 10px 10px rgba(0, 0, 0, 0.3);\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  /* .scrollbarContainer {\\r\\n    overflow: auto;\\r\\n    height: 800px; \\r\\n    -webkit-scrollbar-color: #9c3434 #c70f0f;\\r\\n    -webkit-scrollbar-track-background-color: #9c3434;\\r\\n    -webkit-scrollbar-track-border-radius: 10px;\\r\\n    -webkit-scrollbar-thumb-background-color: #6d23dd;\\r\\n    -webkit-scrollbar-thumb-border-radius: 10px;\\r\\n  } */\\r\\n\\r\\n  .NavBar {\\r\\n\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  @media only screen and (max-width: 2048px) {\\r\\n  \\r\\n    .jump {\\r\\n      width: 150px;\\r\\n      height: 150px;\\r\\n    }\\r\\n\\r\\n    .headerText {\\r\\n      font-size: 60px;\\r\\n    }\\r\\n\\r\\n    .emailIcon {\\r\\n      font-size: 50px;\\r\\n    }\\r\\n\\r\\n    .canadaFlag {\\r\\n      font-size: 50px;\\r\\n    }\\r\\n\\r\\n  }\\r\\n  \\r\\n  @media only screen and (max-width: 1024px) {\\r\\n\\r\\n    .jump {\\r\\n      width: 100px;\\r\\n      height: 100px;\\r\\n    }\\r\\n\\r\\n    .headerText {\\r\\n      font-size: 40px;\\r\\n    }\\r\\n\\r\\n\\r\\n  }\\r\\n  \\r\\n  @media only screen and (max-width: 512px) {\\r\\n\\r\\n    .jump {\\r\\n      width: 60px;\\r\\n      height: 60px;\\r\\n    }\\r\\n\\r\\n    .headerText {\\r\\n      font-size: 350px;\\r\\n    }\\r\\n\\r\\n\\r\\n  }\\r\\n  \\r\\n  @media only screen and (max-width: 256px) {\\r\\n\\r\\n    .jump {\\r\\n      width: 40px;\\r\\n      height: 40px;\\r\\n    }\\r\\n\\r\\n    .headerText {\\r\\n      font-size: 30px;\\r\\n    }\\r\\n\\r\\n\\r\\n  }\\r\\n  \\r\\n  \\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"Home_main__EtNt2\",\n\t\"jump\": \"Home_jump__hwKFe\",\n\t\"scrollToTopButton\": \"Home_scrollToTopButton__8Cu8W\",\n\t\"NavBar\": \"Home_NavBar__iyYFy\",\n\t\"headerText\": \"Home_headerText__g6Yhi\",\n\t\"emailIcon\": \"Home_emailIcon__pkAcf\",\n\t\"canadaFlag\": \"Home_canadaFlag__MBbQh\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLDZEQUE2RCwySEFBMkgsK0JBQStCLDRCQUE0QixnQ0FBZ0MsbUtBQW1LLDZEQUE2RCxPQUFPLGdHQUFnRyxhQUFhLDJCQUEyQixjQUFjLCtCQUErQixlQUFlLDJCQUEyQixRQUFRLCtHQUErRyw2QkFBNkIsK0JBQStCLCtDQUErQyw0Q0FBNEMsUUFBUSx1Q0FBdUMsNERBQTRELHFDQUFxQyxnQ0FBZ0Msd0NBQXdDLHlDQUF5QyxZQUFZLDZDQUE2QyxTQUFTLGFBQWEsb0RBQW9ELFNBQVMsYUFBYSw2Q0FBNkMsU0FBUyxhQUFhLHVDQUF1QyxTQUFTLGNBQWMsNkNBQTZDLFNBQVMsT0FBTywwQ0FBMEMsd0JBQXdCLHFCQUFxQixvQkFBb0IsMkJBQTJCLGtDQUFrQyxvQkFBb0IscUJBQXFCLDJCQUEyQix5REFBeUQsMEJBQTBCLHdCQUF3QixPQUFPLGtDQUFrQyx1QkFBdUIsdUJBQXVCLGlEQUFpRCwwREFBMEQsb0RBQW9ELDBEQUEwRCxvREFBb0QsUUFBUSxpQ0FBaUMsMEJBQTBCLG9CQUFvQixPQUFPLHNEQUFzRCxpQ0FBaUMsdUJBQXVCLHdCQUF3QixTQUFTLHFDQUFxQywwQkFBMEIsU0FBUyxvQ0FBb0MsMEJBQTBCLFNBQVMscUNBQXFDLDBCQUEwQixTQUFTLFdBQVcsd0RBQXdELCtCQUErQix1QkFBdUIsd0JBQXdCLFNBQVMscUNBQXFDLDBCQUEwQixTQUFTLGVBQWUsdURBQXVELCtCQUErQixzQkFBc0IsdUJBQXVCLFNBQVMscUNBQXFDLDJCQUEyQixTQUFTLGVBQWUsdURBQXVELCtCQUErQixzQkFBc0IsdUJBQXVCLFNBQVMscUNBQXFDLDBCQUEwQixTQUFTLGVBQWUsdUJBQXVCLDJGQUEyRixZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksU0FBUyxNQUFNLFlBQVksVUFBVSxRQUFRLEtBQUssWUFBWSxhQUFhLDBCQUEwQixPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsUUFBUSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsUUFBUSxnQ0FBZ0MsMkhBQTJILCtCQUErQiw0QkFBNEIsZ0NBQWdDLG1LQUFtSyw2REFBNkQsT0FBTyxnR0FBZ0csYUFBYSwyQkFBMkIsY0FBYywrQkFBK0IsZUFBZSwyQkFBMkIsUUFBUSwrR0FBK0csNkJBQTZCLCtCQUErQiwrQ0FBK0MsNENBQTRDLFFBQVEsMkJBQTJCLGdEQUFnRCxxQ0FBcUMsZ0NBQWdDLHdDQUF3Qyw2QkFBNkIsWUFBWSw2Q0FBNkMsU0FBUyxhQUFhLG9EQUFvRCxTQUFTLGFBQWEsNkNBQTZDLFNBQVMsYUFBYSx1Q0FBdUMsU0FBUyxjQUFjLDZDQUE2QyxTQUFTLE9BQU8sOEJBQThCLHdCQUF3QixxQkFBcUIsb0JBQW9CLDJCQUEyQixrQ0FBa0Msb0JBQW9CLHFCQUFxQiwyQkFBMkIseURBQXlELDBCQUEwQix3QkFBd0IsT0FBTyxrQ0FBa0MsdUJBQXVCLHVCQUF1QixpREFBaUQsMERBQTBELG9EQUFvRCwwREFBMEQsb0RBQW9ELFFBQVEscUJBQXFCLDBCQUEwQixvQkFBb0IsT0FBTyxzREFBc0QscUJBQXFCLHVCQUF1Qix3QkFBd0IsU0FBUyx5QkFBeUIsMEJBQTBCLFNBQVMsd0JBQXdCLDBCQUEwQixTQUFTLHlCQUF5QiwwQkFBMEIsU0FBUyxXQUFXLHdEQUF3RCxtQkFBbUIsdUJBQXVCLHdCQUF3QixTQUFTLHlCQUF5QiwwQkFBMEIsU0FBUyxlQUFlLHVEQUF1RCxtQkFBbUIsc0JBQXNCLHVCQUF1QixTQUFTLHlCQUF5QiwyQkFBMkIsU0FBUyxlQUFlLHVEQUF1RCxtQkFBbUIsc0JBQXNCLHVCQUF1QixTQUFTLHlCQUF5QiwwQkFBMEIsU0FBUyxlQUFlLG1DQUFtQztBQUNyZ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzcz9mZDE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSG9tZV9tYWluX19FdE50MiB7XFxyXFxuICAgIC8qIFNldCB0aGUgbWFpbiBjb250YWluZXIgdG8gYmUgYSBmbGV4Ym94LCB3aXRoIGl0ZW1zIGNlbnRlcmVkIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLyogVXNlIGEgbGluZWFyIGdyYWRpZW50IGZvciB0aGUgYmFja2dyb3VuZCwgZnJvbSBhIGRhcmsgcHVycGxlIHRvIGEgbGlnaHRlciBibHVlICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OTMzQ0MsICMwMDk5Q0MpO1xcclxcbiAgICAvKiBTZXQgdGhlIHRleHQgY29sb3IgdG8gd2hpdGUgKi9cXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIERlZmluZSBhIGtleWZyYW1lIGFuaW1hdGlvbiB0byBtYWtlIHRoZSB0ZXh0Ym94IGp1bXAgKi9cXHJcXG4gIC8qIEBrZXlmcmFtZXMganVtcCB7XFxyXFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxyXFxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cXHJcXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcclxcbiAgfSAqL1xcclxcbiAgXFxyXFxuICAvKiBTdHlsZSB0aGUgdGV4dGJveCB0byB1c2UgdGhlIGp1bXAgYW5pbWF0aW9uLCBhbmQgYWRkIGEgcmVkIGJvcmRlciAqL1xcclxcbiAgLyogLmp1bXBpbmdUZXh0Ym94IHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGp1bXA7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIC5Ib21lX2p1bXBfX2h3S0ZlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBIb21lX2p1bXBfX2h3S0ZlIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAvKiBTbG93IGRvd24gdGhlIGFuaW1hdGlvbiAqL1xcclxcblxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIEhvbWVfanVtcF9faHdLRmUge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKTtcXHJcXG4gICAgfVxcclxcbiAgICAyNSUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGVZKDAuOTUpO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKTtcXHJcXG4gICAgfVxcclxcbiAgICA3NSUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLkhvbWVfc2Nyb2xsVG9Ub3BCdXR0b25fXzhDdThXIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDIwcHg7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTMzQ0M7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogLnNjcm9sbGJhckNvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDgwMHB4OyBcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItY29sb3I6ICM5YzM0MzQgI2M3MGYwZjtcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItdHJhY2stYmFja2dyb3VuZC1jb2xvcjogIzljMzQzNDtcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItdHJhY2stYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItdGh1bWItYmFja2dyb3VuZC1jb2xvcjogIzZkMjNkZDtcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItdGh1bWItYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4gIC5Ib21lX05hdkJhcl9faXlZRnkge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjA0OHB4KSB7XFxyXFxuICBcXHJcXG4gICAgLkhvbWVfanVtcF9faHdLRmUge1xcclxcbiAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5Ib21lX2hlYWRlclRleHRfX2c2WWhpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLkhvbWVfZW1haWxJY29uX19wa0FjZiB7XFxyXFxuICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5Ib21lX2NhbmFkYUZsYWdfX01CYlFoIHtcXHJcXG4gICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHJcXG4gICAgLkhvbWVfanVtcF9faHdLRmUge1xcclxcbiAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5Ib21lX2hlYWRlclRleHRfX2c2WWhpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTJweCkge1xcclxcblxcclxcbiAgICAuSG9tZV9qdW1wX19od0tGZSB7XFxyXFxuICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5Ib21lX2hlYWRlclRleHRfX2c2WWhpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDM1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjU2cHgpIHtcXHJcXG5cXHJcXG4gICAgLkhvbWVfanVtcF9faHdLRmUge1xcclxcbiAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuSG9tZV9oZWFkZXJUZXh0X19nNlloaSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRGQUE0RjtJQUM1RixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUZBQW1GO0lBQ25GLDhEQUE4RDtJQUM5RCxnQ0FBZ0M7SUFDaEMsV0FBVztFQUNiOztFQUVBLHlEQUF5RDtFQUN6RDs7OztLQUlHOztFQUVILHNFQUFzRTtFQUN0RTs7Ozs7S0FLRzs7OztFQUlIO0lBQ0UsbURBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QixzQkFBc0IsRUFBRSw0QkFBNEI7O0VBRXREOztFQUVBO0lBQ0U7TUFDRSxrQ0FBa0M7SUFDcEM7SUFDQTtNQUNFLHlDQUF5QztJQUMzQztJQUNBO01BQ0Usa0NBQWtDO0lBQ3BDO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7SUFDQTtNQUNFLGtDQUFrQztJQUNwQztFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnREFBZ0Q7SUFDaEQsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7Ozs7Ozs7O0tBUUc7O0VBRUg7O0lBRUUsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTs7SUFFRTtNQUNFLFlBQVk7TUFDWixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0VBRUY7O0VBRUE7O0lBRUU7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmOztJQUVBO01BQ0UsZUFBZTtJQUNqQjs7O0VBR0Y7O0VBRUE7O0lBRUU7TUFDRSxXQUFXO01BQ1gsWUFBWTtJQUNkOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOzs7RUFHRjs7RUFFQTs7SUFFRTtNQUNFLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOzs7RUFHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxyXFxuICAgIC8qIFNldCB0aGUgbWFpbiBjb250YWluZXIgdG8gYmUgYSBmbGV4Ym94LCB3aXRoIGl0ZW1zIGNlbnRlcmVkIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLyogVXNlIGEgbGluZWFyIGdyYWRpZW50IGZvciB0aGUgYmFja2dyb3VuZCwgZnJvbSBhIGRhcmsgcHVycGxlIHRvIGEgbGlnaHRlciBibHVlICovXFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OTMzQ0MsICMwMDk5Q0MpO1xcclxcbiAgICAvKiBTZXQgdGhlIHRleHQgY29sb3IgdG8gd2hpdGUgKi9cXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIERlZmluZSBhIGtleWZyYW1lIGFuaW1hdGlvbiB0byBtYWtlIHRoZSB0ZXh0Ym94IGp1bXAgKi9cXHJcXG4gIC8qIEBrZXlmcmFtZXMganVtcCB7XFxyXFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxyXFxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cXHJcXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcclxcbiAgfSAqL1xcclxcbiAgXFxyXFxuICAvKiBTdHlsZSB0aGUgdGV4dGJveCB0byB1c2UgdGhlIGp1bXAgYW5pbWF0aW9uLCBhbmQgYWRkIGEgcmVkIGJvcmRlciAqL1xcclxcbiAgLyogLmp1bXBpbmdUZXh0Ym94IHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGp1bXA7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gIC5qdW1wIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBqdW1wIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wO1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzOyAvKiBTbG93IGRvd24gdGhlIGFuaW1hdGlvbiAqL1xcclxcblxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGp1bXAge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKTtcXHJcXG4gICAgfVxcclxcbiAgICAyNSUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgc2NhbGVZKDAuOTUpO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKTtcXHJcXG4gICAgfVxcclxcbiAgICA3NSUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnNjcm9sbFRvVG9wQnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDIwcHg7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTMzQ0M7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogLnNjcm9sbGJhckNvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDgwMHB4OyBcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItY29sb3I6ICM5YzM0MzQgI2M3MGYwZjtcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItdHJhY2stYmFja2dyb3VuZC1jb2xvcjogIzljMzQzNDtcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItdHJhY2stYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItdGh1bWItYmFja2dyb3VuZC1jb2xvcjogIzZkMjNkZDtcXHJcXG4gICAgLXdlYmtpdC1zY3JvbGxiYXItdGh1bWItYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH0gKi9cXHJcXG5cXHJcXG4gIC5OYXZCYXIge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjA0OHB4KSB7XFxyXFxuICBcXHJcXG4gICAgLmp1bXAge1xcclxcbiAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJUZXh0IHtcXHJcXG4gICAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVtYWlsSWNvbiB7XFxyXFxuICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYW5hZGFGbGFnIHtcXHJcXG4gICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHJcXG4gICAgLmp1bXAge1xcclxcbiAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJUZXh0IHtcXHJcXG4gICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTJweCkge1xcclxcblxcclxcbiAgICAuanVtcCB7XFxyXFxuICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXJUZXh0IHtcXHJcXG4gICAgICBmb250LXNpemU6IDM1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjU2cHgpIHtcXHJcXG5cXHJcXG4gICAgLmp1bXAge1xcclxcbiAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyVGV4dCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fX0V0TnQyXCIsXG5cdFwianVtcFwiOiBcIkhvbWVfanVtcF9faHdLRmVcIixcblx0XCJzY3JvbGxUb1RvcEJ1dHRvblwiOiBcIkhvbWVfc2Nyb2xsVG9Ub3BCdXR0b25fXzhDdThXXCIsXG5cdFwiTmF2QmFyXCI6IFwiSG9tZV9OYXZCYXJfX2l5WUZ5XCIsXG5cdFwiaGVhZGVyVGV4dFwiOiBcIkhvbWVfaGVhZGVyVGV4dF9fZzZZaGlcIixcblx0XCJlbWFpbEljb25cIjogXCJIb21lX2VtYWlsSWNvbl9fcGtBY2ZcIixcblx0XCJjYW5hZGFGbGFnXCI6IFwiSG9tZV9jYW5hZGFGbGFnX19NQmJRaFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/styles/Home.module.css\n"));

/***/ })

});