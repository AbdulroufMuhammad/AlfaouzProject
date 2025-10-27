import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BeginSession = ({ onLogout }) => {
  const [selectedTutor, setSelectedTutor] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('60');
  const navigate = useNavigate();

  const tutors = [
    { id: 1, name: 'Sheikh Muhammad Ali', specialty: 'Quran Recitation' },
    { id: 2, name: 'Sheikh Ahmad Hassan', specialty: 'Tajweed' },
    { id: 3, name: 'Sheikh Yusuf Ibrahim', specialty: 'Memorization' },
  ];

  const subjects = ['Quran Recitation', 'Tajweed', 'Memorization', 'Tafsir', 'Islamic Studies'];

  const handleStartSession = (e) => {
    e.preventDefault();
    toast.success('Session scheduled successfully! 🎉');
    setTimeout(() => navigate('/video-call'), 1500);
  };

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
              <button onClick={onLogout} className="btn btn-ghost btn-sm">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Begin Your Session 🎓</h2>
            <p className="text-gray-600 text-lg">Schedule a new learning session with your tutor</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass-white rounded-2xl p-8 shadow-modern animate-slideInLeft">
              <form onSubmit={handleStartSession} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Select Tutor</span>
                  </label>
                  <select
                    className="select select-bordered bg-white w-full"
                    value={selectedTutor}
                    onChange={(e) => setSelectedTutor(e.target.value)}
                    required
                  >
                    <option value="">Choose a tutor...</option>
                    {tutors.map(tutor => (
                      <option key={tutor.id} value={tutor.id}>{tutor.name} - {tutor.specialty}</option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Subject</span>
                  </label>
                  <select
                    className="select select-bordered bg-white w-full"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    required
                  >
                    <option value="">Choose a subject...</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Session Duration</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['30', '60', '90'].map(duration => (
                      <button
                        key={duration}
                        type="button"
                        onClick={() => setSelectedDuration(duration)}
                        className={`btn ${selectedDuration === duration ? 'gradient-primary text-white border-none' : 'btn-outline'}`}
                      >
                        {duration} min
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn gradient-primary text-white border-none w-full btn-lg">
                  Start Session Now
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="glass-white rounded-2xl p-6 shadow-modern animate-slideInRight">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Session Summary</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50">
                    <div className="text-2xl">👨‍🏫</div>
                    <div>
                      <p className="text-xs text-gray-600">Tutor</p>
                      <p className="font-semibold text-gray-800">{selectedTutor ? tutors.find(t => t.id === parseInt(selectedTutor))?.name : 'Not selected'}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50">
                    <div className="text-2xl">📚</div>
                    <div>
                      <p className="text-xs text-gray-600">Subject</p>
                      <p className="font-semibold text-gray-800">{selectedSubject || 'Not selected'}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50">
                    <div className="text-2xl">⏱️</div>
                    <div>
                      <p className="text-xs text-gray-600">Duration</p>
                      <p className="font-semibold text-gray-800">{selectedDuration} minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-white rounded-2xl p-6 shadow-modern animate-slideInRight" style={{animationDelay: '0.1s'}}>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Quick Tips 💡</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Test your camera and microphone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Have your Quran ready</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Find a quiet place</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginSession;

