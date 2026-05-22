"use client";

import { Linkedin, Github, ExternalLink, Download } from 'lucide-react';

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#f5e6c8] text-[#1a2e1a]">
      {/* Header */}
      <header className="flex justify-between items-center p-8">
        <a href="/" className="text-xl font-bold hover:text-[#2d4a2d] transition-colors">Tayo Makinde</a>
        <nav className="flex gap-8 text-sm">
          <a href="/resume" className="hover:text-[#2d4a2d] transition-colors">RESUME</a>
          <a href="/technical" className="hover:text-[#2d4a2d] transition-colors">TECHNICAL</a>
          <a href="/personal" className="hover:text-[#2d4a2d] transition-colors">PERSONAL</a>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto py-16 px-8">

        {/* Education Section */}
        <section className="mb-8 bg-[#ffffff] rounded-lg border border-[#2d4a2d] p-8">
          <h2 className="text-2xl font-serif font-bold text-[#1a2e1a] mb-6">Education</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-lg">Brown University</h3>
              <span className="text-sm text-[#4a4a4a]">Providence, RI</span>
            </div>
            <p className="text-[#4a4a4a] text-sm mb-1">
              B.A.Computer Science / B.A. Spanish
            </p>
            <p className="text-[#4a4a4a] text-sm">GPA 4.0</p>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-lg text-[#1a2e1a]">Santa Clara University</h3>
              <span className="text-sm text-[#4a4a4a]">Santa Clara, CA</span>
            </div>
            <p className="text-[#4a4a4a] text-sm mb-1">
              B.A. Computer Science
            </p>
            <p className="text-[#4a4a4a] text-sm">GPA 3.7</p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-8 bg-[#ffffff] rounded-lg border border-[#2d4a2d] p-8">
          <h2 className="text-2xl font-serif font-bold text-[#1a2e1a] mb-6">Work Experience</h2>
          
          <div className="mb-8">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-[#1a2e1a]">Reeka Property Management Technology</h3>
                <a href="https://www.reeka.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-[#2d4a2d]" />
                </a>
              </div>
              <div className="text-right text-sm text-[#4a4a4a]">
                <p>Sept 2025 - Present</p>
                <p>New York, NY</p>
              </div>
            </div>
            <p className="font-bold mb-2 text-[#1a2e1a]">Intern</p>
            <p className="italic text-[#4a4a4a] mb-3 text-sm">
              Reeka is an Antler-backed prop-tech startup building property management infrastructure for emerging markets, 
              currently serving 250+ properties across Nigeria and Ghana.
            </p>
            <div className="space-y-2 text-[#4a4a4a] text-sm">
              <p>Integrated Airbnb and Booking.com APIs to power a two-way calendar and pricing sync system, reducing double-booking incidents for clients by 40% and keeping availability data accurate across 3+ platforms in real time</p>
              <p>Built and refined a direct booking engine with integrated payment processing, helping 50+ property managers cut third-party commission costs by routing 20% more bookings through their own sites</p>
              <p>Contributed to the analytics and reporting module, enabling clients to track occupancy rates and revenue trends across portfolios of up to 25 properties, leading to a 15% average increase in reported occupancy</p>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-[#1a2e1a]">Imaginarium Lab Santa Clara</h3>
                <a href="https://www.scu.edu/imaginarium/research/metaverse/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-[#2d4a2d]" />
                </a>
              </div>
              <div className="text-right text-sm text-[#4a4a4a]">
                <p>Sept 2024 - August 2025</p>
                <p>Santa Clara, CA</p>
              </div>
            </div>
            <p className="font-bold mb-2 text-[#1a2e1a]">Undergraduate Researcher</p>
            <div className="space-y-2 text-[#4a4a4a] text-sm">
              <p>Collaborated on 3 interdisciplinary research teams developing dataset labeling and annotation pieces of model evaluation pipelines in Python improving model accuracy by 30%</p>
              <p>Designed and built a VR research game in Unity to promote body positivity, integrated real-time physics-based interactions and haptic feedback system. Tested by 50+ participants, increasing engagement duration by 25% on average</p>
              <p>Collaborated on research projects accepted to premier AI conferences (CVPR and AAAI); results recognized for research excellence</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8 bg-[#ffffff] rounded-lg border border-[#2d4a2d] p-8">
          <h2 className="text-2xl font-serif font-bold text-[#1a2e1a] mb-6">Projects</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-[#1a2e1a]">DeskCleaner</h3>
                <a href="https://deskcleaner.dev/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-[#2d4a2d]" />
                </a>
              </div>
              <span className="text-sm text-[#4a4a4a]">April 2026</span>
            </div>
            <p className="text-[#2d4a2d] text-sm mb-2">Next.js, TypeScript, Node.js, OpenRouter</p>
            <p className="text-[#4a4a4a] text-sm">
              Developed a full-stack desktop organization tool that utilizes a "swipe-to-sort" interface for file management, 
              automating cleanup via generated macOS terminal commands. Integrated OpenRouter API (Elephant Alpha) to generate 
              AI-powered file summaries by recursively parsing and extracting metadata from PDF, DOCX, and CSV formats.
            </p>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">Basketball Shot Predictor</h3>
                <a href="https://github.com/makinde-tayo/BasketballShotPredictor" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-[#2d4a2d]" />
                </a>
              </div>
              <span className="text-sm text-[#4a4a4a]">May 2025</span>
            </div>
            <p className="text-[#2d4a2d] text-sm mb-2">Python, OpenCV</p>
            <p className="text-[#4a4a4a] text-sm">
              Developed a computer vision system to track basketball shots using OpenCV color detection and a YOLO-based 
              hoop detector, achieving 92% tracking accuracy across 1,000+ video frames. Modeled shot trajectories with 
              polynomial regression to predict scoring outcomes with 85% accuracy. Trained and deployed models using Google 
              Colab and Roboflow for dataset management and augmentation.
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">VR Data Analysis</h3>
                <a href="https://github.com/makinde-tayo/data-analysis-imaginarium" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-[#2d4a2d]" />
                </a>
              </div>
              <span className="text-sm text-[#4a4a4a]">March 2025</span>
            </div>
            <p className="text-[#2d4a2d] text-sm mb-2">Python, Matplotlib, Seaborn</p>
            <p className="text-[#4a4a4a] text-sm">
              Analyzed engagement data from CVPR-published study (5,000+ participant interactions) to investigate 
              gender-based behavioral differences. Processed and filtered datasets with Python and Pandas, visualized 
              top engagement patterns using Matplotlib and Seaborn, and ran t-tests revealing statistically significant 
              gender differences in interaction frequency.
            </p>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="bg-[#ffffff] rounded-lg border border-[#2d4a2d] p-8">
          <h2 className="text-2xl font-serif font-bold text-[#2d4a2d] mb-6">Technical Skills</h2>
          
          <div className="mb-4">
            <h3 className="font-bold mb-2">Languages:</h3>
            <p className="text-[#4a4a4a] text-sm">Python, Java, C, C++, JavaScript, Swift</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Technologies/Frameworks:</h3>
            <p className="text-[#4a4a4a] text-sm">Linux, GitHub, ReactJS, Git, Flutter</p>
          </div>
        </section>

        {/* Download Resume Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/Tayo_Makinde_I_Resume.pdf"
            download="Tayo Makinde Resume.pdf"
            className="flex items-center gap-3 px-8 py-4 bg-[#ffffff] border border-[#2d4a2d] rounded-lg hover:border-[#1a2e1a] hover:text-[#1a2e1a] transition-colors text-lg"
          >
            <Download size={20} />
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </main>
  );
}
