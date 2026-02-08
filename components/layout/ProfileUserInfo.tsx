'use client';

interface ProfileUserInfoProps {
  name: string;
  email: string;
  role: string;
  initials: string;
}

export function ProfileUserInfo({ name, email, role, initials }: ProfileUserInfoProps) {
  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white text-lg font-semibold flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate" title={name}>
            {name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate" title={email}>
            {email}
          </p>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded truncate max-w-full">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
