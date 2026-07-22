"use client";

import { ExternalLink, Download } from 'lucide-react';

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

          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-lg">Brown University</h3>
              <div className="text-right text-sm text-[#4a4a4a]">
                <p>Expected May 2028</p>
                <p>Providence, RI</p>
              </div>
            </div>
            <p className="text-[#4a4a4a] text-sm mb-1">
              B.A. in Computer Science and Spanish &middot; GPA 3.7
            </p>
            <p className="text-[#4a4a4a] text-sm">
              Relevant Coursework: Linear Algebra, Probability and Statistics, Discrete Mathematics,
              Data Structures and Algorithms, Multivariable Calculus, Machine Learning
            </p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-8 bg-[#ffffff] rounded-lg border border-[#2d4a2d] p-8">
          <h2 className="text-2xl font-serif font-bold text-[#1a2e1a] mb-6">Work Experience</h2>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-[#1a2e1a]">Gofer AI</h3>
                <a href="https://goferai.space/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-[#2d4a2d]" />
                </a>
              </div>
              <div className="text-right text-sm text-[#4a4a4a]">
                <p>Jun 2026 - Present</p>
                <p>Remote</p>
              </div>
            </div>
            <p className="font-bold mb-2 text-[#1a2e1a]">Software Engineer Intern</p>
            <div className="space-y-2 text-[#4a4a4a] text-sm">
              <p>Built a video pre-processing and quality inspection pipeline in Python and OpenCV that screens robot-training footage for blur, brightness, contrast, and occlusion, processing 60 hours of footage and flagging 12% of frames as unusable before they reached the pose estimation models</p>
              <p>Diagnosed a silent H.264 codec failure that was corrupting 8% of video exports, and built a validation and fallback encoding system that eliminated the failure mode across the team's annotated video output</p>
              <p>Authored handoff documentation and delivered technical walkthroughs that integrated the quality-flagging service into the company's live robotics data pipeline</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-[#1a2e1a]">Otun AI Group</h3>
                <a href="https://www.otungroup.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-[#2d4a2d]" />
                </a>
              </div>
              <div className="text-right text-sm text-[#4a4a4a]">
                <p>Jun 2026 - Present</p>
                <p>Self-employed</p>
              </div>
            </div>
            <p className="font-bold mb-2 text-[#1a2e1a]">Founder</p>
            <div className="space-y-2 text-[#4a4a4a] text-sm">
              <p>Ran technical AI audits for early-stage businesses and delivered opportunity briefs scoping where automation yielded over $10,000 in measurable time and cost savings</p>
              <p>Build and ship production automations using Claude Code and Cursor for agentic development, integrating LLM APIs, MCP servers, and RAG pipelines into client workflows</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-[#1a2e1a]">Reeka Property Management Technology</h3>
                <a href="https://www.reeka.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="text-[#2d4a2d]" />
                </a>
              </div>
              <div className="text-right text-sm text-[#4a4a4a]">
                <p>Sept 2025 - May 2026</p>
                <p>New York, NY</p>
              </div>
            </div>
            <p className="font-bold mb-2 text-[#1a2e1a]">Software Engineer Intern</p>
            <p className="italic text-[#4a4a4a] mb-3 text-sm">
              Reeka is an Antler-backed prop-tech startup building property management infrastructure for emerging markets,
              currently serving 250+ properties across Nigeria and Ghana.
            </p>
            <div className="space-y-2 text-[#4a4a4a] text-sm">
              <p>Built a two-way calendar and pricing synchronization service against the Airbnb and Booking.com REST APIs in JavaScript, reconciling conflicting updates across both platforms on a 15-minute sync interval to eliminate double-bookings</p>
              <p>Engineered a direct booking engine with integrated payment processing, adopted by 50+ property managers to route reservations through their own sites and bypass third-party commission fees</p>
              <p>Built the analytics and reporting module in SQL, surfacing occupancy and revenue trends across client property portfolios</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-[#1a2e1a]">SCU Imaginarium Lab</h3>
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
              <p>Built dataset labeling and annotation tooling in Python across 3 interdisciplinary research teams under Prof. David Jeong, improving model evaluation accuracy by 9% on a 5,000-sample dataset</p>
              <p>Designed and implemented a VR research study environment in Unity and C#, integrating real-time physics-based interaction and haptic feedback for 40 study participants</p>
              <p>Analyzed behavioral and biometric data from the VR experiments in Python; supporting work contributed to publications accepted at CVPR and AAAI</p>
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
            <p className="text-[#2d4a2d] text-sm mb-2">Next.js, TypeScript, Node.js</p>
            <p className="text-[#4a4a4a] text-sm">
              Developed a full-stack desktop cleanup tool with a swipe-based file sorting interface, calling an LLM
              through the OpenRouter REST API to generate summaries of PDF, DOCX, and CSV files.
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
            <p className="text-[#2d4a2d] text-sm mb-2">Python, OpenCV, YOLO, Roboflow</p>
            <p className="text-[#4a4a4a] text-sm">
              Built a computer vision system that tracks basketball trajectories and predicts scoring outcomes from
              unmodified video, training a YOLO-based detector on a 2,400-image annotated dataset in Google Colab to
              reach 91% detection accuracy at 30 FPS.
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
            <p className="text-[#4a4a4a] text-sm">Python, C/C++, Java, JavaScript, TypeScript, SQL, C#</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Libraries and Tools:</h3>
            <p className="text-[#4a4a4a] text-sm">OpenCV, PyTorch, NumPy, Pandas, Git, Docker, Next.js, Node.js, Unity, PostgreSQL</p>
          </div>
        </section>

        {/* Download Resume Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/Tayo_Makinde_Resume.pdf"
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
