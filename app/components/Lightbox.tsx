'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
        aria-label="Close"
      >
        ×
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Image */}
      <div
        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
        aria-label="Next"
      >
        ›
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
