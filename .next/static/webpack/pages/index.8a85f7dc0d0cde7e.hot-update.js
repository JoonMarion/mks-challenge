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

/***/ "./components/ShoppingCart/ShoppingCart.tsx":
/*!**************************************************!*\
  !*** ./components/ShoppingCart/ShoppingCart.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/ShoppingCart/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Joon Marion\\\\Desktop\\\\freelas\\\\mks-frontend-challenge\\\\components\\\\ShoppingCart\\\\ShoppingCart.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar retrieveDataFromLocalStorage = function retrieveDataFromLocalStorage() {\n  var storedData = localStorage.getItem('cart');\n  return storedData ? JSON.parse(storedData) : [];\n};\n\nvar ShoppingCart = function ShoppingCart(_ref) {\n  _s();\n\n  var open = _ref.open;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(retrieveDataFromLocalStorage()),\n      cart = _useState[0],\n      setCart = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ShoppingCartContainer, {\n    open: open,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ShoppingCartHeaderText, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this), cart.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: [item.name, \" - \", item.price]\n      }, item.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ShoppingCart, \"zyzDjmqJBpCqo/sVGYZUNcr58Uw=\");\n\n_c = ShoppingCart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShoppingCart);\n\nvar _c;\n\n$RefreshReg$(_c, \"ShoppingCart\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3BwaW5nQ2FydC9TaG9wcGluZ0NhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBOzs7QUFXQSxJQUFNRyw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLEdBQWtCO0VBQ25ELElBQU1DLFVBQVUsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQW5CO0VBQ0EsT0FBT0YsVUFBVSxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osVUFBWCxDQUFILEdBQTRCLEVBQTdDO0FBQ0gsQ0FIRDs7QUFLQSxJQUFNSyxZQUF5QyxHQUFHLFNBQTVDQSxZQUE0QyxPQUFjO0VBQUE7O0VBQUEsSUFBWEMsSUFBVyxRQUFYQSxJQUFXOztFQUM1RCxnQkFBd0JULCtDQUFRLENBQWFFLDRCQUE0QixFQUF6QyxDQUFoQztFQUFBLElBQU9RLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUVBLG9CQUNJLDhEQUFDLDBEQUFEO0lBQXVCLElBQUksRUFBRUYsSUFBN0I7SUFBQSx3QkFDSSw4REFBQyxzQkFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREosRUFFS0MsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtNQUFBLG9CQUNOO1FBQUEsV0FDS0EsSUFBSSxDQUFDQyxJQURWLFNBQ21CRCxJQUFJLENBQUNFLEtBRHhCO01BQUEsR0FBUUYsSUFBSSxDQUFDRyxFQUFiO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FETTtJQUFBLENBQVQsQ0FGTDtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FESjtBQVVILENBYkQ7O0dBQU1SOztLQUFBQTtBQWVOLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvcHBpbmdDYXJ0L1Nob3BwaW5nQ2FydC50c3g/NzJlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNob3BwaW5nQ2FydFByb3BzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pU2hvcHBpbmdDYXJ0JztcclxuaW1wb3J0IHsgU2hvcHBpbmdDYXJ0Q29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuaW50ZXJmYWNlIENhcnRJdGVtIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBicmFuZDogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHBob3RvOiBzdHJpbmc7XHJcbiAgICBwcmljZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCByZXRyaWV2ZURhdGFGcm9tTG9jYWxTdG9yYWdlID0gKCk6IENhcnRJdGVtW10gPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XHJcbiAgICByZXR1cm4gc3RvcmVkRGF0YSA/IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSkgOiBbXTtcclxufTtcclxuXHJcbmNvbnN0IFNob3BwaW5nQ2FydDogUmVhY3QuRkM8U2hvcHBpbmdDYXJ0UHJvcHM+ID0gKHsgb3BlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZTxDYXJ0SXRlbVtdPihyZXRyaWV2ZURhdGFGcm9tTG9jYWxTdG9yYWdlKCkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNob3BwaW5nQ2FydENvbnRhaW5lciBvcGVuPXtvcGVufT5cclxuICAgICAgICAgICAgPFNob3BwaW5nQ2FydEhlYWRlclRleHQ+PC9TaG9wcGluZ0NhcnRIZWFkZXJUZXh0PlxyXG4gICAgICAgICAgICB7Y2FydC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxwIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0gLSB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TaG9wcGluZ0NhcnRDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdDYXJ0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNob3BwaW5nQ2FydENvbnRhaW5lciIsInJldHJpZXZlRGF0YUZyb21Mb2NhbFN0b3JhZ2UiLCJzdG9yZWREYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIlNob3BwaW5nQ2FydCIsIm9wZW4iLCJjYXJ0Iiwic2V0Q2FydCIsIm1hcCIsIml0ZW0iLCJuYW1lIiwicHJpY2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ShoppingCart/ShoppingCart.tsx\n"));

/***/ })

});