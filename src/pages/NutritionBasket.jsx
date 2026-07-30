import { Apple, CheckCircle2, ShieldAlert, Award, TrendingUp, Users, Heart, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NutritionBasket() {
  const components = [
    { name: "Cereals & Millets", desc: "Provides high complex carbohydrates and energy." },
    { name: "Pulses", desc: "Rich in plant protein to rebuild lean body mass." },
    { name: "Edible Oil", desc: "Supplies essential fatty acids and concentrated calories." },
    { name: "Milk Powder", desc: "Ensures easy calcium intake and additional protein support." },
    { name: "Groundnuts", desc: "Source of healthy fats, protein, and micro-nutrients." },
    { name: "Soya Chunks", desc: "High protein supplement for tissue repair." }
  ];

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Hero Banner Section */}
      <section style={{
        position: 'relative',
        height: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Background Video */}
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
          <source src="/WhatsApp Video 2026-06-24 at 01.16.44.mp4" type="video/mp4" />
        </video>

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

        <div className="glow-blur-emerald" style={{ top: '-10%', left: '30%', opacity: 0.2, zIndex: 2 }} />
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <Link to="/what-we-do" style={{
            color: 'var(--color-emerald)',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '16px',
            display: 'inline-block'
          }}>&larr; Back to What We Do</Link>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: 'var(--text-bright)', marginBottom: '16px' }}>
            Nutrition Basket <span className="gradient-text">Initiative</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', color: 'rgba(255, 255, 255, 0.85)' }}>
            Combating malnutrition and accelerating recovery in TB patients through targeted, high-protein nutrition packs.
          </p>
        </div>
      </section>

      {/* Overview Block: Problem vs Solution */}
      <section className="container" style={{ marginBottom: '60px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'stretch'
        }} className="split-grid">
          <style>{`
            @media (max-width: 768px) {
              .split-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
            }
          `}</style>

          {/* Problem */}
          <div className="glass-panel" style={{ padding: '36px', borderColor: 'rgba(244, 63, 94, 0.2)' }}>
            <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '12px', backgroundColor: 'rgba(244, 63, 94, 0.1)', color: 'var(--color-rose)', marginBottom: '20px' }}>
              <ShieldAlert size={24} />
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--text-light)', marginBottom: '14px' }}>The Problem</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6 }}>
              Tuberculosis (TB) imposes heavy nutritional demands on the body, causing muscle wasting and severe weight loss. Malnutrition severely weakens the immune response, which in turn reduces the efficacy of anti-TB medications, increases treatment default rates, and raises mortality risk.
            </p>
          </div>

          {/* Solution */}
          <div className="glass-panel" style={{ padding: '36px', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
            <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-emerald)', marginBottom: '20px' }}>
              <Apple size={24} />
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--text-light)', marginBottom: '14px' }}>The Solution</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6 }}>
              We partner with local healthcare clinics to deliver monthly NutriNova Baskets directly to patients undergoing treatment. Every basket is clinically structured to offer supplemental protein, minerals, and calories to reverse muscle wasting, boost immune health, and ensure treatment compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Basket Components Grid */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: 'var(--text-light)', fontSize: '28px', fontWeight: 800 }}>Inside The NutriNova Basket</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '8px' }}>Six clinically chosen supplement items designed for rapid rehabilitation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="components-grid">
            <style>{`
              @media (max-width: 900px) {
                .components-grid { grid-template-columns: repeat(2, 1fr) !important; }
              }
              @media (max-width: 520px) {
                .components-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
            {components.map((comp, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '24px 20px', textAlign: 'left', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-emerald)', marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '16px', marginBottom: '4px', fontWeight: 600 }}>{comp.name}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats & Success Story */}
      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px', alignItems: 'center' }} className="impact-story-grid">
          <style>{`
            @media (max-width: 900px) {
              .impact-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>

          {/* Stats Dashboard */}
          <div>
            <h3 style={{ fontSize: '24px', color: 'var(--text-light)', fontWeight: 800, marginBottom: '24px' }}>Proven Results</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { value: "500+", desc: "TB patients actively supported", icon: Users },
                { value: "92%", desc: "Treatment compliance rate", icon: Award },
                { value: "4.8 kg", desc: "Average weight gain in 3 months", icon: TrendingUp }
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <div key={i} className="glass-panel" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.08)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', color: 'var(--color-emerald)' }}>
                      <StatIcon size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-light)', lineHeight: 1.2 }}>{stat.value}</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{stat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Success Story */}
          <div className="glass-panel" style={{ padding: '40px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
              <img 
                src="/WhatsApp Image 2026-06-24 at 01.17.01.jpeg" 
                alt="Rajesh Kisku" 
                style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  objectFit: 'cover',
                  border: '2px solid var(--color-emerald)',
                  flexShrink: 0
                }} 
              />
              <div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-light)', fontWeight: 700, margin: 0 }}>Story of Restoration</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-emerald)', margin: 0 }}>Verified Recipient Story</p>
              </div>
            </div>
            <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '20px' }}>
              "I was diagnosed with severe TB and was unable to continue my daily wage work. Because of weakness, the medicine was causing nausea, and I wanted to stop. NutriNova began delivering the Nutrition Basket directly to my house. Within a month, I felt my strength return. Today, I am completely recovered and back at work. This basket was as important as the medicine."
            </p>
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
              <h5 style={{ color: 'var(--text-light)', fontSize: '15px' }}>Rajesh Kisku</h5>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Basket Recipient, Purulia Health District</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section: Clinical Importance & Community Journey */}
      <section className="container" style={{ marginTop: '80px', marginBottom: '40px' }}>
        <div className="showcase-split-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'center'
        }}>
          <style>{`
            .showcase-split-grid {
              display: grid !important;
            }
            @media (max-width: 900px) {
              .showcase-split-grid {
                grid-template-columns: 1fr !important;
                gap: 30px !important;
              }
              .showcase-image-order {
                order: -1;
              }
            }
          `}</style>

          {/* Showcase Image with scroll fade-in */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="showcase-image-order"
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
              <img
                src="/WhatsApp Image 2026-06-24 at 01.17.01.jpeg"
                alt="Nutrition Basket Initiative Showcase"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '460px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-medium)',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.025)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              />
            </div>
          </motion.div>

          {/* Info Content Block with scroll reveal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}
          >
            <span style={{ color: 'var(--color-emerald)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block' }}>
              CLINICAL IMPACT & COMMUNITY
            </span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 800, color: 'var(--text-light)', lineHeight: 1.25, margin: 0 }}>
              Empowering The Recovery Journey <span className="gradient-text">Through Nutrition</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Anti-TB chemotherapy is highly effective, but demands a robust physical foundation. Severe malnutrition can interfere with drug absorption, weaken physical resilience, and force patients to interrupt their recovery course.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Our Nutrition Basket Initiative bridges this critical gap. By delivering monthly supplies of protein-dense millets, legumes, and groundnuts, we strengthen the patient's recovery journey and shield families from the secondary financial impact of health crises.
            </p>

            {/* Feature Icons List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '8px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(46, 125, 50, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-emerald)', flexShrink: 0 }}>
                  <Activity size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-light)', marginBottom: '4px' }}>Accelerated Recovery Outcomes</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>Targeted macronutrients speed up drug efficacy and muscle mass recovery.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(46, 125, 50, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-emerald)', flexShrink: 0 }}>
                  <Heart size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-light)', marginBottom: '4px' }}>Dignity & Caregiver Support</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>Relieves household financial strains, helping families focus entirely on complete recovery.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
