'use client';

import { ArrowLeft } from 'lucide-react';
import { ErrorPage } from '@/components/ui';

export default function NotFound() {
  return (
    <ErrorPage
      title="Page Not Found"
      description="Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed."
      icon={
        <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800">
          404
        </h1>
      }
      action={{
        label: 'Go Back',
        onClick: () => window.history.back(),
        icon: <ArrowLeft size={20} />,
      }}
      helpText="Need help? Try checking the URL or contact support if you believe this is an error."
      variant="info"
    />
  );
}
