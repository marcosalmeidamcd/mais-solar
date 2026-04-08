import { useRef, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Zap, Leaf, TrendingDown } from 'lucide-react';
import SolarScene from '../3d/SolarScene';

const badges = [
  { icon: Zap, text: 'Energia Limpa' },
  { icon: Leaf, text: 'Sustentabilidade' },
  { icon: TrendingDown, text: 'Economia Real' },
];

export default function Hero() {
  const handleCTA = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        /*
         * Atmospheric gradient — top to bottom:
         * #03080f  ← espaço / exosfera
         * #060f1e  ← termosfera
         * #091828  ← mesosfera
         * #0a2848  ← estratosfera superior
         * #0d4878  ← estratosfera inferior
         * #0f6aaa  ← troposfera superior
         * #1a7ab8  ← troposfera / superfície (cor da marca)
         */
        background: `linear-gradient(
          to bottom,
          #03080f   0%,
          #060f1e   8%,
          #091828  18%,
          #0a2848  32%,
          #0d4878  52%,
          #0f6aaa  72%,
          #1a7ab8 100%
        )`,
        position: 'relative',
        overflow: 'clip',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Subtle star field at the top */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(1px 1px at 15% 8%, rgba(255,255,255,0.7) 0%, transparent 100%), radial-gradient(1px 1px at 42% 4%, rgba(255,255,255,0.6) 0%, transparent 100%), radial-gradient(1px 1px at 68% 6%, rgba(255,255,255,0.8) 0%, transparent 100%), radial-gradient(1px 1px at 88% 3%, rgba(255,255,255,0.5) 0%, transparent 100%), radial-gradient(1px 1px at 25% 12%, rgba(255,255,255,0.4) 0%, transparent 100%), radial-gradient(1px 1px at 55% 10%, rgba(255,255,255,0.6) 0%, transparent 100%), radial-gradient(1px 1px at 78% 14%, rgba(255,255,255,0.5) 0%, transparent 100%), radial-gradient(1px 1px at 5% 18%, rgba(255,255,255,0.4) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 35% 7%, rgba(255,255,255,0.9) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 92% 11%, rgba(255,255,255,0.7) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Atmospheric glow layers */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '45%',
        background: 'radial-gradient(ellipse 80% 60% at 70% 10%, rgba(100,180,255,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
        background: 'linear-gradient(to top, rgba(26,122,184,0.35) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Sun glow (upper right, where the 3D scene is) */}
      <div style={{
        position: 'absolute', top: '5%', right: '8%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(245,166,35,0.14) 0%, rgba(245,166,35,0.04) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div className="section-container hero-grid" style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '2rem',
        paddingTop: '6rem',
        paddingBottom: '2rem',
      }}>
        {/* Left: Text */}
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Energia que{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F5A623, #FFD080)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              transforma
            </span>
            {' '}vidas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: 500,
            }}
          >
            Mais de 150 projetos entregues em Goiás com excelência. Reduza sua conta de energia em até 95% e faça parte da revolução solar.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-badges" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
          >
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 8, padding: '0.4rem 0.85rem',
                }}
              >
                <Icon size={14} color="#F5A623" />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 500 }}>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-ctas" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(245,166,35,0.45)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCTA('contact')}
              style={{
                background: 'linear-gradient(135deg, #F5A623, #E08A00)',
                color: 'white', border: 'none', borderRadius: 12,
                padding: '0.9rem 2rem', fontSize: '1rem', fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
                boxShadow: '0 4px 20px rgba(245,166,35,0.3)',
              }}
            >
              Orçamento Gratuito
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCTA('projects')}
              style={{
                background: 'transparent',
                color: 'white', border: '1.5px solid rgba(255,255,255,0.25)',
                borderRadius: 12, padding: '0.9rem 2rem', fontSize: '1rem', fontWeight: 600,
                cursor: 'pointer', fontFamily: 'var(--font-sans)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Ver Projetos
            </motion.button>
          </motion.div>
        </div>

        {/* Right: 3D Scene */}
        <motion.div
          className="hero-3d"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ height: 560, position: 'relative', overflow: 'visible' }}
        >
          <Suspense fallback={
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
              Carregando cena 3D...
            </div>
          }>
            <SolarScene />
          </Suspense>

          {/* Floating info card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            style={{
              position: 'absolute', bottom: 60, left: -20,
              background: 'rgba(7,40,64,0.92)',
              border: '1px solid rgba(245,166,35,0.35)',
              borderRadius: 16, padding: '1rem 1.25rem',
              backdropFilter: 'blur(16px)',
              minWidth: 170,
            }}
          >
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Economia média</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F5A623', fontFamily: 'var(--font-display)', lineHeight: 1 }}>95%</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.2rem' }}>na conta de luz</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            style={{
              position: 'absolute', top: 40, right: -10,
              background: 'rgba(7,40,64,0.92)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 16, padding: '1rem 1.25rem',
              backdropFilter: 'blur(16px)',
              minWidth: 155,
            }}
          >
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Projetos</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F5A623', fontFamily: 'var(--font-display)', lineHeight: 1 }}>150+</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.2rem' }}>instalações ativas</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        onClick={() => handleCTA('stats')}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.4rem', paddingBottom: '2rem', cursor: 'pointer',
          color: 'rgba(255,255,255,0.35)',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={18} />
      </motion.div>

      {/* Smooth fade into the next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 120,
        background: 'linear-gradient(to bottom, transparent 0%, #1a7ab8 100%)',
        pointerEvents: 'none',
      }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @media (max-width: 768px) {
          #home .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 5rem !important;
            padding-bottom: 1rem !important;
          }
          #home .hero-3d {
            display: none !important;
          }
          #home .hero-text {
            text-align: center;
          }
          #home .hero-text p {
            margin-left: auto;
            margin-right: auto;
          }
          #home .hero-badges {
            justify-content: center !important;
          }
          #home .hero-ctas {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
