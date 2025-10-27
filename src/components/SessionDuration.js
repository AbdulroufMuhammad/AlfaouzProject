import React from 'react';
import { Link } from 'react-router-dom';

const SessionDuration = ({ onLogout }) => {
  const sessions = [
    { id: 1, tutor: 'Sheikh Muhammad Ali', subject: 'Quran Recitation', duration: '60 min', date: '2024-01-15', status: 'Completed', rating: 5 },
    { id: 2, tutor: 'Sheikh Ahmad Hassan', subject: 'Tajweed', duration: '45 min', date: '2024-01-14', status: 'Completed', rating: 5 },
    { id: 3, tutor: 'Sheikh Yusuf Ibrahim', subject: 'Memorization', duration: '90 min', date: '2024-01-13', status: 'Completed', rating: 4 },
    { id: 4, tutor: 'Sheikh Omar Abdullah', subject: 'Tafsir', duration: '60 min', date: '2024-01-12', status: 'Completed', rating: 5 },
    { id: 5, tutor: 'Sheikh Khalid Mahmoud', subject: 'Islamic Studies', duration: '45 min', date: '2024-01-11', status: 'Cancelled', rating: 0 },
  ];

  const totalMinutes = sessions.filter(s => s.status === 'Completed').reduce((acc, s) => acc + parseInt(s.duration), 0);
  const totalHours = Math.floor(totalMinutes / 60);

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
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Session History ⏱️</h2>
          <p className="text-gray-600 text-lg">Track your learning journey</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Sessions', value: sessions.length, icon: '📚', color: 'from-blue-500 to-cyan-500' },
            { label: 'Completed', value: sessions.filter(s => s.status === 'Completed').length, icon: '✅', color: 'from-green-500 to-emerald-500' },
            { label: 'Total Hours', value: totalHours, icon: '⏰', color: 'from-purple-500 to-pink-500' },
            { label: 'Avg Rating', value: '4.8', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
          ].map((stat, i) => (
            <div key={i} className={`glass-white rounded-2xl p-6 shadow-modern card-hover animate-scaleIn`} style={{animationDelay: `${i * 0.1}s`}}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl mb-4 shadow-modern`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Sessions Table */}
        <div className="glass-white rounded-2xl shadow-modern overflow-hidden animate-fadeIn">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-800">Recent Sessions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
                <tr>
                  <th className="font-bold text-gray-700">Date</th>
                  <th className="font-bold text-gray-700">Tutor</th>
                  <th className="font-bold text-gray-700">Subject</th>
                  <th className="font-bold text-gray-700">Duration</th>
                  <th className="font-bold text-gray-700">Status</th>
                  <th className="font-bold text-gray-700">Rating</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session, i) => (
                  <tr key={session.id} className="hover:bg-gray-50 transition-colors">
                    <td className="font-semibold">{session.date}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-xl">
                          👨‍🏫
                        </div>
                        <span className="font-medium">{session.tutor}</span>
                      </div>
                    </td>
                    <td>{session.subject}</td>
                    <td><span className="badge badge-outline">{session.duration}</span></td>
                    <td>
                      {session.status === 'Completed' ? (
                        <span className="badge badge-success gap-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          Completed
                        </span>
                      ) : (
                        <span className="badge badge-error">Cancelled</span>
                      )}
                    </td>
                    <td>
                      {session.rating > 0 ? (
                        <div className="flex items-center">
                          {[...Array(session.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500">⭐</span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDuration;

