import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function AssessmentChart() {
  const [data, setData] = useState({
    options: {
      chart: {
        id: "bar",
        height: 350,
        stacked: true,
      },

      tooltip: {
        enabled: true,
      },
      fill: {
        opacity: 1,
      },
      dataLabels: {
        enabled: false,
      },
     
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "15%",
          borderRadius: 5,
        },
      },
      xaxis: {
        categories: [
          "April 2021",
          "May 2021",
          "June 2021",
          "July 2021",
          "August 2021",
          "September 2021",
        ],
      },
    },
    series: [
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27],
      },
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43],
      },
    ],
  });

  return (
    <div style={{ margin: "50px" }}>
      <div className="row">
        <div className="mixed-chart">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}
