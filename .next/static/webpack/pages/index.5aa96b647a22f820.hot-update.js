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

/***/ "./components/OpenCartButton/OpenCartButton.tsx":
/*!******************************************************!*\
  !*** ./components/OpenCartButton/OpenCartButton.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OpenCartButton\": function() { return /* binding */ OpenCartButton; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navbar/Navbar */ \"./components/Navbar/Navbar.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/OpenCartButton/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Joon Marion\\\\Desktop\\\\freelas\\\\mks-frontend-challenge\\\\components\\\\OpenCartButton\\\\OpenCartButton.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar retrieveDataFromLocalStorage = function retrieveDataFromLocalStorage() {\n  var storedData = localStorage.getItem('cart');\n  return storedData ? JSON.parse(storedData) : [];\n};\n\nvar cart = retrieveDataFromLocalStorage();\nvar OpenCartButton = function OpenCartButton(_ref) {\n  _s();\n\n  var onClick = _ref.onClick;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__.OpenContext),\n      open = _useContext[0],\n      setOpen = _useContext[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.OpenCartContainer, {\n    onClick: function onClick() {\n      return setOpen(!open);\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.OpenCartImage, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this), \"(\", cart.length, \")\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(OpenCartButton, \"C55DjMUVlwXqBxP3yDdS8czZfZw=\");\n\n_c = OpenCartButton;\n\nvar _c;\n\n$RefreshReg$(_c, \"OpenCartButton\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5DYXJ0QnV0dG9uL09wZW5DYXJ0QnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUksNEJBQTRCLEdBQUcsU0FBL0JBLDRCQUErQixHQUFrQjtFQUNuRCxJQUFNQyxVQUFVLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixDQUFuQjtFQUNBLE9BQU9GLFVBQVUsR0FBR0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLFVBQVgsQ0FBSCxHQUE0QixFQUE3QztBQUNILENBSEQ7O0FBS0EsSUFBTUssSUFBSSxHQUFHTiw0QkFBNEIsRUFBekM7QUFFTyxJQUFNTyxjQUFpQyxHQUFHLFNBQXBDQSxjQUFvQyxPQUFpQjtFQUFBOztFQUFBLElBQWRDLE9BQWMsUUFBZEEsT0FBYzs7RUFDOUQsa0JBQXdCWixpREFBVSxDQUFDQyx1REFBRCxDQUFsQztFQUFBLElBQU9ZLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUVBLG9CQUNJLDhEQUFDLHNEQUFEO0lBQW1CLE9BQU8sRUFBRTtNQUFBLE9BQU1BLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7SUFBQSxDQUE1QjtJQUFBLHdCQUNJLDhEQUFDLGtEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FESixPQUN1QkgsSUFBSSxDQUFDSyxNQUQ1QjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FESjtBQUtILENBUk07O0dBQU1KOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL09wZW5DYXJ0QnV0dG9uL09wZW5DYXJ0QnV0dG9uLnRzeD9mY2RhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pUHJvZHVjdCc7XHJcbmltcG9ydCB7IE9wZW5Db250ZXh0IH0gZnJvbSAnLi4vTmF2YmFyL05hdmJhcic7XHJcbmltcG9ydCB7IE9wZW5DYXJ0Q29udGFpbmVyLCBPcGVuQ2FydEltYWdlIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgcmV0cmlldmVEYXRhRnJvbUxvY2FsU3RvcmFnZSA9ICgpOiBpUHJvZHVjdFtdID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpO1xyXG4gICAgcmV0dXJuIHN0b3JlZERhdGEgPyBKU09OLnBhcnNlKHN0b3JlZERhdGEpIDogW107XHJcbn07XHJcblxyXG5jb25zdCBjYXJ0ID0gcmV0cmlldmVEYXRhRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9wZW5DYXJ0QnV0dG9uOiBSZWFjdC5GQzxpQnV0dG9uPiA9ICh7IG9uQ2xpY2sgfSkgPT4ge1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlQ29udGV4dChPcGVuQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8T3BlbkNhcnRDb250YWluZXIgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PlxyXG4gICAgICAgICAgICA8T3BlbkNhcnRJbWFnZSAvPih7Y2FydC5sZW5ndGh9KVxyXG4gICAgICAgIDwvT3BlbkNhcnRDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIk9wZW5Db250ZXh0IiwiT3BlbkNhcnRDb250YWluZXIiLCJPcGVuQ2FydEltYWdlIiwicmV0cmlldmVEYXRhRnJvbUxvY2FsU3RvcmFnZSIsInN0b3JlZERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY2FydCIsIk9wZW5DYXJ0QnV0dG9uIiwib25DbGljayIsIm9wZW4iLCJzZXRPcGVuIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OpenCartButton/OpenCartButton.tsx\n"));

/***/ })

});