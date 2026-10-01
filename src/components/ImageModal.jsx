import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageModal({ images, index, onClose, onNavigate }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  if (index === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        aria-label="Close image"
        className="absolute top-5 right-5 text-white/80 hover:text-white"
        onClick={onClose}
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <button
          aria-label="Previous image"
          className="absolute left-4 sm:left-8 text-white/70 hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
        >
          <ChevronLeft size={36} />
        </button>
      )}

      <img
        src={images[index]}
        alt="Project screenshot"
        className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          aria-label="Next image"
          className="absolute right-4 sm:right-8 text-white/70 hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
        >
          <ChevronRight size={36} />
        </button>
      )}
    </div>
  );
}
