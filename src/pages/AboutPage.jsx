import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-8">
        <h2 className="text-[20px] md:text-[32px] font-bold text-zinc-900 text-center mb-8">ABOUT</h2>

        <div className="bg-white/60 backdrop-blur border-4 border-zinc-900 p-6 md:p-8 space-y-4">
          <div>
            <h3 className="text-[11px] font-bold text-zinc-900 mb-2 uppercase">Our Mission</h3>
            <p className="text-[8px] md:text-[9px] text-zinc-800 leading-relaxed">
              NESW_Voyager is dedicated to creating immersive digital experiences that blend retro aesthetics with cutting-edge web technology. We believe that every journey through memories should be visual, interactive, and unforgettable.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-zinc-900 mb-2 uppercase">What We Do</h3>
            <p className="text-[8px] md:text-[9px] text-zinc-800 leading-relaxed">
              We specialize in creating interactive 3D experiences, responsive web applications, and retro-inspired digital products. Our focus is on combining nostalgic design with modern functionality.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-zinc-900 mb-2 uppercase">Technology</h3>
            <p className="text-[8px] md:text-[9px] text-zinc-800 leading-relaxed">
              Built with React, Vite, Tailwind CSS, and CSS 3D transforms. This project showcases modern web capabilities with a retro visual style.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <h3 className="text-[12px] font-bold text-zinc-900 text-center uppercase mb-6">Timeline</h3>
          
          <div className="flex gap-4">
            <div className="w-1 bg-zinc-900"></div>
            <div className="space-y-6">
              <div>
                <p className="text-[9px] font-bold text-zinc-900">2024 - Project Started</p>
                <p className="text-[8px] text-zinc-700">Initial concept and design</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-zinc-900">2025 - Development Phase</p>
                <p className="text-[8px] text-zinc-700">3D carousel implementation</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-zinc-900">2026 - Full Website Launch</p>
                <p className="text-[8px] text-zinc-700">Multi-page experience released</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
