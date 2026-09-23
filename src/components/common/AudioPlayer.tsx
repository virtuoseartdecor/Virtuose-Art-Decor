import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  const clearFadeInterval = () => {
    if (fadeIntervalRef.current !== null) {
      window.clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    clearFadeInterval();

    if (!isPlaying) {
      audio.volume = 0;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            const targetVolume = 0.45;
            const step = 0.03;
            fadeIntervalRef.current = window.setInterval(() => {
              if (!audioRef.current) {
                clearFadeInterval();
                return;
              }
              if (audioRef.current.volume + step >= targetVolume) {
                audioRef.current.volume = targetVolume;
                clearFadeInterval();
              } else {
                audioRef.current.volume = Math.min(targetVolume, audioRef.current.volume + step);
              }
            }, 60);
          })
          .catch((err) => {
            console.warn('Playback prevented or file load issue:', err);
            setIsPlaying(false);
          });
      }
    } else {
      const step = 0.04;
      fadeIntervalRef.current = window.setInterval(() => {
        if (!audioRef.current) {
          clearFadeInterval();
          return;
        }
        if (audioRef.current.volume - step <= 0.02) {
          audioRef.current.volume = 0;
          audioRef.current.pause();
          setIsPlaying(false);
          clearFadeInterval();
        } else {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - step);
        }
      }, 50);
    }
  };

  useEffect(() => {
    return () => {
      clearFadeInterval();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Native HTML5 Audio Element with User-Provided Soundtrack */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onPause={() => {
          if (fadeIntervalRef.current === null) {
            setIsPlaying(false);
          }
        }}
      >
        <source src="./audio/background-music.mp3" type="audio/mpeg" />
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        <source src="./audio/kiravale-intense-background-music-598114.mp3.mpeg" type="audio/mpeg" />
        <source src="/audio/kiravale-intense-background-music-598114.mp3.mpeg" type="audio/mpeg" />
        Seu navegador não suporta reprodução de áudio HTML5.
      </audio>

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
          Sinta a Vírtuose
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
