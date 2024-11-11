import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const dataOptions = {
  week: [1500, 1600, 1700, 1200, 2300, 2000, 2100],
  month: [1200, 1500, 900, 1600, 2500, 1900, 2200, 2700, 2400, 2600, 2700, 2100],
  year: [3000, 3200, 2800, 3400, 3000, 4000, 3500, 3800, 3900, 3600, 3100, 2900],
};

const labels = {
  week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  month: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const Chart = () => {
  const [timeframe, setTimeframe] = useState('week');

  const handleDropdownChange = (event) => {
    setTimeframe(event.target.value);
  };

  const chartData = {
    labels: labels[timeframe],
    datasets: [
      {
        label: 'Power Consumption (kW/h)',
        data: dataOptions[timeframe],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        fill: true,
        tension: 0.3, // Adjusted to match the curve of the first chart
        pointRadius: 5,
        pointHoverRadius: 7,
        pointStyle: 'rectRounded',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Average Power Consumption (kW/h)',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
        },
        ticks: {
          stepSize: 500,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2>Average Power Consumption (kW/h)</h2>
        <select value={timeframe} onChange={handleDropdownChange}>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
