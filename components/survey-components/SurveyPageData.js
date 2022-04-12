import { createContext } from "react";

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
  studentQuestions: [
    {
      question: "Major:",
      choices: [
        "Computer Science",
        "Software Engineering",
        "Computer Engineering",
        "Information Technology",
        "Cyber Security",
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
};

export const PageContext = createContext(pageData);
