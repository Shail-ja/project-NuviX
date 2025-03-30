"use client"

// pages/risk-assessment.js

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import riskExplanationImage from '.'; // Import your image

export default function RiskAssessment() {
  // Mock data - in a real app, this would come from your ML model API
  const [riskData] = useState({
    riskScore: 388.46, // Any float value
    defaultStatus: 1
  });

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[var(--color-text)] relative">
        {/* Financial icon patterns - subtle background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl">$</div>
        <div className="absolute top-20 right-20 text-8xl">%</div>
        <div className="absolute bottom-10 left-1/4 text-7xl">¢</div>
        <div className="absolute top-1/3 right-1/3 text-5xl">€</div>
        <div className="absolute bottom-20 right-40 text-6xl">£</div>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight">
            Risk Assessment
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            ML-powered risk prediction
          </p>
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Risk Score Card - Simplified */}
          <div className="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]">
            <div className="px-8 py-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Risk Score</h3>
              <div className="flex flex-col items-center">
                <div className="text-6xl font-bold text-indigo-600 bg-indigo-50 w-40 h-40 rounded-full flex items-center justify-center mb-4">
                  {riskData.riskScore.toFixed(2)}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Score represents estimated risk level
                </div>
              </div>
            </div>
          </div>

          {/* Default Status Card */}
          <div className={`bg-white overflow-hidden shadow-lg rounded-xl border-t-4 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] ${
            riskData.defaultStatus === 0 ? 'border-green-500' : 'border-red-500'
          }`}>
            <div className="px-8 py-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Default Status</h3>
              <div className="flex flex-col items-center">
                <div className={`text-6xl font-bold mb-4 w-40 h-40 rounded-full flex items-center justify-center ${
                  riskData.defaultStatus === 0 
                    ? 'text-green-600 bg-green-50' 
                    : 'text-red-600 bg-red-50'
                }`}>
                  {riskData.defaultStatus}
                </div>
                <span className={`px-6 py-2 text-base font-medium rounded-full ${
                  riskData.defaultStatus === 0 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {riskData.defaultStatus === 0 ? 'Non-Default' : 'Default'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Display Section */}
        <div className="mt-10 bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl">
          <div className="px-8 py-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Risk Explanation</h3>
            <div className="relative h-80 w-full bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <Image 
                src="/explanable-image.jpg" // Use the imported image
                alt="Risk explanation visualization"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="p-4"
              />
            </div>
            <div className="mt-4 text-sm text-gray-600 italic text-center">
              <p>Visualization showing key factors contributing to the risk assessment.</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>Assessment performed on {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <button
      className="fixed bottom-6 right-6 bg-[var(--color-golden)] text-black px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      onClick={() => router.push('/guide')}
    >
      💬 Chat
    </button>
    </div>
  );
}