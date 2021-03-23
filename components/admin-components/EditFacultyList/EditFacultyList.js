import React, { useState, useEffect } from "react";
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
    fullTime: [],
    adjuncts: [],
    fellows: [],
  });

  const [newFaculty, setNewFaculty] = useState({
    lastName: "",
    firstName: "",
    untID: "",
    type: "",
  });

  const getFaculty = async () => {
    const facultyList = await getFacultyList();
    console.log(facultyList);
    setFaculty({
      ...faculty,
      fullTime: facultyList.fullTime,
      adjuncts: facultyList.adjuncts,
      fellows: facultyList.fellows,
    });
  };

  useEffect(() => {
    getFaculty();
  }, []);

  useEffect(() => {
    if (newFaculty.lastName !== "") {
      addFacultyMember(
        newFaculty.lastName,
        newFaculty.firstName,
        newFaculty.untID,
        newFaculty.type
      );
      alert("New Faculty Added");
      getFaculty();
    }
  }, [newFaculty]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      window.confirm("Are you sure you would like to submit these changes?")
    ) {
      //POST the faculty list change to the db here
      alert("Faculty List Updated!");
    }
  };

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

  const renderFaculty = faculty.fullTime.map((fac, idx) => {
    return (
      <ListItem align="center">
        <FacultyMember
          member={fac.firstName + " " + fac.lastName}
          id={fac.id}
          //edit={editFaculty}
          color={idx % 2 == 0 ? "gray.300" : "gray.100"}
          key={idx}
        />
      </ListItem>
    );
  });

  const renderAdjunct = faculty.adjuncts.map((fac, idx) => {
    return (
      <ListItem>
        <FacultyMember
          member={fac.firstName + " " + fac.lastName}
          id={fac.id}
          edit={editFaculty}
          color={idx % 2 == 0 ? "gray.300" : "gray.100"}
        />
      </ListItem>
    );
  });

  const renderFellows = faculty.fellows.map((fac, idx) => {
    return (
      <ListItem>
        <FacultyMember
          member={fac.firstName + " " + fac.lastName}
          id={fac.id}
          edit={editFaculty}
          color={idx % 2 == 0 ? "gray.300" : "gray.100"}
        />
      </ListItem>
    );
  });

  return (
    <div id="top">
      <VStack id="top" w="80%" m="0 auto" marginBottom="10em">
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Edit Faculty List
        </Text>
        <Text fontWeight="bold" mt="1em" mb="1em" fontSize="lg" align="center">
          Instructors/Coordinators
        </Text>

        <List
          marginLeft="5em"
          justifyContent="center"
          alignItems="center"
          w="80%"
        >
          {renderFaculty}
        </List>
        <Text fontWeight="bold" mt="1em" mb="1em" fontSize="lg" align="center">
          Adjunct Faculty
        </Text>
        <List
          marginLeft="5em"
          justifyContent="center"
          alignItems="center"
          w="80%"
        >
          {renderAdjunct}
        </List>
        <Text fontWeight="bold" mt="1em" mb="1em" fontSize="lg" align="center">
          Teaching Fellows
        </Text>
        <List
          marginLeft="5em"
          justifyContent="center"
          alignItems="center"
          w="80%"
        >
          {renderFellows}
        </List>
        <AddFacultyMember setNewFaculty={setNewFaculty} />
        {/* <div className="fac-input">
                        <form onSubmit = {addFaculty}>
                                <Input mt="1rem"
                                    placeholder="enter a new faculty member" 
                                    variant="flushed" 
                                    type="text" 
                                    value={faculty} 
                                    onChange={setFaculty}
                                    w='14em'
                                />
                        </form>
                        <IconButton 
                            variant="link" 
                            isActive="false" 
                            mt="1.5em" 
                            ml="1em" 
                            variantColor="green" 
                            size='sm' 
                            icon="add"
                            onClick={addFaculty}>    
                        </IconButton>
                    </div> */}
        {/* <Button variantColor="green" variant="outline" onClick={handleSubmit}>
                        Submit
                    </Button> */}
      </VStack>
    </div>
  );
};
export default EditFacultyList;
