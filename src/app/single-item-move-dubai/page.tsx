'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Info, AlertTriangle, Truck, MapPin, Calculator, Package } from 'lucide-react';

export default function SingleItemPage() {
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
                        Single Item Moving in Dubai
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.2rem',
                            maxWidth: '600px',
                            margin: '0 auto 2rem',
                            color: '#555',
                            lineHeight: 1.6
                        }}
                    >
                        Fast, careful delivery for one item — within Dubai only.
                        <br />
                        Ideal for a sofa, bed, washing machine, dining table, TV, or any single bulky item that needs professional handling.
                    </motion.p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: '#666', background: 'white', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid #eee' }}>
                            <Check size={16} color="green" /> Dubai only
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: '#666', background: 'white', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid #eee' }}>
                            <Check size={16} color="green" /> Single item per booking
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: '#666', background: 'white', padding: '0.5rem 1rem', borderRadius: '20px', border: '1px solid #eee' }}>
                            <Info size={16} color="orange" /> Price changes if &gt;1 item
                        </div>
                    </div>

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
                </div>
            </section>

            {/* Definition & Audience */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 600 }}>What counts as “Single Item”</h3>
                            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '2rem' }}>
                                A “single item move” means one primary item (e.g., 1 sofa OR 1 bed OR 1 washing machine).
                                If you have multiple items (even if small), it becomes a multi-item move and pricing changes.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Who this is perfect for</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {[
                                    'Buying or selling furniture on Dubizzle/Marketplace',
                                    'Moving one bulky item between apartments',
                                    'Sending a single item to storage',
                                    'Picking up an item from a shop/warehouse and delivering to your home'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1rem', fontWeight: 500 }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--muted-gold)', borderRadius: '50%' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ background: '#f9f9f9', padding: '2.5rem', borderRadius: '24px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>What’s included (standard)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Vehicle + driver',
                                    '1–2 movers (based on item type)',
                                    'Loading and unloading',
                                    'Basic protection during handling (wrap/blanket protection as needed)',
                                    'Placement at the drop-off location'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.8rem', fontSize: '0.95rem' }}>
                                        <Check size={18} color="green" style={{ marginTop: '3px', flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>
                                If the item needs dismantling, special wrapping, or fragile handling, we’ll confirm it before booking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Factors */}
            <section className="section" style={{ background: 'var(--deep-charcoal)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>What affects the price?</h2>
                            <p style={{ marginBottom: '2rem', opacity: 0.8, fontSize: '1.1rem' }}>We keep pricing simple and clear. Your quote depends on:</p>
                            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {[
                                    'Item type & size',
                                    'Floors / stairs / elevator access',
                                    'Distance within Dubai',
                                    'Parking distance',
                                    'Dismantle / reassembly',
                                    'Extra manpower'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <Calculator size={16} color="var(--muted-gold)" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--muted-gold)' }}>Why single-item moves aren’t “cheap pickups”</h3>
                            <p style={{ lineHeight: 1.7, opacity: 0.9, marginBottom: '1.5rem' }}>
                                Even for one item, there are real operating costs behind every trip: crew salaries, truck maintenance, fuel, Salik, and coordination.
                            </p>
                            <p style={{ fontWeight: 600 }}>We’d rather be honest than give a “cheap” price that turns into surprises later.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Policy */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto', background: '#FFF5F5', padding: '2rem', borderRadius: '16px', border: '1px solid #FFE0E0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                            <AlertTriangle color="#E53E3E" />
                            <h3 style={{ fontSize: '1.5rem', color: '#C53030', fontWeight: 600, margin: 0 }}>Dubai-only policy</h3>
                        </div>
                        <p style={{ color: '#C53030' }}>
                            This service is within Dubai only. For Abu Dhabi / other Emirates, we quote separately under a different service scope.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to get quote */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', textAlign: 'center' }}>How to get a fast quote</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>To send the most accurate quote, please share via WhatsApp:</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ background: 'white', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                <Package size={20} color="var(--muted-gold)" /> Item name + photo
                            </li>
                            <li style={{ background: 'white', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                <MapPin size={20} color="var(--muted-gold)" /> Pickup & drop location
                            </li>
                            <li style={{ background: 'white', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                <Truck size={20} color="var(--muted-gold)" /> Floor + lift access (both locations)
                            </li>
                        </ul>
                        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#777' }}>
                            We’ll reply with a clear quote and available slots.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '3rem' }}>FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "Is this service only for one item?", a: "Yes — one primary item per booking. If you have more items, we’ll quote a multi-item move." },
                            { q: "Do you wrap the item?", a: "Basic protection during handling is included. Extra wrapping/packing can be added if needed." },
                            { q: "Can you carry it upstairs?", a: "Yes, as long as access is safe. Floors/stairs impact manpower and pricing." },
                            { q: "Can you dismantle/reassemble?", a: "Yes for standard items (beds, tables) — we’ll confirm before booking." }
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
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to move a single item today?</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send the item photo and locations on WhatsApp and we’ll share a clear quote.</p>
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
