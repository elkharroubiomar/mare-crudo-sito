
import sala from '../../images/sala.jpg';
import crudo from '../../images/crudo.jpg';
import polpo from '../../images/polpo.jpg';
import fritto from '../../images/fritto.jpg';
import spaghetti from '../../images/spaghetti.jpg';
import bancone from '../../images/bancone.jpg';
import salaVini from '../../images/sala_vini.jpg';
import { useState } from 'react';
import type { Lang } from './Nav';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  photographer: string;
  span?: 'tall' | 'wide' | 'normal';
}

const IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: sala,
    alt: 'Sala con lampadari eleganti',
    photographer: 'Rita Daisy',
    span: 'tall',
  },
  {
    id: '2',
    src: crudo,
    alt: 'Piatto di pesce con verdure',
    photographer: 'Nima Naseri',
    span: 'normal',
  },
  {
    id: '3',
    src: polpo,
    alt: 'Ostriche con spicchi di limone',
    photographer: 'Cathrine Skovly',
    span: 'normal',
  },
  {
    id: '4',
    src: bancone,
    alt: 'Sala del ristorante, tavoli eleganti',
    photographer: 'Tanja Tepavac',
    span: 'tall',
  },
  {
    id: '5',
    src: salaVini,
    alt: 'Piatto di pesce finemente impiattato',
    photographer: 'Tommaso Ubezio',
    span: 'tall',
  },
  {
    id: '6',
    src: spaghetti,
    alt: 'Ostriche e calici di vino',
    photographer: 'Cathrine Skovly',
    span: 'wide',
  },
];

const t = {
  it: { tag: 'Atmosfera', headline: 'Uno spazio che racconta il mare.', sub: 'La sala di Mare Crudo a Treviso.' },
  en: { tag: 'Atmosphere', headline: 'A space that speaks of the sea.', sub: 'Mare Crudo\'s dining room in Treviso.' },
};

export function Gallery({ lang }: { lang: Lang }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const tx = t[lang];

  return (
    <section id="gallery" style={{ background: 'var(--background)' }}>
      <div style={{ height: 1, background: 'var(--border)' }} />

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        }}
      >
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between"
          style={{ marginBottom: '3rem', gap: '1rem' }}
        >
          <div>
            <div className="flex items-center" style={{ gap: 12, marginBottom: '1.25rem' }}>
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
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontStyle: 'italic',
                fontWeight: 500,
                color: 'var(--foreground)',
                lineHeight: 1.18,
                margin: 0,
              }}
            >
              {tx.headline}
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--muted-foreground)',
              fontWeight: 300,
              margin: 0,
            }}
          >
            {tx.sub}
          </p>
        </div>

        {/* Gallery grid — desktop asymmetric, mobile 2-col */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gap: 12,
          }}
          className="gallery-grid"
        >
          {IMAGES.map((img) => {
            let gridRow = '';
            if (img.span === 'tall') gridRow = 'span 2';

            return (
              <div
                key={img.id}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 2,
                  background: 'var(--muted)',
                  gridRow,
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setHovered(img.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: hovered === img.id ? 'scale(1.04)' : 'scale(1)',
                    minHeight: img.span === 'tall' ? 300 : img.span === 'wide' ? 180 : 180,
                  }}
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(27,78,107,0.55)',
                    opacity: hovered === img.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.875rem',
                      fontStyle: 'italic',
                      color: 'rgba(244,239,227,0.9)',
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    {img.alt}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.625rem',
                      color: 'rgba(244,239,227,0.45)',
                      margin: '4px 0 0',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Ph. {img.photographer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
