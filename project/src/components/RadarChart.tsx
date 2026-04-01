import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadarController,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadarController, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface RadarChartProps {
  dataFromAPI?: any;
}

export default function RadarChart({ dataFromAPI }: RadarChartProps) {
  const chartData = dataFromAPI || {
    labels: [
      'Temperature Stability',
      'Pressure Stability',
      'Energy Efficiency',
      'System Health',
      'Load Balance',
      'Response Time',
    ],
    datasets: [
      {
        label: 'System 1',
        data: [85, 90, 78, 88, 82, 80],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
      },
      {
        label: 'System 2',
        data: [78, 85, 88, 82, 86, 89],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(16, 185, 129, 1)',
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
            return `${context.dataset.label}: ${context.parsed.r}%`;
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Radar data={chartData} options={options} />;
}