//imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";

import {
  Button,
  Text,
  Box,
  Flex,
  useToast,
  Center,
  Textarea,
} from "@chakra-ui/react";

//api
import {
  GetStudentOutcomesCompleted,
  SetStudentOutcomesCompleted,
  getSection,
  getGrades,
  setGrades,
} from "../api/APIHelper";
//components
import GradesInput from "../components/form-components/GradesInput";
import CourseOutcomesMapping from "../components/form-components/CourseOutcomesMapping";
import blankForm from "../components/form-components/blankForm.json";
import Navigation from "../components/instructor-components/Navigation";

const formCompletion = ({ number, section, term, year, department }) => {
  const router = useRouter();
  const [gradeForm, setGradeForm] = useState();
  const [outcomeForm, setOutcomeForm] = useState();
  const [refreshKey, setRefreshKey] = useState(0); //For refreshing the table
  const toast = useToast({ position: "top" });
  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  const checkUser = async () => {
    const ISSERVER = typeof window === "undefined";
    const sectionInstructorEUID = await getSectionInformation();
    let isLoading = true;
    if (!ISSERVER) {
      const token = cookieCutter.get("token");
      const json = jwt.decode(token);
      if (!json) {
        router.push("/Login");
        return;
      }

      const jsonUserId = json.unique_name;
      if (json == null) {
        router.push("/");
      } else {
        console.log(jsonUserId, sectionInstructorEUID);
        if (jsonUserId != sectionInstructorEUID) {
          toast({
            title: "Error",
            description: `This section instructor is not the same as the login user!`,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          router.push("/");
        }
      }
      isLoading = false;
    }
  };

  const getSectionInformation = async () => {
    try {
      const sectionRes = await getSection(
        term,
        year,
        department,
        number,
        section
      );
      const sectionData = sectionRes.data;
      const status = sectionRes.status;
      if (status != "Success") {
        toast({
          title: "Error",
          description: `There was an error fetching the section information! Error: ${status}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
      return sectionData.instructorEUID;
    } catch (error) {
      console.log(error);
    }
  };

  const getGradeForm = async () => {
    try {
      const res = await getGrades(year, term, department, number, section);
      const gradesData = res.data;
      if (gradesData) {
        if (Object.keys(gradesData).length < 1) {
          //If the is the first time working on the form then create a blank form
          console.log("No previous form found");
          await setGrades(year, term, department, number, section, blankForm);
          console.log(blankForm);
          setGradeForm(blankForm);
        } else if (Object.keys(gradesData).length >= 1) {
          for (const key in gradesData) {
            let totalStudentsNum =
              gradesData[key].a +
              gradesData[key].b +
              gradesData[key].c +
              gradesData[key].d +
              gradesData[key].f;
            gradesData[key].totalStudents = totalStudentsNum;
          }
          setGradeForm(gradesData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getOutcomeForm = async () => {
    try {
      const outcomeFormRes = await GetStudentOutcomesCompleted(
        year,
        term,
        department,
        number,
        section
      );
      const outcomeFormData = outcomeFormRes.data;
      console.log(outcomeFormData);
      setOutcomeForm(outcomeFormData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGradeChange = (major, grade, newValue) => {
    try {
      let tempForm = gradeForm[major];
      tempForm[grade] = newValue;
      setGradeForm({
        ...gradeForm,
        [major]: tempForm,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOutcomesChange = (major, outcomeName, newValue) => {
    console.log(major, outcomeName, newValue);
    var tempForm = outcomeForm;
    for (var i = 0; i < tempForm.length; i++) {
      if (tempForm[i].outcomeName == outcomeName) {
        tempForm[i][major] = String(newValue);
      }
    }
    console.log(tempForm);
    setOutcomeForm(tempForm);
  };

  useEffect(() => {
    getOutcomeForm();
    getGradeForm();
  }, []);

  useEffect(() => {
    getSectionInformation();
    checkUser();
  }, []);

  const handleSubmit = async () => {
    console.log(gradeForm);
    console.log("----------------------");
    console.log(outcomeForm);
    try {
      //const res = await setGrades(year,term,department,number,section,form2)
      const gradeRes = await setGrades(
        year,
        term,
        department,
        number,
        section,
        gradeForm
      );

      const outcomeRes = await SetStudentOutcomesCompleted(
        year,
        term,
        department,
        number,
        section,
        outcomeForm
      );

      const gradeStatus = gradeRes.status;
      const outcomeStatus = outcomeRes.status;

      if (gradeStatus == "Success" && outcomeStatus == "Success") {
        toast({
          description: `Form submitted!`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        return;
      } else if (!gradeStatus == "Success") {
        toast({
          description: `There was an error submitting the form! Error:${gradeStatus}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      } else if (!outcomeStatus == "Success") {
        toast({
          description: `There was an error submitting the form! Error:${outcomeStatus}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }

    refreshTable();
  };

  return (
    <div>
      <Navigation />
      <Center>
        {gradeForm && outcomeForm ? (
          <Flex mt="2em" direction="column" w="90%">
            <Box w="80%">
              <Text fontSize="2xl" fontWeight="bold">
                {department} {number}.{section}
              </Text>
              <Text fontSize="xl" fontWeight="bold" color="green" mb="2em">
                ABET Course Assesment
              </Text>
            </Box>
            <GradesInput
              csGrades={gradeForm.CS}
              ceGrades={gradeForm.CE}
              itGrades={gradeForm.IT}
              cysGrades={gradeForm.CYS}
              handleGradeChange={handleGradeChange}
            />

            <CourseOutcomesMapping
              courseOutcomes={outcomeForm}
              handleOutcomesChange={handleOutcomesChange}
            />
            <Text fontSize="xl" fontWeight="bold" mb="1em">
              Instructor Comments
            </Text>
            <Textarea
              mb="1em"
              size="lg"
              bg="#edf2f7"
              placeholder="// Write a comment"
            ></Textarea>
            <Box>
              <Button
                mb="1em"
                colorScheme="green"
                w="max-content"
                onClick={handleSubmit}
              >
                Submit Report
              </Button>
            </Box>
          </Flex>
        ) : null}
      </Center>
    </div>
  );
};

formCompletion.getInitialProps = ({ query }) => {
  console.log(query);
  return {
    department: query.department,
    number: query.number,
    section: query.section,
    term: query.term,
    year: query.year,
  };
};

export default formCompletion;
