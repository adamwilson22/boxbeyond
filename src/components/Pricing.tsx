'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const tiers = [
    {
        title: "Single Item",
        price: "250",
        description: "Perfect for high-value furniture or specialized equipment movement.",
        features: ["Professional Protection", "Taillift Vehicle", "On-demand Dispatch"]
    },
    {
        title: "Studio / 1BR",
        price: "1,200",
        description: "Complete end-to-end residential relocation with white-glove care.",
        features: ["Standard Packing", "Unpacking Support", "Basic Assembly"]
    },
    {
        title: "Large Villa / 3BR+",
        price: "3,500",
        description: "Full-scale logistics management for complex family relocations.",
        features: ["Premium Packing", "Furniture Assembly", "Dedicated Concierge"]
    }
];

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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '3rem',
                                background: 'white',
                                borderRadius: '24px',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500 }}>{tier.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
                                <span style={{ fontSize: '0.9rem', color: '#888' }}>Starting from</span>
                                <span style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--muted-gold)' }}>AED {tier.price}</span>
                            </div>
                            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>{tier.description}</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                                {tier.features.map((feature, j) => (
                                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--muted-gold)" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="#contact" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
                                Get Custom Quote
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
