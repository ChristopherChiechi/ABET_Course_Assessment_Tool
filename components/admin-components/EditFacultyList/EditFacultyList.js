import React, { useState, useEffect } from "react";

import { Text, Center, useToast, Box, Select } from "@chakra-ui/react";
import FacultyMember from "../FacultyMember";
import { getUsersByRole } from "../../../api/APIHelper";
import AddFacultyMember from "./AddFacultyMember";

import FacultyTable from "./FacultyTable";

const EditFacultyList = () => {
  const toast = useToast({ position: "top" });
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectFaculty, setSelectFaculty] = useState(0);

  const [faculty, setFaculty] = useState();

  const columns = [
  
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
      field: "euid",
      validate: (rowData) =>
        rowData.euid ? true : "Faculty EUID can not be empty",
    },
  ];

  const getFaculty = async () => {
    if(!selectFaculty)
    {
      return;
    }

    try {
      const facultyListRes = await getUsersByRole(selectFaculty);
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
      setFaculty(facultyList);
      
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

  return (
    <div>
      <Center>
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Edit Faculty List
        </Text>
      </Center>
      <Box align="center" w="50%" margin="auto" marginBottom={20}>
        <Select
          id="facultyselector"
          width="50%"
          mr="1em"
          isRequired={true}
          placeholder="Select faculty role"
          borderColor="teal"
          value={selectFaculty}
          onChange={(e) => {
            console.log(e.target.value);
            
              setSelectFaculty(e.target.value);
              refreshTable();
          }}
        >
          <option value="admin">Admin</option>
          <option value="coordinator">Coordinator</option>
          <option value="instructor">Instructor</option>

        </Select>

        <Text fontWeight="bold" mt="1em" mb="1em" fontSize="lg" align="center">
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
