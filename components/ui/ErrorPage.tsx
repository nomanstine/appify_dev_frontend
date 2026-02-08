import { ReactNode } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home } from 'lucide-react';

interface ErrorPageProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
    icon?: ReactNode;
  };
  showHomeButton?: boolean;
  errorDetails?: {
    message?: string;
    digest?: string;
  };
  helpText?: string;
  variant?: 'error' | 'warning' | 'info';
}

export function ErrorPage({
  title,
  description,
  icon,
  action,
  showHomeButton = true,
  errorDetails,
  helpText,
  variant = 'error',
}: ErrorPageProps) {
  const variantStyles = {
    error: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-600 dark:text-red-400',
      helpBg: 'bg-yellow-50 dark:bg-yellow-900/20',
      helpBorder: 'border-yellow-200 dark:border-yellow-800',
      helpText: 'text-yellow-900 dark:text-yellow-200',
    },
    warning: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      text: 'text-yellow-600 dark:text-yellow-400',
      helpBg: 'bg-blue-50 dark:bg-blue-900/20',
      helpBorder: 'border-blue-200 dark:border-blue-800',
      helpText: 'text-blue-900 dark:text-blue-200',
    },
    info: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
      helpBg: 'bg-gray-50 dark:bg-gray-800',
      helpBorder: 'border-gray-200 dark:border-gray-700',
      helpText: 'text-gray-900 dark:text-gray-200',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full`}>
            {icon || <AlertTriangle size={48} className={styles.text} />}
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          {description}
        </p>

        {/* Error Details */}
        {errorDetails?.message && (
          <div className="my-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-mono text-left break-all">
              {errorDetails.message}
            </p>
            {errorDetails.digest && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Error ID: {errorDetails.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        {(action || showHomeButton) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {action && (
              <button
                onClick={action.onClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                {action.icon}
                {action.label}
              </button>
            )}
            {showHomeButton && (
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Home size={20} />
                Go Home
              </Link>
            )}
          </div>
        )}

        {/* Help Text */}
        {helpText && (
          <div className={`mt-12 p-4 ${styles.helpBg} rounded-lg border ${styles.helpBorder}`}>
            <p className={`text-sm ${styles.helpText}`}>
              {helpText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
