import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Common/Header";
import DashboardTabs from "./Common/DashboardTabs";
import SubjectTabPanel from "./Common/TabPanel";

function App() {
  return (
    <div>
      <Header />
      <DashboardTabs />
      <SubjectTabPanel />
    </div>
  );
}

export default App;
