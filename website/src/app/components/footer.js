import Image from "next/image";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center lg:items-start">
          
          {/* Logos Section - Centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <Image
                src="/image.png"
                alt="Logo 1"
                width={180}
                height={54}
                className="rounded-xl shadow-lg w-auto h-12 sm:h-14"
              />
              <Image
                src="/image1.png"
                alt="Logo 2"
                width={180}
                height={54}
                className="rounded-xl shadow-lg p-2 w-auto h-12 sm:h-14"
              />
            </div>
            
            <span className="text-violet-300 font-semibold text-sm sm:text-lg mb-6 text-center lg:text-left">
              Proudly presented by IEEE ComSoc & Partners
            </span>
            
            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-violet-400 font-bold mb-3 text-sm sm:text-base">Connect With Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/ieee-comsoc-cusb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/ieeecomsoccu?igsh=M2drYWhrbXMyZ3I1&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Location Section - Centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-violet-400">Event Location</h3>
            <div className="flex flex-col items-center lg:items-start mb-6">
              <p className="text-gray-300 mb-2 text-sm sm:text-base text-center lg:text-left">
                Chandigarh University<br />
                Gharuan, Punjab 140413<br />
                India
              </p>
              <a 
                href="mailto:contact@ieeecomsochackathon.com" 
                className="text-violet-300 hover:text-violet-200 transition-colors duration-300 mb-2 text-sm sm:text-base"
              >
                contact@ieeecomsochackathon.com
              </a>
              <a 
                href="tel:+919525544944" 
                className="text-violet-300 hover:text-violet-200 transition-colors duration-300 text-sm sm:text-base"
              >
                +91 95255 44944
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border-2 border-violet-700 shadow-lg w-full max-w-xs h-40 sm:h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.856988937744!2d76.5734489!3d30.7696334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0xe34776e655434447!2sCHANDIGARH%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hackathon Location"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-center text-gray-500 text-xs sm:text-sm">
            <span>&copy; 2025 IEEE ComSoc Hackathon. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-violet-300 transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-violet-300 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}