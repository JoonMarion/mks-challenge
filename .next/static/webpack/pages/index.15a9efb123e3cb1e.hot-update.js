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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OpenCartButton\": function() { return /* binding */ OpenCartButton; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/ShoppingCartButton/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Joon Marion\\\\Desktop\\\\freelas\\\\mks-frontend-challenge\\\\components\\\\ShoppingCartButton\\\\OpenCartButton.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar retrieveDataFromLocalStorage = function retrieveDataFromLocalStorage() {\n  var storedData = localStorage.getItem('cart');\n  return storedData ? JSON.parse(storedData) : [];\n};\n\nvar cart = retrieveDataFromLocalStorage();\nvar OpenCartButton = function OpenCartButton() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__.OpenContext),\n      open = _useContext[0],\n      setOpen = _useContext[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.OpenCartContainer, {\n    onClick: onClick,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.OpenCartImage, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this), \"(\", cart.length, \")\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OpenCartButton, \"C55DjMUVlwXqBxP3yDdS8czZfZw=\");\n\n_c = OpenCartButton;\n\nvar _c;\n\n$RefreshReg$(_c, \"OpenCartButton\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3BwaW5nQ2FydEJ1dHRvbi9PcGVuQ2FydEJ1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7OztBQUVBLElBQU1JLDRCQUE0QixHQUFHLFNBQS9CQSw0QkFBK0IsR0FBa0I7RUFDbkQsSUFBTUMsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBbkI7RUFDQSxPQUFPRixVQUFVLEdBQUdHLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixVQUFYLENBQUgsR0FBNEIsRUFBN0M7QUFDSCxDQUhEOztBQUtBLElBQU1LLElBQUksR0FBR04sNEJBQTRCLEVBQXpDO0FBRU8sSUFBTU8sY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsR0FBTTtFQUFBOztFQUMxQyxrQkFBd0JYLGlEQUFVLENBQUNDLHVEQUFELENBQWxDO0VBQUEsSUFBT1csSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBRUEsb0JBQ0ksOERBQUMsc0RBQUQ7SUFBbUIsT0FBTyxFQUFFQyxPQUE1QjtJQUFBLHdCQUNJLDhEQUFDLGtEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FESixPQUN1QkosSUFBSSxDQUFDSyxNQUQ1QjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FESjtBQUtILENBUk07O0dBQU1KOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Nob3BwaW5nQ2FydEJ1dHRvbi9PcGVuQ2FydEJ1dHRvbi50c3g/MDI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBpUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaVByb2R1Y3QnO1xyXG5pbXBvcnQgeyBPcGVuQ29udGV4dCB9IGZyb20gJy4uL05hdmJhci9OYXZiYXInO1xyXG5pbXBvcnQgeyBPcGVuQ2FydENvbnRhaW5lciwgT3BlbkNhcnRJbWFnZSB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IHJldHJpZXZlRGF0YUZyb21Mb2NhbFN0b3JhZ2UgPSAoKTogaVByb2R1Y3RbXSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcclxuICAgIHJldHVybiBzdG9yZWREYXRhID8gSlNPTi5wYXJzZShzdG9yZWREYXRhKSA6IFtdO1xyXG59O1xyXG5cclxuY29uc3QgY2FydCA9IHJldHJpZXZlRGF0YUZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVuQ2FydEJ1dHRvbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VDb250ZXh0KE9wZW5Db250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxPcGVuQ2FydENvbnRhaW5lciBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgPE9wZW5DYXJ0SW1hZ2UgLz4oe2NhcnQubGVuZ3RofSlcclxuICAgICAgICA8L09wZW5DYXJ0Q29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJPcGVuQ29udGV4dCIsIk9wZW5DYXJ0Q29udGFpbmVyIiwiT3BlbkNhcnRJbWFnZSIsInJldHJpZXZlRGF0YUZyb21Mb2NhbFN0b3JhZ2UiLCJzdG9yZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNhcnQiLCJPcGVuQ2FydEJ1dHRvbiIsIm9wZW4iLCJzZXRPcGVuIiwib25DbGljayIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ShoppingCartButton/OpenCartButton.tsx\n"));

/***/ })

});