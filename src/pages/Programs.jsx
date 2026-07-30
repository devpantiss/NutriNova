import { motion } from 'framer-motion';
import { Apple, GraduationCap, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const initiatives = [
    {
      title: "Nutrition Basket Initiative",
      desc: "Combating malnutrition in tuberculosis (TB) patients through direct supplementation of high-protein grains, pulses, millets, and daily cooking essentials.",
      icon: Apple,
      route: "/what-we-do/nutrition-basket",
      color: "emerald",
      stats: "500+ Patients Supported"
    },
    {
      title: "Anganwadi Training Initiative",
      desc: "Capacity building, growth-monitoring training, and educational guidance for rural sevikas, helpers, and early childhood teachers.",
      icon: GraduationCap,
      route: "/what-we-do/anganwadi-training",
      color: "emerald",
      stats: "1000+ Workers Certified"
    },
    {
      title: "AI Anganwadi Project",
      desc: "Developing and deploying localized tech frameworks including smart microcomputer boards, augmented learning apps, and brain development toys.",
      icon: Cpu,
      route: "/what-we-do/ai-anganwadi",
      color: "cyan",
      stats: "Interactive Tech Sandboxes"
    }
  ];

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section style={{
        position: 'relative',
        padding: '120px 0 60px 0',
        background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.05) 0%, transparent 100%)',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div className="glow-blur-cyan" style={{ top: '-10%', left: '30%', opacity: 0.18 }} />
        <div className="container">
          <span style={{ color: 'var(--color-cyan)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>WHAT WE DO</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: 'var(--text-light)', marginTop: '8px' }}>
            Our Focal <span className="gradient-text-tech">Initiatives</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '16px auto 0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            Empowering communities through targeted nutritional support and technology-led cognitive training.
          </p>
        </div>
      </section>

      {/* Program Showcase Grid */}
      <section className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {initiatives.map((init, idx) => {
            const InitIcon = init.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel"
                style={{
                  padding: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '40px',
                  borderLeft: init.color === 'emerald' ? '4px solid var(--color-emerald)' : '4px solid var(--color-cyan)'
                }}
                className="program-card-row"
              >
                <style>{`
                  .program-card-row {
                    display: flex !important;
                    justify-content: space-between !important;
                    align-items: center !important;
                    gap: 30px !important;
                  }
                  @media (max-width: 900px) {
                    .program-card-row {
                      flex-direction: column !important;
                      align-items: flex-start !important;
                    }
                  }
                `}</style>
                
                {/* Left Side: Icon & Summary */}
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }} className="program-row-left">
                  <style>{`
                    @media (max-width: 640px) {
                      .program-row-left {
                        flex-direction: column !important;
                      }
                    }
                  `}</style>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    backgroundColor: init.color === 'emerald' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(6, 182, 212, 0.08)',
                    border: init.color === 'emerald' ? '1px solid var(--border-emerald)' : '1px solid var(--border-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: init.color === 'emerald' ? 'var(--color-emerald)' : 'var(--color-cyan)',
                    flexShrink: 0
                  }}>
                    <InitIcon size={28} />
                  </div>
                  <div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: init.color === 'emerald' ? 'var(--color-emerald)' : 'var(--color-cyan)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      backgroundColor: init.color === 'emerald' ? 'rgba(16, 185, 129, 0.05)' : 'rgba(6, 182, 212, 0.05)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      display: 'inline-block',
                      marginBottom: '8px'
                    }}>{init.stats}</span>
                    <h3 style={{ color: 'var(--text-light)', fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>{init.title}</h3>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '650px' }}>{init.desc}</p>
                  </div>
                </div>

                {/* Right Side: Navigation Trigger */}
                <div style={{ flexShrink: 0 }} className="program-row-right">
                  <Link
                    to={init.route}
                    className={`btn ${init.color === 'emerald' ? 'btn-outline-emerald' : 'btn-outline-cyan'}`}
                    style={{ padding: '12px 28px', whiteSpace: 'nowrap' }}
                  >
                    Explore Initiative &nbsp; <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
