import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  orientation?: 'vertical' | 'horizontal';
  dataFromAPI?: any;
}

export default function BarChart({ orientation = 'vertical', dataFromAPI }: BarChartProps) {
  const chartData = dataFromAPI || {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Avg Temperature',
        data: [28, 30, 32, 31, 33, 35],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1,
      },
      {
        label: 'Avg Pressure',
        data: [1012, 1015, 1013, 1018, 1020, 1017],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: orientation === 'horizontal' ? ('y' as const) : ('x' as const),
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.parsed.y ?? context.parsed.x;
            const label = context.dataset.label || '';

            return label.toLowerCase().includes('pressure')
              ? `${label}: ${value} hPa`
              : `${label}: ${value}°C`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: orientation === 'vertical',
        },
      },
      y: {
        grid: {
          display: orientation === 'horizontal',
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}