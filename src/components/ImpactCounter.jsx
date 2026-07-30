import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Users, Smile, Compass } from 'lucide-react';

function CounterItem({ targetValue, suffix = '', label, icon: Icon, isNumeric = true, textValue = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!isNumeric) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const end = parseInt(targetValue, 10);
          const duration = 2000; // ms
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, isNumeric]);

  return (
    <div
      ref={elementRef}
      className="glass-panel"
      style={{
        padding: '30px 24px',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Icon Indicator */}
      <div style={{
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-emerald)',
        marginBottom: '16px'
      }}>
        <Icon size={20} />
      </div>

      {/* Counter Value */}
      <h3 style={{
        fontSize: 'clamp(28px, 4.5vw, 44px)',
        fontWeight: 800,
        fontFamily: 'var(--font-heading)',
        color: 'var(--text-light)',
        marginBottom: '8px',
        lineHeight: 1
      }}>
        <span className="gradient-text">
          {isNumeric ? `${count}${suffix}` : textValue}
        </span>
      </h3>

      {/* Label */}
      <p style={{
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--text-secondary)'
      }}>{label}</p>
    </div>
  );
}

export default function ImpactCounter() {
  const stats = [
    {
      targetValue: "500",
      suffix: "+",
      label: "TB Patients Supported",
      icon: ShieldCheck,
      isNumeric: true
    },
    {
      targetValue: "1000",
      suffix: "+",
      label: "Anganwadi Workers Trained",
      icon: Users,
      isNumeric: true
    },
    {
      targetValue: "",
      textValue: "Thousands",
      label: "Children Benefited",
      icon: Smile,
      isNumeric: false
    },
    {
      targetValue: "",
      textValue: "AI-Powered",
      label: "Learning Solutions",
      icon: Compass,
      isNumeric: false
    }
  ];

  return (
    <section style={{
      position: 'relative',
      padding: '60px 0',
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px'
        }} className="counter-grid">
          <style>{`
            @media (max-width: 1024px) {
              .counter-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 20px !important;
              }
            }
            @media (max-width: 520px) {
              .counter-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
          {stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              targetValue={stat.targetValue}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              isNumeric={stat.isNumeric}
              textValue={stat.textValue}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
