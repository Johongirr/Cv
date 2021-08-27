import React, { Component } from "react";
import {
  CssBaseline,
  Typography,
  Grid,
  Box,
  Container,
  FormControl,
  Button,
  makeStyles,
} from "@material-ui/core";

const styles = {
  header: {
    backgroundColor: "rgb(20, 62, 114)",
    height: "8.5rem",
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    color: "#fff",
  },
  cvImg: {
    maxWidth: "100%",
  },
};

class Cv extends Component {
  render() {
    const { personalInfo, experience, education } = this.props;
    return (
      <section style={{ marginTop: "3rem" }}>
        <header style={styles.header}>
          <Box>
            <Typography variant="h3">{personalInfo.firstName}</Typography>
            <Typography variant="h6">{personalInfo.lastName}</Typography>
          </Box>
        </header>

        <Box p={2}>
          <Grid container spacing={3}>
            <Grid item xs={8} md={9}>
              <Box>
                <Typography variant="h6">Description</Typography>
                <Typography variant="subtitle1">
                  {personalInfo.description}
                </Typography>
              </Box>
              <Box mt={3}>
                <Typography variant="h6">Experience</Typography>
                {experience?.map((exp) => (
                  <Box mt={2} key={exp.id} display="flex" alignItems="baseline">
                    <Box mr={10} width="25%">
                      <strong>
                        {exp.from} - {exp.to}
                      </strong>
                    </Box>
                    <Box>
                      <strong>
                        {exp.position}, {exp.city}
                      </strong>
                      <p>{exp.company}</p>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box mt={3}>
                <Typography variant="h6">Education</Typography>
                {education?.map((educ) => (
                  <Box
                    mt={2}
                    key={educ.id}
                    display="flex"
                    alignItems="baseline"
                  >
                    <Box mr={10} width="25%">
                      <strong>
                        {educ.from} - {educ.to}
                      </strong>
                    </Box>
                    <Box>
                      <strong>
                        {educ.university}, {educ.city}
                      </strong>
                      <p>Degree: {educ.degree}</p>
                      <p>Subject: {educ.subject}</p>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={4} md={3}>
              <img
                style={styles.cvImg}
                src={
                  personalInfo.photo
                    ? personalInfo.photo
                    : "https://michalosman.github.io/cv-application/static/media/empty_avatar.cedf234c.png"
                }
                alt="image of the cv owner"
              />
              <Box mt={2}>
                <Typography variant="h6">Personal Details</Typography>
              </Box>
              <Box mt={1}>
                <strong>Address</strong>
                <p style={{ overflowX: "scroll" }}>{personalInfo.address}</p>
              </Box>
              <Box my={2}>
                <strong>Phone Number</strong>
                <p style={{ overflowX: "scroll" }}>{personalInfo.phoneNum}</p>
              </Box>
              <Box>
                <strong>Email</strong>
                <p style={{ overflowX: "scroll" }}>{personalInfo.email}</p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
    );
  }
}

export default Cv;
