'use client';

import { useDashboardStore } from '@/store/dashboardStore';
import { ChartSkeleton } from '@/components/ui';
import { ChartCard } from './ChartCard';
import {
  RevenueChart,
  OrdersChart,
  UserDistributionChart,
  TrafficSourcesChart,
} from './chart-types';

export function Charts() {
  const { data, loading } = useDashboardStore();

  if (loading) {
    return <ChartSkeleton />;
  }

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard
        title="Revenue Over Time"
        hasData={!!(data.revenue && data.revenue.length > 0)}
        emptyTitle="No Revenue Data"
        emptyMessage="Revenue data is not available for the selected period."
      >
        <RevenueChart data={data.revenue} />
      </ChartCard>

      <ChartCard
        title="Orders Per Month"
        hasData={!!(data.orders && data.orders.length > 0)}
        emptyTitle="No Orders Data"
        emptyMessage="Order data is not available for the selected period."
      >
        <OrdersChart data={data.orders} />
      </ChartCard>

      <ChartCard
        title="User Distribution"
        hasData={!!(data.userDistribution && data.userDistribution.length > 0)}
        emptyTitle="No User Data"
        emptyMessage="User distribution data is not available."
      >
        <UserDistributionChart data={data.userDistribution} />
      </ChartCard>

      <ChartCard
        title="Traffic Sources"
        hasData={!!(data.trafficSources && data.trafficSources.length > 0)}
        emptyTitle="No Traffic Data"
        emptyMessage="Traffic source data is not available."
      >
        <TrafficSourcesChart data={data.trafficSources} />
      </ChartCard>
    </div>
  );
}
