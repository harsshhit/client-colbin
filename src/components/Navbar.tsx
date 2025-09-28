import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-royal-black/95 border-b border-royal-golden/20 sticky top-0 z-50 shadow-2xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-royal-white text-xl lg:text-2xl font-bold hover:text-royal-golden transition-all duration-300 flex items-center space-x-2"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-royal-golden rounded-lg flex items-center justify-center">
                <span className="text-royal-black font-bold text-sm lg:text-base">R</span>
              </div>
              <span className="hidden sm:block">Recruitment App</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/register"
                  className="text-royal-gray hover:text-royal-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 hover:bg-royal-black-lighter/50 hover:shadow-lg"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="bg-royal-golden text-royal-black px-6 lg:px-8 py-2 lg:py-3 rounded-xl text-sm lg:text-base font-bold hover:bg-royal-golden-light transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
                >
                  Login
                </Link>
              </>
            ) : (
              <Link
                to="/profile"
                className="text-royal-gray hover:text-royal-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 hover:bg-royal-black-lighter/50 hover:shadow-lg flex items-center space-x-2"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Profile</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-royal-white hover:text-royal-golden p-2 rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-royal-golden/20 bg-royal-black-lighter/50 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/register"
                    className="block text-royal-gray hover:text-royal-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-royal-black-lighter/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="block bg-royal-golden text-royal-black px-4 py-3 rounded-lg text-base font-bold hover:bg-royal-golden-light transition-all duration-200 shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </>
              ) : (
                <Link
                  to="/profile"
                  className="block text-royal-gray hover:text-royal-white px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-royal-black-lighter/50 flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Profile</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
