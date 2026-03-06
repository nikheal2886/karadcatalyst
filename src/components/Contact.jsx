import { useEffect, useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', brand: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const phone = '918483848934'; 
  const message = 
    `Hi KaradCatalyst! 👋\n\n` +
    `*Name:* ${form.name}\n` +
    `*Brand:* ${form.brand}\n` +
    `*Service Needed:* ${form.service}\n\n` +
    `*Message:*\n${form.message}`;

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encoded}`;

  window.open(url, '_blank');
  setSent(true);
};

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <div className="contact__label">Get In Touch</div>
            <h2 className="contact__headline">
              Ready to Grow<br />
              <em>Your Brand?</em>
            </h2>
            <p className="contact__sub">
              Whether you need a full social media overhaul or just a killer content shoot —
              we're ready. Let's make something worth talking about.
            </p>

            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-label">Email</span>
                <a href="mailto:karadgroup9@gmail.com" className="contact__info-value">
                  karadgroup9@gmail.com
                </a>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-label">Based in</span>
                <span className="contact__info-value"> Maharashtra </span>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-label">Instagram</span>
                <a href="https://instagram.com/karadcatalyst" className="contact__info-value" target="_blank" rel="noreferrer">
                  @karadcatalyst
                </a>
              </div>
            </div>
          </div>

          <div className="contact__right">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <div className="contact__success-title">Message Sent!</div>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="brand">Brand / Business</label>
                    <input
                      id="brand"
                      name="brand"
                      type="text"
                      placeholder="Your brand name"
                      value={form.brand}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="service">What do you need?</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Social Media Management</option>
                    <option>Content Creation</option>
                    <option>Live Photography</option>
                    <option>Portrait Shoot</option>
                    <option>Brand Strategy</option>
                    <option>Everything!</option>
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Tell us about your brand</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What's your business, your goals, and what you're struggling with..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="contact__submit">
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
