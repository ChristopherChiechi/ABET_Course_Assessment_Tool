import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import Head from "next/head";
import AdminNavigation from "../components/admin-components/AdminNavigation";
import AdminMenu from "../components/admin-components/AdminMenu";
// import FullReport from '../components/admin-components/FullReport/FullReport';
import CreateNewSemester from "../components/admin-components/CreateNewSemester";
import EditProgramList from "../components/admin-components/EditProgramList/EditProgramList";
import EditCourseAssignments from "../components/admin-components/EditCourseAssignments/EditCourseAssignments";
import EditFacultyList from "../components/admin-components/EditFacultyList/EditFacultyList";
import EditCourseList from "../components/admin-components/EditCourseList/EditCourseList";
import EditCourseOutcomes from "../components/admin-components/EditCourseOutcomes/EditCourseOutcomes";
import OutcomeMapping from "../components/admin-components/OutcomeMapping/OutcomeMapping";
import GenerateSectionReport from "../components/admin-components/GenerateSectionReport/GenerateSectionReport";
import GenerateStudentSurveys from "../components/admin-components/GenerateStudentSurveys";

const adminHome = () => {
  const [user, setUser] = useState("MT2020");
  const [view, setView] = useState("OM");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Head>
        <title>UNT ABET: Admin Page</title>
      </Head>
      <AdminNavigation user={user} />
      <div>
        <div>
          <Button colorScheme="green" onClick={onOpen} width="11%" height="50px" marginLeft="1%" position="fixed">
        Admin Menu
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="lg" closeOnEsc="true" colorScheme="green" preserveScrollBarGap="true">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" textAlign="center">Admin Menu</DrawerHeader>
            <DrawerBody>
             <AdminMenu setView={setView} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </div>
        <div>
          {(() => {
            switch (view) {
              // case "GFR":
              //     return <FullReport />;
              case "GSR":
                return <GenerateSectionReport user={user} />;
              case "OM":
                return <OutcomeMapping />;
              case "CNS":
                return <CreateNewSemester />;
              case "EAC":
                return <EditCourseAssignments />;
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
