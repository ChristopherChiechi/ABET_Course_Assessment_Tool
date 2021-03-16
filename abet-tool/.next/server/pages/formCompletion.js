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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/formCompletion.js");
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

const BAD_REQUEST = 400; //400 Bad Request status code

const SERVER_ERROR = 500; //500 Internal Server Error status code

const JSON_ERROR_MSG = "Error: Could not parse JSON.";
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

    var statusCode; //if the request is not from getInitialProps, meaning cookieCutter is defined, retreive the cookie

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
      return response.json();
    }).then(json => {
      if (statusCode == OK) return json;else {
        console.log(new ErrorObj(json["message"]));
        return new ErrorObj(json["message"]);
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
      var expires = new Date();
      expires.setHours(expires.getHours() + 24); //expires in 24 hours

      expires = expires.toUTCString();
      cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.set("token", json["token"], {
        expires
      }); //set token cookie

      return json["role"]; //return the role
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
    return await this.sendPost("/forms/post-form", body, true).then(response => {
      return response.status == OK;
    });
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
    return await this.sendPost("/courses/post-comment", body, true).then(response => {
      return response.status == OK;
    });
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
    return await this.sendPost("/sections/add-section", body, true).then(response => {
      return response.status == OK;
    });
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
    return await this.sendPost("/faculty/add-member", body, true).then(response => {
      return response.status == OK;
    });
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
    return await this.sendPost("/courses/add-course", body, true).then(response => {
      return response.status == OK;
    });
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
    return await this.sendPost("/courses/remove-course", body, true).then(response => {
      return response.status == OK;
    });
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
    return await this.sendPost("/course-outcomes/post-outcomes", body, true).then(response => {
      return response.status == OK;
    });
    ;
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

/***/ "./components/instructor-components/FormGrades.css":
/*!*********************************************************!*\
  !*** ./components/instructor-components/FormGrades.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/instructor-components/FormGrades.js":
/*!********************************************************!*\
  !*** ./components/instructor-components/FormGrades.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormGrades_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormGrades.css */ "./components/instructor-components/FormGrades.css");
/* harmony import */ var _FormGrades_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FormGrades_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\instructor-components\\FormGrades.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FormGrades = ({
  grades
}) => {
  const gradesEnum = ['A', 'B', 'C', 'D', 'F', 'W', 'I'];
  const majors = Object.keys(grades).map(major => {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      gridColumn: "1 / 1",
      marginLeft: "0.5em",
      fontWeight: "bold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, major);
  });
  const gradesBreakdown = Object.keys(grades).map((major, row) => {
    return grades[major].map((grade, column) => {
      const gradeCount = grades[major].reduce((a, b) => a + b, 0);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        gridColumn: column + 2,
        gridRow: row + 2,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 26
        }
      }, gradesEnum[column] + ": " + grades[major][column]), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        gridColumn: 9,
        gridRow: row + 2,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 26
        }
      }, "Actual: ", gradeCount));
    });
  });
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "grades-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "grades-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Grades"), majors, gradesBreakdown);
};

/* harmony default export */ __webpack_exports__["default"] = (FormGrades);

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

/***/ "./components/instructor-components/OutcomeInput.css":
/*!***********************************************************!*\
  !*** ./components/instructor-components/OutcomeInput.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/instructor-components/OutcomeInput.js":
/*!**********************************************************!*\
  !*** ./components/instructor-components/OutcomeInput.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OutcomeInput_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutcomeInput.css */ "./components/instructor-components/OutcomeInput.css");
/* harmony import */ var _OutcomeInput_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_OutcomeInput_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInputState */ "./hooks/useInputState.js");
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\components\\instructor-components\\OutcomeInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const OutcomeInput = ({
  outcome,
  index,
  studentsByMajor,
  currentStudentWorks
}) => {
  //console.log(currentStudentWorks);
  const [studentWork, setStudentWork, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  console.log(currentStudentWorks.length);
  const {
    0: studentWorks,
    1: setStudentWorks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([currentStudentWorks]);

  const addStudentWork = event => {
    event.preventDefault();
    setStudentWorks([...studentWorks, {
      id: studentWorks.length,
      studentWork: studentWork
    }]);
    reset();
  };

  const removeStudentWork = id => {
    event.preventDefault();
    setStudentWorks(studentWorks.filter(work => work.id !== id));
  };

  console.log(studentWorks.length);
  const renderStudentWork = studentWorks.map((work, index) => {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      alignItems: "center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      color: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, work[index].studentWork), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      ml: "1rem",
      icon: "delete",
      onClick: e => {
        e.preventDefault();
        removeStudentWork(work.id);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      ml: "1rem",
      icon: "attachment",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }));
  });
  const renderStudentNumberMenu = Object.keys(studentsByMajor).map((key, idx) => {
    const {
      0: value,
      1: setValue
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, key), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInput"], {
      min: 0,
      max: studentsByMajor[key],
      value: value,
      onChange: value => {
        value > studentsByMajor[key] ? setValue(0) : setValue(value);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputField"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberIncrementStepper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberDecrementStepper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "green.500",
      fontWeight: "bold",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, Math.round(value / studentsByMajor[key] * 100) + "%"));
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "outcome-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "vertical-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "Course Outcome ", ++index), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "\"", outcome, "\"")), __jsx("div", {
    className: "vertical-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "Student Work Used"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    styleType: "disc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, renderStudentWork), __jsx("form", {
    onSubmit: addStudentWork,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "add student work",
    variant: "flushed",
    type: "text",
    value: studentWork,
    onChange: setStudentWork,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "vertical-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "Number of Students Who Achieved 75% of this Outcome"), __jsx("div", {
    className: "student-outcome-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, renderStudentNumberMenu))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    borderColor: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OutcomeInput);

/***/ }),

/***/ "./fake-data/course.json":
/*!*******************************!*\
  !*** ./fake-data/course.json ***!
  \*******************************/
/*! exports provided: courses, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"courses\":[{\"code\":\"CSCE 1030\",\"section\":\".001\",\"name\":\"Computer Science I\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"mmt1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course Outcome 1\",\"I want to see how long this can go. So students are going to not be set up well in our CSCE courses. They will have to do everything on their own and fend for themselves.\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":false},{\"code\":\"CSCE 1040\",\"section\":\".007\",\"name\":\"Computer Science II\",\"department\":[\"Computer Science\",\"Information Technology\"],\"instructor\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course Outcome 1\",\"Course Outcome 2\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":false},{\"code\":\"CSCE 2100\",\"section\":\".002\",\"name\":\"Computing Foundations I\",\"department\":[\"Computer Engineering\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2110\",\"section\":\".002\",\"name\":\"Computing Foundations II\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Ludi, Stephanie\",\"id\":\"ssl1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Gather and refine user functional requirements and other functional and non-functional requirements and constraints for a large-scale software system and create a software requirements specification document.\",\"Perform software analysis and design tasks using recognized software methods to create a preliminary design specification for software based on a requirements specification.\",\"Utilize project management principles, skills and tools in creating the requirements and preliminary design specifications.\",\"Create a project managementplan, including a schedule and budget for a large-scale software project.\",\"Utilize configuration management, project management and design tools in the course of the project.\"],\"coordinator-comments\":\"\",\"formCompleted\":true,\"commentComplete\":true},{\"code\":\"CSCE 2410\",\"section\":\".009\",\"name\":\"Programming Laboratory\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\",\"Course outcome 2\",\"Course outcome 3\",\"Course outcome 4\",\"Course outcome 5\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2610\",\"section\":\".001\",\"name\":\"Assembly Language and Computer Organization\",\"department\":[\"Computer Science\"],\"instructor\":{\"name\":\"Garlic, Ryan\",\"id\":\"rrg1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Describe Internet structure and basic protocols, with an emphasis on the client-server paradigm.\",\"Create a sample web page incorporating proper techniques for web-based design.\",\"Incorporate client-side programming techniques for a web application.\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 2900\",\"section\":\".004\",\"name\":\"Special Problems in Computer Science & Engineering\",\"department\":[\"Computer Science\",\"Computer Engineering\"],\"instructor\":{\"name\":\"Bhowmick, Sanjukta\",\"id\":\"bbs1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Be able to analyze the time and space complexity of a nontrivial algorithm, using mathematical, tools, and prove/justify the correctness.\",\"Understand the Divide and Conquer, Greedy, and Dynamic Programming strategies for algorithmic design.\",\"Be familiar with the algorithms for Matrix Multiplication (Strassen's), Activity Selection, Knapsack, Shortest Paths (single source, and all pairs), Minimum Spanning Tree , Matrix Chain, and Longest Common Subsequence problems.\",\"Be exposed to approximation algorithms for solving NP-hard problems\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":true},{\"code\":\"CSCE 2996\",\"section\":\".005\",\"name\":\"Honors College Mentored Research Experience\",\"department\":[\"Computer Science\",\"Computer Engineering\"],\"instructor\":\"Beep, Boop\",\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\",\"Course outcome 2\",\"Course outcome 3\",\"Course outcome 4\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":true},{\"code\":\"CSCE 3010\",\"section\":\".002\",\"name\":\"Signals and Systems\",\"department\":[\"Computer Science\",\"Computer Engineering\",\"Information Technology\"],\"instructor\":{\"name\":\"Thompson, Mark\",\"id\":\"test1234\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\",\"Course outcome 2\",\"Course outcome 3\",\"Course outcome 4\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false},{\"code\":\"CSCE 3020\",\"section\":\".006\",\"name\":\"Communications Systems\",\"department\":[\"Computer Science\",\"Computer Engineering\",\"Information Technology\"],\"instructor\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"coordinator\":{\"name\":\"Beep, Boop\",\"id\":\"bbb4200\"},\"course-outcomes\":[\"Course outcome 1\"],\"coordinator-comments\":\"\",\"formCompleted\":false,\"commentComplete\":false}]}");

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

/***/ "./pages/formCompletion.js":
/*!*********************************!*\
  !*** ./pages/formCompletion.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_formCompletion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/formCompletion.css */ "./styles/formCompletion.css");
/* harmony import */ var _styles_formCompletion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_formCompletion_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_instructor_components_OutcomeInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/instructor-components/OutcomeInput */ "./components/instructor-components/OutcomeInput.js");
/* harmony import */ var _components_instructor_components_FormGrades__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/instructor-components/FormGrades */ "./components/instructor-components/FormGrades.js");
/* harmony import */ var _components_instructor_components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/instructor-components/Navigation */ "./components/instructor-components/Navigation.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Ty\\Desktop\\ABET_frontend\\abet-tool\\pages\\formCompletion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const formCompletion = ({
  form
}) => {
  console.log(form);
  /*
    const outcomes = form.outcomes;
    const ceGrades = form.ceGrades;
    const csGrades = form.csGrades;
    const itGrades = form.itGrades;
    
    const course = form.section;
  */
  //console.log(form);

  const grades = {
    //    A,  B, C, D, F, W, I
    IT: [itGrades.a, itGrades.b, itGrades.c, itGrades.d, itGrades.f, itGrades.w, itGrades.i],
    CS: [csGrades.a, csGrades.b, csGrades.c, csGrades.d, csGrades.f, csGrades.w, csGrades.i],
    CE: [ceGrades.a, ceGrades.b, ceGrades.c, ceGrades.d, ceGrades.f, ceGrades.w, ceGrades.i]
  };

  const numberOfStudentsByMajor = _objectSpread({}, grades);

  for (var major in grades) {
    numberOfStudentsByMajor["IT"] = itGrades.totalStudents;
    numberOfStudentsByMajor["CS"] = csGrades.totalStudents;
    numberOfStudentsByMajor["CE"] = ceGrades.totalStudents;
  }

  const renderOutcomes = outcomes.map((outcome, index) => {
    console.log(outcome.studentWorks.length);
    return __jsx(_components_instructor_components_OutcomeInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      outcome: outcome.outcome,
      currentStudentWorks: outcome.studentWorks,
      index: index,
      studentsByMajor: numberOfStudentsByMajor,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    });
  });

  const handleSubmit = event => {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to submit this form? Once submitted, you can no longer make changes.")) {
      alert("Submitted!");
      window.location = "/homePage";
    }
  };

  const handleSave = event => {
    event.preventDefault();
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "UNT ABET: Form Completion")), __jsx(_components_instructor_components_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    link: "/formCompletion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "xl",
    mb: "1em",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, course.department, " ", course.courseNumber, ".", course.sectionNumber, " ", course.displayName), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "Instructor: ", course.instructor.firstName, " ", course.instructor.lastName), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, "Coordinator: ", course.coordinator.firstName, " ", course.coordinator.lastName), __jsx("div", {
    className: "coordinator-comment",
    fontSize: "lg",
    fontWeight: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    textAlign: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, "Coordinator comments"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, course.coordinatorComments))), __jsx(_components_instructor_components_FormGrades__WEBPACK_IMPORTED_MODULE_5__["default"], {
    grades: grades,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }), renderOutcomes, __jsx("div", {
    className: "buttons-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    onClick: handleSave,
    type: "save",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Save Progress"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variantColor: "green",
    onClick: handleSubmit,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Submit")));
};

formCompletion.getInitialProps = async ctx => {
  const getCookies = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);
  new _api_api__WEBPACK_IMPORTED_MODULE_7__["default"]().setToken(getCookies.token); //token will be blank in the request in getInitialProps without this call

  const section = getCookies.section;
  const course = getCookies.course;
  return {
    user: getCookies.user,
    section,
    course,
    form: await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_8__["getFormData"])(getCookies.user, 2020, "FALL", "CSCE", course, section)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (formCompletion);

/***/ }),

/***/ "./styles/formCompletion.css":
/*!***********************************!*\
  !*** ./styles/formCompletion.css ***!
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

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL0FQSUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvYXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci1jb21wb25lbnRzL0Zvcm1HcmFkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnN0cnVjdG9yLWNvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luc3RydWN0b3ItY29tcG9uZW50cy9PdXRjb21lSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9mb3JtQ29tcGxldGlvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtY3V0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJnZXRDb3Vyc2VzIiwiY291cnNlcyIsImdldEluc3RydWN0b3JDb3Vyc2VzIiwiaWQiLCJ0ZXJtIiwiYXBpX2hlbHBlciIsIkFQSSIsInJlc3BvbnNlIiwic2VtZXN0ZXIiLCJ5ZWFyIiwidGhlbiIsInJlc3VsdCIsImluc3RydWN0b3JDb3Vyc2VzIiwiZmlsdGVyZWRDb3Vyc2VzIiwiZmlsdGVyIiwiY291cnNlIiwiaW5zdHJ1Y3RvciIsImdldENvb3JkaW5hdG9yQ291cnNlcyIsImNvb3JkaW5hdG9yQ291cnNlcyIsImNvb3JkaW5hdG9yIiwiZ2V0Rm9ybURhdGEiLCJkZXBhcnRtZW50Iiwic2VjdGlvbiIsImdldEZvcm1CeVNlY3Rpb24iLCJmb3JtRGF0YSIsInBvc3RDb29yZGluYXRvckNvbW1lbnQiLCJ1c2VyaWQiLCJjb3Vyc2VOdW1iZXIiLCJjb29yZGluYXRvckNvbW1lbnQiLCJpc0NvdXJzZUNvbXBsZXRlZCIsInBvc3RDb21tZW50Iiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0SW5zdHJ1Y3RvckZvcm0iLCJzZWN0aW9uTnVtYmVyIiwiaXNTZWN0aW9uQ29tcGxldGVkIiwib3V0Y29tZXMiLCJJVEdyYWRlcyIsIkNTR3JhZGVzIiwiQ0VHcmFkZXMiLCJwb3N0Rm9ybSIsImxvZ2luIiwicGFzc3dvcmQiLCJnZXRBbGxDb3Vyc2VzIiwicGFyc2VJbnQiLCJnZXRGYWN1bHR5TGlzdCIsImZhY3VsdHkiLCJnZXRDb3Vyc2VzQnlEZXBhcnRtZW50IiwiYWRkRmFjdWx0eU1lbWJlciIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwidHlwZSIsImFkZENvdXJzZSIsImRpc3BsYXlOYW1lIiwicmVtb3ZlQ291cnNlIiwiZ2V0Q291cnNlT3V0Y29tZXNieUNvdXJzZSIsImdldENvdXJzZU91dGNvbWVzQnlDb3Vyc2UiLCJjb3Vyc2VvdXRjb21lcyIsInJvb3QiLCJPSyIsIlVOQVVUSE9SSVpFRCIsIkJBRF9SRVFVRVNUIiwiU0VSVkVSX0VSUk9SIiwiSlNPTl9FUlJPUl9NU0ciLCJOT1RfTE9HR0VEX0lOX01TRyIsIlNFUlZFUl9FUlJPUl9NU0ciLCJCQURfUkVRVUVTVF9NU0ciLCJ0b2tlbiIsInNldFRva2VuIiwidCIsInNlbmRQb3N0Iiwicm91dGUiLCJib2R5IiwidXJsIiwic3RhdHVzQ29kZSIsImNvb2tpZUN1dHRlciIsImdldCIsImZldGNoIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwicmVmZXJyZXJQb2xpY3kiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsIkVycm9yT2JqIiwiY2F0Y2giLCJleHBpcmVzIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJ0b1VUQ1N0cmluZyIsInNldCIsImxvZ291dCIsIlVzZXJpZCIsIlNlbWVzdGVyIiwiWWVhciIsImdldENvdXJzZXNCeVNlbWVzdGVyWWVhciIsIlNlY3Rpb24iLCJJbnN0cnVjdG9yIiwiSWQiLCJEZXBhcnRtZW50IiwiQ291cnNlTnVtYmVyIiwiU2VjdGlvbk51bWJlciIsImdldEZvcm1zQnlDb3Vyc2UiLCJDb3Vyc2UiLCJDb29yZGluYXRvciIsImdldEFsbEZvcm1zIiwidXNlcklkIiwiZm9ybSIsImdldEJsYW5rRm9ybSIsImdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIiLCJ0ZXh0IiwiUmVzdWx0T2JqIiwicGFyc2UiLCJkYXRlIiwiZGF5IiwiZ2V0RGF5IiwibW9udGgiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiYWRkU2VjdGlvbiIsIm51bWJlck9mU3R1ZGVudHMiLCJmYWN1bHR5VHlwZSIsImluZm8iLCJwb3N0Q291cnNlT3V0Y29tZXMiLCJjb3Vyc2VPdXRjb21lc0xpc3QiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJpc0xvZ2dlZEluIiwiRm9ybUdyYWRlcyIsImdyYWRlcyIsImdyYWRlc0VudW0iLCJtYWpvcnMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibWFqb3IiLCJncmFkZXNCcmVha2Rvd24iLCJyb3ciLCJncmFkZSIsImNvbHVtbiIsImdyYWRlQ291bnQiLCJyZWR1Y2UiLCJhIiwiYiIsIk5hdmlnYXRpb24iLCJsaW5rIiwiT3V0Y29tZUlucHV0Iiwib3V0Y29tZSIsImluZGV4Iiwic3R1ZGVudHNCeU1ham9yIiwiY3VycmVudFN0dWRlbnRXb3JrcyIsInN0dWRlbnRXb3JrIiwic2V0U3R1ZGVudFdvcmsiLCJyZXNldCIsInVzZUlucHV0U3RhdGUiLCJsZW5ndGgiLCJzdHVkZW50V29ya3MiLCJzZXRTdHVkZW50V29ya3MiLCJ1c2VTdGF0ZSIsImFkZFN0dWRlbnRXb3JrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZVN0dWRlbnRXb3JrIiwid29yayIsInJlbmRlclN0dWRlbnRXb3JrIiwiZSIsInJlbmRlclN0dWRlbnROdW1iZXJNZW51Iiwia2V5IiwiaWR4IiwidmFsdWUiLCJzZXRWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsImluaXRpYWxWYWwiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJmb3JtQ29tcGxldGlvbiIsIklUIiwiaXRHcmFkZXMiLCJjIiwiZCIsImYiLCJ3IiwiaSIsIkNTIiwiY3NHcmFkZXMiLCJDRSIsImNlR3JhZGVzIiwibnVtYmVyT2ZTdHVkZW50c0J5TWFqb3IiLCJ0b3RhbFN0dWRlbnRzIiwicmVuZGVyT3V0Y29tZXMiLCJoYW5kbGVTdWJtaXQiLCJ3aW5kb3ciLCJjb25maXJtIiwiYWxlcnQiLCJsb2NhdGlvbiIsImhhbmRsZVNhdmUiLCJjb29yZGluYXRvckNvbW1lbnRzIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZ2V0Q29va2llcyIsImNvb2tpZXMiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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aUMsTUFBT0MsR0FBUCxJQUFlO0FBQzlDLFFBQU1DLFVBQVUsR0FBR0MsbURBQU8sQ0FBQ0YsR0FBRCxDQUExQjtBQUNBLE1BQUlyTSxnREFBSixHQUFVK0QsUUFBVixDQUFtQnVJLFVBQVUsQ0FBQ3hJLEtBQTlCLEVBRjhDLENBRVI7O0FBQ3RDLFFBQU05QyxPQUFPLEdBQUdzTCxVQUFVLENBQUN0TCxPQUEzQjtBQUNBLFFBQU1QLE1BQU0sR0FBRzZMLFVBQVUsQ0FBQzdMLE1BQTFCO0FBQ0EsU0FBTztBQUNMK0wsUUFBSSxFQUFFRixVQUFVLENBQUNFLElBRFo7QUFFTHhMLFdBRks7QUFHTFAsVUFISztBQUlMZ0csUUFBSSxFQUFFLE1BQU0zRixrRUFBVyxDQUNyQndMLFVBQVUsQ0FBQ0UsSUFEVSxFQUVyQixJQUZxQixFQUdyQixNQUhxQixFQUlyQixNQUpxQixFQUtyQi9MLE1BTHFCLEVBTXJCTyxPQU5xQjtBQUpsQixHQUFQO0FBYUQsQ0FsQkQ7O0FBb0JlOEosNkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9mb3JtQ29tcGxldGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZm9ybUNvbXBsZXRpb24uanNcIik7XG4iLCJpbXBvcnQgY291cnNlcyBmcm9tIFwiLi4vZmFrZS1kYXRhL2NvdXJzZS5qc29uXCI7XHJcbmltcG9ydCBBUEkgZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q291cnNlcygpIHtcclxuICByZXR1cm4gY291cnNlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluc3RydWN0b3JDb3Vyc2VzKGlkLCB0ZXJtKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRDb3Vyc2VzKGlkLCB0ZXJtLnNlbWVzdGVyLCB0ZXJtLnllYXIpO1xyXG5cclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGluc3RydWN0b3JDb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc3QgZmlsdGVyZWRDb3Vyc2VzID0gaW5zdHJ1Y3RvckNvdXJzZXMuZmlsdGVyKFxyXG4gICAgKGNvdXJzZSkgPT4gY291cnNlLmluc3RydWN0b3IuaWQgPT09IGlkXHJcbiAgKTtcclxuICByZXR1cm4gZmlsdGVyZWRDb3Vyc2VzO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRvckNvdXJzZXMoaWQsIHRlcm0pIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldENvdXJzZXMoaWQsIHRlcm0uc2VtZXN0ZXIsIHRlcm0ueWVhcik7XHJcblxyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29vcmRpbmF0b3JDb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc3QgZmlsdGVyZWRDb3Vyc2VzID0gY29vcmRpbmF0b3JDb3Vyc2VzLmZpbHRlcihcclxuICAgIChjb3Vyc2UpID0+IGNvdXJzZS5jb29yZGluYXRvci5pZCA9PT0gaWRcclxuICApO1xyXG4gIHJldHVybiBmaWx0ZXJlZENvdXJzZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGb3JtRGF0YShpZCwgeWVhciwgdGVybSwgZGVwYXJ0bWVudCwgY291cnNlLCBzZWN0aW9uKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRGb3JtQnlTZWN0aW9uKFxyXG4gICAgaWQsXHJcbiAgICB5ZWFyLFxyXG4gICAgdGVybSxcclxuICAgIGRlcGFydG1lbnQsXHJcbiAgICBjb3Vyc2UsXHJcbiAgICBzZWN0aW9uXHJcbiAgKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXNwb25zZTtcclxuICByZXR1cm4gZm9ybURhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Q29vcmRpbmF0b3JDb21tZW50KFxyXG4gIHVzZXJpZCxcclxuICB5ZWFyLFxyXG4gIHNlbWVzdGVyLFxyXG4gIGRlcGFydG1lbnQsXHJcbiAgY291cnNlTnVtYmVyLFxyXG4gIGNvb3JkaW5hdG9yQ29tbWVudCxcclxuICBpc0NvdXJzZUNvbXBsZXRlZFxyXG4pIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLnBvc3RDb21tZW50KFxyXG4gICAgdXNlcmlkLFxyXG4gICAgeWVhcixcclxuICAgIHNlbWVzdGVyLFxyXG4gICAgZGVwYXJ0bWVudCxcclxuICAgIGNvdXJzZU51bWJlcixcclxuICAgIGNvb3JkaW5hdG9yQ29tbWVudCxcclxuICAgIGlzQ291cnNlQ29tcGxldGVkXHJcbiAgKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbiAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEluc3RydWN0b3JGb3JtKFxyXG4gIHVzZXJpZCxcclxuICB5ZWFyLFxyXG4gIHNlbWVzdGVyLFxyXG4gIGRlcGFydG1lbnQsXHJcbiAgY291cnNlTnVtYmVyLFxyXG4gIHNlY3Rpb25OdW1iZXIsXHJcbiAgaXNTZWN0aW9uQ29tcGxldGVkLFxyXG4gIG91dGNvbWVzLFxyXG4gIElUR3JhZGVzLFxyXG4gIENTR3JhZGVzLFxyXG4gIENFR3JhZGVzXHJcbikge1xyXG4gIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIucG9zdEZvcm0oXHJcbiAgICB1c2VyaWQsXHJcbiAgICB5ZWFyLFxyXG4gICAgc2VtZXN0ZXIsXHJcbiAgICBkZXBhcnRtZW50LFxyXG4gICAgY291cnNlTnVtYmVyLFxyXG4gICAgc2VjdGlvbk51bWJlcixcclxuICAgIGlzU2VjdGlvbkNvbXBsZXRlZCxcclxuICAgIG91dGNvbWVzLFxyXG4gICAgSVRHcmFkZXMsXHJcbiAgICBDU0dyYWRlcyxcclxuICAgIENFR3JhZGVzXHJcbiAgKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbiAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4odXNlcmlkLCBwYXNzd29yZCkge1xyXG4gIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIubG9naW4odXNlcmlkLCBwYXNzd29yZCk7XHJcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIHJldHVybiByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgcGFyc2VJbnQoeWVhcikpO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc29sZS5sb2coY291cnNlcyk7XHJcbiAgcmV0dXJuIGNvdXJzZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGYWN1bHR5TGlzdCgpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldEZhY3VsdHlMaXN0KCk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmYWN1bHR5ID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgcmV0dXJuIGZhY3VsdHk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCByZXNwb25zZTtcclxuICByZXR1cm4gY291cnNlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEZhY3VsdHlNZW1iZXIobGFzdE5hbWUsIGZpcnN0TmFtZSwgaWQsIHR5cGUpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lLCBsYXN0TmFtZSwgaWQsIHR5cGUpO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkQ291cnNlKFxyXG4gIHVzZXJpZCxcclxuICBmaXJzdE5hbWUsXHJcbiAgbGFzdE5hbWUsXHJcbiAgeWVhciA9IDAsXHJcbiAgc2VtZXN0ZXIsXHJcbiAgY291cnNlTnVtYmVyLFxyXG4gIGRpc3BsYXlOYW1lLFxyXG4gIGRlcGFydG1lbnRcclxuKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5hZGRDb3Vyc2UoXHJcbiAgICB1c2VyaWQsXHJcbiAgICBmaXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZSxcclxuICAgICh5ZWFyID0gMCksXHJcbiAgICBzZW1lc3RlcixcclxuICAgIGNvdXJzZU51bWJlcixcclxuICAgIGRpc3BsYXlOYW1lLFxyXG4gICAgZGVwYXJ0bWVudFxyXG4gICk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCByZXNwb25zZTtcclxuICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ291cnNlKHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnQpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLnJlbW92ZUNvdXJzZShcclxuICAgIHllYXIsXHJcbiAgICBzZW1lc3RlcixcclxuICAgIGNvdXJzZU51bWJlcixcclxuICAgIGRlcGFydG1lbnRcclxuICApO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgY29uc29sZS5sb2coY291cnNlTnVtYmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvdXJzZU91dGNvbWVzYnlDb3Vyc2UoXHJcbiAgeWVhciA9IDIwMjAsXHJcbiAgc2VtZXN0ZXIgPSBcIlwiLFxyXG4gIGNvdXJzZU51bWJlciA9IFwiXCIsXHJcbiAgZGVwYXJ0bWVudCA9IFwiXCJcclxuKSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRDb3Vyc2VPdXRjb21lc0J5Q291cnNlKFxyXG4gICAgeWVhcixcclxuICAgIHNlbWVzdGVyLFxyXG4gICAgY291cnNlTnVtYmVyLFxyXG4gICAgZGVwYXJ0bWVudFxyXG4gICk7XHJcbiAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IGNvdXJzZW91dGNvbWVzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgcmV0dXJuIGNvdXJzZW91dGNvbWVzO1xyXG59XHJcbiIsIi8vIEhlbHBlciBBUEkgQ2xhc3NcclxuaW1wb3J0IGNvb2tpZUN1dHRlciBmcm9tICdjb29raWUtY3V0dGVyJztcclxuXHJcbmNvbnN0IHJvb3QgPSBcImh0dHBzOi8vbG9jYWxob3N0OjQ0MzcyL2FwaVwiOyAvLyBUaGUgYmFzZSBVUkwgZm9yIGVhY2ggcmVxdWVzdFxyXG5jb25zdCBPSyA9IDIwMDsgICAgICAgICAgIC8vMjAwIE9rIHN0YXR1cyBjb2RlXHJcbmNvbnN0IFVOQVVUSE9SSVpFRCA9IDQwMTsgLy80MDEgVW5hdXRob3JpemVkIHN0YXR1cyBjb2RlXHJcbmNvbnN0IEJBRF9SRVFVRVNUID0gNDAwOyAgLy80MDAgQmFkIFJlcXVlc3Qgc3RhdHVzIGNvZGVcclxuY29uc3QgU0VSVkVSX0VSUk9SID0gNTAwOyAvLzUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3Igc3RhdHVzIGNvZGVcclxuY29uc3QgSlNPTl9FUlJPUl9NU0cgPSBcIkVycm9yOiBDb3VsZCBub3QgcGFyc2UgSlNPTi5cIjtcclxuY29uc3QgTk9UX0xPR0dFRF9JTl9NU0cgPSBcIkVycm9yOiBZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uXCI7XHJcbmNvbnN0IFNFUlZFUl9FUlJPUl9NU0cgPSBcIkludGVybmFsIFNlcnZlciBFcnJvcjogUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIjtcclxuY29uc3QgQkFEX1JFUVVFU1RfTVNHID0gXCJFcnJvcjogU29tZSBvZiB0aGUgcHJvdmlkZWQgcGFyYW1ldGVycyBhcmUgaW52YWxpZC5cIlxyXG52YXIgdG9rZW4gPSBcIlwiOyAgICAgICAgICAgLy9ob2xkcyB2YWx1ZSBvZiB0aGUgdG9rZW4gY29va2llXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xyXG4gICAgLyogVGhpcyBmdW5jdGlvbiBpcyBmb3IgZ2V0SW5pdGlhbFByb3BzLlxyXG4gICAgY29va2llQ3V0dGVyIGlzIHVuZGVmaW5lZCBpbiBnZXRJbml0aWFsUHJvcHMsXHJcbiAgICBzbyB0aGlzIGZ1bmN0aW9uIHNldHMgdGhlIHRva2VuIHRvIHRoZSB2YWx1ZSBvZiB0aGUgY29va2llXHJcbiAgICBwYXNzZWQgaW4gZnJvbSBnZXRJbml0aWFsUHJvcHMuICovXHJcbiAgICBzZXRUb2tlbih0ID0gXCJcIikge1xyXG4gICAgICAgIHRva2VuID0gdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZW5lcmljIGZ1bmN0aW9uIGZvciBzZW5kaW5nIFBPU1QgcmVxdWVzdHNcclxuICAgIC8vICAgIElucHV0OiByb3V0ZSBhbmQgYm9keVxyXG4gICAgLy8gICAgT3V0cHV0OiBUaGUgSlNPTiB0aGF0IGlzIHJldHVybmVkIGZyb20gdGhlIHJvdXRlXHJcbiAgICBhc3luYyBzZW5kUG9zdChyb3V0ZSA9IFwiXCIsIGJvZHkgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHJvb3QgKyByb3V0ZTsgLy8gQ29tYmluZSB0aGUgcm9vdCBVUkwgd2l0aCB0aGUgc3BlY2lmaWVkIHJvdXRlXHJcbiAgICAgICAgdmFyIHN0YXR1c0NvZGU7XHJcblxyXG4gICAgICAgIC8vaWYgdGhlIHJlcXVlc3QgaXMgbm90IGZyb20gZ2V0SW5pdGlhbFByb3BzLCBtZWFuaW5nIGNvb2tpZUN1dHRlciBpcyBkZWZpbmVkLCByZXRyZWl2ZSB0aGUgY29va2llXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb29raWVDdXR0ZXIuZ2V0ID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0b2tlbiA9IGNvb2tpZUN1dHRlci5nZXQoXCJ0b2tlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6IFwibm8tcmVmZXJyZXJcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09IE9LKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3IEVycm9yT2JqKGpzb25bXCJtZXNzYWdlXCJdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihqc29uW1wibWVzc2FnZVwiXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7IHJldHVybiBuZXcgRXJyb3JPYmooU0VSVkVSX0VSUk9SX01TRyk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tbG9naW4odXNlcmlkLCBwYXNzd29yZCktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFBhc3N3b3JkXHJcbiAgICAvLyAgICBPdXRwdXQ6IFwiQWRtaW5cIiwgXCJJbnN0cnVjdG9yXCIsIFwiU3R1ZGVudC9UQVwiIG9yIGJvb2xlYW4gZm9yIGZhaWx1cmVcclxuICAgIGFzeW5jIGxvZ2luKHVzZXJpZCA9IFwiXCIsIHBhc3N3b3JkID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9sb2dpblwiLCBib2R5KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGlyZXMuc2V0SG91cnMoZXhwaXJlcy5nZXRIb3VycygpICsgMjQpOyAvL2V4cGlyZXMgaW4gMjQgaG91cnNcclxuICAgICAgICAgICAgZXhwaXJlcyA9IGV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvb2tpZUN1dHRlci5zZXQoXCJ0b2tlblwiLCBqc29uW1widG9rZW5cIl0sIHsgZXhwaXJlcyB9KTsgLy9zZXQgdG9rZW4gY29va2llXHJcbiAgICAgICAgICAgIHJldHVybiBqc29uW1wicm9sZVwiXTsgLy9yZXR1cm4gdGhlIHJvbGVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkubG9naW4odXNlcmlkLCBwYXNzd29yZCkudGhlbihyb2xlID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBpcyBhY2Nlc3NpYmxlLCBpdCBpcyBlaXRoZXIgcm9sZSBzdHJpbmcgb3IgYSBib29sZWFuIGluZGljYXRpbmcgZmFpbHVyZSovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWxvZ291dCh1c2VyaWQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogTm9uZVxyXG4gICAgLy8gICAgT3V0cHV0OiBOb25lXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldChcInRva2VuXCIsIFwiXCIsIHsgZXhwaXJlczogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpIH0pO1xyXG4gICAgICAgIGNvb2tpZUN1dHRlci5zZXQoXCJ1c2VyXCIsIFwiXCIsIHsgZXhwaXJlczogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWdldENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhciktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IFNlY3Rpb25zIGZvciB0aGUgY29ycmVzcG9uZGluZyBVc2VySWQsIFNlbWVzdGVyIGFuZCBZZWFyXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VzKHVzZXJpZCA9IFwiXCIsIHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCwgc2VtZXN0ZXI6IHNlbWVzdGVyLCB5ZWFyOiB5ZWFyIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL3NlY3Rpb25zL2J5LXVzZXJpZC1zZW1lc3Rlci15ZWFyXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRDb3Vyc2VzKHVzZXJJZCwgc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0QWxsQ291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS0tLSAgKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogU2VjdGlvbnMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFNlbWVzdGVyIGFuZCBZZWFyIFxyXG4gICAgYXN5bmMgZ2V0QWxsQ291cnNlcyh1c2VyaWQgPSBcIlwiLCBzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgVXNlcmlkOiB1c2VyaWQsIFNlbWVzdGVyOiBzZW1lc3RlciwgWWVhcjogeWVhciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9ieS1zZW1lc3Rlci15ZWFyXCIsIGJvZHkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcbiAgICAvLy0tLWdldENvdXJzZXNCeVNlbWVzdGVyWWVhcihzZW1lc3RlciwgeWVhciktLS0gIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBBbGwgQ291cnNlcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgc2VtZXN0ZXIgYW5kIHllYXIgXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIoc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkgXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIHNlbWVzdGVyOiBzZW1lc3RlciwgXHJcbiAgICAgICAgICAgIHllYXI6IHllYXIgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9nZXQtYnkteWVhci1zZW1lc3RlclwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgLy9hcGkuZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyKHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuXHJcbiAgICAvLy0tLWdldEZvcm1zQnlTZWN0aW9uKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSwgc2VjdGlvbiktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBDb3Vyc2VOdW1iZXIsIFNlY3Rpb25OdW1iZXJcclxuICAgIC8vICAgIE91dHB1dDogRm9ybXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIENvdXJzZU51bWJlciwgYW5kIFNlY3Rpb25OdW1iZXJcclxuICAgIGFzeW5jIGdldEZvcm1CeVNlY3Rpb24odXNlcmlkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgU2VjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgSW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgWWVhcjogeWVhciwgICBcclxuICAgICAgICAgICAgICAgIFNlbWVzdGVyOiBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIERlcGFydG1lbnQ6IGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBDb3Vyc2VOdW1iZXI6IGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFNlY3Rpb25OdW1iZXI6IHNlY3Rpb25OdW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL2J5LXNlY3Rpb25cIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEZvcm1zQnlTZWN0aW9uKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSwgc2VjdGlvbikudGhlbihmb3JtID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgZm9ybSBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRGb3Jtc0J5Q291cnNlKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBDb3Vyc2VOdW1iZXJcclxuICAgIC8vICAgIE91dHB1dDogRm9ybXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIGFuZCBDb3Vyc2VOdW1iZXJcclxuICAgIGFzeW5jIGdldEZvcm1zQnlDb3Vyc2UodXNlcmlkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBZZWFyOiB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgU2VtZXN0ZXI6IHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgRGVwYXJ0bWVudDogZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIENvdXJzZU51bWJlcjogY291cnNlTnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL2J5LWNvdXJzZVwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0Rm9ybXNCeUNvdXJzZSh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0QWxsRm9ybXModXNlcmlkLCBzZW1lc3RlciwgeWVhciktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogRm9ybXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFNlbWVzdGVyIGFuZCBZZWFyXHJcbiAgICBhc3luYyBnZXRBbGxGb3Jtcyh1c2VyaWQgPSBcIlwiLCBzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBzZW1lc3Rlcjogc2VtZXN0ZXIsIHllYXI6IHllYXIgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvYnktc2VtZXN0ZXIteWVhclwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0QWxsRm9ybXModXNlcmlkLCBzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgZm9ybXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tcG9zdEZvcm0odXNlcklkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBzZWN0aW9uTnVtYmVyLCBpc1NlY3Rpb25Db21wbGV0ZWQsIG91dGNvbWVzLCBJVEdyYWRlcywgQ1NHcmFkZXMsIENFR3JhZGVzKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IF5eXiAgICh3aWxsIGFsc28gaGF2ZSBwZGYgaGVyZSBsYXRlciBhcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlcilcclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0Rm9ybSh1c2VySWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIsIGlzU2VjdGlvbkNvbXBsZXRlZCA9IGZhbHNlLCBvdXRjb21lcyA9IFtdLCBJVEdyYWRlcyA9IHt9LCBDU0dyYWRlcyA9IHt9LCBDRUdyYWRlcyA9IHt9KSB7XHJcbiAgICAgICAgLy8gdGhlIGJvZHkgd2lsbCBhbHNvIGluY2x1ZGUgYW55IHBkZiB0byBwb3N0IGluIHRoZSBmdXR1cmVcclxuXHJcbiAgICAgICAgLy9vdXRjb21lczogYW4gYXJyYXkgb2YgQ291cnNlX091dGNvbWVzIG9iamVjdHNcclxuICAgICAgICAvL0NvdXJzZV9PdXRjb21lcyBjbGFzczpcclxuICAgICAgICAvL3N0cmluZyBvdXRjb21lLCBpbnQgbnVtYmVyT2ZJVCwgaW50IG51bWJlck9mQ1MsIGludCBudW1iZXJPZkNFLCBTdHVkZW50V29ya3NbXSBzdHVkZW50V29ya3NcclxuICAgICAgICAvL1N0dWRlbnRXb3JrcyBjbGFzczpcclxuICAgICAgICAvL3N0cmluZyBzdHVkZW50V29yaywgc3RyaW5nIGZpbGVVcGxvYWRlZCAoPC0tIHdpbGwgaW1wbGVtZW50IGxhdGVyKVxyXG5cclxuICAgICAgICAvL0lULCBDUywgQ0UgR3JhZGVzIGNsYXNzOlxyXG4gICAgICAgIC8vaW50IEEsIGludCBCLCBpbnQgQywgaW50IEQsIGludCBFLCBpbnQgRiwgaW50IFcsIGludCBJLCBpbnQgdG90YWxTdHVkZW50c1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWN0aW9uQ29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3V0Y29tZXMsXHJcbiAgICAgICAgICAgICAgICBJVEdyYWRlcyxcclxuICAgICAgICAgICAgICAgIENTR3JhZGVzLFxyXG4gICAgICAgICAgICAgICAgQ0VHcmFkZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL3Bvc3QtZm9ybVwiLCBib2R5LCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4geyByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09IE9LOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RDb21tZW50KHVzZXJJZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgY29vcmRpbmF0b3JDb21tZW50LCBpc0NvdXJzZUNvbXBsZXRlZCktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIGNvb3JkaW5hdG9yQ29tbWVudCwgaXNDb3Vyc2VDb21wbGV0ZWRcclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0Q29tbWVudCh1c2VySWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgY29vcmRpbmF0b3JDb21tZW50ID0gXCJcIiwgaXNDb3Vyc2VDb21wbGV0ZWQgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGNvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgQ29vcmRpbmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRvckNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICBpc0NvdXJzZUNvbXBsZXRlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9wb3N0LWNvbW1lbnRcIiwgYm9keSwgdHJ1ZSkudGhlbigocmVzcG9uc2UpID0+IHsgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PSBPSzsgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEJsYW5rRm9ybSh1c2VyaWQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkXHJcbiAgICAvLyAgICBPdXRwdXQ6IEJsYW5rIEZvcm1cclxuICAgIGFzeW5jIGdldEJsYW5rRm9ybSh1c2VyaWQpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9uZXctYmxhbmtcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEJsYW5rRm9ybSh1c2VyaWQpLnRoZW4ocmVzdWx0ID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBpcyBhY2Nlc3NpYmxlLCBpdCBpcyBhIEpTT04qL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLWdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIoKS0tXHJcbiAgICAvLyAgICBJbnB1dDogTm90aGluZ1xyXG4gICAgLy8gICAgT3V0cHV0OiBPYmplY3QgSW5jbHVkaW5nIEN1cnJlbnQgRGVmYXVsdCBZZWFyIGFuZCBTZW1lc3RlclxyXG4gICAgZ2V0RGVmYXVsdFllYXJBbmRTZW1lc3RlcigpIHtcclxuICAgICAgICB2YXIgdGV4dCA9ICd7IFwieWVhclwiOiAwLCcgKyAgICAgICAgIC8vIGNyZWF0ZSBzdHJpbmcgb2Ygb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAnIFwic2VtZXN0ZXJcIjogXCJcIiB9JztcclxuICAgICAgICB2YXIgUmVzdWx0T2JqID0gSlNPTi5wYXJzZSh0ZXh0KTsgICAvLyBjcmVhdGUgb2JqZWN0IGZyb20gdGhlIHN0cmluZ1xyXG5cclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7ICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZGF0ZVxyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERheSgpOyAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkYXlcclxuICAgICAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxOyAgICAvLyBhZGQgb25lIHRvIG1vbnRoIChieSBkZWZhdWx0IEphbnVhcnkgPSAwKVxyXG4gICAgICAgIFJlc3VsdE9iai55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOy8vIGdldCB0aGUgZnVsbCB5ZWFyIGZyb20gdGhlIGRhdGVcclxuICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjsgICAgICAgIC8vIGp1c3QgdG8gYmUgc2FmZVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldCB0aGUgRGVmYXVsdCBTZW1lc3RlciBCYXNlZCBvbiB0aGUgTW9udGhcclxuICAgICAgICBpZiAoKG1vbnRoID4gOCkgfHwgKG1vbnRoID09IDggJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKG1vbnRoID4gNSkgfHwgKG1vbnRoID09IDUgJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcInN1bW1lclwiO1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGlzIGlzIGp1c3QgYSBkZWZhdWx0IHNlbWVzdGVyLCBpdCBhbHdheXMgZGVmYXVsdHMgdG8gdGhlIGxvbmdlciBzZW1lc3RlcnNcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyB3aHkgaXQgZG9lc24ndCBkZWZhdWx0IHRvIHNtYWxsZXIgc3VtbWVyIHNlbWVzdGVyc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJzcHJpbmdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBSZXN1bHRPYmo7ICAgIC8vIHJldHVybiBvYmplY3QgaW5jbHVkaW5nIHRoZSB5ZWFyIGFuZCBzZW1lc3RlclxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tYWRkU2VjdGlvbih1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGRlcGFydG1lbnQsIG51bWJlck9mU3R1ZGVudHMpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBeXl5cclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBhZGRTZWN0aW9uKHVzZXJpZCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBudW1iZXJPZlN0dWRlbnRzID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgaXNTZWN0aW9uQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mU3R1ZGVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9hZGQtc2VjdGlvblwiLCBib2R5LCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4geyByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09IE9LOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEZhY3VsdHlMaXN0KCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IG5vbmVcclxuICAgIC8vICAgIE91dHB1dDogTGlzdCBvZiBpbnN0cnVjdG9ycywgY29vcmRpbmF0b3JzLCBhZGp1bmN0IGZhY3VsdGllcywgYW5kIHRlYWNoaW5nIGZlbGxvd3NcclxuICAgIGFzeW5jIGdldEZhY3VsdHlMaXN0KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mYWN1bHR5L2dldC1saXN0XCIsIHt9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1hZGRGYWN1bHR5TWVtYmVyKGZpcnN0TmFtZSwgbGFzdE5hbWUsIHVzZXJpZCwgcm9sZSktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IEZpcnN0IE5hbWUsIExhc3QgTmFtZSBhbmQgVXNlciBJZFxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIGFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB1c2VySWQgPSBcIlwiLCBmYWN1bHR5VHlwZSA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhY3VsdHlUeXBlOiBmYWN1bHR5VHlwZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2ZhY3VsdHkvYWRkLW1lbWJlclwiLCBib2R5LCB0cnVlKS50aGVuICgocmVzcG9uc2UpID0+IHtyZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09IE9LOyB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBkZXBhcnRtZW50XHJcbiAgICAvLyAgICBPdXRwdXQ6IGFycmF5IG9mIGNvdXJzZXNcclxuICAgIGFzeW5jIGdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2dldC1ieS1kZXBhcnRtZW50XCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWFkZENvdXJzZSh1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRpc3BsYXlOYW1lLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogXl5eXHJcbiAgICAvLyAgICBPdXRwdXQ6IHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgYWRkQ291cnNlKHVzZXJpZCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGlzcGxheU5hbWUgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9hZGQtY291cnNlXCIsIGJvZHksIHRydWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5zdGF0dXMgPT0gT0s7IH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLXJlbW92ZUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIHJlbW92ZUNvdXJzZSh5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9yZW1vdmUtY291cnNlXCIsIGJvZHksIHRydWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5zdGF0dXMgPT0gT0s7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBhcnJheSBvZiBjb3Vyc2Ugb3V0Y29tZXNcclxuICAgIGFzeW5jIGdldENvdXJzZU91dGNvbWVzQnlDb3Vyc2UoeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlLW91dGNvbWVzL2J5LWNvdXJzZVwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RDb3Vyc2VPdXRjb21lcyhvdXRjb21lcyktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IGFycmF5IG9mIG91dGNvbWUgb2JqZWN0cyAoc2VlIG5vdGVzIGJlbG93KVxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RDb3Vyc2VPdXRjb21lcyhvdXRjb21lcyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIC8vYW4gb3V0Y29tZSBvYmplY3QgY29udGFpbnMgdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL29yZGVyIChudW1iZXIpLCBvdXRjb21lIChzdHJpbmcpLCBtYXBwZWRTdHVkZW50T3V0Y29tZXMoYXJyYXkgb2YgbnVtYmVycylcclxuICAgICAgICAvL0V4YW1wbGU6XHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgLy8gICAgb3JkZXI6IDEsIG91dGNvbWU6IFwiQWNjb21wbGlzaCB0aGluZ3NcIiwgbWFwcGVkU3R1ZGVudE91dGNvbWVzOiBbMSwgMCwgMCwgMSwgMCwgMV1cclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgY291cnNlT3V0Y29tZXNMaXN0OiBvdXRjb21lc1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2Utb3V0Y29tZXMvcG9zdC1vdXRjb21lc1wiLCBib2R5LCB0cnVlKS50aGVuKChyZXNwb25zZSkgPT4geyByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09IE9LOyB9KTs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEVycm9yT2JqIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSBcIlwiLCBpc0xvZ2dlZEluID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gaXNMb2dnZWRJbjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0JveCwgVGV4dH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcclxuaW1wb3J0ICcuL0Zvcm1HcmFkZXMuY3NzJztcclxuXHJcbmNvbnN0IEZvcm1HcmFkZXMgPSAoe2dyYWRlc30pID0+IHtcclxuICAgIGNvbnN0IGdyYWRlc0VudW0gPSBbJ0EnLCdCJywnQycsJ0QnLCdGJywnVycsJ0knXTtcclxuICAgIGNvbnN0IG1ham9ycyA9ICBPYmplY3Qua2V5cyhncmFkZXMpLm1hcChtYWpvciA9PiB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8VGV4dCBncmlkQ29sdW1uPScxIC8gMScgbWFyZ2luTGVmdD1cIjAuNWVtXCIgZm9udFdlaWdodD1cImJvbGRcIj57bWFqb3J9PC9UZXh0PlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbiAgICBjb25zdCBncmFkZXNCcmVha2Rvd24gPSBPYmplY3Qua2V5cyhncmFkZXMpLm1hcCgobWFqb3IsIHJvdykgPT4ge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgZ3JhZGVzW21ham9yXS5tYXAoKGdyYWRlLCBjb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyYWRlQ291bnQgPSBncmFkZXNbbWFqb3JdLnJlZHVjZSgoYSAsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZ3JpZENvbHVtbj17Y29sdW1uKzJ9IGdyaWRSb3c9e3JvdysyfT57Z3JhZGVzRW51bVtjb2x1bW5dICsgXCI6IFwiICsgZ3JhZGVzW21ham9yXVtjb2x1bW5dfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGdyaWRDb2x1bW49ezl9IGdyaWRSb3c9e3JvdysyfT5BY3R1YWw6IHtncmFkZUNvdW50fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT0nZ3JhZGVzLWJveCc+XHJcbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImdyYWRlcy10aXRsZVwiPkdyYWRlczwvVGV4dD5cclxuICAgICAgICAgICAge21ham9yc31cclxuICAgICAgICAgICAge2dyYWRlc0JyZWFrZG93bn1cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUdyYWRlczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBCb3gsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCAnLi9OYXZpZ2F0aW9uLmNzcyc7XHJcbmltcG9ydCBBUEkgZnJvbSBcIi4vLi4vLi4vYXBpL2FwaVwiO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICh7bGlua30pID0+IHtcclxuICAgICAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBBUEkoKS5sb2dvdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAobGluaykge1xyXG4gICAgICAgICAgICBjYXNlICcvZm9ybUNvbXBsZXRpb24nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3JIb21lXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lID0gXCJhcnJvdyByaWdodFwiPjwvaT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9ybUNvbXBsZXRpb25cIj5JbnN0cnVjdG9yIEFCRVQgRm9ybTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbnJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj5iYmI0MjAwPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXtsb2dvdXR9PlNpZ24gT3V0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcvY29vcmRpbmF0b3JDb21tZW50SW5wdXQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3JIb21lXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lID0gXCJhcnJvdyByaWdodFwiPjwvaT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29vcmRpbmF0b3JDb21tZW50SW5wdXRcIj5Db29yZGluYXRvciBBQkVUIEZvcm08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxpZ25yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwidXNlci1uYW1lXCI+YmJiNDIwMDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17bG9nb3V0fT5TaWduIE91dDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbnN0cnVjdG9ySG9tZVwiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGV4dCBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj5iYmI0MjAwPC9UZXh0PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbnJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj5NVDIwMjA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIG9uQ2xpY2s9e2xvZ291dH0+U2lnbiBPdXQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCb3gsIE51bWJlcklucHV0LCBOdW1iZXJJbnB1dEZpZWxkLCBOdW1iZXJJbnB1dFN0ZXBwZXIsIE51bWJlckluY3JlbWVudFN0ZXBwZXIsIE51bWJlckRlY3JlbWVudFN0ZXBwZXIsVGV4dCwgRGl2aWRlciwgTGlzdCwgTGlzdEl0ZW0sIElucHV0LCBJY29uQnV0dG9ufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xyXG5pbXBvcnQgXCIuL091dGNvbWVJbnB1dC5jc3NcIjtcclxuaW1wb3J0IHVzZUlucHV0U3RhdGUgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW5wdXRTdGF0ZSc7XHJcblxyXG5jb25zdCBPdXRjb21lSW5wdXQgPSAoe291dGNvbWUsIGluZGV4LCBzdHVkZW50c0J5TWFqb3IsIGN1cnJlbnRTdHVkZW50V29ya3N9KSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRTdHVkZW50V29ya3MpO1xyXG4gICAgY29uc3QgW3N0dWRlbnRXb3JrLCBzZXRTdHVkZW50V29yaywgcmVzZXRdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdHVkZW50V29ya3MubGVuZ3RoKTtcclxuICAgIGNvbnN0IFtzdHVkZW50V29ya3MsIHNldFN0dWRlbnRXb3Jrc10gPSB1c2VTdGF0ZShbY3VycmVudFN0dWRlbnRXb3Jrc10pO1xyXG4gICAgY29uc3QgYWRkU3R1ZGVudFdvcmsgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRTdHVkZW50V29ya3MoW1xyXG4gICAgICAgICAgICAuLi5zdHVkZW50V29ya3MsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBzdHVkZW50V29ya3MubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgc3R1ZGVudFdvcms6IHN0dWRlbnRXb3JrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgICAgICByZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVN0dWRlbnRXb3JrID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRTdHVkZW50V29ya3Moc3R1ZGVudFdvcmtzLmZpbHRlcih3b3JrID0+IHdvcmsuaWQgIT09IGlkKSk7XHJcbiAgICB9IFxyXG4gICAgY29uc29sZS5sb2coc3R1ZGVudFdvcmtzLmxlbmd0aCk7XHJcbiAgICBjb25zdCByZW5kZXJTdHVkZW50V29yayA9IHN0dWRlbnRXb3Jrcy5tYXAoKHdvcmssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGNvbG9yPVwiXCI+e3dvcmtbaW5kZXhdLnN0dWRlbnRXb3JrfTwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBtbD1cIjFyZW1cIiBpY29uPVwiZGVsZXRlXCIgb25DbGljaz17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVN0dWRlbnRXb3JrKHdvcmsuaWQpXHJcbiAgICAgICAgICAgICAgICB9fT48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBtbD1cIjFyZW1cIiBpY29uPVwiYXR0YWNobWVudFwiPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKVxyXG4gICAgfSk7XHJcbiAgIFxyXG4gICAgY29uc3QgcmVuZGVyU3R1ZGVudE51bWJlck1lbnUgPSBPYmplY3Qua2V5cyhzdHVkZW50c0J5TWFqb3IpLm1hcCggKGtleSwgaWR4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgPntrZXl9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPE51bWJlcklucHV0IG1pbj17MH0gbWF4PXtzdHVkZW50c0J5TWFqb3Jba2V5XX0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17dmFsdWU9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPiBzdHVkZW50c0J5TWFqb3Jba2V5XSA/IHNldFZhbHVlKDApIDogc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dEZpZWxkLz5cclxuICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JlZW4uNTAwXCIgZm9udFdlaWdodD1cImJvbGRcIj57IE1hdGgucm91bmQoIHZhbHVlL3N0dWRlbnRzQnlNYWpvcltrZXldKjEwMCApICArIFwiJVwiIH08L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0Y29tZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cImJvbGRcIj5Db3Vyc2UgT3V0Y29tZSB7KytpbmRleH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiPlwie291dGNvbWV9XCI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+U3R1ZGVudCBXb3JrIFVzZWQ8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3Qgc3R5bGVUeXBlPVwiZGlzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyU3R1ZGVudFdvcmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2FkZFN0dWRlbnRXb3JrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGQgc3R1ZGVudCB3b3JrXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmx1c2hlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHVkZW50V29ya30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3R1ZGVudFdvcmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwiYm9sZFwiPk51bWJlciBvZiBTdHVkZW50cyBXaG8gQWNoaWV2ZWQgNzUlIG9mIHRoaXMgT3V0Y29tZTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0dWRlbnQtb3V0Y29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclN0dWRlbnROdW1iZXJNZW51fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciBib3JkZXJDb2xvcj1cImJsYWNrXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXRjb21lSW5wdXQ7IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsVmFsID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbCk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShcIlwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVDaGFuZ2UsIHJlc2V0XTtcclxufVxyXG5cclxuIC8vZXhhbXBsZTpcclxuIC8vXHJcbiAvLyBjb25zdCBbYWdlLCBoYW5kbGVBZ2VDaGFuZ2UsIHJlc2V0QWdlXSA9IHVzZUZvcm1TdGF0ZShcIlwiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcIm5leHQtY29va2llc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL2Zvcm1Db21wbGV0aW9uLmNzc1wiO1xyXG5pbXBvcnQgT3V0Y29tZUlucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2luc3RydWN0b3ItY29tcG9uZW50cy9PdXRjb21lSW5wdXRcIjtcclxuaW1wb3J0IEZvcm1HcmFkZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci1jb21wb25lbnRzL0Zvcm1HcmFkZXNcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5zdHJ1Y3Rvci1jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEFQSSBmcm9tIFwiLi4vYXBpL2FwaVwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtRGF0YSwgcG9zdEluc3RydWN0b3JGb3JtIH0gZnJvbSBcIi4uL2FwaS9BUElIZWxwZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgZm9ybUNvbXBsZXRpb24gPSAoeyBmb3JtIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhmb3JtKTtcclxuICAvKlxyXG4gICAgY29uc3Qgb3V0Y29tZXMgPSBmb3JtLm91dGNvbWVzO1xyXG4gICAgY29uc3QgY2VHcmFkZXMgPSBmb3JtLmNlR3JhZGVzO1xyXG4gICAgY29uc3QgY3NHcmFkZXMgPSBmb3JtLmNzR3JhZGVzO1xyXG4gICAgY29uc3QgaXRHcmFkZXMgPSBmb3JtLml0R3JhZGVzO1xyXG4gICAgXHJcblxyXG4gIGNvbnN0IGNvdXJzZSA9IGZvcm0uc2VjdGlvbjtcclxuICAqL1xyXG4gIC8vY29uc29sZS5sb2coZm9ybSk7XHJcbiAgY29uc3QgZ3JhZGVzID0ge1xyXG4gICAgLy8gICAgQSwgIEIsIEMsIEQsIEYsIFcsIElcclxuICAgIElUOiBbXHJcbiAgICAgIGl0R3JhZGVzLmEsXHJcbiAgICAgIGl0R3JhZGVzLmIsXHJcbiAgICAgIGl0R3JhZGVzLmMsXHJcbiAgICAgIGl0R3JhZGVzLmQsXHJcbiAgICAgIGl0R3JhZGVzLmYsXHJcbiAgICAgIGl0R3JhZGVzLncsXHJcbiAgICAgIGl0R3JhZGVzLmksXHJcbiAgICBdLFxyXG4gICAgQ1M6IFtcclxuICAgICAgY3NHcmFkZXMuYSxcclxuICAgICAgY3NHcmFkZXMuYixcclxuICAgICAgY3NHcmFkZXMuYyxcclxuICAgICAgY3NHcmFkZXMuZCxcclxuICAgICAgY3NHcmFkZXMuZixcclxuICAgICAgY3NHcmFkZXMudyxcclxuICAgICAgY3NHcmFkZXMuaSxcclxuICAgIF0sXHJcbiAgICBDRTogW1xyXG4gICAgICBjZUdyYWRlcy5hLFxyXG4gICAgICBjZUdyYWRlcy5iLFxyXG4gICAgICBjZUdyYWRlcy5jLFxyXG4gICAgICBjZUdyYWRlcy5kLFxyXG4gICAgICBjZUdyYWRlcy5mLFxyXG4gICAgICBjZUdyYWRlcy53LFxyXG4gICAgICBjZUdyYWRlcy5pLFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICBjb25zdCBudW1iZXJPZlN0dWRlbnRzQnlNYWpvciA9IHsgLi4uZ3JhZGVzIH07XHJcbiAgZm9yICh2YXIgbWFqb3IgaW4gZ3JhZGVzKSB7XHJcbiAgICBudW1iZXJPZlN0dWRlbnRzQnlNYWpvcltcIklUXCJdID0gaXRHcmFkZXMudG90YWxTdHVkZW50cztcclxuICAgIG51bWJlck9mU3R1ZGVudHNCeU1ham9yW1wiQ1NcIl0gPSBjc0dyYWRlcy50b3RhbFN0dWRlbnRzO1xyXG4gICAgbnVtYmVyT2ZTdHVkZW50c0J5TWFqb3JbXCJDRVwiXSA9IGNlR3JhZGVzLnRvdGFsU3R1ZGVudHM7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJPdXRjb21lcyA9IG91dGNvbWVzLm1hcCgob3V0Y29tZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG91dGNvbWUuc3R1ZGVudFdvcmtzLmxlbmd0aCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE91dGNvbWVJbnB1dFxyXG4gICAgICAgIG91dGNvbWU9e291dGNvbWUub3V0Y29tZX1cclxuICAgICAgICBjdXJyZW50U3R1ZGVudFdvcmtzPXtvdXRjb21lLnN0dWRlbnRXb3Jrc31cclxuICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgc3R1ZGVudHNCeU1ham9yPXtudW1iZXJPZlN0dWRlbnRzQnlNYWpvcn1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChcclxuICAgICAgd2luZG93LmNvbmZpcm0oXHJcbiAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gc3VibWl0IHRoaXMgZm9ybT8gT25jZSBzdWJtaXR0ZWQsIHlvdSBjYW4gbm8gbG9uZ2VyIG1ha2UgY2hhbmdlcy5cIlxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgYWxlcnQoXCJTdWJtaXR0ZWQhXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9ob21lUGFnZVwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5VTlQgQUJFVDogRm9ybSBDb21wbGV0aW9uPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TmF2aWdhdGlvbiBsaW5rPVwiL2Zvcm1Db21wbGV0aW9uXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwieGxcIiBtYj1cIjFlbVwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICB7Y291cnNlLmRlcGFydG1lbnR9IHtjb3Vyc2UuY291cnNlTnVtYmVyfS57Y291cnNlLnNlY3Rpb25OdW1iZXJ9e1wiIFwifVxyXG4gICAgICAgICAge2NvdXJzZS5kaXNwbGF5TmFtZX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICBJbnN0cnVjdG9yOiB7Y291cnNlLmluc3RydWN0b3IuZmlyc3ROYW1lfSB7Y291cnNlLmluc3RydWN0b3IubGFzdE5hbWV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgQ29vcmRpbmF0b3I6IHtjb3Vyc2UuY29vcmRpbmF0b3IuZmlyc3ROYW1lfXtcIiBcIn1cclxuICAgICAgICAgIHtjb3Vyc2UuY29vcmRpbmF0b3IubGFzdE5hbWV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29vcmRpbmF0b3ItY29tbWVudFwiIGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCJib2xkXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIENvb3JkaW5hdG9yIGNvbW1lbnRzXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCI+e2NvdXJzZS5jb29yZGluYXRvckNvbW1lbnRzfTwvVGV4dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb3JtR3JhZGVzIGdyYWRlcz17Z3JhZGVzfSAvPlxyXG4gICAgICB7cmVuZGVyT3V0Y29tZXN9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1jb250YWluZXJcIj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgb25DbGljaz17aGFuZGxlU2F2ZX0gdHlwZT1cInNhdmVcIj5cclxuICAgICAgICAgIFNhdmUgUHJvZ3Jlc3NcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgb25DbGljaz17aGFuZGxlU3VibWl0fSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZm9ybUNvbXBsZXRpb24uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IGdldENvb2tpZXMgPSBjb29raWVzKGN0eCk7XHJcbiAgbmV3IEFQSSgpLnNldFRva2VuKGdldENvb2tpZXMudG9rZW4pOyAvL3Rva2VuIHdpbGwgYmUgYmxhbmsgaW4gdGhlIHJlcXVlc3QgaW4gZ2V0SW5pdGlhbFByb3BzIHdpdGhvdXQgdGhpcyBjYWxsXHJcbiAgY29uc3Qgc2VjdGlvbiA9IGdldENvb2tpZXMuc2VjdGlvbjtcclxuICBjb25zdCBjb3Vyc2UgPSBnZXRDb29raWVzLmNvdXJzZTtcclxuICByZXR1cm4ge1xyXG4gICAgdXNlcjogZ2V0Q29va2llcy51c2VyLFxyXG4gICAgc2VjdGlvbixcclxuICAgIGNvdXJzZSxcclxuICAgIGZvcm06IGF3YWl0IGdldEZvcm1EYXRhKFxyXG4gICAgICBnZXRDb29raWVzLnVzZXIsXHJcbiAgICAgIDIwMjAsXHJcbiAgICAgIFwiRkFMTFwiLFxyXG4gICAgICBcIkNTQ0VcIixcclxuICAgICAgY291cnNlLFxyXG4gICAgICBzZWN0aW9uXHJcbiAgICApLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtQ29tcGxldGlvbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1jdXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9