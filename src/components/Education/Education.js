import React, { Component } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
  Box,
} from "@material-ui/core";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    };
    this.updateEducation = this.updateEducation.bind(this);
  }
  updateEducation(id, e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.props.updateEducation(this.state, id)
    );
  }
  render() {
    return (
      <section style={{ marginTop: "3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                University Name
              </InputLabel>
              <Input
                name="university"
                onChange={this.updateEducation.bind(
                  null,
                  this.props.education.id
                )}
                value={this.state.university}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                City Name
              </InputLabel>
              <Input
                name="city"
                onChange={this.updateEducation.bind(
                  null,
                  this.props.education.id
                )}
                value={this.state.city}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Degree
              </InputLabel>
              <Input
                name="degree"
                onChange={this.updateEducation.bind(
                  null,
                  this.props.education.id
                )}
                value={this.state.degree}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Subject
              </InputLabel>
              <Input
                name="subject"
                onChange={this.updateEducation.bind(
                  null,
                  this.props.education.id
                )}
                value={this.state.subject}
                placeholder="asdsad"
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">From</InputLabel>
              <Input
                name="from"
                onChange={this.updateEducation.bind(
                  null,
                  this.props.education.id
                )}
                value={this.state.from}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">To</InputLabel>
              <Input
                name="to"
                onChange={this.updateEducation.bind(
                  null,
                  this.props.education.id
                )}
                value={this.state.to}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>
          <Button
            style={{
              padding: ".7rem 0",
              margin: "0 .8rem",
              backgroundColor: "darkred",
            }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => this.props.deleteEducation(this.props.education.id)}
          >
            Delete
          </Button>
        </Grid>
      </section>
    );
  }
}

export default Education;
