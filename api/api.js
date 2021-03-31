// Helper API Class
import cookieCutter from 'cookie-cutter';

const root = "https://localhost:44372/api"; // The base URL for each request
const OK = 200;           //200 Ok status code
const UNAUTHORIZED = 401; //401 Unauthorized status code
const NOT_LOGGED_IN_MSG = "Error: Your session has expired. Please log in again.";
const SERVER_ERROR_MSG = "Internal Server Error: Please try again later.";
const BAD_REQUEST_MSG = "Error: Some of the provided parameters are invalid.";
var token = "";           //holds value of the token cookie

export default class API {
    /* This function is for getInitialProps.
    cookieCutter is undefined in getInitialProps,
    so this function sets the token to the value of the cookie
    passed in from getInitialProps. */
    setToken(t = "") {
        token = t;
    }

    // generic function for sending POST requests
    //    Input: route and body
    //    Output: The JSON that is returned from the route
    async sendPost(route = "", body = {}) {
        const url = root + route; // Combine the root URL with the specified route
        var statusCode; //holds the status code of the response

        //if the request is not from getInitialProps, meaning cookieCutter is defined, retreive the cookie
        if (typeof cookieCutter.get == "function") {
            token = cookieCutter.get("token");
        }

        return await fetch(url, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify(body),
        })
            .then((response) => {
                statusCode = response.status;

                if (statusCode == UNAUTHORIZED) //this check has to be here for some reason ¯\_(ツ)_/¯
                    return;
                else
                    return response.json();
            })
            .then((json) => {
                if (statusCode == OK)
                    return json;
                else if (statusCode == UNAUTHORIZED)
                    return new ErrorObj(NOT_LOGGED_IN_MSG, false); //user's session has expired
                else {
                    if (json.hasOwnProperty("message"))
                        return new ErrorObj(json["message"]); //custom error message from API
                    else
                        return new ErrorObj(BAD_REQUEST_MSG); //bad input parameters
                }
            })
            .catch(() => { return new ErrorObj(SERVER_ERROR_MSG); });
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
        })
            .then((response) => {
                statusCode = response.status;

                if (statusCode == UNAUTHORIZED) //this check has to be here for some reason ¯\_(ツ)_/¯
                    return;
                else
                    return response.json();
            })
            .then((json) => {
                if (statusCode == OK)
                    return json;
                else if (statusCode == UNAUTHORIZED)
                    return new ErrorObj(NOT_LOGGED_IN_MSG, false); //user's session has expired
                else {
                    if (json.hasOwnProperty("message"))
                        return new ErrorObj(json["message"]); //custom error message from API
                    else
                        return new ErrorObj(BAD_REQUEST_MSG); //bad input parameters
                }
            })
            .catch(() => { return new ErrorObj(SERVER_ERROR_MSG); });
    }

    //---login(userid, password)---
    //    Input: UserId, Password
    //    Output: "Admin", "Instructor", "Student/TA" or boolean for failure
    async login(userid = "", password = "") {
        const body = { userid: userid, password: password };
        
        return await this.sendPost("/login", body).then((json) => {
            if (json.hasOwnProperty("token")) {
                var expires = new Date();
    
                expires.setHours(expires.getHours() + 24); //expires in 24 hours
                expires = expires.toUTCString();
                
                cookieCutter.set("token", json["token"], { expires }); //set token cookie
                return json["role"]; //return the role
            }
        });
        
        //To use this data you must do the following:
        //api.login(userid, password).then(role => {/*here is where the return value is accessible, it is either role string or a boolean indicating failure*/})
    }

    //---logout(userid)---
    //    Input: None
    //    Output: None
    logout() {
        cookieCutter.set("token", "", { expires: new Date().toUTCString() });
        cookieCutter.set("user", "", { expires: new Date().toUTCString() });
    }
    
    //---getCourses(userid, semester, year)---
    //    Input: UserId, Semester, Year
    //    Output: Sections for the corresponding UserId, Semester and Year
    async getCourses(userid = "", semester = "", year = 0) {
        const body = { userid: userid, semester: semester, year: year };

        return await this.sendPost("/sections/by-userid-semester-year", body);

        //To use this data you must do the following:
        //api.getCourses(userId, semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})
    }

    //---getAllCourses(userid, semester, year)---  (Admin)
    //    Input: UserId, Semester, Year
    //    Output: Sections for the corresponding Semester and Year 
    async getAllCourses(userid = "", semester = "", year = 0) {
        const body = { Userid: userid, Semester: semester, Year: year };

        return await this.sendPost("/sections/by-semester-year", body);
        
        //To use this data you must do the following:
        //api.getAllCourses(userid, semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})
    }
    //---getCoursesBySemesterYear(semester, year)---  (Admin)
    //    Input: Semester, Year
    //    Output: All Courses for the corresponding semester and year 
    async getCoursesBySemesterYear(semester = "", year = 0) 
    {
        const body = { 
            semester: semester, 
            year: year 
        };

        return await this.sendPost("/courses/get-by-year-semester", body);
    }
    //To use this data you must do the following:
    //api.getCoursesBySemesterYear(semester, year).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})

    //---getFormsBySection(userid, year, semester, department, course, section)---
    //    Input: UserId, Year, Semester, Department, CourseNumber, SectionNumber
    //    Output: Forms for the corresponding UserId, Year, Semester, Department, CourseNumber, and SectionNumber
    async getFormBySection(userid = "", year = 0, semester = "", department = "", courseNumber = "", sectionNumber = "") {
        const body = {
            Section: {
                Instructor: {
                    Id: userid,
                },
                Year: year,   
                Semester: semester,
                Department: department,
                CourseNumber: courseNumber,
                SectionNumber: sectionNumber
            }
        };

        return await this.sendPost("/forms/by-section", body);

        //To use this data you must do the following:
        //api.getFormsBySection(userid, year, semester, department, course, section).then(form => {/*here is where the data is accessible, form is an array of JSON objects*/})
    }

    //---getFormsByCourse(userid, year, semester, department, course)---
    //    Input: UserId, Year, Semester, Department, CourseNumber
    //    Output: Forms for the corresponding UserId, Year, Semester, Department, and CourseNumber
    async getFormsByCourse(userid = "", year = 0, semester = "", department = "", courseNumber = "") {
        const body = {
            Course: {
                Coordinator: {
                    Id: userid,
                },
                Year: year,
                Semester: semester,
                Department: department,
                CourseNumber: courseNumber
            }
        };
        
        return await this.sendPost("/forms/by-course", body);

        //To use this data you must do the following:
        //api.getFormsByCourse(userid, year, semester, department, course).then(courses => {/*here is where the data is accessible, courses is an array of JSON objects*/})
    }

    //---getAllForms(userid, semester, year)--- (Admin)
    //    Input: UserId, Semester, Year
    //    Output: Forms for the corresponding Semester and Year
    async getAllForms(userid = "", semester = "", year = 0) {

        const body = { userid: userid, semester: semester, year: year };

        return await this.sendPost("/forms/by-semester-year", body);

        //To use this data you must do the following:
        //api.getAllForms(userid, semester, year).then(courses => {/*here is where the data is accessible, forms is an array of JSON objects*/})
    }

    //---postForm(userId, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades)---
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
    }

    //---postComment(userId, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted)---
    //    Input: UserId, Year, Semester, department, courseNumber, coordinatorComment, isCourseCompleted
    //    Output: Success or Failure
    async postComment(userId = "", year = 0, semester = "", department = "", courseNumber = "", coordinatorComment = "", isCourseCompleted = false) {
        const body = {
            course: {
                Coordinator: {
                    Id: userId,
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
    }

    //---getBlankForm(userid)---
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

        return await this.sendPost("/forms/new-blank", body);

        //To use this data you must do the following:
        //api.getBlankForm(userid).then(result => {/*here is where the return value is accessible, it is a JSON*/})
    }

    //--getDefaultYearAndSemester()--
    //    Input: Nothing
    //    Output: Object Including Current Default Year and Semester
    getDefaultYearAndSemester() {
        var text = '{ "year": 0,' +         // create string of object
                   ' "semester": "" }';
        var ResultObj = JSON.parse(text);   // create object from the string

        var date = new Date();              // get the current date
        var day = date.getDay();            // get the current day
        var month = date.getMonth() + 1;    // add one to month (by default January = 0)
        ResultObj.year = date.getFullYear();// get the full year from the date
        ResultObj.semester = "fall";        // just to be safe
        
        // Set the Default Semester Based on the Month
        if ((month > 8) || (month == 8 && day >= 15)) {
            ResultObj.semester = "fall";
        }
        else if ((month > 5) || (month == 5 && day >= 15)) {
            ResultObj.semester = "summer";
            // since this is just a default semester, it always defaults to the longer semesters
            // this is why it doesn't default to smaller summer semesters
        }
        else {
            ResultObj.semester = "spring";
        }

        return ResultObj;    // return object including the year and semester
    }

    //---addSection(userid, firstName, lastName, year, semester, courseNumber, sectionNumber, department, numberOfStudents)--- (Admin)
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
    }

    //---getFacultyList()--- (Admin)
    //    Input: none
    //    Output: List of instructors, coordinators, adjunct faculties, and teaching fellows
    async getFacultyList()
    {
        return await this.sendPost("/faculty/get-list", {});
    }
    
    //---addFacultyMember(firstName, lastName, userid, role)--- (Admin)
    //    Input: First Name, Last Name and User Id
    //    Output: Success or Failure
    async addFacultyMember(firstName = "", lastName = "", userId = "", facultyType = "")
    {
        const body = 
        {
            info: {
                firstName: firstName,
                lastName: lastName,
                id: userId
            },
            facultyType: facultyType
        };

        return await this.sendPost("/faculty/add-member", body);
    }
    
    //---getCoursesByDepartment(department)--- (Admin)
    //    Input: department
    //    Output: array of courses
    async getCoursesByDepartment(department = "") {
        const body = {
            department
        };
        
        return await this.sendPost("/courses/get-by-department", body);
    }
    
    //---addProgram(department)--- (Admin)
    //    Input: program name
    //    Output: success or failure
    async addProgram(program = "") {
        const body = {
            program
        };
        
        return await this.sendPost("/programs/add-program", body);
    }
    
    //---addCourse(userid, firstName, lastName, year, semester, courseNumber, displayName, department)--- (Admin)
    //    Input: ^^^
    //    Output: success or failure
    async addCourse(userid = "", firstName = "", lastName = "", year = 0, semester = "", courseNumber = "", displayName = "", department = "")
    {
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
    }
    
    //---removeCourse(year, semester, courseNumber, department)--- (Admin)
    //    Input: year, semester, courseNumber, department
    //    Output: success or failure
    async removeCourse(year = 0, semester = "", courseNumber = "", department = "")
    {
        const body = {
            Course: {
                year,
                semester,
                courseNumber,
                department
            }
        };
        
        return await this.sendPost("/courses/remove-course", body);
    }

    //---getCourseOutcomesByCourse(year, semester, courseNumber, department)--- (Admin)
    //    Input: year, semester, courseNumber, department
    //    Output: array of course outcomes
    async getCourseOutcomesByCourse(year = 0, semester = "", courseNumber = "", department = "")
    {
        const body = {
            Course: {
                year,
                semester,
                courseNumber,
                department
            }
        };
    
        return await this.sendPost("/course-outcomes/by-course", body);
    }

    //---postCourseOutcomes(outcomes)--- (Admin)
    //    Input: array of outcome objects (see notes below)
    //    Output: success or failure
    async postCourseOutcomes(outcomes = [])
    {
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
    
    //---postSection(userid, firstName, lastName, year, semester, courseNumber, sectionNumber, department, numberOfStudents)--- (Instructor)
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
    
    async uploadAccessDb(formData = new FormData()) 
    {
        return await this.sendFile('/upload-access-db', formData);
    }
    
    async uploadFormAttachment(formData = new FormData(), outcomeId = 0) 
    {
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
