'use client';

import { motion } from 'framer-motion';
import { Users, Truck, Camera } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const PLACEHOLDERS = [
  {
    icon: <Users size={32} />,
    title: 'Our team',
    text: 'Real people, trained and ready. Replace with your team photo when available.',
    img: null as string | null,
  },
  {
    icon: <Truck size={32} />,
    title: 'Our fleet',
    text: 'Moving trucks and equipment. Replace with your fleet photo when available.',
    img: null as string | null,
  },
  {
    icon: <Camera size={32} />,
    title: 'Moves in action',
    text: 'Actual move-day shots. Replace with real moving photos when available.',
    img: null as string | null,
  },
];

export default function HumanElement() {
  return (
    <section className="section" style={{ background: 'var(--soft-grey)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem', fontWeight: 400 }}>
            People & trucks behind your move
          </h2>
          <p style={{ maxWidth: '560px', margin: '0 auto', color: '#666', fontSize: '1.1rem' }}>
            Real teams, real vehicles. We&apos;ll add photos here as we capture them — follow us on social for updates. Once we have the real content, we&apos;ll link it up with our social handles.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {PLACEHOLDERS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
              }}
            >
              <div
                style={{
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, var(--soft-grey) 0%, #e8e8e8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted-gold)',
                  opacity: 0.8,
                }}
              >
                {item.icon}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--muted-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Follow us on Instagram for real move photos →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
