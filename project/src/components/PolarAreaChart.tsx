import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  PolarAreaController,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(PolarAreaController, RadialLinearScale, ArcElement, Tooltip, Legend);

interface PolarAreaChartProps {
  dataFromAPI?: any;
}

export default function PolarAreaChart({ dataFromAPI }: PolarAreaChartProps) {
  const chartData = dataFromAPI || {
    labels: ['Temperature Stability', 'Pressure Stability', 'Energy Efficiency', 'System Health', 'Load Balance'],
    datasets: [
      {
        label: 'System Performance',
        data: [85, 90, 78, 88, 82],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 2,
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
            return `${context.label}: ${context.parsed.r}%`;
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

  return <PolarArea data={chartData} options={options} />;
}