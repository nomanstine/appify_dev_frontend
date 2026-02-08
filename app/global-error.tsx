'use client';

import { ErrorPage } from '@/components/ui';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-gray-50 dark:bg-gray-900">
        <ErrorPage
          title="Critical Error"
          description="The application encountered a critical error and needs to restart."
          action={{
            label: 'Restart Application',
            onClick: reset,
          }}
        />
      </body>
    </html>
  );
}
