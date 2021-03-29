import { createContext } from 'react';

import questionData from "../../fake-data/questions.json";
import courseData from "../../fake-data/course.json";

var course = courseData.courses[0];
course['course-outcomes'] = course['course-outcomes'].map((outcome) => {
    return { 
        outcome: 
        outcome, rating: 1 
    };
});
export const pageData = {
    majors: [
        "Computer Science",
        "Software Engineering",
        "Computer Engineering",
        "Information Technology",
        "Cyber Secuirity",
    ],
    years: ["Freshman", "Sophomore", "Junior", "Senior"],
    grades: ["A", "B", "C", "D", "F"],
    course: course,
    questions: questionData.TAquestions.map((question) => {
        return {
            question: question,
            rating: 1
        }
    })
};

export const PageContext = createContext(pageData);