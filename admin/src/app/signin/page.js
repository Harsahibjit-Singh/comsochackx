"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FiUser, FiLock, FiLogIn, FiShield } from "react-icons/fi";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
        callbackUrl: "/protected"
      });

      if (result?.error) {
        setError("Invalid credentials. Please try again.");
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Glass card container */}
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl">
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-purple-600/30 via-transparent to-violet-600/30 pointer-events-none"></div>
          
          <div className="p-8">
            {/* Header with logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-4 group">
                <FiShield className="h-12 w-12 text-purple-300" />
                <div className="absolute inset-0 bg-purple-600 rounded-full mix-blend-multiply filter blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-1">Welcome Back</h1>
              <p className="text-purple-200/80">Sign in to your admin dashboard</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-900/30 text-red-200 border border-red-800/50 p-3 rounded-lg mb-6 text-sm backdrop-blur-sm flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {/* Sign In Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-purple-100/80 mb-2">
                  Username
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-300/80 group-focus-within:text-purple-300 transition-colors">
                    <FiUser className="text-lg" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200 group-hover:border-purple-500/30"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-100/80 mb-2">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-300/80 group-focus-within:text-purple-300 transition-colors">
                    <FiLock className="text-lg" />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200 group-hover:border-purple-500/30"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-600 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500/50 transition-all duration-300 disabled:opacity-50 group"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <FiLogIn className="text-xl group-hover:translate-x-1 transition-transform" />
                      <span>Sign In</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-purple-200/50">
          © {new Date().getFullYear()} COMSOC HACKX ADMIN. All rights reserved.
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-10px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
      `}</style>
    </div>
  );
}