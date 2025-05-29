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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date('June 15, 2025 00:00:00');
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
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Cosmic Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <div className="absolute inset-0 bg-[url('https://assets.codepen.io/9394943/stars.png')] opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/70 to-violet-900/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-6 py-12 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-violet-300 animate-text-shine"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-outline">COMSOC</span> HACKX 2025
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium text-purple-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The ultimate <span className="font-bold text-pink-300">36-hour innovation marathon</span> where brilliant minds collide to build the future of technology
            </motion.p>

            {/* Countdown */}
            <motion.div 
              className="grid grid-cols-4 gap-3 sm:gap-5 max-w-2xl mx-auto mb-16"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
            >
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="relative group">
                  <div className="absolute inset-0 bg-purple-900/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-b from-purple-900/60 to-violet-900/80 rounded-xl p-4 sm:p-5 backdrop-blur-sm border border-purple-500/50 group-hover:border-pink-400 transition-all duration-300">
                    <div className="text-3xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm uppercase tracking-widest text-center mt-2 text-purple-300/90">
                      {unit}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Event Highlights */}
          <motion.section 
            className="mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
              <span className="text-outline">HACKATHON</span> HIGHLIGHTS
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: '💻', 
                  title: 'Cutting-Edge Tech', 
                  desc: 'AI, Blockchain, IoT, Web3, Quantum Computing & more',
                  color: 'from-violet-600 to-purple-500'
                },
                { 
                  icon: '🏆', 
                  title: 'Massive Prize Pool', 
                  desc: '₹1,00,000+ in prizes with additional sponsor rewards',
                  color: 'from-amber-600 to-yellow-500'
                },
                { 
                  icon: '🌐', 
                  title: 'National Reach', 
                  desc: '2,500+ participants from across India',
                  color: 'from-emerald-600 to-teal-400'
                },
                { 
                  icon: '👥', 
                  title: 'Networking', 
                  desc: 'Connect with industry leaders and potential employers',
                  color: 'from-blue-600 to-cyan-400'
                },
                { 
                  icon: '🎓', 
                  title: 'First-Year Bonus', 
                  desc: '10% score boost + dedicated mentorship for freshers',
                  color: 'from-pink-600 to-rose-400'
                },
                { 
                  icon: '🔮', 
                  title: 'Open Innovation', 
                  desc: 'Choose your problem or pick from our challenges',
                  color: 'from-purple-600 to-fuchsia-400'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-xl hover:shadow-pink-500/20 transition-all duration-300`}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Detailed Sections */}
          <div className="grid lg:grid-cols-2 gap-10 mb-24">
            {/* Event Details */}
            <motion.div 
              className="bg-gradient-to-br from-purple-900/40 to-violet-900/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 shadow-lg"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-600/70 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                  EVENT DETAILS
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600/70 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-200">36-Hour Marathon</h3>
                    <p className="text-sm opacity-90">Continuous coding at Chandigarh University</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-pink-600/70 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-200">Team Composition</h3>
                    <p className="text-sm opacity-90">3-5 members (inter-college teams allowed, must be 18+)</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-violet-600/70 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-200">Flexible Problem Statements</h3>
                    <p className="text-sm opacity-90">Choose your own challenge or select from our curated list</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rules & Regulations */}
            <motion.div 
              className="bg-gradient-to-br from-violet-900/40 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm border border-violet-500/30 shadow-lg"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-violet-600/70 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-purple-300">
                  RULES & REGULATIONS
                </h2>
              </div>
              
              <div className="space-y-5">
                {[
                  "All code must be developed exclusively during the hackathon",
                  "Plagiarism or use of pre-existing solutions leads to disqualification",
                  "Professional conduct is mandatory throughout the event",
                  "Participants must wear official Hackathon ID badges at all times",
                  "Teams must document their development process",
                  "Judges' decisions are final and binding",
                  "Projects must be submitted before the deadline",
                  "First-year students must declare their status during registration"
                ].map((rule, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-pink-500/70 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-sm opacity-90">{rule}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

      
          {/* CTA Section */}
          <motion.section
            className="text-center mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="bg-gradient-to-br from-purple-900/40 to-violet-900/50 rounded-2xl p-12 backdrop-blur-sm border border-purple-500/30 shadow-xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
                READY TO <span className="text-outline">HACK</span> THE FUTURE?
              </h2>
              <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-purple-100">
                Join India's most exciting hackathon and showcase your skills on a national stage
              </p>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <a 
                  href="https://unstop.com/hackathons/comsoc-hackx-2025-chandigarh-university-cu-ajitgarh-punjab-1412240?lb=uUzX7sqN&utm_medium=Share&utm_source=shortUrl" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold text-white rounded-full group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-600 to-purple-700 group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300"></span>
                  <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-30 filter blur-sm bg-gradient-to-br from-pink-600 to-purple-700"></span>
                  <span className="relative flex items-center">
                    <span className="text-lg font-bold">REGISTER NOW</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
              </motion.div>
              
              <p className="mt-6 text-sm opacity-80">
                Limited slots available • Registration closes August 1, 2025
              </p>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer 
            className="text-center opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-600/70 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                IEEE COMMUNICATIONS SOCIETY
              </h3>
            </div>
            
            <p className="text-sm opacity-70 max-w-2xl mx-auto">
              ComSoc HackX 2025 is organized under the auspices of IEEE, the world's largest technical professional organization dedicated to advancing technology for humanity.
            </p>
            
            <div className="mt-8 flex justify-center space-x-6">
              {['#ComSocHackX', '#HackTheFuture', '#IEEEInnovates'].map((tag, index) => (
                <span key={index} className="text-xs bg-purple-900/50 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.footer>
        </motion.div>
      </div>

      {/* Floating Elements */}
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
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 5
          }}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'bg-pink-500/30' : i % 2 === 0 ? 'bg-purple-500/30' : 'bg-violet-500/30'
          }`}
          style={{
            width: Math.random() * 10 + 5 + 'px',
            height: Math.random() * 10 + 5 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Glow Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-40 right-1/3 w-80 h-80 rounded-full bg-pink-900/15 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/3 right-1/5 w-64 h-64 rounded-full bg-violet-900/20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}