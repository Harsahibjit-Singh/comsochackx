// components/ContactUs.jsx
import React from "react";
import NavbarPage from "../components/Navbar";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-violet-900">
      <NavbarPage />
      <div className="w-full max-w-lg p-8 rounded-2xl shadow-2xl bg-black/70 backdrop-blur-md border border-violet-800">
        <h1 className="text-4xl md:text-5xl font-bold text-violet-300 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Have questions about the <span className="font-semibold text-violet-400">36-hour IEEE ComSoc Hackathon</span>?<br />
          Reach out and we'll get back to you soon!
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              type="text"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              type="email"
              id="email"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              id="message"
              rows={4}
              placeholder="How can we help you?"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-violet-700 via-violet-600 to-violet-900 hover:from-violet-600 hover:to-violet-700 text-white font-bold text-lg transition-all duration-200 shadow-lg"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-400">
          Or email us at <a href="mailto:ieeecomsoc@cu.edu.in" className="text-violet-300 underline">comsochackx@gmail.com
</a>
        </div>
      </div>
      <div className="mt-12 text-gray-500 text-xs text-center">
        &copy; 2025 IEEE ComSoc Hackathon | 36 Hours of Innovation
      </div>
    </div>
  );
}
