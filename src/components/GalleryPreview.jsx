import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GalleryPreview() {
  const [activeImg, setActiveImg] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      caption: "Smart Classroom Learning",
      category: "Education"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      caption: "Healthcare Checkups",
      category: "Healthcare"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      caption: "Supplemental Food Distribution",
      category: "Nutrition"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      caption: "Anganwadi Interactive Play",
      category: "Education"
    }
  ];

  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '40px'
        }} className="gallery-preview-header">
          <style>{`
            @media (max-width: 640px) {
              .gallery-preview-header {
                flex-direction: column !important;
                align-items: flex-start !important;
                gap: 20px !important;
              }
            }
          `}</style>
          <div>
            <span style={{
              color: 'var(--color-emerald)',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              display: 'block'
            }}>Media Hub</span>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              color: 'var(--text-light)',
              fontWeight: 800
            }}>Our Field Work <span className="gradient-text-tech">In Action</span></h2>
          </div>
          <Link to="/gallery" className="btn btn-secondary" style={{ display: 'inline-flex', gap: '8px' }}>
            Open Media Gallery <ArrowRight size={16} />
          </Link>
        </div>

        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }} className="gallery-grid-preview">
          <style>{`
            @media (max-width: 1024px) {
              .gallery-grid-preview {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 520px) {
              .gallery-grid-preview {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>

          {images.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: '4/3',
                border: '1px solid var(--border-light)'
              }}
              onClick={() => setActiveImg(img)}
            >
              {/* Image */}
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'var(--transition-smooth)'
                }}
                className="gallery-image-hover"
              />
              <style>{`
                .gallery-image-hover:hover {
                  transform: scale(1.08);
                }
              `}</style>

              {/* Hover Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 30%, rgba(7, 9, 14, 0.9) 100%)',
                opacity: 0,
                transition: 'var(--transition-smooth)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '20px',
                zIndex: 2
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  width: '100%'
                }}>
                  <div>
                    <span style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid var(--border-emerald)',
                      color: 'var(--color-emerald)',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-full)',
                      display: 'inline-block',
                      marginBottom: '8px',
                      textTransform: 'uppercase'
                    }}>{img.category}</span>
                    <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>{img.caption}</h4>
                  </div>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}>
                    <Eye size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(7, 9, 14, 0.95)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setActiveImg(null)}
          >
            <button
              onClick={() => setActiveImg(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-light)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              style={{
                maxWidth: '900px',
                width: '100%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImg.url}
                alt={activeImg.caption}
                style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', display: 'block', margin: '0 auto', backgroundColor: '#000' }}
              />
              <div style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)' }}>
                <span style={{
                  color: 'var(--color-emerald)',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                  display: 'block'
                }}>{activeImg.category}</span>
                <h3 style={{ color: 'var(--text-light)', fontSize: '20px', fontWeight: 700 }}>{activeImg.caption}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
