//imports
import {
  useState,
  useContext
} from "react";
import {
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
//hooks
import useToggle from "../hooks/useToggle"
//components
import StudentLoginBox from "../components/survey-components/StudentLoginBox";
import StudentInfoForm from "../components/survey-components/StudentInfoForm";
import CourseOutcomesSurvey from "../components/survey-components/CourseOutcomesSurvey";
import TAsurvey from "../components/survey-components/TAsurvey";
//page data 
import { PageContext, pageData } from '../components/survey-components/SurveyPageData';
import StudentFeedback from "../components/survey-components/StudentFeedback";

const studentSurvey = () => {
  const context = useContext(PageContext);
  const course = context.course;


  //state
  const [isLoggedIn, toggleLogin] = useToggle(true);
  const [studentInformation, setStudentInformation] = useState({
    major: "",
    classification: "",
    expectedGrade: ""
  });
  const [outcomeSurvey, setOutcomeSurvey] = useState(context.course['course-outcomes']);
  const [TAquestions, setTAquestions] = useState(context.questions)
  const [studentInput, setStudentInput] = useState({
    TAeval: "",
    additionalFeedback: ""
  })


  const testFunction = () => {
    console.log(studentInformation, outcomeSurvey, TAquestions, studentInput);
  };
  return (
    <PageContext.Provider value={pageData}>
      {isLoggedIn
        ?
        <VStack mt="2em">
          <Text fontSize="2xl" fontWeight="bold">{course.code} {course.name}</Text>

          <StudentInfoForm studentInformation={studentInformation} setStudentInformation={setStudentInformation} />
          <CourseOutcomesSurvey outcomeSurvey={outcomeSurvey} setOutcomeSurvey={setOutcomeSurvey}/>
          <TAsurvey TAquestions={TAquestions} setTAquestions={setTAquestions}/>
          <StudentFeedback studentInput={studentInput} setStudentInput={setStudentInput}/>

          <Button onClick={testFunction} mb="1em" colorScheme="green">Submit Survey</Button>
        </VStack>
        :
        <StudentLoginBox toggleLoggin={toggleLogin} />
      }
    </PageContext.Provider>)
};
export default studentSurvey;
