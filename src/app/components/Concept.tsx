import type { Lang } from './Nav';

const INTERIOR_IMG =
  'https://images.unsplash.com/photo-1743793056164-67c6ce029d34?w=900&h=1200&fit=crop&auto=format';

const t = {
  it: {
    tag: 'La nostra filosofia',
    pull: 'Non siamo un ristorante di crudo. Siamo un ristorante di pesce.',
    p1: 'Mare Crudo nasce da una scelta precisa: mettere al centro il pesce fresco dell\'Adriatico e del Mediterraneo, in tutte le sue forme. Il crudo è una delle nostre espressioni, non l\'unica.',
    p2: 'Dalla brace delicata al fritto croccante, dal risotto di mare ai secondi di pesce intero: ogni piatto racconta un rapporto diretto con i fornitori locali e con le stagioni del mare.',
    p3: 'A Treviso, nel cuore del Veneto, portiamo la cucina di mare nella sua forma più autentica — senza filtri, senza fronzoli.',
    /*features: [
      { num: '01', title: 'Pesce fresco quotidiano', desc: 'Selezione diretta dai mercati di Chioggia e Venezia ogni mattina.' },
      { num: '02', title: 'Cucina di mare completa', desc: 'Antipasti, crudi, primi, secondi: un percorso che copre tutto il pescato.' },
      { num: '03', title: 'Stagionalità rigorosa', desc: 'Il menu cambia con le stagioni del mare, non con le tendenze.' },
    ],*/
  },
  en: {
    tag: 'Our philosophy',
    pull: 'We are not a raw fish restaurant. We are a seafood restaurant.',
    p1: 'Mare Crudo was born from a precise choice: to place fresh Adriatic and Mediterranean fish at the centre, in all its forms. Raw preparations are one of our expressions, not the only one.',
    p2: 'From gentle grilling to crispy frying, from seafood risotto to whole fish mains: every dish tells of a direct relationship with local suppliers and the seasons of the sea.',
    p3: 'In Treviso, at the heart of the Veneto, we bring sea cooking in its most authentic form — unfiltered, unfussy.',
    /*features: [
      { num: '01', title: 'Daily fresh fish', desc: 'Direct selection from Chioggia and Venice markets every morning.' },
      { num: '02', title: 'Complete seafood kitchen', desc: 'Starters, raw, first courses, mains: a journey through the full catch.' },
      { num: '03', title: 'Strict seasonality', desc: 'The menu changes with the seasons of the sea, not with trends.' },
    ],*/
  },
};

export function Concept({ lang }: { lang: Lang }) {
  const tx = t[lang];

  return (
    <section id="concept" style={{ background: 'var(--background)' }}>
      {/* Section top accent */}
      <div style={{ height: 1, background: 'var(--border)' }} />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        }}
      >
        {/* Section tag */}
        <div className="flex items-center" style={{ gap: 12, marginBottom: '3.5rem' }}>
          <div
            style={{ width: 32, height: 1, background: 'var(--accent)', opacity: 0.7 }}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 400,
            }}
          >
            {tx.tag}
          </span>
        </div>

        {/* Main grid: text left, image right */}
        <div
          className="grid lg:grid-cols-5"
          style={{ gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'start' }}
        >
          {/* Text column — 3/5 */}
          <div style={{ gridColumn: 'span 3' }}>
            {/* Pull quote */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 2.875rem)',
                fontStyle: 'italic',
                fontWeight: 500,
                color: 'var(--primary)',
                lineHeight: 1.18,
                letterSpacing: '-0.01em',
                marginBottom: '2.5rem',
                maxWidth: 560,
              }}
            >
              {tx.pull}
            </h2>

            {/* Body copy */}
            <div
              style={{
                borderLeft: '2px solid var(--accent)',
                paddingLeft: '1.5rem',
                marginBottom: '2.5rem',
                opacity: 0.9,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.0625rem',
                  fontWeight: 300,
                  color: 'var(--foreground)',
                  lineHeight: 1.72,
                  marginBottom: '1.25rem',
                }}
              >
                {tx.p1}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.0625rem',
                  fontWeight: 300,
                  color: 'var(--foreground)',
                  lineHeight: 1.72,
                  marginBottom: '1.25rem',
                }}
              >
                {tx.p2}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.0625rem',
                  fontWeight: 300,
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.72,
                }}
              >
                {tx.p3}
              </p>
            </div>

            {/* Feature rows */}
            <div
              style={{
                borderTop: '1px solid var(--border)',
                marginTop: '3rem',
              }}
            >
            </div>
          </div>

          {/* Image column — 2/5 */}
          <div
            style={{
              gridColumn: 'span 2',
              position: 'relative',
              display: 'none',
            }}
            className="lg:block"
          >
            {/* Decorative offset frame */}
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                right: '-1.5rem',
                bottom: '1.5rem',
                left: '1.5rem',
                border: '1px solid var(--secondary)',
                opacity: 0.4,
                borderRadius: 2,
              }}
            />
            <img
              src={INTERIOR_IMG}
              alt="Sala del ristorante Mare Crudo, Treviso"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                display: 'block',
                borderRadius: 2,
                position: 'relative',
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
