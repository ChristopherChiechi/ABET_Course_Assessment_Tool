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
    Vst,
    Center
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
            <Badge ml="5"  as="button" rounded="md" bg="#016a31" fontSize="lg" fontWeight="semibold" color="white" fontSize="lg" px={4} h={10}>{parentTerm.semester} {parentTerm.year}</Badge>
            </HStack>
            
        </>
    )
}

export default TermSelect;