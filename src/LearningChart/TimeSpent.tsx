import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function TimeSpent() {
  const [data, setData] = useState({
    series: [44, 55, 67, 83, 17, 80, 28, 120],
    options: {
      chart: {
        height: 350,
        id: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            innerRadius: "35%",
            exploded: true,
          },
          expandOnClick: true,
        },
      },
      fill: {
        type: "solid",
        opacity: 0.9,
        colors: ["#6BD540"],
        gradient: {
          shade: 'dark',
          type: "diagonal1",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.2,
          opacityTo: 0.5,
          
      },
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#6BD540",
          shadeTo: "dark",
        },
      },
      states: {
        normal: {
          filter: {
            type: "lighten",
            value: 0.1,
          },
        },
        hover: {
          filter: {
            type: "lighten",
            value: 0.1,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "darken",
            value: 0.35,
          },
        },
      },
    },
  });

  return (
    <div style={{ margin: "50px" }}>
      <div className="row">
        <div className="mixed-chart">
          <ReactApexChart
            //@ts-ignore
            options={data.options}
            series={data.series}
            type="donut"
            width="500"
            theme={data.options.theme.monochrome}
          />
        </div>
      </div>
    </div>
  );
}
