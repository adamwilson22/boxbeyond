'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Reach out",
            text: "Start a conversation with our concierge team via WhatsApp or our simple callback request form."
        },
        {
            number: "02",
            title: "We assess and plan",
            text: "We take the time to understand your specific needs, assess logistics, and create a tailored moving plan."
        },
        {
            number: "03",
            title: "We move, you relax",
            text: "Our professional teams handle everything with white-glove care, while you transition smoothly into your new space."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 15vw, 10rem)' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.05em', fontWeight: 400 }}>A better way to move.</h2>
                    <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', color: '#666', fontWeight: 300, letterSpacing: '0.05em' }}>Simplicity in three sophisticated acts.</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '8rem' }}
                >
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            style={{ position: 'relative' }}
                        >
                            <motion.div
                                initial={{ opacity: 0.1 }}
                                whileInView={{ opacity: 0.3 }}
                                transition={{ duration: 1.5 }}
                                style={{
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    color: 'var(--deep-charcoal)',
                                    marginBottom: '2.5rem',
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase'
                                }}
                            >
                                STEP {step.number}
                            </motion.div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 500, letterSpacing: '-0.03em' }}>{step.title}</h3>
                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8, fontWeight: 300 }}>{step.text}</p>

                            {/* Refined connector line */}
                            {i < steps.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '0.4rem',
                                    right: '-4rem',
                                    width: '80px',
                                    height: '1px',
                                    background: 'linear-gradient(90deg, var(--border-color), transparent)'
                                }} className="connector" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .connector {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}
