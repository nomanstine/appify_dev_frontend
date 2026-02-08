'use client';

import { memo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TrafficSource } from '@/types/dashboard';

interface TrafficSourcesChartProps {
  data: TrafficSource[];
}

export const TrafficSourcesChart = memo(function TrafficSourcesChart({ data }: TrafficSourcesChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
        <XAxis 
          type="number" 
          stroke="#6B7280"
          style={{ fontSize: '12px' }}
          tickFormatter={(value) => `${value}%`}
        />
        <YAxis 
          type="category"
          dataKey="name" 
          stroke="#6B7280"
          style={{ fontSize: '12px' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1F2937',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
          }}
          formatter={(value: number) => [`${value}%`, 'Traffic']}
        />
        <Bar
          dataKey="value"
          fill="#10b981"
          radius={[0, 8, 8, 0]}
          animationDuration={1000}
        />
      </BarChart>
    </ResponsiveContainer>
  );
});
