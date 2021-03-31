webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/StudentInfoForm.js":
/*!*********************************************************!*\
  !*** ./components/survey-components/StudentInfoForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _SurveyPageData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SurveyPageData */ \"./components/survey-components/SurveyPageData.js\");\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/survey-components/StudentInfoForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar StudentInfoForm = function StudentInfoForm(_ref) {\n  _s();\n\n  var studentInformation = _ref.studentInformation,\n      setStudentInformation = _ref.setStudentInformation;\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_SurveyPageData__WEBPACK_IMPORTED_MODULE_3__[\"PageContext\"]);\n  var questions = context.studentQuestions;\n  var attributes = [\"major\", \"classification\", \"grade\"];\n\n  var handleChange = function handleChange(e, idx) {\n    var type = attributes[idx];\n    var temp = studentInformation;\n    temp[type] = e.target.value;\n    setStudentInformation(temp);\n  };\n\n  var renderOptions = function renderOptions(options) {\n    return options.map(function (option, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n        value: option,\n        children: option\n      }, idx, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n    m: \"2em\",\n    padding: \"1em\",\n    bg: \"#edf2f7\",\n    w: \"80%\",\n    dir: \"column\",\n    children: questions.map(function (question, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n        w: \"100%\",\n        justify: \"center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n          w: \"30%\",\n          fontWeight: \"bold\",\n          children: question.question\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 25\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Select\"], {\n          w: \"70%\",\n          placeholder: attributes[idx],\n          variant: \"filled\",\n          bg: \"white\",\n          m: \"1em\",\n          onChange: function onChange(e) {\n            return handleChange(e, idx);\n          },\n          children: renderOptions(question.choices)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 21\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(StudentInfoForm, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n\n_c = StudentInfoForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentInfoForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"StudentInfoForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdHVkZW50SW5mb0Zvcm0uanM/YjYxOCJdLCJuYW1lcyI6WyJTdHVkZW50SW5mb0Zvcm0iLCJzdHVkZW50SW5mb3JtYXRpb24iLCJzZXRTdHVkZW50SW5mb3JtYXRpb24iLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlBhZ2VDb250ZXh0IiwicXVlc3Rpb25zIiwic3R1ZGVudFF1ZXN0aW9ucyIsImF0dHJpYnV0ZXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaWR4IiwidHlwZSIsInRlbXAiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlck9wdGlvbnMiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwicXVlc3Rpb24iLCJjaG9pY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBbUQ7QUFBQTs7QUFBQSxNQUFoREMsa0JBQWdELFFBQWhEQSxrQkFBZ0Q7QUFBQSxNQUE1QkMscUJBQTRCLFFBQTVCQSxxQkFBNEI7QUFDdkUsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQywyREFBRCxDQUExQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsT0FBTyxDQUFDSSxnQkFBMUI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQyxPQUFELEVBQVUsZ0JBQVYsRUFBNEIsT0FBNUIsQ0FBbkI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFJQyxHQUFKLEVBQVk7QUFDN0IsUUFBTUMsSUFBSSxHQUFHSixVQUFVLENBQUNHLEdBQUQsQ0FBdkI7QUFDQSxRQUFJRSxJQUFJLEdBQUdaLGtCQUFYO0FBQ0FZLFFBQUksQ0FBQ0QsSUFBRCxDQUFKLEdBQWFGLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUF0QjtBQUNBYix5QkFBcUIsQ0FBQ1csSUFBRCxDQUFyQjtBQUNILEdBTEQ7O0FBT0EsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxPQUFPLEVBQUk7QUFDN0IsV0FBT0EsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTUixHQUFULEVBQWlCO0FBQ2hDLDBCQUNJO0FBQVEsYUFBSyxFQUFFUSxNQUFmO0FBQUEsa0JBQ0tBO0FBREwsU0FBNEJSLEdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILEtBTk0sQ0FBUDtBQU9ILEdBUkQ7O0FBVUEsc0JBQ0kscUVBQUMsdURBQUQ7QUFDSSxLQUFDLEVBQUMsS0FETjtBQUVJLFdBQU8sRUFBQyxLQUZaO0FBR0ksTUFBRSxFQUFDLFNBSFA7QUFJSSxLQUFDLEVBQUMsS0FKTjtBQUtJLE9BQUcsRUFBQyxRQUxSO0FBQUEsY0FPS0wsU0FBUyxDQUFDWSxHQUFWLENBQWMsVUFBQ0UsUUFBRCxFQUFXVCxHQUFYLEVBQW1CO0FBQzlCLDBCQUNJLHFFQUFDLHVEQUFEO0FBQVEsU0FBQyxFQUFDLE1BQVY7QUFBaUIsZUFBTyxFQUFDLFFBQXpCO0FBQUEsZ0NBQ0kscUVBQUMscURBQUQ7QUFBTSxXQUFDLEVBQUMsS0FBUjtBQUFjLG9CQUFVLEVBQUMsTUFBekI7QUFBQSxvQkFBaUNTLFFBQVEsQ0FBQ0E7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLHVEQUFEO0FBQ0ksV0FBQyxFQUFDLEtBRE47QUFFSSxxQkFBVyxFQUFFWixVQUFVLENBQUNHLEdBQUQsQ0FGM0I7QUFHSSxpQkFBTyxFQUFDLFFBSFo7QUFJSSxZQUFFLEVBQUMsT0FKUDtBQUtJLFdBQUMsRUFBQyxLQUxOO0FBTUksa0JBQVEsRUFBRSxrQkFBQ0QsQ0FBRDtBQUFBLG1CQUNORCxZQUFZLENBQUNDLENBQUQsRUFBSUMsR0FBSixDQUROO0FBQUEsV0FOZDtBQUFBLG9CQVVLSyxhQUFhLENBQUNJLFFBQVEsQ0FBQ0MsT0FBVjtBQVZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBaUJILEtBbEJBO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBK0JILENBckREOztHQUFNckIsZTs7S0FBQUEsZTtBQXVEU0EsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1N0dWRlbnRJbmZvRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFNlbGVjdCxcbiAgICBUZXh0LFxuICAgIEhTdGFjayxcbiAgICBWU3RhY2ssXG4gICAgQ2VudGVyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi9TdXJ2ZXlQYWdlRGF0YSc7XG5cbmNvbnN0IFN0dWRlbnRJbmZvRm9ybSA9ICh7IHN0dWRlbnRJbmZvcm1hdGlvbiwgc2V0U3R1ZGVudEluZm9ybWF0aW9uIH0pID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChQYWdlQ29udGV4dCk7XG4gICAgY29uc3QgcXVlc3Rpb25zID0gY29udGV4dC5zdHVkZW50UXVlc3Rpb25zO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBbXCJtYWpvclwiLCBcImNsYXNzaWZpY2F0aW9uXCIsIFwiZ3JhZGVcIl1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCBpZHgpID0+IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGF0dHJpYnV0ZXNbaWR4XTtcbiAgICAgICAgdmFyIHRlbXAgPSBzdHVkZW50SW5mb3JtYXRpb247XG4gICAgICAgIHRlbXBbdHlwZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgc2V0U3R1ZGVudEluZm9ybWF0aW9uKHRlbXApO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJPcHRpb25zID0gb3B0aW9ucyA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm1hcCgob3B0aW9uLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3B0aW9ufSBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2VudGVyXG4gICAgICAgICAgICBtPVwiMmVtXCJcbiAgICAgICAgICAgIHBhZGRpbmc9XCIxZW1cIlxuICAgICAgICAgICAgYmc9XCIjZWRmMmY3XCJcbiAgICAgICAgICAgIHc9XCI4MCVcIlxuICAgICAgICAgICAgZGlyPVwiY29sdW1uXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3F1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8SFN0YWNrIHc9XCIxMDAlXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdz1cIjMwJVwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+e3F1ZXN0aW9uLnF1ZXN0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3PVwiNzAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YXR0cmlidXRlc1tpZHhdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG09XCIxZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKGUsIGlkeClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlck9wdGlvbnMocXVlc3Rpb24uY2hvaWNlcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9DZW50ZXI+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnRJbmZvRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/survey-components/StudentInfoForm.js\n");

/***/ })

})