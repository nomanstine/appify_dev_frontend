'use client';

import { useDashboardStore } from '@/store/dashboardStore';
import { DollarSign, Users, ShoppingCart, TrendingUp, BarChart3, LucideIcon } from 'lucide-react';
import { EmptyState, ErrorState } from '@/components/ui';
import { KPICard } from './KPICard';
import { KPICardsSkeleton } from '../ui/KPICardsSkeleton';

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
};

export function KPICards() {
  const { data, loading, error, fetchDashboardData } = useDashboardStore();

  if (error) {
    return (
      <ErrorState
        title="Failed to Load KPIs"
        message={error}
        onRetry={fetchDashboardData}
      />
    );
  }

  if (loading) {
    return <KPICardsSkeleton />;
  }

  if (!data?.kpis || data.kpis.length === 0) {
    return (
      <EmptyState
        title="No KPI Data Available"
        message="Key performance indicators will appear here once data is loaded."
        icon={<BarChart3 size={32} className="text-gray-400 dark:text-gray-500" />}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.kpis.map((kpi) => {
        const Icon = iconMap[kpi.icon] || TrendingUp;
        
        return (
          <KPICard
            key={kpi.id}
            icon={Icon}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            changeType={kpi.changeType}
          />
        );
      })}
    </div>
  );
}
