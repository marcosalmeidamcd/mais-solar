/**
 * Logo Mais Solar — SVG inline sem fundo externo.
 * Ícone (casa + sol laranja) à esquerda + texto "MAIS SOLAR" à direita.
 * Integra naturalmente em fundos escuros ou claros via prop `dark`.
 */
export default function Logo({ height = 42, dark = false, className = '' }) {
  const textColor = dark ? '#0d3a57' : '#ffffff';
  const subColor  = dark ? '#1a7ab8' : 'rgba(255,255,255,0.75)';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 60"
      height={height}
      width={Math.round(height * (260 / 60))}
      className={className}
      aria-label="Mais Solar"
      role="img"
      style={{ display: 'block', flexShrink: 0 }}
    >
      {/* ─── Ícone: casa + sol ─── */}

      {/* Raios do sol */}
      <g stroke="#F5A623" strokeWidth="2.8" strokeLinecap="round">
        <line x1="30" y1="4"  x2="30" y2="10" />
        <line x1="30" y1="32" x2="30" y2="38" />
        <line x1="12" y1="11" x2="16.5" y2="15.5" />
        <line x1="48" y1="11" x2="43.5" y2="15.5" />
        <line x1="6"  y1="21" x2="12"  y2="21" />
        <line x1="54" y1="21" x2="48"  y2="21" />
        <line x1="12" y1="31" x2="16.5" y2="26.5" />
        <line x1="48" y1="31" x2="43.5" y2="26.5" />
      </g>

      {/* Círculo do sol */}
      <circle cx="30" cy="21" r="7.5" fill="#F5A623" />

      {/* Telhado */}
      <polygon points="30,36 10,50 50,50" fill="white" />

      {/* Corpo da casa */}
      <rect x="16" y="50" width="28" height="20" rx="2" fill="white" />

      {/* Porta — azul da logo como detalhe de cor */}
      <rect x="23" y="58" width="14" height="12" rx="1.5" fill="#1a7ab8" />

      {/* ─── Texto ─── */}

      {/* MAIS */}
      <text
        x="70"
        y="28"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill={textColor}
        letterSpacing="2"
      >
        MAIS
      </text>

      {/* SOLAR com destaque no S de Solar */}
      <text
        x="70"
        y="52"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill={textColor}
        letterSpacing="2"
      >
        <tspan fill="#F5A623">S</tspan>OLAR
      </text>

      {/* Linha divisória decorativa */}
      <line x1="64" y1="10" x2="64" y2="62" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    </svg>
  );
}
