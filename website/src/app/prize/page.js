'use client';
import { FaTrophy, FaAward, FaCertificate, FaGift, FaGraduationCap, FaBriefcase, FaRegSmile } from 'react-icons/fa';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { MdEmojiEvents } from 'react-icons/md';
import NavbarPage from '../components/Navbar';
import Footer from '../components/footer';

export default function PrizePage() {
  return (
    <>
    <NavbarPage />
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prizes & <span className="text-violet-300">Rewards</span>
          </h1>
          <div className="w-24 h-1 bg-violet-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compete for amazing prizes and recognition in our hackathon. Showcase your skills and win big!
          </p>
        </div>

        {/* Main Awards */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <GiLaurelsTrophy className="text-4xl text-yellow-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Main Awards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1st Place */}
            <div className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 border border-violet-700 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full filter blur-3xl opacity-20"></div>
              <div className="flex items-center mb-4">
                <FaTrophy className="text-4xl text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">1st Place</h3>
              </div>
              <p className="text-xl text-gray-300 mb-6">₹25,000 + Trophy</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300"></div>
            </div>

            {/* 2nd Place */}
            <div className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 border border-violet-700 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-400 rounded-full filter blur-3xl opacity-20"></div>
              <div className="flex items-center mb-4">
                <FaTrophy className="text-4xl text-gray-300 mr-3" />
                <h3 className="text-2xl font-bold text-white">2nd Place</h3>
              </div>
              <p className="text-xl text-gray-300 mb-6">₹15,000 + Trophy</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 to-gray-200"></div>
            </div>

            {/* 3rd Place */}
            <div className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 border border-violet-700 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-700 rounded-full filter blur-3xl opacity-20"></div>
              <div className="flex items-center mb-4">
                <FaTrophy className="text-4xl text-amber-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">3rd Place</h3>
              </div>
              <p className="text-xl text-gray-300 mb-6">₹10,000 + Trophy</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-400"></div>
            </div>
          </div>
        </div>

        {/* Special Track Awards */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <MdEmojiEvents className="text-4xl text-violet-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Special Track Awards</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Best AI/ML Project", prize: "₹1,000" },
              { name: "Best Blockchain Project", prize: "₹1,000" },
              { name: "Best IoT Project", prize: "₹1,000" },
              { name: "Best Web3 Project", prize: "₹1,000" },
              { 
                name: "Best Social Impact Project", 
                prize: "₹1,000 + Certification",
                special: true
              },
            ].map((award, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 border border-violet-800 rounded-xl p-6 shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
              >
                <div className="flex items-start">
                  <FaAward className={`text-2xl mt-1 mr-3 ${award.special ? 'text-yellow-400' : 'text-violet-400'}`} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{award.name}</h3>
                    <p className="text-lg text-gray-300">{award.prize}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Perks & Opportunities */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <FaRegSmile className="text-4xl text-pink-300 mr-4" />
            <h2 className="text-3xl font-bold text-white">Extra Perks & Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Internship Opportunities */}
            <div className="bg-gradient-to-br from-violet-800/60 to-purple-800/60 border border-violet-700 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-all duration-300">
              <FaBriefcase className="text-3xl text-violet-300 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Internship Opportunities</h3>
              <p className="text-gray-300 text-center">Get a chance to earn exclusive internship offers from top companies.</p>
            </div>
            {/* Free Premium Courses */}
            <div className="bg-gradient-to-br from-violet-800/60 to-purple-800/60 border border-violet-700 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-all duration-300">
              <FaGraduationCap className="text-3xl text-violet-300 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Free Premium Courses</h3>
              <p className="text-gray-300 text-center">All participants get access to premium learning resources and courses.</p>
            </div>
            {/* Free Swags and Goodies */}
            <div className="bg-gradient-to-br from-violet-800/60 to-purple-800/60 border border-violet-700 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-all duration-300">
              <FaGift className="text-3xl text-violet-300 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Free Swags & Goodies</h3>
              <p className="text-gray-300 text-center">Exciting swags and goodies for all participants to take home!</p>
            </div>
            {/* Certificates for All */}
            <div className="bg-gradient-to-br from-violet-800/60 to-purple-800/60 border border-violet-700 rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-all duration-300">
              <FaCertificate className="text-3xl text-violet-300 mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Certificates for All</h3>
              <p className="text-gray-300 text-center">Every participant will receive a certificate recognizing their efforts.</p>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="flex items-center mb-8">
            <FaCertificate className="text-4xl text-amber-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Certificates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Round 1 & 2 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Round 1 & 2</h3>
                <p className="text-xl text-gray-300">Participation Certificate</p>
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Round 3 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 shadow-lg relative overflow-hidden group col-span-2">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-yellow-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Round 3</h3>
                <p className="text-xl text-gray-300">Finalist Certificate</p>
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Glowing elements */}
        <div className="fixed -bottom-40 -left-40 w-80 h-80 bg-violet-600 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="fixed -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      </div>
    </div>
    <Footer />
    </>

  );
}
