'use client';
import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-bg-glow" />
      <div className="cta-content">
        <span className="cta-eyebrow">Be Part of the Story</span>
        <h2 className="cta-headline">
          Experience Palestine 36
          <br />
          on the Big Screen
        </h2>
        <p className="cta-body">
          A film that transcends borders. Join audiences around the world in
          witnessing a story of courage, resilience, and the unyielding human
          spirit.
        </p>
        <div className="cta-actions">
          <a href="#screenings" className="cta-btn-primary">
            Find a Cinema Near You
          </a>
          <a href="#screenings" className="cta-btn-secondary">
            Support Screenings in Your Country
          </a>
        </div>
      </div>
      <div className="cta-bottom-line" />
    </section>
  );
}
