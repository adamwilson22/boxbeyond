'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Reach out",
            text: "Start a conversation with our concierge team via WhatsApp or our simple callback request form."
        },
        {
            number: "02",
            title: "We assess and plan",
            text: "We take the time to understand your specific needs, assess logistics, and create a tailored moving plan."
        },
        {
            number: "03",
            title: "We move, you relax",
            text: "Our professional teams handle everything with white-glove care, while you transition smoothly into your new space."
        }
    ];

    return (
        <section className="section" style={{ background: 'var(--soft-grey)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '8rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>A better way to move.</h2>
                    <p style={{ fontSize: '1.2rem', color: '#666', fontWeight: 300 }}>Simplicity in three sophisticated acts.</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                color: 'var(--deep-charcoal)',
                                marginBottom: '2rem',
                                letterSpacing: '0.2em',
                                opacity: 0.3
                            }}>
                                STEP {step.number}
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em' }}>{step.title}</h3>
                            <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>{step.text}</p>

                            {/* Connector line for desktop */}
                            {i < steps.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '0.45rem',
                                    right: '-3rem',
                                    width: '60px',
                                    height: '1px',
                                    background: 'var(--border-color)',
                                    display: 'var(--desktop-only)' // We can handle this with a media query or hide on small screens
                                }} className="connector" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .connector {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}
