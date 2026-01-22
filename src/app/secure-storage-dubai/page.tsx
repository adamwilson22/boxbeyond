'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Thermometer, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export default function StoragePage() {
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
                        Secure Storage in Dubai
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
                        Climate-controlled, 24/7 monitored storage solutions.
                        <br />
                        Flexible terms: Weekly, Monthly, or Yearly.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <a href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                            Get Storage Quote
                        </a>
                        <a href="#contact" className="btn btn-outline" style={{ padding: '1rem 2rem', background: 'white' }}>
                            Request Callback
                        </a>
                    </motion.div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', color: '#666', fontSize: '0.9rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Thermometer size={18} color="var(--muted-gold)" /> <span>Fully AC / Climate Controlled</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Lock size={18} color="var(--muted-gold)" /> <span>24/7 CCTV & Security</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Clock size={18} color="var(--muted-gold)" /> <span>Flexible contract lengths</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Storage Model Explanation */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Partner-Managed Storage</h2>
                            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
                                We utilize premium warehouse partners in Dubai Investment Park (DIP) and Al Quoz to provide you with the best rates and security standards.
                            </p>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>Why store with us?</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Door-to-Store service (We pick up, pack, and store)',
                                    'Inventory management (All items listed before storage)',
                                    'Pest control & dust-free environment',
                                    'Insurance coverage available for stored goods'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1rem' }}>
                                        <CheckCircle size={18} color="green" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{
                            background: '#f9f9f9',
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: '1px solid #eee'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>What you can store</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Household</h4>
                                    <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>Furniture, white goods, boxes, luggage, personal effects.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>Commercial</h4>
                                    <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>Office assets, files, event equipment, surplus stock.</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <AlertTriangle size={18} color="#e53e3e" /> Prohibited Items
                                </h4>
                                <p style={{ fontSize: '0.9rem', color: '#e53e3e', lineHeight: 1.6 }}>
                                    Food/Perishables, Flammables (gas, paint), Illegal goods, Living plants/animals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Guidance */}
            <section className="section" style={{ background: 'var(--deep-charcoal)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Pricing Guidance</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', opacity: 0.8 }}>
                        Storage is charged based on the Volume (CBM) and Duration.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--muted-gold)' }}>Short Term</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Weekly / Monthly</p>
                            <hr style={{ margin: '1rem 0', borderColor: 'rgba(255,255,255,0.1)' }} />
                            <p style={{ lineHeight: 1.6 }}>Ideal for moves with a gap between handover dates.</p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--muted-gold)' }}>Long Term</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>6 Months / Yearly</p>
                            <hr style={{ margin: '1rem 0', borderColor: 'rgba(255,255,255,0.1)' }} />
                            <p style={{ lineHeight: 1.6 }}>Discounted rates for long-term contracts.</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Need a quote?</p>
                        <a href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                            WhatsApp Us Your Volume
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '3rem' }}>FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "How do I access my items?", a: "Access is by appointment only to ensure security. 24-hour notice is usually required." },
                            { q: "Is there a minimum storage period?", a: "Minimum charge is usually for 1 month, but weekly prorated options can be discussed." },
                            { q: "Do you pack everything for storage?", a: "Yes, we highly recommend export packing for long-term storage to prevent dust/moisture damage." }
                        ].map((faq, i) => (
                            <div key={i} style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{faq.q}</h4>
                                <p style={{ color: '#666', lineHeight: 1.6 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
