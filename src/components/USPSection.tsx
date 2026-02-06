'use client';

import { motion } from 'framer-motion';
import { Users, Clock, FileText, MapPin } from 'lucide-react';
import { cardStyle } from '@/lib/ui-styles';

export default function USPSection() {
    const usps = [
        {
            icon: <FileText size={28} strokeWidth={1.5} />,
            title: "No Hidden Costs",
            text: "Check our what's included/exclusion section on each service page before you book."
        },
        {
            icon: <Users size={28} strokeWidth={1.5} />,
            title: "Concierge Planning",
            text: "Personal assessment and tailored planning for every move. We understand your unique needs and create a custom plan."
        },
        {
            icon: <Clock size={28} strokeWidth={1.5} />,
            title: "Punctuality Promise",
            text: "We value your time. If we're more than 30 minutes late for your moving window, we'll discount your move."
        },
        {
            icon: <MapPin size={28} strokeWidth={1.5} />,
            title: "Permit-to-Placement Coordination",
            text: "End-to-end coordination from building permits to final placement. Dubai-specific guidance for smooth community move-in/out."
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
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text-dark)' }}>
                        What sets us apart
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.65 }}>
                        Our strongest differentiators: transparent pricing, personalized planning, punctuality promise, and Dubai-specific permit coordination.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1.5rem'
                }} className="usp-grid">
                    {usps.map((usp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
                            style={{
                                ...cardStyle,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                padding: '2rem',
                                borderLeft: '4px solid var(--muted-gold)',
                                background: i % 2 === 0 ? 'rgba(182, 141, 93, 0.08)' : 'white',
                                boxShadow: 'var(--shadow-md)',
                                border: '1px solid rgba(182, 141, 93, 0.2)',
                                borderRadius: 'var(--radius-md)',
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: 'var(--gold-gradient)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                boxShadow: 'var(--shadow-gold)',
                                color: 'white',
                                flexShrink: 0,
                            }}>
                                {usp.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                                {usp.title}
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                {usp.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
