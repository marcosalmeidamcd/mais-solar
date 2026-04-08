import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

const highlights = [
  { icon: Award, title: 'Certificação INMETRO', desc: 'Equipamentos certificados e equipe qualificada.' },
  { icon: Users, title: 'Equipe Especializada', desc: 'Engenheiros e técnicos com ampla experiência.' },
  { icon: Zap, title: 'Tecnologia de Ponta', desc: 'Painéis de alta eficiência com garantia de 25 anos.' },
];

const values = [
  'Mais de 150 projetos residenciais e comerciais',
  'Atendimento em todo o estado de Goiás',
  'Instalação em até 72 horas após aprovação',
  'Monitoramento 24/7 via app exclusivo',
  'Financiamento facilitado em até 84 meses',
  'Pós-venda e manutenção preventiva inclusa',
];

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 0', background: '#F8FAFC' }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}>
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            {/* Main image placeholder */}
            <div style={{
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: 24,
              background: 'linear-gradient(135deg, #0d5a8a 0%, #1a7ab8 50%, #2a9ad4 100%)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(13,90,138,0.25)',
            }}>
              {/* Solar panel illustration */}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: '3px', padding: '2rem',
              }}>
                {Array.from({ length: 12 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    style={{
                      borderRadius: 6,
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <div style={{
                      width: '60%', height: '2px',
                      background: 'rgba(245,166,35,0.3)',
                    }} />
                  </motion.div>
                ))}
              </div>

              {/* Overlay label */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem',
                background: 'rgba(245,166,35,0.95)',
                borderRadius: 12, padding: '0.75rem 1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>Instalação em andamento</span>
                <span style={{ color: 'white', fontSize: '0.8rem', fontWeight: 600 }}>Anápolis, GO</span>
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{
                position: 'absolute', top: -20, right: -20,
                background: 'linear-gradient(135deg, #F5A623, #E08A00)',
                borderRadius: 20, padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 15px 40px rgba(245,166,35,0.35)',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white', lineHeight: 1, fontFamily: 'var(--font-display)' }}>4+</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Anos de<br />experiência</div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: 'inline-block',
              background: 'rgba(245,166,35,0.1)',
              color: '#E08A00',
              borderRadius: 100, padding: '0.35rem 1rem',
              fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em',
              textTransform: 'uppercase', marginBottom: '1rem',
            }}>
              Sobre a Mais Solar
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 800, color: 'var(--secondary)',
              lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1.25rem',
            }}>
              Transformando Goiás com energia solar desde 2021
            </h2>

            <p style={{
              color: 'var(--gray-500)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem',
            }}>
              A Mais Solar foi criada em 2021 com um propósito claro: tornar a energia solar acessível e eficiente para todos os goianos. Sediados em Anápolis, já instalamos mais de 150 sistemas fotovoltaicos em todo o estado de Goiás, ajudando famílias, empresas e produtores rurais a economizarem e contribuírem com o meio ambiente.
            </p>

            {/* Values checklist */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2.5rem',
            }}>
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}
                >
                  <CheckCircle size={16} color="#F5A623" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.5 }}>{v}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(245,166,35,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={20} color="#F5A623" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--secondary)', fontSize: '0.95rem', marginBottom: '0.15rem' }}>{title}</div>
                    <div style={{ color: 'var(--gray-500)', fontSize: '0.85rem' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          #about > div > div > div:last-child > div:nth-child(5) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
