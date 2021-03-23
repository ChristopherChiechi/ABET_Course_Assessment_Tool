import {Flex, Text, Divider} from '@chakra-ui/react';

import ReportOutcome from './ReportOutcome';


const ReportOutcomesTable = ({outcomes}) => {
    console.log(outcomes);
    const renderOutcomes = outcomes.map(outcome => {
        return <ReportOutcome outcome={outcome}/>
    })
   
    return (
        <Flex direction="column" mt="1em">
            <Flex direction="row" bg="lightgreen">
                <div className="outcome-name">
                    <Text fontWeight="bold" >Course Outcomes</Text>
                </div>
                <div className="student-works">
                    <Text fontWeight="bold" >Student Work Used</Text>
                </div>
                <div className="percentages">
                    <Text fontWeight="bold" >Number of Students Who Achieved 75% of this Outcome / Explanation</Text>
                </div>
            </Flex>
            {renderOutcomes}
        </Flex>
        
    )
}

export default ReportOutcomesTable;