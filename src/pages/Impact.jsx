import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MapPin, Award, Shield } from 'lucide-react';

export default function Impact() {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const kpis = [
    { label: "Baskets Delivered", value: "3,200+", desc: "Supplemental TB support pack counts", icon: Shield, color: "emerald" },
    { label: "Workers Certified", value: "1,040+", desc: "Anganwadi Sevikas trained", icon: Award, color: "emerald" },
    { label: "Children Impacted", value: "8,500+", desc: "Active digital learning beneficiaries", icon: Users, color: "cyan" },
    { label: "Districts Reached", value: "4 Regions", desc: "Active rural healthcare zones", icon: MapPin, color: "cyan" }
  ];

  const districts = [
    { name: "Purulia", workers: 320, baskets: 1200, children: 2400, color: "var(--color-emerald)" },
    { name: "Bankura", workers: 240, baskets: 850, children: 1900, color: "var(--color-cyan)" },
    { name: "Birbhum", workers: 280, baskets: 650, children: 2200, color: "var(--color-emerald)" },
    { name: "Hooghly", workers: 200, baskets: 500, children: 2000, color: "var(--color-cyan)" }
  ];

  // Custom SVG Chart Data
  const chartData = [
    { label: "Jan", outreach: 30, st: 40 },
    { label: "Feb", outreach: 45, st: 42 },
    { label: "Mar", outreach: 55, st: 52 },
    { label: "Apr", outreach: 70, st: 68 },
    { label: "May", outreach: 85, st: 74 },
    { label: "Jun", outreach: 100, st: 92 }
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
          <span style={{ color: 'var(--color-emerald)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>IMPACT & INSIGHTS</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: 'var(--text-light)', marginTop: '8px' }}>
            Our Real-World <span className="gradient-text">Reach</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '16px auto 0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            Verifiable growth and development indices driven by transparent technology frameworks.
          </p>
        </div>
      </section>

      {/* KPI Cards Grid */}
      <section className="container" style={{ marginBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="kpi-grid">
          <style>{`
            @media (max-width: 1024px) {
              .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
            }
            @media (max-width: 520px) {
              .kpi-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          {kpis.map((kpi, idx) => {
            const KpiIcon = kpi.icon;
            return (
              <div key={idx} className="glass-panel" style={{ padding: '24px', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  color: kpi.color === 'emerald' ? 'var(--color-emerald)' : 'var(--color-cyan)',
                  opacity: 0.8
                }}>
                  <KpiIcon size={22} />
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>{kpi.label}</span>
                <h3 style={{ fontSize: '32px', color: 'var(--text-light)', fontWeight: 800, margin: '8px 0 4px 0' }}>{kpi.value}</h3>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{kpi.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dashboard Section (Charts & Maps) */}
      <section className="container" style={{ marginBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }} className="dashboard-grid">
          <style>{`
            @media (max-width: 900px) {
              .dashboard-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          {/* Custom SVG Growth Graph */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={18} style={{ color: 'var(--color-emerald)' }} /> Performance Metrics (H1 Growth)
            </h3>
            
            {/* SVG Graph Container */}
            <div style={{ width: '100%', height: '240px', position: 'relative', marginTop: '10px' }}>
              <svg viewBox="0 0 500 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                {/* Horizontal Gridlines */}
                <line x1="0" y1="40" x2="500" y2="40" stroke="var(--border-medium)" strokeDasharray="3" />
                <line x1="0" y1="90" x2="500" y2="90" stroke="var(--border-medium)" strokeDasharray="3" />
                <line x1="0" y1="140" x2="500" y2="140" stroke="var(--border-medium)" strokeDasharray="3" />
                <line x1="0" y1="190" x2="500" y2="190" stroke="var(--border-medium)" />

                {/* X Axis Labels */}
                {chartData.map((d, i) => (
                  <text key={i} x={30 + i * 80} y="215" fill="var(--text-muted)" fontSize="10" textAnchor="middle">
                    {d.label}
                  </text>
                ))}

                {/* Growth Line: Supplemental Outreach (Emerald) */}
                <path
                  d={`M 30,${190 - chartData[0].outreach * 1.5} 
                     L 110,${190 - chartData[1].outreach * 1.5} 
                     L 190,${190 - chartData[2].outreach * 1.5} 
                     L 270,${190 - chartData[3].outreach * 1.5} 
                     L 350,${190 - chartData[4].outreach * 1.5} 
                     L 430,${190 - chartData[5].outreach * 1.5}`}
                  fill="none"
                  stroke="var(--color-emerald)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0px 0px 8px rgba(16,185,129,0.2))' }}
                />
                
                {/* Line Nodes */}
                {chartData.map((d, i) => (
                  <circle key={i} cx={30 + i * 80} cy={190 - d.outreach * 1.5} r="4" fill="var(--bg-card)" stroke="var(--color-emerald)" strokeWidth="2" />
                ))}

                {/* Growth Line: Cognitive Setup Deployments (Cyan) */}
                <path
                  d={`M 30,${190 - chartData[0].st * 1.5} 
                     L 110,${190 - chartData[1].st * 1.5} 
                     L 190,${190 - chartData[2].st * 1.5} 
                     L 270,${190 - chartData[3].st * 1.5} 
                     L 350,${190 - chartData[4].st * 1.5} 
                     L 430,${190 - chartData[5].st * 1.5}`}
                  fill="none"
                  stroke="var(--color-cyan)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0px 0px 8px rgba(102,187,106,0.2))' }}
                />
                
                {/* Cyan Line Nodes */}
                {chartData.map((d, i) => (
                  <circle key={i} cx={30 + i * 80} cy={190 - d.st * 1.5} r="4" fill="var(--bg-card)" stroke="var(--color-cyan)" strokeWidth="2" />
                ))}
              </svg>
            </div>
            
            {/* Chart Legend */}
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '20px', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--color-emerald)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>TB Basket Deliveries</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: 'var(--color-cyan)' }} />
                <span style={{ color: 'var(--text-secondary)' }}>Smart Classroom Setups</span>
              </div>
            </div>
          </div>

          {/* Regional Geographic Reach */}
          <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} style={{ color: 'var(--color-cyan)' }} /> District Reach
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Hover over a region below to see localized beneficiary metrics.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {districts.map((d, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: hoveredDistrict === d.name ? 'var(--bg-secondary)' : 'transparent',
                    border: hoveredDistrict === d.name ? '1px solid var(--border-medium)' : '1px solid transparent',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={() => setHoveredDistrict(d.name)}
                  onMouseLeave={() => setHoveredDistrict(null)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: hoveredDistrict === d.name ? '8px' : '0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: 'var(--text-light)' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: d.color }} />
                      <span>{d.name} District</span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Metrics &rarr;</span>
                  </div>

                  {hoveredDistrict === d.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '10px',
                        paddingTop: '8px',
                        borderTop: '1px solid var(--border-light)',
                        fontSize: '11px'
                      }}
                    >
                      <div>
                        <div style={{ color: 'var(--text-muted)' }}>Trained Workers</div>
                        <div style={{ color: 'var(--text-light)', fontWeight: 600 }}>{d.workers}</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--text-muted)' }}>TB Baskets</div>
                        <div style={{ color: 'var(--text-light)', fontWeight: 600 }}>{d.baskets}</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--text-muted)' }}>Children served</div>
                        <div style={{ color: 'var(--text-light)', fontWeight: 600 }}>{d.children}</div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: 'var(--text-light)', fontSize: '28px', fontWeight: 800 }}>Field Reports & Success Logs</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }} className="split-grid">
          <div className="glass-panel" style={{ padding: '30px' }}>
            <span style={{ fontSize: '11px', color: 'var(--color-emerald)', fontWeight: 700, textTransform: 'uppercase' }}>CASE STUDY: TB-048</span>
            <h4 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, margin: '6px 0 12px 0' }}>Reversing Weight Wasting in Hooghly</h4>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              In Hooghly district, a cohort of 50 patients suffering from severe malnutrition alongside TB diagnosis were tracked. After 4 months of supplemental Nutrition Basket intervention (cereals, pulses, groundnuts), the cohort displayed an average weight gain of 5.2 kg. Medical compliance rose to 98%, with 44 patients declared fully recovered.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '30px' }}>
            <span style={{ fontSize: '11px', color: 'var(--color-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>REPORT: COG-102</span>
            <h4 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, margin: '6px 0 12px 0' }}>Cognitive Scoring Boost via AR Flashcards</h4>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
              A 3-month research study monitored 120 preschool children across 10 digital Anganwadi centers in Purulia. Using our AR-enabled sensory flashcards and brain boost matching exercises, children's pattern matching accuracy scores rose from 42% to 84%. Attendance at the centers saw a parallel 32% increase.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
