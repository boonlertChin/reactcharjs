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
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function App() {
  // The following colors will be used sequentially for the chart bars
  const options = {
    plugins: {
      title: {
          display: true,
          text: 'Custom Chart Title',
          padding: {
              top: 10,
              bottom: 30
          }
      },
      legend: {
        display: true,
        // labels: {
        //   color: 'rgb(255, 255, 132)'
        // }
      },
      tooltip: {
        callbacks: {
          label: function (data) {
            return "Custom Label Text:" + data.formattedValue;
          },
        },
      },
      datalabels: {
        formatter: function (value) {
          return "₺" + new Intl.NumberFormat("tr-TR").format(value);
        },
        color: "white",
        font: {
          weight: 'bold',
          size: 14,
          family: 'poppins'
        },
      }
    },
    scales: {
      x: {
          stacked: true,
          grid: {
            offset: true,
          },
          // title: {
          //   color: 'red',
          //   display: true,
          //   text: 'Day'
          // }
      },
      y: {
          stacked: true,
          min: 0,
          max: 20,
          title: {
            color: 'red',
            display: true,
            text: 'Bath'
          },
          ticks: {
            stepSize: 5,
            callback: function(value, index, ticks) {
              return '$' + value;
            }
          }
      }
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const { datasetIndex, index } = elements[0];
        const dataset = data.datasets[datasetIndex];
        const value = dataset.data[index];
        const label = data.labels[index];
        console.log(`Label: ${label}, Value: ${value}`);
      }
    }
  };
  const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [
      {
        label: 'ชั่วโมงการทำงาน',
        data: [3,1,9],
        backgroundColor: 'aqua',
        borderColor: 'black', 
        borderWidth: 1,
      },
      {
        label: 'ชั่วโมงหยุดพัก',
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
