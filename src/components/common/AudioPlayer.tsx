import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 2);
        gainNode.connect(ctx.destination);
        gainNodeRef.current = gainNode;

        const freqs = [216, 324, 432, 540];
        freqs.forEach((freq) => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.connect(gainNode);
          osc.start();
        });

        setIsPlaying(true);
      } catch (e) {
        console.warn('Audio context init prevented or unsupported:', e);
        setIsPlaying(false);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
        setTimeout(() => {
          ctx.close();
          audioCtxRef.current = null;
          setIsPlaying(false);
        }, 1000);
      } else {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pausar atmosfera sensorial' : 'Sinta a Vírtuose'}
        title={isPlaying ? 'Pausar Atmosfera' : 'Sinta a Vírtuose'}
        className="group relative flex items-center gap-3 bg-[#E8E0D3]/95 backdrop-blur-xl border border-[#9EA88B]/40 text-[#1c241b] px-4.5 py-3 rounded-full shadow-[0_15px_35px_rgba(28,36,27,0.12)] transition-all duration-500 hover:scale-105 hover:bg-[#E8E0D3] hover:border-[#9EA88B] cursor-pointer"
      >
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#9EA88B]/20 text-[#1c241b] transition-transform duration-300 group-hover:scale-110">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 animate-pulse text-[#1c241b]" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#1c241b]/75 group-hover:text-[#1c241b]" />
          )}
        </span>

        <span className="font-sans text-xs tracking-[0.2em] uppercase font-semibold hidden sm:inline-block text-[#1c241b]">
          {isPlaying ? 'Sinta a Vírtuose' : 'Sinta a Vírtuose'}
        </span>

        {isPlaying && (
          <div className="flex items-end gap-1 h-4 ml-1">
            <span className="w-0.5 bg-[#9EA88B] animate-audio-bar-1" />
            <span className="w-0.5 bg-[#9EA88B] animate-audio-bar-2" />
            <span className="w-0.5 bg-[#9EA88B] animate-audio-bar-3" />
          </div>
        )}
      </button>
    </div>
  );
};
