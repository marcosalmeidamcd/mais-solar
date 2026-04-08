import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 12,
  padding: '0.875rem 1.1rem',
  color: 'white',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const contactInfo = [
  { icon: Phone, label: 'Telefone / WhatsApp', value: '(62) 99175-4566', href: 'tel:+5562991754566' },
  { icon: Mail, label: 'E-mail', value: 'juray30@hotmail.com', href: 'mailto:juray30@hotmail.com' },
  { icon: MapPin, label: 'Localização', value: 'Anápolis, Goiás — Brasil', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', type: 'Residencial', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real project this would send to an API
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 0',
        background: '#F8FAFC',
      }}
    >
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
            Contato
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 800, color: 'var(--secondary)',
            lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            Solicite seu orçamento gratuito
          </h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto' }}>
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas com uma proposta personalizada.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #083d60, #1a7ab8)',
              borderRadius: 24, padding: '2.5rem',
              boxShadow: '0 25px 60px rgba(13,90,138,0.25)',
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '3rem 1rem' }}
              >
                <CheckCircle size={64} color="#10B981" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'white', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Mensagem enviada!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                  Recebemos seu pedido. Nossa equipe entrará em contato em até 24 horas com uma proposta personalizada.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '2rem',
                    background: 'rgba(255,255,255,0.1)', color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 10, padding: '0.7rem 1.5rem',
                    cursor: 'pointer', fontFamily: 'var(--font-sans)',
                  }}
                >
                  Enviar outro
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  {[
                    { name: 'name', label: 'Nome completo', placeholder: 'João Silva', type: 'text' },
                    { name: 'email', label: 'E-mail', placeholder: 'joao@email.com', type: 'email' },
                    { name: 'phone', label: 'WhatsApp', placeholder: '(41) 9 9999-9999', type: 'tel' },
                  ].map((field) => (
                    <div key={field.name} style={{ gridColumn: field.name === 'name' ? '1 / -1' : 'auto' }}>
                      <label style={{
                        display: 'block', marginBottom: '0.4rem',
                        color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: 600,
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={form[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused(null)}
                        required
                        style={{
                          ...inputStyle,
                          borderColor: focused === field.name ? '#F5A623' : 'rgba(255,255,255,0.12)',
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{
                      display: 'block', marginBottom: '0.4rem',
                      color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: 600,
                    }}>
                      Tipo de instalação
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                        borderColor: focused === 'type' ? '#F5A623' : 'rgba(255,255,255,0.12)',
                      }}
                      onFocus={() => setFocused('type')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="Residencial" style={{ background: '#083d60' }}>Residencial</option>
                      <option value="Comercial" style={{ background: '#083d60' }}>Comercial</option>
                      <option value="Industrial" style={{ background: '#083d60' }}>Industrial</option>
                      <option value="Agronegócio" style={{ background: '#083d60' }}>Agronegócio</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block', marginBottom: '0.4rem',
                    color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: 600,
                  }}>
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Descreva sua necessidade ou dúvida..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      borderColor: focused === 'message' ? '#F5A623' : 'rgba(255,255,255,0.12)',
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #F5A623, #E08A00)',
                    color: 'white', border: 'none', borderRadius: 12,
                    padding: '1rem', fontSize: '1rem', fontWeight: 700,
                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: '0.5rem',
                    fontFamily: 'var(--font-sans)',
                    boxShadow: '0 8px 24px rgba(245,166,35,0.3)',
                  }}
                >
                  <Send size={18} />
                  Solicitar Orçamento Gratuito
                </motion.button>

                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem' }}>
                  Sem spam. Sem compromisso. Resposta em até 24h.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  background: 'white', border: '1px solid #E2E8F0',
                  borderRadius: 16, padding: '1.25rem',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(245,166,35,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={20} color="#F5A623" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                    {label}
                  </div>
                  {href ? (
                    <a href={href} style={{ color: 'var(--secondary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.95rem' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp direct */}
            <a
              href="https://wa.me/5562991754566?text=Olá! Gostaria de solicitar um orçamento de energia solar."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                background: '#25D366', color: 'white',
                borderRadius: 16, padding: '1rem',
                fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
                boxShadow: '0 8px 24px rgba(37,211,102,0.25)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
