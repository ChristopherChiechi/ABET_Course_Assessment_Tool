import { useState, useEffect } from "react";
import React from 'react';
import { VStack, Text, Select } from '@chakra-ui/react';
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
import { coursesAtom } from './recoilStore';
import CourseOutcomeTable from "./CourseOutcomeTable";
import { getAllCourses } from '../../../api/APIHelper';
import TableGroup from "./TableGroup";

const OutcomeMapping = React.memo(() => {
  const programs = programData.programs;

  const [selectedProgram, setSelectedProgram] = useState();
  const [studentOutcomes, setStudentOutcomes] = useState();
  const [outcomeMapping, setOutcomeMapping] = useState();
  //const [courses, setCourses] = useRecoilState(coursesAtom);

  const getCourses = async () => {
    const courses = await getAllCourses("MT2020", "fall", 2020)
    // console.log(course);
  }

  useEffect(() => {
    document.getElementById("top").scrollIntoView();
    setStudentOutcomes(programs);
    //getCourses();
  }, []);

  // useEffect(() => {
  //   if (selectedProgram != null ){
  //     const numOfStudentOutcomes = selectedProgram.outcomes.length;

  //     const courseOutcomesArray = courseData.courses.map((course) => {
  //       return {
  //         name :course.name, 
  //         code: course.code,
  //         outcomes: 
  //           course['course-outcomes'].map((outcome) => {
  //             return {
  //               outcome: outcome,
  //               studentMap: new Array(numOfStudentOutcomes).fill(0)
  //             }
  //           })
  //       }
  //     });
  //     setOutcomeMapping(courseOutcomesArray);
  //     setCourses(outcomeMapping);
  //   }
  // }, [selectedProgram]);

  // useEffect(() => {
  //  // console.log(outcomeMapping);
  // }, [outcomeMapping]);
  
  const handleSetOption = (e) => {
    const selection = programs.filter((program) => program.name == e.target.value)[0];
    setSelectedProgram(selection);
    const numOfStudentOutcomes = selection.outcomes.length;
    const courseOutcomesArray = courseData.courses.map((course, idx) => {
      return {
        name: course.name,
        code: course.code,
        index: idx,
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
  };

  const handleCheck = (course, studentIdx, courseIdx) => {
    //console.log(course);
    //console.log(course.outcomes[0].studentMap);
    let temp = [...outcomeMapping];
    const currentCheckValue = temp[course.index].outcomes[courseIdx].studentMap[studentIdx];
    temp[course.index].outcomes[courseIdx].studentMap[studentIdx] = (currentCheckValue === 0) ? 1 : 0;
    console.log(temp[course.index]);
    // setOutcomeMapping({
    // })
  }

  const renderOptions = studentOutcomes && studentOutcomes.map((program, idx) => {
    return <option value={program.name} key={idx}>{program.name}</option>;
  });

  return (
    <RecoilRoot>
      <VStack id="top" w="80%" m="0 auto">
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Student Outcome Mapping
          </Text>
        <Select
          mt="1em"
          w="80%"
          id="course"
          placeholder="Select Program"
          variant="filled"
          onChange={handleSetOption}
        >
          {/* this should be filled with a list of courses from db */}
          {renderOptions}
        </Select>
        <div>
          {selectedProgram ?
            <div>
              <StudentOutcomeList selectedProgram={selectedProgram} />
              {outcomeMapping ?
                outcomeMapping.map((course, idx) => {
                  return <CourseOutcomeTable course={course} key={idx} handleCheck={handleCheck}/>
              })
                : null
              }
            </div>
            : null
          }
        </div>
      </VStack>
    </RecoilRoot>
  );
});

export default OutcomeMapping;
