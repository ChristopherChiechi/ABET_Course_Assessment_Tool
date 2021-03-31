webpackHotUpdate_N_E("pages/studentSurvey",{

/***/ "./pages/studentSurvey.js":
/*!********************************!*\
  !*** ./pages/studentSurvey.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_armaandhanoa_Documents_Documents_Armaan_s_Mac_mini_Projects_ABET_Spring21_FontNew_ABET_Course_Assessment_Tool_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useToggle */ \"./hooks/useToggle.js\");\n/* harmony import */ var _components_survey_components_StudentLoginBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/survey-components/StudentLoginBox */ \"./components/survey-components/StudentLoginBox.js\");\n/* harmony import */ var _components_survey_components_StudentInfoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/survey-components/StudentInfoForm */ \"./components/survey-components/StudentInfoForm.js\");\n/* harmony import */ var _components_survey_components_CourseOutcomesSurvey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/survey-components/CourseOutcomesSurvey */ \"./components/survey-components/CourseOutcomesSurvey.js\");\n/* harmony import */ var _components_survey_components_TAsurvey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/survey-components/TAsurvey */ \"./components/survey-components/TAsurvey.js\");\n/* harmony import */ var _components_survey_components_SurveyPageData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/survey-components/SurveyPageData */ \"./components/survey-components/SurveyPageData.js\");\n/* harmony import */ var _components_survey_components_StudentFeedback__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/survey-components/StudentFeedback */ \"./components/survey-components/StudentFeedback.js\");\n\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/pages/studentSurvey.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n//imports\n\n //hooks\n\n //components\n\n\n\n\n //page data \n\n\n\n\nvar studentSurvey = function studentSurvey() {\n  _s();\n\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_components_survey_components_SurveyPageData__WEBPACK_IMPORTED_MODULE_9__[\"PageContext\"]);\n  var course = context.course; //state\n\n  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(true),\n      _useToggle2 = Object(_Users_armaandhanoa_Documents_Documents_Armaan_s_Mac_mini_Projects_ABET_Spring21_FontNew_ABET_Course_Assessment_Tool_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useToggle, 2),\n      isLoggedIn = _useToggle2[0],\n      toggleLogin = _useToggle2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    major: \"\",\n    classification: \"\",\n    expectedGrade: \"\"\n  }),\n      studentInformation = _useState[0],\n      setStudentInformation = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(context.course['course-outcomes']),\n      outcomeSurvey = _useState2[0],\n      setOutcomeSurvey = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(context.questions),\n      TAquestions = _useState3[0],\n      setTAquestions = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    TAeval: \"\",\n    additionalFeedback: \"\"\n  }),\n      studentInput = _useState4[0],\n      setStudentInput = _useState4[1];\n\n  var testFunction = function testFunction() {\n    console.log(studentInformation, outcomeSurvey, TAquestions, studentInput);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_SurveyPageData__WEBPACK_IMPORTED_MODULE_9__[\"PageContext\"].Provider, {\n    value: _components_survey_components_SurveyPageData__WEBPACK_IMPORTED_MODULE_9__[\"pageData\"],\n    children: isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n      mt: \"2em\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"2xl\",\n        fontWeight: \"bold\",\n        children: [course.code, \" \", course.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_StudentInfoForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        studentInformation: studentInformation,\n        setStudentInformation: setStudentInformation\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_CourseOutcomesSurvey__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        outcomeSurvey: outcomeSurvey,\n        setOutcomeSurvey: setOutcomeSurvey\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_TAsurvey__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        TAquestions: TAquestions,\n        setTAquestions: setTAquestions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_StudentFeedback__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        studentInput: studentInput,\n        setStudentInput: setStudentInput\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n        onClick: testFunction,\n        mb: \"1em\",\n        colorScheme: \"green\",\n        children: \"Submit Survey\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_survey_components_StudentLoginBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      toggleLoggin: toggleLogin\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(studentSurvey, \"rxAaFpoKQ7c+xKvubPtBARGV8dU=\", false, function () {\n  return [_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (studentSurvey);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R1ZGVudFN1cnZleS5qcz84YWM2Il0sIm5hbWVzIjpbInN0dWRlbnRTdXJ2ZXkiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlBhZ2VDb250ZXh0IiwiY291cnNlIiwidXNlVG9nZ2xlIiwiaXNMb2dnZWRJbiIsInRvZ2dsZUxvZ2luIiwidXNlU3RhdGUiLCJtYWpvciIsImNsYXNzaWZpY2F0aW9uIiwiZXhwZWN0ZWRHcmFkZSIsInN0dWRlbnRJbmZvcm1hdGlvbiIsInNldFN0dWRlbnRJbmZvcm1hdGlvbiIsIm91dGNvbWVTdXJ2ZXkiLCJzZXRPdXRjb21lU3VydmV5IiwicXVlc3Rpb25zIiwiVEFxdWVzdGlvbnMiLCJzZXRUQXF1ZXN0aW9ucyIsIlRBZXZhbCIsImFkZGl0aW9uYWxGZWVkYmFjayIsInN0dWRlbnRJbnB1dCIsInNldFN0dWRlbnRJbnB1dCIsInRlc3RGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYWdlRGF0YSIsImNvZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBU0E7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFDMUIsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyx3RkFBRCxDQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUF2QixDQUYwQixDQUkxQjs7QUFKMEIsbUJBS1FDLGdFQUFTLENBQUMsSUFBRCxDQUxqQjtBQUFBO0FBQUEsTUFLbkJDLFVBTG1CO0FBQUEsTUFLUEMsV0FMTzs7QUFBQSxrQkFNMEJDLHNEQUFRLENBQUM7QUFDM0RDLFNBQUssRUFBRSxFQURvRDtBQUUzREMsa0JBQWMsRUFBRSxFQUYyQztBQUczREMsaUJBQWEsRUFBRTtBQUg0QyxHQUFELENBTmxDO0FBQUEsTUFNbkJDLGtCQU5tQjtBQUFBLE1BTUNDLHFCQU5EOztBQUFBLG1CQVdnQkwsc0RBQVEsQ0FBQ1AsT0FBTyxDQUFDRyxNQUFSLENBQWUsaUJBQWYsQ0FBRCxDQVh4QjtBQUFBLE1BV25CVSxhQVhtQjtBQUFBLE1BV0pDLGdCQVhJOztBQUFBLG1CQVlZUCxzREFBUSxDQUFDUCxPQUFPLENBQUNlLFNBQVQsQ0FacEI7QUFBQSxNQVluQkMsV0FabUI7QUFBQSxNQVlOQyxjQVpNOztBQUFBLG1CQWFjVixzREFBUSxDQUFDO0FBQy9DVyxVQUFNLEVBQUUsRUFEdUM7QUFFL0NDLHNCQUFrQixFQUFFO0FBRjJCLEdBQUQsQ0FidEI7QUFBQSxNQWFuQkMsWUFibUI7QUFBQSxNQWFMQyxlQWJLOztBQWtCMUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkMsV0FBTyxDQUFDQyxHQUFSLENBQVliLGtCQUFaLEVBQWdDRSxhQUFoQyxFQUErQ0csV0FBL0MsRUFBNERJLFlBQTVEO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRSxxRUFBQyx3RkFBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFSyxxRkFBN0I7QUFBQSxjQUNHcEIsVUFBVSxnQkFFVCxxRUFBQyx1REFBRDtBQUFRLFFBQUUsRUFBQyxLQUFYO0FBQUEsOEJBQ0UscUVBQUMscURBQUQ7QUFBTSxnQkFBUSxFQUFDLEtBQWY7QUFBcUIsa0JBQVUsRUFBQyxNQUFoQztBQUFBLG1CQUF3Q0YsTUFBTSxDQUFDdUIsSUFBL0MsT0FBc0R2QixNQUFNLENBQUN3QixJQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFLHFFQUFDLHFGQUFEO0FBQWlCLDBCQUFrQixFQUFFaEIsa0JBQXJDO0FBQXlELDZCQUFxQixFQUFFQztBQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRSxxRUFBQywwRkFBRDtBQUFzQixxQkFBYSxFQUFFQyxhQUFyQztBQUFvRCx3QkFBZ0IsRUFBRUM7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0UscUVBQUMsOEVBQUQ7QUFBVSxtQkFBVyxFQUFFRSxXQUF2QjtBQUFvQyxzQkFBYyxFQUFFQztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNRSxxRUFBQyxzRkFBRDtBQUFpQixvQkFBWSxFQUFFRyxZQUEvQjtBQUE2Qyx1QkFBZSxFQUFFQztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFRRSxxRUFBQyx1REFBRDtBQUFRLGVBQU8sRUFBRUMsWUFBakI7QUFBK0IsVUFBRSxFQUFDLEtBQWxDO0FBQXdDLG1CQUFXLEVBQUMsT0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGUyxnQkFhVCxxRUFBQyxxRkFBRDtBQUFpQixrQkFBWSxFQUFFaEI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQXZDRDs7R0FBTVAsYTtVQUs4Qkssd0Q7OztBQW1DckJMLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc3R1ZGVudFN1cnZleS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0c1xuaW1wb3J0IHtcbiAgdXNlU3RhdGUsXG4gIHVzZUNvbnRleHRcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBUZXh0LFxuICBWU3RhY2ssXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbi8vaG9va3NcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSBcIi4uL2hvb2tzL3VzZVRvZ2dsZVwiXG4vL2NvbXBvbmVudHNcbmltcG9ydCBTdHVkZW50TG9naW5Cb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvc3VydmV5LWNvbXBvbmVudHMvU3R1ZGVudExvZ2luQm94XCI7XG5pbXBvcnQgU3R1ZGVudEluZm9Gb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1N0dWRlbnRJbmZvRm9ybVwiO1xuaW1wb3J0IENvdXJzZU91dGNvbWVzU3VydmV5IGZyb20gXCIuLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL0NvdXJzZU91dGNvbWVzU3VydmV5XCI7XG5pbXBvcnQgVEFzdXJ2ZXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3VydmV5LWNvbXBvbmVudHMvVEFzdXJ2ZXlcIjtcbi8vcGFnZSBkYXRhIFxuaW1wb3J0IHsgUGFnZUNvbnRleHQsIHBhZ2VEYXRhIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdXJ2ZXktY29tcG9uZW50cy9TdXJ2ZXlQYWdlRGF0YSc7XG5pbXBvcnQgU3R1ZGVudEZlZWRiYWNrIGZyb20gXCIuLi9jb21wb25lbnRzL3N1cnZleS1jb21wb25lbnRzL1N0dWRlbnRGZWVkYmFja1wiO1xuXG5jb25zdCBzdHVkZW50U3VydmV5ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChQYWdlQ29udGV4dCk7XG4gIGNvbnN0IGNvdXJzZSA9IGNvbnRleHQuY291cnNlO1xuXG4gIC8vc3RhdGVcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHRvZ2dsZUxvZ2luXSA9IHVzZVRvZ2dsZSh0cnVlKTtcbiAgY29uc3QgW3N0dWRlbnRJbmZvcm1hdGlvbiwgc2V0U3R1ZGVudEluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICBtYWpvcjogXCJcIixcbiAgICBjbGFzc2lmaWNhdGlvbjogXCJcIixcbiAgICBleHBlY3RlZEdyYWRlOiBcIlwiXG4gIH0pO1xuICBjb25zdCBbb3V0Y29tZVN1cnZleSwgc2V0T3V0Y29tZVN1cnZleV0gPSB1c2VTdGF0ZShjb250ZXh0LmNvdXJzZVsnY291cnNlLW91dGNvbWVzJ10pO1xuICBjb25zdCBbVEFxdWVzdGlvbnMsIHNldFRBcXVlc3Rpb25zXSA9IHVzZVN0YXRlKGNvbnRleHQucXVlc3Rpb25zKVxuICBjb25zdCBbc3R1ZGVudElucHV0LCBzZXRTdHVkZW50SW5wdXRdID0gdXNlU3RhdGUoe1xuICAgIFRBZXZhbDogXCJcIixcbiAgICBhZGRpdGlvbmFsRmVlZGJhY2s6IFwiXCJcbiAgfSlcblxuICBjb25zdCB0ZXN0RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3R1ZGVudEluZm9ybWF0aW9uLCBvdXRjb21lU3VydmV5LCBUQXF1ZXN0aW9ucywgc3R1ZGVudElucHV0KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UGFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3BhZ2VEYXRhfT5cbiAgICAgIHtpc0xvZ2dlZEluXG4gICAgICAgID9cbiAgICAgICAgPFZTdGFjayBtdD1cIjJlbVwiPlxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCIgZm9udFdlaWdodD1cImJvbGRcIj57Y291cnNlLmNvZGV9IHtjb3Vyc2UubmFtZX08L1RleHQ+XG5cbiAgICAgICAgICA8U3R1ZGVudEluZm9Gb3JtIHN0dWRlbnRJbmZvcm1hdGlvbj17c3R1ZGVudEluZm9ybWF0aW9ufSBzZXRTdHVkZW50SW5mb3JtYXRpb249e3NldFN0dWRlbnRJbmZvcm1hdGlvbn0gLz5cbiAgICAgICAgICA8Q291cnNlT3V0Y29tZXNTdXJ2ZXkgb3V0Y29tZVN1cnZleT17b3V0Y29tZVN1cnZleX0gc2V0T3V0Y29tZVN1cnZleT17c2V0T3V0Y29tZVN1cnZleX0vPlxuICAgICAgICAgIDxUQXN1cnZleSBUQXF1ZXN0aW9ucz17VEFxdWVzdGlvbnN9IHNldFRBcXVlc3Rpb25zPXtzZXRUQXF1ZXN0aW9uc30vPlxuICAgICAgICAgIDxTdHVkZW50RmVlZGJhY2sgc3R1ZGVudElucHV0PXtzdHVkZW50SW5wdXR9IHNldFN0dWRlbnRJbnB1dD17c2V0U3R1ZGVudElucHV0fS8+XG5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Rlc3RGdW5jdGlvbn0gbWI9XCIxZW1cIiBjb2xvclNjaGVtZT1cImdyZWVuXCI+U3VibWl0IFN1cnZleTwvQnV0dG9uPlxuICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgOlxuICAgICAgICA8U3R1ZGVudExvZ2luQm94IHRvZ2dsZUxvZ2dpbj17dG9nZ2xlTG9naW59IC8+XG4gICAgICB9XG4gICAgPC9QYWdlQ29udGV4dC5Qcm92aWRlcj4pXG59O1xuZXhwb3J0IGRlZmF1bHQgc3R1ZGVudFN1cnZleTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/studentSurvey.js\n");

/***/ })

})