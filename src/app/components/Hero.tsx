import { Phone, ShoppingBag, ChevronDown } from 'lucide-react';
import type { Lang } from './Nav';
import sfondo from '../../images/sfondo.png';

const PHONE_HREF = 'tel:+390422123456';

const t = {
  it: {
    label: 'Ristorante di Pesce · Treviso',
    headline: ['Il mare nel piatto,', 'il cuore nel gesto.'],
    sub: 'Non solo crudo — una cucina di mare completa, dal pesce di giornata alla brace, dalle ostriche al fritto misto dell\'Adriatico.',
    cta1: 'Prenota un tavolo',
    cta2: 'Ordina asporto',
    note: 'Prenotazioni solo telefoniche',
    scroll: 'Scopri',
  },
  en: {
    label: 'Seafood Restaurant · Treviso',
    headline: ['The sea on the plate,', 'care in every gesture.'],
    sub: 'Not just raw — a complete seafood kitchen, from the daily catch to the grill, from oysters to Adriatic mixed fry.',
    cta1: 'Reserve a table',
    cta2: 'Order takeaway',
    note: 'Reservations by phone only',
    scroll: 'Discover',
  },
};

export function Hero({ lang }: { lang: Lang }) {
  const tx = t[lang];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100lvh',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--primary)',
      }}
    >
      {/* Background image */}
      <img
        src={sfondo}
        alt="Tavolo mare — elegante cena con vista tramonto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
        }}
      />

      {/* Gradient overlay — petrol blue tones, heavier at top and bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(27,78,107,0.72) 0%, rgba(27,78,107,0.38) 40%, rgba(27,78,107,0.55) 75%, rgba(18,50,68,0.92) 100%)',
        }}
      />

      {/* Texture grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundSize: '180px 180px',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: 820,
          padding: '0 1.5rem',
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.625rem',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--secondary)',
            marginBottom: '1.75rem',
          }}
        >
          {tx.label}
        </p>

        {/* Champagne hairline */}
        <div
          style={{
            width: 40,
            height: 1,
            background: 'var(--accent)',
            margin: '0 auto 2rem',
            opacity: 0.7,
          }}
        />

        {/* Main headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 500,
            fontStyle: 'italic',
            color: '#F4EFE3',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: '1.75rem',
          }}
        >
          {tx.headline[0]}
          <br />
          {tx.headline[1]}
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
            fontWeight: 300,
            color: 'rgba(244,239,227,0.78)',
            lineHeight: 1.65,
            maxWidth: 560,
            margin: '0 auto 2.75rem',
            letterSpacing: '0.01em',
          }}
        >
          {tx.sub}
        </p>

        {/* CTA buttons */}
        <div
          className="flex items-center justify-center flex-wrap"
          style={{ gap: '0.875rem' }}
        >
          <a
            href={PHONE_HREF}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#F4EFE3',
              background: 'var(--primary)',
              textDecoration: 'none',
              padding: '14px 28px',
              borderRadius: 2,
              border: '1px solid rgba(244,239,227,0.2)',
              letterSpacing: '0.04em',
              transition: 'background 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.background = 'rgba(27,78,107,0.9)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.background = 'var(--primary)')
            }
          >
            <Phone size={15} strokeWidth={1.75} />
            {tx.cta1}
          </a>

          <a
            href="#asporto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--primary)',
              background: 'var(--secondary)',
              textDecoration: 'none',
              padding: '14px 28px',
              borderRadius: 2,
              border: '1px solid transparent',
              letterSpacing: '0.04em',
              transition: 'opacity 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <ShoppingBag size={15} strokeWidth={1.75} />
            {tx.cta2}
          </a>
        </div>

        {/* Phone-only reservation note */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            color: 'rgba(244,239,227,0.4)',
            marginTop: '1.25rem',
            letterSpacing: '0.08em',
          }}
        >
          {tx.note}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          color: 'rgba(244,239,227,0.45)',
          cursor: 'pointer',
          zIndex: 1,
        }}
        onClick={() =>
          document.getElementById('concept')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.5625rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          {tx.scroll}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          style={{
            animation: 'bounce-y 2s infinite',
          }}
        />
      </div>
    </section>
  );
}
