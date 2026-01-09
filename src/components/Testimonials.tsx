'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah J.",
        location: "Palm Jumeirah",
        text: "The most professional move I've had in Dubai. No hidden costs, and the planning was meticulous. The team handled my piano with extreme care.",
        rating: 5,
        date: "2 weeks ago"
    },
    {
        name: "Michael R.",
        location: "Business Bay",
        text: "Moved our entire startup team in one weekend. Zero downtime. Exceptional coordination and the concierge service was a lifesaver.",
        rating: 5,
        date: "1 month ago"
    },
    {
        name: "Ahmed K.",
        location: "Dubai Hills",
        text: "Box & Beyond handled my move to London with partner-level care. Truly end-to-end management that removed all the usual stress.",
        rating: 5,
        date: "3 weeks ago"
    }
];

export default function Testimonials() {
    return (
        <section className="section" style={{ background: 'white' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem', marginBottom: '1rem', color: '#FFD700' }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#FFD700" />)}
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 400 }}>Trust is earned.</h2>
                    <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                        Join hundreds of satisfied residents and businesses who chose a smoother, more transparent relocation experience.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2.5rem',
                                background: 'var(--soft-grey)',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '0.1rem', color: '#FFD700' }}>
                                {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="#FFD700" />)}
                            </div>
                            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#333', fontStyle: 'italic' }}>"{t.text}"</p>
                            <div style={{ marginTop: 'auto' }}>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.2rem' }}>{t.name}</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#888' }}>
                                    <span>{t.location}</span>
                                    <span>{t.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginTop: '4rem' }}
                >
                    <a href="#" style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--muted-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        borderBottom: '1px solid var(--muted-gold)'
                    }}>
                        View All Google Reviews
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
