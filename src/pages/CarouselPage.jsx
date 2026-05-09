import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselPage = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const touchStartRef = useRef(null);
  const [radius, setRadius] = useState(520);

  useEffect(() => {
    setRadius(window.innerWidth < 768 ? 400 : 520);
    
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 400 : 520);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const photos = [
    { id: 1, title: 'ROCK TEXTURE', url: '/unnamed.jpg' },
    { id: 2, title: 'SUN HALO', url: '/unnamed-2.jpg' },
    { id: 3, title: 'ALLEY VIEW', url: '/unnamed-3.jpg' },
    { id: 4, title: 'MORNING STREET', url: '/unnamed-4.jpg' },
    { id: 5, title: 'LONELY BOAT', url: '/unnamed-5.jpg' },
    { id: 6, title: 'BLUE ALLEY', url: '/unnamed-6.jpg' },
    { id: 7, title: 'GRID SUNSET', url: '/unnamed-7.jpg' },
    { id: 8, title: 'BEACH FOOTPRINT', url: '/unnamed-8.jpg' },
    { id: 9, title: 'COCONUT GLASS', url: '/unnamed-9.jpg' },
    { id: 10, title: 'PAW PRINT', url: '/unnamed-10.jpg' },
  ];

  const itemCount = photos.length;
  const angleStep = 360 / itemCount;

  const rotate = useCallback((direction) => {
    setRotation(prev => prev + (direction === 'next' ? -angleStep : angleStep));
  }, [angleStep]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 5) {
        rotate(e.deltaY > 0 ? 'next' : 'prev');
        e.preventDefault();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [rotate]);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartRef.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartRef.current;
    
    setRotation(prev => prev + diff * 0.4); 
    touchStartRef.current = currentX;
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    setRotation(prev => {
      return Math.round(prev / angleStep) * angleStep;
    });
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center touch-none select-none px-4 py-12"
      style={{ 
        perspective: '2000px',
        fontFamily: "'Press Start 2P', cursive"
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <style>{`
        .three-d-scene {
          transform-style: preserve-3d;
          will-change: transform;
        }

        .photo-card {
          backface-visibility: visible;
          -webkit-backface-visibility: visible;
          background-color: white;
          box-shadow: 0 15px 50px rgba(0,0,0,0.3);
        }
      `}</style>

      <h2 className="text-[16px] md:text-[28px] font-bold text-zinc-900 mb-8 text-center">PHOTO GALLERY</h2>

      {/* 3D Stage */}
      <div className="relative w-full flex items-center justify-center pointer-events-none three-d-scene mb-12">
        <div className="relative w-[180px] h-[250px] md:w-[260px] md:h-[360px] transition-transform duration-300 ease-out three-d-scene"
             style={{ 
               transform: `translateZ(-${radius}px) rotateY(${rotation}deg)` 
             }}>
          
          {photos.map((photo, index) => {
            const itemAngle = index * angleStep;
            return (
              <div
                key={photo.id}
                className="absolute inset-0 photo-card border-[8px] md:border-[12px] border-white cursor-pointer pointer-events-auto flex items-center justify-center"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                }}
                onClick={() => setSelectedImage(photo)}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  draggable={false}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=NO+IMAGE"; }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                   <p className="text-white text-[7px] text-center leading-loose">{photo.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-10 z-50 pointer-events-auto mb-8">
        <button onClick={() => rotate('prev')} className="p-3 bg-white/30 rounded-full shadow-lg hover:bg-white/50 transition">
          <ChevronLeft className="w-6 h-6 text-zinc-900" />
        </button>
        <div className="text-[6px] text-zinc-600 text-center">SWIPE OR SCROLL TO EXPLORE</div>
        <button onClick={() => rotate('next')} className="p-3 bg-white/30 rounded-full shadow-lg hover:bg-white/50 transition">
          <ChevronRight className="w-6 h-6 text-zinc-900" />
        </button>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#c1ffe4]/98 backdrop-blur-xl animate-in fade-in pointer-events-auto"
             onClick={() => setSelectedImage(null)}>
          <button className="absolute top-8 right-8 text-zinc-900 hover:scale-125 transition"><X className="w-10 h-10" /></button>
          <div className="max-w-4xl w-full flex flex-col items-center gap-6" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              className="max-w-full max-h-[75vh] border-[12px] border-white shadow-2xl bg-white p-1"
              alt={selectedImage.title}
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x1200?text=NO+IMAGE"; }}
            />
            <h4 className="text-zinc-900 text-[10px] bg-white px-4 py-2 font-bold">{selectedImage.title}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselPage;
