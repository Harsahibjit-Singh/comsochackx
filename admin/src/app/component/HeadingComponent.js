"use client";
import Image from "next/image";

export default function HeadingComponent() {
  return (
    <>
      <header 
        className="w-full fixed top-0 z-50 bg-gradient-to-r from-black via-purple-900/90 to-black shadow-lg h-20"
        style={{
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(139, 92, 246, 0.2)'
        }}
      >
        <div className="max-w-15xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center h-full">
            {/* Logo Container - Large size */}
            <div className="flex items-center space-x-45">
              <div className="relative h-40 w-30"> {/* Increased size */}
                <Image
                  src="/image.png" // Replace with your logo path
                  alt="COMSOC HACKX Logo"
                  fill
                  className="object-contain p-1"
                  sizes="150px" // Adjusted for larger image
                  priority
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-600 rounded-lg mix-blend-multiply filter blur-md opacity-0 hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              
              {/* Title */}
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="text-white">COMSOC HACKX</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200">
                  ADMIN PANEL
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"></div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
}