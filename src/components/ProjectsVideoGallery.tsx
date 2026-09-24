"use client";

import { Play, Video } from "lucide-react";

export interface FieldVideo {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
}

interface ProjectsVideoGalleryProps {
  videos: FieldVideo[];
}

export function ProjectsVideoGallery({ videos }: ProjectsVideoGalleryProps) {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-500/30 text-xs font-bold uppercase tracking-wider text-red-300 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Video size={14} className="text-red-400" />
            <span>Registro Visual en Campo</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Videos Reales de Obras en Campo
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            Material audiovisual capturado durante operativos de instalación, montaje y calibración de básculas camioneras por el equipo técnico de Dialka.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-red-500/40 transition-all duration-300"
            >
              {/* Video Player */}
              <div className="relative w-full aspect-[9/16] sm:aspect-[9/14] bg-black">
                <video
                  className="w-full h-full object-cover"
                  poster={video.poster}
                  controls
                  preload="metadata"
                  playsInline
                  controlsList="nodownload"
                >
                  <source src={video.src} type="video/mp4" />
                  Su navegador no soporta la reproducción de video.
                </video>

                {/* Play indicator overlay (hidden when controls are visible) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-red-950/50 border border-red-400/30">
                    <Play size={24} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-1.5">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
