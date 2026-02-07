'use client';
import './HeroA.css';
import { useState } from 'react'

export default function HeroSection() {
  const [showTrailer, setShowTrailer] = useState(false)

  const logoUrl = '/images/palestine36-logo.gif'
  const bgUrl = '/images/hero-thumbnail.jpg'
  const trailerUrl = 'https://www.youtube.com/embed/D6rBDoOZnuU?autoplay=1&rel=0'

  return (
    <section className="hero-a">
      <div className="hero-a-bg">
        {showTrailer ? (
          <iframe
            src={trailerUrl}
            title="Palestine 36 Official Trailer"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              position: 'absolute',
              inset: 0,
              zIndex: 0,
            }}
          />
        ) : (
          <img src={bgUrl || "/placeholder.svg"} alt="Palestine 36 hero scene" />
        )}
      </div>
      <div className="hero-a-overlay" />

      <div className="hero-a-content">
        <img className="hero-a-logo" src={logoUrl || "/placeholder.svg"} alt="Palestine 36" />
        <div className="hero-a-badge">
          Academy Awards Shortlisted
        </div>
        <p className="hero-a-synopsis">
          An award-winning historical feature film set in 1936 Palestine.
          A sweeping tale of courage, love, and resistance during a pivotal
          chapter of history.
        </p>
        <div className="hero-a-actions">
          <button
            className="btn-primary"
            onClick={() => setShowTrailer(true)}
          >
            <span className="play-icon" />
            Watch Trailer
          </button>
          <button className="btn-secondary">
            Find a Cinema Near You
          </button>
        </div>
      </div>
    </section>
  )
}
