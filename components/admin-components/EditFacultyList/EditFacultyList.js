import React, { useState, useEffect } from "react";

import { Text, List, ListItem, VStack, useToast } from "@chakra-ui/react";
import FacultyMember from "../../admin-components/FacultyMember";
import { getFacultyList, addFacultyMember } from "../../../api/APIHelper";
import AddFacultyMember from "./AddFacultyMember";

const EditFacultyList = () => {
  const toast = useToast({position: "top"});
  const [refreshKey, setRefreshKey] = useState(0);
  const [faculty, setFaculty] = useState({
    admin: [],
    instructor: [],
    coordinator: [],
  });

  const [newFaculty, setNewFaculty] = useState({
    lastName: "",
    firstName: "",
    untID: "",
    type: "",
  });

  const getFaculty = async () => {
    try {
      const facultyListRes = await getFacultyList();
      const facultyList = facultyListRes.data;
      const res = facultyListRes.status;
      if (res != "Success") {
        toast({
          title: "Error",
          description: `There was an error fetching the data! Error: ${res}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      setFaculty({
        ...faculty,
        admin: facultyList.admins,
        instructor: facultyList.instructors,
        coordinator: facultyList.coordinators,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  useEffect(() => {
    getFaculty();
  }, [refreshKey]);

  const renderAdmin =
    faculty &&
    faculty.admin.map((fac, idx) => {
      return (
        <ListItem align="center" key={fac.euid}>
          <FacultyMember
            refreshTable={refreshTable}
            member={fac.firstName + " " + fac.lastName}
            id={fac.euid}
            color={idx % 2 == 0 ? "green.200" : "gray.300"}
            key={fac.euid}
          />
        </ListItem>
      );
    });

  const renderInstructor = faculty.instructor.map((fac, idx) => {
    return (
      <ListItem key={fac.euid}>
        <FacultyMember
          refreshTable={refreshTable}
          member={fac.firstName + " " + fac.lastName}
          id={fac.euid}
          color={idx % 2 == 0 ? "green.200" : "gray.300"}
          key={fac.euid}
        />
      </ListItem>
    );
  });

  const renderCoordinator = faculty.coordinator.map((fac, idx) => {
    return (
      <ListItem key={fac.euid}>
        <FacultyMember
          refreshTable={refreshTable}
          member={fac.firstName + " " + fac.lastName}
          id={fac.euid}
          color={idx % 2 == 0 ? "green.200" : "gray.300"}
          key={fac.euid}
        />
      </ListItem>
    );
  });

  return (
    <div id="top">
      <VStack
        id="top"
        w="80%"
        m="0 auto"
        marginBottom="2em"
        justifyContent="center"
      >
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Edit Faculty List
        </Text>
        <Text fontWeight="bold" mt="1em" mb="1em" fontSize="lg" align="center">
          Admins
        </Text>

        <List marginLeft="5em" w="80%">
          {renderAdmin}
        </List>
      </VStack>
      <VStack id="top" w="80%" m="0 auto" justifyContent="center">
        <Text fontWeight="bold" mt="1em" mb="1em" fontSize="lg" align="center">
          Instructor
        </Text>
        <List w="80%" alignContent="center" align="center">
          {renderInstructor}
        </List>
      </VStack>
      <VStack
        id="top"
        w="80%"
        m="0 auto"
        marginBottom="2em"
        justifyContent="center"
      >
        <Text fontWeight="bold" mt="1em" mb="1em" fontSize="lg" align="center">
          Coordinator
        </Text>

        <List marginLeft="5em" w="80%" align="center">
          {renderCoordinator}
        </List>
        <AddFacultyMember refreshTable={refreshTable} />
      </VStack>
    </div>
  );
};
export default EditFacultyList;
