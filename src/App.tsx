import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-royal-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-royal-black flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-royal-golden/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-royal-golden rounded-full flex items-center justify-center">
                    <span className="text-royal-black font-bold text-2xl sm:text-3xl lg:text-4xl">R</span>
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-royal-white mb-6 leading-tight">
                  Welcome to <span className="text-royal-golden">Recruitment App</span>
                </h1>
                <p className="text-royal-gray text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  Streamline your hiring process with our modern recruitment platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <a
                    href="/register"
                    className="w-full sm:w-auto bg-royal-golden text-royal-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-royal-golden-light transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span>Get Started</span>
                  </a>
                  <a
                    href="/login"
                    className="w-full sm:w-auto border-2 border-royal-golden text-royal-golden px-8 py-4 rounded-xl text-lg font-bold hover:bg-royal-golden hover:text-royal-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <span>Sign In</span>
                  </a>
                </div>
              </div>
            </div>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;