"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw } from "lucide-react";

interface CustomVideoPlayerProps {
  videoUrl?: string;
  title: string;
  onEnded?: () => void;
}

export default function CustomVideoPlayer({ videoUrl, title, onEnded }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePct = isMuted ? 0 : volume * 100;

  const currentSource = videoUrl && !videoUrl.includes("youtube.com") && !videoUrl.includes("youtu.be")
    ? videoUrl
    : "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) { videoRef.current.pause(); setIsPlaying(false); }
    else {
      const p = videoRef.current.play();
      if (p !== undefined) p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value);
    if (videoRef.current) { videoRef.current.currentTime = t; setCurrentTime(t); }
  };

  const skip = (sec: number) => {
    if (videoRef.current) videoRef.current.currentTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + sec));
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) { containerRef.current.requestFullscreen?.().catch(() => {}); setIsFullscreen(true); }
    else { document.exitFullscreen?.().catch(() => {}); setIsFullscreen(false); }
  };

  // Keyboard shortcuts: Space/K, ArrowRight/Left (+-10s), ArrowUp/Down (Vol), M (Mute), F (Fullscreen)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag && ["INPUT", "TEXTAREA", "SELECT"].includes(tag)) return;
      if (e.code === "Space" || e.key === "k" || e.key === "K") { e.preventDefault(); togglePlay(); }
      else if (e.code === "ArrowRight" || e.key === "l" || e.key === "L") { e.preventDefault(); skip(10); }
      else if (e.code === "ArrowLeft" || e.key === "j" || e.key === "J") { e.preventDefault(); skip(-10); }
      else if (e.code === "ArrowUp") {
        e.preventDefault();
        setVolume((v) => {
          const n = Math.min(1, Number((v + 0.1).toFixed(2)));
          if (videoRef.current) { videoRef.current.volume = n; videoRef.current.muted = false; }
          setIsMuted(false);
          return n;
        });
      } else if (e.code === "ArrowDown") {
        e.preventDefault();
        setVolume((v) => {
          const n = Math.max(0, Number((v - 0.1).toFixed(2)));
          if (videoRef.current) { videoRef.current.volume = n; videoRef.current.muted = n === 0; }
          setIsMuted(n === 0);
          return n;
        });
      } else if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        if (videoRef.current) { videoRef.current.muted = !isMuted; setIsMuted(!isMuted); }
      } else if (e.key === "f" || e.key === "F") { e.preventDefault(); toggleFullscreen(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isPlaying, isMuted, volume, duration]);

  const handleMouseMove = () => {
    setShowControls(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => { if (isPlaying) setShowControls(false); }, 2500);
  };

  const fmt = (s: number) => isNaN(s) || !isFinite(s) ? "00:00" : `${Math.floor(s / 60).toString().padStart(2, "0")}:${Math.floor(s % 60).toString().padStart(2, "0")}`;

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onContextMenu={(e) => e.preventDefault()} className="relative aspect-video bg-slate-950 overflow-hidden rounded-2xl group select-none font-sans">
      <video ref={videoRef} key={currentSource} src={currentSource} onTimeUpdate={() => videoRef.current && setCurrentTime(videoRef.current.currentTime)} onLoadedMetadata={() => videoRef.current && setDuration(videoRef.current.duration)} onEnded={() => { setIsPlaying(false); onEnded?.(); }} onError={() => setIsPlaying(false)} onClick={togglePlay} className="w-full h-full object-cover cursor-pointer" playsInline preload="metadata" />

      {/* Top Header - Pure Lecture Title */}
      <div className={`absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-white transition-opacity pointer-events-none ${showControls ? "opacity-100" : "opacity-0"}`}>
        <span className="text-xs sm:text-sm font-bold text-white/95 drop-shadow-md truncate max-w-lg">{title}</span>
      </div>

      {!isPlaying && (
        <button onClick={togglePlay} className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#0077b6]/90 hover:bg-[#002b5b] text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 cursor-pointer border border-sky-300/40">
          <Play className="w-7 h-7 fill-white ml-1" />
        </button>
      )}

      {/* Bottom Custom Controls Bar */}
      <div className={`absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity space-y-2 ${showControls ? "opacity-100" : "opacity-0"}`}>
        <input type="range" min={0} max={duration || 100} step={0.1} value={currentTime} onChange={handleSeek} style={{ background: `linear-gradient(to right, #0077b6 0%, #0077b6 ${progressPct}%, rgba(255,255,255,0.2) ${progressPct}%, rgba(255,255,255,0.2) 100%)` }} className="w-full h-1.5 hover:h-2 rounded-lg appearance-none cursor-pointer accent-[#0077b6] transition-all" />

        <div className="flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={togglePlay} className="p-1 hover:text-sky-400 cursor-pointer">{isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}</button>
            <button onClick={() => skip(-10)} title="Rewind 10s (Left Arrow)" className="p-1 hover:text-sky-400 cursor-pointer"><RotateCcw className="w-3.5 h-3.5" /></button>
            <button onClick={() => skip(10)} title="Forward 10s (Right Arrow)" className="p-1 hover:text-sky-400 cursor-pointer"><RotateCw className="w-3.5 h-3.5" /></button>
            <span className="font-mono text-[11px] text-slate-300">{fmt(currentTime)} / {fmt(duration)}</span>

            <div className="hidden sm:flex items-center gap-1.5 pl-2">
              <button onClick={() => { if (videoRef.current) { videoRef.current.muted = !isMuted; setIsMuted(!isMuted); } }} title="Mute (M)" className="hover:text-sky-400 cursor-pointer">{isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}</button>
              <input type="range" min={0} max={1} step={0.02} value={isMuted ? 0 : volume} onChange={(e) => { const v = Number(e.target.value); setVolume(v); if (videoRef.current) { videoRef.current.volume = v; videoRef.current.muted = v === 0; setIsMuted(v === 0); } }} style={{ background: `linear-gradient(to right, #0077b6 0%, #0077b6 ${volumePct}%, rgba(255,255,255,0.2) ${volumePct}%, rgba(255,255,255,0.2) 100%)` }} className="w-16 h-1 hover:h-1.5 rounded appearance-none cursor-pointer accent-[#0077b6] transition-all" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-black/40 rounded-lg p-0.5 border border-slate-700 text-[11px] font-mono">
              {[1, 1.25, 1.5, 2].map((r) => (
                <button key={r} onClick={() => { setPlaybackRate(r); if (videoRef.current) videoRef.current.playbackRate = r; }} className={`px-1.5 py-0.5 rounded cursor-pointer ${playbackRate === r ? "bg-[#0077b6] text-white font-bold" : "text-slate-400 hover:text-white"}`}>{r}x</button>
              ))}
            </div>
            <button onClick={toggleFullscreen} title="Fullscreen (F)" className="p-1 hover:text-sky-400 cursor-pointer">{isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
