"use client";

import { useRef, useState } from "react";

type PatientStoryVideoProps = {
  src: string;
  className?: string;
};

export function PatientStoryVideo({
  src,
  className = "",
}: PatientStoryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleOverlayPlay = () => {
    void videoRef.current?.play();
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-sm overflow-hidden rounded-lg shadow-md bg-black ${className}`}
    >
      <video
        ref={videoRef}
        className="w-full align-middle"
        controls={hasStarted}
        playsInline
        preload="metadata"
        onPlay={() => setHasStarted(true)}
      >
        <source src={src} type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de cette vidéo.
      </video>
      {!hasStarted && (
        <>
          <div className="absolute inset-0 bg-black/35" aria-hidden />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={handleOverlayPlay}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-900 text-white shadow-lg ring-4 ring-white/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-900"
              aria-label="Lire la vidéo"
            >
              <svg
                className="ml-1 h-7 w-7"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
