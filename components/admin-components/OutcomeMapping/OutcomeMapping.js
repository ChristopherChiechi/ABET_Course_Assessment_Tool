import { useState, useEffect } from "react";
import { VStack, Badge, Select } from '@chakra-ui/react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import StudentOutcomeList from "./StudentOutcomeList";
import programData from "../../../fake-data/programs.json";
import courseData from "../../../fake-data/course.json";
import CourseOutcomeTable from "./CourseOutcomeTable";

const OutcomeMapping = () => {
  const programs = programData.programs;

  const [option, setOption] = useState();
  const [studentOutcomes, setStudentOutcomes] = useState();
  const [courses, setCourses] = useState();
  const [outcomeMapping, setOutcomeMapping] = useState();

  const test = atom({
    key: 'test',
    default: 'hello'
  })

  useEffect(() => {
    document.getElementById("top").scrollIntoView();
    setCourses(courseData.courses)
    setStudentOutcomes(programs);
  },[]);

  useEffect(() => {
    if (option != null){
      const numOfStudentOutcomes = studentOutcomes.length;
      const courseOutcomesArray = courses.map((course) => {
        return {
          name :course.name, 
          code: course.code,
          outcomes: 
            course['course-outcomes'].map((outcome) => {
              return {
                outcome: outcome,
                studentMap: new Array(numOfStudentOutcomes).fill(0)
              }
            })
        }
      });
      setCourses(courseOutcomesArray);
    }
  }, [option])

  const handleSetOption = (e) => {
    setOption(e.target.value);
  };

  const renderOptions = programs.map((program) => {
    return <option value={program.name}>{program.name}</option>;
  });
  const selectedProgram = programs.filter((program) => program.name == option)[0];
  const renderMappingTable = courses ? courses.map((course) => {
    return <CourseOutcomeTable course={course} studentOutcomes={studentOutcomes}/>
  }) : <div></div>

  return (
    <RecoilRoot>
      <VStack id="top" w="80%" m="0 auto">
          <Badge fontSize="2xl" mt="1em">
            Student Outcome Mapping
          </Badge>
          <Select
            mt="1em"
            w="80%"
            id="course"
            placeholder="Select program"
            variant="filled"
            onChange={handleSetOption}
            value={option}
          >
            {/* this should be filled with a list of courses from db */}
            {renderOptions}
          </Select>
        <div>
          {option 
            ? 
              <div>
                <StudentOutcomeList selectedProgram={selectedProgram} />
                {renderMappingTable}
              </div>
            : 
              <div></div>
          }
        </div>
      </VStack>
    </RecoilRoot>
  );
};

export default OutcomeMapping;
