//imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";

import {
  VStack,
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
  getFormBySection,
  postInstructorForm,
  getSection,
  getGrades,
  setGrades,
} from "../api/APIHelper";
//components
import GradesInput from "../components/form-components/GradesInput";
import CourseOutcomesMapping from "../components/form-components/CourseOutcomesMapping";
import blankForm from "../components/form-components/blankForm.json";
import outcomeBlankForm from "../components/form-components/outcomeBlankForm.json";
const formCompletion = ({
  number,
  section,
  semester,
  year,
  id,
  department,
}) => {
  const router = useRouter();
  const [form, setForm] = useState();
  const [gradeForm, setGradeForm] = useState();
  const [outcomeForm, setOutcomeForm] = useState();

  const [refreshKey, setRefreshKey] = useState(0); //For refreshing the table

  const [sectionInstructorEUID, setSectionInstructorEUID] = useState();
  const toast = useToast({ position: "top" });

  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  const checkUser = async () => {
    const ISSERVER = typeof window === "undefined";
    let isLoading = true;
    if (!ISSERVER) {
      const token = cookieCutter.get("token");
      const json = jwt.decode(token);
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
        semester,
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
      setSectionInstructorEUID(sectionData.instructorEUID);
      console.log(sectionData.instructorEUID);
    } catch (error) {
      console.log(error);
    }
    console.log(number, section, semester, year, id, department);
  };

  const getGradeForm = async () => {
    try {
      //const res = await getGrades(year,term,department,number,section)
      var res = await getGrades("2023", "Spring", "CSCE", "1030", "1");
      var gradesData = res.data;
      if (gradesData) {
        if (Object.keys(gradesData).length < 1) {
          //If the is the first time working on the form then create a blank form
          console.log("No previous form found");
          await setGrades("2023", "Spring", "CSCE", "1030", "1", blankForm);
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
    const formData = await getFormBySection(
      id,
      2020,
      "Fall",
      "CSCE",
      number.toString(),
      section
    );
    console.log(formData);
    setForm(formData);
  };

  const getOutcomeForm = async () => {
    try {
      setOutcomeForm(outcomeBlankForm);
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
        tempForm[i][major] = newValue;
      }
    }
    console.log(tempForm);
    setOutcomeForm(tempForm);
  };

  useEffect(() => {
    //getSectionInformation();
    getOutcomeForm();
    getGradeForm();
  }, [refreshKey]);

  useEffect(() => {
    //getGradeForm();
  }, []);

  useEffect(() => {
    //if (sectionInstructorEUID != null) checkUser();
  }, [sectionInstructorEUID]);

  const handleSubmit = async () => {
    console.log(gradeForm);
    console.log("----------------------");
    console.log(outcomeForm);
    return;
    try {
      //const res = await setGrades(year,term,department,number,section,form2)
      const submitRes = await setGrades(
        "2023",
        "Spring",
        "CSCE",
        "1030",
        "1",
        gradeForm
      );
      const status = submitRes.status;
      if (status == "Success") {
        toast({
          description: `Form submitted!`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        return;
      } else {
        toast({
          description: `There was an error submitting the form! Error:${status}`,
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
    <Center>
      {form ? (
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
  );
};

formCompletion.getInitialProps = ({ query }) => {
  return {
    department: query.department,
    number: query.number,
    section: query.section,
    semester: query.semester,
    year: query.year,
    id: "MT2020",
  };
};

export default formCompletion;
