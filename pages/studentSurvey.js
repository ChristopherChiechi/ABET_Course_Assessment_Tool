//imports
import {
  useState,
  useContext,
  useEffect
} from "react";
import {
  Text,
  VStack,
  Button,
  Box
} from "@chakra-ui/react";
//hooks
import useToggle from "../hooks/useToggle"
//components
import StudentLoginBox from "../components/survey-components/StudentLoginBox";
import StudentInfoForm from "../components/survey-components/StudentInfoForm";
import CourseOutcomesSurvey from "../components/survey-components/CourseOutcomesSurvey";
import TAsurvey from "../components/survey-components/TAsurvey";
import StudentFeedback from "../components/survey-components/StudentFeedback";
//page data 
import { PageContext, pageData } from '../components/survey-components/SurveyPageData';

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

  useEffect(() => {
    console.log('ss updated');
  }, [TAquestions]);

  const testFunction = () => {
    console.log(studentInformation, outcomeSurvey, TAquestions, studentInput);
  };

  const handleChange = (rating, idx, type) => {
    if (type == "TA") {
      var temp = TAquestions;
      temp[idx].rating = parseInt(rating);
      setTAquestions([...temp]);
      console.log(TAquestions[idx]);
    }
    else if (type == "Outcomes") {
      var temp = outcomeSurvey;
      outcomeSurvey[idx].rating = parseInt(rating);
      setOutcomeSurvey([...temp]);
      console.log(outcomeSurvey[idx]);
    }
    else {
      console.log("incorrect type");
    }
  };

  return (
    <PageContext.Provider value={pageData}>
      {isLoggedIn
        ?
        <>
          <VStack mt="2em">

          <Box w="80%">
            <Text fontSize="2xl" fontWeight="bold">{course.code} {course.name}</Text>
            <Text fontSize="xl" fontWeight="bold" color="green">Student Feedback Survey</Text>
          </Box>
            <StudentInfoForm studentInformation={studentInformation} setStudentInformation={setStudentInformation} />
            <CourseOutcomesSurvey outcomeSurvey={outcomeSurvey} handleChange={handleChange} />
            <TAsurvey TAquestions={TAquestions} handleChange={handleChange} />
            <StudentFeedback studentInput={studentInput} setStudentInput={setStudentInput} />

            <Button onClick={testFunction} mb="1em" colorScheme="green">Submit Survey</Button>
          </VStack>
        </>
        :
        <StudentLoginBox toggleLoggin={toggleLogin} />
      }
    </PageContext.Provider>)
};
export default studentSurvey;
