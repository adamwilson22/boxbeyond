'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Truck, Shield, Clock, FileText, Phone } from 'lucide-react';
import { MOVING_PRICING, ADD_ON_SERVICES } from '@/data/pricing';

export default function HomeMovingPage() {
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
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            marginBottom: '1.5rem',
                            color: 'var(--text-dark)'
                        }}
                    >
                        Home Moving in Dubai
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
                        Professional home moving for apartments and villas — carefully packed, professionally handled, and planned end-to-end.
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
                            <Truck size={18} color="var(--muted-gold)" /> <span>Trained moving teams & standard packing checklist</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FileText size={18} color="var(--muted-gold)" /> <span>Clear scope and transparent pricing</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Shield size={18} color="var(--muted-gold)" /> <span>Optional coverage guidance</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Move your home without the chaos</h2>
                            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.1rem' }}>
                                Moving homes isn’t just transport — it’s protecting belongings, coordinating access, and keeping the day organized. Box & Beyond provides a structured moving experience designed for Dubai homes: apartments, villas, elevators, access restrictions, and tight timelines.
                            </p>

                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>Who this service is for</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {[
                                    'Apartment moves (studio to 3BR)',
                                    'Villa relocations and family moves',
                                    'Same-community moves (e.g., Marina → Marina, JVC → JVC)',
                                    'Move-in / move-out handovers with strict timing',
                                    'Customers who want professional packing and careful handling'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1rem', fontWeight: 500 }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--muted-gold)', borderRadius: '50%' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{
                            background: '#f9f9f9',
                            padding: '3rem',
                            borderRadius: '24px',
                            border: '1px solid #eee'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>What’s included (standard home move)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Moving crew + vehicle',
                                    'Loading and unloading',
                                    'Basic protection for furniture during handling',
                                    'Placement of items into the requested rooms',
                                    'Move-day coordination (arrival window + on-site walkthrough)',
                                    'Full packing or partial packing (kitchen / fragile / wardrobes)',
                                    'Packing materials (boxes, bubble wrap, tape)',
                                    'Furniture dismantle & re-assembly (beds, tables, wardrobes)'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.8rem', fontSize: '0.95rem' }}>
                                        <Check size={18} color="green" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>
                                Note: Exact inclusions can vary by home size and requested packing level. We confirm scope clearly before you book.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add-ons */}
            <section className="section" style={{ background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 600 }}>Optional Add-ons</h2>
                    <p style={{ textAlign: 'center', marginBottom: '4rem', color: '#666' }}>Recommended for a smoother move</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>High-fragile handling guidance</h4>
                            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Special protection for TVs, mirrors, and artwork.</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>Extended insurance</h4>
                            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>For precious items, giving you extra peace of mind.</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>Storage coordination</h4>
                            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Short or long term storage options if your new home isn't ready.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>How it works</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
                        {[
                            { step: 1, title: "Share move details", text: "Send your home size, locations, date, and photos/video walkthrough on WhatsApp." },
                            { step: 2, title: "Receive a clear quote", text: "We confirm scope and provide a quote based on access, home size, and packing needs." },
                            { step: 3, title: "Move day execution", text: "Team arrives, does a quick walkthrough, protects key items, and moves room-by-room." },
                            { step: 4, title: "Final placement & handover", text: "Items are placed as requested. We do a final walkthrough before closing." }
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
                                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Guidance */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Pricing guidance</h2>
                    <p style={{ textAlign: 'center', marginBottom: '1rem', color: '#666', maxWidth: '600px', margin: '0 auto 1rem' }}>
                        Transparent, no surprises. Home moving costs depend on:
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
                        {['Home size', 'Packing level', 'Building access', 'Dismantling needs', 'Distance/Timing'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid #eee', color: '#555' }}>
                                {factor}
                            </span>
                        ))}
                    </div>

                    <p style={{ textAlign: 'center', marginBottom: '3rem', fontWeight: 600 }}>Typical starting ranges:</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {MOVING_PRICING.map((tier, i) => (
                            <div key={i} style={{
                                padding: '2rem',
                                background: 'white',
                                border: '1px solid #eee',
                                borderRadius: '16px',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '1.1rem', color: '#888', marginBottom: '0.5rem' }}>{tier.title}</h3>
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.3rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.9rem', color: '#aaa' }}>from</span>
                                    <p style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--muted-gold)' }}>AED {tier.price}</p>
                                </div>
                                <ul style={{ listStyle: 'none', textAlign: 'left', fontSize: '0.9rem', color: '#555', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {tier.features.slice(0, 2).map((feat, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '0.5rem' }}>• {feat}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#777' }}>
                        If you share photos/video, we can quote more accurately and avoid scope mismatches.
                    </p>
                </div>
            </section>

            {/* Dubai Permits Section */}
            <section className="section">
                <div className="container">
                    <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Dubai access & move permits (important)</h2>
                        <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '0' }}>
                            Some buildings and communities require move-in/move-out permissions and time slots. If your building requires approvals, we’ll guide you on what details are needed so your move goes smoothly.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section" style={{ background: '#fafafa' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '3rem' }}>FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "Do you move apartments and villas?", a: "Yes — we support both apartment and villa moves across Dubai." },
                            { q: "Do you provide packing materials and boxes?", a: "Yes, packing materials and packing services can be added based on your needs." },
                            { q: "How early should I book?", a: "For best availability, book a few days in advance. End-of-month and weekends fill faster." },
                            { q: "Can you move on weekends or evenings?", a: "Yes, subject to slot availability." },
                            { q: "Is my move insured?", a: "We can guide you through coverage options and what applies based on your move type and declared value." },
                            { q: "What if my building has elevator booking or permits?", a: "Share your building/community name — we’ll tell you what to arrange and what timing works best." }
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
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to book your home move?</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Get a quote via WhatsApp — share your home size, locations, date, and photos for accuracy.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for a Quote
                        </a>
                        <a href="#contact" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
