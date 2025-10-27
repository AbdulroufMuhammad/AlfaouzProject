import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const VideoCall = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isSessionActive) {
        setSessionTime(prev => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isSessionActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    toast.success('Session ended successfully! 🎉');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Session Info Bar */}
      <div className="glass-dark shadow-modern-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Live Session</span>
              </div>
              <div className="text-white text-opacity-80">
                Sheikh Muhammad Ali - Quran Recitation
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-white font-mono text-lg">
                {formatTime(sessionTime)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-4 py-6 h-[calc(100vh-180px)]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full">
          {/* Main Video - Tutor */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-modern-lg animate-fadeIn">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-6xl mb-4 mx-auto">
                  👨‍🏫
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Sheikh Muhammad Ali</h3>
                <p className="text-white text-opacity-80">Tutor</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 glass-dark px-4 py-2 rounded-xl">
              <span className="text-white font-semibold">Tutor</span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Student Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-modern h-64 animate-slideInRight">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-4xl mb-2 mx-auto">
                    👨‍🎓
                  </div>
                  <p className="text-white text-sm">You</p>
                </div>
              </div>
              <div className="absolute top-2 left-2 glass-dark px-3 py-1 rounded-lg text-sm">
                <span className="text-white">You</span>
              </div>
              {isVideoOff && (
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Session Notes */}
            <div className="glass-dark rounded-2xl p-4 shadow-modern animate-slideInRight" style={{animationDelay: '0.1s'}}>
              <h4 className="text-white font-bold mb-3">Session Notes</h4>
              <div className="space-y-2 text-sm text-white text-opacity-80">
                <p>• Focus on Tajweed rules</p>
                <p>• Practice Surah Al-Fatiha</p>
                <p>• Review pronunciation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="fixed bottom-0 left-0 right-0 glass-dark shadow-modern-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center items-center space-x-4">
            {/* Mute Button */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`btn btn-circle btn-lg ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'} border-none`}
            >
              {isMuted ? (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              )}
            </button>

            {/* Video Button */}
            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`btn btn-circle btn-lg ${isVideoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'} border-none`}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>

            {/* End Call Button */}
            <button
              onClick={handleEndCall}
              className="btn btn-circle btn-lg bg-red-600 hover:bg-red-700 border-none"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
            </button>

            {/* Screen Share Button */}
            <button className="btn btn-circle btn-lg bg-gray-700 hover:bg-gray-600 border-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>

            {/* Chat Button */}
            <button className="btn btn-circle btn-lg bg-gray-700 hover:bg-gray-600 border-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;

