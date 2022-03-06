import React, { useState, useEffect } from "react";



import { Text, List, ListItem, VStack, useToast, Box } from "@chakra-ui/react";
import FacultyMember from "../FacultyMember";
import { getFacultyList, addFacultyMember, editFacultyUser } from "../../../api/APIHelper";
import AddFacultyMember from "./AddFacultyMember";

import FacultyTable from "./FacultyTable"


const EditFacultyList = ({}) => {
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
      const sorted = facultyListRes.data.sort((a, b) => {
        return b.year - a.year;
      });
      setFaculty(sorted);
    } catch (error) {
      console.log(error);
    }
  };

  

  

  const columns = [
    {
      title: "Faculty Type",
      field: "facultyType",
      validate: (rowData) =>
        rowData.facultyType ? true : "Faculty Type can not be empty",
        lookup: {Admin: "Admin", Instructor: "Instructor", Coordinator: "Coordinator"}
    },
    {
      title: "First Name",
      field: "firstName",
      validate: (rowData) =>
        rowData.firstName ? true : "First Name can not be empty",
    },
    {
      title: "Last Name",
      field: "lastName",
      validate: (rowData) =>
        rowData.lastName ? true : "Last Name can not be empty",
    },
    {
      title: "Faculty EUID",
      field: "facultyEUID",
      validate: (rowData) =>
        rowData.facultyEUID ? true : "Faculty EUID can not be empty",
        
    },
  ];

  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  useEffect(() => {
    getFaculty();
  }, [semJason, theDepartment, refreshKey]);

  return (
    <div>
      <Box align="center" w="50%" margin="auto" marginBottom={20} >
          <Text
            fontWeight="bold"
            mt="1em"
            mb="1em"
            fontSize="lg"
            align="center"
          >
            Faculty Table
          </Text>
          <FacultyTable
            columns={columns}
            data={faculty}
            refreshTable={refreshTable}
          />
      </Box>
    </div>
  );
  
};
export default EditFacultyList;
