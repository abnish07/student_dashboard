import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import TabList from "@material-ui/lab/TabList";
import { TabContext, TabPanel } from "@material-ui/lab";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    tabPanelStyle: {
      margin: "24px 165px 10.5px 40px",
      fontSize: "14px",
      fontWeight: 900,
      color: "#2196f",
    },
  })
);

export default function SubjectTabPanel() {
  const classes = useStyles();
  const [value, setValue] = useState("overall");
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <TabList onChange={handleChange} className={classes.tabPanelStyle}>
            <Tab label="Overall" value="overall" style={{ color: "#2196f" }} />
            <Tab label="Math" value="math" />
            <Tab label="Science" value="science" />
            <Tab label="English" value="english" />
            <Tab label="History" value="history" />
          </TabList>

          <TabPanel value="overall">Overall</TabPanel>
          <TabPanel value="math">Math</TabPanel>
          <TabPanel value="science">Science</TabPanel>
          <TabPanel value="english">English</TabPanel>
          <TabPanel value="history">History</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
