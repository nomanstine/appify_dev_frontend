import { create } from 'zustand';
import { DashboardData, FilterState, DateRange, UserType } from '@/types/dashboard';
import { fetchDashboardData, fetchNotifications, fetchUserProfile } from '@/lib/api';
import { Notification, UserProfile } from '@/lib/mockData';

interface DashboardStore {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
  filters: FilterState;
  sidebarCollapsed: boolean;
  mobileMenuOpen: boolean;
  darkMode: boolean;
  
  // Notifications state
  notifications: Notification[];
  notificationsLoading: boolean;
  
  // User profile state
  userProfile: UserProfile | null;
  userProfileLoading: boolean;
  
  // Actions
  setFilters: (filters: Partial<FilterState>) => void;
  setDateRange: (dateRange: DateRange) => void;
  setUserType: (userType: UserType) => void;
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
  toggleDarkMode: () => void;
  fetchDashboardData: () => Promise<void>;
  fetchNotifications: () => Promise<void>;
  fetchUserProfile: () => Promise<void>;
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  data: null,
  loading: false,
  error: null,
  filters: {
    dateRange: '30days',
    userType: 'all',
  },
  sidebarCollapsed: false,
  mobileMenuOpen: false,
  darkMode: false,
  notifications: [],
  notificationsLoading: false,
  userProfile: null,
  userProfileLoading: false,

  setFilters: (filters) => {
    set((state) => ({
      filters: { ...state.filters, ...filters },
    }));
    get().fetchDashboardData();
  },

  setDateRange: (dateRange) => {
    set((state) => ({
      filters: { ...state.filters, dateRange },
    }));
    get().fetchDashboardData();
  },

  setUserType: (userType) => {
    set((state) => ({
      filters: { ...state.filters, userType },
    }));
    get().fetchDashboardData();
  },

  toggleSidebar: () => {
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed }));
  },

  toggleMobileMenu: () => {
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen }));
  },

  setMobileMenuOpen: (open) => {
    set({ mobileMenuOpen: open });
  },

  toggleDarkMode: () => {
    set((state) => {
      const newDarkMode = !state.darkMode;
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { darkMode: newDarkMode };
    });
  },

  fetchDashboardData: async () => {
    set({ loading: true, error: null });
    try {
      const { filters } = get();
      const data = await fetchDashboardData(filters);
      set({ data, loading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'An error occurred', 
        loading: false 
      });
    }
  },

  fetchNotifications: async () => {
    // Only fetch if not already loaded
    if (get().notifications.length > 0) return;
    
    set({ notificationsLoading: true });
    try {
      const notifications = await fetchNotifications();
      set({ notifications, notificationsLoading: false });
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
      set({ notificationsLoading: false });
    }
  },

  fetchUserProfile: async () => {
    // Only fetch if not already loaded
    if (get().userProfile) return;
    
    set({ userProfileLoading: true });
    try {
      const userProfile = await fetchUserProfile();
      set({ userProfile, userProfileLoading: false });
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      set({ userProfileLoading: false });
    }
  },
}));
