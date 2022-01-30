import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  Box,
  Text,
  Button,
  IconButton,
  List,
  Input,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import FacultyMember from "../../admin-components/FacultyMember";
import sortByLastName from "../../../utils/sortByLastName";
import { getFacultyList, addFacultyMember } from "../../../api/APIHelper";
import AddFacultyMember from "./AddFacultyMember";

const EditFacultyList = () => {
  const [faculty, setFaculty] = useState({
    admin: [],
    instructor: [],
    coordinator: [],
  });
  const router = useRouter();

  const [newFaculty, setNewFaculty] = useState({
    lastName: "",
    firstName: "",
    untID: "",
    type: "",
  });

  const getFaculty = async () => {
    const facultyList = await getFacultyList();
    setFaculty({
      ...faculty,
      admin: facultyList.admins,
      instructor: facultyList.instructors,
      coordinator: facultyList.coordinators,
    });
  };

  useEffect(() => {
    getFaculty();
  }, []);

  useEffect(() => {
    if (newFaculty.lastName !== "") {
      const res = async () => {
        await addFacultyMember(
          newFaculty.lastName,
          newFaculty.firstName,
          newFaculty.untID,
          newFaculty.type
        );
        router.reload(window.location.pathname);
      };
      res();
    }
  }, [newFaculty]);

  const renderAdmin = faculty.admin.map((fac, idx) => {
    return (
      <ListItem align="center">
        <FacultyMember
          member={fac.firstName + " " + fac.lastName}
          id={fac.euid}
          //edit={editFaculty}
          color={idx % 2 == 0 ? "green.200" : "gray.300"}
          key={idx}
        />
      </ListItem>
    );
  });

  const renderInstructor = faculty.instructor.map((fac, idx) => {
    return (
      <ListItem>
        <FacultyMember
          member={fac.firstName + " " + fac.lastName}
          id={fac.euid}
          color={idx % 2 == 0 ? "green.200" : "gray.300"}
        />
      </ListItem>
    );
  });

  const renderCoordinator = faculty.coordinator.map((fac, idx) => {
    return (
      <ListItem>
        <FacultyMember
          member={fac.firstName + " " + fac.lastName}
          id={fac.euid}
          color={idx % 2 == 0 ? "green.200" : "gray.300"}
        />
      </ListItem>
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      window.confirm("Are you sure you would like to submit these changes?")
    ) {
      //POST the faculty list change to the db here
      alert("Faculty List Updated!");
    }
  };

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
        <AddFacultyMember setNewFaculty={setNewFaculty} />
      </VStack>
    </div>
  );
};
export default EditFacultyList;

// const facultyList = fakeData.faculty;
// const adjunctList = fakeData.adjunctFaculty;
// const fellowsList = fakeData.teachingFellows;
// sortByLastName(facultyList);
// sortByLastName(adjunctList);
// sortByLastName(fellowsList);
// var cseFaculty = [];
// for (var i = 0; i< facultyList.length; i++) {
//     var obj = {};

//     obj['name'] = facultyList[i];
//     obj['id'] = i;
//     cseFaculty.push(obj);
// }

// var adjunct = [];
// for (var i = 0; i< adjunctList.length; i++) {
//     var obj = {};

//     obj['name'] = facultyList[i];
//     obj['id'] = i;
//     adjunct.push(obj);
// }

// var fellows = [];
// for (var i = 0; i< fellowsList.length; i++) {
//     var obj = {};

//     obj['name'] = facultyList[i];
//     obj['id'] = i;
//     fellows.push(obj);
// }

// const [faculty, setFaculty, reset] = useInputState("");
// const [facultyMembers, setFacultyMembers] = useState(cseFaculty);
// const [adjunctMembers, setAdjunctMembers] = useState(adjunct);
// const [fellowMembers, setFellowMembers] = useState(fellows);

// const addFaculty = event => {
//     event.preventDefault();
//     setFacultyMembers([
//         ...facultyMembers,
//         {
//             id: facultyMembers.length,
//             name: faculty,
//         }
//     ]);
//     reset();
// }

// const removeFaculty = (id) => {
//     event.preventDefault();
//     setFacultyMembers(facultyMembers.filter(fac => fac.id !== id));
// }

/*
  const editFaculty = (first, last, facID, type) => {
    setFaculty(
      {...faculty, faculty[type]: map((fm) =>
        ({fm.id === facID ? { ...fm, lastName: last, firstName: first }}))}
      );
  };
  */
