'use client';

import { useEffect, lazy, Suspense } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/Header";
import { KPICards } from "@/components/dashboard/KPICards";
import { Filters } from "@/components/dashboard/Filters";
import { ChartSkeleton } from "@/components/ui";

// Lazy load Charts component as it's heavy (Recharts)
const Charts = lazy(() => import("@/components/dashboard/Charts").then(m => ({ default: m.Charts })));

export default function Home() {
  const { fetchDashboardData } = useDashboardStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DashboardHeader />
        <Filters />
        <KPICards />
        <Suspense fallback={<ChartSkeleton />}>
          <Charts />
        </Suspense>
      </div>
    </DashboardLayout>
  );
}
