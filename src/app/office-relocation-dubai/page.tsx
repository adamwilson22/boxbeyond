'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Clock, Shield, Monitor, FileText, Truck } from 'lucide-react';

export default function OfficeMovingPage() {
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
                        Office Relocation in Dubai
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
                        Minimize downtime with professional office moving.
                        <br />
                        Secure handling for IT equipment, files, and furniture.
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
                            <Clock size={18} color="var(--muted-gold)" /> <span>Weekend / Overnight moves available</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Shield size={18} color="var(--muted-gold)" /> <span>Fully insured & compliant</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stakes Section */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>We understand the stakes</h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem', color: '#666' }}>
                        An office move isn’t just about logistics — it’s about business continuity. We plan every step to ensure your team is back online fast.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Business Continuity", text: "We work around your hours (nights/weekends) to minimize disruption." },
                            { title: "Asset Safety", text: "Specialized crating for servers, screens, and expensive office assets." },
                            { title: "Data Security", text: "Confidential files are packed in sealed, labeled crates for tracking." }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee', textAlign: 'left' }}>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>{item.title}</h3>
                                <p style={{ color: '#666', lineHeight: 1.6 }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scope of Services */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Scope of Services</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: <Monitor color="var(--muted-gold)" />, title: "IT & Server Relocation", text: "Safe disconnect/transport of PCs, screens, and server racks." },
                            { icon: <Truck color="var(--muted-gold)" />, title: "Furniture Dismantling", text: "Desks, cubicles, meeting tables, and shelving units." },
                            { icon: <FileText color="var(--muted-gold)" />, title: "File Management", text: "Sequential packing of archives and active files." },
                            { icon: <Clock color="var(--muted-gold)" />, title: "Unwanted Item Disposal", text: "Eco-friendly disposal of old furniture or electronics." }
                        ].map((service, i) => (
                            <div key={i} style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                                <div style={{ marginBottom: '1rem' }}>{service.icon}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: 600 }}>{service.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{service.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section" style={{ background: 'var(--deep-charcoal)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Office Move Process</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
                        {[
                            { step: 1, title: "Survey & Plan", text: "We assess inventory and building access to create a timeline." },
                            { step: 2, title: "Packing & Labeling", text: "Everything is labeled by department/desk for easy setup." },
                            { step: 3, title: "The Move", text: "Executed efficiently with supervisor oversight." },
                            { step: 4, title: "Setup & Support", text: "Furniture reassembled, debris removed, ready for work." }
                        ].map((step, i) => (
                            <div key={i} style={{ position: 'relative' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--muted-gold)',
                                    borderRadius: '50%',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    marginBottom: '1.5rem'
                                }}>{step.step}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{step.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: 1.6 }}>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '3rem' }}>FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "Can we move on a Friday or weekend?", a: "Yes, we specialize in after-hours moves to prevent business downtime." },
                            { q: "Do you provide crates for files?", a: "Yes, we provide plastic moving crates for files and desktop items." },
                            { q: "Do you handle building permits?", a: "We provide all necessary documents (Trade License, Insurance) for building management approvals." }
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
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Plan your office move</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Schedule a free on-site survey for an accurate quote.</p>
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
