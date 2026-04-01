import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

interface ScatterChartProps {
  dataFromAPI?: any;
}

export default function ScatterChart({ dataFromAPI }: ScatterChartProps) {
  const chartData = dataFromAPI || {
    datasets: [
      {
        label: 'Temperature vs Pressure',
        data: [
          { x: 22, y: 1012 },
          { x: 24, y: 1015 },
          { x: 26, y: 1013 },
          { x: 28, y: 1018 },
          { x: 30, y: 1020 },
          { x: 32, y: 1017 },
          { x: 34, y: 1019 },
          { x: 36, y: 1022 },
        ],
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 2,
        showLine: false,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'Trend Line',
        data: [
          { x: 22, y: 1010 },
          { x: 26, y: 1014 },
          { x: 30, y: 1018 },
          { x: 34, y: 1020 },
          { x: 36, y: 1023 },
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        showLine: true,
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const { x, y } = context.parsed;
            return `${context.dataset.label}: Temp ${x}°C, Pressure ${y} hPa`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Pressure (hPa)',
        },
      },
    },
  };

  return <Scatter data={chartData} options={options} />;
}