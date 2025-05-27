'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time until August 7, 2025
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date('August 7, 2025 00:00:00');
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial calculation

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-grid-with-lines-17345-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            IEEE ComSoc Hackathon 2025
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join us for an exhilarating 36-hour coding marathon where innovation meets technology. 
            Compete with the brightest minds for a grand prize of <span className="font-bold text-yellow-300">₹50,000</span> 
            and the chance to showcase your skills on a global platform.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div 
            className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-16"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <div className="bg-black bg-opacity-50 rounded-lg p-4 backdrop-blur-sm border border-purple-500">
              <div className="text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-sm opacity-80">Days</div>
            </div>
            <div className="bg-black bg-opacity-50 rounded-lg p-4 backdrop-blur-sm border border-purple-500">
              <div className="text-4xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm opacity-80">Hours</div>
            </div>
            <div className="bg-black bg-opacity-50 rounded-lg p-4 backdrop-blur-sm border border-purple-500">
              <div className="text-4xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm opacity-80">Minutes</div>
            </div>
            <div className="bg-black bg-opacity-50 rounded-lg p-4 backdrop-blur-sm border border-purple-500">
              <div className="text-4xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm opacity-80">Seconds</div>
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div 
            className="bg-black bg-opacity-50 rounded-xl p-6 backdrop-blur-sm border border-purple-500 mb-8 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Event Overview</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>36-hour non-stop coding challenge</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Grand prize of ₹50,000 for the winning team</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Networking opportunities with industry leaders</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Workshops and mentorship sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Categories in AI/ML, IoT, Cybersecurity, and more</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            <a href='https://unstop.com/hackathons/comsoc-hackx-2025-chandigarh-university-cu-ajitgarh-punjab-1412240?lb=uUzX7sqN&utm_medium=Share&utm_source=shortUrl target="_blank" 
'>Register Now</a>
          </motion.button>
        </motion.div>

        {/* IEEE ComSoc Logo/Text */}
        <motion.div 
          className="mt-16 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-sm">Presented by</p>
          <p className="text-2xl font-bold text-purple-300">IEEE Communications Society</p>
        </motion.div>
      </div>

      {/* Floating Particles for effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0
          }}
          animate={{ 
            x: Math.random() * 100 - 50 + (Math.random() * 200 - 100),
            y: Math.random() * 100 - 50 + (Math.random() * 200 - 100),
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 5
          }}
          className="absolute rounded-full bg-purple-500"
          style={{
            width: Math.random() * 5 + 2 + 'px',
            height: Math.random() * 5 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  );
}