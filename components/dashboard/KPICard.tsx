'use client';

import { memo } from 'react';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface KPICardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
}

export const KPICard = memo(function KPICard({ icon: Icon, title, value, change, changeType }: KPICardProps) {
  const isPositive = changeType === 'increase';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${
          isPositive 
            ? 'bg-green-100 dark:bg-green-900/30' 
            : 'bg-blue-100 dark:bg-blue-900/30'
        }`}>
          <Icon 
            size={24} 
            className={
              isPositive 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-blue-600 dark:text-blue-400'
            } 
          />
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${
          isPositive 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-red-600 dark:text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>

      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
        {title}
      </h3>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        {isPositive ? '+' : ''}{change}% from last period
      </p>
    </div>
  );
});
