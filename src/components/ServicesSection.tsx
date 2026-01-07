'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        { title: "Home Moving", description: "Seamless transitions for families and individuals." },
        { title: "Office & Commercial", description: "Minimal downtime, maximum professionalism." },
        { title: "International Relocation", description: "Global moves handled with local care." },
        { title: "Packing & Storage", description: "Secure, methodical and premium protection." },
        { title: "Custom Move Planning", description: "Bespoke strategy for complex requirements." }
    ];

    return (
        <section className="section" id="services" style={{ background: 'var(--soft-grey)' }}>
            <div className="container">
                <div style={{ marginBottom: '6rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}
                    >
                        Services curated <br /> for you.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '500px', fontSize: '1.1rem', color: '#666' }}
                    >
                        Not just a list of tasks, but a comprehensive approach to relocation designed for peace of mind.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1px',
                    background: '#eee', // Grid line color
                    border: '1px solid #eee'
                }}>
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '3.5rem',
                                background: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'var(--transition-smooth)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{
                                backgroundColor: 'var(--deep-charcoal)',
                                color: 'white'
                            }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', fontWeight: 500 }}>{service.title}</h3>
                                <p style={{ fontSize: '1rem', opacity: 0.8 }}>{service.description}</p>
                            </div>

                            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Learn More <ChevronRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
