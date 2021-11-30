import { createContext } from "react";

import questionData from "../../fake-data/questions.json";
import courseData from "../../fake-data/course.json";

var course = courseData.courses[0];
course["course-outcomes"] = course["course-outcomes"].map((outcome) => {
  return {
    outcome: outcome,
    rating: 0,
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
  years: ["1", "2", "3", "4", "5", "Grad"],
  grades: ["A", "B", "C", "D", "F"],
  course: course,
  studentQuestions: [
    {
      question: "Major:",
      choices: [
        "Computer Science",
        "Software Engineering",
        "Computer Engineering",
        "Information Technology",
        "Cyber Secuirity",
      ],
    },
    {
      question: "Year in School:",
      choices: ["1", "2", "3", "4", "5", "Grad"],
    },
    {
      question: "Expected Grade:",
      choices: ["A", "B", "C", "D", "F"],
    },
  ],
  questions: questionData.TAquestions.map((question) => {
    return {
      question,
      rating: 0,
    };
  }),
};

export const PageContext = createContext(pageData);