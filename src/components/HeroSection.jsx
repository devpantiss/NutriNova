import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'transparent'
    }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
          transform: 'scale(1.15)',
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        <source src="/videos/home-hero.mp4" type="video/mp4" />
      </video>

      {/* Cyber Glow Overlays */}
      <div className="glow-blur-cyan" style={{ top: '-10%', left: '10%', opacity: 0.5, zIndex: 2 }} />
      <div className="glow-blur-emerald" style={{ bottom: '-10%', right: '10%', opacity: 0.5, zIndex: 2 }} />

      {/* Dark Transparent Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(7, 9, 14, 0.65)',
        zIndex: 2
      }} />

      {/* Hero Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        maxWidth: '900px'
      }}>
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(44px, 10vw, 100px)',
            fontWeight: 900,
            color: 'var(--text-bright)',
            lineHeight: 1.1,
            letterSpacing: '0.08em',
            marginBottom: '40px',
            fontFamily: 'var(--font-heading)'
          }}
        >
          NUTRI_<span className="gradient-text">NOVA</span>
        </motion.h1>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          className="hero-buttons"
        >
          <style>{`
            @media (max-width: 480px) {
              .hero-buttons {
                flex-direction: column !important;
                width: 100% !important;
              }
              .hero-btn {
                width: 100% !important;
              }
            }
          `}</style>
          <Link to="/what-we-do" className="btn btn-primary hero-btn" style={{ padding: '14px 32px', fontSize: '16px' }}>
            Explore What We Do <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn-secondary hero-btn" style={{ padding: '14px 32px', fontSize: '16px' }}>
            Partner With Us
          </Link>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--text-muted)',
        fontSize: '12px'
      }}>
        <span>Scroll to explore</span>
        <div style={{
          width: '2px',
          height: '24px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          position: 'relative',
          borderRadius: '1px',
          overflow: 'hidden'
        }}>
          <motion.div
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '40%',
              background: 'var(--gradient-primary)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
