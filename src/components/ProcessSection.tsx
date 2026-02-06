'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ClipboardList, Truck } from 'lucide-react';

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Reach out",
            text: "Start a conversation with our concierge team via WhatsApp or our simple callback request form.",
            icon: MessageCircle,
        },
        {
            number: "02",
            title: "We assess and plan",
            text: "We take the time to understand your specific needs, assess logistics, and create a tailored moving plan.",
            icon: ClipboardList,
        },
        {
            number: "03",
            title: "We move, you relax",
            text: "Our professional teams handle everything with white-glove care, while you transition smoothly into your new space.",
            icon: Truck,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any },
        },
    };

    return (
        <section id="process" className="section" style={{ background: 'white' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 5rem)' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                        marginBottom: '0.5rem',
                        letterSpacing: '-0.04em',
                        fontWeight: 700,
                        color: 'var(--text-dark)',
                    }}>
                        A better way to move.
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                        color: 'var(--text-muted)',
                        fontWeight: 400,
                    }}>
                        Simplicity in three sophisticated acts.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="process-steps"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                        gap: '2rem',
                        alignItems: 'flex-start',
                    }}
                >
                    {/* Horizontal connector line (desktop) */}
                    <div className="process-connector" aria-hidden />

                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.article
                                key={i}
                                variants={itemVariants}
                                className="process-step"
                                style={{ flex: '1 1 0', minWidth: '160px' }}
                            >
                                <span className="process-step-label">STEP {step.number}</span>
                                <div className="process-step-icon-wrap">
                                    <Icon size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="process-step-title">{step.title}</h3>
                                <p className="process-step-text">{step.text}</p>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>

            <style jsx>{`
                .process-steps {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    gap: 2rem;
                    align-items: flex-start;
                    position: relative;
                }
                .process-connector {
                    display: none;
                }
                @media (min-width: 600px) {
                    .process-steps {
                        gap: 2rem;
                    }
                    .process-connector {
                        display: block;
                        position: absolute;
                        top: 2.25rem;
                        left: 12.5%;
                        right: 12.5%;
                        height: 1px;
                        background: linear-gradient(
                            90deg,
                            transparent 0%,
                            var(--border-color) 15%,
                            var(--muted-gold) 50%,
                            var(--border-color) 85%,
                            transparent 100%
                        );
                        pointer-events: none;
                    }
                }
                .process-step {
                    position: relative;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .process-step-label {
                    font-size: 0.7rem;
                    font-weight: 600;
                    letter-spacing: 0.14em;
                    color: var(--muted-gold);
                    margin-bottom: 0.75rem;
                    text-transform: uppercase;
                }
                .process-step-icon-wrap {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    border: 2px solid var(--muted-gold);
                    background: transparent;
                    color: var(--muted-gold);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1rem;
                }
                .process-step-title {
                    font-size: clamp(1.15rem, 2vw, 1.35rem);
                    font-weight: 600;
                    letter-spacing: -0.02em;
                    color: var(--text-dark);
                    margin: 0 0 0.6rem 0;
                }
                .process-step-text {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    line-height: 1.65;
                    margin: 0;
                    max-width: 300px;
                }
            `}</style>
        </section>
    );
}
