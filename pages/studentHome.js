import { useState, useEffect } from "react";
import Head from "next/head";
import { VStack } from "@chakra-ui/react";
import Navigation from "../components/student-components/Navigation";
import TermSelect from "../components/student-components/TermSelect";
import FormsView from "../components/student-components/FormsView";
//import {getInstructorCourses, getCoordinatorCourses} from '../api/APIHelper';
import { getInstructorCourses, getCoordinatorCourses } from "../api/APIHelper";

const studentHome = () => {
  const [user, setUser] = useState("tt0377");
  const [term, setTerm] = useState({
    semester: "Spring",
    year: 2021,
  });
  const [courses, setCourses] = useState({
    instructorCourses: [],
    coordinatorCourses: [],
  });

  return (
    <div>
      <Head>
        <title>UNT ABET: Student Page</title>
      </Head>
      <Navigation user={user} />
      <VStack mt="4em">
        <TermSelect parentTerm={term} setParentTerm={setTerm} />
        <FormsView
          instructorCourses={courses.instructorCourses}
          coordinatorCourses={courses.coordinatorCourses}
          term={term}
        />
      </VStack>
    </div>
  );
};

export default studentHome;
