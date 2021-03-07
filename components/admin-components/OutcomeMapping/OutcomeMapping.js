import { useState, useEffect } from "react";
import { VStack, Text, Select } from '@chakra-ui/react';
import StudentOutcomeList from "./StudentOutcomeList";
import programData from "../../../fake-data/programs.json";
import courseData from "../../../fake-data/course.json";
import CourseOutcomeTable from "./CourseOutcomeTable";

const OutcomeMapping = () => {
  const programs = programData.programs;

  const [option, setOption] = useState();
  const [studentOutcomes, setStudentOutcomes] = useState();
  const [outcomeMapping, setOutcomeMapping] = useState();

  useEffect(() => {
    document.getElementById("top").scrollIntoView();
    setStudentOutcomes(programs);
  },[]);

  useEffect(() => {
    if (option != null){
      const numOfStudentOutcomes = studentOutcomes.length;
      const courseOutcomesArray = courseData.courses.map((course) => {
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
      setOutcomeMapping(courseOutcomesArray);
    }
  }, [option])

  const handleSetOption = (e) => {
    setOption(e.target.value);
  };

  const renderOptions = programs.map((program) => {
    return <option value={program.name}>{program.name}</option>;
  });
  const selectedProgram = programs.filter((program) => program.name == option)[0];
  const renderMappingTable = outcomeMapping ? outcomeMapping.map((course) => {
    return <CourseOutcomeTable course={course}/>
  }) : <div></div>

  return (
    <>
      <VStack id="top" w="80%" m="0 auto">
          <Text fontSize="2xl" fontWeight="bold" mt="1em">
            Student Outcome Mapping
          </Text>
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
    </>
  );
};

export default OutcomeMapping;
