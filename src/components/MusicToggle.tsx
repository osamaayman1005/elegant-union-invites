import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

export function MusicToggle() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio("https://cdn.pixabay.com/audio/2022/10/18/audio_31c2730e1d.mp3");
    a.loop = true;
    a.volume = 0.35;
    ref.current = a;
    return () => { a.pause(); ref.current = null; };
  }, []);

  const toggle = async () => {
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else { try { await ref.current.play(); setPlaying(true); } catch {} }
  };

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-moss/30 bg-card/80 backdrop-blur p-2.5 text-moss hover:bg-moss hover:text-ivory transition-all duration-500 shadow-sm"
      aria-label="Toggle music"
    >
      {playing ? <Music className="size-4 animate-pulse" /> : <VolumeX className="size-4" />}
    </button>
  );
}
