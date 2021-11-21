import React from "react";
import { Typography } from "@mui/material";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    dashboard: {
      width: "auto",
      height: "33px",
      margin: "61px 24px 24px 0",
      marginTop: "61px",
      fontSize: "24px",
      fontWeight: 900,
      color: "#000",
      marginLeft: "24px",
    },
  })
);

export default function DashboardTabs() {
  const classes = useStyles();
  return (
    <div className={classes.dashboard}>
      <Typography> Learning Dashboard </Typography>
    </div>
  );
}
