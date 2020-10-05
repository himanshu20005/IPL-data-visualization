import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

import { getData as getResultData, dataKeys } from "../services/WinnerResult";
function Chart() {
  const defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
  };
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
    <div className="chart">
      <Bar
        data={results}
        options={{
          title: {
            display: true,
            //text: "Largest Cities In " + this.props.location,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />

      {/* <Line
        data={this.state.chartData}
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

      <Pie
        data={this.state.chartData}
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
      <Doughnut
        data={this.state.chartData}
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
  );
}

export default Chart;
