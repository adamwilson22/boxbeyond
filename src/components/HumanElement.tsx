'use client';

import { motion } from 'framer-motion';
import { Users, Truck, Camera } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const PLACEHOLDERS = [
  {
    icon: <Users size={32} />,
    title: 'Our team',
    text: 'Real people, trained and ready. Replace with your own team photos when available.',
    img: null as string | null,
  },
  {
    icon: <Truck size={32} />,
    title: 'Our fleet',
    text: 'Moving trucks and equipment. Replace with your fleet photos when available.',
    img: null as string | null,
  },
  {
    icon: <Camera size={32} />,
    title: 'Move in action',
    text: 'Actual move day shots. Replace with real moving photos when available.',
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
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', marginBottom: '0.75rem', fontWeight: 700, color: 'var(--text-dark)' }}>
            People & trucks behind your move
          </h2>
          <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.65 }}>
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
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
              style={{
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div
                style={{
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, var(--muted-gold-bg) 0%, rgba(182, 141, 93, 0.15) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingLeft: '1rem',
                  color: 'var(--muted-gold)',
                }}
              >
                {item.icon}
              </div>
              <div style={{ padding: '1.75rem', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-dark)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.text}</p>
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
