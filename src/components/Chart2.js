import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { getData as getResultData, dataKeys } from "../services/WinnerResult";

function Chart2() {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getResultData();

    if (data) {
      setResults(data);
    }
  };

  return (
    <div>
      <div className="chart">
        <div className="graph">
          <Bar
            data={results}
            options={{
              title: {
                display: true,
                text:
                  "Bar graph representation for the number of times a team has won from 2008-2017",
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "bottom",
              },
            }}
          />
        </div>
        {/* <Line
          data={this.data}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
        */}
        <div className="graph">
          <Pie
            data={results}
            options={{
              title: {
                display: true,
                text:
                  "Pie Chart representation for the number of times a team has won from 2008-2017",
                fontSize: 25,
              },
              legend: {
                display: true,
                position: "bottom",
              },
            }}
          />
        </div>
        {/*
        <Doughnut
          data={this.data}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        /> */}
      </div>
    </div>
  );
}

export default Chart2;
