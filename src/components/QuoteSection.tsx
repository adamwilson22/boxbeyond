'use client';

import { motion } from 'framer-motion';
import { whatsAppUrl } from '@/lib/site-config';

export default function QuoteSection() {
    const factors = ["Size", "Distance", "Fragility", "Access", "Timing"];

    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '6rem',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                        Every move is different, <br /> that&apos;s why we don&apos;t guess.
                    </h2>
                    <p style={{ marginBottom: '3rem', fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}>
                        We understand that a price tag without context is just a number. Our team reviews every request personally to give you a fair, accurate, and transparent quote that respects the unique nature of your relocation.
                    </p>
                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                        {factors.map((f, i) => (
                            <motion.span
                                key={i}
                                whileHover={{ scale: 1.05, borderColor: 'var(--deep-charcoal)' }}
                                style={{
                                    padding: '0.6rem 1.4rem',
                                    background: 'white',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    transition: 'var(--transition-fast)'
                                }}
                            >
                                {f}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'var(--soft-grey)',
                        padding: '4rem',
                        borderRadius: '2px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: 500 }}>Ready for a consultation?</h3>
                        <p style={{ marginBottom: '2.5rem', color: '#666' }}>Tell us about your move, or start a conversation with our concierge team on WhatsApp.</p>
                        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                            <a href="/#contact" className="btn btn-primary" style={{ textAlign: 'center', padding: '1.2rem' }}>Tell us about your move</a>
                            <a href={whatsAppUrl("Hi, I'd like to chat with a concierge.")} className="btn btn-outline" style={{ textAlign: 'center', padding: '1.2rem' }}>Chat with a Concierge</a>
                        </div>
                    </div>

                    {/* Subtle background decoration */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-10%',
                        right: '-10%',
                        width: '150px',
                        height: '150px',
                        background: 'rgba(0,0,0,0.03)',
                        borderRadius: '50%',
                        zIndex: 0
                    }} />
                </motion.div>
            </div>
        </section>
    );
}
