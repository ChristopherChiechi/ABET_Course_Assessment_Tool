webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./components/survey-components/SurveyPageData.js":
/*!********************************************************!*\
  !*** ./components/survey-components/SurveyPageData.js ***!
  \********************************************************/
/*! exports provided: pageData, PageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageData\", function() { return pageData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PageContext\", function() { return PageContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fake-data/questions.json */ \"./fake-data/questions.json\");\nvar _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fake-data/questions.json */ \"./fake-data/questions.json\", 1);\n/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fake-data/course.json */ \"./fake-data/course.json\");\nvar _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../fake-data/course.json */ \"./fake-data/course.json\", 1);\n\n\n\nvar course = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_2__.courses[0];\ncourse['course-outcomes'] = course['course-outcomes'].map(function (outcome) {\n  return {\n    outcome: outcome,\n    rating: 0\n  };\n});\nvar pageData = {\n  majors: [\"Computer Science\", \"Software Engineering\", \"Computer Engineering\", \"Information Technology\", \"Cyber Secuirity\"],\n  years: [\"Freshman\", \"Sophomore\", \"Junior\", \"Senior\"],\n  grades: [\"A\", \"B\", \"C\", \"D\", \"F\"],\n  course: course,\n  studentQuestions: [\"What is your major?\", \"What is your classification?\", \"What grade do you expect?\"],\n  questions: _fake_data_questions_json__WEBPACK_IMPORTED_MODULE_1__.TAquestions.map(function (question) {\n    return {\n      question: question,\n      rating: 0\n    };\n  })\n};\nvar PageContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(pageData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdXJ2ZXlQYWdlRGF0YS5qcz8xOGM4Il0sIm5hbWVzIjpbImNvdXJzZSIsImNvdXJzZURhdGEiLCJjb3Vyc2VzIiwibWFwIiwib3V0Y29tZSIsInJhdGluZyIsInBhZ2VEYXRhIiwibWFqb3JzIiwieWVhcnMiLCJncmFkZXMiLCJzdHVkZW50UXVlc3Rpb25zIiwicXVlc3Rpb25zIiwicXVlc3Rpb25EYXRhIiwiVEFxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlBhZ2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBSUEsTUFBTSxHQUFHQyxtREFBVSxDQUFDQyxPQUFYLENBQW1CLENBQW5CLENBQWI7QUFDQUYsTUFBTSxDQUFDLGlCQUFELENBQU4sR0FBNEJBLE1BQU0sQ0FBQyxpQkFBRCxDQUFOLENBQTBCRyxHQUExQixDQUE4QixVQUFDQyxPQUFELEVBQWE7QUFDbkUsU0FBTztBQUNIQSxXQUFPLEVBQ1BBLE9BRkc7QUFFTUMsVUFBTSxFQUFFO0FBRmQsR0FBUDtBQUlILENBTDJCLENBQTVCO0FBTU8sSUFBTUMsUUFBUSxHQUFHO0FBQ3BCQyxRQUFNLEVBQUUsQ0FDSixrQkFESSxFQUVKLHNCQUZJLEVBR0osc0JBSEksRUFJSix3QkFKSSxFQUtKLGlCQUxJLENBRFk7QUFRcEJDLE9BQUssRUFBRSxDQUFDLFVBQUQsRUFBYSxXQUFiLEVBQTBCLFFBQTFCLEVBQW9DLFFBQXBDLENBUmE7QUFTcEJDLFFBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixDQVRZO0FBVXBCVCxRQUFNLEVBQUVBLE1BVlk7QUFXcEJVLGtCQUFnQixFQUFFLENBQ2QscUJBRGMsRUFFZCw4QkFGYyxFQUdkLDJCQUhjLENBWEU7QUFnQnBCQyxXQUFTLEVBQUVDLHNEQUFZLENBQUNDLFdBQWIsQ0FBeUJWLEdBQXpCLENBQTZCLFVBQUNXLFFBQUQsRUFBYztBQUNsRCxXQUFPO0FBQ0hBLGNBQVEsRUFBUkEsUUFERztBQUVIVCxZQUFNLEVBQUU7QUFGTCxLQUFQO0FBSUgsR0FMVTtBQWhCUyxDQUFqQjtBQXdCQSxJQUFNVSxXQUFXLGdCQUFHQywyREFBYSxDQUFDVixRQUFELENBQWpDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdXJ2ZXlQYWdlRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBxdWVzdGlvbkRhdGEgZnJvbSBcIi4uLy4uL2Zha2UtZGF0YS9xdWVzdGlvbnMuanNvblwiO1xuaW1wb3J0IGNvdXJzZURhdGEgZnJvbSBcIi4uLy4uL2Zha2UtZGF0YS9jb3Vyc2UuanNvblwiO1xuXG52YXIgY291cnNlID0gY291cnNlRGF0YS5jb3Vyc2VzWzBdO1xuY291cnNlWydjb3Vyc2Utb3V0Y29tZXMnXSA9IGNvdXJzZVsnY291cnNlLW91dGNvbWVzJ10ubWFwKChvdXRjb21lKSA9PiB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAgIG91dGNvbWU6IFxuICAgICAgICBvdXRjb21lLCByYXRpbmc6IDAgXG4gICAgfTtcbn0pO1xuZXhwb3J0IGNvbnN0IHBhZ2VEYXRhID0ge1xuICAgIG1ham9yczogW1xuICAgICAgICBcIkNvbXB1dGVyIFNjaWVuY2VcIixcbiAgICAgICAgXCJTb2Z0d2FyZSBFbmdpbmVlcmluZ1wiLFxuICAgICAgICBcIkNvbXB1dGVyIEVuZ2luZWVyaW5nXCIsXG4gICAgICAgIFwiSW5mb3JtYXRpb24gVGVjaG5vbG9neVwiLFxuICAgICAgICBcIkN5YmVyIFNlY3Vpcml0eVwiLFxuICAgIF0sXG4gICAgeWVhcnM6IFtcIkZyZXNobWFuXCIsIFwiU29waG9tb3JlXCIsIFwiSnVuaW9yXCIsIFwiU2VuaW9yXCJdLFxuICAgIGdyYWRlczogW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkZcIl0sXG4gICAgY291cnNlOiBjb3Vyc2UsXG4gICAgc3R1ZGVudFF1ZXN0aW9uczogW1xuICAgICAgICBcIldoYXQgaXMgeW91ciBtYWpvcj9cIixcbiAgICAgICAgXCJXaGF0IGlzIHlvdXIgY2xhc3NpZmljYXRpb24/XCIsXG4gICAgICAgIFwiV2hhdCBncmFkZSBkbyB5b3UgZXhwZWN0P1wiXG4gICAgXSxcbiAgICBxdWVzdGlvbnM6IHF1ZXN0aW9uRGF0YS5UQXF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWVzdGlvbixcbiAgICAgICAgICAgIHJhdGluZzogMFxuICAgICAgICB9XG4gICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQocGFnZURhdGEpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/survey-components/SurveyPageData.js\n");

/***/ })

})