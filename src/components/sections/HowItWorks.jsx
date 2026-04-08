import { motion } from 'framer-motion';
import { Search, Pencil, Wrench, Activity, ArrowRight } from 'lucide-react';
import { howItWorks } from '../../data/siteData';

const iconMap = { search: Search, pencil: Pencil, wrench: Wrench, activity: Activity };

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '7rem 0', background: 'white' }}>
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
            Processo Simples
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 800, color: 'var(--secondary)',
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            Como funciona o processo<br />de instalação?
          </h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto' }}>
            Em apenas 4 passos, você começa a economizar na conta de luz. Cuidamos de tudo, do projeto à ativação.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          position: 'relative',
        }}>
          {howItWorks.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                style={{ textAlign: 'center', position: 'relative' }}
              >
                {/* Connector line */}
                {i < howItWorks.length - 1 && (
                  <div style={{
                    position: 'absolute', top: 34, left: 'calc(50% + 40px)',
                    right: 'calc(-50% + 40px)',
                    height: 2,
                    background: 'linear-gradient(90deg, #F5A623, rgba(245,166,35,0.2))',
                    zIndex: 0,
                  }} className="step-connector" />
                )}

                {/* Step number + icon */}
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem', zIndex: 1 }}>
                  <div style={{
                    width: 68, height: 68, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F5A623, #E08A00)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto',
                    boxShadow: '0 10px 30px rgba(245,166,35,0.3)',
                  }}>
                    <Icon size={26} color="white" strokeWidth={2} />
                  </div>
                  <div style={{
                    position: 'absolute', top: -6, right: -6,
                    width: 24, height: 24, borderRadius: '50%',
                    background: '#0A2540',
                    color: 'white', fontSize: '0.7rem', fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '2px solid white',
                  }}>
                    {step.step}
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem', fontWeight: 700,
                  color: 'var(--secondary)', marginBottom: '0.75rem',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: 'var(--gray-500)', fontSize: '0.9rem', lineHeight: 1.7,
                  maxWidth: 260, margin: '0 auto',
                }}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '5rem',
            background: 'linear-gradient(135deg, #1a7ab8 0%, #0d5a8a 100%)',
            borderRadius: 24, padding: '3rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1.5rem',
          }}
        >
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem',
            }}>
              Pronto para começar?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
              Fale com nossos especialistas e receba um orçamento gratuito em 24h.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'white', color: '#1a7ab8',
              border: 'none', borderRadius: 12,
              padding: '1rem 2rem', fontSize: '1rem', fontWeight: 800,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: 'var(--font-sans)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}
          >
            Solicitar Análise Gratuita <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-connector { display: none; }
        }
      `}</style>
    </section>
  );
}
