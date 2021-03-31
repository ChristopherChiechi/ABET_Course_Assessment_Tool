webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/TAsurvey.js":
/*!**************************************************!*\
  !*** ./components/survey-components/TAsurvey.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/survey-components/TAsurvey.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar TAsurvey = function TAsurvey(_ref) {\n  _s();\n\n  var TAquestions = _ref.TAquestions,\n      handleChange = _ref.handleChange;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('tas updated');\n  }, [TAquestions]);\n  var renderRadios = Array.from(Array(5), function (x, index) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Radio\"], {\n      value: index + 1,\n      children: index + 1\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 16\n    }, _this);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      fontWeight: \"bold\",\n      children: \"TA evaluation. Have each rated 1-5, with 5 being very satisfied and 1 being very unsatisfied\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n      m: \"2em\",\n      padding: \"2em\",\n      bg: \"#edf2f7\",\n      w: \"80%\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n        padding: \"1em\",\n        w: \"90%\",\n        bg: \"white\",\n        borderRadius: \"8px\",\n        children: TAquestions.map(function (question, idx) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n            mb: \"1em\",\n            children: [idx > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 47\n            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                mt: \"1em\",\n                children: question.question\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"RadioGroup\"], {\n                value: question.rating,\n                onChange: function onChange(e) {\n                  return handleChange(e, idx, \"TA\");\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n                  spacing: 10,\n                  children: renderRadios\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 49,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 37\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 33\n            }, _this)]\n          }, idx, true, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 29\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(TAsurvey, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = TAsurvey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TAsurvey);\n\nvar _c;\n\n$RefreshReg$(_c, \"TAsurvey\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9UQXN1cnZleS5qcz85OTg5Il0sIm5hbWVzIjpbIlRBc3VydmV5IiwiVEFxdWVzdGlvbnMiLCJoYW5kbGVDaGFuZ2UiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyUmFkaW9zIiwiQXJyYXkiLCJmcm9tIiwieCIsImluZGV4IiwibWFwIiwicXVlc3Rpb24iLCJpZHgiLCJyYXRpbmciLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFhQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtQztBQUFBOztBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ2hEQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNILEdBRlEsRUFFTixDQUFDSixXQUFELENBRk0sQ0FBVDtBQUlBLE1BQU1LLFlBQVksR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQyxDQUFELENBQWhCLEVBQXFCLFVBQUNFLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQ3BELHdCQUFPLHFFQUFDLHNEQUFEO0FBQW1CLFdBQUssRUFBRUEsS0FBSyxHQUFHLENBQWxDO0FBQUEsZ0JBQXNDQSxLQUFLLEdBQUc7QUFBOUMsT0FBWUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDSCxHQUZvQixDQUFyQjtBQUlBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMscURBQUQ7QUFBTSxnQkFBVSxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSSxxRUFBQyx1REFBRDtBQUNJLE9BQUMsRUFBQyxLQUROO0FBRUksYUFBTyxFQUFDLEtBRlo7QUFHSSxRQUFFLEVBQUMsU0FIUDtBQUlJLE9BQUMsRUFBQyxLQUpOO0FBQUEsNkJBTUkscUVBQUMscURBQUQ7QUFBTSxlQUFPLEVBQUMsS0FBZDtBQUFvQixTQUFDLEVBQUMsS0FBdEI7QUFBNEIsVUFBRSxFQUFDLE9BQS9CO0FBQXVDLG9CQUFZLEVBQUMsS0FBcEQ7QUFBQSxrQkFDS1QsV0FBVyxDQUFDVSxHQUFaLENBQWdCLFVBQUNDLFFBQUQsRUFBV0MsR0FBWCxFQUFtQjtBQUNoQyw4QkFDSSxxRUFBQyx5REFBRDtBQUFVLGNBQUUsRUFBQyxLQUFiO0FBQUEsdUJBQ09BLEdBQUcsR0FBRyxDQUFQLGdCQUFZLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVosR0FBMEIsSUFEaEMsZUFFSSxxRUFBQyx1REFBRDtBQUFBLHNDQUNJLHFFQUFDLHFEQUFEO0FBQU0sa0JBQUUsRUFBQyxLQUFUO0FBQUEsMEJBQWdCRCxRQUFRLENBQUNBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSxxRUFBQywyREFBRDtBQUNJLHFCQUFLLEVBQUVBLFFBQVEsQ0FBQ0UsTUFEcEI7QUFFSSx3QkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEseUJBQ05iLFlBQVksQ0FBQ2EsQ0FBRCxFQUFJRixHQUFKLEVBQVMsSUFBVCxDQUROO0FBQUEsaUJBRmQ7QUFBQSx1Q0FNSSxxRUFBQyx1REFBRDtBQUFRLHlCQUFPLEVBQUUsRUFBakI7QUFBQSw0QkFDS1A7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQSxhQUF3Qk8sR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQWtCSCxTQW5CQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQSxrQkFESjtBQXVDSCxDQWhERDs7R0FBTWIsUTs7S0FBQUEsUTtBQWtEU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1RBc3VydmV5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBUZXh0LFxuICAgIFZTdGFjayxcbiAgICBIU3RhY2ssXG4gICAgUmFkaW9Hcm91cCxcbiAgICBSYWRpbyxcbiAgICBDZW50ZXIsXG4gICAgRGl2aWRlcixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuXG5jb25zdCBUQXN1cnZleSA9ICh7IFRBcXVlc3Rpb25zLCBoYW5kbGVDaGFuZ2UgfSkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YXMgdXBkYXRlZCcpO1xuICAgIH0sIFtUQXF1ZXN0aW9uc10pO1xuXG4gICAgY29uc3QgcmVuZGVyUmFkaW9zID0gQXJyYXkuZnJvbShBcnJheSg1KSwgKHgsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8UmFkaW8ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4ICsgMX0+e2luZGV4ICsgMX08L1JhZGlvPlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgVEEgZXZhbHVhdGlvbi4gSGF2ZSBlYWNoIHJhdGVkIDEtNSwgd2l0aCA1IGJlaW5nIHZlcnkgc2F0aXNmaWVkIGFuZCAxXG4gICAgICAgICAgICAgICAgYmVpbmcgdmVyeSB1bnNhdGlzZmllZFxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPENlbnRlclxuICAgICAgICAgICAgICAgIG09XCIyZW1cIlxuICAgICAgICAgICAgICAgIHBhZGRpbmc9XCIyZW1cIlxuICAgICAgICAgICAgICAgIGJnPVwiI2VkZjJmN1wiXG4gICAgICAgICAgICAgICAgdz1cIjgwJVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpc3QgcGFkZGluZz1cIjFlbVwiIHc9XCI5MCVcIiBiZz1cIndoaXRlXCIgYm9yZGVyUmFkaXVzPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIHtUQXF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG1iPVwiMWVtXCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IChpZHggPiAwKSA/IDxEaXZpZGVyIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG10PVwiMWVtXCI+e3F1ZXN0aW9uLnF1ZXN0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9uLnJhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShlLCBpZHgsIFwiVEFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJSYWRpb3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICA8L0NlbnRlcj5cblxuICAgICAgICA8Lz5cbiAgICApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRBc3VydmV5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/survey-components/TAsurvey.js\n");

/***/ })

})