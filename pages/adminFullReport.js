//imports
import { useEffect, useState } from "react";
import { Grid, Button, BreadcrumbLink } from "@chakra-ui/react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import reportCS from "../fake-data/reportCS.json";
import reportCE from "../fake-data/reportCE.json";
import reportCYS from "../fake-data/reportCYS.json";
import { GenerateFullReport } from "../api/APIHelper";
import AdminReportTable from "../components/admin-components/AdminReport/AdminReportTable";

// will need to update when backend is completed
const adminFullReport = ({
  /*semester, year*/ number,
  section,
  semester,
  year,
  id,
}) => {
  //Document to pdf
  var document = {
    content: [
      {
        text: "Spring 2023 Full Report",
        style: "header",
      },
      {
        style: "tableExample",
        color: "#111",
        alignment: "center",
        table: {
          widths: [50, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
          headerRows: 1,
          // keepWithHeaderRows: 1,
          body: [
            [
              {},
              {
                text: "Student Outcomes",
                alignment: "center",
                colSpan: 10,
                style: "outcomeHeader",
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: "Course",
                style: "outcomeHeader",
                colSpan: 1,
                alignment: "center",
              },
              { text: "1", style: "outcomeHeader" },
              { text: "2", style: "outcomeHeader" },
              { text: "3", style: "outcomeHeader" },
              { text: "4", style: "outcomeHeader" },
              { text: "5", style: "outcomeHeader" },
              { text: "6", style: "outcomeHeader" },
              { text: "7", style: "outcomeHeader" },
              { text: "8", style: "outcomeHeader" },
              { text: "9", style: "outcomeHeader" },
              { text: "10", style: "outcomeHeader" },
            ],
          ],
        },
      },
      {
        style: "tableExample",
        color: "#111",
        alignment: "center",
        pageBreak: "before",
        table: {
          widths: [50, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
          headerRows: 1,
          // keepWithHeaderRows: 1,
          body: [
            [
              {},
              {
                text: "Student Outcomes",
                alignment: "center",
                colSpan: 10,
                style: "outcomeHeader",
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: "Course",
                style: "outcomeHeader",
                colSpan: 1,
                alignment: "center",
              },
              { text: "1", style: "outcomeHeader" },
              { text: "2", style: "outcomeHeader" },
              { text: "3", style: "outcomeHeader" },
              { text: "4", style: "outcomeHeader" },
              { text: "5", style: "outcomeHeader" },
              { text: "6", style: "outcomeHeader" },
              { text: "7", style: "outcomeHeader" },
              { text: "8", style: "outcomeHeader" },
              { text: "9", style: "outcomeHeader" },
              { text: "10", style: "outcomeHeader" },
            ],
          ],
        },
      },
      {
        style: "tableExample",
        color: "#111",
        pageBreak: "before",

        alignment: "center",
        table: {
          widths: [50, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
          headerRows: 1,
          // keepWithHeaderRows: 1,
          body: [
            [
              {},
              {
                text: "Student Outcomes",
                alignment: "center",
                colSpan: 10,
                style: "outcomeHeader",
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: "Course",
                style: "outcomeHeader",
                colSpan: 1,
                alignment: "center",
              },
              { text: "1", style: "outcomeHeader" },
              { text: "2", style: "outcomeHeader" },
              { text: "3", style: "outcomeHeader" },
              { text: "4", style: "outcomeHeader" },
              { text: "5", style: "outcomeHeader" },
              { text: "6", style: "outcomeHeader" },
              { text: "7", style: "outcomeHeader" },
              { text: "8", style: "outcomeHeader" },
              { text: "9", style: "outcomeHeader" },
              { text: "10", style: "outcomeHeader" },
            ],
          ],
        },
      },
      {
        style: "tableExample",
        color: "#111",
        pageBreak: "before",

        alignment: "center",
        table: {
          widths: [50, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
          headerRows: 1,
          // keepWithHeaderRows: 1,
          body: [
            [
              {},
              {
                text: "Student Outcomes",
                alignment: "center",
                colSpan: 10,
                style: "outcomeHeader",
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: "Course",
                style: "outcomeHeader",
                colSpan: 1,
                alignment: "center",
              },
              { text: "1", style: "outcomeHeader" },
              { text: "2", style: "outcomeHeader" },
              { text: "3", style: "outcomeHeader" },
              { text: "4", style: "outcomeHeader" },
              { text: "5", style: "outcomeHeader" },
              { text: "6", style: "outcomeHeader" },
              { text: "7", style: "outcomeHeader" },
              { text: "8", style: "outcomeHeader" },
              { text: "9", style: "outcomeHeader" },
              { text: "10", style: "outcomeHeader" },
            ],
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: "center",
      },
      subheader: {
        fontSize: 12,
        bold: true,
      },
      outcomeHeader: {
        bold: true,
      },
    },
  };

  const [reportITJson, setReportITJson] = useState();
  const [reportCEJson, setReportCEJson] = useState();
  const [reportCSJson, setReportCSJson] = useState();
  const [reportCYSJson, setReportCYSJson] = useState();

  const getITReport = async () => {
    try {
      const reportResponse = await GenerateFullReport(2023, "Spring", "IT");
      const reportData = reportResponse.data;
      setReportITJson(reportData);
    } catch (err) {
      console.log(err);
    }
  };

  const getCEReport = async () => {
    try {
      const reportResponse = await GenerateFullReport(2023, "Spring", "CE");
      const reportData = reportResponse.data;
      setReportCEJson(reportData);
    } catch (err) {
      console.log(err);
    }
  };

  const getCSReport = async () => {
    try {
      const reportResponse = await GenerateFullReport(2023, "Spring", "CE");
      const reportData = reportResponse.data;
      setReportCSJson(reportData);
    } catch (err) {
      console.log(err);
    }
  };

  const getCYSReport = async () => {
    try {
      const reportResponse = await GenerateFullReport(2023, "Spring", "CE");
      const reportData = reportResponse.data;
      setReportCYSJson(reportData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getITReport();
    getCEReport();
    getCSReport();
    getCYSReport();
  }, []);

  //Add
  const addMajorGradeToTable = (majorName, majorData) => {
    var index = 0;
    switch (majorName) {
      case "Computer Science":
        index = 1;
        break;
      case "Computer Engineering":
        index = 2;
        break;
      case "Information Technology":
        index = 3;
        break;
      case "Cyber Security":
        index = 4;
        break;
    }
    if (index == 0) {
      console.log("Could not find major!");
      return;
    }
    console.log(majorName, index);
    console.log(document.content);
    document.content[index].table.body.unshift([
      {
        text: majorName,
        style: "subheader",
        colSpan: 11,
        alignment: "center",
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ]);

    for (const course in majorData) {
      let ArrOfOutcomes = majorData[course];
      document.content[index].table.body.push([
        {
          text: course,
          style: "tableHeader",
          colSpan: 1,
          alignment: "center",
        },
        { text: ArrOfOutcomes[0] },
        { text: ArrOfOutcomes[1] },
        { text: ArrOfOutcomes[2] },
        { text: ArrOfOutcomes[3] },
        { text: ArrOfOutcomes[4] },
        { text: ArrOfOutcomes[5] },
        { text: ArrOfOutcomes[6] },
        { text: ArrOfOutcomes[7] },
        { text: ArrOfOutcomes[8] },
        { text: ArrOfOutcomes[9] },
      ]);
    }
    console.log(document);
  };

  const createPdfFile = () => {
    addMajorGradeToTable("Computer Science", reportCSJson);
    addMajorGradeToTable("Computer Engineering", reportCEJson);
    addMajorGradeToTable("Information Technology", reportITJson);
    addMajorGradeToTable("Cyber Security", reportCYSJson);
    pdfMake.createPdf(document).open();
    setTimeout(
      function () {
        //window.location.reload();
      }.bind(this),
      1000
    );
  };

  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={8} margin="auto" w="80%">
      <Button onClick={createPdfFile} colorScheme="teal" w="30%" mt="1%">
        Download pdf
      </Button>
      {reportITJson && (
        <AdminReportTable
          id="MyTable"
          reportITJson={reportITJson}
          majorName={"Information Technology"}
        />
      )}
      {reportCSJson && (
        <AdminReportTable
          reportITJson={reportCSJson}
          majorName={"Computer Science"}
        />
      )}
      {reportCYSJson && (
        <AdminReportTable
          reportITJson={reportCYSJson}
          majorName={"Cyber Security"}
        />
      )}
      {reportCEJson && (
        <AdminReportTable
          reportITJson={reportCEJson}
          majorName={"Computer Engineering"}
        />
      )}
    </Grid>
  );
};

adminFullReport.getInitialProps = ({ query }) => {
  return {
    /*
        semester: query.semester,
        year: query.year,
        id: 'MT2020'
        */
    number: query.number,
    section: query.section,
    semester: query.semester,
    year: query.year,
    id: "MT2020",
  };
};

export default adminFullReport;
