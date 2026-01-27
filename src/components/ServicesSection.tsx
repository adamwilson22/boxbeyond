'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
    const services = [
        { title: "Home Moving", description: "Seamless transitions for villas and apartments with white-glove care.", link: "/services/home-moving" },
        { title: "Single Item Movement", description: "Specialized transport for pianos, art, or individual high-value furniture.", link: "/single-item-move-dubai" },
        { title: "Office & Commercial", description: "Precision logistics with minimal downtime for your business.", link: "/office-relocation-dubai" },
        { title: "International Relocation", description: "Global moves handled with local care and full customs management.", link: "/international-relocation-dubai" },
        { title: "Concierge Add-ons", description: "Deep Cleaning, Painting, and Pest Control services.", link: "/concierge-add-ons-dubai" },
        { title: "Secure Storage", description: "Climate-controlled units for short-term or seasonal needs.", link: "/secure-storage-dubai" }
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
                <div style={{ marginBottom: '5rem' }}>
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
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1px',
                        background: '#e5e5e5', // Slightly darker for better grid line contrast
                        border: '1px solid #e5e5e5',
                        borderRadius: '1px'
                    }}
                >
                    {services.map((service, i) => (
                        <Link
                            href={service.link}
                            key={i}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'flex',      // Crucial for equal height
                                flexDirection: 'column'
                            }}
                        >
                            <motion.div
                                whileHover="hover"
                                style={{
                                    padding: 'clamp(2rem, 5vw, 3.5rem)', // Adjusted padding
                                    background: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    transition: 'var(--transition-smooth)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    flex: 1, // Fill the height of the Link (grid cell)
                                    color: 'var(--foreground)'
                                }}
                                variants={{
                                    ...cardVariants,
                                    hover: {
                                        backgroundColor: 'var(--muted-gold)',
                                        color: 'white',
                                        y: -5,
                                        zIndex: 10, // Ensure it sits on top when hovered
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        transition: {
                                            duration: 0.3,
                                            ease: [0.22, 1, 0.36, 1] as any
                                        }
                                    }
                                }}
                            >
                                <div style={{ position: 'relative', zIndex: 1, color: 'inherit', textAlign: 'left' }}>
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'inherit' }}>{service.title}</h3>
                                    <p style={{ fontSize: '1rem', opacity: 0.8, fontWeight: 400, lineHeight: 1.6, color: 'inherit' }}>{service.description}</p>
                                </div>

                                <motion.div
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                    style={{
                                        marginTop: '3rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.8rem',
                                        justifyContent: 'flex-start',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        position: 'relative',
                                        zIndex: 1,
                                        color: 'inherit'
                                    }}
                                >
                                    Learn More <ChevronRight size={14} strokeWidth={2.5} />
                                </motion.div>

                                {/* Hover Line */}
                                <motion.div
                                    className="hover-line"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '4px',
                                        background: '#c5a059', // Fallback
                                        backgroundColor: 'var(--deep-charcoal)', // Dark contrast line on hover (or gold if preferred, but gold on gold is invisible)
                                        scaleX: 0,
                                        originX: 0
                                    }}
                                    variants={{
                                        hover: {
                                            backgroundColor: 'white', // White line on Gold background
                                            scaleX: 1,
                                            transition: { duration: 0.3 }
                                        }
                                    }}
                                />
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
