webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/SurveyPageData.js":
/*!********************************************************!*\
  !*** ./components/survey-components/SurveyPageData.js ***!
  \********************************************************/
/*! exports provided: pageData, PageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageData\", function() { return pageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageContext\", function() { return PageContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fake-data/questions.json */ \"./fake-data/questions.json\");\nvar _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fake-data/questions.json */ \"./fake-data/questions.json\", 1);\n/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fake-data/course.json */ \"./fake-data/course.json\");\nvar _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fake-data/course.json */ \"./fake-data/course.json\", 1);\n\n\n\nvar course = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2__.courses[0];\ncourse['course-outcomes'] = course['course-outcomes'].map(function (outcome) {\n  return {\n    outcome: outcome,\n    rating: 0\n  };\n});\nvar pageData = {\n  majors: [\"Computer Science\", \"Software Engineering\", \"Computer Engineering\", \"Information Technology\", \"Cyber Secuirity\"],\n  years: [\"Freshman\", \"Sophomore\", \"Junior\", \"Senior\"],\n  grades: [\"A\", \"B\", \"C\", \"D\", \"F\"],\n  course: course,\n  studentQuestions: [{\n    question: \"What is your major?\",\n    choices: [\"Computer Science\", \"Software Engineering\", \"Computer Engineering\", \"Information Technology\", \"Cyber Secuirity\"]\n  }, {\n    question: \"What is your classification?\",\n    choices: [\"Freshman\", \"Sophomore\", \"Junior\", \"Senior\"]\n  }, {\n    question: \"What grade do you expect?\",\n    choices: [\"A\", \"B\", \"C\", \"D\", \"F\"]\n  }],\n  questions: _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1__.TAquestions.map(function (question) {\n    return {\n      question: question,\n      rating: 0\n    };\n  })\n};\nvar PageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(pageData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdXJ2ZXlQYWdlRGF0YS5qcz8xOGM4Il0sIm5hbWVzIjpbImNvdXJzZSIsImNvdXJzZURhdGEiLCJjb3Vyc2VzIiwibWFwIiwib3V0Y29tZSIsInJhdGluZyIsInBhZ2VEYXRhIiwibWFqb3JzIiwieWVhcnMiLCJncmFkZXMiLCJzdHVkZW50UXVlc3Rpb25zIiwicXVlc3Rpb24iLCJjaG9pY2VzIiwicXVlc3Rpb25zIiwicXVlc3Rpb25EYXRhIiwiVEFxdWVzdGlvbnMiLCJQYWdlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsbURBQVUsQ0FBQ0MsT0FBWCxDQUFtQixDQUFuQixDQUFiO0FBQ0FGLE1BQU0sQ0FBQyxpQkFBRCxDQUFOLEdBQTRCQSxNQUFNLENBQUMsaUJBQUQsQ0FBTixDQUEwQkcsR0FBMUIsQ0FBOEIsVUFBQ0MsT0FBRCxFQUFhO0FBQ25FLFNBQU87QUFDSEEsV0FBTyxFQUNIQSxPQUZEO0FBRVVDLFVBQU0sRUFBRTtBQUZsQixHQUFQO0FBSUgsQ0FMMkIsQ0FBNUI7QUFNTyxJQUFNQyxRQUFRLEdBQUc7QUFDcEJDLFFBQU0sRUFBRSxDQUNKLGtCQURJLEVBRUosc0JBRkksRUFHSixzQkFISSxFQUlKLHdCQUpJLEVBS0osaUJBTEksQ0FEWTtBQVFwQkMsT0FBSyxFQUFFLENBQUMsVUFBRCxFQUFhLFdBQWIsRUFBMEIsUUFBMUIsRUFBb0MsUUFBcEMsQ0FSYTtBQVNwQkMsUUFBTSxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBVFk7QUFVcEJULFFBQU0sRUFBRUEsTUFWWTtBQVdwQlUsa0JBQWdCLEVBQUUsQ0FDZDtBQUNJQyxZQUFRLEVBQUUscUJBRGQ7QUFFSUMsV0FBTyxFQUFFLENBQ0wsa0JBREssRUFFTCxzQkFGSyxFQUdMLHNCQUhLLEVBSUwsd0JBSkssRUFLTCxpQkFMSztBQUZiLEdBRGMsRUFXZDtBQUNJRCxZQUFRLEVBQUUsOEJBRGQ7QUFFSUMsV0FBTyxFQUFFLENBQ0wsVUFESyxFQUVMLFdBRkssRUFHTCxRQUhLLEVBSUwsUUFKSztBQUZiLEdBWGMsRUFvQmQ7QUFDSUQsWUFBUSxFQUFFLDJCQURkO0FBRUlDLFdBQU8sRUFBRSxDQUNMLEdBREssRUFFTCxHQUZLLEVBR0wsR0FISyxFQUlMLEdBSkssRUFLTCxHQUxLO0FBRmIsR0FwQmMsQ0FYRTtBQTBDcEJDLFdBQVMsRUFBRUMsc0RBQVksQ0FBQ0MsV0FBYixDQUF5QlosR0FBekIsQ0FBNkIsVUFBQ1EsUUFBRCxFQUFjO0FBQ2xELFdBQU87QUFDSEEsY0FBUSxFQUFSQSxRQURHO0FBRUhOLFlBQU0sRUFBRTtBQUZMLEtBQVA7QUFJSCxHQUxVO0FBMUNTLENBQWpCO0FBa0RBLElBQU1XLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUNYLFFBQUQsQ0FBakMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1N1cnZleVBhZ2VEYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHF1ZXN0aW9uRGF0YSBmcm9tIFwiLi4vLi4vZmFrZS1kYXRhL3F1ZXN0aW9ucy5qc29uXCI7XG5pbXBvcnQgY291cnNlRGF0YSBmcm9tIFwiLi4vLi4vZmFrZS1kYXRhL2NvdXJzZS5qc29uXCI7XG5cbnZhciBjb3Vyc2UgPSBjb3Vyc2VEYXRhLmNvdXJzZXNbMF07XG5jb3Vyc2VbJ2NvdXJzZS1vdXRjb21lcyddID0gY291cnNlWydjb3Vyc2Utb3V0Y29tZXMnXS5tYXAoKG91dGNvbWUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvdXRjb21lOlxuICAgICAgICAgICAgb3V0Y29tZSwgcmF0aW5nOiAwXG4gICAgfTtcbn0pO1xuZXhwb3J0IGNvbnN0IHBhZ2VEYXRhID0ge1xuICAgIG1ham9yczogW1xuICAgICAgICBcIkNvbXB1dGVyIFNjaWVuY2VcIixcbiAgICAgICAgXCJTb2Z0d2FyZSBFbmdpbmVlcmluZ1wiLFxuICAgICAgICBcIkNvbXB1dGVyIEVuZ2luZWVyaW5nXCIsXG4gICAgICAgIFwiSW5mb3JtYXRpb24gVGVjaG5vbG9neVwiLFxuICAgICAgICBcIkN5YmVyIFNlY3Vpcml0eVwiLFxuICAgIF0sXG4gICAgeWVhcnM6IFtcIkZyZXNobWFuXCIsIFwiU29waG9tb3JlXCIsIFwiSnVuaW9yXCIsIFwiU2VuaW9yXCJdLFxuICAgIGdyYWRlczogW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkZcIl0sXG4gICAgY291cnNlOiBjb3Vyc2UsXG4gICAgc3R1ZGVudFF1ZXN0aW9uczogW1xuICAgICAgICB7IFxuICAgICAgICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyB5b3VyIG1ham9yP1wiLFxuICAgICAgICAgICAgY2hvaWNlczogW1xuICAgICAgICAgICAgICAgIFwiQ29tcHV0ZXIgU2NpZW5jZVwiLFxuICAgICAgICAgICAgICAgIFwiU29mdHdhcmUgRW5naW5lZXJpbmdcIixcbiAgICAgICAgICAgICAgICBcIkNvbXB1dGVyIEVuZ2luZWVyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJJbmZvcm1hdGlvbiBUZWNobm9sb2d5XCIsXG4gICAgICAgICAgICAgICAgXCJDeWJlciBTZWN1aXJpdHlcIixcbiAgICAgICAgICAgIF0gXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIHlvdXIgY2xhc3NpZmljYXRpb24/XCIsXG4gICAgICAgICAgICBjaG9pY2VzOiBbXG4gICAgICAgICAgICAgICAgXCJGcmVzaG1hblwiLFxuICAgICAgICAgICAgICAgIFwiU29waG9tb3JlXCIsXG4gICAgICAgICAgICAgICAgXCJKdW5pb3JcIixcbiAgICAgICAgICAgICAgICBcIlNlbmlvclwiLFxuICAgICAgICAgICAgXSBcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICAgIHF1ZXN0aW9uOiBcIldoYXQgZ3JhZGUgZG8geW91IGV4cGVjdD9cIixcbiAgICAgICAgICAgIGNob2ljZXM6IFtcbiAgICAgICAgICAgICAgICBcIkFcIixcbiAgICAgICAgICAgICAgICBcIkJcIixcbiAgICAgICAgICAgICAgICBcIkNcIixcbiAgICAgICAgICAgICAgICBcIkRcIixcbiAgICAgICAgICAgICAgICBcIkZcIlxuICAgICAgICAgICAgXSBcbiAgICAgICAgfVxuICAgIF0sXG4gICAgcXVlc3Rpb25zOiBxdWVzdGlvbkRhdGEuVEFxdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlc3Rpb24sXG4gICAgICAgICAgICByYXRpbmc6IDBcbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG5leHBvcnQgY29uc3QgUGFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHBhZ2VEYXRhKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/survey-components/SurveyPageData.js\n");

/***/ })

})