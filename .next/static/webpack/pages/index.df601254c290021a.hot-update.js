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

/***/ "./components/ShoppingCartButton/OpenCartButton.tsx":
/*!**********************************************************!*\
  !*** ./components/ShoppingCartButton/OpenCartButton.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OpenCartButton\": function() { return /* binding */ OpenCartButton; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Joon_Marion_Desktop_freelas_mks_frontend_challenge_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/ShoppingCartButton/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Joon Marion\\\\Desktop\\\\freelas\\\\mks-frontend-challenge\\\\components\\\\ShoppingCartButton\\\\OpenCartButton.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar retrieveDataFromLocalStorage = function retrieveDataFromLocalStorage() {\n  var storedData = localStorage.getItem('cart');\n  return storedData ? JSON.parse(storedData) : [];\n};\n\nvar cart = retrieveDataFromLocalStorage();\nvar OpenCartButton = function OpenCartButton() {\n  _s();\n\n  var _useContext = useContext(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__.OpenContext),\n      _useContext2 = (0,C_Users_Joon_Marion_Desktop_freelas_mks_frontend_challenge_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useContext, 2),\n      open = _useContext2[0],\n      setOpen = _useContext2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.OpenCartContainer, {\n    onClick: onClick,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.OpenCartImage, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this), \"(\", cart.length, \")\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OpenCartButton, \"C55DjMUVlwXqBxP3yDdS8czZfZw=\");\n\n_c = OpenCartButton;\n\nvar _c;\n\n$RefreshReg$(_c, \"OpenCartButton\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3BwaW5nQ2FydEJ1dHRvbi9PcGVuQ2FydEJ1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBRUEsSUFBTUcsNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixHQUFrQjtFQUNuRCxJQUFNQyxVQUFVLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFuQjtFQUNBLE9BQU9GLFVBQVUsR0FBR0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLFVBQVgsQ0FBSCxHQUE0QixFQUE3QztBQUNILENBSEQ7O0FBS0EsSUFBTUssSUFBSSxHQUFHTiw0QkFBNEIsRUFBekM7QUFFTyxJQUFNTyxjQUF3QixHQUFHLFNBQTNCQSxjQUEyQixHQUFNO0VBQUE7O0VBQzFDLGtCQUF3QkMsVUFBVSxDQUFDWCx1REFBRCxDQUFsQztFQUFBO0VBQUEsSUFBT1ksSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBRUEsb0JBQ0ksOERBQUMsc0RBQUQ7SUFBbUIsT0FBTyxFQUFFQyxPQUE1QjtJQUFBLHdCQUNJLDhEQUFDLGtEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FESixPQUN1QkwsSUFBSSxDQUFDTSxNQUQ1QjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FESjtBQUtILENBUk07O0dBQU1MOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Nob3BwaW5nQ2FydEJ1dHRvbi9PcGVuQ2FydEJ1dHRvbi50c3g/MDI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpQnV0dG9uIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pQnV0dG9uJztcclxuaW1wb3J0IHsgaVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lQcm9kdWN0JztcclxuaW1wb3J0IHsgT3BlbkNvbnRleHQgfSBmcm9tICcuLi9OYXZiYXIvTmF2YmFyJztcclxuaW1wb3J0IHsgT3BlbkNhcnRDb250YWluZXIsIE9wZW5DYXJ0SW1hZ2UgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCByZXRyaWV2ZURhdGFGcm9tTG9jYWxTdG9yYWdlID0gKCk6IGlQcm9kdWN0W10gPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XHJcbiAgICByZXR1cm4gc3RvcmVkRGF0YSA/IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSkgOiBbXTtcclxufTtcclxuXHJcbmNvbnN0IGNhcnQgPSByZXRyaWV2ZURhdGFGcm9tTG9jYWxTdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgY29uc3QgT3BlbkNhcnRCdXR0b246IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlQ29udGV4dChPcGVuQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8T3BlbkNhcnRDb250YWluZXIgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgIDxPcGVuQ2FydEltYWdlIC8+KHtjYXJ0Lmxlbmd0aH0pXHJcbiAgICAgICAgPC9PcGVuQ2FydENvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJPcGVuQ29udGV4dCIsIk9wZW5DYXJ0Q29udGFpbmVyIiwiT3BlbkNhcnRJbWFnZSIsInJldHJpZXZlRGF0YUZyb21Mb2NhbFN0b3JhZ2UiLCJzdG9yZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNhcnQiLCJPcGVuQ2FydEJ1dHRvbiIsInVzZUNvbnRleHQiLCJvcGVuIiwic2V0T3BlbiIsIm9uQ2xpY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ShoppingCartButton/OpenCartButton.tsx\n"));

/***/ })

});