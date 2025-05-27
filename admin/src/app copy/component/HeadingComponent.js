// HeadingComponent.js
"use client";
import { FiShield } from "react-icons/fi";

export default function HeadingComponent() {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FiShield className="h-8 w-8 text-indigo-200" />
            <h1 className="text-2xl font-bold tracking-tight">
              COMSOC HACKX <span className="text-indigo-200">ADMIN PANEL</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}