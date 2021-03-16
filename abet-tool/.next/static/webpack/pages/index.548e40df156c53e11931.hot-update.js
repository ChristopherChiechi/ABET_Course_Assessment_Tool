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
            returnRawResponse,
            url,
            statusCode,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                route = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
                body = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                returnRawResponse = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                url = root + route; // Combine the root URL with the specified route

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

              case 6:
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
                return this.sendPost("/login", body).then(function (json) {
                  var expires = new Date();
                  expires.setHours(expires.getHours() + 24); //expires in 24 hours

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2FwaS5qcyJdLCJuYW1lcyI6WyJyb290IiwiT0siLCJKU09OX0VSUk9SX01TRyIsIk5PVF9MT0dHRURfSU5fTVNHIiwidG9rZW4iLCJBUEkiLCJ0Iiwicm91dGUiLCJib2R5IiwicmV0dXJuUmF3UmVzcG9uc2UiLCJ1cmwiLCJjb29raWVDdXR0ZXIiLCJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsInJlZmVycmVyUG9saWN5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJzdGF0dXMiLCJqc29uIiwiRXJyb3JPYmoiLCJ1c2VyaWQiLCJwYXNzd29yZCIsInNlbmRQb3N0IiwiZXhwaXJlcyIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJzZXQiLCJzZW1lc3RlciIsInllYXIiLCJVc2VyaWQiLCJTZW1lc3RlciIsIlllYXIiLCJkZXBhcnRtZW50IiwiY291cnNlTnVtYmVyIiwic2VjdGlvbk51bWJlciIsIlNlY3Rpb24iLCJJbnN0cnVjdG9yIiwiSWQiLCJEZXBhcnRtZW50IiwiQ291cnNlTnVtYmVyIiwiU2VjdGlvbk51bWJlciIsIkNvdXJzZSIsIkNvb3JkaW5hdG9yIiwidXNlcklkIiwiaXNTZWN0aW9uQ29tcGxldGVkIiwib3V0Y29tZXMiLCJJVEdyYWRlcyIsIkNTR3JhZGVzIiwiQ0VHcmFkZXMiLCJmb3JtIiwic2VjdGlvbiIsImluc3RydWN0b3IiLCJpZCIsImNvb3JkaW5hdG9yQ29tbWVudCIsImlzQ291cnNlQ29tcGxldGVkIiwiY291cnNlIiwidGV4dCIsIlJlc3VsdE9iaiIsInBhcnNlIiwiZGF0ZSIsImRheSIsImdldERheSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibnVtYmVyT2ZTdHVkZW50cyIsImZhY3VsdHlUeXBlIiwiaW5mbyIsImRpc3BsYXlOYW1lIiwiY291cnNlT3V0Y29tZXNMaXN0IiwibWVzc2FnZSIsImlzTG9nZ2VkSW4iLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsNkJBQWIsQyxDQUE0Qzs7QUFDNUMsSUFBTUMsRUFBRSxHQUFHLEdBQVgsQyxDQUFnQjs7QUFDaEIsSUFBTUMsY0FBYyxHQUFHLDhCQUF2QjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLHVEQUExQjtBQUNBLElBQUlDLEtBQUssR0FBRyxFQUFaLEMsQ0FBZ0I7O0lBRUtDLEc7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBOytCQUNxQjtBQUFBLFVBQVJDLENBQVEsdUVBQUosRUFBSTtBQUNiRixXQUFLLEdBQUdFLENBQVI7QUFDSCxLLENBRUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2VDLHFCLDJEQUFRLEU7QUFBSUMsb0IsMkRBQU8sRTtBQUFJQyxpQywyREFBb0IsSztBQUNoREMsbUIsR0FBTVYsSUFBSSxHQUFHTyxLLEVBQU87O0FBRzFCO0FBQ0Esb0JBQUksT0FBT0ksb0RBQVksQ0FBQ0MsR0FBcEIsSUFBMkIsVUFBL0IsRUFBMkM7QUFDdkNSLHVCQUFLLEdBQUdPLG9EQUFZLENBQUNDLEdBQWIsQ0FBaUIsT0FBakIsQ0FBUjtBQUNIOztpREFFTUMsS0FBSyxDQUFDSCxHQUFELEVBQU07QUFDZEksd0JBQU0sRUFBRSxNQURNO0FBRWRDLHVCQUFLLEVBQUUsVUFGTztBQUdkQyx5QkFBTyxFQUFFO0FBQ1Qsb0NBQWdCLGtCQURQO0FBRVQscUNBQWlCLFlBQVlaO0FBRnBCLG1CQUhLO0FBT2RhLGdDQUFjLEVBQUUsYUFQRjtBQVFkVCxzQkFBSSxFQUFFVSxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsSUFBZjtBQVJRLGlCQUFOLENBQUwsQ0FVRlksSUFWRSxDQVVHLFVBQUNDLFFBQUQsRUFBYztBQUNoQkMsNEJBQVUsR0FBR0QsUUFBUSxDQUFDRSxNQUF0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dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWxwZXIgQVBJIENsYXNzXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcic7XHJcblxyXG5jb25zdCByb290ID0gXCJodHRwczovL2xvY2FsaG9zdDo0NDM3Mi9hcGlcIjsgLy8gVGhlIGJhc2UgVVJMIGZvciBlYWNoIHJlcXVlc3RcclxuY29uc3QgT0sgPSAyMDA7IC8vMjAwIE9rIHN0YXR1cyBjb2RlXHJcbmNvbnN0IEpTT05fRVJST1JfTVNHID0gXCJFcnJvcjogQ291bGQgbm90IHBhcnNlIEpTT04uXCI7XHJcbmNvbnN0IE5PVF9MT0dHRURfSU5fTVNHID0gXCJFcnJvcjogWW91ciBzZXNzaW9uIGhhcyBleHBpcmVkLiBQbGVhc2UgbG9nIGluIGFnYWluLlwiO1xyXG52YXIgdG9rZW4gPSBcIlwiOyAvL2hvbGRzIHZhbHVlIG9mIHRoZSB0b2tlbiBjb29raWVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XHJcbiAgICAvKiBUaGlzIGZ1bmN0aW9uIGlzIGZvciBnZXRJbml0aWFsUHJvcHMuXHJcbiAgICBjb29raWVDdXR0ZXIgaXMgdW5kZWZpbmVkIGluIGdldEluaXRpYWxQcm9wcyxcclxuICAgIHNvIHRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgdG9rZW4gdG8gdGhlIHZhbHVlIG9mIHRoZSBjb29raWVcclxuICAgIHBhc3NlZCBpbiBmcm9tIGdldEluaXRpYWxQcm9wcy4gKi9cclxuICAgIHNldFRva2VuKHQgPSBcIlwiKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdlbmVyaWMgZnVuY3Rpb24gZm9yIHNlbmRpbmcgUE9TVCByZXF1ZXN0c1xyXG4gICAgLy8gICAgSW5wdXQ6IHJvdXRlIGFuZCBib2R5XHJcbiAgICAvLyAgICBPdXRwdXQ6IFRoZSBKU09OIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB0aGUgcm91dGVcclxuICAgIGFzeW5jIHNlbmRQb3N0KHJvdXRlID0gXCJcIiwgYm9keSA9IHt9LCByZXR1cm5SYXdSZXNwb25zZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcm9vdCArIHJvdXRlOyAvLyBDb21iaW5lIHRoZSByb290IFVSTCB3aXRoIHRoZSBzcGVjaWZpZWQgcm91dGVcclxuICAgICAgICB2YXIgc3RhdHVzQ29kZTtcclxuICAgICAgICBcclxuICAgICAgICAvL2lmIHRoZSByZXF1ZXN0IGlzIG5vdCBmcm9tIGdldEluaXRpYWxQcm9wcywgbWVhbmluZyBjb29raWVDdXR0ZXIgaXMgZGVmaW5lZCwgcmV0cmVpdmUgdGhlIGNvb2tpZVxyXG4gICAgICAgIGlmICh0eXBlb2YgY29va2llQ3V0dGVyLmdldCA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBjb29raWVDdXR0ZXIuZ2V0KFwidG9rZW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiBcIm5vLXJlZmVycmVyXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSBPSylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JqKGpzb25bXCJtZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgcmV0dXJuIG5ldyBFcnJvck9iaihKU09OX0VSUk9SX01TRyk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tbG9naW4odXNlcmlkLCBwYXNzd29yZCktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFBhc3N3b3JkXHJcbiAgICAvLyAgICBPdXRwdXQ6IFwiQWRtaW5cIiwgXCJJbnN0cnVjdG9yXCIsIFwiU3R1ZGVudC9UQVwiIG9yIGJvb2xlYW4gZm9yIGZhaWx1cmVcclxuICAgIGFzeW5jIGxvZ2luKHVzZXJpZCA9IFwiXCIsIHBhc3N3b3JkID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9sb2dpblwiLCBib2R5KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGlyZXMuc2V0SG91cnMoZXhwaXJlcy5nZXRIb3VycygpICsgMjQpOyAvL2V4cGlyZXMgaW4gMjQgaG91cnNcclxuICAgICAgICAgICAgZXhwaXJlcyA9IGV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb29raWVDdXR0ZXIuc2V0KFwidG9rZW5cIiwganNvbltcInRva2VuXCJdLCB7IGV4cGlyZXMgfSk7IC8vc2V0IHRva2VuIGNvb2tpZVxyXG4gICAgICAgICAgICByZXR1cm4ganNvbltcInJvbGVcIl07IC8vcmV0dXJuIHRoZSByb2xlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpLnRoZW4ocm9sZSA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgaXMgYWNjZXNzaWJsZSwgaXQgaXMgZWl0aGVyIHJvbGUgc3RyaW5nIG9yIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGZhaWx1cmUqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1sb2dvdXQodXNlcmlkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IE5vbmVcclxuICAgIC8vICAgIE91dHB1dDogTm9uZVxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGNvb2tpZUN1dHRlci5zZXQoXCJ0b2tlblwiLCBcIlwiLCB7IGV4cGlyZXM6IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSB9KTtcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KFwidXNlclwiLCBcIlwiLCB7IGV4cGlyZXM6IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBTZWN0aW9ucyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgVXNlcklkLCBTZW1lc3RlciBhbmQgWWVhclxyXG4gICAgYXN5bmMgZ2V0Q291cnNlcyh1c2VyaWQgPSBcIlwiLCBzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQsIHNlbWVzdGVyOiBzZW1lc3RlciwgeWVhcjogeWVhciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9ieS11c2VyaWQtc2VtZXN0ZXIteWVhclwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0Q291cnNlcyh1c2VySWQsIHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhciktLS0gIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IFNlY3Rpb25zIGZvciB0aGUgY29ycmVzcG9uZGluZyBTZW1lc3RlciBhbmQgWWVhciBcclxuICAgIGFzeW5jIGdldEFsbENvdXJzZXModXNlcmlkID0gXCJcIiwgc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IFVzZXJpZDogdXNlcmlkLCBTZW1lc3Rlcjogc2VtZXN0ZXIsIFllYXI6IHllYXIgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvc2VjdGlvbnMvYnktc2VtZXN0ZXIteWVhclwiLCBib2R5KTtcclxuICAgICAgICBcclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIoc2VtZXN0ZXIsIHllYXIpLS0tICAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogQWxsIENvdXJzZXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHNlbWVzdGVyIGFuZCB5ZWFyIFxyXG4gICAgYXN5bmMgZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyKHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBzZW1lc3Rlcjogc2VtZXN0ZXIsIFxyXG4gICAgICAgICAgICB5ZWFyOiB5ZWFyIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvZ2V0LWJ5LXllYXItc2VtZXN0ZXJcIiwgYm9keSk7XHJcbiAgICB9XHJcbiAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgIC8vYXBpLmdldENvdXJzZXNCeVNlbWVzdGVyWWVhcihzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcblxyXG4gICAgLy8tLS1nZXRGb3Jtc0J5U2VjdGlvbih1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UsIHNlY3Rpb24pLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgQ291cnNlTnVtYmVyLCBTZWN0aW9uTnVtYmVyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEZvcm1zIGZvciB0aGUgY29ycmVzcG9uZGluZyBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBDb3Vyc2VOdW1iZXIsIGFuZCBTZWN0aW9uTnVtYmVyXHJcbiAgICBhc3luYyBnZXRGb3JtQnlTZWN0aW9uKHVzZXJpZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIFNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIEluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFllYXI6IHllYXIsICAgXHJcbiAgICAgICAgICAgICAgICBTZW1lc3Rlcjogc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBEZXBhcnRtZW50OiBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgQ291cnNlTnVtYmVyOiBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBTZWN0aW9uTnVtYmVyOiBzZWN0aW9uTnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9ieS1zZWN0aW9uXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRGb3Jtc0J5U2VjdGlvbih1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UsIHNlY3Rpb24pLnRoZW4oZm9ybSA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGZvcm0gaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0Rm9ybXNCeUNvdXJzZSh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgQ291cnNlTnVtYmVyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEZvcm1zIGZvciB0aGUgY29ycmVzcG9uZGluZyBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBhbmQgQ291cnNlTnVtYmVyXHJcbiAgICBhc3luYyBnZXRGb3Jtc0J5Q291cnNlKHVzZXJpZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgWWVhcjogeWVhcixcclxuICAgICAgICAgICAgICAgIFNlbWVzdGVyOiBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIERlcGFydG1lbnQ6IGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBDb3Vyc2VOdW1iZXI6IGNvdXJzZU51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9ieS1jb3Vyc2VcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEZvcm1zQnlDb3Vyc2UodXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEFsbEZvcm1zKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEZvcm1zIGZvciB0aGUgY29ycmVzcG9uZGluZyBTZW1lc3RlciBhbmQgWWVhclxyXG4gICAgYXN5bmMgZ2V0QWxsRm9ybXModXNlcmlkID0gXCJcIiwgc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkge1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCwgc2VtZXN0ZXI6IHNlbWVzdGVyLCB5ZWFyOiB5ZWFyIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL2J5LXNlbWVzdGVyLXllYXJcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEFsbEZvcm1zKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGZvcm1zIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RGb3JtKHVzZXJJZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgc2VjdGlvbk51bWJlciwgaXNTZWN0aW9uQ29tcGxldGVkLCBvdXRjb21lcywgSVRHcmFkZXMsIENTR3JhZGVzLCBDRUdyYWRlcyktLS1cclxuICAgIC8vICAgIElucHV0OiBeXl4gICAod2lsbCBhbHNvIGhhdmUgcGRmIGhlcmUgbGF0ZXIgYXMgYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXIpXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgcG9zdEZvcm0odXNlcklkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiLCBpc1NlY3Rpb25Db21wbGV0ZWQgPSBmYWxzZSwgb3V0Y29tZXMgPSBbXSwgSVRHcmFkZXMgPSB7fSwgQ1NHcmFkZXMgPSB7fSwgQ0VHcmFkZXMgPSB7fSkge1xyXG4gICAgICAgIC8vIHRoZSBib2R5IHdpbGwgYWxzbyBpbmNsdWRlIGFueSBwZGYgdG8gcG9zdCBpbiB0aGUgZnV0dXJlXHJcblxyXG4gICAgICAgIC8vb3V0Y29tZXM6IGFuIGFycmF5IG9mIENvdXJzZV9PdXRjb21lcyBvYmplY3RzXHJcbiAgICAgICAgLy9Db3Vyc2VfT3V0Y29tZXMgY2xhc3M6XHJcbiAgICAgICAgLy9zdHJpbmcgb3V0Y29tZSwgaW50IG51bWJlck9mSVQsIGludCBudW1iZXJPZkNTLCBpbnQgbnVtYmVyT2ZDRSwgU3R1ZGVudFdvcmtzW10gc3R1ZGVudFdvcmtzXHJcbiAgICAgICAgLy9TdHVkZW50V29ya3MgY2xhc3M6XHJcbiAgICAgICAgLy9zdHJpbmcgc3R1ZGVudFdvcmssIHN0cmluZyBmaWxlVXBsb2FkZWQgKDwtLSB3aWxsIGltcGxlbWVudCBsYXRlcilcclxuXHJcbiAgICAgICAgLy9JVCwgQ1MsIENFIEdyYWRlcyBjbGFzczpcclxuICAgICAgICAvL2ludCBBLCBpbnQgQiwgaW50IEMsIGludCBELCBpbnQgRSwgaW50IEYsIGludCBXLCBpbnQgSSwgaW50IHRvdGFsU3R1ZGVudHNcclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VjdGlvbkNvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG91dGNvbWVzLFxyXG4gICAgICAgICAgICAgICAgSVRHcmFkZXMsXHJcbiAgICAgICAgICAgICAgICBDU0dyYWRlcyxcclxuICAgICAgICAgICAgICAgIENFR3JhZGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9wb3N0LWZvcm1cIiwgYm9keSwgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PSBPSzsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1wb3N0Q29tbWVudCh1c2VySWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIGNvb3JkaW5hdG9yQ29tbWVudCwgaXNDb3Vyc2VDb21wbGV0ZWQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBjb29yZGluYXRvckNvbW1lbnQsIGlzQ291cnNlQ29tcGxldGVkXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgcG9zdENvbW1lbnQodXNlcklkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGNvb3JkaW5hdG9yQ29tbWVudCA9IFwiXCIsIGlzQ291cnNlQ29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBjb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0b3JDb21tZW50LFxyXG4gICAgICAgICAgICAgICAgaXNDb3Vyc2VDb21wbGV0ZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvcG9zdC1jb21tZW50XCIsIGJvZHksIHRydWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5zdGF0dXMgPT0gT0s7IH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRCbGFua0Zvcm0odXNlcmlkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZFxyXG4gICAgLy8gICAgT3V0cHV0OiBCbGFuayBGb3JtXHJcbiAgICBhc3luYyBnZXRCbGFua0Zvcm0odXNlcmlkKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvbmV3LWJsYW5rXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRCbGFua0Zvcm0odXNlcmlkKS50aGVuKHJlc3VsdCA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgaXMgYWNjZXNzaWJsZSwgaXQgaXMgYSBKU09OKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS1nZXREZWZhdWx0WWVhckFuZFNlbWVzdGVyKCktLVxyXG4gICAgLy8gICAgSW5wdXQ6IE5vdGhpbmdcclxuICAgIC8vICAgIE91dHB1dDogT2JqZWN0IEluY2x1ZGluZyBDdXJyZW50IERlZmF1bHQgWWVhciBhbmQgU2VtZXN0ZXJcclxuICAgIGdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIoKSB7XHJcbiAgICAgICAgdmFyIHRleHQgPSAneyBcInllYXJcIjogMCwnICsgICAgICAgICAvLyBjcmVhdGUgc3RyaW5nIG9mIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgJyBcInNlbWVzdGVyXCI6IFwiXCIgfSc7XHJcbiAgICAgICAgdmFyIFJlc3VsdE9iaiA9IEpTT04ucGFyc2UodGV4dCk7ICAgLy8gY3JlYXRlIG9iamVjdCBmcm9tIHRoZSBzdHJpbmdcclxuXHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpOyAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGRhdGVcclxuICAgICAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTsgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZGF5XHJcbiAgICAgICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgICAgLy8gYWRkIG9uZSB0byBtb250aCAoYnkgZGVmYXVsdCBKYW51YXJ5ID0gMClcclxuICAgICAgICBSZXN1bHRPYmoueWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTsvLyBnZXQgdGhlIGZ1bGwgeWVhciBmcm9tIHRoZSBkYXRlXHJcbiAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJmYWxsXCI7ICAgICAgICAvLyBqdXN0IHRvIGJlIHNhZmVcclxuICAgICAgICBcclxuICAgICAgICAvLyBTZXQgdGhlIERlZmF1bHQgU2VtZXN0ZXIgQmFzZWQgb24gdGhlIE1vbnRoXHJcbiAgICAgICAgaWYgKChtb250aCA+IDgpIHx8IChtb250aCA9PSA4ICYmIGRheSA+PSAxNSkpIHtcclxuICAgICAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJmYWxsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChtb250aCA+IDUpIHx8IChtb250aCA9PSA1ICYmIGRheSA+PSAxNSkpIHtcclxuICAgICAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJzdW1tZXJcIjtcclxuICAgICAgICAgICAgLy8gc2luY2UgdGhpcyBpcyBqdXN0IGEgZGVmYXVsdCBzZW1lc3RlciwgaXQgYWx3YXlzIGRlZmF1bHRzIHRvIHRoZSBsb25nZXIgc2VtZXN0ZXJzXHJcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgd2h5IGl0IGRvZXNuJ3QgZGVmYXVsdCB0byBzbWFsbGVyIHN1bW1lciBzZW1lc3RlcnNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFJlc3VsdE9iai5zZW1lc3RlciA9IFwic3ByaW5nXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUmVzdWx0T2JqOyAgICAvLyByZXR1cm4gb2JqZWN0IGluY2x1ZGluZyB0aGUgeWVhciBhbmQgc2VtZXN0ZXJcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWFkZFNlY3Rpb24odXNlcmlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBzZWN0aW9uTnVtYmVyLCBkZXBhcnRtZW50LCBudW1iZXJPZlN0dWRlbnRzKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogXl5eXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgYWRkU2VjdGlvbih1c2VyaWQgPSBcIlwiLCBmaXJzdE5hbWUgPSBcIlwiLCBsYXN0TmFtZSA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgbnVtYmVyT2ZTdHVkZW50cyA9IDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBzZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIGlzU2VjdGlvbkNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZlN0dWRlbnRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvc2VjdGlvbnMvYWRkLXNlY3Rpb25cIiwgYm9keSwgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PSBPSzsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRGYWN1bHR5TGlzdCgpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBub25lXHJcbiAgICAvLyAgICBPdXRwdXQ6IExpc3Qgb2YgaW5zdHJ1Y3RvcnMsIGNvb3JkaW5hdG9ycywgYWRqdW5jdCBmYWN1bHRpZXMsIGFuZCB0ZWFjaGluZyBmZWxsb3dzXHJcbiAgICBhc3luYyBnZXRGYWN1bHR5TGlzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZmFjdWx0eS9nZXQtbGlzdFwiLCB7fSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tYWRkRmFjdWx0eU1lbWJlcihmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VyaWQsIHJvbGUpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBGaXJzdCBOYW1lLCBMYXN0IE5hbWUgYW5kIFVzZXIgSWRcclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBhZGRGYWN1bHR5TWVtYmVyKGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgdXNlcklkID0gXCJcIiwgZmFjdWx0eVR5cGUgPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWN1bHR5VHlwZTogZmFjdWx0eVR5cGVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mYWN1bHR5L2FkZC1tZW1iZXJcIiwgYm9keSwgdHJ1ZSkudGhlbiAoKHJlc3BvbnNlKSA9PiB7cmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PSBPSzsgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tZ2V0Q291cnNlc0J5RGVwYXJ0bWVudChkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBhcnJheSBvZiBjb3Vyc2VzXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgZGVwYXJ0bWVudFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9nZXQtYnktZGVwYXJ0bWVudFwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1hZGRDb3Vyc2UodXNlcmlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkaXNwbGF5TmFtZSwgZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IF5eXlxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIGFkZENvdXJzZSh1c2VyaWQgPSBcIlwiLCBmaXJzdE5hbWUgPSBcIlwiLCBsYXN0TmFtZSA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGRpc3BsYXlOYW1lID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvYWRkLWNvdXJzZVwiLCBib2R5LCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4geyByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09IE9LOyB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1yZW1vdmVDb3Vyc2UoeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnRcclxuICAgIC8vICAgIE91dHB1dDogc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgICBhc3luYyByZW1vdmVDb3Vyc2UoeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvcmVtb3ZlLWNvdXJzZVwiLCBib2R5LCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4geyByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09IE9LOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldENvdXJzZU91dGNvbWVzQnlDb3Vyc2UoeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnRcclxuICAgIC8vICAgIE91dHB1dDogYXJyYXkgb2YgY291cnNlIG91dGNvbWVzXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VPdXRjb21lc0J5Q291cnNlKHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZS1vdXRjb21lcy9ieS1jb3Vyc2VcIiwgYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1wb3N0Q291cnNlT3V0Y29tZXMob3V0Y29tZXMpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBhcnJheSBvZiBvdXRjb21lIG9iamVjdHMgKHNlZSBub3RlcyBiZWxvdylcclxuICAgIC8vICAgIE91dHB1dDogc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0Q291cnNlT3V0Y29tZXMob3V0Y29tZXMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICAvL2FuIG91dGNvbWUgb2JqZWN0IGNvbnRhaW5zIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9vcmRlciAobnVtYmVyKSwgb3V0Y29tZSAoc3RyaW5nKSwgbWFwcGVkU3R1ZGVudE91dGNvbWVzKGFycmF5IG9mIG51bWJlcnMpXHJcbiAgICAgICAgLy9FeGFtcGxlOlxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vICAgIG9yZGVyOiAxLCBvdXRjb21lOiBcIkFjY29tcGxpc2ggdGhpbmdzXCIsIG1hcHBlZFN0dWRlbnRPdXRjb21lczogWzEsIDAsIDAsIDEsIDAsIDFdXHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGNvdXJzZU91dGNvbWVzTGlzdDogb3V0Y29tZXNcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlLW91dGNvbWVzL3Bvc3Qtb3V0Y29tZXNcIiwgYm9keSwgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PSBPSzsgfSk7O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFcnJvck9iaiB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlID0gXCJcIiwgaXNMb2dnZWRJbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=