"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/fly-in/page",{

/***/ "(app-pages-browser)/./src/components/fly-in/form/InputField.js":
/*!**************************************************!*\
  !*** ./src/components/fly-in/form/InputField.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst InputField = (param)=>{\n    let { small, placeholder, type, value, id, handleChange, errors, index } = param;\n    // console.log(errors);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(small ? \"lg:w-[48.264%]\" : \"w-full\", \" w-full flex flex-col lg:gap-y-[0.3125vw] gap-y-[6px]\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"Fullname\",\n                className: \"border-[#0000004D] border-b lg:h-[6.66666666667vh] sm:h-[62px] h-[45px] flex items-center justify-between lg:px-[1.25vw] px-[12px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    \"data-value\": index,\n                    autoComplete: \"off\",\n                    type: type ? type : \"text\",\n                    placeholder: placeholder,\n                    value: value,\n                    id: id,\n                    onChange: handleChange,\n                    className: \"w-full h-full text-[#000] text-opacity-[0.7] lg:text24 mtext18 placeholder:text-[#000] placeholder:text-opacity-[0.7] placeholder:lg:text24 placeholder:mtext18 outline-none bg-transparent\"\n                }, void 0, false, {\n                    fileName: \"/Users/misk/Developer/Mudassir/sand-fun-sign-up/src/components/fly-in/form/InputField.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/misk/Developer/Mudassir/sand-fun-sign-up/src/components/fly-in/form/InputField.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            errors[id] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-red-600  lg:text20 mtext18  error\",\n                children: errors[id]\n            }, void 0, false, {\n                fileName: \"/Users/misk/Developer/Mudassir/sand-fun-sign-up/src/components/fly-in/form/InputField.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/misk/Developer/Mudassir/sand-fun-sign-up/src/components/fly-in/form/InputField.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = InputField;\n// errors.visitors[0][id] ? (\n//   <span className=\"text-red-600  lg:text20 mtext18  error\">\n//     {errors.visitors[0][id]}\n//   </span>\n// ) :\n/* harmony default export */ __webpack_exports__[\"default\"] = (InputField);\nvar _c;\n$RefreshReg$(_c, \"InputField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2ZseS1pbi9mb3JtL0lucHV0RmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsYUFBYTtRQUFDLEVBQ2xCQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLEVBQUUsRUFDRkMsWUFBWSxFQUNaQyxNQUFNLEVBQ05DLEtBQUssRUFDTjtJQUNDLHVCQUF1QjtJQUN2QixxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVyxHQUVWLE9BRENULFFBQVEsbUJBQW1CLFVBQzVCOzswQkFFRCw4REFBQ1U7Z0JBQ0NDLFNBQVE7Z0JBQ1JGLFdBQVU7MEJBRVYsNEVBQUNHO29CQUNDQyxjQUFZTjtvQkFDWk8sY0FBYTtvQkFDYlosTUFBTUEsT0FBT0EsT0FBTztvQkFDcEJELGFBQWFBO29CQUNiRSxPQUFPQTtvQkFDUEMsSUFBSUE7b0JBQ0pXLFVBQVVWO29CQUNWSSxXQUFVOzs7Ozs7Ozs7OztZQUliSCxNQUFNLENBQUNGLEdBQUcsaUJBQ1QsOERBQUNZO2dCQUFLUCxXQUFVOzBCQUNiSCxNQUFNLENBQUNGLEdBQUc7Ozs7OzBDQUdiOzs7Ozs7O0FBSVI7S0ExQ01MO0FBNENOLDZCQUE2QjtBQUM3Qiw4REFBOEQ7QUFDOUQsK0JBQStCO0FBQy9CLFlBQVk7QUFDWixNQUFNO0FBRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmx5LWluL2Zvcm0vSW5wdXRGaWVsZC5qcz83MzEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSW5wdXRGaWVsZCA9ICh7XG4gIHNtYWxsLFxuICBwbGFjZWhvbGRlcixcbiAgdHlwZSxcbiAgdmFsdWUsXG4gIGlkLFxuICBoYW5kbGVDaGFuZ2UsXG4gIGVycm9ycyxcbiAgaW5kZXgsXG59KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgc21hbGwgPyBcImxnOnctWzQ4LjI2NCVdXCIgOiBcInctZnVsbFwiXG4gICAgICB9IHctZnVsbCBmbGV4IGZsZXgtY29sIGxnOmdhcC15LVswLjMxMjV2d10gZ2FwLXktWzZweF1gfVxuICAgID5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPVwiRnVsbG5hbWVcIlxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItWyMwMDAwMDA0RF0gYm9yZGVyLWIgbGc6aC1bNi42NjY2NjY2NjY2N3ZoXSBzbTpoLVs2MnB4XSBoLVs0NXB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbGc6cHgtWzEuMjV2d10gcHgtWzEycHhdXCJcbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgZGF0YS12YWx1ZT17aW5kZXh9XG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICB0eXBlPXt0eXBlID8gdHlwZSA6IFwidGV4dFwifVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCB0ZXh0LVsjMDAwXSB0ZXh0LW9wYWNpdHktWzAuN10gbGc6dGV4dDI0IG10ZXh0MTggcGxhY2Vob2xkZXI6dGV4dC1bIzAwMF0gcGxhY2Vob2xkZXI6dGV4dC1vcGFjaXR5LVswLjddIHBsYWNlaG9sZGVyOmxnOnRleHQyNCBwbGFjZWhvbGRlcjptdGV4dDE4IG91dGxpbmUtbm9uZSBiZy10cmFuc3BhcmVudFwiXG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICB7ZXJyb3JzW2lkXSA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwICBsZzp0ZXh0MjAgbXRleHQxOCAgZXJyb3JcIj5cbiAgICAgICAgICB7ZXJyb3JzW2lkXX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKSA6ICAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gZXJyb3JzLnZpc2l0b3JzWzBdW2lkXSA/IChcbi8vICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwICBsZzp0ZXh0MjAgbXRleHQxOCAgZXJyb3JcIj5cbi8vICAgICB7ZXJyb3JzLnZpc2l0b3JzWzBdW2lkXX1cbi8vICAgPC9zcGFuPlxuLy8gKSA6XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnB1dEZpZWxkIiwic21hbGwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsImlkIiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JzIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImRhdGEtdmFsdWUiLCJhdXRvQ29tcGxldGUiLCJvbkNoYW5nZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/fly-in/form/InputField.js\n"));

/***/ })

});