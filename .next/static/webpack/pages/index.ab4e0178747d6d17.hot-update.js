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

/***/ "./components/Buttons/CheckoutButton/CheckoutButton.tsx":
/*!**************************************************************!*\
  !*** ./components/Buttons/CheckoutButton/CheckoutButton.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/Buttons/CheckoutButton/styles.ts\");\n/* harmony import */ var _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useAppDispatch */ \"./hooks/useAppDispatch.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Joon Marion\\\\Desktop\\\\freelas\\\\mks-frontend-challenge\\\\components\\\\Buttons\\\\CheckoutButton\\\\CheckoutButton.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar CheckoutButton = function CheckoutButton() {\n  _s();\n\n  var dispatch = useAppDispatch();\n  var cart = (0,_hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(cartState);\n\n  function handleFinishShop() {\n    if (cart.items.length !== 0) {\n      dispatch(clearCart());\n      alert('Compra finalizada com sucesso!');\n    } else {\n      alert('Seu carrinho está vazio.');\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.CheckoutButtonContainer, {\n    onClick: function onClick() {\n      return handleFinishShop();\n    },\n    children: \"Finalizar Compra\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 12\n  }, _this);\n};\n\n_s(CheckoutButton, \"dVUP9KRr167CXn2pCcrL+p0PbME=\", true, function () {\n  return [_hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_2__.useAppSelector];\n});\n\n_c = CheckoutButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"CheckoutButton\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbnMvQ2hlY2tvdXRCdXR0b24vQ2hlY2tvdXRCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07RUFBQTs7RUFDekIsSUFBTUMsUUFBUSxHQUFHQyxjQUFjLEVBQS9CO0VBQ0EsSUFBTUMsSUFBSSxHQUFHSixxRUFBYyxDQUFDSyxTQUFELENBQTNCOztFQUVBLFNBQVNDLGdCQUFULEdBQTRCO0lBQ3hCLElBQUlGLElBQUksQ0FBQ0csS0FBTCxDQUFXQyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO01BQ3pCTixRQUFRLENBQUNPLFNBQVMsRUFBVixDQUFSO01BQ0FDLEtBQUssQ0FBQyxnQ0FBRCxDQUFMO0lBQ0gsQ0FIRCxNQUdPO01BQ0hBLEtBQUssQ0FBQywwQkFBRCxDQUFMO0lBQ0g7RUFDSjs7RUFFRCxvQkFBTyw4REFBQyw0REFBRDtJQUF5QixPQUFPLEVBQUU7TUFBQSxPQUFNSixnQkFBZ0IsRUFBdEI7SUFBQSxDQUFsQztJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFQO0FBQ0gsQ0FkRDs7R0FBTUw7VUFFV0Q7OztLQUZYQztBQWdCTiwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1dHRvbnMvQ2hlY2tvdXRCdXR0b24vQ2hlY2tvdXRCdXR0b24udHN4P2JiNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hlY2tvdXRCdXR0b25Db250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQXBwRGlzcGF0Y2gnO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBjYXJ0ID0gdXNlQXBwU2VsZWN0b3IoY2FydFN0YXRlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGaW5pc2hTaG9wKCkge1xyXG4gICAgICAgIGlmIChjYXJ0Lml0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChjbGVhckNhcnQoKSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdDb21wcmEgZmluYWxpemFkYSBjb20gc3VjZXNzbyEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnU2V1IGNhcnJpbmhvIGVzdMOhIHZhemlvLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPENoZWNrb3V0QnV0dG9uQ29udGFpbmVyIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbmlzaFNob3AoKX0+RmluYWxpemFyIENvbXByYTwvQ2hlY2tvdXRCdXR0b25Db250YWluZXI+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoZWNrb3V0QnV0dG9uQ29udGFpbmVyIiwidXNlQXBwU2VsZWN0b3IiLCJDaGVja291dEJ1dHRvbiIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJjYXJ0IiwiY2FydFN0YXRlIiwiaGFuZGxlRmluaXNoU2hvcCIsIml0ZW1zIiwibGVuZ3RoIiwiY2xlYXJDYXJ0IiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Buttons/CheckoutButton/CheckoutButton.tsx\n"));

/***/ })

});