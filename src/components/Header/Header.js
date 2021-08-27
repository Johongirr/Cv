import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "rgb(51, 51, 51)",
    textAlign: "center",
    padding: "1.5rem 0",
  },
  title: {
    color: "#fff",
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Typography className={classes.title} variant="h3">
        CV MAKER
      </Typography>
    </header>
  );
}

export default Header;
