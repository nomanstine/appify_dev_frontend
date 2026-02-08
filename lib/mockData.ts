import { DashboardData } from '@/types/dashboard';

export const mockDashboardData: DashboardData = {
  kpis: [
    {
      id: '1',
      title: 'Total Revenue',
      value: '$54,230',
      change: 12.5,
      changeType: 'increase',
      icon: 'DollarSign',
    },
    {
      id: '2',
      title: 'Total Users',
      value: 1245,
      change: 8.3,
      changeType: 'increase',
      icon: 'Users',
    },
    {
      id: '3',
      title: 'Orders',
      value: 342,
      change: -3.2,
      changeType: 'decrease',
      icon: 'ShoppingCart',
    },
    {
      id: '4',
      title: 'Conversion Rate',
      value: '4.3%',
      change: 2.1,
      changeType: 'increase',
      icon: 'TrendingUp',
    },
  ],
  revenue: [
    { month: 'Jan', revenue: 4200 },
    { month: 'Feb', revenue: 3800 },
    { month: 'Mar', revenue: 5100 },
    { month: 'Apr', revenue: 4600 },
    { month: 'May', revenue: 5400 },
    { month: 'Jun', revenue: 6200 },
    { month: 'Jul', revenue: 5800 },
    { month: 'Aug', revenue: 6800 },
    { month: 'Sep', revenue: 6400 },
    { month: 'Oct', revenue: 7200 },
    { month: 'Nov', revenue: 6900 },
    { month: 'Dec', revenue: 7500 },
  ],
  orders: [
    { month: 'Jan', orders: 65 },
    { month: 'Feb', orders: 59 },
    { month: 'Mar', orders: 80 },
    { month: 'Apr', orders: 72 },
    { month: 'May', orders: 88 },
    { month: 'Jun', orders: 95 },
    { month: 'Jul', orders: 90 },
    { month: 'Aug', orders: 105 },
    { month: 'Sep', orders: 98 },
    { month: 'Oct', orders: 112 },
    { month: 'Nov', orders: 108 },
    { month: 'Dec', orders: 120 },
  ],
  userDistribution: [
    { name: 'Free Users', value: 645, color: '#3b82f6' },
    { name: 'Premium Users', value: 420, color: '#8b5cf6' },
    { name: 'Enterprise Users', value: 180, color: '#10b981' },
  ],
  trafficSources: [
    { name: 'Organic', value: 45 },
    { name: 'Paid', value: 30 },
    { name: 'Social', value: 18 },
    { name: 'Referral', value: 7 },
  ],
};

export interface Notification {
  id: string;
  title: string;
  time: string;
  variant: 'info' | 'success' | 'warning';
}

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar: string;
  initials: string;
}

export const mockNotifications: Notification[] = [
  { id: '1', title: 'New order received', time: '2 minutes ago', variant: 'info' },
  { id: '2', title: 'Revenue goal achieved', time: '1 hour ago', variant: 'success' },
  { id: '3', title: 'New user registered', time: '3 hours ago', variant: 'warning' },
  { id: '4', title: 'System maintenance scheduled', time: '5 hours ago', variant: 'info' },
];

export const mockUserProfile: UserProfile = {
  name: 'Nasiruddin Patwary',
  email: 'nasiruddin.patwary@example.com',
  role: 'Admin',
  avatar: '',
  initials: 'NP',
};
