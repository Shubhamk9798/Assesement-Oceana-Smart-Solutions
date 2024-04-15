import React, { useState } from "react";
import "./App.css";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Define the styles for the PDF document
const borderColor = "black";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",

    backgroundColor: "#fff",

    padding: 20,
    margin: "30px 20px",
  },

  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "skyblue",
    marginBottom: 10,
    alignItems: "center",
    margin: "0px auto 10px auto",
  },

  name: {
    fontSize: 18,

    marginBottom: 10,
    alignItems: "center",
    margin: "0px auto 10px auto",
  },

  date: {
    fontSize: 14,

    color: "#666",

    alignItems: "center",
    margin: "0px auto 10px auto",
  },
  container: {
    flexDirection: "row",
    borderBottomColor: "black",
    backgroundColor: "",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",

    flexGrow: 1,
  },
  container2: {
    flexDirection: "row",
    borderBottomColor: "black",
    backgroundColor: "skyblue",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  year: {
    width: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  oneTimeFees: {
    width: "25%%",
    borderRightColor: borderColor,
    borderLeftColor: borderColor,
    borderRightWidth: 1,
  },
  tutionFees: {
    width: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  installments: {
    width: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
});
const BtechTableHeader = () => (
  <View style={styles.container2}>
    <Text style={styles.year}>Year</Text>
    <Text style={styles.oneTimeFees}>One Time Fees</Text>
    <Text style={styles.tutionFees}>Tution Fees</Text>
    <Text style={styles.installments}>Installments</Text>
  </View>
);
const BtechTableHeader2 = () => (
  <View style={styles.container}>
    <Text style={styles.year}>1</Text>
    <Text style={styles.oneTimeFees}>500</Text>
    <Text style={styles.tutionFees}>160</Text>
    <Text style={styles.installments}>4 &times; 165</Text>
  </View>
);
const BtechTableHeader3 = () => (
  <View style={styles.container}>
    <Text style={styles.year}>2</Text>
    <Text style={styles.oneTimeFees}>-</Text>
    <Text style={styles.tutionFees}>160</Text>
    <Text style={styles.installments}>4 &times; 40</Text>
  </View>
);
const MtechTableHeader2 = () => (
  <View style={styles.container}>
    <Text style={styles.year}>1</Text>
    <Text style={styles.oneTimeFees}>600</Text>
    <Text style={styles.tutionFees}>260</Text>
    <Text style={styles.installments}>4 &times; 215</Text>
  </View>
);
const MtechTableHeader3 = () => (
  <View style={styles.container}>
    <Text style={styles.year}>2</Text>
    <Text style={styles.oneTimeFees}>-</Text>
    <Text style={styles.tutionFees}>260</Text>
    <Text style={styles.installments}>4 &times; 65</Text>
  </View>
);

// Define the component for the B.Tech course

const BTech = ({ name, date }) => (
  <View style={styles.page}>
    <Text style={styles.name}>Name: {name}</Text>
    <Text style={styles.courseTitle}>Course : B.Tech Course</Text>
    <Text style={styles.date}>Date of Offer: {date}</Text>
    <Text style={styles.name}>Fees Structure : </Text>
    <BtechTableHeader />
    <BtechTableHeader2 />
    <BtechTableHeader3 />
  </View>
);

// Define the component for the M.Tech course

const MTech = ({ name, date }) => (
  <View style={styles.page}>
    <Text style={styles.courseTitle}>M.Tech Course</Text>

    <Text style={styles.name}>Name: {name}</Text>

    <Text style={styles.date}>Date of Offer: {date}</Text>

    <BtechTableHeader />
    <MtechTableHeader2 />
    <MtechTableHeader3 />
  </View>
);

// Define the main App component

const App = () => {
  // Set up the state for the form inputs

  const [name, setName] = useState("");

  const [course, setCourse] = useState("B.Tech");

  // Define the function to genetutionFees the PDF

  const genetutionFeesPDF = () => {
    const currentDate = new Date().toLocaleDateString();

    let pdfTemplate;

    if (course === "B.Tech") {
      pdfTemplate = <BTech name={name} date={currentDate} />;
    } else {
      pdfTemplate = <MTech name={name} date={currentDate} />;
    }

    // Render the PDF document

    const pdfDoc = (
      <Document>
        <Page>{pdfTemplate}</Page>
      </Document>
    );

    // Return the PDFDownloadLink component

    return (
      <PDFDownloadLink document={pdfDoc} fileName="Course_selection_Fees">
        {({ blob }) => <button className="btn-dounload">Download PDF</button>}
      </PDFDownloadLink>
    );
  };

  // Render the form and the genetutionFees PDF button

  return (
    <div className="main-outer-div">
      <label className="Name">
        Name:
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <br />

      <label className="Name">
        Course:
        <select
          className=" selector "
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option className="selector-options" value="B.Tech">
            B.Tech
          </option>

          <option value="M.Tech">M.Tech</option>
        </select>
      </label>

      <br />

      {genetutionFeesPDF()}
    </div>
  );
};

export default App;
