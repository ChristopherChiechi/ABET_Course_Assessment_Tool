import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { coursesAtom } from './recoilStore';
import CourseOutcomeTable from './CourseOutcomeTable';

const TableGroup = ({courseData}) => {
    const courses = useRecoilState(coursesAtom);
    console.log(courses);
    return(
        <>
            {courseData.map((course, idx) => {
                return <CourseOutcomeTable course={course} key={idx}/>
            })}
        </>
    )
};

export default TableGroup;