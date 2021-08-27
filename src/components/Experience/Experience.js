import React, { Component } from "react";
import {
  Typography,
  makeStyles,
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
  Box,
} from "@material-ui/core";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };
    this.updateExperience = this.updateExperience.bind(this);
  }
  updateExperience(id, e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.props.updateExperience(this.state, id)
    );
  }

  render() {
    return (
      <section style={{ marginTop: "3rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Position
              </InputLabel>
              <Input
                name="position"
                onChange={this.updateExperience.bind(
                  null,
                  this.props.experience.id
                )}
                value={this.state.position}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Company
              </InputLabel>
              <Input
                name="company"
                onChange={this.updateExperience.bind(
                  null,
                  this.props.experience.id
                )}
                value={this.state.company}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">From</InputLabel>
              <Input
                name="from"
                onChange={this.updateExperience.bind(
                  null,
                  this.props.experience.id
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
                onChange={this.updateExperience.bind(
                  null,
                  this.props.experience.id
                )}
                value={this.state.to}
                id="standard-adornment-amount"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">City</InputLabel>
              <Input
                name="city"
                onChange={this.updateExperience.bind(
                  null,
                  this.props.experience.id
                )}
                value={this.state.city}
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
            onClick={() =>
              this.props.deleteExperience(this.props.experience.id)
            }
          >
            Delete
          </Button>
        </Grid>
      </section>
    );
  }
}

export default Experience;
