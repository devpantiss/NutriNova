import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      quote: "The interactive digital tools and smart classroom kits have completely transformed how our children learn. They are excited to come to school every day and participate in early development games.",
      author: "Anjali Sharma",
      role: "Anganwadi Worker",
      location: "North 24 Parganas, WB"
    },
    {
      quote: "NutriNova's targeted supplemental baskets have been a lifesaver. The mix of cereals, millets, and milk powder gave me the energy and strength to recover steadily from tuberculosis.",
      author: "Rajesh Kisku",
      role: "Nutrition Basket Beneficiary",
      location: "Purulia, WB"
    },
    {
      quote: "The teacher capacity training programs gave us practical, scientific insights into early child psychology, growth monitoring, and interactive learning methodologies that actually work.",
      author: "Preeti Adhikary",
      role: "Primary School Teacher",
      location: "Kolkata, WB"
    }
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)' }}>
      {/* Glow Blur */}
      <div className="glow-blur-emerald" style={{ top: '-10%', right: '20%', opacity: 0.15 }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            color: 'var(--color-emerald)',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px',
            display: 'block'
          }}>Community Voices</span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            color: 'var(--text-light)',
            fontWeight: 800
          }}>Stories Of <span className="gradient-text">Transformation</span></h2>
        </div>

        {/* Carousel Box */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          padding: '0 40px'
        }}>
          {/* Quote Icon */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'rgba(16, 185, 129, 0.12)',
            marginBottom: '-20px'
          }}>
            <Quote size={80} strokeWidth={3} />
          </div>

          <div style={{ minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                style={{ textAlign: 'center' }}
              >
                <p style={{
                  fontSize: 'clamp(16px, 2.5vw, 20px)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  marginBottom: '28px',
                  fontWeight: 500
                }}>
                  "{testimonials[index].quote}"
                </p>
                <div>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, marginBottom: '2px' }}>
                    {testimonials[index].author}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-emerald)', fontWeight: 600 }}>
                    {testimonials[index].role} &bull; <span style={{ color: 'var(--text-muted)' }}>{testimonials[index].location}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '-10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-emerald)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-light)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '-10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-light)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-emerald)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-light)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Pagination Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '36px'
          }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                style={{
                  width: idx === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: idx === index ? 'var(--color-emerald)' : 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
