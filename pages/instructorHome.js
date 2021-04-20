import { useState, useEffect } from 'react';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';

import Navigation from '../components/instructor-components/Navigation';
import TermSelect from '../components/instructor-components/TermSelect';
import FormsView from '../components/instructor-components/FormsView';
import {getInstructorCourses, getCoordinatorCourses} from '../api/APIHelper';


const instructorHome = () => {

    const [user, setUser] = useState("MT2020");
    const [term, setTerm] = useState({
        semester: "Fall",
        year: 2020
    });
    const [courses, setCourses] = useState({
        instructorCourses: [],
        coordinatorCourses: []
    })
    
    const getCourses = async () => {
        const instructor = await getInstructorCourses(user, term);
        const coordinator = await getCoordinatorCourses(user, term);
        setCourses({
            ...courses, 
            instructorCourses: instructor,
            coordinatorCourses: coordinator
        })
    };
    
    useEffect(() => {
        getCourses();
        document.cookie = `user=${user}; path=/`;
    }, []);
    
    useEffect(() => {
        getCourses();
        console.log(courses);
    }, [term]);

    
    return(
        <div>
            <Head>
                <title>UNT ABET: Instructor Page</title>
            </Head>
            <Navigation user={user}/>
            <VStack
                mt="4em"                
            >
                <TermSelect parentTerm={term} setParentTerm={setTerm}/>
                <FormsView instructorCourses={courses.instructorCourses} coordinatorCourses={courses.coordinatorCourses} term={term}/>
            </VStack>
        </div>
    )
}

export default instructorHome;