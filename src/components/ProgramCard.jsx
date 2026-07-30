import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion as motionFramer } from 'framer-motion';

export default function ProgramCard({ title, description, items, icon: Icon, link, badge, glowColor }) {
  return (
    <motionFramer.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      style={{ display: 'flex' }}
    >
      <div 
        className="glass-panel"
        style={{
          padding: '40px 32px',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = glowColor === 'emerald' ? 'var(--border-emerald)' : 'var(--border-cyan)';
          e.currentTarget.style.boxShadow = glowColor === 'emerald' ? 'var(--shadow-glow)' : 'var(--shadow-glow-cyan)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-light)';
          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        }}
      >
        {/* Badge */}
        {badge && (
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            backgroundColor: glowColor === 'emerald' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(6, 182, 212, 0.08)',
            border: glowColor === 'emerald' ? '1px solid var(--border-emerald)' : '1px solid var(--border-cyan)',
            padding: '4px 10px',
            borderRadius: 'var(--radius-full)',
            fontSize: '11px',
            fontWeight: 700,
            color: glowColor === 'emerald' ? 'var(--color-emerald)' : 'var(--color-cyan)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Sparkles size={10} /> {badge}
          </div>
        )}

        {/* Card Content Top */}
        <div>
          {/* Glowing Icon Wrapper */}
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: glowColor === 'emerald' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(6, 182, 212, 0.1)',
            border: glowColor === 'emerald' ? '1px solid var(--border-emerald)' : '1px solid var(--border-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '28px',
            color: glowColor === 'emerald' ? 'var(--color-emerald)' : 'var(--color-cyan)'
          }}>
            <Icon size={24} strokeWidth={2} />
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: '22px',
            color: 'var(--text-light)',
            marginBottom: '14px',
            fontWeight: 700
          }}>{title}</h3>

          {/* Description */}
          <p style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '24px'
          }}>{description}</p>

          {/* Items checklist */}
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '36px'
          }}>
            {items.map((item, index) => (
              <li key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px',
                color: 'var(--text-primary)'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: glowColor === 'emerald' ? 'var(--color-emerald)' : 'var(--color-cyan)'
                }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            to={link}
            className={`btn ${glowColor === 'emerald' ? 'btn-outline-emerald' : 'btn-outline-cyan'}`}
            style={{ width: '100%', padding: '10px 0', fontSize: '14px' }}
          >
            Learn More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motionFramer.div>
  );
}
