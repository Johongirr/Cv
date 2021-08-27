import {
  CssBaseline,
  Typography,
  Grid,
  Box,
  Container,
  FormControl,
  Button,
} from "@material-ui/core";
import Header from "./components/Header/Header";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Cv from "./components/Cv/Cv";

import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import React, { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
        address: "",
        description: "",
        photo: "",
      },
      education: [
        {
          id: uniqid(),
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
      experience: [
        {
          id: uniqid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
      personalInfoReset: false,
      print: false,
    };
    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.resetAllFields = this.resetAllFields.bind(this);
    this.updatePersonalInfoReset = this.updatePersonalInfoReset.bind(this);
    this.printPDF = this.printPDF.bind(this);
  }
  addEducation() {
    this.setState(
      {
        education: this.state.education.concat({
          id: uniqid(),
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        }),
      },
      () => console.log(this.state.education)
    );
  }
  updateEducation(educ, id) {
    this.setState(
      {
        education: this.state.education.map((e) => {
          if (e.id === id) {
            return Object.assign(e, educ);
          }
          return e;
        }),
      },
      () => console.log(this.state.education)
    );
  }
  deleteEducation(id) {
    const newEducation = this.state.education.filter((ed) => ed.id !== id);
    this.setState({
      education: newEducation,
    });
  }
  addExperience() {
    this.setState(
      {
        experience: this.state.experience.concat({
          id: uniqid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        }),
      },
      () => console.log(this.state.experience)
    );
  }

  updateExperience(exp, id) {
    console.log(exp, id);
    this.setState(
      {
        experience: this.state.experience.map((e) => {
          if (e.id === id) {
            return Object.assign(e, exp);
          }
          return e;
        }),
      },
      () => console.log(this.state.experience)
    );
  }
  deleteExperience(id) {
    const newExperience = this.state.experience.filter((ed) => ed.id !== id);
    this.setState({
      experience: newExperience,
    });
  }
  updatePersonalInfo(info) {
    this.setState(
      {
        personalInfo: Object.assign(this.state.personalInfo, info),
      },
      () => console.log(this.state.personalInfo)
    );
  }
  resetAllFields() {
    this.setState({
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNum: "",
        address: "",
        description: "",
        photo: "",
      },
    });
    this.setState({
      education: [
        {
          id: uniqid(),
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    });
    this.setState({
      experience: [
        {
          id: uniqid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    });
    this.setState({
      personalInfoReset: true,
    });
  }
  updatePersonalInfoReset(val) {
    this.setState({
      personalInfoReset: val,
    });
  }
  printPDF() {
    this.setState({
      print: !this.state.printPDF,
    });
  }
  render() {
    return (
      <>
        <CssBaseline />
        <Header />
        <Container elavation={5} maxWidth="md">
          <PersonalInfo
            updatePersonalInfo={this.updatePersonalInfo}
            personalInfo={this.state.personalInfo}
            personalInfoReset={this.state.personalInfoReset}
            updatePersonalInfoReset={this.updatePersonalInfoReset}
          />
          <Box mt={5}>
            <Box style={{ marginBottom: "-1rem" }}>
              <Typography variant="h5">Education</Typography>
            </Box>
            {this.state.education?.map((e) => (
              <Education
                key={e.id}
                education={e}
                deleteEducation={this.deleteEducation}
                updateEducation={this.updateEducation}
              />
            ))}
          </Box>
          <Box mt={4}>
            <Button
              style={{
                padding: ".7rem",
                marginTop: "0rem",
                backgroundColor: "#222",
              }}
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.addEducation}
            >
              Add
            </Button>
          </Box>

          <Box mt={5}>
            <Box style={{ marginBottom: "-1rem" }}>
              <Typography variant="h5">Experience</Typography>
            </Box>
            {this.state.experience?.map((e) => (
              <Experience
                key={e.id}
                experience={e}
                deleteExperience={this.deleteExperience}
                updateExperience={this.updateExperience}
              />
            ))}
          </Box>
          <Box mt={4}>
            <Button
              style={{ padding: ".7rem", backgroundColor: "#222" }}
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.addExperience}
            >
              Add
            </Button>
          </Box>
          <Box mt={5}>
            <Box>
              <Button
                style={{ padding: ".7rem", backgroundColor: "darkred" }}
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.resetAllFields}
              >
                Reset
              </Button>
            </Box>
          </Box>
          <Box mt={1}>
            <>
              <ReactToPrint content={() => this.componentRef}>
                <PrintContextConsumer>
                  {({ handlePrint }) => (
                    <Button
                      style={{ padding: ".7rem", backgroundColor: "green" }}
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handlePrint}
                    >
                      Generate PDF
                    </Button>
                  )}
                </PrintContextConsumer>
              </ReactToPrint>
              <Cv
                education={this.state.education}
                experience={this.state.experience}
                personalInfo={this.state.personalInfo}
                ref={(el) => (this.componentRef = el)}
              />
            </>
          </Box>
        </Container>
      </>
    );
  }
}

export default App;

/**
 *
 *  APP
 *    PersonalInformation
 *    Education
 *    Experience
 *    CV
 *
 */
