webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FileUpload.js":
/*!**********************************!*\
  !*** ./components/FileUpload.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./api/api.js");


var _jsxFileName = "C:\\Users\\Ty\\Desktop\\New folder (3)\\ABET_Course_Assessment_Tool\\components\\FileUpload.js",
    _this = undefined;




var FileUpload = function FileUpload() {
  var uploadfunction = function uploadfunction() {
    var formData = new FormData();
    var fileInput = document.getElementById('file-input');
    formData.append("file", fileInput.files[0]);
    new _api_api__WEBPACK_IMPORTED_MODULE_2__["default"]().uploadAccessDb(formData);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "file",
      id: "file-input",
      accept: ".accdb"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: uploadfunction,
      children: "Upload_File"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this);
};

_c = FileUpload;
/* harmony default export */ __webpack_exports__["default"] = (FileUpload);

var _c;

$RefreshReg$(_c, "FileUpload");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/LoginBox.js":
/*!********************************!*\
  !*** ./components/LoginBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _FileUpload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FileUpload */ "./components/FileUpload.js");





var _jsxFileName = "C:\\Users\\Ty\\Desktop\\New folder (3)\\ABET_Course_Assessment_Tool\\components\\LoginBox.js",
    _this = undefined,
    _s = $RefreshSig$();







var LoginBox = function LoginBox() {
  _s();

  var _useInputState = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInputState2 = Object(C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useInputState, 3),
      username = _useInputState2[0],
      setUsername = _useInputState2[1],
      resetUsername = _useInputState2[2];

  var _useInputState3 = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInputState4 = Object(C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useInputState3, 3),
      password = _useInputState4[0],
      setPassword = _useInputState4[1],
      resetPassword = _useInputState4[2];

  var toast = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["useToast"])();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(evt) {
      var response;
      return C_Users_Ty_Desktop_New_folder_3_ABET_Course_Assessment_Tool_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              evt.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_7__["login"])(username, password);

            case 4:
              response = _context.sent;

              if (response) {
                //alert("success");
                toast({
                  title: "Token created.",
                  description: "Here's your token 🪙",
                  status: "success",
                  duration: 9000,
                  isClosable: true
                });
                console.log(response);
              } else toast({
                title: "Incorrect UserID or password",
                description: "Here's your token 🪙",
                status: "error",
                duration: 9000,
                isClosable: true
              });

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              alert("try 'admin' & 'admin'");

            case 11:
              _context.prev = 11;
              resetUsername();
              resetPassword();
              return _context.finish(11);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8, 11, 15]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    mt: "10%",
    ml: "auto",
    mr: "auto",
    padding: "2em",
    bg: "#edf2f7",
    w: "80%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontSize: "xl",
      fontWeight: "bold",
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
        isRequired: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
          htmlFor: "username",
          margin: "1rem",
          mt: "3rem",
          children: "Username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          placeholder: "EUID",
          value: username,
          onChange: setUsername,
          bg: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
        isRequired: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
          htmlFor: "password",
          margin: "1rem",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          placeholder: "Password",
          type: "password",
          value: password,
          onChange: setPassword,
          bg: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        colorScheme: "green",
        margin: "1rem",
        onClick: handleSubmit,
        type: "submit",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/instructorHome",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          colorScheme: "blue",
          children: "Instructor Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/adminHome",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          colorScheme: "blue",
          margin: "1rem",
          children: "Admin Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FileUpload__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_s(LoginBox, "Qa5b6iaDv4IkyUWlsOe/9TfQpVY=", false, function () {
  return [_hooks_useInputState__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInputState__WEBPACK_IMPORTED_MODULE_5__["default"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["useToast"]];
});

_c = LoginBox;
/* harmony default export */ __webpack_exports__["default"] = (LoginBox);

var _c;

$RefreshReg$(_c, "LoginBox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWxlVXBsb2FkLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvZ2luQm94LmpzIl0sIm5hbWVzIjpbIkZpbGVVcGxvYWQiLCJ1cGxvYWRmdW5jdGlvbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmaWxlSW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kIiwiZmlsZXMiLCJBUEkiLCJ1cGxvYWRBY2Nlc3NEYiIsIkxvZ2luQm94IiwidXNlSW5wdXRTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyZXNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJ0b2FzdCIsInVzZVRvYXN0IiwiaGFuZGxlU3VibWl0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJsb2dpbiIsInJlc3BvbnNlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixRQUFNQyxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBRUFKLFlBQVEsQ0FBQ0ssTUFBVCxDQUFnQixNQUFoQixFQUF3QkgsU0FBUyxDQUFDSSxLQUFWLENBQWdCLENBQWhCLENBQXhCO0FBQ0EsUUFBSUMsZ0RBQUosR0FBVUMsY0FBVixDQUF5QlIsUUFBekI7QUFDSCxHQU5EOztBQVFBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBTyxVQUFJLEVBQUMsTUFB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O0FBQUE7QUFBQSxlQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQTBCSCxDQWxFRDs7R0FBTVYsUTtVQUU2Q0MsNEQsRUFDQUEsNEQsRUFDakNRLHlEOzs7S0FKWlQsUTtBQW9FU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWYwYzdkMmM5MTYxMWM0YWNmMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL2FwaSc7XHJcblxyXG5jb25zdCBGaWxlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXBsb2FkZnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBjb25zdCBmaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS1pbnB1dCcpO1xyXG5cclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGVJbnB1dC5maWxlc1swXSk7XHJcbiAgICAgICAgbmV3IEFQSSgpLnVwbG9hZEFjY2Vzc0RiKGZvcm1EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgXHJcbiAgICAgICAgICAgIGlkPVwiZmlsZS1pbnB1dFwiIFxyXG4gICAgICAgICAgICBhY2NlcHQ9XCIuYWNjZGJcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt1cGxvYWRmdW5jdGlvbn0+VXBsb2FkX0ZpbGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkOyIsImltcG9ydCB7Qm94LCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgQnV0dG9uLCBUZXh0LCB1c2VUb2FzdH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB1c2VJbnB1dFN0YXRlIGZyb20gJy4uL2hvb2tzL3VzZUlucHV0U3RhdGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2FwaS9BUElIZWxwZXInO1xyXG5pbXBvcnQgRmlsZVVwbG9hZCBmcm9tICcuL0ZpbGVVcGxvYWQnXHJcblxyXG5jb25zdCBMb2dpbkJveCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lLCByZXNldFVzZXJuYW1lXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkLCByZXNldFBhc3N3b3JkXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldnQpID0+IHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRva2VuIGNyZWF0ZWQuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSGVyZSdzIHlvdXIgdG9rZW4g8J+qmVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICB0b2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbmNvcnJlY3QgVXNlcklEIG9yIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJIZXJlJ3MgeW91ciB0b2tlbiDwn6qZXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwLFxyXG4gICAgICAgICAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidHJ5ICdhZG1pbicgJiAnYWRtaW4nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5e1xyXG4gICAgICAgICAgICByZXNldFVzZXJuYW1lKCk7XHJcbiAgICAgICAgICAgIHJlc2V0UGFzc3dvcmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPEJveCBtdD1cIjEwJVwiIG1sPVwiYXV0b1wiIG1yPVwiYXV0b1wiIHBhZGRpbmc9XCIyZW1cIiBiZz1cIiNlZGYyZjdcIiB3PVwiODAlXCIgYm94U2hhZG93PVwiMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KVwiPlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwieGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiPkxvZ2luPC9UZXh0PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gICAgXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNSZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIG1hcmdpbiA9IFwiMXJlbVwiIG10PVwiM3JlbVwiPlVzZXJuYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRVVJRFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9e3NldFVzZXJuYW1lfSBiZz1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNSZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIG1hcmdpbiA9IFwiMXJlbVwiPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtzZXRQYXNzd29yZH0gYmc9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImdyZWVuXCIgbWFyZ2luID0gXCIxcmVtXCIgb25DbGljayA9IHtoYW5kbGVTdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj5TaWduIEluPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3JIb21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiA+SW5zdHJ1Y3RvciBIb21lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbkhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1hcmdpbiA9IFwiMXJlbVwiPkFkbWluIEhvbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxGaWxlVXBsb2FkIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQm94OyJdLCJzb3VyY2VSb290IjoiIn0=