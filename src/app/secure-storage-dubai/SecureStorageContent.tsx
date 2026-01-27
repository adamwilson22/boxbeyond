'use client';

import { motion } from 'framer-motion';
import { Warehouse, Lock, Thermometer, ShieldCheck } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';

export default function SecureStorageContent() {
    return (
        <>
            <section style={{
                paddingTop: '120px',
                paddingBottom: '60px',
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
                        Secure Storage in Dubai <br /> (Partner-Managed)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: '1.1rem',
                            maxWidth: '700px',
                            margin: '0 auto 2rem',
                            color: '#555',
                            lineHeight: 1.5
                        }}
                    >
                        Clean, secure, and climate-safe storage solutions in Dubai — coordinated by Box & Beyond through our vetted storage partners. Whether you&apos;re moving, renovating, traveling, or need business storage, we help you choose the right unit size and handle the pickup/delivery flow.
                    </motion.p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href={whatsAppUrl("Hi, I'd like a storage quote.")} className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
                            WhatsApp for Storage Quote
                        </a>
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '0.8rem 2rem', background: 'white' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>

            {/* Pricing & Sizes */}
            <section className="section" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Storage Options & Sizing</h2>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { title: 'XS / Locker', desc: 'Documents, luggage, small items.' },
                                    { title: 'Small Units', desc: 'Small furniture, appliances (~25 sq ft).' },
                                    { title: 'Medium Units', desc: 'Studio/Bedroom contents (~50 sq ft).' },
                                    { title: 'Large Units', desc: '1–2 Bedroom apartment contents.' },
                                    { title: 'XL Units', desc: 'Villa contents or commercial inventory.' }
                                ].map((item, i) => (
                                    <li key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: '0.8rem' }}>
                                        <strong>{item.title}</strong>: <span style={{ color: '#666' }}>{item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: '#fcfcfc', padding: '2rem', borderRadius: '12px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Pricing Guidance</h3>
                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>
                                Prices vary by size, location, and climate control.
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                                    <span>Small Units (~25 sq ft)</span>
                                    <strong>AED 300–400 / mo</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                                    <span>Medium Units (~50 sq ft)</span>
                                    <strong>AED 900–1,400 / mo</strong>
                                </div>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>
                                *Indicative ranges based on Dubai market. Final quote matched to availability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Features */}
            <section className="section" style={{ padding: '4rem 0', background: 'var(--soft-grey)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2rem' }}>Security & Facility Features</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {[
                            { icon: <Lock size={20} />, text: "24/7 CCTV Monitoring" },
                            { icon: <Thermometer size={20} />, text: "Climate Control (AC)" },
                            { icon: <ShieldCheck size={20} />, text: "Fire Protection Systems" },
                            { icon: <Warehouse size={20} />, text: "Controlled Entry Access" }
                        ].map((feat, i) => (
                            <div key={i} style={{
                                background: 'white',
                                padding: '1.2rem 2rem',
                                borderRadius: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <span style={{ color: 'var(--muted-gold)' }}>{feat.icon}</span>
                                <span style={{ fontWeight: 500 }}>{feat.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prohibited Items */}
            <section className="section" style={{ padding: '3rem 0' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h3 style={{ color: '#d32f2f', marginBottom: '1rem' }}>What you cannot store</h3>
                    <p style={{ marginBottom: '1.5rem' }}>Prohibited items generally include:</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', color: '#555' }}>
                        <span>🚫 Perishables</span>
                        <span>🚫 Flammables / Chemicals</span>
                        <span>🚫 Illegal Items</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to store your items securely?</h2>
                    <p style={{ marginBottom: '2rem', color: '#666' }}>Message us on WhatsApp with your home size + duration + items, and we&apos;ll recommend the right storage unit and provide a clear quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like a storage quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                            WhatsApp for Storage Quote
                        </a>
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 3rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
