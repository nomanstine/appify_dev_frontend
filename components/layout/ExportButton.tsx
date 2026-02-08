import { memo, useCallback } from 'react';
import { Download } from 'lucide-react';
import { useDashboardStore } from '@/store/dashboardStore';
import { exportToCSV } from '@/lib/api';

export const ExportButton = memo(function ExportButton() {
  const data = useDashboardStore((state) => state.data);

  const handleExport = useCallback(() => {
    if (data) {
      exportToCSV(data);
    }
  }, [data]);

  return (
    <button
      onClick={handleExport}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      title="Export to CSV"
      disabled={!data}
    >
      <Download size={20} className="text-gray-600 dark:text-gray-400" />
    </button>
  );
});
