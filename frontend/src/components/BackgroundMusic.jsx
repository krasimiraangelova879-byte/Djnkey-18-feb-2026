import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BackgroundMusic = () => {
  const { t } = useLanguage();

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.08);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Autoplay prevented:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }

    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!showPlayer) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-black/90 backdrop-blur-md rounded-full shadow-2xl p-4 flex items-center gap-3 border border-primary-accent/30">

      <audio ref={audioRef} loop preload="auto">
        <source
          src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full bg-primary-accent hover:bg-primary-accent-hover flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label={isPlaying ? t('musicPlayer.pause') : t('musicPlayer.play')}
      >
        {isPlaying ? (
          <Pause size={20} className="text-black" />
        ) : (
          <Play size={20} className="text-black ml-0.5" />
        )}
      </button>

      {/* Volume */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="text-white hover:text-primary-accent transition-colors duration-200"
          aria-label={isMuted ? t('musicPlayer.unmute') : t('musicPlayer.mute')}
        >
          {isMuted || volume === 0 ? (
            <VolumeX size={20} />
          ) : (
            <Volume2 size={20} />
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #00d9ff ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%)`
          }}
        />
      </div>

      {/* Hide */}
      <button
        onClick={() => setShowPlayer(false)}
        className="text-white/60 hover:text-white transition-colors duration-200 text-xs"
        aria-label={t('musicPlayer.hide')}
      >
        ✕
      </button>
    </div>
  );
};

export default BackgroundMusic;
