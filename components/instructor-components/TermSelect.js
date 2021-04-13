import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Text,
    Button,
    Select,
    Badge,
    HStack,
    Vst
  } from "@chakra-ui/react"
import { useState } from "react";

const TermSelect = ({parentTerm, setParentTerm}) => {
    
    const terms = ["Spring", "Summer", "Fall"];
    const years = [2020];

    const [term, setTerm] = useState({
        semester: 'Fall',
        year: 2020
    });

    const handleSemesterChange = (e) => {
        setTerm({
            ...term, 
            semester: e.target.value
        })
    }
    const handleYearChange = (e) => {
        setTerm({
            ...term, 
            year: e.target.value
        })
    }

    return(
        <>
            <HStack>
                    <Text>Showing forms for</Text>
                    <Badge colorScheme="teal" fontSize="lg">{parentTerm.semester} {parentTerm.year}</Badge>
            </HStack>
            <Popover>
                {({ onClose }) => (
                <>
                    <PopoverTrigger>
                        {<Button mb="3em" colorScheme="teal" size="lg">
                            Change Term
                </Button>}
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody padding="2em">
                            <Select placeholder="semester" variant="filled" value={term.semester} onChange={handleSemesterChange}>
                                {terms.map((term, idx) => {
                                    return <option value={term} key={idx}>{term}</option>
                                    })}
                            </Select>
                            <Select placeholder="year" mt="1em" variant="filled" value={term.year} onChange={handleYearChange}>
                                {years.map((year, idx) => {return <option value={year} key={idx}>{year}</option>})}
                            </Select>
                            <Button 
                                float="right" 
                                mt="1em" 
                                colorScheme="teal" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    (term.semester && term.year) && setParentTerm({
                                        semester: term.semester,
                                        year: term.year
                                    })
                                    onClose();
                                }}
                            >
                                Update
                            </Button>
                        </PopoverBody>
                    </PopoverContent>
                </>
                )}
            </Popover>
        </>
    )
}

export default TermSelect;