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

/***/ "./components/List/List.tsx":
/*!**********************************!*\
  !*** ./components/List/List.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Joon_Marion_Desktop_freelas_mks_frontend_challenge_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ListItem_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListItem/ListItem */ \"./components/ListItem/ListItem.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/List/styles.ts\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"./services/api.ts\");\n/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Skeleton */ \"./components/Skeleton/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Joon Marion\\\\Desktop\\\\freelas\\\\mks-frontend-challenge\\\\components\\\\List\\\\List.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_Joon_Marion_Desktop_freelas_mks_frontend_challenge_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\nfunction List() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isLoading = _useState2[0],\n      setIsLoading = _useState2[1];\n\n  var Arr = [1, 2, 3, 4, 5, 6, 7, 8];\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setIsLoading(false);\n    (0,_services_api__WEBPACK_IMPORTED_MODULE_4__.fetchProducts)().then(function (response) {\n      setProducts(response.products);\n    });\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.SkeletonWrapper, {\n      children: Arr.map(function (item, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {\n      children: products.map(function (item, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, item), index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_s(List, \"U7Qxnmy0PRpeVhtyqezv0QxSkvk=\");\n\n_c = List;\n\nvar _c;\n\n$RefreshReg$(_c, \"List\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3QvTGlzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU08sSUFBVCxHQUFnQjtFQUFBOztFQUFBOztFQUMzQixnQkFBZ0NOLCtDQUFRLENBQWtCLEVBQWxCLENBQXhDO0VBQUEsSUFBT08sUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxpQkFBa0NSLCtDQUFRLENBQUMsSUFBRCxDQUExQztFQUFBLElBQU9TLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBRUEsSUFBTUMsR0FBRyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBWjtFQUVBWixnREFBUyxDQUFDLFlBQU07SUFDWlcsWUFBWSxDQUFDLEtBQUQsQ0FBWjtJQUNBTiw0REFBYSxHQUFHUSxJQUFoQixDQUFxQixVQUFDQyxRQUFELEVBQWM7TUFDL0JMLFdBQVcsQ0FBQ0ssUUFBUSxDQUFDTixRQUFWLENBQVg7SUFDSCxDQUZEO0VBR0gsQ0FMUSxFQUtOLEVBTE0sQ0FBVDs7RUFPQSxJQUFJRSxTQUFKLEVBQWU7SUFDWCxvQkFDSSw4REFBQyxvREFBRDtNQUFBLFVBQ0tFLEdBQUcsQ0FBQ0csR0FBSixDQUFRLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtRQUFBLG9CQUNMLDhEQUFDLGlEQUFEO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FESztNQUFBLENBQVI7SUFETDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREo7RUFPSCxDQVJELE1BUU87SUFDSCxvQkFDSSw4REFBQyxrREFBRDtNQUFBLFVBQ0tULFFBQVEsQ0FBQ08sR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtRQUFBLG9CQUNWLDhEQUFDLDBEQUFELG9CQUEwQkQsSUFBMUIsR0FBZUMsS0FBZjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRFU7TUFBQSxDQUFiO0lBREw7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURKO0VBT0g7QUFDSjs7R0E5QnVCVjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0L0xpc3QudHN4PzIyZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lQcm9kdWN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uL0xpc3RJdGVtL0xpc3RJdGVtJztcclxuaW1wb3J0IHsgTGlzdENvbnRhaW5lciwgU2tlbGV0b25XcmFwcGVyIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgeyBmZXRjaFByb2R1Y3RzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJy4uL1NrZWxldG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoKSB7XHJcbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPGlQcm9kdWN0W10gfCBbXT4oW10pO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IEFyciA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgZmV0Y2hQcm9kdWN0cygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLnByb2R1Y3RzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFNrZWxldG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIHtBcnIubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2tlbGV0b25XcmFwcGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpbmRleH0gey4uLml0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlzdEl0ZW0iLCJMaXN0Q29udGFpbmVyIiwiU2tlbGV0b25XcmFwcGVyIiwiZmV0Y2hQcm9kdWN0cyIsIlNrZWxldG9uIiwiTGlzdCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJBcnIiLCJ0aGVuIiwicmVzcG9uc2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/List/List.tsx\n"));

/***/ })

});