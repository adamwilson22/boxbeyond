'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Globe, Plane, Ship, Shield, Check, FileText, Truck } from 'lucide-react';

export default function InternationalPage() {
    return (
        <main>
            <Navbar theme="dark" />

            {/* Hero Section */}
            <section style={{
                paddingTop: '150px',
                paddingBottom: '80px',
                background: 'var(--soft-grey)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            marginBottom: '1.5rem',
                            color: 'var(--text-dark)'
                        }}
                    >
                        International Relocation from Dubai
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.2rem',
                            maxWidth: '700px',
                            margin: '0 auto 3rem',
                            color: '#555',
                            lineHeight: 1.6
                        }}
                    >
                        Air, Sea, and Land moving solutions tailored to your destination.
                        <br />
                        Door-to-Door service with customs management.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <a href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                            WhatsApp for a Quote
                        </a>
                        <a href="#contact" className="btn btn-outline" style={{ padding: '1rem 2rem', background: 'white' }}>
                            Request Callback
                        </a>
                    </motion.div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', color: '#666', fontSize: '0.9rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Globe size={18} color="var(--muted-gold)" /> <span>Network of 600+ partners</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FileText size={18} color="var(--muted-gold)" /> <span>Customs clearance support</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Shield size={18} color="var(--muted-gold)" /> <span>Transit insurance available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>How we move you globally</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                            <Plane size={32} color="var(--muted-gold)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: 600 }}>Air Freight</h3>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>Fastest option. Ideal for smaller shipments or urgent moves. Door-to-door or Door-to-Airport.</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                            <Ship size={32} color="var(--muted-gold)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: 600 }}>Sea Freight (LCL & FCL)</h3>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>Cost-effective. Full Container Load (FCL) for large homes, or Less than Container Load (LCL) for smaller volumes.</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                            <Truck size={32} color="var(--muted-gold)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', fontWeight: 600 }}>Land Freight (GCC)</h3>
                            <p style={{ color: '#666', lineHeight: 1.6 }}>Road transport for moves to Saudi Arabia, Oman, Qatar, Bahrain, and Kuwait.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table / Inclusions */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Export Packing Standards</h2>
                            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
                                International moves require different protection than local moves. We use export-grade wrapping to withstand long transit times.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    '5-ply boxes for maximum strength',
                                    'Bubble wrap + corrugated sheets for furniture',
                                    'Wooden crating for fragile items (art, marble, glass)',
                                    'Detailed inventory list for customs'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                        <Check size={18} color="green" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>The Process</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    { title: "1. Survey & Quote", text: "We measure volume (CBM) to give an accurate shipping price." },
                                    { title: "2. Export Packing", text: "Team wraps and packs everything at your home." },
                                    { title: "3. Customs & Freight", text: "We handle export docs and load onto the vessel/plane." },
                                    { title: "4. Destination Delivery", text: "Our partner agent clears customs and delivers to your new door." }
                                ].map((step, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                                        <div style={{ minWidth: '24px', height: '24px', background: 'var(--muted-gold)', borderRadius: '50%', color: 'white', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</div>
                                        <div>
                                            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.3rem' }}>{step.title}</h4>
                                            <p style={{ fontSize: '0.9rem', color: '#666' }}>{step.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '3rem' }}>FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "How long does sea freight take?", a: "Transits vary: UK/Europe (4-6 weeks), USA/Canada (6-8 weeks), Australia (6-8 weeks). Air freight takes 5-10 days." },
                            { q: "Do you handle customs charges?", a: "We handle the paperwork, but duties/taxes at destination are usually paid by the client (unless exempt)." },
                            { q: "Can I store my goods before shipping?", a: "Yes, we offer secure storage in Dubai if your new home isn't ready." }
                        ].map((faq, i) => (
                            <div key={i} style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{faq.q}</h4>
                                <p style={{ color: '#666', lineHeight: 1.6 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Start your international move</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Book a survey to calculate your CBM volume and get a shipping quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Schedule Survey
                        </a>
                        <a href="https://wa.me/yournumber" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
