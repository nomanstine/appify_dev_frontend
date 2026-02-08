// Dashboard Types
export interface KPIData {
  id: string;
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
}

export interface OrderData {
  month: string;
  orders: number;
}

export interface UserDistribution {
  name: string;
  value: number;
  color: string;
}

export interface TrafficSource {
  name: string;
  value: number;
}

export interface DashboardData {
  kpis: KPIData[];
  revenue: RevenueData[];
  orders: OrderData[];
  userDistribution: UserDistribution[];
  trafficSources: TrafficSource[];
}

export type DateRange = '7days' | '30days' | '12months';
export type UserType = 'all' | 'free' | 'premium' | 'enterprise';

export interface FilterState {
  dateRange: DateRange;
  userType: UserType;
}
