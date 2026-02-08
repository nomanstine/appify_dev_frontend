'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ProfileMenuItemProps {
  href?: string;
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  variant?: 'default' | 'danger';
}

export function ProfileMenuItem({ 
  href, 
  icon: Icon, 
  label, 
  onClick,
  variant = 'default' 
}: ProfileMenuItemProps) {
  const baseClasses = "flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors";
  const variantClasses = {
    default: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
    danger: "text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        <Icon size={16} />
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <button className={`${className} w-full`} onClick={onClick}>
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );
}
