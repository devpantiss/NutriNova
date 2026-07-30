import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setForm({ name: '', email: '', org: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", text: "+91 98765 43210", sub: "Mon - Fri, 9am - 6pm", link: "tel:+919876543210" },
    { icon: Mail, title: "Email", text: "info@nutrinova.org", sub: "For partnership & general queries", link: "mailto:info@nutrinova.org" },
    { icon: MapPin, title: "Headquarters", text: "Plot No 1215/1500, Khandagiri Bari, Bank of India Lane,", sub: "Bhubaneswar, Odisha", link: "#" }
  ];

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section style={{
        position: 'relative',
        padding: '120px 0 60px 0',
        background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%)',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div className="glow-blur-emerald" style={{ top: '-10%', left: '30%', opacity: 0.18 }} />
        <div className="container">
          <span style={{ color: 'var(--color-emerald)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>GET IN TOUCH</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: 'var(--text-light)', marginTop: '8px' }}>
            Partner With <span className="gradient-text">NutriNova</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '16px auto 0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            We welcome collaborations with health departments, technology developers, and community foundations.
          </p>
        </div>
      </section>

      {/* Main Grid: Info & Form */}
      <section className="container" style={{ marginBottom: '60px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '50px',
          alignItems: 'start'
        }} className="split-grid">
          <style>{`
            @media (max-width: 900px) {
              .split-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>

          {/* Left Column: Info Cards & Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactInfo.map((info, idx) => {
                const InfoIcon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.link}
                    className="glass-panel"
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-emerald)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}
                  >
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 185, 129, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-emerald)',
                      flexShrink: 0
                    }}>
                      <InfoIcon size={20} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text-light)', fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>{info.title}</h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '2px' }}>{info.text}</p>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{info.sub}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Embedded Stylized Map Placeholder */}
            <div className="glass-panel" style={{ padding: '24px', textAlign: 'left' }}>
              <h4 style={{ color: 'var(--text-light)', fontSize: '15px', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} style={{ color: 'var(--color-emerald)' }} /> Office Location Map
              </h4>
              <div style={{
                position: 'relative',
                height: '180px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)'
              }}>
                {/* Stylized background lines mimicking a map */}
                <div style={{ position: 'absolute', top: '10%', left: '0', right: '0', height: '1px', backgroundColor: 'var(--border-light)' }} />
                <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', backgroundColor: 'var(--border-light)' }} />
                <div style={{ position: 'absolute', top: '75%', left: '0', right: '0', height: '1px', backgroundColor: 'var(--border-light)' }} />
                <div style={{ position: 'absolute', left: '20%', top: '0', bottom: '0', width: '1px', backgroundColor: 'var(--border-light)' }} />
                <div style={{ position: 'absolute', left: '60%', top: '0', bottom: '0', width: '1px', backgroundColor: 'var(--border-light)' }} />

                {/* Salt Lake Map Label */}
                <div style={{ zIndex: 2, textAlign: 'center' }}>
                  <MapPin size={28} style={{ color: 'var(--color-emerald)', marginBottom: '8px', filter: 'drop-shadow(0 0 8px rgba(16,185,129,0.3))' }} />
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-light)' }}>Bhubaneswar, Odisha</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>22&deg; 34' N, 88&deg; 25' E</div>
                </div>
              </div>
            </div>

            {/* Social Follow */}
            <div className="glass-panel" style={{ padding: '20px 24px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-light)' }}>Follow Our Progress:</span>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-emerald)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-emerald)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-panel" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(46, 125, 50, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-emerald)' }}>
                <MessageSquare size={18} />
              </div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '20px', fontWeight: 700 }}>Send Us A Message</h3>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                <style>{`
                  @media (max-width: 640px) {
                    .form-row { grid-template-columns: 1fr !important; }
                  }
                `}</style>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '6px', display: 'block' }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)', fontSize: '14px', outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '6px', display: 'block' }}>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)', fontSize: '14px', outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div>
                <label style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '6px', display: 'block' }}>Organization Name (Optional)</label>
                <input
                  type="text"
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)', fontSize: '14px', outline: 'none'
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '6px', display: 'block' }}>Your Message *</label>
                <textarea
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)', fontSize: '14px', outline: 'none', resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px 0', fontSize: '15px' }}
              >
                Send Message <Send size={14} />
              </button>
            </form>

            {/* Submission Overlay */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'var(--bg-secondary)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    padding: '30px', zIndex: 5, textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={44} style={{ color: 'var(--color-emerald)', marginBottom: '16px' }} />
                  <h3 style={{ color: 'var(--text-light)', fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>Message Dispatched!</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '280px' }}>
                    Thank you. Our partnership desk will follow up with you within 24 business hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
