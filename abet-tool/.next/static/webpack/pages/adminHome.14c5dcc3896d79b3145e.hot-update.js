webpackHotUpdate_N_E("pages/adminHome",{

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

var UNAUTHORIZED = 401; //401 Unauthorized status code

var NOT_LOGGED_IN_MSG = "Error: Your session has expired. Please log in again.";
var SERVER_ERROR_MSG = "Internal Server Error: Please try again later.";
var BAD_REQUEST_MSG = "Error: Some of the provided parameters are invalid.";
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
            url,
            statusCode,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                route = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
                body = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
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
                  if (statusCode == UNAUTHORIZED) return new ErrorObj(NOT_LOGGED_IN_MSG, false); //user's session has expired
                  else return response.json();
                }).then(function (json) {
                  if (statusCode == OK) return json;else {
                    if (json.hasOwnProperty("message")) return new ErrorObj(json["message"]); //custom error message from API
                    else return new ErrorObj(BAD_REQUEST_MSG); //bad input parameters
                  }
                })["catch"](function () {
                  return new ErrorObj(SERVER_ERROR_MSG);
                }));

              case 5:
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
                  if (json.hasOwnProperty("token")) {
                    var expires = new Date();
                    expires.setHours(expires.getHours() + 24); //expires in 24 hours

                    expires = expires.toUTCString();
                    cookie_cutter__WEBPACK_IMPORTED_MODULE_4___default.a.set("token", json["token"], {
                      expires: expires
                    }); //set token cookie

                    return json["role"]; //return the role
                  }
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
                return this.sendPost("/forms/post-form", body);

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
                return this.sendPost("/courses/post-comment", body);

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
                return this.sendPost("/sections/add-section", body);

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
                return this.sendPost("/faculty/add-member", body);

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
                return this.sendPost("/courses/add-course", body);

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
                return this.sendPost("/courses/remove-course", body);

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
                return this.sendPost("/course-outcomes/post-outcomes", body);

              case 4:
                return _context19.abrupt("return", _context19.sent);

              case 5:
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
  this.isLoggedIn = isLoggedIn;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2FwaS5qcyJdLCJuYW1lcyI6WyJyb290IiwiT0siLCJVTkFVVEhPUklaRUQiLCJOT1RfTE9HR0VEX0lOX01TRyIsIlNFUlZFUl9FUlJPUl9NU0ciLCJCQURfUkVRVUVTVF9NU0ciLCJ0b2tlbiIsIkFQSSIsInQiLCJyb3V0ZSIsImJvZHkiLCJ1cmwiLCJjb29raWVDdXR0ZXIiLCJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsInJlZmVycmVyUG9saWN5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJzdGF0dXMiLCJFcnJvck9iaiIsImpzb24iLCJoYXNPd25Qcm9wZXJ0eSIsInVzZXJpZCIsInBhc3N3b3JkIiwic2VuZFBvc3QiLCJleHBpcmVzIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJ0b1VUQ1N0cmluZyIsInNldCIsInNlbWVzdGVyIiwieWVhciIsIlVzZXJpZCIsIlNlbWVzdGVyIiwiWWVhciIsImRlcGFydG1lbnQiLCJjb3Vyc2VOdW1iZXIiLCJzZWN0aW9uTnVtYmVyIiwiU2VjdGlvbiIsIkluc3RydWN0b3IiLCJJZCIsIkRlcGFydG1lbnQiLCJDb3Vyc2VOdW1iZXIiLCJTZWN0aW9uTnVtYmVyIiwiQ291cnNlIiwiQ29vcmRpbmF0b3IiLCJ1c2VySWQiLCJpc1NlY3Rpb25Db21wbGV0ZWQiLCJvdXRjb21lcyIsIklUR3JhZGVzIiwiQ1NHcmFkZXMiLCJDRUdyYWRlcyIsImZvcm0iLCJzZWN0aW9uIiwiaW5zdHJ1Y3RvciIsImlkIiwiY29vcmRpbmF0b3JDb21tZW50IiwiaXNDb3Vyc2VDb21wbGV0ZWQiLCJjb3Vyc2UiLCJ0ZXh0IiwiUmVzdWx0T2JqIiwicGFyc2UiLCJkYXRlIiwiZGF5IiwiZ2V0RGF5IiwibW9udGgiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJudW1iZXJPZlN0dWRlbnRzIiwiZmFjdWx0eVR5cGUiLCJpbmZvIiwiZGlzcGxheU5hbWUiLCJjb3Vyc2VPdXRjb21lc0xpc3QiLCJtZXNzYWdlIiwiaXNMb2dnZWRJbiIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyw2QkFBYixDLENBQTRDOztBQUM1QyxJQUFNQyxFQUFFLEdBQUcsR0FBWCxDLENBQTBCOztBQUMxQixJQUFNQyxZQUFZLEdBQUcsR0FBckIsQyxDQUEwQjs7QUFDMUIsSUFBTUMsaUJBQWlCLEdBQUcsdURBQTFCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsZ0RBQXpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLHFEQUF4QjtBQUNBLElBQUlDLEtBQUssR0FBRyxFQUFaLEMsQ0FBMEI7O0lBRUxDLEc7Ozs7Ozs7O0FBQ2pCO0FBQ0o7QUFDQTtBQUNBOytCQUNxQjtBQUFBLFVBQVJDLENBQVEsdUVBQUosRUFBSTtBQUNiRixXQUFLLEdBQUdFLENBQVI7QUFDSCxLLENBRUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDZUMscUIsMkRBQVEsRTtBQUFJQyxvQiwyREFBTyxFO0FBQ3hCQyxtQixHQUFNWCxJQUFJLEdBQUdTLEssRUFBTzs7QUFHMUI7QUFDQSxvQkFBSSxPQUFPRyxvREFBWSxDQUFDQyxHQUFwQixJQUEyQixVQUEvQixFQUEyQztBQUN2Q1AsdUJBQUssR0FBR00sb0RBQVksQ0FBQ0MsR0FBYixDQUFpQixPQUFqQixDQUFSO0FBQ0g7O2lEQUVNQyxLQUFLLENBQUNILEdBQUQsRUFBTTtBQUNkSSx3QkFBTSxFQUFFLE1BRE07QUFFZEMsdUJBQUssRUFBRSxVQUZPO0FBR2RDLHlCQUFPLEVBQUU7QUFDVCxvQ0FBZ0Isa0JBRFA7QUFFVCxxQ0FBaUIsWUFBWVg7QUFGcEIsbUJBSEs7QUFPZFksZ0NBQWMsRUFBRSxhQVBGO0FBUWRSLHNCQUFJLEVBQUVTLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmO0FB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LElBREk7QUFFSkQsNEJBQVEsRUFBUkEsUUFGSTtBQUdKTSxnQ0FBWSxFQUFaQSxZQUhJO0FBSUpELDhCQUFVLEVBQVZBO0FBSkk7QUFEQyxpQjs7dUJBU0EsS0FBS1osUUFBTCxDQUFjLDRCQUFkLEVBQTRDcEIsSUFBNUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR2pCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUN5QjZDLHdCLGlFQUFXLEU7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU03QyxvQixHQUFPO0FBQ1R1RSxvQ0FBa0IsRUFBRTFCO0FBRFgsaUI7O3VCQUlBLEtBQUt6QixRQUFMLENBQWMsZ0NBQWQsRUFBZ0RwQixJQUFoRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlmZSxRLEdBQ0Ysb0JBQTZDO0FBQUEsTUFBakN5RCxPQUFpQyx1RUFBdkIsRUFBdUI7QUFBQSxNQUFuQkMsVUFBbUIsdUVBQU4sSUFBTTs7QUFBQTs7QUFDekMsT0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxPQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNILEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5Ib21lLjE0YzVkY2MzODk2ZDc5YjMxNDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWxwZXIgQVBJIENsYXNzXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcic7XHJcblxyXG5jb25zdCByb290ID0gXCJodHRwczovL2xvY2FsaG9zdDo0NDM3Mi9hcGlcIjsgLy8gVGhlIGJhc2UgVVJMIGZvciBlYWNoIHJlcXVlc3RcclxuY29uc3QgT0sgPSAyMDA7ICAgICAgICAgICAvLzIwMCBPayBzdGF0dXMgY29kZVxyXG5jb25zdCBVTkFVVEhPUklaRUQgPSA0MDE7IC8vNDAxIFVuYXV0aG9yaXplZCBzdGF0dXMgY29kZVxyXG5jb25zdCBOT1RfTE9HR0VEX0lOX01TRyA9IFwiRXJyb3I6IFlvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi5cIjtcclxuY29uc3QgU0VSVkVSX0VSUk9SX01TRyA9IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yOiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiO1xyXG5jb25zdCBCQURfUkVRVUVTVF9NU0cgPSBcIkVycm9yOiBTb21lIG9mIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXJzIGFyZSBpbnZhbGlkLlwiXHJcbnZhciB0b2tlbiA9IFwiXCI7ICAgICAgICAgICAvL2hvbGRzIHZhbHVlIG9mIHRoZSB0b2tlbiBjb29raWVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XHJcbiAgICAvKiBUaGlzIGZ1bmN0aW9uIGlzIGZvciBnZXRJbml0aWFsUHJvcHMuXHJcbiAgICBjb29raWVDdXR0ZXIgaXMgdW5kZWZpbmVkIGluIGdldEluaXRpYWxQcm9wcyxcclxuICAgIHNvIHRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgdG9rZW4gdG8gdGhlIHZhbHVlIG9mIHRoZSBjb29raWVcclxuICAgIHBhc3NlZCBpbiBmcm9tIGdldEluaXRpYWxQcm9wcy4gKi9cclxuICAgIHNldFRva2VuKHQgPSBcIlwiKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdlbmVyaWMgZnVuY3Rpb24gZm9yIHNlbmRpbmcgUE9TVCByZXF1ZXN0c1xyXG4gICAgLy8gICAgSW5wdXQ6IHJvdXRlIGFuZCBib2R5XHJcbiAgICAvLyAgICBPdXRwdXQ6IFRoZSBKU09OIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB0aGUgcm91dGVcclxuICAgIGFzeW5jIHNlbmRQb3N0KHJvdXRlID0gXCJcIiwgYm9keSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcm9vdCArIHJvdXRlOyAvLyBDb21iaW5lIHRoZSByb290IFVSTCB3aXRoIHRoZSBzcGVjaWZpZWQgcm91dGVcclxuICAgICAgICB2YXIgc3RhdHVzQ29kZTtcclxuXHJcbiAgICAgICAgLy9pZiB0aGUgcmVxdWVzdCBpcyBub3QgZnJvbSBnZXRJbml0aWFsUHJvcHMsIG1lYW5pbmcgY29va2llQ3V0dGVyIGlzIGRlZmluZWQsIHJldHJlaXZlIHRoZSBjb29raWVcclxuICAgICAgICBpZiAodHlwZW9mIGNvb2tpZUN1dHRlci5nZXQgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gY29va2llQ3V0dGVyLmdldChcInRva2VuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWZlcnJlclBvbGljeTogXCJuby1yZWZlcnJlclwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT0gVU5BVVRIT1JJWkVEKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooTk9UX0xPR0dFRF9JTl9NU0csIGZhbHNlKTsgLy91c2VyJ3Mgc2Vzc2lvbiBoYXMgZXhwaXJlZFxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSBPSylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwibWVzc2FnZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihqc29uW1wibWVzc2FnZVwiXSk7IC8vY3VzdG9tIGVycm9yIG1lc3NhZ2UgZnJvbSBBUElcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooQkFEX1JFUVVFU1RfTVNHKTsgLy9iYWQgaW5wdXQgcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4geyByZXR1cm4gbmV3IEVycm9yT2JqKFNFUlZFUl9FUlJPUl9NU0cpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBQYXNzd29yZFxyXG4gICAgLy8gICAgT3V0cHV0OiBcIkFkbWluXCIsIFwiSW5zdHJ1Y3RvclwiLCBcIlN0dWRlbnQvVEFcIiBvciBib29sZWFuIGZvciBmYWlsdXJlXHJcbiAgICBhc3luYyBsb2dpbih1c2VyaWQgPSBcIlwiLCBwYXNzd29yZCA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvbG9naW5cIiwgYm9keSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcInRva2VuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGV4cGlyZXMuc2V0SG91cnMoZXhwaXJlcy5nZXRIb3VycygpICsgMjQpOyAvL2V4cGlyZXMgaW4gMjQgaG91cnNcclxuICAgICAgICAgICAgICAgIGV4cGlyZXMgPSBleHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvb2tpZUN1dHRlci5zZXQoXCJ0b2tlblwiLCBqc29uW1widG9rZW5cIl0sIHsgZXhwaXJlcyB9KTsgLy9zZXQgdG9rZW4gY29va2llXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbltcInJvbGVcIl07IC8vcmV0dXJuIHRoZSByb2xlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5sb2dpbih1c2VyaWQsIHBhc3N3b3JkKS50aGVuKHJvbGUgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgcmV0dXJuIHZhbHVlIGlzIGFjY2Vzc2libGUsIGl0IGlzIGVpdGhlciByb2xlIHN0cmluZyBvciBhIGJvb2xlYW4gaW5kaWNhdGluZyBmYWlsdXJlKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tbG9nb3V0KHVzZXJpZCktLS1cclxuICAgIC8vICAgIElucHV0OiBOb25lXHJcbiAgICAvLyAgICBPdXRwdXQ6IE5vbmVcclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KFwidG9rZW5cIiwgXCJcIiwgeyBleHBpcmVzOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgfSk7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldChcInVzZXJcIiwgXCJcIiwgeyBleHBpcmVzOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tZ2V0Q291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogU2VjdGlvbnMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFVzZXJJZCwgU2VtZXN0ZXIgYW5kIFllYXJcclxuICAgIGFzeW5jIGdldENvdXJzZXModXNlcmlkID0gXCJcIiwgc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBzZW1lc3Rlcjogc2VtZXN0ZXIsIHllYXI6IHllYXIgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvc2VjdGlvbnMvYnktdXNlcmlkLXNlbWVzdGVyLXllYXJcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldENvdXJzZXModXNlcklkLCBzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLS0tICAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBTZWN0aW9ucyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgU2VtZXN0ZXIgYW5kIFllYXIgXHJcbiAgICBhc3luYyBnZXRBbGxDb3Vyc2VzKHVzZXJpZCA9IFwiXCIsIHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyBVc2VyaWQ6IHVzZXJpZCwgU2VtZXN0ZXI6IHNlbWVzdGVyLCBZZWFyOiB5ZWFyIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL3NlY3Rpb25zL2J5LXNlbWVzdGVyLXllYXJcIiwgYm9keSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0QWxsQ291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuICAgIC8vLS0tZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyKHNlbWVzdGVyLCB5ZWFyKS0tLSAgKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEFsbCBDb3Vyc2VzIGZvciB0aGUgY29ycmVzcG9uZGluZyBzZW1lc3RlciBhbmQgeWVhciBcclxuICAgIGFzeW5jIGdldENvdXJzZXNCeVNlbWVzdGVyWWVhcihzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSBcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgc2VtZXN0ZXI6IHNlbWVzdGVyLCBcclxuICAgICAgICAgICAgeWVhcjogeWVhciBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2dldC1ieS15ZWFyLXNlbWVzdGVyXCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAvL2FwaS5nZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIoc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG5cclxuICAgIC8vLS0tZ2V0Rm9ybXNCeVNlY3Rpb24odXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlLCBzZWN0aW9uKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIENvdXJzZU51bWJlciwgU2VjdGlvbk51bWJlclxyXG4gICAgLy8gICAgT3V0cHV0OiBGb3JtcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgQ291cnNlTnVtYmVyLCBhbmQgU2VjdGlvbk51bWJlclxyXG4gICAgYXN5bmMgZ2V0Rm9ybUJ5U2VjdGlvbih1c2VyaWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBTZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBJbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBZZWFyOiB5ZWFyLCAgIFxyXG4gICAgICAgICAgICAgICAgU2VtZXN0ZXI6IHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgRGVwYXJ0bWVudDogZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIENvdXJzZU51bWJlcjogY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgU2VjdGlvbk51bWJlcjogc2VjdGlvbk51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvYnktc2VjdGlvblwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0Rm9ybXNCeVNlY3Rpb24odXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlLCBzZWN0aW9uKS50aGVuKGZvcm0gPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBmb3JtIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEZvcm1zQnlDb3Vyc2UodXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIENvdXJzZU51bWJlclxyXG4gICAgLy8gICAgT3V0cHV0OiBGb3JtcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgYW5kIENvdXJzZU51bWJlclxyXG4gICAgYXN5bmMgZ2V0Rm9ybXNCeUNvdXJzZSh1c2VyaWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgQ29vcmRpbmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFllYXI6IHllYXIsXHJcbiAgICAgICAgICAgICAgICBTZW1lc3Rlcjogc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBEZXBhcnRtZW50OiBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgQ291cnNlTnVtYmVyOiBjb3Vyc2VOdW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvYnktY291cnNlXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRGb3Jtc0J5Q291cnNlKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSkudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRBbGxGb3Jtcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBGb3JtcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgU2VtZXN0ZXIgYW5kIFllYXJcclxuICAgIGFzeW5jIGdldEFsbEZvcm1zKHVzZXJpZCA9IFwiXCIsIHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIHtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQsIHNlbWVzdGVyOiBzZW1lc3RlciwgeWVhcjogeWVhciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9ieS1zZW1lc3Rlci15ZWFyXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRBbGxGb3Jtcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBmb3JtcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1wb3N0Rm9ybSh1c2VySWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGlzU2VjdGlvbkNvbXBsZXRlZCwgb3V0Y29tZXMsIElUR3JhZGVzLCBDU0dyYWRlcywgQ0VHcmFkZXMpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogXl5eICAgKHdpbGwgYWxzbyBoYXZlIHBkZiBoZXJlIGxhdGVyIGFzIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyKVxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RGb3JtKHVzZXJJZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIiwgaXNTZWN0aW9uQ29tcGxldGVkID0gZmFsc2UsIG91dGNvbWVzID0gW10sIElUR3JhZGVzID0ge30sIENTR3JhZGVzID0ge30sIENFR3JhZGVzID0ge30pIHtcclxuICAgICAgICAvLyB0aGUgYm9keSB3aWxsIGFsc28gaW5jbHVkZSBhbnkgcGRmIHRvIHBvc3QgaW4gdGhlIGZ1dHVyZVxyXG5cclxuICAgICAgICAvL291dGNvbWVzOiBhbiBhcnJheSBvZiBDb3Vyc2VfT3V0Y29tZXMgb2JqZWN0c1xyXG4gICAgICAgIC8vQ291cnNlX091dGNvbWVzIGNsYXNzOlxyXG4gICAgICAgIC8vc3RyaW5nIG91dGNvbWUsIGludCBudW1iZXJPZklULCBpbnQgbnVtYmVyT2ZDUywgaW50IG51bWJlck9mQ0UsIFN0dWRlbnRXb3Jrc1tdIHN0dWRlbnRXb3Jrc1xyXG4gICAgICAgIC8vU3R1ZGVudFdvcmtzIGNsYXNzOlxyXG4gICAgICAgIC8vc3RyaW5nIHN0dWRlbnRXb3JrLCBzdHJpbmcgZmlsZVVwbG9hZGVkICg8LS0gd2lsbCBpbXBsZW1lbnQgbGF0ZXIpXHJcblxyXG4gICAgICAgIC8vSVQsIENTLCBDRSBHcmFkZXMgY2xhc3M6XHJcbiAgICAgICAgLy9pbnQgQSwgaW50IEIsIGludCBDLCBpbnQgRCwgaW50IEUsIGludCBGLCBpbnQgVywgaW50IEksIGludCB0b3RhbFN0dWRlbnRzXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBpc1NlY3Rpb25Db21wbGV0ZWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvdXRjb21lcyxcclxuICAgICAgICAgICAgICAgIElUR3JhZGVzLFxyXG4gICAgICAgICAgICAgICAgQ1NHcmFkZXMsXHJcbiAgICAgICAgICAgICAgICBDRUdyYWRlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvcG9zdC1mb3JtXCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tcG9zdENvbW1lbnQodXNlcklkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBjb29yZGluYXRvckNvbW1lbnQsIGlzQ291cnNlQ29tcGxldGVkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgY29vcmRpbmF0b3JDb21tZW50LCBpc0NvdXJzZUNvbXBsZXRlZFxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RDb21tZW50KHVzZXJJZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBjb29yZGluYXRvckNvbW1lbnQgPSBcIlwiLCBpc0NvdXJzZUNvbXBsZXRlZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgY291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdG9yQ29tbWVudCxcclxuICAgICAgICAgICAgICAgIGlzQ291cnNlQ29tcGxldGVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL3Bvc3QtY29tbWVudFwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEJsYW5rRm9ybSh1c2VyaWQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkXHJcbiAgICAvLyAgICBPdXRwdXQ6IEJsYW5rIEZvcm1cclxuICAgIGFzeW5jIGdldEJsYW5rRm9ybSh1c2VyaWQpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9uZXctYmxhbmtcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEJsYW5rRm9ybSh1c2VyaWQpLnRoZW4ocmVzdWx0ID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBpcyBhY2Nlc3NpYmxlLCBpdCBpcyBhIEpTT04qL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLWdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIoKS0tXHJcbiAgICAvLyAgICBJbnB1dDogTm90aGluZ1xyXG4gICAgLy8gICAgT3V0cHV0OiBPYmplY3QgSW5jbHVkaW5nIEN1cnJlbnQgRGVmYXVsdCBZZWFyIGFuZCBTZW1lc3RlclxyXG4gICAgZ2V0RGVmYXVsdFllYXJBbmRTZW1lc3RlcigpIHtcclxuICAgICAgICB2YXIgdGV4dCA9ICd7IFwieWVhclwiOiAwLCcgKyAgICAgICAgIC8vIGNyZWF0ZSBzdHJpbmcgb2Ygb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAnIFwic2VtZXN0ZXJcIjogXCJcIiB9JztcclxuICAgICAgICB2YXIgUmVzdWx0T2JqID0gSlNPTi5wYXJzZSh0ZXh0KTsgICAvLyBjcmVhdGUgb2JqZWN0IGZyb20gdGhlIHN0cmluZ1xyXG5cclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7ICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZGF0ZVxyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERheSgpOyAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkYXlcclxuICAgICAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxOyAgICAvLyBhZGQgb25lIHRvIG1vbnRoIChieSBkZWZhdWx0IEphbnVhcnkgPSAwKVxyXG4gICAgICAgIFJlc3VsdE9iai55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOy8vIGdldCB0aGUgZnVsbCB5ZWFyIGZyb20gdGhlIGRhdGVcclxuICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjsgICAgICAgIC8vIGp1c3QgdG8gYmUgc2FmZVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldCB0aGUgRGVmYXVsdCBTZW1lc3RlciBCYXNlZCBvbiB0aGUgTW9udGhcclxuICAgICAgICBpZiAoKG1vbnRoID4gOCkgfHwgKG1vbnRoID09IDggJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKG1vbnRoID4gNSkgfHwgKG1vbnRoID09IDUgJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcInN1bW1lclwiO1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGlzIGlzIGp1c3QgYSBkZWZhdWx0IHNlbWVzdGVyLCBpdCBhbHdheXMgZGVmYXVsdHMgdG8gdGhlIGxvbmdlciBzZW1lc3RlcnNcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyB3aHkgaXQgZG9lc24ndCBkZWZhdWx0IHRvIHNtYWxsZXIgc3VtbWVyIHNlbWVzdGVyc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJzcHJpbmdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBSZXN1bHRPYmo7ICAgIC8vIHJldHVybiBvYmplY3QgaW5jbHVkaW5nIHRoZSB5ZWFyIGFuZCBzZW1lc3RlclxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tYWRkU2VjdGlvbih1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGRlcGFydG1lbnQsIG51bWJlck9mU3R1ZGVudHMpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBeXl5cclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBhZGRTZWN0aW9uKHVzZXJpZCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBudW1iZXJPZlN0dWRlbnRzID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgaXNTZWN0aW9uQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mU3R1ZGVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9hZGQtc2VjdGlvblwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEZhY3VsdHlMaXN0KCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IG5vbmVcclxuICAgIC8vICAgIE91dHB1dDogTGlzdCBvZiBpbnN0cnVjdG9ycywgY29vcmRpbmF0b3JzLCBhZGp1bmN0IGZhY3VsdGllcywgYW5kIHRlYWNoaW5nIGZlbGxvd3NcclxuICAgIGFzeW5jIGdldEZhY3VsdHlMaXN0KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mYWN1bHR5L2dldC1saXN0XCIsIHt9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1hZGRGYWN1bHR5TWVtYmVyKGZpcnN0TmFtZSwgbGFzdE5hbWUsIHVzZXJpZCwgcm9sZSktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IEZpcnN0IE5hbWUsIExhc3QgTmFtZSBhbmQgVXNlciBJZFxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIGFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB1c2VySWQgPSBcIlwiLCBmYWN1bHR5VHlwZSA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhY3VsdHlUeXBlOiBmYWN1bHR5VHlwZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2ZhY3VsdHkvYWRkLW1lbWJlclwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBkZXBhcnRtZW50XHJcbiAgICAvLyAgICBPdXRwdXQ6IGFycmF5IG9mIGNvdXJzZXNcclxuICAgIGFzeW5jIGdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2dldC1ieS1kZXBhcnRtZW50XCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWFkZENvdXJzZSh1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRpc3BsYXlOYW1lLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogXl5eXHJcbiAgICAvLyAgICBPdXRwdXQ6IHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgYWRkQ291cnNlKHVzZXJpZCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGlzcGxheU5hbWUgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9hZGQtY291cnNlXCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLXJlbW92ZUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIHJlbW92ZUNvdXJzZSh5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9yZW1vdmUtY291cnNlXCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBhcnJheSBvZiBjb3Vyc2Ugb3V0Y29tZXNcclxuICAgIGFzeW5jIGdldENvdXJzZU91dGNvbWVzQnlDb3Vyc2UoeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlLW91dGNvbWVzL2J5LWNvdXJzZVwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RDb3Vyc2VPdXRjb21lcyhvdXRjb21lcyktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IGFycmF5IG9mIG91dGNvbWUgb2JqZWN0cyAoc2VlIG5vdGVzIGJlbG93KVxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RDb3Vyc2VPdXRjb21lcyhvdXRjb21lcyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIC8vYW4gb3V0Y29tZSBvYmplY3QgY29udGFpbnMgdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL29yZGVyIChudW1iZXIpLCBvdXRjb21lIChzdHJpbmcpLCBtYXBwZWRTdHVkZW50T3V0Y29tZXMoYXJyYXkgb2YgbnVtYmVycylcclxuICAgICAgICAvL0V4YW1wbGU6XHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgLy8gICAgb3JkZXI6IDEsIG91dGNvbWU6IFwiQWNjb21wbGlzaCB0aGluZ3NcIiwgbWFwcGVkU3R1ZGVudE91dGNvbWVzOiBbMSwgMCwgMCwgMSwgMCwgMV1cclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgY291cnNlT3V0Y29tZXNMaXN0OiBvdXRjb21lc1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2Utb3V0Y29tZXMvcG9zdC1vdXRjb21lc1wiLCBib2R5KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRXJyb3JPYmoge1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSA9IFwiXCIsIGlzTG9nZ2VkSW4gPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBpc0xvZ2dlZEluO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=