'use client';

import { useState, useEffect } from 'react';
import { User, Settings, LogOut, HelpCircle } from 'lucide-react';
import { useDashboardStore } from '@/store/dashboardStore';
import { ProfileButton } from './ProfileButton';
import { ProfileUserInfo } from './ProfileUserInfo';
import { ProfileMenuItem } from './ProfileMenuItem';
import { DropdownMenu } from './DropdownMenu';

const menuItems = [
  { href: '/profile', icon: User, label: 'My Profile' },
  { href: '/settings', icon: Settings, label: 'Settings' },
  { href: '/help', icon: HelpCircle, label: 'Help & Support' },
];

export function UserProfile() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { userProfile: user, userProfileLoading, fetchUserProfile } = useDashboardStore();

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  const handleLogout = () => {
    setShowDropdown(false);
    // Add logout logic here
  };

  if (userProfileLoading || !user) {
    return (
      <div className="flex items-center gap-2 pl-3 pr-2 py-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative">
      <ProfileButton
        name={user.name}
        initials={user.initials}
        onClick={() => setShowDropdown(!showDropdown)}
      />

      <DropdownMenu isOpen={showDropdown} onClose={() => setShowDropdown(false)}>
        <ProfileUserInfo
          name={user.name}
          email={user.email}
          role={user.role}
          initials={user.initials}
        />

        <div className="p-2">
          {menuItems.map((item) => (
            <ProfileMenuItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              onClick={() => setShowDropdown(false)}
            />
          ))}
        </div>

        <div className="p-2 border-t border-gray-200 dark:border-gray-700">
          <ProfileMenuItem
            icon={LogOut}
            label="Logout"
            onClick={handleLogout}
            variant="danger"
          />
        </div>
      </DropdownMenu>
    </div>
  );
}
