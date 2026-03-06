import { useEffect, useRef, useState } from 'react';
import './Services.css';

const services = [
  {
    number: '01',
    title: 'Social Media Management',
    desc: 'Full-stack management of your Instagram, Facebook, or LinkedIn. Strategy, scheduling, engagement — all handled.',
    tags: ['Strategy', 'Scheduling', 'Analytics'],
  },
  {
    number: '02',
    title: 'Content Creation',
    desc: 'Original reels, carousels, and static posts crafted from scratch. Your brand voice, amplified.',
    tags: ['Reels', 'Carousels', 'Captions'],
  },
  {
    number: '03',
    title: 'Live Event Photography',
    desc: 'On-ground coverage of your events, product launches, and brand moments — captured in real time.',
    tags: ['Events', 'Launches', 'Coverage'],
  },
  {
    number: '04',
    title: 'Portrait Shoots',
    desc: 'Professional portrait sessions for founders, teams, and brand faces. Presence that builds trust.',
    tags: ['Personal Brand', 'Team', 'Founders'],
  },
  {
    number: '05',
    title: 'Brand Strategy',
    desc: 'Positioning, tone-of-voice, and content pillars that make your brand coherent and magnetic.',
    tags: ['Positioning', 'Identity', 'Pillars'],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('services--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="services__header">
          <div className="services__label">What We Do</div>
          <h2 className="services__headline">
            Services Built for<br /><em>Real Results</em>
          </h2>
        </div>

        <div className="services__body">
          {/* List */}
          <div className="services__list">
            {services.map((s, i) => (
              <div
                key={s.number}
                className={`services__item ${activeIndex === i ? 'services__item--active' : ''}`}
                onMouseEnter={() => setActiveIndex(i)}
                style={{ '--delay': `${i * 0.08}s` }}
              >
                <span className="services__item-num">{s.number}</span>
                <div className="services__item-content">
                  <div className="services__item-title">{s.title}</div>
                  <div className="services__item-desc">{s.desc}</div>
                  <div className="services__item-tags">
                    {s.tags.map((tag) => (
                      <span key={tag} className="services__tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="services__item-arrow">→</span>
              </div>
            ))}
          </div>

          {/* Right panel */}
          <div className="services__panel">
            <div className="services__panel-inner">
              <div className="services__panel-number">{services[activeIndex].number}</div>
              <div className="services__panel-title">{services[activeIndex].title}</div>
              <p className="services__panel-desc">{services[activeIndex].desc}</p>
              <a href="#contact" className="services__panel-cta">
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
