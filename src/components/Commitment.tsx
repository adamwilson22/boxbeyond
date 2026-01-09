'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, BadgePercent } from 'lucide-react';

const guarantees = [
    {
        icon: <ShieldCheck size={40} strokeWidth={1} />,
        title: "Damage-Free Guarantee",
        text: "We treat your belongings like our own. Any damage during transit is covered by our comprehensive insurance policy."
    },
    {
        icon: <Clock size={40} strokeWidth={1} />,
        title: "On-Time Arrival",
        text: "We value your time. If we're more than 30 minutes late for your scheduled moving window, we'll discount your move."
    },
    {
        icon: <BadgePercent size={40} strokeWidth={1} />,
        title: "Zero Hidden Costs",
        text: "The price we quote is the price you pay. No last-minute 'truck fees' or 'packing surcharges'."
    }
];

export default function Commitment() {
    return (
        <section className="section" style={{ background: 'var(--deep-charcoal)', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>
                    <div style={{ maxWidth: '400px' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 400 }}>Our commitment <br /> to you.</h2>
                        <p style={{ fontSize: '1.2rem', color: '#aaa', fontWeight: 300, lineHeight: 1.8 }}>
                            Relocation is stressful. We built Box & Beyond to remove that weight through concrete promises, not just words.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {guarantees.map((g, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                style={{ display: 'flex', gap: '2rem' }}
                            >
                                <div style={{ color: 'var(--muted-gold)', flexShrink: 0 }}>
                                    {g.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500 }}>{g.title}</h3>
                                    <p style={{ color: '#aaa', lineHeight: 1.7, fontWeight: 300 }}>{g.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
