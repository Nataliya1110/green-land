'use client'

import { useEffect, useRef, useState } from 'react'
import { Bird, VolumeX } from 'lucide-react'

export function BirdSound() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const userMutedRef = useRef(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.45

    const tryPlay = () => {
      if (userMutedRef.current) return
      audio
        .play()
        .then(() => {
          setPlaying(true)
          removeListeners()
        })
        .catch(() => {})
    }

    // Browsers block audible autoplay until the visitor interacts, so retry on the first gesture.
    const events = ['pointerdown', 'keydown', 'touchstart', 'wheel'] as const
    const removeListeners = () => events.forEach((e) => window.removeEventListener(e, tryPlay))
    events.forEach((e) => window.addEventListener(e, tryPlay, { passive: true }))
    tryPlay()

    return removeListeners
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      userMutedRef.current = true
      setPlaying(false)
    } else {
      userMutedRef.current = false
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/birds.ogg" loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Вимкнути спів птахів' : 'Увімкнути спів птахів'}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-snow/30 bg-wood-dark/85 px-4 py-3 text-sm text-snow shadow-lg backdrop-blur-md transition-colors hover:bg-forest"
      >
        {playing ? (
          <Bird className="size-5 animate-pulse text-[#a8cc5c]" aria-hidden="true" />
        ) : (
          <VolumeX className="size-5" aria-hidden="true" />
        )}
        <span className="hidden sm:inline">{playing ? 'Спів птахів' : 'Увімкнути звуки лісу'}</span>
      </button>
    </>
  )
}
