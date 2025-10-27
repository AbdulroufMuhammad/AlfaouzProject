import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    toast.info('👋 Logged out successfully');
    navigate('/login');
  };

  const stats = [
    { label: 'Total Sessions', value: '24', icon: '📚', color: 'from-blue-500 to-cyan-500', change: '+12%' },
    { label: 'Hours Learned', value: '48', icon: '⏱️', color: 'from-purple-500 to-pink-500', change: '+8%' },
    { label: 'Active Tutors', value: '5', icon: '👨‍🏫', color: 'from-green-500 to-emerald-500', change: '+2' },
    { label: 'Completion', value: '85%', icon: '🎯', color: 'from-orange-500 to-red-500', change: '+5%' },
  ];

  const quickActions = [
    { title: 'Start Session', desc: 'Begin your Quran learning', icon: '🎓', link: '/begin-session', gradient: 'gradient-primary' },
    { title: 'Find Tutor', desc: 'Browse available tutors', icon: '🔍', link: '/tutors', gradient: 'gradient-success' },
    { title: 'My Profile', desc: 'View your progress', icon: '👤', link: '/profile', gradient: 'gradient-secondary' },
    { title: 'Notifications', desc: 'Check updates', icon: '🔔', link: '/notifications', gradient: 'gradient-warning' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Modern Navbar */}
      <nav className="glass-white shadow-modern sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold gradient-text">ALfaouz Academy</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/notifications" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </Link>
              <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome back, Student! 👋</h2>
          <p className="text-gray-600 text-lg">Continue your journey to Quranic excellence</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`glass-white rounded-2xl p-6 card-hover animate-slideInLeft`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl shadow-modern`}>
                  {stat.icon}
                </div>
                <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link 
                key={index} 
                to={action.link}
                className={`${action.gradient} rounded-2xl p-6 text-white card-hover-scale shadow-modern animate-scaleIn`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{action.icon}</div>
                <h4 className="text-xl font-bold mb-2">{action.title}</h4>
                <p className="text-white text-opacity-90 text-sm">{action.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity & Upcoming Sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="glass-white rounded-2xl p-6 shadow-modern animate-slideInLeft">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Completed session with Sheikh Ahmad', time: '2 hours ago', icon: '✅' },
                { title: 'Memorized Surah Al-Fatiha', time: '1 day ago', icon: '🎯' },
                { title: 'Joined new course: Tajweed Basics', time: '3 days ago', icon: '📖' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="glass-white rounded-2xl p-6 shadow-modern animate-slideInRight">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Upcoming Sessions
            </h3>
            <div className="space-y-4">
              {[
                { tutor: 'Sheikh Muhammad Ali', subject: 'Quran Recitation', time: 'Today, 3:00 PM', avatar: '👨‍🏫' },
                { tutor: 'Sheikh Yusuf Hassan', subject: 'Tajweed Rules', time: 'Tomorrow, 10:00 AM', avatar: '👨‍🏫' },
              ].map((session, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-2xl">
                    {session.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800">{session.tutor}</p>
                    <p className="text-sm text-gray-600">{session.subject}</p>
                    <p className="text-xs text-purple-600 font-semibold mt-1">{session.time}</p>
                  </div>
                  <Link to="/begin-session" className="btn btn-sm gradient-primary text-white border-none">
                    Join
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

