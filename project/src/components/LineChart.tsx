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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  dualAxis?: boolean;
  dataFromAPI?: any;
}

export default function LineChart({ dualAxis = false, dataFromAPI }: LineChartProps) {
  const chartData = dataFromAPI || {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Temperature',
        data: [28, 30, 32, 31, 33, 35],
        borderColor: 'rgba(239, 68, 68, 1)',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        tension: 0.4,
        fill: true,
        yAxisID: 'y',
      },
      ...(dualAxis
        ? [
            {
              label: 'Pressure',
              data: [1012, 1015, 1013, 1018, 1020, 1017],
              borderColor: 'rgba(59, 130, 246, 1)',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              tension: 0.4,
              fill: true,
              yAxisID: 'y1',
            },
          ]
        : [
            {
              label: 'Avg Temperature',
              data: [29, 31, 31, 32, 34, 34],
              borderColor: 'rgba(34, 197, 94, 1)',
              backgroundColor: 'rgba(34, 197, 94, 0.2)',
              borderDash: [5, 5],
              tension: 0.4,
              fill: false,
              yAxisID: 'y',
            },
          ]),
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;

            return label.toLowerCase().includes('pressure')
              ? `${label}: ${value} hPa`
              : `${label}: ${value}°C`;
          },
        },
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
      ...(dualAxis && {
        y1: {
          type: 'linear' as const,
          position: 'right' as const,
          title: {
            display: true,
            text: 'Pressure (hPa)',
          },
          grid: {
            drawOnChartArea: false,
          },
        },
      }),
    },
  };

  return <Line data={chartData} options={options} />;
}