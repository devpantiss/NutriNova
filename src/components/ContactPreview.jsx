import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPreview() {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div className="glow-blur-cyan" style={{ bottom: '-20%', left: '30%', opacity: 0.15 }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel"
          style={{
            padding: '60px 40px',
            textAlign: 'center',
            border: '1px solid var(--border-emerald)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-glow)'
          }}
        >
          {/* Subtle glow border */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'var(--gradient-primary)'
          }} />

          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 38px)',
            color: 'var(--text-light)',
            fontWeight: 800,
            marginBottom: '16px'
          }}>Ready To Make An <span className="gradient-text">Impact?</span></h2>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 36px auto',
            lineHeight: 1.6
          }}>
            Partner with NutriNova to scale health initiatives, deploy smart classrooms, or provide supplemental food baskets in rural regions. Let's build healthier communities together.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center'
          }} className="preview-cta-buttons">
            <style>{`
              @media (max-width: 480px) {
                .preview-cta-buttons {
                  flex-direction: column !important;
                }
                .preview-cta-btn {
                  width: 100% !important;
                }
              }
            `}</style>
            <Link to="/contact" className="btn btn-primary preview-cta-btn" style={{ padding: '12px 32px' }}>
              Partner With Us <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary preview-cta-btn" style={{ padding: '12px 32px', display: 'inline-flex', gap: '8px' }}>
              <Mail size={16} /> Contact Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
