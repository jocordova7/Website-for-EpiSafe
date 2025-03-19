'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { SkeletonChart } from './Skeleton';
import { useToast } from '../context/ToastContext';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export type ChartDataType = 'heartRate' | 'motion' | 'seizures' | 'eda' | 'temperature';

interface DataPoint {
  timestamp: string;
  value: number;
}

interface DataChartProps {
  dataType: ChartDataType;
  title: string;
  timeRange?: '1h' | '6h' | '24h' | '7d' | '30d';
  data?: DataPoint[];
  liveUpdate?: boolean;
  height?: number;
  showLoading?: boolean;
}

const MOCK_DATA = {
  heartRate: [
    { timestamp: '00:00', value: 75 },
    { timestamp: '00:05', value: 76 },
    { timestamp: '00:10', value: 78 },
    { timestamp: '00:15', value: 77 },
    { timestamp: '00:20', value: 80 },
    { timestamp: '00:25', value: 82 },
    { timestamp: '00:30', value: 79 },
    { timestamp: '00:35', value: 78 },
    { timestamp: '00:40', value: 76 },
    { timestamp: '00:45', value: 77 },
    { timestamp: '00:50', value: 75 },
    { timestamp: '00:55', value: 74 },
  ],
  motion: [
    { timestamp: '00:00', value: 0.2 },
    { timestamp: '00:05', value: 0.3 },
    { timestamp: '00:10', value: 0.4 },
    { timestamp: '00:15', value: 0.2 },
    { timestamp: '00:20', value: 0.1 },
    { timestamp: '00:25', value: 0.3 },
    { timestamp: '00:30', value: 0.5 },
    { timestamp: '00:35', value: 0.6 },
    { timestamp: '00:40', value: 0.4 },
    { timestamp: '00:45', value: 0.3 },
    { timestamp: '00:50', value: 0.2 },
    { timestamp: '00:55', value: 0.1 },
  ],
  seizures: [
    { timestamp: '00:00', value: 0 },
    { timestamp: '00:05', value: 0 },
    { timestamp: '00:10', value: 0 },
    { timestamp: '00:15', value: 0 },
    { timestamp: '00:20', value: 1 }, // Seizure event
    { timestamp: '00:25', value: 1 },
    { timestamp: '00:30', value: 0 },
    { timestamp: '00:35', value: 0 },
    { timestamp: '00:40', value: 0 },
    { timestamp: '00:45', value: 0 },
    { timestamp: '00:50', value: 0 },
    { timestamp: '00:55', value: 0 },
  ],
  eda: [
    { timestamp: '00:00', value: 0.5 },
    { timestamp: '00:05', value: 0.6 },
    { timestamp: '00:10', value: 0.7 },
    { timestamp: '00:15', value: 0.6 },
    { timestamp: '00:20', value: 1.2 }, // Spike during seizure
    { timestamp: '00:25', value: 1.5 }, // Spike during seizure
    { timestamp: '00:30', value: 0.9 },
    { timestamp: '00:35', value: 0.7 },
    { timestamp: '00:40', value: 0.6 },
    { timestamp: '00:45', value: 0.5 },
    { timestamp: '00:50', value: 0.4 },
    { timestamp: '00:55', value: 0.5 },
  ],
  temperature: [
    { timestamp: '00:00', value: 36.6 },
    { timestamp: '00:05', value: 36.6 },
    { timestamp: '00:10', value: 36.7 },
    { timestamp: '00:15', value: 36.7 },
    { timestamp: '00:20', value: 36.8 },
    { timestamp: '00:25', value: 36.9 },
    { timestamp: '00:30', value: 36.8 },
    { timestamp: '00:35', value: 36.7 },
    { timestamp: '00:40', value: 36.7 },
    { timestamp: '00:45', value: 36.6 },
    { timestamp: '00:50', value: 36.6 },
    { timestamp: '00:55', value: 36.5 },
  ],
};

const DataChart = ({
  dataType,
  title,
  timeRange = '1h',
  data,
  liveUpdate = false,
  height = 300,
  showLoading = false,
}: DataChartProps) => {
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: [],
  });
  
  const [liveData, setLiveData] = useState<DataPoint[]>(data || MOCK_DATA[dataType]);
  const [loading, setLoading] = useState(showLoading);
  const [error, setError] = useState<string | null>(null);
  const animationRef = useRef<number | null>(null);
  const { showToast } = useToast();
  
  // Simulate loading state
  useEffect(() => {
    if (showLoading) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showLoading, timeRange]);
  
  // Set up chart data based on data type
  useEffect(() => {
    try {
      const currentData = data || liveData || MOCK_DATA[dataType];
      const labels = currentData.map(point => point.timestamp);
      const values = currentData.map(point => point.value);
      
      let backgroundColor, borderColor, fillColor, gradientColor;
      
      switch (dataType) {
        case 'heartRate':
          backgroundColor = 'rgba(220, 38, 38, 0.1)';
          borderColor = 'rgba(220, 38, 38, 1)';
          fillColor = true;
          gradientColor = ['rgba(220, 38, 38, 0.4)', 'rgba(220, 38, 38, 0.1)', 'rgba(220, 38, 38, 0)'];
          break;
        case 'motion':
          backgroundColor = 'rgba(59, 130, 246, 0.1)';
          borderColor = 'rgba(59, 130, 246, 1)';
          fillColor = true;
          gradientColor = ['rgba(59, 130, 246, 0.4)', 'rgba(59, 130, 246, 0.1)', 'rgba(59, 130, 246, 0)'];
          break;
        case 'seizures':
          backgroundColor = 'rgba(239, 68, 68, 0.5)';
          borderColor = 'rgba(239, 68, 68, 1)';
          fillColor = false;
          gradientColor = ['rgba(239, 68, 68, 0.4)', 'rgba(239, 68, 68, 0.1)', 'rgba(239, 68, 68, 0)'];
          break;
        case 'eda':
          backgroundColor = 'rgba(16, 185, 129, 0.1)';
          borderColor = 'rgba(16, 185, 129, 1)';
          fillColor = true;
          gradientColor = ['rgba(16, 185, 129, 0.4)', 'rgba(16, 185, 129, 0.1)', 'rgba(16, 185, 129, 0)'];
          break;
        case 'temperature':
          backgroundColor = 'rgba(245, 158, 11, 0.1)';
          borderColor = 'rgba(245, 158, 11, 1)';
          fillColor = true;
          gradientColor = ['rgba(245, 158, 11, 0.4)', 'rgba(245, 158, 11, 0.1)', 'rgba(245, 158, 11, 0)'];
          break;
        default:
          backgroundColor = 'rgba(107, 114, 128, 0.1)';
          borderColor = 'rgba(107, 114, 128, 1)';
          fillColor = false;
          gradientColor = ['rgba(107, 114, 128, 0.4)', 'rgba(107, 114, 128, 0.1)', 'rgba(107, 114, 128, 0)'];
      }
      
      setChartData({
        labels,
        datasets: [
          {
            label: title,
            data: values,
            backgroundColor,
            borderColor,
            borderWidth: 2,
            pointRadius: dataType === 'seizures' ? 5 : 3,
            pointBackgroundColor: dataType === 'seizures' 
              ? values.map(value => value > 0 ? 'rgba(239, 68, 68, 1)' : 'rgba(239, 68, 68, 0.2)') 
              : borderColor,
            tension: 0.2,
            fill: fillColor,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: borderColor,
            pointHoverBorderColor: '#ffffff',
            pointHoverBorderWidth: 2,
          },
        ],
      });
      
      setError(null);
    } catch (err) {
      setError('Error loading chart data');
      showToast('Error loading chart data', 'error');
      console.error('Chart data error:', err);
    }
  }, [dataType, title, data, liveData, showToast]);
  
  // Set up live data simulation when liveUpdate is true
  useEffect(() => {
    if (liveUpdate) {
      const updateLiveData = () => {
        setLiveData(prevData => {
          try {
            const newData = [...prevData];
            
            // Remove the first data point
            newData.shift();
            
            // Generate a new data point
            const lastTimestamp = newData[newData.length - 1].timestamp;
            const lastMinutes = parseInt(lastTimestamp.split(':')[1], 10);
            const newMinutes = (lastMinutes + 5) % 60;
            const newHours = lastTimestamp.split(':')[0];
            const newTimestamp = `${newHours}:${newMinutes.toString().padStart(2, '0')}`;
            
            let newValue;
            
            switch (dataType) {
              case 'heartRate':
                // Heart rate varies between 70-90 bpm
                const lastHeartRate = newData[newData.length - 1].value;
                const heartRateChange = Math.random() * 6 - 3; // -3 to +3
                newValue = Math.max(60, Math.min(100, lastHeartRate + heartRateChange));
                break;
              case 'motion':
                // Motion varies between 0-1
                newValue = Math.random() * 0.6;
                break;
              case 'seizures':
                // Seizure events are rare
                const seizureChance = Math.random();
                newValue = seizureChance > 0.95 ? 1 : 0;
                
                // Show notification when seizure is detected
                if (seizureChance > 0.95) {
                  showToast('⚠️ Potential seizure detected', 'warning', 10000);
                }
                break;
              case 'eda':
                // EDA (Electrodermal Activity) varies
                const lastEDA = newData[newData.length - 1].value;
                const edaChange = Math.random() * 0.3 - 0.15; // -0.15 to +0.15
                newValue = Math.max(0.1, Math.min(1.8, lastEDA + edaChange));
                break;
              case 'temperature':
                // Body temperature varies slightly
                const lastTemp = newData[newData.length - 1].value;
                const tempChange = Math.random() * 0.2 - 0.1; // -0.1 to +0.1
                newValue = Math.max(36.0, Math.min(37.5, lastTemp + tempChange));
                break;
              default:
                newValue = 0;
            }
            
            newData.push({ timestamp: newTimestamp, value: newValue });
            return newData;
          } catch (err) {
            console.error('Error updating live data:', err);
            return prevData;
          }
        });
        
        animationRef.current = requestAnimationFrame(updateLiveData);
      };
      
      const intervalId = setInterval(() => {
        updateLiveData();
      }, 5000); // Update every 5 seconds
      
      return () => {
        clearInterval(intervalId);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [liveUpdate, dataType, showToast]);
  
  // Chart options
  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
          font: {
            size: 12,
            weight: 'normal',
          },
          color: '#6B7280',
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.1)',
          drawTicks: false,
        },
        ticks: {
          color: '#6B7280',
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
      y: {
        title: {
          display: true,
          text: getYAxisLabel(dataType),
          font: {
            size: 12,
            weight: 'normal',
          },
          color: '#6B7280',
        },
        min: dataType === 'seizures' ? 0 : undefined,
        max: dataType === 'seizures' ? 1 : undefined,
        grid: {
          color: 'rgba(200, 200, 200, 0.1)',
        },
        ticks: {
          color: '#6B7280',
          callback: function(value) {
            // Convert value to number to ensure toFixed is available
            const numValue = Number(value);
            if (dataType === 'temperature') {
              return numValue.toFixed(1);
            }
            return numValue.toFixed(0);
          }
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          color: '#6B7280',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        titleColor: '#F9FAFB',
        bodyColor: '#F9FAFB',
        cornerRadius: 8,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            const value = context.parsed.y;
            let label = '';
            
            switch (dataType) {
              case 'heartRate':
                label = `${value.toFixed(0)} BPM`;
                break;
              case 'motion':
                label = `Activity: ${value.toFixed(2)}`;
                break;
              case 'seizures':
                label = value > 0 ? 'Seizure Detected!' : 'No Seizure Activity';
                break;
              case 'eda':
                label = `EDA: ${value.toFixed(2)} µS`;
                break;
              case 'temperature':
                label = `${value.toFixed(1)}°C`;
                break;
              default:
                label = `${value}`;
            }
            
            return label;
          }
        }
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.3,
      },
      point: {
        radius: dataType === 'seizures' ? 5 : 0,
        hoverRadius: 6,
      },
    },
  };
  
  function getYAxisLabel(type: ChartDataType): string {
    switch(type) {
      case 'heartRate': return 'Heart Rate (BPM)';
      case 'motion': return 'Activity Level';
      case 'seizures': return 'Seizure Events';
      case 'eda': return 'EDA (µS)';
      case 'temperature': return 'Temperature (°C)';
      default: return '';
    }
  }
  
  if (loading) {
    return <SkeletonChart height={height} />;
  }
  
  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-red-600 dark:text-red-400 flex items-center justify-center" style={{ height: `${height}px` }}>
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {error}
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-[#2C3E50] dark:text-white">{title}</h3>
        {liveUpdate && (
          <div className="flex items-center text-xs text-[#00A878] dark:text-[#00A878]">
            <div className="w-2 h-2 rounded-full bg-[#00A878] mr-1 animate-pulse"></div>
            Live
          </div>
        )}
      </div>
      <div style={{ height: `${height}px` }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DataChart; 