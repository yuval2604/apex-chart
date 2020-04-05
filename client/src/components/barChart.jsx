import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        annotations: {
          points: [
            {
              x: "",
              seriesIndex: 0,
              label: {
                borderColor: "#775DD0",
                offsetY: 0,
                style: {
                  color: "#fff",
                  background: "#775DD0"
                },
                text: "This is U "
              }
            }
          ]
        },
        chart: {
          height: 350,
          type: "bar"
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },

        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"]
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: this.props.categories
        },
        yaxis: {
          title: {
            text: "Servings"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          }
        }
      },
      series: [
        {
          name: "Servings",
          data: this.props.data
        }
      ]
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="350"
        />
      </div>
    );
  }
}

export default BarChart;
