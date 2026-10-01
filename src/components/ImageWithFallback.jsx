import { useState } from "react";
import { ImageOff } from "lucide-react";

export default function ImageWithFallback({ src, alt, className = "", onClick }) {
  const [errored, setErrored] = useState(!src);

  if (errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-lavender to-sky/40 text-navy/50 ${className}`}
      >
        <ImageOff size={28} />
        <span className="text-xs font-medium">Project Preview</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onClick={onClick}
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
