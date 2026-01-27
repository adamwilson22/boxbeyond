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
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                        What sets us apart
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                        Our strongest differentiators: transparent pricing, personalized planning, punctuality promise, and Dubai-specific permit coordination.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {usps.map((usp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                ...cardStyle,
                                textAlign: 'center',
                                padding: '2rem'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: 'rgba(182, 141, 93, 0.1)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--muted-gold)',
                                margin: '0 auto 1.5rem'
                            }}>
                                {usp.icon}
                            </div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                                {usp.title}
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>
                                {usp.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
