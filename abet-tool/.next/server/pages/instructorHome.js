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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/instructorHome.js");
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

/***/ "./components/instructor-components/FormsView.css":
/*!********************************************************!*\
  !*** ./components/instructor-components/FormsView.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/instructor-components/FormsView.js":
/*!*******************************************************!*\
  !*** ./components/instructor-components/FormsView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CourseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseCard */ "./components/instructor-components/CourseCard.js");
/* harmony import */ var _FormsView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormsView.css */ "./components/instructor-components/FormsView.css");
/* harmony import */ var _FormsView_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FormsView_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\instructor-components\\FormsView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FormsView = ({
  term,
  instructorCourses,
  coordinatorCourses
}) => {
  instructorCourses.sort((a, b) => a.courseNumber + a.sectionNumber > b.courseNumber + b.sectionNumber ? 1 : -1);
  coordinatorCourses.sort((a, b) => a.courseNumber + a.sectionNumber > b.courseNumber + b.sectionNumber ? 1 : -1);

  const handleClick = async (course, section) => {
    document.cookie = `course=${course}; path=/`;
    document.cookie = `section=${section}; path=/`;
  };

  const renderInstructorCourses = instructorCourses.map((course, idx) => {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx(_CourseCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      code: course.courseNumber,
      section: course.sectionNumber,
      instructor: course.instructor,
      coordinator: course.coordinator,
      name: course.displayName,
      key: idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      size: "sm",
      variantColor: "green",
      mt: "1em",
      w: "100%",
      size: "sm",
      onClick: e => {
        e.preventDefault();
        handleClick(course.courseNumber, course.sectionNumber);
        window.location.href = "http://localhost:3000/formCompletion";
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, "Work On ABET Form"));
  });
  const renderCoordinatorCourses = coordinatorCourses.map((course, idx) => {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, __jsx(_CourseCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      code: course.courseNumber,
      section: course.sectionNumber,
      instructor: course.instructor,
      coordinator: course.coordinator,
      name: course.displayName,
      key: idx * idx,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      size: "sm",
      variantColor: "green",
      mt: "1em",
      w: "100%",
      size: "sm",
      onClick: e => {
        e.preventDefault();
        handleClick(course.courseNumber, course.sectionNumber);
        window.location.href = "http://localhost:3000/coordinatorCommentInput";
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, "Add Comment"));
  });
  return __jsx("div", {
    className: "course-view",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    textAlign: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Selected Term: ", term.semester, " ", term.year), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: "2em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    textAlign: "left",
    mb: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "Instructor Courses"), __jsx("div", {
    className: "forms-grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, renderInstructorCourses)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: "2em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontWeight: "bold",
    textAlign: "left",
    mb: "1em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Coordinator Courses"), __jsx("div", {
    className: "forms-grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, renderCoordinatorCourses))));
};

/* harmony default export */ __webpack_exports__["default"] = (FormsView);

/***/ }),

/***/ "./components/instructor-components/Navigation.css":
/*!*********************************************************!*\
  !*** ./components/instructor-components/Navigation.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/instructor-components/Navigation.js":
/*!********************************************************!*\
  !*** ./components/instructor-components/Navigation.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.css */ "./components/instructor-components/Navigation.css");
/* harmony import */ var _Navigation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navigation_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../api/api */ "./api/api.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\instructor-components\\Navigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Navigation = ({
  link
}) => {
  const logout = () => {
    new _api_api__WEBPACK_IMPORTED_MODULE_3__["default"]().logout();
  };

  switch (link) {
    case '/formCompletion':
      return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "nav-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/instructorHome",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 25
        }
      }, "Home"), __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "arrow right",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 28
        }
      })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/formCompletion",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }
      }, "Instructor ABET Form"), __jsx("div", {
        className: "alignright",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        className: "user-name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 29
        }
      }, "bbb4200"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/",
        onClick: logout,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 29
        }
      }, "Sign Out")));
      break;

    case '/coordinatorCommentInput':
      return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "nav-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/instructorHome",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }
      }, "Home"), __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "arrow right",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 28
        }
      })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/coordinatorCommentInput",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }
      }, "Coordinator ABET Form"), __jsx("div", {
        className: "alignright",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        className: "user-name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
        }
      }, "bbb4200"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/",
        onClick: logout,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 29
        }
      }, "Sign Out")));
      break;

    default:
      return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        className: "nav-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/instructorHome",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }, "Home"), __jsx("div", {
        className: "alignright",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        className: "user-name",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }
      }, "MT2020"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/",
        onClick: logout,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 29
        }
      }, "Sign Out")));
      break;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/instructor-components/TermSelect.css":
/*!*********************************************************!*\
  !*** ./components/instructor-components/TermSelect.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/instructor-components/TermSelect.js":
/*!********************************************************!*\
  !*** ./components/instructor-components/TermSelect.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TermSelect_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TermSelect.css */ "./components/instructor-components/TermSelect.css");
/* harmony import */ var _TermSelect_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TermSelect_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoil_recoil_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recoil/recoil-store */ "./recoil/recoil-store.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\instructor-components\\TermSelect.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const TermSelect = ({
  setRootTerm
}) => {
  const setTermAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_4__["useSetRecoilState"])(_recoil_recoil_store__WEBPACK_IMPORTED_MODULE_3__["termSelectAtom"]);
  var d = new Date();
  var m = d.getMonth();
  var y = d.getFullYear();

  if (m >= 0 && m <= 5) {
    var termOptions = {
      current: "Spring",
      next1: "Fall",
      next2: "Summer"
    };
    var yearOptions = {
      year1: y,
      year2: y - 1
    };
  } else if (m >= 6 && m <= 8) {
    var termOptions = {
      current: "Summer",
      next1: "Spring",
      next2: "Fall"
    };
    var yearOptions = {
      year1: y,
      year2: y - 1
    };
  } else {
    var termOptions = {
      current: "Fall",
      next1: "Summer",
      next2: "Spring"
    };
    var yearOptions = {
      year1: y,
      year2: y
    };
  }

  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    semester: termOptions.current,
    year: yearOptions.year1
  });

  const handleSemesterChange = e => {
    setTerm(_objectSpread(_objectSpread({}, term), {}, {
      semester: e.target.value
    }));
  };

  const handleYearChange = e => {
    setTerm(_objectSpread(_objectSpread({}, term), {}, {
      year: e.target.value
    }));
  };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "Menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Select Term"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    variant: "filled",
    w: "10em",
    onChange: handleSemesterChange,
    value: term.semester,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("option", {
    value: termOptions.current,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, termOptions.current), __jsx("option", {
    value: termOptions.next1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, termOptions.next1), __jsx("option", {
    value: termOptions.next2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, termOptions.next2)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    variant: "filled",
    w: "10em",
    onChange: handleYearChange,
    value: term.year,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("option", {
    value: yearOptions.year1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, yearOptions.year1), __jsx("option", {
    value: yearOptions.year2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, yearOptions.year2)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    onClick: () => {
      setTermAtom(term);
      setRootTerm(term); //alert("Term selected");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "Search")));
};

/* harmony default export */ __webpack_exports__["default"] = (TermSelect);

/***/ }),

/***/ "./fake-data/course.json":
/*!*******************************!*\
  !*** ./fake-data/course.json ***!
  \*******************************/
/*! exports provided: courses, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"courses\":[{\"code\":\"CSCE 1030\",\"section\":\".001\",\"name\":\"Computer Science I\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"mmt1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course Outcome 1\",\"I want to see how long this can go. So students are going to not be set up well in our CSCE courses. They will have to do everything on their own and fend for themselves.\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":false},{\"code\":\"CSCE 1040\",\"section\":\".007\",\"name\":\"Computer Science II\",\"department\":[\"Computer Science\",\"Information Technology\"],\"instructor\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course Outcome 1\",\"Course Outcome 2\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":false},{\"code\":\"CSCE 2100\",\"section\":\".002\",\"name\":\"Computing Foundations I\",\"department\":[\"Computer Engineering\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2110\",\"section\":\".002\",\"name\":\"Computing Foundations II\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Ludi, Stephanie\",\"id\":\"ssl1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Gather and refine user functional requirements and other functional and non-functional requirements and constraints for a large-scale software system and create a software requirements specification document.\",\"Perform software analysis and design tasks using recognized software methods to create a preliminary design specification for software based on a requirements specification.\",\"Utilize project management principles, skills and tools in creating the requirements and preliminary design specifications.\",\"Create a project managementplan, including a schedule and budget for a large-scale software project.\",\"Utilize configuration management, project management and design tools in the course of the project.\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":true},{\"code\":\"CSCE 2410\",\"section\":\".009\",\"name\":\"Programming Laboratory\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\",\"Course outcome 2\",\"Course outcome 3\",\"Course outcome 4\",\"Course outcome 5\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2610\",\"section\":\".001\",\"name\":\"Assembly Language and Computer Organization\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Garlic, Ryan\",\"id\":\"rrg1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Describe Internet structure and basic protocols, with an emphasis on the client-server paradigm.\",\"Create a sample web page incorporating proper techniques for web-based design.\",\"Incorporate client-side programming techniques for a web application.\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2900\",\"section\":\".004\",\"name\":\"Special Problems in Computer Science & Engineering\",\"department\":[\"Computer Science\",\"Computer Engineering\"],\"instructor\":{\"name\":\"Bhowmick, Sanjukta\",\"id\":\"bbs1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Be able to analyze the time and space complexity of a nontrivial algorithm, using mathematical, tools, and prove/justify the correctness.\",\"Understand the Divide and Conquer, Greedy, and Dynamic Programming strategies for algorithmic design.\",\"Be familiar with the algorithms for Matrix Multiplication (Strassen's), Activity Selection, Knapsack, Shortest Paths (single source, and all pairs), Minimum Spanning Tree , Matrix Chain, and Longest Common Subsequence problems.\",\"Be exposed to approximation algorithms for solving NP-hard problems\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":true},{\"code\":\"CSCE 2996\",\"section\":\".005\",\"name\":\"Honors College Mentored Research Experience\",\"department\":[\"Computer Science\",\"Computer Engineering\"],\"instructor\":\"Beep, Boop\",\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\",\"Course outcome 2\",\"Course outcome 3\",\"Course outcome 4\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":true},{\"code\":\"CSCE 3010\",\"section\":\".002\",\"name\":\"Signals and Systems\",\"department\":[\"Computer Science\",\"Computer Engineering\",\"Information Technology\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\",\"Course outcome 2\",\"Course outcome 3\",\"Course outcome 4\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 3020\",\"section\":\".006\",\"name\":\"Communications Systems\",\"department\":[\"Computer Science\",\"Computer Engineering\",\"Information Technology\"],\"instructor\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false}]}");

/***/ }),

/***/ "./pages/instructorHome.js":
/*!*********************************!*\
  !*** ./pages/instructorHome.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_instructor_components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/instructor-components/Navigation */ "./components/instructor-components/Navigation.js");
/* harmony import */ var _recoil_recoil_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recoil/recoil-store */ "./recoil/recoil-store.js");
/* harmony import */ var _components_instructor_components_TermSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/instructor-components/TermSelect */ "./components/instructor-components/TermSelect.js");
/* harmony import */ var _styles_instructorHome_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/instructorHome.css */ "./styles/instructorHome.css");
/* harmony import */ var _styles_instructorHome_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_instructorHome_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_instructor_components_FormsView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/instructor-components/FormsView */ "./components/instructor-components/FormsView.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\pages\\instructorHome.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const instructorHome = () => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("MT2020");
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    semester: "Fall",
    year: 2020
  });
  const {
    0: courses,
    1: setCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    instructorCourses: [],
    coordinatorCourses: []
  });

  const getCourses = async () => {
    const instructor = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_7__["getInstructorCourses"])(user, term);
    const coordinator = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_7__["getCoordinatorCourses"])(user, term);
    setCourses(_objectSpread(_objectSpread({}, courses), {}, {
      instructorCourses: instructor,
      coordinatorCourses: coordinator
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getCourses();
    document.cookie = `user=${user}; path=/`;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getCourses();
  }, [term]);
  const currentTerm = Object(recoil__WEBPACK_IMPORTED_MODULE_1__["useRecoilValue"])(_recoil_recoil_store__WEBPACK_IMPORTED_MODULE_3__["termSelectAtom"]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "UNT ABET: Instructor Page")), __jsx(_components_instructor_components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "menu-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_components_instructor_components_TermSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setRootTerm: setTerm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "card-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_components_instructor_components_FormsView__WEBPACK_IMPORTED_MODULE_6__["default"], {
    term: currentTerm,
    instructorCourses: courses.instructorCourses,
    coordinatorCourses: courses.coordinatorCourses,
    key: "123",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }));
}; // instructorHome.getInitialProps =  async ctx => {
//     const getCookies = cookies(ctx);
//     const user = useRecoilValue(userAtom);
//     const term = useRecoilValue(termSelectAtom);
//     const instructor = await getInstructorCourses(user, term);
//     const coordinator = await getCoordinatorCourses(user, term);
//     return {
//         // instructorCourseList: instructor,
//         // coordinatorCourseList: coordinator
//     }
// };


/* harmony default export */ __webpack_exports__["default"] = (instructorHome);

/***/ }),

/***/ "./recoil/recoil-store.js":
/*!********************************!*\
  !*** ./recoil/recoil-store.js ***!
  \********************************/
/*! exports provided: coordinatorCommentAtom, termSelectAtom, userAtom, formAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordinatorCommentAtom", function() { return coordinatorCommentAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "termSelectAtom", function() { return termSelectAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAtom", function() { return userAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formAtom", function() { return formAtom; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const coordinatorCommentAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "coordinator-comment",
  default: ""
});
const termSelectAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "term-select",
  default: {
    semester: "Fall",
    year: 2020
  }
});
const userAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "user",
  default: {
    username: "MT2020"
  }
});
const formAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "form"
});

/***/ }),

/***/ "./styles/instructorHome.css":
/*!***********************************!*\
  !*** ./styles/instructorHome.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL0FQSUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvYXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci1jb21wb25lbnRzL0NvdXJzZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnN0cnVjdG9yLWNvbXBvbmVudHMvRm9ybXNWaWV3LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci1jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnN0cnVjdG9yLWNvbXBvbmVudHMvVGVybVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbnN0cnVjdG9ySG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWNvaWwvcmVjb2lsLXN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1jdXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlY29pbFwiIl0sIm5hbWVzIjpbImdldENvdXJzZXMiLCJjb3Vyc2VzIiwiZ2V0SW5zdHJ1Y3RvckNvdXJzZXMiLCJpZCIsInRlcm0iLCJhcGlfaGVscGVyIiwiQVBJIiwicmVzcG9uc2UiLCJzZW1lc3RlciIsInllYXIiLCJ0aGVuIiwicmVzdWx0IiwiaW5zdHJ1Y3RvckNvdXJzZXMiLCJmaWx0ZXJlZENvdXJzZXMiLCJmaWx0ZXIiLCJjb3Vyc2UiLCJpbnN0cnVjdG9yIiwiZ2V0Q29vcmRpbmF0b3JDb3Vyc2VzIiwiY29vcmRpbmF0b3JDb3Vyc2VzIiwiY29vcmRpbmF0b3IiLCJnZXRGb3JtRGF0YSIsImRlcGFydG1lbnQiLCJzZWN0aW9uIiwiZ2V0Rm9ybUJ5U2VjdGlvbiIsImZvcm1EYXRhIiwicG9zdENvb3JkaW5hdG9yQ29tbWVudCIsInVzZXJpZCIsImNvdXJzZU51bWJlciIsImNvb3JkaW5hdG9yQ29tbWVudCIsImlzQ291cnNlQ29tcGxldGVkIiwicG9zdENvbW1lbnQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInBvc3RJbnN0cnVjdG9yRm9ybSIsInNlY3Rpb25OdW1iZXIiLCJpc1NlY3Rpb25Db21wbGV0ZWQiLCJvdXRjb21lcyIsIklUR3JhZGVzIiwiQ1NHcmFkZXMiLCJDRUdyYWRlcyIsInBvc3RGb3JtIiwibG9naW4iLCJwYXNzd29yZCIsImdldEFsbENvdXJzZXMiLCJwYXJzZUludCIsImdldEZhY3VsdHlMaXN0IiwiZmFjdWx0eSIsImdldENvdXJzZXNCeURlcGFydG1lbnQiLCJhZGRGYWN1bHR5TWVtYmVyIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiYWRkQ291cnNlIiwiZGlzcGxheU5hbWUiLCJyZW1vdmVDb3Vyc2UiLCJnZXRDb3Vyc2VPdXRjb21lc2J5Q291cnNlIiwiZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZSIsImNvdXJzZW91dGNvbWVzIiwicm9vdCIsIk9LIiwiVU5BVVRIT1JJWkVEIiwiTk9UX0xPR0dFRF9JTl9NU0ciLCJTRVJWRVJfRVJST1JfTVNHIiwiQkFEX1JFUVVFU1RfTVNHIiwidG9rZW4iLCJzZXRUb2tlbiIsInQiLCJzZW5kUG9zdCIsInJvdXRlIiwiYm9keSIsInVybCIsInN0YXR1c0NvZGUiLCJjb29raWVDdXR0ZXIiLCJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsInJlZmVycmVyUG9saWN5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsIkVycm9yT2JqIiwianNvbiIsImhhc093blByb3BlcnR5IiwiY2F0Y2giLCJleHBpcmVzIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJ0b1VUQ1N0cmluZyIsInNldCIsImxvZ291dCIsIlVzZXJpZCIsIlNlbWVzdGVyIiwiWWVhciIsImdldENvdXJzZXNCeVNlbWVzdGVyWWVhciIsIlNlY3Rpb24iLCJJbnN0cnVjdG9yIiwiSWQiLCJEZXBhcnRtZW50IiwiQ291cnNlTnVtYmVyIiwiU2VjdGlvbk51bWJlciIsImdldEZvcm1zQnlDb3Vyc2UiLCJDb3Vyc2UiLCJDb29yZGluYXRvciIsImdldEFsbEZvcm1zIiwidXNlcklkIiwiZm9ybSIsImdldEJsYW5rRm9ybSIsImdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIiLCJ0ZXh0IiwiUmVzdWx0T2JqIiwicGFyc2UiLCJkYXRlIiwiZGF5IiwiZ2V0RGF5IiwibW9udGgiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiYWRkU2VjdGlvbiIsIm51bWJlck9mU3R1ZGVudHMiLCJmYWN1bHR5VHlwZSIsImluZm8iLCJwb3N0Q291cnNlT3V0Y29tZXMiLCJjb3Vyc2VPdXRjb21lc0xpc3QiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJpc0xvZ2dlZEluIiwiQ291cnNlQ2FyZCIsImNvZGUiLCJuYW1lIiwiZm9ybUNvbXBsZXRlZCIsIkZvcm1zVmlldyIsInNvcnQiLCJhIiwiYiIsImhhbmRsZUNsaWNrIiwiZG9jdW1lbnQiLCJjb29raWUiLCJyZW5kZXJJbnN0cnVjdG9yQ291cnNlcyIsIm1hcCIsImlkeCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlbmRlckNvb3JkaW5hdG9yQ291cnNlcyIsIk5hdmlnYXRpb24iLCJsaW5rIiwiVGVybVNlbGVjdCIsInNldFJvb3RUZXJtIiwic2V0VGVybUF0b20iLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsInRlcm1TZWxlY3RBdG9tIiwiZCIsIm0iLCJ5IiwidGVybU9wdGlvbnMiLCJjdXJyZW50IiwibmV4dDEiLCJuZXh0MiIsInllYXJPcHRpb25zIiwieWVhcjEiLCJ5ZWFyMiIsInNldFRlcm0iLCJ1c2VTdGF0ZSIsImhhbmRsZVNlbWVzdGVyQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVZZWFyQ2hhbmdlIiwiaW5zdHJ1Y3RvckhvbWUiLCJ1c2VyIiwic2V0VXNlciIsInNldENvdXJzZXMiLCJ1c2VFZmZlY3QiLCJjdXJyZW50VGVybSIsInVzZVJlY29pbFZhbHVlIiwiY29vcmRpbmF0b3JDb21tZW50QXRvbSIsImF0b20iLCJrZXkiLCJkZWZhdWx0IiwidXNlckF0b20iLCJ1c2VybmFtZSIsImZvcm1BdG9tIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTQSxVQUFULEdBQXNCO0FBQzNCLFNBQU9DLG1EQUFQO0FB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Q0FBQztBQUN6QkMsS0FBRyxFQUFFO0FBRG9CLENBQUQsQ0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCUCw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9pbnN0cnVjdG9ySG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5zdHJ1Y3RvckhvbWUuanNcIik7XG4iLCJpbXBvcnQgY291cnNlcyBmcm9tIFwiLi4vZmFrZS1kYXRhL2NvdXJzZS5qc29uXCI7XHJcbmltcG9ydCBBUEkgZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q291cnNlcygpIHtcclxuICByZXR1cm4gY291cnNlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluc3RydWN0b3JDb3Vyc2VzKGlkLCB0ZXJtKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRDb3Vyc2VzKGlkLCB0ZXJtLnNlbWVzdGVyLCB0ZXJtLnllYXIpO1xyXG5cclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGluc3RydWN0b3JDb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc3QgZmlsdGVyZWRDb3Vyc2VzID0gaW5zdHJ1Y3RvckNvdXJzZXMuZmlsdGVyKFxyXG4gICAgKGNvdXJzZSkgPT4gY291cnNlLmluc3RydWN0b3IuaWQgPT09IGlkXHJcbiAgKTtcclxuICByZXR1cm4gZmlsdGVyZWRDb3Vyc2VzO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRvckNvdXJzZXMoaWQsIHRlcm0pIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldENvdXJzZXMoaWQsIHRlcm0uc2VtZXN0ZXIsIHRlcm0ueWVhcik7XHJcblxyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29vcmRpbmF0b3JDb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc3QgZmlsdGVyZWRDb3Vyc2VzID0gY29vcmRpbmF0b3JDb3Vyc2VzLmZpbHRlcihcclxuICAgIChjb3Vyc2UpID0+IGNvdXJzZS5jb29yZGluYXRvci5pZCA9PT0gaWRcclxuICApO1xyXG4gIHJldHVybiBmaWx0ZXJlZENvdXJzZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGb3JtRGF0YShpZCwgeWVhciwgdGVybSwgZGVwYXJ0bWVudCwgY291cnNlLCBzZWN0aW9uKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRGb3JtQnlTZWN0aW9uKFxyXG4gICAgaWQsXHJcbiAgICB5ZWFyLFxyXG4gICAgdGVybSxcclxuICAgIGRlcGFydG1lbnQsXHJcbiAgICBjb3Vyc2UsXHJcbiAgICBzZWN0aW9uXHJcbiAgKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXNwb25zZTtcclxuICByZXR1cm4gZm9ybURhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Q29vcmRpbmF0b3JDb21tZW50KFxyXG4gIHVzZXJpZCxcclxuICB5ZWFyLFxyXG4gIHNlbWVzdGVyLFxyXG4gIGRlcGFydG1lbnQsXHJcbiAgY291cnNlTnVtYmVyLFxyXG4gIGNvb3JkaW5hdG9yQ29tbWVudCxcclxuICBpc0NvdXJzZUNvbXBsZXRlZFxyXG4pIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLnBvc3RDb21tZW50KFxyXG4gICAgdXNlcmlkLFxyXG4gICAgeWVhcixcclxuICAgIHNlbWVzdGVyLFxyXG4gICAgZGVwYXJ0bWVudCxcclxuICAgIGNvdXJzZU51bWJlcixcclxuICAgIGNvb3JkaW5hdG9yQ29tbWVudCxcclxuICAgIGlzQ291cnNlQ29tcGxldGVkXHJcbiAgKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbiAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEluc3RydWN0b3JGb3JtKFxyXG4gIHVzZXJpZCxcclxuICB5ZWFyLFxyXG4gIHNlbWVzdGVyLFxyXG4gIGRlcGFydG1lbnQsXHJcbiAgY291cnNlTnVtYmVyLFxyXG4gIHNlY3Rpb25OdW1iZXIsXHJcbiAgaXNTZWN0aW9uQ29tcGxldGVkLFxyXG4gIG91dGNvbWVzLFxyXG4gIElUR3JhZGVzLFxyXG4gIENTR3JhZGVzLFxyXG4gIENFR3JhZGVzXHJcbikge1xyXG4gIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIucG9zdEZvcm0oXHJcbiAgICB1c2VyaWQsXHJcbiAgICB5ZWFyLFxyXG4gICAgc2VtZXN0ZXIsXHJcbiAgICBkZXBhcnRtZW50LFxyXG4gICAgY291cnNlTnVtYmVyLFxyXG4gICAgc2VjdGlvbk51bWJlcixcclxuICAgIGlzU2VjdGlvbkNvbXBsZXRlZCxcclxuICAgIG91dGNvbWVzLFxyXG4gICAgSVRHcmFkZXMsXHJcbiAgICBDU0dyYWRlcyxcclxuICAgIENFR3JhZGVzXHJcbiAgKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbiAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4odXNlcmlkLCBwYXNzd29yZCkge1xyXG4gIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIubG9naW4odXNlcmlkLCBwYXNzd29yZCk7XHJcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIHJldHVybiByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgcGFyc2VJbnQoeWVhcikpO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc29sZS5sb2coY291cnNlcyk7XHJcbiAgcmV0dXJuIGNvdXJzZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGYWN1bHR5TGlzdCgpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldEZhY3VsdHlMaXN0KCk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmYWN1bHR5ID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgcmV0dXJuIGZhY3VsdHk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCByZXNwb25zZTtcclxuICByZXR1cm4gY291cnNlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEZhY3VsdHlNZW1iZXIobGFzdE5hbWUsIGZpcnN0TmFtZSwgaWQsIHR5cGUpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lLCBsYXN0TmFtZSwgaWQsIHR5cGUpO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ291cnNlKFxyXG4gIHVzZXJpZCxcclxuICBmaXJzdE5hbWUsXHJcbiAgbGFzdE5hbWUsXHJcbiAgeWVhciA9IDAsXHJcbiAgc2VtZXN0ZXIsXHJcbiAgY291cnNlTnVtYmVyLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGRlcGFydG1lbnRcclxuKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5hZGRDb3Vyc2UoXHJcbiAgICB1c2VyaWQsXHJcbiAgICBmaXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZSxcclxuICAgICh5ZWFyID0gMCksXHJcbiAgICBzZW1lc3RlcixcclxuICAgIGNvdXJzZU51bWJlcixcclxuICAgIGRpc3BsYXlOYW1lLFxyXG4gICAgZGVwYXJ0bWVudFxyXG4gICk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCByZXNwb25zZTtcclxuICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ291cnNlKHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnQpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLnJlbW92ZUNvdXJzZShcclxuICAgIHllYXIsXHJcbiAgICBzZW1lc3RlcixcclxuICAgIGNvdXJzZU51bWJlcixcclxuICAgIGRlcGFydG1lbnRcclxuICApO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgY29uc29sZS5sb2coY291cnNlTnVtYmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvdXJzZU91dGNvbWVzYnlDb3Vyc2UoXHJcbiAgeWVhciA9IDIwMjAsXHJcbiAgc2VtZXN0ZXIgPSBcIlwiLFxyXG4gIGNvdXJzZU51bWJlciA9IFwiXCIsXHJcbiAgZGVwYXJ0bWVudCA9IFwiXCJcclxuKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRDb3Vyc2VPdXRjb21lc0J5Q291cnNlKFxyXG4gICAgeWVhcixcclxuICAgIHNlbWVzdGVyLFxyXG4gICAgY291cnNlTnVtYmVyLFxyXG4gICAgZGVwYXJ0bWVudFxyXG4gICk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IGNvdXJzZW91dGNvbWVzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgcmV0dXJuIGNvdXJzZW91dGNvbWVzO1xyXG59XHJcbiIsIi8vIEhlbHBlciBBUEkgQ2xhc3NcclxuaW1wb3J0IGNvb2tpZUN1dHRlciBmcm9tICdjb29raWUtY3V0dGVyJztcclxuXHJcbmNvbnN0IHJvb3QgPSBcImh0dHBzOi8vbG9jYWxob3N0OjQ0MzcyL2FwaVwiOyAvLyBUaGUgYmFzZSBVUkwgZm9yIGVhY2ggcmVxdWVzdFxyXG5jb25zdCBPSyA9IDIwMDsgICAgICAgICAgIC8vMjAwIE9rIHN0YXR1cyBjb2RlXHJcbmNvbnN0IFVOQVVUSE9SSVpFRCA9IDQwMTsgLy80MDEgVW5hdXRob3JpemVkIHN0YXR1cyBjb2RlXHJcbmNvbnN0IE5PVF9MT0dHRURfSU5fTVNHID0gXCJFcnJvcjogWW91ciBzZXNzaW9uIGhhcyBleHBpcmVkLiBQbGVhc2UgbG9nIGluIGFnYWluLlwiO1xyXG5jb25zdCBTRVJWRVJfRVJST1JfTVNHID0gXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3I6IFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCI7XHJcbmNvbnN0IEJBRF9SRVFVRVNUX01TRyA9IFwiRXJyb3I6IFNvbWUgb2YgdGhlIHByb3ZpZGVkIHBhcmFtZXRlcnMgYXJlIGludmFsaWQuXCJcclxudmFyIHRva2VuID0gXCJcIjsgICAgICAgICAgIC8vaG9sZHMgdmFsdWUgb2YgdGhlIHRva2VuIGNvb2tpZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcclxuICAgIC8qIFRoaXMgZnVuY3Rpb24gaXMgZm9yIGdldEluaXRpYWxQcm9wcy5cclxuICAgIGNvb2tpZUN1dHRlciBpcyB1bmRlZmluZWQgaW4gZ2V0SW5pdGlhbFByb3BzLFxyXG4gICAgc28gdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSB0b2tlbiB0byB0aGUgdmFsdWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgcGFzc2VkIGluIGZyb20gZ2V0SW5pdGlhbFByb3BzLiAqL1xyXG4gICAgc2V0VG9rZW4odCA9IFwiXCIpIHtcclxuICAgICAgICB0b2tlbiA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJpYyBmdW5jdGlvbiBmb3Igc2VuZGluZyBQT1NUIHJlcXVlc3RzXHJcbiAgICAvLyAgICBJbnB1dDogcm91dGUgYW5kIGJvZHlcclxuICAgIC8vICAgIE91dHB1dDogVGhlIEpTT04gdGhhdCBpcyByZXR1cm5lZCBmcm9tIHRoZSByb3V0ZVxyXG4gICAgYXN5bmMgc2VuZFBvc3Qocm91dGUgPSBcIlwiLCBib2R5ID0ge30pIHtcclxuICAgICAgICBjb25zdCB1cmwgPSByb290ICsgcm91dGU7IC8vIENvbWJpbmUgdGhlIHJvb3QgVVJMIHdpdGggdGhlIHNwZWNpZmllZCByb3V0ZVxyXG4gICAgICAgIHZhciBzdGF0dXNDb2RlOyAvL2hvbGRzIHRoZSBzdGF0dXMgY29kZSBvZiB0aGUgcmVzcG9uc2VcclxuXHJcbiAgICAgICAgLy9pZiB0aGUgcmVxdWVzdCBpcyBub3QgZnJvbSBnZXRJbml0aWFsUHJvcHMsIG1lYW5pbmcgY29va2llQ3V0dGVyIGlzIGRlZmluZWQsIHJldHJlaXZlIHRoZSBjb29raWVcclxuICAgICAgICBpZiAodHlwZW9mIGNvb2tpZUN1dHRlci5nZXQgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gY29va2llQ3V0dGVyLmdldChcInRva2VuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWZlcnJlclBvbGljeTogXCJuby1yZWZlcnJlclwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT0gVU5BVVRIT1JJWkVEKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooTk9UX0xPR0dFRF9JTl9NU0csIGZhbHNlKTsgLy91c2VyJ3Mgc2Vzc2lvbiBoYXMgZXhwaXJlZFxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSBPSylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwibWVzc2FnZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihqc29uW1wibWVzc2FnZVwiXSk7IC8vY3VzdG9tIGVycm9yIG1lc3NhZ2UgZnJvbSBBUElcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooQkFEX1JFUVVFU1RfTVNHKTsgLy9iYWQgaW5wdXQgcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4geyByZXR1cm4gbmV3IEVycm9yT2JqKFNFUlZFUl9FUlJPUl9NU0cpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBQYXNzd29yZFxyXG4gICAgLy8gICAgT3V0cHV0OiBcIkFkbWluXCIsIFwiSW5zdHJ1Y3RvclwiLCBcIlN0dWRlbnQvVEFcIiBvciBib29sZWFuIGZvciBmYWlsdXJlXHJcbiAgICBhc3luYyBsb2dpbih1c2VyaWQgPSBcIlwiLCBwYXNzd29yZCA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvbG9naW5cIiwgYm9keSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcInRva2VuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGV4cGlyZXMuc2V0SG91cnMoZXhwaXJlcy5nZXRIb3VycygpICsgMjQpOyAvL2V4cGlyZXMgaW4gMjQgaG91cnNcclxuICAgICAgICAgICAgICAgIGV4cGlyZXMgPSBleHBpcmVzLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvb2tpZUN1dHRlci5zZXQoXCJ0b2tlblwiLCBqc29uW1widG9rZW5cIl0sIHsgZXhwaXJlcyB9KTsgLy9zZXQgdG9rZW4gY29va2llXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbltcInJvbGVcIl07IC8vcmV0dXJuIHRoZSByb2xlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5sb2dpbih1c2VyaWQsIHBhc3N3b3JkKS50aGVuKHJvbGUgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgcmV0dXJuIHZhbHVlIGlzIGFjY2Vzc2libGUsIGl0IGlzIGVpdGhlciByb2xlIHN0cmluZyBvciBhIGJvb2xlYW4gaW5kaWNhdGluZyBmYWlsdXJlKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tbG9nb3V0KHVzZXJpZCktLS1cclxuICAgIC8vICAgIElucHV0OiBOb25lXHJcbiAgICAvLyAgICBPdXRwdXQ6IE5vbmVcclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KFwidG9rZW5cIiwgXCJcIiwgeyBleHBpcmVzOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgfSk7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldChcInVzZXJcIiwgXCJcIiwgeyBleHBpcmVzOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tZ2V0Q291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogU2VjdGlvbnMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFVzZXJJZCwgU2VtZXN0ZXIgYW5kIFllYXJcclxuICAgIGFzeW5jIGdldENvdXJzZXModXNlcmlkID0gXCJcIiwgc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBzZW1lc3Rlcjogc2VtZXN0ZXIsIHllYXI6IHllYXIgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvc2VjdGlvbnMvYnktdXNlcmlkLXNlbWVzdGVyLXllYXJcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldENvdXJzZXModXNlcklkLCBzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLS0tICAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBTZWN0aW9ucyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgU2VtZXN0ZXIgYW5kIFllYXIgXHJcbiAgICBhc3luYyBnZXRBbGxDb3Vyc2VzKHVzZXJpZCA9IFwiXCIsIHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyBVc2VyaWQ6IHVzZXJpZCwgU2VtZXN0ZXI6IHNlbWVzdGVyLCBZZWFyOiB5ZWFyIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL3NlY3Rpb25zL2J5LXNlbWVzdGVyLXllYXJcIiwgYm9keSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0QWxsQ291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuICAgIC8vLS0tZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyKHNlbWVzdGVyLCB5ZWFyKS0tLSAgKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEFsbCBDb3Vyc2VzIGZvciB0aGUgY29ycmVzcG9uZGluZyBzZW1lc3RlciBhbmQgeWVhciBcclxuICAgIGFzeW5jIGdldENvdXJzZXNCeVNlbWVzdGVyWWVhcihzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSBcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgc2VtZXN0ZXI6IHNlbWVzdGVyLCBcclxuICAgICAgICAgICAgeWVhcjogeWVhciBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2dldC1ieS15ZWFyLXNlbWVzdGVyXCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAvL2FwaS5nZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIoc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG5cclxuICAgIC8vLS0tZ2V0Rm9ybXNCeVNlY3Rpb24odXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlLCBzZWN0aW9uKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIENvdXJzZU51bWJlciwgU2VjdGlvbk51bWJlclxyXG4gICAgLy8gICAgT3V0cHV0OiBGb3JtcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgQ291cnNlTnVtYmVyLCBhbmQgU2VjdGlvbk51bWJlclxyXG4gICAgYXN5bmMgZ2V0Rm9ybUJ5U2VjdGlvbih1c2VyaWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBTZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBJbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBZZWFyOiB5ZWFyLCAgIFxyXG4gICAgICAgICAgICAgICAgU2VtZXN0ZXI6IHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgRGVwYXJ0bWVudDogZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIENvdXJzZU51bWJlcjogY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgU2VjdGlvbk51bWJlcjogc2VjdGlvbk51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvYnktc2VjdGlvblwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0Rm9ybXNCeVNlY3Rpb24odXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlLCBzZWN0aW9uKS50aGVuKGZvcm0gPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBmb3JtIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEZvcm1zQnlDb3Vyc2UodXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIENvdXJzZU51bWJlclxyXG4gICAgLy8gICAgT3V0cHV0OiBGb3JtcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgYW5kIENvdXJzZU51bWJlclxyXG4gICAgYXN5bmMgZ2V0Rm9ybXNCeUNvdXJzZSh1c2VyaWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgQ29vcmRpbmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFllYXI6IHllYXIsXHJcbiAgICAgICAgICAgICAgICBTZW1lc3Rlcjogc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBEZXBhcnRtZW50OiBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgQ291cnNlTnVtYmVyOiBjb3Vyc2VOdW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvYnktY291cnNlXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRGb3Jtc0J5Q291cnNlKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSkudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRBbGxGb3Jtcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBGb3JtcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgU2VtZXN0ZXIgYW5kIFllYXJcclxuICAgIGFzeW5jIGdldEFsbEZvcm1zKHVzZXJpZCA9IFwiXCIsIHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIHtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQsIHNlbWVzdGVyOiBzZW1lc3RlciwgeWVhcjogeWVhciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9ieS1zZW1lc3Rlci15ZWFyXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRBbGxGb3Jtcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBmb3JtcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1wb3N0Rm9ybSh1c2VySWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGlzU2VjdGlvbkNvbXBsZXRlZCwgb3V0Y29tZXMsIElUR3JhZGVzLCBDU0dyYWRlcywgQ0VHcmFkZXMpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogXl5eICAgKHdpbGwgYWxzbyBoYXZlIHBkZiBoZXJlIGxhdGVyIGFzIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyKVxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RGb3JtKHVzZXJJZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIiwgaXNTZWN0aW9uQ29tcGxldGVkID0gZmFsc2UsIG91dGNvbWVzID0gW10sIElUR3JhZGVzID0ge30sIENTR3JhZGVzID0ge30sIENFR3JhZGVzID0ge30pIHtcclxuICAgICAgICAvLyB0aGUgYm9keSB3aWxsIGFsc28gaW5jbHVkZSBhbnkgcGRmIHRvIHBvc3QgaW4gdGhlIGZ1dHVyZVxyXG5cclxuICAgICAgICAvL291dGNvbWVzOiBhbiBhcnJheSBvZiBDb3Vyc2VfT3V0Y29tZXMgb2JqZWN0c1xyXG4gICAgICAgIC8vQ291cnNlX091dGNvbWVzIGNsYXNzOlxyXG4gICAgICAgIC8vc3RyaW5nIG91dGNvbWUsIGludCBudW1iZXJPZklULCBpbnQgbnVtYmVyT2ZDUywgaW50IG51bWJlck9mQ0UsIFN0dWRlbnRXb3Jrc1tdIHN0dWRlbnRXb3Jrc1xyXG4gICAgICAgIC8vU3R1ZGVudFdvcmtzIGNsYXNzOlxyXG4gICAgICAgIC8vc3RyaW5nIHN0dWRlbnRXb3JrLCBzdHJpbmcgZmlsZVVwbG9hZGVkICg8LS0gd2lsbCBpbXBsZW1lbnQgbGF0ZXIpXHJcblxyXG4gICAgICAgIC8vSVQsIENTLCBDRSBHcmFkZXMgY2xhc3M6XHJcbiAgICAgICAgLy9pbnQgQSwgaW50IEIsIGludCBDLCBpbnQgRCwgaW50IEUsIGludCBGLCBpbnQgVywgaW50IEksIGludCB0b3RhbFN0dWRlbnRzXHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBpc1NlY3Rpb25Db21wbGV0ZWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvdXRjb21lcyxcclxuICAgICAgICAgICAgICAgIElUR3JhZGVzLFxyXG4gICAgICAgICAgICAgICAgQ1NHcmFkZXMsXHJcbiAgICAgICAgICAgICAgICBDRUdyYWRlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvcG9zdC1mb3JtXCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tcG9zdENvbW1lbnQodXNlcklkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBjb29yZGluYXRvckNvbW1lbnQsIGlzQ291cnNlQ29tcGxldGVkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgY29vcmRpbmF0b3JDb21tZW50LCBpc0NvdXJzZUNvbXBsZXRlZFxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RDb21tZW50KHVzZXJJZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBjb29yZGluYXRvckNvbW1lbnQgPSBcIlwiLCBpc0NvdXJzZUNvbXBsZXRlZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgY291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdG9yQ29tbWVudCxcclxuICAgICAgICAgICAgICAgIGlzQ291cnNlQ29tcGxldGVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL3Bvc3QtY29tbWVudFwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEJsYW5rRm9ybSh1c2VyaWQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkXHJcbiAgICAvLyAgICBPdXRwdXQ6IEJsYW5rIEZvcm1cclxuICAgIGFzeW5jIGdldEJsYW5rRm9ybSh1c2VyaWQpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9uZXctYmxhbmtcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEJsYW5rRm9ybSh1c2VyaWQpLnRoZW4ocmVzdWx0ID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBpcyBhY2Nlc3NpYmxlLCBpdCBpcyBhIEpTT04qL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLWdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIoKS0tXHJcbiAgICAvLyAgICBJbnB1dDogTm90aGluZ1xyXG4gICAgLy8gICAgT3V0cHV0OiBPYmplY3QgSW5jbHVkaW5nIEN1cnJlbnQgRGVmYXVsdCBZZWFyIGFuZCBTZW1lc3RlclxyXG4gICAgZ2V0RGVmYXVsdFllYXJBbmRTZW1lc3RlcigpIHtcclxuICAgICAgICB2YXIgdGV4dCA9ICd7IFwieWVhclwiOiAwLCcgKyAgICAgICAgIC8vIGNyZWF0ZSBzdHJpbmcgb2Ygb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAnIFwic2VtZXN0ZXJcIjogXCJcIiB9JztcclxuICAgICAgICB2YXIgUmVzdWx0T2JqID0gSlNPTi5wYXJzZSh0ZXh0KTsgICAvLyBjcmVhdGUgb2JqZWN0IGZyb20gdGhlIHN0cmluZ1xyXG5cclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7ICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZGF0ZVxyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERheSgpOyAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkYXlcclxuICAgICAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxOyAgICAvLyBhZGQgb25lIHRvIG1vbnRoIChieSBkZWZhdWx0IEphbnVhcnkgPSAwKVxyXG4gICAgICAgIFJlc3VsdE9iai55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOy8vIGdldCB0aGUgZnVsbCB5ZWFyIGZyb20gdGhlIGRhdGVcclxuICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjsgICAgICAgIC8vIGp1c3QgdG8gYmUgc2FmZVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldCB0aGUgRGVmYXVsdCBTZW1lc3RlciBCYXNlZCBvbiB0aGUgTW9udGhcclxuICAgICAgICBpZiAoKG1vbnRoID4gOCkgfHwgKG1vbnRoID09IDggJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKG1vbnRoID4gNSkgfHwgKG1vbnRoID09IDUgJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcInN1bW1lclwiO1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGlzIGlzIGp1c3QgYSBkZWZhdWx0IHNlbWVzdGVyLCBpdCBhbHdheXMgZGVmYXVsdHMgdG8gdGhlIGxvbmdlciBzZW1lc3RlcnNcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyB3aHkgaXQgZG9lc24ndCBkZWZhdWx0IHRvIHNtYWxsZXIgc3VtbWVyIHNlbWVzdGVyc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJzcHJpbmdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBSZXN1bHRPYmo7ICAgIC8vIHJldHVybiBvYmplY3QgaW5jbHVkaW5nIHRoZSB5ZWFyIGFuZCBzZW1lc3RlclxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tYWRkU2VjdGlvbih1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGRlcGFydG1lbnQsIG51bWJlck9mU3R1ZGVudHMpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBeXl5cclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBhZGRTZWN0aW9uKHVzZXJpZCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBudW1iZXJPZlN0dWRlbnRzID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgaXNTZWN0aW9uQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mU3R1ZGVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9hZGQtc2VjdGlvblwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEZhY3VsdHlMaXN0KCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IG5vbmVcclxuICAgIC8vICAgIE91dHB1dDogTGlzdCBvZiBpbnN0cnVjdG9ycywgY29vcmRpbmF0b3JzLCBhZGp1bmN0IGZhY3VsdGllcywgYW5kIHRlYWNoaW5nIGZlbGxvd3NcclxuICAgIGFzeW5jIGdldEZhY3VsdHlMaXN0KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mYWN1bHR5L2dldC1saXN0XCIsIHt9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1hZGRGYWN1bHR5TWVtYmVyKGZpcnN0TmFtZSwgbGFzdE5hbWUsIHVzZXJpZCwgcm9sZSktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IEZpcnN0IE5hbWUsIExhc3QgTmFtZSBhbmQgVXNlciBJZFxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIGFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB1c2VySWQgPSBcIlwiLCBmYWN1bHR5VHlwZSA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhY3VsdHlUeXBlOiBmYWN1bHR5VHlwZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2ZhY3VsdHkvYWRkLW1lbWJlclwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBkZXBhcnRtZW50XHJcbiAgICAvLyAgICBPdXRwdXQ6IGFycmF5IG9mIGNvdXJzZXNcclxuICAgIGFzeW5jIGdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2dldC1ieS1kZXBhcnRtZW50XCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWFkZENvdXJzZSh1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRpc3BsYXlOYW1lLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogXl5eXHJcbiAgICAvLyAgICBPdXRwdXQ6IHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgYWRkQ291cnNlKHVzZXJpZCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGlzcGxheU5hbWUgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9hZGQtY291cnNlXCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLXJlbW92ZUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIHJlbW92ZUNvdXJzZSh5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9yZW1vdmUtY291cnNlXCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBhcnJheSBvZiBjb3Vyc2Ugb3V0Y29tZXNcclxuICAgIGFzeW5jIGdldENvdXJzZU91dGNvbWVzQnlDb3Vyc2UoeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlLW91dGNvbWVzL2J5LWNvdXJzZVwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RDb3Vyc2VPdXRjb21lcyhvdXRjb21lcyktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IGFycmF5IG9mIG91dGNvbWUgb2JqZWN0cyAoc2VlIG5vdGVzIGJlbG93KVxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RDb3Vyc2VPdXRjb21lcyhvdXRjb21lcyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIC8vYW4gb3V0Y29tZSBvYmplY3QgY29udGFpbnMgdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL29yZGVyIChudW1iZXIpLCBvdXRjb21lIChzdHJpbmcpLCBtYXBwZWRTdHVkZW50T3V0Y29tZXMoYXJyYXkgb2YgbnVtYmVycylcclxuICAgICAgICAvL0V4YW1wbGU6XHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgLy8gICAgb3JkZXI6IDEsIG91dGNvbWU6IFwiQWNjb21wbGlzaCB0aGluZ3NcIiwgbWFwcGVkU3R1ZGVudE91dGNvbWVzOiBbMSwgMCwgMCwgMSwgMCwgMV1cclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgY291cnNlT3V0Y29tZXNMaXN0OiBvdXRjb21lc1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2Utb3V0Y29tZXMvcG9zdC1vdXRjb21lc1wiLCBib2R5KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRXJyb3JPYmoge1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSA9IFwiXCIsIGlzTG9nZ2VkSW4gPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBpc0xvZ2dlZEluO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCAnLi9Db3Vyc2VDYXJkLmNzcydcclxuXHJcbmNvbnN0IENvdXJzZUNhcmQgPSAoe2NvZGUsIHNlY3Rpb24sIG5hbWUsIGNvb3JkaW5hdG9yLCBpbnN0cnVjdG9yLCBmb3JtQ29tcGxldGVkfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj57Y29kZX0ue3NlY3Rpb259PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dD57bmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0Pkluc3RydWN0b3I6IHtpbnN0cnVjdG9yLmZpcnN0TmFtZX0ge2luc3RydWN0b3IubGFzdE5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dD5Db29yZGluYXRvcjoge2Nvb3JkaW5hdG9yLmZpcnN0TmFtZX0ge2Nvb3JkaW5hdG9yLmxhc3ROYW1lfTwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlQ2FyZDsiLCJpbXBvcnQgeyBUZXh0LCBCdXR0b24sIExpbmssIEJveCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCBDb3Vyc2VDYXJkIGZyb20gXCIuL0NvdXJzZUNhcmRcIjtcclxuaW1wb3J0IFwiLi9Gb3Jtc1ZpZXcuY3NzXCI7XHJcblxyXG5jb25zdCBGb3Jtc1ZpZXcgPSAoeyB0ZXJtLCBpbnN0cnVjdG9yQ291cnNlcywgY29vcmRpbmF0b3JDb3Vyc2VzIH0pID0+IHtcclxuICBpbnN0cnVjdG9yQ291cnNlcy5zb3J0KChhLCBiKSA9PlxyXG4gICAgYS5jb3Vyc2VOdW1iZXIgKyBhLnNlY3Rpb25OdW1iZXIgPiBiLmNvdXJzZU51bWJlciArIGIuc2VjdGlvbk51bWJlciA/IDEgOiAtMVxyXG4gICk7XHJcbiAgY29vcmRpbmF0b3JDb3Vyc2VzLnNvcnQoKGEsIGIpID0+XHJcbiAgICBhLmNvdXJzZU51bWJlciArIGEuc2VjdGlvbk51bWJlciA+IGIuY291cnNlTnVtYmVyICsgYi5zZWN0aW9uTnVtYmVyID8gMSA6IC0xXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoY291cnNlLCBzZWN0aW9uKSA9PiB7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgY291cnNlPSR7Y291cnNlfTsgcGF0aD0vYDtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGBzZWN0aW9uPSR7c2VjdGlvbn07IHBhdGg9L2A7XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJJbnN0cnVjdG9yQ291cnNlcyA9IGluc3RydWN0b3JDb3Vyc2VzLm1hcCgoY291cnNlLCBpZHgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENvdXJzZUNhcmRcclxuICAgICAgICAgIGNvZGU9e2NvdXJzZS5jb3Vyc2VOdW1iZXJ9XHJcbiAgICAgICAgICBzZWN0aW9uPXtjb3Vyc2Uuc2VjdGlvbk51bWJlcn1cclxuICAgICAgICAgIGluc3RydWN0b3I9e2NvdXJzZS5pbnN0cnVjdG9yfVxyXG4gICAgICAgICAgY29vcmRpbmF0b3I9e2NvdXJzZS5jb29yZGluYXRvcn1cclxuICAgICAgICAgIG5hbWU9e2NvdXJzZS5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvZm9ybUNvbXBsZXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXJzZS5pc0NvdXJzZUNvbXBsZXRlZCA/IDxCdXR0b24gZm9udFdlaWdodD1cImJvbGRcIiByaWdodEljb249XCJjaGVja1wiIHZhcmlhbnRDb2xvcj1cInRlYWxcIiBtdD1cIjFlbVwiIGlzRGlzYWJsZWQ9XCJ0cnVlXCIgdz1cIjEwMCVcIiBzaXplPVwic21cIj5Gb3JtIENvbXBsZXRlPC9CdXR0b24+IDogPEJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50Q29sb3I9XCJncmVlblwiIG10PVwiMWVtXCIgdz1cIjEwMCVcIiBzaXplPVwic21cIiBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCd0ZXN0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfT5Xb3JrIE9uIEFCRVQgRm9ybTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgIG10PVwiMWVtXCJcclxuICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKGNvdXJzZS5jb3Vyc2VOdW1iZXIsIGNvdXJzZS5zZWN0aW9uTnVtYmVyKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9mb3JtQ29tcGxldGlvblwiO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBXb3JrIE9uIEFCRVQgRm9ybVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSk7XHJcbiAgY29uc3QgcmVuZGVyQ29vcmRpbmF0b3JDb3Vyc2VzID0gY29vcmRpbmF0b3JDb3Vyc2VzLm1hcCgoY291cnNlLCBpZHgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENvdXJzZUNhcmRcclxuICAgICAgICAgIGNvZGU9e2NvdXJzZS5jb3Vyc2VOdW1iZXJ9XHJcbiAgICAgICAgICBzZWN0aW9uPXtjb3Vyc2Uuc2VjdGlvbk51bWJlcn1cclxuICAgICAgICAgIGluc3RydWN0b3I9e2NvdXJzZS5pbnN0cnVjdG9yfVxyXG4gICAgICAgICAgY29vcmRpbmF0b3I9e2NvdXJzZS5jb29yZGluYXRvcn1cclxuICAgICAgICAgIG5hbWU9e2NvdXJzZS5kaXNwbGF5TmFtZX1cclxuICAgICAgICAgIGtleT17aWR4ICogaWR4fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgIG10PVwiMWVtXCJcclxuICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKGNvdXJzZS5jb3Vyc2VOdW1iZXIsIGNvdXJzZS5zZWN0aW9uTnVtYmVyKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxyXG4gICAgICAgICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2Nvb3JkaW5hdG9yQ29tbWVudElucHV0XCI7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBDb21tZW50XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2Utdmlld1wiPlxyXG4gICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cImJvbGRcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgU2VsZWN0ZWQgVGVybToge3Rlcm0uc2VtZXN0ZXJ9IHt0ZXJtLnllYXJ9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Qm94IG10PVwiMmVtXCI+XHJcbiAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIHRleHRBbGlnbj1cImxlZnRcIiBtYj1cIjFlbVwiPlxyXG4gICAgICAgICAgICBJbnN0cnVjdG9yIENvdXJzZXNcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybXMtZ3JpZFwiPntyZW5kZXJJbnN0cnVjdG9yQ291cnNlc308L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBtdD1cIjJlbVwiPlxyXG4gICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiB0ZXh0QWxpZ249XCJsZWZ0XCIgbWI9XCIxZW1cIj5cclxuICAgICAgICAgICAgQ29vcmRpbmF0b3IgQ291cnNlc1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3Jtcy1ncmlkXCI+e3JlbmRlckNvb3JkaW5hdG9yQ291cnNlc308L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXNWaWV3O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBCb3gsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCAnLi9OYXZpZ2F0aW9uLmNzcyc7XHJcbmltcG9ydCBBUEkgZnJvbSBcIi4vLi4vLi4vYXBpL2FwaVwiO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICh7bGlua30pID0+IHtcclxuICAgICAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBBUEkoKS5sb2dvdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAobGluaykge1xyXG4gICAgICAgICAgICBjYXNlICcvZm9ybUNvbXBsZXRpb24nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3JIb21lXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lID0gXCJhcnJvdyByaWdodFwiPjwvaT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9ybUNvbXBsZXRpb25cIj5JbnN0cnVjdG9yIEFCRVQgRm9ybTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbnJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj5iYmI0MjAwPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXtsb2dvdXR9PlNpZ24gT3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcvY29vcmRpbmF0b3JDb21tZW50SW5wdXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3JIb21lXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lID0gXCJhcnJvdyByaWdodFwiPjwvaT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29vcmRpbmF0b3JDb21tZW50SW5wdXRcIj5Db29yZGluYXRvciBBQkVUIEZvcm08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ25yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidXNlci1uYW1lXCI+YmJiNDIwMDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17bG9nb3V0fT5TaWduIE91dDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbnN0cnVjdG9ySG9tZVwiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj5iYmI0MjAwPC9UZXh0PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbnJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj5NVDIwMjA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIG9uQ2xpY2s9e2xvZ291dH0+U2lnbiBPdXQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0YWNrLCBCdXR0b24sIFNlbGVjdCwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0ICcuL1Rlcm1TZWxlY3QuY3NzJztcclxuaW1wb3J0IHt0ZXJtU2VsZWN0QXRvbX0gZnJvbSAnLi4vLi4vcmVjb2lsL3JlY29pbC1zdG9yZSc7XHJcbmltcG9ydCB7dXNlU2V0UmVjb2lsU3RhdGV9IGZyb20gJ3JlY29pbCc7XHJcblxyXG5jb25zdCBUZXJtU2VsZWN0ID0gKHtzZXRSb290VGVybX0pID0+IHtcclxuICAgIGNvbnN0IHNldFRlcm1BdG9tID0gdXNlU2V0UmVjb2lsU3RhdGUodGVybVNlbGVjdEF0b20pO1xyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIG0gPSBkLmdldE1vbnRoKCk7XHJcbiAgICB2YXIgeSA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgIGlmIChtID49IDAgJiYgbSA8PSA1KSB7XHJcbiAgICAgICAgdmFyIHRlcm1PcHRpb25zID0ge1xyXG4gICAgICAgIGN1cnJlbnQ6IFwiU3ByaW5nXCIsXHJcbiAgICAgICAgbmV4dDE6IFwiRmFsbFwiLFxyXG4gICAgICAgIG5leHQyOiBcIlN1bW1lclwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHllYXJPcHRpb25zID0ge1xyXG4gICAgICAgIHllYXIxOiB5LFxyXG4gICAgICAgIHllYXIyOiB5IC0gMSxcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIGlmIChtID49IDYgJiYgbSA8PSA4KSB7XHJcbiAgICAgICAgdmFyIHRlcm1PcHRpb25zID0ge1xyXG4gICAgICAgIGN1cnJlbnQ6IFwiU3VtbWVyXCIsXHJcbiAgICAgICAgbmV4dDE6IFwiU3ByaW5nXCIsXHJcbiAgICAgICAgbmV4dDI6IFwiRmFsbFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHllYXJPcHRpb25zID0ge1xyXG4gICAgICAgIHllYXIxOiB5LFxyXG4gICAgICAgIHllYXIyOiB5IC0gMSxcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdGVybU9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3VycmVudDogXCJGYWxsXCIsXHJcbiAgICAgICAgbmV4dDE6IFwiU3VtbWVyXCIsXHJcbiAgICAgICAgbmV4dDI6IFwiU3ByaW5nXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgeWVhck9wdGlvbnMgPSB7XHJcbiAgICAgICAgeWVhcjE6IHksXHJcbiAgICAgICAgeWVhcjI6IHksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZW1lc3RlcjogdGVybU9wdGlvbnMuY3VycmVudCxcclxuICAgICAgICB5ZWFyOiB5ZWFyT3B0aW9ucy55ZWFyMVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoYW5kbGVTZW1lc3RlckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VGVybSh7XHJcbiAgICAgICAgICAgIC4uLnRlcm0sIFxyXG4gICAgICAgICAgICBzZW1lc3RlcjogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlWWVhckNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VGVybSh7XHJcbiAgICAgICAgICAgIC4uLnRlcm0sIFxyXG4gICAgICAgICAgICB5ZWFyOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj5TZWxlY3QgVGVybTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFyaWFudD1cImZpbGxlZFwiIHc9XCIxMGVtXCIgb25DaGFuZ2U9e2hhbmRsZVNlbWVzdGVyQ2hhbmdlfSB2YWx1ZT17dGVybS5zZW1lc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybU9wdGlvbnMuY3VycmVudH0+e3Rlcm1PcHRpb25zLmN1cnJlbnR9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybU9wdGlvbnMubmV4dDF9Pnt0ZXJtT3B0aW9ucy5uZXh0MX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt0ZXJtT3B0aW9ucy5uZXh0Mn0+e3Rlcm1PcHRpb25zLm5leHQyfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IHZhcmlhbnQ9XCJmaWxsZWRcIiB3PVwiMTBlbVwiIG9uQ2hhbmdlPXtoYW5kbGVZZWFyQ2hhbmdlfSB2YWx1ZT17dGVybS55ZWFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt5ZWFyT3B0aW9ucy55ZWFyMX0+e3llYXJPcHRpb25zLnllYXIxfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3llYXJPcHRpb25zLnllYXIyfT57eWVhck9wdGlvbnMueWVhcjJ9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudENvbG9yPVwiZ3JlZW5cIiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRlcm1BdG9tKHRlcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJvb3RUZXJtKHRlcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYWxlcnQoXCJUZXJtIHNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHsvKiBsYXRlciBpbmNsdWRlIGFuIG9uQ2xpY2sgaGVyZSB0aGF0IHdpbGwgcmUtcXVlcnkgXHJcbiAgICAgICAgICAgICAgICAgICAgZGIgYmFzZWQgb24gdWlkIGFuZCB0aGUgc2VsZWN0ZWQgdGVybS52YWx1ZSBhbmQgeWVhci52YWx1ZSAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlcm1TZWxlY3Q7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnN0cnVjdG9yLWNvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB0ZXJtU2VsZWN0QXRvbSwgdXNlckF0b20gfSBmcm9tIFwiLi4vcmVjb2lsL3JlY29pbC1zdG9yZVwiO1xyXG5pbXBvcnQgVGVybVNlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnN0cnVjdG9yLWNvbXBvbmVudHMvVGVybVNlbGVjdFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5zdHJ1Y3RvckhvbWUuY3NzXCI7XHJcbmltcG9ydCBGb3Jtc1ZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci1jb21wb25lbnRzL0Zvcm1zVmlld1wiO1xyXG5pbXBvcnQgeyBnZXRJbnN0cnVjdG9yQ291cnNlcywgZ2V0Q29vcmRpbmF0b3JDb3Vyc2VzIH0gZnJvbSBcIi4uL2FwaS9BUElIZWxwZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgaW5zdHJ1Y3RvckhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJNVDIwMjBcIik7XHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgc2VtZXN0ZXI6IFwiRmFsbFwiLFxyXG4gICAgeWVhcjogMjAyMCxcclxuICB9KTtcclxuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbnN0cnVjdG9yQ291cnNlczogW10sXHJcbiAgICBjb29yZGluYXRvckNvdXJzZXM6IFtdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnZXRDb3Vyc2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5zdHJ1Y3RvciA9IGF3YWl0IGdldEluc3RydWN0b3JDb3Vyc2VzKHVzZXIsIHRlcm0pO1xyXG4gICAgY29uc3QgY29vcmRpbmF0b3IgPSBhd2FpdCBnZXRDb29yZGluYXRvckNvdXJzZXModXNlciwgdGVybSk7XHJcbiAgICBzZXRDb3Vyc2VzKHtcclxuICAgICAgLi4uY291cnNlcyxcclxuICAgICAgaW5zdHJ1Y3RvckNvdXJzZXM6IGluc3RydWN0b3IsXHJcbiAgICAgIGNvb3JkaW5hdG9yQ291cnNlczogY29vcmRpbmF0b3IsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q291cnNlcygpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYHVzZXI9JHt1c2VyfTsgcGF0aD0vYDtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDb3Vyc2VzKCk7XHJcbiAgfSwgW3Rlcm1dKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFRlcm0gPSB1c2VSZWNvaWxWYWx1ZSh0ZXJtU2VsZWN0QXRvbSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5VTlQgQUJFVDogSW5zdHJ1Y3RvciBQYWdlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TmF2aWdhdGlvbiB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxUZXJtU2VsZWN0IHNldFJvb3RUZXJtPXtzZXRUZXJtfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxGb3Jtc1ZpZXdcclxuICAgICAgICAgICAgdGVybT17Y3VycmVudFRlcm19XHJcbiAgICAgICAgICAgIGluc3RydWN0b3JDb3Vyc2VzPXtjb3Vyc2VzLmluc3RydWN0b3JDb3Vyc2VzfVxyXG4gICAgICAgICAgICBjb29yZGluYXRvckNvdXJzZXM9e2NvdXJzZXMuY29vcmRpbmF0b3JDb3Vyc2VzfVxyXG4gICAgICAgICAgICBrZXk9XCIxMjNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gaW5zdHJ1Y3RvckhvbWUuZ2V0SW5pdGlhbFByb3BzID0gIGFzeW5jIGN0eCA9PiB7XHJcbi8vICAgICBjb25zdCBnZXRDb29raWVzID0gY29va2llcyhjdHgpO1xyXG4vLyAgICAgY29uc3QgdXNlciA9IHVzZVJlY29pbFZhbHVlKHVzZXJBdG9tKTtcclxuLy8gICAgIGNvbnN0IHRlcm0gPSB1c2VSZWNvaWxWYWx1ZSh0ZXJtU2VsZWN0QXRvbSk7XHJcbi8vICAgICBjb25zdCBpbnN0cnVjdG9yID0gYXdhaXQgZ2V0SW5zdHJ1Y3RvckNvdXJzZXModXNlciwgdGVybSk7XHJcbi8vICAgICBjb25zdCBjb29yZGluYXRvciA9IGF3YWl0IGdldENvb3JkaW5hdG9yQ291cnNlcyh1c2VyLCB0ZXJtKTtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgLy8gaW5zdHJ1Y3RvckNvdXJzZUxpc3Q6IGluc3RydWN0b3IsXHJcbi8vICAgICAgICAgLy8gY29vcmRpbmF0b3JDb3Vyc2VMaXN0OiBjb29yZGluYXRvclxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdHJ1Y3RvckhvbWU7XHJcbiIsImltcG9ydCB7IGF0b20gfSBmcm9tICdyZWNvaWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvb3JkaW5hdG9yQ29tbWVudEF0b20gPSBhdG9tKHtcclxuICAgIGtleTogXCJjb29yZGluYXRvci1jb21tZW50XCIsXHJcbiAgICBkZWZhdWx0OiBcIlwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRlcm1TZWxlY3RBdG9tID0gYXRvbSh7XHJcbiAgICBrZXk6IFwidGVybS1zZWxlY3RcIixcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICBzZW1lc3RlcjogXCJGYWxsXCIsXHJcbiAgICAgICAgeWVhcjogMjAyMFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyQXRvbSA9IGF0b20oe1xyXG4gICAga2V5OiBcInVzZXJcIixcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICB1c2VybmFtZTogXCJNVDIwMjBcIlxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtQXRvbSA9IGF0b20oe1xyXG4gICAga2V5OiBcImZvcm1cIlxyXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLWN1dHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb2lsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=