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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/OpenCartButton/styles.ts\");\n/* harmony import */ var _ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModalProvider/ModalProvider */ \"./components/ModalProvider/ModalProvider.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Joon Marion\\\\Desktop\\\\freelas\\\\mks-frontend-challenge\\\\components\\\\OpenCartButton\\\\OpenCartButton.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar OpenCartButton = function OpenCartButton() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ModalProvider_ModalProvider__WEBPACK_IMPORTED_MODULE_2__.ModalContext),\n      toggle = _useContext.toggle;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.OpenCartContainer, {\n      onClick: toggle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.OpenCartImage, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      onClick: toggle,\n      children: \"Open\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(OpenCartButton, \"y/4eJoxw3mZE6IIQb6RHG9GMGXs=\");\n\n_c = OpenCartButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OpenCartButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"OpenCartButton\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL09wZW5DYXJ0QnV0dG9uL09wZW5DYXJ0QnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1JLGNBQXdCLEdBQUcsU0FBM0JBLGNBQTJCLEdBQU07RUFBQTs7RUFDbkMsa0JBQW1CSixpREFBVSxDQUFDRyxzRUFBRCxDQUE3QjtFQUFBLElBQVFFLE1BQVIsZUFBUUEsTUFBUjs7RUFFQSxvQkFDSTtJQUFBLHdCQUNJLDhEQUFDLHNEQUFEO01BQW1CLE9BQU8sRUFBRUEsTUFBNUI7TUFBQSx1QkFDSSw4REFBQyxrREFBRDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREo7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURKLGVBSUk7TUFBUSxPQUFPLEVBQUVBLE1BQWpCO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBSko7RUFBQSxnQkFESjtBQVFILENBWEQ7O0dBQU1EOztLQUFBQTtBQWFOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvT3BlbkNhcnRCdXR0b24vT3BlbkNhcnRCdXR0b24udHN4P2ZjZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgT3BlbkNhcnRDb250YWluZXIsIE9wZW5DYXJ0SW1hZ2UgfSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL01vZGFsUHJvdmlkZXIvTW9kYWxQcm92aWRlcic7XHJcblxyXG5jb25zdCBPcGVuQ2FydEJ1dHRvbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHRvZ2dsZSB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE9wZW5DYXJ0Q29udGFpbmVyIG9uQ2xpY2s9e3RvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICA8T3BlbkNhcnRJbWFnZSAvPlxyXG4gICAgICAgICAgICA8L09wZW5DYXJ0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZX0+T3BlbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZW5DYXJ0QnV0dG9uO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIk9wZW5DYXJ0Q29udGFpbmVyIiwiT3BlbkNhcnRJbWFnZSIsIk1vZGFsQ29udGV4dCIsIk9wZW5DYXJ0QnV0dG9uIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/OpenCartButton/OpenCartButton.tsx\n"));

/***/ })

});