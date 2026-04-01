import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

interface BubbleChartProps {
  dataFromAPI?: any;
}

export default function BubbleChart({ dataFromAPI }: BubbleChartProps) {
  const datasets = dataFromAPI || [
    {
      label: 'System 1',
      data: [
        { x: 22, y: 1012, r: 10 },
        { x: 25, y: 1015, r: 14 },
        { x: 28, y: 1013, r: 12 },
        { x: 30, y: 1018, r: 16 },
      ],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
    },
    {
      label: 'System 2',
      data: [
        { x: 24, y: 1010, r: 9 },
        { x: 27, y: 1016, r: 15 },
        { x: 29, y: 1014, r: 13 },
        { x: 32, y: 1019, r: 18 },
      ],
      backgroundColor: 'rgba(16, 185, 129, 0.6)',
      borderColor: 'rgba(16, 185, 129, 1)',
      borderWidth: 2,
    },
  ];

  const data = {
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const { x, y, r } = context.raw;
            return `${context.dataset.label} Temp: ${x}°C Pressure: ${y} hPa Load: ${r}`;
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

  return <Bubble data={data} options={options} />;
}