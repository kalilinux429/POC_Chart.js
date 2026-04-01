import { BarChart3, TrendingUp } from 'lucide-react';
import DonutChart from './components/DonutChart';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import RadarChart from './components/RadarChart';
import PolarAreaChart from './components/PolarAreaChart';
import BubbleChart from './components/BubbleChart';
import ScatterChart from './components/ScatterChart';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">RMP Monitoring Dashboard</h1>
          </div>
          <p className="text-slate-600 ml-14">
            Real-time system parameters and performance insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-slate-800">
                System Load Distribution
              </h2>
            </div>
            <div className="h-80">
              <DonutChart />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold text-slate-800">
                System State Overview
              </h2>
            </div>
            <div className="h-80">
              <PieChart />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Temperature vs Pressure (Monthly)
            </h2>
          </div>
          <div className="h-80">
            <BarChart orientation="vertical" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-semibold text-slate-800">
              Temperature vs Pressure (Comparison)
            </h2>
          </div>
          <div className="h-80">
            <BarChart orientation="horizontal" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-slate-800">
                Temperature Trends
              </h2>
            </div>
            <div className="h-80">
              <LineChart dualAxis={false} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-semibold text-slate-800">
                Temperature vs Pressure (Dual Axis)
              </h2>
            </div>
            <div className="h-80">
              <LineChart dualAxis={true} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h2 className="text-lg font-semibold text-slate-800">
                System Performance Metrics
              </h2>
            </div>
            <div className="h-80">
              <RadarChart />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <h2 className="text-lg font-semibold text-slate-800">
                System Stability Analysis
              </h2>
            </div>
            <div className="h-80">
              <PolarAreaChart />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-cyan-600" />
              <h2 className="text-lg font-semibold text-slate-800">
                Temperature vs Pressure vs Load
              </h2>
            </div>
            <div className="h-80">
              <BubbleChart />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-pink-600" />
              <h2 className="text-lg font-semibold text-slate-800">
                Temperature vs Pressure Correlation
              </h2>
            </div>
            <div className="h-80">
              <ScatterChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;