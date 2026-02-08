'use client';

interface ChartSkeletonProps {
  count?: number;
}

export function ChartSkeleton({ count = 4 }: ChartSkeletonProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4" />
          <div className="h-80 bg-gray-100 dark:bg-gray-700/50 rounded-lg animate-pulse flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-gray-300 dark:border-gray-600 border-t-primary-500 rounded-full animate-spin" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Loading chart data...
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
