import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const StudentProfile = ({ onLogout }) => {
  const handleUpdate = (action) => {
    toast.success(`${action} updated successfully!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="glass-white shadow-modern sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold gradient-text">ALfaouz Academy</h1>
            </Link>
            <button onClick={onLogout} className="btn btn-ghost btn-sm">Logout</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">My Profile 👤</h2>
          <p className="text-gray-600 text-lg">Manage your account and track your progress</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="glass-white rounded-2xl p-8 shadow-modern text-center animate-scaleIn">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-6xl shadow-modern-lg">
              👨‍🎓
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">Ahmed Student</h3>
            <p className="text-gray-600 mb-4">student@alfaouz.com</p>
            <div className="badge badge-lg gradient-primary text-white border-none mb-4">Premium Member</div>
            <div className="stats stats-vertical shadow w-full bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="stat">
                <div className="stat-title">Member Since</div>
                <div className="stat-value text-2xl text-purple-600">Jan 2024</div>
              </div>
              <div className="stat">
                <div className="stat-title">Total Sessions</div>
                <div className="stat-value text-2xl text-purple-600">24</div>
              </div>
            </div>
          </div>

          {/* Details & Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="glass-white rounded-2xl p-6 shadow-modern animate-slideInRight">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Full Name</span></label>
                  <input type="text" value="Ahmed Student" className="input input-bordered bg-white" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Email</span></label>
                  <input type="email" value="student@alfaouz.com" className="input input-bordered bg-white" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Phone</span></label>
                  <input type="tel" value="+1 234 567 8900" className="input input-bordered bg-white" />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text font-semibold">Country</span></label>
                  <select className="select select-bordered bg-white">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>
              <button onClick={() => handleUpdate('Profile')} className="btn gradient-primary text-white border-none mt-4">
                Save Changes
              </button>
            </div>

            {/* Learning Progress */}
            <div className="glass-white rounded-2xl p-6 shadow-modern animate-slideInRight" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Learning Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Quran Recitation</span>
                    <span className="text-purple-600 font-bold">85%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value="85" max="100"></progress>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Tajweed Rules</span>
                    <span className="text-purple-600 font-bold">70%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value="70" max="100"></progress>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Memorization</span>
                    <span className="text-purple-600 font-bold">60%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value="60" max="100"></progress>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-white rounded-2xl p-6 shadow-modern animate-slideInRight" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Achievements
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: '🏆', title: 'First Session', desc: 'Completed' },
                  { icon: '📚', title: '10 Sessions', desc: 'Completed' },
                  { icon: '⭐', title: 'Top Student', desc: 'Earned' },
                  { icon: '🎯', title: 'Perfect Week', desc: 'Achieved' },
                ].map((achievement, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-md transition-all">
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <p className="font-bold text-sm text-gray-800">{achievement.title}</p>
                    <p className="text-xs text-gray-600">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;

