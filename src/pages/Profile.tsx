import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAPI } from '../api';
import Toast from '../components/Toast';

interface User {
  id: string;
  name: string;
  email: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showLogoutToast, setShowLogoutToast] = useState(false);
  const [showWelcomeToast, setShowWelcomeToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await userAPI.getProfile();
        setUser(response.data.user);
        setShowWelcomeToast(true);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch profile');
        // Error handling for 401 is now handled by the API interceptor
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    setShowLogoutToast(true);
    setTimeout(() => {
      localStorage.removeItem('token');
      navigate('/login');
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-royal-black flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-golden mx-auto mb-4"></div>
          <div className="text-royal-white text-xl font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-royal-black py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        <div className="bg-royal-black-lighter rounded-2xl border border-royal-golden/20 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-royal-golden/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-royal-golden rounded-full flex items-center justify-center">
                <span className="text-royal-black font-bold text-lg sm:text-xl">U</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-royal-white mb-2">
              Profile
            </h2>
            <p className="text-royal-gray text-sm sm:text-base mb-8">Manage your account information</p>
            
            {error && (
              <div className="text-red-400 text-sm bg-red-900/20 p-4 rounded-xl mb-6 border border-red-500/30 backdrop-blur-sm flex items-center space-x-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {user && (
              <div className="space-y-6">
                <div className="text-left">
                  <label className="block text-sm font-semibold text-royal-gray mb-3">
                    Full Name
                  </label>
                  <div className="text-royal-white bg-royal-black/50 rounded-xl px-4 py-4 border border-royal-black-lighter/50 shadow-inner backdrop-blur-sm text-base">
                    {user.name}
                  </div>
                </div>
                
                <div className="text-left">
                  <label className="block text-sm font-semibold text-royal-gray mb-3">
                    Email Address
                  </label>
                  <div className="text-royal-white bg-royal-black/50 rounded-xl px-4 py-4 border border-royal-black-lighter/50 shadow-inner backdrop-blur-sm text-base">
                    {user.email}
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleLogout}
              className="mt-8 w-full flex justify-center items-center py-4 px-6 border-2 border-royal-golden text-base font-bold rounded-xl text-royal-black bg-royal-golden hover:bg-royal-golden-light focus:outline-none focus:ring-4 focus:ring-royal-golden/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      </div>
      
      <Toast
        message={`Welcome back, ${user?.name || 'User'}!`}
        type="success"
        isVisible={showWelcomeToast}
        onClose={() => setShowWelcomeToast(false)}
        duration={3000}
      />
      
      <Toast
        message="Logged out successfully! Redirecting to login..."
        type="success"
        isVisible={showLogoutToast}
        onClose={() => setShowLogoutToast(false)}
        duration={1500}
      />
    </div>
  );
};

export default Profile;
