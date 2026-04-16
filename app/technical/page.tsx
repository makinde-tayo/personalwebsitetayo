"use client";

import { Linkedin, Github, ExternalLink } from "lucide-react";

export default function Technical() {
  return (
    <main className="min-h-screen bg-[#f5e6c8] text-[#1a2e1a]">
      {/* Header */}
      <header className="flex justify-between items-center p-8">
        <a
          href="/"
          className="text-xl font-bold hover:text-[#2d4a2d] transition-colors"
        >
          Tayo Makinde
        </a>
        <nav className="flex gap-8 text-sm">
          <a
            href="/resume"
            className="hover:text-[#2d4a2d] transition-colors"
          >
            RESUME
          </a>
          <a
            href="/technical"
            className="hover:text-[#2d4a2d] transition-colors"
          >
            TECHNICAL
          </a>
          <a href="/personal" className="hover:text-[#2d4a2d] transition-colors">
            PERSONAL
          </a>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Title and Description */}
        <div className="mb-16">
          <h1 className="text-4xl font-serif mb-6">Technical Projects</h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* DeskCleaner Project */}
          <div className="bg-white rounded-lg border border-[#2d4a2d] overflow-hidden">
            <div className="h-48 bg-[#2d4a2d] flex items-center justify-center">
              <span className="text-6xl">📁</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">DeskCleaner</h3>
              <p className="text-sm text-[#4a4a4a] mb-4 leading-relaxed">
                A full-stack desktop organization tool with a &quot;swipe-to-sort&quot;
                interface for file management. Automates cleanup via generated
                macOS terminal commands and integrates OpenRouter API for
                AI-powered file summaries.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://deskcleaner.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4a2d] hover:text-[#c97e7e] hover:underline text-sm flex items-center gap-1"
                >
                  Explore DeskCleaner
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/makinde-tayo/DesktopCleaner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4a2d] hover:text-[#c97e7e] hover:underline text-sm flex items-center gap-1"
                >
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Basketball Shot Predictor Project */}
          <div className="bg-white rounded-lg border border-[#2d4a2d] overflow-hidden">
            <div className="h-48 bg-[#4a7c59] flex items-center justify-center">
              <span className="text-6xl">🏀</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                Basketball Shot Predictor
              </h3>
              <p className="text-sm text-[#4a4a4a] mb-4 leading-relaxed">
                A computer vision system using OpenCV and YOLO to track
                basketball shots with 92% accuracy. Models shot trajectories with
                polynomial regression to predict scoring outcomes with 85%
                accuracy.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/makinde-tayo/BasketballShotPredictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4a2d] hover:text-[#c97e7e] hover:underline text-sm flex items-center gap-1"
                >
                  View Project
                  <ExternalLink size={14} />
                </a>
                <a
                  href="https://www.youtube.com/shorts/x7RLS4f2yaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4a2d] hover:text-[#c97e7e] hover:underline text-sm flex items-center gap-1"
                >
                  Watch Demo
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* VR Data Analysis Project */}
          <div className="bg-white rounded-lg border border-[#2d4a2d] overflow-hidden">
            <div className="h-48 bg-[#8b5a3c] flex items-center justify-center">
              <span className="text-6xl">📊</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">VR Data Analysis</h3>
              <p className="text-sm text-[#4a4a4a] mb-4 leading-relaxed">
                Analyzed engagement data from a CVPR-published study with
                5,000+ participant interactions. Used Python, Pandas, Matplotlib,
                and Seaborn to visualize patterns and ran t-tests revealing
                statistically significant behavioral differences.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/makinde-tayo/data-analysis-imaginarium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4a2d] hover:text-[#c97e7e] hover:underline text-sm flex items-center gap-1"
                >
                  Explore Analysis
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
