import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Layout, Sparkles, Gamepad2, Layers, RefreshCw, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIAnganwadi() {
  // Mini Memory Game State
  const initialCards = [
    { id: 1, symbol: '🍎', name: 'Apple', matched: false },
    { id: 2, symbol: '🧠', name: 'Brain', matched: false },
    { id: 3, symbol: '🤖', name: 'AI Robot', matched: false },
    { id: 4, symbol: '🥛', name: 'Milk', matched: false },
    { id: 5, symbol: '🍎', name: 'Apple', matched: false },
    { id: 6, symbol: '🧠', name: 'Brain', matched: false },
    { id: 7, symbol: '🤖', name: 'AI Robot', matched: false },
    { id: 8, symbol: '🥛', name: 'Milk', matched: false }
  ];

  const [cards, setCards] = useState(() => {
    const defaultCards = [
      { id: 1, symbol: '🍎', name: 'Apple', matched: false },
      { id: 2, symbol: '🧠', name: 'Brain', matched: false },
      { id: 3, symbol: '🤖', name: 'AI Robot', matched: false },
      { id: 4, symbol: '🥛', name: 'Milk', matched: false },
      { id: 5, symbol: '🍎', name: 'Apple', matched: false },
      { id: 6, symbol: '🧠', name: 'Brain', matched: false },
      { id: 7, symbol: '🤖', name: 'AI Robot', matched: false },
      { id: 8, symbol: '🥛', name: 'Milk', matched: false }
    ];
    return [...defaultCards]
      .sort(() => Math.random() - 0.5)
      .map((card, idx) => ({ ...card, uniqueId: idx, flipped: false }));
  });
  const [selected, setSelected] = useState([]);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  // Shuffle Cards for Reset
  const shuffleCards = () => {
    const shuffled = [...initialCards]
      .sort(() => Math.random() - 0.5)
      .map((card, idx) => ({ ...card, uniqueId: idx, flipped: false }));
    setCards(shuffled);
    setSelected([]);
    setMatches(0);
    setMoves(0);
    setWon(false);
  };

  const handleCardClick = (clickedCard) => {
    if (won || selected.length >= 2 || clickedCard.flipped || clickedCard.matched) return;

    // Flip the clicked card
    const updatedCards = cards.map(c =>
      c.uniqueId === clickedCard.uniqueId ? { ...c, flipped: true } : c
    );
    setCards(updatedCards);

    const newSelected = [...selected, clickedCard];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setMoves(prev => prev + 1);
      const [first, second] = newSelected;

      if (first.id === second.id) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.id === first.id ? { ...c, matched: true, flipped: true } : c
          ));
          setMatches(prev => {
            const next = prev + 1;
            if (next === 4) setWon(true);
            return next;
          });
          setSelected([]);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.uniqueId === first.uniqueId || c.uniqueId === second.uniqueId
              ? { ...c, flipped: false }
              : c
          ));
          setSelected([]);
        }, 1000);
      }
    }
  };

  const roadmap = [
    { period: "Phase 1: Foundation", title: "Localized Interactive Audio", text: "Deploying voice systems in regional dialects (Bengali, Hindi) for low-literacy learning environments." },
    { period: "Phase 2: AR Integration", title: "Augmented Flashcards", text: "Distributing printable flashcards that project interactive 3D animals, foods, and letters using mobile AR cams." },
    { period: "Phase 3: Edge Offline AI", title: "Offline Smart Boards", text: "Packaging interactive systems to run completely offline without cellular connections on microcomputer boards." }
  ];

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Hero Banner Section */}
      <section style={{
        position: 'relative',
        padding: '120px 0 60px 0',
        background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.1) 0%, transparent 100%)',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        <div className="glow-blur-cyan" style={{ top: '-10%', left: '30%', opacity: 0.2 }} />
        <div className="container">
          <Link to="/what-we-do" style={{
            color: 'var(--color-cyan)',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '16px',
            display: 'inline-block'
          }}>&larr; Back to What We Do</Link>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, color: 'var(--text-light)', marginBottom: '16px' }}>
            AI Anganwadi <span className="gradient-text-tech">Project</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            Creating an augmented learning ecosystem combining voice AI, immersive interfaces, and cognitive growth tools.
          </p>
        </div>
      </section>

      {/* Technological Pillars Grid */}
      <section className="container" style={{ marginBottom: '65px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="pillars-grid">
          <style>{`
            @media (max-width: 1024px) {
              .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 520px) {
              .pillars-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>

          {[
            { title: "Voice AI Models", icon: Cpu, text: "Bilingual voice models translating learning triggers into native languages." },
            { title: "AR / VR Modules", icon: Sparkles, text: "Immersive lessons projecting 3D biology, geography, and nutrition models." },
            { title: "Smart Setups", icon: Layout, text: "Robust, low-cost micro-displays and boards optimized for rural rooms." },
            { title: "Cognitive Toys", icon: Gamepad2, text: "Physical sensory blocks communicating with local software dashboards." }
          ].map((pill, i) => {
            const PillIcon = pill.icon;
            return (
              <div key={i} className="glass-panel" style={{ padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ color: 'var(--color-cyan)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <PillIcon size={28} />
                </div>
                <h4 style={{ color: 'var(--text-light)', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{pill.title}</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{pill.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Memory Game: Demonstrating cognitive toys */}
      <section style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '60px 0',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        marginBottom: '65px'
      }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{
              color: 'var(--color-cyan)',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '6px'
            }}>Cognitive Development Sandbox</span>
            <h2 style={{ color: 'var(--text-light)', fontSize: '26px', fontWeight: 800 }}>Brain Boost Matching Game</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '6px' }}>
              Experience a live sample of the gamified memory puzzles we deploy in our AI Smart Board setups.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '30px', position: 'relative' }}>
            {/* Stats Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '14px', fontWeight: 600 }}>
              <span>Moves: <span style={{ color: 'var(--color-cyan)' }}>{moves}</span></span>
              <span>Matches: <span style={{ color: 'var(--color-cyan)' }}>{matches}/4</span></span>
              <button
                onClick={shuffleCards}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-cyan)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 600
                }}
              >
                <RefreshCw size={14} /> Restart
              </button>
            </div>

            {/* Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              maxWidth: '360px',
              margin: '0 auto'
            }}>
              {cards.map((card) => (
                <div
                  key={card.uniqueId}
                  onClick={() => handleCardClick(card)}
                  style={{
                    aspectRatio: '1',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    perspective: '1000px',
                    position: 'relative',
                    transition: 'transform 0.6s'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px',
                    transition: 'transform 0.4s',
                    transformStyle: 'preserve-3d',
                    position: 'absolute',
                    transform: (card.flipped || card.matched) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}>
                    {/* Front Side (Flipped/Matched symbol) */}
                    <div style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      backgroundColor: card.matched ? 'rgba(102, 187, 106, 0.15)' : 'var(--bg-card)',
                      border: card.matched ? '1px solid var(--color-cyan)' : '1px solid var(--border-medium)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      transform: 'rotateY(180deg)'
                    }}>
                      {card.symbol}
                    </div>

                    {/* Back Side (Unflipped default card) */}
                    <div style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-cyan)'
                    }}>
                      <Layers size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Winning Message overlay */}
            <AnimatePresence>
              {won && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(7, 9, 14, 0.95)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    zIndex: 10
                  }}
                >
                  <Trophy size={48} style={{ color: 'var(--color-cyan)', marginBottom: '12px' }} />
                  <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>Cognitive Boost Unlocked!</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', textAlign: 'center' }}>
                    You completed the sandbox test in {moves} moves. This model forms the core of our early pattern matching modules.
                  </p>
                  <button onClick={shuffleCards} className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                    Play Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <h2 style={{ color: 'var(--text-light)', fontSize: '28px', fontWeight: 800 }}>Project Roadmap</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '8px' }}>Steps toward deploying AI cognitive environments across 500+ clinics.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {roadmap.map((map, idx) => (
            <div key={idx} className="glass-panel roadmap-card" style={{
              padding: '30px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px',
              borderLeft: '4px solid var(--color-cyan)'
            }}>
              <style>{`
                .roadmap-card {
                  display: flex !important;
                  gap: 20px !important;
                }
                @media (max-width: 640px) {
                  .roadmap-card {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                  }
                }
              `}</style>
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--color-cyan)',
                backgroundColor: 'rgba(6, 182, 212, 0.08)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}>{map.period}</div>
              <div>
                <h4 style={{ color: 'var(--text-light)', fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>{map.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{map.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
