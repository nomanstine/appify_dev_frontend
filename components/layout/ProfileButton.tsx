'use client';

interface ProfileButtonProps {
  name: string;
  initials: string;
  onClick: () => void;
}

export function ProfileButton({ name, initials, onClick }: ProfileButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 pl-3 pr-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block max-w-[120px] truncate">
        {name}
      </span>
      <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
        {initials}
      </div>
    </button>
  );
}
