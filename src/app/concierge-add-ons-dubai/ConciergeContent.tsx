'use client';

import { motion } from 'framer-motion';
import { Sparkles, Paintbrush, Bug, Wrench, Droplets, Fan, GripVertical } from 'lucide-react';

export default function ConciergeContent() {
    const addons = [
        { title: "Deep Cleaning", icon: <Sparkles />, desc: "Move-in/out deep cleaning for kitchens, bathrooms, floors & balconies." },
        { title: "Home Painting", icon: <Paintbrush />, desc: "Touch-ups (whitewashing) or full wall painting for move-out handover." },
        { title: "Pest Control", icon: <Bug />, desc: "Municipality-approved treatments for ants, roaches, and preventive care." },
        { title: "Handyman Services", icon: <Wrench />, desc: "Curtain rail installation, light fixtures, and minor wall repairs." },
        { title: "AC Duct Cleaning", icon: <Fan />, desc: "Improve air quality and cooling efficiency before you settle in." },
        { title: "Water Tank Cleaning", icon: <Droplets />, desc: "Essential hygiene cleaning for villa water tanks." },
        { title: "Curtains & Blinds", icon: <GripVertical />, desc: "Measurement, fabric selection, and professional installation." }
    ];

    return (
        <>
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
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--text-dark)'
                        }}
                    >
                        Concierge Add-ons <br /> (Move-In / Move-Out)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: '1.2rem',
                            maxWidth: '700px',
                            margin: '0 auto 2rem',
                            color: '#555',
                            lineHeight: 1.6
                        }}
                    >
                        One coordinator for all your home services. We manage the scheduling & follow-up so you don't have to chase multiple suppliers.
                    </motion.p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                            Get a Packet Quote
                        </a>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                        {addons.map((item, i) => (
                            <div key={i} style={{ padding: '2rem', border: '1px solid #eee', borderRadius: '16px', background: 'white', textAlign: 'left' }}>
                                <div style={{ color: 'var(--muted-gold)', marginBottom: '1rem' }}>
                                    {/* Clone element to increase size if needed, simple render for now */}
                                    <div style={{ transform: 'scale(1.2)', transformOrigin: 'top left' }}>{item.icon}</div>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: 600 }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bundles */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Popular Service Bundles</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'green' }}>✓</span> Move-In Ready
                            </h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: '#555' }}>
                                <li>• Deep Cleaning</li>
                                <li>• AC Duct Cleaning</li>
                                <li>• Pest Control (Preventive)</li>
                                <li>• Handyman (Curtains/Lights)</li>
                            </ul>
                        </div>
                        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'green' }}>✓</span> Deposit Recovery
                            </h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', color: '#555' }}>
                                <li>• Deep Cleaning (Move-out)</li>
                                <li>• Home Painting (Touchups/Full)</li>
                                <li>• Handyman (Wall repairs)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: 'var(--deep-charcoal)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Simplify your to-do list</h2>
                    <p style={{ marginBottom: '2.5rem', opacity: 0.8 }}>Add these services to your move and get a single coordinated invoice.</p>
                    <a href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        WhatsApp to Build Package
                    </a>
                </div>
            </section>
        </>
    );
}
