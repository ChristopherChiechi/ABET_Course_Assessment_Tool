import { useState } from "react";
import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  VStack,
  HStack,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";
import Head from "next/head";
import Navigation from "../components/Navigation";
import AdminMenu from "../components/admin-components/AdminMenu";
// import FullReport from '../components/admin-components/FullReport/FullReport';
import EditSemesterList from "../components/admin-components/EditSemesters/EditSemesterList";
import EditProgramList from "../components/admin-components/EditProgramList/EditProgramList";
import EditFacultyList from "../components/admin-components/EditFacultyList/EditFacultyList";
import EditCourseList from "../components/admin-components/EditCourseList/EditCourseList";
import EditCourseOutcomes from "../components/admin-components/EditCourseOutcomes/EditCourseOutcomes";
import OutcomeMapping from "../components/admin-components/OutcomeMapping/OutcomeMapping";
import GenerateSectionReport from "../components/admin-components/GenerateSectionReport/GenerateSectionReport";
import GenerateFullReport from "../components/admin-components/GenerateFullReport/GenerateFullReport";
import GenerateStudentSurveys from "../components/admin-components/GenerateStudentSurveys/GenerateStudentSurveys";
import EditAssignedCourses from "../components/admin-components/EditAssignedCourses/EditAssignedCourses";
import CreateNewMajor from "../components/admin-components/EditDepartments/CreateNewMajor";
import AssignCourseToMajorOutcome from "../components/admin-components/MajorsOutcomes/AssignCourseToMajor/AssignCourseToMajorOutcome";
import AddNewOutcomeToMajor from "../components/admin-components/MajorsOutcomes/AddNewOutcomeToMajor/AddNewOutcomeToMajor";
import AssignOutcomeToCourse from "../components/admin-components/MajorsOutcomes/AssignOutcomeToCourse/AssignOutcomeToCourse";
import EditSurveyQuestions from "../components/admin-components/Student-Survey/EditSurveyQuestions";
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
          <Flex justifyContent="left" mt="1em" mr="1em">
            <HStack spacing="10px" w={{ base: "120%", md: "80%" }}>
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
            </HStack>
          </Flex>

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
                        mr="12"
                        color="#016a31"
                        onClick={() => {
                          setView("CNS");
                        }}
                      >
                        Edit Semesters
                      </Td>
                      <Td
                        as="button"
                        mr="3"
                        ml="3"
                        color="#016a31"
                        onClick={() => {
                          setView("CNM");
                        }}
                      >
                        Edit Major List
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
                        ml="1"
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
                        ml="1"
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
                return <EditSemesterList />;
              case "CNM":
                return <CreateNewMajor />;
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
              case "ACMO":
                return <AssignCourseToMajorOutcome />;
              case "ANOTM":
                return <AddNewOutcomeToMajor />;
              case "AOTC":
                return <AssignOutcomeToCourse />;
              case "ESQ":
                return <EditSurveyQuestions />;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default adminHome;
