import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (username === 'student' && password === 'password') {
        if (onLogin) onLogin();
        toast.success('🎉 Welcome back!', { position: "top-center", autoClose: 2000 });
        navigate('/');
      } else {
        toast.error('❌ Invalid credentials', { position: "top-center" });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-indigo-400 to-purple-400 opacity-20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-400 to-purple-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-300 rounded-full opacity-40 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-300 rounded-full opacity-50 animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-indigo-300 rounded-full opacity-40 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="text-white space-y-8 animate-slideInLeft">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-3 border border-white border-opacity-20">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-xl font-bold">ALfaouz Academy</span>
              </div>

              <h1 className="text-6xl font-bold leading-tight">
                Begin Your
                <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                  Quranic Journey
                </span>
              </h1>

              <p className="text-xl text-white text-opacity-80 leading-relaxed">
                Connect with world-class scholars and master the art of Quranic recitation from the comfort of your home.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: '🎓', title: 'Expert Tutors', desc: 'Learn from certified Quran scholars' },
                { icon: '⏰', title: 'Flexible Schedule', desc: 'Study at your own pace and time' },
                { icon: '🌍', title: 'Global Community', desc: 'Join students from around the world' },
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-4 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-10 hover:bg-opacity-10 transition-all" style={{animationDelay: `${i * 0.2}s`}}>
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-white text-opacity-70 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="animate-slideInRight">
            <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white border-opacity-20">
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-white text-opacity-70">Sign in to continue your learning</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-white text-opacity-90">Username</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-purple-300 group-focus-within:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="input w-full pl-12 pr-4 py-3 bg-white bg-opacity-10 border-2 border-white border-opacity-20 text-white placeholder-white placeholder-opacity-50 rounded-xl focus:bg-opacity-20 focus:border-purple-400 focus:outline-none transition-all"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-white text-opacity-90">Password</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-purple-300 group-focus-within:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      className="input w-full pl-12 pr-4 py-3 bg-white bg-opacity-10 border-2 border-white border-opacity-20 text-white placeholder-white placeholder-opacity-50 rounded-xl focus:bg-opacity-20 focus:border-purple-400 focus:outline-none transition-all"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-sm border-white border-opacity-30 checked:border-purple-400" />
                    <span className="text-white text-opacity-70">Remember me</span>
                  </label>
                  <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className={`btn w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center space-x-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Signing In...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <span>Sign In</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>

              <div className="divider text-white text-opacity-50 text-sm my-6">Demo Credentials</div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-20 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white bg-opacity-10 rounded-lg p-3">
                    <span className="text-white text-opacity-70 text-xs block mb-1">Username</span>
                    <p className="text-white font-mono font-bold">student</p>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-3">
                    <span className="text-white text-opacity-70 text-xs block mb-1">Password</span>
                    <p className="text-white font-mono font-bold">password</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-white text-opacity-60 text-sm">
                  Don't have an account? <a href="#" className="text-purple-300 hover:text-purple-200 font-semibold transition-colors">Sign up</a>
                </p>
              </div>
            </div>

            <div className="text-center mt-6 text-white text-opacity-60 text-sm">
              <p>© 2024 ALfaouz Academy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

