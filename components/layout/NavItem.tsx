import { memo } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  name: string;
  href: string;
  icon: LucideIcon;
  collapsed: boolean;
  onClick?: () => void;
}

export const NavItem = memo(function NavItem({ name, href, icon: Icon, collapsed, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg
        text-gray-700 dark:text-gray-300
        hover:bg-primary-50 dark:hover:bg-gray-700
        hover:text-primary-600 dark:hover:text-primary-400
        transition-all duration-200
        ${collapsed ? 'justify-center' : ''}
      `}
      title={collapsed ? name : ''}
      onClick={onClick}
    >
      <Icon size={20} />
      {!collapsed && <span className="font-medium">{name}</span>}
    </Link>
  );
});
