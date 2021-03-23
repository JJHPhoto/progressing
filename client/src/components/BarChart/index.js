import React from "react";
import {
  Bar,
  // Line,
  // Pie
} from "react-chartjs-2";

const BarChart = () => {
  return (
    <div className="chartjs">
      <Bar
        data={{
          labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          datasets: [
            {
              label: "Goals completed",
              data: [12, 19, 3, 5, 2, 3, 20],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 90, 122, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 90, 122, 0.2)",
              ],
              borderWidth: 1,
            },
            {
              label: "Milestones completed",
              data: [1, 2, 3, 4, 5, 6, 7],
              backgroundColor: "#01A35A",
              // backgroundColor: "rbga(1, 163, 90, 0.2)",
              //rbg values of same color. trying to get working so that i can change oppacity.
              borderWidth: "#01A35A",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
