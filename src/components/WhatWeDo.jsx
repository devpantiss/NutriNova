import { motion } from 'framer-motion';
import { Apple, GraduationCap, Cpu } from 'lucide-react';
import ProgramCard from './ProgramCard';

export default function WhatWeDo() {
  const initiatives = [
    {
      title: "Nutrition Basket Program",
      description: "Support for TB patients through nutrient-dense supplemental baskets containing vital daily essentials.",
      items: [
        "Cereals & Millets",
        "Pulses & Edible Oil",
        "Milk Powder",
        "Groundnuts & Soya Chunks"
      ],
      icon: Apple,
      link: "/what-we-do/nutrition-basket",
      badge: "Nutrition",
      glowColor: "emerald"
    },
    {
      title: "Anganwadi Training Program",
      description: "Capacity building and pedagogical training for Anganwadi workers, Sahayikas, and teachers.",
      items: [
        "Growth Monitoring Methods",
        "Early Childhood Education",
        "Child Nutrition Basics",
        "Health & Hygiene Awareness"
      ],
      icon: GraduationCap,
      link: "/what-we-do/anganwadi-training",
      badge: "Empowerment",
      glowColor: "emerald"
    },
    {
      title: "AI Anganwadi Project",
      description: "Empowering early childhood development through smart boards, AR/VR tools, and digital play.",
      items: [
        "Artificial Intelligence & AR",
        "Smart Classroom Tech",
        "Brain Development Activities",
        "Interactive Educational Games"
      ],
      icon: Cpu,
      link: "/what-we-do/ai-anganwadi",
      badge: "AI & Tech",
      glowColor: "cyan"
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-primary)' }}>
      {/* Soft Glow overlay */}
      <div className="glow-blur-cyan" style={{ bottom: '10%', left: '40%', opacity: 0.2 }} />
      <div className="glow-blur-emerald" style={{ top: '10%', right: '-10%', opacity: 0.2 }} />

      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              color: 'var(--color-emerald)',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              display: 'block'
            }}
          >
            Our Initiatives
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--text-light)',
              fontWeight: 800
            }}
          >
            Empowering Communities Through <span className="gradient-text">Core Initiatives</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '16px auto 0 auto'
            }}
          >
            We deploy technology, high-quality nutrition, and pedagogical training to create deep community impact.
          </motion.p>
        </div>

        {/* Card Grid */}
        <div className="grid-3">
          {initiatives.map((prog, index) => (
            <ProgramCard
              key={index}
              title={prog.title}
              description={prog.description}
              items={prog.items}
              icon={prog.icon}
              link={prog.link}
              badge={prog.badge}
              glowColor={prog.glowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
