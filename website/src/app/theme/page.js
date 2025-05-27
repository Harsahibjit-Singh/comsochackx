// app/theme/page.jsx or pages/theme.jsx (depending on your Next.js version)
import React from "react";
import { FaRobot, FaLink, FaCloud, FaLock, FaNetworkWired, FaVrCardboard, FaBrain, FaLaptop } from "react-icons/fa";
import NavbarPage from "../components/Navbar";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import Footer from "../components/footer";

const domains = [
  { name: "AI / ML", icon: <FaRobot className="text-violet-400 text-3xl" /> },
  { name: "Blockchain", icon: <FaLink className="text-violet-400 text-3xl" /> }, 
   { name: "Web Development", icon: <FaLaptopCode className="text-violet-400 text-3xl" /> },
  { name: "App Development", icon: <FaMobileAlt className="text-violet-400 text-3xl" /> },

  { name: "Cloud Computing", icon: <FaCloud className="text-violet-400 text-3xl" /> },
  { name: "Cybersecurity", icon: <FaLock className="text-violet-400 text-3xl" /> },
  { name: "IoT", icon: <FaNetworkWired className="text-violet-400 text-3xl" /> },
  { name: "AR / VR", icon: <FaVrCardboard className="text-violet-400 text-3xl" /> },
  { name: "Data Science", icon: <FaBrain className="text-violet-400 text-3xl" /> },
];

export default function ThemePage() {
  return (
    <>
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-violet-900 text-white flex flex-col items-center justify-center px-4 py-12">
      <NavbarPage />
      {/* Header */}
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-violet-700 bg-clip-text text-transparent mb-4 drop-shadow-lg">
          IEEE ComSoc Hackathon 2025
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-2 font-medium tracking-wide">
          <span className="inline-block px-4 py-1 rounded-full bg-violet-700/80 text-white font-semibold shadow-lg animate-pulse">
            36 Hours of Non-Stop Innovation!
          </span>
        </p>
        <p className="text-gray-400 mt-4 text-lg">
          <span className="font-bold text-violet-300">Open Innovation</span> means you can build anything, in any domain you love. Bring your wildest ideas to life – from AI to Blockchain, IoT to Cybersecurity, and beyond!
        </p>
      </div>

      {/* Domains Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {domains.map((d) => (
          <div
            key={d.name}
            className="flex flex-col items-center bg-gray-800/80 rounded-2xl p-6 shadow-lg hover:scale-105 hover:bg-violet-800/80 transition-all duration-300"
          >
            <div className="mb-3">{d.icon}</div>
            <div className="text-xl font-semibold text-white">{d.name}</div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-violet-300">Ready to shape the future?</h2>
        <p className="mb-6 text-gray-300">Form your team, pick your passion, and let your imagination soar. <br /> All domains. All ideas. All yours.</p>
        <a
          href="https://unstop.com/hackathons/comsoc-hackx-2025-chandigarh-university-cu-ajitgarh-punjab-1412240?lb=uUzX7sqN&utm_medium=Share&utm_source=shortUrl"
          target="_blank"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 text-white font-bold text-lg shadow-lg hover:from-violet-700 hover:to-violet-900 transition-all duration-300"
        >
          Register Now
        </a>
      </div>
    </main>
    <Footer />
    </>
  );
}
