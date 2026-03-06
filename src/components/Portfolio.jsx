import { useState, useRef, useEffect } from 'react';
import './Portfolio.css';

// ── IMPORT ALL VIDEOS ──────────────────────────────────────────────
import reshaDeets  from '../assets/resha-details.mp4';
import reshaAbs1   from '../assets/resha-abstract1.mp4';
import reshaAbs2   from '../assets/resha-abstract2.mp4';
import reshaExt    from '../assets/resha-exterior.mp4';
import reshaTeaser from '../assets/resha-teaser.mp4';
import linesInt    from '../assets/lines-interior.mp4';

// ── DATA ───────────────────────────────────────────────────────────
const clients = [
  {
    id: 1,
    name: 'Reshagrantha',
    tagline: 'Architectural Firm ',
    location: 'Pune, MH',
    accentColor: '#8B6F47',
    works: [
      {
        id: 'r1', type: 'details', title: 'Shelf by Shelf',
        desc: 'Close-up detail shots of the collection — textures, spines, light falling on worn covers.',
        duration: '0:30', src: reshaDeets, bg: '#3a2e22', vertical: true,
      },
      {
        id: 'r2', type: 'abstract', title: 'Between the Lines I',
        desc: 'Abstract visual poetry — bokeh, paper grain, ink bleeding. Content that feels like reading.',
        duration: '0:30', src: reshaAbs1, bg: '#1e1812', vertical: true,
      },
      {
        id: 'r3', type: 'abstract', title: 'Between the Lines II',
        desc: 'A second abstract edit — layered textures, slow motion, quiet intensity.',
        duration: '0:30', src: reshaAbs2, bg: '#2c2318', vertical: true,
      },
      {
        id: 'r4', type: 'cinematic', title: 'Exterior Light',
        desc: 'Cinematic exterior — architecture, signage, and the feeling of arriving at a place that matters.',
        duration: '0:30', src: reshaExt, bg: '#2a2016', vertical: false,
      },
      {
        id: 'r5', type: 'documentary', title: 'The Teaser',
        desc: 'A teaser cut — fast, editorial, emotive. The opening statement for the full documentary.',
        duration: '0:30', src: reshaTeaser, bg: '#1a1410', vertical: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Linesncurves.studio',
    tagline: 'Architecture & Interior Design',
    location: 'Pune, MH',
    accentColor: '#b85c38',
    works: [
      {
        id: 'l1', type: 'cinematic', title: 'Interior Study',
        desc: 'Cinematic interior walk-through — their design language told through light, material, and space.',
        duration: '0:30', src: linesInt, bg: '#0f0f0f', vertical: true,
      },
    ],
  },
  { id: 3, name: 'Coming Soon', tagline: 'Client Identity Unrevealed', location: '— —', accentColor: '#8c8680', locked: true, works: [] },
  { id: 4, name: 'Coming Soon', tagline: 'Client Identity Unrevealed', location: '— —', accentColor: '#8c8680', locked: true, works: [] },
  { id: 5, name: 'Coming Soon', tagline: 'Client Identity Unrevealed', location: '— —', accentColor: '#8c8680', locked: true, works: [] },
];

const typeLabels = { documentary: 'Documentary', details: 'Details', abstract: 'Abstract', cinematic: 'Cinematic Interiors' };
const typeIcons  = { documentary: '◉', details: '◈', abstract: '◇', cinematic: '▷' };

// ── OVERLAY ────────────────────────────────────────────────────────
function WorkOverlay({ work, client, onClose }) {
  const overlayRef = useRef(null);
  const videoRef   = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => overlayRef.current?.classList.add('pf-overlay--open'), 10);
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => { clearTimeout(t); document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, []);

  const handleClose = () => {
    if (videoRef.current) videoRef.current.pause();
    overlayRef.current?.classList.remove('pf-overlay--open');
    setTimeout(onClose, 500);
  };

  return (
    <div className="pf-overlay" ref={overlayRef} onClick={(e) => e.target === overlayRef.current && handleClose()}>
      <div className="pf-overlay__panel">

        {/* Header */}
        <div className="pf-overlay__header" style={{ '--accent': client.accentColor }}>
          <div className="pf-overlay__header-left">
            <span className="pf-overlay__type-badge">{typeIcons[work.type]} {typeLabels[work.type]}</span>
            <h2 className="pf-overlay__title">{work.title}</h2>
            <div className="pf-overlay__client-row">
              <span className="pf-overlay__client-name">{client.name}</span>
              <span className="pf-overlay__divider">·</span>
              <span className="pf-overlay__location">{client.location}</span>
            </div>
          </div>
          <button className="pf-overlay__close" onClick={handleClose}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Video */}
        <div className={`pf-overlay__media ${work.vertical ? 'pf-overlay__media--vertical' : ''}`}
             style={{ background: work.bg }}>
          <video
            ref={videoRef}
            src={work.src}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="pf-overlay__video"
          />
          <div className="pf-overlay__duration" style={{ '--accent': client.accentColor }}>
            {work.duration}
          </div>
        </div>

        {/* Body */}
        <div className="pf-overlay__body">
          <p className="pf-overlay__desc">{work.desc}</p>
          <div className="pf-overlay__meta-row">
            <div className="pf-overlay__meta-item">
              <span className="pf-overlay__meta-label">Type</span>
              <span className="pf-overlay__meta-val">{typeLabels[work.type]}</span>
            </div>
            <div className="pf-overlay__meta-item">
              <span className="pf-overlay__meta-label">Client</span>
              <span className="pf-overlay__meta-val">{client.name}</span>
            </div>
            <div className="pf-overlay__meta-item">
              <span className="pf-overlay__meta-label">Format</span>
              <span className="pf-overlay__meta-val">{work.vertical ? '9:16 Vertical' : '16:9 Landscape'}</span>
            </div>
          </div>
          <a href="#contact" className="pf-overlay__cta" style={{ '--accent': client.accentColor }} onClick={handleClose}>
            Commission Similar Work →
          </a>
        </div>

      </div>
    </div>
  );
}

// ── CARD ───────────────────────────────────────────────────────────
function WorkCard({ work, client, onOpen }) {
  const [hov, setHov] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <div
      className={`pf-card ${work.vertical ? 'pf-card--vertical' : 'pf-card--landscape'}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(work, client)}
      style={{ '--accent': client.accentColor }}
    >
      <div className="pf-card__media" style={{ background: work.bg }}>
        <video
          ref={videoRef}
          src={work.src}
          autoPlay
          muted
          loop
          playsInline
          className="pf-card__video"
        />
        <div className={`pf-card__veil ${hov ? 'pf-card__veil--on' : ''}`} />
        <div className="pf-card__duration">{work.duration}</div>
        <div className={`pf-card__open-hint ${hov ? 'pf-card__open-hint--on' : ''}`}>
          <span>View Project</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Vertical badge */}
        {work.vertical && <div className="pf-card__ratio-badge">9:16</div>}
      </div>
      <div className="pf-card__info">
        <span className="pf-card__type">{typeIcons[work.type]} {typeLabels[work.type]}</span>
        <h4 className="pf-card__title">{work.title}</h4>
      </div>
    </div>
  );
}

// ── MAIN ───────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeClient, setActiveClient] = useState(0);
  const [activeType,   setActiveType]   = useState('all');
  const [overlay,      setOverlay]      = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('pf--in'); obs.unobserve(e.target); }
    }, { threshold: 0.05 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const client   = clients[activeClient];
  const allTypes = [...new Set(client.works.map(w => w.type))];
  const filtered = activeType === 'all' ? client.works : client.works.filter(w => w.type === activeType);

  const handleClientChange = (i) => { setActiveClient(i); setActiveType('all'); };

  return (
    <section id="portfolio" className="pf" ref={sectionRef}>

      {/* Header */}
      <div className="pf__header">
        <div className="pf__eyebrow"><span className="pf__eyebrow-line" />Portfolio</div>
        <h2 className="pf__headline">Studio <em>Archive</em></h2>
        <p className="pf__sub">Select a client to explore their visual work.</p>
      </div>

      {/* Client tabs */}
      <div className="pf__clients">
        {clients.map((c, i) => (
          <button
            key={c.id}
            className={`pf__client-tab ${activeClient === i ? 'pf__client-tab--active' : ''} ${c.locked ? 'pf__client-tab--locked' : ''}`}
            onClick={() => !c.locked && handleClientChange(i)}
            style={activeClient === i ? { '--accent': c.accentColor } : {}}
            disabled={c.locked}
          >
            <span className="pf__tab-num">0{c.id}</span>
            <span className="pf__tab-name">{c.name}</span>
            {c.locked
              ? <span className="pf__tab-lock">Soon</span>
              : <span className="pf__tab-dot" style={{ background: c.accentColor }} />
            }
          </button>
        ))}
      </div>

      {/* Client bar + filters */}
      {!client.locked && (
        <div className="pf__client-bar" style={{ '--accent': client.accentColor }}>
          <div>
            <div className="pf__client-bar-name">{client.name}</div>
            <div className="pf__client-bar-tag">{client.tagline} · {client.location}</div>
          </div>
          <div className="pf__filters">
            <button className={`pf__filter ${activeType === 'all' ? 'pf__filter--active' : ''}`}
              onClick={() => setActiveType('all')} style={activeType === 'all' ? { '--accent': client.accentColor } : {}}>
              All ({client.works.length})
            </button>
            {allTypes.map(t => (
              <button key={t}
                className={`pf__filter ${activeType === t ? 'pf__filter--active' : ''}`}
                onClick={() => setActiveType(t)}
                style={activeType === t ? { '--accent': client.accentColor } : {}}>
                {typeIcons[t]} {typeLabels[t]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid */}
      {!client.locked ? (
        <div className="pf__grid">
          {filtered.map((w, i) => (
            <div key={w.id} className={`pf__grid-item ${w.vertical ? 'pf__grid-item--vertical' : 'pf__grid-item--landscape'}`} style={{ '--i': i }}>
              <WorkCard work={w} client={client} onOpen={(work, cl) => setOverlay({ work, client: cl })} />
            </div>
          ))}
        </div>
      ) : (
        <div className="pf__locked-state">
          <div className="pf__locked-icon">◎</div>
          <div className="pf__locked-title">Identity Unrevealed</div>
          <p className="pf__locked-desc">This client's work is not yet public. Check back soon.</p>
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <WorkOverlay work={overlay.work} client={overlay.client} onClose={() => setOverlay(null)} />
      )}

    </section>
  );
}