import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

const AdminMenu = ({ setView }) => {
  return (
    <Accordion allowToggle>
      <Text
        textAlign="left"
        fontSize="1.1em"
        fontWeight="bold"
        mt="2em"
        mb="1em"
      >
        <u>Report management</u>
      </Text>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("GFR");
          }}
        >
          Generate Full Report
        </AccordionButton>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("GSS");
          }}
        >
          Generate Student Surveys
        </AccordionButton>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("GSR");
          }}
        >
          Generate Section Report
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("OM");
          }}
        >
          Student Outcome Mapping
        </AccordionButton>
      </AccordionItem>

      <Text
        textAlign="left"
        fontSize="1.1em"
        fontWeight="bold"
        mt="2em"
        mb="1em"
      >
        <u>Major/Course Outcome</u>
      </Text>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("ACMO");
          }}
        >
          Assign course to major outcome
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("ANOTM");
          }}
        >
          Add new outcome to major
        </AccordionButton>
      </AccordionItem>

      <Text
        textAlign="left"
        fontSize="1.1em"
        fontWeight="bold"
        mt="2em"
        mb="1em"
      >
        <u>Departmental Changes</u>
      </Text>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("CNS");
          }}
        >
          Create New Semester
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("EAC");
          }}
        >
          Edit Assigned Courses
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("EFL");
          }}
        >
          Edit Faculty List
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("EAC");
          }}
        >
          Edit Program List
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("ECL");
          }}
        >
          Edit Course List
        </AccordionButton>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          _expanded={{ bg: "#38A169", color: "white" }}
          textAlign="left"
          onClick={() => {
            setView("ECO");
          }}
        >
          Edit Course Outcomes
        </AccordionButton>
      </AccordionItem>
    </Accordion>
  );
};
export default AdminMenu;
