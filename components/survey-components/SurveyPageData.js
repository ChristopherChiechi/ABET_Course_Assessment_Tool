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
  years: ["Freshman", "Sophomore", "Junior", "Senior"],
  grades: ["A", "B", "C", "D", "F"],
  course: course,
  studentQuestions: [
    {
      question: "What is your Major?",
      choices: [
        "Computer Science",
        "Software Engineering",
        "Computer Engineering",
        "Information Technology",
        "Cyber Secuirity",
      ],
    },
    {
      question: "What is your Classification?",
      choices: ["Freshman", "Sophomore", "Junior", "Senior"],
    },
    {
      question: "What grade do you expect?",
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
