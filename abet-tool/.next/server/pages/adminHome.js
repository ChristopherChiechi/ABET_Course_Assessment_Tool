module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/adminHome.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/APIHelper.js":
/*!**************************!*\
  !*** ./api/APIHelper.js ***!
  \**************************/
/*! exports provided: getCourses, getInstructorCourses, getCoordinatorCourses, getFormData, postCoordinatorComment, postInstructorForm, login, getAllCourses, getFacultyList, getCoursesByDepartment, addFacultyMember, addCourse, removeCourse, getCourseOutcomesbyCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourses", function() { return getCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstructorCourses", function() { return getInstructorCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoordinatorCourses", function() { return getCoordinatorCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormData", function() { return getFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCoordinatorComment", function() { return postCoordinatorComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postInstructorForm", function() { return postInstructorForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCourses", function() { return getAllCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFacultyList", function() { return getFacultyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoursesByDepartment", function() { return getCoursesByDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFacultyMember", function() { return addFacultyMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCourse", function() { return addCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCourse", function() { return removeCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourseOutcomesbyCourse", function() { return getCourseOutcomesbyCourse; });
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../fake-data/course.json */ "./fake-data/course.json", 1);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./api/api.js");


function getCourses() {
  return _fake_data_course_json__WEBPACK_IMPORTED_MODULE_0__;
}
async function getInstructorCourses(id, term) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.getCourses(id, term.semester, term.year);
  response.then(function (result) {
    return result;
  });
  const instructorCourses = await response;
  const filteredCourses = instructorCourses.filter(course => course.instructor.id === id);
  return filteredCourses;
}
async function getCoordinatorCourses(id, term) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.getCourses(id, term.semester, term.year);
  response.then(function (result) {
    return result;
  });
  const coordinatorCourses = await response;
  const filteredCourses = coordinatorCourses.filter(course => course.coordinator.id === id);
  return filteredCourses;
}
async function getFormData(id, year, term, department, course, section) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.getFormBySection(id, year, term, department, course, section);
  response.then(function (result) {
    return result;
  });
  const formData = await response;
  return formData;
}
async function postCoordinatorComment(userid, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.postComment(userid, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
}
async function postInstructorForm(userid, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.postForm(userid, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
}
async function login(userid, password) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.login(userid, password);
  console.log(response);
  return response.then(function (result) {
    return result;
  });
}
async function getAllCourses(userid, semester, year) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.getAllCourses(userid, semester, parseInt(year));
  response.then(function (result) {
    return result;
  });
  const courses = await response;
  console.log(courses);
  return courses;
}
async function getFacultyList() {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.getFacultyList();
  response.then(function (result) {
    return result;
  });
  const faculty = await response;
  return faculty;
}
async function getCoursesByDepartment(department) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.getCoursesByDepartment(department);
  response.then(function (result) {
    return result;
  });
  const courses = await response;
  return courses;
}
async function addFacultyMember(lastName, firstName, id, type) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.addFacultyMember(firstName, lastName, id, type);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
}
async function addCourse(userid, firstName, lastName, year = 0, semester, courseNumber, displayName, department) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.addCourse(userid, firstName, lastName, year = 0, semester, courseNumber, displayName, department);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
}
async function removeCourse(year, semester, courseNumber, department) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.removeCourse(year, semester, courseNumber, department);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
  console.log(courseNumber);
}
async function getCourseOutcomesbyCourse(year = 2020, semester = "", courseNumber = "", department = "") {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let response = api_helper.getCourseOutcomesByCourse(year, semester, courseNumber, department);
  response.then(function (result) {
    return result;
  });
  const courseoutcomes = await response;
  return courseoutcomes;
}

/***/ }),

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return API; });
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie-cutter */ "cookie-cutter");
/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie_cutter__WEBPACK_IMPORTED_MODULE_0__);
// Helper API Class

const root = "https://localhost:44372/api"; // The base URL for each request

const OK = 200; //200 Ok status code

const UNAUTHORIZED = 401; //401 Unauthorized status code

const NOT_LOGGED_IN_MSG = "Error: Your session has expired. Please log in again.";
const SERVER_ERROR_MSG = "Internal Server Error: Please try again later.";
const BAD_REQUEST_MSG = "Error: Some of the provided parameters are invalid.";
var token = ""; //holds value of the token cookie

class API {
  /* This function is for getInitialProps.
  cookieCutter is undefined in getInitialProps,
  so this function sets the token to the value of the cookie
  passed in from getInitialProps. */
  setToken(t = "") {
    token = t;
  } // generic function for sending POST requests
  //    Input: route and body
  //    Output: The JSON that is returned from the route


  async sendPost(route = "", body = {}) {
    const url = root + route; // Combine the root URL with the specified route

    var statusCode; //holds the status code of the response
    //if the request is not from getInitialProps, meaning cookieCutter is defined, retreive the cookie

    if (typeof cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.get == "function") {
      token = cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.get("token");
    }

    return fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body)
    }).then(response => {
      statusCode = response.status;
      if (statusCode == UNAUTHORIZED) return new ErrorObj(NOT_LOGGED_IN_MSG, false); //user's session has expired
      else return response.json();
    }).then(json => {
      if (statusCode == OK) return json;else {
        if (json.hasOwnProperty("message")) return new ErrorObj(json["message"]); //custom error message from API
        else return new ErrorObj(BAD_REQUEST_MSG); //bad input parameters
      }
    }).catch(() => {
      return new ErrorObj(SERVER_ERROR_MSG);
    });
  } //---login(userid, password)---
  //    Input: UserId, Password
  //    Output: "Admin", "Instructor", "Student/TA" or boolean for failure


  async login(userid = "", password = "") {
    const body = {
      userid: userid,
      password: password
    };
    return await this.sendPost("/login", body).then(json => {
      if (json.hasOwnProperty("token")) {
        var expires = new Date();
        expires.setHours(expires.getHours() + 24); //expires in 24 hours

        expires = expires.toUTCString();
        cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.set("token", json["token"], {
          expires
        }); //set token cookie

        return json["role"]; //return the role
      }
    }); //To use this data you must do the following:
    //api.login(userid, password).then(role => {/*here is where the return value is accessible, it is either role string or a boolean indicating failure*/})
  } //---logout(userid)---
  //    Input: None
  //    Output: None


  logout() {
    cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.set("token", "", {
      expires: new Date().toUTCString()
    });
    cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.set("user", "", {
      expires: new Date().toUTCString()
    });
  } //---getCourses(userid, semester, year)---
  //    Input: UserId, Semester, Year
  //    Output: Sections for the corresponding UserId, Semester and Year


  async getCourses(userid = "", semester = "", year = 0) {
    const body = {
      userid: userid,
      semester: semester,
      year: year
    };
    return await this.sendPost("/sections/by-userid-semester-year", body); //To use this data you must do the following:
    //api.getCourses(userId, semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})
  } //---getAllCourses(userid, semester, year)---  (Admin)
  //    Input: UserId, Semester, Year
  //    Output: Sections for the corresponding Semester and Year 


  async getAllCourses(userid = "", semester = "", year = 0) {
    const body = {
      Userid: userid,
      Semester: semester,
      Year: year
    };
    return await this.sendPost("/sections/by-semester-year", body); //To use this data you must do the following:
    //api.getAllCourses(userid, semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})
  } //---getCoursesBySemesterYear(semester, year)---  (Admin)
  //    Input: Semester, Year
  //    Output: All Courses for the corresponding semester and year 


  async getCoursesBySemesterYear(semester = "", year = 0) {
    const body = {
      semester: semester,
      year: year
    };
    return await this.sendPost("/courses/get-by-year-semester", body);
  } //To use this data you must do the following:
  //api.getCoursesBySemesterYear(semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})
  //---getFormsBySection(userid, year, semester, department, course, section)---
  //    Input: UserId, Year, Semester, Department, CourseNumber, SectionNumber
  //    Output: Forms for the corresponding UserId, Year, Semester, Department, CourseNumber, and SectionNumber


  async getFormBySection(userid = "", year = 0, semester = "", department = "", courseNumber = "", sectionNumber = "") {
    const body = {
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
    return await this.sendPost("/forms/by-section", body); //To use this data you must do the following:
    //api.getFormsBySection(userid, year, semester, department, course, section).then(form => {/*here is where the data is accessible, form is an array of JSON objects*/})
  } //---getFormsByCourse(userid, year, semester, department, course)---
  //    Input: UserId, Year, Semester, Department, CourseNumber
  //    Output: Forms for the corresponding UserId, Year, Semester, Department, and CourseNumber


  async getFormsByCourse(userid = "", year = 0, semester = "", department = "", courseNumber = "") {
    const body = {
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
    return await this.sendPost("/forms/by-course", body); //To use this data you must do the following:
    //api.getFormsByCourse(userid, year, semester, department, course).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})
  } //---getAllForms(userid, semester, year)--- (Admin)
  //    Input: UserId, Semester, Year
  //    Output: Forms for the corresponding Semester and Year


  async getAllForms(userid = "", semester = "", year = 0) {
    const body = {
      userid: userid,
      semester: semester,
      year: year
    };
    return await this.sendPost("/forms/by-semester-year", body); //To use this data you must do the following:
    //api.getAllForms(userid, semester, year).then(courses => {/*here is where the data is accessible, forms is an array of JSON objects*/})
  } //---postForm(userId, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades)---
  //    Input: ^^^   (will also have pdf here later as an additional parameter)
  //    Output: Success or Failure


  async postForm(userId = "", year = 0, semester = "", department = "", courseNumber = "", sectionNumber = "", isSectionCompleted = false, outcomes = [], ITGrades = {}, CSGrades = {}, CEGrades = {}) {
    // the body will also include any pdf to post in the future
    //outcomes: an array of Course_Outcomes objects
    //Course_Outcomes class:
    //string outcome, int numberOfIT, int numberOfCS, int numberOfCE, StudentWorks[] studentWorks
    //StudentWorks class:
    //string studentWork, string fileUploaded (<-- will implement later)
    //IT, CS, CE Grades class:
    //int A, int B, int C, int D, int E, int F, int W, int I, int totalStudents
    const body = {
      form: {
        section: {
          instructor: {
            id: userId
          },
          year,
          semester,
          department,
          courseNumber,
          sectionNumber,
          isSectionCompleted
        },
        outcomes,
        ITGrades,
        CSGrades,
        CEGrades
      }
    };
    return await this.sendPost("/forms/post-form", body);
  } //---postComment(userId, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted)---
  //    Input: UserId, Year, Semester, department, courseNumber, coordinatorComment, isCourseCompleted
  //    Output: Success or Failure


  async postComment(userId = "", year = 0, semester = "", department = "", courseNumber = "", coordinatorComment = "", isCourseCompleted = false) {
    const body = {
      course: {
        Coordinator: {
          Id: userId
        },
        year,
        semester,
        department,
        courseNumber,
        coordinatorComment,
        isCourseCompleted
      }
    };
    return await this.sendPost("/courses/post-comment", body);
  } //---getBlankForm(userid)---
  //    Input: UserId
  //    Output: Blank Form


  async getBlankForm(userid) {
    const body = {
      userid: userid
    };
    return await this.sendPost("/forms/new-blank", body); //To use this data you must do the following:
    //api.getBlankForm(userid).then(result => {/*here is where the return value is accessible, it is a JSON*/})
  } //--getDefaultYearAndSemester()--
  //    Input: Nothing
  //    Output: Object Including Current Default Year and Semester


  getDefaultYearAndSemester() {
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


  async addSection(userid = "", firstName = "", lastName = "", year = 0, semester = "", courseNumber = "", sectionNumber = "", department = "", numberOfStudents = 0) {
    const body = {
      section: {
        instructor: {
          id: userid,
          firstName,
          lastName
        },
        year,
        semester,
        courseNumber,
        sectionNumber,
        department,
        isSectionCompleted: false,
        numberOfStudents
      }
    };
    return await this.sendPost("/sections/add-section", body);
  } //---getFacultyList()--- (Admin)
  //    Input: none
  //    Output: List of instructors, coordinators, adjunct faculties, and teaching fellows


  async getFacultyList() {
    return await this.sendPost("/faculty/get-list", {});
  } //---addFacultyMember(firstName, lastName, userid, role)--- (Admin)
  //    Input: First Name, Last Name and User Id
  //    Output: Success or Failure


  async addFacultyMember(firstName = "", lastName = "", userId = "", facultyType = "") {
    const body = {
      info: {
        firstName: firstName,
        lastName: lastName,
        id: userId
      },
      facultyType: facultyType
    };
    return await this.sendPost("/faculty/add-member", body);
  } //---getCoursesByDepartment(department)--- (Admin)
  //    Input: department
  //    Output: array of courses


  async getCoursesByDepartment(department = "") {
    const body = {
      department
    };
    return await this.sendPost("/courses/get-by-department", body);
  } //---addCourse(userid, firstName, lastName, year, semester, courseNumber, displayName, department)--- (Admin)
  //    Input: ^^^
  //    Output: success or failure


  async addCourse(userid = "", firstName = "", lastName = "", year = 0, semester = "", courseNumber = "", displayName = "", department = "") {
    const body = {
      Course: {
        Coordinator: {
          Id: userid,
          firstName,
          lastName
        },
        year,
        semester,
        courseNumber,
        displayName,
        department
      }
    };
    return await this.sendPost("/courses/add-course", body);
  } //---removeCourse(year, semester, courseNumber, department)--- (Admin)
  //    Input: year, semester, courseNumber, department
  //    Output: success or failure


  async removeCourse(year = 0, semester = "", courseNumber = "", department = "") {
    const body = {
      Course: {
        year,
        semester,
        courseNumber,
        department
      }
    };
    return await this.sendPost("/courses/remove-course", body);
  } //---getCourseOutcomesByCourse(year, semester, courseNumber, department)--- (Admin)
  //    Input: year, semester, courseNumber, department
  //    Output: array of course outcomes


  async getCourseOutcomesByCourse(year = 0, semester = "", courseNumber = "", department = "") {
    const body = {
      Course: {
        year,
        semester,
        courseNumber,
        department
      }
    };
    return await this.sendPost("/course-outcomes/by-course", body);
  } //---postCourseOutcomes(outcomes)--- (Admin)
  //    Input: array of outcome objects (see notes below)
  //    Output: success or failure


  async postCourseOutcomes(outcomes = []) {
    //an outcome object contains the following:
    //order (number), outcome (string), mappedStudentOutcomes(array of numbers)
    //Example:
    //{
    //    order: 1, outcome: "Accomplish things", mappedStudentOutcomes: [1, 0, 0, 1, 0, 1]
    //}
    const body = {
      courseOutcomesList: outcomes
    };
    return await this.sendPost("/course-outcomes/post-outcomes", body);
  }

}

class ErrorObj {
  constructor(message = "", isLoggedIn = true) {
    this.success = false;
    this.message = message;
    this.isLoggedIn = isLoggedIn;
  }

}

/***/ }),

/***/ "./components/admin-components/AdminMenu/AdminMenu.css":
/*!*************************************************************!*\
  !*** ./components/admin-components/AdminMenu/AdminMenu.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/AdminMenu/AdminMenu.js":
/*!************************************************************!*\
  !*** ./components/admin-components/AdminMenu/AdminMenu.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AdminMenu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminMenu.css */ "./components/admin-components/AdminMenu/AdminMenu.css");
/* harmony import */ var _AdminMenu_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AdminMenu_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\AdminMenu\\AdminMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AdminMenu = ({
  setView
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    allowToggle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("GFR");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Generate Full Report"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("GSR");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "Generate Section Report"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("GSS");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Generate Student Surveys"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("OM");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "Student Outcome Mapping"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "Department Changes"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionPanel"], {
    pb: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    allowToggle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("CNS");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "Create New Semester"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("EAC");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "Edit Assigned Courses"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("EFL");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, "Edit Faculty List"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("EPL");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, "Edit Program List"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("ECL");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, "Edit Course List"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["AccordionHeader"], {
    _expanded: {
      bg: "#38A169",
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: "1",
    textAlign: "left",
    onClick: () => {
      setView("ECO");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, "Edit Course Outcomes")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminMenu);

/***/ }),

/***/ "./components/admin-components/AdminNavigation/AdminNavigation.css":
/*!*************************************************************************!*\
  !*** ./components/admin-components/AdminNavigation/AdminNavigation.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/AdminNavigation/AdminNavigation.js":
/*!************************************************************************!*\
  !*** ./components/admin-components/AdminNavigation/AdminNavigation.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AdminNavigation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminNavigation.css */ "./components/admin-components/AdminNavigation/AdminNavigation.css");
/* harmony import */ var _AdminNavigation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AdminNavigation_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../api/api */ "./api/api.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\AdminNavigation\\AdminNavigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AdminNavigation = ({
  link,
  user
}) => {
  const logout = () => {
    new _api_api__WEBPACK_IMPORTED_MODULE_3__["default"]().logout();
  };

  switch (link) {
    default:
      return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "nav-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/adminHome",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }
      }, "Home"), __jsx("div", {
        className: "alignright",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        className: "user-name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 29
        }
      }, user), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/",
        onClick: logout,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 29
        }
      }, "Sign Out")));
      break;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AdminNavigation);

/***/ }),

/***/ "./components/admin-components/Courses.js":
/*!************************************************!*\
  !*** ./components/admin-components/Courses.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _admin_components_EditFacultyList_EditFacultyMember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-components/EditFacultyList/EditFacultyMember */ "./components/admin-components/EditFacultyList/EditFacultyMember.js");
/* harmony import */ var _admin_components_EditCourseList_EditCourseList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-components/EditCourseList/EditCourseList */ "./components/admin-components/EditCourseList/EditCourseList.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/APIHelper */ "./api/APIHelper.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\Courses.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Courses = ({
  member,
  color,
  year,
  semester,
  courseNumber,
  department
}) => {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    templateColumns: "repeat(2, 1fr)",
    bg: color,
    padding: ".5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
    rowSpan: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, member)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "ghost",
    onClick: () => {
      Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_6__["removeCourse"])(year, semester, courseNumber, department);
      alert("This will remove your entry");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Remove"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Courses);
;

/***/ }),

/***/ "./components/admin-components/CreateNewSemester/CreateNewSemester.css":
/*!*****************************************************************************!*\
  !*** ./components/admin-components/CreateNewSemester/CreateNewSemester.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/CreateNewSemester/CreateNewSemester.js":
/*!****************************************************************************!*\
  !*** ./components/admin-components/CreateNewSemester/CreateNewSemester.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateNewSemester_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateNewSemester.css */ "./components/admin-components/CreateNewSemester/CreateNewSemester.css");
/* harmony import */ var _CreateNewSemester_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CreateNewSemester_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\CreateNewSemester\\CreateNewSemester.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CreateNewSemester = () => {
  var d = new Date();
  var y = d.getFullYear();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById('top').scrollIntoView();
  });

  const handleConfirm = event => {
    event.preventDefault();

    if (window.confirm('Are you sure you would like to create the selected new semester?')) {
      //POST the new semsester to the db
      alert("New Semester Created!");
    }
  };

  return __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Create New Semester"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    alignItems: "center",
    m: "1em",
    p: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "Select the term and year for the new semester."), __jsx("div", {
    className: "dropdown-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mt: "1em",
    id: "term",
    placeholder: "Select term",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "Spring",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, "Spring"), __jsx("option", {
    value: "Summer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "Summer"), __jsx("option", {
    value: "Fall",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, "Fall")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mt: "1em",
    id: "year",
    placeholder: "Select year",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, __jsx("option", {
    value: "year1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, y), __jsx("option", {
    value: "year2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, y + 1))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    variant: "outline",
    onClick: handleConfirm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "Confirm"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateNewSemester);

/***/ }),

/***/ "./components/admin-components/EditCourseAssignments/AssignCourseInput.css":
/*!*********************************************************************************!*\
  !*** ./components/admin-components/EditCourseAssignments/AssignCourseInput.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/EditCourseAssignments/AssignCourseInput.js":
/*!********************************************************************************!*\
  !*** ./components/admin-components/EditCourseAssignments/AssignCourseInput.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AssignCourseInput_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AssignCourseInput.css */ "./components/admin-components/EditCourseAssignments/AssignCourseInput.css");
/* harmony import */ var _AssignCourseInput_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AssignCourseInput_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _Autocomplete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Autocomplete.js */ "./components/admin-components/EditCourseAssignments/Autocomplete.js");
/* harmony import */ var _fake_data_faculty_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../fake-data/faculty.json */ "./fake-data/faculty.json");
var _fake_data_faculty_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/faculty.json */ "./fake-data/faculty.json", 1);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditCourseAssignments\\AssignCourseInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const faculty = _fake_data_faculty_json__WEBPACK_IMPORTED_MODULE_5__.faculty;

const AssignCourseInput = ({
  course
}) => {
  const [section, setSection, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const {
    0: sections,
    1: setSections
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const addSection = event => {
    event.preventDefault();
    setSections([...sections, {
      id: sections.length,
      name: section
    }]);
    reset();
  };

  const removeSection = id => {
    event.preventDefault();
    setSections(sections.filter(sect => sect.id !== id));
  };

  const renderSection = sections.map(sect => {
    console.log(sect.name);
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      alignItems: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "section-field",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      color: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, sect.name)), __jsx("div", {
      className: "instructor-field",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx(_Autocomplete_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      suggestions: faculty,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "trash-field",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      icon: "delete",
      onClick: e => {
        e.preventDefault();

        if (window.confirm('Are you sure you would like to delete section ' + sect.name + '?')) {
          removeSection(sect.id);
        }
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    })));
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "course-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "course-field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    mt: "6px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, course)), __jsx("div", {
    className: "coordinator-field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(_Autocomplete_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    suggestions: faculty,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, renderSection)), __jsx("div", {
    className: "section-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("form", {
    onSubmit: addSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    mt: "1rem",
    placeholder: "enter a new section number",
    variant: "flushed",
    type: "text",
    value: section,
    onChange: setSection,
    w: "13em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    variant: "link",
    isActive: "false",
    mt: "1.8em",
    ml: ".2em",
    variantColor: "green",
    size: "sm",
    icon: "add",
    onClick: addSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    mb: "2rem",
    mt: "2rem",
    borderColor: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AssignCourseInput);

/***/ }),

/***/ "./components/admin-components/EditCourseAssignments/Autocomplete.css":
/*!****************************************************************************!*\
  !*** ./components/admin-components/EditCourseAssignments/Autocomplete.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/EditCourseAssignments/Autocomplete.js":
/*!***************************************************************************!*\
  !*** ./components/admin-components/EditCourseAssignments/Autocomplete.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Autocomplete_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Autocomplete.css */ "./components/admin-components/EditCourseAssignments/Autocomplete.css");
/* harmony import */ var _Autocomplete_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Autocomplete_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditCourseAssignments\\Autocomplete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //autocomplete functionality from https://www.digitalocean.com/community/tutorials/react-react-autocomplete

class Autocomplete extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", e => {
      const {
        suggestions
      } = this.props;
      const userInput = e.currentTarget.value; // Filter our suggestions that don't contain the user's input

      const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1); // Update the user input and filtered suggestions, reset the active
      // suggestion and make sure the suggestions are shown

      this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: e.currentTarget.value
      });
    });

    _defineProperty(this, "onClick", e => {
      // Update the user input and reset the rest of the state
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: e.currentTarget.innerText
      });
    });

    _defineProperty(this, "onKeyDown", e => {
      const {
        activeSuggestion,
        filteredSuggestions
      } = this.state; // User pressed the enter key, update the input and close the
      // suggestions

      if (e.keyCode === 13) {
        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: filteredSuggestions[activeSuggestion]
        });
      } // User pressed the up arrow, decrement the index
      else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }

          this.setState({
            activeSuggestion: activeSuggestion - 1
          });
        } // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
              return;
            }

            this.setState({
              activeSuggestion: activeSuggestion + 1
            });
          }
    });

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  } // Event fired when the input value is changed


  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;
    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = __jsx("ul", {
          class: "suggestions",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 11
          }
        }, filteredSuggestions.map((suggestion, index) => {
          let className; // Flag the active suggestion with a class

          if (index === activeSuggestion) {
            className = "suggestion-active";
          }

          return __jsx("li", {
            className: className,
            key: suggestion,
            onClick: onClick,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }
          }, suggestion);
        }));
      }
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 7
      }
    }, __jsx("input", {
      className: "faculty-input",
      type: "text",
      onChange: onChange,
      onKeyDown: onKeyDown,
      value: userInput,
      placeholder: "Unassigned",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }
    }), suggestionsListComponent);
  }

}

_defineProperty(Autocomplete, "propTypes", {
  suggestions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array)
});

_defineProperty(Autocomplete, "defaultProps", {
  suggestions: []
});

/* harmony default export */ __webpack_exports__["default"] = (Autocomplete);

/***/ }),

/***/ "./components/admin-components/EditCourseAssignments/EditCourseAssignments.css":
/*!*************************************************************************************!*\
  !*** ./components/admin-components/EditCourseAssignments/EditCourseAssignments.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/EditCourseAssignments/EditCourseAssignments.js":
/*!************************************************************************************!*\
  !*** ./components/admin-components/EditCourseAssignments/EditCourseAssignments.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditCourseAssignments_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditCourseAssignments.css */ "./components/admin-components/EditCourseAssignments/EditCourseAssignments.css");
/* harmony import */ var _EditCourseAssignments_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_EditCourseAssignments_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AssignCourseInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssignCourseInput */ "./components/admin-components/EditCourseAssignments/AssignCourseInput.js");
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ "./fake-data/course.json", 1);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditCourseAssignments\\EditCourseAssignments.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const EditCourseAssignments = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  });

  const handleSave = event => {
    event.preventDefault(); //POST the course assignments to the db

    alert("Course Assignments Saved");
  };

  const courses = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__.courses;
  const renderCourses = courses.map((course, idx) => {
    return __jsx(_AssignCourseInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      course: course.code,
      key: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }
    });
  });
  return __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Edit Assigned Courses"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    alignItems: "center",
    m: "1em",
    p: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "course-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "course",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Course")), __jsx("div", {
    className: "coordinator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Coordinator")), __jsx("div", {
    className: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Section")), __jsx("div", {
    className: "instructor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Instructor")), __jsx("div", {
    className: "trash",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    mb: "2rem",
    borderColor: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), renderCourses, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    variant: "outline",
    onClick: handleSave,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Save")));
};

/* harmony default export */ __webpack_exports__["default"] = (EditCourseAssignments);

/***/ }),

/***/ "./components/admin-components/EditCourseList/AddCourse.js":
/*!*****************************************************************!*\
  !*** ./components/admin-components/EditCourseList/AddCourse.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditCourseList\\AddCourse.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AddCourse = ({
  addNewCourse
}) => {
  const years = [2020, 2021, 2022];
  const semesters = ["Spring", "Summer", "Fall", "Winter"];
  const departments = ["CSCE", "EENG", "IT"];
  const [lastName, setLastName] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const [firstName, setFirstName] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const [userid, setID] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const {
    0: yearValue,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(years[0]);
  const {
    0: semester,
    1: setSemester
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(semesters[0]);
  const [courseNumber, setCourseNumber] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const [displayName, setDisplayName] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const {
    0: department,
    1: setDepartment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(departments[0]);
  const [isEdditing, toggleEdditing] = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["default"])();

  const addCourse = () => {
    addNewCourse({
      id: userid,
      firstName: firstName,
      lastName: lastName,
      year: yearValue,
      semester: semester,
      courseNumber: courseNumber,
      displayName: displayName,
      department: department
    });
    toggleEdditing();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isEdditing ? __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    direction: "column",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Last Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    w: "50%",
    value: lastName,
    onChange: setLastName,
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "First Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    w: "50%",
    value: firstName,
    onChange: setFirstName,
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "ID"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    w: "50%",
    value: userid,
    onChange: setID,
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Year"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: event => {
      setYear(event.target.value);
    },
    value: yearValue,
    w: "50%",
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("option", {
    mr: "1em",
    value: years[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "2020"), __jsx("option", {
    mr: "1em",
    value: years[1],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "2021"), __jsx("option", {
    mr: "1em",
    value: years[2],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "2022")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "Semester"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: event => {
      setSemester(event.target.value);
    },
    value: semester,
    w: "50%",
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("option", {
    mr: "1em",
    value: semesters[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, "Spring"), __jsx("option", {
    mr: "1em",
    value: semesters[1],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Summer"), __jsx("option", {
    mr: "1em",
    value: semesters[2],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Fall"), __jsx("option", {
    mr: "1em",
    value: semesters[3],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Winter")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "Course Number"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    w: "50%",
    value: courseNumber,
    onChange: setCourseNumber,
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Display Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    w: "50%",
    value: displayName,
    onChange: setDisplayName,
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "Department"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: event => {
      setDepartment(event.target.value);
    },
    value: department,
    w: "50%",
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("option", {
    mr: "1em",
    value: departments[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "CSCE"), __jsx("option", {
    mr: "1em",
    value: departments[1],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "EENG"), __jsx("option", {
    mr: "1em",
    value: departments[2],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, "IT")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    v: true,
    ariantColor: "green",
    mt: "1em",
    onClick: addCourse,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Add New Course")) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    mt: "2em",
    onClick: toggleEdditing,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, "Add Course"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddCourse);

/***/ }),

/***/ "./components/admin-components/EditCourseList/EditCourseList.css":
/*!***********************************************************************!*\
  !*** ./components/admin-components/EditCourseList/EditCourseList.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/EditCourseList/EditCourseList.js":
/*!**********************************************************************!*\
  !*** ./components/admin-components/EditCourseList/EditCourseList.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _EditCourseList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditCourseList.css */ "./components/admin-components/EditCourseList/EditCourseList.css");
/* harmony import */ var _EditCourseList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EditCourseList_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ "./fake-data/course.json", 1);
/* harmony import */ var _FacultyMember__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FacultyMember */ "./components/admin-components/FacultyMember.js");
/* harmony import */ var _Courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Courses */ "./components/admin-components/Courses.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _AddCourse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddCourse */ "./components/admin-components/EditCourseList/AddCourse.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditCourseList\\EditCourseList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const EditCourseList = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  }); // State of the courses and function to set the new state.

  const {
    0: theCourse,
    1: setNewCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    courses: []
  });
  const {
    0: newCourse,
    1: addNewCourse
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstName: "",
    userid: "",
    lastName: "",
    year: 0,
    semester: "",
    courseNumber: "",
    displayName: "",
    department: ""
  }); // State of the department choices and function to set the new state.

  const {
    0: theDepartment,
    1: setNewDepartment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    value: "CSCE"
  }); // Grabs the courses by department from the back-end.

  const getNewCourses = async () => {
    const newCourseList = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_7__["getCoursesByDepartment"])(theDepartment.value);
    setNewCourses(_objectSpread(_objectSpread({}, theCourse), {}, {
      courses: newCourseList
    }));
    console.log(theCourse.courses);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to submit these changes?")) {
      //POST the course list change to the db here
      alert("Course List Updated!");
    }
  }; // Sets the department state to the value of the department selected.


  const dropDownHandler = event => {
    event.preventDefault();
    setNewDepartment({
      value: event.target.value
    });
  }; // const courseList = fakeData.courses;
  // var cseCourses = [];
  // for (var i = 0; i < courseList.length; i++) {
  //   var obj = {};
  //   obj["name"] = courseList[i].code + " " + courseList[i].name;
  //   obj["id"] = i;
  //   cseCourses.push(obj);
  // }
  // const [course, setCourse, reset] = useInputState("");
  // const [courses, setCourses] = useState(cseCourses);
  // const addCourse = (event) => {
  //   event.preventDefault();
  //   setCourses([
  //     ...courses,
  //     {
  //       id: courses.length,
  //       name: course,
  //     },
  //   ]);
  //   reset();
  // };
  // const removeCourse = (id) => {
  //   event.preventDefault();
  //   setCourses(courses.filter((cours) => cours.id !== id));
  // };


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getNewCourses();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (newCourse.lastName !== "") {
      Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_7__["addCourse"])(newCourse.userid, newCourse.firstName, newCourse.lastName, newCourse.year, newCourse.semester, newCourse.courseNumber, newCourse.displayName, newCourse.department);
      alert("New Course Added");
      getNewCourses();
    }
  }, [newCourse]);
  console.log(newCourse);
  const renderCourse = theCourse.courses.map((cours, idx) => {
    return (// <Box display="flex" alignItems="center">
      //     <div className="courses-list">
      //         <ListItem className="course-list-card">{cours.name}</ListItem>
      //         <IconButton ml="1em" icon="delete" onClick={(e)=>{
      //                 e.preventDefault();
      //                 if (window.confirm('Are you sure you would like to delete '+cours.name+'?')){
      //                     removeCourse(cours.id)
      //                 }
      //         }}></IconButton>
      //     </div>
      // </Box>
      __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 7
        }
      }, __jsx(_Courses__WEBPACK_IMPORTED_MODULE_6__["default"], {
        member: cours.department + " " + cours.courseNumber + "\n" + cours.displayName,
        color: idx % 2 == 0 ? "gray.300" : "gray.100",
        key: idx,
        year: cours.year,
        semester: cours.semester,
        courseNumber: cours.courseNumber,
        department: cours.department,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }
      }))
    );
  });
  return __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, "Edit Course List"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    alignItems: "center",
    m: "1em",
    p: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "course-list-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    mt: "1em",
    mb: "1em",
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "Select Department"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mb: "2em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mr: "1em",
    width: "80%",
    onChange: dropDownHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "CSCE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, "Computer Science"), __jsx("option", {
    value: "EENG",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, "Engineering"), __jsx("option", {
    value: "IT",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, "Information Technology")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    variant: "outline",
    onClick: getNewCourses,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, "Submit")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    mt: "1em",
    mb: "1em",
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, "Courses"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    w: "70%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, renderCourse)), __jsx(_AddCourse__WEBPACK_IMPORTED_MODULE_8__["default"], {
    addNewCourse: addNewCourse,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EditCourseList);

/***/ }),

/***/ "./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.css":
/*!*******************************************************************************!*\
  !*** ./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.js":
/*!******************************************************************************!*\
  !*** ./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditCourseOutcomes_EditOutcomeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EditCourseOutcomes/EditOutcomeList */ "./components/admin-components/EditCourseOutcomes/EditOutcomeList.js");
/* harmony import */ var _EditCourseOutcomes_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditCourseOutcomes.css */ "./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.css");
/* harmony import */ var _EditCourseOutcomes_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EditCourseOutcomes_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ "./fake-data/course.json", 1);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditCourseOutcomes\\EditCourseOutcomes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const courses = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__.courses;
console.log(courses);

const EditCourseOutcomes = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  });
  const {
    0: option,
    1: setOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleSetOption = e => {
    setOption(e.target.value);
  };

  console.log(option);
  const renderOptions = courses.map((course, idx) => {
    return __jsx("option", {
      value: course.code,
      key: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, course.code, " ", course.name);
  });
  const selectedCourse = courses.filter(course => course.code == option)[0];
  console.log(selectedCourse);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "dropdown-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "30px",
    rounded: "lg",
    textAlign: "center",
    bg: "#38A169",
    color: "white",
    fontSize: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Course"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mt: "1em",
    id: "course",
    placeholder: "Select course",
    onChange: handleSetOption,
    value: option,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, renderOptions)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, option ? __jsx(_EditCourseOutcomes_EditOutcomeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prop: selectedCourse,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 61
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditCourseOutcomes);

/***/ }),

/***/ "./components/admin-components/EditCourseOutcomes/EditOutcomeList.js":
/*!***************************************************************************!*\
  !*** ./components/admin-components/EditCourseOutcomes/EditOutcomeList.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _EditCourseOutcomes_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditCourseOutcomes.css */ "./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.css");
/* harmony import */ var _EditCourseOutcomes_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EditCourseOutcomes_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fake_data_outcomes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/outcomes.json */ "./fake-data/outcomes.json");
var _fake_data_outcomes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/outcomes.json */ "./fake-data/outcomes.json", 1);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditCourseOutcomes\\EditOutcomeList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const EditOutcomeList = ({
  prop
}) => {
  console.log(prop);
  var shortName = prop.code;
  var className = prop.name;

  const handleSubmit = event => {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to submit these changes?")) {
      //POST the program list change to the db here
      alert("Course outcomes for '" + shortName + " " + className + "' updated!");
    }
  };

  const outcomeList = _fake_data_outcomes_json__WEBPACK_IMPORTED_MODULE_4__.outcomes;
  var courseOutcomes = [];

  for (var i = 0; i < outcomeList.length; i++) {
    if (shortName == outcomeList[i].code) {
      for (var j = 0; j < outcomeList[i].courseOutcomes.length; j++) {
        var obj = {};
        obj["name"] = outcomeList[i].courseOutcomes[j];
        obj["id"] = j;
        courseOutcomes.push(obj);
      }
    }
  }

  const [outcome, setOutcome, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__["default"])("");
  const {
    0: outcomes,
    1: setOutcomes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(courseOutcomes);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setOutcomes(courseOutcomes);
  }, [prop]);

  const addOutcome = event => {
    event.preventDefault();
    setOutcomes([...outcomes, {
      id: outcomes.length,
      name: outcome
    }]);
    reset();
  };

  const removeOutcome = id => {
    event.preventDefault();
    setOutcomes(outcomes.filter(outc => outc.id !== id));
  };

  const renderOutcome = outcomes.map((outc, idx) => {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      alignItems: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "outcomes-list",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      className: "outcome-list-card",
      key: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, outc.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      ml: "1em",
      icon: "delete",
      onClick: e => {
        e.preventDefault();

        if (window.confirm("Are you sure you would like to delete outcome " + outc.id + 1 + "?")) {
          removeOutcome(outc.id);
        }
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    })));
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "Edit Course Outcome List for ", shortName, " "), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    alignItems: "center",
    m: "1em",
    p: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "outcome-list-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, renderOutcome)), __jsx("div", {
    className: "outcome-list-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: addOutcome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    mt: "1rem",
    placeholder: "enter a new course outcome",
    variant: "flushed",
    type: "text",
    value: outcome,
    onChange: setOutcome,
    w: "30em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    variant: "link",
    isActive: "false",
    mt: "1.5em",
    ml: "1em",
    variantColor: "green",
    size: "sm",
    icon: "add",
    onClick: addOutcome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    variant: "outline",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (EditOutcomeList);

/***/ }),

/***/ "./components/admin-components/EditFacultyList/AddFacultyMember.js":
/*!*************************************************************************!*\
  !*** ./components/admin-components/EditFacultyList/AddFacultyMember.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditFacultyList\\AddFacultyMember.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AddFacultyMember = ({
  setNewFaculty
}) => {
  const facultyTypes = ["fullTime", "adjuncts", "fellows"];
  const [lastName, setLastName] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const [firstName, setFirstName] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const [ID, setID] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [isEdditing, toggleEdditing] = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["default"])();

  const addFaculty = () => {
    setNewFaculty({
      lastName: lastName,
      firstName: firstName,
      untID: ID,
      type: type
    });
    toggleEdditing();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isEdditing ? __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    direction: "column",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Faculty Type"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: e => {
      //console.log(e.target.value);
      setType(e.target.value); //alert(type);
    },
    value: type,
    w: "50%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("option", {
    mr: "1em",
    value: facultyTypes[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, "Intructor/Coordinator"), __jsx("option", {
    mr: "1em",
    value: facultyTypes[1],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, "Adjunct"), __jsx("option", {
    mr: "1em",
    value: facultyTypes[2],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, "Teaching Fellow")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Last Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    w: "50%",
    value: lastName,
    onChange: setLastName,
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "First Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    w: "50%",
    value: firstName,
    onChange: setFirstName,
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "ID"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    w: "50%",
    value: ID,
    onChange: setID,
    variant: "filled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    v: true,
    ariantColor: "green",
    mt: "1em",
    onClick: addFaculty,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "Add New Faculty")) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    onClick: toggleEdditing,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Add Faculty Member"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddFacultyMember);

/***/ }),

/***/ "./components/admin-components/EditFacultyList/EditFacultyList.css":
/*!*************************************************************************!*\
  !*** ./components/admin-components/EditFacultyList/EditFacultyList.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/EditFacultyList/EditFacultyList.js":
/*!************************************************************************!*\
  !*** ./components/admin-components/EditFacultyList/EditFacultyList.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _EditFacultyList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditFacultyList.css */ "./components/admin-components/EditFacultyList/EditFacultyList.css");
/* harmony import */ var _EditFacultyList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EditFacultyList_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin-components/FacultyMember */ "./components/admin-components/FacultyMember.js");
/* harmony import */ var _utils_sortByLastName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/sortByLastName */ "./utils/sortByLastName.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _AddFacultyMember__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddFacultyMember */ "./components/admin-components/EditFacultyList/AddFacultyMember.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditFacultyList\\EditFacultyList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const EditFacultyList = () => {
  const {
    0: faculty,
    1: setFaculty
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    fullTime: [],
    adjuncts: [],
    fellows: []
  });
  const {
    0: newFaculty,
    1: setNewFaculty
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    lastName: "",
    firstName: "",
    untID: "",
    type: ""
  });

  const getFaculty = async () => {
    const facultyList = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_6__["getFacultyList"])();
    console.log(facultyList);
    setFaculty(_objectSpread(_objectSpread({}, faculty), {}, {
      fullTime: facultyList.fullTime,
      adjuncts: facultyList.adjuncts,
      fellows: facultyList.fellows
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getFaculty();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (newFaculty.lastName !== "") {
      Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_6__["addFacultyMember"])(newFaculty.lastName, newFaculty.firstName, newFaculty.untID, newFaculty.type);
      alert("New Faculty Added");
      getFaculty();
    }
  }, [newFaculty]);

  const handleSubmit = event => {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to submit these changes?")) {
      //POST the faculty list change to the db here
      alert("Faculty List Updated!");
    }
  }; // const facultyList = fakeData.faculty;
  // const adjunctList = fakeData.adjunctFaculty;
  // const fellowsList = fakeData.teachingFellows;
  // sortByLastName(facultyList);
  // sortByLastName(adjunctList);
  // sortByLastName(fellowsList);
  // var cseFaculty = [];
  // for (var i = 0; i< facultyList.length; i++) {
  //     var obj = {};
  //     obj['name'] = facultyList[i];
  //     obj['id'] = i;
  //     cseFaculty.push(obj);
  // }
  // var adjunct = [];
  // for (var i = 0; i< adjunctList.length; i++) {
  //     var obj = {};
  //     obj['name'] = facultyList[i];
  //     obj['id'] = i;
  //     adjunct.push(obj);
  // }
  // var fellows = [];
  // for (var i = 0; i< fellowsList.length; i++) {
  //     var obj = {};
  //     obj['name'] = facultyList[i];
  //     obj['id'] = i;
  //     fellows.push(obj);
  // }
  // const [faculty, setFaculty, reset] = useInputState("");
  // const [facultyMembers, setFacultyMembers] = useState(cseFaculty);
  // const [adjunctMembers, setAdjunctMembers] = useState(adjunct);
  // const [fellowMembers, setFellowMembers] = useState(fellows);
  // const addFaculty = event => {
  //     event.preventDefault();
  //     setFacultyMembers([
  //         ...facultyMembers,
  //         {
  //             id: facultyMembers.length,
  //             name: faculty,
  //         }
  //     ]);
  //     reset();
  // }
  // const removeFaculty = (id) => {
  //     event.preventDefault();
  //     setFacultyMembers(facultyMembers.filter(fac => fac.id !== id));
  // }

  /*
  const editFaculty = (first, last, facID, type) => {
    setFaculty(
      {...faculty, faculty[type]: map((fm) =>
        ({fm.id === facID ? { ...fm, lastName: last, firstName: first }}))}
      );
  };
  */


  const renderFaculty = faculty.fullTime.map((fac, idx) => {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 7
      }
    }, __jsx(_admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
      member: fac.firstName + " " + fac.lastName,
      id: fac.id //edit={editFaculty}
      ,
      color: idx % 2 == 0 ? "gray.300" : "gray.100",
      key: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }
    }));
  });
  const renderAdjunct = faculty.adjuncts.map((fac, idx) => {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 7
      }
    }, __jsx(_admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
      member: fac.firstName + " " + fac.lastName,
      id: fac.id,
      edit: editFaculty,
      color: idx % 2 == 0 ? "gray.300" : "gray.100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }
    }));
  });
  const renderFellows = faculty.fellows.map((fac, idx) => {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 7
      }
    }, __jsx(_admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
      member: fac.firstName + " " + fac.lastName,
      id: fac.id,
      edit: editFaculty,
      color: idx % 2 == 0 ? "gray.300" : "gray.100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }));
  });
  return __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, "Edit Faculty List"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    alignItems: "center",
    m: "1em",
    p: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "faculty-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    mt: "1em",
    mb: "1em",
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, "Instructors/Coordinators"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    w: "70%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, renderFaculty), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    mt: "1em",
    mb: "1em",
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, "Adjunct Faculty"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    w: "70%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, renderAdjunct), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    mt: "1em",
    mb: "1em",
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, "Teaching Fellows"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    w: "70%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, renderFellows)), __jsx(_AddFacultyMember__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setNewFaculty: setNewFaculty,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EditFacultyList);

/***/ }),

/***/ "./components/admin-components/EditFacultyList/EditFacultyMember.js":
/*!**************************************************************************!*\
  !*** ./components/admin-components/EditFacultyList/EditFacultyMember.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditFacultyList\\EditFacultyMember.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const EditFacultyMember = ({
  edit,
  id
}) => {
  const [newName, setNewName] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__["default"])("");

  const editName = () => {
    edit(newName, id);
  };

  return __jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      edit();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: newName,
    onChange: setNewName,
    placeholder: "name",
    onSubmit: e => {
      e.preventDefault();
      editName(newName, id);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditFacultyMember);

/***/ }),

/***/ "./components/admin-components/EditProgramList/EditProgramList.css":
/*!*************************************************************************!*\
  !*** ./components/admin-components/EditProgramList/EditProgramList.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/EditProgramList/EditProgramList.js":
/*!************************************************************************!*\
  !*** ./components/admin-components/EditProgramList/EditProgramList.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _EditProgramList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditProgramList.css */ "./components/admin-components/EditProgramList/EditProgramList.css");
/* harmony import */ var _EditProgramList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EditProgramList_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/programs.json */ "./fake-data/programs.json");
var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/programs.json */ "./fake-data/programs.json", 1);
/* harmony import */ var _admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin-components/FacultyMember */ "./components/admin-components/FacultyMember.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\EditProgramList\\EditProgramList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const EditProgramList = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  });

  const handleSubmit = event => {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to submit these changes?")) {
      //POST the program list change to the db here
      alert("Program List Updated!");
    }
  };

  const programList = _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4__.programs;
  var csePrograms = [];

  for (var i = 0; i < programList.length; i++) {
    var obj = {};
    obj["name"] = programList[i];
    obj["id"] = i;
    csePrograms.push(obj);
  }

  const [program, setProgram, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__["default"])("");
  const {
    0: programs,
    1: setPrograms
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(csePrograms);

  const addProgram = event => {
    event.preventDefault();
    setPrograms([...programs, {
      id: programs.length,
      name: program
    }]);
    reset();
  };

  const removeProgram = id => {
    event.preventDefault();
    setPrograms(programs.filter(prog => prog.id !== id));
  };

  const renderProgram = programs.map((prog, idx) => {
    return (// <Box display="flex" alignItems="center">
      //     <div className="program">
      //         <ListItem className="program-card">{prog.name}</ListItem>
      //         <IconButton ml="1em" icon="delete" onClick={(e)=>{
      //                 e.preventDefault();
      //                 if (window.confirm('Are you sure you would like to delete '+prog.name+'?')){
      //                     removeProgram(prog.id)
      //                 }
      //         }}></IconButton>
      //     </div>
      // </Box>
      __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 7
        }
      }, __jsx(_admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_5__["default"], {
        member: prog.name,
        id: prog.id,
        color: idx % 2 == 0 ? "gray.300" : "gray.100",
        key: idx,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }))
    );
  });
  return __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, "Edit Program List"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    alignItems: "center",
    m: "1em",
    p: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "program-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    mt: "1em",
    mb: "1em",
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "Programs"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    w: "70%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, renderProgram)), __jsx("div", {
    className: "program-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: addProgram,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    mt: "1rem",
    placeholder: "enter a new program",
    variant: "flushed",
    type: "text",
    value: program,
    onChange: setProgram,
    w: "14em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    variant: "link",
    isActive: "false",
    mt: "1.5em",
    ml: "1em",
    variantColor: "green",
    size: "sm",
    icon: "add",
    onClick: addProgram,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    variant: "outline",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (EditProgramList);

/***/ }),

/***/ "./components/admin-components/FacultyMember.js":
/*!******************************************************!*\
  !*** ./components/admin-components/FacultyMember.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _admin_components_EditFacultyList_EditFacultyMember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-components/EditFacultyList/EditFacultyMember */ "./components/admin-components/EditFacultyList/EditFacultyMember.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\FacultyMember.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const FacultyMember = ({
  member,
  id,
  color,
  edit
}) => {
  const [isEditing, toggle] = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    templateColumns: "repeat(2, 1fr)",
    bg: color,
    padding: ".5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, isEditing ? __jsx(_admin_components_EditFacultyList_EditFacultyMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
    edit: edit,
    id: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 26
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
    rowSpan: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, member)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "ghost",
    onClick: () => {
      toggle();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Edit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FacultyMember);

/***/ }),

/***/ "./components/admin-components/FullReport/FullReport.css":
/*!***************************************************************!*\
  !*** ./components/admin-components/FullReport/FullReport.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/FullReport/FullReport.js":
/*!**************************************************************!*\
  !*** ./components/admin-components/FullReport/FullReport.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FullReport_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullReport.css */ "./components/admin-components/FullReport/FullReport.css");
/* harmony import */ var _FullReport_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FullReport_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ "./fake-data/course.json", 1);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\FullReport\\FullReport.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const FullReport = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  });
  const courseList = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_3__.courses;
  const renderCourses = courseList.map((courses, idx) => {
    return __jsx("option", {
      value: courses.code,
      key: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, courses.code, " ", courses.name);
  });
  return __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    alignItems: "center",
    m: "1em",
    p: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Select the course, term, and year for the report you would like to generate."), __jsx("div", {
    className: "dropdown-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mt: "1em",
    id: "course",
    placeholder: "Select course",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, renderCourses), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mt: "1em",
    id: "term",
    placeholder: "Select term",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "Spring",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "Spring"), __jsx("option", {
    value: "Summer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Summer"), __jsx("option", {
    value: "Fall",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "Fall")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mt: "1em",
    id: "year",
    placeholder: "Select year",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("option", {
    value: "option1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "2020"), __jsx("option", {
    value: "option2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "2019"), __jsx("option", {
    value: "option3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "2018"), __jsx("option", {
    value: "option3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "2017"), __jsx("option", {
    value: "option3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "2016"), __jsx("option", {
    value: "option3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "2015"), __jsx("option", {
    value: "option3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "2014"), __jsx("option", {
    value: "option3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "2013"), __jsx("option", {
    value: "option3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "2012"), __jsx("option", {
    value: "option3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "2011"), __jsx("option", {
    value: "option3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "2010"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    variant: "outline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Search"))));
};

/* harmony default export */ __webpack_exports__["default"] = (FullReport);

/***/ }),

/***/ "./components/admin-components/GenerateSimpleReport/CourseList.js":
/*!************************************************************************!*\
  !*** ./components/admin-components/GenerateSimpleReport/CourseList.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _instructor_components_CourseCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../instructor-components/CourseCard */ "./components/instructor-components/CourseCard.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\GenerateSimpleReport\\CourseList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CourseList = ({
  courses,
  idx
}) => {
  console.log(courses);
  const renderCourses = courses != null ? courses.map(course => {
    const handleClick = async (course, section) => {
      document.cookie = `course=${course}; path=/`;
      document.cookie = `section=${section}; path=/`;
    };

    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, __jsx(_instructor_components_CourseCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      code: course.courseNumber,
      section: course.sectionNumber,
      instructor: course.instructor,
      coordinator: course.coordinator,
      name: course.displayName,
      key: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      size: "sm",
      variantColor: "green",
      mt: "1em",
      w: "20%",
      size: "sm",
      onClick: e => {
        e.preventDefault();
        handleClick(course.courseNumber, course.sectionNumber);
        window.open("http://localhost:3000/sectionReport"); //window.location.href = 'http://localhost:3000/formCompletion';
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, "View ABET Report"));
  }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "courses not found");
  return __jsx("div", {
    className: "forms-grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 10
    }
  }, renderCourses);
};

/* harmony default export */ __webpack_exports__["default"] = (CourseList);

/***/ }),

/***/ "./components/admin-components/GenerateSimpleReport/GenerateSimpleReport.js":
/*!**********************************************************************************!*\
  !*** ./components/admin-components/GenerateSimpleReport/GenerateSimpleReport.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _CourseList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CourseList */ "./components/admin-components/GenerateSimpleReport/CourseList.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\GenerateSimpleReport\\GenerateSimpleReport.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const GenerateSimpleReport = ({
  user
}) => {
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    semester: '',
    year: null
  });
  const {
    0: courses,
    1: setCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const terms = [{
    semester: 'Spring',
    year: 2020
  }, {
    semester: 'Summer',
    year: 2020
  }, {
    semester: 'Fall',
    year: 2020
  }];

  const handleSetTerm = async e => {
    setTerm({
      semester: e.target.value.split(' ')[0],
      year: e.target.value.split(' ')[1]
    });
    console.log(e.target.value.split(' ')[1]);
    console.log(term.year);
    const coursesRes = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_2__["getAllCourses"])(user, "fall", 2020);
    console.log(coursesRes);
    setCourses(coursesRes);
  };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    alignItems: "center",
    m: "1em",
    p: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    fontSize: "lg",
    mb: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Find ABET Report"), term.year == null ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    placeholder: "Choose Semester",
    w: "70%",
    m: "0 auto",
    onChange: handleSetTerm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("option", {
    value: terms[0].semester + " " + terms[0].year.toString(10),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, terms[0].semester, " ", terms[0].year), __jsx("option", {
    value: terms[1].semester + " " + terms[1].year.toString(10),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, terms[1].semester, " ", terms[1].year), __jsx("option", {
    value: terms[2].semester + " " + terms[2].year.toString(10),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, terms[2].semester, " ", terms[2].year)) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, term.semester, " ", term.year), __jsx(_CourseList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    courses: courses,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GenerateSimpleReport);

/***/ }),

/***/ "./components/admin-components/GenerateStudentSurveys/GenerateStudentSurveys.js":
/*!**************************************************************************************!*\
  !*** ./components/admin-components/GenerateStudentSurveys/GenerateStudentSurveys.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _chakra_ui_styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/styled-system */ "@chakra-ui/styled-system");
/* harmony import */ var _chakra_ui_styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_styled_system__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\GenerateStudentSurveys\\GenerateStudentSurveys.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const GenerateStudentSurveys = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  });

  const dropDownHandler = event => {
    event.preventDefault(); //value: event.target.value,
  };

  const {
    0: courseList,
    1: setCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    courses: []
  });
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("1");

  const getNewCourses = async () => {
    const newCourseList = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_2__["getCoursesByDepartment"])("CSCE");
    setCourses(_objectSpread(_objectSpread({}, courseList), {}, {
      courses: newCourseList
    }));
    console.log(courseList.courses);
  };

  const surveyCourses = [].concat(courseList.courses).sort((a, b) => a.courseNumber > b.courseNumber ? 1 : -1).map((course, idx) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, course.department, " ", course.courseNumber, ".", course.sectionNumber, " ", course.displayName, " "), __jsx("a", {
      href: "https://www.unt.edu/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, "Student Survey Link"));
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getNewCourses();
  }, []);
  return __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    alignItems: "center",
    m: "1em",
    p: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    fontSize: "lg",
    mb: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Generate Student Surveys"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["RadioGroup"], {
    defaultValue: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    spacing: 5,
    direction: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    colorScheme: "geen",
    value: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "Courses"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
    colorScheme: "green",
    value: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "Instructor"))), surveyCourses))));
};

/* harmony default export */ __webpack_exports__["default"] = (GenerateStudentSurveys);

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/CourseOutcomeList.js":
/*!*************************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/CourseOutcomeList.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OutcomeMapping_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OutcomeMapping.css */ "./components/admin-components/OutcomeMapping/OutcomeMapping.css");
/* harmony import */ var _OutcomeMapping_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_OutcomeMapping_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\OutcomeMapping\\CourseOutcomeList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const CourseOutcomeList = ({
  course,
  numOfCheckmarks,
  department
}) => {
  console.log(course);
  console.log(numOfCheckmarks);
  console.log(department);
  const course_Outcomes = course.courseOutcomes;
  console.log(course_Outcomes);
  let count = 0;
  const renderCourseOutcomes = course_Outcomes.map(outcomes => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
      columns: 2,
      spacing: 5,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      bg: "white",
      height: "80px",
      lineHeight: "80px",
      textAlign: "left",
      borderTopWidth: "0px",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      borderBottomWidth: "2px",
      overflowWrap: "break-word",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "14px",
      textAlign: "left",
      verticalAlign: "middle",
      lineHeight: "normal",
      display: "inline-block",
      marginLeft: "3em",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, outcomes.order, ". ", outcomes.outcome)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      bg: "transparent",
      height: "80px",
      lineHeight: "80px",
      borderTopWidth: "0px",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      borderBottomWidth: "2px",
      overflowWrap: "break-word",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, numOfCheckmarks == "6" && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["HStack"], {
      spacing: 5,
      direction: "row",
      alignContent: "center",
      verticalAlign: "middle",
      lineHeight: "normal",
      display: "inline-block",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], _extends({
      colorScheme: "green",
      value: department
    }, course, outcomes.order, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }), "1"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      colorScheme: "green",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, "2"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      colorScheme: "green",
      value: "Option 3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, "3"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      colorScheme: "green",
      value: "Option 4",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, "4"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      colorScheme: "green",
      value: "Option 5",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, "5"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      colorScheme: "green",
      value: "Option 6",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, "6")), numOfCheckmarks == "7" && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["HStack"], {
      spacing: 5,
      direction: "row",
      alignContent: "center",
      verticalAlign: "middle",
      lineHeight: "normal",
      display: "inline-block",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      colorScheme: "red",
      value: "Option 1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, "1"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: "Option 2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, "2"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: "Option 3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, "3"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: "Option 4",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, "4"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: "Option 5",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, "5"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: "Option 6",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, "6"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: "Option 7",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, "7")))));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderCourseOutcomes);
};

/* harmony default export */ __webpack_exports__["default"] = (CourseOutcomeList);

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/OutcomeMapping.css":
/*!***********************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/OutcomeMapping.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-components/OutcomeMapping/OutcomeMapping.js":
/*!**********************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/OutcomeMapping.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StudentOutcomeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentOutcomeList */ "./components/admin-components/OutcomeMapping/StudentOutcomeList.js");
/* harmony import */ var _OutcomeMapping_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OutcomeMapping.css */ "./components/admin-components/OutcomeMapping/OutcomeMapping.css");
/* harmony import */ var _OutcomeMapping_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OutcomeMapping_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/programs.json */ "./fake-data/programs.json");
var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/programs.json */ "./fake-data/programs.json", 1);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\OutcomeMapping\\OutcomeMapping.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const programs = _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4__.programs;

const OutcomeMapping = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  });
  const {
    0: option,
    1: setOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleSetOption = e => {
    setOption(e.target.value);
  };

  const renderOptions = programs.map((program, idx) => {
    return __jsx("option", {
      value: program,
      key: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, program);
  });
  const selectedProgram = programs.filter(program => program == option)[0];
  console.log(selectedProgram);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "dropdown-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "30px",
    rounded: "lg",
    textAlign: "center",
    bg: "#38A169",
    color: "white",
    fontSize: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Program"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    mt: "1em",
    id: "course",
    placeholder: "Select program",
    onChange: handleSetOption,
    value: option,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, renderOptions)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, option ? __jsx(_StudentOutcomeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prop: selectedProgram,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 69
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (OutcomeMapping);

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/StudentOutcomeList.js":
/*!**************************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/StudentOutcomeList.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CourseOutcomeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CourseOutcomeList */ "./components/admin-components/OutcomeMapping/CourseOutcomeList.js");
/* harmony import */ var _OutcomeMapping_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OutcomeMapping.css */ "./components/admin-components/OutcomeMapping/OutcomeMapping.css");
/* harmony import */ var _OutcomeMapping_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_OutcomeMapping_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fake_data_backendStudentOutcome_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../fake-data/backendStudentOutcome.json */ "./fake-data/backendStudentOutcome.json");
var _fake_data_backendStudentOutcome_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/backendStudentOutcome.json */ "./fake-data/backendStudentOutcome.json", 1);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\admin-components\\OutcomeMapping\\StudentOutcomeList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* Start of program */

const StudentOutcomeList = ({
  prop
}) => {
  console.log(prop);
  const program = _fake_data_backendStudentOutcome_json__WEBPACK_IMPORTED_MODULE_5__.program;
  const abet_student_outcomes = _fake_data_backendStudentOutcome_json__WEBPACK_IMPORTED_MODULE_5__.studentOutcomes;
  const backend = _fake_data_backendStudentOutcome_json__WEBPACK_IMPORTED_MODULE_5__.courseObjectives;
  console.log(program);
  /* fill from db when integrated*/

  const handleSubmit = event => {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to submit these changes?")) {
      //POST the program list change to the db here
      alert("Outcome Mapping for '" + prop + "' updated!");
    }
  };

  const renderABETOutcomes = abet_student_outcomes.map(abetOutcomes => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      height: "100px",
      overflow: "hidden",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "16px",
      justifyContent: "flex-start",
      textAlign: "left",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "#38A169",
      fontWeight: "bolder",
      justifyContent: "flex-start",
      textAlign: "left",
      display: "inline",
      marginRight: "0.5em",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, abetOutcomes.order), abetOutcomes.outcome)));
  });
  const renderCourseOutcomes = backend.map((course, idx) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
      columns: 2,
      spacing: 0,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      bg: "#d7ece1",
      height: "120px",
      lineHeight: "120px",
      textAlign: "center",
      borderTopWidth: "0px",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      borderBottomWidth: "2px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "#38A169",
      fontWeight: "bolder",
      fontSize: "20px",
      textAlign: "center",
      lineHeight: "normal",
      display: "inline-block",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, course.courseName)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      bg: "#d7ece1",
      height: "120px",
      lineHeight: "120px",
      borderTopWidth: "0px",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      borderBottomWidth: "2px",
      overflowWrap: "break-word",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["HStack"], {
      spacing: 5,
      direction: "row",
      alignContent: "center",
      verticalAlign: "middle",
      lineHeight: "normal",
      display: "inline-block",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }))), prop == "Computer Engineering" && __jsx(_CourseOutcomeList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      course: course,
      numOfCheckmarks: 7,
      department: prop,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }), prop != "Computer Engineering" && __jsx(_CourseOutcomeList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      course: course,
      numOfCheckmarks: 6,
      department: prop,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, prop == "Computer Science" && __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    m: "2em",
    p: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "Student Outcomes for", " ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    display: "inline",
    fontWeight: "bolder",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, prop)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 10,
    marginTop: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, renderABETOutcomes)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    m: "2em",
    p: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "Select the student outcome(s) for", " ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    display: "inline",
    fontWeight: "bolder",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, prop)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 10,
    marginTop: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "transparent",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    borderTopWidth: "0px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "1px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38a169b0",
    fontWeight: "bolder",
    fontSize: "25px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "normal",
    display: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, "Course Outcomes")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "transparent",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    borderTopWidth: "0px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "1px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38a169b0",
    fontWeight: "bolder",
    fontSize: "25px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "normal",
    display: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, "Student Outcomes"))), renderCourseOutcomes)), prop == "Computer Engineering" && __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    m: "2em",
    p: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }, "Student Outcomes for", " ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    display: "inline",
    fontWeight: "bolder",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }, prop)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 10,
    marginTop: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, "1."), "Identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 19
    }
  }, "2."), "Apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factors")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 19
    }
  }, "3."), "Communicate effectively with a range of audiences")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 19
    }
  }, "4."), "Recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 19
    }
  }, "5."), "Function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 19
    }
  }, "6."), "Develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 19
    }
  }, "7."), "Acquire and apply new knowledge as needed, using appropriate learning strategies.")))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    m: "2em",
    p: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, "Select the student outcome(s) for", " ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    display: "inline",
    fontWeight: "bolder",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 15
    }
  }, prop)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 10,
    marginTop: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "transparent",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    borderTopWidth: "0px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "1px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38a169b0",
    fontWeight: "bolder",
    fontSize: "25px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "normal",
    display: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 17
    }
  }, "Course Outcome")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "transparent",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    borderTopWidth: "0px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "1px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38a169b0",
    fontWeight: "bolder",
    fontSize: "25px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "normal",
    display: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 17
    }
  }, "Student Outcomes"))), renderCourseOutcomes)), prop == "Information Technology" && __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    m: "2em",
    p: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 13
    }
  }, "Student Outcomes for", " ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    display: "inline",
    fontWeight: "bolder",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 15
    }
  }, prop)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 10,
    marginTop: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 19
    }
  }, "1."), "Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 19
    }
  }, "2."), "Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program\u2019s discipline.")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 19
    }
  }, "3."), "Communicate effectively in a variety of professional contexts.")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 19
    }
  }, "4."), "Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 19
    }
  }, "5."), "Function effectively as a member or leader of a team engaged in activities appropriate to the program\u2019s discipline.")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100px",
    overflow: "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "16px",
    justifyContent: "flex-start",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    fontWeight: "bolder",
    justifyContent: "flex-start",
    textAlign: "left",
    display: "inline",
    marginRight: "0.5em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 19
    }
  }, "6."), "Identify and analyze user needs and to take them into account in the selection, creation, integration, evaluation, and administration of computing-based systems.")))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    m: "2em",
    p: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 13
    }
  }, "Select the student outcome(s) for", " ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    display: "inline",
    fontWeight: "bolder",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 15
    }
  }, prop)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 10,
    marginTop: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "transparent",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    borderTopWidth: "0px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "1px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38a169b0",
    fontWeight: "bolder",
    fontSize: "25px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "normal",
    display: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 17
    }
  }, "Courses")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "transparent",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    borderTopWidth: "0px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "1px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38a169b0",
    fontWeight: "bolder",
    fontSize: "25px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "normal",
    display: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 17
    }
  }, "Student Outcomes"))), renderCourseOutcomes)), prop == "Cybersecurity" && __jsx("div", {
    id: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderWidth: "2px",
    rounded: "lg",
    m: "2em",
    p: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 13
    }
  }, "Select the student outcome(s) for", " ", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38A169",
    display: "inline",
    fontWeight: "bolder",
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 15
    }
  }, prop)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    columns: 2,
    spacing: 10,
    marginTop: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "transparent",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    borderTopWidth: "0px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "1px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38a169b0",
    fontWeight: "bolder",
    fontSize: "25px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "normal",
    display: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 17
    }
  }, "Courses")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "transparent",
    height: "80px",
    lineHeight: "80px",
    textAlign: "center",
    borderTopWidth: "0px",
    borderLeftWidth: "0px",
    borderRightWidth: "0px",
    borderBottomWidth: "1px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#38a169b0",
    fontWeight: "bolder",
    fontSize: "25px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "normal",
    display: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 17
    }
  }, "Student Outcomes"))), renderCourseOutcomes)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    variant: "outline",
    marginTop: "1em",
    marginBottom: "2em",
    alignItems: "center",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 7
    }
  }, "Submit"));
};

/* harmony default export */ __webpack_exports__["default"] = (StudentOutcomeList);

/***/ }),

/***/ "./components/instructor-components/CourseCard.css":
/*!*********************************************************!*\
  !*** ./components/instructor-components/CourseCard.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/instructor-components/CourseCard.js":
/*!********************************************************!*\
  !*** ./components/instructor-components/CourseCard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CourseCard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseCard.css */ "./components/instructor-components/CourseCard.css");
/* harmony import */ var _CourseCard_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CourseCard_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\instructor-components\\CourseCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CourseCard = ({
  code,
  section,
  name,
  coordinator,
  instructor,
  formCompleted
}) => {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    textTransform: "uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, code, ".", section), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Instructor: ", instructor.firstName, " ", instructor.lastName), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Coordinator: ", coordinator.firstName, " ", coordinator.lastName));
};

/* harmony default export */ __webpack_exports__["default"] = (CourseCard);

/***/ }),

/***/ "./fake-data/backendStudentOutcome.json":
/*!**********************************************!*\
  !*** ./fake-data/backendStudentOutcome.json ***!
  \**********************************************/
/*! exports provided: program, courseObjectives, studentOutcomes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"program\":\"Computer Science\",\"courseObjectives\":[{\"courseName\":\"Computer Science I\",\"courseOutcomes\":[{\"order\":1,\"outcome\":\"Describe how a computer's CPU, Main Memory, Secondary Storage and I/O work together to execute a computer program.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0,0]},{\"order\":2,\"outcome\":\"Make use of a computer system's hardware, editor(s), operating system, system software and network to build computer software and submit that software for grading.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0,0]},{\"order\":3,\"outcome\":\"Describe algorithms to perform simple tasks such as numeric computation, searching and sorting, choosing among several options, string manipulation, and use of pseudo-random numbers in simulation of such tasks as rolling dice.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0,0]},{\"order\":4,\"outcome\":\"Write readable, efficient and correct C/C++ programs that include programming structures such as assignment statements, selection statements, loops, arrays, pointers, console and file I/O, structures, command line arguments, both standard library and user-defined functions, and multiple header (.h) and code (.c) files.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0,0]},{\"order\":5,\"outcome\":\"Use commonly accepted practices and tools to find and fix runtime and logical errors in software.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0,0]},{\"order\":6,\"outcome\":\"Describe a software process model that can be used to develop significant applications composed of hundreds of functions.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0,0]}]},{\"courseName\":\"Principles of Systems Programming\",\"courseOutcomes\":[{\"order\":1,\"outcome\":\"Write robust, efficient, readable and correct system software using the C programming language.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0]},{\"order\":2,\"outcome\":\"Demonstrate an understanding of processes and threads by developing applications using multiple processes and multi-threaded activities in a Linux environment.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0]},{\"order\":3,\"outcome\":\"Demonstrate an understanding of deadlocks and synchronization through the development of application(s) that utilize a variety of mutual exclusion mechanisms.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0]},{\"order\":4,\"outcome\":\"Develop shell scripts and utilities that demonstrate an understanding of memory, file and process management and interaction, including concepts such as virtual memory and disk scheduling.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0]},{\"order\":5,\"outcome\":\"Create a Linux-based application that utilizes inter-process communication mechanisms such as pipes and sockets to communicate information between independently running processes on one or multiple platforms.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0]},{\"order\":6,\"outcome\":\"Demonstrate an understanding of the use and interaction among compilers, macro processors, assemblers, linkers and loaders through their use in creating the applications described in previous outcomes.\",\"mappedStudentOutcomes\":[0,0,0,0,0,0]}]}],\"studentOutcomes\":[{\"order\":1,\"outcome\":\"Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.\"},{\"order\":2,\"outcome\":\"Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline.\"},{\"order\":3,\"outcome\":\"Communicate effectively in a variety of professional contexts.\"},{\"order\":4,\"outcome\":\"Recognize professional responsibilities and make informed judgements in computing practice based on legal and ethical principles.\"},{\"order\":5,\"outcome\":\"Function effectively as a member or leader of a team engaged in activities appropriate to the program’s discipline.\"},{\"order\":6,\"outcome\":\"Apply computer science theory and software development fundamentals to produce computing-based solutions.\"}]}");

/***/ }),

/***/ "./fake-data/course.json":
/*!*******************************!*\
  !*** ./fake-data/course.json ***!
  \*******************************/
/*! exports provided: courses, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"courses\":[{\"code\":\"CSCE 1030\",\"section\":\".001\",\"name\":\"Computer Science I\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"mmt1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course Outcome 1\",\"I want to see how long this can go. So students are going to not be set up well in our CSCE courses. They will have to do everything on their own and fend for themselves.\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":false},{\"code\":\"CSCE 1040\",\"section\":\".007\",\"name\":\"Computer Science II\",\"department\":[\"Computer Science\",\"Information Technology\"],\"instructor\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course Outcome 1\",\"Course Outcome 2\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":false},{\"code\":\"CSCE 2100\",\"section\":\".002\",\"name\":\"Computing Foundations I\",\"department\":[\"Computer Engineering\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2110\",\"section\":\".002\",\"name\":\"Computing Foundations II\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Ludi, Stephanie\",\"id\":\"ssl1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Gather and refine user functional requirements and other functional and non-functional requirements and constraints for a large-scale software system and create a software requirements specification document.\",\"Perform software analysis and design tasks using recognized software methods to create a preliminary design specification for software based on a requirements specification.\",\"Utilize project management principles, skills and tools in creating the requirements and preliminary design specifications.\",\"Create a project managementplan, including a schedule and budget for a large-scale software project.\",\"Utilize configuration management, project management and design tools in the course of the project.\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":true},{\"code\":\"CSCE 2410\",\"section\":\".009\",\"name\":\"Programming Laboratory\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\",\"Course outcome 2\",\"Course outcome 3\",\"Course outcome 4\",\"Course outcome 5\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2610\",\"section\":\".001\",\"name\":\"Assembly Language and Computer Organization\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Garlic, Ryan\",\"id\":\"rrg1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Describe Internet structure and basic protocols, with an emphasis on the client-server paradigm.\",\"Create a sample web page incorporating proper techniques for web-based design.\",\"Incorporate client-side programming techniques for a web application.\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2900\",\"section\":\".004\",\"name\":\"Special Problems in Computer Science & Engineering\",\"department\":[\"Computer Science\",\"Computer Engineering\"],\"instructor\":{\"name\":\"Bhowmick, Sanjukta\",\"id\":\"bbs1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Be able to analyze the time and space complexity of a nontrivial algorithm, using mathematical, tools, and prove/justify the correctness.\",\"Understand the Divide and Conquer, Greedy, and Dynamic Programming strategies for algorithmic design.\",\"Be familiar with the algorithms for Matrix Multiplication (Strassen's), Activity Selection, Knapsack, Shortest Paths (single source, and all pairs), Minimum Spanning Tree , Matrix Chain, and Longest Common Subsequence problems.\",\"Be exposed to approximation algorithms for solving NP-hard problems\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":true},{\"code\":\"CSCE 2996\",\"section\":\".005\",\"name\":\"Honors College Mentored Research Experience\",\"department\":[\"Computer Science\",\"Computer Engineering\"],\"instructor\":\"Beep, Boop\",\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\",\"Course outcome 2\",\"Course outcome 3\",\"Course outcome 4\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":true},{\"code\":\"CSCE 3010\",\"section\":\".002\",\"name\":\"Signals and Systems\",\"department\":[\"Computer Science\",\"Computer Engineering\",\"Information Technology\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\",\"Course outcome 2\",\"Course outcome 3\",\"Course outcome 4\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 3020\",\"section\":\".006\",\"name\":\"Communications Systems\",\"department\":[\"Computer Science\",\"Computer Engineering\",\"Information Technology\"],\"instructor\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false}]}");

/***/ }),

/***/ "./fake-data/faculty.json":
/*!********************************!*\
  !*** ./fake-data/faculty.json ***!
  \********************************/
/*! exports provided: faculty, adjunctFaculty, teachingFellows, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"faculty\":[\"Robert Akl\",\"Mark Albert\",\"Rajeev Azad\",\"Sanjukta Bhowmick\",\"Eduardo Blanco\",\"Serdar Bozdag\",\"Barrett Bryant\",\"Renee Bryce\",\"Bill Buckles\",\"Ram Dantu\",\"Hyunsook Do\",\"Jonathon Doran\",\"Song Fu\",\"Ryan Garlick\",\"Nagendra Gulur\",\"Xuan Guo\",\"Yanyan He\",\"Yan Huang\",\"Wei Jin\",\"Krishna Kavi\",\"David Keathly\",\"Stephanie Ludi\",\"Saraju Mohanty\",\"Kirill Morozov\",\"Rodney Nielsen\",\"JungHwan Oh\",\"Ian Parberry\",\"Robin Pottathuparambil\",\"Farhad Shahrokhi\",\"Pradhumna Shrestha\",\"Paul Tarau\",\"Mark Thompson\",\"Cihan Tunc\",\"Ting Xiao\",\"Bugao Xu\",\"Qing Yang\",\"Xuaohui Yuan\",\"Hui Zhao\",\"Ravi Vadapalli\",\"Ruth West\",\"Marty O'Neill\"],\"adjunctFaculty\":[\"Steve Zissou\",\"Max Fischer\",\"Suzy Bishop\"],\"teachingFellows\":[\"Margot Tenenbaum\",\"Klaus Daimler\",\"Eli Cash\"]}");

/***/ }),

/***/ "./fake-data/outcomes.json":
/*!*********************************!*\
  !*** ./fake-data/outcomes.json ***!
  \*********************************/
/*! exports provided: outcomes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"outcomes\":[{\"code\":\"CSCE 1030\",\"section\":\".001\",\"name\":\"Computer Science I\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"mmt1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"...\",\"I want to see how long this can go. So students are going to not be set up well in our CSCE courses. They will have to do everything on their own and fend for themselves.\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":false},{\"code\":\"CSCE 1040\",\"section\":\".007\",\"name\":\"Computer Science II\",\"department\":[\"Computer Science\",\"Information Technology\"],\"instructor\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"Learn to hack donuts\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":false},{\"code\":\"CSCE 2100\",\"section\":\".002\",\"name\":\"Computing Foundations I\",\"department\":[\"Computer Engineering\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"Math\",\"Graphs\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2110\",\"section\":\".002\",\"name\":\"Computing Foundations II\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Ludi, Stephanie\",\"id\":\"ssl1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"Gather and refine user functional requirements and other functional and non-functional requirements and constraints for a large-scale software system and create a software requirements specification document.\",\"Perform software analysis and design tasks using recognized software methods to create a preliminary design specification for software based on a requirements specification.\",\"Utilize project management principles, skills and tools in creating the requirements and preliminary design specifications.\",\"Create a project managementplan, including a schedule and budget for a large-scale software project.\",\"Utilize configuration management, project management and design tools in the course of the project.\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":true},{\"code\":\"CSCE 2410\",\"section\":\".009\",\"name\":\"Programming Laboratory\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"More computer stuff\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2610\",\"section\":\".001\",\"name\":\"Assembly Language and Computer Organization\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Garlic, Ryan\",\"id\":\"rrg1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"Describe Internet structure and basic protocols, with an emphasis on the client-server paradigm.\",\"Create a sample web page incorporating proper techniques for web-based design.\",\"Incorporate client-side programming techniques for a web application.\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2900\",\"section\":\".004\",\"name\":\"Special Problems in Computer Science & Engineering\",\"department\":[\"Computer Science\",\"Computer Engineering\"],\"instructor\":{\"name\":\"Bhowmick, Sanjukta\",\"id\":\"bbs1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"Be able to analyze the time and space complexity of a nontrivial algorithm, using mathematical, tools, and prove/justify the correctness.\",\"Understand the Divide and Conquer, Greedy, and Dynamic Programming strategies for algorithmic design.\",\"Be familiar with the algorithms for Matrix Multiplication (Strassen's), Activity Selection, Knapsack, Shortest Paths (single source, and all pairs), Minimum Spanning Tree , Matrix Chain, and Longest Common Subsequence problems.\",\"Be exposed to approximation algorithms for solving NP-hard problems\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":true},{\"code\":\"CSCE 2996\",\"section\":\".005\",\"name\":\"Honors College Mentored Research Experience\",\"department\":[\"Computer Science\",\"Computer Engineering\"],\"instructor\":\"Beep, Boop\",\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"Beep Boop Bop?\",\"Nah man you're thinking about the one that goes, boop beep bop\",\"Bop boop beep?\",\"BEEP.. BOOP BOOP BOP\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":true},{\"code\":\"CSCE 3010\",\"section\":\".002\",\"name\":\"Signals and Systems\",\"department\":[\"Computer Science\",\"Computer Engineering\",\"Information Technology\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"terminal\",\"Program something\",\"Keep on programming\",\"Program\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 3020\",\"section\":\".006\",\"name\":\"Commpunications Systems\",\"department\":[\"Computer Science\",\"Computer Engineering\",\"Information Technology\"],\"instructor\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"courseOutcomes\":[\"Linked List\",\"Binary tree\",\"Arrays\",\"Vectors\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false}]}");

/***/ }),

/***/ "./fake-data/programs.json":
/*!*********************************!*\
  !*** ./fake-data/programs.json ***!
  \*********************************/
/*! exports provided: programs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"programs\":[\"Computer Science\",\"Computer Engineering\",\"Information Technology\",\"Cybersecurity\"]}");

/***/ }),

/***/ "./hooks/useInputState.js":
/*!********************************!*\
  !*** ./hooks/useInputState.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (initialVal => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialVal);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
}); //example:
//
// const [age, handleAgeChange, resetAge] = useFormState("");

/***/ }),

/***/ "./hooks/useToggle.js":
/*!****************************!*\
  !*** ./hooks/useToggle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useToggle(initialVal = false) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialVal);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
}

/* harmony default export */ __webpack_exports__["default"] = (useToggle);

/***/ }),

/***/ "./pages/adminHome.js":
/*!****************************!*\
  !*** ./pages/adminHome.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_admin_components_AdminNavigation_AdminNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/admin-components/AdminNavigation/AdminNavigation */ "./components/admin-components/AdminNavigation/AdminNavigation.js");
/* harmony import */ var _components_admin_components_AdminMenu_AdminMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/admin-components/AdminMenu/AdminMenu */ "./components/admin-components/AdminMenu/AdminMenu.js");
/* harmony import */ var _styles_adminHome_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/adminHome.css */ "./styles/adminHome.css");
/* harmony import */ var _styles_adminHome_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_adminHome_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_admin_components_FullReport_FullReport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/admin-components/FullReport/FullReport */ "./components/admin-components/FullReport/FullReport.js");
/* harmony import */ var _components_admin_components_CreateNewSemester_CreateNewSemester__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/admin-components/CreateNewSemester/CreateNewSemester */ "./components/admin-components/CreateNewSemester/CreateNewSemester.js");
/* harmony import */ var _components_admin_components_EditProgramList_EditProgramList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/admin-components/EditProgramList/EditProgramList */ "./components/admin-components/EditProgramList/EditProgramList.js");
/* harmony import */ var _components_admin_components_EditCourseAssignments_EditCourseAssignments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/admin-components/EditCourseAssignments/EditCourseAssignments */ "./components/admin-components/EditCourseAssignments/EditCourseAssignments.js");
/* harmony import */ var _components_admin_components_EditFacultyList_EditFacultyList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/admin-components/EditFacultyList/EditFacultyList */ "./components/admin-components/EditFacultyList/EditFacultyList.js");
/* harmony import */ var _components_admin_components_EditCourseList_EditCourseList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/admin-components/EditCourseList/EditCourseList */ "./components/admin-components/EditCourseList/EditCourseList.js");
/* harmony import */ var _components_admin_components_EditCourseOutcomes_EditCourseOutcomes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/admin-components/EditCourseOutcomes/EditCourseOutcomes */ "./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.js");
/* harmony import */ var _components_admin_components_OutcomeMapping_OutcomeMapping__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/admin-components/OutcomeMapping/OutcomeMapping */ "./components/admin-components/OutcomeMapping/OutcomeMapping.js");
/* harmony import */ var _components_admin_components_GenerateSimpleReport_GenerateSimpleReport__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/admin-components/GenerateSimpleReport/GenerateSimpleReport */ "./components/admin-components/GenerateSimpleReport/GenerateSimpleReport.js");
/* harmony import */ var _components_admin_components_GenerateStudentSurveys_GenerateStudentSurveys__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/admin-components/GenerateStudentSurveys/GenerateStudentSurveys */ "./components/admin-components/GenerateStudentSurveys/GenerateStudentSurveys.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\pages\\adminHome.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const adminHome = () => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("MT2020");
  const {
    0: view,
    1: setView
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("GFR");
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "UNT ABET: Admin Page")), __jsx(_components_admin_components_AdminNavigation_AdminNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_components_admin_components_AdminMenu_AdminMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setView: setView,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "admin-pages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, (() => {
    switch (view) {
      case "GFR":
        return __jsx(_components_admin_components_FullReport_FullReport__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 24
          }
        });

      case "GSR":
        return __jsx(_components_admin_components_GenerateSimpleReport_GenerateSimpleReport__WEBPACK_IMPORTED_MODULE_13__["default"], {
          user: user,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 24
          }
        });

      case "GSS":
        return __jsx(_components_admin_components_GenerateStudentSurveys_GenerateStudentSurveys__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 24
          }
        });

      case "OM":
        return __jsx(_components_admin_components_OutcomeMapping_OutcomeMapping__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 24
          }
        });

      case "CNS":
        return __jsx(_components_admin_components_CreateNewSemester_CreateNewSemester__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 24
          }
        });

      case "EAC":
        return __jsx(_components_admin_components_EditCourseAssignments_EditCourseAssignments__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 24
          }
        });

      case "EFL":
        return __jsx(_components_admin_components_EditFacultyList_EditFacultyList__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 24
          }
        });

      case "EPL":
        return __jsx(_components_admin_components_EditProgramList_EditProgramList__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 24
          }
        });

      case "ECL":
        return __jsx(_components_admin_components_EditCourseList_EditCourseList__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 24
          }
        });

      case "ECO":
        return __jsx(_components_admin_components_EditCourseOutcomes_EditCourseOutcomes__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 24
          }
        });
    }
  })())));
};

/* harmony default export */ __webpack_exports__["default"] = (adminHome);

/***/ }),

/***/ "./styles/adminHome.css":
/*!******************************!*\
  !*** ./styles/adminHome.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/sortByLastName.js":
/*!*********************************!*\
  !*** ./utils/sortByLastName.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortByLastName; });
function sortByLastName(names) {
  names.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
}

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/styled-system":
/*!*******************************************!*\
  !*** external "@chakra-ui/styled-system" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/styled-system");

/***/ }),

/***/ "cookie-cutter":
/*!********************************!*\
  !*** external "cookie-cutter" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-cutter");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recoil");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL0FQSUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvYXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9BZG1pbk1lbnUvQWRtaW5NZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9BZG1pbk5hdmlnYXRpb24vQWRtaW5OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9Db3Vyc2VzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9DcmVhdGVOZXdTZW1lc3Rlci9DcmVhdGVOZXdTZW1lc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdENvdXJzZUFzc2lnbm1lbnRzL0Fzc2lnbkNvdXJzZUlucHV0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0Q291cnNlQXNzaWdubWVudHMvQXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0Q291cnNlQXNzaWdubWVudHMvRWRpdENvdXJzZUFzc2lnbm1lbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0Q291cnNlTGlzdC9BZGRDb3Vyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRDb3Vyc2VMaXN0L0VkaXRDb3Vyc2VMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0Q291cnNlT3V0Y29tZXMvRWRpdENvdXJzZU91dGNvbWVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0Q291cnNlT3V0Y29tZXMvRWRpdE91dGNvbWVMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0RmFjdWx0eUxpc3QvQWRkRmFjdWx0eU1lbWJlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdEZhY3VsdHlMaXN0L0VkaXRGYWN1bHR5TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdEZhY3VsdHlMaXN0L0VkaXRGYWN1bHR5TWVtYmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0UHJvZ3JhbUxpc3QvRWRpdFByb2dyYW1MaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9GYWN1bHR5TWVtYmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9GdWxsUmVwb3J0L0Z1bGxSZXBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0dlbmVyYXRlU2ltcGxlUmVwb3J0L0NvdXJzZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0dlbmVyYXRlU2ltcGxlUmVwb3J0L0dlbmVyYXRlU2ltcGxlUmVwb3J0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9HZW5lcmF0ZVN0dWRlbnRTdXJ2ZXlzL0dlbmVyYXRlU3R1ZGVudFN1cnZleXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL091dGNvbWVNYXBwaW5nL0NvdXJzZU91dGNvbWVMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9PdXRjb21lTWFwcGluZy9PdXRjb21lTWFwcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvT3V0Y29tZU1hcHBpbmcvU3R1ZGVudE91dGNvbWVMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci1jb21wb25lbnRzL0NvdXJzZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW5Ib21lLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3NvcnRCeUxhc3ROYW1lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3N0eWxlZC1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtY3V0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjb2lsXCIiXSwibmFtZXMiOlsiZ2V0Q291cnNlcyIsImNvdXJzZXMiLCJnZXRJbnN0cnVjdG9yQ291cnNlcyIsImlkIiwidGVybSIsImFwaV9oZWxwZXIiLCJBUEkiLCJyZXNwb25zZSIsInNlbWVzdGVyIiwieWVhciIsInRoZW4iLCJyZXN1bHQiLCJpbnN0cnVjdG9yQ291cnNlcyIsImZpbHRlcmVkQ291cnNlcyIsImZpbHRlciIsImNvdXJzZSIsImluc3RydWN0b3IiLCJnZXRDb29yZGluYXRvckNvdXJzZXMiLCJjb29yZGluYXRvckNvdXJzZXMiLCJjb29yZGluYXRvciIsImdldEZvcm1EYXRhIiwiZGVwYXJ0bWVudCIsInNlY3Rpb24iLCJnZXRGb3JtQnlTZWN0aW9uIiwiZm9ybURhdGEiLCJwb3N0Q29vcmRpbmF0b3JDb21tZW50IiwidXNlcmlkIiwiY291cnNlTnVtYmVyIiwiY29vcmRpbmF0b3JDb21tZW50IiwiaXNDb3Vyc2VDb21wbGV0ZWQiLCJwb3N0Q29tbWVudCIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwicG9zdEluc3RydWN0b3JGb3JtIiwic2VjdGlvbk51bWJlciIsImlzU2VjdGlvbkNvbXBsZXRlZCIsIm91dGNvbWVzIiwiSVRHcmFkZXMiLCJDU0dyYWRlcyIsIkNFR3JhZGVzIiwicG9zdEZvcm0iLCJsb2dpbiIsInBhc3N3b3JkIiwiZ2V0QWxsQ291cnNlcyIsInBhcnNlSW50IiwiZ2V0RmFjdWx0eUxpc3QiLCJmYWN1bHR5IiwiZ2V0Q291cnNlc0J5RGVwYXJ0bWVudCIsImFkZEZhY3VsdHlNZW1iZXIiLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsInR5cGUiLCJhZGRDb3Vyc2UiLCJkaXNwbGF5TmFtZSIsInJlbW92ZUNvdXJzZSIsImdldENvdXJzZU91dGNvbWVzYnlDb3Vyc2UiLCJnZXRDb3Vyc2VPdXRjb21lc0J5Q291cnNlIiwiY291cnNlb3V0Y29tZXMiLCJyb290IiwiT0siLCJVTkFVVEhPUklaRUQiLCJOT1RfTE9HR0VEX0lOX01TRyIsIlNFUlZFUl9FUlJPUl9NU0ciLCJCQURfUkVRVUVTVF9NU0ciLCJ0b2tlbiIsInNldFRva2VuIiwidCIsInNlbmRQb3N0Iiwicm91dGUiLCJib2R5IiwidXJsIiwic3RhdHVzQ29kZSIsImNvb2tpZUN1dHRlciIsImdldCIsImZldGNoIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwicmVmZXJyZXJQb2xpY3kiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiRXJyb3JPYmoiLCJqc29uIiwiaGFzT3duUHJvcGVydHkiLCJjYXRjaCIsImV4cGlyZXMiLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwic2V0IiwibG9nb3V0IiwiVXNlcmlkIiwiU2VtZXN0ZXIiLCJZZWFyIiwiZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyIiwiU2VjdGlvbiIsIkluc3RydWN0b3IiLCJJZCIsIkRlcGFydG1lbnQiLCJDb3Vyc2VOdW1iZXIiLCJTZWN0aW9uTnVtYmVyIiwiZ2V0Rm9ybXNCeUNvdXJzZSIsIkNvdXJzZSIsIkNvb3JkaW5hdG9yIiwiZ2V0QWxsRm9ybXMiLCJ1c2VySWQiLCJmb3JtIiwiZ2V0QmxhbmtGb3JtIiwiZ2V0RGVmYXVsdFllYXJBbmRTZW1lc3RlciIsInRleHQiLCJSZXN1bHRPYmoiLCJwYXJzZSIsImRhdGUiLCJkYXkiLCJnZXREYXkiLCJtb250aCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJhZGRTZWN0aW9uIiwibnVtYmVyT2ZTdHVkZW50cyIsImZhY3VsdHlUeXBlIiwiaW5mbyIsInBvc3RDb3Vyc2VPdXRjb21lcyIsImNvdXJzZU91dGNvbWVzTGlzdCIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsImlzTG9nZ2VkSW4iLCJBZG1pbk1lbnUiLCJzZXRWaWV3IiwiYmciLCJjb2xvciIsIkFkbWluTmF2aWdhdGlvbiIsImxpbmsiLCJ1c2VyIiwiQ291cnNlcyIsIm1lbWJlciIsImFsZXJ0IiwiQ3JlYXRlTmV3U2VtZXN0ZXIiLCJkIiwieSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImhhbmRsZUNvbmZpcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiY29uZmlybSIsImZha2VEYXRhIiwiQXNzaWduQ291cnNlSW5wdXQiLCJzZXRTZWN0aW9uIiwicmVzZXQiLCJ1c2VJbnB1dFN0YXRlIiwic2VjdGlvbnMiLCJzZXRTZWN0aW9ucyIsInVzZVN0YXRlIiwibGVuZ3RoIiwibmFtZSIsInJlbW92ZVNlY3Rpb24iLCJzZWN0IiwicmVuZGVyU2VjdGlvbiIsIm1hcCIsImUiLCJBdXRvY29tcGxldGUiLCJDb21wb25lbnQiLCJwcm9wcyIsInN1Z2dlc3Rpb25zIiwidXNlcklucHV0IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWRTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb24iLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzZXRTdGF0ZSIsImFjdGl2ZVN1Z2dlc3Rpb24iLCJzaG93U3VnZ2VzdGlvbnMiLCJpbm5lclRleHQiLCJzdGF0ZSIsImtleUNvZGUiLCJyZW5kZXIiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJvbktleURvd24iLCJzdWdnZXN0aW9uc0xpc3RDb21wb25lbnQiLCJpbmRleCIsImNsYXNzTmFtZSIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJBcnJheSIsIkVkaXRDb3Vyc2VBc3NpZ25tZW50cyIsImhhbmRsZVNhdmUiLCJyZW5kZXJDb3Vyc2VzIiwiaWR4IiwiY29kZSIsIkFkZENvdXJzZSIsImFkZE5ld0NvdXJzZSIsInllYXJzIiwic2VtZXN0ZXJzIiwiZGVwYXJ0bWVudHMiLCJzZXRMYXN0TmFtZSIsInNldEZpcnN0TmFtZSIsInNldElEIiwieWVhclZhbHVlIiwic2V0WWVhciIsInNldFNlbWVzdGVyIiwic2V0Q291cnNlTnVtYmVyIiwic2V0RGlzcGxheU5hbWUiLCJzZXREZXBhcnRtZW50IiwiaXNFZGRpdGluZyIsInRvZ2dsZUVkZGl0aW5nIiwidXNlVG9nZ2xlIiwidGFyZ2V0IiwiRWRpdENvdXJzZUxpc3QiLCJ0aGVDb3Vyc2UiLCJzZXROZXdDb3Vyc2VzIiwibmV3Q291cnNlIiwidGhlRGVwYXJ0bWVudCIsInNldE5ld0RlcGFydG1lbnQiLCJnZXROZXdDb3Vyc2VzIiwibmV3Q291cnNlTGlzdCIsImhhbmRsZVN1Ym1pdCIsImRyb3BEb3duSGFuZGxlciIsInJlbmRlckNvdXJzZSIsImNvdXJzIiwiRWRpdENvdXJzZU91dGNvbWVzIiwib3B0aW9uIiwic2V0T3B0aW9uIiwiaGFuZGxlU2V0T3B0aW9uIiwicmVuZGVyT3B0aW9ucyIsInNlbGVjdGVkQ291cnNlIiwiRWRpdE91dGNvbWVMaXN0IiwicHJvcCIsInNob3J0TmFtZSIsIm91dGNvbWVMaXN0IiwiY291cnNlT3V0Y29tZXMiLCJpIiwiaiIsIm9iaiIsInB1c2giLCJvdXRjb21lIiwic2V0T3V0Y29tZSIsInNldE91dGNvbWVzIiwiYWRkT3V0Y29tZSIsInJlbW92ZU91dGNvbWUiLCJvdXRjIiwicmVuZGVyT3V0Y29tZSIsIkFkZEZhY3VsdHlNZW1iZXIiLCJzZXROZXdGYWN1bHR5IiwiZmFjdWx0eVR5cGVzIiwiSUQiLCJzZXRUeXBlIiwiYWRkRmFjdWx0eSIsInVudElEIiwiRWRpdEZhY3VsdHlMaXN0Iiwic2V0RmFjdWx0eSIsImZ1bGxUaW1lIiwiYWRqdW5jdHMiLCJmZWxsb3dzIiwibmV3RmFjdWx0eSIsImdldEZhY3VsdHkiLCJmYWN1bHR5TGlzdCIsInJlbmRlckZhY3VsdHkiLCJmYWMiLCJyZW5kZXJBZGp1bmN0IiwiZWRpdEZhY3VsdHkiLCJyZW5kZXJGZWxsb3dzIiwiRWRpdEZhY3VsdHlNZW1iZXIiLCJlZGl0IiwibmV3TmFtZSIsInNldE5ld05hbWUiLCJlZGl0TmFtZSIsIkVkaXRQcm9ncmFtTGlzdCIsInByb2dyYW1MaXN0IiwicHJvZ3JhbXMiLCJjc2VQcm9ncmFtcyIsInByb2dyYW0iLCJzZXRQcm9ncmFtIiwic2V0UHJvZ3JhbXMiLCJhZGRQcm9ncmFtIiwicmVtb3ZlUHJvZ3JhbSIsInByb2ciLCJyZW5kZXJQcm9ncmFtIiwiRmFjdWx0eU1lbWJlciIsImlzRWRpdGluZyIsInRvZ2dsZSIsIkZ1bGxSZXBvcnQiLCJjb3Vyc2VMaXN0IiwiQ291cnNlTGlzdCIsImhhbmRsZUNsaWNrIiwiY29va2llIiwib3BlbiIsIkdlbmVyYXRlU2ltcGxlUmVwb3J0Iiwic2V0VGVybSIsInNldENvdXJzZXMiLCJ0ZXJtcyIsImhhbmRsZVNldFRlcm0iLCJzcGxpdCIsImNvdXJzZXNSZXMiLCJ0b1N0cmluZyIsIkdlbmVyYXRlU3R1ZGVudFN1cnZleXMiLCJzZXRWYWx1ZSIsInN1cnZleUNvdXJzZXMiLCJjb25jYXQiLCJzb3J0IiwiYSIsImIiLCJDb3Vyc2VPdXRjb21lTGlzdCIsIm51bU9mQ2hlY2ttYXJrcyIsImNvdXJzZV9PdXRjb21lcyIsImNvdW50IiwicmVuZGVyQ291cnNlT3V0Y29tZXMiLCJvcmRlciIsImZha2VQcm9ncmFtcyIsIk91dGNvbWVNYXBwaW5nIiwic2VsZWN0ZWRQcm9ncmFtIiwiU3R1ZGVudE91dGNvbWVMaXN0IiwiZGF0YV9mcm9tX2JhY2tlbmQiLCJhYmV0X3N0dWRlbnRfb3V0Y29tZXMiLCJzdHVkZW50T3V0Y29tZXMiLCJiYWNrZW5kIiwiY291cnNlT2JqZWN0aXZlcyIsInJlbmRlckFCRVRPdXRjb21lcyIsImFiZXRPdXRjb21lcyIsImNvdXJzZU5hbWUiLCJDb3Vyc2VDYXJkIiwiZm9ybUNvbXBsZXRlZCIsImluaXRpYWxWYWwiLCJoYW5kbGVDaGFuZ2UiLCJhZG1pbkhvbWUiLCJzZXRVc2VyIiwidmlldyIsInNvcnRCeUxhc3ROYW1lIiwibmFtZXMiLCJsb2NhbGVDb21wYXJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVB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QUMxQ0EsT0FBSyxDQUFDN0IsSUFBTixDQUFXLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVRCxDQUFDLENBQUNSLEtBQUYsQ0FBUSxHQUFSLEVBQWEsQ0FBYixFQUFnQnFDLGFBQWhCLENBQThCNUIsQ0FBQyxDQUFDVCxLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsQ0FBOUIsQ0FBckI7QUFDSCxDOzs7Ozs7Ozs7OztBQ0ZELDRDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL2FkbWluSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWRtaW5Ib21lLmpzXCIpO1xuIiwiaW1wb3J0IGNvdXJzZXMgZnJvbSBcIi4uL2Zha2UtZGF0YS9jb3Vyc2UuanNvblwiO1xyXG5pbXBvcnQgQVBJIGZyb20gXCIuL2FwaVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdXJzZXMoKSB7XHJcbiAgcmV0dXJuIGNvdXJzZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0cnVjdG9yQ291cnNlcyhpZCwgdGVybSkge1xyXG4gIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuZ2V0Q291cnNlcyhpZCwgdGVybS5zZW1lc3RlciwgdGVybS55ZWFyKTtcclxuXHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBpbnN0cnVjdG9yQ291cnNlcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnN0IGZpbHRlcmVkQ291cnNlcyA9IGluc3RydWN0b3JDb3Vyc2VzLmZpbHRlcihcclxuICAgIChjb3Vyc2UpID0+IGNvdXJzZS5pbnN0cnVjdG9yLmlkID09PSBpZFxyXG4gICk7XHJcbiAgcmV0dXJuIGZpbHRlcmVkQ291cnNlcztcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0b3JDb3Vyc2VzKGlkLCB0ZXJtKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRDb3Vyc2VzKGlkLCB0ZXJtLnNlbWVzdGVyLCB0ZXJtLnllYXIpO1xyXG5cclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvb3JkaW5hdG9yQ291cnNlcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnN0IGZpbHRlcmVkQ291cnNlcyA9IGNvb3JkaW5hdG9yQ291cnNlcy5maWx0ZXIoXHJcbiAgICAoY291cnNlKSA9PiBjb3Vyc2UuY29vcmRpbmF0b3IuaWQgPT09IGlkXHJcbiAgKTtcclxuICByZXR1cm4gZmlsdGVyZWRDb3Vyc2VzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9ybURhdGEoaWQsIHllYXIsIHRlcm0sIGRlcGFydG1lbnQsIGNvdXJzZSwgc2VjdGlvbikge1xyXG4gIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuZ2V0Rm9ybUJ5U2VjdGlvbihcclxuICAgIGlkLFxyXG4gICAgeWVhcixcclxuICAgIHRlcm0sXHJcbiAgICBkZXBhcnRtZW50LFxyXG4gICAgY291cnNlLFxyXG4gICAgc2VjdGlvblxyXG4gICk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgcmV0dXJuIGZvcm1EYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdENvb3JkaW5hdG9yQ29tbWVudChcclxuICB1c2VyaWQsXHJcbiAgeWVhcixcclxuICBzZW1lc3RlcixcclxuICBkZXBhcnRtZW50LFxyXG4gIGNvdXJzZU51bWJlcixcclxuICBjb29yZGluYXRvckNvbW1lbnQsXHJcbiAgaXNDb3Vyc2VDb21wbGV0ZWRcclxuKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5wb3N0Q29tbWVudChcclxuICAgIHVzZXJpZCxcclxuICAgIHllYXIsXHJcbiAgICBzZW1lc3RlcixcclxuICAgIGRlcGFydG1lbnQsXHJcbiAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICBjb29yZGluYXRvckNvbW1lbnQsXHJcbiAgICBpc0NvdXJzZUNvbXBsZXRlZFxyXG4gICk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCByZXNwb25zZTtcclxuICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0cnVjdG9yRm9ybShcclxuICB1c2VyaWQsXHJcbiAgeWVhcixcclxuICBzZW1lc3RlcixcclxuICBkZXBhcnRtZW50LFxyXG4gIGNvdXJzZU51bWJlcixcclxuICBzZWN0aW9uTnVtYmVyLFxyXG4gIGlzU2VjdGlvbkNvbXBsZXRlZCxcclxuICBvdXRjb21lcyxcclxuICBJVEdyYWRlcyxcclxuICBDU0dyYWRlcyxcclxuICBDRUdyYWRlc1xyXG4pIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLnBvc3RGb3JtKFxyXG4gICAgdXNlcmlkLFxyXG4gICAgeWVhcixcclxuICAgIHNlbWVzdGVyLFxyXG4gICAgZGVwYXJ0bWVudCxcclxuICAgIGNvdXJzZU51bWJlcixcclxuICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICBpc1NlY3Rpb25Db21wbGV0ZWQsXHJcbiAgICBvdXRjb21lcyxcclxuICAgIElUR3JhZGVzLFxyXG4gICAgQ1NHcmFkZXMsXHJcbiAgICBDRUdyYWRlc1xyXG4gICk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCByZXNwb25zZTtcclxuICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpO1xyXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICByZXR1cm4gcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHBhcnNlSW50KHllYXIpKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbiAgY29uc3QgY291cnNlcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnNvbGUubG9nKGNvdXJzZXMpO1xyXG4gIHJldHVybiBjb3Vyc2VzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmFjdWx0eUxpc3QoKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRGYWN1bHR5TGlzdCgpO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmFjdWx0eSA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIHJldHVybiBmYWN1bHR5O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291cnNlc0J5RGVwYXJ0bWVudChkZXBhcnRtZW50KSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQpO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgcmV0dXJuIGNvdXJzZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRGYWN1bHR5TWVtYmVyKGxhc3ROYW1lLCBmaXJzdE5hbWUsIGlkLCB0eXBlKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5hZGRGYWN1bHR5TWVtYmVyKGZpcnN0TmFtZSwgbGFzdE5hbWUsIGlkLCB0eXBlKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCByZXNwb25zZTtcclxuICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENvdXJzZShcclxuICB1c2VyaWQsXHJcbiAgZmlyc3ROYW1lLFxyXG4gIGxhc3ROYW1lLFxyXG4gIHllYXIgPSAwLFxyXG4gIHNlbWVzdGVyLFxyXG4gIGNvdXJzZU51bWJlcixcclxuICBkaXNwbGF5TmFtZSxcclxuICBkZXBhcnRtZW50XHJcbikge1xyXG4gIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuYWRkQ291cnNlKFxyXG4gICAgdXNlcmlkLFxyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbiAgICAoeWVhciA9IDApLFxyXG4gICAgc2VtZXN0ZXIsXHJcbiAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICBkaXNwbGF5TmFtZSxcclxuICAgIGRlcGFydG1lbnRcclxuICApO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5yZW1vdmVDb3Vyc2UoXHJcbiAgICB5ZWFyLFxyXG4gICAgc2VtZXN0ZXIsXHJcbiAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICBkZXBhcnRtZW50XHJcbiAgKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbiAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gIGNvbnNvbGUubG9nKGNvdXJzZU51bWJlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VPdXRjb21lc2J5Q291cnNlKFxyXG4gIHllYXIgPSAyMDIwLFxyXG4gIHNlbWVzdGVyID0gXCJcIixcclxuICBjb3Vyc2VOdW1iZXIgPSBcIlwiLFxyXG4gIGRlcGFydG1lbnQgPSBcIlwiXHJcbikge1xyXG4gIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZShcclxuICAgIHllYXIsXHJcbiAgICBzZW1lc3RlcixcclxuICAgIGNvdXJzZU51bWJlcixcclxuICAgIGRlcGFydG1lbnRcclxuICApO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuICBjb25zdCBjb3Vyc2VvdXRjb21lcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIHJldHVybiBjb3Vyc2VvdXRjb21lcztcclxufVxyXG4iLCIvLyBIZWxwZXIgQVBJIENsYXNzXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcic7XHJcblxyXG5jb25zdCByb290ID0gXCJodHRwczovL2xvY2FsaG9zdDo0NDM3Mi9hcGlcIjsgLy8gVGhlIGJhc2UgVVJMIGZvciBlYWNoIHJlcXVlc3RcclxuY29uc3QgT0sgPSAyMDA7ICAgICAgICAgICAvLzIwMCBPayBzdGF0dXMgY29kZVxyXG5jb25zdCBVTkFVVEhPUklaRUQgPSA0MDE7IC8vNDAxIFVuYXV0aG9yaXplZCBzdGF0dXMgY29kZVxyXG5jb25zdCBOT1RfTE9HR0VEX0lOX01TRyA9IFwiRXJyb3I6IFlvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi5cIjtcclxuY29uc3QgU0VSVkVSX0VSUk9SX01TRyA9IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yOiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiO1xyXG5jb25zdCBCQURfUkVRVUVTVF9NU0cgPSBcIkVycm9yOiBTb21lIG9mIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXJzIGFyZSBpbnZhbGlkLlwiXHJcbnZhciB0b2tlbiA9IFwiXCI7ICAgICAgICAgICAvL2hvbGRzIHZhbHVlIG9mIHRoZSB0b2tlbiBjb29raWVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFQSSB7XHJcbiAgICAvKiBUaGlzIGZ1bmN0aW9uIGlzIGZvciBnZXRJbml0aWFsUHJvcHMuXHJcbiAgICBjb29raWVDdXR0ZXIgaXMgdW5kZWZpbmVkIGluIGdldEluaXRpYWxQcm9wcyxcclxuICAgIHNvIHRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgdG9rZW4gdG8gdGhlIHZhbHVlIG9mIHRoZSBjb29raWVcclxuICAgIHBhc3NlZCBpbiBmcm9tIGdldEluaXRpYWxQcm9wcy4gKi9cclxuICAgIHNldFRva2VuKHQgPSBcIlwiKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdlbmVyaWMgZnVuY3Rpb24gZm9yIHNlbmRpbmcgUE9TVCByZXF1ZXN0c1xyXG4gICAgLy8gICAgSW5wdXQ6IHJvdXRlIGFuZCBib2R5XHJcbiAgICAvLyAgICBPdXRwdXQ6IFRoZSBKU09OIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB0aGUgcm91dGVcclxuICAgIGFzeW5jIHNlbmRQb3N0KHJvdXRlID0gXCJcIiwgYm9keSA9IHt9KSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcm9vdCArIHJvdXRlOyAvLyBDb21iaW5lIHRoZSByb290IFVSTCB3aXRoIHRoZSBzcGVjaWZpZWQgcm91dGVcclxuICAgICAgICB2YXIgc3RhdHVzQ29kZTsgLy9ob2xkcyB0aGUgc3RhdHVzIGNvZGUgb2YgdGhlIHJlc3BvbnNlXHJcblxyXG4gICAgICAgIC8vaWYgdGhlIHJlcXVlc3QgaXMgbm90IGZyb20gZ2V0SW5pdGlhbFByb3BzLCBtZWFuaW5nIGNvb2tpZUN1dHRlciBpcyBkZWZpbmVkLCByZXRyZWl2ZSB0aGUgY29va2llXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb29raWVDdXR0ZXIuZ2V0ID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0b2tlbiA9IGNvb2tpZUN1dHRlci5nZXQoXCJ0b2tlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6IFwibm8tcmVmZXJyZXJcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09IFVOQVVUSE9SSVpFRClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JqKE5PVF9MT0dHRURfSU5fTVNHLCBmYWxzZSk7IC8vdXNlcidzIHNlc3Npb24gaGFzIGV4cGlyZWRcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT0gT0spXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcIm1lc3NhZ2VcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooanNvbltcIm1lc3NhZ2VcIl0pOyAvL2N1c3RvbSBlcnJvciBtZXNzYWdlIGZyb20gQVBJXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JqKEJBRF9SRVFVRVNUX01TRyk7IC8vYmFkIGlucHV0IHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgcmV0dXJuIG5ldyBFcnJvck9iaihTRVJWRVJfRVJST1JfTVNHKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1sb2dpbih1c2VyaWQsIHBhc3N3b3JkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgUGFzc3dvcmRcclxuICAgIC8vICAgIE91dHB1dDogXCJBZG1pblwiLCBcIkluc3RydWN0b3JcIiwgXCJTdHVkZW50L1RBXCIgb3IgYm9vbGVhbiBmb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgbG9naW4odXNlcmlkID0gXCJcIiwgcGFzc3dvcmQgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2xvZ2luXCIsIGJvZHkpLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJ0b2tlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBleHBpcmVzLnNldEhvdXJzKGV4cGlyZXMuZ2V0SG91cnMoKSArIDI0KTsgLy9leHBpcmVzIGluIDI0IGhvdXJzXHJcbiAgICAgICAgICAgICAgICBleHBpcmVzID0gZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb29raWVDdXR0ZXIuc2V0KFwidG9rZW5cIiwganNvbltcInRva2VuXCJdLCB7IGV4cGlyZXMgfSk7IC8vc2V0IHRva2VuIGNvb2tpZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25bXCJyb2xlXCJdOyAvL3JldHVybiB0aGUgcm9sZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkubG9naW4odXNlcmlkLCBwYXNzd29yZCkudGhlbihyb2xlID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBpcyBhY2Nlc3NpYmxlLCBpdCBpcyBlaXRoZXIgcm9sZSBzdHJpbmcgb3IgYSBib29sZWFuIGluZGljYXRpbmcgZmFpbHVyZSovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWxvZ291dCh1c2VyaWQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogTm9uZVxyXG4gICAgLy8gICAgT3V0cHV0OiBOb25lXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldChcInRva2VuXCIsIFwiXCIsIHsgZXhwaXJlczogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpIH0pO1xyXG4gICAgICAgIGNvb2tpZUN1dHRlci5zZXQoXCJ1c2VyXCIsIFwiXCIsIHsgZXhwaXJlczogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWdldENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhciktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IFNlY3Rpb25zIGZvciB0aGUgY29ycmVzcG9uZGluZyBVc2VySWQsIFNlbWVzdGVyIGFuZCBZZWFyXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VzKHVzZXJpZCA9IFwiXCIsIHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCwgc2VtZXN0ZXI6IHNlbWVzdGVyLCB5ZWFyOiB5ZWFyIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL3NlY3Rpb25zL2J5LXVzZXJpZC1zZW1lc3Rlci15ZWFyXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRDb3Vyc2VzKHVzZXJJZCwgc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0QWxsQ291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS0tLSAgKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogU2VjdGlvbnMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFNlbWVzdGVyIGFuZCBZZWFyIFxyXG4gICAgYXN5bmMgZ2V0QWxsQ291cnNlcyh1c2VyaWQgPSBcIlwiLCBzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgVXNlcmlkOiB1c2VyaWQsIFNlbWVzdGVyOiBzZW1lc3RlciwgWWVhcjogeWVhciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9ieS1zZW1lc3Rlci15ZWFyXCIsIGJvZHkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcbiAgICAvLy0tLWdldENvdXJzZXNCeVNlbWVzdGVyWWVhcihzZW1lc3RlciwgeWVhciktLS0gIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBBbGwgQ291cnNlcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgc2VtZXN0ZXIgYW5kIHllYXIgXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIoc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkgXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIHNlbWVzdGVyOiBzZW1lc3RlciwgXHJcbiAgICAgICAgICAgIHllYXI6IHllYXIgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9nZXQtYnkteWVhci1zZW1lc3RlclwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgLy9hcGkuZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyKHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuXHJcbiAgICAvLy0tLWdldEZvcm1zQnlTZWN0aW9uKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSwgc2VjdGlvbiktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBDb3Vyc2VOdW1iZXIsIFNlY3Rpb25OdW1iZXJcclxuICAgIC8vICAgIE91dHB1dDogRm9ybXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIENvdXJzZU51bWJlciwgYW5kIFNlY3Rpb25OdW1iZXJcclxuICAgIGFzeW5jIGdldEZvcm1CeVNlY3Rpb24odXNlcmlkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgU2VjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgSW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgWWVhcjogeWVhciwgICBcclxuICAgICAgICAgICAgICAgIFNlbWVzdGVyOiBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIERlcGFydG1lbnQ6IGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBDb3Vyc2VOdW1iZXI6IGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFNlY3Rpb25OdW1iZXI6IHNlY3Rpb25OdW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL2J5LXNlY3Rpb25cIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEZvcm1zQnlTZWN0aW9uKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSwgc2VjdGlvbikudGhlbihmb3JtID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgZm9ybSBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRGb3Jtc0J5Q291cnNlKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBDb3Vyc2VOdW1iZXJcclxuICAgIC8vICAgIE91dHB1dDogRm9ybXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIGFuZCBDb3Vyc2VOdW1iZXJcclxuICAgIGFzeW5jIGdldEZvcm1zQnlDb3Vyc2UodXNlcmlkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBZZWFyOiB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgU2VtZXN0ZXI6IHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgRGVwYXJ0bWVudDogZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIENvdXJzZU51bWJlcjogY291cnNlTnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL2J5LWNvdXJzZVwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0Rm9ybXNCeUNvdXJzZSh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0QWxsRm9ybXModXNlcmlkLCBzZW1lc3RlciwgeWVhciktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogRm9ybXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFNlbWVzdGVyIGFuZCBZZWFyXHJcbiAgICBhc3luYyBnZXRBbGxGb3Jtcyh1c2VyaWQgPSBcIlwiLCBzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBzZW1lc3Rlcjogc2VtZXN0ZXIsIHllYXI6IHllYXIgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvYnktc2VtZXN0ZXIteWVhclwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0QWxsRm9ybXModXNlcmlkLCBzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgZm9ybXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tcG9zdEZvcm0odXNlcklkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBzZWN0aW9uTnVtYmVyLCBpc1NlY3Rpb25Db21wbGV0ZWQsIG91dGNvbWVzLCBJVEdyYWRlcywgQ1NHcmFkZXMsIENFR3JhZGVzKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IF5eXiAgICh3aWxsIGFsc28gaGF2ZSBwZGYgaGVyZSBsYXRlciBhcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlcilcclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0Rm9ybSh1c2VySWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIsIGlzU2VjdGlvbkNvbXBsZXRlZCA9IGZhbHNlLCBvdXRjb21lcyA9IFtdLCBJVEdyYWRlcyA9IHt9LCBDU0dyYWRlcyA9IHt9LCBDRUdyYWRlcyA9IHt9KSB7XHJcbiAgICAgICAgLy8gdGhlIGJvZHkgd2lsbCBhbHNvIGluY2x1ZGUgYW55IHBkZiB0byBwb3N0IGluIHRoZSBmdXR1cmVcclxuXHJcbiAgICAgICAgLy9vdXRjb21lczogYW4gYXJyYXkgb2YgQ291cnNlX091dGNvbWVzIG9iamVjdHNcclxuICAgICAgICAvL0NvdXJzZV9PdXRjb21lcyBjbGFzczpcclxuICAgICAgICAvL3N0cmluZyBvdXRjb21lLCBpbnQgbnVtYmVyT2ZJVCwgaW50IG51bWJlck9mQ1MsIGludCBudW1iZXJPZkNFLCBTdHVkZW50V29ya3NbXSBzdHVkZW50V29ya3NcclxuICAgICAgICAvL1N0dWRlbnRXb3JrcyBjbGFzczpcclxuICAgICAgICAvL3N0cmluZyBzdHVkZW50V29yaywgc3RyaW5nIGZpbGVVcGxvYWRlZCAoPC0tIHdpbGwgaW1wbGVtZW50IGxhdGVyKVxyXG5cclxuICAgICAgICAvL0lULCBDUywgQ0UgR3JhZGVzIGNsYXNzOlxyXG4gICAgICAgIC8vaW50IEEsIGludCBCLCBpbnQgQywgaW50IEQsIGludCBFLCBpbnQgRiwgaW50IFcsIGludCBJLCBpbnQgdG90YWxTdHVkZW50c1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWN0aW9uQ29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3V0Y29tZXMsXHJcbiAgICAgICAgICAgICAgICBJVEdyYWRlcyxcclxuICAgICAgICAgICAgICAgIENTR3JhZGVzLFxyXG4gICAgICAgICAgICAgICAgQ0VHcmFkZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL3Bvc3QtZm9ybVwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RDb21tZW50KHVzZXJJZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgY29vcmRpbmF0b3JDb21tZW50LCBpc0NvdXJzZUNvbXBsZXRlZCktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIGNvb3JkaW5hdG9yQ29tbWVudCwgaXNDb3Vyc2VDb21wbGV0ZWRcclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0Q29tbWVudCh1c2VySWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgY29vcmRpbmF0b3JDb21tZW50ID0gXCJcIiwgaXNDb3Vyc2VDb21wbGV0ZWQgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGNvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgQ29vcmRpbmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRvckNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICBpc0NvdXJzZUNvbXBsZXRlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9wb3N0LWNvbW1lbnRcIiwgYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRCbGFua0Zvcm0odXNlcmlkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZFxyXG4gICAgLy8gICAgT3V0cHV0OiBCbGFuayBGb3JtXHJcbiAgICBhc3luYyBnZXRCbGFua0Zvcm0odXNlcmlkKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvbmV3LWJsYW5rXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRCbGFua0Zvcm0odXNlcmlkKS50aGVuKHJlc3VsdCA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgaXMgYWNjZXNzaWJsZSwgaXQgaXMgYSBKU09OKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS1nZXREZWZhdWx0WWVhckFuZFNlbWVzdGVyKCktLVxyXG4gICAgLy8gICAgSW5wdXQ6IE5vdGhpbmdcclxuICAgIC8vICAgIE91dHB1dDogT2JqZWN0IEluY2x1ZGluZyBDdXJyZW50IERlZmF1bHQgWWVhciBhbmQgU2VtZXN0ZXJcclxuICAgIGdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIoKSB7XHJcbiAgICAgICAgdmFyIHRleHQgPSAneyBcInllYXJcIjogMCwnICsgICAgICAgICAvLyBjcmVhdGUgc3RyaW5nIG9mIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgJyBcInNlbWVzdGVyXCI6IFwiXCIgfSc7XHJcbiAgICAgICAgdmFyIFJlc3VsdE9iaiA9IEpTT04ucGFyc2UodGV4dCk7ICAgLy8gY3JlYXRlIG9iamVjdCBmcm9tIHRoZSBzdHJpbmdcclxuXHJcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpOyAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGRhdGVcclxuICAgICAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTsgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZGF5XHJcbiAgICAgICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgICAgLy8gYWRkIG9uZSB0byBtb250aCAoYnkgZGVmYXVsdCBKYW51YXJ5ID0gMClcclxuICAgICAgICBSZXN1bHRPYmoueWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTsvLyBnZXQgdGhlIGZ1bGwgeWVhciBmcm9tIHRoZSBkYXRlXHJcbiAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJmYWxsXCI7ICAgICAgICAvLyBqdXN0IHRvIGJlIHNhZmVcclxuICAgICAgICBcclxuICAgICAgICAvLyBTZXQgdGhlIERlZmF1bHQgU2VtZXN0ZXIgQmFzZWQgb24gdGhlIE1vbnRoXHJcbiAgICAgICAgaWYgKChtb250aCA+IDgpIHx8IChtb250aCA9PSA4ICYmIGRheSA+PSAxNSkpIHtcclxuICAgICAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJmYWxsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChtb250aCA+IDUpIHx8IChtb250aCA9PSA1ICYmIGRheSA+PSAxNSkpIHtcclxuICAgICAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJzdW1tZXJcIjtcclxuICAgICAgICAgICAgLy8gc2luY2UgdGhpcyBpcyBqdXN0IGEgZGVmYXVsdCBzZW1lc3RlciwgaXQgYWx3YXlzIGRlZmF1bHRzIHRvIHRoZSBsb25nZXIgc2VtZXN0ZXJzXHJcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgd2h5IGl0IGRvZXNuJ3QgZGVmYXVsdCB0byBzbWFsbGVyIHN1bW1lciBzZW1lc3RlcnNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFJlc3VsdE9iai5zZW1lc3RlciA9IFwic3ByaW5nXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUmVzdWx0T2JqOyAgICAvLyByZXR1cm4gb2JqZWN0IGluY2x1ZGluZyB0aGUgeWVhciBhbmQgc2VtZXN0ZXJcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWFkZFNlY3Rpb24odXNlcmlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBzZWN0aW9uTnVtYmVyLCBkZXBhcnRtZW50LCBudW1iZXJPZlN0dWRlbnRzKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogXl5eXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgYWRkU2VjdGlvbih1c2VyaWQgPSBcIlwiLCBmaXJzdE5hbWUgPSBcIlwiLCBsYXN0TmFtZSA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgbnVtYmVyT2ZTdHVkZW50cyA9IDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBzZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIGlzU2VjdGlvbkNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZlN0dWRlbnRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvc2VjdGlvbnMvYWRkLXNlY3Rpb25cIiwgYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRGYWN1bHR5TGlzdCgpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBub25lXHJcbiAgICAvLyAgICBPdXRwdXQ6IExpc3Qgb2YgaW5zdHJ1Y3RvcnMsIGNvb3JkaW5hdG9ycywgYWRqdW5jdCBmYWN1bHRpZXMsIGFuZCB0ZWFjaGluZyBmZWxsb3dzXHJcbiAgICBhc3luYyBnZXRGYWN1bHR5TGlzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZmFjdWx0eS9nZXQtbGlzdFwiLCB7fSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tYWRkRmFjdWx0eU1lbWJlcihmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VyaWQsIHJvbGUpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBGaXJzdCBOYW1lLCBMYXN0IE5hbWUgYW5kIFVzZXIgSWRcclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBhZGRGYWN1bHR5TWVtYmVyKGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgdXNlcklkID0gXCJcIiwgZmFjdWx0eVR5cGUgPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGluZm86IHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWN1bHR5VHlwZTogZmFjdWx0eVR5cGVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mYWN1bHR5L2FkZC1tZW1iZXJcIiwgYm9keSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tZ2V0Q291cnNlc0J5RGVwYXJ0bWVudChkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBhcnJheSBvZiBjb3Vyc2VzXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgZGVwYXJ0bWVudFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9nZXQtYnktZGVwYXJ0bWVudFwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1hZGRDb3Vyc2UodXNlcmlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkaXNwbGF5TmFtZSwgZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IF5eXlxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIGFkZENvdXJzZSh1c2VyaWQgPSBcIlwiLCBmaXJzdE5hbWUgPSBcIlwiLCBsYXN0TmFtZSA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGRpc3BsYXlOYW1lID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvYWRkLWNvdXJzZVwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1yZW1vdmVDb3Vyc2UoeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnRcclxuICAgIC8vICAgIE91dHB1dDogc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgICBhc3luYyByZW1vdmVDb3Vyc2UoeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvcmVtb3ZlLWNvdXJzZVwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldENvdXJzZU91dGNvbWVzQnlDb3Vyc2UoeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnRcclxuICAgIC8vICAgIE91dHB1dDogYXJyYXkgb2YgY291cnNlIG91dGNvbWVzXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VPdXRjb21lc0J5Q291cnNlKHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZS1vdXRjb21lcy9ieS1jb3Vyc2VcIiwgYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1wb3N0Q291cnNlT3V0Y29tZXMob3V0Y29tZXMpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBhcnJheSBvZiBvdXRjb21lIG9iamVjdHMgKHNlZSBub3RlcyBiZWxvdylcclxuICAgIC8vICAgIE91dHB1dDogc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0Q291cnNlT3V0Y29tZXMob3V0Y29tZXMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICAvL2FuIG91dGNvbWUgb2JqZWN0IGNvbnRhaW5zIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9vcmRlciAobnVtYmVyKSwgb3V0Y29tZSAoc3RyaW5nKSwgbWFwcGVkU3R1ZGVudE91dGNvbWVzKGFycmF5IG9mIG51bWJlcnMpXHJcbiAgICAgICAgLy9FeGFtcGxlOlxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vICAgIG9yZGVyOiAxLCBvdXRjb21lOiBcIkFjY29tcGxpc2ggdGhpbmdzXCIsIG1hcHBlZFN0dWRlbnRPdXRjb21lczogWzEsIDAsIDAsIDEsIDAsIDFdXHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGNvdXJzZU91dGNvbWVzTGlzdDogb3V0Y29tZXNcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlLW91dGNvbWVzL3Bvc3Qtb3V0Y29tZXNcIiwgYm9keSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEVycm9yT2JqIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSBcIlwiLCBpc0xvZ2dlZEluID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gaXNMb2dnZWRJbjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQWNjb3JkaW9uLFxyXG4gIEFjY29yZGlvbkhlYWRlcixcclxuICBBY2NvcmRpb25JY29uLFxyXG4gIEFjY29yZGlvbkl0ZW0sXHJcbiAgQWNjb3JkaW9uUGFuZWwsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgXCIuL0FkbWluTWVudS5jc3NcIjtcclxuXHJcbmNvbnN0IEFkbWluTWVudSA9ICh7IHNldFZpZXcgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICA8QWNjb3JkaW9uIGFsbG93VG9nZ2xlPlxyXG4gICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXIgX2V4cGFuZGVkPXt7IGJnOiBcIiMzOEExNjlcIiwgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBmbGV4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIkdGUlwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR2VuZXJhdGUgRnVsbCBSZXBvcnRcclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcblxyXG4gICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXIgX2V4cGFuZGVkPXt7IGJnOiBcIiMzOEExNjlcIiwgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBmbGV4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIkdTUlwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR2VuZXJhdGUgU2VjdGlvbiBSZXBvcnRcclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbkhlYWRlciBfZXhwYW5kZWQ9e3sgYmc6IFwiIzM4QTE2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGZsZXg9XCIxXCJcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRWaWV3KFwiR1NTXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHZW5lcmF0ZSBTdHVkZW50IFN1cnZleXNcclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcblxyXG4gICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXIgX2V4cGFuZGVkPXt7IGJnOiBcIiMzOEExNjlcIiwgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBmbGV4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIk9NXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdHVkZW50IE91dGNvbWUgTWFwcGluZ1xyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuXHJcbiAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbkhlYWRlciBfZXhwYW5kZWQ9e3sgYmc6IFwiIzM4QTE2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgIDxCb3ggZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICBEZXBhcnRtZW50IENoYW5nZXNcclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cclxuICAgICAgICAgICAgPEFjY29yZGlvblBhbmVsIHBiPXs0fT5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uIGFsbG93VG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBfZXhwYW5kZWQ9e3sgYmc6IFwiIzM4QTE2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIkNOU1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIE5ldyBTZW1lc3RlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIF9leHBhbmRlZD17eyBiZzogXCIjMzhBMTY5XCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWaWV3KFwiRUFDXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFZGl0IEFzc2lnbmVkIENvdXJzZXNcclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBfZXhwYW5kZWQ9e3sgYmc6IFwiIzM4QTE2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIkVGTFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRWRpdCBGYWN1bHR5IExpc3RcclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBfZXhwYW5kZWQ9e3sgYmc6IFwiIzM4QTE2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIkVQTFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRWRpdCBQcm9ncmFtIExpc3RcclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICBfZXhwYW5kZWQ9e3sgYmc6IFwiIzM4QTE2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIkVDTFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRWRpdCBDb3Vyc2UgTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIF9leHBhbmRlZD17eyBiZzogXCIjMzhBMTY5XCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWaWV3KFwiRUNPXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFZGl0IENvdXJzZSBPdXRjb21lc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZW1lc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBiZz1cIiMzOEExNjlcIiBjb2xvcj1cIndoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3VycmVudCBTZW1lc3RlcjpcclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgRmFsbCAyMDIwXHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5NZW51O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBCb3gsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCAnLi9BZG1pbk5hdmlnYXRpb24uY3NzJztcclxuaW1wb3J0IEFQSSBmcm9tIFwiLi8uLi8uLi8uLi9hcGkvYXBpXCI7XHJcblxyXG5jb25zdCBBZG1pbk5hdmlnYXRpb24gPSAoe2xpbmssIHVzZXJ9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBuZXcgQVBJKCkubG9nb3V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGxpbmspIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbkhvbWVcIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWducmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cInVzZXItbmFtZVwiPnt1c2VyfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17bG9nb3V0fT5TaWduIE91dDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbk5hdmlnYXRpb247IiwiaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0sIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xyXG5pbXBvcnQgRWRpdEZhY3VsdHlNZW1iZXIgZnJvbSBcIi4uL2FkbWluLWNvbXBvbmVudHMvRWRpdEZhY3VsdHlMaXN0L0VkaXRGYWN1bHR5TWVtYmVyXCI7XHJcbmltcG9ydCBFZGl0Q291cnNlTGlzdCBmcm9tIFwiLi4vYWRtaW4tY29tcG9uZW50cy9FZGl0Q291cnNlTGlzdC9FZGl0Q291cnNlTGlzdFwiO1xyXG5pbXBvcnQgeyByZW1vdmVDb3Vyc2UgfSBmcm9tIFwiLi4vLi4vYXBpL0FQSUhlbHBlclwiO1xyXG5cclxuY29uc3QgQ291cnNlcyA9ICh7XHJcbiAgbWVtYmVyLFxyXG4gIGNvbG9yLFxyXG4gIHllYXIsXHJcbiAgc2VtZXN0ZXIsXHJcbiAgY291cnNlTnVtYmVyLFxyXG4gIGRlcGFydG1lbnQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgdGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDIsIDFmcilcIiBiZz17Y29sb3J9IHBhZGRpbmc9XCIuNWVtXCI+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEdyaWRJdGVtIHJvd1NwYW49ezJ9PlxyXG4gICAgICAgICAgPFRleHQ+e21lbWJlcn08L1RleHQ+XHJcbiAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICA8R3JpZEl0ZW0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICByZW1vdmVDb3Vyc2UoeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudClcclxuICAgICAgICAgICAgICBhbGVydChcIlRoaXMgd2lsbCByZW1vdmUgeW91ciBlbnRyeVwiKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8Lz5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlczsgO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCb3gsIFNlbGVjdCwgQnV0dG9ufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCAnLi9DcmVhdGVOZXdTZW1lc3Rlci5jc3MnO1xyXG5cclxuY29uc3QgQ3JlYXRlTmV3U2VtZXN0ZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIHkgPSBkLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wJykuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbmZpcm0gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGNyZWF0ZSB0aGUgc2VsZWN0ZWQgbmV3IHNlbWVzdGVyPycpKXtcclxuICAgICAgICAgICAgLy9QT1NUIHRoZSBuZXcgc2Vtc2VzdGVyIHRvIHRoZSBkYlxyXG4gICAgICAgICAgICBhbGVydChcIk5ldyBTZW1lc3RlciBDcmVhdGVkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPSd0b3AnPlxyXG4gICAgICAgICAgICA8Qm94IGZvbnRXZWlnaHQ9XCJib2xkXCI+Q3JlYXRlIE5ldyBTZW1lc3RlcjwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGJvcmRlcldpZHRoPVwiMnB4XCIgcm91bmRlZD1cImxnXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG09XCIxZW1cIiBwPVwiM2VtXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgdGhlIHRlcm0gYW5kIHllYXIgZm9yIHRoZSBuZXcgc2VtZXN0ZXIuIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgbXQ9XCIxZW1cIiBpZD1cInRlcm1cIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCB0ZXJtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3ByaW5nXCI+U3ByaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3VtbWVyXCI+U3VtbWVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmFsbFwiPkZhbGw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG10PVwiMWVtXCIgaWQ9XCJ5ZWFyXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgeWVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHNob3VsZCBiZSBmaWxsZWQgd2l0aCBhIGxpc3Qgb2YgeWVhcnMgZnJvbSBkYiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ5ZWFyMVwiPnt5fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInllYXIyXCI+e3krMX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJncmVlblwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17aGFuZGxlQ29uZmlybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlTmV3U2VtZXN0ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0JveCwgSW5wdXQsIFRleHQsIERpdmlkZXIsIExpc3QsIExpc3RJdGVtLCBJY29uQnV0dG9ufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xyXG5pbXBvcnQgXCIuL0Fzc2lnbkNvdXJzZUlucHV0LmNzc1wiO1xyXG5pbXBvcnQgdXNlSW5wdXRTdGF0ZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VJbnB1dFN0YXRlJztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tIFwiLi9BdXRvY29tcGxldGUuanNcIjtcclxuXHJcbmltcG9ydCBmYWtlRGF0YSBmcm9tIFwiLi4vLi4vLi4vZmFrZS1kYXRhL2ZhY3VsdHkuanNvblwiO1xyXG5cclxuY29uc3QgZmFjdWx0eSA9IGZha2VEYXRhLmZhY3VsdHk7XHJcblxyXG5jb25zdCBBc3NpZ25Db3Vyc2VJbnB1dCA9ICh7Y291cnNlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzZWN0aW9uLCBzZXRTZWN0aW9uLCByZXNldF0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3NlY3Rpb25zLCBzZXRTZWN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgYWRkU2VjdGlvbiA9IGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFNlY3Rpb25zKFtcclxuICAgICAgICAgICAgLi4uc2VjdGlvbnMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBzZWN0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzZWN0aW9uLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgcmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVTZWN0aW9uID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRTZWN0aW9ucyhzZWN0aW9ucy5maWx0ZXIoc2VjdCA9PiBzZWN0LmlkICE9PSBpZCkpO1xyXG5cclxuICAgIH0gXHJcblxyXG4gICAgY29uc3QgcmVuZGVyU2VjdGlvbiA9IHNlY3Rpb25zLm1hcChzZWN0ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWN0Lm5hbWUpO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBjb2xvcj1cIlwiPntzZWN0Lm5hbWV9PC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0cnVjdG9yLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucz17ZmFjdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYXNoLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gaWNvbj1cImRlbGV0ZVwiIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSBzZWN0aW9uICcrc2VjdC5uYW1lKyc/Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2VjdGlvbihzZWN0LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfX0+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIm10PVwiNnB4XCI+e2NvdXJzZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29vcmRpbmF0b3ItZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9ucz17ZmFjdWx0eX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlclNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2FkZFNlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtdD1cIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbmV3IHNlY3Rpb24gbnVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmbHVzaGVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWN0aW9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHc9JzEzZW0nXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9XCJmYWxzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG10PVwiMS44ZW1cIiBcclxuICAgICAgICAgICAgICAgICAgICBtbD1cIi4yZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc20nIFxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFNlY3Rpb259PiAgICBcclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIG1iPScycmVtJyBtdD1cIjJyZW1cIiBib3JkZXJDb2xvcj1cImJsYWNrXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFzc2lnbkNvdXJzZUlucHV0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFwiLi9BdXRvY29tcGxldGUuY3NzXCI7XHJcblxyXG4vL2F1dG9jb21wbGV0ZSBmdW5jdGlvbmFsaXR5IGZyb20gaHR0cHM6Ly93d3cuZGlnaXRhbG9jZWFuLmNvbS9jb21tdW5pdHkvdHV0b3JpYWxzL3JlYWN0LXJlYWN0LWF1dG9jb21wbGV0ZVxyXG5cclxuY2xhc3MgQXV0b2NvbXBsZXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgc3VnZ2VzdGlvbnM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KVxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdWdnZXN0aW9uczogW11cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8vIFRoZSBhY3RpdmUgc2VsZWN0aW9uJ3MgaW5kZXhcclxuICAgICAgYWN0aXZlU3VnZ2VzdGlvbjogMCxcclxuICAgICAgLy8gVGhlIHN1Z2dlc3Rpb25zIHRoYXQgbWF0Y2ggdGhlIHVzZXIncyBpbnB1dFxyXG4gICAgICBmaWx0ZXJlZFN1Z2dlc3Rpb25zOiBbXSxcclxuICAgICAgLy8gV2hldGhlciBvciBub3QgdGhlIHN1Z2dlc3Rpb24gbGlzdCBpcyBzaG93blxyXG4gICAgICBzaG93U3VnZ2VzdGlvbnM6IGZhbHNlLFxyXG4gICAgICAvLyBXaGF0IHRoZSB1c2VyIGhhcyBlbnRlcmVkXHJcbiAgICAgIHVzZXJJbnB1dDogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIEV2ZW50IGZpcmVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGlzIGNoYW5nZWRcclxuICBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBzdWdnZXN0aW9ucyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgb3VyIHN1Z2dlc3Rpb25zIHRoYXQgZG9uJ3QgY29udGFpbiB0aGUgdXNlcidzIGlucHV0XHJcbiAgICBjb25zdCBmaWx0ZXJlZFN1Z2dlc3Rpb25zID0gc3VnZ2VzdGlvbnMuZmlsdGVyKFxyXG4gICAgICBzdWdnZXN0aW9uID0+XHJcbiAgICAgICAgc3VnZ2VzdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YodXNlcklucHV0LnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgICk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSB1c2VyIGlucHV0IGFuZCBmaWx0ZXJlZCBzdWdnZXN0aW9ucywgcmVzZXQgdGhlIGFjdGl2ZVxyXG4gICAgLy8gc3VnZ2VzdGlvbiBhbmQgbWFrZSBzdXJlIHRoZSBzdWdnZXN0aW9ucyBhcmUgc2hvd25cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhY3RpdmVTdWdnZXN0aW9uOiAwLFxyXG4gICAgICBmaWx0ZXJlZFN1Z2dlc3Rpb25zLFxyXG4gICAgICBzaG93U3VnZ2VzdGlvbnM6IHRydWUsXHJcbiAgICAgIHVzZXJJbnB1dDogZS5jdXJyZW50VGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBFdmVudCBmaXJlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhIHN1Z2dlc3Rpb25cclxuICBvbkNsaWNrID0gZSA9PiB7XHJcbiAgICAvLyBVcGRhdGUgdGhlIHVzZXIgaW5wdXQgYW5kIHJlc2V0IHRoZSByZXN0IG9mIHRoZSBzdGF0ZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFjdGl2ZVN1Z2dlc3Rpb246IDAsXHJcbiAgICAgIGZpbHRlcmVkU3VnZ2VzdGlvbnM6IFtdLFxyXG4gICAgICBzaG93U3VnZ2VzdGlvbnM6IGZhbHNlLFxyXG4gICAgICB1c2VySW5wdXQ6IGUuY3VycmVudFRhcmdldC5pbm5lclRleHRcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEV2ZW50IGZpcmVkIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBhIGtleSBkb3duXHJcbiAgb25LZXlEb3duID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZVN1Z2dlc3Rpb24sIGZpbHRlcmVkU3VnZ2VzdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gVXNlciBwcmVzc2VkIHRoZSBlbnRlciBrZXksIHVwZGF0ZSB0aGUgaW5wdXQgYW5kIGNsb3NlIHRoZVxyXG4gICAgLy8gc3VnZ2VzdGlvbnNcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGFjdGl2ZVN1Z2dlc3Rpb246IDAsXHJcbiAgICAgICAgc2hvd1N1Z2dlc3Rpb25zOiBmYWxzZSxcclxuICAgICAgICB1c2VySW5wdXQ6IGZpbHRlcmVkU3VnZ2VzdGlvbnNbYWN0aXZlU3VnZ2VzdGlvbl1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBVc2VyIHByZXNzZWQgdGhlIHVwIGFycm93LCBkZWNyZW1lbnQgdGhlIGluZGV4XHJcbiAgICBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgIGlmIChhY3RpdmVTdWdnZXN0aW9uID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlU3VnZ2VzdGlvbjogYWN0aXZlU3VnZ2VzdGlvbiAtIDEgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBVc2VyIHByZXNzZWQgdGhlIGRvd24gYXJyb3csIGluY3JlbWVudCB0aGUgaW5kZXhcclxuICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcclxuICAgICAgaWYgKGFjdGl2ZVN1Z2dlc3Rpb24gLSAxID09PSBmaWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVN1Z2dlc3Rpb246IGFjdGl2ZVN1Z2dlc3Rpb24gKyAxIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgb25DaGFuZ2UsXHJcbiAgICAgIG9uQ2xpY2ssXHJcbiAgICAgIG9uS2V5RG93bixcclxuICAgICAgc3RhdGU6IHtcclxuICAgICAgICBhY3RpdmVTdWdnZXN0aW9uLFxyXG4gICAgICAgIGZpbHRlcmVkU3VnZ2VzdGlvbnMsXHJcbiAgICAgICAgc2hvd1N1Z2dlc3Rpb25zLFxyXG4gICAgICAgIHVzZXJJbnB1dFxyXG4gICAgICB9XHJcbiAgICB9ID0gdGhpcztcclxuXHJcbiAgICBsZXQgc3VnZ2VzdGlvbnNMaXN0Q29tcG9uZW50O1xyXG5cclxuICAgIGlmIChzaG93U3VnZ2VzdGlvbnMgJiYgdXNlcklucHV0KSB7XHJcbiAgICAgIGlmIChmaWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgIHN1Z2dlc3Rpb25zTGlzdENvbXBvbmVudCA9IChcclxuICAgICAgICAgIDx1bCBjbGFzcz1cInN1Z2dlc3Rpb25zXCI+XHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZFN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lO1xyXG5cclxuICAgICAgICAgICAgICAvLyBGbGFnIHRoZSBhY3RpdmUgc3VnZ2VzdGlvbiB3aXRoIGEgY2xhc3NcclxuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZVN1Z2dlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwic3VnZ2VzdGlvbi1hY3RpdmVcIjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17c3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmFjdWx0eS1pbnB1dFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cclxuICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVuYXNzaWduZWRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3N1Z2dlc3Rpb25zTGlzdENvbXBvbmVudH1cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGl2aWRlciwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IFwiLi9FZGl0Q291cnNlQXNzaWdubWVudHMuY3NzXCI7XHJcbmltcG9ydCBBc3NpZ25Db3Vyc2VJbnB1dCBmcm9tIFwiLi9Bc3NpZ25Db3Vyc2VJbnB1dFwiO1xyXG5pbXBvcnQgZmFrZURhdGEgZnJvbSBcIi4uLy4uLy4uL2Zha2UtZGF0YS9jb3Vyc2UuanNvblwiO1xyXG5cclxuY29uc3QgRWRpdENvdXJzZUFzc2lnbm1lbnRzID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcFwiKS5zY3JvbGxJbnRvVmlldygpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9QT1NUIHRoZSBjb3Vyc2UgYXNzaWdubWVudHMgdG8gdGhlIGRiXHJcbiAgICBhbGVydChcIkNvdXJzZSBBc3NpZ25tZW50cyBTYXZlZFwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb3Vyc2VzID0gZmFrZURhdGEuY291cnNlcztcclxuICBjb25zdCByZW5kZXJDb3Vyc2VzID0gY291cnNlcy5tYXAoKGNvdXJzZSwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gPEFzc2lnbkNvdXJzZUlucHV0IGNvdXJzZT17Y291cnNlLmNvZGV9IGtleT17aWR4fSAvPjtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ0b3BcIj5cclxuICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiPkVkaXQgQXNzaWduZWQgQ291cnNlczwvQm94PlxyXG4gICAgICA8Qm94IGJvcmRlcldpZHRoPVwiMnB4XCIgcm91bmRlZD1cImxnXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG09XCIxZW1cIiBwPVwiM2VtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2UtaW5wdXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgICAgIENvdXJzZVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29vcmRpbmF0b3JcIj5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgICAgQ29vcmRpbmF0b3JcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgICAgU2VjdGlvblxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdHJ1Y3RvclwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICBJbnN0cnVjdG9yXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFzaFwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cImJvbGRcIj48L1RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciBtYj1cIjJyZW1cIiBib3JkZXJDb2xvcj1cImJsYWNrXCIgLz5cclxuICAgICAgICB7cmVuZGVyQ291cnNlc31cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5cclxuICAgICAgICAgIFNhdmVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0Q291cnNlQXNzaWdubWVudHM7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRmxleCwgRm9ybUxhYmVsIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlVG9nZ2xlXCI7XHJcbmltcG9ydCB1c2VJbnB1dFN0YXRlIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VJbnB1dFN0YXRlXCI7XHJcblxyXG5jb25zdCBBZGRDb3Vyc2UgPSAoeyBhZGROZXdDb3Vyc2UgfSkgPT4ge1xyXG4gIGNvbnN0IHllYXJzID0gWzIwMjAsIDIwMjEsIDIwMjJdO1xyXG4gIGNvbnN0IHNlbWVzdGVycyA9IFtcIlNwcmluZ1wiLCBcIlN1bW1lclwiLCBcIkZhbGxcIiwgXCJXaW50ZXJcIl07XHJcbiAgY29uc3QgZGVwYXJ0bWVudHMgPSBbXCJDU0NFXCIsIFwiRUVOR1wiLCBcIklUXCJdO1xyXG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcmlkLCBzZXRJRF0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt5ZWFyVmFsdWUsIHNldFllYXJdID0gdXNlU3RhdGUoeWVhcnNbMF0pO1xyXG4gIGNvbnN0IFtzZW1lc3Rlciwgc2V0U2VtZXN0ZXJdID0gdXNlU3RhdGUoc2VtZXN0ZXJzWzBdKTtcclxuICBjb25zdCBbY291cnNlTnVtYmVyLCBzZXRDb3Vyc2VOdW1iZXJdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGlzcGxheU5hbWUsIHNldERpc3BsYXlOYW1lXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RlcGFydG1lbnQsIHNldERlcGFydG1lbnRdID0gdXNlU3RhdGUoZGVwYXJ0bWVudHNbMF0pO1xyXG5cclxuICBjb25zdCBbaXNFZGRpdGluZywgdG9nZ2xlRWRkaXRpbmddID0gdXNlVG9nZ2xlKCk7XHJcblxyXG4gIGNvbnN0IGFkZENvdXJzZSA9ICgpID0+IHtcclxuICAgIGFkZE5ld0NvdXJzZSh7XHJcbiAgICAgIGlkOiB1c2VyaWQsXHJcbiAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxyXG4gICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgIHllYXI6IHllYXJWYWx1ZSxcclxuICAgICAgc2VtZXN0ZXI6IHNlbWVzdGVyLFxyXG4gICAgICBjb3Vyc2VOdW1iZXI6IGNvdXJzZU51bWJlcixcclxuICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxyXG4gICAgICBkZXBhcnRtZW50OiBkZXBhcnRtZW50LFxyXG4gICAgfSk7XHJcbiAgICB0b2dnbGVFZGRpdGluZygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNFZGRpdGluZyA/IChcclxuICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5MYXN0IE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB3PVwiNTAlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0TGFzdE5hbWV9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtTGFiZWw+Rmlyc3QgTmFtZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHc9XCI1MCVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0Rmlyc3ROYW1lfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPklEPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXQgdz1cIjUwJVwiIHZhbHVlPXt1c2VyaWR9IG9uQ2hhbmdlPXtzZXRJRH0gdmFyaWFudD1cImZpbGxlZFwiIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5ZZWFyPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBzZXRZZWFyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXt5ZWFyVmFsdWV9XHJcbiAgICAgICAgICAgIHc9XCI1MCVcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXt5ZWFyc1swXX0+XHJcbiAgICAgICAgICAgICAgMjAyMFxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXt5ZWFyc1sxXX0+XHJcbiAgICAgICAgICAgICAgMjAyMVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXt5ZWFyc1syXX0+XHJcbiAgICAgICAgICAgICAgMjAyMlxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5TZW1lc3RlcjwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2VtZXN0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3NlbWVzdGVyfVxyXG4gICAgICAgICAgICB3PVwiNTAlXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gbXI9XCIxZW1cIiB2YWx1ZT17c2VtZXN0ZXJzWzBdfT5cclxuICAgICAgICAgICAgICBTcHJpbmdcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gbXI9XCIxZW1cIiB2YWx1ZT17c2VtZXN0ZXJzWzFdfT5cclxuICAgICAgICAgICAgICBTdW1tZXJcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gbXI9XCIxZW1cIiB2YWx1ZT17c2VtZXN0ZXJzWzJdfT5cclxuICAgICAgICAgICAgICBGYWxsXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIG1yPVwiMWVtXCIgdmFsdWU9e3NlbWVzdGVyc1szXX0+XHJcbiAgICAgICAgICAgICAgV2ludGVyXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPkNvdXJzZSBOdW1iZXI8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB3PVwiNTAlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NvdXJzZU51bWJlcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldENvdXJzZU51bWJlcn1cclxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICAgIDxGb3JtTGFiZWw+RGlzcGxheSBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdz1cIjUwJVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkaXNwbGF5TmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldERpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5EZXBhcnRtZW50PC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBzZXREZXBhcnRtZW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXtkZXBhcnRtZW50fVxyXG4gICAgICAgICAgICB3PVwiNTAlXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gbXI9XCIxZW1cIiB2YWx1ZT17ZGVwYXJ0bWVudHNbMF19PlxyXG4gICAgICAgICAgICAgIENTQ0VcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gbXI9XCIxZW1cIiB2YWx1ZT17ZGVwYXJ0bWVudHNbMV19PlxyXG4gICAgICAgICAgICAgIEVFTkdcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gbXI9XCIxZW1cIiB2YWx1ZT17ZGVwYXJ0bWVudHNbMl19PlxyXG4gICAgICAgICAgICAgIElUXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvbiB2IGFyaWFudENvbG9yPVwiZ3JlZW5cIiBtdD1cIjFlbVwiIG9uQ2xpY2s9e2FkZENvdXJzZX0+XHJcbiAgICAgICAgICAgIEFkZCBOZXcgQ291cnNlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJncmVlblwiIG10PVwiMmVtXCIgb25DbGljaz17dG9nZ2xlRWRkaXRpbmd9PlxyXG4gICAgICAgICAgQWRkIENvdXJzZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWRkQ291cnNlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBUZXh0LFxyXG4gIFNlbGVjdCxcclxuICBCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0LFxyXG4gIElucHV0LFxyXG4gIExpc3RJdGVtLFxyXG4gIEZsZXgsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgdXNlSW5wdXRTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlSW5wdXRTdGF0ZVwiO1xyXG5pbXBvcnQgXCIuL0VkaXRDb3Vyc2VMaXN0LmNzc1wiO1xyXG5pbXBvcnQgZmFrZURhdGEgZnJvbSBcIi4uLy4uLy4uL2Zha2UtZGF0YS9jb3Vyc2UuanNvblwiO1xyXG5pbXBvcnQgRmFjdWx0eU1lbWJlciBmcm9tIFwiLi4vRmFjdWx0eU1lbWJlclwiO1xyXG5pbXBvcnQgQ291cnNlcyBmcm9tIFwiLi4vQ291cnNlc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldENvdXJzZXNCeURlcGFydG1lbnQsXHJcbiAgYWRkQ291cnNlLFxyXG4gIHJlbW92ZUNvdXJzZSxcclxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL0FQSUhlbHBlclwiO1xyXG5pbXBvcnQgQWRkQ291cnNlIGZyb20gXCIuL0FkZENvdXJzZVwiO1xyXG5jb25zdCBFZGl0Q291cnNlTGlzdCA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BcIikuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9KTtcclxuICAvLyBTdGF0ZSBvZiB0aGUgY291cnNlcyBhbmQgZnVuY3Rpb24gdG8gc2V0IHRoZSBuZXcgc3RhdGUuXHJcbiAgY29uc3QgW3RoZUNvdXJzZSwgc2V0TmV3Q291cnNlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb3Vyc2VzOiBbXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW25ld0NvdXJzZSwgYWRkTmV3Q291cnNlXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgIHVzZXJpZDogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgeWVhcjogMCxcclxuICAgIHNlbWVzdGVyOiBcIlwiLFxyXG4gICAgY291cnNlTnVtYmVyOiBcIlwiLFxyXG4gICAgZGlzcGxheU5hbWU6IFwiXCIsXHJcbiAgICBkZXBhcnRtZW50OiBcIlwiLFxyXG4gIH0pO1xyXG4gIC8vIFN0YXRlIG9mIHRoZSBkZXBhcnRtZW50IGNob2ljZXMgYW5kIGZ1bmN0aW9uIHRvIHNldCB0aGUgbmV3IHN0YXRlLlxyXG4gIGNvbnN0IFt0aGVEZXBhcnRtZW50LCBzZXROZXdEZXBhcnRtZW50XSA9IHVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBcIkNTQ0VcIixcclxuICB9KTtcclxuXHJcbiAgLy8gR3JhYnMgdGhlIGNvdXJzZXMgYnkgZGVwYXJ0bWVudCBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICBjb25zdCBnZXROZXdDb3Vyc2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Q291cnNlTGlzdCA9IGF3YWl0IGdldENvdXJzZXNCeURlcGFydG1lbnQodGhlRGVwYXJ0bWVudC52YWx1ZSk7XHJcbiAgICBzZXROZXdDb3Vyc2VzKHtcclxuICAgICAgLi4udGhlQ291cnNlLFxyXG4gICAgICBjb3Vyc2VzOiBuZXdDb3Vyc2VMaXN0LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGVDb3Vyc2UuY291cnNlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKFxyXG4gICAgICB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBzdWJtaXQgdGhlc2UgY2hhbmdlcz9cIilcclxuICAgICkge1xyXG4gICAgICAvL1BPU1QgdGhlIGNvdXJzZSBsaXN0IGNoYW5nZSB0byB0aGUgZGIgaGVyZVxyXG4gICAgICBhbGVydChcIkNvdXJzZSBMaXN0IFVwZGF0ZWQhXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gU2V0cyB0aGUgZGVwYXJ0bWVudCBzdGF0ZSB0byB0aGUgdmFsdWUgb2YgdGhlIGRlcGFydG1lbnQgc2VsZWN0ZWQuXHJcbiAgY29uc3QgZHJvcERvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TmV3RGVwYXJ0bWVudCh7XHJcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBjb3Vyc2VMaXN0ID0gZmFrZURhdGEuY291cnNlcztcclxuICAvLyB2YXIgY3NlQ291cnNlcyA9IFtdO1xyXG4gIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgY291cnNlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgdmFyIG9iaiA9IHt9O1xyXG5cclxuICAvLyAgIG9ialtcIm5hbWVcIl0gPSBjb3Vyc2VMaXN0W2ldLmNvZGUgKyBcIiBcIiArIGNvdXJzZUxpc3RbaV0ubmFtZTtcclxuICAvLyAgIG9ialtcImlkXCJdID0gaTtcclxuICAvLyAgIGNzZUNvdXJzZXMucHVzaChvYmopO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlLCByZXNldF0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKGNzZUNvdXJzZXMpO1xyXG5cclxuICAvLyBjb25zdCBhZGRDb3Vyc2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICBzZXRDb3Vyc2VzKFtcclxuICAvLyAgICAgLi4uY291cnNlcyxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIGlkOiBjb3Vyc2VzLmxlbmd0aCxcclxuICAvLyAgICAgICBuYW1lOiBjb3Vyc2UsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICBdKTtcclxuICAvLyAgIHJlc2V0KCk7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgcmVtb3ZlQ291cnNlID0gKGlkKSA9PiB7XHJcbiAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgc2V0Q291cnNlcyhjb3Vyc2VzLmZpbHRlcigoY291cnMpID0+IGNvdXJzLmlkICE9PSBpZCkpO1xyXG4gIC8vIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXROZXdDb3Vyc2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5ld0NvdXJzZS5sYXN0TmFtZSAhPT0gXCJcIikge1xyXG4gICAgICBhZGRDb3Vyc2UoXHJcbiAgICAgICAgbmV3Q291cnNlLnVzZXJpZCxcclxuICAgICAgICBuZXdDb3Vyc2UuZmlyc3ROYW1lLFxyXG4gICAgICAgIG5ld0NvdXJzZS5sYXN0TmFtZSxcclxuICAgICAgICBuZXdDb3Vyc2UueWVhcixcclxuICAgICAgICBuZXdDb3Vyc2Uuc2VtZXN0ZXIsXHJcbiAgICAgICAgbmV3Q291cnNlLmNvdXJzZU51bWJlcixcclxuICAgICAgICBuZXdDb3Vyc2UuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgbmV3Q291cnNlLmRlcGFydG1lbnRcclxuICAgICAgKTtcclxuICAgICAgYWxlcnQoXCJOZXcgQ291cnNlIEFkZGVkXCIpO1xyXG4gICAgICBnZXROZXdDb3Vyc2VzKCk7XHJcbiAgICB9XHJcbiAgfSwgW25ld0NvdXJzZV0pO1xyXG4gIGNvbnNvbGUubG9nKG5ld0NvdXJzZSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckNvdXJzZSA9IHRoZUNvdXJzZS5jb3Vyc2VzLm1hcCgoY291cnMsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLy8gPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlcy1saXN0XCI+XHJcbiAgICAgIC8vICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT1cImNvdXJzZS1saXN0LWNhcmRcIj57Y291cnMubmFtZX08L0xpc3RJdGVtPlxyXG4gICAgICAvLyAgICAgICAgIDxJY29uQnV0dG9uIG1sPVwiMWVtXCIgaWNvbj1cImRlbGV0ZVwiIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlICcrY291cnMubmFtZSsnPycpKXtcclxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZW1vdmVDb3Vyc2UoY291cnMuaWQpXHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgIC8vICAgICAgICAgfX0+PC9JY29uQnV0dG9uPlxyXG4gICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgIC8vIDwvQm94PlxyXG4gICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgPENvdXJzZXNcclxuICAgICAgICAgIG1lbWJlcj17XHJcbiAgICAgICAgICAgIGNvdXJzLmRlcGFydG1lbnQgK1xyXG4gICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgIGNvdXJzLmNvdXJzZU51bWJlciArXHJcbiAgICAgICAgICAgIFwiXFxuXCIgK1xyXG4gICAgICAgICAgICBjb3Vycy5kaXNwbGF5TmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29sb3I9e2lkeCAlIDIgPT0gMCA/IFwiZ3JheS4zMDBcIiA6IFwiZ3JheS4xMDBcIn1cclxuICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgeWVhcj17Y291cnMueWVhcn1cclxuICAgICAgICAgIHNlbWVzdGVyPXtjb3Vycy5zZW1lc3Rlcn1cclxuICAgICAgICAgIGNvdXJzZU51bWJlcj17Y291cnMuY291cnNlTnVtYmVyfVxyXG4gICAgICAgICAgZGVwYXJ0bWVudD17Y291cnMuZGVwYXJ0bWVudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ0b3BcIj5cclxuICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj5FZGl0IENvdXJzZSBMaXN0PC9UZXh0PlxyXG4gICAgICA8Qm94IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtPVwiMWVtXCIgcD1cIjNlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlLWxpc3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIG10PVwiMWVtXCIgbWI9XCIxZW1cIiBmb250U2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgIFNlbGVjdCBEZXBhcnRtZW50XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8RmxleCBtYj1cIjJlbVwiPlxyXG4gICAgICAgICAgICA8U2VsZWN0IG1yPVwiMWVtXCIgd2lkdGg9XCI4MCVcIiBvbkNoYW5nZT17ZHJvcERvd25IYW5kbGVyfT5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NDRVwiPkNvbXB1dGVyIFNjaWVuY2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRUVOR1wiPkVuZ2luZWVyaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklUXCI+SW5mb3JtYXRpb24gVGVjaG5vbG9neTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Z2V0TmV3Q291cnNlc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgbXQ9XCIxZW1cIiBtYj1cIjFlbVwiIGZvbnRTaXplPVwibGdcIj5cclxuICAgICAgICAgICAgQ291cnNlc1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPExpc3Qgdz1cIjcwJVwiPntyZW5kZXJDb3Vyc2V9PC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1saXN0LWlucHV0XCI+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbXQ9XCIxcmVtXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbmV3IGNvdXJzZSAoaS5lLiBDU0NFIDM1MzAgQ29tcHV0ZXIgTmV0d29ya3MpXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmx1c2hlZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtjb3Vyc2V9XHJcbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e3NldENvdXJzZX1cclxuICAgICAgICAgICAgICB3PVwiMzBlbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXHJcbiAgICAgICAgICAgIGlzQWN0aXZlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBtdD1cIjEuNWVtXCJcclxuICAgICAgICAgICAgbWw9XCIxZW1cIlxyXG4gICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgIGljb249XCJhZGRcIlxyXG4gICAgICAgICAgICAvLyBvbkNsaWNrPXthZGRDb3Vyc2V9XHJcbiAgICAgICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICB7LyogPEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJncmVlblwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgICA8QWRkQ291cnNlIGFkZE5ld0NvdXJzZT17YWRkTmV3Q291cnNlfT48L0FkZENvdXJzZT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0Q291cnNlTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBTZWxlY3QsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IE91dGNvbWVMaXN0IGZyb20gXCIuLi9FZGl0Q291cnNlT3V0Y29tZXMvRWRpdE91dGNvbWVMaXN0XCI7XHJcbmltcG9ydCBcIi4vRWRpdENvdXJzZU91dGNvbWVzLmNzc1wiO1xyXG5pbXBvcnQgZmFrZURhdGEgZnJvbSBcIi4uLy4uLy4uL2Zha2UtZGF0YS9jb3Vyc2UuanNvblwiO1xyXG5cclxuY29uc3QgY291cnNlcyA9IGZha2VEYXRhLmNvdXJzZXM7XHJcblxyXG5jb25zb2xlLmxvZyhjb3Vyc2VzKTtcclxuXHJcbmNvbnN0IEVkaXRDb3Vyc2VPdXRjb21lcyA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BcIikuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW29wdGlvbiwgc2V0T3B0aW9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgaGFuZGxlU2V0T3B0aW9uID0gKGUpID0+IHtcclxuICAgIHNldE9wdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2cob3B0aW9uKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyT3B0aW9ucyA9IGNvdXJzZXMubWFwKChjb3Vyc2UsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG9wdGlvbiB2YWx1ZT17Y291cnNlLmNvZGV9IGtleT17aWR4fT5cclxuICAgICAgICB7Y291cnNlLmNvZGV9IHtjb3Vyc2UubmFtZX1cclxuICAgICAgPC9vcHRpb24+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZENvdXJzZSA9IGNvdXJzZXMuZmlsdGVyKChjb3Vyc2UpID0+IGNvdXJzZS5jb2RlID09IG9wdGlvbilbMF07XHJcblxyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkQ291cnNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJ0b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgICAgcm91bmRlZD1cImxnXCJcclxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgYmc9XCIjMzhBMTY5XCJcclxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMjBweFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvdXJzZVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIG10PVwiMWVtXCJcclxuICAgICAgICAgICAgaWQ9XCJjb3Vyc2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBjb3Vyc2VcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2V0T3B0aW9ufVxyXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogdGhpcyBzaG91bGQgYmUgZmlsbGVkIHdpdGggYSBsaXN0IG9mIGNvdXJzZXMgZnJvbSBkYiAqL31cclxuICAgICAgICAgICAge3JlbmRlck9wdGlvbnN9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge29wdGlvbiA/IDxPdXRjb21lTGlzdCBwcm9wPXtzZWxlY3RlZENvdXJzZX0gLz4gOiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdENvdXJzZU91dGNvbWVzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0LFxyXG4gIElucHV0LFxyXG4gIExpc3RJdGVtLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IHVzZUlucHV0U3RhdGUgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUlucHV0U3RhdGVcIjtcclxuaW1wb3J0IFwiLi9FZGl0Q291cnNlT3V0Y29tZXMuY3NzXCI7XHJcbmltcG9ydCBmYWtlRGF0YSBmcm9tIFwiLi4vLi4vLi4vZmFrZS1kYXRhL291dGNvbWVzLmpzb25cIjtcclxuXHJcbmNvbnN0IEVkaXRPdXRjb21lTGlzdCA9ICh7IHByb3AgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3ApO1xyXG4gIHZhciBzaG9ydE5hbWUgPSBwcm9wLmNvZGU7XHJcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3AubmFtZTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKFxyXG4gICAgICB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBzdWJtaXQgdGhlc2UgY2hhbmdlcz9cIilcclxuICAgICkge1xyXG4gICAgICAvL1BPU1QgdGhlIHByb2dyYW0gbGlzdCBjaGFuZ2UgdG8gdGhlIGRiIGhlcmVcclxuICAgICAgYWxlcnQoXHJcbiAgICAgICAgXCJDb3Vyc2Ugb3V0Y29tZXMgZm9yICdcIiArIHNob3J0TmFtZSArIFwiIFwiICsgY2xhc3NOYW1lICsgXCInIHVwZGF0ZWQhXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvdXRjb21lTGlzdCA9IGZha2VEYXRhLm91dGNvbWVzO1xyXG4gIHZhciBjb3Vyc2VPdXRjb21lcyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3V0Y29tZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzaG9ydE5hbWUgPT0gb3V0Y29tZUxpc3RbaV0uY29kZSkge1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG91dGNvbWVMaXN0W2ldLmNvdXJzZU91dGNvbWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgIG9ialtcIm5hbWVcIl0gPSBvdXRjb21lTGlzdFtpXS5jb3Vyc2VPdXRjb21lc1tqXTtcclxuICAgICAgICBvYmpbXCJpZFwiXSA9IGo7XHJcbiAgICAgICAgY291cnNlT3V0Y29tZXMucHVzaChvYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbb3V0Y29tZSwgc2V0T3V0Y29tZSwgcmVzZXRdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3V0Y29tZXMsIHNldE91dGNvbWVzXSA9IHVzZVN0YXRlKGNvdXJzZU91dGNvbWVzKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0T3V0Y29tZXMoY291cnNlT3V0Y29tZXMpO1xyXG4gIH0sIFtwcm9wXSk7XHJcblxyXG4gIGNvbnN0IGFkZE91dGNvbWUgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRPdXRjb21lcyhbXHJcbiAgICAgIC4uLm91dGNvbWVzLFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IG91dGNvbWVzLmxlbmd0aCxcclxuICAgICAgICBuYW1lOiBvdXRjb21lLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgICByZXNldCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZU91dGNvbWUgPSAoaWQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRPdXRjb21lcyhvdXRjb21lcy5maWx0ZXIoKG91dGMpID0+IG91dGMuaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyT3V0Y29tZSA9IG91dGNvbWVzLm1hcCgob3V0YywgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0Y29tZXMtbGlzdFwiPlxyXG4gICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT1cIm91dGNvbWUtbGlzdC1jYXJkXCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICB7b3V0Yy5uYW1lfVxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIG1sPVwiMWVtXCJcclxuICAgICAgICAgICAgaWNvbj1cImRlbGV0ZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jb25maXJtKFxyXG4gICAgICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUgb3V0Y29tZSBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0Yy5pZCArXHJcbiAgICAgICAgICAgICAgICAgICAgMSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCI/XCJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZU91dGNvbWUob3V0Yy5pZCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiPkVkaXQgQ291cnNlIE91dGNvbWUgTGlzdCBmb3Ige3Nob3J0TmFtZX0gPC9Cb3g+XHJcbiAgICAgIDxCb3ggYm9yZGVyV2lkdGg9XCIycHhcIiByb3VuZGVkPVwibGdcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbT1cIjFlbVwiIHA9XCIzZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGNvbWUtbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxMaXN0PntyZW5kZXJPdXRjb21lfTwvTGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGNvbWUtbGlzdC1pbnB1dFwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2FkZE91dGNvbWV9PlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBtdD1cIjFyZW1cIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgYSBuZXcgY291cnNlIG91dGNvbWVcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJmbHVzaGVkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e291dGNvbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldE91dGNvbWV9XHJcbiAgICAgICAgICAgICAgdz1cIjMwZW1cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxyXG4gICAgICAgICAgICBpc0FjdGl2ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgbXQ9XCIxLjVlbVwiXHJcbiAgICAgICAgICAgIG1sPVwiMWVtXCJcclxuICAgICAgICAgICAgdmFyaWFudENvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICBpY29uPVwiYWRkXCJcclxuICAgICAgICAgICAgb25DbGljaz17YWRkT3V0Y29tZX1cclxuICAgICAgICAgID48L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJncmVlblwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRPdXRjb21lTGlzdDtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFNlbGVjdH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcclxuaW1wb3J0IHsgRmxleCwgRm9ybUxhYmVsIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlVG9nZ2xlJztcclxuaW1wb3J0IHVzZUlucHV0U3RhdGUgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlSW5wdXRTdGF0ZSc7XHJcblxyXG5jb25zdCBBZGRGYWN1bHR5TWVtYmVyID0gKHtzZXROZXdGYWN1bHR5fSkgPT4gXHJcbntcclxuXHJcbiAgICBjb25zdCBmYWN1bHR5VHlwZXMgPSBbXCJmdWxsVGltZVwiLCBcImFkanVuY3RzXCIsIFwiZmVsbG93c1wiXTtcclxuICAgIFxyXG4gICAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbSUQsIHNldElEXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBbaXNFZGRpdGluZywgdG9nZ2xlRWRkaXRpbmddID0gdXNlVG9nZ2xlKCk7XHJcblxyXG4gICAgY29uc3QgYWRkRmFjdWx0eSA9ICgpID0+IHtcclxuICAgICAgICBzZXROZXdGYWN1bHR5KHtcclxuICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgdW50SUQ6IElELFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRvZ2dsZUVkZGl0aW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXNFZGRpdGluZyA/IFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkZhY3VsdHkgVHlwZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHlwZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG1yPVwiMWVtXCIgdmFsdWU9e2ZhY3VsdHlUeXBlc1swXX0gPkludHJ1Y3Rvci9Db29yZGluYXRvcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXtmYWN1bHR5VHlwZXNbMV19PkFkanVuY3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbXI9XCIxZW1cIiB2YWx1ZT17ZmFjdWx0eVR5cGVzWzJdfT5UZWFjaGluZyBGZWxsb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5MYXN0IE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHc9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRMYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5GaXJzdCBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPklEPC9Gb3JtTGFiZWw+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdz1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldElEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYW50Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG10PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkRmFjdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBOZXcgRmFjdWx0eVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgb25DbGljaz17dG9nZ2xlRWRkaXRpbmd9PkFkZCBGYWN1bHR5IE1lbWJlcjwvQnV0dG9uPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkRmFjdWx0eU1lbWJlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBUZXh0LFxyXG4gIEJ1dHRvbixcclxuICBJY29uQnV0dG9uLFxyXG4gIExpc3QsXHJcbiAgSW5wdXQsXHJcbiAgTGlzdEl0ZW0sXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgdXNlSW5wdXRTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlSW5wdXRTdGF0ZVwiO1xyXG5pbXBvcnQgXCIuL0VkaXRGYWN1bHR5TGlzdC5jc3NcIjtcclxuaW1wb3J0IEZhY3VsdHlNZW1iZXIgZnJvbSBcIi4uLy4uL2FkbWluLWNvbXBvbmVudHMvRmFjdWx0eU1lbWJlclwiO1xyXG5pbXBvcnQgc29ydEJ5TGFzdE5hbWUgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NvcnRCeUxhc3ROYW1lXCI7XHJcbmltcG9ydCB7IGdldEZhY3VsdHlMaXN0LCBhZGRGYWN1bHR5TWVtYmVyIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9BUElIZWxwZXJcIjtcclxuaW1wb3J0IEFkZEZhY3VsdHlNZW1iZXIgZnJvbSBcIi4vQWRkRmFjdWx0eU1lbWJlclwiO1xyXG5cclxuY29uc3QgRWRpdEZhY3VsdHlMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmYWN1bHR5LCBzZXRGYWN1bHR5XSA9IHVzZVN0YXRlKHtcclxuICAgIGZ1bGxUaW1lOiBbXSxcclxuICAgIGFkanVuY3RzOiBbXSxcclxuICAgIGZlbGxvd3M6IFtdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbbmV3RmFjdWx0eSwgc2V0TmV3RmFjdWx0eV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgIHVudElEOiBcIlwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0RmFjdWx0eSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGZhY3VsdHlMaXN0ID0gYXdhaXQgZ2V0RmFjdWx0eUxpc3QoKTtcclxuICAgIGNvbnNvbGUubG9nKGZhY3VsdHlMaXN0KTtcclxuICAgIHNldEZhY3VsdHkoe1xyXG4gICAgICAuLi5mYWN1bHR5LFxyXG4gICAgICBmdWxsVGltZTogZmFjdWx0eUxpc3QuZnVsbFRpbWUsXHJcbiAgICAgIGFkanVuY3RzOiBmYWN1bHR5TGlzdC5hZGp1bmN0cyxcclxuICAgICAgZmVsbG93czogZmFjdWx0eUxpc3QuZmVsbG93cyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRGYWN1bHR5KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5ld0ZhY3VsdHkubGFzdE5hbWUgIT09IFwiXCIpIHtcclxuICAgICAgYWRkRmFjdWx0eU1lbWJlcihcclxuICAgICAgICBuZXdGYWN1bHR5Lmxhc3ROYW1lLFxyXG4gICAgICAgIG5ld0ZhY3VsdHkuZmlyc3ROYW1lLFxyXG4gICAgICAgIG5ld0ZhY3VsdHkudW50SUQsXHJcbiAgICAgICAgbmV3RmFjdWx0eS50eXBlXHJcbiAgICAgICk7XHJcbiAgICAgIGFsZXJ0KFwiTmV3IEZhY3VsdHkgQWRkZWRcIik7XHJcbiAgICAgIGdldEZhY3VsdHkoKTtcclxuICAgIH1cclxuICB9LCBbbmV3RmFjdWx0eV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIHN1Ym1pdCB0aGVzZSBjaGFuZ2VzP1wiKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vUE9TVCB0aGUgZmFjdWx0eSBsaXN0IGNoYW5nZSB0byB0aGUgZGIgaGVyZVxyXG4gICAgICBhbGVydChcIkZhY3VsdHkgTGlzdCBVcGRhdGVkIVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBmYWN1bHR5TGlzdCA9IGZha2VEYXRhLmZhY3VsdHk7XHJcbiAgLy8gY29uc3QgYWRqdW5jdExpc3QgPSBmYWtlRGF0YS5hZGp1bmN0RmFjdWx0eTtcclxuICAvLyBjb25zdCBmZWxsb3dzTGlzdCA9IGZha2VEYXRhLnRlYWNoaW5nRmVsbG93cztcclxuICAvLyBzb3J0QnlMYXN0TmFtZShmYWN1bHR5TGlzdCk7XHJcbiAgLy8gc29ydEJ5TGFzdE5hbWUoYWRqdW5jdExpc3QpO1xyXG4gIC8vIHNvcnRCeUxhc3ROYW1lKGZlbGxvd3NMaXN0KTtcclxuICAvLyB2YXIgY3NlRmFjdWx0eSA9IFtdO1xyXG4gIC8vIGZvciAodmFyIGkgPSAwOyBpPCBmYWN1bHR5TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgICB2YXIgb2JqID0ge307XHJcblxyXG4gIC8vICAgICBvYmpbJ25hbWUnXSA9IGZhY3VsdHlMaXN0W2ldO1xyXG4gIC8vICAgICBvYmpbJ2lkJ10gPSBpO1xyXG4gIC8vICAgICBjc2VGYWN1bHR5LnB1c2gob2JqKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHZhciBhZGp1bmN0ID0gW107XHJcbiAgLy8gZm9yICh2YXIgaSA9IDA7IGk8IGFkanVuY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICAgIHZhciBvYmogPSB7fTtcclxuXHJcbiAgLy8gICAgIG9ialsnbmFtZSddID0gZmFjdWx0eUxpc3RbaV07XHJcbiAgLy8gICAgIG9ialsnaWQnXSA9IGk7XHJcbiAgLy8gICAgIGFkanVuY3QucHVzaChvYmopO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdmFyIGZlbGxvd3MgPSBbXTtcclxuICAvLyBmb3IgKHZhciBpID0gMDsgaTwgZmVsbG93c0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgICAgdmFyIG9iaiA9IHt9O1xyXG5cclxuICAvLyAgICAgb2JqWyduYW1lJ10gPSBmYWN1bHR5TGlzdFtpXTtcclxuICAvLyAgICAgb2JqWydpZCddID0gaTtcclxuICAvLyAgICAgZmVsbG93cy5wdXNoKG9iaik7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBbZmFjdWx0eSwgc2V0RmFjdWx0eSwgcmVzZXRdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICAvLyBjb25zdCBbZmFjdWx0eU1lbWJlcnMsIHNldEZhY3VsdHlNZW1iZXJzXSA9IHVzZVN0YXRlKGNzZUZhY3VsdHkpO1xyXG4gIC8vIGNvbnN0IFthZGp1bmN0TWVtYmVycywgc2V0QWRqdW5jdE1lbWJlcnNdID0gdXNlU3RhdGUoYWRqdW5jdCk7XHJcbiAgLy8gY29uc3QgW2ZlbGxvd01lbWJlcnMsIHNldEZlbGxvd01lbWJlcnNdID0gdXNlU3RhdGUoZmVsbG93cyk7XHJcblxyXG4gIC8vIGNvbnN0IGFkZEZhY3VsdHkgPSBldmVudCA9PiB7XHJcbiAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICAgIHNldEZhY3VsdHlNZW1iZXJzKFtcclxuICAvLyAgICAgICAgIC4uLmZhY3VsdHlNZW1iZXJzLFxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgIGlkOiBmYWN1bHR5TWVtYmVycy5sZW5ndGgsXHJcbiAgLy8gICAgICAgICAgICAgbmFtZTogZmFjdWx0eSxcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgXSk7XHJcbiAgLy8gICAgIHJlc2V0KCk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCByZW1vdmVGYWN1bHR5ID0gKGlkKSA9PiB7XHJcbiAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICAgIHNldEZhY3VsdHlNZW1iZXJzKGZhY3VsdHlNZW1iZXJzLmZpbHRlcihmYWMgPT4gZmFjLmlkICE9PSBpZCkpO1xyXG4gIC8vIH1cclxuXHJcbiAgLypcclxuICBjb25zdCBlZGl0RmFjdWx0eSA9IChmaXJzdCwgbGFzdCwgZmFjSUQsIHR5cGUpID0+IHtcclxuICAgIHNldEZhY3VsdHkoXHJcbiAgICAgIHsuLi5mYWN1bHR5LCBmYWN1bHR5W3R5cGVdOiBtYXAoKGZtKSA9PlxyXG4gICAgICAgICh7Zm0uaWQgPT09IGZhY0lEID8geyAuLi5mbSwgbGFzdE5hbWU6IGxhc3QsIGZpcnN0TmFtZTogZmlyc3QgfX0pKX1cclxuICAgICAgKTtcclxuICB9O1xyXG4gICovXHJcblxyXG4gIGNvbnN0IHJlbmRlckZhY3VsdHkgPSBmYWN1bHR5LmZ1bGxUaW1lLm1hcCgoZmFjLCBpZHgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICA8RmFjdWx0eU1lbWJlclxyXG4gICAgICAgICAgbWVtYmVyPXtmYWMuZmlyc3ROYW1lICsgXCIgXCIgKyBmYWMubGFzdE5hbWV9XHJcbiAgICAgICAgICBpZD17ZmFjLmlkfVxyXG4gICAgICAgICAgLy9lZGl0PXtlZGl0RmFjdWx0eX1cclxuICAgICAgICAgIGNvbG9yPXtpZHggJSAyID09IDAgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuMTAwXCJ9XHJcbiAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQWRqdW5jdCA9IGZhY3VsdHkuYWRqdW5jdHMubWFwKChmYWMsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgIDxGYWN1bHR5TWVtYmVyXHJcbiAgICAgICAgICBtZW1iZXI9e2ZhYy5maXJzdE5hbWUgKyBcIiBcIiArIGZhYy5sYXN0TmFtZX1cclxuICAgICAgICAgIGlkPXtmYWMuaWR9XHJcbiAgICAgICAgICBlZGl0PXtlZGl0RmFjdWx0eX1cclxuICAgICAgICAgIGNvbG9yPXtpZHggJSAyID09IDAgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuMTAwXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckZlbGxvd3MgPSBmYWN1bHR5LmZlbGxvd3MubWFwKChmYWMsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgIDxGYWN1bHR5TWVtYmVyXHJcbiAgICAgICAgICBtZW1iZXI9e2ZhYy5maXJzdE5hbWUgKyBcIiBcIiArIGZhYy5sYXN0TmFtZX1cclxuICAgICAgICAgIGlkPXtmYWMuaWR9XHJcbiAgICAgICAgICBlZGl0PXtlZGl0RmFjdWx0eX1cclxuICAgICAgICAgIGNvbG9yPXtpZHggJSAyID09IDAgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuMTAwXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidG9wXCI+XHJcbiAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+RWRpdCBGYWN1bHR5IExpc3Q8L1RleHQ+XHJcbiAgICAgIDxCb3ggYWxpZ25JdGVtcz1cImNlbnRlclwiIG09XCIxZW1cIiBwPVwiM2VtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWN1bHR5LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBtdD1cIjFlbVwiIG1iPVwiMWVtXCIgZm9udFNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICBJbnN0cnVjdG9ycy9Db29yZGluYXRvcnNcclxuICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICA8TGlzdCB3PVwiNzAlXCI+e3JlbmRlckZhY3VsdHl9PC9MaXN0PlxyXG4gICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBtdD1cIjFlbVwiIG1iPVwiMWVtXCIgZm9udFNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICBBZGp1bmN0IEZhY3VsdHlcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxMaXN0IHc9XCI3MCVcIj57cmVuZGVyQWRqdW5jdH08L0xpc3Q+XHJcbiAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIG10PVwiMWVtXCIgbWI9XCIxZW1cIiBmb250U2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgIFRlYWNoaW5nIEZlbGxvd3NcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxMaXN0IHc9XCI3MCVcIj57cmVuZGVyRmVsbG93c308L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEFkZEZhY3VsdHlNZW1iZXIgc2V0TmV3RmFjdWx0eT17c2V0TmV3RmFjdWx0eX0gLz5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmYWMtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7YWRkRmFjdWx0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG10PVwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgYSBuZXcgZmFjdWx0eSBtZW1iZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZsdXNoZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZhY3VsdHl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0RmFjdWx0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdz0nMTRlbSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10PVwiMS41ZW1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sPVwiMWVtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJncmVlblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc20nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRGYWN1bHR5fT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudENvbG9yPVwiZ3JlZW5cIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0RmFjdWx0eUxpc3Q7XHJcbiIsImltcG9ydCB7SW5wdXR9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XHJcbmltcG9ydCB1c2VJbnB1dFN0YXRlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUlucHV0U3RhdGUnO1xyXG5cclxuY29uc3QgRWRpdEZhY3VsdHlNZW1iZXIgPSAoe2VkaXQsIGlkfSkgPT4ge1xyXG4gICAgY29uc3QgW25ld05hbWUsIHNldE5ld05hbWVdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBlZGl0TmFtZSA9ICgpID0+IHtcclxuICAgICAgICBlZGl0KG5ld05hbWUsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgb25TdWJtaXQgPSB7ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlZGl0KCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdOYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldE5ld05hbWV9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQgPSB7ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXROYW1lKG5ld05hbWUsIGlkKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRGYWN1bHR5TWVtYmVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFNlbGVjdCxcclxuICBCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0LFxyXG4gIElucHV0LFxyXG4gIFRleHQsXHJcbiAgTGlzdEl0ZW0sXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgdXNlSW5wdXRTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlSW5wdXRTdGF0ZVwiO1xyXG5pbXBvcnQgXCIuL0VkaXRQcm9ncmFtTGlzdC5jc3NcIjtcclxuaW1wb3J0IGZha2VEYXRhIGZyb20gXCIuLi8uLi8uLi9mYWtlLWRhdGEvcHJvZ3JhbXMuanNvblwiO1xyXG5pbXBvcnQgRmFjdWx0eU1lbWJlciBmcm9tIFwiLi4vLi4vYWRtaW4tY29tcG9uZW50cy9GYWN1bHR5TWVtYmVyXCI7XHJcblxyXG5jb25zdCBFZGl0UHJvZ3JhbUxpc3QgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wXCIpLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChcclxuICAgICAgd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gc3VibWl0IHRoZXNlIGNoYW5nZXM/XCIpXHJcbiAgICApIHtcclxuICAgICAgLy9QT1NUIHRoZSBwcm9ncmFtIGxpc3QgY2hhbmdlIHRvIHRoZSBkYiBoZXJlXHJcbiAgICAgIGFsZXJ0KFwiUHJvZ3JhbSBMaXN0IFVwZGF0ZWQhXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByb2dyYW1MaXN0ID0gZmFrZURhdGEucHJvZ3JhbXM7XHJcbiAgdmFyIGNzZVByb2dyYW1zID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9ncmFtTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIG9iaiA9IHt9O1xyXG5cclxuICAgIG9ialtcIm5hbWVcIl0gPSBwcm9ncmFtTGlzdFtpXTtcclxuICAgIG9ialtcImlkXCJdID0gaTtcclxuICAgIGNzZVByb2dyYW1zLnB1c2gob2JqKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtwcm9ncmFtLCBzZXRQcm9ncmFtLCByZXNldF0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9ncmFtcywgc2V0UHJvZ3JhbXNdID0gdXNlU3RhdGUoY3NlUHJvZ3JhbXMpO1xyXG5cclxuICBjb25zdCBhZGRQcm9ncmFtID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0UHJvZ3JhbXMoW1xyXG4gICAgICAuLi5wcm9ncmFtcyxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBwcm9ncmFtcy5sZW5ndGgsXHJcbiAgICAgICAgbmFtZTogcHJvZ3JhbSxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG4gICAgcmVzZXQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVQcm9ncmFtID0gKGlkKSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0UHJvZ3JhbXMocHJvZ3JhbXMuZmlsdGVyKChwcm9nKSA9PiBwcm9nLmlkICE9PSBpZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclByb2dyYW0gPSBwcm9ncmFtcy5tYXAoKHByb2csIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLy8gPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3JhbVwiPlxyXG4gICAgICAvLyAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9XCJwcm9ncmFtLWNhcmRcIj57cHJvZy5uYW1lfTwvTGlzdEl0ZW0+XHJcbiAgICAgIC8vICAgICAgICAgPEljb25CdXR0b24gbWw9XCIxZW1cIiBpY29uPVwiZGVsZXRlXCIgb25DbGljaz17KGUpPT57XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAod2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBkZWxldGUgJytwcm9nLm5hbWUrJz8nKSl7XHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJvZ3JhbShwcm9nLmlkKVxyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAvLyAgICAgICAgIH19PjwvSWNvbkJ1dHRvbj5cclxuICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAvLyA8L0JveD5cclxuICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgIDxGYWN1bHR5TWVtYmVyXHJcbiAgICAgICAgICBtZW1iZXI9e3Byb2cubmFtZX1cclxuICAgICAgICAgIGlkPXtwcm9nLmlkfVxyXG4gICAgICAgICAgY29sb3I9e2lkeCAlIDIgPT0gMCA/IFwiZ3JheS4zMDBcIiA6IFwiZ3JheS4xMDBcIn1cclxuICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInRvcFwiPlxyXG4gICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiPkVkaXQgUHJvZ3JhbSBMaXN0PC9UZXh0PlxyXG4gICAgICA8Qm94IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtPVwiMWVtXCIgcD1cIjNlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3JhbS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgbXQ9XCIxZW1cIiBtYj1cIjFlbVwiIGZvbnRTaXplPVwibGdcIj5cclxuICAgICAgICAgICAgUHJvZ3JhbXNcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxMaXN0IHc9XCI3MCVcIj57cmVuZGVyUHJvZ3JhbX08L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmFtLWlucHV0XCI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkUHJvZ3JhbX0+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG10PVwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBhIG5ldyBwcm9ncmFtXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmx1c2hlZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9ncmFtfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRQcm9ncmFtfVxyXG4gICAgICAgICAgICAgIHc9XCIxNGVtXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcclxuICAgICAgICAgICAgaXNBY3RpdmU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIG10PVwiMS41ZW1cIlxyXG4gICAgICAgICAgICBtbD1cIjFlbVwiXHJcbiAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgaWNvbj1cImFkZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFByb2dyYW19XHJcbiAgICAgICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudENvbG9yPVwiZ3JlZW5cIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZ3JhbUxpc3Q7XHJcbiIsImltcG9ydCB7R3JpZCwgR3JpZEl0ZW0sIFRleHR9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tICcuLi8uLi9ob29rcy91c2VUb2dnbGUnO1xyXG5pbXBvcnQgRWRpdEZhY3VsdHlNZW1iZXIgZnJvbSAnLi4vYWRtaW4tY29tcG9uZW50cy9FZGl0RmFjdWx0eUxpc3QvRWRpdEZhY3VsdHlNZW1iZXInO1xyXG5cclxuY29uc3QgRmFjdWx0eU1lbWJlciA9ICh7IG1lbWJlciwgaWQsIGNvbG9yLCBlZGl0IH0pID0+IHtcclxuICAgIGNvbnN0IFtpc0VkaXRpbmcsIHRvZ2dsZV0gPSB1c2VUb2dnbGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMiwgMWZyKVwiXHJcbiAgICAgICAgICAgIGJnPXtjb2xvcn1cclxuICAgICAgICAgICAgcGFkZGluZz1cIi41ZW1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2lzRWRpdGluZyA/IDxFZGl0RmFjdWx0eU1lbWJlciBlZGl0PXtlZGl0fSBpZD17aWR9Lz4gOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICByb3dTcGFuPXsyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PnttZW1iZXJ9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0b2dnbGUoKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWN1bHR5TWVtYmVyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgU2VsZWN0LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBcIi4vRnVsbFJlcG9ydC5jc3NcIjtcclxuaW1wb3J0IGZha2VEYXRhIGZyb20gXCIuLi8uLi8uLi9mYWtlLWRhdGEvY291cnNlLmpzb25cIjtcclxuXHJcbmNvbnN0IEZ1bGxSZXBvcnQgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wXCIpLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvdXJzZUxpc3QgPSBmYWtlRGF0YS5jb3Vyc2VzO1xyXG4gIGNvbnN0IHJlbmRlckNvdXJzZXMgPSBjb3Vyc2VMaXN0Lm1hcCgoY291cnNlcywgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8b3B0aW9uIHZhbHVlPXtjb3Vyc2VzLmNvZGV9IGtleT17aWR4fT5cclxuICAgICAgICB7Y291cnNlcy5jb2RlfSB7Y291cnNlcy5uYW1lfVxyXG4gICAgICA8L29wdGlvbj5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidG9wXCI+XHJcbiAgICAgIDxCb3ggYm9yZGVyV2lkdGg9XCIycHhcIiByb3VuZGVkPVwibGdcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbT1cIjFlbVwiIHA9XCIzZW1cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgICBTZWxlY3QgdGhlIGNvdXJzZSwgdGVybSwgYW5kIHllYXIgZm9yIHRoZSByZXBvcnQgeW91IHdvdWxkIGxpa2UgdG9cclxuICAgICAgICAgICAgZ2VuZXJhdGUuXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxTZWxlY3QgbXQ9XCIxZW1cIiBpZD1cImNvdXJzZVwiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGNvdXJzZVwiPlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJDb3Vyc2VzfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgIDxTZWxlY3QgbXQ9XCIxZW1cIiBpZD1cInRlcm1cIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCB0ZXJtXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNwcmluZ1wiPlNwcmluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdW1tZXJcIj5TdW1tZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmFsbFwiPkZhbGw8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICA8U2VsZWN0IG10PVwiMWVtXCIgaWQ9XCJ5ZWFyXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgeWVhclwiPlxyXG4gICAgICAgICAgICAgIHsvKiBzaG91bGQgYmUgZmlsbGVkIHdpdGggYSBsaXN0IG9mIHllYXJzIGZyb20gZGIgKi99XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjFcIj4yMDIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjJcIj4yMDE5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj4yMDE4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj4yMDE3PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj4yMDE2PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj4yMDE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj4yMDE0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj4yMDEzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj4yMDEyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj4yMDExPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wdGlvbjNcIj4yMDEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cclxuICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGdWxsUmVwb3J0O1xyXG4iLCJpbXBvcnQgQ291cnNlQ2FyZCBmcm9tIFwiLi4vLi4vaW5zdHJ1Y3Rvci1jb21wb25lbnRzL0NvdXJzZUNhcmRcIjtcclxuaW1wb3J0IHsgVGV4dCwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5jb25zdCBDb3Vyc2VMaXN0ID0gKHsgY291cnNlcywgaWR4IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhjb3Vyc2VzKTtcclxuICBjb25zdCByZW5kZXJDb3Vyc2VzID1cclxuICAgIGNvdXJzZXMgIT0gbnVsbCA/IChcclxuICAgICAgY291cnNlcy5tYXAoKGNvdXJzZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGNvdXJzZSwgc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvdXJzZT0ke2NvdXJzZX07IHBhdGg9L2A7XHJcbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgc2VjdGlvbj0ke3NlY3Rpb259OyBwYXRoPS9gO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb3Vyc2VDYXJkXHJcbiAgICAgICAgICAgICAgY29kZT17Y291cnNlLmNvdXJzZU51bWJlcn1cclxuICAgICAgICAgICAgICBzZWN0aW9uPXtjb3Vyc2Uuc2VjdGlvbk51bWJlcn1cclxuICAgICAgICAgICAgICBpbnN0cnVjdG9yPXtjb3Vyc2UuaW5zdHJ1Y3Rvcn1cclxuICAgICAgICAgICAgICBjb29yZGluYXRvcj17Y291cnNlLmNvb3JkaW5hdG9yfVxyXG4gICAgICAgICAgICAgIG5hbWU9e2NvdXJzZS5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvZm9ybUNvbXBsZXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXJzZS5pc0NvdXJzZUNvbXBsZXRlZCA/IDxCdXR0b24gZm9udFdlaWdodD1cImJvbGRcIiByaWdodEljb249XCJjaGVja1wiIHZhcmlhbnRDb2xvcj1cInRlYWxcIiBtdD1cIjFlbVwiIGlzRGlzYWJsZWQ9XCJ0cnVlXCIgdz1cIjEwMCVcIiBzaXplPVwic21cIj5Gb3JtIENvbXBsZXRlPC9CdXR0b24+IDogPEJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50Q29sb3I9XCJncmVlblwiIG10PVwiMWVtXCIgdz1cIjEwMCVcIiBzaXplPVwic21cIiBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCd0ZXN0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfT5Xb3JrIE9uIEFCRVQgRm9ybTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICBtdD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgdz1cIjIwJVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2soY291cnNlLmNvdXJzZU51bWJlciwgY291cnNlLnNlY3Rpb25OdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VjdGlvblJlcG9ydFwiKTtcclxuICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Zvcm1Db21wbGV0aW9uJztcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgVmlldyBBQkVUIFJlcG9ydFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICApIDogKFxyXG4gICAgICA8VGV4dD5jb3Vyc2VzIG5vdCBmb3VuZDwvVGV4dD5cclxuICAgICk7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXMtZ3JpZFwiPntyZW5kZXJDb3Vyc2VzfTwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZUxpc3Q7XHJcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIFNlbGVjdCwgVGV4dCwgQm94fSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtnZXRBbGxDb3Vyc2VzLCBnZXRJbnN0cnVjdG9yQ291cnNlc30gZnJvbSAnLi4vLi4vLi4vYXBpL0FQSUhlbHBlcic7XHJcbmltcG9ydCBDb3Vyc2VMaXN0IGZyb20gJy4vQ291cnNlTGlzdCc7XHJcblxyXG5jb25zdCBHZW5lcmF0ZVNpbXBsZVJlcG9ydCA9ICh7dXNlcn0pID0+IHtcclxuICAgIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZW1lc3RlcjonJyxcclxuICAgICAgICB5ZWFyOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgdGVybXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZW1lc3RlcjonU3ByaW5nJyxcclxuICAgICAgICAgICAgeWVhcjogMjAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZW1lc3RlcjonU3VtbWVyJyxcclxuICAgICAgICAgICAgeWVhcjogMjAyMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZW1lc3RlcjonRmFsbCcsXHJcbiAgICAgICAgICAgIHllYXI6IDIwMjBcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgY29uc3QgaGFuZGxlU2V0VGVybSA9IGFzeW5jIChlKSA9PntcclxuICAgICAgICBzZXRUZXJtKHsgXHJcbiAgICAgICAgICAgIHNlbWVzdGVyOiBlLnRhcmdldC52YWx1ZS5zcGxpdCgnICcpWzBdLFxyXG4gICAgICAgICAgICB5ZWFyOiBlLnRhcmdldC52YWx1ZS5zcGxpdCgnICcpWzFdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZS5zcGxpdCgnICcpWzFdKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZXJtLnllYXIpO1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZXNSZXMgPSBhd2FpdCBnZXRBbGxDb3Vyc2VzKHVzZXIsIFwiZmFsbFwiLCAyMDIwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3Vyc2VzUmVzKTtcclxuICAgICAgICBzZXRDb3Vyc2VzKGNvdXJzZXNSZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBib3JkZXJXaWR0aD1cIjJweFwiIHJvdW5kZWQ9XCJsZ1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtPVwiMWVtXCIgcD1cIjNlbVwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPVwibGdcIiBtYj1cIjFlbVwiPkZpbmQgQUJFVCBSZXBvcnQ8L1RleHQ+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICh0ZXJtLnllYXIgPT0gbnVsbCkgPyBcclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJDaG9vc2UgU2VtZXN0ZXJcIiB3PVwiNzAlXCIgbT1cIjAgYXV0b1wiIG9uQ2hhbmdlPXtoYW5kbGVTZXRUZXJtfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt0ZXJtc1swXS5zZW1lc3RlciArIFwiIFwiICsgdGVybXNbMF0ueWVhci50b1N0cmluZygxMCl9Pnt0ZXJtc1swXS5zZW1lc3Rlcn0ge3Rlcm1zWzBdLnllYXJ9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybXNbMV0uc2VtZXN0ZXIgKyBcIiBcIiArIHRlcm1zWzFdLnllYXIudG9TdHJpbmcoMTApfT57dGVybXNbMV0uc2VtZXN0ZXJ9IHt0ZXJtc1sxXS55ZWFyfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3Rlcm1zWzJdLnNlbWVzdGVyICsgXCIgXCIgKyB0ZXJtc1syXS55ZWFyLnRvU3RyaW5nKDEwKX0+e3Rlcm1zWzJdLnNlbWVzdGVyfSB7dGVybXNbMl0ueWVhcn08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+e3Rlcm0uc2VtZXN0ZXJ9IHt0ZXJtLnllYXJ9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb3Vyc2VMaXN0IGNvdXJzZXM9e2NvdXJzZXN9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0ZVNpbXBsZVJlcG9ydDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBUZXh0LFxyXG4gIFNlbGVjdCxcclxuICBCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0LFxyXG4gIElucHV0LFxyXG4gIExpc3RJdGVtLFxyXG4gIEZsZXgsXHJcbiAgUmFkaW9Hcm91cCxcclxuICBTdGFjayxcclxuICBSYWRpbyxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCB7IGdldENvdXJzZXNCeURlcGFydG1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vYXBpL0FQSUhlbHBlclwiO1xyXG5pbXBvcnQgeyBsaXN0UGFyc2VyIH0gZnJvbSBcIkBjaGFrcmEtdWkvc3R5bGVkLXN5c3RlbVwiO1xyXG5jb25zdCBHZW5lcmF0ZVN0dWRlbnRTdXJ2ZXlzID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcFwiKS5zY3JvbGxJbnRvVmlldygpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkcm9wRG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2NvdXJzZUxpc3QsIHNldENvdXJzZXNdID0gdXNlU3RhdGUoeyBjb3Vyc2VzOiBbXSB9KTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiMVwiKTtcclxuICBjb25zdCBnZXROZXdDb3Vyc2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Q291cnNlTGlzdCA9IGF3YWl0IGdldENvdXJzZXNCeURlcGFydG1lbnQoXCJDU0NFXCIpO1xyXG4gICAgc2V0Q291cnNlcyh7XHJcbiAgICAgIC4uLmNvdXJzZUxpc3QsXHJcbiAgICAgIGNvdXJzZXM6IG5ld0NvdXJzZUxpc3QsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGNvdXJzZUxpc3QuY291cnNlcyk7XHJcbiAgfTtcclxuICBjb25zdCBzdXJ2ZXlDb3Vyc2VzID0gW11cclxuICAgIC5jb25jYXQoY291cnNlTGlzdC5jb3Vyc2VzKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IChhLmNvdXJzZU51bWJlciA+IGIuY291cnNlTnVtYmVyID8gMSA6IC0xKSlcclxuICAgIC5tYXAoKGNvdXJzZSwgaWR4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICB7Y291cnNlLmRlcGFydG1lbnR9IHtjb3Vyc2UuY291cnNlTnVtYmVyfS57Y291cnNlLnNlY3Rpb25OdW1iZXJ9e1wiIFwifVxyXG4gICAgICAgICAge2NvdXJzZS5kaXNwbGF5TmFtZX17XCIgXCJ9XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudW50LmVkdS9cIj5TdHVkZW50IFN1cnZleSBMaW5rPC9hPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldE5ld0NvdXJzZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidG9wXCI+XHJcbiAgICAgIDxCb3ggYm9yZGVyV2lkdGg9XCIycHhcIiByb3VuZGVkPVwibGdcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbT1cIjFlbVwiIHA9XCIzZW1cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT1cImxnXCIgbWI9XCIxZW1cIj5cclxuICAgICAgICAgICAgICBHZW5lcmF0ZSBTdHVkZW50IFN1cnZleXNcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICB7Lyo8RmxleCBtYj1cIjJlbVwiPlxyXG4gICAgICAgICAgICAgPFJhZGlvR3JvdXAgb25DIGRlZmF1bHRWYWx1ZT1cIlNCQ1wiPlxyXG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiU0JJXCIgY29sb3JTY2hlbWU9XCJncmVlblwiPkluc3RydWN0b3I8L1JhZGlvPlxyXG4gICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIlNCQ1wiY29sb3JTY2hlbWU9XCJncmVlblwiPkNvdXJzZXM8L1JhZGlvPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgIDwvUmFkaW9Hcm91cD4gXHJcbiAgXHJcbiAgICAgICAgICAvLyA8L0ZsZXg+ICovfVxyXG4gICAgICAgICAgICA8UmFkaW9Hcm91cCBkZWZhdWx0VmFsdWU9XCIyXCI+XHJcbiAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezV9IGRpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvIGNvbG9yU2NoZW1lPVwiZ2VlblwiIHZhbHVlPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICBDb3Vyc2VzXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiB2YWx1ZT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgSW5zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICAgIHtzdXJ2ZXlDb3Vyc2VzfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVTdHVkZW50U3VydmV5cztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFNlbGVjdCxcclxuICBCdXR0b24sXHJcbiAgVGV4dCxcclxuICBDaGVja2JveEdyb3VwLFxyXG4gIENoZWNrYm94LFxyXG4gIFNpbXBsZUdyaWQsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBIU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgXCIuL091dGNvbWVNYXBwaW5nLmNzc1wiO1xyXG5cclxuY29uc3QgQ291cnNlT3V0Y29tZUxpc3QgPSAoeyBjb3Vyc2UsIG51bU9mQ2hlY2ttYXJrcywgZGVwYXJ0bWVudCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY291cnNlKTtcclxuICBjb25zb2xlLmxvZyhudW1PZkNoZWNrbWFya3MpO1xyXG4gIGNvbnNvbGUubG9nKGRlcGFydG1lbnQpO1xyXG4gIGNvbnN0IGNvdXJzZV9PdXRjb21lcyA9IGNvdXJzZS5jb3Vyc2VPdXRjb21lcztcclxuICBjb25zb2xlLmxvZyhjb3Vyc2VfT3V0Y29tZXMpO1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGNvbnN0IHJlbmRlckNvdXJzZU91dGNvbWVzID0gY291cnNlX091dGNvbWVzLm1hcCgob3V0Y29tZXMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gc3BhY2luZz17NX0+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGJnPVwid2hpdGVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgbGluZUhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICBib3JkZXJSaWdodFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg9XCIycHhcIlxyXG4gICAgICAgICAgICBvdmVyZmxvd1dyYXA9XCJicmVhay13b3JkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE0cHhcIlxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCIzZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge291dGNvbWVzLm9yZGVyfS4ge291dGNvbWVzLm91dGNvbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBiZz1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICBib3JkZXJSaWdodFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg9XCIycHhcIlxyXG4gICAgICAgICAgICBvdmVyZmxvd1dyYXA9XCJicmVhay13b3JkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge251bU9mQ2hlY2ttYXJrcyA9PSBcIjZcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEhTdGFja1xyXG4gICAgICAgICAgICAgICAgc3BhY2luZz17NX1cclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlcGFydG1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5jb3Vyc2V9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5vdXRjb21lcy5vcmRlcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjb2xvclNjaGVtZT1cImdyZWVuXCI+MjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY29sb3JTY2hlbWU9XCJncmVlblwiIHZhbHVlPVwiT3B0aW9uIDNcIj5cclxuICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjb2xvclNjaGVtZT1cImdyZWVuXCIgdmFsdWU9XCJPcHRpb24gNFwiPlxyXG4gICAgICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiB2YWx1ZT1cIk9wdGlvbiA1XCI+XHJcbiAgICAgICAgICAgICAgICAgIDVcclxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY29sb3JTY2hlbWU9XCJncmVlblwiIHZhbHVlPVwiT3B0aW9uIDZcIj5cclxuICAgICAgICAgICAgICAgICAgNlxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge251bU9mQ2hlY2ttYXJrcyA9PSBcIjdcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPEhTdGFja1xyXG4gICAgICAgICAgICAgICAgc3BhY2luZz17NX1cclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjb2xvclNjaGVtZT1cInJlZFwiIHZhbHVlPVwiT3B0aW9uIDFcIj5cclxuICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIk9wdGlvbiAyXCI+MjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJPcHRpb24gM1wiPjM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwiT3B0aW9uIDRcIj40PC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIk9wdGlvbiA1XCI+NTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJPcHRpb24gNlwiPjY8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwiT3B0aW9uIDdcIj43PC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIHJldHVybiA8PntyZW5kZXJDb3Vyc2VPdXRjb21lc308Lz47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZU91dGNvbWVMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIFNlbGVjdCwgQnV0dG9uLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgU3R1ZGVudE91dGNvbWVMaXN0IGZyb20gXCIuL1N0dWRlbnRPdXRjb21lTGlzdFwiO1xyXG5pbXBvcnQgXCIuL091dGNvbWVNYXBwaW5nLmNzc1wiO1xyXG5pbXBvcnQgZmFrZVByb2dyYW1zIGZyb20gXCIuLi8uLi8uLi9mYWtlLWRhdGEvcHJvZ3JhbXMuanNvblwiO1xyXG5cclxuY29uc3QgcHJvZ3JhbXMgPSBmYWtlUHJvZ3JhbXMucHJvZ3JhbXM7XHJcblxyXG5jb25zdCBPdXRjb21lTWFwcGluZyA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BcIikuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW29wdGlvbiwgc2V0T3B0aW9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgaGFuZGxlU2V0T3B0aW9uID0gKGUpID0+IHtcclxuICAgIHNldE9wdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyT3B0aW9ucyA9IHByb2dyYW1zLm1hcCgocHJvZ3JhbSwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8b3B0aW9uIHZhbHVlPXtwcm9ncmFtfSBrZXk9e2lkeH0+XHJcbiAgICAgICAge3Byb2dyYW19XHJcbiAgICAgIDwvb3B0aW9uPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9ncmFtID0gcHJvZ3JhbXMuZmlsdGVyKChwcm9ncmFtKSA9PiBwcm9ncmFtID09IG9wdGlvbilbMF07XHJcbiAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9ncmFtKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cInRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgICByb3VuZGVkPVwibGdcIlxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBiZz1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIyMHB4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUHJvZ3JhbVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIG10PVwiMWVtXCJcclxuICAgICAgICAgICAgaWQ9XCJjb3Vyc2VcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBwcm9ncmFtXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNldE9wdGlvbn1cclxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgey8qIHRoaXMgc2hvdWxkIGJlIGZpbGxlZCB3aXRoIGEgbGlzdCBvZiBjb3Vyc2VzIGZyb20gZGIgKi99XHJcbiAgICAgICAgICAgIHtyZW5kZXJPcHRpb25zfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtvcHRpb24gPyA8U3R1ZGVudE91dGNvbWVMaXN0IHByb3A9e3NlbGVjdGVkUHJvZ3JhbX0gLz4gOiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3V0Y29tZU1hcHBpbmc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBzZXRTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIFRleHQsXHJcbiAgQ2hlY2tib3hHcm91cCxcclxuICBDaGVja2JveCxcclxuICBTaW1wbGVHcmlkLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgSFN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IENvdXJzZU91dGNvbWVMaXN0IGZyb20gXCIuL0NvdXJzZU91dGNvbWVMaXN0XCI7XHJcbmltcG9ydCBcIi4vT3V0Y29tZU1hcHBpbmcuY3NzXCI7XHJcbmltcG9ydCBkYXRhX2Zyb21fYmFja2VuZCBmcm9tIFwiLi4vLi4vLi4vZmFrZS1kYXRhL2JhY2tlbmRTdHVkZW50T3V0Y29tZS5qc29uXCI7XHJcblxyXG4vKiBTdGFydCBvZiBwcm9ncmFtICovXHJcbmNvbnN0IFN0dWRlbnRPdXRjb21lTGlzdCA9ICh7IHByb3AgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3ApO1xyXG4gIGNvbnN0IHByb2dyYW0gPSBkYXRhX2Zyb21fYmFja2VuZC5wcm9ncmFtO1xyXG4gIGNvbnN0IGFiZXRfc3R1ZGVudF9vdXRjb21lcyA9IGRhdGFfZnJvbV9iYWNrZW5kLnN0dWRlbnRPdXRjb21lcztcclxuICBjb25zdCBiYWNrZW5kID0gZGF0YV9mcm9tX2JhY2tlbmQuY291cnNlT2JqZWN0aXZlcztcclxuXHJcbiAgY29uc29sZS5sb2cocHJvZ3JhbSk7XHJcbiAgLyogZmlsbCBmcm9tIGRiIHdoZW4gaW50ZWdyYXRlZCovXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChcclxuICAgICAgd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gc3VibWl0IHRoZXNlIGNoYW5nZXM/XCIpXHJcbiAgICApIHtcclxuICAgICAgLy9QT1NUIHRoZSBwcm9ncmFtIGxpc3QgY2hhbmdlIHRvIHRoZSBkYiBoZXJlXHJcbiAgICAgIGFsZXJ0KFwiT3V0Y29tZSBNYXBwaW5nIGZvciAnXCIgKyBwcm9wICsgXCInIHVwZGF0ZWQhXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckFCRVRPdXRjb21lcyA9IGFiZXRfc3R1ZGVudF9vdXRjb21lcy5tYXAoKGFiZXRPdXRjb21lcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Qm94IGhlaWdodD1cIjEwMHB4XCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMTZweFwiIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiIHRleHRBbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBjb2xvcj1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIwLjVlbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YWJldE91dGNvbWVzLm9yZGVyfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIHthYmV0T3V0Y29tZXMub3V0Y29tZX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHJlbmRlckNvdXJzZU91dGNvbWVzID0gYmFja2VuZC5tYXAoKGNvdXJzZSwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezJ9IHNwYWNpbmc9ezB9PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBiZz1cIiNkN2VjZTFcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMjBweFwiXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCIxMjBweFwiXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgYm9yZGVyTGVmdFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aD1cIjBweFwiXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoPVwiMnB4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBjb2xvcj1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjb3Vyc2UuY291cnNlTmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGJnPVwiI2Q3ZWNlMVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEyMHB4XCJcclxuICAgICAgICAgICAgbGluZUhlaWdodD1cIjEyMHB4XCJcclxuICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICBib3JkZXJSaWdodFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg9XCIycHhcIlxyXG4gICAgICAgICAgICBvdmVyZmxvd1dyYXA9XCJicmVhay13b3JkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEhTdGFja1xyXG4gICAgICAgICAgICAgIHNwYWNpbmc9ezV9XHJcbiAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICA+PC9IU3RhY2s+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICAgICAge3Byb3AgPT0gXCJDb21wdXRlciBFbmdpbmVlcmluZ1wiICYmIChcclxuICAgICAgICAgIDxDb3Vyc2VPdXRjb21lTGlzdFxyXG4gICAgICAgICAgICBjb3Vyc2U9e2NvdXJzZX1cclxuICAgICAgICAgICAgbnVtT2ZDaGVja21hcmtzPXs3fVxyXG4gICAgICAgICAgICBkZXBhcnRtZW50PXtwcm9wfVxyXG4gICAgICAgICAgPjwvQ291cnNlT3V0Y29tZUxpc3Q+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cHJvcCAhPSBcIkNvbXB1dGVyIEVuZ2luZWVyaW5nXCIgJiYgKFxyXG4gICAgICAgICAgPENvdXJzZU91dGNvbWVMaXN0XHJcbiAgICAgICAgICAgIGNvdXJzZT17Y291cnNlfVxyXG4gICAgICAgICAgICBudW1PZkNoZWNrbWFya3M9ezZ9XHJcbiAgICAgICAgICAgIGRlcGFydG1lbnQ9e3Byb3B9XHJcbiAgICAgICAgICA+PC9Db3Vyc2VPdXRjb21lTGlzdD5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cHJvcCA9PSBcIkNvbXB1dGVyIFNjaWVuY2VcIiAmJiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInRvcFwiPlxyXG4gICAgICAgICAgPEJveCBib3JkZXJXaWR0aD1cIjJweFwiIHJvdW5kZWQ9XCJsZ1wiIG09XCIyZW1cIiBwPVwiMWVtXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMjBweFwiPlxyXG4gICAgICAgICAgICAgIFN0dWRlbnQgT3V0Y29tZXMgZm9ye1wiIFwifVxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsyfSBzcGFjaW5nPXsxMH0gbWFyZ2luVG9wPXs2fT5cclxuICAgICAgICAgICAgICB7cmVuZGVyQUJFVE91dGNvbWVzfVxyXG4gICAgICAgICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggYm9yZGVyV2lkdGg9XCIycHhcIiByb3VuZGVkPVwibGdcIiBtPVwiMmVtXCIgcD1cIjFlbVwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjIwcHhcIj5cclxuICAgICAgICAgICAgICBTZWxlY3QgdGhlIHN0dWRlbnQgb3V0Y29tZShzKSBmb3J7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4QTE2OVwiXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb3B9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezJ9IHNwYWNpbmc9ezEwfSBtYXJnaW5Ub3A9XCIxZW1cIj5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBiZz1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGJvcmRlckxlZnRXaWR0aD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSaWdodFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoPVwiMXB4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOGExNjliMFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDb3Vyc2UgT3V0Y29tZXNcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBiZz1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGJvcmRlckxlZnRXaWR0aD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSaWdodFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoPVwiMXB4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOGExNjliMFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTdHVkZW50IE91dGNvbWVzXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgICAgICAge3JlbmRlckNvdXJzZU91dGNvbWVzfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtwcm9wID09IFwiQ29tcHV0ZXIgRW5naW5lZXJpbmdcIiAmJiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInRvcFwiPlxyXG4gICAgICAgICAgPEJveCBib3JkZXJXaWR0aD1cIjJweFwiIHJvdW5kZWQ9XCJsZ1wiIG09XCIyZW1cIiBwPVwiMWVtXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMjBweFwiPlxyXG4gICAgICAgICAgICAgIFN0dWRlbnQgT3V0Y29tZXMgZm9ye1wiIFwifVxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsyfSBzcGFjaW5nPXsxMH0gbWFyZ2luVG9wPXs2fT5cclxuICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjEwMHB4XCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4QTE2OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjAuNWVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDEuXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgSWRlbnRpZnksIGZvcm11bGF0ZSwgYW5kIHNvbHZlIGNvbXBsZXggZW5naW5lZXJpbmcgcHJvYmxlbXMgYnlcclxuICAgICAgICAgICAgICAgICAgYXBwbHlpbmcgcHJpbmNpcGxlcyBvZiBlbmdpbmVlcmluZywgc2NpZW5jZSwgYW5kIG1hdGhlbWF0aWNzXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCIxMDBweFwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIwLjVlbVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAyLlxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIEFwcGx5IGVuZ2luZWVyaW5nIGRlc2lnbiB0byBwcm9kdWNlIHNvbHV0aW9ucyB0aGF0IG1lZXRcclxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWVkIG5lZWRzIHdpdGggY29uc2lkZXJhdGlvbiBvZiBwdWJsaWMgaGVhbHRoLCBzYWZldHksXHJcbiAgICAgICAgICAgICAgICAgIGFuZCB3ZWxmYXJlLCBhcyB3ZWxsIGFzIGdsb2JhbCwgY3VsdHVyYWwsIHNvY2lhbCxcclxuICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnRhbCwgYW5kIGVjb25vbWljIGZhY3RvcnNcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjEwMHB4XCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4QTE2OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjAuNWVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDMuXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgQ29tbXVuaWNhdGUgZWZmZWN0aXZlbHkgd2l0aCBhIHJhbmdlIG9mIGF1ZGllbmNlc1xyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiMTAwcHhcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMzhBMTY5XCJcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMC41ZW1cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgNC5cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICBSZWNvZ25pemUgZXRoaWNhbCBhbmQgcHJvZmVzc2lvbmFsIHJlc3BvbnNpYmlsaXRpZXMgaW5cclxuICAgICAgICAgICAgICAgICAgZW5naW5lZXJpbmcgc2l0dWF0aW9ucyBhbmQgbWFrZSBpbmZvcm1lZCBqdWRnbWVudHMsIHdoaWNoIG11c3RcclxuICAgICAgICAgICAgICAgICAgY29uc2lkZXIgdGhlIGltcGFjdCBvZiBlbmdpbmVlcmluZyBzb2x1dGlvbnMgaW4gZ2xvYmFsLFxyXG4gICAgICAgICAgICAgICAgICBlY29ub21pYywgZW52aXJvbm1lbnRhbCwgYW5kIHNvY2lldGFsIGNvbnRleHRzXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCIxMDBweFwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIwLjVlbVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA1LlxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIEZ1bmN0aW9uIGVmZmVjdGl2ZWx5IG9uIGEgdGVhbSB3aG9zZSBtZW1iZXJzIHRvZ2V0aGVyIHByb3ZpZGVcclxuICAgICAgICAgICAgICAgICAgbGVhZGVyc2hpcCwgY3JlYXRlIGEgY29sbGFib3JhdGl2ZSBhbmQgaW5jbHVzaXZlIGVudmlyb25tZW50LFxyXG4gICAgICAgICAgICAgICAgICBlc3RhYmxpc2ggZ29hbHMsIHBsYW4gdGFza3MsIGFuZCBtZWV0IG9iamVjdGl2ZXNcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjEwMHB4XCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4QTE2OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjAuNWVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDYuXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgRGV2ZWxvcCBhbmQgY29uZHVjdCBhcHByb3ByaWF0ZSBleHBlcmltZW50YXRpb24sIGFuYWx5emUgYW5kXHJcbiAgICAgICAgICAgICAgICAgIGludGVycHJldCBkYXRhLCBhbmQgdXNlIGVuZ2luZWVyaW5nIGp1ZGdtZW50IHRvIGRyYXdcclxuICAgICAgICAgICAgICAgICAgY29uY2x1c2lvbnNcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjEwMHB4XCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4QTE2OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjAuNWVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDcuXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgQWNxdWlyZSBhbmQgYXBwbHkgbmV3IGtub3dsZWRnZSBhcyBuZWVkZWQsIHVzaW5nIGFwcHJvcHJpYXRlXHJcbiAgICAgICAgICAgICAgICAgIGxlYXJuaW5nIHN0cmF0ZWdpZXMuXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBib3JkZXJXaWR0aD1cIjJweFwiIHJvdW5kZWQ9XCJsZ1wiIG09XCIyZW1cIiBwPVwiMWVtXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMjBweFwiPlxyXG4gICAgICAgICAgICAgIFNlbGVjdCB0aGUgc3R1ZGVudCBvdXRjb21lKHMpIGZvcntcIiBcIn1cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjMzhBMTY5XCJcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcH1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gc3BhY2luZz17MTB9IG1hcmdpblRvcD1cIjFlbVwiPlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyTGVmdFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4YTE2OWIwXCJcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENvdXJzZSBPdXRjb21lXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJUb3BXaWR0aD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aD1cIjFweFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMzhhMTY5YjBcIlxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU3R1ZGVudCBPdXRjb21lc1xyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICAgICAgICAgIHtyZW5kZXJDb3Vyc2VPdXRjb21lc31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIEluZm9ybWF0aW9uIFRlY2hub2xvZ3kgICovfVxyXG4gICAgICB7cHJvcCA9PSBcIkluZm9ybWF0aW9uIFRlY2hub2xvZ3lcIiAmJiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInRvcFwiPlxyXG4gICAgICAgICAgPEJveCBib3JkZXJXaWR0aD1cIjJweFwiIHJvdW5kZWQ9XCJsZ1wiIG09XCIyZW1cIiBwPVwiMWVtXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMjBweFwiPlxyXG4gICAgICAgICAgICAgIFN0dWRlbnQgT3V0Y29tZXMgZm9ye1wiIFwifVxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsyfSBzcGFjaW5nPXsxMH0gbWFyZ2luVG9wPXs2fT5cclxuICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjEwMHB4XCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4QTE2OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjAuNWVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDEuXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgQW5hbHl6ZSBhIGNvbXBsZXggY29tcHV0aW5nIHByb2JsZW0gYW5kIHRvIGFwcGx5IHByaW5jaXBsZXMgb2ZcclxuICAgICAgICAgICAgICAgICAgY29tcHV0aW5nIGFuZCBvdGhlciByZWxldmFudCBkaXNjaXBsaW5lcyB0byBpZGVudGlmeVxyXG4gICAgICAgICAgICAgICAgICBzb2x1dGlvbnMuXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCIxMDBweFwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIwLjVlbVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAyLlxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIERlc2lnbiwgaW1wbGVtZW50LCBhbmQgZXZhbHVhdGUgYSBjb21wdXRpbmctYmFzZWQgc29sdXRpb24gdG9cclxuICAgICAgICAgICAgICAgICAgbWVldCBhIGdpdmVuIHNldCBvZiBjb21wdXRpbmcgcmVxdWlyZW1lbnRzIGluIHRoZSBjb250ZXh0IG9mXHJcbiAgICAgICAgICAgICAgICAgIHRoZSBwcm9ncmFt4oCZcyBkaXNjaXBsaW5lLlxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiMTAwcHhcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMzhBMTY5XCJcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMC41ZW1cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgMy5cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICBDb21tdW5pY2F0ZSBlZmZlY3RpdmVseSBpbiBhIHZhcmlldHkgb2YgcHJvZmVzc2lvbmFsIGNvbnRleHRzLlxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiMTAwcHhcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMzhBMTY5XCJcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMC41ZW1cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgNC5cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICBSZWNvZ25pemUgcHJvZmVzc2lvbmFsIHJlc3BvbnNpYmlsaXRpZXMgYW5kIG1ha2UgaW5mb3JtZWRcclxuICAgICAgICAgICAgICAgICAganVkZ21lbnRzIGluIGNvbXB1dGluZyBwcmFjdGljZSBiYXNlZCBvbiBsZWdhbCBhbmQgZXRoaWNhbFxyXG4gICAgICAgICAgICAgICAgICBwcmluY2lwbGVzLlxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiMTAwcHhcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMzhBMTY5XCJcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMC41ZW1cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgNS5cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICBGdW5jdGlvbiBlZmZlY3RpdmVseSBhcyBhIG1lbWJlciBvciBsZWFkZXIgb2YgYSB0ZWFtIGVuZ2FnZWRcclxuICAgICAgICAgICAgICAgICAgaW4gYWN0aXZpdGllcyBhcHByb3ByaWF0ZSB0byB0aGUgcHJvZ3JhbeKAmXMgZGlzY2lwbGluZS5cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IGhlaWdodD1cIjEwMHB4XCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4QTE2OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjAuNWVtXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDYuXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgSWRlbnRpZnkgYW5kIGFuYWx5emUgdXNlciBuZWVkcyBhbmQgdG8gdGFrZSB0aGVtIGludG8gYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICBpbiB0aGUgc2VsZWN0aW9uLCBjcmVhdGlvbiwgaW50ZWdyYXRpb24sIGV2YWx1YXRpb24sIGFuZFxyXG4gICAgICAgICAgICAgICAgICBhZG1pbmlzdHJhdGlvbiBvZiBjb21wdXRpbmctYmFzZWQgc3lzdGVtcy5cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IGJvcmRlcldpZHRoPVwiMnB4XCIgcm91bmRlZD1cImxnXCIgbT1cIjJlbVwiIHA9XCIxZW1cIj5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyMHB4XCI+XHJcbiAgICAgICAgICAgICAgU2VsZWN0IHRoZSBzdHVkZW50IG91dGNvbWUocykgZm9ye1wiIFwifVxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOEExNjlcIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9wfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXsyfSBzcGFjaW5nPXsxMH0gbWFyZ2luVG9wPVwiMWVtXCI+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgYmc9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJUb3BXaWR0aD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0V2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHRXaWR0aD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21XaWR0aD1cIjFweFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMzhhMTY5YjBcIlxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQ291cnNlc1xyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyTGVmdFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4YTE2OWIwXCJcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFN0dWRlbnQgT3V0Y29tZXNcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxyXG4gICAgICAgICAgICB7cmVuZGVyQ291cnNlT3V0Y29tZXN9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgey8qIEN5YmVyc2VjdXJpdHkgICovfVxyXG4gICAgICB7cHJvcCA9PSBcIkN5YmVyc2VjdXJpdHlcIiAmJiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInRvcFwiPlxyXG4gICAgICAgICAgPEJveCBib3JkZXJXaWR0aD1cIjJweFwiIHJvdW5kZWQ9XCJsZ1wiIG09XCIyZW1cIiBwPVwiMWVtXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMjBweFwiPlxyXG4gICAgICAgICAgICAgIFNlbGVjdCB0aGUgc3R1ZGVudCBvdXRjb21lKHMpIGZvcntcIiBcIn1cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjMzhBMTY5XCJcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvcH1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gc3BhY2luZz17MTB9IG1hcmdpblRvcD1cIjFlbVwiPlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGJnPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wV2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyTGVmdFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0V2lkdGg9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzM4YTE2OWIwXCJcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMjVweFwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENvdXJzZXNcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBiZz1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclRvcFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGJvcmRlckxlZnRXaWR0aD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSaWdodFdpZHRoPVwiMHB4XCJcclxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbVdpZHRoPVwiMXB4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIiMzOGExNjliMFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodD1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTdHVkZW50IE91dGNvbWVzXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgICAgICAge3JlbmRlckNvdXJzZU91dGNvbWVzfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgIG1hcmdpblRvcD1cIjFlbVwiXHJcbiAgICAgICAgbWFyZ2luQm90dG9tPVwiMmVtXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgID5cclxuICAgICAgICBTdWJtaXRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50T3V0Y29tZUxpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCAnLi9Db3Vyc2VDYXJkLmNzcydcclxuXHJcbmNvbnN0IENvdXJzZUNhcmQgPSAoe2NvZGUsIHNlY3Rpb24sIG5hbWUsIGNvb3JkaW5hdG9yLCBpbnN0cnVjdG9yLCBmb3JtQ29tcGxldGVkfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj57Y29kZX0ue3NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dD57bmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0Pkluc3RydWN0b3I6IHtpbnN0cnVjdG9yLmZpcnN0TmFtZX0ge2luc3RydWN0b3IubGFzdE5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dD5Db29yZGluYXRvcjoge2Nvb3JkaW5hdG9yLmZpcnN0TmFtZX0ge2Nvb3JkaW5hdG9yLmxhc3ROYW1lfTwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlQ2FyZDsiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxWYWwgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKFwiXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBbdmFsdWUsIGhhbmRsZUNoYW5nZSwgcmVzZXRdO1xyXG59XHJcblxyXG4gLy9leGFtcGxlOlxyXG4gLy9cclxuIC8vIGNvbnN0IFthZ2UsIGhhbmRsZUFnZUNoYW5nZSwgcmVzZXRBZ2VdID0gdXNlRm9ybVN0YXRlKFwiXCIpOyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gdXNlVG9nZ2xlKGluaXRpYWxWYWwgPSBmYWxzZSl7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWwpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKCFzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3N0YXRlLCB0b2dnbGVdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUb2dnbGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEFkbWluTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0FkbWluTmF2aWdhdGlvbi9BZG1pbk5hdmlnYXRpb25cIjtcclxuaW1wb3J0IEFkbWluTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0FkbWluTWVudS9BZG1pbk1lbnVcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2FkbWluSG9tZS5jc3NcIjtcclxuaW1wb3J0IEZ1bGxSZXBvcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9GdWxsUmVwb3J0L0Z1bGxSZXBvcnRcIjtcclxuaW1wb3J0IENyZWF0ZU5ld1NlbWVzdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvQ3JlYXRlTmV3U2VtZXN0ZXIvQ3JlYXRlTmV3U2VtZXN0ZXJcIjtcclxuaW1wb3J0IEVkaXRQcm9ncmFtTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRQcm9ncmFtTGlzdC9FZGl0UHJvZ3JhbUxpc3RcIjtcclxuaW1wb3J0IEVkaXRDb3Vyc2VBc3NpZ25tZW50cyBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRDb3Vyc2VBc3NpZ25tZW50cy9FZGl0Q291cnNlQXNzaWdubWVudHNcIjtcclxuaW1wb3J0IEVkaXRGYWN1bHR5TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRGYWN1bHR5TGlzdC9FZGl0RmFjdWx0eUxpc3RcIjtcclxuaW1wb3J0IEVkaXRDb3Vyc2VMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdENvdXJzZUxpc3QvRWRpdENvdXJzZUxpc3RcIjtcclxuaW1wb3J0IEVkaXRDb3Vyc2VPdXRjb21lcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRDb3Vyc2VPdXRjb21lcy9FZGl0Q291cnNlT3V0Y29tZXNcIjtcclxuaW1wb3J0IE91dGNvbWVNYXBwaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvT3V0Y29tZU1hcHBpbmcvT3V0Y29tZU1hcHBpbmdcIjtcclxuaW1wb3J0IEdlbmVyYXRlU2ltcGxlUmVwb3J0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvR2VuZXJhdGVTaW1wbGVSZXBvcnQvR2VuZXJhdGVTaW1wbGVSZXBvcnRcIjtcclxuaW1wb3J0IEdlbmVyYXRlU3R1ZGVudFN1cnZleXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9HZW5lcmF0ZVN0dWRlbnRTdXJ2ZXlzL0dlbmVyYXRlU3R1ZGVudFN1cnZleXNcIjtcclxuXHJcbmNvbnN0IGFkbWluSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIk1UMjAyMFwiKTtcclxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShcIkdGUlwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlVOVCBBQkVUOiBBZG1pbiBQYWdlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QWRtaW5OYXZpZ2F0aW9uIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxBZG1pbk1lbnUgc2V0Vmlldz17c2V0Vmlld30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXBhZ2VzXCI+XHJcbiAgICAgICAgICB7KCgpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIkdGUlwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxGdWxsUmVwb3J0IC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJHU1JcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8R2VuZXJhdGVTaW1wbGVSZXBvcnQgdXNlcj17dXNlcn0gLz47XHJcbiAgICAgICAgICAgICAgY2FzZSBcIkdTU1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxHZW5lcmF0ZVN0dWRlbnRTdXJ2ZXlzIC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJPTVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxPdXRjb21lTWFwcGluZyAvPjtcclxuICAgICAgICAgICAgICBjYXNlIFwiQ05TXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENyZWF0ZU5ld1NlbWVzdGVyIC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJFQUNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWRpdENvdXJzZUFzc2lnbm1lbnRzIC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJFRkxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWRpdEZhY3VsdHlMaXN0IC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJFUExcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWRpdFByb2dyYW1MaXN0IC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJFQ0xcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWRpdENvdXJzZUxpc3QgLz47XHJcbiAgICAgICAgICAgICAgY2FzZSBcIkVDT1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxFZGl0Q291cnNlT3V0Y29tZXMgLz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkbWluSG9tZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEJ5TGFzdE5hbWUobmFtZXMpIHtcclxuICAgIG5hbWVzLnNvcnQoKGEsIGIpID0+IGEuc3BsaXQoJyAnKVsxXS5sb2NhbGVDb21wYXJlKGIuc3BsaXQoJyAnKVsxXSkpO1xyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3N0eWxlZC1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLWN1dHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb2lsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=