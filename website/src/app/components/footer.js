import Image from "next/image";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between items-start">
        {/* Logos Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            <Image
              src="/image.png" // Replace with your first logo path
              alt="Logo 1"
              width={200}
              height={60}
              className="rounded-xl shadow-lg"
            />
            <Image
              src="/image1.png" // Replace with your second logo path
              alt="Logo 2"
              width={200}
              height={60}
              className="rounded-xl shadow-lg p-2"
            />
          </div>
          <span className="text-violet-300 font-semibold text-lg mb-4">
            Proudly presented by IEEE ComSoc & Partners
          </span>
          
          {/* Social Links */}
          <div className="flex flex-col">
            <h3 className="text-violet-400 font-bold mb-3">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/IEEEComSoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/ieee-comsoc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/ieeecomsoc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/IEEEComSoc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="https://www.youtube.com/user/ieeecomsoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a 
                href="https://www.comsoc.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-violet-400 transition-colors duration-300"
                aria-label="Website"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4 text-violet-400">Event Location</h3>
          <div className="flex flex-col items-center md:items-start mb-4">
            <p className="text-gray-300 mb-2 text-center md:text-left">
              Chandigarh University<br />
              Gharuan, Punjab 140413<br />
              India
            </p>
            <a 
              href="mailto:contact@ieeecomsochackathon.com" 
              className="text-violet-300 hover:text-violet-200 transition-colors duration-300 mb-2"
            >
              contact@ieeecomsochackathon.com
            </a>
            <a 
              href="tel:+911234567890" 
              className="text-violet-300 hover:text-violet-200 transition-colors duration-300"
            >
              +91 95255 44944
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border-2 border-violet-700 shadow-lg w-full max-w-xs h-48">
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

        {/* Quick Links Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4 text-violet-400">Quick Links</h3>
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                About the Event
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                Schedule
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                Prizes
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                Judges
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">
                Register Now
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          &copy; 2025 IEEE ComSoc Hackathon. All rights reserved. | 
          <a href="#" className="hover:text-violet-300 ml-2 transition-colors duration-300">
            Privacy Policy
          </a> | 
          <a href="#" className="hover:text-violet-300 ml-2 transition-colors duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}