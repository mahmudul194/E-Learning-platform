"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, ShieldCheck } from "lucide-react";

interface CustomVideoPlayerProps {
  videoUrl?: string;
  title: string;
  onEnded?: () => void;
}

export default function CustomVideoPlayer({ title, onEnded }: CustomVideoPlayerProps) {
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

  const sampleSource = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (videoRef.current) { videoRef.current.currentTime = time; setCurrentTime(time); }
  };

  const skip = (sec: number) => { if (videoRef.current) videoRef.current.currentTime += sec; };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (videoRef.current) { videoRef.current.volume = val; videoRef.current.muted = val === 0; setIsMuted(val === 0); }
  };

  const toggleMute = () => {
    if (videoRef.current) { videoRef.current.muted = !isMuted; setIsMuted(!isMuted); }
  };

  const changeSpeed = (rate: number) => {
    setPlaybackRate(rate);
    if (videoRef.current) videoRef.current.playbackRate = rate;
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) { containerRef.current.requestFullscreen?.(); setIsFullscreen(true); }
    else { document.exitFullscreen?.(); setIsFullscreen(false); }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => { if (isPlaying) setShowControls(false); }, 2500);
  };

  const fmt = (s: number) => {
    if (isNaN(s)) return "00:00";
    return `${Math.floor(s / 60).toString().padStart(2, "0")}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onContextMenu={(e) => e.preventDefault()} className="relative aspect-video bg-slate-950 overflow-hidden rounded-2xl group select-none font-sans">
      <video ref={videoRef} src={sampleSource} onTimeUpdate={() => videoRef.current && setCurrentTime(videoRef.current.currentTime)} onLoadedMetadata={() => videoRef.current && setDuration(videoRef.current.duration)} onEnded={() => { setIsPlaying(false); onEnded?.(); }} onClick={togglePlay} className="w-full h-full object-cover cursor-pointer" playsInline />

      {/* Whitelabel Secure Brand Header */}
      <div className={`absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-white transition-opacity pointer-events-none ${showControls ? "opacity-100" : "opacity-0"}`}>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#0077b6]/90 backdrop-blur-md text-[10px] font-extrabold tracking-wider uppercase flex items-center gap-1 border border-sky-300/30">
            <ShieldCheck className="w-3 h-3 text-sky-200" /> BIM SECURE PLAYER
          </span>
          <span className="text-xs font-bold text-slate-200 truncate max-w-xs sm:max-w-md">{title}</span>
        </div>
      </div>

      {/* Center Big Play Button */}
      {!isPlaying && (
        <button onClick={togglePlay} className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#0077b6]/90 hover:bg-[#002b5b] text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 cursor-pointer border border-sky-300/40">
          <Play className="w-7 h-7 fill-white ml-1" />
        </button>
      )}

      {/* Bottom Custom Controls Bar */}
      <div className={`absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity space-y-2 ${showControls ? "opacity-100" : "opacity-0"}`}>
        <input type="range" min={0} max={duration || 100} value={currentTime} onChange={handleSeek} className="w-full h-1.5 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-[#0077b6]" />

        <div className="flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={togglePlay} className="p-1 hover:text-sky-400 cursor-pointer">{isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}</button>
            <button onClick={() => skip(-10)} title="Rewind 10s" className="p-1 hover:text-sky-400 cursor-pointer"><RotateCcw className="w-3.5 h-3.5" /></button>
            <button onClick={() => skip(10)} title="Forward 10s" className="p-1 hover:text-sky-400 cursor-pointer"><RotateCw className="w-3.5 h-3.5" /></button>
            <span className="font-mono text-[11px] text-slate-300">{fmt(currentTime)} / {fmt(duration)}</span>

            <div className="hidden sm:flex items-center gap-1.5 pl-2">
              <button onClick={toggleMute} className="hover:text-sky-400 cursor-pointer">{isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}</button>
              <input type="range" min={0} max={1} step={0.05} value={isMuted ? 0 : volume} onChange={handleVolume} className="w-14 h-1 bg-slate-700 rounded appearance-none cursor-pointer accent-[#0077b6]" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-black/40 rounded-lg p-0.5 border border-slate-700 text-[11px] font-mono">
              {[1, 1.25, 1.5, 2].map((r) => (
                <button key={r} onClick={() => changeSpeed(r)} className={`px-1.5 py-0.5 rounded cursor-pointer ${playbackRate === r ? "bg-[#0077b6] text-white font-bold" : "text-slate-400 hover:text-white"}`}>{r}x</button>
              ))}
            </div>
            <button onClick={toggleFullscreen} className="p-1 hover:text-sky-400 cursor-pointer">{isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
