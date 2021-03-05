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

const TermSelect = ({term, setTerm}) => {
    
    const terms = ["Spring", "Summer", "Fall"];
    const years = [2020];

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
        <Popover>
            <HStack>
                <Text>Showing forms for</Text>
                <Badge colorScheme="teal">{term.semester} {term.year}</Badge>
            </HStack>
            <PopoverTrigger>
                <Button variant="link" mb="4em">
                    Change Term
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody padding="2em">
                    
                    <Select placeholder="semester" variant="filled" value={term.semester} onChange={handleSemesterChange}>
                        {terms.map(term => {return <option value={term}>{term}</option>})}
                    </Select>
                    <Select placeholder="year" mt="1em" variant="filled" value={term.year} onChange={handleYearChange}>
                        {years.map(year => {return <option value={year}>{year}</option>})}
                    </Select>
                    {/* <Button float="right" mt="1em" colorScheme="green">Update</Button> */}
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default TermSelect;