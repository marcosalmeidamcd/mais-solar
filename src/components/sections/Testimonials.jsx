import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/siteData';

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={14} fill={i < rating ? '#F5A623' : 'transparent'} color="#F5A623" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(135deg, #083d60 0%, #1a7ab8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 500, height: 500, borderRadius: '50%',
        background: 'rgba(245,166,35,0.05)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 350, height: 350, borderRadius: '50%',
        background: 'rgba(0,201,255,0.04)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(245,166,35,0.15)',
            color: '#F5A623',
            borderRadius: 100, padding: '0.35rem 1rem',
            fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em',
            textTransform: 'uppercase', marginBottom: '1rem',
          }}>
            Depoimentos
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 800, color: 'white',
            lineHeight: 1.2, letterSpacing: '-0.02em',
          }}>
            O que nossos clientes dizem
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 24, padding: 'clamp(1.25rem, 5vw, 3rem)',
                backdropFilter: 'blur(16px)',
                position: 'relative',
              }}
            >
              <Quote
                size={48}
                color="rgba(245,166,35,0.2)"
                style={{ position: 'absolute', top: '1.5rem', right: '2rem' }}
              />

              <StarRating rating={testimonials[current].rating} />

              <p style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', lineHeight: 1.8,
                marginTop: '1.25rem', marginBottom: '2rem',
                fontStyle: 'italic',
              }}>
                "{testimonials[current].text}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F5A623, #E08A00)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', fontWeight: 800, color: 'white',
                  }}>
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>
                      {testimonials[current].name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                      {testimonials[current].role} · {testimonials[current].location}
                    </div>
                  </div>
                </div>
                <div style={{
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: 100, padding: '0.35rem 1rem',
                  color: '#10B981', fontSize: '0.8rem', fontWeight: 700,
                }}>
                  {testimonials[current].savings}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1rem', marginTop: '2rem',
          }}>
            <button
              aria-label="Depoimento anterior"
              onClick={prev}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245,166,35,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <ChevronLeft size={18} />
            </button>

            <div role="tablist" aria-label="Depoimentos" style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Depoimento de ${t.name}`}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8, borderRadius: 100,
                    background: i === current ? '#F5A623' : 'rgba(255,255,255,0.25)',
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>

            <button
              aria-label="Próximo depoimento"
              onClick={next}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245,166,35,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
