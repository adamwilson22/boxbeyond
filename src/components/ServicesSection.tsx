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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section className="section" id="services" style={{ background: 'var(--soft-grey)' }}>
            <div className="container">
                <div style={{ marginBottom: '8rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            marginBottom: '2rem',
                            letterSpacing: '-0.04em',
                            fontWeight: 400
                        }}
                    >
                        Services curated <br /> for you.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '500px', fontSize: '1.2rem', color: '#666', fontWeight: 300, lineHeight: 1.8 }}
                    >
                        Not just a list of tasks, but a comprehensive approach to relocation designed for peace of mind and precision.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 100%, 320px), 1fr))',
                        gap: '1px',
                        background: '#eee',
                        border: '1px solid #eee'
                    }}
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover="hover"
                            style={{
                                padding: 'clamp(2rem, 8vw, 4rem)',
                                background: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'var(--transition-smooth)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: 'clamp(300px, 50vh, 350px)',
                                color: 'var(--foreground)'
                            }}
                            variants={{
                                ...cardVariants,
                                hover: {
                                    backgroundColor: 'var(--deep-charcoal)',
                                    color: 'white',
                                    y: -5,
                                    transition: {
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1] as any
                                    }
                                }
                            }}
                        >
                            <div style={{ position: 'relative', zIndex: 1, color: 'inherit' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: 'inherit' }}>{service.title}</h3>
                                <p style={{ fontSize: '1.05rem', opacity: 0.7, fontWeight: 300, lineHeight: 1.7, color: 'inherit' }}>{service.description}</p>
                            </div>

                            <motion.div
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                                style={{
                                    marginTop: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    position: 'relative',
                                    zIndex: 1,
                                    color: 'inherit'
                                }}
                            >
                                Learn More <ChevronRight size={14} strokeWidth={2.5} />
                            </motion.div>

                            {/* Subtle hover reveal background line */}
                            <motion.div
                                className="hover-line"
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    background: 'var(--muted-gold)',
                                    scaleX: 0,
                                    originX: 0
                                }}
                                whileHover={{ scaleX: 1 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
