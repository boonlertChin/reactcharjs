import './App.css';
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  // const options = {
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     tooltip: {
  //       callbacks: {
  //         label: function (data) {
  //           return "Custom Label Text:" + data.formattedValue;
  //         },
  //       },
  //     },
  //     datalabels: {
  //       formatter: function (value) {
  //          //custom money icon
  //         return "₺" + new Intl.NumberFormat("tr-TR").format(value);
  //       },
  //       color: "white",
  //       font: {
  //         weight: 'bold' as const,
  //         size:14,
  //         family: 'poppins'
  //       },
  //     },
  //   },
  // };
  // The following colors will be used sequentially for the chart bars
  const options = {
  }
  const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        label: '369',
        data: [3,6,9],
        backgroundColor: 'aqua',
        borderColor: 'black', 
        borderWidth: 1,
      },
      {
        label: '369',
        data: [3,8,7],
        backgroundColor: 'green',
        borderColor: 'black', 
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="App">
      <div
        style = {
          { padding: '20px',width: '80%'}
        } 
      >
        <Bar
          data={data} 
          options={options} >
        </Bar>
      </div>
    </div>
  );
}

export default App;
