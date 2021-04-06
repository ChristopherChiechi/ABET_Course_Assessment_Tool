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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./api/APIHelper.js":
/*!**************************!*\
  !*** ./api/APIHelper.js ***!
  \**************************/
/*! exports provided: getCourses, getInstructorCourses, getCoordinatorCourses, getFormData, postCoordinatorComment, postInstructorForm, login, getAllCourses, getFacultyList, getCoursesByDepartment, addFacultyMember, addCourse, removeCourse */
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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./api/api.js");

function getCourses() {
  return courses;
}
;
async function getInstructorCourses(id, term) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.getCourses(id, term.semester, term.year);
  response.then(function (result) {
    return result;
  });
  const instructorCourses = await response;
  instructorCourses.filter(course => course.instructor.id === id);
  return instructorCourses;
}
;
async function getCoordinatorCourses(id, term) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.getCourses(id, term.semester, term.year);
  response.then(function (result) {
    return result;
  });
  const coordinatorCourses = await response;
  coordinatorCourses.filter(course => course.coordinator.id === id);
  return coordinatorCourses;
}
;
async function getFormData(id, year, term, department, course, section) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.getFormBySection(id, year, term, department, course, section);
  response.then(function (result) {
    return result;
  });
  const formData = await response;
  return formData;
}
async function postCoordinatorComment(userid, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.postComment(userid, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
}
async function postInstructorForm(userid, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.postForm(userid, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
}
async function login(userid, password) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.login(userid, password);
  console.log(response);
  return response.then(function (result) {
    return result;
  });
}
async function getAllCourses(userid, semester, year) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.getAllCourses(userid, semester, parseInt(year));
  response.then(function (result) {
    return result;
  });
  const courses = await response;
  console.log(courses);
  return courses;
}
async function getFacultyList() {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.getFacultyList();
  response.then(function (result) {
    return result;
  });
  const faculty = await response;
  return faculty;
}
async function getCoursesByDepartment(department) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.getCoursesByDepartment(department);
  response.then(function (result) {
    return result;
  });
  const courses = await response;
  return courses;
}
async function addFacultyMember(lastName, firstName, id, type) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.addFacultyMember(firstName, lastName, id, type);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
}
async function addCourse(userid = "", firstName = "", lastName = "", year = 0, semester = "", courseNumber = 0, displayName = "", department = "") {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.addCourse(userid, firstName, lastName, year, semester, courseNumber, displayName, department);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
}
async function removeCourse(year, semester, courseNumber, department) {
  let api_helper = new _api__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let response = api_helper.removeCourse(year, semester, courseNumber, department);
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
  console.log(courseNumber);
}

/***/ }),

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return API; });\n/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie-cutter */ \"cookie-cutter\");\n/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie_cutter__WEBPACK_IMPORTED_MODULE_0__);\n// Helper API Class\n\nconst root = \"https://localhost:44372/api\"; // The base URL for each request\n\nconst OK = 200; //200 Ok status code\n\nconst UNAUTHORIZED = 401; //401 Unauthorized status code\n\nconst NOT_LOGGED_IN_MSG = \"Error: Your session has expired. Please log in again.\";\nconst SERVER_ERROR_MSG = \"Internal Server Error: Please try again later.\";\nconst BAD_REQUEST_MSG = \"Error: Some of the provided parameters are invalid.\";\nvar token = \"\"; //holds value of the token cookie\n\nclass API {\n  /* This function is for getInitialProps.\r\n  cookieCutter is undefined in getInitialProps,\r\n  so this function sets the token to the value of the cookie\r\n  passed in from getInitialProps. */\n  setToken(t = \"\") {\n    token = t;\n  } // generic function for sending POST requests\n  //    Input: route and body\n  //    Output: The JSON that is returned from the route\n\n\n  async sendPost(route = \"\", body = {}) {\n    const url = root + route; // Combine the root URL with the specified route\n\n    var statusCode; //holds the status code of the response\n    //if the request is not from getInitialProps, meaning cookieCutter is defined, retreive the cookie\n\n    if (typeof cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.get == \"function\") {\n      token = cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"token\");\n    }\n\n    return await fetch(url, {\n      method: \"POST\",\n      cache: \"no-cache\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"Bearer \" + token\n      },\n      referrerPolicy: \"no-referrer\",\n      body: JSON.stringify(body)\n    }).then(response => {\n      statusCode = response.status;\n      if (statusCode == UNAUTHORIZED) //this check has to be here for some reason ¯\\_(ツ)_/¯\n        return;else return response.json();\n    }).then(json => {\n      if (statusCode == OK) return json;else if (statusCode == UNAUTHORIZED) return new ErrorObj(NOT_LOGGED_IN_MSG, false); //user's session has expired\n      else {\n          if (json.hasOwnProperty(\"message\")) return new ErrorObj(json[\"message\"]); //custom error message from API\n          else return new ErrorObj(BAD_REQUEST_MSG); //bad input parameters\n        }\n    }).catch(() => {\n      return new ErrorObj(SERVER_ERROR_MSG);\n    });\n  }\n\n  async sendFile(route = \"\", formData = new FormData()) {\n    const url = root + route; // Combine the root URL with the specified route\n\n    var statusCode; //holds the status code of the response\n\n    return await fetch(url, {\n      method: 'POST',\n      body: formData,\n      headers: {\n        \"Authorization\": \"Bearer \" + token\n      }\n    }).then(response => {\n      statusCode = response.status;\n      if (statusCode == UNAUTHORIZED) //this check has to be here for some reason ¯\\_(ツ)_/¯\n        return;else return response.json();\n    }).then(json => {\n      if (statusCode == OK) return json;else if (statusCode == UNAUTHORIZED) return new ErrorObj(NOT_LOGGED_IN_MSG, false); //user's session has expired\n      else {\n          if (json.hasOwnProperty(\"message\")) return new ErrorObj(json[\"message\"]); //custom error message from API\n          else return new ErrorObj(BAD_REQUEST_MSG); //bad input parameters\n        }\n    }).catch(() => {\n      return new ErrorObj(SERVER_ERROR_MSG);\n    });\n  } //---login(userid, password)---\n  //    Input: UserId, Password\n  //    Output: \"Admin\", \"Instructor\", \"Student/TA\" or boolean for failure\n\n\n  async login(userid = \"\", password = \"\") {\n    const body = {\n      userid: userid,\n      password: password\n    };\n    return await this.sendPost(\"/login\", body).then(json => {\n      if (json.hasOwnProperty(\"token\")) {\n        var expires = new Date();\n        expires.setHours(expires.getHours() + 24); //expires in 24 hours\n\n        expires = expires.toUTCString();\n        cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.set(\"token\", json[\"token\"], {\n          expires\n        }); //set token cookie\n\n        return json[\"role\"]; //return the role\n      }\n    }); //To use this data you must do the following:\n    //api.login(userid, password).then(role => {/*here is where the return value is accessible, it is either role string or a boolean indicating failure*/})\n  } //---logout(userid)---\n  //    Input: None\n  //    Output: None\n\n\n  logout() {\n    cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.set(\"token\", \"\", {\n      expires: new Date().toUTCString()\n    });\n    cookie_cutter__WEBPACK_IMPORTED_MODULE_0___default.a.set(\"user\", \"\", {\n      expires: new Date().toUTCString()\n    });\n  } //---getCourses(userid, semester, year)---\n  //    Input: UserId, Semester, Year\n  //    Output: Sections for the corresponding UserId, Semester and Year\n\n\n  async getCourses(userid = \"\", semester = \"\", year = 0) {\n    const body = {\n      userid: userid,\n      semester: semester,\n      year: year\n    };\n    return await this.sendPost(\"/sections/by-userid-semester-year\", body); //To use this data you must do the following:\n    //api.getCourses(userId, semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})\n  } //---getAllCourses(userid, semester, year)---  (Admin)\n  //    Input: UserId, Semester, Year\n  //    Output: Sections for the corresponding Semester and Year \n\n\n  async getAllCourses(userid = \"\", semester = \"\", year = 0) {\n    const body = {\n      Userid: userid,\n      Semester: semester,\n      Year: year\n    };\n    return await this.sendPost(\"/sections/by-semester-year\", body); //To use this data you must do the following:\n    //api.getAllCourses(userid, semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})\n  } //---getCoursesBySemesterYear(semester, year)---  (Admin)\n  //    Input: Semester, Year\n  //    Output: All Courses for the corresponding semester and year \n\n\n  async getCoursesBySemesterYear(semester = \"\", year = 0) {\n    const body = {\n      semester: semester,\n      year: year\n    };\n    return await this.sendPost(\"/courses/get-by-year-semester\", body);\n  } //To use this data you must do the following:\n  //api.getCoursesBySemesterYear(semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})\n  //---getFormsBySection(userid, year, semester, department, course, section)---\n  //    Input: UserId, Year, Semester, Department, CourseNumber, SectionNumber\n  //    Output: Forms for the corresponding UserId, Year, Semester, Department, CourseNumber, and SectionNumber\n\n\n  async getFormBySection(userid = \"\", year = 0, semester = \"\", department = \"\", courseNumber = \"\", sectionNumber = \"\") {\n    const body = {\n      Section: {\n        Instructor: {\n          Id: userid\n        },\n        Year: year,\n        Semester: semester,\n        Department: department,\n        CourseNumber: courseNumber,\n        SectionNumber: sectionNumber\n      }\n    };\n    return await this.sendPost(\"/forms/by-section\", body); //To use this data you must do the following:\n    //api.getFormsBySection(userid, year, semester, department, course, section).then(form => {/*here is where the data is accessible, form is an array of JSON objects*/})\n  } //---getFormsByCourse(userid, year, semester, department, course)---\n  //    Input: UserId, Year, Semester, Department, CourseNumber\n  //    Output: Forms for the corresponding UserId, Year, Semester, Department, and CourseNumber\n\n\n  async getFormsByCourse(userid = \"\", year = 0, semester = \"\", department = \"\", courseNumber = \"\") {\n    const body = {\n      Course: {\n        Coordinator: {\n          Id: userid\n        },\n        Year: year,\n        Semester: semester,\n        Department: department,\n        CourseNumber: courseNumber\n      }\n    };\n    return await this.sendPost(\"/forms/by-course\", body); //To use this data you must do the following:\n    //api.getFormsByCourse(userid, year, semester, department, course).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})\n  } //---getAllForms(userid, semester, year)--- (Admin)\n  //    Input: UserId, Semester, Year\n  //    Output: Forms for the corresponding Semester and Year\n\n\n  async getAllForms(userid = \"\", semester = \"\", year = 0) {\n    const body = {\n      userid: userid,\n      semester: semester,\n      year: year\n    };\n    return await this.sendPost(\"/forms/by-semester-year\", body); //To use this data you must do the following:\n    //api.getAllForms(userid, semester, year).then(courses => {/*here is where the data is accessible, forms is an array of JSON objects*/})\n  } //---postForm(userId, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades)---\n  //    Input: ^^^   (will also have pdf here later as an additional parameter)\n  //    Output: Success or Failure\n\n\n  async postForm(userId = \"\", year = 0, semester = \"\", department = \"\", courseNumber = \"\", sectionNumber = \"\", isSectionCompleted = false, outcomes = [], ITGrades = {}, CSGrades = {}, CEGrades = {}) {\n    // the body will also include any pdf to post in the future\n    //outcomes: an array of Course_Outcomes objects\n    //Course_Outcomes class:\n    //string outcome, int numberOfIT, int numberOfCS, int numberOfCE, StudentWorks[] studentWorks\n    //StudentWorks class:\n    //string studentWork, string fileUploaded (<-- will implement later)\n    //IT, CS, CE Grades class:\n    //int A, int B, int C, int D, int E, int F, int W, int I, int totalStudents\n    const body = {\n      form: {\n        section: {\n          instructor: {\n            id: userId\n          },\n          year,\n          semester,\n          department,\n          courseNumber,\n          sectionNumber,\n          isSectionCompleted\n        },\n        outcomes,\n        ITGrades,\n        CSGrades,\n        CEGrades\n      }\n    };\n    return await this.sendPost(\"/forms/post-form\", body);\n  } //---postComment(userId, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted)---\n  //    Input: UserId, Year, Semester, department, courseNumber, coordinatorComment, isCourseCompleted\n  //    Output: Success or Failure\n\n\n  async postComment(userId = \"\", year = 0, semester = \"\", department = \"\", courseNumber = \"\", coordinatorComment = \"\", isCourseCompleted = false) {\n    const body = {\n      course: {\n        Coordinator: {\n          Id: userId\n        },\n        year,\n        semester,\n        department,\n        courseNumber,\n        coordinatorComment,\n        isCourseCompleted\n      }\n    };\n    return await this.sendPost(\"/courses/post-comment\", body);\n  } //---getBlankForm(userid)---\n  //    Input: Section object containing: CourseNumber, SectionNumber, and Id\n  //    Output: Blank Form\n  //async getBlankForm(userid) {\n\n\n  async getBlankForm(courseNumber = \"\", sectionNumber = \"\", sectionId = 0) {\n    const body = {\n      Section: {\n        CourseNumber: courseNumber,\n        SectionNumber: sectionNumber,\n        Id: sectionId\n      }\n    };\n    return await this.sendPost(\"/forms/new-blank\", body); //To use this data you must do the following:\n    //api.getBlankForm(userid).then(result => {/*here is where the return value is accessible, it is a JSON*/})\n  } //--getDefaultYearAndSemester()--\n  //    Input: Nothing\n  //    Output: Object Including Current Default Year and Semester\n\n\n  getDefaultYearAndSemester() {\n    var text = '{ \"year\": 0,' + // create string of object\n    ' \"semester\": \"\" }';\n    var ResultObj = JSON.parse(text); // create object from the string\n\n    var date = new Date(); // get the current date\n\n    var day = date.getDay(); // get the current day\n\n    var month = date.getMonth() + 1; // add one to month (by default January = 0)\n\n    ResultObj.year = date.getFullYear(); // get the full year from the date\n\n    ResultObj.semester = \"fall\"; // just to be safe\n    // Set the Default Semester Based on the Month\n\n    if (month > 8 || month == 8 && day >= 15) {\n      ResultObj.semester = \"fall\";\n    } else if (month > 5 || month == 5 && day >= 15) {\n      ResultObj.semester = \"summer\"; // since this is just a default semester, it always defaults to the longer semesters\n      // this is why it doesn't default to smaller summer semesters\n    } else {\n      ResultObj.semester = \"spring\";\n    }\n\n    return ResultObj; // return object including the year and semester\n  } //---addSection(userid, firstName, lastName, year, semester, courseNumber, sectionNumber, department, numberOfStudents)--- (Admin)\n  //    Input: ^^^\n  //    Output: Success or Failure\n\n\n  async addSection(userid = \"\", firstName = \"\", lastName = \"\", year = 0, semester = \"\", courseNumber = \"\", sectionNumber = \"\", department = \"\", numberOfStudents = 0) {\n    const body = {\n      section: {\n        instructor: {\n          id: userid,\n          firstName,\n          lastName\n        },\n        year,\n        semester,\n        courseNumber,\n        sectionNumber,\n        department,\n        isSectionCompleted: false,\n        numberOfStudents\n      }\n    };\n    return await this.sendPost(\"/sections/add-section\", body);\n  } //---getFacultyList()--- (Admin)\n  //    Input: none\n  //    Output: List of instructors, coordinators, adjunct faculties, and teaching fellows\n\n\n  async getFacultyList() {\n    return await this.sendPost(\"/faculty/get-list\", {});\n  } //---addFacultyMember(firstName, lastName, userid, role)--- (Admin)\n  //    Input: First Name, Last Name and User Id\n  //    Output: Success or Failure\n\n\n  async addFacultyMember(firstName = \"\", lastName = \"\", userId = \"\", facultyType = \"\") {\n    const body = {\n      info: {\n        firstName: firstName,\n        lastName: lastName,\n        id: userId\n      },\n      facultyType: facultyType\n    };\n    return await this.sendPost(\"/faculty/add-member\", body);\n  } //---getCoursesByDepartment(department)--- (Admin)\n  //    Input: department\n  //    Output: array of courses\n\n\n  async getCoursesByDepartment(department = \"\") {\n    const body = {\n      department\n    };\n    return await this.sendPost(\"/courses/get-by-department\", body);\n  } //---addProgram(program)--- (Admin)\n  //    Input: program name\n  //    Output: success or failure\n\n\n  async addProgram(program = \"\") {\n    const body = {\n      program\n    };\n    return await this.sendPost(\"/programs/add-program\", body);\n  } //---addCourse(userid, firstName, lastName, year, semester, courseNumber, displayName, department)--- (Admin)\n  //    Input: ^^^\n  //    Output: success or failure\n\n\n  async addCourse(userid = \"\", firstName = \"\", lastName = \"\", year = 0, semester = \"\", courseNumber = \"\", displayName = \"\", department = \"\") {\n    const body = {\n      Course: {\n        Coordinator: {\n          Id: userid,\n          firstName,\n          lastName\n        },\n        year,\n        semester,\n        courseNumber,\n        displayName,\n        department\n      }\n    };\n    return await this.sendPost(\"/courses/add-course\", body);\n  } //---removeCourse(year, semester, courseNumber, department)--- (Admin)\n  //    Input: year, semester, courseNumber, department\n  //    Output: success or failure\n\n\n  async removeCourse(year = 0, semester = \"\", courseNumber = \"\", department = \"\") {\n    const body = {\n      Course: {\n        year,\n        semester,\n        courseNumber,\n        department\n      }\n    };\n    return await this.sendPost(\"/courses/remove-course\", body);\n  } //---getCourseOutcomesByCourse(year, semester, courseNumber, department)--- (Admin)\n  //    Input: year, semester, courseNumber, department\n  //    Output: array of course outcomes\n\n\n  async getCourseOutcomesByCourse(year = 0, semester = \"\", courseNumber = \"\", department = \"\") {\n    const body = {\n      Course: {\n        year,\n        semester,\n        courseNumber,\n        department\n      }\n    };\n    return await this.sendPost(\"/course-outcomes/by-course\", body);\n  } //---postCourseOutcomes(outcomes)--- (Admin)\n  //    Input: array of outcome objects (see notes below)\n  //    Output: success or failure\n\n\n  async postCourseOutcomes(outcomes = []) {\n    //an outcome object contains the following:\n    //order (number), outcome (string), mappedStudentOutcomes(array of numbers)\n    //Example:\n    //{\n    //    order: 1, outcome: \"Accomplish things\", mappedStudentOutcomes: [1, 0, 0, 1, 0, 1]\n    //}\n    const body = {\n      courseOutcomesList: outcomes\n    };\n    return await this.sendPost(\"/course-outcomes/post-outcomes\", body);\n  } //---postSection(userid, firstName, lastName, year, semester, courseNumber, sectionNumber, department, numberOfStudents)--- (Instructor)\n  //   Input: Section object\n  //   Output: success or failure\n\n\n  async postSection(userid = \"\", year = 0, semester = \"\", courseNumber = \"\", sectionNumber = \"\", department = \"\", firstName = \"\", lastName = \"\", numberOfStudents = 0) {\n    const body = {\n      section: {\n        instructor: {\n          id: userid,\n          firstName,\n          lastName\n        },\n        year,\n        semester,\n        courseNumber,\n        sectionNumber,\n        department,\n        isSectionCompleted: false,\n        NumberOfStudents\n      }\n    };\n    return await this.sendPost(\"/sections/post-section\", body);\n  }\n\n  async uploadAccessDb(formData = new FormData()) {\n    return await this.sendFile('/upload-access-db', formData);\n  }\n\n  async uploadFormAttachment(formData = new FormData(), outcomeId = 0) {\n    //outcomeId is a unique id that identifies a certain outcome in the DB\n    //it will come from the DB when the instructor form page is loaded\n    formData.append(\"outcomeId\", outcomeId);\n    return await this.sendFile('/upload-form-attachment', formData);\n  }\n\n}\n\nclass ErrorObj {\n  constructor(message = \"\", isLoggedIn = true) {\n    this.failure = true;\n    this.message = message;\n    this.isLoggedIn = isLoggedIn;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvYXBpLmpzPzMyOTkiXSwibmFtZXMiOlsicm9vdCIsIk9LIiwiVU5BVVRIT1JJWkVEIiwiTk9UX0xPR0dFRF9JTl9NU0ciLCJTRVJWRVJfRVJST1JfTVNHIiwiQkFEX1JFUVVFU1RfTVNHIiwidG9rZW4iLCJBUEkiLCJzZXRUb2tlbiIsInQiLCJzZW5kUG9zdCIsInJvdXRlIiwiYm9keSIsInVybCIsInN0YXR1c0NvZGUiLCJjb29raWVDdXR0ZXIiLCJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsInJlZmVycmVyUG9saWN5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJFcnJvck9iaiIsImhhc093blByb3BlcnR5IiwiY2F0Y2giLCJzZW5kRmlsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJsb2dpbiIsInVzZXJpZCIsInBhc3N3b3JkIiwiZXhwaXJlcyIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJzZXQiLCJsb2dvdXQiLCJnZXRDb3Vyc2VzIiwic2VtZXN0ZXIiLCJ5ZWFyIiwiZ2V0QWxsQ291cnNlcyIsIlVzZXJpZCIsIlNlbWVzdGVyIiwiWWVhciIsImdldENvdXJzZXNCeVNlbWVzdGVyWWVhciIsImdldEZvcm1CeVNlY3Rpb24iLCJkZXBhcnRtZW50IiwiY291cnNlTnVtYmVyIiwic2VjdGlvbk51bWJlciIsIlNlY3Rpb24iLCJJbnN0cnVjdG9yIiwiSWQiLCJEZXBhcnRtZW50IiwiQ291cnNlTnVtYmVyIiwiU2VjdGlvbk51bWJlciIsImdldEZvcm1zQnlDb3Vyc2UiLCJDb3Vyc2UiLCJDb29yZGluYXRvciIsImdldEFsbEZvcm1zIiwicG9zdEZvcm0iLCJ1c2VySWQiLCJpc1NlY3Rpb25Db21wbGV0ZWQiLCJvdXRjb21lcyIsIklUR3JhZGVzIiwiQ1NHcmFkZXMiLCJDRUdyYWRlcyIsImZvcm0iLCJzZWN0aW9uIiwiaW5zdHJ1Y3RvciIsImlkIiwicG9zdENvbW1lbnQiLCJjb29yZGluYXRvckNvbW1lbnQiLCJpc0NvdXJzZUNvbXBsZXRlZCIsImNvdXJzZSIsImdldEJsYW5rRm9ybSIsInNlY3Rpb25JZCIsImdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIiLCJ0ZXh0IiwiUmVzdWx0T2JqIiwicGFyc2UiLCJkYXRlIiwiZGF5IiwiZ2V0RGF5IiwibW9udGgiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiYWRkU2VjdGlvbiIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibnVtYmVyT2ZTdHVkZW50cyIsImdldEZhY3VsdHlMaXN0IiwiYWRkRmFjdWx0eU1lbWJlciIsImZhY3VsdHlUeXBlIiwiaW5mbyIsImdldENvdXJzZXNCeURlcGFydG1lbnQiLCJhZGRQcm9ncmFtIiwicHJvZ3JhbSIsImFkZENvdXJzZSIsImRpc3BsYXlOYW1lIiwicmVtb3ZlQ291cnNlIiwiZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZSIsInBvc3RDb3Vyc2VPdXRjb21lcyIsImNvdXJzZU91dGNvbWVzTGlzdCIsInBvc3RTZWN0aW9uIiwiTnVtYmVyT2ZTdHVkZW50cyIsInVwbG9hZEFjY2Vzc0RiIiwidXBsb2FkRm9ybUF0dGFjaG1lbnQiLCJvdXRjb21lSWQiLCJhcHBlbmQiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJpc0xvZ2dlZEluIiwiZmFpbHVyZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLDZCQUFiLEMsQ0FBNEM7O0FBQzVDLE1BQU1DLEVBQUUsR0FBRyxHQUFYLEMsQ0FBMEI7O0FBQzFCLE1BQU1DLFlBQVksR0FBRyxHQUFyQixDLENBQTBCOztBQUMxQixNQUFNQyxpQkFBaUIsR0FBRyx1REFBMUI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxnREFBekI7QUFDQSxNQUFNQyxlQUFlLEdBQUcscURBQXhCO0FBQ0EsSUFBSUMsS0FBSyxHQUFH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LE9BQU8sR0FBRyxFQUFYLEVBQWVDLFVBQVUsR0FBRyxJQUE1QixFQUFrQztBQUN6QyxTQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7O0FBTFUiLCJmaWxlIjoiLi9hcGkvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIEFQSSBDbGFzc1xyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInO1xyXG5cclxuY29uc3Qgcm9vdCA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNzIvYXBpXCI7IC8vIFRoZSBiYXNlIFVSTCBmb3IgZWFjaCByZXF1ZXN0XHJcbmNvbnN0IE9LID0gMjAwOyAgICAgICAgICAgLy8yMDAgT2sgc3RhdHVzIGNvZGVcclxuY29uc3QgVU5BVVRIT1JJWkVEID0gNDAxOyAvLzQwMSBVbmF1dGhvcml6ZWQgc3RhdHVzIGNvZGVcclxuY29uc3QgTk9UX0xPR0dFRF9JTl9NU0cgPSBcIkVycm9yOiBZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uXCI7XHJcbmNvbnN0IFNFUlZFUl9FUlJPUl9NU0cgPSBcIkludGVybmFsIFNlcnZlciBFcnJvcjogUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIjtcclxuY29uc3QgQkFEX1JFUVVFU1RfTVNHID0gXCJFcnJvcjogU29tZSBvZiB0aGUgcHJvdmlkZWQgcGFyYW1ldGVycyBhcmUgaW52YWxpZC5cIjtcclxudmFyIHRva2VuID0gXCJcIjsgICAgICAgICAgIC8vaG9sZHMgdmFsdWUgb2YgdGhlIHRva2VuIGNvb2tpZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcclxuICAgIC8qIFRoaXMgZnVuY3Rpb24gaXMgZm9yIGdldEluaXRpYWxQcm9wcy5cclxuICAgIGNvb2tpZUN1dHRlciBpcyB1bmRlZmluZWQgaW4gZ2V0SW5pdGlhbFByb3BzLFxyXG4gICAgc28gdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSB0b2tlbiB0byB0aGUgdmFsdWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgcGFzc2VkIGluIGZyb20gZ2V0SW5pdGlhbFByb3BzLiAqL1xyXG4gICAgc2V0VG9rZW4odCA9IFwiXCIpIHtcclxuICAgICAgICB0b2tlbiA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJpYyBmdW5jdGlvbiBmb3Igc2VuZGluZyBQT1NUIHJlcXVlc3RzXHJcbiAgICAvLyAgICBJbnB1dDogcm91dGUgYW5kIGJvZHlcclxuICAgIC8vICAgIE91dHB1dDogVGhlIEpTT04gdGhhdCBpcyByZXR1cm5lZCBmcm9tIHRoZSByb3V0ZVxyXG4gICAgYXN5bmMgc2VuZFBvc3Qocm91dGUgPSBcIlwiLCBib2R5ID0ge30pIHtcclxuICAgICAgICBjb25zdCB1cmwgPSByb290ICsgcm91dGU7IC8vIENvbWJpbmUgdGhlIHJvb3QgVVJMIHdpdGggdGhlIHNwZWNpZmllZCByb3V0ZVxyXG4gICAgICAgIHZhciBzdGF0dXNDb2RlOyAvL2hvbGRzIHRoZSBzdGF0dXMgY29kZSBvZiB0aGUgcmVzcG9uc2VcclxuXHJcbiAgICAgICAgLy9pZiB0aGUgcmVxdWVzdCBpcyBub3QgZnJvbSBnZXRJbml0aWFsUHJvcHMsIG1lYW5pbmcgY29va2llQ3V0dGVyIGlzIGRlZmluZWQsIHJldHJlaXZlIHRoZSBjb29raWVcclxuICAgICAgICBpZiAodHlwZW9mIGNvb2tpZUN1dHRlci5nZXQgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gY29va2llQ3V0dGVyLmdldChcInRva2VuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiBcIm5vLXJlZmVycmVyXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSBVTkFVVEhPUklaRUQpIC8vdGhpcyBjaGVjayBoYXMgdG8gYmUgaGVyZSBmb3Igc29tZSByZWFzb24gwq9cXF8o44OEKV8vwq9cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09IE9LKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdHVzQ29kZSA9PSBVTkFVVEhPUklaRUQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihOT1RfTE9HR0VEX0lOX01TRywgZmFsc2UpOyAvL3VzZXIncyBzZXNzaW9uIGhhcyBleHBpcmVkXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcIm1lc3NhZ2VcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooanNvbltcIm1lc3NhZ2VcIl0pOyAvL2N1c3RvbSBlcnJvciBtZXNzYWdlIGZyb20gQVBJXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JqKEJBRF9SRVFVRVNUX01TRyk7IC8vYmFkIGlucHV0IHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgcmV0dXJuIG5ldyBFcnJvck9iaihTRVJWRVJfRVJST1JfTVNHKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VuZEZpbGUocm91dGUgPSBcIlwiLCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcm9vdCArIHJvdXRlOyAvLyBDb21iaW5lIHRoZSByb290IFVSTCB3aXRoIHRoZSBzcGVjaWZpZWQgcm91dGVcclxuICAgICAgICB2YXIgc3RhdHVzQ29kZTsgLy9ob2xkcyB0aGUgc3RhdHVzIGNvZGUgb2YgdGhlIHJlc3BvbnNlXHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT0gVU5BVVRIT1JJWkVEKSAvL3RoaXMgY2hlY2sgaGFzIHRvIGJlIGhlcmUgZm9yIHNvbWUgcmVhc29uIMKvXFxfKOODhClfL8KvXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSBPSylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXR1c0NvZGUgPT0gVU5BVVRIT1JJWkVEKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooTk9UX0xPR0dFRF9JTl9NU0csIGZhbHNlKTsgLy91c2VyJ3Mgc2Vzc2lvbiBoYXMgZXhwaXJlZFxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJtZXNzYWdlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JqKGpzb25bXCJtZXNzYWdlXCJdKTsgLy9jdXN0b20gZXJyb3IgbWVzc2FnZSBmcm9tIEFQSVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihCQURfUkVRVUVTVF9NU0cpOyAvL2JhZCBpbnB1dCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7IHJldHVybiBuZXcgRXJyb3JPYmooU0VSVkVSX0VSUk9SX01TRyk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tbG9naW4odXNlcmlkLCBwYXNzd29yZCktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFBhc3N3b3JkXHJcbiAgICAvLyAgICBPdXRwdXQ6IFwiQWRtaW5cIiwgXCJJbnN0cnVjdG9yXCIsIFwiU3R1ZGVudC9UQVwiIG9yIGJvb2xlYW4gZm9yIGZhaWx1cmVcclxuICAgIGFzeW5jIGxvZ2luKHVzZXJpZCA9IFwiXCIsIHBhc3N3b3JkID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9sb2dpblwiLCBib2R5KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwidG9rZW5cIikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZXhwaXJlcy5zZXRIb3VycyhleHBpcmVzLmdldEhvdXJzKCkgKyAyNCk7IC8vZXhwaXJlcyBpbiAyNCBob3Vyc1xyXG4gICAgICAgICAgICAgICAgZXhwaXJlcyA9IGV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29va2llQ3V0dGVyLnNldChcInRva2VuXCIsIGpzb25bXCJ0b2tlblwiXSwgeyBleHBpcmVzIH0pOyAvL3NldCB0b2tlbiBjb29raWVcclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uW1wicm9sZVwiXTsgLy9yZXR1cm4gdGhlIHJvbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpLnRoZW4ocm9sZSA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgaXMgYWNjZXNzaWJsZSwgaXQgaXMgZWl0aGVyIHJvbGUgc3RyaW5nIG9yIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGZhaWx1cmUqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1sb2dvdXQodXNlcmlkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IE5vbmVcclxuICAgIC8vICAgIE91dHB1dDogTm9uZVxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGNvb2tpZUN1dHRlci5zZXQoXCJ0b2tlblwiLCBcIlwiLCB7IGV4cGlyZXM6IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSB9KTtcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KFwidXNlclwiLCBcIlwiLCB7IGV4cGlyZXM6IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBTZWN0aW9ucyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgVXNlcklkLCBTZW1lc3RlciBhbmQgWWVhclxyXG4gICAgYXN5bmMgZ2V0Q291cnNlcyh1c2VyaWQgPSBcIlwiLCBzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQsIHNlbWVzdGVyOiBzZW1lc3RlciwgeWVhcjogeWVhciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9ieS11c2VyaWQtc2VtZXN0ZXIteWVhclwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0Q291cnNlcyh1c2VySWQsIHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhciktLS0gIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IFNlY3Rpb25zIGZvciB0aGUgY29ycmVzcG9uZGluZyBTZW1lc3RlciBhbmQgWWVhciBcclxuICAgIGFzeW5jIGdldEFsbENvdXJzZXModXNlcmlkID0gXCJcIiwgc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IFVzZXJpZDogdXNlcmlkLCBTZW1lc3Rlcjogc2VtZXN0ZXIsIFllYXI6IHllYXIgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvc2VjdGlvbnMvYnktc2VtZXN0ZXIteWVhclwiLCBib2R5KTtcclxuICAgICAgICBcclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIoc2VtZXN0ZXIsIHllYXIpLS0tICAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogQWxsIENvdXJzZXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHNlbWVzdGVyIGFuZCB5ZWFyIFxyXG4gICAgYXN5bmMgZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyKHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IFxyXG4gICAgICAgICAgICBzZW1lc3Rlcjogc2VtZXN0ZXIsIFxyXG4gICAgICAgICAgICB5ZWFyOiB5ZWFyIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvZ2V0LWJ5LXllYXItc2VtZXN0ZXJcIiwgYm9keSk7XHJcbiAgICB9XHJcbiAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgIC8vYXBpLmdldENvdXJzZXNCeVNlbWVzdGVyWWVhcihzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcblxyXG4gICAgLy8tLS1nZXRGb3Jtc0J5U2VjdGlvbih1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UsIHNlY3Rpb24pLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgQ291cnNlTnVtYmVyLCBTZWN0aW9uTnVtYmVyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEZvcm1zIGZvciB0aGUgY29ycmVzcG9uZGluZyBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBDb3Vyc2VOdW1iZXIsIGFuZCBTZWN0aW9uTnVtYmVyXHJcbiAgICBhc3luYyBnZXRGb3JtQnlTZWN0aW9uKHVzZXJpZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIFNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIEluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFllYXI6IHllYXIsICAgXHJcbiAgICAgICAgICAgICAgICBTZW1lc3Rlcjogc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBEZXBhcnRtZW50OiBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgQ291cnNlTnVtYmVyOiBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBTZWN0aW9uTnVtYmVyOiBzZWN0aW9uTnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9ieS1zZWN0aW9uXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRGb3Jtc0J5U2VjdGlvbih1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UsIHNlY3Rpb24pLnRoZW4oZm9ybSA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGZvcm0gaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0Rm9ybXNCeUNvdXJzZSh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgQ291cnNlTnVtYmVyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEZvcm1zIGZvciB0aGUgY29ycmVzcG9uZGluZyBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBhbmQgQ291cnNlTnVtYmVyXHJcbiAgICBhc3luYyBnZXRGb3Jtc0J5Q291cnNlKHVzZXJpZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgWWVhcjogeWVhcixcclxuICAgICAgICAgICAgICAgIFNlbWVzdGVyOiBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIERlcGFydG1lbnQ6IGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBDb3Vyc2VOdW1iZXI6IGNvdXJzZU51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9ieS1jb3Vyc2VcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEZvcm1zQnlDb3Vyc2UodXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEFsbEZvcm1zKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEZvcm1zIGZvciB0aGUgY29ycmVzcG9uZGluZyBTZW1lc3RlciBhbmQgWWVhclxyXG4gICAgYXN5bmMgZ2V0QWxsRm9ybXModXNlcmlkID0gXCJcIiwgc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkge1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCwgc2VtZXN0ZXI6IHNlbWVzdGVyLCB5ZWFyOiB5ZWFyIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL2J5LXNlbWVzdGVyLXllYXJcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEFsbEZvcm1zKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGZvcm1zIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RGb3JtKHVzZXJJZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgc2VjdGlvbk51bWJlciwgaXNTZWN0aW9uQ29tcGxldGVkLCBvdXRjb21lcywgSVRHcmFkZXMsIENTR3JhZGVzLCBDRUdyYWRlcyktLS1cclxuICAgIC8vICAgIElucHV0OiBeXl4gICAod2lsbCBhbHNvIGhhdmUgcGRmIGhlcmUgbGF0ZXIgYXMgYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXIpXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgcG9zdEZvcm0odXNlcklkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiLCBpc1NlY3Rpb25Db21wbGV0ZWQgPSBmYWxzZSwgb3V0Y29tZXMgPSBbXSwgSVRHcmFkZXMgPSB7fSwgQ1NHcmFkZXMgPSB7fSwgQ0VHcmFkZXMgPSB7fSkge1xyXG4gICAgICAgIC8vIHRoZSBib2R5IHdpbGwgYWxzbyBpbmNsdWRlIGFueSBwZGYgdG8gcG9zdCBpbiB0aGUgZnV0dXJlXHJcblxyXG4gICAgICAgIC8vb3V0Y29tZXM6IGFuIGFycmF5IG9mIENvdXJzZV9PdXRjb21lcyBvYmplY3RzXHJcbiAgICAgICAgLy9Db3Vyc2VfT3V0Y29tZXMgY2xhc3M6XHJcbiAgICAgICAgLy9zdHJpbmcgb3V0Y29tZSwgaW50IG51bWJlck9mSVQsIGludCBudW1iZXJPZkNTLCBpbnQgbnVtYmVyT2ZDRSwgU3R1ZGVudFdvcmtzW10gc3R1ZGVudFdvcmtzXHJcbiAgICAgICAgLy9TdHVkZW50V29ya3MgY2xhc3M6XHJcbiAgICAgICAgLy9zdHJpbmcgc3R1ZGVudFdvcmssIHN0cmluZyBmaWxlVXBsb2FkZWQgKDwtLSB3aWxsIGltcGxlbWVudCBsYXRlcilcclxuXHJcbiAgICAgICAgLy9JVCwgQ1MsIENFIEdyYWRlcyBjbGFzczpcclxuICAgICAgICAvL2ludCBBLCBpbnQgQiwgaW50IEMsIGludCBELCBpbnQgRSwgaW50IEYsIGludCBXLCBpbnQgSSwgaW50IHRvdGFsU3R1ZGVudHNcclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VjdGlvbkNvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG91dGNvbWVzLFxyXG4gICAgICAgICAgICAgICAgSVRHcmFkZXMsXHJcbiAgICAgICAgICAgICAgICBDU0dyYWRlcyxcclxuICAgICAgICAgICAgICAgIENFR3JhZGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9wb3N0LWZvcm1cIiwgYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1wb3N0Q29tbWVudCh1c2VySWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIGNvb3JkaW5hdG9yQ29tbWVudCwgaXNDb3Vyc2VDb21wbGV0ZWQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBjb29yZGluYXRvckNvbW1lbnQsIGlzQ291cnNlQ29tcGxldGVkXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgcG9zdENvbW1lbnQodXNlcklkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGNvb3JkaW5hdG9yQ29tbWVudCA9IFwiXCIsIGlzQ291cnNlQ29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBjb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0b3JDb21tZW50LFxyXG4gICAgICAgICAgICAgICAgaXNDb3Vyc2VDb21wbGV0ZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvcG9zdC1jb21tZW50XCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0QmxhbmtGb3JtKHVzZXJpZCktLS1cclxuICAgIC8vICAgIElucHV0OiBTZWN0aW9uIG9iamVjdCBjb250YWluaW5nOiBDb3Vyc2VOdW1iZXIsIFNlY3Rpb25OdW1iZXIsIGFuZCBJZFxyXG4gICAgLy8gICAgT3V0cHV0OiBCbGFuayBGb3JtXHJcbiAgICAvL2FzeW5jIGdldEJsYW5rRm9ybSh1c2VyaWQpIHtcclxuICAgIGFzeW5jIGdldEJsYW5rRm9ybShjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIiwgc2VjdGlvbklkID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IFxyXG4gICAgICAgICAgICBTZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBDb3Vyc2VOdW1iZXI6IGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFNlY3Rpb25OdW1iZXI6IHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBJZDogc2VjdGlvbklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9uZXctYmxhbmtcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEJsYW5rRm9ybSh1c2VyaWQpLnRoZW4ocmVzdWx0ID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBpcyBhY2Nlc3NpYmxlLCBpdCBpcyBhIEpTT04qL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLWdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIoKS0tXHJcbiAgICAvLyAgICBJbnB1dDogTm90aGluZ1xyXG4gICAgLy8gICAgT3V0cHV0OiBPYmplY3QgSW5jbHVkaW5nIEN1cnJlbnQgRGVmYXVsdCBZZWFyIGFuZCBTZW1lc3RlclxyXG4gICAgZ2V0RGVmYXVsdFllYXJBbmRTZW1lc3RlcigpIHtcclxuICAgICAgICB2YXIgdGV4dCA9ICd7IFwieWVhclwiOiAwLCcgKyAgICAgICAgIC8vIGNyZWF0ZSBzdHJpbmcgb2Ygb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAnIFwic2VtZXN0ZXJcIjogXCJcIiB9JztcclxuICAgICAgICB2YXIgUmVzdWx0T2JqID0gSlNPTi5wYXJzZSh0ZXh0KTsgICAvLyBjcmVhdGUgb2JqZWN0IGZyb20gdGhlIHN0cmluZ1xyXG5cclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7ICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZGF0ZVxyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERheSgpOyAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkYXlcclxuICAgICAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxOyAgICAvLyBhZGQgb25lIHRvIG1vbnRoIChieSBkZWZhdWx0IEphbnVhcnkgPSAwKVxyXG4gICAgICAgIFJlc3VsdE9iai55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOy8vIGdldCB0aGUgZnVsbCB5ZWFyIGZyb20gdGhlIGRhdGVcclxuICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjsgICAgICAgIC8vIGp1c3QgdG8gYmUgc2FmZVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldCB0aGUgRGVmYXVsdCBTZW1lc3RlciBCYXNlZCBvbiB0aGUgTW9udGhcclxuICAgICAgICBpZiAoKG1vbnRoID4gOCkgfHwgKG1vbnRoID09IDggJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKG1vbnRoID4gNSkgfHwgKG1vbnRoID09IDUgJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcInN1bW1lclwiO1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGlzIGlzIGp1c3QgYSBkZWZhdWx0IHNlbWVzdGVyLCBpdCBhbHdheXMgZGVmYXVsdHMgdG8gdGhlIGxvbmdlciBzZW1lc3RlcnNcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyB3aHkgaXQgZG9lc24ndCBkZWZhdWx0IHRvIHNtYWxsZXIgc3VtbWVyIHNlbWVzdGVyc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJzcHJpbmdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBSZXN1bHRPYmo7ICAgIC8vIHJldHVybiBvYmplY3QgaW5jbHVkaW5nIHRoZSB5ZWFyIGFuZCBzZW1lc3RlclxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tYWRkU2VjdGlvbih1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGRlcGFydG1lbnQsIG51bWJlck9mU3R1ZGVudHMpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBeXl5cclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBhZGRTZWN0aW9uKHVzZXJpZCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBudW1iZXJPZlN0dWRlbnRzID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgaXNTZWN0aW9uQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mU3R1ZGVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9hZGQtc2VjdGlvblwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEZhY3VsdHlMaXN0KCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IG5vbmVcclxuICAgIC8vICAgIE91dHB1dDogTGlzdCBvZiBpbnN0cnVjdG9ycywgY29vcmRpbmF0b3JzLCBhZGp1bmN0IGZhY3VsdGllcywgYW5kIHRlYWNoaW5nIGZlbGxvd3NcclxuICAgIGFzeW5jIGdldEZhY3VsdHlMaXN0KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mYWN1bHR5L2dldC1saXN0XCIsIHt9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1hZGRGYWN1bHR5TWVtYmVyKGZpcnN0TmFtZSwgbGFzdE5hbWUsIHVzZXJpZCwgcm9sZSktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IEZpcnN0IE5hbWUsIExhc3QgTmFtZSBhbmQgVXNlciBJZFxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIGFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB1c2VySWQgPSBcIlwiLCBmYWN1bHR5VHlwZSA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhY3VsdHlUeXBlOiBmYWN1bHR5VHlwZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2ZhY3VsdHkvYWRkLW1lbWJlclwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBkZXBhcnRtZW50XHJcbiAgICAvLyAgICBPdXRwdXQ6IGFycmF5IG9mIGNvdXJzZXNcclxuICAgIGFzeW5jIGdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2dldC1ieS1kZXBhcnRtZW50XCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWFkZFByb2dyYW0ocHJvZ3JhbSktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IHByb2dyYW0gbmFtZVxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIGFkZFByb2dyYW0ocHJvZ3JhbSA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBwcm9ncmFtXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9wcm9ncmFtcy9hZGQtcHJvZ3JhbVwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1hZGRDb3Vyc2UodXNlcmlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkaXNwbGF5TmFtZSwgZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IF5eXlxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIGFkZENvdXJzZSh1c2VyaWQgPSBcIlwiLCBmaXJzdE5hbWUgPSBcIlwiLCBsYXN0TmFtZSA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGRpc3BsYXlOYW1lID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvYWRkLWNvdXJzZVwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1yZW1vdmVDb3Vyc2UoeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnRcclxuICAgIC8vICAgIE91dHB1dDogc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgICBhc3luYyByZW1vdmVDb3Vyc2UoeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvcmVtb3ZlLWNvdXJzZVwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldENvdXJzZU91dGNvbWVzQnlDb3Vyc2UoeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnRcclxuICAgIC8vICAgIE91dHB1dDogYXJyYXkgb2YgY291cnNlIG91dGNvbWVzXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VPdXRjb21lc0J5Q291cnNlKHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZS1vdXRjb21lcy9ieS1jb3Vyc2VcIiwgYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1wb3N0Q291cnNlT3V0Y29tZXMob3V0Y29tZXMpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBhcnJheSBvZiBvdXRjb21lIG9iamVjdHMgKHNlZSBub3RlcyBiZWxvdylcclxuICAgIC8vICAgIE91dHB1dDogc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0Q291cnNlT3V0Y29tZXMob3V0Y29tZXMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICAvL2FuIG91dGNvbWUgb2JqZWN0IGNvbnRhaW5zIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9vcmRlciAobnVtYmVyKSwgb3V0Y29tZSAoc3RyaW5nKSwgbWFwcGVkU3R1ZGVudE91dGNvbWVzKGFycmF5IG9mIG51bWJlcnMpXHJcbiAgICAgICAgLy9FeGFtcGxlOlxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgIC8vICAgIG9yZGVyOiAxLCBvdXRjb21lOiBcIkFjY29tcGxpc2ggdGhpbmdzXCIsIG1hcHBlZFN0dWRlbnRPdXRjb21lczogWzEsIDAsIDAsIDEsIDAsIDFdXHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGNvdXJzZU91dGNvbWVzTGlzdDogb3V0Y29tZXNcclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlLW91dGNvbWVzL3Bvc3Qtb3V0Y29tZXNcIiwgYm9keSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tcG9zdFNlY3Rpb24odXNlcmlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBzZWN0aW9uTnVtYmVyLCBkZXBhcnRtZW50LCBudW1iZXJPZlN0dWRlbnRzKS0tLSAoSW5zdHJ1Y3RvcilcclxuICAgIC8vICAgSW5wdXQ6IFNlY3Rpb24gb2JqZWN0XHJcbiAgICAvLyAgIE91dHB1dDogc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0U2VjdGlvbih1c2VyaWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgbnVtYmVyT2ZTdHVkZW50cyA9IDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBzZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpbnN0cnVjdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIGlzU2VjdGlvbkNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBOdW1iZXJPZlN0dWRlbnRzXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvc2VjdGlvbnMvcG9zdC1zZWN0aW9uXCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyB1cGxvYWRBY2Nlc3NEYihmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpKSBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kRmlsZSgnL3VwbG9hZC1hY2Nlc3MtZGInLCBmb3JtRGF0YSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIHVwbG9hZEZvcm1BdHRhY2htZW50KGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCksIG91dGNvbWVJZCA9IDApIFxyXG4gICAge1xyXG4gICAgICAgIC8vb3V0Y29tZUlkIGlzIGEgdW5pcXVlIGlkIHRoYXQgaWRlbnRpZmllcyBhIGNlcnRhaW4gb3V0Y29tZSBpbiB0aGUgREJcclxuICAgICAgICAvL2l0IHdpbGwgY29tZSBmcm9tIHRoZSBEQiB3aGVuIHRoZSBpbnN0cnVjdG9yIGZvcm0gcGFnZSBpcyBsb2FkZWRcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJvdXRjb21lSWRcIiwgb3V0Y29tZUlkKTsgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZEZpbGUoJy91cGxvYWQtZm9ybS1hdHRhY2htZW50JywgZm9ybURhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFcnJvck9iaiB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlID0gXCJcIiwgaXNMb2dnZWRJbiA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLmZhaWx1cmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gaXNMb2dnZWRJbjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/api.js\n");
=======
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

    return await fetch(url, {
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
      if (statusCode == UNAUTHORIZED) //this check has to be here for some reason ¯\_(ツ)_/¯
        return;else return response.json();
    }).then(json => {
      if (statusCode == OK) return json;else if (statusCode == UNAUTHORIZED) return new ErrorObj(NOT_LOGGED_IN_MSG, false); //user's session has expired
      else {
          if (json.hasOwnProperty("message")) return new ErrorObj(json["message"]); //custom error message from API
          else return new ErrorObj(BAD_REQUEST_MSG); //bad input parameters
        }
    }).catch(() => {
      return new ErrorObj(SERVER_ERROR_MSG);
    });
  }

  async sendFile(route = "", formData = new FormData()) {
    const url = root + route; // Combine the root URL with the specified route

    var statusCode; //holds the status code of the response

    return await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        "Authorization": "Bearer " + token
      }
    }).then(response => {
      statusCode = response.status;
      if (statusCode == UNAUTHORIZED) //this check has to be here for some reason ¯\_(ツ)_/¯
        return;else return response.json();
    }).then(json => {
      if (statusCode == OK) return json;else if (statusCode == UNAUTHORIZED) return new ErrorObj(NOT_LOGGED_IN_MSG, false); //user's session has expired
      else {
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
  //    Input: Section object containing: CourseNumber, SectionNumber, and Id
  //    Output: Blank Form
  //async getBlankForm(userid) {


  async getBlankForm(courseNumber = "", sectionNumber = "", sectionId = 0) {
    const body = {
      Section: {
        CourseNumber: courseNumber,
        SectionNumber: sectionNumber,
        Id: sectionId
      }
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
  } //---postSection(userid, firstName, lastName, year, semester, courseNumber, sectionNumber, department, numberOfStudents)--- (Instructor)
  //   Input: Section object
  //   Output: success or failure


  async postSection(userid = "", year = 0, semester = "", courseNumber = "", sectionNumber = "", department = "", firstName = "", lastName = "", numberOfStudents = 0) {
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
        NumberOfStudents
      }
    };
    return await this.sendPost("/sections/post-section", body);
  }

  async uploadAccessDb(formData = new FormData()) {
    return await this.sendFile('/upload-access-db', formData);
  }

  async uploadFormAttachment(formData = new FormData(), outcomeId = 0) {
    //outcomeId is a unique id that identifies a certain outcome in the DB
    //it will come from the DB when the instructor form page is loaded
    formData.append("outcomeId", outcomeId);
    return await this.sendFile('/upload-form-attachment', formData);
  }

}

class ErrorObj {
  constructor(message = "", isLoggedIn = true) {
    this.failure = true;
    this.message = message;
    this.isLoggedIn = isLoggedIn;
  }

}
>>>>>>> Stashed changes

/***/ }),

/***/ "./components/LoginBox.js":
/*!********************************!*\
  !*** ./components/LoginBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/APIHelper */ "./api/APIHelper.js");

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\LoginBox.js";





const LoginBox = () => {
  const [username, setUsername, resetUsername] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__["default"])("");
  const [password, setPassword, resetPassword] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__["default"])("");
  const toast = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useToast"])();

  const handleSubmit = async evt => {
    evt.preventDefault();

    try {
      const response = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_4__["login"])(username, password);

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
    } catch (error) {
      alert("try 'admin' & 'admin'");
    } finally {
      resetUsername();
      resetPassword();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: "10%",
    ml: "auto",
    mr: "auto",
    padding: "2em",
    bg: "#edf2f7",
    w: "80%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "xl",
      fontWeight: "bold",
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
        isRequired: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
          htmlFor: "username",
          margin: "1rem",
          mt: "3rem",
          children: "Username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          placeholder: "EUID",
          value: username,
          onChange: setUsername,
          bg: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
        isRequired: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
          htmlFor: "password",
          margin: "1rem",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          placeholder: "Password",
          type: "password",
          value: password,
          onChange: setPassword,
          bg: "white"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        colorScheme: "green",
        margin: "1rem",
        onClick: handleSubmit,
        type: "submit",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/instructorHome",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          colorScheme: "blue",
          children: "Instructor Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/adminHome",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          colorScheme: "blue",
          margin: "1rem",
          children: "Admin Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/studentSurvey",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          colorScheme: "blue",
          margin: "1rem",
          children: "Student Survey"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginBox);

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LoginBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginBox */ "./components/LoginBox.js");

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\pages\\index.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "UNT ABET Tool Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginBox__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9hcGkvQVBJSGVscGVyLmpzIiwid2VicGFjazovLy8uL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkJveC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VJbnB1dFN0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtY3V0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdldENvdXJzZXMiLCJjb3Vyc2VzIiwiZ2V0SW5zdHJ1Y3RvckNvdXJzZXMiLCJpZCIsInRlcm0iLCJhcGlfaGVscGVyIiwiQVBJIiwicmVzcG9uc2UiLCJzZW1lc3RlciIsInllYXIiLCJ0aGVuIiwicmVzdWx0IiwiaW5zdHJ1Y3RvckNvdXJzZXMiLCJmaWx0ZXIiLCJjb3Vyc2UiLCJpbnN0cnVjdG9yIiwiZ2V0Q29vcmRpbmF0b3JDb3Vyc2VzIiwiY29vcmRpbmF0b3JDb3Vyc2VzIiwiY29vcmRpbmF0b3IiLCJnZXRGb3JtRGF0YSIsImRlcGFydG1lbnQiLCJzZWN0aW9uIiwiZ2V0Rm9ybUJ5U2VjdGlvbiIsImZvcm1EYXRhIiwicG9zdENvb3JkaW5hdG9yQ29tbWVudCIsInVzZXJpZCIsImNvdXJzZU51bWJlciIsImNvb3JkaW5hdG9yQ29tbWVudCIsImlzQ291cnNlQ29tcGxldGVkIiwicG9zdENvbW1lbnQiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInBvc3RJbnN0cnVjdG9yRm9ybSIsInNlY3Rpb25OdW1iZXIiLCJpc1NlY3Rpb25Db21wbGV0ZWQiLCJvdXRjb21lcyIsIklUR3JhZGVzIiwiQ1NHcmFkZXMiLCJDRUdyYWRlcyIsInBvc3RGb3JtIiwibG9naW4iLCJwYXNzd29yZCIsImdldEFsbENvdXJzZXMiLCJwYXJzZUludCIsImdldEZhY3VsdHlMaXN0IiwiZmFjdWx0eSIsImdldENvdXJzZXNCeURlcGFydG1lbnQiLCJhZGRGYWN1bHR5TWVtYmVyIiwibGFzdE5hbWUiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiYWRkQ291cnNlIiwiZGlzcGxheU5hbWUiLCJyZW1vdmVDb3Vyc2UiLCJyb290IiwiT0siLCJVTkFVVEhPUklaRUQiLCJOT1RfTE9HR0VEX0lOX01TRyIsIlNFUlZFUl9FUlJPUl9NU0ciLCJCQURfUkVRVUVTVF9NU0ciLCJ0b2tlbiIsInNldFRva2VuIiwidCIsInNlbmRQb3N0Iiwicm91dGUiLCJib2R5IiwidXJsIiwic3RhdHVzQ29kZSIsImNvb2tpZUN1dHRlciIsImdldCIsImZldGNoIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwicmVmZXJyZXJQb2xpY3kiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsIkVycm9yT2JqIiwiaGFzT3duUHJvcGVydHkiLCJjYXRjaCIsInNlbmRGaWxlIiwiRm9ybURhdGEiLCJleHBpcmVzIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJ0b1VUQ1N0cmluZyIsInNldCIsImxvZ291dCIsIlVzZXJpZCIsIlNlbWVzdGVyIiwiWWVhciIsImdldENvdXJzZXNCeVNlbWVzdGVyWWVhciIsIlNlY3Rpb24iLCJJbnN0cnVjdG9yIiwiSWQiLCJEZXBhcnRtZW50IiwiQ291cnNlTnVtYmVyIiwiU2VjdGlvbk51bWJlciIsImdldEZvcm1zQnlDb3Vyc2UiLCJDb3Vyc2UiLCJDb29yZGluYXRvciIsImdldEFsbEZvcm1zIiwidXNlcklkIiwiZm9ybSIsImdldEJsYW5rRm9ybSIsInNlY3Rpb25JZCIsImdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIiLCJ0ZXh0IiwiUmVzdWx0T2JqIiwicGFyc2UiLCJkYXRlIiwiZGF5IiwiZ2V0RGF5IiwibW9udGgiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiYWRkU2VjdGlvbiIsIm51bWJlck9mU3R1ZGVudHMiLCJmYWN1bHR5VHlwZSIsImluZm8iLCJnZXRDb3Vyc2VPdXRjb21lc0J5Q291cnNlIiwicG9zdENvdXJzZU91dGNvbWVzIiwiY291cnNlT3V0Y29tZXNMaXN0IiwicG9zdFNlY3Rpb24iLCJOdW1iZXJPZlN0dWRlbnRzIiwidXBsb2FkQWNjZXNzRGIiLCJ1cGxvYWRGb3JtQXR0YWNobWVudCIsIm91dGNvbWVJZCIsImFwcGVuZCIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsImlzTG9nZ2VkSW4iLCJmYWlsdXJlIiwiTG9naW5Cb3giLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicmVzZXRVc2VybmFtZSIsInVzZUlucHV0U3RhdGUiLCJzZXRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJ0b2FzdCIsInVzZVRvYXN0IiwiaGFuZGxlU3VibWl0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwiZXJyb3IiLCJhbGVydCIsImluaXRpYWxWYWwiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVzZXQiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJsaW5rIiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsIm9uQnVpbGRNYW5pZmVzdCIsImlkbGVUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsImlzTG9jYWxlRG9tYWluIiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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LGlEOzs7Ozs7Ozs7OztBQ0RBLGlCQUFpQixtQkFBTyxDQUFDLG1FQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUVlLFNBQVM0RyxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFELEM7Ozs7Ozs7Ozs7O0FDYkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IEFQSSBmcm9tICcuL2FwaSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q291cnNlcygpe1xyXG4gICAgcmV0dXJuKGNvdXJzZXMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluc3RydWN0b3JDb3Vyc2VzKGlkLCB0ZXJtKXtcclxuICAgIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRDb3Vyc2VzKGlkLCB0ZXJtLnNlbWVzdGVyLCB0ZXJtLnllYXIpO1xyXG5cclxuICAgIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgaW5zdHJ1Y3RvckNvdXJzZXMgPSBhd2FpdCByZXNwb25zZTtcclxuICAgIGluc3RydWN0b3JDb3Vyc2VzLmZpbHRlcihjb3Vyc2UgPT4gY291cnNlLmluc3RydWN0b3IuaWQgPT09IGlkKTtcclxuICAgIHJldHVybihpbnN0cnVjdG9yQ291cnNlcyk7XHJcbn07XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZGluYXRvckNvdXJzZXMoaWQsIHRlcm0pe1xyXG4gICAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldENvdXJzZXMoaWQsIHRlcm0uc2VtZXN0ZXIsIHRlcm0ueWVhcik7XHJcblxyXG4gICAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb29yZGluYXRvckNvdXJzZXMgPSBhd2FpdCByZXNwb25zZTtcclxuICAgIGNvb3JkaW5hdG9yQ291cnNlcy5maWx0ZXIoY291cnNlID0+IGNvdXJzZS5jb29yZGluYXRvci5pZCA9PT0gaWQpO1xyXG4gICAgcmV0dXJuKGNvb3JkaW5hdG9yQ291cnNlcyk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9ybURhdGEoaWQsIHllYXIsIHRlcm0sIGRlcGFydG1lbnQsIGNvdXJzZSwgc2VjdGlvbil7XHJcbiAgICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICAgIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuZ2V0Rm9ybUJ5U2VjdGlvbihpZCwgeWVhciwgdGVybSwgZGVwYXJ0bWVudCwgY291cnNlLCBzZWN0aW9uKTtcclxuICAgIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCl7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdENvb3JkaW5hdG9yQ29tbWVudCh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIGNvb3JkaW5hdG9yQ29tbWVudCwgaXNDb3Vyc2VDb21wbGV0ZWQpe1xyXG4gICAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLnBvc3RDb21tZW50KHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgY29vcmRpbmF0b3JDb21tZW50LCBpc0NvdXJzZUNvbXBsZXRlZCk7XHJcbiAgICByZXNwb25zZS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RJbnN0cnVjdG9yRm9ybSh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGlzU2VjdGlvbkNvbXBsZXRlZCwgb3V0Y29tZXMsIElUR3JhZGVzLCBDU0dyYWRlcywgQ0VHcmFkZXMpe1xyXG4gICAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLnBvc3RGb3JtKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgc2VjdGlvbk51bWJlciwgaXNTZWN0aW9uQ29tcGxldGVkLCBvdXRjb21lcywgSVRHcmFkZXMsIENTR3JhZGVzLCBDRUdyYWRlcyk7XHJcbiAgICByZXNwb25zZS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpe1xyXG4gICAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhcil7XHJcbiAgICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICAgIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuZ2V0QWxsQ291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCBwYXJzZUludCh5ZWFyKSk7XHJcbiAgICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgICBjb25zb2xlLmxvZyhjb3Vyc2VzKTtcclxuICAgIHJldHVybiBjb3Vyc2VzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmFjdWx0eUxpc3QoKXtcclxuICAgIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRGYWN1bHR5TGlzdCgpO1xyXG4gICAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KXtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmFjdWx0eSA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgcmV0dXJuIGZhY3VsdHk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291cnNlc0J5RGVwYXJ0bWVudChkZXBhcnRtZW50KXtcclxuICAgIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQpO1xyXG4gICAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KXtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSlcclxuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCByZXNwb25zZTtcclxuICAgIHJldHVybiBjb3Vyc2VzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkRmFjdWx0eU1lbWJlcihsYXN0TmFtZSwgZmlyc3ROYW1lLCBpZCwgdHlwZSl7XHJcbiAgICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICAgIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuYWRkRmFjdWx0eU1lbWJlcihmaXJzdE5hbWUsIGxhc3ROYW1lLCBpZCwgdHlwZSk7XHJcbiAgICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpe1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENvdXJzZSh1c2VyaWQgPSBcIlwiLCBmaXJzdE5hbWUgPSBcIlwiLCBsYXN0TmFtZSA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IDAsIGRpc3BsYXlOYW1lID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpe1xyXG4gICAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmFkZENvdXJzZSh1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRpc3BsYXlOYW1lLCBkZXBhcnRtZW50KTtcclxuICAgIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCl7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pXHJcbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlQ291cnNlKHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnQpIHtcclxuICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLnJlbW92ZUNvdXJzZShcclxuICAgIHllYXIsXHJcbiAgICBzZW1lc3RlcixcclxuICAgIGNvdXJzZU51bWJlcixcclxuICAgIGRlcGFydG1lbnRcclxuICApO1xyXG4gIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9KTtcclxuICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgY29uc29sZS5sb2coY291cnNlTnVtYmVyKTtcclxufVxyXG4iLCIvLyBIZWxwZXIgQVBJIENsYXNzXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcic7XHJcblxyXG5jb25zdCByb290ID0gXCJodHRwczovL2xvY2FsaG9zdDo0NDM3Mi9hcGlcIjsgLy8gVGhlIGJhc2UgVVJMIGZvciBlYWNoIHJlcXVlc3RcclxuY29uc3QgT0sgPSAyMDA7ICAgICAgICAgICAvLzIwMCBPayBzdGF0dXMgY29kZVxyXG5jb25zdCBVTkFVVEhPUklaRUQgPSA0MDE7IC8vNDAxIFVuYXV0aG9yaXplZCBzdGF0dXMgY29kZVxyXG5jb25zdCBOT1RfTE9HR0VEX0lOX01TRyA9IFwiRXJyb3I6IFlvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi5cIjtcclxuY29uc3QgU0VSVkVSX0VSUk9SX01TRyA9IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yOiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiO1xyXG5jb25zdCBCQURfUkVRVUVTVF9NU0cgPSBcIkVycm9yOiBTb21lIG9mIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXJzIGFyZSBpbnZhbGlkLlwiO1xyXG52YXIgdG9rZW4gPSBcIlwiOyAgICAgICAgICAgLy9ob2xkcyB2YWx1ZSBvZiB0aGUgdG9rZW4gY29va2llXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xyXG4gICAgLyogVGhpcyBmdW5jdGlvbiBpcyBmb3IgZ2V0SW5pdGlhbFByb3BzLlxyXG4gICAgY29va2llQ3V0dGVyIGlzIHVuZGVmaW5lZCBpbiBnZXRJbml0aWFsUHJvcHMsXHJcbiAgICBzbyB0aGlzIGZ1bmN0aW9uIHNldHMgdGhlIHRva2VuIHRvIHRoZSB2YWx1ZSBvZiB0aGUgY29va2llXHJcbiAgICBwYXNzZWQgaW4gZnJvbSBnZXRJbml0aWFsUHJvcHMuICovXHJcbiAgICBzZXRUb2tlbih0ID0gXCJcIikge1xyXG4gICAgICAgIHRva2VuID0gdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZW5lcmljIGZ1bmN0aW9uIGZvciBzZW5kaW5nIFBPU1QgcmVxdWVzdHNcclxuICAgIC8vICAgIElucHV0OiByb3V0ZSBhbmQgYm9keVxyXG4gICAgLy8gICAgT3V0cHV0OiBUaGUgSlNPTiB0aGF0IGlzIHJldHVybmVkIGZyb20gdGhlIHJvdXRlXHJcbiAgICBhc3luYyBzZW5kUG9zdChyb3V0ZSA9IFwiXCIsIGJvZHkgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHJvb3QgKyByb3V0ZTsgLy8gQ29tYmluZSB0aGUgcm9vdCBVUkwgd2l0aCB0aGUgc3BlY2lmaWVkIHJvdXRlXHJcbiAgICAgICAgdmFyIHN0YXR1c0NvZGU7IC8vaG9sZHMgdGhlIHN0YXR1cyBjb2RlIG9mIHRoZSByZXNwb25zZVxyXG5cclxuICAgICAgICAvL2lmIHRoZSByZXF1ZXN0IGlzIG5vdCBmcm9tIGdldEluaXRpYWxQcm9wcywgbWVhbmluZyBjb29raWVDdXR0ZXIgaXMgZGVmaW5lZCwgcmV0cmVpdmUgdGhlIGNvb2tpZVxyXG4gICAgICAgIGlmICh0eXBlb2YgY29va2llQ3V0dGVyLmdldCA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBjb29raWVDdXR0ZXIuZ2V0KFwidG9rZW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6IFwibm8tcmVmZXJyZXJcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09IFVOQVVUSE9SSVpFRCkgLy90aGlzIGNoZWNrIGhhcyB0byBiZSBoZXJlIGZvciBzb21lIHJlYXNvbiDCr1xcXyjjg4QpXy/Cr1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT0gT0spXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGF0dXNDb2RlID09IFVOQVVUSE9SSVpFRClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JqKE5PVF9MT0dHRURfSU5fTVNHLCBmYWxzZSk7IC8vdXNlcidzIHNlc3Npb24gaGFzIGV4cGlyZWRcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwibWVzc2FnZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihqc29uW1wibWVzc2FnZVwiXSk7IC8vY3VzdG9tIGVycm9yIG1lc3NhZ2UgZnJvbSBBUElcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooQkFEX1JFUVVFU1RfTVNHKTsgLy9iYWQgaW5wdXQgcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4geyByZXR1cm4gbmV3IEVycm9yT2JqKFNFUlZFUl9FUlJPUl9NU0cpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZW5kRmlsZShyb3V0ZSA9IFwiXCIsIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCkpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSByb290ICsgcm91dGU7IC8vIENvbWJpbmUgdGhlIHJvb3QgVVJMIHdpdGggdGhlIHNwZWNpZmllZCByb3V0ZVxyXG4gICAgICAgIHZhciBzdGF0dXNDb2RlOyAvL2hvbGRzIHRoZSBzdGF0dXMgY29kZSBvZiB0aGUgcmVzcG9uc2VcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSBVTkFVVEhPUklaRUQpIC8vdGhpcyBjaGVjayBoYXMgdG8gYmUgaGVyZSBmb3Igc29tZSByZWFzb24gwq9cXF8o44OEKV8vwq9cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09IE9LKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdHVzQ29kZSA9PSBVTkFVVEhPUklaRUQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihOT1RfTE9HR0VEX0lOX01TRywgZmFsc2UpOyAvL3VzZXIncyBzZXNzaW9uIGhhcyBleHBpcmVkXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcIm1lc3NhZ2VcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooanNvbltcIm1lc3NhZ2VcIl0pOyAvL2N1c3RvbSBlcnJvciBtZXNzYWdlIGZyb20gQVBJXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JqKEJBRF9SRVFVRVNUX01TRyk7IC8vYmFkIGlucHV0IHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgcmV0dXJuIG5ldyBFcnJvck9iaihTRVJWRVJfRVJST1JfTVNHKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1sb2dpbih1c2VyaWQsIHBhc3N3b3JkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgUGFzc3dvcmRcclxuICAgIC8vICAgIE91dHB1dDogXCJBZG1pblwiLCBcIkluc3RydWN0b3JcIiwgXCJTdHVkZW50L1RBXCIgb3IgYm9vbGVhbiBmb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgbG9naW4odXNlcmlkID0gXCJcIiwgcGFzc3dvcmQgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQsIHBhc3N3b3JkOiBwYXNzd29yZCB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2xvZ2luXCIsIGJvZHkpLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJ0b2tlblwiKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBleHBpcmVzLnNldEhvdXJzKGV4cGlyZXMuZ2V0SG91cnMoKSArIDI0KTsgLy9leHBpcmVzIGluIDI0IGhvdXJzXHJcbiAgICAgICAgICAgICAgICBleHBpcmVzID0gZXhwaXJlcy50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb29raWVDdXR0ZXIuc2V0KFwidG9rZW5cIiwganNvbltcInRva2VuXCJdLCB7IGV4cGlyZXMgfSk7IC8vc2V0IHRva2VuIGNvb2tpZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25bXCJyb2xlXCJdOyAvL3JldHVybiB0aGUgcm9sZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkubG9naW4odXNlcmlkLCBwYXNzd29yZCkudGhlbihyb2xlID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBpcyBhY2Nlc3NpYmxlLCBpdCBpcyBlaXRoZXIgcm9sZSBzdHJpbmcgb3IgYSBib29sZWFuIGluZGljYXRpbmcgZmFpbHVyZSovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWxvZ291dCh1c2VyaWQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogTm9uZVxyXG4gICAgLy8gICAgT3V0cHV0OiBOb25lXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgY29va2llQ3V0dGVyLnNldChcInRva2VuXCIsIFwiXCIsIHsgZXhwaXJlczogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpIH0pO1xyXG4gICAgICAgIGNvb2tpZUN1dHRlci5zZXQoXCJ1c2VyXCIsIFwiXCIsIHsgZXhwaXJlczogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWdldENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhciktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IFNlY3Rpb25zIGZvciB0aGUgY29ycmVzcG9uZGluZyBVc2VySWQsIFNlbWVzdGVyIGFuZCBZZWFyXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VzKHVzZXJpZCA9IFwiXCIsIHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIHtcclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCwgc2VtZXN0ZXI6IHNlbWVzdGVyLCB5ZWFyOiB5ZWFyIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL3NlY3Rpb25zL2J5LXVzZXJpZC1zZW1lc3Rlci15ZWFyXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRDb3Vyc2VzKHVzZXJJZCwgc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0QWxsQ291cnNlcyh1c2VyaWQsIHNlbWVzdGVyLCB5ZWFyKS0tLSAgKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogU2VjdGlvbnMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFNlbWVzdGVyIGFuZCBZZWFyIFxyXG4gICAgYXN5bmMgZ2V0QWxsQ291cnNlcyh1c2VyaWQgPSBcIlwiLCBzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgVXNlcmlkOiB1c2VyaWQsIFNlbWVzdGVyOiBzZW1lc3RlciwgWWVhcjogeWVhciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9ieS1zZW1lc3Rlci15ZWFyXCIsIGJvZHkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcbiAgICAvLy0tLWdldENvdXJzZXNCeVNlbWVzdGVyWWVhcihzZW1lc3RlciwgeWVhciktLS0gIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBBbGwgQ291cnNlcyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgc2VtZXN0ZXIgYW5kIHllYXIgXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIoc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkgXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgXHJcbiAgICAgICAgICAgIHNlbWVzdGVyOiBzZW1lc3RlciwgXHJcbiAgICAgICAgICAgIHllYXI6IHllYXIgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9nZXQtYnkteWVhci1zZW1lc3RlclwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgLy9hcGkuZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyKHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuXHJcbiAgICAvLy0tLWdldEZvcm1zQnlTZWN0aW9uKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSwgc2VjdGlvbiktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBDb3Vyc2VOdW1iZXIsIFNlY3Rpb25OdW1iZXJcclxuICAgIC8vICAgIE91dHB1dDogRm9ybXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIENvdXJzZU51bWJlciwgYW5kIFNlY3Rpb25OdW1iZXJcclxuICAgIGFzeW5jIGdldEZvcm1CeVNlY3Rpb24odXNlcmlkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgU2VjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgSW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgWWVhcjogeWVhciwgICBcclxuICAgICAgICAgICAgICAgIFNlbWVzdGVyOiBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIERlcGFydG1lbnQ6IGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBDb3Vyc2VOdW1iZXI6IGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFNlY3Rpb25OdW1iZXI6IHNlY3Rpb25OdW1iZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL2J5LXNlY3Rpb25cIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEZvcm1zQnlTZWN0aW9uKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSwgc2VjdGlvbikudGhlbihmb3JtID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgZm9ybSBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRGb3Jtc0J5Q291cnNlKHVzZXJpZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZSktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBDb3Vyc2VOdW1iZXJcclxuICAgIC8vICAgIE91dHB1dDogRm9ybXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFVzZXJJZCwgWWVhciwgU2VtZXN0ZXIsIERlcGFydG1lbnQsIGFuZCBDb3Vyc2VOdW1iZXJcclxuICAgIGFzeW5jIGdldEZvcm1zQnlDb3Vyc2UodXNlcmlkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBZZWFyOiB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgU2VtZXN0ZXI6IHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgRGVwYXJ0bWVudDogZGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIENvdXJzZU51bWJlcjogY291cnNlTnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL2J5LWNvdXJzZVwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0Rm9ybXNCeUNvdXJzZSh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0QWxsRm9ybXModXNlcmlkLCBzZW1lc3RlciwgeWVhciktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IFVzZXJJZCwgU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogRm9ybXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFNlbWVzdGVyIGFuZCBZZWFyXHJcbiAgICBhc3luYyBnZXRBbGxGb3Jtcyh1c2VyaWQgPSBcIlwiLCBzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBzZW1lc3Rlcjogc2VtZXN0ZXIsIHllYXI6IHllYXIgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZm9ybXMvYnktc2VtZXN0ZXIteWVhclwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0QWxsRm9ybXModXNlcmlkLCBzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgZm9ybXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tcG9zdEZvcm0odXNlcklkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBzZWN0aW9uTnVtYmVyLCBpc1NlY3Rpb25Db21wbGV0ZWQsIG91dGNvbWVzLCBJVEdyYWRlcywgQ1NHcmFkZXMsIENFR3JhZGVzKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IF5eXiAgICh3aWxsIGFsc28gaGF2ZSBwZGYgaGVyZSBsYXRlciBhcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlcilcclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0Rm9ybSh1c2VySWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIsIGlzU2VjdGlvbkNvbXBsZXRlZCA9IGZhbHNlLCBvdXRjb21lcyA9IFtdLCBJVEdyYWRlcyA9IHt9LCBDU0dyYWRlcyA9IHt9LCBDRUdyYWRlcyA9IHt9KSB7XHJcbiAgICAgICAgLy8gdGhlIGJvZHkgd2lsbCBhbHNvIGluY2x1ZGUgYW55IHBkZiB0byBwb3N0IGluIHRoZSBmdXR1cmVcclxuXHJcbiAgICAgICAgLy9vdXRjb21lczogYW4gYXJyYXkgb2YgQ291cnNlX091dGNvbWVzIG9iamVjdHNcclxuICAgICAgICAvL0NvdXJzZV9PdXRjb21lcyBjbGFzczpcclxuICAgICAgICAvL3N0cmluZyBvdXRjb21lLCBpbnQgbnVtYmVyT2ZJVCwgaW50IG51bWJlck9mQ1MsIGludCBudW1iZXJPZkNFLCBTdHVkZW50V29ya3NbXSBzdHVkZW50V29ya3NcclxuICAgICAgICAvL1N0dWRlbnRXb3JrcyBjbGFzczpcclxuICAgICAgICAvL3N0cmluZyBzdHVkZW50V29yaywgc3RyaW5nIGZpbGVVcGxvYWRlZCAoPC0tIHdpbGwgaW1wbGVtZW50IGxhdGVyKVxyXG5cclxuICAgICAgICAvL0lULCBDUywgQ0UgR3JhZGVzIGNsYXNzOlxyXG4gICAgICAgIC8vaW50IEEsIGludCBCLCBpbnQgQywgaW50IEQsIGludCBFLCBpbnQgRiwgaW50IFcsIGludCBJLCBpbnQgdG90YWxTdHVkZW50c1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWN0aW9uQ29tcGxldGVkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3V0Y29tZXMsXHJcbiAgICAgICAgICAgICAgICBJVEdyYWRlcyxcclxuICAgICAgICAgICAgICAgIENTR3JhZGVzLFxyXG4gICAgICAgICAgICAgICAgQ0VHcmFkZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL3Bvc3QtZm9ybVwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RDb21tZW50KHVzZXJJZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgY29vcmRpbmF0b3JDb21tZW50LCBpc0NvdXJzZUNvbXBsZXRlZCktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIGNvb3JkaW5hdG9yQ29tbWVudCwgaXNDb3Vyc2VDb21wbGV0ZWRcclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBwb3N0Q29tbWVudCh1c2VySWQgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgY29vcmRpbmF0b3JDb21tZW50ID0gXCJcIiwgaXNDb3Vyc2VDb21wbGV0ZWQgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGNvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgQ29vcmRpbmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRvckNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICBpc0NvdXJzZUNvbXBsZXRlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9wb3N0LWNvbW1lbnRcIiwgYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRCbGFua0Zvcm0odXNlcmlkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IFNlY3Rpb24gb2JqZWN0IGNvbnRhaW5pbmc6IENvdXJzZU51bWJlciwgU2VjdGlvbk51bWJlciwgYW5kIElkXHJcbiAgICAvLyAgICBPdXRwdXQ6IEJsYW5rIEZvcm1cclxuICAgIC8vYXN5bmMgZ2V0QmxhbmtGb3JtKHVzZXJpZCkge1xyXG4gICAgYXN5bmMgZ2V0QmxhbmtGb3JtKGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiLCBzZWN0aW9uSWQgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgXHJcbiAgICAgICAgICAgIFNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIENvdXJzZU51bWJlcjogY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgU2VjdGlvbk51bWJlcjogc2VjdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgIElkOiBzZWN0aW9uSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL25ldy1ibGFua1wiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0QmxhbmtGb3JtKHVzZXJpZCkudGhlbihyZXN1bHQgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgcmV0dXJuIHZhbHVlIGlzIGFjY2Vzc2libGUsIGl0IGlzIGEgSlNPTiovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tZ2V0RGVmYXVsdFllYXJBbmRTZW1lc3RlcigpLS1cclxuICAgIC8vICAgIElucHV0OiBOb3RoaW5nXHJcbiAgICAvLyAgICBPdXRwdXQ6IE9iamVjdCBJbmNsdWRpbmcgQ3VycmVudCBEZWZhdWx0IFllYXIgYW5kIFNlbWVzdGVyXHJcbiAgICBnZXREZWZhdWx0WWVhckFuZFNlbWVzdGVyKCkge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gJ3sgXCJ5ZWFyXCI6IDAsJyArICAgICAgICAgLy8gY3JlYXRlIHN0cmluZyBvZiBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICcgXCJzZW1lc3RlclwiOiBcIlwiIH0nO1xyXG4gICAgICAgIHZhciBSZXN1bHRPYmogPSBKU09OLnBhcnNlKHRleHQpOyAgIC8vIGNyZWF0ZSBvYmplY3QgZnJvbSB0aGUgc3RyaW5nXHJcblxyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTsgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkYXRlXHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7ICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGRheVxyXG4gICAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7ICAgIC8vIGFkZCBvbmUgdG8gbW9udGggKGJ5IGRlZmF1bHQgSmFudWFyeSA9IDApXHJcbiAgICAgICAgUmVzdWx0T2JqLnllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7Ly8gZ2V0IHRoZSBmdWxsIHllYXIgZnJvbSB0aGUgZGF0ZVxyXG4gICAgICAgIFJlc3VsdE9iai5zZW1lc3RlciA9IFwiZmFsbFwiOyAgICAgICAgLy8ganVzdCB0byBiZSBzYWZlXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2V0IHRoZSBEZWZhdWx0IFNlbWVzdGVyIEJhc2VkIG9uIHRoZSBNb250aFxyXG4gICAgICAgIGlmICgobW9udGggPiA4KSB8fCAobW9udGggPT0gOCAmJiBkYXkgPj0gMTUpKSB7XHJcbiAgICAgICAgICAgIFJlc3VsdE9iai5zZW1lc3RlciA9IFwiZmFsbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgobW9udGggPiA1KSB8fCAobW9udGggPT0gNSAmJiBkYXkgPj0gMTUpKSB7XHJcbiAgICAgICAgICAgIFJlc3VsdE9iai5zZW1lc3RlciA9IFwic3VtbWVyXCI7XHJcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoaXMgaXMganVzdCBhIGRlZmF1bHQgc2VtZXN0ZXIsIGl0IGFsd2F5cyBkZWZhdWx0cyB0byB0aGUgbG9uZ2VyIHNlbWVzdGVyc1xyXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHdoeSBpdCBkb2Vzbid0IGRlZmF1bHQgdG8gc21hbGxlciBzdW1tZXIgc2VtZXN0ZXJzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcInNwcmluZ1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFJlc3VsdE9iajsgICAgLy8gcmV0dXJuIG9iamVjdCBpbmNsdWRpbmcgdGhlIHllYXIgYW5kIHNlbWVzdGVyXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1hZGRTZWN0aW9uKHVzZXJpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgc2VjdGlvbk51bWJlciwgZGVwYXJ0bWVudCwgbnVtYmVyT2ZTdHVkZW50cyktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IF5eXlxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIGFkZFNlY3Rpb24odXNlcmlkID0gXCJcIiwgZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIG51bWJlck9mU3R1ZGVudHMgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgc2VjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBpc1NlY3Rpb25Db21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZTdHVkZW50c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL3NlY3Rpb25zL2FkZC1zZWN0aW9uXCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0RmFjdWx0eUxpc3QoKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogbm9uZVxyXG4gICAgLy8gICAgT3V0cHV0OiBMaXN0IG9mIGluc3RydWN0b3JzLCBjb29yZGluYXRvcnMsIGFkanVuY3QgZmFjdWx0aWVzLCBhbmQgdGVhY2hpbmcgZmVsbG93c1xyXG4gICAgYXN5bmMgZ2V0RmFjdWx0eUxpc3QoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2ZhY3VsdHkvZ2V0LWxpc3RcIiwge30pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lLCBsYXN0TmFtZSwgdXNlcmlkLCByb2xlKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogRmlyc3QgTmFtZSwgTGFzdCBOYW1lIGFuZCBVc2VyIElkXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgYWRkRmFjdWx0eU1lbWJlcihmaXJzdE5hbWUgPSBcIlwiLCBsYXN0TmFtZSA9IFwiXCIsIHVzZXJJZCA9IFwiXCIsIGZhY3VsdHlUeXBlID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGlkOiB1c2VySWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFjdWx0eVR5cGU6IGZhY3VsdHlUeXBlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvZmFjdWx0eS9hZGQtbWVtYmVyXCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IGRlcGFydG1lbnRcclxuICAgIC8vICAgIE91dHB1dDogYXJyYXkgb2YgY291cnNlc1xyXG4gICAgYXN5bmMgZ2V0Q291cnNlc0J5RGVwYXJ0bWVudChkZXBhcnRtZW50ID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvZ2V0LWJ5LWRlcGFydG1lbnRcIiwgYm9keSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tYWRkQ291cnNlKHVzZXJpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGlzcGxheU5hbWUsIGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBeXl5cclxuICAgIC8vICAgIE91dHB1dDogc3VjY2VzcyBvciBmYWlsdXJlXHJcbiAgICBhc3luYyBhZGRDb3Vyc2UodXNlcmlkID0gXCJcIiwgZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBkaXNwbGF5TmFtZSA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgQ29vcmRpbmF0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2FkZC1jb3Vyc2VcIiwgYm9keSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vLS0tcmVtb3ZlQ291cnNlKHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50XHJcbiAgICAvLyAgICBPdXRwdXQ6IHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgcmVtb3ZlQ291cnNlKHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIENvdXJzZToge1xyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL3JlbW92ZS1jb3Vyc2VcIiwgYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1nZXRDb3Vyc2VPdXRjb21lc0J5Q291cnNlKHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50XHJcbiAgICAvLyAgICBPdXRwdXQ6IGFycmF5IG9mIGNvdXJzZSBvdXRjb21lc1xyXG4gICAgYXN5bmMgZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZSh5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2Utb3V0Y29tZXMvYnktY291cnNlXCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tcG9zdENvdXJzZU91dGNvbWVzKG91dGNvbWVzKS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogYXJyYXkgb2Ygb3V0Y29tZSBvYmplY3RzIChzZWUgbm90ZXMgYmVsb3cpXHJcbiAgICAvLyAgICBPdXRwdXQ6IHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgcG9zdENvdXJzZU91dGNvbWVzKG91dGNvbWVzID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgLy9hbiBvdXRjb21lIG9iamVjdCBjb250YWlucyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vb3JkZXIgKG51bWJlciksIG91dGNvbWUgKHN0cmluZyksIG1hcHBlZFN0dWRlbnRPdXRjb21lcyhhcnJheSBvZiBudW1iZXJzKVxyXG4gICAgICAgIC8vRXhhbXBsZTpcclxuICAgICAgICAvL3tcclxuICAgICAgICAvLyAgICBvcmRlcjogMSwgb3V0Y29tZTogXCJBY2NvbXBsaXNoIHRoaW5nc1wiLCBtYXBwZWRTdHVkZW50T3V0Y29tZXM6IFsxLCAwLCAwLCAxLCAwLCAxXVxyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBjb3Vyc2VPdXRjb21lc0xpc3Q6IG91dGNvbWVzXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZS1vdXRjb21lcy9wb3N0LW91dGNvbWVzXCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLXBvc3RTZWN0aW9uKHVzZXJpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgc2VjdGlvbk51bWJlciwgZGVwYXJ0bWVudCwgbnVtYmVyT2ZTdHVkZW50cyktLS0gKEluc3RydWN0b3IpXHJcbiAgICAvLyAgIElucHV0OiBTZWN0aW9uIG9iamVjdFxyXG4gICAgLy8gICBPdXRwdXQ6IHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgcG9zdFNlY3Rpb24odXNlcmlkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBmaXJzdE5hbWUgPSBcIlwiLCBsYXN0TmFtZSA9IFwiXCIsIG51bWJlck9mU3R1ZGVudHMgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgc2VjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaW5zdHJ1Y3Rvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBpc1NlY3Rpb25Db21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgTnVtYmVyT2ZTdHVkZW50c1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL3NlY3Rpb25zL3Bvc3Qtc2VjdGlvblwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgdXBsb2FkQWNjZXNzRGIoZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSkgXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZEZpbGUoJy91cGxvYWQtYWNjZXNzLWRiJywgZm9ybURhdGEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhc3luYyB1cGxvYWRGb3JtQXR0YWNobWVudChmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpLCBvdXRjb21lSWQgPSAwKSBcclxuICAgIHtcclxuICAgICAgICAvL291dGNvbWVJZCBpcyBhIHVuaXF1ZSBpZCB0aGF0IGlkZW50aWZpZXMgYSBjZXJ0YWluIG91dGNvbWUgaW4gdGhlIERCXHJcbiAgICAgICAgLy9pdCB3aWxsIGNvbWUgZnJvbSB0aGUgREIgd2hlbiB0aGUgaW5zdHJ1Y3RvciBmb3JtIHBhZ2UgaXMgbG9hZGVkXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwib3V0Y29tZUlkXCIsIG91dGNvbWVJZCk7IFxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRGaWxlKCcvdXBsb2FkLWZvcm0tYXR0YWNobWVudCcsIGZvcm1EYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRXJyb3JPYmoge1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSA9IFwiXCIsIGlzTG9nZ2VkSW4gPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5mYWlsdXJlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGlzTG9nZ2VkSW47XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtCb3gsIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0LCBCdXR0b24sIFRleHQsIHVzZVRvYXN0fSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHVzZUlucHV0U3RhdGUgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXRTdGF0ZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vYXBpL0FQSUhlbHBlcic7XHJcblxyXG5jb25zdCBMb2dpbkJveCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lLCByZXNldFVzZXJuYW1lXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkLCByZXNldFBhc3N3b3JkXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB0b2FzdCA9IHVzZVRvYXN0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldnQpID0+IHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgdG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRva2VuIGNyZWF0ZWQuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSGVyZSdzIHlvdXIgdG9rZW4g8J+qmVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDkwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICB0b2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbmNvcnJlY3QgVXNlcklEIG9yIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJIZXJlJ3MgeW91ciB0b2tlbiDwn6qZXCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA5MDAwLFxyXG4gICAgICAgICAgICAgICAgaXNDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidHJ5ICdhZG1pbicgJiAnYWRtaW4nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5e1xyXG4gICAgICAgICAgICByZXNldFVzZXJuYW1lKCk7XHJcbiAgICAgICAgICAgIHJlc2V0UGFzc3dvcmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPEJveCBtdD1cIjEwJVwiIG1sPVwiYXV0b1wiIG1yPVwiYXV0b1wiIHBhZGRpbmc9XCIyZW1cIiBiZz1cIiNlZGYyZjdcIiB3PVwiODAlXCIgYm94U2hhZG93PVwiMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KVwiPlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwieGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiPkxvZ2luPC9UZXh0PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT4gICAgXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNSZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIG1hcmdpbiA9IFwiMXJlbVwiIG10PVwiM3JlbVwiPlVzZXJuYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRVVJRFwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9e3NldFVzZXJuYW1lfSBiZz1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaXNSZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIG1hcmdpbiA9IFwiMXJlbVwiPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtzZXRQYXNzd29yZH0gYmc9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImdyZWVuXCIgbWFyZ2luID0gXCIxcmVtXCIgb25DbGljayA9IHtoYW5kbGVTdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj5TaWduIEluPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3JIb21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiA+SW5zdHJ1Y3RvciBIb21lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbkhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1hcmdpbiA9IFwiMXJlbVwiPkFkbWluIEhvbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0dWRlbnRTdXJ2ZXlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG1hcmdpbiA9IFwiMXJlbVwiPlN0dWRlbnQgU3VydmV5PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQm94OyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFZhbCA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWwpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUoXCJcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFt2YWx1ZSwgaGFuZGxlQ2hhbmdlLCByZXNldF07XHJcbn1cclxuXHJcbiAvL2V4YW1wbGU6XHJcbiAvL1xyXG4gLy8gY29uc3QgW2FnZSwgaGFuZGxlQWdlQ2hhbmdlLCByZXNldEFnZV0gPSB1c2VGb3JtU3RhdGUoXCJcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcclxuXHJcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XHJcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gICAgcmV0dXJuIGNhY2hlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjYWNoZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XHJcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xyXG5cclxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcclxuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcclxuICB9XHJcblxyXG4gIHZhciBuZXdPYmogPSB7fTtcclxuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xyXG5cclxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcclxuXHJcbiAgaWYgKGNhY2hlKSB7XHJcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcclxuXHJcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG5mdW5jdGlvbiBpZGxlVGltZW91dDxUPihtczogbnVtYmVyLCBlcnI6IEVycm9yKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVyciksIG1zKSlcbiAgKVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgaWRsZVRpbWVvdXQ8Um91dGVMb2FkZXJFbnRyeT4oXG4gICAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhc1BhdGgsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTG9naW5Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkJveCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VU5UIEFCRVQgVG9vbCBMb2dpbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExvZ2luQm94Lz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLWN1dHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=