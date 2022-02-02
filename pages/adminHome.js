import { useState } from "react";
import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";
import Head from "next/head";
import Navigation from "../components/Navigation";
import AdminMenu from "../components/admin-components/AdminMenu";
// import FullReport from '../components/admin-components/FullReport/FullReport';
import CreateNewSemester from "../components/admin-components/EditSemesters/CreateNewSemester";
import EditProgramList from "../components/admin-components/EditProgramList/EditProgramList";
import EditCourseAssignments from "../components/admin-components/EditCourseAssignments/EditCourseAssignments";
import EditFacultyList from "../components/admin-components/EditFacultyList/EditFacultyList";
import EditCourseList from "../components/admin-components/EditCourseList/EditCourseList";
import EditCourseOutcomes from "../components/admin-components/EditCourseOutcomes/EditCourseOutcomes";
import OutcomeMapping from "../components/admin-components/OutcomeMapping/OutcomeMapping";
import GenerateSectionReport from "../components/admin-components/GenerateSectionReport/GenerateSectionReport";
import GenerateFullReport from "../components/admin-components/GenerateFullReport/GenerateFullReport";
import GenerateStudentSurveys from "../components/admin-components/GenerateStudentSurveys";
import EditAssignedCourses from "../components/admin-components/EditAssignedCourses/EditAssignedCourses";
import CreateNewDepartment from "../components/admin-components/EditDepartments/CreateNewDepartment";
var role = "super";
var is_super = true;
if (role == "super") {
  is_super = false;
}

const adminHome = () => {
  const [user, setUser] = useState("MT2020");
  const [view, setView] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>UNT ABET: Admin Page</title>
      </Head>
      <Navigation />
      <div>
        <div>
          <IconButton
            bg="#016a31"
            color="white"
            onClick={onOpen}
            ml="1em"
            _hover={{
              background: "teal",
              color: "white",
            }}
            icon={<HamburgerIcon />}
          />

          <Button
            disabled={is_super}
            onClick={() => router.push("/instructorHome")}
            bg="#016a31"
            color="white"
            ml="1em"
            _hover={{
              background: "teal",
              color: "white",
            }}
          >
            Switch to Instructor
          </Button>

          <Drawer
            placement="left"
            onClose={onClose}
            isOpen={isOpen}
            w="33%"
            closeOnOverlayClick="true"
            closeOnEsc="true"
            colorScheme="green"
            preserveScrollBarGap="true"
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader
                  borderBottomWidth="1px"
                  textAlign="center"
                  fontSize="1.5em"
                >
                  Admin Menu
                </DrawerHeader>
                <DrawerBody onClick={onClose}>
                  <AdminMenu setView={setView} />
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
          <Flex justifyContent="center">
            <VStack
              paddingTop="15"
              paddingLeft="30"
              w={{ base: "120%", md: "80%" }}
            >
              <Box borderWidth="2px" borderRadius="lg" padding="5">
                <Table variant="simple" size="md" width="max">
                  <TableCaption
                    color="black"
                    placement="top"
                    fontWeight="bold"
                    fontSize="2.2em"
                  >
                    Admin Home
                  </TableCaption>
                  <Tbody>
                    <Tr>
                      <Td
                        as="button"
                        mr="3"
                        color="#016a31"
                        onClick={() => {
                          setView("CNS");
                        }}
                      >
                        Create New Semester
                      </Td>
                      <Td
                        as="button"
                        mr="3"
                        color="#016a31"
                        onClick={() => {
                          setView("CND");
                        }}
                      >
                        Create New Department
                      </Td>
                    </Tr>
                    <Tr>
                      <Td
                        as="button"
                        mr="3"
                        color="#016a31"
                        onClick={() => {
                          setView("EAC");
                        }}
                      >
                        Edit Assigned Course
                      </Td>
                      <Td
                        as="button"
                        mr="3"
                        color="#016a31"
                        onClick={() => {
                          setView("GSS");
                        }}
                      >
                        Generate Student Surveys
                      </Td>
                    </Tr>
                    <Tr>
                      <Td
                        as="button"
                        mr="3"
                        color="#016a31"
                        onClick={() => {
                          setView("ECO");
                        }}
                      >
                        Edit Course Outcome
                      </Td>

                      <Td
                        as="button"
                        mr="3"
                        color="#016a31"
                        onClick={() => {
                          setView("GSR");
                        }}
                      >
                        Generate Section Report
                      </Td>
                    </Tr>
                    <Tr>
                      <Td
                        as="button"
                        mr="12"
                        color="#016a31"
                        onClick={() => {
                          setView("ECL");
                        }}
                      >
                        Edit Course List
                      </Td>
                      <Td
                        as="button"
                        mr="3"
                        color="#016a31"
                        onClick={() => {
                          setView("OM");
                        }}
                      >
                        Generate Outcome Mapping
                      </Td>
                    </Tr>
                    <Tr>
                      <Td
                        as="button"
                        mr="12"
                        color="#016a31"
                        onClick={() => {
                          setView("EFL");
                        }}
                      >
                        Edit Faculty List
                      </Td>
                      <Td
                        as="button"
                        mr="3"
                        color="#016a31"
                        onClick={() => {
                          setView("GFR");
                        }}
                      >
                        Generate Full Report
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </VStack>
          </Flex>
        </div>
        <div>
          {(() => {
            switch (view) {
              default:
                return null;
              case "GFR":
                return <GenerateFullReport />;
              case "GSR":
                return <GenerateSectionReport user={user} />;
              case "OM":
                return <OutcomeMapping />;
              case "CNS":
                return <CreateNewSemester />;
              case "CND":
                return <CreateNewDepartment />;
              case "EAC":
                return <EditAssignedCourses />;
              case "EFL":
                return <EditFacultyList />;
              case "EPL":
                return <EditProgramList />;
              case "ECL":
                return <EditCourseList />;
              case "ECO":
                return <EditCourseOutcomes />;
              case "GSS":
                return <GenerateStudentSurveys />;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default adminHome;
