import React, { Component } from 'react';
import {Box, Text} from '@chakra-ui/react';

const FormGrades = ({grades}) => {
    const gradesEnum = ['A','B','C','D','F','W','I'];
    const majors =  Object.keys(grades).map(major => {
        return(
            <Text gridColumn='1 / 1' marginLeft="0.5em" fontWeight="bold">{major}</Text>
        )
    })
    const gradesBreakdown = Object.keys(grades).map((major, row) => {
        return(
            grades[major].map((grade, column) => {
                const gradeCount = grades[major].reduce((a , b) => a + b, 0);
                return(
                    <>
                         <Text gridColumn={column+2} gridRow={row+2}>{gradesEnum[column] + ": " + grades[major][column]}</Text>
                         <Text gridColumn={9} gridRow={row+2}>Actual: {gradeCount}</Text>
                    </>
                )
            })
        )
    })

    return(
        <Box className='grades-box'>
            <Text className="grades-title">Grades</Text>
            {majors}
            {gradesBreakdown}
        </Box>
    )
}

export default FormGrades;