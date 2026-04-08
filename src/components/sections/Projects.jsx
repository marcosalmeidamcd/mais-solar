import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, TrendingDown, ArrowRight, Filter } from 'lucide-react';
import { projects } from '../../data/siteData';

const allProjects = [
  ...projects,
  { id: 7, title: 'Escola Municipal Solar', type: 'Comercial', power: '30 kWp', savings: 'R$ 3.500/mês', location: 'Luziânia, GO' },
  { id: 8, title: 'Residência Ecológica', type: 'Residencial', power: '6 kWp', savings: 'R$ 480/mês', location: 'Senador Canedo, GO' },
  { id: 9, title: 'Transportadora Rápida', type: 'Industrial', power: '180 kWp', savings: 'R$ 19.000/mês', location: 'Catalão, GO' },
  { id: 10, title: 'Haras Bela Vista', type: 'Agronegócio', power: '55 kWp', savings: 'R$ 6.200/mês', location: 'Jataí, GO' },
  { id: 11, title: 'Clínica Saúde Total', type: 'Comercial', power: '22 kWp', savings: 'R$ 2.800/mês', location: 'Trindade, GO' },
  { id: 12, title: 'Residência Silva', type: 'Residencial', power: '10 kWp', savings: 'R$ 820/mês', location: 'Inhumas, GO' },
];

const typeColors = {
  Residencial: '#F5A623',
  Comercial: '#00C9FF',
  Industrial: '#10B981',
  Agronegócio: '#8B5CF6',
};

const filters = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Agronegócio'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? allProjects
    : allProjects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" style={{ padding: '7rem 0', background: '#F8FAFC' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(245,166,35,0.1)',
            color: '#E08A00',
            borderRadius: 100, padding: '0.35rem 1rem',
            fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em',
            textTransform: 'uppercase', marginBottom: '1rem',
          }}>
            Portfólio
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 800, color: 'var(--secondary)',
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            150+ projetos entregues<br />com excelência
          </h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto' }}>
            Cada projeto é único. Veja uma seleção dos sistemas solares que instalamos em todo o estado de Goiás.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div style={{
          display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
          justifyContent: 'center', marginBottom: '3rem',
        }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                background: activeFilter === f ? '#0A2540' : 'white',
                color: activeFilter === f ? 'white' : 'var(--gray-600)',
                border: `1.5px solid ${activeFilter === f ? '#0A2540' : '#E2E8F0'}`,
                borderRadius: 100, padding: '0.45rem 1.25rem',
                fontSize: '0.85rem', fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s',
                fontFamily: 'var(--font-sans)',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
              }}
            >
              {f === 'Todos' && <Filter size={13} />}
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ y: -5, boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                style={{
                  background: 'white',
                  borderRadius: 18,
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s',
                }}
              >
                {/* Visual placeholder */}
                <div style={{
                  height: 180,
                  background: `linear-gradient(135deg, ${typeColors[project.type]}20, ${typeColors[project.type]}08)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                  borderBottom: '1px solid #F1F5F9',
                }}>
                  {/* Mini panel grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gridTemplateRows: 'repeat(3, 1fr)',
                    gap: '3px',
                    width: 160, height: 100,
                    padding: '6px',
                    background: '#0A2540',
                    borderRadius: 10,
                    boxShadow: `0 8px 24px ${typeColors[project.type]}30`,
                  }}>
                    {Array.from({ length: 15 }, (_, k) => (
                      <div key={k} style={{
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #0d1f3c, #162d4a)',
                        border: `1px solid ${typeColors[project.type]}30`,
                      }} />
                    ))}
                  </div>

                  {/* Type badge */}
                  <div style={{
                    position: 'absolute', top: 12, right: 12,
                    background: typeColors[project.type],
                    color: 'white', borderRadius: 100,
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.72rem', fontWeight: 700,
                  }}>
                    {project.type}
                  </div>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{
                    fontWeight: 700, fontSize: '1rem',
                    color: 'var(--secondary)', marginBottom: '0.75rem',
                  }}>
                    {project.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={13} color="var(--gray-400)" />
                      <span style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>{project.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Zap size={13} color={typeColors[project.type]} />
                      <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)', fontWeight: 600 }}>{project.power} instalados</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <TrendingDown size={13} color="#10B981" />
                      <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700 }}>{project.savings} economizados</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #083d60, #1a7ab8)',
            borderRadius: 20, padding: '2.5rem',
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
            gap: '1rem', minWidth: 400,
          }}>
            <div style={{
              fontSize: '2.5rem', fontWeight: 800,
              color: '#F5A623', fontFamily: 'var(--font-display)',
            }}>
              150+ projetos
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', textAlign: 'center' }}>
              Este é apenas um recorte do nosso portfólio.<br />Entre em contato para ver projetos similares ao seu.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(135deg, #F5A623, #E08A00)',
                color: 'white', border: 'none', borderRadius: 10,
                padding: '0.75rem 1.75rem', fontSize: '0.9rem', fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Quero um projeto assim <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
