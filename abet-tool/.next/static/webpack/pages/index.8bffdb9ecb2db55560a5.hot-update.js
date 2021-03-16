webpackHotUpdate_N_E("pages/index",{

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return API; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-cutter */ "./node_modules/cookie-cutter/index.js");
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_cutter__WEBPACK_IMPORTED_MODULE_4__);




// Helper API Class

var root = "https://localhost:44372/api"; // The base URL for each request

var OK = 200; //200 Ok status code

var JSON_ERROR_MSG = "Error: Could not parse JSON.";
var NOT_LOGGED_IN_MSG = "Error: Your session has expired. Please log in again.";
var token = ""; //holds value of the token cookie

var tokenExpiration;

var API = /*#__PURE__*/function () {
  function API() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, API);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(API, [{
    key: "setToken",

    /* This function is for getInitialProps.
    cookieCutter is undefined in getInitialProps,
    so this function sets the token to the value of the cookie
    passed in from getInitialProps. */
    value: function setToken() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      token = t;
    } // generic function for sending POST requests
    //    Input: route and body
    //    Output: The JSON that is returned from the route

  }, {
    key: "sendPost",
    value: function () {
      var _sendPost = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var route,
            body,
            isLoginAttempt,
            url,
            statusCode,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                route = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
                body = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                isLoginAttempt = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                url = root + route; // Combine the root URL with the specified route

                if (!(tokenExpiration < new Date())) {
                  _context.next = 7;
                  break;
                }

                console.log("HERE");
                return _context.abrupt("return", new ErrorObj(NOT_LOGGED_IN_MSG, false));

              case 7:
                //if the request is not from getInitialProps, meaning cookieCutter is defined, retreive the cookie
                if (typeof cookie_cutter__WEBPACK_IMPORTED_MODULE_4___default.a.get == "function") {
                  token = cookie_cutter__WEBPACK_IMPORTED_MODULE_4___default.a.get("token");
                }

                return _context.abrupt("return", fetch(url, {
                  method: "POST",
                  cache: "no-cache",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                  },
                  referrerPolicy: "no-referrer",
                  body: JSON.stringify(body)
                }).then(function (response) {
                  statusCode = response.status;
                  return response.json();
                }).then(function (json) {
                  if (statusCode == OK) return json;else return new ErrorObj(json["message"]);
                })["catch"](function () {
                  return new ErrorObj(JSON_ERROR_MSG);
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function sendPost() {
        return _sendPost.apply(this, arguments);
      }

      return sendPost;
    }() //---login(userid, password)---
    //    Input: UserId, Password
    //    Output: "Admin", "Instructor", "Student/TA" or boolean for failure

  }, {
    key: "login",
    value: function () {
      var _login = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var userid,
            password,
            body,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userid = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : "";
                password = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : "";
                body = {
                  userid: userid,
                  password: password
                };
                _context2.next = 5;
                return this.sendPost("/login", body, true).then(function (json) {
                  var expires = new Date();
                  expires.setSeconds(expires.getSeconds() + 10); //expires in 24 hours

                  tokenExpiration = expires;
                  expires = expires.toUTCString();
                  cookie_cutter__WEBPACK_IMPORTED_MODULE_4___default.a.set("token", json["token"], {
                    expires: expires
                  }); //set token cookie

                  return json["role"]; //return the role
                });

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }() //---logout(userid)---
    //    Input: None
    //    Output: None

  }, {
    key: "logout",
    value: function logout() {
      cookie_cutter__WEBPACK_IMPORTED_MODULE_4___default.a.set("token", "", {
        expires: new Date().toUTCString()
      });
      cookie_cutter__WEBPACK_IMPORTED_MODULE_4___default.a.set("user", "", {
        expires: new Date().toUTCString()
      });
    } //---getCourses(userid, semester, year)---
    //    Input: UserId, Semester, Year
    //    Output: Sections for the corresponding UserId, Semester and Year

  }, {
    key: "getCourses",
    value: function () {
      var _getCourses = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var userid,
            semester,
            year,
            body,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userid = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : "";
                semester = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "";
                year = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 0;
                body = {
                  userid: userid,
                  semester: semester,
                  year: year
                };
                _context3.next = 6;
                return this.sendPost("/sections/by-userid-semester-year", body);

              case 6:
                return _context3.abrupt("return", _context3.sent);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCourses() {
        return _getCourses.apply(this, arguments);
      }

      return getCourses;
    }() //---getAllCourses(userid, semester, year)---  (Admin)
    //    Input: UserId, Semester, Year
    //    Output: Sections for the corresponding Semester and Year 

  }, {
    key: "getAllCourses",
    value: function () {
      var _getAllCourses = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var userid,
            semester,
            year,
            body,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userid = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : "";
                semester = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : "";
                year = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 0;
                body = {
                  Userid: userid,
                  Semester: semester,
                  Year: year
                };
                _context4.next = 6;
                return this.sendPost("/sections/by-semester-year", body);

              case 6:
                return _context4.abrupt("return", _context4.sent);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAllCourses() {
        return _getAllCourses.apply(this, arguments);
      }

      return getAllCourses;
    }() //---getCoursesBySemesterYear(semester, year)---  (Admin)
    //    Input: Semester, Year
    //    Output: All Courses for the corresponding semester and year 

  }, {
    key: "getCoursesBySemesterYear",
    value: function () {
      var _getCoursesBySemesterYear = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var semester,
            year,
            body,
            _args5 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                semester = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : "";
                year = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 0;
                body = {
                  semester: semester,
                  year: year
                };
                _context5.next = 5;
                return this.sendPost("/courses/get-by-year-semester", body);

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCoursesBySemesterYear() {
        return _getCoursesBySemesterYear.apply(this, arguments);
      }

      return getCoursesBySemesterYear;
    }() //To use this data you must do the following:
    //api.getCoursesBySemesterYear(semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})
    //---getFormsBySection(userid, year, semester, department, course, section)---
    //    Input: UserId, Year, Semester, Department, CourseNumber, SectionNumber
    //    Output: Forms for the corresponding UserId, Year, Semester, Department, CourseNumber, and SectionNumber

  }, {
    key: "getFormBySection",
    value: function () {
      var _getFormBySection = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var userid,
            year,
            semester,
            department,
            courseNumber,
            sectionNumber,
            body,
            _args6 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                userid = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : "";
                year = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 0;
                semester = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : "";
                department = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : "";
                courseNumber = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : "";
                sectionNumber = _args6.length > 5 && _args6[5] !== undefined ? _args6[5] : "";
                body = {
                  Section: {
                    Instructor: {
                      Id: userid
                    },
                    Year: year,
                    Semester: semester,
                    Department: department,
                    CourseNumber: courseNumber,
                    SectionNumber: sectionNumber
                  }
                };
                _context6.next = 9;
                return this.sendPost("/forms/by-section", body);

              case 9:
                return _context6.abrupt("return", _context6.sent);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getFormBySection() {
        return _getFormBySection.apply(this, arguments);
      }

      return getFormBySection;
    }() //---getFormsByCourse(userid, year, semester, department, course)---
    //    Input: UserId, Year, Semester, Department, CourseNumber
    //    Output: Forms for the corresponding UserId, Year, Semester, Department, and CourseNumber

  }, {
    key: "getFormsByCourse",
    value: function () {
      var _getFormsByCourse = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var userid,
            year,
            semester,
            department,
            courseNumber,
            body,
            _args7 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                userid = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : "";
                year = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : 0;
                semester = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : "";
                department = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : "";
                courseNumber = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : "";
                body = {
                  Course: {
                    Coordinator: {
                      Id: userid
                    },
                    Year: year,
                    Semester: semester,
                    Department: department,
                    CourseNumber: courseNumber
                  }
                };
                _context7.next = 8;
                return this.sendPost("/forms/by-course", body);

              case 8:
                return _context7.abrupt("return", _context7.sent);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getFormsByCourse() {
        return _getFormsByCourse.apply(this, arguments);
      }

      return getFormsByCourse;
    }() //---getAllForms(userid, semester, year)--- (Admin)
    //    Input: UserId, Semester, Year
    //    Output: Forms for the corresponding Semester and Year

  }, {
    key: "getAllForms",
    value: function () {
      var _getAllForms = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var userid,
            semester,
            year,
            body,
            _args8 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                userid = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : "";
                semester = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : "";
                year = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : 0;
                body = {
                  userid: userid,
                  semester: semester,
                  year: year
                };
                _context8.next = 6;
                return this.sendPost("/forms/by-semester-year", body);

              case 6:
                return _context8.abrupt("return", _context8.sent);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getAllForms() {
        return _getAllForms.apply(this, arguments);
      }

      return getAllForms;
    }() //---postForm(userId, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades)---
    //    Input: ^^^   (will also have pdf here later as an additional parameter)
    //    Output: Success or Failure

  }, {
    key: "postForm",
    value: function () {
      var _postForm = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var userId,
            year,
            semester,
            department,
            courseNumber,
            sectionNumber,
            isSectionCompleted,
            outcomes,
            ITGrades,
            CSGrades,
            CEGrades,
            body,
            _args9 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                userId = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : "";
                year = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : 0;
                semester = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : "";
                department = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : "";
                courseNumber = _args9.length > 4 && _args9[4] !== undefined ? _args9[4] : "";
                sectionNumber = _args9.length > 5 && _args9[5] !== undefined ? _args9[5] : "";
                isSectionCompleted = _args9.length > 6 && _args9[6] !== undefined ? _args9[6] : false;
                outcomes = _args9.length > 7 && _args9[7] !== undefined ? _args9[7] : [];
                ITGrades = _args9.length > 8 && _args9[8] !== undefined ? _args9[8] : {};
                CSGrades = _args9.length > 9 && _args9[9] !== undefined ? _args9[9] : {};
                CEGrades = _args9.length > 10 && _args9[10] !== undefined ? _args9[10] : {};
                // the body will also include any pdf to post in the future
                //outcomes: an array of Course_Outcomes objects
                //Course_Outcomes class:
                //string outcome, int numberOfIT, int numberOfCS, int numberOfCE, StudentWorks[] studentWorks
                //StudentWorks class:
                //string studentWork, string fileUploaded (<-- will implement later)
                //IT, CS, CE Grades class:
                //int A, int B, int C, int D, int E, int F, int W, int I, int totalStudents
                body = {
                  form: {
                    section: {
                      instructor: {
                        id: userId
                      },
                      year: year,
                      semester: semester,
                      department: department,
                      courseNumber: courseNumber,
                      sectionNumber: sectionNumber,
                      isSectionCompleted: isSectionCompleted
                    },
                    outcomes: outcomes,
                    ITGrades: ITGrades,
                    CSGrades: CSGrades,
                    CEGrades: CEGrades
                  }
                };
                _context9.next = 14;
                return this.sendPost("/forms/post-form", body, true).then(function (response) {
                  return response.status == OK;
                });

              case 14:
                return _context9.abrupt("return", _context9.sent);

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function postForm() {
        return _postForm.apply(this, arguments);
      }

      return postForm;
    }() //---postComment(userId, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted)---
    //    Input: UserId, Year, Semester, department, courseNumber, coordinatorComment, isCourseCompleted
    //    Output: Success or Failure

  }, {
    key: "postComment",
    value: function () {
      var _postComment = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var userId,
            year,
            semester,
            department,
            courseNumber,
            coordinatorComment,
            isCourseCompleted,
            body,
            _args10 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                userId = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : "";
                year = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : 0;
                semester = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : "";
                department = _args10.length > 3 && _args10[3] !== undefined ? _args10[3] : "";
                courseNumber = _args10.length > 4 && _args10[4] !== undefined ? _args10[4] : "";
                coordinatorComment = _args10.length > 5 && _args10[5] !== undefined ? _args10[5] : "";
                isCourseCompleted = _args10.length > 6 && _args10[6] !== undefined ? _args10[6] : false;
                body = {
                  course: {
                    Coordinator: {
                      Id: userId
                    },
                    year: year,
                    semester: semester,
                    department: department,
                    courseNumber: courseNumber,
                    coordinatorComment: coordinatorComment,
                    isCourseCompleted: isCourseCompleted
                  }
                };
                _context10.next = 10;
                return this.sendPost("/courses/post-comment", body, true).then(function (response) {
                  return response.status == OK;
                });

              case 10:
                return _context10.abrupt("return", _context10.sent);

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function postComment() {
        return _postComment.apply(this, arguments);
      }

      return postComment;
    }() //---getBlankForm(userid)---
    //    Input: UserId
    //    Output: Blank Form

  }, {
    key: "getBlankForm",
    value: function () {
      var _getBlankForm = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(userid) {
        var body;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                body = {
                  userid: userid
                };
                _context11.next = 3;
                return this.sendPost("/forms/new-blank", body);

              case 3:
                return _context11.abrupt("return", _context11.sent);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getBlankForm(_x) {
        return _getBlankForm.apply(this, arguments);
      }

      return getBlankForm;
    }() //--getDefaultYearAndSemester()--
    //    Input: Nothing
    //    Output: Object Including Current Default Year and Semester

  }, {
    key: "getDefaultYearAndSemester",
    value: function getDefaultYearAndSemester() {
      var text = '{ "year": 0,' + // create string of object
      ' "semester": "" }';
      var ResultObj = JSON.parse(text); // create object from the string

      var date = new Date(); // get the current date

      var day = date.getDay(); // get the current day

      var month = date.getMonth() + 1; // add one to month (by default January = 0)

      ResultObj.year = date.getFullYear(); // get the full year from the date

      ResultObj.semester = "fall"; // just to be safe
      // Set the Default Semester Based on the Month

      if (month > 8 || month == 8 && day >= 15) {
        ResultObj.semester = "fall";
      } else if (month > 5 || month == 5 && day >= 15) {
        ResultObj.semester = "summer"; // since this is just a default semester, it always defaults to the longer semesters
        // this is why it doesn't default to smaller summer semesters
      } else {
        ResultObj.semester = "spring";
      }

      return ResultObj; // return object including the year and semester
    } //---addSection(userid, firstName, lastName, year, semester, courseNumber, sectionNumber, department, numberOfStudents)--- (Admin)
    //    Input: ^^^
    //    Output: Success or Failure

  }, {
    key: "addSection",
    value: function () {
      var _addSection = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var userid,
            firstName,
            lastName,
            year,
            semester,
            courseNumber,
            sectionNumber,
            department,
            numberOfStudents,
            body,
            _args12 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                userid = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : "";
                firstName = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : "";
                lastName = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : "";
                year = _args12.length > 3 && _args12[3] !== undefined ? _args12[3] : 0;
                semester = _args12.length > 4 && _args12[4] !== undefined ? _args12[4] : "";
                courseNumber = _args12.length > 5 && _args12[5] !== undefined ? _args12[5] : "";
                sectionNumber = _args12.length > 6 && _args12[6] !== undefined ? _args12[6] : "";
                department = _args12.length > 7 && _args12[7] !== undefined ? _args12[7] : "";
                numberOfStudents = _args12.length > 8 && _args12[8] !== undefined ? _args12[8] : 0;
                body = {
                  section: {
                    instructor: {
                      id: userid,
                      firstName: firstName,
                      lastName: lastName
                    },
                    year: year,
                    semester: semester,
                    courseNumber: courseNumber,
                    sectionNumber: sectionNumber,
                    department: department,
                    isSectionCompleted: false,
                    numberOfStudents: numberOfStudents
                  }
                };
                _context12.next = 12;
                return this.sendPost("/sections/add-section", body, true).then(function (response) {
                  return response.status == OK;
                });

              case 12:
                return _context12.abrupt("return", _context12.sent);

              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function addSection() {
        return _addSection.apply(this, arguments);
      }

      return addSection;
    }() //---getFacultyList()--- (Admin)
    //    Input: none
    //    Output: List of instructors, coordinators, adjunct faculties, and teaching fellows

  }, {
    key: "getFacultyList",
    value: function () {
      var _getFacultyList = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.sendPost("/faculty/get-list", {});

              case 2:
                return _context13.abrupt("return", _context13.sent);

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getFacultyList() {
        return _getFacultyList.apply(this, arguments);
      }

      return getFacultyList;
    }() //---addFacultyMember(firstName, lastName, userid, role)--- (Admin)
    //    Input: First Name, Last Name and User Id
    //    Output: Success or Failure

  }, {
    key: "addFacultyMember",
    value: function () {
      var _addFacultyMember = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var firstName,
            lastName,
            userId,
            facultyType,
            body,
            _args14 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                firstName = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : "";
                lastName = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : "";
                userId = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : "";
                facultyType = _args14.length > 3 && _args14[3] !== undefined ? _args14[3] : "";
                body = {
                  info: {
                    firstName: firstName,
                    lastName: lastName,
                    id: userId
                  },
                  facultyType: facultyType
                };
                _context14.next = 7;
                return this.sendPost("/faculty/add-member", body, true).then(function (response) {
                  return response.status == OK;
                });

              case 7:
                return _context14.abrupt("return", _context14.sent);

              case 8:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function addFacultyMember() {
        return _addFacultyMember.apply(this, arguments);
      }

      return addFacultyMember;
    }() //---getCoursesByDepartment(department)--- (Admin)
    //    Input: department
    //    Output: array of courses

  }, {
    key: "getCoursesByDepartment",
    value: function () {
      var _getCoursesByDepartment = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var department,
            body,
            _args15 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                department = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : "";
                body = {
                  department: department
                };
                _context15.next = 4;
                return this.sendPost("/courses/get-by-department", body);

              case 4:
                return _context15.abrupt("return", _context15.sent);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getCoursesByDepartment() {
        return _getCoursesByDepartment.apply(this, arguments);
      }

      return getCoursesByDepartment;
    }() //---addCourse(userid, firstName, lastName, year, semester, courseNumber, displayName, department)--- (Admin)
    //    Input: ^^^
    //    Output: success or failure

  }, {
    key: "addCourse",
    value: function () {
      var _addCourse = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var userid,
            firstName,
            lastName,
            year,
            semester,
            courseNumber,
            displayName,
            department,
            body,
            _args16 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                userid = _args16.length > 0 && _args16[0] !== undefined ? _args16[0] : "";
                firstName = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : "";
                lastName = _args16.length > 2 && _args16[2] !== undefined ? _args16[2] : "";
                year = _args16.length > 3 && _args16[3] !== undefined ? _args16[3] : 0;
                semester = _args16.length > 4 && _args16[4] !== undefined ? _args16[4] : "";
                courseNumber = _args16.length > 5 && _args16[5] !== undefined ? _args16[5] : "";
                displayName = _args16.length > 6 && _args16[6] !== undefined ? _args16[6] : "";
                department = _args16.length > 7 && _args16[7] !== undefined ? _args16[7] : "";
                body = {
                  Course: {
                    Coordinator: {
                      Id: userid,
                      firstName: firstName,
                      lastName: lastName
                    },
                    year: year,
                    semester: semester,
                    courseNumber: courseNumber,
                    displayName: displayName,
                    department: department
                  }
                };
                _context16.next = 11;
                return this.sendPost("/courses/add-course", body, true).then(function (response) {
                  return response.status == OK;
                });

              case 11:
                return _context16.abrupt("return", _context16.sent);

              case 12:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function addCourse() {
        return _addCourse.apply(this, arguments);
      }

      return addCourse;
    }() //---removeCourse(year, semester, courseNumber, department)--- (Admin)
    //    Input: year, semester, courseNumber, department
    //    Output: success or failure

  }, {
    key: "removeCourse",
    value: function () {
      var _removeCourse = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        var year,
            semester,
            courseNumber,
            department,
            body,
            _args17 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                year = _args17.length > 0 && _args17[0] !== undefined ? _args17[0] : 0;
                semester = _args17.length > 1 && _args17[1] !== undefined ? _args17[1] : "";
                courseNumber = _args17.length > 2 && _args17[2] !== undefined ? _args17[2] : "";
                department = _args17.length > 3 && _args17[3] !== undefined ? _args17[3] : "";
                body = {
                  Course: {
                    year: year,
                    semester: semester,
                    courseNumber: courseNumber,
                    department: department
                  }
                };
                _context17.next = 7;
                return this.sendPost("/courses/remove-course", body, true).then(function (response) {
                  return response.status == OK;
                });

              case 7:
                return _context17.abrupt("return", _context17.sent);

              case 8:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function removeCourse() {
        return _removeCourse.apply(this, arguments);
      }

      return removeCourse;
    }() //---getCourseOutcomesByCourse(year, semester, courseNumber, department)--- (Admin)
    //    Input: year, semester, courseNumber, department
    //    Output: array of course outcomes

  }, {
    key: "getCourseOutcomesByCourse",
    value: function () {
      var _getCourseOutcomesByCourse = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        var year,
            semester,
            courseNumber,
            department,
            body,
            _args18 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                year = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : 0;
                semester = _args18.length > 1 && _args18[1] !== undefined ? _args18[1] : "";
                courseNumber = _args18.length > 2 && _args18[2] !== undefined ? _args18[2] : "";
                department = _args18.length > 3 && _args18[3] !== undefined ? _args18[3] : "";
                body = {
                  Course: {
                    year: year,
                    semester: semester,
                    courseNumber: courseNumber,
                    department: department
                  }
                };
                _context18.next = 7;
                return this.sendPost("/course-outcomes/by-course", body);

              case 7:
                return _context18.abrupt("return", _context18.sent);

              case 8:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getCourseOutcomesByCourse() {
        return _getCourseOutcomesByCourse.apply(this, arguments);
      }

      return getCourseOutcomesByCourse;
    }() //---postCourseOutcomes(outcomes)--- (Admin)
    //    Input: array of outcome objects (see notes below)
    //    Output: success or failure

  }, {
    key: "postCourseOutcomes",
    value: function () {
      var _postCourseOutcomes = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var outcomes,
            body,
            _args19 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                outcomes = _args19.length > 0 && _args19[0] !== undefined ? _args19[0] : [];
                //an outcome object contains the following:
                //order (number), outcome (string), mappedStudentOutcomes(array of numbers)
                //Example:
                //{
                //    order: 1, outcome: "Accomplish things", mappedStudentOutcomes: [1, 0, 0, 1, 0, 1]
                //}
                body = {
                  courseOutcomesList: outcomes
                };
                _context19.next = 4;
                return this.sendPost("/course-outcomes/post-outcomes", body, true).then(function (response) {
                  return response.status == OK;
                });

              case 4:
                return _context19.abrupt("return", _context19.sent);

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function postCourseOutcomes() {
        return _postCourseOutcomes.apply(this, arguments);
      }

      return postCourseOutcomes;
    }()
  }]);

  return API;
}();



var ErrorObj = function ErrorObj() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var isLoggedIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ErrorObj);

  this.success = false;
  this.message = message;
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2FwaS5qcyJdLCJuYW1lcyI6WyJyb290IiwiT0siLCJKU09OX0VSUk9SX01TRyIsIk5PVF9MT0dHRURfSU5fTVNHIiwidG9rZW4iLCJ0b2tlbkV4cGlyYXRpb24iLCJBUEkiLCJ0Iiwicm91dGUiLCJib2R5IiwiaXNMb2dpbkF0dGVtcHQiLCJ1cmwiLCJEYXRlIiwiY29uc29sZSIsImxvZyIsIkVycm9yT2JqIiwiY29va2llQ3V0dGVyIiwiZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJjYWNoZSIsImhlYWRlcnMiLCJyZWZlcnJlclBvbGljeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwic3RhdHVzIiwianNvbiIsInVzZXJpZCIsInBhc3N3b3JkIiwic2VuZFBvc3QiLCJleHBpcmVzIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJ0b1VUQ1N0cmluZyIsInNldCIsInNlbWVzdGVyIiwieWVhciIsIlVzZXJpZCIsIlNlbWVzdGVyIiwiWWVhciIsImRlcGFydG1lbnQiLCJjb3Vyc2VOdW1iZXIiLCJzZWN0aW9uTnVtYmVyIiwiU2VjdGlvbiIsIkluc3RydWN0b3IiLCJJZCIsIkRlcGFydG1lbnQiLCJDb3Vyc2VOdW1iZXIiLCJTZWN0aW9uTnVtYmVyIiwiQ291cnNlIiwiQ29vcmRpbmF0b3IiLCJ1c2VySWQiLCJpc1NlY3Rpb25Db21wbGV0ZWQiLCJvdXRjb21lcyIsIklUR3JhZGVzIiwiQ1NHcmFkZXMiLCJDRUdyYWRlcyIsImZvcm0iLCJzZWN0aW9uIiwiaW5zdHJ1Y3RvciIsImlkIiwiY29vcmRpbmF0b3JDb21tZW50IiwiaXNDb3Vyc2VDb21wbGV0ZWQiLCJjb3Vyc2UiLCJ0ZXh0IiwiUmVzdWx0T2JqIiwicGFyc2UiLCJkYXRlIiwiZGF5IiwiZ2V0RGF5IiwibW9udGgiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJudW1iZXJPZlN0dWRlbnRzIiwiZmFjdWx0eVR5cGUiLCJpbmZvIiwiZGlzcGxheU5hbWUiLCJjb3Vyc2VPdXRjb21lc0xpc3QiLCJtZXNzYWdlIiwiaXNMb2dnZWRJbiIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyw2QkFBYixDLENBQTRDOztBQUM1QyxJQUFNQyxFQUFFLEdBQUcsR0FBWCxDLENBQWdCOztBQUNoQixJQUFNQyxjQUFjLEdBQUcsOEJBQXZCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsdURBQTFCO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLEVBQVosQyxDQUFnQjs7QUFDaEIsSUFBSUMsZUFBSjs7SUFFcUJDLEc7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBOytCQUNxQjtBQUFBLFVBQVJDLENBQVEsdUVBQUosRUFBSTtBQUNiSCxXQUFLLEdBQUdHLENBQVI7QUFDSCxLLENBRUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2VDLHFCLDJEQUFRLEU7QUFBSUMsb0IsMkRBQU8sRTtBQUFJQyw4QiwyREFBaUIsSztBQUM3Q0MsbUIsR0FBTVgsSUFBSSxHQUFHUSxLLEVBQU87O3NCQUl0QkgsZUFBZSxHQUFHLElBQUlPLElBQUosRTs7Ozs7QUFDbEJDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO2lEQUNPLElBQUlDLFFBQUosQ0FBYVosaUJBQWIsRUFBZ0MsS0FBaEMsQzs7O0FBR1g7QUFDQSxvQkFBSSxPQUFPYSxvREFBWSxDQUFDQyxHQUFwQixJQUEyQixVQUEvQixFQUEyQztBQUN2Q2IsdUJBQUssR0FBR1ksb0RBQVksQ0FBQ0MsR0FBYixDQUFpQixPQUFqQixDQUFSO0FBQ0g7O2lEQUVNQyxLQUFLLENBQUNQLEdBQUQsRUFBTTtBQUNkUSx3QkFBTSxFQUFFLE1BRE07QUFFZEMsdUJBQUssRUFBRSxVQUZPO0FBR2RDLHlCQUFPLEVBQUU7QUFDVCxvQ0FBZ0Isa0JBRFA7QUFFVCxxQ0FBaUIs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Ozs7Ozs7O0lBSWZjLFEsR0FDRixvQkFBNkM7QUFBQSxNQUFqQ29FLE9BQWlDLHVFQUF2QixFQUF1QjtBQUFBLE1BQW5CQyxVQUFtQix1RUFBTixJQUFNOztBQUFBOztBQUN6QyxPQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLE9BQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNILEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGJmZmRiOWVjYjJkYjU1NTYwYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlbHBlciBBUEkgQ2xhc3NcclxuaW1wb3J0IGNvb2tpZUN1dHRlciBmcm9tICdjb29raWUtY3V0dGVyJztcclxuXHJcbmNvbnN0IHJvb3QgPSBcImh0dHBzOi8vbG9jYWxob3N0OjQ0MzcyL2FwaVwiOyAvLyBUaGUgYmFzZSBVUkwgZm9yIGVhY2ggcmVxdWVzdFxyXG5jb25zdCBPSyA9IDIwMDsgLy8yMDAgT2sgc3RhdHVzIGNvZGVcclxuY29uc3QgSlNPTl9FUlJPUl9NU0cgPSBcIkVycm9yOiBDb3VsZCBub3QgcGFyc2UgSlNPTi5cIjtcclxuY29uc3QgTk9UX0xPR0dFRF9JTl9NU0cgPSBcIkVycm9yOiBZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uXCI7XHJcbnZhciB0b2tlbiA9IFwiXCI7IC8vaG9sZHMgdmFsdWUgb2YgdGhlIHRva2VuIGNvb2tpZVxyXG52YXIgdG9rZW5FeHBpcmF0aW9uO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcclxuICAgIC8qIFRoaXMgZnVuY3Rpb24gaXMgZm9yIGdldEluaXRpYWxQcm9wcy5cclxuICAgIGNvb2tpZUN1dHRlciBpcyB1bmRlZmluZWQgaW4gZ2V0SW5pdGlhbFByb3BzLFxyXG4gICAgc28gdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSB0b2tlbiB0byB0aGUgdmFsdWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgcGFzc2VkIGluIGZyb20gZ2V0SW5pdGlhbFByb3BzLiAqL1xyXG4gICAgc2V0VG9rZW4odCA9IFwiXCIpIHtcclxuICAgICAgICB0b2tlbiA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJpYyBmdW5jdGlvbiBmb3Igc2VuZGluZyBQT1NUIHJlcXVlc3RzXHJcbiAgICAvLyAgICBJbnB1dDogcm91dGUgYW5kIGJvZHlcclxuICAgIC8vICAgIE91dHB1dDogVGhlIEpTT04gdGhhdCBpcyByZXR1cm5lZCBmcm9tIHRoZSByb3V0ZVxyXG4gICAgYXN5bmMgc2VuZFBvc3Qocm91dGUgPSBcIlwiLCBib2R5ID0ge30sIGlzTG9naW5BdHRlbXB0ID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSByb290ICsgcm91dGU7IC8vIENvbWJpbmUgdGhlIHJvb3QgVVJMIHdpdGggdGhlIHNwZWNpZmllZCByb3V0ZVxyXG4gICAgICAgIHZhciBzdGF0dXNDb2RlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2hlY2sgZm9yIHRva2VuIGV4cGlyYXRpb25cclxuICAgICAgICBpZiAodG9rZW5FeHBpcmF0aW9uIDwgbmV3IERhdGUoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhFUkVcIilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihOT1RfTE9HR0VEX0lOX01TRywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZiB0aGUgcmVxdWVzdCBpcyBub3QgZnJvbSBnZXRJbml0aWFsUHJvcHMsIG1lYW5pbmcgY29va2llQ3V0dGVyIGlzIGRlZmluZWQsIHJldHJlaXZlIHRoZSBjb29raWVcclxuICAgICAgICBpZiAodHlwZW9mIGNvb2tpZUN1dHRlci5nZXQgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gY29va2llQ3V0dGVyLmdldChcInRva2VuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWZlcnJlclBvbGljeTogXCJuby1yZWZlcnJlclwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT0gT0spXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihqc29uW1wibWVzc2FnZVwiXSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7IHJldHVybiBuZXcgRXJyb3JPYmooSlNPTl9FUlJPUl9NU0cpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBQYXNzd29yZFxyXG4gICAgLy8gICAgT3V0cHV0OiBcIkFkbWluXCIsIFwiSW5zdHJ1Y3RvclwiLCBcIlN0dWRlbnQvVEFcIiBvciBib29sZWFuIGZvciBmYWlsdXJlXHJcbiAgICBhc3luYyBsb2dpbih1c2VyaWQgPSBcIlwiLCBwYXNzd29yZCA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvbG9naW5cIiwgYm9keSwgdHJ1ZSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBleHBpcmVzLnNldFNlY29uZHMoZXhwaXJlcy5nZXRTZWNvbmRzKCkgKyAxMCk7IC8vZXhwaXJlcyBpbiAyNCBob3Vyc1xyXG4gICAgICAgICAgICB0b2tlbkV4cGlyYXRpb24gPSBleHBpcmVzO1xyXG4gICAgICAgICAgICBleHBpcmVzID0gZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29va2llQ3V0dGVyLnNldChcInRva2VuXCIsIGpzb25bXCJ0b2tlblwiXSwgeyBleHBpcmVzIH0pOyAvL3NldCB0b2tlbiBjb29raWVcclxuICAgICAgICAgICAgcmV0dXJuIGpzb25bXCJyb2xlXCJdOyAvL3JldHVybiB0aGUgcm9sZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5sb2dpbih1c2VyaWQsIHBhc3N3b3JkKS50aGVuKHJvbGUgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgcmV0dXJuIHZhbHVlIGlzIGFjY2Vzc2libGUsIGl0IGlzIGVpdGhlciByb2xlIHN0cmluZyBvciBhIGJvb2xlYW4gaW5kaWNhdGluZyBmYWlsdXJlKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tbG9nb3V0KHVzZXJpZCktLS1cclxuICAgIC8vICAgIElucHV0OiBOb25lXHJcbiAgICAvLyAgICBPdXRwdXQ6IE5vbmVcclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KFwidG9rZW5cIiwgXCJcIiwgeyBleHBpcmVzOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgfSk7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldChcInVzZXJcIiwgXCJcIiwgeyBleHBpcmVzOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tZ2V0Q291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogU2VjdGlvbnMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFVzZXJJZCwgU2VtZXN0ZXIgYW5kIFllYXJcclxuICAgIGFzeW5jIGdldENvdXJzZXModXNlcmlkID0gXCJcIiwgc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBzZW1lc3Rlcjogc2VtZXN0ZXIsIHllYXI6IHllYXIgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvc2VjdGlvbnMvYnktdXNlcmlkLXNlbWVzdGVyLXllYXJcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldENvdXJzZXModXNlcklkLCBzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLS0tICAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBTZWN0aW9ucyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgU2VtZXN0ZXIgYW5kIFllYXIgXHJcbiAgICBhc3luYyBnZXRBbGxDb3Vyc2VzKHVzZXJpZCA9IFwiXCIsIHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyBVc2VyaWQ6IHVzZXJpZCwgU2VtZXN0ZXI6IHNlbWVzdGVyLCBZZWFyOiB5ZWFyIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL3NlY3Rpb25zL2J5LXNlbWVzdGVyLXllYXJcIiwgYm9keSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0QWxsQ291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuICAgIC8vLS0tZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyKHNlbWVzdGVyLCB5ZWFyKS0tLSAgKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEFsbCBDb3Vyc2VzIGZvciB0aGUgY29ycmVzcG9uZGluZyBzZW1lc3RlciBhbmQgeWVhciBcclxuICAgIGFzeW5jIGdldENvdXJzZXNCeVNlbWVzdGVyWWVhcihzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSBcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgc2VtZXN0ZXI6IHNlbWVzdGVyLCBcclxuICAgICAgICAgICAgeWVhcjogeWVhciBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2dldC1ieS15ZWFyLXNlbWVzdGVyXCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAvL2FwaS5nZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIoc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG5cclxuICAgIC8vLS0tZ2V0Rm9ybXNCeVNlY3Rpb24odXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlLCBzZWN0aW9uKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIENvdXJzZU51bWJlciwgU2VjdGlvbk51bWJlclxyXG4gICAgLy8gICAgT3V0cHV0OiBGb3JtcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgQ291cnNlTnVtYmVyLCBhbmQgU2VjdGlvbk51bWJlclxyXG4gICAgYXN5bmMgZ2V0Rm9ybUJ5U2VjdGlvbih1c2VyaWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBTZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBJbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBZZWFyOiB5ZWFyLCAgIFxyXG4gICAgICAgICAgICAgICAgU2VtZXN0ZXI6IHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgRGVwYXJ0bWVudDogZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIENvdXJzZU51bWJlcjogY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgU2VjdGlvbk51bWJlcjogc2VjdGlvbk51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvYnktc2VjdGlvblwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0Rm9ybXNCeVNlY3Rpb24odXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlLCBzZWN0aW9uKS50aGVuKGZvcm0gPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBmb3JtIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEZvcm1zQnlDb3Vyc2UodXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIENvdXJzZU51bWJlclxyXG4gICAgLy8gICAgT3V0cHV0OiBGb3JtcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgYW5kIENvdXJzZU51bWJlclxyXG4gICAgYXN5bmMgZ2V0Rm9ybXNCeUNvdXJzZSh1c2VyaWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgQ29vcmRpbmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFllYXI6IHllYXIsXHJcbiAgICAgICAgICAgICAgICBTZW1lc3Rlcjogc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBEZXBhcnRtZW50OiBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgQ291cnNlTnVtYmVyOiBjb3Vyc2VOdW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvYnktY291cnNlXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRGb3Jtc0J5Q291cnNlKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSkudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRBbGxGb3Jtcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBGb3JtcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgU2VtZXN0ZXIgYW5kIFllYXJcclxuICAgIGFzeW5jIGdldEFsbEZvcm1zKHVzZXJpZCA9IFwiXCIsIHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIHtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQsIHNlbWVzdGVyOiBzZW1lc3RlciwgeWVhcjogeWVhciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9ieS1zZW1lc3Rlci15ZWFyXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRBbGxGb3Jtcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBmb3JtcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1wb3N0Rm9ybSh1c2VySWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGlzU2VjdGlvbkNvbXBsZXRlZCwgb3V0Y29tZXMsIElUR3JhZGVzLCBDU0dyYWRlcywgQ0VHcmFkZXMpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogXl5eICAgKHdpbGwgYWxzbyBoYXZlIHBkZiBoZXJlIGxhdGVyIGFzIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyKVxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RGb3JtKHVzZXJJZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIiwgaXNTZWN0aW9uQ29tcGxldGVkID0gZmFsc2UsIG91dGNvbWVzID0gW10sIElUR3JhZGVzID0ge30sIENTR3JhZGVzID0ge30sIENFR3JhZGVzID0ge30pIHtcclxuICAgICAgICAvLyB0aGUgYm9keSB3aWxsIGFsc28gaW5jbHVkZSBhbnkgcGRmIHRvIHBvc3QgaW4gdGhlIGZ1dHVyZVxyXG5cclxuICAgICAgICAvL291dGNvbWVzOiBhbiBhcnJheSBvZiBDb3Vyc2VfT3V0Y29tZXMgb2JqZWN0c1xyXG4gICAgICAgIC8vQ291cnNlX091dGNvbWVzIGNsYXNzOlxyXG4gICAgICAgIC8vc3RyaW5nIG91dGNvbWUsIGludCBudW1iZXJPZklULCBpbnQgbnVtYmVyT2ZDUywgaW50IG51bWJlck9mQ0UsIFN0dWRlbnRXb3Jrc1tdIHN0dWRlbnRXb3Jrc1xyXG4gICAgICAgIC8vU3R1ZGVudFdvcmtzIGNsYXNzOlxyXG4gICAgICAgIC8vc3RyaW5nIHN0dWRlbnRXb3JrLCBzdHJpbmcgZmlsZVVwbG9hZGVkICg8LS0gd2lsbCBpbXBsZW1lbnQgbGF0ZXIpXHJcblxyXG4gICAgICAgIC8vSVQsIENTLCBDRSBHcmFkZXMgY2xhc3M6XHJcbiAgICAgICAgLy9pbnQgQSwgaW50IEIsIGludCBDLCBpbnQgRCwgaW50IEUsIGludCBGLCBpbnQgVywgaW50IEksIGludCB0b3RhbFN0dWRlbnRzXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBpc1NlY3Rpb25Db21wbGV0ZWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvdXRjb21lcyxcclxuICAgICAgICAgICAgICAgIElUR3JhZGVzLFxyXG4gICAgICAgICAgICAgICAgQ1NHcmFkZXMsXHJcbiAgICAgICAgICAgICAgICBDRUdyYWRlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvcG9zdC1mb3JtXCIsIGJvZHksIHRydWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5zdGF0dXMgPT0gT0s7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tcG9zdENvbW1lbnQodXNlcklkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBjb29yZGluYXRvckNvbW1lbnQsIGlzQ291cnNlQ29tcGxldGVkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgY29vcmRpbmF0b3JDb21tZW50LCBpc0NvdXJzZUNvbXBsZXRlZFxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RDb21tZW50KHVzZXJJZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBjb29yZGluYXRvckNvbW1lbnQgPSBcIlwiLCBpc0NvdXJzZUNvbXBsZXRlZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgY291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdG9yQ29tbWVudCxcclxuICAgICAgICAgICAgICAgIGlzQ291cnNlQ29tcGxldGVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL3Bvc3QtY29tbWVudFwiLCBib2R5LCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4geyByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09IE9LOyB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0QmxhbmtGb3JtKHVzZXJpZCktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWRcclxuICAgIC8vICAgIE91dHB1dDogQmxhbmsgRm9ybVxyXG4gICAgYXN5bmMgZ2V0QmxhbmtGb3JtKHVzZXJpZCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL25ldy1ibGFua1wiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0QmxhbmtGb3JtKHVzZXJpZCkudGhlbihyZXN1bHQgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgcmV0dXJuIHZhbHVlIGlzIGFjY2Vzc2libGUsIGl0IGlzIGEgSlNPTiovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tZ2V0RGVmYXVsdFllYXJBbmRTZW1lc3RlcigpLS1cclxuICAgIC8vICAgIElucHV0OiBOb3RoaW5nXHJcbiAgICAvLyAgICBPdXRwdXQ6IE9iamVjdCBJbmNsdWRpbmcgQ3VycmVudCBEZWZhdWx0IFllYXIgYW5kIFNlbWVzdGVyXHJcbiAgICBnZXREZWZhdWx0WWVhckFuZFNlbWVzdGVyKCkge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gJ3sgXCJ5ZWFyXCI6IDAsJyArICAgICAgICAgLy8gY3JlYXRlIHN0cmluZyBvZiBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICcgXCJzZW1lc3RlclwiOiBcIlwiIH0nO1xyXG4gICAgICAgIHZhciBSZXN1bHRPYmogPSBKU09OLnBhcnNlKHRleHQpOyAgIC8vIGNyZWF0ZSBvYmplY3QgZnJvbSB0aGUgc3RyaW5nXHJcblxyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTsgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkYXRlXHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7ICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGRheVxyXG4gICAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7ICAgIC8vIGFkZCBvbmUgdG8gbW9udGggKGJ5IGRlZmF1bHQgSmFudWFyeSA9IDApXHJcbiAgICAgICAgUmVzdWx0T2JqLnllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7Ly8gZ2V0IHRoZSBmdWxsIHllYXIgZnJvbSB0aGUgZGF0ZVxyXG4gICAgICAgIFJlc3VsdE9iai5zZW1lc3RlciA9IFwiZmFsbFwiOyAgICAgICAgLy8ganVzdCB0byBiZSBzYWZlXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2V0IHRoZSBEZWZhdWx0IFNlbWVzdGVyIEJhc2VkIG9uIHRoZSBNb250aFxyXG4gICAgICAgIGlmICgobW9udGggPiA4KSB8fCAobW9udGggPT0gOCAmJiBkYXkgPj0gMTUpKSB7XHJcbiAgICAgICAgICAgIFJlc3VsdE9iai5zZW1lc3RlciA9IFwiZmFsbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgobW9udGggPiA1KSB8fCAobW9udGggPT0gNSAmJiBkYXkgPj0gMTUpKSB7XHJcbiAgICAgICAgICAgIFJlc3VsdE9iai5zZW1lc3RlciA9IFwic3VtbWVyXCI7XHJcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoaXMgaXMganVzdCBhIGRlZmF1bHQgc2VtZXN0ZXIsIGl0IGFsd2F5cyBkZWZhdWx0cyB0byB0aGUgbG9uZ2VyIHNlbWVzdGVyc1xyXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHdoeSBpdCBkb2Vzbid0IGRlZmF1bHQgdG8gc21hbGxlciBzdW1tZXIgc2VtZXN0ZXJzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcInNwcmluZ1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFJlc3VsdE9iajsgICAgLy8gcmV0dXJuIG9iamVjdCBpbmNsdWRpbmcgdGhlIHllYXIgYW5kIHNlbWVzdGVyXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1hZGRTZWN0aW9uKHVzZXJpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgc2VjdGlvbk51bWJlciwgZGVwYXJ0bWVudCwgbnVtYmVyT2ZTdHVkZW50cyktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IF5eXlxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIGFkZFNlY3Rpb24odXNlcmlkID0gXCJcIiwgZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIG51bWJlck9mU3R1ZGVudHMgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgc2VjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBpc1NlY3Rpb25Db21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZTdHVkZW50c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL3NlY3Rpb25zL2FkZC1zZWN0aW9uXCIsIGJvZHksIHRydWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5zdGF0dXMgPT0gT0s7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0RmFjdWx0eUxpc3QoKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogbm9uZVxyXG4gICAgLy8gICAgT3V0cHV0OiBMaXN0IG9mIGluc3RydWN0b3JzLCBjb29yZGluYXRvcnMsIGFkanVuY3QgZmFjdWx0aWVzLCBhbmQgdGVhY2hpbmcgZmVsbG93c1xyXG4gICAgYXN5bmMgZ2V0RmFjdWx0eUxpc3QoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2ZhY3VsdHkvZ2V0LWxpc3RcIiwge30pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lLCBsYXN0TmFtZSwgdXNlcmlkLCByb2xlKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogRmlyc3QgTmFtZSwgTGFzdCBOYW1lIGFuZCBVc2VyIElkXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgYWRkRmFjdWx0eU1lbWJlcihmaXJzdE5hbWUgPSBcIlwiLCBsYXN0TmFtZSA9IFwiXCIsIHVzZXJJZCA9IFwiXCIsIGZhY3VsdHlUeXBlID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFjdWx0eVR5cGU6IGZhY3VsdHlUeXBlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZmFjdWx0eS9hZGQtbWVtYmVyXCIsIGJvZHksIHRydWUpLnRoZW4gKChyZXNwb25zZSkgPT4ge3JldHVybiByZXNwb25zZS5zdGF0dXMgPT0gT0s7IH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IGRlcGFydG1lbnRcclxuICAgIC8vICAgIE91dHB1dDogYXJyYXkgb2YgY291cnNlc1xyXG4gICAgYXN5bmMgZ2V0Q291cnNlc0J5RGVwYXJ0bWVudChkZXBhcnRtZW50ID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvZ2V0LWJ5LWRlcGFydG1lbnRcIiwgYm9keSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tYWRkQ291cnNlKHVzZXJpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGlzcGxheU5hbWUsIGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBeXl5cclxuICAgIC8vICAgIE91dHB1dDogc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgICBhc3luYyBhZGRDb3Vyc2UodXNlcmlkID0gXCJcIiwgZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBkaXNwbGF5TmFtZSA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgQ29vcmRpbmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2FkZC1jb3Vyc2VcIiwgYm9keSwgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PSBPSzsgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tcmVtb3ZlQ291cnNlKHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50XHJcbiAgICAvLyAgICBPdXRwdXQ6IHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgcmVtb3ZlQ291cnNlKHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL3JlbW92ZS1jb3Vyc2VcIiwgYm9keSwgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PSBPSzsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRDb3Vyc2VPdXRjb21lc0J5Q291cnNlKHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50XHJcbiAgICAvLyAgICBPdXRwdXQ6IGFycmF5IG9mIGNvdXJzZSBvdXRjb21lc1xyXG4gICAgYXN5bmMgZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZSh5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2Utb3V0Y29tZXMvYnktY291cnNlXCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tcG9zdENvdXJzZU91dGNvbWVzKG91dGNvbWVzKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogYXJyYXkgb2Ygb3V0Y29tZSBvYmplY3RzIChzZWUgbm90ZXMgYmVsb3cpXHJcbiAgICAvLyAgICBPdXRwdXQ6IHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgcG9zdENvdXJzZU91dGNvbWVzKG91dGNvbWVzID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgLy9hbiBvdXRjb21lIG9iamVjdCBjb250YWlucyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vb3JkZXIgKG51bWJlciksIG91dGNvbWUgKHN0cmluZyksIG1hcHBlZFN0dWRlbnRPdXRjb21lcyhhcnJheSBvZiBudW1iZXJzKVxyXG4gICAgICAgIC8vRXhhbXBsZTpcclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICBvcmRlcjogMSwgb3V0Y29tZTogXCJBY2NvbXBsaXNoIHRoaW5nc1wiLCBtYXBwZWRTdHVkZW50T3V0Y29tZXM6IFsxLCAwLCAwLCAxLCAwLCAxXVxyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBjb3Vyc2VPdXRjb21lc0xpc3Q6IG91dGNvbWVzXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZS1vdXRjb21lcy9wb3N0LW91dGNvbWVzXCIsIGJvZHksIHRydWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5zdGF0dXMgPT0gT0s7IH0pOztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRXJyb3JPYmoge1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSA9IFwiXCIsIGlzTG9nZ2VkSW4gPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9