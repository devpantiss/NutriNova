import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Play, X } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [activeMedia, setActiveMedia] = useState(null);

  const categories = [
    { id: 'all', label: 'All Media' },
    { id: 'photos', label: 'Photos' },
    { id: 'videos', label: 'Videos' },
    { id: 'training', label: 'Training Sessions' },
    { id: 'community', label: 'Community Activities' }
  ];

  const items = [
    {
      id: 1,
      type: 'photo',
      category: 'training',
      url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80",
      title: "Worker Pedagogical Seminar",
      desc: "Anganwadi workers learn cognitive game integration."
    },
    {
      id: 2,
      type: 'photo',
      category: 'community',
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      title: "Nutrition Basket Logistics",
      desc: "Distributing protein basket packages to TB patients."
    },
    {
      id: 3,
      type: 'photo',
      category: 'training',
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      title: "Smart Classroom Launch",
      desc: "Introducing children to interactive tablet systems."
    },
    {
      id: 4,
      type: 'video',
      category: 'videos',
      url: "/videos/posters/home-hero.jpg",
      videoUrl: "/videos/home-hero.mp4",
      title: "A Day at the Anganwadi",
      desc: "Children arriving for early learning activities at an Anganwadi centre."
    },
    {
      id: 5,
      type: 'photo',
      category: 'community',
      url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      title: "Outreach Growth Checkups",
      desc: "Pediatric growth mapping and height index recordings."
    },
    {
      id: 6,
      type: 'video',
      category: 'videos',
      url: "/videos/posters/nutrition-basket-hero.jpg",
      videoUrl: "/videos/nutrition-basket-hero.mp4",
      title: "Packing Nutrition Baskets",
      desc: "Volunteers packing high-protein nutrition baskets for TB patients."
    }
  ];

  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter || item.type === filter);

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
        <div className="glow-blur-cyan" style={{ top: '-10%', right: '30%', opacity: 0.18 }} />
        <div className="container">
          <span style={{ color: 'var(--color-cyan)', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>MEDIA HUB</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: 'var(--text-light)', marginTop: '8px' }}>
            Media & Event <span className="gradient-text-tech">Gallery</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '16px auto 0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            Insights into our training seminars, nutritional drives, and on-ground digital classroom deployments.
          </p>
        </div>
      </section>

      {/* Filter Management */}
      <section className="container" style={{ marginBottom: '40px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className="btn"
              style={{
                padding: '8px 20px',
                fontSize: '14px',
                backgroundColor: filter === cat.id ? 'var(--color-emerald)' : 'var(--bg-card)',
                color: filter === cat.id ? 'var(--text-bright)' : 'var(--text-secondary)',
                border: filter === cat.id ? '1px solid var(--color-emerald)' : '1px solid var(--border-light)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="container">
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}
          className="gallery-grid"
        >
          <style>{`
            @media (max-width: 900px) {
              .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 520px) {
              .gallery-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={() => setActiveMedia(item)}
              >
                {/* Visual Area */}
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', lineHeight: 0 }}>
                  <img
                    src={item.url}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-smooth)' }}
                    className="gallery-zoom"
                  />
                  <style>{`
                    .gallery-zoom:hover { transform: scale(1.08); }
                  `}</style>
                  
                  {/* Category Tag */}
                  <span style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(7, 9, 14, 0.8)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--color-cyan)',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '3px 8px',
                    lineHeight: 1.4,
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase',
                    zIndex: 2
                  }}>{item.category}</span>

                  {/* Play / View Overlay Icon */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(7, 9, 14, 0.75)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    zIndex: 2
                  }}>
                    {item.type === 'video' ? <Play size={20} fill="#fff" /> : <Eye size={20} />}
                  </div>
                </div>

                {/* Footer Metadata */}
                <div style={{ padding: '16px 20px', textAlign: 'left' }}>
                  <h4 style={{ color: 'var(--text-light)', fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>{item.title}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox / Video Player Modal */}
      <AnimatePresence>
        {activeMedia && (
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
            onClick={() => setActiveMedia(null)}
          >
            {/* Close Trigger */}
            <button
              onClick={() => setActiveMedia(null)}
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
                transition: 'var(--transition-smooth)',
                zIndex: 2010
              }}
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              style={{
                maxWidth: '850px',
                width: '100%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeMedia.type === 'video' ? (
                <video
                  src={activeMedia.videoUrl}
                  poster={activeMedia.url}
                  autoPlay
                  controls
                  playsInline
                  style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', backgroundColor: '#000', display: 'block' }}
                />
              ) : (
                <img
                  src={activeMedia.url}
                  alt={activeMedia.title}
                  style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', backgroundColor: '#000', display: 'block' }}
                />
              )}
              
              <div style={{ padding: '24px' }}>
                <span style={{
                  color: 'var(--color-cyan)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '4px'
                }}>{activeMedia.category} &bull; {activeMedia.type}</span>
                <h3 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>{activeMedia.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>{activeMedia.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
