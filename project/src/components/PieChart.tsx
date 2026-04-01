import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  dataFromAPI?: any;
}

export default function PieChart({ dataFromAPI }: PieChartProps) {
  const chartData = dataFromAPI || {
    labels: ['Cooling', 'Heating', 'Standby', 'Error'],
    datasets: [
      {
        label: 'System State Distribution',
        data: [40, 25, 20, 15],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(107, 114, 128, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(107, 114, 128, 1)',
          'rgba(245, 158, 11, 1)',
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
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}