//imports
import { useEffect, useState } from "react";
import { Grid, Button, BreadcrumbLink } from "@chakra-ui/react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import reportIT from "../fake-data/reportIT.json";
import reportCS from "../fake-data/reportCS.json";
import reportCE from "../fake-data/reportCE.json";
import reportCYS from "../fake-data/reportCYS.json";

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

  useEffect(() => {
    getITReport();
  }, []);

  const getITReport = async () => {
    setReportITJson(reportIT);
  };

  const addCsToTable = () => {
    document.content[1].table.body.unshift([
      {
        text: "Computer Science",
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
    for (const course in reportCS) {
      let ArrOfOutcomes = reportCS[course];
      document.content[1].table.body.push([
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
    addMajorGradeToTable("Computer Science", reportCS);
    addMajorGradeToTable("Computer Engineering", reportCE);
    addMajorGradeToTable("Information Technology", reportIT);
    addMajorGradeToTable("Cyber Security", reportCYS);
    pdfMake.createPdf(document).open();
    setTimeout(
      function () {
        //window.location.reload();
      }.bind(this),
      1000
    );
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={8}>
      {reportIT && (
        <AdminReportTable
          id="MyTable"
          reportITJson={reportIT}
          majorName={"Information Technology"}
        />
      )}
      {reportCS && (
        <AdminReportTable
          reportITJson={reportCS}
          majorName={"Computer Science"}
        />
      )}
      {reportCYS && (
        <AdminReportTable
          reportITJson={reportCYS}
          majorName={"Cyber Security"}
        />
      )}
      {reportCE && (
        <AdminReportTable
          reportITJson={reportCE}
          majorName={"Computer Engineering"}
        />
      )}
      <Button onClick={createPdfFile} colorScheme="teal">
        Download pdf
      </Button>
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
