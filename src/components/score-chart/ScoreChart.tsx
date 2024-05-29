"use client";
import React from "react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const ScoreChart = () => {
  Chart.register(CategoryScale);
  // Sample data for demonstration
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    options: {
      plugins: {
        colors: {
          enabled: true,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              stepSize: 5,
            },
          },
        ],
      },
    },
    datasets: [
      {
        label: "Score",
        data: [20, 25, 30, 35, 40, 45, 50],
        fill: false,
        color: "rgba(0,0,0,1)",
        backgroundColor: "rgba(0,0,0,1)",
        borderColor: "rgba(0,0,0,1)",
      },
    ],
  };

  return <Line data={data} />;
};

export default ScoreChart;
