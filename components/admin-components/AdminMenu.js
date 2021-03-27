import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/react"

const AdminMenu = ({setView}) => {
    return (
                <Accordion allowToggle>
                    <AccordionItem >
                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                            setView("GFR");
                        }}>
                            Generate Full Report
                        </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                            setView("GSS");
                        }}>
                            Generate Student Surveys
                        </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                            setView("GSR");
                        }}>
                            Generate Section Report
                        </AccordionButton>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                            setView("OM");
                        }}>
                            Student Outcome Mapping
                        </AccordionButton>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton  flex="1" textAlign="left">
                            Department Changes
                        </AccordionButton>
                        <AccordionIcon />
                        <AccordionPanel pb={4}>
                            <Accordion allowToggle>
                                <AccordionItem>
                                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                                            setView("CNS");
                                        }}>
                                            Create New Semester
                                        </AccordionButton>
                                </AccordionItem>

                                <AccordionItem>
                                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                                            setView("EAC");
                                        }}>
                                            Edit Assigned Courses
                                        </AccordionButton>
                                </AccordionItem>

                                <AccordionItem>
                                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                                            setView("EFL");
                                        }}>
                                            Edit Faculty List
                                        </AccordionButton>
                                </AccordionItem>

                                <AccordionItem>
                                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                                            setView("EPL");
                                        }}>
                                            Edit Program List
                                        </AccordionButton>
                                </AccordionItem>

                                <AccordionItem>
                                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                                            setView("ECL");
                                        }}>
                                            Edit Course List
                                        </AccordionButton>
                                </AccordionItem>

                                <AccordionItem>
                                        <AccordionButton _expanded={{ bg: "#38A169", color: "white" }} flex="1" textAlign="left" onClick={()=>{
                                            setView("ECO");
                                        }}>
                                            Edit Course Outcomes
                                        </AccordionButton>
                                </AccordionItem>
                            </Accordion>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
    )

}
export default AdminMenu;