import { motion } from 'framer-motion';
import { ArrowRight, Share2, MessageCircle, Play } from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  'Empresa': ['Sobre nós', 'Nossa equipe', 'Blog solar', 'Parceiros'],
  'Serviços': ['Residencial', 'Comercial', 'Industrial', 'Agronegócio'],
  'Suporte': ['Como funciona', 'FAQ', 'Monitoramento', 'Pós-venda'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#052238',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '5rem 0 2rem',
    }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo height={44} />
            </div>

            <p style={{
              color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.8,
              maxWidth: 300, marginBottom: '1.5rem',
            }}>
              Transformando vidas com energia solar limpa e sustentável desde 2021. Mais de 150 projetos entregues em todo o estado de Goiás.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { Icon: Share2, href: '#', label: 'Instagram' },
                { Icon: MessageCircle, href: '#', label: 'Facebook' },
                { Icon: Play, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(245,166,35,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(245,166,35,0.3)';
                    e.currentTarget.style.color = '#F5A623';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                color: 'white', fontWeight: 700, fontSize: '0.85rem',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}>
                {title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem',
                      textDecoration: 'none', transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F5A623'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 16, padding: '1.75rem 2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1.25rem', marginBottom: '3rem',
        }}>
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>
              Receba dicas de economia solar
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>
              Newsletter mensal com novidades do mercado solar.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="email"
              placeholder="seu@email.com.br"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 10, padding: '0.65rem 1rem',
                color: 'white', fontSize: '0.875rem',
                fontFamily: 'var(--font-sans)', outline: 'none',
                minWidth: 220,
              }}
            />
            <button style={{
              background: 'linear-gradient(135deg, #F5A623, #E08A00)',
              color: 'white', border: 'none', borderRadius: 10,
              padding: '0.65rem 1.25rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontWeight: 700, fontSize: '0.875rem',
              fontFamily: 'var(--font-sans)',
            }}>
              Assinar <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem' }}>
              © {year} Mais Solar. Todos os direitos reservados.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem' }}>
              CNPJ: 43.675.054/0001-60 · Anápolis, Goiás — Brasil
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Política de Privacidade', 'Termos de Uso'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer > div > div:first-child > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
