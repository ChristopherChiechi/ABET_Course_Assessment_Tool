import{ useState } from 'react';
import Head from 'next/head'
// import AdminNavigation from '../components/admin-components/AdminNavigation/AdminNavigation';
import AdminMenu from '../components/admin-components/AdminMenu';
// import FullReport from '../components/admin-components/FullReport/FullReport';
// import CreateNewSemester from '../components/admin-components/CreateNewSemester/CreateNewSemester';
// import EditProgramList from '../components/admin-components/EditProgramList/EditProgramList';
// import EditCourseAssignments from '../components/admin-components/EditCourseAssignments/EditCourseAssignments';
// import EditFacultyList from '../components/admin-components/EditFacultyList/EditFacultyList';
 import EditCourseList from '../components/admin-components/EditCourseList/EditCourseList';
// import EditCourseOutcomes from '../components/admin-components/EditCourseOutcomes/EditCourseOutcomes';
import OutcomeMapping from "../components/admin-components/OutcomeMapping/OutcomeMapping";
// import GenerateSimpleReport from '../components/admin-components/GenerateSimpleReport/GenerateSimpleReport';
import GenerateStudentSurveys from "../components/admin-components/GenerateStudentSurveys";


const adminHome = () => {
  const [user, setUser] = useState("MT2020");
  const [view, setView] = useState("GFR");
  return (
    <div>
      <Head>
        <title>UNT ABET: Admin Page</title>
      </Head>
      <div >
        <div>
          <AdminMenu setView={setView} />
        </div>
        <div>
          {(() => {
            switch (view) {
            // case "GFR":
            //     return <FullReport />;
            //   case "GSR":
            //     return <GenerateSimpleReport user={user}/>;
              case "OM":
                return <OutcomeMapping />;
            //   case "CNS":
            //     return <CreateNewSemester />;
            //   case "EAC":
            //     return <EditCourseAssignments />;
            //   case "EFL":
            //     return <EditFacultyList />;
            //   case "EPL":
            //     return <EditProgramList />;
               case "ECL":
                 return <EditCourseList/>;
            //   case "ECO":
            //     return <EditCourseOutcomes/>;
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
