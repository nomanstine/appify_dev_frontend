import axios from 'axios';
import { DashboardData, FilterState } from '@/types/dashboard';
import { mockDashboardData, mockNotifications, mockUserProfile, Notification, UserProfile } from './mockData';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Simulate API delay for realistic loading states
const simulateDelay = (ms: number = 1800) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchDashboardData = async (
  filters: FilterState
): Promise<DashboardData> => {
  // Simulate API call with delay
  await simulateDelay();
  
  // In production, this would be:
  // const response = await api.get('/dashboard', { params: filters });
  // return response.data;    

  return adjustDataByFilters(mockDashboardData, filters);
};

// Adjust mock data based on filters
const adjustDataByFilters = (
  data: DashboardData,
  filters: FilterState
): DashboardData => {
  let adjustedData = { ...data };

  // Define user segment multipliers for revenue/orders
  const userSegmentMultipliers: Record<string, number> = {
    free: 0.3,      // Free users contribute 30% of revenue
    premium: 0.5,   // Premium users contribute 50% of revenue
    enterprise: 0.9, // Enterprise users contribute 90% of revenue
    all: 1.0,       // All users = 100%
  };

  const userSegmentSizes: Record<string, number> = {
    free: 645,
    premium: 420,
    enterprise: 180,
    all: 1245,
  };

  // Adjust data based on date range
  if (filters.dateRange === '7days') {
    adjustedData = {
      ...adjustedData,
      kpis: adjustedData.kpis.map(kpi => ({
        ...kpi,
        value: typeof kpi.value === 'number' 
          ? Math.round(kpi.value * 0.15) 
          : kpi.value.toString().replace(/\d+/, (match) => 
              Math.round(parseInt(match.replace(/,/g, '')) * 0.15).toLocaleString()
            ),
      })),
      revenue: adjustedData.revenue.slice(0, 1).map(item => ({
        ...item,
        revenue: Math.round(item.revenue * 0.15)
      })),
      orders: adjustedData.orders.slice(0, 1).map(item => ({
        ...item,
        orders: Math.round(item.orders * 0.15)
      })),
    };
  } else if (filters.dateRange === '12months') {
    adjustedData = {
      ...adjustedData,
      kpis: adjustedData.kpis.map(kpi => ({
        ...kpi,
        value: typeof kpi.value === 'number' 
          ? Math.round(kpi.value * 1.8) 
          : kpi.value.toString().replace(/\d+/, (match) => 
              Math.round(parseInt(match.replace(/,/g, '')) * 1.8).toLocaleString()
            ),
      })),
      revenue: adjustedData.revenue.map(item => ({
        ...item,
        revenue: Math.round(item.revenue * 1.8)
      })),
      orders: adjustedData.orders.map(item => ({
        ...item,
        orders: Math.round(item.orders * 1.8)
      })),
    };
  }

  // Apply user type filter - affects all metrics
  if (filters.userType !== 'all') {
    const multiplier = userSegmentMultipliers[filters.userType];
    const segmentSize = userSegmentSizes[filters.userType];

    // Show only filtered user type in distribution
    const filteredDistribution = adjustedData.userDistribution
      .filter(dist => dist.name.toLowerCase().includes(filters.userType.toLowerCase()))
      .map(dist => ({
        ...dist,
        value: segmentSize,
      }));

    // Adjust KPIs based on user segment
    const adjustedKpis = adjustedData.kpis.map(kpi => {
      if (kpi.title === 'Total Users') {
        return {
          ...kpi,
          value: segmentSize,
        };
      } else if (kpi.title === 'Total Revenue') {
        const currentValue = parseInt(kpi.value.toString().replace(/[^0-9]/g, '')) || 0;
        const adjustedValue = Math.round(currentValue * multiplier);
        return {
          ...kpi,
          value: `$${adjustedValue.toLocaleString()}`,
        };
      } else if (kpi.title === 'Orders') {
        const currentValue = typeof kpi.value === 'number' ? kpi.value : parseInt(kpi.value.toString().replace(/[^0-9]/g, '')) || 0;
        return {
          ...kpi,
          value: Math.round(currentValue * multiplier),
        };
      } else if (kpi.title === 'Conversion Rate') {
        // Conversion rate varies by user type
        const conversionMultipliers: Record<string, number> = {
          free: 0.7,      // Lower conversion for free users
          premium: 1.2,   // Higher conversion for premium
          enterprise: 1.5, // Highest for enterprise
        };
        const currentValue = parseFloat(kpi.value.toString().replace(/[^0-9.]/g, '')) || 0;
        const adjustedValue = (currentValue * (conversionMultipliers[filters.userType] || 1)).toFixed(1);
        return {
          ...kpi,
          value: `${adjustedValue}%`,
        };
      }
      return kpi;
    });

    // Adjust revenue and orders charts
    const adjustedRevenue = adjustedData.revenue.map(item => ({
      ...item,
      revenue: Math.round(item.revenue * multiplier)
    }));

    const adjustedOrders = adjustedData.orders.map(item => ({
      ...item,
      orders: Math.round(item.orders * multiplier)
    }));

    adjustedData = {
      ...adjustedData,
      kpis: adjustedKpis,
      userDistribution: filteredDistribution,
      revenue: adjustedRevenue,
      orders: adjustedOrders,
    };
  }

  return adjustedData;
};

export const exportToCSV = (data: DashboardData) => {
  // KPIs CSV
  const kpiCSV = [
    ['Metric', 'Value', 'Change', 'Change Type'],
    ...data.kpis.map(kpi => [
      kpi.title,
      kpi.value,
      `${kpi.change}%`,
      kpi.changeType,
    ]),
  ].map(row => row.join(',')).join('\n');

  // Download CSV
  const blob = new Blob([kpiCSV], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `dashboard-export-${new Date().toISOString()}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
};

// Fetch notifications with simulated API delay
export const fetchNotifications = async (): Promise<Notification[]> => {
  await simulateDelay(500);
  
  // In production, this would be:
  // const response = await api.get('/notifications');
  // return response.data;
  
  return mockNotifications;
};

// Fetch user profile with simulated API delay
export const fetchUserProfile = async (): Promise<UserProfile> => {
  await simulateDelay(300);
  
  // In production, this would be:
  // const response = await api.get('/user/profile');
  // return response.data;
  
  return mockUserProfile;
};
