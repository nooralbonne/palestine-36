'use client'

import './HeroSection.css'
import { useState, useRef, useEffect } from 'react'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </svg>
  )
}

function MuteIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  )
}

function UnmuteIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  )
}

export default function HeroSection() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const logoUrl =
    '/images/palestine36-logo.gif'
  const thumbnailUrl =
    '/images/hero-thumbnail.jpg'

  useEffect(function () {
    var video = videoRef.current
    if (!video) return

    var playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        setIsPlaying(false)
      })
    }
  }, [])

  function togglePlay() {
    var video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  function toggleMute() {
    var video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
           src="/videos/palestine36.mp4"
          poster={thumbnailUrl}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="hero-overlay" />

        <div className="hero-controls">
          <button
            className="control-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            className="control-btn"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <MuteIcon /> : <UnmuteIcon />}
          </button>
        </div>
      </div>

      <div className="hero-content">
        <img
          className="hero-logo"
          src={logoUrl || "/placeholder.svg"}
          alt="Palestine 36"
        />
        <div className="hero-badge">
          {'Academy Awards Shortlisted'}
        </div>
        <p className="hero-synopsis">
          {'An award-winning historical feature film set in 1936 Palestine. A sweeping tale of courage, love, and resistance during a pivotal chapter of history.'}
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => window.open('https://youtu.be/D6rBDoOZnuU', '_blank')}>
            <span className="play-icon" />
            {'Watch Trailer'}
          </button>
          <button className="btn-secondary">
            {'Find a Cinema Near You'}
          </button>
        </div>
      </div>
    </section>
  )
}
