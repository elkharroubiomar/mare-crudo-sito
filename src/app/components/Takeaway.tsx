import { Phone } from 'lucide-react';
import type { Lang } from './Nav';

const PHONE = '+39 0422 546 476';
const PHONE_HREF = 'tel:+390422546476';

const t = {
  it: {
    tag: 'Asporto',
    headline: 'Il mare a casa tua.',
    sub: 'La stessa qualità del ristorante, confezionata per portarla con te. Ordini entro 2 ore dal ritiro.',
    note: 'Solo su ordinazione anticipata · Minimo 2 portate',
    steps: [
      {
        n: '01',
        title: 'Chiama',
        desc: 'Prenota il tuo ordine telefonicamente. Scegliamo insieme i piatti in base al pescato del giorno.',
      },
      {
        n: '02',
        title: 'Scegli',
        desc: 'Antipasti, crudi, primi o secondi. Costruisci il tuo pasto su misura dalla cucina di mare completa.',
      },
      {
        n: '03',
        title: 'Ritira',
        desc: 'Pronto in 20–35 minuti. Confezionato per mantenere qualità e temperatura fino a casa tua.',
      },
    ],
    ctaLabel: 'Chiama per ordinare',
  },
  en: {
    tag: 'Takeaway',
    headline: 'The sea at your door.',
    sub: 'The same restaurant quality, packaged for you to take away. Orders placed up to 2 hours before pickup.',
    note: 'By prior order only · Minimum 2 courses',
    steps: [
      {
        n: '01',
        title: 'Call',
        desc: 'Reserve your order by phone. We choose dishes together based on the day\'s catch.',
      },
      {
        n: '02',
        title: 'Choose',
        desc: 'Starters, raw, first or main courses. Build your meal from our complete seafood kitchen.',
      },
      {
        n: '03',
        title: 'Collect',
        desc: 'Ready in 20–35 minutes. Packaged to maintain quality and temperature until you get home.',
      },
    ],
    ctaLabel: 'Call to order',
  },
};

export function Takeaway({ lang }: { lang: Lang }) {
  const tx = t[lang];

  return (
    <section
      id="asporto"
      style={{ background: 'var(--primary)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative wave motif */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          opacity: 0.04,
          background:
            'radial-gradient(ellipse at 80% 50%, #C4AA82 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -60,
          left: -60,
          width: 400,
          height: 400,
          borderRadius: '50%',
          border: '1px solid rgba(196,170,130,0.08)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Tag */}
        <div className="flex items-center" style={{ gap: 12, marginBottom: '2.5rem' }}>
          <div style={{ width: 32, height: 1, background: 'var(--accent)', opacity: 0.7 }} />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            {tx.tag}
          </span>
        </div>

        {/* Main headline */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
            fontStyle: 'italic',
            fontWeight: 500,
            color: '#F4EFE3',
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            marginBottom: '1.25rem',
            maxWidth: 640,
          }}
        >
          {tx.headline}
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            fontWeight: 300,
            color: 'rgba(244,239,227,0.7)',
            lineHeight: 1.65,
            maxWidth: 520,
            marginBottom: '1rem',
          }}
        >
          {tx.sub}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            opacity: 0.8,
            marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}
        >
          {tx.note}
        </p>

        {/* Steps grid */}
        <div style={{ gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <div>
            <div className="grid md:grid-cols-3" style={{ gap: '2rem' }}>
              {tx.steps.map((step) => (
                <div key={step.n}>
                  {/* Step number */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      border: '1px solid rgba(196,170,130,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.625rem',
                        letterSpacing: '0.1em',
                        color: 'var(--accent)',
                        fontWeight: 400,
                      }}
                    >
                      {step.n}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.375rem',
                      fontWeight: 500,
                      color: '#F4EFE3',
                      marginBottom: '0.75rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 300,
                      color: 'rgba(244,239,227,0.62)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <div
              style={{
                marginTop: '3.5rem',
                padding: '2rem 2.25rem',
                background: 'rgba(244,239,227,0.06)',
                border: '1px solid rgba(196,170,130,0.22)',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div>
                <a
                  href={PHONE_HREF}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
                    fontWeight: 500,
                    color: 'var(--secondary)',
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    display: 'block',
                    lineHeight: 1.1,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F4EFE3')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--secondary)')}
                >
                  {PHONE}
                </a>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(244,239,227,0.4)',
                    marginTop: 8,
                  }}
                >
                  {lang === 'it'
                    ? 'Disponibile negli orari di asporto'
                    : 'Available during takeaway hours'}
                </p>
              </div>

              <a
                href={PHONE_HREF}
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
                  padding: '13px 28px',
                  borderRadius: 2,
                  letterSpacing: '0.04em',
                  transition: 'opacity 0.2s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <Phone size={14} strokeWidth={1.75} />
                {tx.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
