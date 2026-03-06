import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              Karad<span>Catalyst</span>
            </div>
            <p className="footer__tagline">
              We don't follow trends.<br />We set them.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <div className="footer__col-title">Navigate</div>
              {['Work', 'Services', 'About', 'Contact'].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="footer__link">
                  {l}
                </a>
              ))}
            </div>
            <div className="footer__col">
              <div className="footer__col-title">Services</div>
              {[
                'Social Media',
                'Content Creation',
                'Photography',
                'Brand Strategy',
              ].map((l) => (
                <span key={l} className="footer__link footer__link--muted">{l}</span>
              ))}
            </div>
            <div className="footer__col">
              <div className="footer__col-title">Connect</div>
              {[
                { label: 'Instagram', href: 'https://instagram.com/karadcatalyst' },
                { label: 'Email Us', href: 'mailto:karadgroup9@gmail.com' },
              ].map((l) => (
                <a key={l.label} href={l.href} className="footer__link" target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© {year} KaradCatalyst. All rights reserved.</span>
          <span className="footer__made">Made with intent, not templates.</span>
        </div>
      </div>
    </footer>
  );
}
