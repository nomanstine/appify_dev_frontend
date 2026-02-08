'use client';

import { ReactNode } from 'react';

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string;
}

export function DropdownMenu({ 
  isOpen, 
  onClose, 
  children,
  width = 'w-64' 
}: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-10"
        onClick={onClose}
      />
      <div className={`absolute right-0 mt-2 ${width} bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20`}>
        {children}
      </div>
    </>
  );
}
