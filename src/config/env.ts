// Environment configuration utility
export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  environment: import.meta.env.VITE_APP_ENV || 'development',
  isDevelopment: import.meta.env.VITE_APP_ENV === 'development',
  isProduction: import.meta.env.VITE_APP_ENV === 'production',
};

// Helper function to get API URL
export const getApiUrl = (endpoint: string = '') => {
  return `${config.apiBaseUrl}${endpoint}`;
};

// Helper function to check if running in development
export const isDev = () => config.isDevelopment;

// Helper function to check if running in production
export const isProd = () => config.isProduction;
