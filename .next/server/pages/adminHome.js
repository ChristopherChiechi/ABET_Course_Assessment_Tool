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

/***/ "./components/Courses.js":
/*!*******************************!*\
  !*** ./components/Courses.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/APIHelper */ "./api/APIHelper.js");


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\Courses.js";





const Courses = ({
  member,
  color,
  year,
  semester,
  courseNumber,
  department
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    templateColumns: "repeat(5, 1fr)",
    bg: color,
    padding: ".5em",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
        colSpan: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          align: "center",
          fontSize: "20px",
          children: member
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
        colStart: 5,
        colEnd: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: "ghost",
          onClick: () => {
            Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_3__["removeCourse"])(year, semester, courseNumber, department);
            alert("This will remove your entry");
          },
          children: "Remove"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Courses);

/***/ }),

/***/ "./components/admin-components/AdminMenu.js":
/*!**************************************************!*\
  !*** ./components/admin-components/AdminMenu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\AdminMenu.js";


const AdminMenu = ({
  setView
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
    allowToggle: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
        _expanded: {
          bg: "#38A169",
          color: "white"
        },
        flex: "1",
        textAlign: "left",
        onClick: () => {
          setView("GFR");
        },
        children: "Generate Full Report"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
        _expanded: {
          bg: "#38A169",
          color: "white"
        },
        flex: "1",
        textAlign: "left",
        onClick: () => {
          setView("GSS");
        },
        children: "Generate Student Surveys"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
        _expanded: {
          bg: "#38A169",
          color: "white"
        },
        flex: "1",
        textAlign: "left",
        onClick: () => {
          setView("GSR");
        },
        children: "Generate Section Report"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
        _expanded: {
          bg: "#38A169",
          color: "white"
        },
        flex: "1",
        textAlign: "left",
        onClick: () => {
          setView("OM");
        },
        children: "Student Outcome Mapping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
        flex: "1",
        textAlign: "left",
        children: "Department Changes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionIcon"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionPanel"], {
        pb: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Accordion"], {
          allowToggle: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
              _expanded: {
                bg: "#38A169",
                color: "white"
              },
              flex: "1",
              textAlign: "left",
              onClick: () => {
                setView("CNS");
              },
              children: "Create New Semester"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 41
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
              _expanded: {
                bg: "#38A169",
                color: "white"
              },
              flex: "1",
              textAlign: "left",
              onClick: () => {
                setView("EAC");
              },
              children: "Edit Assigned Courses"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 41
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
              _expanded: {
                bg: "#38A169",
                color: "white"
              },
              flex: "1",
              textAlign: "left",
              onClick: () => {
                setView("EFL");
              },
              children: "Edit Faculty List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 41
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
              _expanded: {
                bg: "#38A169",
                color: "white"
              },
              flex: "1",
              textAlign: "left",
              onClick: () => {
                setView("EPL");
              },
              children: "Edit Program List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 41
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
              _expanded: {
                bg: "#38A169",
                color: "white"
              },
              flex: "1",
              textAlign: "left",
              onClick: () => {
                setView("ECL");
              },
              children: "Edit Course List"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 41
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AccordionButton"], {
              _expanded: {
                bg: "#38A169",
                color: "white"
              },
              flex: "1",
              textAlign: "left",
              onClick: () => {
                setView("ECO");
              },
              children: "Edit Course Outcomes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 41
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 17
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AdminMenu);

/***/ }),

/***/ "./components/admin-components/AdminNavigation.js":
/*!********************************************************!*\
  !*** ./components/admin-components/AdminNavigation.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../api/api */ "./api/api.js");


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\AdminNavigation.js";




const AdminNavigation = ({
  link,
  user
}) => {
  const logout = () => {
    new _api_api__WEBPACK_IMPORTED_MODULE_3__["default"]().logout();
  };

  switch (link) {
    default:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          color: "#00853E",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "14px",
          top: "15%",
          flexDirection: "row",
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              float: "left",
              marginLeft: "auto",
              textAlign: "left",
              display: "flex",
              paddingLeft: "10px",
              href: "/adminHome",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              href: "/",
              onClick: logout,
              float: "right",
              marginLeft: "auto",
              textAlign: "right",
              display: "block",
              paddingRight: "10px",
              children: "Sign Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              float: "right",
              marginLeft: "auto",
              textAlign: "right",
              display: "flex",
              paddingRight: "10px",
              children: user
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false);
      break;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AdminNavigation);

/***/ }),

/***/ "./components/admin-components/CreateNewSemester.js":
/*!**********************************************************!*\
  !*** ./components/admin-components/CreateNewSemester.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\CreateNewSemester.js";



const CreateNewSemester = () => {
  var d = new Date();
  var y = d.getFullYear();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  });

  const handleConfirm = event => {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to create the selected new semester?")) {
      //POST the new semsester to the db
      alert("New Semester Created!");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "top",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
      id: "top",
      w: "80%",
      m: "0 auto",
      marginBottom: "10em",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontSize: "2xl",
        fontWeight: "bold",
        mt: "1em",
        children: "Create New Semester"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        fontWeight: "bold",
        children: "Select the term and year for the new semester."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        mt: "1em",
        id: "term",
        placeholder: "Select term",
        width: "50%",
        marginBottom: "1em",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Spring",
          children: "Spring"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Summer",
          children: "Summer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "Fall",
          children: "Fall"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        mt: "1em",
        id: "year",
        placeholder: "Select year",
        marginTop: "1em",
        marginBottom: "2em",
        width: "50%",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "year1",
          children: y
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: "year2",
          children: y + 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variantColor: "green",
        variant: "outline",
        onClick: handleConfirm,
        children: "Confirm"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CreateNewSemester);

/***/ }),

/***/ "./components/admin-components/EditCourseAssignments/AssignCourseInput.js":
/*!********************************************************************************!*\
  !*** ./components/admin-components/EditCourseAssignments/AssignCourseInput.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _Autocomplete_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Autocomplete.js */ "./components/admin-components/EditCourseAssignments/Autocomplete.js");
/* harmony import */ var _fake_data_faculty_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../fake-data/faculty.json */ "./fake-data/faculty.json");
var _fake_data_faculty_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/faculty.json */ "./fake-data/faculty.json", 1);

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditCourseAssignments\\AssignCourseInput.js";





const faculty = _fake_data_faculty_json__WEBPACK_IMPORTED_MODULE_5__.faculty;

const AssignCourseInput = ({
  course
}) => {
  const [section, setSection, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const {
    0: sections,
    1: setSections
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "inline",
      flexDirection: "row",
      alignItems: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "section-field",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          display: "inline",
          flexDirection: "row",
          color: "",
          children: sect.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "instructor-field",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Autocomplete_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          suggestions: faculty
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "trash-field",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          marginLeft: "2rem",
          width: "5rem",
          marginBottom: ".2em",
          icon: "delete",
          onClick: e => {
            e.preventDefault();

            if (window.confirm("Are you sure you would like to delete section " + sect.name + "?")) {
              removeSection(sect.id);
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "course-input",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "course-field",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          fontSize: "lg",
          mt: "6px",
          display: "inline",
          flexDirection: "row",
          justifyContent: "left",
          textAlign: "left",
          marginLeft: "2rem",
          width: "8rem",
          marginBottom: ".2em",
          children: course
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          display: "inline",
          flexDirection: "row",
          justifyContent: "left",
          textAlign: "left",
          marginLeft: "8.5rem",
          width: "8rem",
          marginBottom: ".2em"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          display: "inline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Autocomplete_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          suggestions: faculty,
          display: "inline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
          display: "inline",
          flexDirection: "row",
          justifyContent: "left",
          children: renderSection
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: addSection,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            display: "inline",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "left",
            mt: "1rem",
            placeholder: "enter a new section number",
            variant: "flushed",
            type: "text",
            value: section,
            onChange: setSection,
            w: "13em"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "coordinator-field"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      display: "inline",
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "left",
      variant: "link",
      isActive: "false",
      mt: "1.8em",
      ml: ".2em",
      variantColor: "green",
      size: "sm",
      icon: "add",
      onClick: addSection
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "section-input"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      mb: "2rem",
      mt: "2rem",
      borderColor: "black"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AssignCourseInput);

/***/ }),

/***/ "./components/admin-components/EditCourseAssignments/Autocomplete.js":
/*!***************************************************************************!*\
  !*** ./components/admin-components/EditCourseAssignments/Autocomplete.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditCourseAssignments\\Autocomplete.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //autocomplete functionality from https://www.digitalocean.com/community/tutorials/react-react-autocomplete

class Autocomplete extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
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
        suggestionsListComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          class: "suggestions",
          children: filteredSuggestions.map((suggestion, index) => {
            let className; // Flag the active suggestion with a class

            if (index === activeSuggestion) {
              className = "suggestion-active";
            }

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: className,
              onClick: onClick,
              children: suggestion
            }, suggestion, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this);
      }
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: "faculty-input",
        type: "text",
        onChange: onChange,
        onKeyDown: onKeyDown,
        value: userInput,
        placeholder: "Unassigned",
        border: "1px solid #999",
        padding: "0.5rem",
        height: "30px",
        width: "225px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this), suggestionsListComponent]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, this);
  }

}

_defineProperty(Autocomplete, "propTypes", {
  suggestions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Array)
});

_defineProperty(Autocomplete, "defaultProps", {
  suggestions: []
});

/* harmony default export */ __webpack_exports__["default"] = (Autocomplete);

/***/ }),

/***/ "./components/admin-components/EditCourseAssignments/EditCourseAssignments.js":
/*!************************************************************************************!*\
  !*** ./components/admin-components/EditCourseAssignments/EditCourseAssignments.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AssignCourseInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AssignCourseInput */ "./components/admin-components/EditCourseAssignments/AssignCourseInput.js");
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ "./fake-data/course.json", 1);

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditCourseAssignments\\EditCourseAssignments.js";





const EditCourseAssignments = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  });

  const handleSave = event => {
    event.preventDefault(); //POST the course assignments to the db

    alert("Course Assignments Saved");
  };

  const courses = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__.courses;
  const renderCourses = courses.map((course, idx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AssignCourseInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      course: course.code
    }, idx, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "top",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      fontWeight: "bold",
      marginTop: "1em",
      marginBottom: "1em",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontSize: "2xl",
        fontWeight: "bold",
        mt: "1em",
        align: "center",
        children: "Edit Assigned Courses"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      borderWidth: "2px",
      rounded: "lg",
      alignItems: "center",
      m: "1em",
      p: "3em",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "course-input",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "course",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "lg",
            fontWeight: "bold",
            display: "inline",
            flexDirection: "row",
            justifyContent: "left",
            textAlign: "left",
            marginLeft: "2rem",
            width: "8rem",
            marginBottom: ".2em",
            children: "Course"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "lg",
            fontWeight: "bold",
            display: "inline",
            flexDirection: "row",
            justifyContent: "left",
            textAlign: "left",
            marginLeft: "10rem",
            width: "15rem",
            marginBottom: ".2em",
            children: "Coordinator"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "lg",
            fontWeight: "bold",
            display: "inline",
            flexDirection: "row",
            justifyContent: "left",
            textAlign: "left",
            marginLeft: "2rem",
            width: "10rem",
            marginBottom: ".2em",
            children: "Section"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "lg",
            fontWeight: "bold",
            display: "inline",
            flexDirection: "row",
            justifyContent: "left",
            textAlign: "left",
            marginLeft: "2rem",
            width: "15rem",
            marginBottom: ".2em",
            children: "Instructor"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "coordinator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "section"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "instructor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "trash",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "lg",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            textAlign: "left",
            marginLeft: "2rem",
            width: "5rem",
            marginBottom: ".2em"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        mb: "2rem",
        borderColor: "black"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined), renderCourses, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variantColor: "green",
        variant: "outline",
        onClick: handleSave,
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditCourseList\\AddCourse.js";






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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(years[0]);
  const {
    0: semester,
    1: setSemester
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(semesters[0]);
  const [courseNumber, setCourseNumber] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const [displayName, setDisplayName] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__["default"])("");
  const {
    0: department,
    1: setDepartment
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(departments[0]);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: isEdditing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      direction: "column",
      align: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "Last Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        w: "50%",
        value: lastName,
        onChange: setLastName,
        variant: "filled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "First Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        w: "50%",
        value: firstName,
        onChange: setFirstName,
        variant: "filled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "ID"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        w: "50%",
        value: userid,
        onChange: setID,
        variant: "filled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "Year"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        onChange: event => {
          setYear(event.target.value);
        },
        value: yearValue,
        w: "50%",
        variant: "filled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: years[0],
          children: "2020"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: years[1],
          children: "2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: years[2],
          children: "2022"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "Semester"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        onChange: event => {
          setSemester(event.target.value);
        },
        value: semester,
        w: "50%",
        variant: "filled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: semesters[0],
          children: "Spring"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: semesters[1],
          children: "Summer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: semesters[2],
          children: "Fall"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: semesters[3],
          children: "Winter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "Course Number"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        w: "50%",
        value: courseNumber,
        onChange: setCourseNumber,
        variant: "filled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "Display Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        w: "50%",
        value: displayName,
        onChange: setDisplayName,
        variant: "filled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "Department"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        onChange: event => {
          setDepartment(event.target.value);
        },
        value: department,
        w: "50%",
        variant: "filled",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: departments[0],
          children: "CSCE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: departments[1],
          children: "EENG"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: departments[2],
          children: "IT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variantColor: "green",
        mt: "1em",
        onClick: addCourse,
        children: "Add New Course"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justifyContent: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variantColor: "green",
        mt: "2em",
        onClick: toggleEdditing,
        children: "Add Course"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (AddCourse);

/***/ }),

/***/ "./components/admin-components/EditCourseList/EditCourseList.js":
/*!**********************************************************************!*\
  !*** ./components/admin-components/EditCourseList/EditCourseList.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ "./fake-data/course.json", 1);
/* harmony import */ var _Courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Courses */ "./components/Courses.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _AddCourse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddCourse */ "./components/admin-components/EditCourseList/AddCourse.js");

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditCourseList\\EditCourseList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const EditCourseList = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  }); // State of the courses and function to set the new state.

  const {
    0: theCourse,
    1: setNewCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    courses: []
  });
  const {
    0: newCourse,
    1: addNewCourse
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    value: "CSCE"
  }); // Grabs the courses by department from the back-end.

  const getNewCourses = async () => {
    const newCourseList = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_6__["getCoursesByDepartment"])(theDepartment.value);
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


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getNewCourses();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (newCourse.lastName !== "") {
      Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_6__["addCourse"])(newCourse.userid, newCourse.firstName, newCourse.lastName, newCourse.year, newCourse.semester, newCourse.courseNumber, newCourse.displayName, newCourse.department);
      alert("New Course Added");
      getNewCourses();
    }
  }, [newCourse]);
  console.log(newCourse);
  const renderCourse = theCourse.courses.map((cours, idx) => {
    return (
      /*#__PURE__*/
      // <Box display="flex" alignItems="center">
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
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
        display: "inline",
        justifyContent: "center",
        alignItems: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Courses__WEBPACK_IMPORTED_MODULE_5__["default"], {
          member: cours.department + " " + cours.courseNumber + "\n" + cours.displayName,
          color: idx % 2 == 0 ? "gray.300" : "gray.100",
          year: cours.year,
          semester: cours.semester,
          courseNumber: cours.courseNumber,
          department: cours.department
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 7
      }, undefined)
    );
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "top",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
      id: "top",
      w: "90%",
      m: "0 auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontSize: "2xl",
        fontWeight: "bold",
        mt: "1em",
        children: "Edit Course List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        m: "1em",
        p: "3em",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          align: "center",
          fontWeight: "bold",
          mt: "1em",
          mb: "1em",
          fontSize: "lg",
          children: "Select Department"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          justifyContent: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
            mr: "1em",
            alignSelf: "c",
            width: "80%",
            onChange: dropDownHandler,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "CSCE",
              children: "Computer Science"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "EENG",
              children: "Engineering"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: "IT",
              children: "Information Technology"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variantColor: "green",
            variant: "outline",
            display: "inline",
            onClick: getNewCourses,
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          fontWeight: "bold",
          mt: "1em",
          mb: "1em",
          fontSize: "lg",
          align: "center",
          children: "Courses"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          justifyContent: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
            w: "80%",
            children: renderCourse
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AddCourse__WEBPACK_IMPORTED_MODULE_7__["default"], {
          addNewCourse: addNewCourse
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditCourseList);

/***/ }),

/***/ "./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.js":
/*!******************************************************************************!*\
  !*** ./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EditCourseOutcomes_EditOutcomeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EditCourseOutcomes/EditOutcomeList */ "./components/admin-components/EditCourseOutcomes/EditOutcomeList.js");
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ "./fake-data/course.json", 1);


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditCourseOutcomes\\EditCourseOutcomes.js";




const courses = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_4__.courses;
console.log(courses);

const EditCourseOutcomes = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
  });
  const {
    0: option,
    1: setOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();

  const handleSetOption = e => {
    setOption(e.target.value);
  };

  console.log(option);
  const renderOptions = courses.map((course, idx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: course.code,
      children: [course.code, " ", course.name]
    }, idx, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined);
  });
  const selectedCourse = courses.filter(course => course.code == option)[0];
  console.log(selectedCourse);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
      id: "top",
      w: "80%",
      m: "0 auto",
      marginBottom: "10em",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontSize: "2xl",
        fontWeight: "bold",
        mt: "1em",
        children: "Edit Course Outcomes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        mt: "1em",
        w: "70%",
        id: "course",
        placeholder: "Select course",
        variant: "filled",
        onChange: handleSetOption,
        value: option,
        marginBottom: "2em",
        children: renderOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: option ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EditCourseOutcomes_EditOutcomeList__WEBPACK_IMPORTED_MODULE_3__["default"], {
          prop: selectedCourse
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 61
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _fake_data_outcomes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/outcomes.json */ "./fake-data/outcomes.json");
var _fake_data_outcomes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/outcomes.json */ "./fake-data/outcomes.json", 1);


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditCourseOutcomes\\EditOutcomeList.js";





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

  const [outcome, setOutcome, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const {
    0: outcomes,
    1: setOutcomes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(courseOutcomes);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        templateColumns: "repeat(5, 1fr)",
        padding: ".5em",
        justifyContent: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
            colSpan: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
              className: "outcome-list-card",
              background: "#edf2f7",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              padding: "10px",
              width: "82%",
              float: "right",
              children: outc.name
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
            colStart: 5,
            colEnd: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: "ghost",
              onClick: () => {
                alert("This will remove your entry");
              },
              children: "Remove"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
      id: "top",
      w: "100%",
      m: "0 auto",
      marginBottom: "3em",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontWeight: "bold",
        fontSize: "20px",
        display: "inline",
        children: ["Edit Course Outcome List for ", shortName, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "outcome-list-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
          children: renderOutcome
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "outcome-list-input",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: addOutcome,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            mt: "1rem",
            placeholder: "enter a new course outcome",
            variant: "flushed",
            type: "text",
            value: outcome,
            onChange: setOutcome,
            w: "30em"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          variant: "link",
          isActive: "false",
          mt: "1.5em",
          ml: "1em",
          variantColor: "green",
          size: "sm",
          icon: "add",
          onClick: addOutcome
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variantColor: "green",
        variant: "outline",
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, undefined);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditFacultyList\\AddFacultyMember.js";





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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: isEdditing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "Faculty Type"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        onChange: e => {
          //console.log(e.target.value);
          setType(e.target.value); //alert(type);
        },
        value: type,
        w: "50%",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: facultyTypes[0],
          children: "Intructor/Coordinator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: facultyTypes[1],
          children: "Adjunct"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          mr: "1em",
          value: facultyTypes[2],
          children: "Teaching Fellow"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "Last Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        w: "50%",
        value: lastName,
        onChange: setLastName,
        variant: "filled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "First Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        w: "50%",
        value: firstName,
        onChange: setFirstName,
        variant: "filled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        children: "ID"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        w: "50%",
        value: ID,
        onChange: setID,
        variant: "filled"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        v: true,
        ariantColor: "green",
        mt: "1em",
        onClick: addFaculty,
        children: "Add New Faculty"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, undefined)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        w: "100%px",
        h: "10",
        bg: "",
        fontWeight: "bold",
        marginTop: "1em",
        marginBottom: "1em"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Spacer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variantColor: "green",
        display: "inline",
        onClick: toggleEdditing,
        children: "Add Faculty Member"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Spacer"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        w: "100%px",
        h: "10",
        bg: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (AddFacultyMember);

/***/ }),

/***/ "./components/admin-components/EditFacultyList/EditFacultyList.js":
/*!************************************************************************!*\
  !*** ./components/admin-components/EditFacultyList/EditFacultyList.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin-components/FacultyMember */ "./components/admin-components/FacultyMember.js");
/* harmony import */ var _utils_sortByLastName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/sortByLastName */ "./utils/sortByLastName.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _AddFacultyMember__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddFacultyMember */ "./components/admin-components/EditFacultyList/AddFacultyMember.js");

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditFacultyList\\EditFacultyList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const EditFacultyList = () => {
  const {
    0: faculty,
    1: setFaculty
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    fullTime: [],
    adjuncts: [],
    fellows: []
  });
  const {
    0: newFaculty,
    1: setNewFaculty
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getFaculty();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      align: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
        member: fac.firstName + " " + fac.lastName,
        id: fac.id //edit={editFaculty}
        ,
        color: idx % 2 == 0 ? "gray.300" : "gray.100"
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, undefined);
  });
  const renderAdjunct = faculty.adjuncts.map((fac, idx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
        member: fac.firstName + " " + fac.lastName,
        id: fac.id,
        color: idx % 2 == 0 ? "gray.300" : "gray.100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, undefined);
  });
  const renderFellows = faculty.fellows.map((fac, idx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_admin_components_FacultyMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
        member: fac.firstName + " " + fac.lastName,
        id: fac.id,
        color: idx % 2 == 0 ? "gray.300" : "gray.100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "top",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
      id: "top",
      w: "80%",
      m: "0 auto",
      marginBottom: "10em",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontSize: "2xl",
        fontWeight: "bold",
        mt: "1em",
        children: "Edit Faculty List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontWeight: "bold",
        mt: "1em",
        mb: "1em",
        fontSize: "lg",
        align: "center",
        children: "Instructors/Coordinators"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        marginLeft: "5em",
        justifyContent: "center",
        alignItems: "center",
        w: "80%",
        children: renderFaculty
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontWeight: "bold",
        mt: "1em",
        mb: "1em",
        fontSize: "lg",
        align: "center",
        children: "Adjunct Faculty"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        marginLeft: "5em",
        justifyContent: "center",
        alignItems: "center",
        w: "80%",
        children: renderAdjunct
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontWeight: "bold",
        mt: "1em",
        mb: "1em",
        fontSize: "lg",
        align: "center",
        children: "Teaching Fellows"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        marginLeft: "5em",
        justifyContent: "center",
        alignItems: "center",
        w: "80%",
        children: renderFellows
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AddFacultyMember__WEBPACK_IMPORTED_MODULE_7__["default"], {
        setNewFaculty: setNewFaculty
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 173,
    columnNumber: 5
  }, undefined);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditFacultyList\\EditFacultyMember.js";



const EditFacultyMember = ({
  edit,
  id
}) => {
  const [newName, setNewName] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_2__["default"])("");

  const editName = () => {
    edit(newName, id);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: e => {
      e.preventDefault();
      edit();
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      value: newName,
      onChange: setNewName,
      placeholder: "name",
      onSubmit: e => {
        e.preventDefault();
        editName(newName, id);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditFacultyMember);

/***/ }),

/***/ "./components/admin-components/EditProgramList/EditProgramList.js":
/*!************************************************************************!*\
  !*** ./components/admin-components/EditProgramList/EditProgramList.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useInputState */ \"./hooks/useInputState.js\");\n/* harmony import */ var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/programs.json */ \"./fake-data/programs.json\");\nvar _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/programs.json */ \"./fake-data/programs.json\", 1);\n/* harmony import */ var _Programs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Programs */ \"./components/admin-components/Programs.js\");\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/admin-components/EditProgramList/EditProgramList.js\";\n\n\n\n\n\n\nconst EditProgramList = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    document.getElementById(\"top\").scrollIntoView();\n  });\n\n  const handleSubmit = event => {\n    event.preventDefault();\n\n    if (window.confirm(\"Are you sure you would like to submit these changes?\")) {\n      //POST the program list change to the db here\n      alert(\"Program List Updated!\");\n    }\n  };\n\n  const programList = _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4__.programs;\n  var csePrograms = [];\n\n  for (var i = 0; i < programList.length; i++) {\n    var obj = {};\n    obj[\"name\"] = programList[i];\n    obj[\"id\"] = i;\n    csePrograms.push(obj);\n  }\n\n  const [program, setProgram, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\");\n  const {\n    0: programs,\n    1: setPrograms\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(csePrograms);\n\n  const addProgram = event => {\n    event.preventDefault();\n    setPrograms([...programs, {\n      id: programs.length,\n      name: program\n    }]);\n    reset();\n  };\n\n  const removeProgram = id => {\n    event.preventDefault();\n    setPrograms(programs.filter(prog => prog.id !== id));\n  };\n\n  const renderProgram = csePrograms.map((prog, idx) => {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n      align: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Programs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        program: prog.name.name,\n        color: idx % 2 == 0 ? \"gray.300\" : \"gray.100\"\n      }, idx, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, undefined);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"top\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n      id: \"top\",\n      w: \"80%\",\n      m: \"0 auto\",\n      marginBottom: \"5em\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        fontSize: \"2xl\",\n        fontWeight: \"bold\",\n        mt: \"1em\",\n        children: \"Edit Program List\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        fontWeight: \"bold\",\n        mt: \"1em\",\n        mb: \"1em\",\n        fontSize: \"lg\",\n        children: \"Programs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n        w: \"90%\",\n        children: renderProgram\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: addProgram,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n          mt: \"1rem\",\n          placeholder: \"enter a new program\",\n          variant: \"flushed\",\n          type: \"text\",\n          value: program,\n          onChange: setProgram,\n          w: \"14em\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n        variant: \"link\",\n        isActive: \"false\",\n        mt: \"1.5em\",\n        ml: \"1em\",\n        variantColor: \"green\",\n        size: \"sm\",\n        icon: \"add\",\n        onClick: addProgram\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        variantColor: \"green\",\n        variant: \"outline\",\n        onClick: handleSubmit,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProgramList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdFByb2dyYW1MaXN0L0VkaXRQcm9ncmFtTGlzdC5qcz9jZDU2Il0sIm5hbWVzIjpbIkVkaXRQcm9ncmFtTGlzdCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJjb25maXJtIiwiYWxlcnQiLCJwcm9ncmFtTGlzdCIsImZha2VEYXRhIiwicHJvZ3JhbXMiLCJjc2VQcm9ncmFtcyIsImkiLCJsZW5ndGgiLCJvYmoiLCJwdXNoIiwicHJvZ3JhbSIsInNldFByb2dyYW0iLCJyZXNldCIsInVzZUlucHV0U3RhdGUiLCJzZXRQcm9ncmFtcyIsInVzZVN0YXRlIiwiYWRkUHJvZ3JhbSIsImlkIiwibmFtZSIsInJlbW92ZVByb2dyYW0iLCJmaWx0ZXIiLCJwcm9nIiwicmVuZGVyUHJvZ3JhbSIsIm1hcCIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLE1BQU07QUFDNUJDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLGNBQS9CO0FBQ0QsR0FGUSxDQUFUOztBQUlBLFFBQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzlCQSxTQUFLLENBQUNDLGNBQU47O0FBQ0EsUUFDRUMsTUFBTSxDQUFDQyxPQUFQLENBQWUsc0RBQWYsQ0FERixFQUVFO0FBQ0E7QUFDQUMsV0FBSyxDQUFDLHVCQUFELENBQUw7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsUUFBTUMsV0FBVyxHQUFHQyxxREFBUSxDQUFDQyxRQUE3QjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FB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RSxlQUFPLEVBQUMsTUFEVjtBQUVFLGdCQUFRLEVBQUMsT0FGWDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsVUFBRSxFQUFDLEtBSkw7QUFLRSxvQkFBWSxFQUFDLE9BTGY7QUFNRSxZQUFJLEVBQUMsSUFOUDtBQU9FLFlBQUksRUFBQyxLQVBQO0FBUUUsZUFBTyxFQUFFSztBQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGLGVBOEJFLHFFQUFDLHVEQUFEO0FBQVEsb0JBQVksRUFBQyxPQUFyQjtBQUE2QixlQUFPLEVBQUMsU0FBckM7QUFBK0MsZUFBTyxFQUFFcEIsWUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNDRCxDQWpHRDs7QUFrR2VMLDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRQcm9ncmFtTGlzdC9FZGl0UHJvZ3JhbUxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBTZWxlY3QsXG4gIEJ1dHRvbixcbiAgSWNvbkJ1dHRvbixcbiAgTGlzdCxcbiAgSW5wdXQsXG4gIFRleHQsXG4gIExpc3RJdGVtLFxuICBWU3RhY2ssXG4gIEdyaWQsXG4gIEdyaWRJdGVtLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHVzZUlucHV0U3RhdGUgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUlucHV0U3RhdGVcIjtcbmltcG9ydCBmYWtlRGF0YSBmcm9tIFwiLi4vLi4vLi4vZmFrZS1kYXRhL3Byb2dyYW1zLmpzb25cIjtcbmltcG9ydCBQcm9ncmFtcyBmcm9tIFwiLi4vUHJvZ3JhbXNcIjtcblxuY29uc3QgRWRpdFByb2dyYW1MaXN0ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wXCIpLnNjcm9sbEludG9WaWV3KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKFxuICAgICAgd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gc3VibWl0IHRoZXNlIGNoYW5nZXM/XCIpXG4gICAgKSB7XG4gICAgICAvL1BPU1QgdGhlIHByb2dyYW0gbGlzdCBjaGFuZ2UgdG8gdGhlIGRiIGhlcmVcbiAgICAgIGFsZXJ0KFwiUHJvZ3JhbSBMaXN0IFVwZGF0ZWQhXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcm9ncmFtTGlzdCA9IGZha2VEYXRhLnByb2dyYW1zO1xuICB2YXIgY3NlUHJvZ3JhbXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9ncmFtTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBvYmogPSB7fTtcblxuICAgIG9ialtcIm5hbWVcIl0gPSBwcm9ncmFtTGlzdFtpXTtcbiAgICBvYmpbXCJpZFwiXSA9IGk7XG4gICAgY3NlUHJvZ3JhbXMucHVzaChvYmopO1xuICB9XG5cbiAgY29uc3QgW3Byb2dyYW0sIHNldFByb2dyYW0sIHJlc2V0XSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9ncmFtcywgc2V0UHJvZ3JhbXNdID0gdXNlU3RhdGUoY3NlUHJvZ3JhbXMpO1xuXG4gIGNvbnN0IGFkZFByb2dyYW0gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFByb2dyYW1zKFtcbiAgICAgIC4uLnByb2dyYW1zLFxuICAgICAge1xuICAgICAgICBpZDogcHJvZ3JhbXMubGVuZ3RoLFxuICAgICAgICBuYW1lOiBwcm9ncmFtLFxuICAgICAgfSxcbiAgICBdKTtcbiAgICByZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2dyYW0gPSAoaWQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFByb2dyYW1zKHByb2dyYW1zLmZpbHRlcigocHJvZykgPT4gcHJvZy5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQcm9ncmFtID0gY3NlUHJvZ3JhbXMubWFwKChwcm9nLCBpZHgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxQcm9ncmFtcyAgICAgIFxuICAgICAgICAgIHByb2dyYW09e3Byb2cubmFtZS5uYW1lfVxuICAgICAgICAgIGNvbG9yPXtpZHggJTIgPT0gMCA/IFwiZ3JheS4zMDBcIiA6IFwiZ3JheS4xMDBcIn1cbiAgICAgICAgICBrZXk9e2lkeH0+XG4gICAgXG4gICAgICAgIDwvUHJvZ3JhbXM+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAgXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwidG9wXCI+XG4gICAgICA8VlN0YWNrIGlkPVwidG9wXCIgdz1cIjgwJVwiIG09XCIwIGF1dG9cIiBtYXJnaW5Cb3R0b209XCI1ZW1cIj5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiIG10PVwiMWVtXCI+XG4gICAgICAgICAgRWRpdCBQcm9ncmFtIExpc3RcbiAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgbXQ9XCIxZW1cIiBtYj1cIjFlbVwiIGZvbnRTaXplPVwibGdcIj5cbiAgICAgICAgICBQcm9ncmFtc1xuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxMaXN0IHc9XCI5MCVcIj57cmVuZGVyUHJvZ3JhbX08L0xpc3Q+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXthZGRQcm9ncmFtfT5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG10PVwiMXJlbVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbmV3IHByb2dyYW1cIlxuICAgICAgICAgICAgdmFyaWFudD1cImZsdXNoZWRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb2dyYW19XG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0UHJvZ3JhbX1cbiAgICAgICAgICAgIHc9XCIxNGVtXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgIGlzQWN0aXZlPVwiZmFsc2VcIlxuICAgICAgICAgIG10PVwiMS41ZW1cIlxuICAgICAgICAgIG1sPVwiMWVtXCJcbiAgICAgICAgICB2YXJpYW50Q29sb3I9XCJncmVlblwiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBpY29uPVwiYWRkXCJcbiAgICAgICAgICBvbkNsaWNrPXthZGRQcm9ncmFtfVxuICAgICAgICA+PC9JY29uQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEVkaXRQcm9ncmFtTGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/admin-components/EditProgramList/EditProgramList.js\n");
=======
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useInputState */ "./hooks/useInputState.js");
/* harmony import */ var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/programs.json */ "./fake-data/programs.json");
var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/programs.json */ "./fake-data/programs.json", 1);
/* harmony import */ var _Programs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Programs */ "./components/admin-components/Programs.js");

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\EditProgramList\\EditProgramList.js";






const EditProgramList = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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

  const [program, setProgram, reset] = Object(_hooks_useInputState__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const {
    0: programs,
    1: setPrograms
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(csePrograms);

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

  const renderProgram = csePrograms.map((prog, idx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      align: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Programs__WEBPACK_IMPORTED_MODULE_5__["default"], {
        program: prog.name.name,
        color: idx % 2 == 0 ? "gray.300" : "gray.100"
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "top",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
      id: "top",
      w: "80%",
      m: "0 auto",
      marginBottom: "5em",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontSize: "2xl",
        fontWeight: "bold",
        mt: "1em",
        children: "Edit Program List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontWeight: "bold",
        mt: "1em",
        mb: "1em",
        fontSize: "lg",
        children: "Programs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        w: "90%",
        children: renderProgram
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: addProgram,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          mt: "1rem",
          placeholder: "enter a new program",
          variant: "flushed",
          type: "text",
          value: program,
          onChange: setProgram,
          w: "14em"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
        variant: "link",
        isActive: "false",
        mt: "1.5em",
        ml: "1em",
        variantColor: "green",
        size: "sm",
        icon: "add",
        onClick: addProgram
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variantColor: "green",
        variant: "outline",
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditProgramList);
>>>>>>> Stashed changes

/***/ }),

/***/ "./components/admin-components/FacultyMember.js":
/*!******************************************************!*\
  !*** ./components/admin-components/FacultyMember.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _admin_components_EditFacultyList_EditFacultyMember__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-components/EditFacultyList/EditFacultyMember */ "./components/admin-components/EditFacultyList/EditFacultyMember.js");


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\FacultyMember.js";




const FacultyMember = ({
  member,
  id,
  color,
  edit
}) => {
  const [isEditing, toggle] = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    templateColumns: "repeat(2, 1fr)",
    bg: color,
    padding: ".5em",
    alignItems: "center",
    children: isEditing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_admin_components_EditFacultyList_EditFacultyMember__WEBPACK_IMPORTED_MODULE_3__["default"], {
      edit: edit,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
        rowSpan: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          children: member
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          variant: "ghost",
          onClick: () => {
            toggle();
          },
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FacultyMember);

/***/ }),

/***/ "./components/admin-components/GenerateSectionReport/CourseList.js":
/*!*************************************************************************!*\
  !*** ./components/admin-components/GenerateSectionReport/CourseList.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\GenerateSectionReport\\CourseList.js";
//import CourseCard from "../../instructor-components/CourseCard";


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

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        w: "100%",
        justifyContent: "center",
        background: "#edf2f7",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["VStack"], {
          id: "top",
          w: "100%",
          m: "0 auto",
          marginBottom: "5em",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
            textAlign: "center",
            verticalAlign: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontSize: "20px",
              fontWeight: "bold",
              children: course.department
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontSize: "20px",
              fontWeight: "bold",
              color: "#38A169",
              children: [course.courseNumber, ". ", course.sectionNumber]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontSize: "20px",
              fontWeight: "bold",
              children: course.displayName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              marginBottom: "3em"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            size: "sm",
            mt: "1em",
            w: "50%",
            textAlign: "center",
            bgColor: "#d5d9de",
            onClick: e => {
              e.preventDefault();
              handleClick(course.courseNumber, course.sectionNumber);
              window.open("http://localhost:3000/sectionReport"); //window.location.href = 'http://localhost:3000/formCompletion';
            },
            children: "View ABET Report"
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, undefined)
    }, void 0, false);
  }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    children: "courses not found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 7
  }, undefined);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "forms-grid",
    children: renderCourses
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CourseList);

/***/ }),

/***/ "./components/admin-components/GenerateSectionReport/GenerateSectionReport.js":
/*!************************************************************************************!*\
  !*** ./components/admin-components/GenerateSectionReport/GenerateSectionReport.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _CourseList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CourseList */ "./components/admin-components/GenerateSectionReport/CourseList.js");


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\GenerateSectionReport\\GenerateSectionReport.js";





const GenerateSectionReport = ({
  user
}) => {
  const {
    0: term,
    1: setTerm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    semester: "",
    year: null
  });
  const {
    0: courses,
    1: setCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const terms = [{
    semester: "Spring",
    year: 2020
  }, {
    semester: "Summer",
    year: 2020
  }, {
    semester: "Fall",
    year: 2020
  }];

  const handleSetTerm = async e => {
    setTerm({
      semester: e.target.value.split(" ")[0],
      year: e.target.value.split(" ")[1]
    });
    console.log(e.target.value.split(" ")[1]);
    console.log(term.year);
    const coursesRes = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_3__["getAllCourses"])(user, "fall", 2020);
    console.log(coursesRes);
    setCourses(coursesRes);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
    id: "top",
    w: "80%",
    m: "0 auto",
    marginBottom: "5em",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontSize: "2xl",
      fontWeight: "bold",
      mt: "1em",
      marginBottom: "2em",
      children: "Find Section ABET Report"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), term.year == null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      mt: "1em",
      w: "80%",
      id: "semester",
      placeholder: "Choose Semester",
      variant: "filled",
      onChange: handleSetTerm,
      value: term,
      marginBottom: "1em",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: terms[0].semester + " " + terms[0].year.toString(10),
        children: [terms[0].semester, " ", terms[0].year]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: terms[1].semester + " " + terms[1].year.toString(10),
        children: [terms[1].semester, " ", terms[1].year]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: terms[2].semester + " " + terms[2].year.toString(10),
        children: [terms[2].semester, " ", terms[2].year]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontSize: "20px",
        fontWeight: "bold",
        mt: "1em",
        marginBottom: "2em",
        children: [term.semester, " ", term.year]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CourseList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        courses: courses
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (GenerateSectionReport);

/***/ }),

/***/ "./components/admin-components/GenerateStudentSurveys.js":
/*!***************************************************************!*\
  !*** ./components/admin-components/GenerateStudentSurveys.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\GenerateStudentSurveys.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const GenerateStudentSurveys = () => {
  const {
    0: courseList,
    1: setCourses
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    courses: []
  });
  const [isOn, toggleOn] = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_4__["default"])();

  const getNewCourses = async () => {
    const newCourseList = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_3__["getCoursesByDepartment"])("CSCE");
    setCourses(_objectSpread(_objectSpread({}, courseList), {}, {
      courses: newCourseList
    }));
    console.log(courseList.courses);
  };

  const setButtonHandler = () => {
    setButtonName("Sort by Course Number");
  };

  const surveyCourses = [].concat(courseList.courses).sort((a, b) => a.courseNumber > b.courseNumber ? 1 : -1).map((course, idx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tr"], {
        bg: idx % 2 == 0 ? "gray.300" : "gray.100",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Td"], {
          children: [course.department, " ", course.courseNumber, ",", course.displayName, ", Intsructor: ", course.coordinator.firstName, " ", course.coordinator.lastName, ", Survey Link:", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            color: "teal",
            href: "https://www.unt.edu/",
            children: "Student Survey Link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined)]
      }, idx, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)
    }, void 0, false);
  });
  const surveyCoursesByInstuctor = [].concat(courseList.courses).sort((a, b) => a.lastName > b.lastName ? 1 : -1).map((course, idx) => {
    console.log(course);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tr"], {
        bg: idx % 2 == 0 ? "gray.300" : "gray.100",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Td"], {
          children: [course.department, " ", course.courseNumber, ",", course.displayName, ", Intsructor: ", course.coordinator.firstName, " ", course.coordinator.lastName, ", Survey Link:", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            color: "teal",
            href: "https://www.unt.edu/",
            children: "Student Survey Link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, undefined)]
      }, idx, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, undefined)
    }, void 0, false);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getNewCourses();
  }, []);
  const show = isOn;

  if (show) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        borderWidth: "2px",
        rounded: "lg",
        alignItems: "center",
        m: "1em",
        p: "3em",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], {
          variant: "striped",
          colorScheme: "green",
          padding: "1em",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["TableCaption"], {
            placement: "top",
            fontWeight: "bold",
            fontSize: "xl",
            children: "GenerateStudentSurveys"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            onClick: toggleOn,
            mb: "1em",
            children: "Sort by Course Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tbody"], {
            children: surveyCoursesByInstuctor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined);
  }

  if (!show) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        borderWidth: "2px",
        rounded: "lg",
        alignItems: "center",
        m: "1em",
        p: "3em",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], {
          variant: "striped",
          colorScheme: "green",
          padding: "1em",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["TableCaption"], {
            placement: "top",
            fontWeight: "bold",
            fontSize: "xl",
            children: "GenerateStudentSurveys"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 9
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            onClick: toggleOn,
            mb: "1em",
            children: "Sort by Course Number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tbody"], {
            children: surveyCourses
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GenerateStudentSurveys);

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/CheckboxGroup.js":
/*!*********************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/CheckboxGroup.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\OutcomeMapping\\CheckboxGroup.js";



const CheckBoxGroup = ({
  studentMap
}) => {
  const {
    0: checkArray,
    1: setCheckArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(studentMap);

  const HandleCheck = idx => {
    var temp = checkArray;
    temp[idx] = temp[idx] === 0 ? 1 : 0;
    setCheckArray(temp);
    console.log(checkArray);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["HStack"], {
    w: "90%",
    spacing: 8,
    justify: "center",
    children: studentMap.map((value, idx) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
        value: value,
        onChange: e => {
          e.preventDefault();
          HandleCheck(idx);
        },
        children: idx + 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CheckBoxGroup);

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/CourseOutcomeTable.js":
/*!**************************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/CourseOutcomeTable.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckboxGroup */ \"./components/admin-components/OutcomeMapping/CheckboxGroup.js\");\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/admin-components/OutcomeMapping/CourseOutcomeTable.js\";\n\n\n\n\nconst CourseOutcomeTable = ({\n  course,\n  handleCheck\n}) => {\n  const {\n    0: outcomes,\n    1: setOutcomes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(course.outcomes);\n  const {\n    0: checkArray,\n    1: setCheckArray\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(course);\n\n  function handleCourseUpdate(courseIdx, studentIdx) {\n    var temp = outcomes;\n    const checkValue = temp[courseIdx].studentMap[studentIdx];\n    temp[courseIdx].studentMap[studentIdx] = checkValue === 0 ? 1 : 0;\n    setOutcomes(temp);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    m: \"0 auto\",\n    w: \"80rem\",\n    padding: \"2em\",\n    bg: \"#edf2f7\",\n    mt: \"2em\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n      textAlign: \"left\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        fontWeight: \"bold\",\n        children: course.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        color: \"#38A169\",\n        fontWeight: \"bold\",\n        children: course.code\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n      padding: \"1em\",\n      w: \"90%\",\n      bg: \"white\",\n      borderRadius: \"8px\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tbody\"], {\n        children: course.outcomes.map((outcome, courseIdx) => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Tr\"], {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Td\"], {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                children: [courseIdx + 1, \". \", outcome.outcome]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 23\n              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 23\n              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Center\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n                  mt: \"1em\",\n                  children: \"Maps to: \"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 25\n                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"HStack\"], {\n                  w: \"90%\",\n                  spacing: 8,\n                  justify: \"center\",\n                  children: outcome.studentMap.map((value, studentIdx) => {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Checkbox\"], {\n                      value: value,\n                      onChange: e => {\n                        e.preventDefault();\n                        handleCheck(course, studentIdx, courseIdx);\n                      },\n                      children: studentIdx + 1\n                    }, studentIdx, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 48,\n                      columnNumber: 31\n                    }, undefined);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 25\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 23\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 21\n            }, undefined)\n          }, courseIdx, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 19\n          }, undefined);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      size: \"sm\",\n      colorScheme: \"teal\",\n      mt: \"1em\",\n      children: \"Update Course Mapping\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseOutcomeTable);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvT3V0Y29tZU1hcHBpbmcvQ291cnNlT3V0Y29tZVRhYmxlLmpzP2I3YjUiXSwibmFtZXMiOlsiQ291cnNlT3V0Y29tZVRhYmxlIiwiY291cnNlIiwiaGFuZGxlQ2hlY2siLCJvdXRjb21lcyIsInNldE91dGNvbWVzIiwidXNlU3RhdGUiLCJjaGVja0FycmF5Iiwic2V0Q2hlY2tBcnJheSIsImhhbmRsZUNvdXJzZVVwZGF0ZSIsImNvdXJzZUlkeCIsInN0dWRlbnRJZHgiLCJ0ZW1wIiwiY2hlY2tWYWx1ZSIsInN0dWRlbnRNYXAiLCJuYW1lIiwiY29kZSIsIm1hcCIsIm91dGNvbWUiLCJ2YWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFZQTs7QUFFQSxNQUFNQSxrQkFBa0IsR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUM7QUFBVixDQUFELEtBQTZCO0FBQ3RELFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQ0osTUFBTSxDQUFDRSxRQUFSLENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRixzREFBUSxDQUFDSixNQUFELENBQTVDOztBQUVBLFdBQVNPLGtCQUFULENBQTZCQyxTQUE3QixFQUF3Q0MsVUFBeEMsRUFBb0Q7QUFDbEQsUUFBSUMsSUFBSSxHQUFHUixRQUFYO0FBQ0EsVUFBTVMsVUFBVSxHQUFHRCxJQUFJLENBQUNGLFNBQUQsQ0FBSixDQUFnQkksVUFBaEIsQ0FBMkJILFVBQTNCLENBQW5CO0FBQ0FDLFFBQUksQ0FBQ0YsU0FBRCxDQUFKLENBQWdCSSxVQUFoQixDQUEyQkgsVUFBM0IsSUFBMENFLFVBQVUsS0FBSyxDQUFoQixHQUFxQixDQUFyQixHQUF5QixDQUFsRTtBQUNBUixlQUFXLENBQUNPLElBQUQsQ0FBWDtBQUNEOztBQUVELHNCQUNJLHFFQUFDLG9EQUFEO0FBQU0sS0FBQyxFQUFDLFFBQVI7QUFBaUIsS0FBQyxFQUFDLE9BQW5CO0FBQTJCLFdBQU8sRUFBQyxLQUFuQztBQUF5QyxNQUFFLEVBQUMsU0FBNUM7QUFBc0QsTUFBRSxFQUFDLEtBQXpEO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBUSxlQUFTLEVBQUMsTUFBbEI7QUFBQSw4QkFDRSxxRUFBQyxxREFBRDtBQUFNLGtCQUFVLEVBQUMsTUFBakI7QUFBQSxrQkFBeUJWLE1BQU0sQ0FBQ2E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLHFEQUFEO0FBQU0sYUFBSyxFQUFDLFNBQVo7QUFBc0Isa0JBQVUsRUFBQyxNQUFqQztBQUFBLGtCQUF5Q2IsTUFBTSxDQUFDYztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLHFFQUFDLHNEQUFEO0FBQVEsYUFBTyxFQUFDLEtBQWhCO0FBQXNCLE9BQUMsRUFBQyxLQUF4QjtBQUE4QixRQUFFLEVBQUMsT0FBakM7QUFBeUMsa0JBQVksRUFBQyxLQUF0RDtBQUFBLDZCQUNFLHFFQUFDLHNEQUFEO0FBQUEsa0JBRUdkLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQmEsR0FBaEIsQ0FBb0IsQ0FBQ0MsT0FBRCxFQUFVUixTQUFWLEtBQXdCO0FBQ3pDLDhCQUNFLHFFQUFDLG1EQUFEO0FBQUEsbUNBQ0UscUVBQUMsbURBQUQ7QUFBQSxzQ0FDRSxxRUFBQyxxREFBRDtBQUFBLDJCQUFPQSxTQUFTLEdBQUMsQ0FBakIsUUFBc0JRLE9BQU8sQ0FBQ0EsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixlQUdFLHFFQUFDLHVEQUFEO0FBQUEsd0NBQ0UscUVBQUMscURBQUQ7QUFBTSxvQkFBRSxFQUFDLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFHRSxxRUFBQyx1REFBRDtBQUFRLG1CQUFDLEVBQUMsS0FBVjtBQUFnQix5QkFBTyxFQUFFLENBQXpCO0FBQTRCLHlCQUFPLEVBQUMsUUFBcEM7QUFBQSw0QkFDR0EsT0FBTyxDQUFDSixVQUFSLENBQW1CRyxHQUFuQixDQUF1QixDQUFDRSxLQUFELEVBQVFSLFVBQVIsS0FBdUI7QUFDN0Msd0NBQ0UscUVBQUMseURBQUQ7QUFDRSwyQkFBSyxFQUFFUSxLQURUO0FBR0UsOEJBQVEsRUFBRUMsQ0FBQyxJQUFJO0FBQ1hBLHlCQUFDLENBQUNDLGNBQUY7QUFDQWxCLG1DQUFXLENBQUNELE1BQUQsRUFBU1MsVUFBVCxFQUFxQkQsU0FBckIsQ0FBWDtBQUNELHVCQU5MO0FBQUEsZ0NBU0dDLFVBQVUsR0FBRztBQVRoQix1QkFFT0EsVUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGO0FBYUQsbUJBZEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFTRCxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUE2QkgsU0E5QkE7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQXlDRSxxRUFBQyx1REFBRDtBQUFRLFVBQUksRUFBQyxJQUFiO0FBQWtCLGlCQUFXLEVBQUMsTUFBOUI7QUFBcUMsUUFBRSxFQUFDLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTZDRCxDQXhERDs7QUF5RGVULGlGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL091dGNvbWVNYXBwaW5nL0NvdXJzZU91dGNvbWVUYWJsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgVGV4dCxcbiAgSFN0YWNrLFxuICBUYWJsZSxcbiAgVGJvZHksXG4gIFRyLFxuICBUZCxcbiAgQ2VudGVyLFxuICBDaGVja2JveFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IENoZWNrQm94R3JvdXAgZnJvbSBcIi4vQ2hlY2tib3hHcm91cFwiO1xuXG5jb25zdCBDb3Vyc2VPdXRjb21lVGFibGUgPSAoeyBjb3Vyc2UsIGhhbmRsZUNoZWNrIH0pID0+IHtcbiAgY29uc3QgW291dGNvbWVzLCBzZXRPdXRjb21lc10gPSB1c2VTdGF0ZShjb3Vyc2Uub3V0Y29tZXMpO1xuICBjb25zdCBbY2hlY2tBcnJheSwgc2V0Q2hlY2tBcnJheV0gPSB1c2VTdGF0ZShjb3Vyc2UpO1xuICBcbiAgZnVuY3Rpb24gaGFuZGxlQ291cnNlVXBkYXRlKCBjb3Vyc2VJZHgsIHN0dWRlbnRJZHggKXtcbiAgICB2YXIgdGVtcCA9IG91dGNvbWVzO1xuICAgIGNvbnN0IGNoZWNrVmFsdWUgPSB0ZW1wW2NvdXJzZUlkeF0uc3R1ZGVudE1hcFtzdHVkZW50SWR4XTtcbiAgICB0ZW1wW2NvdXJzZUlkeF0uc3R1ZGVudE1hcFtzdHVkZW50SWR4XSA9IChjaGVja1ZhbHVlID09PSAwKSA/IDEgOiAwO1xuICAgIHNldE91dGNvbWVzKHRlbXApO1xuICB9XG5cbiAgcmV0dXJuKCBcbiAgICAgIDxCb3ggIG09XCIwIGF1dG9cIiB3PVwiODByZW1cIiBwYWRkaW5nPVwiMmVtXCIgYmc9XCIjZWRmMmY3XCIgbXQ9XCIyZW1cIj5cbiAgICAgICAgPEhTdGFjayB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj57Y291cnNlLm5hbWV9PC9UZXh0PlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwiIzM4QTE2OVwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+e2NvdXJzZS5jb2RlfTwvVGV4dD5cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgIDxUYWJsZSAgcGFkZGluZz1cIjFlbVwiIHc9XCI5MCVcIiBiZz1cIndoaXRlXCIgYm9yZGVyUmFkaXVzPVwiOHB4XCI+XG4gICAgICAgICAgPFRib2R5PlxuICAgICAgICAgICAgey8qIHtyb3dzfSAqL31cbiAgICAgICAgICAgIHtjb3Vyc2Uub3V0Y29tZXMubWFwKChvdXRjb21lLCBjb3Vyc2VJZHgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFRyIGtleT17Y291cnNlSWR4fT5cbiAgICAgICAgICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Pntjb3Vyc2VJZHgrMX0uIHtvdXRjb21lLm91dGNvbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG10PVwiMWVtXCI+TWFwcyB0bzogPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDaGVja0JveEdyb3VwIHN0dWRlbnRNYXA9e291dGNvbWUuc3R1ZGVudE1hcH0ga2V5PXtjb3Vyc2VJZHh9Lz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8SFN0YWNrIHc9XCI5MCVcIiBzcGFjaW5nPXs4fSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtvdXRjb21lLnN0dWRlbnRNYXAubWFwKCh2YWx1ZSwgc3R1ZGVudElkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N0dWRlbnRJZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrKGNvdXJzZSwgc3R1ZGVudElkeCwgY291cnNlSWR4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3R1ZGVudElkeCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBjb2xvclNjaGVtZT1cInRlYWxcIiBtdD1cIjFlbVwiPlVwZGF0ZSBDb3Vyc2UgTWFwcGluZzwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VPdXRjb21lVGFibGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/admin-components/OutcomeMapping/CourseOutcomeTable.js\n");
=======
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CheckboxGroup */ "./components/admin-components/OutcomeMapping/CheckboxGroup.js");

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\OutcomeMapping\\CourseOutcomeTable.js";




const CourseOutcomeTable = ({
  course,
  handleCheck
}) => {
  const {
    0: outcomes,
    1: setOutcomes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(course.outcomes);
  const {
    0: checkArray,
    1: setCheckArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(course);

  function handleCourseUpdate(courseIdx, studentIdx) {
    var temp = outcomes;
    const checkValue = temp[courseIdx].studentMap[studentIdx];
    temp[courseIdx].studentMap[studentIdx] = checkValue === 0 ? 1 : 0;
    setOutcomes(temp);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    m: "0 auto",
    w: "80rem",
    padding: "2em",
    bg: "#edf2f7",
    mt: "2em",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["HStack"], {
      textAlign: "left",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontWeight: "bold",
        children: course.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "#38A169",
        fontWeight: "bold",
        children: course.code
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      padding: "1em",
      w: "90%",
      bg: "white",
      borderRadius: "8px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tbody"], {
        children: course.outcomes.map((outcome, courseIdx) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tr"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Td"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                children: [courseIdx + 1, ". ", outcome.outcome]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Center"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                  mt: "1em",
                  children: "Maps to: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["HStack"], {
                  w: "90%",
                  spacing: 8,
                  justify: "center",
                  children: outcome.studentMap.map((value, studentIdx) => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
                      value: value,
                      onChange: e => {
                        e.preventDefault();
                        handleCheck(course, studentIdx, courseIdx);
                      },
                      children: studentIdx + 1
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 31
                    }, undefined);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 25
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 23
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 21
            }, undefined)
          }, courseIdx, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 19
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      size: "sm",
      colorScheme: "teal",
      mt: "1em",
      children: "Update Course Mapping"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CourseOutcomeTable);
>>>>>>> Stashed changes

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/OutcomeMapping.js":
/*!**********************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/OutcomeMapping.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _StudentOutcomeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StudentOutcomeList */ \"./components/admin-components/OutcomeMapping/StudentOutcomeList.js\");\n/* harmony import */ var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../fake-data/programs.json */ \"./fake-data/programs.json\");\nvar _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/programs.json */ \"./fake-data/programs.json\", 1);\n/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../fake-data/course.json */ \"./fake-data/course.json\");\nvar _fake_data_course_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ \"./fake-data/course.json\", 1);\n/* harmony import */ var _recoilStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recoilStore */ \"./components/admin-components/OutcomeMapping/recoilStore.js\");\n/* harmony import */ var _CourseOutcomeTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CourseOutcomeTable */ \"./components/admin-components/OutcomeMapping/CourseOutcomeTable.js\");\n/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/APIHelper */ \"./api/APIHelper.js\");\n/* harmony import */ var _TableGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableGroup */ \"./components/admin-components/OutcomeMapping/TableGroup.js\");\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/admin-components/OutcomeMapping/OutcomeMapping.js\";\n\n\n\n\n\n\n\n\n\n\n\nconst OutcomeMapping = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(() => {\n  const programs = _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_5__.programs;\n  const {\n    0: selectedProgram,\n    1: setSelectedProgram\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: studentOutcomes,\n    1: setStudentOutcomes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: outcomeMapping,\n    1: setOutcomeMapping\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(); //const [courses, setCourses] = useRecoilState(coursesAtom);\n\n  const getCourses = async () => {\n    const courses = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_9__[\"getAllCourses\"])(\"MT2020\", \"fall\", 2020); // console.log(course);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    document.getElementById(\"top\").scrollIntoView();\n    setStudentOutcomes(programs); //getCourses();\n  }, []); // useEffect(() => {\n  //   if (selectedProgram != null ){\n  //     const numOfStudentOutcomes = selectedProgram.outcomes.length;\n  //     const courseOutcomesArray = courseData.courses.map((course) => {\n  //       return {\n  //         name :course.name, \n  //         code: course.code,\n  //         outcomes: \n  //           course['course-outcomes'].map((outcome) => {\n  //             return {\n  //               outcome: outcome,\n  //               studentMap: new Array(numOfStudentOutcomes).fill(0)\n  //             }\n  //           })\n  //       }\n  //     });\n  //     setOutcomeMapping(courseOutcomesArray);\n  //     setCourses(outcomeMapping);\n  //   }\n  // }, [selectedProgram]);\n  // useEffect(() => {\n  //  // console.log(outcomeMapping);\n  // }, [outcomeMapping]);\n\n  const handleSetOption = e => {\n    const selection = programs.filter(program => program.name == e.target.value)[0];\n    setSelectedProgram(selection);\n    const numOfStudentOutcomes = selection.outcomes.length;\n    const courseOutcomesArray = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_6__.courses.map((course, idx) => {\n      return {\n        name: course.name,\n        code: course.code,\n        index: idx,\n        outcomes: course['course-outcomes'].map(outcome => {\n          return {\n            outcome: outcome,\n            studentMap: new Array(numOfStudentOutcomes).fill(0)\n          };\n        })\n      };\n    });\n    setOutcomeMapping(courseOutcomesArray);\n  };\n\n  const handleCheck = (course, studentIdx, courseIdx) => {\n    //console.log(course);\n    //console.log(course.outcomes[0].studentMap);\n    let temp = [...outcomeMapping];\n    const currentCheckValue = temp[course.index].outcomes[courseIdx].studentMap[studentIdx];\n    temp[course.index].outcomes[courseIdx].studentMap[studentIdx] = currentCheckValue === 0 ? 1 : 0;\n    console.log(temp[course.index]); // setOutcomeMapping({\n    // })\n  };\n\n  const renderOptions = studentOutcomes && studentOutcomes.map((program, idx) => {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n      value: program.name,\n      children: program.name\n    }, idx, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 12\n    }, undefined);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(recoil__WEBPACK_IMPORTED_MODULE_3__[\"RecoilRoot\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"VStack\"], {\n      id: \"top\",\n      w: \"80%\",\n      m: \"0 auto\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n        fontSize: \"2xl\",\n        fontWeight: \"bold\",\n        mt: \"1em\",\n        children: \"Student Outcome Mapping\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Select\"], {\n        mt: \"1em\",\n        w: \"80%\",\n        id: \"course\",\n        placeholder: \"Select Program\",\n        variant: \"filled\",\n        onChange: handleSetOption,\n        children: renderOptions\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: selectedProgram ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StudentOutcomeList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            selectedProgram: selectedProgram\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 15\n          }, undefined), outcomeMapping ? outcomeMapping.map((course, idx) => {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CourseOutcomeTable__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              course: course,\n              handleCheck: handleCheck\n            }, idx, false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 26\n            }, undefined);\n          }) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 13\n        }, undefined) : null\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 102,\n    columnNumber: 5\n  }, undefined);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutcomeMapping);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvT3V0Y29tZU1hcHBpbmcvT3V0Y29tZU1hcHBpbmcuanM/YWJkMyJdLCJuYW1lcyI6WyJPdXRjb21lTWFwcGluZyIsIlJlYWN0IiwibWVtbyIsInByb2dyYW1zIiwicHJvZ3JhbURhdGEiLCJzZWxlY3RlZFByb2dyYW0iLCJzZXRTZWxlY3RlZFByb2dyYW0iLCJ1c2VTdGF0ZSIsInN0dWRlbnRPdXRjb21lcyIsInNldFN0dWRlbnRPdXRjb21lcyIsIm91dGNvbWVNYXBwaW5nIiwic2V0T3V0Y29tZU1hcHBpbmciLCJnZXRDb3Vyc2VzIiwiY291cnNlcyIsImdldEFsbENvdXJzZXMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJoYW5kbGVTZXRPcHRpb24iLCJlIiwic2VsZWN0aW9uIiwiZmlsdGVyIiwicHJvZ3JhbSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm51bU9mU3R1ZGVudE91dGNvbWVzIiwib3V0Y29tZXMiLCJsZW5ndGgiLCJjb3Vyc2VPdXRjb21lc0FycmF5IiwiY291cnNlRGF0YSIsIm1hcCIsImNvdXJzZSIsImlkeCIsImNvZGUiLCJpbmRleCIsIm91dGNvbWUiLCJzdHVkZW50TWFwIiwiQXJyYXkiLCJmaWxsIiwiaGFuZGxlQ2hlY2siLCJzdHVkZW50SWR4IiwiY291cnNlSWR4IiwidGVtcCIsImN1cnJlbnRDaGVja1ZhbHVlIiwiY29uc29sZSIsImxvZyIsInJlbmRlck9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsZ0JBQUdDLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxNQUFNO0FBQ3RDLFFBQU1DLFFBQVEsR0FBR0MscURBQVcsQ0FBQ0QsUUFBN0I7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QUFBLHFCQURjLEdBVVo7QUFYTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtDRCxDQW5Ic0IsQ0FBdkI7QUFxSGVsQyw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9PdXRjb21lTWFwcGluZy9PdXRjb21lTWFwcGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWU3RhY2ssIFRleHQsIFNlbGVjdCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHtcbiAgUmVjb2lsUm9vdCxcbiAgYXRvbSxcbiAgc2VsZWN0b3IsXG4gIHVzZVJlY29pbFN0YXRlLFxuICB1c2VSZWNvaWxWYWx1ZSxcbn0gZnJvbSAncmVjb2lsJztcblxuaW1wb3J0IFN0dWRlbnRPdXRjb21lTGlzdCBmcm9tIFwiLi9TdHVkZW50T3V0Y29tZUxpc3RcIjtcbmltcG9ydCBwcm9ncmFtRGF0YSBmcm9tIFwiLi4vLi4vLi4vZmFrZS1kYXRhL3Byb2dyYW1zLmpzb25cIjtcbmltcG9ydCBjb3Vyc2VEYXRhIGZyb20gXCIuLi8uLi8uLi9mYWtlLWRhdGEvY291cnNlLmpzb25cIjtcbmltcG9ydCB7IGNvdXJzZXNBdG9tIH0gZnJvbSAnLi9yZWNvaWxTdG9yZSc7XG5pbXBvcnQgQ291cnNlT3V0Y29tZVRhYmxlIGZyb20gXCIuL0NvdXJzZU91dGNvbWVUYWJsZVwiO1xuaW1wb3J0IHsgZ2V0QWxsQ291cnNlcyB9IGZyb20gJy4uLy4uLy4uL2FwaS9BUElIZWxwZXInO1xuaW1wb3J0IFRhYmxlR3JvdXAgZnJvbSBcIi4vVGFibGVHcm91cFwiO1xuXG5jb25zdCBPdXRjb21lTWFwcGluZyA9IFJlYWN0Lm1lbW8oKCkgPT4ge1xuICBjb25zdCBwcm9ncmFtcyA9IHByb2dyYW1EYXRhLnByb2dyYW1zO1xuXG4gIGNvbnN0IFtzZWxlY3RlZFByb2dyYW0sIHNldFNlbGVjdGVkUHJvZ3JhbV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3R1ZGVudE91dGNvbWVzLCBzZXRTdHVkZW50T3V0Y29tZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW291dGNvbWVNYXBwaW5nLCBzZXRPdXRjb21lTWFwcGluZ10gPSB1c2VTdGF0ZSgpO1xuICAvL2NvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVJlY29pbFN0YXRlKGNvdXJzZXNBdG9tKTtcblxuICBjb25zdCBnZXRDb3Vyc2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBnZXRBbGxDb3Vyc2VzKFwiTVQyMDIwXCIsIFwiZmFsbFwiLCAyMDIwKVxuICAgIC8vIGNvbnNvbGUubG9nKGNvdXJzZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wXCIpLnNjcm9sbEludG9WaWV3KCk7XG4gICAgc2V0U3R1ZGVudE91dGNvbWVzKHByb2dyYW1zKTtcbiAgICAvL2dldENvdXJzZXMoKTtcbiAgfSwgW10pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKHNlbGVjdGVkUHJvZ3JhbSAhPSBudWxsICl7XG4gIC8vICAgICBjb25zdCBudW1PZlN0dWRlbnRPdXRjb21lcyA9IHNlbGVjdGVkUHJvZ3JhbS5vdXRjb21lcy5sZW5ndGg7XG5cbiAgLy8gICAgIGNvbnN0IGNvdXJzZU91dGNvbWVzQXJyYXkgPSBjb3Vyc2VEYXRhLmNvdXJzZXMubWFwKChjb3Vyc2UpID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIHtcbiAgLy8gICAgICAgICBuYW1lIDpjb3Vyc2UubmFtZSwgXG4gIC8vICAgICAgICAgY29kZTogY291cnNlLmNvZGUsXG4gIC8vICAgICAgICAgb3V0Y29tZXM6IFxuICAvLyAgICAgICAgICAgY291cnNlWydjb3Vyc2Utb3V0Y29tZXMnXS5tYXAoKG91dGNvbWUpID0+IHtcbiAgLy8gICAgICAgICAgICAgcmV0dXJuIHtcbiAgLy8gICAgICAgICAgICAgICBvdXRjb21lOiBvdXRjb21lLFxuICAvLyAgICAgICAgICAgICAgIHN0dWRlbnRNYXA6IG5ldyBBcnJheShudW1PZlN0dWRlbnRPdXRjb21lcykuZmlsbCgwKVxuICAvLyAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICB9KVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHNldE91dGNvbWVNYXBwaW5nKGNvdXJzZU91dGNvbWVzQXJyYXkpO1xuICAvLyAgICAgc2V0Q291cnNlcyhvdXRjb21lTWFwcGluZyk7XG4gIC8vICAgfVxuICAvLyB9LCBbc2VsZWN0ZWRQcm9ncmFtXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gIC8vIGNvbnNvbGUubG9nKG91dGNvbWVNYXBwaW5nKTtcbiAgLy8gfSwgW291dGNvbWVNYXBwaW5nXSk7XG4gIFxuICBjb25zdCBoYW5kbGVTZXRPcHRpb24gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHByb2dyYW1zLmZpbHRlcigocHJvZ3JhbSkgPT4gcHJvZ3JhbS5uYW1lID09IGUudGFyZ2V0LnZhbHVlKVswXTtcbiAgICBzZXRTZWxlY3RlZFByb2dyYW0oc2VsZWN0aW9uKTtcbiAgICBjb25zdCBudW1PZlN0dWRlbnRPdXRjb21lcyA9IHNlbGVjdGlvbi5vdXRjb21lcy5sZW5ndGg7XG4gICAgY29uc3QgY291cnNlT3V0Y29tZXNBcnJheSA9IGNvdXJzZURhdGEuY291cnNlcy5tYXAoKGNvdXJzZSwgaWR4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBjb3Vyc2UubmFtZSxcbiAgICAgICAgY29kZTogY291cnNlLmNvZGUsXG4gICAgICAgIGluZGV4OiBpZHgsXG4gICAgICAgIG91dGNvbWVzOlxuICAgICAgICAgIGNvdXJzZVsnY291cnNlLW91dGNvbWVzJ10ubWFwKChvdXRjb21lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBvdXRjb21lOiBvdXRjb21lLFxuICAgICAgICAgICAgICBzdHVkZW50TWFwOiBuZXcgQXJyYXkobnVtT2ZTdHVkZW50T3V0Y29tZXMpLmZpbGwoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHNldE91dGNvbWVNYXBwaW5nKGNvdXJzZU91dGNvbWVzQXJyYXkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKGNvdXJzZSwgc3R1ZGVudElkeCwgY291cnNlSWR4KSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhjb3Vyc2UpO1xuICAgIC8vY29uc29sZS5sb2coY291cnNlLm91dGNvbWVzWzBdLnN0dWRlbnRNYXApO1xuICAgIGxldCB0ZW1wID0gWy4uLm91dGNvbWVNYXBwaW5nXTtcbiAgICBjb25zdCBjdXJyZW50Q2hlY2tWYWx1ZSA9IHRlbXBbY291cnNlLmluZGV4XS5vdXRjb21lc1tjb3Vyc2VJZHhdLnN0dWRlbnRNYXBbc3R1ZGVudElkeF07XG4gICAgdGVtcFtjb3Vyc2UuaW5kZXhdLm91dGNvbWVzW2NvdXJzZUlkeF0uc3R1ZGVudE1hcFtzdHVkZW50SWR4XSA9IChjdXJyZW50Q2hlY2tWYWx1ZSA9PT0gMCkgPyAxIDogMDtcbiAgICBjb25zb2xlLmxvZyh0ZW1wW2NvdXJzZS5pbmRleF0pO1xuICAgIC8vIHNldE91dGNvbWVNYXBwaW5nKHtcbiAgICAvLyB9KVxuICB9XG5cbiAgY29uc3QgcmVuZGVyT3B0aW9ucyA9IHN0dWRlbnRPdXRjb21lcyAmJiBzdHVkZW50T3V0Y29tZXMubWFwKChwcm9ncmFtLCBpZHgpID0+IHtcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17cHJvZ3JhbS5uYW1lfSBrZXk9e2lkeH0+e3Byb2dyYW0ubmFtZX08L29wdGlvbj47XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlY29pbFJvb3Q+XG4gICAgICA8VlN0YWNrIGlkPVwidG9wXCIgdz1cIjgwJVwiIG09XCIwIGF1dG9cIj5cbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiIG10PVwiMWVtXCI+XG4gICAgICAgICAgU3R1ZGVudCBPdXRjb21lIE1hcHBpbmdcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBtdD1cIjFlbVwiXG4gICAgICAgICAgdz1cIjgwJVwiXG4gICAgICAgICAgaWQ9XCJjb3Vyc2VcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFByb2dyYW1cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZXRPcHRpb259XG4gICAgICAgID5cbiAgICAgICAgICB7LyogdGhpcyBzaG91bGQgYmUgZmlsbGVkIHdpdGggYSBsaXN0IG9mIGNvdXJzZXMgZnJvbSBkYiAqL31cbiAgICAgICAgICB7cmVuZGVyT3B0aW9uc31cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3NlbGVjdGVkUHJvZ3JhbSA/XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8U3R1ZGVudE91dGNvbWVMaXN0IHNlbGVjdGVkUHJvZ3JhbT17c2VsZWN0ZWRQcm9ncmFtfSAvPlxuICAgICAgICAgICAgICB7b3V0Y29tZU1hcHBpbmcgP1xuICAgICAgICAgICAgICAgIG91dGNvbWVNYXBwaW5nLm1hcCgoY291cnNlLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8Q291cnNlT3V0Y29tZVRhYmxlIGNvdXJzZT17Y291cnNlfSBrZXk9e2lkeH0gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfS8+XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvUmVjb2lsUm9vdD5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBPdXRjb21lTWFwcGluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/admin-components/OutcomeMapping/OutcomeMapping.js\n");
=======
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StudentOutcomeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StudentOutcomeList */ "./components/admin-components/OutcomeMapping/StudentOutcomeList.js");
/* harmony import */ var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../fake-data/programs.json */ "./fake-data/programs.json");
var _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/programs.json */ "./fake-data/programs.json", 1);
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ "./fake-data/course.json", 1);
/* harmony import */ var _recoilStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recoilStore */ "./components/admin-components/OutcomeMapping/recoilStore.js");
/* harmony import */ var _CourseOutcomeTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CourseOutcomeTable */ "./components/admin-components/OutcomeMapping/CourseOutcomeTable.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../api/APIHelper */ "./api/APIHelper.js");
/* harmony import */ var _TableGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TableGroup */ "./components/admin-components/OutcomeMapping/TableGroup.js");

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\OutcomeMapping\\OutcomeMapping.js";











const OutcomeMapping = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(() => {
  const programs = _fake_data_programs_json__WEBPACK_IMPORTED_MODULE_5__.programs;
  const {
    0: selectedProgram,
    1: setSelectedProgram
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: studentOutcomes,
    1: setStudentOutcomes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: outcomeMapping,
    1: setOutcomeMapping
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(); //const [courses, setCourses] = useRecoilState(coursesAtom);

  const getCourses = async () => {
    const courses = await Object(_api_APIHelper__WEBPACK_IMPORTED_MODULE_9__["getAllCourses"])("MT2020", "fall", 2020); // console.log(course);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.getElementById("top").scrollIntoView();
    setStudentOutcomes(programs); //getCourses();
  }, []); // useEffect(() => {
  //   if (selectedProgram != null ){
  //     const numOfStudentOutcomes = selectedProgram.outcomes.length;
  //     const courseOutcomesArray = courseData.courses.map((course) => {
  //       return {
  //         name :course.name, 
  //         code: course.code,
  //         outcomes: 
  //           course['course-outcomes'].map((outcome) => {
  //             return {
  //               outcome: outcome,
  //               studentMap: new Array(numOfStudentOutcomes).fill(0)
  //             }
  //           })
  //       }
  //     });
  //     setOutcomeMapping(courseOutcomesArray);
  //     setCourses(outcomeMapping);
  //   }
  // }, [selectedProgram]);
  // useEffect(() => {
  //  // console.log(outcomeMapping);
  // }, [outcomeMapping]);

  const handleSetOption = e => {
    const selection = programs.filter(program => program.name == e.target.value)[0];
    setSelectedProgram(selection);
    const numOfStudentOutcomes = selection.outcomes.length;
    const courseOutcomesArray = _fake_data_course_json__WEBPACK_IMPORTED_MODULE_6__.courses.map((course, idx) => {
      return {
        name: course.name,
        code: course.code,
        index: idx,
        outcomes: course['course-outcomes'].map(outcome => {
          return {
            outcome: outcome,
            studentMap: new Array(numOfStudentOutcomes).fill(0)
          };
        })
      };
    });
    setOutcomeMapping(courseOutcomesArray);
  };

  const handleCheck = (course, studentIdx, courseIdx) => {
    //console.log(course);
    //console.log(course.outcomes[0].studentMap);
    let temp = [...outcomeMapping];
    const currentCheckValue = temp[course.index].outcomes[courseIdx].studentMap[studentIdx];
    temp[course.index].outcomes[courseIdx].studentMap[studentIdx] = currentCheckValue === 0 ? 1 : 0;
    console.log(temp[course.index]); // setOutcomeMapping({
    // })
  };

  const renderOptions = studentOutcomes && studentOutcomes.map((program, idx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: program.name,
      children: program.name
    }, idx, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 12
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(recoil__WEBPACK_IMPORTED_MODULE_3__["RecoilRoot"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["VStack"], {
      id: "top",
      w: "80%",
      m: "0 auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        fontSize: "2xl",
        fontWeight: "bold",
        mt: "1em",
        children: "Student Outcome Mapping"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        mt: "1em",
        w: "80%",
        id: "course",
        placeholder: "Select Program",
        variant: "filled",
        onChange: handleSetOption,
        children: renderOptions
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: selectedProgram ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StudentOutcomeList__WEBPACK_IMPORTED_MODULE_4__["default"], {
            selectedProgram: selectedProgram
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, undefined), outcomeMapping ? outcomeMapping.map((course, idx) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CourseOutcomeTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
              course: course,
              handleCheck: handleCheck
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 26
            }, undefined);
          }) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, undefined) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (OutcomeMapping);
>>>>>>> Stashed changes

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/StudentOutcomeList.js":
/*!**************************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/StudentOutcomeList.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../fake-data/course.json */ "./fake-data/course.json");
var _fake_data_course_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/course.json */ "./fake-data/course.json", 1);
/* harmony import */ var _fake_data_abetStudentOutcomes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fake-data/abetStudentOutcomes.json */ "./fake-data/abetStudentOutcomes.json");
var _fake_data_abetStudentOutcomes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../fake-data/abetStudentOutcomes.json */ "./fake-data/abetStudentOutcomes.json", 1);


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\OutcomeMapping\\StudentOutcomeList.js";






const StudentOutcomeList = ({
  selectedProgram
}) => {
  /* fill from db when integrated*/
  const programName = selectedProgram.name;
  const outcomes = selectedProgram.outcomes; //console.log(outcomes);

  const handleSubmit = event => {
    event.preventDefault();

    if (window.confirm("Are you sure you would like to submit these changes?")) {
      p; //POST the program list change to the db here

      alert("Outcome Mapping for '" + selectedProgram + "' updated!");
    }
  };

  const renderStudentOutcomes = outcomes.map((outcome, idx) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        textAlign: "left",
        children: outcome
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 32
      }, undefined)
    }, idx, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }, undefined);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      textAlign: "center",
      children: "Showing ABET outcomes for"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      textAlign: "center",
      color: "#38A169",
      fontWeight: "bold",
      mb: "1em",
      children: programName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
      m: "0 auto",
      w: "80rem",
      padding: "4em",
      bg: "#edf2f7",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["OrderedList"], {
        children: renderStudentOutcomes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (StudentOutcomeList);

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/TableGroup.js":
/*!******************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/TableGroup.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _recoilStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recoilStore */ "./components/admin-components/OutcomeMapping/recoilStore.js");
/* harmony import */ var _CourseOutcomeTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CourseOutcomeTable */ "./components/admin-components/OutcomeMapping/CourseOutcomeTable.js");


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\OutcomeMapping\\TableGroup.js";





const TableGroup = ({
  courseData
}) => {
  const courses = Object(recoil__WEBPACK_IMPORTED_MODULE_2__["useRecoilState"])(_recoilStore__WEBPACK_IMPORTED_MODULE_3__["coursesAtom"]);
  console.log(courses);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: courseData.map((course, idx) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CourseOutcomeTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        course: course
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 24
      }, undefined);
    })
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (TableGroup);

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/recoilStore.js":
/*!*******************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/recoilStore.js ***!
  \*******************************************************************/
/*! exports provided: coursesAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coursesAtom", function() { return coursesAtom; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const coursesAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: 'coursesAtom',
  default: 'test'
});

/***/ }),

/***/ "./components/admin-components/Programs.js":
/*!*************************************************!*\
  !*** ./components/admin-components/Programs.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useToggle */ "./hooks/useToggle.js");
/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/APIHelper */ "./api/APIHelper.js");


var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\components\\admin-components\\Programs.js";




const Programs = ({
  program,
  color
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    templateColumns: "repeat(1, 1fr)",
    bg: color,
    padding: ".5em",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
        colSpan: 1,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          align: "center",
          fontSize: "20px",
          children: program
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Programs);

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/TableGroup.js":
/*!******************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/TableGroup.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _recoilStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recoilStore */ \"./components/admin-components/OutcomeMapping/recoilStore.js\");\n/* harmony import */ var _CourseOutcomeTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CourseOutcomeTable */ \"./components/admin-components/OutcomeMapping/CourseOutcomeTable.js\");\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/admin-components/OutcomeMapping/TableGroup.js\";\n\n\n\n\n\nconst TableGroup = ({\n  courseData\n}) => {\n  const courses = Object(recoil__WEBPACK_IMPORTED_MODULE_2__[\"useRecoilState\"])(_recoilStore__WEBPACK_IMPORTED_MODULE_3__[\"coursesAtom\"]);\n  console.log(courses);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: courseData.map((course, idx) => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CourseOutcomeTable__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        course: course\n      }, idx, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 24\n      }, undefined);\n    })\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableGroup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvT3V0Y29tZU1hcHBpbmcvVGFibGVHcm91cC5qcz80YjE1Il0sIm5hbWVzIjpbIlRhYmxlR3JvdXAiLCJjb3Vyc2VEYXRhIiwiY291cnNlcyIsInVzZVJlY29pbFN0YXRlIiwiY291cnNlc0F0b20iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiY291cnNlIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBa0I7QUFDakMsUUFBTUMsT0FBTyxHQUFHQyw2REFBYyxDQUFDQyx3REFBRCxDQUE5QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjtBQUNBLHNCQUNJO0FBQUEsY0FDS0QsVUFBVSxDQUFDTSxHQUFYLENBQWUsQ0FBQ0MsTUFBRCxFQUFTQyxHQUFULEtBQWlCO0FBQzdCLDBCQUFPLHFFQUFDLDJEQUFEO0FBQW9CLGNBQU0sRUFBRUQ7QUFBNUIsU0FBeUNDLEdBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSCxLQUZBO0FBREwsbUJBREo7QUFPSCxDQVZEOztBQVllVCx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9PdXRjb21lTWFwcGluZy9UYWJsZUdyb3VwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyBjb3Vyc2VzQXRvbSB9IGZyb20gJy4vcmVjb2lsU3RvcmUnO1xuaW1wb3J0IENvdXJzZU91dGNvbWVUYWJsZSBmcm9tICcuL0NvdXJzZU91dGNvbWVUYWJsZSc7XG5cbmNvbnN0IFRhYmxlR3JvdXAgPSAoe2NvdXJzZURhdGF9KSA9PiB7XG4gICAgY29uc3QgY291cnNlcyA9IHVzZVJlY29pbFN0YXRlKGNvdXJzZXNBdG9tKTtcbiAgICBjb25zb2xlLmxvZyhjb3Vyc2VzKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y291cnNlRGF0YS5tYXAoKGNvdXJzZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDb3Vyc2VPdXRjb21lVGFibGUgY291cnNlPXtjb3Vyc2V9IGtleT17aWR4fS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVHcm91cDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/admin-components/OutcomeMapping/TableGroup.js\n");

/***/ }),

/***/ "./components/admin-components/OutcomeMapping/recoilStore.js":
/*!*******************************************************************!*\
  !*** ./components/admin-components/OutcomeMapping/recoilStore.js ***!
  \*******************************************************************/
/*! exports provided: coursesAtom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coursesAtom\", function() { return coursesAtom; });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n\nconst coursesAtom = Object(recoil__WEBPACK_IMPORTED_MODULE_0__[\"atom\"])({\n  key: 'coursesAtom',\n  default: 'test'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvT3V0Y29tZU1hcHBpbmcvcmVjb2lsU3RvcmUuanM/YjY4MiJdLCJuYW1lcyI6WyJjb3Vyc2VzQXRvbSIsImF0b20iLCJrZXkiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUU8sTUFBTUEsV0FBVyxHQUFHQyxtREFBSSxDQUFDO0FBQzVCQyxLQUFHLEVBQUUsYUFEdUI7QUFFNUJDLFNBQU8sRUFBRTtBQUZtQixDQUFELENBQXhCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL091dGNvbWVNYXBwaW5nL3JlY29pbFN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBSZWNvaWxSb290LFxuICAgIGF0b20sXG4gICAgc2VsZWN0b3IsXG4gICAgdXNlUmVjb2lsU3RhdGUsXG4gICAgdXNlUmVjb2lsVmFsdWUsXG4gIH0gZnJvbSAncmVjb2lsJztcblxuZXhwb3J0IGNvbnN0IGNvdXJzZXNBdG9tID0gYXRvbSh7XG4gICAga2V5OiAnY291cnNlc0F0b20nLFxuICAgIGRlZmF1bHQ6ICd0ZXN0J1xufSkgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/admin-components/OutcomeMapping/recoilStore.js\n");

/***/ }),

/***/ "./components/admin-components/Programs.js":
/*!*************************************************!*\
  !*** ./components/admin-components/Programs.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useToggle */ \"./hooks/useToggle.js\");\n/* harmony import */ var _api_APIHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/APIHelper */ \"./api/APIHelper.js\");\n\n\nvar _jsxFileName = \"/Users/armaandhanoa/Documents/Documents - Armaan\\u2019s Mac mini/Projects/ABET-Spring21/FontNew/ABET_Course_Assessment_Tool/components/admin-components/Programs.js\";\n\n\n\n\nconst Programs = ({\n  program,\n  color\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    templateColumns: \"repeat(1, 1fr)\",\n    bg: color,\n    padding: \".5em\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"GridItem\"], {\n        colSpan: 1,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n          align: \"center\",\n          fontSize: \"20px\",\n          children: program\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Programs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvUHJvZ3JhbXMuanM/OTc4NSJdLCJuYW1lcyI6WyJQcm9ncmFtcyIsInByb2dyYW0iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUNoQkMsU0FEZ0I7QUFFaEJDO0FBRmdCLENBQUQsS0FHWDtBQUNKLHNCQUNFLHFFQUFDLHFEQUFEO0FBQU0sbUJBQWUsRUFBQyxnQkFBdEI7QUFBdUMsTUFBRSxFQUFFQSxLQUEzQztBQUFrRCxXQUFPLEVBQUMsTUFBMUQ7QUFBQSwyQkFDRTtBQUFBLDZCQUNFLHFFQUFDLHlEQUFEO0FBQVUsZUFBTyxFQUFFLENBQW5CO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBTSxlQUFLLEVBQUMsUUFBWjtBQUFxQixrQkFBUSxFQUFDLE1BQTlCO0FBQUEsb0JBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBZkQ7O0FBaUJlRCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9Qcm9ncmFtcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIEdyaWRJdGVtLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xuaW1wb3J0IHsgcmVtb3ZlQ291cnNlIH0gZnJvbSBcIi4uLy4uL2FwaS9BUElIZWxwZXJcIjtcblxuY29uc3QgUHJvZ3JhbXMgPSAoe1xuICBwcm9ncmFtLFxuICBjb2xvcixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMSwgMWZyKVwiIGJnPXtjb2xvcn0gcGFkZGluZz1cIi41ZW1cIj5cbiAgICAgIDw+XG4gICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsxfT5cbiAgICAgICAgICA8VGV4dCBhbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiMjBweFwiPlxuICAgICAgICAgICAge3Byb2dyYW19XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgPC8+XG4gICAgPC9HcmlkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3JhbXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/admin-components/Programs.js\n");

/***/ }),

/***/ "./fake-data/abetStudentOutcomes.json":
/*!********************************************!*\
  !*** ./fake-data/abetStudentOutcomes.json ***!
  \********************************************/
/*! exports provided: outcomes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"outcomes\":[{\"ComputerScience\":[\"Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.\",\"Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline.\",\"Communicate effectively in a variety of professional contexts.\",\"Recognize professional responsibilities and make informed judgements in computing practice based on legal and ethical principles.\",\"Function effectively as a member or leader of a team engaged in activities appropriate to the program’s discipline.\",\"Apply computer science theory and software development fundamentals to produce computing-based solutions.\"]},{\"ComputerEngineering\":[\"Identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics.\",\"Apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factors.\",\"Communicate effectively with a range of audiences.\",\"Recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts.\",\"Function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives.\",\"Develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions.\",\"Acquire and apply new knowledge as needed, using appropriate learning strategies.\"]},{\"InformationTechnology\":[\"Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.\",\"Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline.\",\"Communicate effectively in a variety of professional contexts.\",\"Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.\",\"Function effectively as a member or leader of a team engaged in activities appropriate to the program’s discipline.\",\"Identify and analyze user needs and to take them into account in the selection, creation, integration, evaluation, and administration of computing-based systems.\"]},{\"Cybersecurity\":[]}]}");

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

module.exports = JSON.parse("{\"programs\":[{\"name\":\"Computer Science\",\"outcomes\":[\"Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.\",\"Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline\",\"Communicate effectively in a variety of professional contexts.\",\"Recognize professional responsibilities and make informed judgements in computing practice based on legal and ethical principles.\",\"Function effectively as a member or leader of a team engaged in activities.\",\"Apply computer science theory and software development fundamentals to produce computing-based solutions.\"]},{\"name\":\"Computer Eningeering\",\"outcomes\":[\"Identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics\",\"Apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factors\",\"Communicate effectively with a range of audiences\",\"Recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts\",\"Function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives\",\"Develop and conduct apselectedProgramriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions\",\"Acquire and apply new knowledge as needed, using learning strategies.\"]},{\"name\":\"Information Technology\",\"outcomes\":[\"Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.\",\"Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline\",\"Communicate effectively in a variety of professional contexts.\",\"Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.\",\"Function effectively as a member or leader of a team engaged in activities apporopriate to the program’s discipline.\",\"Apply computer science theory and software development fundamentals to produce computing-based solutions.\"]},{\"name\":\"Cybersecurity\",\"outcomes\":[\"Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.\",\"Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline\",\"Communicate effectively in a variety of professional contexts.\",\"Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.\",\"Function effectively as a member or leader of a team engaged in activities apporopriate to the program’s discipline.\",\"Apply computer science theory and software development fundamentals to produce computing-based solutions.\"]}]}");

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_admin_components_AdminNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/admin-components/AdminNavigation */ "./components/admin-components/AdminNavigation.js");
/* harmony import */ var _components_admin_components_AdminMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/admin-components/AdminMenu */ "./components/admin-components/AdminMenu.js");
/* harmony import */ var _components_admin_components_CreateNewSemester__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/admin-components/CreateNewSemester */ "./components/admin-components/CreateNewSemester.js");
/* harmony import */ var _components_admin_components_EditProgramList_EditProgramList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/admin-components/EditProgramList/EditProgramList */ "./components/admin-components/EditProgramList/EditProgramList.js");
/* harmony import */ var _components_admin_components_EditCourseAssignments_EditCourseAssignments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/admin-components/EditCourseAssignments/EditCourseAssignments */ "./components/admin-components/EditCourseAssignments/EditCourseAssignments.js");
/* harmony import */ var _components_admin_components_EditFacultyList_EditFacultyList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/admin-components/EditFacultyList/EditFacultyList */ "./components/admin-components/EditFacultyList/EditFacultyList.js");
/* harmony import */ var _components_admin_components_EditCourseList_EditCourseList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/admin-components/EditCourseList/EditCourseList */ "./components/admin-components/EditCourseList/EditCourseList.js");
/* harmony import */ var _components_admin_components_EditCourseOutcomes_EditCourseOutcomes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/admin-components/EditCourseOutcomes/EditCourseOutcomes */ "./components/admin-components/EditCourseOutcomes/EditCourseOutcomes.js");
/* harmony import */ var _components_admin_components_OutcomeMapping_OutcomeMapping__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/admin-components/OutcomeMapping/OutcomeMapping */ "./components/admin-components/OutcomeMapping/OutcomeMapping.js");
/* harmony import */ var _components_admin_components_GenerateSectionReport_GenerateSectionReport__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/admin-components/GenerateSectionReport/GenerateSectionReport */ "./components/admin-components/GenerateSectionReport/GenerateSectionReport.js");
/* harmony import */ var _components_admin_components_GenerateStudentSurveys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/admin-components/GenerateStudentSurveys */ "./components/admin-components/GenerateStudentSurveys.js");

var _jsxFileName = "C:\\Users\\schic\\OneDrive\\Documents\\UNT\\Fall_20\\4901 Capstone\\Capstone Project\\Frontend2\\pages\\adminHome.js";



 // import FullReport from '../components/admin-components/FullReport/FullReport';











const adminHome = () => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("MT2020");
  const {
    0: view,
    1: setView
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("GFR");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "UNT ABET: Admin Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_AdminNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_AdminMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
          setView: setView
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: (() => {
          switch (view) {
            // case "GFR":
            //     return <FullReport />;
            case "GSR":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_GenerateSectionReport_GenerateSectionReport__WEBPACK_IMPORTED_MODULE_12__["default"], {
                user: user
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 24
              }, undefined);

            case "OM":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_OutcomeMapping_OutcomeMapping__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 24
              }, undefined);

            case "CNS":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_CreateNewSemester__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 24
              }, undefined);

            case "EAC":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_EditCourseAssignments_EditCourseAssignments__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 24
              }, undefined);

            case "EFL":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_EditFacultyList_EditFacultyList__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 24
              }, undefined);

            case "EPL":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_EditProgramList_EditProgramList__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 24
              }, undefined);

            case "ECL":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_EditCourseList_EditCourseList__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 24
              }, undefined);

            case "ECO":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_EditCourseOutcomes_EditCourseOutcomes__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 24
              }, undefined);

            case "GSS":
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_admin_components_GenerateStudentSurveys__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 24
              }, undefined);
          }
        })()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (adminHome);

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
  names.sort((a, b) => a.split(" ")[1].localeCompare(b.split(" ")[1]));
}

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL0FQSUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvYXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291cnNlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvQWRtaW5NZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9BZG1pbk5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0NyZWF0ZU5ld1NlbWVzdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0Q291cnNlQXNzaWdubWVudHMvQXNzaWduQ291cnNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRDb3Vyc2VBc3NpZ25tZW50cy9BdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRDb3Vyc2VBc3NpZ25tZW50cy9FZGl0Q291cnNlQXNzaWdubWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRDb3Vyc2VMaXN0L0FkZENvdXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdENvdXJzZUxpc3QvRWRpdENvdXJzZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRDb3Vyc2VPdXRjb21lcy9FZGl0Q291cnNlT3V0Y29tZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRDb3Vyc2VPdXRjb21lcy9FZGl0T3V0Y29tZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRGYWN1bHR5TGlzdC9BZGRGYWN1bHR5TWVtYmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0RmFjdWx0eUxpc3QvRWRpdEZhY3VsdHlMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0RmFjdWx0eUxpc3QvRWRpdEZhY3VsdHlNZW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0VkaXRQcm9ncmFtTGlzdC9FZGl0UHJvZ3JhbUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0ZhY3VsdHlNZW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0dlbmVyYXRlU2VjdGlvblJlcG9ydC9Db3Vyc2VMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9HZW5lcmF0ZVNlY3Rpb25SZXBvcnQvR2VuZXJhdGVTZWN0aW9uUmVwb3J0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9HZW5lcmF0ZVN0dWRlbnRTdXJ2ZXlzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9PdXRjb21lTWFwcGluZy9DaGVja2JveEdyb3VwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9PdXRjb21lTWFwcGluZy9Db3Vyc2VPdXRjb21lVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL091dGNvbWVNYXBwaW5nL091dGNvbWVNYXBwaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9PdXRjb21lTWFwcGluZy9TdHVkZW50T3V0Y29tZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL091dGNvbWVNYXBwaW5nL1RhYmxlR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL091dGNvbWVNYXBwaW5nL3JlY29pbFN0b3JlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9Qcm9ncmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VJbnB1dFN0YXRlLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZVRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hZG1pbkhvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc29ydEJ5TGFzdE5hbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1jdXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNvaWxcIiJdLCJuYW1lcyI6WyJnZXRDb3Vyc2VzIiwiY291cnNlcyIsImdldEluc3RydWN0b3JDb3Vyc2VzIiwiaWQiLCJ0ZXJtIiwiYXBpX2hlbHBlciIsIkFQSSIsInJlc3BvbnNlIiwic2VtZXN0ZXIiLCJ5ZWFyIiwidGhlbiIsInJlc3VsdCIsImluc3RydWN0b3JDb3Vyc2VzIiwiZmlsdGVyIiwiY291cnNlIiwiaW5zdHJ1Y3RvciIsImdldENvb3JkaW5hdG9yQ291cnNlcyIsImNvb3JkaW5hdG9yQ291cnNlcyIsImNvb3JkaW5hdG9yIiwiZ2V0Rm9ybURhdGEiLCJkZXBhcnRtZW50Iiwic2VjdGlvbiIsImdldEZvcm1CeVNlY3Rpb24iLCJmb3JtRGF0YSIsInBvc3RDb29yZGluYXRvckNvbW1lbnQiLCJ1c2VyaWQiLCJjb3Vyc2VOdW1iZXIiLCJjb29yZGluYXRvckNvbW1lbnQiLCJpc0NvdXJzZUNvbXBsZXRlZCIsInBvc3RDb21tZW50Iiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0SW5zdHJ1Y3RvckZvcm0iLCJzZWN0aW9uTnVtYmVyIiwiaXNTZWN0aW9uQ29tcGxldGVkIiwib3V0Y29tZXMiLCJJVEdyYWRlcyIsIkNTR3JhZGVzIiwiQ0VHcmFkZXMiLCJwb3N0Rm9ybSIsImxvZ2luIiwicGFzc3dvcmQiLCJnZXRBbGxDb3Vyc2VzIiwicGFyc2VJbnQiLCJnZXRGYWN1bHR5TGlzdCIsImZhY3VsdHkiLCJnZXRDb3Vyc2VzQnlEZXBhcnRtZW50IiwiYWRkRmFjdWx0eU1lbWJlciIsImxhc3ROYW1lIiwiZmlyc3ROYW1lIiwidHlwZSIsImFkZENvdXJzZSIsImRpc3BsYXlOYW1lIiwicmVtb3ZlQ291cnNlIiwicm9vdCIsIk9LIiwiVU5BVVRIT1JJWkVEIiwiTk9UX0xPR0dFRF9JTl9NU0ciLCJTRVJWRVJfRVJST1JfTVNHIiwiQkFEX1JFUVVFU1RfTVNHIiwidG9rZW4iLCJzZXRUb2tlbiIsInQiLCJzZW5kUG9zdCIsInJvdXRlIiwiYm9keSIsInVybCIsInN0YXR1c0NvZGUiLCJjb29raWVDdXR0ZXIiLCJnZXQiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsInJlZmVycmVyUG9saWN5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJFcnJvck9iaiIsImhhc093blByb3BlcnR5IiwiY2F0Y2giLCJzZW5kRmlsZSIsIkZvcm1EYXRhIiwiZXhwaXJlcyIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJzZXQiLCJsb2dvdXQiLCJVc2VyaWQiLCJTZW1lc3RlciIsIlllYXIiLCJnZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIiLCJTZWN0aW9uIiwiSW5zdHJ1Y3RvciIsIklkIiwiRGVwYXJ0bWVudCIsIkNvdXJzZU51bWJlciIsIlNlY3Rpb25OdW1iZXIiLCJnZXRGb3Jtc0J5Q291cnNlIiwiQ291cnNlIiwiQ29vcmRpbmF0b3IiLCJnZXRBbGxGb3JtcyIsInVzZXJJZCIsImZvcm0iLCJnZXRCbGFua0Zvcm0iLCJzZWN0aW9uSWQiLCJnZXREZWZhdWx0WWVhckFuZFNlbWVzdGVyIiwidGV4dCIsIlJlc3VsdE9iaiIsInBhcnNlIiwiZGF0ZSIsImRheSIsImdldERheSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImFkZFNlY3Rpb24iLCJudW1iZXJPZlN0dWRlbnRzIiwiZmFjdWx0eVR5cGUiLCJpbmZvIiwiZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZSIsInBvc3RDb3Vyc2VPdXRjb21lcyIsImNvdXJzZU91dGNvbWVzTGlzdCIsInBvc3RTZWN0aW9uIiwiTnVtYmVyT2ZTdHVkZW50cyIsInVwbG9hZEFjY2Vzc0RiIiwidXBsb2FkRm9ybUF0dGFjaG1lbnQiLCJvdXRjb21lSWQiLCJhcHBlbmQiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJpc0xvZ2dlZEluIiwiZmFpbHVyZSIsIkNvdXJzZXMiLCJtZW1iZXIiLCJjb2xvciIsImFsZXJ0IiwiQWRtaW5NZW51Iiwic2V0VmlldyIsImJnIiwiQWRtaW5OYXZpZ2F0aW9uIiwibGluayIsInVzZXIiLCJDcmVhdGVOZXdTZW1lc3RlciIsImQiLCJ5IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiaGFuZGxlQ29uZmlybSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJjb25maXJtIiwiZmFrZURhdGEiLCJBc3NpZ25Db3Vyc2VJbnB1dCIsInNldFNlY3Rpb24iLCJyZXNldCIsInVzZUlucHV0U3RhdGUiLCJzZWN0aW9ucyIsInNldFNlY3Rpb25zIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJuYW1lIiwicmVtb3ZlU2VjdGlvbiIsInNlY3QiLCJyZW5kZXJTZWN0aW9uIiwibWFwIiwiZSIsIkF1dG9jb21wbGV0ZSIsIkNvbXBvbmVudCIsInByb3BzIiwic3VnZ2VzdGlvbnMiLCJ1c2VySW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZFN1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbiIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInNldFN0YXRlIiwiYWN0aXZlU3VnZ2VzdGlvbiIsInNob3dTdWdnZXN0aW9ucyIsImlubmVyVGV4dCIsInN0YXRlIiwia2V5Q29kZSIsInJlbmRlciIsIm9uQ2hhbmdlIiwib25DbGljayIsIm9uS2V5RG93biIsInN1Z2dlc3Rpb25zTGlzdENvbXBvbmVudCIsImluZGV4IiwiY2xhc3NOYW1lIiwiUHJvcFR5cGVzIiwiaW5zdGFuY2VPZiIsIkFycmF5IiwiRWRpdENvdXJzZUFzc2lnbm1lbnRzIiwiaGFuZGxlU2F2ZSIsInJlbmRlckNvdXJzZXMiLCJpZHgiLCJjb2RlIiwiQWRkQ291cnNlIiwiYWRkTmV3Q291cnNlIiwieWVhcnMiLCJzZW1lc3RlcnMiLCJkZXBhcnRtZW50cyIsInNldExhc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwic2V0SUQiLCJ5ZWFyVmFsdWUiLCJzZXRZZWFyIiwic2V0U2VtZXN0ZXIiLCJzZXRDb3Vyc2VOdW1iZXIiLCJzZXREaXNwbGF5TmFtZSIsInNldERlcGFydG1lbnQiLCJpc0VkZGl0aW5nIiwidG9nZ2xlRWRkaXRpbmciLCJ1c2VUb2dnbGUiLCJ0YXJnZXQiLCJFZGl0Q291cnNlTGlzdCIsInRoZUNvdXJzZSIsInNldE5ld0NvdXJzZXMiLCJuZXdDb3Vyc2UiLCJ0aGVEZXBhcnRtZW50Iiwic2V0TmV3RGVwYXJ0bWVudCIsImdldE5ld0NvdXJzZXMiLCJuZXdDb3Vyc2VMaXN0IiwiaGFuZGxlU3VibWl0IiwiZHJvcERvd25IYW5kbGVyIiwicmVuZGVyQ291cnNlIiwiY291cnMiLCJFZGl0Q291cnNlT3V0Y29tZXMiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJoYW5kbGVTZXRPcHRpb24iLCJyZW5kZXJPcHRpb25zIiwic2VsZWN0ZWRDb3Vyc2UiLCJFZGl0T3V0Y29tZUxpc3QiLCJwcm9wIiwic2hvcnROYW1lIiwib3V0Y29tZUxpc3QiLCJjb3Vyc2VPdXRjb21lcyIsImkiLCJqIiwib2JqIiwicHVzaCIsIm91dGNvbWUiLCJzZXRPdXRjb21lIiwic2V0T3V0Y29tZXMiLCJhZGRPdXRjb21lIiwicmVtb3ZlT3V0Y29tZSIsIm91dGMiLCJyZW5kZXJPdXRjb21lIiwiQWRkRmFjdWx0eU1lbWJlciIsInNldE5ld0ZhY3VsdHkiLCJmYWN1bHR5VHlwZXMiLCJJRCIsInNldFR5cGUiLCJhZGRGYWN1bHR5IiwidW50SUQiLCJFZGl0RmFjdWx0eUxpc3QiLCJzZXRGYWN1bHR5IiwiZnVsbFRpbWUiLCJhZGp1bmN0cyIsImZlbGxvd3MiLCJuZXdGYWN1bHR5IiwiZ2V0RmFjdWx0eSIsImZhY3VsdHlMaXN0IiwicmVuZGVyRmFjdWx0eSIsImZhYyIsInJlbmRlckFkanVuY3QiLCJyZW5kZXJGZWxsb3dzIiwiRWRpdEZhY3VsdHlNZW1iZXIiLCJlZGl0IiwibmV3TmFtZSIsInNldE5ld05hbWUiLCJlZGl0TmFtZSIsIkVkaXRQcm9ncmFtTGlzdCIsInByb2dyYW1MaXN0IiwicHJvZ3JhbXMiLCJjc2VQcm9ncmFtcyIsInByb2dyYW0iLCJzZXRQcm9ncmFtIiwic2V0UHJvZ3JhbXMiLCJhZGRQcm9ncmFtIiwicmVtb3ZlUHJvZ3JhbSIsInByb2ciLCJyZW5kZXJQcm9ncmFtIiwiRmFjdWx0eU1lbWJlciIsImlzRWRpdGluZyIsInRvZ2dsZSIsIkNvdXJzZUxpc3QiLCJoYW5kbGVDbGljayIsImNvb2tpZSIsIm9wZW4iLCJHZW5lcmF0ZVNlY3Rpb25SZXBvcnQiLCJzZXRUZXJtIiwic2V0Q291cnNlcyIsInRlcm1zIiwiaGFuZGxlU2V0VGVybSIsInNwbGl0IiwiY291cnNlc1JlcyIsInRvU3RyaW5nIiwiR2VuZXJhdGVTdHVkZW50U3VydmV5cyIsImNvdXJzZUxpc3QiLCJpc09uIiwidG9nZ2xlT24iLCJzZXRCdXR0b25IYW5kbGVyIiwic2V0QnV0dG9uTmFtZSIsInN1cnZleUNvdXJzZXMiLCJjb25jYXQiLCJzb3J0IiwiYSIsImIiLCJzdXJ2ZXlDb3Vyc2VzQnlJbnN0dWN0b3IiLCJzaG93IiwiQ2hlY2tCb3hHcm91cCIsInN0dWRlbnRNYXAiLCJjaGVja0FycmF5Iiwic2V0Q2hlY2tBcnJheSIsIkhhbmRsZUNoZWNrIiwidGVtcCIsIkNvdXJzZU91dGNvbWVUYWJsZSIsImhhbmRsZUNoZWNrIiwiaGFuZGxlQ291cnNlVXBkYXRlIiwiY291cnNlSWR4Iiwic3R1ZGVudElkeCIsImNoZWNrVmFsdWUiLCJPdXRjb21lTWFwcGluZyIsIlJlYWN0IiwibWVtbyIsInByb2dyYW1EYXRhIiwic2VsZWN0ZWRQcm9ncmFtIiwic2V0U2VsZWN0ZWRQcm9ncmFtIiwic3R1ZGVudE91dGNvbWVzIiwic2V0U3R1ZGVudE91dGNvbWVzIiwib3V0Y29tZU1hcHBpbmciLCJzZXRPdXRjb21lTWFwcGluZyIsInNlbGVjdGlvbiIsIm51bU9mU3R1ZGVudE91dGNvbWVzIiwiY291cnNlT3V0Y29tZXNBcnJheSIsImNvdXJzZURhdGEiLCJmaWxsIiwiY3VycmVudENoZWNrVmFsdWUiLCJTdHVkZW50T3V0Y29tZUxpc3QiLCJwcm9ncmFtTmFtZSIsInAiLCJyZW5kZXJTdHVkZW50T3V0Y29tZXMiLCJUYWJsZUdyb3VwIiwidXNlUmVjb2lsU3RhdGUiLCJjb3Vyc2VzQXRvbSIsImF0b20iLCJrZXkiLCJkZWZhdWx0IiwiUHJvZ3JhbXMiLCJpbml0aWFsVmFsIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJhZG1pbkhvbWUiLCJzZXRVc2VyIiwidmlldyIsInNvcnRCeUxhc3ROYW1lIiwibmFtZXMiLCJsb2NhbGVDb21wYXJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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LElBQU4sQ0FBVyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUQsQ0FBQyxDQUFDWixLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsRUFBZ0IrRCxhQUFoQixDQUE4QmxELENBQUMsQ0FBQ2IsS0FBRixDQUFRLEdBQVIsRUFBYSxDQUFiLENBQTlCLENBQXJCO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNGRCw2Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9hZG1pbkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FkbWluSG9tZS5qc1wiKTtcbiIsImltcG9ydCBBUEkgZnJvbSAnLi9hcGknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvdXJzZXMoKXtcclxuICAgIHJldHVybihjb3Vyc2VzKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0cnVjdG9yQ291cnNlcyhpZCwgdGVybSl7XHJcbiAgICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICAgIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuZ2V0Q291cnNlcyhpZCwgdGVybS5zZW1lc3RlciwgdGVybS55ZWFyKTtcclxuXHJcbiAgICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGluc3RydWN0b3JDb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgICBpbnN0cnVjdG9yQ291cnNlcy5maWx0ZXIoY291cnNlID0+IGNvdXJzZS5pbnN0cnVjdG9yLmlkID09PSBpZCk7XHJcbiAgICByZXR1cm4oaW5zdHJ1Y3RvckNvdXJzZXMpO1xyXG59O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0b3JDb3Vyc2VzKGlkLCB0ZXJtKXtcclxuICAgIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5nZXRDb3Vyc2VzKGlkLCB0ZXJtLnNlbWVzdGVyLCB0ZXJtLnllYXIpO1xyXG5cclxuICAgIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgY29vcmRpbmF0b3JDb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgICBjb29yZGluYXRvckNvdXJzZXMuZmlsdGVyKGNvdXJzZSA9PiBjb3Vyc2UuY29vcmRpbmF0b3IuaWQgPT09IGlkKTtcclxuICAgIHJldHVybihjb29yZGluYXRvckNvdXJzZXMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvcm1EYXRhKGlkLCB5ZWFyLCB0ZXJtLCBkZXBhcnRtZW50LCBjb3Vyc2UsIHNlY3Rpb24pe1xyXG4gICAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldEZvcm1CeVNlY3Rpb24oaWQsIHllYXIsIHRlcm0sIGRlcGFydG1lbnQsIGNvdXJzZSwgc2VjdGlvbik7XHJcbiAgICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpe1xyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXNwb25zZTtcclxuICAgIHJldHVybiBmb3JtRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RDb29yZGluYXRvckNvbW1lbnQodXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBjb29yZGluYXRvckNvbW1lbnQsIGlzQ291cnNlQ29tcGxldGVkKXtcclxuICAgIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5wb3N0Q29tbWVudCh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIGNvb3JkaW5hdG9yQ29tbWVudCwgaXNDb3Vyc2VDb21wbGV0ZWQpO1xyXG4gICAgcmVzcG9uc2UudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0SW5zdHJ1Y3RvckZvcm0odXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBzZWN0aW9uTnVtYmVyLCBpc1NlY3Rpb25Db21wbGV0ZWQsIG91dGNvbWVzLCBJVEdyYWRlcywgQ1NHcmFkZXMsIENFR3JhZGVzKXtcclxuICAgIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5wb3N0Rm9ybSh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGlzU2VjdGlvbkNvbXBsZXRlZCwgb3V0Y29tZXMsIElUR3JhZGVzLCBDU0dyYWRlcywgQ0VHcmFkZXMpO1xyXG4gICAgcmVzcG9uc2UudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih1c2VyaWQsIHBhc3N3b3JkKXtcclxuICAgIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5sb2dpbih1c2VyaWQsIHBhc3N3b3JkKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIHJldHVybiByZXNwb25zZS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpe1xyXG4gICAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgcGFyc2VJbnQoeWVhcikpO1xyXG4gICAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY291cnNlcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgY29uc29sZS5sb2coY291cnNlcyk7XHJcbiAgICByZXR1cm4gY291cnNlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZhY3VsdHlMaXN0KCl7XHJcbiAgICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICAgIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuZ2V0RmFjdWx0eUxpc3QoKTtcclxuICAgIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCl7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZhY3VsdHkgPSBhd2FpdCByZXNwb25zZTtcclxuICAgIHJldHVybiBmYWN1bHR5O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCl7XHJcbiAgICBsZXQgYXBpX2hlbHBlciA9IG5ldyBBUEkoKTtcclxuICAgIGxldCByZXNwb25zZSA9IGFwaV9oZWxwZXIuZ2V0Q291cnNlc0J5RGVwYXJ0bWVudChkZXBhcnRtZW50KTtcclxuICAgIHJlc3BvbnNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCl7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pXHJcbiAgICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgcmVzcG9uc2U7XHJcbiAgICByZXR1cm4gY291cnNlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEZhY3VsdHlNZW1iZXIobGFzdE5hbWUsIGZpcnN0TmFtZSwgaWQsIHR5cGUpe1xyXG4gICAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhcGlfaGVscGVyLmFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lLCBsYXN0TmFtZSwgaWQsIHR5cGUpO1xyXG4gICAgcmVzcG9uc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KXtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDb3Vyc2UodXNlcmlkID0gXCJcIiwgZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSAwLCBkaXNwbGF5TmFtZSA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiKXtcclxuICAgIGxldCBhcGlfaGVscGVyID0gbmV3IEFQSSgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5hZGRDb3Vyc2UodXNlcmlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCB5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkaXNwbGF5TmFtZSwgZGVwYXJ0bWVudCk7XHJcbiAgICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpe1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9KVxyXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KSB7XHJcbiAgbGV0IGFwaV9oZWxwZXIgPSBuZXcgQVBJKCk7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXBpX2hlbHBlci5yZW1vdmVDb3Vyc2UoXHJcbiAgICB5ZWFyLFxyXG4gICAgc2VtZXN0ZXIsXHJcbiAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICBkZXBhcnRtZW50XHJcbiAgKTtcclxuICByZXNwb25zZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSk7XHJcbiAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHJlc3BvbnNlO1xyXG4gIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gIGNvbnNvbGUubG9nKGNvdXJzZU51bWJlcik7XHJcbn1cclxuIiwiLy8gSGVscGVyIEFQSSBDbGFzc1xyXG5pbXBvcnQgY29va2llQ3V0dGVyIGZyb20gJ2Nvb2tpZS1jdXR0ZXInO1xyXG5cclxuY29uc3Qgcm9vdCA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNzIvYXBpXCI7IC8vIFRoZSBiYXNlIFVSTCBmb3IgZWFjaCByZXF1ZXN0XHJcbmNvbnN0IE9LID0gMjAwOyAgICAgICAgICAgLy8yMDAgT2sgc3RhdHVzIGNvZGVcclxuY29uc3QgVU5BVVRIT1JJWkVEID0gNDAxOyAvLzQwMSBVbmF1dGhvcml6ZWQgc3RhdHVzIGNvZGVcclxuY29uc3QgTk9UX0xPR0dFRF9JTl9NU0cgPSBcIkVycm9yOiBZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSBsb2cgaW4gYWdhaW4uXCI7XHJcbmNvbnN0IFNFUlZFUl9FUlJPUl9NU0cgPSBcIkludGVybmFsIFNlcnZlciBFcnJvcjogUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIjtcclxuY29uc3QgQkFEX1JFUVVFU1RfTVNHID0gXCJFcnJvcjogU29tZSBvZiB0aGUgcHJvdmlkZWQgcGFyYW1ldGVycyBhcmUgaW52YWxpZC5cIjtcclxudmFyIHRva2VuID0gXCJcIjsgICAgICAgICAgIC8vaG9sZHMgdmFsdWUgb2YgdGhlIHRva2VuIGNvb2tpZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcclxuICAgIC8qIFRoaXMgZnVuY3Rpb24gaXMgZm9yIGdldEluaXRpYWxQcm9wcy5cclxuICAgIGNvb2tpZUN1dHRlciBpcyB1bmRlZmluZWQgaW4gZ2V0SW5pdGlhbFByb3BzLFxyXG4gICAgc28gdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSB0b2tlbiB0byB0aGUgdmFsdWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgcGFzc2VkIGluIGZyb20gZ2V0SW5pdGlhbFByb3BzLiAqL1xyXG4gICAgc2V0VG9rZW4odCA9IFwiXCIpIHtcclxuICAgICAgICB0b2tlbiA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJpYyBmdW5jdGlvbiBmb3Igc2VuZGluZyBQT1NUIHJlcXVlc3RzXHJcbiAgICAvLyAgICBJbnB1dDogcm91dGUgYW5kIGJvZHlcclxuICAgIC8vICAgIE91dHB1dDogVGhlIEpTT04gdGhhdCBpcyByZXR1cm5lZCBmcm9tIHRoZSByb3V0ZVxyXG4gICAgYXN5bmMgc2VuZFBvc3Qocm91dGUgPSBcIlwiLCBib2R5ID0ge30pIHtcclxuICAgICAgICBjb25zdCB1cmwgPSByb290ICsgcm91dGU7IC8vIENvbWJpbmUgdGhlIHJvb3QgVVJMIHdpdGggdGhlIHNwZWNpZmllZCByb3V0ZVxyXG4gICAgICAgIHZhciBzdGF0dXNDb2RlOyAvL2hvbGRzIHRoZSBzdGF0dXMgY29kZSBvZiB0aGUgcmVzcG9uc2VcclxuXHJcbiAgICAgICAgLy9pZiB0aGUgcmVxdWVzdCBpcyBub3QgZnJvbSBnZXRJbml0aWFsUHJvcHMsIG1lYW5pbmcgY29va2llQ3V0dGVyIGlzIGRlZmluZWQsIHJldHJlaXZlIHRoZSBjb29raWVcclxuICAgICAgICBpZiAodHlwZW9mIGNvb2tpZUN1dHRlci5nZXQgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gY29va2llQ3V0dGVyLmdldChcInRva2VuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiBcIm5vLXJlZmVycmVyXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSBVTkFVVEhPUklaRUQpIC8vdGhpcyBjaGVjayBoYXMgdG8gYmUgaGVyZSBmb3Igc29tZSByZWFzb24gwq9cXF8o44OEKV8vwq9cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09IE9LKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdHVzQ29kZSA9PSBVTkFVVEhPUklaRUQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihOT1RfTE9HR0VEX0lOX01TRywgZmFsc2UpOyAvL3VzZXIncyBzZXNzaW9uIGhhcyBleHBpcmVkXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcIm1lc3NhZ2VcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooanNvbltcIm1lc3NhZ2VcIl0pOyAvL2N1c3RvbSBlcnJvciBtZXNzYWdlIGZyb20gQVBJXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JqKEJBRF9SRVFVRVNUX01TRyk7IC8vYmFkIGlucHV0IHBhcmFtZXRlcnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHsgcmV0dXJuIG5ldyBFcnJvck9iaihTRVJWRVJfRVJST1JfTVNHKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VuZEZpbGUocm91dGUgPSBcIlwiLCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcm9vdCArIHJvdXRlOyAvLyBDb21iaW5lIHRoZSByb290IFVSTCB3aXRoIHRoZSBzcGVjaWZpZWQgcm91dGVcclxuICAgICAgICB2YXIgc3RhdHVzQ29kZTsgLy9ob2xkcyB0aGUgc3RhdHVzIGNvZGUgb2YgdGhlIHJlc3BvbnNlXHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT0gVU5BVVRIT1JJWkVEKSAvL3RoaXMgY2hlY2sgaGFzIHRvIGJlIGhlcmUgZm9yIHNvbWUgcmVhc29uIMKvXFxfKOODhClfL8KvXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PSBPSylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganNvbjtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXR1c0NvZGUgPT0gVU5BVVRIT1JJWkVEKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3JPYmooTk9UX0xPR0dFRF9JTl9NU0csIGZhbHNlKTsgLy91c2VyJ3Mgc2Vzc2lvbiBoYXMgZXhwaXJlZFxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJtZXNzYWdlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yT2JqKGpzb25bXCJtZXNzYWdlXCJdKTsgLy9jdXN0b20gZXJyb3IgbWVzc2FnZSBmcm9tIEFQSVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvck9iaihCQURfUkVRVUVTVF9NU0cpOyAvL2JhZCBpbnB1dCBwYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7IHJldHVybiBuZXcgRXJyb3JPYmooU0VSVkVSX0VSUk9SX01TRyk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tbG9naW4odXNlcmlkLCBwYXNzd29yZCktLS1cclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFBhc3N3b3JkXHJcbiAgICAvLyAgICBPdXRwdXQ6IFwiQWRtaW5cIiwgXCJJbnN0cnVjdG9yXCIsIFwiU3R1ZGVudC9UQVwiIG9yIGJvb2xlYW4gZm9yIGZhaWx1cmVcclxuICAgIGFzeW5jIGxvZ2luKHVzZXJpZCA9IFwiXCIsIHBhc3N3b3JkID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IHVzZXJpZDogdXNlcmlkLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9sb2dpblwiLCBib2R5KS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwidG9rZW5cIikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBleHBpcmVzID0gbmV3IERhdGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZXhwaXJlcy5zZXRIb3VycyhleHBpcmVzLmdldEhvdXJzKCkgKyAyNCk7IC8vZXhwaXJlcyBpbiAyNCBob3Vyc1xyXG4gICAgICAgICAgICAgICAgZXhwaXJlcyA9IGV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29va2llQ3V0dGVyLnNldChcInRva2VuXCIsIGpzb25bXCJ0b2tlblwiXSwgeyBleHBpcmVzIH0pOyAvL3NldCB0b2tlbiBjb29raWVcclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uW1wicm9sZVwiXTsgLy9yZXR1cm4gdGhlIHJvbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmxvZ2luKHVzZXJpZCwgcGFzc3dvcmQpLnRoZW4ocm9sZSA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgaXMgYWNjZXNzaWJsZSwgaXQgaXMgZWl0aGVyIHJvbGUgc3RyaW5nIG9yIGEgYm9vbGVhbiBpbmRpY2F0aW5nIGZhaWx1cmUqL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1sb2dvdXQodXNlcmlkKS0tLVxyXG4gICAgLy8gICAgSW5wdXQ6IE5vbmVcclxuICAgIC8vICAgIE91dHB1dDogTm9uZVxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGNvb2tpZUN1dHRlci5zZXQoXCJ0b2tlblwiLCBcIlwiLCB7IGV4cGlyZXM6IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSB9KTtcclxuICAgICAgICBjb29raWVDdXR0ZXIuc2V0KFwidXNlclwiLCBcIlwiLCB7IGV4cGlyZXM6IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBTZW1lc3RlciwgWWVhclxyXG4gICAgLy8gICAgT3V0cHV0OiBTZWN0aW9ucyBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgVXNlcklkLCBTZW1lc3RlciBhbmQgWWVhclxyXG4gICAgYXN5bmMgZ2V0Q291cnNlcyh1c2VyaWQgPSBcIlwiLCBzZW1lc3RlciA9IFwiXCIsIHllYXIgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHsgdXNlcmlkOiB1c2VyaWQsIHNlbWVzdGVyOiBzZW1lc3RlciwgeWVhcjogeWVhciB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9ieS11c2VyaWQtc2VtZXN0ZXIteWVhclwiLCBib2R5KTtcclxuXHJcbiAgICAgICAgLy9UbyB1c2UgdGhpcyBkYXRhIHlvdSBtdXN0IGRvIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgICAgLy9hcGkuZ2V0Q291cnNlcyh1c2VySWQsIHNlbWVzdGVyLCB5ZWFyKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEFsbENvdXJzZXModXNlcmlkLCBzZW1lc3RlciwgeWVhciktLS0gIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IFNlY3Rpb25zIGZvciB0aGUgY29ycmVzcG9uZGluZyBTZW1lc3RlciBhbmQgWWVhciBcclxuICAgIGFzeW5jIGdldEFsbENvdXJzZXModXNlcmlkID0gXCJcIiwgc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IFVzZXJpZDogdXNlcmlkLCBTZW1lc3Rlcjogc2VtZXN0ZXIsIFllYXI6IHllYXIgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvc2VjdGlvbnMvYnktc2VtZXN0ZXIteWVhclwiLCBib2R5KTtcclxuICAgICAgICBcclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRBbGxDb3Vyc2VzKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGNvdXJzZXMgaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzQnlTZW1lc3RlclllYXIoc2VtZXN0ZXIsIHllYXIpLS0tICAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogU2VtZXN0ZXIsIFllYXJcclxuICAgIC8vICAgIE91dHB1dDogQWxsIENvdXJzZXMgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHNlbWVzdGVyIGFuZCB5ZWFyIFxyXG4gICAgYXN5bmMgZ2V0Q291cnNlc0J5U2VtZXN0ZXJZZWFyKHNlbWVzdGVyID0gXCJcIiwgeWVhciA9IDApIFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IFxyXG4gICAgICAgICAgICBzZW1lc3Rlcjogc2VtZXN0ZXIsIFxyXG4gICAgICAgICAgICB5ZWFyOiB5ZWFyIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvZ2V0LWJ5LXllYXItc2VtZXN0ZXJcIiwgYm9keSk7XHJcbiAgICB9XHJcbiAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgIC8vYXBpLmdldENvdXJzZXNCeVNlbWVzdGVyWWVhcihzZW1lc3RlciwgeWVhcikudGhlbihjb3Vyc2VzID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIGRhdGEgaXMgYWNjZXNzaWJsZSwgY291cnNlcyBpcyBhbiBhcnJheSBvZiBKU09OIG9iamVjdHMqL30pXHJcblxyXG4gICAgLy8tLS1nZXRGb3Jtc0J5U2VjdGlvbih1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UsIHNlY3Rpb24pLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgQ291cnNlTnVtYmVyLCBTZWN0aW9uTnVtYmVyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEZvcm1zIGZvciB0aGUgY29ycmVzcG9uZGluZyBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBDb3Vyc2VOdW1iZXIsIGFuZCBTZWN0aW9uTnVtYmVyXHJcbiAgICBhc3luYyBnZXRGb3JtQnlTZWN0aW9uKHVzZXJpZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIFNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIEluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFllYXI6IHllYXIsICAgXHJcbiAgICAgICAgICAgICAgICBTZW1lc3Rlcjogc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBEZXBhcnRtZW50OiBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgQ291cnNlTnVtYmVyOiBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBTZWN0aW9uTnVtYmVyOiBzZWN0aW9uTnVtYmVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9ieS1zZWN0aW9uXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAvL1RvIHVzZSB0aGlzIGRhdGEgeW91IG11c3QgZG8gdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL2FwaS5nZXRGb3Jtc0J5U2VjdGlvbih1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UsIHNlY3Rpb24pLnRoZW4oZm9ybSA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGZvcm0gaXMgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzKi99KVxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0Rm9ybXNCeUNvdXJzZSh1c2VyaWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2UpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgRGVwYXJ0bWVudCwgQ291cnNlTnVtYmVyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEZvcm1zIGZvciB0aGUgY29ycmVzcG9uZGluZyBVc2VySWQsIFllYXIsIFNlbWVzdGVyLCBEZXBhcnRtZW50LCBhbmQgQ291cnNlTnVtYmVyXHJcbiAgICBhc3luYyBnZXRGb3Jtc0J5Q291cnNlKHVzZXJpZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICBDb29yZGluYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiB1c2VyaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgWWVhcjogeWVhcixcclxuICAgICAgICAgICAgICAgIFNlbWVzdGVyOiBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIERlcGFydG1lbnQ6IGRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBDb3Vyc2VOdW1iZXI6IGNvdXJzZU51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9ieS1jb3Vyc2VcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEZvcm1zQnlDb3Vyc2UodXNlcmlkLCB5ZWFyLCBzZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlKS50aGVuKGNvdXJzZXMgPT4gey8qaGVyZSBpcyB3aGVyZSB0aGUgZGF0YSBpcyBhY2Nlc3NpYmxlLCBjb3Vyc2VzIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEFsbEZvcm1zKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBVc2VySWQsIFNlbWVzdGVyLCBZZWFyXHJcbiAgICAvLyAgICBPdXRwdXQ6IEZvcm1zIGZvciB0aGUgY29ycmVzcG9uZGluZyBTZW1lc3RlciBhbmQgWWVhclxyXG4gICAgYXN5bmMgZ2V0QWxsRm9ybXModXNlcmlkID0gXCJcIiwgc2VtZXN0ZXIgPSBcIlwiLCB5ZWFyID0gMCkge1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0geyB1c2VyaWQ6IHVzZXJpZCwgc2VtZXN0ZXI6IHNlbWVzdGVyLCB5ZWFyOiB5ZWFyIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2Zvcm1zL2J5LXNlbWVzdGVyLXllYXJcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEFsbEZvcm1zKHVzZXJpZCwgc2VtZXN0ZXIsIHllYXIpLnRoZW4oY291cnNlcyA9PiB7LypoZXJlIGlzIHdoZXJlIHRoZSBkYXRhIGlzIGFjY2Vzc2libGUsIGZvcm1zIGlzIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0cyovfSlcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RGb3JtKHVzZXJJZCwgeWVhciwgc2VtZXN0ZXIsIGRlcGFydG1lbnQsIGNvdXJzZU51bWJlciwgc2VjdGlvbk51bWJlciwgaXNTZWN0aW9uQ29tcGxldGVkLCBvdXRjb21lcywgSVRHcmFkZXMsIENTR3JhZGVzLCBDRUdyYWRlcyktLS1cclxuICAgIC8vICAgIElucHV0OiBeXl4gICAod2lsbCBhbHNvIGhhdmUgcGRmIGhlcmUgbGF0ZXIgYXMgYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXIpXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgcG9zdEZvcm0odXNlcklkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiLCBpc1NlY3Rpb25Db21wbGV0ZWQgPSBmYWxzZSwgb3V0Y29tZXMgPSBbXSwgSVRHcmFkZXMgPSB7fSwgQ1NHcmFkZXMgPSB7fSwgQ0VHcmFkZXMgPSB7fSkge1xyXG4gICAgICAgIC8vIHRoZSBib2R5IHdpbGwgYWxzbyBpbmNsdWRlIGFueSBwZGYgdG8gcG9zdCBpbiB0aGUgZnV0dXJlXHJcblxyXG4gICAgICAgIC8vb3V0Y29tZXM6IGFuIGFycmF5IG9mIENvdXJzZV9PdXRjb21lcyBvYmplY3RzXHJcbiAgICAgICAgLy9Db3Vyc2VfT3V0Y29tZXMgY2xhc3M6XHJcbiAgICAgICAgLy9zdHJpbmcgb3V0Y29tZSwgaW50IG51bWJlck9mSVQsIGludCBudW1iZXJPZkNTLCBpbnQgbnVtYmVyT2ZDRSwgU3R1ZGVudFdvcmtzW10gc3R1ZGVudFdvcmtzXHJcbiAgICAgICAgLy9TdHVkZW50V29ya3MgY2xhc3M6XHJcbiAgICAgICAgLy9zdHJpbmcgc3R1ZGVudFdvcmssIHN0cmluZyBmaWxlVXBsb2FkZWQgKDwtLSB3aWxsIGltcGxlbWVudCBsYXRlcilcclxuXHJcbiAgICAgICAgLy9JVCwgQ1MsIENFIEdyYWRlcyBjbGFzczpcclxuICAgICAgICAvL2ludCBBLCBpbnQgQiwgaW50IEMsIGludCBELCBpbnQgRSwgaW50IEYsIGludCBXLCBpbnQgSSwgaW50IHRvdGFsU3R1ZGVudHNcclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcixcclxuICAgICAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VjdGlvbkNvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG91dGNvbWVzLFxyXG4gICAgICAgICAgICAgICAgSVRHcmFkZXMsXHJcbiAgICAgICAgICAgICAgICBDU0dyYWRlcyxcclxuICAgICAgICAgICAgICAgIENFR3JhZGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9wb3N0LWZvcm1cIiwgYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1wb3N0Q29tbWVudCh1c2VySWQsIHllYXIsIHNlbWVzdGVyLCBkZXBhcnRtZW50LCBjb3Vyc2VOdW1iZXIsIGNvb3JkaW5hdG9yQ29tbWVudCwgaXNDb3Vyc2VDb21wbGV0ZWQpLS0tXHJcbiAgICAvLyAgICBJbnB1dDogVXNlcklkLCBZZWFyLCBTZW1lc3RlciwgZGVwYXJ0bWVudCwgY291cnNlTnVtYmVyLCBjb29yZGluYXRvckNvbW1lbnQsIGlzQ291cnNlQ29tcGxldGVkXHJcbiAgICAvLyAgICBPdXRwdXQ6IFN1Y2Nlc3Mgb3IgRmFpbHVyZVxyXG4gICAgYXN5bmMgcG9zdENvbW1lbnQodXNlcklkID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIGNvb3JkaW5hdG9yQ29tbWVudCA9IFwiXCIsIGlzQ291cnNlQ29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBjb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgY291cnNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0b3JDb21tZW50LFxyXG4gICAgICAgICAgICAgICAgaXNDb3Vyc2VDb21wbGV0ZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2NvdXJzZXMvcG9zdC1jb21tZW50XCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0QmxhbmtGb3JtKHVzZXJpZCktLS1cclxuICAgIC8vICAgIElucHV0OiBTZWN0aW9uIG9iamVjdCBjb250YWluaW5nOiBDb3Vyc2VOdW1iZXIsIFNlY3Rpb25OdW1iZXIsIGFuZCBJZFxyXG4gICAgLy8gICAgT3V0cHV0OiBCbGFuayBGb3JtXHJcbiAgICAvL2FzeW5jIGdldEJsYW5rRm9ybSh1c2VyaWQpIHtcclxuICAgIGFzeW5jIGdldEJsYW5rRm9ybShjb3Vyc2VOdW1iZXIgPSBcIlwiLCBzZWN0aW9uTnVtYmVyID0gXCJcIiwgc2VjdGlvbklkID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7IFxyXG4gICAgICAgICAgICBTZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBDb3Vyc2VOdW1iZXI6IGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIFNlY3Rpb25OdW1iZXI6IHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBJZDogc2VjdGlvbklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mb3Jtcy9uZXctYmxhbmtcIiwgYm9keSk7XHJcblxyXG4gICAgICAgIC8vVG8gdXNlIHRoaXMgZGF0YSB5b3UgbXVzdCBkbyB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAgIC8vYXBpLmdldEJsYW5rRm9ybSh1c2VyaWQpLnRoZW4ocmVzdWx0ID0+IHsvKmhlcmUgaXMgd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBpcyBhY2Nlc3NpYmxlLCBpdCBpcyBhIEpTT04qL30pXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLWdldERlZmF1bHRZZWFyQW5kU2VtZXN0ZXIoKS0tXHJcbiAgICAvLyAgICBJbnB1dDogTm90aGluZ1xyXG4gICAgLy8gICAgT3V0cHV0OiBPYmplY3QgSW5jbHVkaW5nIEN1cnJlbnQgRGVmYXVsdCBZZWFyIGFuZCBTZW1lc3RlclxyXG4gICAgZ2V0RGVmYXVsdFllYXJBbmRTZW1lc3RlcigpIHtcclxuICAgICAgICB2YXIgdGV4dCA9ICd7IFwieWVhclwiOiAwLCcgKyAgICAgICAgIC8vIGNyZWF0ZSBzdHJpbmcgb2Ygb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAnIFwic2VtZXN0ZXJcIjogXCJcIiB9JztcclxuICAgICAgICB2YXIgUmVzdWx0T2JqID0gSlNPTi5wYXJzZSh0ZXh0KTsgICAvLyBjcmVhdGUgb2JqZWN0IGZyb20gdGhlIHN0cmluZ1xyXG5cclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7ICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZGF0ZVxyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERheSgpOyAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBkYXlcclxuICAgICAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxOyAgICAvLyBhZGQgb25lIHRvIG1vbnRoIChieSBkZWZhdWx0IEphbnVhcnkgPSAwKVxyXG4gICAgICAgIFJlc3VsdE9iai55ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOy8vIGdldCB0aGUgZnVsbCB5ZWFyIGZyb20gdGhlIGRhdGVcclxuICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjsgICAgICAgIC8vIGp1c3QgdG8gYmUgc2FmZVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldCB0aGUgRGVmYXVsdCBTZW1lc3RlciBCYXNlZCBvbiB0aGUgTW9udGhcclxuICAgICAgICBpZiAoKG1vbnRoID4gOCkgfHwgKG1vbnRoID09IDggJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcImZhbGxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKG1vbnRoID4gNSkgfHwgKG1vbnRoID09IDUgJiYgZGF5ID49IDE1KSkge1xyXG4gICAgICAgICAgICBSZXN1bHRPYmouc2VtZXN0ZXIgPSBcInN1bW1lclwiO1xyXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGlzIGlzIGp1c3QgYSBkZWZhdWx0IHNlbWVzdGVyLCBpdCBhbHdheXMgZGVmYXVsdHMgdG8gdGhlIGxvbmdlciBzZW1lc3RlcnNcclxuICAgICAgICAgICAgLy8gdGhpcyBpcyB3aHkgaXQgZG9lc24ndCBkZWZhdWx0IHRvIHNtYWxsZXIgc3VtbWVyIHNlbWVzdGVyc1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUmVzdWx0T2JqLnNlbWVzdGVyID0gXCJzcHJpbmdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBSZXN1bHRPYmo7ICAgIC8vIHJldHVybiBvYmplY3QgaW5jbHVkaW5nIHRoZSB5ZWFyIGFuZCBzZW1lc3RlclxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tYWRkU2VjdGlvbih1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGRlcGFydG1lbnQsIG51bWJlck9mU3R1ZGVudHMpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBeXl5cclxuICAgIC8vICAgIE91dHB1dDogU3VjY2VzcyBvciBGYWlsdXJlXHJcbiAgICBhc3luYyBhZGRTZWN0aW9uKHVzZXJpZCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgc2VjdGlvbk51bWJlciA9IFwiXCIsIGRlcGFydG1lbnQgPSBcIlwiLCBudW1iZXJPZlN0dWRlbnRzID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgaXNTZWN0aW9uQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mU3R1ZGVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9hZGQtc2VjdGlvblwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLWdldEZhY3VsdHlMaXN0KCktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IG5vbmVcclxuICAgIC8vICAgIE91dHB1dDogTGlzdCBvZiBpbnN0cnVjdG9ycywgY29vcmRpbmF0b3JzLCBhZGp1bmN0IGZhY3VsdGllcywgYW5kIHRlYWNoaW5nIGZlbGxvd3NcclxuICAgIGFzeW5jIGdldEZhY3VsdHlMaXN0KClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9mYWN1bHR5L2dldC1saXN0XCIsIHt9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1hZGRGYWN1bHR5TWVtYmVyKGZpcnN0TmFtZSwgbGFzdE5hbWUsIHVzZXJpZCwgcm9sZSktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IEZpcnN0IE5hbWUsIExhc3QgTmFtZSBhbmQgVXNlciBJZFxyXG4gICAgLy8gICAgT3V0cHV0OiBTdWNjZXNzIG9yIEZhaWx1cmVcclxuICAgIGFzeW5jIGFkZEZhY3VsdHlNZW1iZXIoZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCB1c2VySWQgPSBcIlwiLCBmYWN1bHR5VHlwZSA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZDogdXNlcklkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhY3VsdHlUeXBlOiBmYWN1bHR5VHlwZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRQb3N0KFwiL2ZhY3VsdHkvYWRkLW1lbWJlclwiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1nZXRDb3Vyc2VzQnlEZXBhcnRtZW50KGRlcGFydG1lbnQpLS0tIChBZG1pbilcclxuICAgIC8vICAgIElucHV0OiBkZXBhcnRtZW50XHJcbiAgICAvLyAgICBPdXRwdXQ6IGFycmF5IG9mIGNvdXJzZXNcclxuICAgIGFzeW5jIGdldENvdXJzZXNCeURlcGFydG1lbnQoZGVwYXJ0bWVudCA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2VzL2dldC1ieS1kZXBhcnRtZW50XCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLWFkZENvdXJzZSh1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRpc3BsYXlOYW1lLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogXl5eXHJcbiAgICAvLyAgICBPdXRwdXQ6IHN1Y2Nlc3Mgb3IgZmFpbHVyZVxyXG4gICAgYXN5bmMgYWRkQ291cnNlKHVzZXJpZCA9IFwiXCIsIGZpcnN0TmFtZSA9IFwiXCIsIGxhc3ROYW1lID0gXCJcIiwgeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGlzcGxheU5hbWUgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIENvb3JkaW5hdG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHVzZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9hZGQtY291cnNlXCIsIGJvZHkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLy0tLXJlbW92ZUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIHJlbW92ZUNvdXJzZSh5ZWFyID0gMCwgc2VtZXN0ZXIgPSBcIlwiLCBjb3Vyc2VOdW1iZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIilcclxuICAgIHtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICBDb3Vyc2U6IHtcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlcy9yZW1vdmUtY291cnNlXCIsIGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tZ2V0Q291cnNlT3V0Y29tZXNCeUNvdXJzZSh5ZWFyLCBzZW1lc3RlciwgY291cnNlTnVtYmVyLCBkZXBhcnRtZW50KS0tLSAoQWRtaW4pXHJcbiAgICAvLyAgICBJbnB1dDogeWVhciwgc2VtZXN0ZXIsIGNvdXJzZU51bWJlciwgZGVwYXJ0bWVudFxyXG4gICAgLy8gICAgT3V0cHV0OiBhcnJheSBvZiBjb3Vyc2Ugb3V0Y29tZXNcclxuICAgIGFzeW5jIGdldENvdXJzZU91dGNvbWVzQnlDb3Vyc2UoeWVhciA9IDAsIHNlbWVzdGVyID0gXCJcIiwgY291cnNlTnVtYmVyID0gXCJcIiwgZGVwYXJ0bWVudCA9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgQ291cnNlOiB7XHJcbiAgICAgICAgICAgICAgICB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZFBvc3QoXCIvY291cnNlLW91dGNvbWVzL2J5LWNvdXJzZVwiLCBib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLXBvc3RDb3Vyc2VPdXRjb21lcyhvdXRjb21lcyktLS0gKEFkbWluKVxyXG4gICAgLy8gICAgSW5wdXQ6IGFycmF5IG9mIG91dGNvbWUgb2JqZWN0cyAoc2VlIG5vdGVzIGJlbG93KVxyXG4gICAgLy8gICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RDb3Vyc2VPdXRjb21lcyhvdXRjb21lcyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIC8vYW4gb3V0Y29tZSBvYmplY3QgY29udGFpbnMgdGhlIGZvbGxvd2luZzpcclxuICAgICAgICAvL29yZGVyIChudW1iZXIpLCBvdXRjb21lIChzdHJpbmcpLCBtYXBwZWRTdHVkZW50T3V0Y29tZXMoYXJyYXkgb2YgbnVtYmVycylcclxuICAgICAgICAvL0V4YW1wbGU6XHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgLy8gICAgb3JkZXI6IDEsIG91dGNvbWU6IFwiQWNjb21wbGlzaCB0aGluZ3NcIiwgbWFwcGVkU3R1ZGVudE91dGNvbWVzOiBbMSwgMCwgMCwgMSwgMCwgMV1cclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgY291cnNlT3V0Y29tZXNMaXN0OiBvdXRjb21lc1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9jb3Vyc2Utb3V0Y29tZXMvcG9zdC1vdXRjb21lc1wiLCBib2R5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8tLS1wb3N0U2VjdGlvbih1c2VyaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIHNlY3Rpb25OdW1iZXIsIGRlcGFydG1lbnQsIG51bWJlck9mU3R1ZGVudHMpLS0tIChJbnN0cnVjdG9yKVxyXG4gICAgLy8gICBJbnB1dDogU2VjdGlvbiBvYmplY3RcclxuICAgIC8vICAgT3V0cHV0OiBzdWNjZXNzIG9yIGZhaWx1cmVcclxuICAgIGFzeW5jIHBvc3RTZWN0aW9uKHVzZXJpZCA9IFwiXCIsIHllYXIgPSAwLCBzZW1lc3RlciA9IFwiXCIsIGNvdXJzZU51bWJlciA9IFwiXCIsIHNlY3Rpb25OdW1iZXIgPSBcIlwiLCBkZXBhcnRtZW50ID0gXCJcIiwgZmlyc3ROYW1lID0gXCJcIiwgbGFzdE5hbWUgPSBcIlwiLCBudW1iZXJPZlN0dWRlbnRzID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIGluc3RydWN0b3I6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIGNvdXJzZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgaXNTZWN0aW9uQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIE51bWJlck9mU3R1ZGVudHNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kUG9zdChcIi9zZWN0aW9ucy9wb3N0LXNlY3Rpb25cIiwgYm9keSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIHVwbG9hZEFjY2Vzc0RiKGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCkpIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRGaWxlKCcvdXBsb2FkLWFjY2Vzcy1kYicsIGZvcm1EYXRhKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgdXBsb2FkRm9ybUF0dGFjaG1lbnQoZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKSwgb3V0Y29tZUlkID0gMCkgXHJcbiAgICB7XHJcbiAgICAgICAgLy9vdXRjb21lSWQgaXMgYSB1bmlxdWUgaWQgdGhhdCBpZGVudGlmaWVzIGEgY2VydGFpbiBvdXRjb21lIGluIHRoZSBEQlxyXG4gICAgICAgIC8vaXQgd2lsbCBjb21lIGZyb20gdGhlIERCIHdoZW4gdGhlIGluc3RydWN0b3IgZm9ybSBwYWdlIGlzIGxvYWRlZFxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm91dGNvbWVJZFwiLCBvdXRjb21lSWQpOyBcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kRmlsZSgnL3VwbG9hZC1mb3JtLWF0dGFjaG1lbnQnLCBmb3JtRGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEVycm9yT2JqIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSBcIlwiLCBpc0xvZ2dlZEluID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuZmFpbHVyZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBpc0xvZ2dlZEluO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyaWQsIEdyaWRJdGVtLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tIFwiLi4vaG9va3MvdXNlVG9nZ2xlXCI7XHJcbmltcG9ydCB7IHJlbW92ZUNvdXJzZSB9IGZyb20gXCIuLi9hcGkvQVBJSGVscGVyXCI7XHJcblxyXG5jb25zdCBDb3Vyc2VzID0gKHtcclxuICBtZW1iZXIsXHJcbiAgY29sb3IsXHJcbiAgeWVhcixcclxuICBzZW1lc3RlcixcclxuICBjb3Vyc2VOdW1iZXIsXHJcbiAgZGVwYXJ0bWVudCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoNSwgMWZyKVwiIGJnPXtjb2xvcn0gcGFkZGluZz1cIi41ZW1cIj5cclxuICAgICAgPD5cclxuICAgICAgICA8R3JpZEl0ZW0gY29sU3Bhbj17Mn0+XHJcbiAgICAgICAgICA8VGV4dCBhbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiMjBweFwiPlxyXG4gICAgICAgICAgICB7bWVtYmVyfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIGNvbFN0YXJ0PXs1fSBjb2xFbmQ9ezZ9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVtb3ZlQ291cnNlKHllYXIsIHNlbWVzdGVyLCBjb3Vyc2VOdW1iZXIsIGRlcGFydG1lbnQpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KFwiVGhpcyB3aWxsIHJlbW92ZSB5b3VyIGVudHJ5XCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VzO1xyXG4iLCJpbXBvcnQge1xyXG4gICAgQWNjb3JkaW9uLFxyXG4gICAgQWNjb3JkaW9uSXRlbSxcclxuICAgIEFjY29yZGlvbkJ1dHRvbixcclxuICAgIEFjY29yZGlvblBhbmVsLFxyXG4gICAgQWNjb3JkaW9uSWNvbixcclxuICAgIEJveFxyXG4gIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuY29uc3QgQWRtaW5NZW51ID0gKHtzZXRWaWV3fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24gYWxsb3dUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uQnV0dG9uIF9leHBhbmRlZD17eyBiZzogXCIjMzhBMTY5XCIsIGNvbG9yOiBcIndoaXRlXCIgfX0gZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCIgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJHRlJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhdGUgRnVsbCBSZXBvcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uQnV0dG9uIF9leHBhbmRlZD17eyBiZzogXCIjMzhBMTY5XCIsIGNvbG9yOiBcIndoaXRlXCIgfX0gZmxleD1cIjFcIiB0ZXh0QWxpZ249XCJsZWZ0XCIgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJHU1NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhdGUgU3R1ZGVudCBTdXJ2ZXlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBfZXhwYW5kZWQ9e3sgYmc6IFwiIzM4QTE2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaWV3KFwiR1NSXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRlIFNlY3Rpb24gUmVwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gX2V4cGFuZGVkPXt7IGJnOiBcIiMzOEExNjlcIiwgY29sb3I6IFwid2hpdGVcIiB9fSBmbGV4PVwiMVwiIHRleHRBbGlnbj1cImxlZnRcIiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIk9NXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0dWRlbnQgT3V0Y29tZSBNYXBwaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gIGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVwYXJ0bWVudCBDaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uUGFuZWwgcGI9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBhbGxvd1RvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gX2V4cGFuZGVkPXt7IGJnOiBcIiMzOEExNjlcIiwgY29sb3I6IFwid2hpdGVcIiB9fSBmbGV4PVwiMVwiIHRleHRBbGlnbj1cImxlZnRcIiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJDTlNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgTmV3IFNlbWVzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBfZXhwYW5kZWQ9e3sgYmc6IFwiIzM4QTE2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIkVBQ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgQXNzaWduZWQgQ291cnNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gX2V4cGFuZGVkPXt7IGJnOiBcIiMzOEExNjlcIiwgY29sb3I6IFwid2hpdGVcIiB9fSBmbGV4PVwiMVwiIHRleHRBbGlnbj1cImxlZnRcIiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJFRkxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IEZhY3VsdHkgTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gX2V4cGFuZGVkPXt7IGJnOiBcIiMzOEExNjlcIiwgY29sb3I6IFwid2hpdGVcIiB9fSBmbGV4PVwiMVwiIHRleHRBbGlnbj1cImxlZnRcIiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJFUExcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IFByb2dyYW0gTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gX2V4cGFuZGVkPXt7IGJnOiBcIiMzOEExNjlcIiwgY29sb3I6IFwid2hpdGVcIiB9fSBmbGV4PVwiMVwiIHRleHRBbGlnbj1cImxlZnRcIiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpZXcoXCJFQ0xcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IENvdXJzZSBMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBfZXhwYW5kZWQ9e3sgYmc6IFwiIzM4QTE2OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19IGZsZXg9XCIxXCIgdGV4dEFsaWduPVwibGVmdFwiIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlldyhcIkVDT1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgQ291cnNlIE91dGNvbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5NZW51OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluaywgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IEFQSSBmcm9tIFwiLi8uLi8uLi9hcGkvYXBpXCI7XHJcblxyXG5jb25zdCBBZG1pbk5hdmlnYXRpb24gPSAoeyBsaW5rLCB1c2VyIH0pID0+IHtcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBuZXcgQVBJKCkubG9nb3V0KCk7XHJcbiAgfTtcclxuXHJcbiAgc3dpdGNoIChsaW5rKSB7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGNvbG9yPVwiIzAwODUzRVwiXHJcbiAgICAgICAgICAgIGZvbnRTdHlsZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxNHB4XCJcclxuICAgICAgICAgICAgdG9wPVwiMTUlXCJcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIHBhZGRpbmc9XCIxMHB4XCJcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwiMjBweFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGZsb2F0PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL2FkbWluSG9tZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ291dH1cclxuICAgICAgICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjEwcHhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ24gT3V0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjEwcHhcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt1c2VyfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5OYXZpZ2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIFNlbGVjdCwgQnV0dG9uLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuY29uc3QgQ3JlYXRlTmV3U2VtZXN0ZXIgPSAoKSA9PiB7XHJcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciB5ID0gZC5nZXRGdWxsWWVhcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BcIikuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChcclxuICAgICAgd2luZG93LmNvbmZpcm0oXHJcbiAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gY3JlYXRlIHRoZSBzZWxlY3RlZCBuZXcgc2VtZXN0ZXI/XCJcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vUE9TVCB0aGUgbmV3IHNlbXNlc3RlciB0byB0aGUgZGJcclxuICAgICAgYWxlcnQoXCJOZXcgU2VtZXN0ZXIgQ3JlYXRlZCFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ0b3BcIj5cclxuICAgICAgPFZTdGFjayBpZD1cInRvcFwiIHc9XCI4MCVcIiBtPVwiMCBhdXRvXCIgbWFyZ2luQm90dG9tPVwiMTBlbVwiPlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCIgZm9udFdlaWdodD1cImJvbGRcIiBtdD1cIjFlbVwiPlxyXG4gICAgICAgICAgQ3JlYXRlIE5ldyBTZW1lc3RlclxyXG4gICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgU2VsZWN0IHRoZSB0ZXJtIGFuZCB5ZWFyIGZvciB0aGUgbmV3IHNlbWVzdGVyLlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBtdD1cIjFlbVwiXHJcbiAgICAgICAgICBpZD1cInRlcm1cIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgdGVybVwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b209XCIxZW1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTcHJpbmdcIj5TcHJpbmc8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdW1tZXJcIj5TdW1tZXI8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGYWxsXCI+RmFsbDwvb3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBtdD1cIjFlbVwiXHJcbiAgICAgICAgICBpZD1cInllYXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgeWVhclwiXHJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCIxZW1cIlxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tPVwiMmVtXCJcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Lyogc2hvdWxkIGJlIGZpbGxlZCB3aXRoIGEgbGlzdCBvZiB5ZWFycyBmcm9tIGRiICovfVxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInllYXIxXCI+e3l9PC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieWVhcjJcIj57eSArIDF9PC9vcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudENvbG9yPVwiZ3JlZW5cIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm19PlxyXG4gICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZU5ld1NlbWVzdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dCxcclxuICBEaXZpZGVyLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgSWNvbkJ1dHRvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXRTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlSW5wdXRTdGF0ZVwiO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gXCIuL0F1dG9jb21wbGV0ZS5qc1wiO1xyXG5cclxuaW1wb3J0IGZha2VEYXRhIGZyb20gXCIuLi8uLi8uLi9mYWtlLWRhdGEvZmFjdWx0eS5qc29uXCI7XHJcblxyXG5jb25zdCBmYWN1bHR5ID0gZmFrZURhdGEuZmFjdWx0eTtcclxuXHJcbmNvbnN0IEFzc2lnbkNvdXJzZUlucHV0ID0gKHsgY291cnNlIH0pID0+IHtcclxuICBjb25zdCBbc2VjdGlvbiwgc2V0U2VjdGlvbiwgcmVzZXRdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VjdGlvbnMsIHNldFNlY3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgYWRkU2VjdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlY3Rpb25zKFtcclxuICAgICAgLi4uc2VjdGlvbnMsXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogc2VjdGlvbnMubGVuZ3RoLFxyXG4gICAgICAgIG5hbWU6IHNlY3Rpb24sXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIHJlc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlU2VjdGlvbiA9IChpZCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNlY3Rpb25zKHNlY3Rpb25zLmZpbHRlcigoc2VjdCkgPT4gc2VjdC5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJTZWN0aW9uID0gc2VjdGlvbnMubWFwKChzZWN0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzZWN0Lm5hbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJveCBkaXNwbGF5PVwiaW5saW5lXCIgZmxleERpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tZmllbGRcIj5cclxuICAgICAgICAgIDxMaXN0SXRlbSBkaXNwbGF5PVwiaW5saW5lXCIgZmxleERpcmVjdGlvbj1cInJvd1wiIGNvbG9yPVwiXCI+XHJcbiAgICAgICAgICAgIHtzZWN0Lm5hbWV9XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdHJ1Y3Rvci1maWVsZFwiPlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZSBzdWdnZXN0aW9ucz17ZmFjdWx0eX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYXNoLWZpZWxkXCI+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0PVwiMnJlbVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNXJlbVwiXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIi4yZW1cIlxyXG4gICAgICAgICAgICBpY29uPVwiZGVsZXRlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmNvbmZpcm0oXHJcbiAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSBzZWN0aW9uIFwiICtcclxuICAgICAgICAgICAgICAgICAgICBzZWN0Lm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiP1wiXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVTZWN0aW9uKHNlY3QuaWQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2UtaW5wdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1maWVsZFwiPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgIG10PVwiNnB4XCJcclxuICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbWFyZ2luTGVmdD1cIjJyZW1cIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjhyZW1cIlxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b209XCIuMmVtXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvdXJzZX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCI4LjVyZW1cIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjhyZW1cIlxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b209XCIuMmVtXCJcclxuICAgICAgICAgID48L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBkaXNwbGF5PVwiaW5saW5lXCI+PC9UZXh0PlxyXG4gICAgICAgICAgPEF1dG9jb21wbGV0ZSBzdWdnZXN0aW9ucz17ZmFjdWx0eX0gZGlzcGxheT1cImlubGluZVwiIC8+XHJcbiAgICAgICAgICA8TGlzdCBkaXNwbGF5PVwiaW5saW5lXCIgZmxleERpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwibGVmdFwiPlxyXG4gICAgICAgICAgICB7cmVuZGVyU2VjdGlvbn1cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXthZGRTZWN0aW9ufT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIG10PVwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBhIG5ldyBzZWN0aW9uIG51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZsdXNoZWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2VjdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VjdGlvbn1cclxuICAgICAgICAgICAgICB3PVwiMTNlbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb29yZGluYXRvci1maWVsZFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcclxuICAgICAgICBpc0FjdGl2ZT1cImZhbHNlXCJcclxuICAgICAgICBtdD1cIjEuOGVtXCJcclxuICAgICAgICBtbD1cIi4yZW1cIlxyXG4gICAgICAgIHZhcmlhbnRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgIGljb249XCJhZGRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2FkZFNlY3Rpb259XHJcbiAgICAgID48L0ljb25CdXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1pbnB1dFwiPjwvZGl2PlxyXG4gICAgICA8RGl2aWRlciBtYj1cIjJyZW1cIiBtdD1cIjJyZW1cIiBib3JkZXJDb2xvcj1cImJsYWNrXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFzc2lnbkNvdXJzZUlucHV0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG4vL2F1dG9jb21wbGV0ZSBmdW5jdGlvbmFsaXR5IGZyb20gaHR0cHM6Ly93d3cuZGlnaXRhbG9jZWFuLmNvbS9jb21tdW5pdHkvdHV0b3JpYWxzL3JlYWN0LXJlYWN0LWF1dG9jb21wbGV0ZVxyXG5cclxuY2xhc3MgQXV0b2NvbXBsZXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgc3VnZ2VzdGlvbnM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KSxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3VnZ2VzdGlvbnM6IFtdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLy8gVGhlIGFjdGl2ZSBzZWxlY3Rpb24ncyBpbmRleFxyXG4gICAgICBhY3RpdmVTdWdnZXN0aW9uOiAwLFxyXG4gICAgICAvLyBUaGUgc3VnZ2VzdGlvbnMgdGhhdCBtYXRjaCB0aGUgdXNlcidzIGlucHV0XHJcbiAgICAgIGZpbHRlcmVkU3VnZ2VzdGlvbnM6IFtdLFxyXG4gICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0aGUgc3VnZ2VzdGlvbiBsaXN0IGlzIHNob3duXHJcbiAgICAgIHNob3dTdWdnZXN0aW9uczogZmFsc2UsXHJcbiAgICAgIC8vIFdoYXQgdGhlIHVzZXIgaGFzIGVudGVyZWRcclxuICAgICAgdXNlcklucHV0OiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIEV2ZW50IGZpcmVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGlzIGNoYW5nZWRcclxuICBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHN1Z2dlc3Rpb25zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdXNlcklucHV0ID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIC8vIEZpbHRlciBvdXIgc3VnZ2VzdGlvbnMgdGhhdCBkb24ndCBjb250YWluIHRoZSB1c2VyJ3MgaW5wdXRcclxuICAgIGNvbnN0IGZpbHRlcmVkU3VnZ2VzdGlvbnMgPSBzdWdnZXN0aW9ucy5maWx0ZXIoXHJcbiAgICAgIChzdWdnZXN0aW9uKSA9PlxyXG4gICAgICAgIHN1Z2dlc3Rpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHVzZXJJbnB1dC50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgdXNlciBpbnB1dCBhbmQgZmlsdGVyZWQgc3VnZ2VzdGlvbnMsIHJlc2V0IHRoZSBhY3RpdmVcclxuICAgIC8vIHN1Z2dlc3Rpb24gYW5kIG1ha2Ugc3VyZSB0aGUgc3VnZ2VzdGlvbnMgYXJlIHNob3duXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYWN0aXZlU3VnZ2VzdGlvbjogMCxcclxuICAgICAgZmlsdGVyZWRTdWdnZXN0aW9ucyxcclxuICAgICAgc2hvd1N1Z2dlc3Rpb25zOiB0cnVlLFxyXG4gICAgICB1c2VySW5wdXQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEV2ZW50IGZpcmVkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGEgc3VnZ2VzdGlvblxyXG4gIG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgLy8gVXBkYXRlIHRoZSB1c2VyIGlucHV0IGFuZCByZXNldCB0aGUgcmVzdCBvZiB0aGUgc3RhdGVcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhY3RpdmVTdWdnZXN0aW9uOiAwLFxyXG4gICAgICBmaWx0ZXJlZFN1Z2dlc3Rpb25zOiBbXSxcclxuICAgICAgc2hvd1N1Z2dlc3Rpb25zOiBmYWxzZSxcclxuICAgICAgdXNlcklucHV0OiBlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRXZlbnQgZmlyZWQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIGEga2V5IGRvd25cclxuICBvbktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBhY3RpdmVTdWdnZXN0aW9uLCBmaWx0ZXJlZFN1Z2dlc3Rpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIC8vIFVzZXIgcHJlc3NlZCB0aGUgZW50ZXIga2V5LCB1cGRhdGUgdGhlIGlucHV0IGFuZCBjbG9zZSB0aGVcclxuICAgIC8vIHN1Z2dlc3Rpb25zXHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBhY3RpdmVTdWdnZXN0aW9uOiAwLFxyXG4gICAgICAgIHNob3dTdWdnZXN0aW9uczogZmFsc2UsXHJcbiAgICAgICAgdXNlcklucHV0OiBmaWx0ZXJlZFN1Z2dlc3Rpb25zW2FjdGl2ZVN1Z2dlc3Rpb25dLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIFVzZXIgcHJlc3NlZCB0aGUgdXAgYXJyb3csIGRlY3JlbWVudCB0aGUgaW5kZXhcclxuICAgIGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcclxuICAgICAgaWYgKGFjdGl2ZVN1Z2dlc3Rpb24gPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVTdWdnZXN0aW9uOiBhY3RpdmVTdWdnZXN0aW9uIC0gMSB9KTtcclxuICAgIH1cclxuICAgIC8vIFVzZXIgcHJlc3NlZCB0aGUgZG93biBhcnJvdywgaW5jcmVtZW50IHRoZSBpbmRleFxyXG4gICAgZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICBpZiAoYWN0aXZlU3VnZ2VzdGlvbiAtIDEgPT09IGZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlU3VnZ2VzdGlvbjogYWN0aXZlU3VnZ2VzdGlvbiArIDEgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBvbkNoYW5nZSxcclxuICAgICAgb25DbGljayxcclxuICAgICAgb25LZXlEb3duLFxyXG4gICAgICBzdGF0ZToge1xyXG4gICAgICAgIGFjdGl2ZVN1Z2dlc3Rpb24sXHJcbiAgICAgICAgZmlsdGVyZWRTdWdnZXN0aW9ucyxcclxuICAgICAgICBzaG93U3VnZ2VzdGlvbnMsXHJcbiAgICAgICAgdXNlcklucHV0LFxyXG4gICAgICB9LFxyXG4gICAgfSA9IHRoaXM7XHJcblxyXG4gICAgbGV0IHN1Z2dlc3Rpb25zTGlzdENvbXBvbmVudDtcclxuXHJcbiAgICBpZiAoc2hvd1N1Z2dlc3Rpb25zICYmIHVzZXJJbnB1dCkge1xyXG4gICAgICBpZiAoZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICBzdWdnZXN0aW9uc0xpc3RDb21wb25lbnQgPSAoXHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJzdWdnZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRTdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gRmxhZyB0aGUgYWN0aXZlIHN1Z2dlc3Rpb24gd2l0aCBhIGNsYXNzXHJcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmVTdWdnZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcInN1Z2dlc3Rpb24tYWN0aXZlXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e3N1Z2dlc3Rpb259IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYWN1bHR5LWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVW5hc3NpZ25lZFwiXHJcbiAgICAgICAgICBib3JkZXI9XCIxcHggc29saWQgIzk5OVwiXHJcbiAgICAgICAgICBwYWRkaW5nPVwiMC41cmVtXCJcclxuICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCIyMjVweFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c3VnZ2VzdGlvbnNMaXN0Q29tcG9uZW50fVxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dG9jb21wbGV0ZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRGl2aWRlciwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBBc3NpZ25Db3Vyc2VJbnB1dCBmcm9tIFwiLi9Bc3NpZ25Db3Vyc2VJbnB1dFwiO1xyXG5pbXBvcnQgZmFrZURhdGEgZnJvbSBcIi4uLy4uLy4uL2Zha2UtZGF0YS9jb3Vyc2UuanNvblwiO1xyXG5cclxuY29uc3QgRWRpdENvdXJzZUFzc2lnbm1lbnRzID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcFwiKS5zY3JvbGxJbnRvVmlldygpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9QT1NUIHRoZSBjb3Vyc2UgYXNzaWdubWVudHMgdG8gdGhlIGRiXHJcbiAgICBhbGVydChcIkNvdXJzZSBBc3NpZ25tZW50cyBTYXZlZFwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb3Vyc2VzID0gZmFrZURhdGEuY291cnNlcztcclxuICBjb25zdCByZW5kZXJDb3Vyc2VzID0gY291cnNlcy5tYXAoKGNvdXJzZSwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gPEFzc2lnbkNvdXJzZUlucHV0IGNvdXJzZT17Y291cnNlLmNvZGV9IGtleT17aWR4fSAvPjtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJ0b3BcIj5cclxuICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiIG1hcmdpblRvcD1cIjFlbVwiIG1hcmdpbkJvdHRvbT1cIjFlbVwiPlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCIgZm9udFdlaWdodD1cImJvbGRcIiBtdD1cIjFlbVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICBFZGl0IEFzc2lnbmVkIENvdXJzZXNcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IGJvcmRlcldpZHRoPVwiMnB4XCIgcm91bmRlZD1cImxnXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG09XCIxZW1cIiBwPVwiM2VtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2UtaW5wdXRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlXCI+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIjJyZW1cIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiOHJlbVwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwiLjJlbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb3Vyc2VcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwiMTByZW1cIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTVyZW1cIlxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIi4yZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29vcmRpbmF0b3JcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwiMnJlbVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMHJlbVwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwiLjJlbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZWN0aW9uXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIjJyZW1cIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTVyZW1cIlxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIi4yZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSW5zdHJ1Y3RvclxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29vcmRpbmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0cnVjdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYXNoXCI+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCIycmVtXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjVyZW1cIlxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIi4yZW1cIlxyXG4gICAgICAgICAgICA+PC9UZXh0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPERpdmlkZXIgbWI9XCIycmVtXCIgYm9yZGVyQ29sb3I9XCJibGFja1wiIC8+XHJcbiAgICAgICAge3JlbmRlckNvdXJzZXN9XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJncmVlblwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17aGFuZGxlU2F2ZX0+XHJcbiAgICAgICAgICBTYXZlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRWRpdENvdXJzZUFzc2lnbm1lbnRzO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBTZWxlY3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGV4LCBGb3JtTGFiZWwgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHVzZUlucHV0U3RhdGUgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUlucHV0U3RhdGVcIjtcclxuXHJcbmNvbnN0IEFkZENvdXJzZSA9ICh7IGFkZE5ld0NvdXJzZSB9KSA9PiB7XHJcbiAgY29uc3QgeWVhcnMgPSBbMjAyMCwgMjAyMSwgMjAyMl07XHJcbiAgY29uc3Qgc2VtZXN0ZXJzID0gW1wiU3ByaW5nXCIsIFwiU3VtbWVyXCIsIFwiRmFsbFwiLCBcIldpbnRlclwiXTtcclxuICBjb25zdCBkZXBhcnRtZW50cyA9IFtcIkNTQ0VcIiwgXCJFRU5HXCIsIFwiSVRcIl07XHJcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VyaWQsIHNldElEXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3llYXJWYWx1ZSwgc2V0WWVhcl0gPSB1c2VTdGF0ZSh5ZWFyc1swXSk7XHJcbiAgY29uc3QgW3NlbWVzdGVyLCBzZXRTZW1lc3Rlcl0gPSB1c2VTdGF0ZShzZW1lc3RlcnNbMF0pO1xyXG4gIGNvbnN0IFtjb3Vyc2VOdW1iZXIsIHNldENvdXJzZU51bWJlcl0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkaXNwbGF5TmFtZSwgc2V0RGlzcGxheU5hbWVdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVwYXJ0bWVudCwgc2V0RGVwYXJ0bWVudF0gPSB1c2VTdGF0ZShkZXBhcnRtZW50c1swXSk7XHJcblxyXG4gIGNvbnN0IFtpc0VkZGl0aW5nLCB0b2dnbGVFZGRpdGluZ10gPSB1c2VUb2dnbGUoKTtcclxuXHJcbiAgY29uc3QgYWRkQ291cnNlID0gKCkgPT4ge1xyXG4gICAgYWRkTmV3Q291cnNlKHtcclxuICAgICAgaWQ6IHVzZXJpZCxcclxuICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgeWVhcjogeWVhclZhbHVlLFxyXG4gICAgICBzZW1lc3Rlcjogc2VtZXN0ZXIsXHJcbiAgICAgIGNvdXJzZU51bWJlcjogY291cnNlTnVtYmVyLFxyXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXHJcbiAgICAgIGRlcGFydG1lbnQ6IGRlcGFydG1lbnQsXHJcbiAgICB9KTtcclxuICAgIHRvZ2dsZUVkZGl0aW5nKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpc0VkZGl0aW5nID8gKFxyXG4gICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPkxhc3QgTmFtZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHc9XCI1MCVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRMYXN0TmFtZX1cclxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5GaXJzdCBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdz1cIjUwJVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRGaXJzdE5hbWV9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtTGFiZWw+SUQ8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dCB3PVwiNTAlXCIgdmFsdWU9e3VzZXJpZH0gb25DaGFuZ2U9e3NldElEfSB2YXJpYW50PVwiZmlsbGVkXCIgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPlllYXI8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFllYXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3llYXJWYWx1ZX1cclxuICAgICAgICAgICAgdz1cIjUwJVwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIG1yPVwiMWVtXCIgdmFsdWU9e3llYXJzWzBdfT5cclxuICAgICAgICAgICAgICAyMDIwXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIG1yPVwiMWVtXCIgdmFsdWU9e3llYXJzWzFdfT5cclxuICAgICAgICAgICAgICAyMDIxXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIG1yPVwiMWVtXCIgdmFsdWU9e3llYXJzWzJdfT5cclxuICAgICAgICAgICAgICAyMDIyXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPlNlbWVzdGVyPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTZW1lc3RlcihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VtZXN0ZXJ9XHJcbiAgICAgICAgICAgIHc9XCI1MCVcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXtzZW1lc3RlcnNbMF19PlxyXG4gICAgICAgICAgICAgIFNwcmluZ1xyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXtzZW1lc3RlcnNbMV19PlxyXG4gICAgICAgICAgICAgIFN1bW1lclxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXtzZW1lc3RlcnNbMl19PlxyXG4gICAgICAgICAgICAgIEZhbGxcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gbXI9XCIxZW1cIiB2YWx1ZT17c2VtZXN0ZXJzWzNdfT5cclxuICAgICAgICAgICAgICBXaW50ZXJcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDxGb3JtTGFiZWw+Q291cnNlIE51bWJlcjwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHc9XCI1MCVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y291cnNlTnVtYmVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0Q291cnNlTnVtYmVyfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgID48L0lucHV0PlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5EaXNwbGF5IE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB3PVwiNTAlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Rpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0RGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPkRlcGFydG1lbnQ8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldERlcGFydG1lbnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e2RlcGFydG1lbnR9XHJcbiAgICAgICAgICAgIHc9XCI1MCVcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXtkZXBhcnRtZW50c1swXX0+XHJcbiAgICAgICAgICAgICAgQ1NDRVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXtkZXBhcnRtZW50c1sxXX0+XHJcbiAgICAgICAgICAgICAgRUVOR1xyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXtkZXBhcnRtZW50c1syXX0+XHJcbiAgICAgICAgICAgICAgSVRcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgbXQ9XCIxZW1cIiBvbkNsaWNrPXthZGRDb3Vyc2V9PlxyXG4gICAgICAgICAgICBBZGQgTmV3IENvdXJzZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgbXQ9XCIyZW1cIiBvbkNsaWNrPXt0b2dnbGVFZGRpdGluZ30+XHJcbiAgICAgICAgICAgIEFkZCBDb3Vyc2VcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFkZENvdXJzZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgVGV4dCxcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdCxcclxuICBJbnB1dCxcclxuICBMaXN0SXRlbSxcclxuICBGbGV4LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgdXNlSW5wdXRTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlSW5wdXRTdGF0ZVwiO1xyXG5pbXBvcnQgZmFrZURhdGEgZnJvbSBcIi4uLy4uLy4uL2Zha2UtZGF0YS9jb3Vyc2UuanNvblwiO1xyXG5pbXBvcnQgQ291cnNlcyBmcm9tIFwiLi4vLi4vQ291cnNlc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldENvdXJzZXNCeURlcGFydG1lbnQsXHJcbiAgYWRkQ291cnNlLFxyXG4gIHJlbW92ZUNvdXJzZSxcclxufSBmcm9tIFwiLi4vLi4vLi4vYXBpL0FQSUhlbHBlclwiO1xyXG5pbXBvcnQgQWRkQ291cnNlIGZyb20gXCIuL0FkZENvdXJzZVwiO1xyXG5jb25zdCBFZGl0Q291cnNlTGlzdCA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BcIikuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICB9KTtcclxuICAvLyBTdGF0ZSBvZiB0aGUgY291cnNlcyBhbmQgZnVuY3Rpb24gdG8gc2V0IHRoZSBuZXcgc3RhdGUuXHJcbiAgY29uc3QgW3RoZUNvdXJzZSwgc2V0TmV3Q291cnNlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBjb3Vyc2VzOiBbXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW25ld0NvdXJzZSwgYWRkTmV3Q291cnNlXSA9IHVzZVN0YXRlKHtcclxuICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgIHVzZXJpZDogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgeWVhcjogMCxcclxuICAgIHNlbWVzdGVyOiBcIlwiLFxyXG4gICAgY291cnNlTnVtYmVyOiBcIlwiLFxyXG4gICAgZGlzcGxheU5hbWU6IFwiXCIsXHJcbiAgICBkZXBhcnRtZW50OiBcIlwiLFxyXG4gIH0pO1xyXG4gIC8vIFN0YXRlIG9mIHRoZSBkZXBhcnRtZW50IGNob2ljZXMgYW5kIGZ1bmN0aW9uIHRvIHNldCB0aGUgbmV3IHN0YXRlLlxyXG4gIGNvbnN0IFt0aGVEZXBhcnRtZW50LCBzZXROZXdEZXBhcnRtZW50XSA9IHVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiBcIkNTQ0VcIixcclxuICB9KTtcclxuXHJcbiAgLy8gR3JhYnMgdGhlIGNvdXJzZXMgYnkgZGVwYXJ0bWVudCBmcm9tIHRoZSBiYWNrLWVuZC5cclxuICBjb25zdCBnZXROZXdDb3Vyc2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Q291cnNlTGlzdCA9IGF3YWl0IGdldENvdXJzZXNCeURlcGFydG1lbnQodGhlRGVwYXJ0bWVudC52YWx1ZSk7XHJcbiAgICBzZXROZXdDb3Vyc2VzKHtcclxuICAgICAgLi4udGhlQ291cnNlLFxyXG4gICAgICBjb3Vyc2VzOiBuZXdDb3Vyc2VMaXN0LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGVDb3Vyc2UuY291cnNlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKFxyXG4gICAgICB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBzdWJtaXQgdGhlc2UgY2hhbmdlcz9cIilcclxuICAgICkge1xyXG4gICAgICAvL1BPU1QgdGhlIGNvdXJzZSBsaXN0IGNoYW5nZSB0byB0aGUgZGIgaGVyZVxyXG4gICAgICBhbGVydChcIkNvdXJzZSBMaXN0IFVwZGF0ZWQhXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gU2V0cyB0aGUgZGVwYXJ0bWVudCBzdGF0ZSB0byB0aGUgdmFsdWUgb2YgdGhlIGRlcGFydG1lbnQgc2VsZWN0ZWQuXHJcbiAgY29uc3QgZHJvcERvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TmV3RGVwYXJ0bWVudCh7XHJcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBjb3Vyc2VMaXN0ID0gZmFrZURhdGEuY291cnNlcztcclxuICAvLyB2YXIgY3NlQ291cnNlcyA9IFtdO1xyXG4gIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgY291cnNlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgdmFyIG9iaiA9IHt9O1xyXG5cclxuICAvLyAgIG9ialtcIm5hbWVcIl0gPSBjb3Vyc2VMaXN0W2ldLmNvZGUgKyBcIiBcIiArIGNvdXJzZUxpc3RbaV0ubmFtZTtcclxuICAvLyAgIG9ialtcImlkXCJdID0gaTtcclxuICAvLyAgIGNzZUNvdXJzZXMucHVzaChvYmopO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlLCByZXNldF0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKGNzZUNvdXJzZXMpO1xyXG5cclxuICAvLyBjb25zdCBhZGRDb3Vyc2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICBzZXRDb3Vyc2VzKFtcclxuICAvLyAgICAgLi4uY291cnNlcyxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIGlkOiBjb3Vyc2VzLmxlbmd0aCxcclxuICAvLyAgICAgICBuYW1lOiBjb3Vyc2UsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICBdKTtcclxuICAvLyAgIHJlc2V0KCk7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgcmVtb3ZlQ291cnNlID0gKGlkKSA9PiB7XHJcbiAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgc2V0Q291cnNlcyhjb3Vyc2VzLmZpbHRlcigoY291cnMpID0+IGNvdXJzLmlkICE9PSBpZCkpO1xyXG4gIC8vIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXROZXdDb3Vyc2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5ld0NvdXJzZS5sYXN0TmFtZSAhPT0gXCJcIikge1xyXG4gICAgICBhZGRDb3Vyc2UoXHJcbiAgICAgICAgbmV3Q291cnNlLnVzZXJpZCxcclxuICAgICAgICBuZXdDb3Vyc2UuZmlyc3ROYW1lLFxyXG4gICAgICAgIG5ld0NvdXJzZS5sYXN0TmFtZSxcclxuICAgICAgICBuZXdDb3Vyc2UueWVhcixcclxuICAgICAgICBuZXdDb3Vyc2Uuc2VtZXN0ZXIsXHJcbiAgICAgICAgbmV3Q291cnNlLmNvdXJzZU51bWJlcixcclxuICAgICAgICBuZXdDb3Vyc2UuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgbmV3Q291cnNlLmRlcGFydG1lbnRcclxuICAgICAgKTtcclxuICAgICAgYWxlcnQoXCJOZXcgQ291cnNlIEFkZGVkXCIpO1xyXG4gICAgICBnZXROZXdDb3Vyc2VzKCk7XHJcbiAgICB9XHJcbiAgfSwgW25ld0NvdXJzZV0pO1xyXG4gIGNvbnNvbGUubG9nKG5ld0NvdXJzZSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckNvdXJzZSA9IHRoZUNvdXJzZS5jb3Vyc2VzLm1hcCgoY291cnMsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLy8gPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiY291cnNlcy1saXN0XCI+XHJcbiAgICAgIC8vICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT1cImNvdXJzZS1saXN0LWNhcmRcIj57Y291cnMubmFtZX08L0xpc3RJdGVtPlxyXG4gICAgICAvLyAgICAgICAgIDxJY29uQnV0dG9uIG1sPVwiMWVtXCIgaWNvbj1cImRlbGV0ZVwiIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlICcrY291cnMubmFtZSsnPycpKXtcclxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZW1vdmVDb3Vyc2UoY291cnMuaWQpXHJcbiAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgIC8vICAgICAgICAgfX0+PC9JY29uQnV0dG9uPlxyXG4gICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgIC8vIDwvQm94PlxyXG4gICAgICA8TGlzdEl0ZW0gZGlzcGxheT1cImlubGluZVwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxDb3Vyc2VzXHJcbiAgICAgICAgICBtZW1iZXI9e1xyXG4gICAgICAgICAgICBjb3Vycy5kZXBhcnRtZW50ICtcclxuICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICBjb3Vycy5jb3Vyc2VOdW1iZXIgK1xyXG4gICAgICAgICAgICBcIlxcblwiICtcclxuICAgICAgICAgICAgY291cnMuZGlzcGxheU5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbG9yPXtpZHggJSAyID09IDAgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuMTAwXCJ9XHJcbiAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgIHllYXI9e2NvdXJzLnllYXJ9XHJcbiAgICAgICAgICBzZW1lc3Rlcj17Y291cnMuc2VtZXN0ZXJ9XHJcbiAgICAgICAgICBjb3Vyc2VOdW1iZXI9e2NvdXJzLmNvdXJzZU51bWJlcn1cclxuICAgICAgICAgIGRlcGFydG1lbnQ9e2NvdXJzLmRlcGFydG1lbnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidG9wXCI+XHJcbiAgICAgIDxWU3RhY2sgaWQ9XCJ0b3BcIiB3PVwiOTAlXCIgbT1cIjAgYXV0b1wiPlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCIgZm9udFdlaWdodD1cImJvbGRcIiBtdD1cIjFlbVwiPlxyXG4gICAgICAgICAgRWRpdCBDb3Vyc2UgTGlzdFxyXG4gICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgPEJveCBtPVwiMWVtXCIgcD1cIjNlbVwiPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgIG10PVwiMWVtXCJcclxuICAgICAgICAgICAgbWI9XCIxZW1cIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2VsZWN0IERlcGFydG1lbnRcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBtcj1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgYWxpZ25TZWxmPVwiY1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI4MCVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtkcm9wRG93bkhhbmRsZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NDRVwiPkNvbXB1dGVyIFNjaWVuY2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRUVOR1wiPkVuZ2luZWVyaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIklUXCI+SW5mb3JtYXRpb24gVGVjaG5vbG9neTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Z2V0TmV3Q291cnNlc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgbXQ9XCIxZW1cIlxyXG4gICAgICAgICAgICBtYj1cIjFlbVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwibGdcIlxyXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvdXJzZXNcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxMaXN0IHc9XCI4MCVcIj57cmVuZGVyQ291cnNlfTwvTGlzdD5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvdXJzZS1saXN0LWlucHV0XCI+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbXQ9XCIxcmVtXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbmV3IGNvdXJzZSAoaS5lLiBDU0NFIDM1MzAgQ29tcHV0ZXIgTmV0d29ya3MpXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiZmx1c2hlZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIC8vIHZhbHVlPXtjb3Vyc2V9XHJcbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e3NldENvdXJzZX1cclxuICAgICAgICAgICAgICB3PVwiMzBlbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXHJcbiAgICAgICAgICAgIGlzQWN0aXZlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBtdD1cIjEuNWVtXCJcclxuICAgICAgICAgICAgbWw9XCIxZW1cIlxyXG4gICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgIGljb249XCJhZGRcIlxyXG4gICAgICAgICAgICAvLyBvbkNsaWNrPXthZGRDb3Vyc2V9XHJcbiAgICAgICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9CdXR0b24+ICovfVxyXG5cclxuICAgICAgICAgIDxBZGRDb3Vyc2UgYWRkTmV3Q291cnNlPXthZGROZXdDb3Vyc2V9PjwvQWRkQ291cnNlPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRDb3Vyc2VMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIFNlbGVjdCwgQnV0dG9uLCBUZXh0LCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgT3V0Y29tZUxpc3QgZnJvbSBcIi4uL0VkaXRDb3Vyc2VPdXRjb21lcy9FZGl0T3V0Y29tZUxpc3RcIjtcclxuaW1wb3J0IGZha2VEYXRhIGZyb20gXCIuLi8uLi8uLi9mYWtlLWRhdGEvY291cnNlLmpzb25cIjtcclxuXHJcbmNvbnN0IGNvdXJzZXMgPSBmYWtlRGF0YS5jb3Vyc2VzO1xyXG5cclxuY29uc29sZS5sb2coY291cnNlcyk7XHJcblxyXG5jb25zdCBFZGl0Q291cnNlT3V0Y29tZXMgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wXCIpLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtvcHRpb24sIHNldE9wdGlvbl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGhhbmRsZVNldE9wdGlvbiA9IChlKSA9PiB7XHJcbiAgICBzZXRPcHRpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKG9wdGlvbik7XHJcblxyXG4gIGNvbnN0IHJlbmRlck9wdGlvbnMgPSBjb3Vyc2VzLm1hcCgoY291cnNlLCBpZHgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxvcHRpb24gdmFsdWU9e2NvdXJzZS5jb2RlfSBrZXk9e2lkeH0+XHJcbiAgICAgICAge2NvdXJzZS5jb2RlfSB7Y291cnNlLm5hbWV9XHJcbiAgICAgIDwvb3B0aW9uPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRDb3Vyc2UgPSBjb3Vyc2VzLmZpbHRlcigoY291cnNlKSA9PiBjb3Vyc2UuY29kZSA9PSBvcHRpb24pWzBdO1xyXG5cclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZENvdXJzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VlN0YWNrIGlkPVwidG9wXCIgdz1cIjgwJVwiIG09XCIwIGF1dG9cIiBtYXJnaW5Cb3R0b209XCIxMGVtXCI+XHJcbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiIG10PVwiMWVtXCI+XHJcbiAgICAgICAgICBFZGl0IENvdXJzZSBPdXRjb21lc1xyXG4gICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbXQ9XCIxZW1cIlxyXG4gICAgICAgICAgdz1cIjcwJVwiXHJcbiAgICAgICAgICBpZD1cImNvdXJzZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBjb3Vyc2VcIlxyXG4gICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2V0T3B0aW9ufVxyXG4gICAgICAgICAgdmFsdWU9e29wdGlvbn1cclxuICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIjJlbVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIHRoaXMgc2hvdWxkIGJlIGZpbGxlZCB3aXRoIGEgbGlzdCBvZiBjb3Vyc2VzIGZyb20gZGIgKi99XHJcbiAgICAgICAgICB7cmVuZGVyT3B0aW9uc31cclxuICAgICAgICA8L1NlbGVjdD5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtvcHRpb24gPyA8T3V0Y29tZUxpc3QgcHJvcD17c2VsZWN0ZWRDb3Vyc2V9IC8+IDogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRDb3Vyc2VPdXRjb21lcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdCxcclxuICBJbnB1dCxcclxuICBMaXN0SXRlbSxcclxuICBWU3RhY2ssXHJcbiAgVGV4dCxcclxuICBHcmlkLFxyXG4gIEdyaWRJdGVtLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB1c2VJbnB1dFN0YXRlIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VJbnB1dFN0YXRlXCI7XHJcbmltcG9ydCBmYWtlRGF0YSBmcm9tIFwiLi4vLi4vLi4vZmFrZS1kYXRhL291dGNvbWVzLmpzb25cIjtcclxuXHJcbmNvbnN0IEVkaXRPdXRjb21lTGlzdCA9ICh7IHByb3AgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3ApO1xyXG4gIHZhciBzaG9ydE5hbWUgPSBwcm9wLmNvZGU7XHJcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3AubmFtZTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKFxyXG4gICAgICB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBzdWJtaXQgdGhlc2UgY2hhbmdlcz9cIilcclxuICAgICkge1xyXG4gICAgICAvL1BPU1QgdGhlIHByb2dyYW0gbGlzdCBjaGFuZ2UgdG8gdGhlIGRiIGhlcmVcclxuICAgICAgYWxlcnQoXHJcbiAgICAgICAgXCJDb3Vyc2Ugb3V0Y29tZXMgZm9yICdcIiArIHNob3J0TmFtZSArIFwiIFwiICsgY2xhc3NOYW1lICsgXCInIHVwZGF0ZWQhXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvdXRjb21lTGlzdCA9IGZha2VEYXRhLm91dGNvbWVzO1xyXG4gIHZhciBjb3Vyc2VPdXRjb21lcyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3V0Y29tZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzaG9ydE5hbWUgPT0gb3V0Y29tZUxpc3RbaV0uY29kZSkge1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG91dGNvbWVMaXN0W2ldLmNvdXJzZU91dGNvbWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgIG9ialtcIm5hbWVcIl0gPSBvdXRjb21lTGlzdFtpXS5jb3Vyc2VPdXRjb21lc1tqXTtcclxuICAgICAgICBvYmpbXCJpZFwiXSA9IGo7XHJcbiAgICAgICAgY291cnNlT3V0Y29tZXMucHVzaChvYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbb3V0Y29tZSwgc2V0T3V0Y29tZSwgcmVzZXRdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3V0Y29tZXMsIHNldE91dGNvbWVzXSA9IHVzZVN0YXRlKGNvdXJzZU91dGNvbWVzKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0T3V0Y29tZXMoY291cnNlT3V0Y29tZXMpO1xyXG4gIH0sIFtwcm9wXSk7XHJcblxyXG4gIGNvbnN0IGFkZE91dGNvbWUgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRPdXRjb21lcyhbXHJcbiAgICAgIC4uLm91dGNvbWVzLFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IG91dGNvbWVzLmxlbmd0aCxcclxuICAgICAgICBuYW1lOiBvdXRjb21lLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgICByZXNldCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZU91dGNvbWUgPSAoaWQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRPdXRjb21lcyhvdXRjb21lcy5maWx0ZXIoKG91dGMpID0+IG91dGMuaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyT3V0Y29tZSA9IG91dGNvbWVzLm1hcCgob3V0YywgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoNSwgMWZyKVwiXHJcbiAgICAgICAgICBwYWRkaW5nPVwiLjVlbVwiXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezR9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0Y29tZS1saXN0LWNhcmRcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiI2VkZjJmN1wiXHJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9XCIwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCJcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nPVwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjgyJVwiXHJcbiAgICAgICAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7b3V0Yy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDxHcmlkSXRlbSBjb2xTdGFydD17NX0gY29sRW5kPXs2fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBhbGVydChcIlRoaXMgd2lsbCByZW1vdmUgeW91ciBlbnRyeVwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxWU3RhY2sgaWQ9XCJ0b3BcIiB3PVwiMTAwJVwiIG09XCIwIGF1dG9cIiBtYXJnaW5Cb3R0b209XCIzZW1cIj5cclxuICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPVwiMjBweFwiIGRpc3BsYXk9XCJpbmxpbmVcIj5cclxuICAgICAgICAgIEVkaXQgQ291cnNlIE91dGNvbWUgTGlzdCBmb3Ige3Nob3J0TmFtZX17XCIgXCJ9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0Y29tZS1saXN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPExpc3Q+e3JlbmRlck91dGNvbWV9PC9MaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0Y29tZS1saXN0LWlucHV0XCI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkT3V0Y29tZX0+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG10PVwiMXJlbVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbnRlciBhIG5ldyBjb3Vyc2Ugb3V0Y29tZVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImZsdXNoZWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17b3V0Y29tZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0T3V0Y29tZX1cclxuICAgICAgICAgICAgICB3PVwiMzBlbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXHJcbiAgICAgICAgICAgIGlzQWN0aXZlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICBtdD1cIjEuNWVtXCJcclxuICAgICAgICAgICAgbWw9XCIxZW1cIlxyXG4gICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgIGljb249XCJhZGRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXthZGRPdXRjb21lfVxyXG4gICAgICAgICAgPjwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRWRpdE91dGNvbWVMaXN0O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZsZXgsXHJcbiAgU3BhY2VyLFxyXG4gIEZvcm1MYWJlbCxcclxuICBCdXR0b24sXHJcbiAgSW5wdXQsXHJcbiAgU2VsZWN0LFxyXG4gIEJveCxcclxuICBUZXh0LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xyXG5pbXBvcnQgdXNlSW5wdXRTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlSW5wdXRTdGF0ZVwiO1xyXG5cclxuY29uc3QgQWRkRmFjdWx0eU1lbWJlciA9ICh7IHNldE5ld0ZhY3VsdHkgfSkgPT4ge1xyXG4gIGNvbnN0IGZhY3VsdHlUeXBlcyA9IFtcImZ1bGxUaW1lXCIsIFwiYWRqdW5jdHNcIiwgXCJmZWxsb3dzXCJdO1xyXG5cclxuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZUlucHV0U3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0lELCBzZXRJRF0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaXNFZGRpdGluZywgdG9nZ2xlRWRkaXRpbmddID0gdXNlVG9nZ2xlKCk7XHJcblxyXG4gIGNvbnN0IGFkZEZhY3VsdHkgPSAoKSA9PiB7XHJcbiAgICBzZXROZXdGYWN1bHR5KHtcclxuICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgdW50SUQ6IElELFxyXG4gICAgICB0eXBlOiB0eXBlLFxyXG4gICAgfSk7XHJcbiAgICB0b2dnbGVFZGRpdGluZygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNFZGRpdGluZyA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5GYWN1bHR5IFR5cGU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgc2V0VHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgLy9hbGVydCh0eXBlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFsdWU9e3R5cGV9XHJcbiAgICAgICAgICAgIHc9XCI1MCVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIG1yPVwiMWVtXCIgdmFsdWU9e2ZhY3VsdHlUeXBlc1swXX0+XHJcbiAgICAgICAgICAgICAgSW50cnVjdG9yL0Nvb3JkaW5hdG9yXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIG1yPVwiMWVtXCIgdmFsdWU9e2ZhY3VsdHlUeXBlc1sxXX0+XHJcbiAgICAgICAgICAgICAgQWRqdW5jdFxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiBtcj1cIjFlbVwiIHZhbHVlPXtmYWN1bHR5VHlwZXNbMl19PlxyXG4gICAgICAgICAgICAgIFRlYWNoaW5nIEZlbGxvd1xyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgICAgIDxGb3JtTGFiZWw+TGFzdCBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdz1cIjUwJVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldExhc3ROYW1lfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybUxhYmVsPkZpcnN0IE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB3PVwiNTAlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldEZpcnN0TmFtZX1cclxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm1MYWJlbD5JRDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPElucHV0IHc9XCI1MCVcIiB2YWx1ZT17SUR9IG9uQ2hhbmdlPXtzZXRJRH0gdmFyaWFudD1cImZpbGxlZFwiIC8+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvbiB2IGFyaWFudENvbG9yPVwiZ3JlZW5cIiBtdD1cIjFlbVwiIG9uQ2xpY2s9e2FkZEZhY3VsdHl9PlxyXG4gICAgICAgICAgICBBZGQgTmV3IEZhY3VsdHlcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHc9XCIxMDAlcHhcIlxyXG4gICAgICAgICAgICBoPVwiMTBcIlxyXG4gICAgICAgICAgICBiZz1cIlwiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgbWFyZ2luVG9wPVwiMWVtXCJcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwiMWVtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUVkZGl0aW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBZGQgRmFjdWx0eSBNZW1iZXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgICAgPEJveCB3PVwiMTAwJXB4XCIgaD1cIjEwXCIgYmc9XCJcIiAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEZhY3VsdHlNZW1iZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFRleHQsXHJcbiAgQnV0dG9uLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdCxcclxuICBJbnB1dCxcclxuICBMaXN0SXRlbSxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHVzZUlucHV0U3RhdGUgZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUlucHV0U3RhdGVcIjtcclxuaW1wb3J0IEZhY3VsdHlNZW1iZXIgZnJvbSBcIi4uLy4uL2FkbWluLWNvbXBvbmVudHMvRmFjdWx0eU1lbWJlclwiO1xyXG5pbXBvcnQgc29ydEJ5TGFzdE5hbWUgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3NvcnRCeUxhc3ROYW1lXCI7XHJcbmltcG9ydCB7IGdldEZhY3VsdHlMaXN0LCBhZGRGYWN1bHR5TWVtYmVyIH0gZnJvbSBcIi4uLy4uLy4uL2FwaS9BUElIZWxwZXJcIjtcclxuaW1wb3J0IEFkZEZhY3VsdHlNZW1iZXIgZnJvbSBcIi4vQWRkRmFjdWx0eU1lbWJlclwiO1xyXG5cclxuY29uc3QgRWRpdEZhY3VsdHlMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmYWN1bHR5LCBzZXRGYWN1bHR5XSA9IHVzZVN0YXRlKHtcclxuICAgIGZ1bGxUaW1lOiBbXSxcclxuICAgIGFkanVuY3RzOiBbXSxcclxuICAgIGZlbGxvd3M6IFtdLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbbmV3RmFjdWx0eSwgc2V0TmV3RmFjdWx0eV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgIHVudElEOiBcIlwiLFxyXG4gICAgdHlwZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0RmFjdWx0eSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGZhY3VsdHlMaXN0ID0gYXdhaXQgZ2V0RmFjdWx0eUxpc3QoKTtcclxuICAgIGNvbnNvbGUubG9nKGZhY3VsdHlMaXN0KTtcclxuICAgIHNldEZhY3VsdHkoe1xyXG4gICAgICAuLi5mYWN1bHR5LFxyXG4gICAgICBmdWxsVGltZTogZmFjdWx0eUxpc3QuZnVsbFRpbWUsXHJcbiAgICAgIGFkanVuY3RzOiBmYWN1bHR5TGlzdC5hZGp1bmN0cyxcclxuICAgICAgZmVsbG93czogZmFjdWx0eUxpc3QuZmVsbG93cyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRGYWN1bHR5KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5ld0ZhY3VsdHkubGFzdE5hbWUgIT09IFwiXCIpIHtcclxuICAgICAgYWRkRmFjdWx0eU1lbWJlcihcclxuICAgICAgICBuZXdGYWN1bHR5Lmxhc3ROYW1lLFxyXG4gICAgICAgIG5ld0ZhY3VsdHkuZmlyc3ROYW1lLFxyXG4gICAgICAgIG5ld0ZhY3VsdHkudW50SUQsXHJcbiAgICAgICAgbmV3RmFjdWx0eS50eXBlXHJcbiAgICAgICk7XHJcbiAgICAgIGFsZXJ0KFwiTmV3IEZhY3VsdHkgQWRkZWRcIik7XHJcbiAgICAgIGdldEZhY3VsdHkoKTtcclxuICAgIH1cclxuICB9LCBbbmV3RmFjdWx0eV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIHN1Ym1pdCB0aGVzZSBjaGFuZ2VzP1wiKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vUE9TVCB0aGUgZmFjdWx0eSBsaXN0IGNoYW5nZSB0byB0aGUgZGIgaGVyZVxyXG4gICAgICBhbGVydChcIkZhY3VsdHkgTGlzdCBVcGRhdGVkIVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBmYWN1bHR5TGlzdCA9IGZha2VEYXRhLmZhY3VsdHk7XHJcbiAgLy8gY29uc3QgYWRqdW5jdExpc3QgPSBmYWtlRGF0YS5hZGp1bmN0RmFjdWx0eTtcclxuICAvLyBjb25zdCBmZWxsb3dzTGlzdCA9IGZha2VEYXRhLnRlYWNoaW5nRmVsbG93cztcclxuICAvLyBzb3J0QnlMYXN0TmFtZShmYWN1bHR5TGlzdCk7XHJcbiAgLy8gc29ydEJ5TGFzdE5hbWUoYWRqdW5jdExpc3QpO1xyXG4gIC8vIHNvcnRCeUxhc3ROYW1lKGZlbGxvd3NMaXN0KTtcclxuICAvLyB2YXIgY3NlRmFjdWx0eSA9IFtdO1xyXG4gIC8vIGZvciAodmFyIGkgPSAwOyBpPCBmYWN1bHR5TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgICB2YXIgb2JqID0ge307XHJcblxyXG4gIC8vICAgICBvYmpbJ25hbWUnXSA9IGZhY3VsdHlMaXN0W2ldO1xyXG4gIC8vICAgICBvYmpbJ2lkJ10gPSBpO1xyXG4gIC8vICAgICBjc2VGYWN1bHR5LnB1c2gob2JqKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHZhciBhZGp1bmN0ID0gW107XHJcbiAgLy8gZm9yICh2YXIgaSA9IDA7IGk8IGFkanVuY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICAgIHZhciBvYmogPSB7fTtcclxuXHJcbiAgLy8gICAgIG9ialsnbmFtZSddID0gZmFjdWx0eUxpc3RbaV07XHJcbiAgLy8gICAgIG9ialsnaWQnXSA9IGk7XHJcbiAgLy8gICAgIGFkanVuY3QucHVzaChvYmopO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdmFyIGZlbGxvd3MgPSBbXTtcclxuICAvLyBmb3IgKHZhciBpID0gMDsgaTwgZmVsbG93c0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgICAgdmFyIG9iaiA9IHt9O1xyXG5cclxuICAvLyAgICAgb2JqWyduYW1lJ10gPSBmYWN1bHR5TGlzdFtpXTtcclxuICAvLyAgICAgb2JqWydpZCddID0gaTtcclxuICAvLyAgICAgZmVsbG93cy5wdXNoKG9iaik7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCBbZmFjdWx0eSwgc2V0RmFjdWx0eSwgcmVzZXRdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICAvLyBjb25zdCBbZmFjdWx0eU1lbWJlcnMsIHNldEZhY3VsdHlNZW1iZXJzXSA9IHVzZVN0YXRlKGNzZUZhY3VsdHkpO1xyXG4gIC8vIGNvbnN0IFthZGp1bmN0TWVtYmVycywgc2V0QWRqdW5jdE1lbWJlcnNdID0gdXNlU3RhdGUoYWRqdW5jdCk7XHJcbiAgLy8gY29uc3QgW2ZlbGxvd01lbWJlcnMsIHNldEZlbGxvd01lbWJlcnNdID0gdXNlU3RhdGUoZmVsbG93cyk7XHJcblxyXG4gIC8vIGNvbnN0IGFkZEZhY3VsdHkgPSBldmVudCA9PiB7XHJcbiAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICAgIHNldEZhY3VsdHlNZW1iZXJzKFtcclxuICAvLyAgICAgICAgIC4uLmZhY3VsdHlNZW1iZXJzLFxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICAgIGlkOiBmYWN1bHR5TWVtYmVycy5sZW5ndGgsXHJcbiAgLy8gICAgICAgICAgICAgbmFtZTogZmFjdWx0eSxcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgXSk7XHJcbiAgLy8gICAgIHJlc2V0KCk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBjb25zdCByZW1vdmVGYWN1bHR5ID0gKGlkKSA9PiB7XHJcbiAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICAgIHNldEZhY3VsdHlNZW1iZXJzKGZhY3VsdHlNZW1iZXJzLmZpbHRlcihmYWMgPT4gZmFjLmlkICE9PSBpZCkpO1xyXG4gIC8vIH1cclxuXHJcbiAgLypcclxuICBjb25zdCBlZGl0RmFjdWx0eSA9IChmaXJzdCwgbGFzdCwgZmFjSUQsIHR5cGUpID0+IHtcclxuICAgIHNldEZhY3VsdHkoXHJcbiAgICAgIHsuLi5mYWN1bHR5LCBmYWN1bHR5W3R5cGVdOiBtYXAoKGZtKSA9PlxyXG4gICAgICAgICh7Zm0uaWQgPT09IGZhY0lEID8geyAuLi5mbSwgbGFzdE5hbWU6IGxhc3QsIGZpcnN0TmFtZTogZmlyc3QgfX0pKX1cclxuICAgICAgKTtcclxuICB9O1xyXG4gICovXHJcblxyXG4gIGNvbnN0IHJlbmRlckZhY3VsdHkgPSBmYWN1bHR5LmZ1bGxUaW1lLm1hcCgoZmFjLCBpZHgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaXN0SXRlbSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxGYWN1bHR5TWVtYmVyXHJcbiAgICAgICAgICBtZW1iZXI9e2ZhYy5maXJzdE5hbWUgKyBcIiBcIiArIGZhYy5sYXN0TmFtZX1cclxuICAgICAgICAgIGlkPXtmYWMuaWR9XHJcbiAgICAgICAgICAvL2VkaXQ9e2VkaXRGYWN1bHR5fVxyXG4gICAgICAgICAgY29sb3I9e2lkeCAlIDIgPT0gMCA/IFwiZ3JheS4zMDBcIiA6IFwiZ3JheS4xMDBcIn1cclxuICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZW5kZXJBZGp1bmN0ID0gZmFjdWx0eS5hZGp1bmN0cy5tYXAoKGZhYywgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgPEZhY3VsdHlNZW1iZXJcclxuICAgICAgICAgIG1lbWJlcj17ZmFjLmZpcnN0TmFtZSArIFwiIFwiICsgZmFjLmxhc3ROYW1lfVxyXG4gICAgICAgICAgaWQ9e2ZhYy5pZH1cclxuICAgICAgICAgIGNvbG9yPXtpZHggJSAyID09IDAgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuMTAwXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckZlbGxvd3MgPSBmYWN1bHR5LmZlbGxvd3MubWFwKChmYWMsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgIDxGYWN1bHR5TWVtYmVyXHJcbiAgICAgICAgICBtZW1iZXI9e2ZhYy5maXJzdE5hbWUgKyBcIiBcIiArIGZhYy5sYXN0TmFtZX1cclxuICAgICAgICAgIGlkPXtmYWMuaWR9XHJcbiAgICAgICAgICBjb2xvcj17aWR4ICUgMiA9PSAwID8gXCJncmF5LjMwMFwiIDogXCJncmF5LjEwMFwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInRvcFwiPlxyXG4gICAgICA8VlN0YWNrIGlkPVwidG9wXCIgdz1cIjgwJVwiIG09XCIwIGF1dG9cIiBtYXJnaW5Cb3R0b209XCIxMGVtXCI+XHJcbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiIG10PVwiMWVtXCI+XHJcbiAgICAgICAgICBFZGl0IEZhY3VsdHkgTGlzdFxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIG10PVwiMWVtXCIgbWI9XCIxZW1cIiBmb250U2l6ZT1cImxnXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIEluc3RydWN0b3JzL0Nvb3JkaW5hdG9yc1xyXG4gICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIG1hcmdpbkxlZnQ9XCI1ZW1cIlxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICB3PVwiODAlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cmVuZGVyRmFjdWx0eX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBtdD1cIjFlbVwiIG1iPVwiMWVtXCIgZm9udFNpemU9XCJsZ1wiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICBBZGp1bmN0IEZhY3VsdHlcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIG1hcmdpbkxlZnQ9XCI1ZW1cIlxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICB3PVwiODAlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cmVuZGVyQWRqdW5jdH1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBtdD1cIjFlbVwiIG1iPVwiMWVtXCIgZm9udFNpemU9XCJsZ1wiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICBUZWFjaGluZyBGZWxsb3dzXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICBtYXJnaW5MZWZ0PVwiNWVtXCJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgdz1cIjgwJVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3JlbmRlckZlbGxvd3N9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDxBZGRGYWN1bHR5TWVtYmVyIHNldE5ld0ZhY3VsdHk9e3NldE5ld0ZhY3VsdHl9IC8+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmFjLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2FkZEZhY3VsdHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBtdD1cIjFyZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGEgbmV3IGZhY3VsdHkgbWVtYmVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmbHVzaGVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmYWN1bHR5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEZhY3VsdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc9JzE0ZW0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdD1cIjEuNWVtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbD1cIjFlbVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwiZ3JlZW5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJhZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkRmFjdWx0eX0+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnRDb2xvcj1cImdyZWVuXCIgdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRWRpdEZhY3VsdHlMaXN0O1xyXG4iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB1c2VJbnB1dFN0YXRlIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VJbnB1dFN0YXRlXCI7XHJcblxyXG5jb25zdCBFZGl0RmFjdWx0eU1lbWJlciA9ICh7IGVkaXQsIGlkIH0pID0+IHtcclxuICBjb25zdCBbbmV3TmFtZSwgc2V0TmV3TmFtZV0gPSB1c2VJbnB1dFN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBlZGl0TmFtZSA9ICgpID0+IHtcclxuICAgIGVkaXQobmV3TmFtZSwgaWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZWRpdCgpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICB2YWx1ZT17bmV3TmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17c2V0TmV3TmFtZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZWRpdE5hbWUobmV3TmFtZSwgaWQpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRGYWN1bHR5TWVtYmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBTZWxlY3QsXHJcbiAgQnV0dG9uLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdCxcclxuICBJbnB1dCxcclxuICBUZXh0LFxyXG4gIExpc3RJdGVtLFxyXG4gIFZTdGFjayxcclxuICBHcmlkLFxyXG4gIEdyaWRJdGVtLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB1c2VJbnB1dFN0YXRlIGZyb20gXCIuLi8uLi8uLi9ob29rcy91c2VJbnB1dFN0YXRlXCI7XHJcbmltcG9ydCBmYWtlRGF0YSBmcm9tIFwiLi4vLi4vLi4vZmFrZS1kYXRhL3Byb2dyYW1zLmpzb25cIjtcclxuaW1wb3J0IFByb2dyYW1zIGZyb20gXCIuLi9Qcm9ncmFtc1wiO1xyXG5cclxuY29uc3QgRWRpdFByb2dyYW1MaXN0ID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcFwiKS5zY3JvbGxJbnRvVmlldygpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIHN1Ym1pdCB0aGVzZSBjaGFuZ2VzP1wiKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vUE9TVCB0aGUgcHJvZ3JhbSBsaXN0IGNoYW5nZSB0byB0aGUgZGIgaGVyZVxyXG4gICAgICBhbGVydChcIlByb2dyYW0gTGlzdCBVcGRhdGVkIVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9ncmFtTGlzdCA9IGZha2VEYXRhLnByb2dyYW1zO1xyXG4gIHZhciBjc2VQcm9ncmFtcyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvZ3JhbUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBvYmogPSB7fTtcclxuXHJcbiAgICBvYmpbXCJuYW1lXCJdID0gcHJvZ3JhbUxpc3RbaV07XHJcbiAgICBvYmpbXCJpZFwiXSA9IGk7XHJcbiAgICBjc2VQcm9ncmFtcy5wdXNoKG9iaik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbcHJvZ3JhbSwgc2V0UHJvZ3JhbSwgcmVzZXRdID0gdXNlSW5wdXRTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJvZ3JhbXMsIHNldFByb2dyYW1zXSA9IHVzZVN0YXRlKGNzZVByb2dyYW1zKTtcclxuXHJcbiAgY29uc3QgYWRkUHJvZ3JhbSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFByb2dyYW1zKFtcclxuICAgICAgLi4ucHJvZ3JhbXMsXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogcHJvZ3JhbXMubGVuZ3RoLFxyXG4gICAgICAgIG5hbWU6IHByb2dyYW0sXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuICAgIHJlc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJvZ3JhbSA9IChpZCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFByb2dyYW1zKHByb2dyYW1zLmZpbHRlcigocHJvZykgPT4gcHJvZy5pZCAhPT0gaWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJQcm9ncmFtID0gY3NlUHJvZ3JhbXMubWFwKChwcm9nLCBpZHgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaXN0SXRlbSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxQcm9ncmFtcyAgICAgIFxyXG4gICAgICAgICAgcHJvZ3JhbT17cHJvZy5uYW1lLm5hbWV9XHJcbiAgICAgICAgICBjb2xvcj17aWR4ICUyID09IDAgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuMTAwXCJ9XHJcbiAgICAgICAgICBrZXk9e2lkeH0+XHJcbiAgICBcclxuICAgICAgICA8L1Byb2dyYW1zPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICBcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwidG9wXCI+XHJcbiAgICAgIDxWU3RhY2sgaWQ9XCJ0b3BcIiB3PVwiODAlXCIgbT1cIjAgYXV0b1wiIG1hcmdpbkJvdHRvbT1cIjVlbVwiPlxyXG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwiMnhsXCIgZm9udFdlaWdodD1cImJvbGRcIiBtdD1cIjFlbVwiPlxyXG4gICAgICAgICAgRWRpdCBQcm9ncmFtIExpc3RcclxuICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgbXQ9XCIxZW1cIiBtYj1cIjFlbVwiIGZvbnRTaXplPVwibGdcIj5cclxuICAgICAgICAgIFByb2dyYW1zXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxMaXN0IHc9XCI5MCVcIj57cmVuZGVyUHJvZ3JhbX08L0xpc3Q+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2FkZFByb2dyYW19PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG10PVwiMXJlbVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgYSBuZXcgcHJvZ3JhbVwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmbHVzaGVkXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvZ3JhbX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldFByb2dyYW19XHJcbiAgICAgICAgICAgIHc9XCIxNGVtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwibGlua1wiXHJcbiAgICAgICAgICBpc0FjdGl2ZT1cImZhbHNlXCJcclxuICAgICAgICAgIG10PVwiMS41ZW1cIlxyXG4gICAgICAgICAgbWw9XCIxZW1cIlxyXG4gICAgICAgICAgdmFyaWFudENvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgIGljb249XCJhZGRcIlxyXG4gICAgICAgICAgb25DbGljaz17YWRkUHJvZ3JhbX1cclxuICAgICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudENvbG9yPVwiZ3JlZW5cIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZ3JhbUxpc3Q7XHJcbiIsImltcG9ydCB7IEdyaWQsIEdyaWRJdGVtLCBUZXh0LCBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gXCIuLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcclxuaW1wb3J0IEVkaXRGYWN1bHR5TWVtYmVyIGZyb20gXCIuLi9hZG1pbi1jb21wb25lbnRzL0VkaXRGYWN1bHR5TGlzdC9FZGl0RmFjdWx0eU1lbWJlclwiO1xyXG5cclxuY29uc3QgRmFjdWx0eU1lbWJlciA9ICh7IG1lbWJlciwgaWQsIGNvbG9yLCBlZGl0IH0pID0+IHtcclxuICBjb25zdCBbaXNFZGl0aW5nLCB0b2dnbGVdID0gdXNlVG9nZ2xlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCgyLCAxZnIpXCJcclxuICAgICAgYmc9e2NvbG9yfVxyXG4gICAgICBwYWRkaW5nPVwiLjVlbVwiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgIDxFZGl0RmFjdWx0eU1lbWJlciBlZGl0PXtlZGl0fSBpZD17aWR9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxHcmlkSXRlbSByb3dTcGFuPXsyfT5cclxuICAgICAgICAgICAgPFRleHQ+e21lbWJlcn08L1RleHQ+XHJcbiAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgPEdyaWRJdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY3VsdHlNZW1iZXI7XHJcbiIsIi8vaW1wb3J0IENvdXJzZUNhcmQgZnJvbSBcIi4uLy4uL2luc3RydWN0b3ItY29tcG9uZW50cy9Db3Vyc2VDYXJkXCI7XHJcbmltcG9ydCB7IFRleHQsIEJ1dHRvbiwgVlN0YWNrLCBIU3RhY2ssIEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmNvbnN0IENvdXJzZUxpc3QgPSAoeyBjb3Vyc2VzLCBpZHggfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvdXJzZXMpO1xyXG4gIGNvbnN0IHJlbmRlckNvdXJzZXMgPVxyXG4gICAgY291cnNlcyAhPSBudWxsID8gKFxyXG4gICAgICBjb3Vyc2VzLm1hcCgoY291cnNlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoY291cnNlLCBzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgY291cnNlPSR7Y291cnNlfTsgcGF0aD0vYDtcclxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBzZWN0aW9uPSR7c2VjdGlvbn07IHBhdGg9L2A7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZD1cIiNlZGYyZjdcIlxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdz1cIjBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSlcIlxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VlN0YWNrIGlkPVwidG9wXCIgdz1cIjEwMCVcIiBtPVwiMCBhdXRvXCIgbWFyZ2luQm90dG9tPVwiNWVtXCI+XHJcbiAgICAgICAgICAgICAgICA8SFN0YWNrIHRleHRBbGlnbj1cImNlbnRlclwiIHZlcnRpY2FsQWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyMHB4XCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y291cnNlLmRlcGFydG1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIyMHB4XCIgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cIiMzOEExNjlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y291cnNlLmNvdXJzZU51bWJlcn0uIHtjb3Vyc2Uuc2VjdGlvbk51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjIwcHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UuZGlzcGxheU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luQm90dG9tPVwiM2VtXCI+PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9IU3RhY2s+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvZm9ybUNvbXBsZXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXJzZS5pc0NvdXJzZUNvbXBsZXRlZCA/IDxCdXR0b24gZm9udFdlaWdodD1cImJvbGRcIiByaWdodEljb249XCJjaGVja1wiIHZhcmlhbnRDb2xvcj1cInRlYWxcIiBtdD1cIjFlbVwiIGlzRGlzYWJsZWQ9XCJ0cnVlXCIgdz1cIjEwMCVcIiBzaXplPVwic21cIj5Gb3JtIENvbXBsZXRlPC9CdXR0b24+IDogPEJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50Q29sb3I9XCJncmVlblwiIG10PVwiMWVtXCIgdz1cIjEwMCVcIiBzaXplPVwic21cIiBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCd0ZXN0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfT5Xb3JrIE9uIEFCRVQgRm9ybTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgIG10PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgdz1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGJnQ29sb3I9XCIjZDVkOWRlXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrKGNvdXJzZS5jb3Vyc2VOdW1iZXIsIGNvdXJzZS5zZWN0aW9uTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZWN0aW9uUmVwb3J0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2Zvcm1Db21wbGV0aW9uJztcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgVmlldyBBQkVUIFJlcG9ydFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICkgOiAoXHJcbiAgICAgIDxUZXh0PmNvdXJzZXMgbm90IGZvdW5kPC9UZXh0PlxyXG4gICAgKTtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb3Jtcy1ncmlkXCI+e3JlbmRlckNvdXJzZXN9PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlTGlzdDtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBTZWxlY3QsIFRleHQsIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBbGxDb3Vyc2VzLCBnZXRJbnN0cnVjdG9yQ291cnNlcyB9IGZyb20gXCIuLi8uLi8uLi9hcGkvQVBJSGVscGVyXCI7XHJcbmltcG9ydCBDb3Vyc2VMaXN0IGZyb20gXCIuL0NvdXJzZUxpc3RcIjtcclxuXHJcbmNvbnN0IEdlbmVyYXRlU2VjdGlvblJlcG9ydCA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKHtcclxuICAgIHNlbWVzdGVyOiBcIlwiLFxyXG4gICAgeWVhcjogbnVsbCxcclxuICB9KTtcclxuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHRlcm1zID0gW1xyXG4gICAge1xyXG4gICAgICBzZW1lc3RlcjogXCJTcHJpbmdcIixcclxuICAgICAgeWVhcjogMjAyMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNlbWVzdGVyOiBcIlN1bW1lclwiLFxyXG4gICAgICB5ZWFyOiAyMDIwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc2VtZXN0ZXI6IFwiRmFsbFwiLFxyXG4gICAgICB5ZWFyOiAyMDIwLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGNvbnN0IGhhbmRsZVNldFRlcm0gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgc2V0VGVybSh7XHJcbiAgICAgIHNlbWVzdGVyOiBlLnRhcmdldC52YWx1ZS5zcGxpdChcIiBcIilbMF0sXHJcbiAgICAgIHllYXI6IGUudGFyZ2V0LnZhbHVlLnNwbGl0KFwiIFwiKVsxXSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUuc3BsaXQoXCIgXCIpWzFdKTtcclxuICAgIGNvbnNvbGUubG9nKHRlcm0ueWVhcik7XHJcbiAgICBjb25zdCBjb3Vyc2VzUmVzID0gYXdhaXQgZ2V0QWxsQ291cnNlcyh1c2VyLCBcImZhbGxcIiwgMjAyMCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb3Vyc2VzUmVzKTtcclxuICAgIHNldENvdXJzZXMoY291cnNlc1Jlcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxWU3RhY2sgaWQ9XCJ0b3BcIiB3PVwiODAlXCIgbT1cIjAgYXV0b1wiIG1hcmdpbkJvdHRvbT1cIjVlbVwiPlxyXG4gICAgICA8VGV4dCBmb250U2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgbXQ9XCIxZW1cIiBtYXJnaW5Cb3R0b209XCIyZW1cIj5cclxuICAgICAgICBGaW5kIFNlY3Rpb24gQUJFVCBSZXBvcnRcclxuICAgICAgPC9UZXh0PlxyXG4gICAgICB7dGVybS55ZWFyID09IG51bGwgPyAoXHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbXQ9XCIxZW1cIlxyXG4gICAgICAgICAgdz1cIjgwJVwiXHJcbiAgICAgICAgICBpZD1cInNlbWVzdGVyXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIFNlbWVzdGVyXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNldFRlcm19XHJcbiAgICAgICAgICB2YWx1ZT17dGVybX1cclxuICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIjFlbVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybXNbMF0uc2VtZXN0ZXIgKyBcIiBcIiArIHRlcm1zWzBdLnllYXIudG9TdHJpbmcoMTApfT5cclxuICAgICAgICAgICAge3Rlcm1zWzBdLnNlbWVzdGVyfSB7dGVybXNbMF0ueWVhcn1cclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybXNbMV0uc2VtZXN0ZXIgKyBcIiBcIiArIHRlcm1zWzFdLnllYXIudG9TdHJpbmcoMTApfT5cclxuICAgICAgICAgICAge3Rlcm1zWzFdLnNlbWVzdGVyfSB7dGVybXNbMV0ueWVhcn1cclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dGVybXNbMl0uc2VtZXN0ZXIgKyBcIiBcIiArIHRlcm1zWzJdLnllYXIudG9TdHJpbmcoMTApfT5cclxuICAgICAgICAgICAge3Rlcm1zWzJdLnNlbWVzdGVyfSB7dGVybXNbMl0ueWVhcn1cclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjIwcHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiIG10PVwiMWVtXCIgbWFyZ2luQm90dG9tPVwiMmVtXCI+XHJcbiAgICAgICAgICAgIHt0ZXJtLnNlbWVzdGVyfSB7dGVybS55ZWFyfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPENvdXJzZUxpc3QgY291cnNlcz17Y291cnNlc30gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvVlN0YWNrPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0ZVNlY3Rpb25SZXBvcnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFRleHQsXHJcbiAgQnV0dG9uLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGluayxcclxuICBUYWJsZSxcclxuICBUaGVhZCxcclxuICBUYm9keSxcclxuICBUZm9vdCxcclxuICBUcixcclxuICBUaCxcclxuICBUZCxcclxuICBUYWJsZUNhcHRpb24sXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0Q291cnNlc0J5RGVwYXJ0bWVudCB9IGZyb20gXCIuLi8uLi9hcGkvQVBJSGVscGVyXCI7XHJcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVRvZ2dsZVwiO1xyXG5jb25zdCBHZW5lcmF0ZVN0dWRlbnRTdXJ2ZXlzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3Vyc2VMaXN0LCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKHsgY291cnNlczogW10gfSk7XHJcbiAgY29uc3QgW2lzT24sIHRvZ2dsZU9uXSA9IHVzZVRvZ2dsZSgpO1xyXG4gIGNvbnN0IGdldE5ld0NvdXJzZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdDb3Vyc2VMaXN0ID0gYXdhaXQgZ2V0Q291cnNlc0J5RGVwYXJ0bWVudChcIkNTQ0VcIik7XHJcbiAgICBzZXRDb3Vyc2VzKHtcclxuICAgICAgLi4uY291cnNlTGlzdCxcclxuICAgICAgY291cnNlczogbmV3Q291cnNlTGlzdCxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coY291cnNlTGlzdC5jb3Vyc2VzKTtcclxuICB9O1xyXG4gIGNvbnN0IHNldEJ1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRCdXR0b25OYW1lKFwiU29ydCBieSBDb3Vyc2UgTnVtYmVyXCIpO1xyXG4gIH07XHJcbiAgY29uc3Qgc3VydmV5Q291cnNlcyA9IFtdXHJcbiAgICAuY29uY2F0KGNvdXJzZUxpc3QuY291cnNlcylcclxuICAgIC5zb3J0KChhLCBiKSA9PiAoYS5jb3Vyc2VOdW1iZXIgPiBiLmNvdXJzZU51bWJlciA/IDEgOiAtMSkpXHJcbiAgICAubWFwKChjb3Vyc2UsIGlkeCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VHIga2V5PXtpZHh9IGJnPXtpZHggJSAyID09IDAgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuMTAwXCJ9PlxyXG4gICAgICAgICAgICA8VGQ+XHJcbiAgICAgICAgICAgICAge2NvdXJzZS5kZXBhcnRtZW50fSB7Y291cnNlLmNvdXJzZU51bWJlcn0se2NvdXJzZS5kaXNwbGF5TmFtZX0sXHJcbiAgICAgICAgICAgICAgSW50c3J1Y3Rvcjoge2NvdXJzZS5jb29yZGluYXRvci5maXJzdE5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgIHtjb3Vyc2UuY29vcmRpbmF0b3IubGFzdE5hbWV9LCBTdXJ2ZXkgTGluazp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgY29sb3I9XCJ0ZWFsXCIgaHJlZj1cImh0dHBzOi8vd3d3LnVudC5lZHUvXCI+XHJcbiAgICAgICAgICAgICAgICBTdHVkZW50IFN1cnZleSBMaW5rXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3Qgc3VydmV5Q291cnNlc0J5SW5zdHVjdG9yID0gW11cclxuICAgIC5jb25jYXQoY291cnNlTGlzdC5jb3Vyc2VzKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IChhLmxhc3ROYW1lID4gYi5sYXN0TmFtZSA/IDEgOiAtMSkpXHJcbiAgICAubWFwKChjb3Vyc2UsIGlkeCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhjb3Vyc2UpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VHIga2V5PXtpZHh9IGJnPXtpZHggJSAyID09IDAgPyBcImdyYXkuMzAwXCIgOiBcImdyYXkuMTAwXCJ9PlxyXG4gICAgICAgICAgICA8VGQ+XHJcbiAgICAgICAgICAgICAge2NvdXJzZS5kZXBhcnRtZW50fSB7Y291cnNlLmNvdXJzZU51bWJlcn0se2NvdXJzZS5kaXNwbGF5TmFtZX0sXHJcbiAgICAgICAgICAgICAgSW50c3J1Y3Rvcjoge2NvdXJzZS5jb29yZGluYXRvci5maXJzdE5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgIHtjb3Vyc2UuY29vcmRpbmF0b3IubGFzdE5hbWV9LCBTdXJ2ZXkgTGluazp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgY29sb3I9XCJ0ZWFsXCIgaHJlZj1cImh0dHBzOi8vd3d3LnVudC5lZHUvXCI+XHJcbiAgICAgICAgICAgICAgICBTdHVkZW50IFN1cnZleSBMaW5rXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0TmV3Q291cnNlcygpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBzaG93ID0gaXNPbjtcclxuICBpZiAoc2hvdykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cInRvcFwiPlxyXG4gICAgICAgIDxCb3ggYm9yZGVyV2lkdGg9XCIycHhcIiByb3VuZGVkPVwibGdcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgbT1cIjFlbVwiIHA9XCIzZW1cIj5cclxuICAgICAgICA8VGFibGUgdmFyaWFudD1cInN0cmlwZWRcIiBjb2xvclNjaGVtZT1cImdyZWVuXCIgcGFkZGluZz1cIjFlbVwiPlxyXG4gICAgICAgIDxUYWJsZUNhcHRpb24gcGxhY2VtZW50PVwidG9wXCIgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT1cInhsXCI+R2VuZXJhdGVTdHVkZW50U3VydmV5czwvVGFibGVDYXB0aW9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlT259IG1iPVwiMWVtXCI+XHJcbiAgICAgICAgICAgICAgICBTb3J0IGJ5IENvdXJzZSBOdW1iZXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8VGJvZHk+e3N1cnZleUNvdXJzZXNCeUluc3R1Y3Rvcn08L1Rib2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoIXNob3cpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJ0b3BcIj5cclxuICAgICAgICA8Qm94IGJvcmRlcldpZHRoPVwiMnB4XCIgcm91bmRlZD1cImxnXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG09XCIxZW1cIiBwPVwiM2VtXCI+XHJcbiAgICAgICAgPFRhYmxlIHZhcmlhbnQ9XCJzdHJpcGVkXCIgY29sb3JTY2hlbWU9XCJncmVlblwiIHBhZGRpbmc9XCIxZW1cIj5cclxuICAgICAgICA8VGFibGVDYXB0aW9uIHBsYWNlbWVudD1cInRvcFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCJ4bFwiPkdlbmVyYXRlU3R1ZGVudFN1cnZleXM8L1RhYmxlQ2FwdGlvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU9ufSBtYj1cIjFlbVwiPlxyXG4gICAgICAgICAgICAgICAgU29ydCBieSBDb3Vyc2UgTnVtYmVyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFRib2R5PntzdXJ2ZXlDb3Vyc2VzfTwvVGJvZHk+XHJcbiAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0ZVN0dWRlbnRTdXJ2ZXlzO1xyXG5cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoZWNrYm94LCBIU3RhY2sgfSAgZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5jb25zdCBDaGVja0JveEdyb3VwID0gKCB7IHN0dWRlbnRNYXAgfSApID0+IHtcclxuICAgIGNvbnN0IFtjaGVja0FycmF5LCBzZXRDaGVja0FycmF5XSA9IHVzZVN0YXRlKHN0dWRlbnRNYXApO1xyXG4gICAgXHJcbiAgICBjb25zdCBIYW5kbGVDaGVjayA9IChpZHgpID0+IHtcclxuICAgICAgICB2YXIgdGVtcCA9IGNoZWNrQXJyYXk7XHJcbiAgICAgICAgdGVtcFtpZHhdID0gKHRlbXBbaWR4XSA9PT0gMCkgPyAxIDogMDtcclxuICAgICAgICBzZXRDaGVja0FycmF5KHRlbXApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrQXJyYXkpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8SFN0YWNrIHc9XCI5MCVcIiBzcGFjaW5nPXs4fSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtzdHVkZW50TWFwLm1hcCgodmFsdWUsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZUNoZWNrKGlkeCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWR4KzF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrQm94R3JvdXA7IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIFRleHQsXHJcbiAgSFN0YWNrLFxyXG4gIFRhYmxlLFxyXG4gIFRib2R5LFxyXG4gIFRyLFxyXG4gIFRkLFxyXG4gIENlbnRlcixcclxuICBDaGVja2JveFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBDaGVja0JveEdyb3VwIGZyb20gXCIuL0NoZWNrYm94R3JvdXBcIjtcclxuXHJcbmNvbnN0IENvdXJzZU91dGNvbWVUYWJsZSA9ICh7IGNvdXJzZSwgaGFuZGxlQ2hlY2sgfSkgPT4ge1xyXG4gIGNvbnN0IFtvdXRjb21lcywgc2V0T3V0Y29tZXNdID0gdXNlU3RhdGUoY291cnNlLm91dGNvbWVzKTtcclxuICBjb25zdCBbY2hlY2tBcnJheSwgc2V0Q2hlY2tBcnJheV0gPSB1c2VTdGF0ZShjb3Vyc2UpO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNvdXJzZVVwZGF0ZSggY291cnNlSWR4LCBzdHVkZW50SWR4ICl7XHJcbiAgICB2YXIgdGVtcCA9IG91dGNvbWVzO1xyXG4gICAgY29uc3QgY2hlY2tWYWx1ZSA9IHRlbXBbY291cnNlSWR4XS5zdHVkZW50TWFwW3N0dWRlbnRJZHhdO1xyXG4gICAgdGVtcFtjb3Vyc2VJZHhdLnN0dWRlbnRNYXBbc3R1ZGVudElkeF0gPSAoY2hlY2tWYWx1ZSA9PT0gMCkgPyAxIDogMDtcclxuICAgIHNldE91dGNvbWVzKHRlbXApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuKCBcclxuICAgICAgPEJveCAgbT1cIjAgYXV0b1wiIHc9XCI4MHJlbVwiIHBhZGRpbmc9XCIyZW1cIiBiZz1cIiNlZGYyZjdcIiBtdD1cIjJlbVwiPlxyXG4gICAgICAgIDxIU3RhY2sgdGV4dEFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj57Y291cnNlLm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgY29sb3I9XCIjMzhBMTY5XCIgZm9udFdlaWdodD1cImJvbGRcIj57Y291cnNlLmNvZGV9PC9UZXh0PlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgIDxUYWJsZSAgcGFkZGluZz1cIjFlbVwiIHc9XCI5MCVcIiBiZz1cIndoaXRlXCIgYm9yZGVyUmFkaXVzPVwiOHB4XCI+XHJcbiAgICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICAgIHsvKiB7cm93c30gKi99XHJcbiAgICAgICAgICAgIHtjb3Vyc2Uub3V0Y29tZXMubWFwKChvdXRjb21lLCBjb3Vyc2VJZHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUciBrZXk9e2NvdXJzZUlkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+e2NvdXJzZUlkeCsxfS4ge291dGNvbWUub3V0Y29tZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXQ9XCIxZW1cIj5NYXBzIHRvOiA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2hlY2tCb3hHcm91cCBzdHVkZW50TWFwPXtvdXRjb21lLnN0dWRlbnRNYXB9IGtleT17Y291cnNlSWR4fS8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SFN0YWNrIHc9XCI5MCVcIiBzcGFjaW5nPXs4fSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge291dGNvbWUuc3R1ZGVudE1hcC5tYXAoKHZhbHVlLCBzdHVkZW50SWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrKGNvdXJzZSwgc3R1ZGVudElkeCwgY291cnNlSWR4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHVkZW50SWR4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVGJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIGNvbG9yU2NoZW1lPVwidGVhbFwiIG10PVwiMWVtXCI+VXBkYXRlIENvdXJzZSBNYXBwaW5nPC9CdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ291cnNlT3V0Y29tZVRhYmxlO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFZTdGFjaywgVGV4dCwgU2VsZWN0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUmVjb2lsUm9vdCxcclxuICBhdG9tLFxyXG4gIHNlbGVjdG9yLFxyXG4gIHVzZVJlY29pbFN0YXRlLFxyXG4gIHVzZVJlY29pbFZhbHVlLFxyXG59IGZyb20gJ3JlY29pbCc7XHJcblxyXG5pbXBvcnQgU3R1ZGVudE91dGNvbWVMaXN0IGZyb20gXCIuL1N0dWRlbnRPdXRjb21lTGlzdFwiO1xyXG5pbXBvcnQgcHJvZ3JhbURhdGEgZnJvbSBcIi4uLy4uLy4uL2Zha2UtZGF0YS9wcm9ncmFtcy5qc29uXCI7XHJcbmltcG9ydCBjb3Vyc2VEYXRhIGZyb20gXCIuLi8uLi8uLi9mYWtlLWRhdGEvY291cnNlLmpzb25cIjtcclxuaW1wb3J0IHsgY291cnNlc0F0b20gfSBmcm9tICcuL3JlY29pbFN0b3JlJztcclxuaW1wb3J0IENvdXJzZU91dGNvbWVUYWJsZSBmcm9tIFwiLi9Db3Vyc2VPdXRjb21lVGFibGVcIjtcclxuaW1wb3J0IHsgZ2V0QWxsQ291cnNlcyB9IGZyb20gJy4uLy4uLy4uL2FwaS9BUElIZWxwZXInO1xyXG5pbXBvcnQgVGFibGVHcm91cCBmcm9tIFwiLi9UYWJsZUdyb3VwXCI7XHJcblxyXG5jb25zdCBPdXRjb21lTWFwcGluZyA9IFJlYWN0Lm1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IHByb2dyYW1zID0gcHJvZ3JhbURhdGEucHJvZ3JhbXM7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFByb2dyYW0sIHNldFNlbGVjdGVkUHJvZ3JhbV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzdHVkZW50T3V0Y29tZXMsIHNldFN0dWRlbnRPdXRjb21lc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtvdXRjb21lTWFwcGluZywgc2V0T3V0Y29tZU1hcHBpbmddID0gdXNlU3RhdGUoKTtcclxuICAvL2NvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVJlY29pbFN0YXRlKGNvdXJzZXNBdG9tKTtcclxuXHJcbiAgY29uc3QgZ2V0Q291cnNlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBnZXRBbGxDb3Vyc2VzKFwiTVQyMDIwXCIsIFwiZmFsbFwiLCAyMDIwKVxyXG4gICAgLy8gY29uc29sZS5sb2coY291cnNlKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcFwiKS5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgc2V0U3R1ZGVudE91dGNvbWVzKHByb2dyYW1zKTtcclxuICAgIC8vZ2V0Q291cnNlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChzZWxlY3RlZFByb2dyYW0gIT0gbnVsbCApe1xyXG4gIC8vICAgICBjb25zdCBudW1PZlN0dWRlbnRPdXRjb21lcyA9IHNlbGVjdGVkUHJvZ3JhbS5vdXRjb21lcy5sZW5ndGg7XHJcblxyXG4gIC8vICAgICBjb25zdCBjb3Vyc2VPdXRjb21lc0FycmF5ID0gY291cnNlRGF0YS5jb3Vyc2VzLm1hcCgoY291cnNlKSA9PiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHtcclxuICAvLyAgICAgICAgIG5hbWUgOmNvdXJzZS5uYW1lLCBcclxuICAvLyAgICAgICAgIGNvZGU6IGNvdXJzZS5jb2RlLFxyXG4gIC8vICAgICAgICAgb3V0Y29tZXM6IFxyXG4gIC8vICAgICAgICAgICBjb3Vyc2VbJ2NvdXJzZS1vdXRjb21lcyddLm1hcCgob3V0Y29tZSkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgLy8gICAgICAgICAgICAgICBvdXRjb21lOiBvdXRjb21lLFxyXG4gIC8vICAgICAgICAgICAgICAgc3R1ZGVudE1hcDogbmV3IEFycmF5KG51bU9mU3R1ZGVudE91dGNvbWVzKS5maWxsKDApXHJcbiAgLy8gICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICB9KVxyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIHNldE91dGNvbWVNYXBwaW5nKGNvdXJzZU91dGNvbWVzQXJyYXkpO1xyXG4gIC8vICAgICBzZXRDb3Vyc2VzKG91dGNvbWVNYXBwaW5nKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbc2VsZWN0ZWRQcm9ncmFtXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gIC8vIGNvbnNvbGUubG9nKG91dGNvbWVNYXBwaW5nKTtcclxuICAvLyB9LCBbb3V0Y29tZU1hcHBpbmddKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVTZXRPcHRpb24gPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gcHJvZ3JhbXMuZmlsdGVyKChwcm9ncmFtKSA9PiBwcm9ncmFtLm5hbWUgPT0gZS50YXJnZXQudmFsdWUpWzBdO1xyXG4gICAgc2V0U2VsZWN0ZWRQcm9ncmFtKHNlbGVjdGlvbik7XHJcbiAgICBjb25zdCBudW1PZlN0dWRlbnRPdXRjb21lcyA9IHNlbGVjdGlvbi5vdXRjb21lcy5sZW5ndGg7XHJcbiAgICBjb25zdCBjb3Vyc2VPdXRjb21lc0FycmF5ID0gY291cnNlRGF0YS5jb3Vyc2VzLm1hcCgoY291cnNlLCBpZHgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBjb3Vyc2UubmFtZSxcclxuICAgICAgICBjb2RlOiBjb3Vyc2UuY29kZSxcclxuICAgICAgICBpbmRleDogaWR4LFxyXG4gICAgICAgIG91dGNvbWVzOlxyXG4gICAgICAgICAgY291cnNlWydjb3Vyc2Utb3V0Y29tZXMnXS5tYXAoKG91dGNvbWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBvdXRjb21lOiBvdXRjb21lLFxyXG4gICAgICAgICAgICAgIHN0dWRlbnRNYXA6IG5ldyBBcnJheShudW1PZlN0dWRlbnRPdXRjb21lcykuZmlsbCgwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNldE91dGNvbWVNYXBwaW5nKGNvdXJzZU91dGNvbWVzQXJyYXkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gKGNvdXJzZSwgc3R1ZGVudElkeCwgY291cnNlSWR4KSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGNvdXJzZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGNvdXJzZS5vdXRjb21lc1swXS5zdHVkZW50TWFwKTtcclxuICAgIGxldCB0ZW1wID0gWy4uLm91dGNvbWVNYXBwaW5nXTtcclxuICAgIGNvbnN0IGN1cnJlbnRDaGVja1ZhbHVlID0gdGVtcFtjb3Vyc2UuaW5kZXhdLm91dGNvbWVzW2NvdXJzZUlkeF0uc3R1ZGVudE1hcFtzdHVkZW50SWR4XTtcclxuICAgIHRlbXBbY291cnNlLmluZGV4XS5vdXRjb21lc1tjb3Vyc2VJZHhdLnN0dWRlbnRNYXBbc3R1ZGVudElkeF0gPSAoY3VycmVudENoZWNrVmFsdWUgPT09IDApID8gMSA6IDA7XHJcbiAgICBjb25zb2xlLmxvZyh0ZW1wW2NvdXJzZS5pbmRleF0pO1xyXG4gICAgLy8gc2V0T3V0Y29tZU1hcHBpbmcoe1xyXG4gICAgLy8gfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlck9wdGlvbnMgPSBzdHVkZW50T3V0Y29tZXMgJiYgc3R1ZGVudE91dGNvbWVzLm1hcCgocHJvZ3JhbSwgaWR4KSA9PiB7XHJcbiAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17cHJvZ3JhbS5uYW1lfSBrZXk9e2lkeH0+e3Byb2dyYW0ubmFtZX08L29wdGlvbj47XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVjb2lsUm9vdD5cclxuICAgICAgPFZTdGFjayBpZD1cInRvcFwiIHc9XCI4MCVcIiBtPVwiMCBhdXRvXCI+XHJcbiAgICAgICAgPFRleHQgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiIG10PVwiMWVtXCI+XHJcbiAgICAgICAgICBTdHVkZW50IE91dGNvbWUgTWFwcGluZ1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG10PVwiMWVtXCJcclxuICAgICAgICAgIHc9XCI4MCVcIlxyXG4gICAgICAgICAgaWQ9XCJjb3Vyc2VcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgUHJvZ3JhbVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZXRPcHRpb259XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIHRoaXMgc2hvdWxkIGJlIGZpbGxlZCB3aXRoIGEgbGlzdCBvZiBjb3Vyc2VzIGZyb20gZGIgKi99XHJcbiAgICAgICAgICB7cmVuZGVyT3B0aW9uc31cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge3NlbGVjdGVkUHJvZ3JhbSA/XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFN0dWRlbnRPdXRjb21lTGlzdCBzZWxlY3RlZFByb2dyYW09e3NlbGVjdGVkUHJvZ3JhbX0gLz5cclxuICAgICAgICAgICAgICB7b3V0Y29tZU1hcHBpbmcgP1xyXG4gICAgICAgICAgICAgICAgb3V0Y29tZU1hcHBpbmcubWFwKChjb3Vyc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPENvdXJzZU91dGNvbWVUYWJsZSBjb3Vyc2U9e2NvdXJzZX0ga2V5PXtpZHh9IGhhbmRsZUNoZWNrPXtoYW5kbGVDaGVja30vPlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICA8L1JlY29pbFJvb3Q+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXRjb21lTWFwcGluZztcclxuIiwiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIFRleHQsXHJcbiAgU2ltcGxlR3JpZCxcclxuICBDZW50ZXIsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBSZWNvaWxSb290LFxyXG4gIGF0b20sXHJcbiAgc2VsZWN0b3IsXHJcbiAgdXNlUmVjb2lsU3RhdGUsXHJcbiAgdXNlUmVjb2lsVmFsdWUsXHJcbn0gZnJvbSAncmVjb2lsJztcclxuXHJcblxyXG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSwgTGlzdEljb24sIE9yZGVyZWRMaXN0LCBVbm9yZGVyZWRMaXN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgZmFrZURhdGEgZnJvbSBcIi4uLy4uLy4uL2Zha2UtZGF0YS9jb3Vyc2UuanNvblwiO1xyXG5pbXBvcnQgYWJldE91dGNvbWVzIGZyb20gXCIuLi8uLi8uLi9mYWtlLWRhdGEvYWJldFN0dWRlbnRPdXRjb21lcy5qc29uXCI7XHJcblxyXG5jb25zdCBTdHVkZW50T3V0Y29tZUxpc3QgPSAoeyBzZWxlY3RlZFByb2dyYW0gfSkgPT4ge1xyXG4gIC8qIGZpbGwgZnJvbSBkYiB3aGVuIGludGVncmF0ZWQqL1xyXG5cclxuICBjb25zdCBwcm9ncmFtTmFtZSA9IHNlbGVjdGVkUHJvZ3JhbS5uYW1lO1xyXG4gIGNvbnN0IG91dGNvbWVzID0gc2VsZWN0ZWRQcm9ncmFtLm91dGNvbWVzOyBcclxuXHJcbiAgLy9jb25zb2xlLmxvZyhvdXRjb21lcyk7XHJcbiBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIHN1Ym1pdCB0aGVzZSBjaGFuZ2VzP1wiKVxyXG4gICAgKSB7cFxyXG4gICAgICAvL1BPU1QgdGhlIHByb2dyYW0gbGlzdCBjaGFuZ2UgdG8gdGhlIGRiIGhlcmVcclxuICAgICAgYWxlcnQoXCJPdXRjb21lIE1hcHBpbmcgZm9yICdcIiArIHNlbGVjdGVkUHJvZ3JhbSArIFwiJyB1cGRhdGVkIVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJTdHVkZW50T3V0Y29tZXMgPSBvdXRjb21lcy5tYXAoKG91dGNvbWUsIGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIDxMaXN0SXRlbSBrZXk9e2lkeH0+PFRleHQgdGV4dEFsaWduPVwibGVmdFwiPntvdXRjb21lfTwvVGV4dD48L0xpc3RJdGVtPlxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5TaG93aW5nIEFCRVQgb3V0Y29tZXMgZm9yPC9UZXh0PlxyXG4gICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cIiMzOEExNjlcIiBmb250V2VpZ2h0PVwiYm9sZFwiIG1iPVwiMWVtXCI+e3Byb2dyYW1OYW1lfTwvVGV4dD5cclxuICAgICAgPENlbnRlciBtPVwiMCBhdXRvXCIgdz1cIjgwcmVtXCIgcGFkZGluZz1cIjRlbVwiIGJnPVwiI2VkZjJmN1wiPlxyXG4gICAgICAgIDxPcmRlcmVkTGlzdD5cclxuICAgICAgICAgIHtyZW5kZXJTdHVkZW50T3V0Y29tZXN9XHJcbiAgICAgICAgPC9PcmRlcmVkTGlzdD5cclxuICAgIDwvQ2VudGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudE91dGNvbWVMaXN0O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBjb3Vyc2VzQXRvbSB9IGZyb20gJy4vcmVjb2lsU3RvcmUnO1xyXG5pbXBvcnQgQ291cnNlT3V0Y29tZVRhYmxlIGZyb20gJy4vQ291cnNlT3V0Y29tZVRhYmxlJztcclxuXHJcbmNvbnN0IFRhYmxlR3JvdXAgPSAoe2NvdXJzZURhdGF9KSA9PiB7XHJcbiAgICBjb25zdCBjb3Vyc2VzID0gdXNlUmVjb2lsU3RhdGUoY291cnNlc0F0b20pO1xyXG4gICAgY29uc29sZS5sb2coY291cnNlcyk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2NvdXJzZURhdGEubWFwKChjb3Vyc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDb3Vyc2VPdXRjb21lVGFibGUgY291cnNlPXtjb3Vyc2V9IGtleT17aWR4fS8+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVHcm91cDsiLCJpbXBvcnQge1xyXG4gICAgUmVjb2lsUm9vdCxcclxuICAgIGF0b20sXHJcbiAgICBzZWxlY3RvcixcclxuICAgIHVzZVJlY29pbFN0YXRlLFxyXG4gICAgdXNlUmVjb2lsVmFsdWUsXHJcbiAgfSBmcm9tICdyZWNvaWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZXNBdG9tID0gYXRvbSh7XHJcbiAgICBrZXk6ICdjb3Vyc2VzQXRvbScsXHJcbiAgICBkZWZhdWx0OiAndGVzdCdcclxufSkgIiwiaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0sIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gXCIuLi8uLi9ob29rcy91c2VUb2dnbGVcIjtcclxuaW1wb3J0IHsgcmVtb3ZlQ291cnNlIH0gZnJvbSBcIi4uLy4uL2FwaS9BUElIZWxwZXJcIjtcclxuXHJcbmNvbnN0IFByb2dyYW1zID0gKHtcclxuICBwcm9ncmFtLFxyXG4gIGNvbG9yLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCgxLCAxZnIpXCIgYmc9e2NvbG9yfSBwYWRkaW5nPVwiLjVlbVwiPlxyXG4gICAgICA8PlxyXG4gICAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXsxfT5cclxuICAgICAgICAgIDxUZXh0IGFsaWduPVwiY2VudGVyXCIgZm9udFNpemU9XCIyMHB4XCI+XHJcbiAgICAgICAgICAgIHtwcm9ncmFtfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgIDwvPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmFtcztcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsVmFsID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbCk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShcIlwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVDaGFuZ2UsIHJlc2V0XTtcclxufVxyXG5cclxuIC8vZXhhbXBsZTpcclxuIC8vXHJcbiAvLyBjb25zdCBbYWdlLCBoYW5kbGVBZ2VDaGFuZ2UsIHJlc2V0QWdlXSA9IHVzZUZvcm1TdGF0ZShcIlwiKTsiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZVRvZ2dsZShpbml0aWFsVmFsID0gZmFsc2Upe1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsKTtcclxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSghc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtzdGF0ZSwgdG9nZ2xlXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVG9nZ2xlOyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEFkbWluTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0FkbWluTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQWRtaW5NZW51IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvQWRtaW5NZW51XCI7XHJcbi8vIGltcG9ydCBGdWxsUmVwb3J0IGZyb20gJy4uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9GdWxsUmVwb3J0L0Z1bGxSZXBvcnQnO1xyXG5pbXBvcnQgQ3JlYXRlTmV3U2VtZXN0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9DcmVhdGVOZXdTZW1lc3RlclwiO1xyXG5pbXBvcnQgRWRpdFByb2dyYW1MaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdFByb2dyYW1MaXN0L0VkaXRQcm9ncmFtTGlzdFwiO1xyXG5pbXBvcnQgRWRpdENvdXJzZUFzc2lnbm1lbnRzIGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdENvdXJzZUFzc2lnbm1lbnRzL0VkaXRDb3Vyc2VBc3NpZ25tZW50c1wiO1xyXG5pbXBvcnQgRWRpdEZhY3VsdHlMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdEZhY3VsdHlMaXN0L0VkaXRGYWN1bHR5TGlzdFwiO1xyXG5pbXBvcnQgRWRpdENvdXJzZUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9FZGl0Q291cnNlTGlzdC9FZGl0Q291cnNlTGlzdFwiO1xyXG5pbXBvcnQgRWRpdENvdXJzZU91dGNvbWVzIGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvRWRpdENvdXJzZU91dGNvbWVzL0VkaXRDb3Vyc2VPdXRjb21lc1wiO1xyXG5pbXBvcnQgT3V0Y29tZU1hcHBpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50cy9PdXRjb21lTWFwcGluZy9PdXRjb21lTWFwcGluZ1wiO1xyXG5pbXBvcnQgR2VuZXJhdGVTZWN0aW9uUmVwb3J0IGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluLWNvbXBvbmVudHMvR2VuZXJhdGVTZWN0aW9uUmVwb3J0L0dlbmVyYXRlU2VjdGlvblJlcG9ydFwiO1xyXG5pbXBvcnQgR2VuZXJhdGVTdHVkZW50U3VydmV5cyBmcm9tIFwiLi4vY29tcG9uZW50cy9hZG1pbi1jb21wb25lbnRzL0dlbmVyYXRlU3R1ZGVudFN1cnZleXNcIjtcclxuXHJcbmNvbnN0IGFkbWluSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIk1UMjAyMFwiKTtcclxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShcIkdGUlwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlVOVCBBQkVUOiBBZG1pbiBQYWdlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QWRtaW5OYXZpZ2F0aW9uIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxBZG1pbk1lbnUgc2V0Vmlldz17c2V0Vmlld30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgeygoKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodmlldykge1xyXG4gICAgICAgICAgICAgIC8vIGNhc2UgXCJHRlJcIjpcclxuICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIDxGdWxsUmVwb3J0IC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJHU1JcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8R2VuZXJhdGVTZWN0aW9uUmVwb3J0IHVzZXI9e3VzZXJ9IC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJPTVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxPdXRjb21lTWFwcGluZyAvPjtcclxuICAgICAgICAgICAgICBjYXNlIFwiQ05TXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENyZWF0ZU5ld1NlbWVzdGVyIC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJFQUNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWRpdENvdXJzZUFzc2lnbm1lbnRzIC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJFRkxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWRpdEZhY3VsdHlMaXN0IC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJFUExcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWRpdFByb2dyYW1MaXN0IC8+O1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJFQ0xcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8RWRpdENvdXJzZUxpc3QgLz47XHJcbiAgICAgICAgICAgICAgY2FzZSBcIkVDT1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxFZGl0Q291cnNlT3V0Y29tZXMgLz47XHJcbiAgICAgICAgICAgICAgY2FzZSBcIkdTU1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxHZW5lcmF0ZVN0dWRlbnRTdXJ2ZXlzIC8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZG1pbkhvbWU7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRCeUxhc3ROYW1lKG5hbWVzKSB7XHJcbiAgbmFtZXMuc29ydCgoYSwgYikgPT4gYS5zcGxpdChcIiBcIilbMV0ubG9jYWxlQ29tcGFyZShiLnNwbGl0KFwiIFwiKVsxXSkpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLWN1dHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjb2lsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=