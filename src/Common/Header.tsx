import React from "react";
import { Button } from "@mui/material";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    logo: {
      [theme.breakpoints.up("sm")]: {
        marginLeft: "30px",
      },
      width: "114px",
      height: "40px",
      margin: "0 0 0 29px",
      objectFit: "contain",
    },
    backButton: {
      // [theme.breakpoints.up('sm')]: {
      //   left: '90%',
      // },
      position: "relative",

      marginTop: "-70px",

      fontSize: "11px",

      border: "1px solid #ffffff",
      color: "#ffffff",
      textTransform: "none",
      // width: 66px;
      height: "31px",
      // margin: 11px 0 61px 481px,
      padding: "6px 17px 6px 18px",
      borderRadius: "18px",
      boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.1)",
      backgroundColor: "#16194f",
    },
  })
);
export default function Header() {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img
        className={classes.root}
        src="https://cdn.zeplin.io/5f09f9837bdb689c80f5a1c7/assets/B21BEC72-58CD-40E1-A612-40F36DB9D1CE.svg"
      />
      <Button
        style={{ backgroundColor: "#ff0000" }}
        className={classes.backButton}
      >
        {" "}
        Back{" "}
      </Button>
    </div>
  );
}
