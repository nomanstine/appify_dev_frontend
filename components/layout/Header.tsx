'use client';

import { ExportButton } from './ExportButton';
import { ThemeToggle } from './ThemeToggle';
import { NotificationDropdown } from './NotificationDropdown';
import { UserProfile } from './UserProfile';

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between pl-16 pr-6 lg:px-6 py-4">
        <div className="flex-1 hidden lg:block">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Welcome back!
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          <ExportButton />
          <ThemeToggle />
          <NotificationDropdown />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
