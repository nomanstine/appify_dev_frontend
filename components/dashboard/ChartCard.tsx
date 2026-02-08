'use client';

import { memo, ReactNode } from 'react';
import { EmptyState } from '@/components/ui';

interface ChartCardProps {
  title: string;
  children: ReactNode;
  hasData: boolean;
  emptyTitle?: string;
  emptyMessage?: string;
}

export const ChartCard = memo(function ChartCard({ 
  title, 
  children, 
  hasData,
  emptyTitle = "No Data",
  emptyMessage = "Data is not available for the selected period."
}: ChartCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      {hasData ? (
        children
      ) : (
        <EmptyState
          title={emptyTitle}
          message={emptyMessage}
        />
      )}
    </div>
  );
});
