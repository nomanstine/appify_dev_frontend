'use client';

import { memo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import { UserDistribution } from '@/types/dashboard';

interface UserDistributionChartProps {
  data: UserDistribution[];
}

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as UserDistribution;
    return (
      <div
        style={{
          backgroundColor: '#1F2937',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 12px',
        }}
      >
        <p style={{ color: data.color, fontWeight: '600', margin: 0 }}>
          {data.name}
        </p>
        <p style={{ color: '#fff', fontSize: '14px', margin: '4px 0 0 0' }}>
          {data.value.toLocaleString()} users
        </p>
      </div>
    );
  }
  return null;
};

export const UserDistributionChart = memo(function UserDistributionChart({ data }: UserDistributionChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          animationDuration={1000}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
});
