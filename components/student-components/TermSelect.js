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
    Box,
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
                <Box as="Button" rounded="md" bg="teal" fontSize="lg" fontWeight="semibold" color="white" fontSize="lg" px={4} h={10}>{parentTerm.semester} {parentTerm.year}</Box>
            </HStack>
            
        </>
    )
}

export default TermSelect;