import { memo } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDashboardStore } from '@/store/dashboardStore';

export const ThemeToggle = memo(function ThemeToggle() {
  const darkMode = useDashboardStore((state) => state.darkMode);
  const toggleDarkMode = useDashboardStore((state) => state.toggleDarkMode);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      title={darkMode ? 'Light mode' : 'Dark mode'}
    >
      {darkMode ? (
        <Sun size={20} className="text-gray-600 dark:text-gray-400" />
      ) : (
        <Moon size={20} className="text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
});
