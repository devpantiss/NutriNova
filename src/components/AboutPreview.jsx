import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPreview() {
  const points = [
    "AI & AR-Empowered Anganwadis",
    "Targeted TB Nutritional Basket Distribution",
    "Capacity Building for Rural Caregivers",
    "Data-Driven Growth & Impact Monitoring"
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow-blur-emerald" style={{ top: '20%', left: '-10%', opacity: 0.3 }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '60px',
          alignItems: 'center'
        }} className="about-preview-grid">
          <style>{`
            @media (max-width: 900px) {
              .about-preview-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
            }
          `}</style>

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span style={{
              color: 'var(--color-emerald)',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              display: 'block'
            }}>About NutriNova</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              color: 'var(--text-light)',
              marginBottom: '20px',
              fontWeight: 800
            }}>
              Bridging the Gap in Rural Development
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '24px', lineHeight: 1.7 }}>
              NutriNova is a social-impact and tech-driven organization dedicated to transforming health, early childhood education, and community empowerment. By integrating modern digital frameworks with on-the-ground support, we assist under-supported Anganwadis and supply vital nutritional aid to TB patients.
            </p>
            
            {/* Checklist */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              marginBottom: '32px'
            }} className="points-grid">
              <style>{`
                @media (max-width: 480px) {
                  .points-grid {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>
              {points.map((point, index) => (
                <div key={index} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-emerald)', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>{point}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn btn-outline-emerald">
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right Column: Visual Media Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-light)',
              lineHeight: 0
            }}>
              {/* Overlay Glass Frame */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(7, 9, 14, 0.7) 100%)',
                zIndex: 2
              }} />
              
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
                alt="Empowering rural education"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  filter: 'brightness(0.95) contrast(1.05)'
                }}
              />
            </div>

            {/* Decorative Cyber Frame */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '80px',
              height: '80px',
              borderTop: '3px solid var(--color-emerald)',
              borderRight: '3px solid var(--color-emerald)',
              borderRadius: '0 var(--radius-md) 0 0',
              pointerEvents: 'none',
              zIndex: 1
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-15px',
              width: '80px',
              height: '80px',
              borderBottom: '3px solid var(--color-cyan)',
              borderLeft: '3px solid var(--color-cyan)',
              borderRadius: '0 0 0 var(--radius-md)',
              pointerEvents: 'none',
              zIndex: 1
            }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
