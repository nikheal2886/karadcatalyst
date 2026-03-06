import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('hero--visible'), 100);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background texture */}
      <div className="hero__grain" />

      <div className="hero__content">
        {/* Eyebrow */}
        <div className="hero__eyebrow">
          <span className="hero__dot" />
          <span>Brand Building</span>
        </div>

        {/* Main headline */}
        <h1 className="hero__headline">
          <span className="hero__line hero__line--1">We Don't</span>
          <span className="hero__line hero__line--2">
            Follow <em>Trends.</em>
          </span>
          <span className="hero__line hero__line--3">We Set Them.</span>
        </h1>

        {/* Sub */}
        <p className="hero__sub">
          KaradCatalyst crafts original content that commands attention <br />
          no templates, no shortcuts, just work that cuts through the noise.
        </p>

        {/* Actions */}
        <div className="hero__actions">
          <a href="#work" className="hero__btn hero__btn--primary">
            See Our Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Start a Project
          </a>
        </div>

        {/* Stats row */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">20<sup>+</sup></span>
            <span className="hero__stat-label">Clients Served</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">2K<sup>+</sup></span>
            <span className="hero__stat-label">Followers Gained in 2 Months</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">10<sup>+</sup></span>
            <span className="hero__stat-label">Live & Portrait Shoots</span>
          </div>
        </div>
      </div>

      {/* Decorative right column */}
      <div className="hero__aside">
        <div className="hero__aside-card">
          <div className="hero__card-tag">Latest Result</div>
          <div className="hero__card-number">6000+</div>
          <div className="hero__card-desc">Organic Followers gained </div>
          <div className="hero__card-bar">
            <div className="hero__card-fill" />
          </div>
          <div className="hero__card-sub">Just pure content.</div>
        </div>

        <div className="hero__aside-label">
          <span>↑ Real numbers, real growth</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
