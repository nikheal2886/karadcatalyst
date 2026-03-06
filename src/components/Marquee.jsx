import './Marquee.css';

const items = [
  'Social Media Management',
  'Original Content',
  'Live Photography',
  'Portrait Shoots',
  'Brand Strategy',
  'Organic Growth',
  'Story Telling',
  'Reels & Shorts',
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-inner">
          {repeated.map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
