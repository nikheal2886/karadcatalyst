import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__container">
        <div className="about__inner">
          <div className="about__left">
            <div className="about__label">About Us</div>
            <h2 className="about__headline">Built in Karad.<br /><em>Thinking Global.</em></h2>
            <div className="about__image-block">
              <div className="about__image-placeholder">
                <img
                  src="/KARAD.jpg"
                  alt="KaradCatalyst"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                />
              </div>
              <div className="about__image-tag">The Founder and Co-Founder</div>
            </div>
          </div>
          <div className="about__right">
            <p className="about__body">KaradCatalyst started with one simple belief — that local brands deserve world-class content. We're not aggregators of trending audio or recycled ideas. Every frame, every caption, every reel is built from scratch for your brand.</p>
            <p className="about__body">In just two months of active work, we've helped businesses grow their social presence organically — no paid promotion, no shortcuts. Just strategy, creativity, and obsessive attention to how content makes people feel.</p>
            <div className="about__values">
              {[
                { label: 'Original First', desc: 'Every piece of content is created for you, not repurposed.' },
                { label: 'Real Shoots', desc: 'On-ground live & portrait photography — no stock images.' },
                { label: 'Proven Growth', desc: '2,000+ followers gained organically across accounts.' },
              ].map((v) => (
                <div key={v.label} className="about__value">
                  <span className="about__value-dot" />
                  <div>
                    <div className="about__value-label">{v.label}</div>
                    <div className="about__value-desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}