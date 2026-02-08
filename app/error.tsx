'use client';

import { useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { ErrorPage } from '@/components/ui';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Dashboard Error:', error);
  }, [error]);

  return (
    <ErrorPage
      title="Something Went Wrong"
      description="We encountered an error while loading the dashboard."
      errorDetails={{
        message: error.message,
        digest: error.digest,
      }}
      action={{
        label: 'Try Again',
        onClick: reset,
        icon: <RefreshCw size={20} />,
      }}
      helpText="Still having issues? Try refreshing the page or clearing your browser cache. If the problem persists, please contact support."
    />
  );
}
