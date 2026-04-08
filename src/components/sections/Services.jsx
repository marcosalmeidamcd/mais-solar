import { motion } from 'framer-motion';
import { Home, Building2, Factory, Sun, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../../data/siteData';

const iconMap = { home: Home, building: Building2, factory: Factory, sun: Sun };

export default function Services() {
  return (
    <section id="services" style={{ padding: '7rem 0', background: 'white' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(245,166,35,0.1)',
            color: '#E08A00',
            borderRadius: 100, padding: '0.35rem 1rem',
            fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em',
            textTransform: 'uppercase', marginBottom: '1rem',
          }}>
            Soluções Completas
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 800, color: 'var(--secondary)',
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            Para cada necessidade,<br />uma solução solar
          </h2>
          <p style={{
            color: 'var(--gray-500)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto',
          }}>
            Atendemos desde residências familiares até grandes complexos industriais, sempre com a melhor tecnologia e suporte especializado.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: '0 25px 60px rgba(0,0,0,0.12)' }}
                style={{
                  background: 'white',
                  border: '1px solid #E2E8F0',
                  borderRadius: 20,
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: service.color,
                  borderRadius: '20px 20px 0 0',
                }} />

                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: `${service.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={24} color={service.color} />
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem', fontWeight: 700,
                  color: 'var(--secondary)', marginBottom: '0.75rem',
                }}>
                  {service.title}
                </h3>

                <p style={{
                  color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.7,
                  marginBottom: '1.5rem',
                }}>
                  {service.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {service.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={15} color={service.color} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    color: service.color, fontWeight: 700, fontSize: '0.9rem',
                    fontFamily: 'var(--font-sans)', padding: 0,
                  }}
                >
                  Saiba mais <ArrowRight size={16} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
