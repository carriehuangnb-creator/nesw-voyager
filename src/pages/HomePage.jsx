import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 py-12">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-4xl text-center space-y-8">
        {/* Main Title */}
        <div className="float-animation">
          <h1 className="text-[20px] md:text-[40px] font-bold text-zinc-900 mb-4 leading-tight">
            NESW_VOYAGER
          </h1>
          <p className="text-[10px] md:text-[14px] text-zinc-700 font-bold tracking-widest uppercase">
            Explore. Discover. Remember.
          </p>
        </div>

        {/* Description */}
        <div className="bg-white/60 backdrop-blur border-4 border-zinc-900 p-6 md:p-8 space-y-4">
          <p className="text-[8px] md:text-[10px] text-zinc-900 leading-relaxed">
            Welcome to a retro digital experience combining vintage aesthetics with modern web technology.
          </p>
          <p className="text-[8px] md:text-[10px] text-zinc-900 leading-relaxed">
            Dive into our immersive 3D photo carousel, browse our gallery, learn our story, and get in touch.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => setCurrentPage('carousel')}
            className="bg-zinc-900 hover:bg-blue-600 text-white px-6 md:px-8 py-4 font-bold text-[8px] md:text-[10px] uppercase border-4 border-zinc-900 transition flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <span>Enter Gallery</span>
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className="bg-white hover:bg-zinc-100 text-zinc-900 px-6 md:px-8 py-4 font-bold text-[8px] md:text-[10px] uppercase border-4 border-zinc-900 transition transform hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="bg-blue-400/50 border-4 border-zinc-900 p-4">
            <p className="text-[9px] font-bold text-zinc-900 mb-2">🎨 3D CAROUSEL</p>
            <p className="text-[7px] text-zinc-800">Interactive rotating gallery</p>
          </div>
          <div className="bg-pink-300/50 border-4 border-zinc-900 p-4">
            <p className="text-[9px] font-bold text-zinc-900 mb-2">📱 RESPONSIVE</p>
            <p className="text-[7px] text-zinc-800">Works on all devices</p>
          </div>
          <div className="bg-yellow-300/50 border-4 border-zinc-900 p-4">
            <p className="text-[9px] font-bold text-zinc-900 mb-2">✨ RETRO STYLE</p>
            <p className="text-[7px] text-zinc-800">Vintage digital aesthetic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
