import { Shield, Activity, GraduationCap, Compass, Sparkles, Heart } from 'lucide-react';

export default function Partners() {
  const partners = [
    { name: "TechForGood", icon: Compass },
    { name: "HealthTrust", icon: Shield },
    { name: "EcoNutrition", icon: Heart },
    { name: "RuralEmpower", icon: GraduationCap },
    { name: "AILabs", icon: Sparkles },
    { name: "MediCore", icon: Activity }
  ];

  // Double the partners to create a seamless infinite loop
  const doublePartners = [...partners, ...partners];

  return (
    <section className="section-padding" style={{
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-light)'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '8px'
          }}>Supported By Leading Organizations</p>
        </div>

        {/* Marquee track */}
        <div className="marquee-container">
          <div className="marquee-content">
            {doublePartners.map((partner, index) => {
              const PartnerIcon = partner.icon;
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-light)',
                    padding: '12px 28px',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: '16px'
                  }}
                >
                  <PartnerIcon size={20} style={{ color: 'var(--color-emerald)' }} />
                  <span>{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
