import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Notifications = ({ onLogout }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Session Scheduled', message: 'Your session with Sheikh Muhammad Ali is scheduled for tomorrow at 3:00 PM', time: '2 hours ago', read: false, type: 'info', icon: '📅' },
    { id: 2, title: 'Session Completed', message: 'You have completed your Tajweed session. Please rate your experience.', time: '1 day ago', read: false, type: 'success', icon: '✅' },
    { id: 3, title: 'New Achievement Unlocked', message: 'Congratulations! You have earned the "10 Sessions" badge.', time: '2 days ago', read: true, type: 'success', icon: '🏆' },
    { id: 4, title: 'Payment Reminder', message: 'Your monthly subscription is due in 3 days.', time: '3 days ago', read: true, type: 'warning', icon: '💳' },
    { id: 5, title: 'New Tutor Available', message: 'Sheikh Bilal Ahmed is now available for Quran Translation sessions.', time: '4 days ago', read: true, type: 'info', icon: '👨‍🏫' },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    toast.success('All notifications marked as read');
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

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
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Notifications 🔔</h2>
              <p className="text-gray-600 text-lg">
                {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
              </p>
            </div>
            {unreadCount > 0 && (
              <button onClick={markAllAsRead} className="btn gradient-primary text-white border-none">
                Mark All as Read
              </button>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {notifications.map((notification, index) => (
            <div 
              key={notification.id}
              onClick={() => !notification.read && markAsRead(notification.id)}
              className={`glass-white rounded-2xl p-6 shadow-modern cursor-pointer transition-all hover:shadow-modern-lg animate-slideInLeft ${!notification.read ? 'border-l-4 border-purple-500' : ''}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-modern ${
                  notification.type === 'success' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                  notification.type === 'warning' ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                  'bg-gradient-to-br from-blue-500 to-cyan-500'
                }`}>
                  {notification.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{notification.title}</h3>
                    {!notification.read && (
                      <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{notification.message}</p>
                  <p className="text-sm text-gray-400">{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

