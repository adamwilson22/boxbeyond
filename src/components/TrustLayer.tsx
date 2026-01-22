'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Map, HeartHandshake } from 'lucide-react';

export default function TrustLayer() {
    const points = [
        {
            icon: <Shield size={24} strokeWidth={1.5} />,
            title: "Care-First Handling",
            text: "Protection-first packaging & careful loading standards."
        },
        {
            icon: <Users size={24} strokeWidth={1.5} />,
            title: "Trained Teams",
            text: "Trained teams following a standard packing checklist."
        },
        {
            icon: <Map size={24} strokeWidth={1.5} />,
            title: "On-Time Arrival",
            text: "We value your time with strict schedules."
        },
        {
            icon: <HeartHandshake size={24} strokeWidth={1.5} />,
            title: "Transparent Scope",
            text: "Clear inclusions/exclusions. No surprises."
        }
    ];

    return (
        <section style={{
            padding: '6rem 0',
            background: 'white',
            borderTop: '1px solid var(--border-color)',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '4rem',
                }}>
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '1.2rem'
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: 'rgba(182, 141, 93, 0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--muted-gold)'
                            }}>
                                {point.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', fontWeight: 500 }}>{point.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#777', fontWeight: 300 }}>{point.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
