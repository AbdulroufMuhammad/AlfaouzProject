import React from 'react';
import { Link } from 'react-router-dom';

const TutorList = ({ onLogout }) => {
  const tutors = [
    { id: 1, name: 'Sheikh Muhammad Ali', specialty: 'Quran Recitation', experience: '10 years', rating: 4.9, students: 150, avatar: '👨‍🏫', available: true, languages: ['Arabic', 'English'], price: '$25/hr' },
    { id: 2, name: 'Sheikh Ahmad Hassan', specialty: 'Tajweed', experience: '8 years', rating: 4.8, students: 120, avatar: '👨‍🏫', available: true, languages: ['Arabic', 'Urdu'], price: '$22/hr' },
    { id: 3, name: 'Sheikh Yusuf Ibrahim', specialty: 'Memorization', experience: '12 years', rating: 5.0, students: 200, avatar: '👨‍🏫', available: false, languages: ['Arabic', 'English', 'French'], price: '$30/hr' },
    { id: 4, name: 'Sheikh Omar Abdullah', specialty: 'Tafsir', experience: '15 years', rating: 4.9, students: 180, avatar: '👨‍🏫', available: true, languages: ['Arabic', 'English'], price: '$28/hr' },
    { id: 5, name: 'Sheikh Khalid Mahmoud', specialty: 'Islamic Studies', experience: '7 years', rating: 4.7, students: 95, avatar: '👨‍🏫', available: true, languages: ['Arabic', 'English', 'Urdu'], price: '$20/hr' },
    { id: 6, name: 'Sheikh Bilal Ahmed', specialty: 'Quran Translation', experience: '9 years', rating: 4.8, students: 110, avatar: '👨‍🏫', available: false, languages: ['Arabic', 'English'], price: '$24/hr' },
  ];

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
        {/* Header */}
        <div className="mb-8 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Find Your Perfect Tutor 🔍</h2>
          <p className="text-gray-600 text-lg">Connect with experienced Quran teachers</p>
        </div>

        {/* Filters */}
        <div className="glass-white rounded-2xl p-6 mb-8 shadow-modern animate-scaleIn">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="form-control">
              <input type="text" placeholder="Search tutors..." className="input input-bordered bg-white" />
            </div>
            <select className="select select-bordered bg-white">
              <option>All Specialties</option>
              <option>Quran Recitation</option>
              <option>Tajweed</option>
              <option>Memorization</option>
            </select>
            <select className="select select-bordered bg-white">
              <option>All Languages</option>
              <option>Arabic</option>
              <option>English</option>
              <option>Urdu</option>
            </select>
            <select className="select select-bordered bg-white">
              <option>All Availability</option>
              <option>Available Now</option>
              <option>Offline</option>
            </select>
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <div key={tutor.id} className="glass-white rounded-2xl overflow-hidden shadow-modern card-hover animate-slideInLeft" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Card Header */}
              <div className="gradient-primary p-6 text-white relative">
                <div className="absolute top-4 right-4">
                  {tutor.available ? (
                    <span className="badge badge-success gap-2">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Available
                    </span>
                  ) : (
                    <span className="badge badge-error">Offline</span>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl shadow-modern">
                    {tutor.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{tutor.name}</h3>
                    <p className="text-white text-opacity-90">{tutor.specialty}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold text-gray-800">{tutor.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-semibold text-gray-800">{tutor.students}+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span className="font-semibold text-gray-800">{tutor.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price</span>
                    <span className="font-bold text-purple-600">{tutor.price}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Languages:</p>
                  <div className="flex flex-wrap gap-2">
                    {tutor.languages.map((lang, i) => (
                      <span key={i} className="badge badge-outline badge-sm">{lang}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link 
                    to={`/select-tutor/${tutor.id}`} 
                    className={`btn flex-1 ${tutor.available ? 'gradient-primary text-white border-none' : 'btn-disabled'}`}
                  >
                    {tutor.available ? 'Book Session' : 'Unavailable'}
                  </Link>
                  <button className="btn btn-outline btn-square">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorList;

