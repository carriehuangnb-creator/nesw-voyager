import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import CarouselPage from './pages/CarouselPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'carousel':
        return <CarouselPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#c1ffe4]" style={{ fontFamily: "'Press Start 2P', cursive" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .blink-text { animation: blink 1s step-end infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .nav-link:hover {
          transform: scale(1.05);
          text-shadow: 2px 2px 0px rgba(0,0,0,0.2);
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur border-b-4 border-zinc-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
              className="text-[12px] md:text-[14px] font-bold text-zinc-900 hover:scale-110 transition nav-link"
            >
              NESW_VOYAGER
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-[8px] font-bold transition nav-link ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-zinc-900'
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => setCurrentPage('carousel')}
                className={`text-[8px] font-bold transition nav-link ${
                  currentPage === 'carousel' ? 'text-blue-600' : 'text-zinc-900'
                }`}
              >
                GALLERY
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 border-t-4 border-zinc-900 pt-4">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="text-[8px] font-bold text-zinc-900 text-left hover:text-blue-600"
              >
                HOME
              </button>
              <button
                onClick={() => {
                  setCurrentPage('carousel');
                  setMobileMenuOpen(false);
                }}
                className="text-[8px] font-bold text-zinc-900 text-left hover:text-blue-600"
              >
                GALLERY
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-8 border-t-4 border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[6px] font-bold tracking-widest uppercase mb-2">© 2026 NESW_VOYAGER</p>
          <p className="text-[5px] text-zinc-400">CREATED WITH ❤️ AND RETRO VIBES</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
