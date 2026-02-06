'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HumanElement from '@/components/HumanElement';
import { Truck, Shield, Clock, FileText, Check, MapPin, Phone } from 'lucide-react';
import { whatsAppUrl, siteConfig } from '@/lib/site-config';

const AREAS = [
    'Downtown', 'Business Bay', 'Jumeirah', 'Dubai Creek', 'Palm Jumeirah', 'Dubai Marina', 'JLT', 'JVC',
    'Dubai Hills', 'Damac Hills', 'Emirates Hills', 'Arabian Ranches', 'Dubai Silicon Oasis', 'Mirdiff',
    'Town Square', 'Arjan', 'Furjan', 'Dubai South', 'Barsha', 'Springs', 'Greens', 'Barsha Heights'
];

export default function AboutPage() {
    return (
        <main>
            <Navbar theme="dark" />
            <section
                className="section"
                style={{
                    paddingTop: 'clamp(8rem, 18vw, 12rem)',
                    paddingBottom: '4rem',
                    background: 'white',
                }}
            >
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <h1
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: 600,
                                letterSpacing: '-0.03em',
                                color: 'var(--text-dark)',
                                marginBottom: '1rem',
                            }}
                        >
                            Where Planning Meets Execution
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                            Box & Beyond is a Dubai-based moving and relocation brand focused on delivering calm, well-planned moving experiences.
                        </p>
                        <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            We specialize in home moving, office relocation, single-item transport, storage, and concierge add-on services, designed for residents and businesses that value clarity, care, and professional execution.
                        </p>
                        <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                            We focus on planning properly, communicating clearly, and executing moves responsibly — so customers know exactly what to expect from the first message to the final placement.
                        </p>
                    </motion.div>
                </div>
            </section>

            <HumanElement />

            {/* Our Commitment to you */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center', fontWeight: 600 }}>Our Commitment to you</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', lineHeight: 1.7 }}>
                        Relocation is stressful. We built Box & Beyond to remove that weight through concrete promises, not just words.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: Truck, title: 'Care-First Handling', text: 'Protection first packaging and careful loading standards. We take every precaution so your belongings arrive safely.' },
                            { icon: FileText, title: 'Trained Teams', text: 'Trained teams following a standard packing checklist. Consistent, professional execution every move.' },
                            { icon: Clock, title: 'On-Time Arrival', text: "We value your time. If we're more than 30 minutes late for your moving window, we'll discount your move." },
                            { icon: Shield, title: 'Transparent Scope', text: "Clear inclusions and exclusions. No surprises. Check out what's included & exclusions on each service page before you book." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                style={{
                                    background: 'white',
                                    padding: '1.75rem',
                                    borderRadius: '16px',
                                    border: '1px solid #eee',
                                    borderLeft: '4px solid var(--muted-gold)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                }}
                            >
                                <item.icon size={28} color="var(--muted-gold)" style={{ marginBottom: '0.75rem' }} />
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Who We Serve</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
                        {['Apartments & villas', 'Families & professionals', 'Offices & commercial spaces', 'Property managers'].map((item, i) => (
                            <span key={i} style={{ background: 'var(--soft-grey)', padding: '0.6rem 1.25rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Check size={16} color="var(--muted-gold)" /> {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Areas We Serve</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                        {AREAS.map((area, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#555', border: '1px solid #eee' }}>{area}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Office & Contact — placeholders */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 600 }}>Contact Us</h2>
                    <p style={{ color: '#666', marginBottom: '1rem', fontSize: '1rem' }}>Office Address — to be shared when available</p>
                    <p style={{ color: '#666', marginBottom: '1rem', fontSize: '1rem' }}>Office Location — to be shared when available</p>
                    <p style={{ color: '#666', marginBottom: '1rem', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <Phone size={18} /> Contact Number: <a href={`tel:${siteConfig.whatsappNumber}`} style={{ color: 'var(--muted-gold)', fontWeight: 600 }}>{siteConfig.whatsappDisplay}</a>
                    </p>
                    <p style={{ color: '#888', marginBottom: '2.5rem', fontSize: '0.9rem' }}>Social Media Logos with links — to be shared when available</p>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', fontWeight: 600 }}>Ready to book your home move?</h3>
                    <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.6 }}>Get a quote via WhatsApp — share your home size, location, date, and photos for accuracy.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like to get a quote.")} className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            WhatsApp for a Quote
                        </a>
                        <a href="/get-a-quote" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
