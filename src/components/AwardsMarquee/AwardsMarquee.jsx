'use client';
import './AwardsMarquee.css';

export default function AwardsMarquee() {
  return (
    <section className="awards-section">
      <div className="awards-header">
        <span className="awards-eyebrow">Recognition</span>
        <h2 className="awards-title">Festival Selections & Awards</h2>
      </div>
      <div className="awards-marquee-wrapper">
        <div className="awards-fade awards-fade-left" />
        <div className="awards-marquee-track">
          <div className="awards-marquee-slide">
            <img
              src="/images/awards-horizontal.gif"
              alt="Palestine 36 film festival selections, awards, and Oscar nomination laurels"
              className="awards-img"
            />
          </div>
          <div className="awards-marquee-slide">
            <img
              src="/images/awards-horizontal.gif"
              alt=""
              className="awards-img"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="awards-fade awards-fade-right" />
      </div>
      <div className="awards-bottom-line" />
    </section>
  );
}
