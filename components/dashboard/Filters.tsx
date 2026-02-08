'use client';

import { memo, useCallback } from 'react';
import { useDashboardStore } from '@/store/dashboardStore';
import { Calendar, Filter } from 'lucide-react';

export const Filters = memo(function Filters() {
  const filters = useDashboardStore((state) => state.filters);
  const setDateRange = useDashboardStore((state) => state.setDateRange);
  const setUserType = useDashboardStore((state) => state.setUserType);

  const handleDateRangeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setDateRange(e.target.value as any);
  }, [setDateRange]);

  const handleUserTypeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(e.target.value as any);
  }, [setUserType]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-gray-600 dark:text-gray-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">Filters</h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Date Range Filter */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Calendar size={16} className="inline mr-2" />
              Date Range
            </label>
            <select
              value={filters.dateRange}
              onChange={handleDateRangeChange}
              className="w-full sm:w-48 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="12months">Last 12 months</option>
            </select>
          </div>

          {/* User Type Filter */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              User Type
            </label>
            <select
              value={filters.userType}
              onChange={handleUserTypeChange}
              className="w-full sm:w-48 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            >
              <option value="all">All Users</option>
              <option value="free">Free Users</option>
              <option value="premium">Premium Users</option>
              <option value="enterprise">Enterprise Users</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
});
