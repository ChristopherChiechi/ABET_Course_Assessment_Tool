//imports
import { useEffect, useState } from "react";
import { Grid, Button } from "@chakra-ui/react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import reportIT from "../fake-data/reportIT.json";
import reportCs from "../fake-data/reportCS.json";
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
          widths: [
            50, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
          ],
          headerRows: 1,
          // keepWithHeaderRows: 1,
          body: [
            [
              { text: "Student Outcomes", alignment: "center", colSpan: 16 },
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
              { text: "11", style: "outcomeHeader" },
              { text: "12", style: "outcomeHeader" },
              { text: "13", style: "outcomeHeader" },
              { text: "14", style: "outcomeHeader" },
              { text: "15", style: "outcomeHeader" },
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
          widths: [
            50, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
          ],
          headerRows: 1,
          // keepWithHeaderRows: 1,
          body: [
            [
              { text: "Student Outcomes", alignment: "center", colSpan: 16 },
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
              { text: "11", style: "outcomeHeader" },
              { text: "12", style: "outcomeHeader" },
              { text: "13", style: "outcomeHeader" },
              { text: "14", style: "outcomeHeader" },
              { text: "15", style: "outcomeHeader" },
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
    document.content[2].table.body.unshift([
      {
        text: "Computer Science",
        style: "subheader",
        colSpan: 16,
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
      {},
      {},
      {},
      {},
      {},
    ]);
    for (const course in reportIT) {
      let ArrOfOutcomes = reportCs[course];
      document.content[2].table.body.push([
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
        { text: ArrOfOutcomes[10] },
        { text: ArrOfOutcomes[11] },
        { text: ArrOfOutcomes[12] },
        { text: ArrOfOutcomes[13] },
        { text: ArrOfOutcomes[14] },
      ]);
    }
    console.log(document);
    document.content[2].table.body.push([
      {
        text: " ",
        style: "tableHeader",
        colSpan: 1,
        alignment: "center",
      },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
    ]);

    document.content[2].table.body.push([
      {
        text: "All",
        style: "tableHeader",
        colSpan: 1,
        alignment: "center",
      },
      { text: "2" },
      { text: "15" },
      { text: "6" },
      { text: "9" },
      { text: "3" },
      { text: "2" },
      { text: "4" },
      { text: "3" },
      { text: "6" },
      { text: "5" },
      { text: "1" },
      { text: "0" },
      { text: "0" },
      { text: "0" },
      { text: "0" },
    ]);

    document.content[2].table.body.push([
      {
        text: "Out of",
        style: "tableHeader",
        colSpan: 1,
        alignment: "center",
      },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
    ]);
  };
  //Add IT information to table for pdf
  const addItToTable = () => {
    document.content[1].table.body.unshift([
      {
        text: "Information Technology",
        style: "subheader",
        colSpan: 16,
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
      {},
      {},
      {},
      {},
      {},
    ]);
    for (const course in reportIT) {
      let ArrOfOutcomes = reportIT[course];
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
        { text: ArrOfOutcomes[10] },
        { text: ArrOfOutcomes[11] },
        { text: ArrOfOutcomes[12] },
        { text: ArrOfOutcomes[13] },
        { text: ArrOfOutcomes[14] },
      ]);
    }
    console.log(document);
    document.content[1].table.body.push([
      {
        text: " ",
        style: "tableHeader",
        colSpan: 1,
        alignment: "center",
      },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
      { text: "" },
    ]);

    document.content[1].table.body.push([
      {
        text: "All",
        style: "tableHeader",
        colSpan: 1,
        alignment: "center",
      },
      { text: "2" },
      { text: "15" },
      { text: "6" },
      { text: "9" },
      { text: "3" },
      { text: "2" },
      { text: "4" },
      { text: "3" },
      { text: "6" },
      { text: "5" },
      { text: "1" },
      { text: "0" },
      { text: "0" },
      { text: "0" },
      { text: "0" },
    ]);

    document.content[1].table.body.push([
      {
        text: "Out of",
        style: "tableHeader",
        colSpan: 1,
        alignment: "center",
      },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
      { text: "30" },
    ]);
  };

  const createPdfFile = () => {
    addItToTable();
    addCsToTable();
    pdfMake.createPdf(document).open();
    setTimeout(
      function () {
        window.location.reload();
      }.bind(this),
      1000
    );
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={8}>
      {reportITJson && (
        <AdminReportTable
          id="MyTable"
          reportITJson={reportITJson}
          majorName={"Information Technology"}
        />
      )}
      {reportITJson && (
        <AdminReportTable
          reportITJson={reportCs}
          majorName={"Computer Science"}
        />
      )}
      {reportITJson && (
        <AdminReportTable
          reportITJson={reportCs}
          majorName={"Cyber Security"}
        />
      )}
      {reportITJson && (
        <AdminReportTable
          reportITJson={reportCs}
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
