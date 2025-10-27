import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SelectTutor = ({ onLogout }) => {
  const { tutorId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('60');
  const tutors = [
    { id: 1, name: 'Sheikh Muhammad Ali', specialty: 'Quran Recitation', experience: '10 years', rating: 4.9, students: 150, avatar: '👨‍🏫', available: true, languages: ['Arabic', 'English'], price: '$25/hr', bio: 'Experienced Quran teacher with a passion for helping students master proper recitation.' },
    { id: 2, name: 'Sheikh Ahmad Hassan', specialty: 'Tajweed', experience: '8 years', rating: 4.8, students: 120, avatar: '👨‍🏫', available: true, languages: ['Arabic', 'Urdu'], price: '$22/hr', bio: 'Specialist in Tajweed rules with proven teaching methodology.' },
    { id: 3, name: 'Sheikh Yusuf Ibrahim', specialty: 'Memorization', experience: '12 years', rating: 5.0, students: 200, avatar: '👨‍🏫', available: false, languages: ['Arabic', 'English', 'French'], price: '$30/hr', bio: 'Expert in Quran memorization techniques with hundreds of successful students.' },
  ];

  const tutor = tutors.find(t => t.id === parseInt(tutorId)) || tutors[0];

  const handleBookSession = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error('Please select date and time');
      return;
    }
    toast.success('Session booked successfully! 🎉');
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
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
            <button onClick={onLogout} className="btn btn-ghost btn-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fadeIn">
            <Link to="/tutors" className="text-purple-600 hover:text-purple-700 flex items-center mb-4">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Tutors
            </Link>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Book a Session 📅</h2>
            <p className="text-gray-600 text-lg">Schedule your learning session with {tutor.name}</p>
          </div>

          {/* Tutor Profile & Booking Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tutor Profile Card */}
            <div className="lg:col-span-1 glass-white rounded-2xl overflow-hidden shadow-modern animate-slideInLeft">
              <div className="gradient-primary p-6 text-white">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-5xl shadow-modern mb-4">
                    {tutor.avatar}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tutor.name}</h3>
                  <p className="text-white text-opacity-90 mb-3">{tutor.specialty}</p>
                  {tutor.available ? (
                    <span className="badge badge-success gap-2">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Available
                    </span>
                  ) : (
                    <span className="badge badge-error">Offline</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">About</p>
                    <p className="text-gray-800">{tutor.bio}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Experience</p>
                      <p className="font-semibold text-gray-800">{tutor.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Students</p>
                      <p className="font-semibold text-gray-800">{tutor.students}+</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rating</p>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">⭐</span>
                        <span className="font-semibold text-gray-800">{tutor.rating}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="font-bold text-purple-600">{tutor.price}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {tutor.languages.map((lang, i) => (
                        <span key={i} className="badge badge-outline">{lang}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2 glass-white rounded-2xl p-8 shadow-modern animate-slideInRight">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule Your Session</h3>
              <form onSubmit={handleBookSession} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Select Date</span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered bg-white w-full"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Select Time</span>
                    </label>
                    <input
                      type="time"
                      className="input input-bordered bg-white w-full"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                    />
                  </div>
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

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-700">Session Notes (Optional)</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered bg-white h-24"
                    placeholder="Any specific topics or questions you'd like to cover..."
                  ></textarea>
                </div>

                <div className="glass-white rounded-xl p-4 bg-gradient-to-r from-purple-50 to-indigo-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Session Duration:</span>
                    <span className="font-semibold text-gray-800">{selectedDuration} minutes</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Price per hour:</span>
                    <span className="font-semibold text-gray-800">{tutor.price}</span>
                  </div>
                  <div className="border-t border-gray-300 my-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">Total:</span>
                    <span className="font-bold text-purple-600 text-xl">
                      ${(parseInt(tutor.price.replace('$', '').replace('/hr', '')) * parseInt(selectedDuration) / 60).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button type="submit" className="btn gradient-primary text-white border-none w-full btn-lg">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTutor;

