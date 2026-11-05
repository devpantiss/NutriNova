import { useState } from 'react';
import { Target, Heart, Eye, Award, Sparkles, Sliders, Activity, BookOpen, Users, GraduationCap } from 'lucide-react';

export default function About() {
  const [baskets, setBaskets] = useState(30);
  const [centers, setCenters] = useState(3);
  const [region, setRegion] = useState('jajpur');

  const regionModifiers = {
    jajpur: { reachCoeff: 1.2, nutritionWeight: 0.98, cognitiveWeight: 0.90 },
    parjang: { reachCoeff: 1.0, nutritionWeight: 0.92, cognitiveWeight: 0.98 },
    Keonjhar: { reachCoeff: 0.9, nutritionWeight: 0.95, cognitiveWeight: 0.95 }
  };

  const currentMod = regionModifiers[region] || { reachCoeff: 1.0, nutritionWeight: 0.95, cognitiveWeight: 0.95 };

  const reach = Math.round((baskets * 6 + centers * 85) * currentMod.reachCoeff);
  const compliance = baskets > 0 
    ? Math.min(99, Math.round(80 + (baskets * 0.22) * currentMod.nutritionWeight)) 
    : 0;
  const cognitiveBoost = centers > 0 
    ? Math.min(38, Math.round((10 + centers * 2.8) * currentMod.cognitiveWeight)) 
    : 0;
  const caregiversTrained = centers * 3;

  const values = [
    { title: "Innovation", desc: "Using AI, augmented reality, and edge computing to redefine child pedagogy and field monitoring.", icon: Sparkles },
    { title: "Inclusion", desc: "Ensuring high-protein supplements and smart education tools reach under-served communities.", icon: Heart },
    { title: "Sustainability", desc: "Building capacity so community workers and local teachers can sustain and grow these frameworks.", icon: Award },
    { title: "Community Impact", desc: "Prioritizing actual field-verified weight gain, treatment compliance, and literacy scores.", icon: Target }
  ];

  const milestones = [
    { year: "2023", title: "Inception & First Pilot", text: "NutriNova founded. Launched Nutrition Basket Program for 50 TB patients in rural jajpur." },
    { year: "2024", title: "Caregiver Training", text: "Introduced government-approved Anganwadi capacity training. Mentored 300+ local sevikas." },
    { year: "2025", title: "AI Smart Boards", text: "Partnered with technical institutes to build and deploy micro-displays and AR cards in 25 centers." },
    { year: "2026", title: "Statewide Expansion", text: "Scaling operations to serve over 1,000 workers and thousands of children across West Bengal." }
  ];

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section style={{
        position: 'relative',
        padding: '120px 0 60px 0',
        background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, transparent 100%)',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div className="glow-blur-emerald" style={{ top: '-10%', left: '30%', opacity: 0.18 }} />
        <div className="container">
          <span style={{ color: 'var(--color-emerald)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>WHO WE ARE</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: 'var(--text-light)', marginTop: '8px' }}>
            Empowering Through <span className="gradient-text">Innovation</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '16px auto 0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            NutriNova fuses data science, augmented reality, and supplemental nutrition to drive sustainable community growth.
          </p>
        </div>
      </section>

      {/* Our Story / Vision / Mission */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '50px',
          alignItems: 'center'
        }} className="about-split">
          <style>{`
            @media (max-width: 900px) {
              .about-split { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>
          
          <div>
            <h2 style={{ color: 'var(--text-light)', fontSize: '30px', fontWeight: 800, marginBottom: '20px' }}>Our Story</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
              NutriNova was born out of a realization that traditional healthcare and early childhood assistance are often siloed. While medical programs exist, nutrition is sometimes ignored; while schools are built, modern teaching methodologies are rarely integrated.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.7 }}>
              By treating child development and nutrition as a unified engineering problem, we design solutions that are scalable, verifiable, and community-driven. Today, we work at the intersection of local expertise and modern technology.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Vision */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                <Eye size={20} style={{ color: 'var(--color-emerald)' }} />
                <h4 style={{ color: 'var(--text-light)', fontSize: '16px', fontWeight: 700 }}>Our Vision</h4>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Building healthier, smarter, and self-sustaining community structures across rural and suburban sectors.
              </p>
            </div>

            {/* Mission */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                <Target size={20} style={{ color: 'var(--color-cyan)' }} />
                <h4 style={{ color: 'var(--text-light)', fontSize: '16px', fontWeight: 700 }}>Our Mission</h4>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                Strengthening early nutrition, local capacities, and cognitive education through scalable technological solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '80px 0',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        marginBottom: '80px'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: 'var(--color-emerald)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>OUR GUIDING PRINCIPLES</span>
            <h2 style={{ color: 'var(--text-light)', fontSize: '32px', fontWeight: 800, marginTop: '8px' }}>Values We Stand By</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="values-grid">
            <style>{`
              @media (max-width: 1024px) {
                .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
              }
              @media (max-width: 520px) {
                .values-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
            {values.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div key={idx} className="glass-panel" style={{ padding: '30px 24px', textAlign: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-emerald)', margin: '0 auto 20px auto' }}>
                    <ValIcon size={20} />
                  </div>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{val.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Impact Simulator Section */}
      <section className="container" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: 'var(--color-emerald)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>INTERACTIVE PLANNER</span>
          <h2 style={{ color: 'var(--text-light)', fontSize: '32px', fontWeight: 800, marginTop: '8px' }}>Social Impact Simulator</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '600px', margin: '10px auto 0 auto' }}>
            Adjust the sliders to allocate resources and see the projected live social impact across local districts.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '40px',
          alignItems: 'start'
        }} className="simulator-layout">
          <style>{`
            .simulator-layout {
              display: grid !important;
            }
            @media (max-width: 991px) {
              .simulator-layout {
                grid-template-columns: 1fr !important;
                gap: 30px !important;
              }
            }
            .slider-group {
              margin-bottom: 28px;
            }
            .slider-label-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 10px;
            }
            .custom-slider {
              width: 100%;
              height: 6px;
              border-radius: 3px;
              outline: none;
              -webkit-appearance: none;
              background: var(--border-medium);
              cursor: pointer;
            }
            .custom-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background: var(--gradient-primary);
              box-shadow: var(--shadow-glow);
              cursor: pointer;
              transition: transform 0.1s ease;
            }
            .custom-slider::-webkit-slider-thumb:hover {
              transform: scale(1.2);
            }
            .region-btn {
              padding: 10px 20px;
              font-size: 14px;
              font-weight: 600;
              border-radius: var(--radius-full);
              border: 1px solid var(--border-light);
              background: var(--bg-card);
              color: var(--text-secondary);
              cursor: pointer;
              transition: var(--transition-smooth);
            }
            .region-btn.active {
              background: var(--gradient-primary);
              color: var(--text-bright);
              border-color: transparent;
              box-shadow: var(--shadow-glow);
            }
            .region-btn:hover:not(.active) {
              background: var(--bg-secondary);
              border-color: var(--border-medium);
              color: var(--text-primary);
            }
            .metric-card {
              display: flex;
              gap: 16px;
              align-items: center;
              padding: 20px;
              border-radius: var(--radius-lg);
              transition: var(--transition-smooth);
            }
            .metric-card:hover {
              transform: translateY(-2px);
              border-color: var(--border-medium);
            }
          `}</style>

          {/* Left Panel: Inputs */}
          <div className="glass-panel" style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
              <Sliders size={20} style={{ color: 'var(--color-emerald)' }} />
              <h3 style={{ color: 'var(--text-light)', fontSize: '20px', fontWeight: 700 }}>Allocation Controls</h3>
            </div>

            {/* Slider 1 */}
            <div className="slider-group">
              <div className="slider-label-row">
                <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 600 }}>Nutrition Baskets Funded</span>
                <span className="gradient-text" style={{ fontSize: '18px', fontWeight: 800 }}>{baskets} Baskets</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={baskets} 
                onChange={(e) => setBaskets(Number(e.target.value))} 
                className="custom-slider"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>
                <span>0 Baskets</span>
                <span>100 Baskets</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="slider-group">
              <div className="slider-label-row">
                <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 600 }}>AI Anganwadis Supported</span>
                <span className="gradient-text" style={{ fontSize: '18px', fontWeight: 800 }}>{centers} Centers</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="10" 
                value={centers} 
                onChange={(e) => setCenters(Number(e.target.value))} 
                className="custom-slider"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>
                <span>0 Centers</span>
                <span>10 Centers</span>
              </div>
            </div>

            {/* Region Selection */}
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>Target Region / District</h4>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button 
                  className={`region-btn ${region === 'jajpur' ? 'active' : ''}`}
                  onClick={() => setRegion('jajpur')}
                >
            jajpur
                </button>
                <button 
                  className={`region-btn ${region === 'parjang' ? 'active' : ''}`}
                  onClick={() => setRegion('parjang')}
                >
                  parjang
                </button>
                <button 
                  className={`region-btn ${region === 'Keonjhar' ? 'active' : ''}`}
                  onClick={() => setRegion('Keonjhar')}
                >
                  Keonjhar
                </button>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px' }}>
                * Regional stats adjust compliance weight and educational reach coefficients based on demographic density.
              </p>
            </div>
          </div>

          {/* Right Panel: Projected Outcomes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Metric 1: Reach */}
            <div className="glass-panel metric-card" style={{ borderColor: reach > 150 ? 'var(--border-emerald)' : 'var(--border-light)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-emerald)' }}>
                <Users size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Community Members Reached</span>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-light)', marginTop: '2px' }}>
                  {reach.toLocaleString()} <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>people</span>
                </h3>
              </div>
            </div>

            {/* Metric 2: Compliance */}
            <div className="glass-panel metric-card" style={{ borderColor: compliance > 90 ? 'var(--border-emerald)' : 'var(--border-light)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-cyan)' }}>
                <Activity size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '100%' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>TB Recovery/Treatment Compliance</span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-cyan)', marginLeft: 'auto' }}>{compliance}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '3px', marginTop: '8px', overflow: 'hidden' }}>
                  <div style={{ width: `${compliance}%`, height: '100%', backgroundColor: 'var(--color-cyan)', borderRadius: '3px', transition: 'width 0.4s ease-out' }} />
                </div>
              </div>
            </div>

            {/* Metric 3: Cognitive Boost */}
            <div className="glass-panel metric-card" style={{ borderColor: cognitiveBoost > 25 ? 'var(--border-cyan)' : 'var(--border-light)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-indigo)' }}>
                <BookOpen size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', width: '100%' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Early Childhood Cognitive Growth</span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-indigo)', marginLeft: 'auto' }}>+{cognitiveBoost}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '3px', marginTop: '8px', overflow: 'hidden' }}>
                  <div style={{ width: `${cognitiveBoost}%`, height: '100%', backgroundColor: 'var(--color-indigo)', borderRadius: '3px', transition: 'width 0.4s ease-out' }} />
                </div>
              </div>
            </div>

            {/* Metric 4: Caregivers Trained */}
            <div className="glass-panel metric-card" style={{ borderColor: caregiversTrained > 15 ? 'var(--border-emerald)' : 'var(--border-light)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-emerald)' }}>
                <GraduationCap size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Local Anganwadi Teachers Trained</span>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-light)', marginTop: '2px' }}>
                  {caregiversTrained} <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>workers</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: 'var(--color-emerald)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>ORGANIZATION CHRONOLOGY</span>
          <h2 style={{ color: 'var(--text-light)', fontSize: '32px', fontWeight: 800, marginTop: '8px' }}>Milestones & Achievements</h2>
        </div>

        <div className="timeline-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="timeline-line" />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  position: 'relative'
                }} className="timeline-row">
                  <style>{`
                    .timeline-left { text-align: right; width: 45%; }
                    .timeline-right { text-align: left; width: 45%; }
                    .timeline-badge {
                      width: 48px;
                      height: 48px;
                      border-radius: 50%;
                      background-color: var(--bg-secondary);
                      border: 2px solid var(--color-emerald);
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-weight: 700;
                      color: var(--color-emerald);
                      z-index: 2;
                      position: absolute;
                      left: 50%;
                      transform: translateX(-50%);
                    }
                    @media (max-width: 768px) {
                      .timeline-row {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        padding-left: 50px !important;
                      }
                      .timeline-left, .timeline-right {
                        width: 100% !important;
                        text-align: left !important;
                      }
                      .timeline-badge {
                        left: 24px !important;
                        transform: translateX(-50%) !important;
                        width: 38px !important;
                        height: 38px !important;
                        font-size: 12px !important;
                      }
                    }
                  `}</style>
                  
                  {isEven ? (
                    <>
                      <div className="timeline-left">
                        <div className="glass-panel" style={{ padding: '24px' }}>
                          <h4 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{m.title}</h4>
                          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{m.text}</p>
                        </div>
                      </div>
                      <div className="timeline-badge">{m.year}</div>
                      <div style={{ width: '45%' }} className="desktop-spacer" />
                    </>
                  ) : (
                    <>
                      <div style={{ width: '45%' }} className="desktop-spacer" />
                      <div className="timeline-badge">{m.year}</div>
                      <div className="timeline-right">
                        <div className="glass-panel" style={{ padding: '24px' }}>
                          <h4 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>{m.title}</h4>
                          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{m.text}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
