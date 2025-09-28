import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.login(formData);
      localStorage.setItem('token', response.data.token);
      navigate('/profile');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-royal-black flex items-center justify-center py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-sm sm:max-w-md lg:max-w-lg w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-royal-golden/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-royal-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-royal-white mb-2">
            Welcome Back
          </h2>
          <p className="text-royal-gray text-sm sm:text-base mb-2">Sign in to your account</p>
          <p className="text-royal-gray text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-royal-golden hover:text-royal-golden-light transition-colors duration-200 underline">
              Create one here
            </Link>
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="bg-royal-black-lighter/50 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm border border-royal-golden/10">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-royal-gray mb-3">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-4 border border-royal-black-lighter/50 rounded-xl text-royal-white bg-royal-black/50 placeholder-royal-gray focus:outline-none focus:ring-4 focus:ring-royal-golden/30 focus:border-royal-golden transition-all duration-300 text-base shadow-inner backdrop-blur-sm"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-royal-gray mb-3">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-4 border border-royal-black-lighter/50 rounded-xl text-royal-white bg-royal-black/50 placeholder-royal-gray focus:outline-none focus:ring-4 focus:ring-royal-golden/30 focus:border-royal-golden transition-all duration-300 text-base shadow-inner backdrop-blur-sm"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="text-royal-golden text-sm text-center bg-royal-black/50 p-4 rounded-xl border border-royal-golden/20 backdrop-blur-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-4 px-6 border-2 border-royal-golden text-base font-bold rounded-xl text-royal-black bg-royal-golden hover:bg-royal-golden-light focus:outline-none focus:ring-4 focus:ring-royal-golden/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-royal-black mr-2"></div>
                Signing in...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign In
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
