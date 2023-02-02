/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ListItem/ListItem.tsx":
/*!******************************************!*\
  !*** ./components/ListItem/ListItem.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListItem\": function() { return /* binding */ ListItem; }\n/* harmony export */ });\n/* harmony import */ var _interfaces_iProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/iProduct */ \"./interfaces/iProduct.ts\");\n/* harmony import */ var _interfaces_iProduct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_interfaces_iProduct__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BuyButton_BuyButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BuyButton/BuyButton */ \"./components/BuyButton/BuyButton.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/ListItem/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Joon Marion\\\\Desktop\\\\freelas\\\\mks-frontend-challenge\\\\components\\\\ListItem\\\\ListItem.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar ListItem = function ListItem(_ref) {\n  var id = _ref.id,\n      name = _ref.name,\n      brand = _ref.brand,\n      description = _ref.description,\n      photo = _ref.photo,\n      price = _ref.price;\n\n  function addToCart(_ref2) {\n    var id = _ref2.id,\n        name = _ref2.name,\n        brand = _ref2.brand,\n        description = _ref2.description,\n        photo = _ref2.photo,\n        price = _ref2.price;\n    var cart = [];\n\n    if (localStorage.getItem('cart')) {\n      cart = JSON.parse(localStorage.getItem('cart'));\n    }\n\n    cart.push({\n      id: id,\n      name: name,\n      brand: brand,\n      description: description,\n      photo: photo,\n      price: price\n    });\n    localStorage.setItem('cart', JSON.stringify(cart));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Card, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.ProductImageContent, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.ProductImage, {\n        src: photo,\n        alt: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.ProductInfo, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.ProductName, {\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.ProductPrice, {\n        children: [\"R$\", price.replace(/(^0+(?=\\d))|(.?0+$)/g, '')]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.ProductDescription, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.DescriptionText, {\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_BuyButton_BuyButton__WEBPACK_IMPORTED_MODULE_1__.BuyButton, {\n      onClick: function onClick() {\n        return addToCart({\n          id: id,\n          name: name,\n          brand: brand,\n          description: description,\n          photo: photo,\n          price: price\n        });\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, _this);\n};\n_c = ListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"ListItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3RJdGVtL0xpc3RJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQW9CTyxJQUFNVSxRQUEyQixHQUFHLFNBQTlCQSxRQUE4QixPQUFvRDtFQUFBLElBQWpEQyxFQUFpRCxRQUFqREEsRUFBaUQ7RUFBQSxJQUE3Q0MsSUFBNkMsUUFBN0NBLElBQTZDO0VBQUEsSUFBdkNDLEtBQXVDLFFBQXZDQSxLQUF1QztFQUFBLElBQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7RUFBQSxJQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0VBQUEsSUFBWkMsS0FBWSxRQUFaQSxLQUFZOztFQUMzRixTQUFTQyxTQUFULFFBQTRFO0lBQUEsSUFBdkROLEVBQXVELFNBQXZEQSxFQUF1RDtJQUFBLElBQW5EQyxJQUFtRCxTQUFuREEsSUFBbUQ7SUFBQSxJQUE3Q0MsS0FBNkMsU0FBN0NBLEtBQTZDO0lBQUEsSUFBdENDLFdBQXNDLFNBQXRDQSxXQUFzQztJQUFBLElBQXpCQyxLQUF5QixTQUF6QkEsS0FBeUI7SUFBQSxJQUFsQkMsS0FBa0IsU0FBbEJBLEtBQWtCO0lBQ3hFLElBQUlFLElBQWUsR0FBRyxFQUF0Qjs7SUFDQSxJQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztNQUM5QkYsSUFBSSxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtJQUNIOztJQUNERixJQUFJLENBQUNLLElBQUwsQ0FBVTtNQUFFWixFQUFFLEVBQUZBLEVBQUY7TUFBTUMsSUFBSSxFQUFKQSxJQUFOO01BQVlDLEtBQUssRUFBTEEsS0FBWjtNQUFtQkMsV0FBVyxFQUFYQSxXQUFuQjtNQUFnQ0MsS0FBSyxFQUFMQSxLQUFoQztNQUF1Q0MsS0FBSyxFQUFMQTtJQUF2QyxDQUFWO0lBQ0FHLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixNQUFyQixFQUE2QkgsSUFBSSxDQUFDSSxTQUFMLENBQWVQLElBQWYsQ0FBN0I7RUFDSDs7RUFDRCxvQkFDSSw4REFBQyx5Q0FBRDtJQUFBLHdCQUNJLDhEQUFDLHdEQUFEO01BQUEsdUJBQ0ksOERBQUMsaURBQUQ7UUFBYyxHQUFHLEVBQUVILEtBQW5CO1FBQTBCLEdBQUcsRUFBRUg7TUFBL0I7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FESixlQUtJLDhEQUFDLGdEQUFEO01BQUEsd0JBQ0ksOERBQUMsZ0RBQUQ7UUFBQSxVQUFjQTtNQUFkO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FESixlQUVJLDhEQUFDLGlEQUFEO1FBQUEsaUJBQWlCSSxLQUFLLENBQUNVLE9BQU4sQ0FBYyxzQkFBZCxFQUFzQyxFQUF0QyxDQUFqQjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FGSjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FMSixlQVVJLDhEQUFDLHVEQUFEO01BQUEsdUJBQ0ksOERBQUMsb0RBQUQ7UUFBQSxVQUFrQlo7TUFBbEI7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FWSixlQWNJLDhEQUFDLDJEQUFEO01BQVcsT0FBTyxFQUFFO1FBQUEsT0FBTUcsU0FBUyxDQUFDO1VBQUVOLEVBQUUsRUFBRkEsRUFBRjtVQUFNQyxJQUFJLEVBQUpBLElBQU47VUFBWUMsS0FBSyxFQUFMQSxLQUFaO1VBQW1CQyxXQUFXLEVBQVhBLFdBQW5CO1VBQWdDQyxLQUFLLEVBQUxBLEtBQWhDO1VBQXVDQyxLQUFLLEVBQUxBO1FBQXZDLENBQUQsQ0FBZjtNQUFBO0lBQXBCO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FkSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FESjtBQWtCSCxDQTNCTTtLQUFNTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpc3RJdGVtL0xpc3RJdGVtLnRzeD9hNWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9pUHJvZHVjdCc7XHJcbmltcG9ydCB7IEJ1eUJ1dHRvbiB9IGZyb20gJy4uL0J1eUJ1dHRvbi9CdXlCdXR0b24nO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIFByb2R1Y3RJbWFnZSxcclxuICAgIFByb2R1Y3RJbWFnZUNvbnRlbnQsXHJcbiAgICBQcm9kdWN0SW5mbyxcclxuICAgIFByb2R1Y3ROYW1lLFxyXG4gICAgUHJvZHVjdFByaWNlLFxyXG4gICAgUHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgRGVzY3JpcHRpb25UZXh0LFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbnR5cGUgaVByb2R1Y3QgPSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYnJhbmQ6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBwaG90bzogc3RyaW5nO1xyXG4gICAgcHJpY2U6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SXRlbTogUmVhY3QuRkM8UHJvZHVjdD4gPSAoeyBpZCwgbmFtZSwgYnJhbmQsIGRlc2NyaXB0aW9uLCBwaG90bywgcHJpY2UgfSkgPT4ge1xyXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0KHsgaWQsIG5hbWUsIGJyYW5kLCBkZXNjcmlwdGlvbiwgcGhvdG8sIHByaWNlIH06IFByb2R1Y3QpIHtcclxuICAgICAgICBsZXQgY2FydDogUHJvZHVjdFtdID0gW107XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcclxuICAgICAgICAgICAgY2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkgYXMgUHJvZHVjdFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXJ0LnB1c2goeyBpZCwgbmFtZSwgYnJhbmQsIGRlc2NyaXB0aW9uLCBwaG90bywgcHJpY2UgfSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8UHJvZHVjdEltYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2Ugc3JjPXtwaG90b30gYWx0PXtuYW1lfSAvPlxyXG4gICAgICAgICAgICA8L1Byb2R1Y3RJbWFnZUNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgICA8UHJvZHVjdEluZm8+XHJcbiAgICAgICAgICAgICAgICA8UHJvZHVjdE5hbWU+e25hbWV9PC9Qcm9kdWN0TmFtZT5cclxuICAgICAgICAgICAgICAgIDxQcm9kdWN0UHJpY2U+UiR7cHJpY2UucmVwbGFjZSgvKF4wKyg/PVxcZCkpfCguPzArJCkvZywgJycpfTwvUHJvZHVjdFByaWNlPlxyXG4gICAgICAgICAgICA8L1Byb2R1Y3RJbmZvPlxyXG5cclxuICAgICAgICAgICAgPFByb2R1Y3REZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvblRleHQ+e2Rlc2NyaXB0aW9ufTwvRGVzY3JpcHRpb25UZXh0PlxyXG4gICAgICAgICAgICA8L1Byb2R1Y3REZXNjcmlwdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxCdXlCdXR0b24gb25DbGljaz17KCkgPT4gYWRkVG9DYXJ0KHsgaWQsIG5hbWUsIGJyYW5kLCBkZXNjcmlwdGlvbiwgcGhvdG8sIHByaWNlIH0pfSAvPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJpUHJvZHVjdCIsIkJ1eUJ1dHRvbiIsIkNhcmQiLCJQcm9kdWN0SW1hZ2UiLCJQcm9kdWN0SW1hZ2VDb250ZW50IiwiUHJvZHVjdEluZm8iLCJQcm9kdWN0TmFtZSIsIlByb2R1Y3RQcmljZSIsIlByb2R1Y3REZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uVGV4dCIsIkxpc3RJdGVtIiwiaWQiLCJuYW1lIiwiYnJhbmQiLCJkZXNjcmlwdGlvbiIsInBob3RvIiwicHJpY2UiLCJhZGRUb0NhcnQiLCJjYXJ0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ListItem/ListItem.tsx\n"));

/***/ }),

/***/ "./interfaces/iProduct.ts":
/*!********************************!*\
  !*** ./interfaces/iProduct.ts ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});