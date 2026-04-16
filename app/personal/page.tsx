"use client";

import { ExternalLink } from "lucide-react";

export default function Personal() {
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
          <h1 className="text-4xl font-serif mb-6">Personal Interests</h1>
          <p className="text-lg text-[#4a4a4a] max-w-3xl leading-relaxed">
            When I&apos;m not coding or studying, I&apos;m usually reading,
            exploring art, or running. Here&apos;s what I&apos;m into right now.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Currently Reading */}
          <div className="bg-white rounded-lg border border-[#2d4a2d] overflow-hidden">
            <div className="h-64 bg-[#2d4a2d] flex items-center justify-center overflow-hidden">
              <img
                src="/RedRising.png"
                alt="Red Rising book cover"
                className="h-48 w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Currently Reading:</h3>
              <p className="text-sm text-[#4a4a4a] mb-4 leading-relaxed">
                Red Rising by Pierce Brown
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.amazon.com/Red-Rising-Pierce-Brown/dp/034553980X/ref=sr_1_1?crid=1C69ODU1P2X6C&dib=eyJ2IjoiMSJ9.pw8rg2N8iUHVDd256n_wS9a8WQG-0bLEbt--l1OARiVcFgNGi8Z0J4PzVsQ19_117V7cEeyF3MGZbdpD8v2AADZYTQnAfSwiqCXsdqAqddp6B95Rlgg0fyZwmazrACcpzBwg-oUBLNVtZr_uCme7e1Xih01HfDliOY1JA1pDT9pGR4ikjlb4_GVqFyqnZCR-WIAJNnP6B23MmBBcpIzLBmefxD1vozth5IcAAtEBSiw.d-1WBJJBnsnwB5Yz10egrlMBIT9cnHnyTxgDTXM1KPw&dib_tag=se&keywords=red+rising&qid=1776309049&sprefix=red+risin%2Caps%2C138&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4a2d] hover:text-[#c97e7e] hover:underline text-sm flex items-center gap-1"
                >
                  Red Rising
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Favorite Art Piece */}
          <div className="bg-white rounded-lg border border-[#2d4a2d] overflow-hidden">
            <div className="h-64 bg-[#8b7355] flex items-center justify-center overflow-hidden">
              <img
                src="/The Gulf Stream.jpg"
                alt="The Gulf Stream painting"
                className="h-48 w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Current Favorite Art Piece:</h3>
              <p className="text-sm text-[#4a4a4a] mb-4 leading-relaxed">
                The Gulf Stream by <a href="https://en.wikipedia.org/wiki/Winslow_Homer" target="_blank" rel="noopener noreferrer" className="text-[#2d4a2d] hover:text-[#c97e7e] hover:underline">Winslow Homer</a>
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://en.wikipedia.org/wiki/The_Gulf_Stream_%28painting%29#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4a2d] hover:text-[#c97e7e] hover:underline text-sm flex items-center gap-1"
                >
                  Learn More
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Brown Run Club */}
          <div className="bg-white rounded-lg border border-[#2d4a2d] overflow-hidden">
            <div className="h-64 bg-black flex items-center justify-center overflow-hidden">
              <img
                src="/Brown Run Club.jpg"
                alt="Brown Run Club"
                className="h-40 w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Brown Run Club</h3>
              <p className="text-sm text-[#4a4a4a] mb-4 leading-relaxed">
                100m, 200m, and Long Jump Specialist
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.nationalrunningclubdatabase.com/athletes/31122/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d4a2d] hover:text-[#c97e7e] hover:underline text-sm flex items-center gap-1"
                >
                  View Running Times
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
