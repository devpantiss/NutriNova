import { useState, useRef } from 'react';
import { BookOpen, GraduationCap, CheckCircle2, Award, Calendar, BarChart, Heart, Sparkles, Laptop, Users, Activity, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AnganwadiTraining() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const curriculum = [
    { title: "Growth & BMI Tracking", desc: "Scientific monitoring of heights/weights, plotting growth curves, and identifying early stunting or wasting." },
    { title: "Early Childhood Pedagogy", desc: "Interactive game setups, story-telling skills, and digital aid usage to foster brain development." },
    { title: "Clinical Child Nutrition", desc: "Design of nutrient-dense menus using locally available, low-cost organic ingredients." },
    { title: "Community Hygiene & Care", desc: "Water safety protocols, personal sanitation guidelines, and advising pregnant or lactating mothers." }
  ];

  const outcomes = [
    "1000+ Workers and Sahayikas certified",
    "90% improvements in growth tracking accuracy",
    "350+ rural community centers actively mentored",
    "Measurable reduction in local nutritional default cases"
  ];

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Premium Cinematic Video Section */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '65vh',
        backgroundColor: '#07090e',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        >
          <source src="/aganwadi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Cinematic Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(7, 9, 14, 0.3) 0%, rgba(7, 9, 14, 0.7) 100%)',
          pointerEvents: 'none'
        }} />

        {/* Video Overlay Info / Floating Badge */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '5%',
          right: '5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 5
        }} className="video-overlay-details">
          <style>{`
            @media (max-width: 768px) {
              .video-overlay-details {
                flex-direction: column !important;
                align-items: flex-start !important;
                gap: 15px !important;
              }
            }
          `}</style>
          <div>
            <span style={{
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--color-emerald)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'inline-block',
              marginBottom: '10px',
              backdropFilter: 'blur(4px)'
            }}>
              Program Documentary
            </span>
            <h2 style={{
              color: '#fff',
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 800,
              margin: 0,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              Frontline Capacity Building in Action
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '14px',
              margin: '6px 0 0 0',
              maxWidth: '500px',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}>
              A look inside the training rooms where Anganwadi Workers and Sahayikas master modern healthcare protocols.
            </p>
          </div>

          {/* Interactive Mute Control */}
          <button
            onClick={toggleMute}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              backdropFilter: 'blur(8px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            title={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </section>

      {/* Hero Banner Section */}
      <section style={{
        position: 'relative',
        padding: '120px 0 60px 0',
        background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, transparent 100%)',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div className="glow-blur-emerald" style={{ top: '-10%', right: '30%', opacity: 0.18 }} />
        <div className="container">
          <Link to="/what-we-do" style={{
            color: 'var(--color-emerald)',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '16px',
            display: 'inline-block'
          }}>&larr; Back to What We Do</Link>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: 'var(--text-light)', marginBottom: '16px' }}>
            Anganwadi Training <span className="gradient-text">Program</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            Empowering rural caregivers, helpers, and school teachers with advanced growth monitoring and pedagogical tools.
          </p>
        </div>
      </section>

      {/* Target Audience & Training Model */}
      <section className="container" style={{ marginBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="split-grid">
          <style>{`
            @media (max-width: 768px) {
              .split-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
            }
          `}</style>

          {/* Model */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.08)', color: 'var(--color-emerald)', marginBottom: '20px' }}>
              <BookOpen size={24} />
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--text-light)', marginBottom: '14px', fontWeight: 700 }}>The Training Model</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '16px' }}>
              Our model blends scientific child health monitoring with interactive pedagogy. Rather than static workshops, we conduct active multi-phase training that combines digital-aided theory with real-time field evaluation.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.6 }}>
              Training is delivered on-site at district headquarters and through virtual learning modules directly accessible via mobile devices.
            </p>
          </div>

          {/* Target Audience */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '12px', backgroundColor: 'rgba(6, 182, 212, 0.08)', color: 'var(--color-cyan)', marginBottom: '20px' }}>
              <GraduationCap size={24} />
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--text-light)', marginBottom: '14px', fontWeight: 700 }}>Target Audience</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '16px' }}>
              Our capacity building programs are designed specifically for:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexType: 'column', flexDirection: 'column', gap: '10px' }}>
              {["Anganwadi Workers (Sevikas)", "Anganwadi Helpers (Sahayikas)", "Primary School Teachers", "Rural Child Health Volunteers"].map((aud, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-cyan)', flexShrink: 0 }} />
                  <span>{aud}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum Showcase */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: 'var(--text-light)', fontSize: '28px', fontWeight: 800 }}>Core Curriculum Modules</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '8px' }}>Designed in collaboration with pediatric health specialists and childhood educators.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="curriculum-grid">
            <style>{`
              @media (max-width: 768px) {
                .curriculum-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
            {curriculum.map((curr, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '30px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--color-emerald)',
                  flexShrink: 0
                }}>
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '18px', marginBottom: '8px', fontWeight: 600 }}>{curr.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{curr.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Certification & Success Story */}
      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }} className="split-grid">
          {/* Certification & Outcomes */}
          <div>
            <h3 style={{ fontSize: '22px', color: 'var(--text-light)', fontWeight: 800, marginBottom: '24px' }}>Certification & Outcomes</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Award size={24} style={{ color: 'var(--color-emerald)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>Process & Evaluation</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    Each module features hands-on practical assessments. Caregivers who pass the baseline checks receive a formal Government-recognized certification and access to follow-up mentorship circles.
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <BarChart size={24} style={{ color: 'var(--color-cyan)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>Proven Benchmarks</h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {outcomes.map((ot, i) => (
                      <li key={i} style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-cyan)' }} />
                        <span>{ot}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Success Narrative */}
          <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--text-light)', marginBottom: '16px', fontWeight: 700 }}>Voices from the Classroom</h3>
            <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '20px', color: 'var(--text-primary)' }}>
              "Before the training, child monitoring was mostly paperwork and estimates. The lessons on anthropometric plotting helped me map child stunting metrics accurately. The kids love the modern storytelling methods we were taught. Our daily center attendance has increased by 40%."
            </p>
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
              <h5 style={{ color: 'var(--text-light)', fontSize: '15px' }}>Anjali Sharma</h5>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Certified Anganwadi Sevika, North 24 Parganas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section: Empowering Frontline Workers */}
      <section className="container" style={{ marginTop: '80px', marginBottom: '40px' }}>
        <div className="showcase-split-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <style>{`
            .showcase-split-grid {
              display: grid !important;
            }
            @media (max-width: 992px) {
              .showcase-split-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
              .showcase-image-order {
                order: -1;
              }
            }
            .feature-hover-card {
              transition: all 0.3s ease;
            }
            .feature-hover-card:hover {
              transform: translateY(-2px);
              border-color: rgba(16, 185, 129, 0.2) !important;
              background-color: rgba(16, 185, 129, 0.02) !important;
            }
          `}</style>

          {/* Large Showcase Image with Fade-in Effect */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="showcase-image-order"
            style={{ width: '100%', position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-medium)',
              aspectRatio: '4/3'
            }}>
              <img
                src="/aganwadi.jpeg"
                alt="Anganwadi Workers and Sahayikas Training Session"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(7, 9, 14, 0.6) 0%, transparent 60%)',
                pointerEvents: 'none'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-emerald)',
                  boxShadow: '0 0 10px var(--color-emerald)'
                }} />
                <span style={{ fontSize: '13px', color: '#fff', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                  Live Interactive Workshop
                </span>
              </div>
            </div>
          </motion.div>

          {/* Info Content Block with Smooth Text Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div>
              <span style={{
                color: 'var(--color-emerald)',
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                display: 'block',
                marginBottom: '8px'
              }}>
                Frontline Impact
              </span>
              <h2 style={{
                fontSize: 'clamp(26px, 4vw, 36px)',
                fontWeight: 800,
                color: 'var(--text-light)',
                lineHeight: 1.2,
                margin: 0
              }}>
                Empowering <span className="gradient-text">Frontline Workers</span>
              </h2>
              <p style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginTop: '12px',
                marginRight: '10px'
              }}>
                Our program equips Anganwadi Workers and Sahayikas with the vital capabilities and practical toolkits required to lead community-wide pediatric development, child growth tracking, and baseline sanitation practices.
              </p>
            </div>

            {/* Showcase Features Grid (6 Items) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }} className="features-subgrid">
              <style>{`
                @media (max-width: 480px) {
                  .features-subgrid {
                    grid-template-columns: 1fr !important;
                    gap: 12px !important;
                  }
                }
              `}</style>
              {[
                { title: "Capacity Building", desc: "Structured multi-phase workshops covering health & nutrition parameters.", icon: GraduationCap },
                { title: "Nutrition Awareness", desc: "Deep clinical insights to design balanced, locally sourced meals.", icon: Heart },
                { title: "Child Development", desc: "Implementing cognitive learning games & motor skills exercises.", icon: Sparkles },
                { title: "Digital Skills", desc: "Mobile-first data recording and digital metrics tracking.", icon: Laptop },
                { title: "Community Leadership", desc: "Fostering local ownership of hygiene education and water safety.", icon: Users },
                { title: "Improved Outcomes", desc: "Direct reduction in developmental stunting and nutritional defaults.", icon: Activity }
              ].map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel feature-hover-card"
                    style={{
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      border: '1px solid var(--border-light)',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.01)'
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(16, 185, 129, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-emerald)'
                    }}>
                      <FeatIcon size={16} />
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'var(--text-light)',
                        marginBottom: '4px'
                      }}>{feat.title}</h4>
                      <p style={{
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.4,
                        margin: 0
                      }}>{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
