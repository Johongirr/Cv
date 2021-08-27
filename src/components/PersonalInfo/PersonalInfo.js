import React, { Component } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  Grid,
  Box,
  TextField,
  IconButton,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
      address: "",
      description: "",
      photo: "",
    };
    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
    this.getBase64 = this.getBase64.bind(this);
  }
  updatePersonalInfo(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.props.updatePersonalInfo(this.state)
    );
  }
  componentDidUpdate() {
    if (this.props.personalInfoReset) {
      this.setState(
        {
          firstName: "",
          lastName: "",
          email: "",
          phoneNum: "",
          address: "",
          description: "",
          photo: "",
        },
        () => this.props.updatePersonalInfoReset(false)
      );
    }
  }
  getBase64(e) {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState(
        {
          photo: reader.result,
        },
        () => this.props.updatePersonalInfo(this.state)
      );
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  render() {
    return (
      <section style={{ marginTop: "3rem" }}>
        <Typography variant="h5">Personal Information</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                First Name
              </InputLabel>
              <Input
                name="firstName"
                value={this.state.firstName}
                id="standard-adornment-amount"
                onChange={this.updatePersonalInfo}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Last Name
              </InputLabel>
              <Input
                name="lastName"
                value={this.state.lastName}
                id="standard-adornment-amount"
                onChange={this.updatePersonalInfo}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                id="standard-adornment-amount"
                onChange={this.updatePersonalInfo}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Phone Number
              </InputLabel>
              <Input
                name="phoneNum"
                value={this.state.phoneNum}
                id="standard-adornment-amount"
                onChange={this.updatePersonalInfo}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box mt={3}>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount">Address</InputLabel>
            <Input
              name="address"
              value={this.state.address}
              id="standard-adornment-amount"
              onChange={this.updatePersonalInfo}
            />
          </FormControl>
        </Box>
        <Box mt={3}>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount"></InputLabel>
            <Input
              type="file"
              name="photo"
              value=""
              id="standard-adornment-amount"
              onChange={this.getBase64}
            />
          </FormControl>
        </Box>

        <Box mt={3}>
          <FormControl fullWidth>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              placeholder="Description"
              variant="outlined"
              name="description"
              value={this.state.description}
              onChange={this.updatePersonalInfo}
            />
          </FormControl>
        </Box>
      </section>
    );
  }
}

export default PersonalInfo;
