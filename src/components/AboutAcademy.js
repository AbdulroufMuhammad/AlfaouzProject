import React from 'react';
import { Link } from 'react-router-dom';

const AboutAcademy = ({ onLogout }) => {
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
        {/* Hero Section */}
        <div className="gradient-primary rounded-3xl p-12 text-white text-center mb-8 shadow-modern-lg animate-fadeIn relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="text-6xl mb-4">📖</div>
            <h2 className="text-5xl font-bold mb-4">About ALfaouz Academy</h2>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Your trusted partner in Quranic education, connecting students worldwide with qualified scholars
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass-white rounded-2xl p-8 shadow-modern animate-slideInLeft">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To make quality Quranic education accessible to everyone, everywhere. We strive to connect students with experienced scholars who can guide them on their spiritual journey with patience and expertise.
            </p>
          </div>
          <div className="glass-white rounded-2xl p-8 shadow-modern animate-slideInRight">
            <div className="text-5xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the world's leading online Quran academy, fostering a global community of learners who are deeply connected to the Quran and its teachings through innovative technology and traditional scholarship.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="glass-white rounded-2xl p-8 shadow-modern mb-8 animate-scaleIn">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '🤲', title: 'Faith', desc: 'Rooted in Islamic principles' },
              { icon: '📚', title: 'Excellence', desc: 'Highest quality education' },
              { icon: '🌍', title: 'Accessibility', desc: 'Available to all' },
              { icon: '❤️', title: 'Compassion', desc: 'Patient and caring approach' },
            ].map((value, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-md transition-all">
                <div className="text-5xl mb-3">{value.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { value: '10,000+', label: 'Students Worldwide', icon: '👨‍🎓' },
            { value: '500+', label: 'Qualified Tutors', icon: '👨‍🏫' },
            { value: '50+', label: 'Countries', icon: '🌍' },
            { value: '100,000+', label: 'Sessions Completed', icon: '✅' },
          ].map((stat, i) => (
            <div key={i} className="glass-white rounded-2xl p-6 text-center shadow-modern card-hover animate-scaleIn" style={{animationDelay: `${i * 0.1}s`}}>
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="glass-white rounded-2xl p-8 shadow-modern animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎓', title: 'Expert Tutors', desc: 'Learn from certified Quran scholars with years of experience' },
              { icon: '⏰', title: 'Flexible Schedule', desc: 'Book sessions at times that work best for you' },
              { icon: '💻', title: 'Modern Platform', desc: 'User-friendly interface with advanced learning tools' },
              { icon: '🌐', title: 'Global Community', desc: 'Connect with students from around the world' },
              { icon: '📱', title: 'Mobile Friendly', desc: 'Learn on any device, anywhere, anytime' },
              { icon: '🎯', title: 'Personalized Learning', desc: 'Customized curriculum based on your goals' },
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAcademy;

