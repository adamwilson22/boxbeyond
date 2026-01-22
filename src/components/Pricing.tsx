'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import { MOVING_PRICING } from '@/data/pricing';

const tiers = MOVING_PRICING;

export default function Pricing() {
    return (
        <section className="section" id="pricing" style={{ background: 'var(--soft-grey)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 400 }}>Transparent pricing.</h2>
                    <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                        No hidden surprises. Custom quotes provided after a detailed concierge assessment.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2rem',
                                background: 'white',
                                borderRadius: '16px',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{tier.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                <span style={{ fontSize: '0.8rem', color: '#888' }}>Starting from</span>
                                <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--muted-gold)' }}>AED {tier.price}</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                                {tier.features.map((feature, j) => (
                                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem' }}>
                                        <CheckCircle2 size={16} color="var(--muted-gold)" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="https://wa.me/yournumber" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', fontSize: '0.9rem', padding: '0.8rem' }}>
                                Quote via WhatsApp
                            </a>
                        </motion.div>
                    ))}
                </div>

                <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.85rem', color: '#999' }}>
                    *Final pricing depends on volume, accessibility, and specific add-on requirements.
                </p>
            </div>
        </section>
    );
}
