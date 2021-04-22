import API from './api';

export function getCourses(){
    return(courses);
};

export async function getInstructorCourses(id, term){
    let api_helper = new API();
    let response = api_helper.getCourses(id, term.semester, term.year);

    response.then(function (result) {
        return result;
    });
    
    const instructorCourses = await response;
    instructorCourses.filter(course => course.instructor.id === id);
    return(instructorCourses);
};
export async function getCoordinatorCourses(id, term){
    let api_helper = new API();
    let response = api_helper.getCourses(id, term.semester, term.year);

    response.then(function (result) {
        return result;
    });
    
    const coordinatorCourses = await response;
    coordinatorCourses.filter(course => course.coordinator.id === id);
    return(coordinatorCourses);
};

export async function getFormBySection(id, year, semester, department, course, section){
    let api_helper = new API();
    let response = api_helper.getFormBySection(id, year, semester, department, course, section);
    response.then(function (result){
        return result
    });
    const formData = await response;
    return formData;
}

export async function postCoordinatorComment(userid, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted){
    let api_helper = new API();
    let response = api_helper.postComment(userid, year, semester, department, courseNumber, coordinatorComment, isCourseCompleted);
    response.then(function(result){
        return result
    });
    const success = await response;
    console.log(success);
}

export async function postInstructorForm(userid, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades){
    let api_helper = new API();
    let response = api_helper.postForm(userid, year, semester, department, courseNumber, sectionNumber, isSectionCompleted, outcomes, ITGrades, CSGrades, CEGrades);
    response.then(function(result){
        return result
    });
    const success = await response;
    console.log(success);
}

export async function login(userid, password){
    let api_helper = new API();
    let response = api_helper.login(userid, password);
    console.log(response);
    return response.then(function(result){
        return result
    });
}

export async function getAllCourses(userid, semester, year){
    let api_helper = new API();
    let response = api_helper.getAllCourses(userid, semester, parseInt(year));
    response.then(function (result) {
        return result;
    });
    const courses = await response;
    console.log(courses);
    return courses;
}

export async function getFacultyList(){
    let api_helper = new API();
    let response = api_helper.getFacultyList();
    response.then(function (result){
        return result;
    });

    const faculty = await response;
    return faculty;

}

export async function getCoursesByDepartment(department){
    let api_helper = new API();
    let response = api_helper.getCoursesByDepartment(department);
    response.then(function (result){
        return result;
    })
    const courses = await response;
    return courses;
}

export async function addFacultyMember(lastName, firstName, id, type){
    let api_helper = new API();
    let response = api_helper.addFacultyMember(firstName, lastName, id, type);
    response.then(function (result){
        return result;
    });

    const success = await response;
    console.log(success);
}

export async function addCourse(userid = "", firstName = "", lastName = "", year = 0, semester = "", courseNumber = 0, displayName = "", department = ""){
    let api_helper = new API();
    let response = api_helper.addCourse(userid, firstName, lastName, year, semester, courseNumber, displayName, department);
    response.then(function (result){
        return result;
    })
    const success = await response;
    console.log(success);
}
export async function removeCourse(year, semester, courseNumber, department) {
  let api_helper = new API();
  let response = api_helper.removeCourse(
    year,
    semester,
    courseNumber,
    department
  );
  response.then(function (result) {
    return result;
  });
  const success = await response;
  console.log(success);
  console.log(courseNumber);
}

export async function postCourseOutcomes() {

}

export async function addProgram(program){
    let api_helper = new API();
    let response = api_helper.addProgram(program);
    response.then(function (result) {
        return result;
    });

    const success = await response;
    console.log(success);
}

export async function postStudentSurvey(courseNumber = "", sectionNumber = "", year = 0, semester = "", program = "", classification = "", anticipatedGrade = "", outcomeRatings = [new Number], taRatings = [new Number], taComment = "", courseComment = ""){
    let api_helper = new API();
    let response = api_helper.postStudentSurvey(studentId, courseNumber, sectionNumber, year, semester, program, classification, anticipatedGrade, outcomeRatings, taRatings, taComment, courseComment);
    response.then(function (result) {
        return result;
    });

    const success = await response;
    console.log(success);
}