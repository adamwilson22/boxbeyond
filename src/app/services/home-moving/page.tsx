'use client';

import { Check, Truck, Shield, FileText } from 'lucide-react';
import { MOVING_PRICING } from '@/data/pricing';
import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletStyle, bulletCheckStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function HomeMovingPage() {
    return (
        <ServicePageLayout
            title="Home Moving in Dubai"
            subtitle="Professional home moving for apartments and villas — carefully packed, professionally handled, and planned end-to-end."
            primaryCta={{
                text: "WhatsApp for a Quote",
                href: whatsAppUrl("Hi, I'd like a quote for home moving.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            trustPoints={[
                { icon: <Truck size={18} />, text: "Trained moving teams & standard packing checklist" },
                { icon: <FileText size={18} />, text: "Clear scope and transparent pricing" },
                { icon: <Shield size={18} />, text: "Optional coverage guidance (explained before booking)" }
            ]}
        >

            {/* Intro Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Move your home without the chaos</h2>
                            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.1rem' }}>
                                Moving homes isn’t just transport — it’s protecting belongings, coordinating access, and keeping the day organized. Box & Beyond provides a structured moving experience designed for Dubai homes: apartments, villas, elevators, access restrictions, and tight timelines.
                            </p>

                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>Who this service is for</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {[
                                    'Apartment moves (studio to 3BR)',
                                    'Villa relocations and family moves',
                                    'Same-community moves (e.g., Marina → Marina, JVC → JVC)',
                                    'Move-in / move-out handovers with strict timing',
                                    'Customers who want professional packing and careful handling'
                                ].map((item, i) => (
                                    <li key={i} style={{ ...bulletStyle, fontSize: '0.95rem', fontWeight: 500 }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--muted-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '0.4rem' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{
                            ...cardStyle,
                            background: '#f9f9f9',
                            padding: '2.5rem'
                        }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>What&apos;s included (standard home move)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
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
                                    <li key={i} style={{ ...bulletCheckStyle }}>
                                        <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
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
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '4rem', fontWeight: 600 }}>Optional add-ons (recommended for a smoother move)</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>High-fragile handling guidance (TVs, mirrors, artwork)</h4>
                        </div>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>Extended insurance for the precious items.</h4>
                        </div>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>Storage coordination (short/long term)</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>How it works</h2>
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
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Pricing guidance (transparent, no surprises)</h2>
                    <p style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#666', maxWidth: '600px', margin: '0 auto 1rem' }}>
                        Home moving costs depend on:
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
                        {['Home size (studio / 1BR / 2BR / villa)', 'Packing level (none / partial / full)', 'Building access (lift size, parking, long carry, stairs)', 'Dismantling requirements', 'Distance and timing (peak dates end-of-month can vary)'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid #eee', color: '#555' }}>
                                {factor}
                            </span>
                        ))}
                    </div>

                    <p style={{ textAlign: 'center', marginBottom: '3rem', fontWeight: 600 }}>Typical starting ranges (example placeholders):</p>

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
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Dubai access & move permits (important)</h2>
                        <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '0' }}>
                            Some buildings and communities require move-in/move-out permissions and time slots. If your building requires approvals, we’ll guide you on what details are needed so your move goes smoothly.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section" style={{ background: '#fafafa' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem' }}>FAQs</h2>
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
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to book your home move?</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Get a quote via WhatsApp — share your home size, locations, date, and photos for accuracy.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href={whatsAppUrl("Hi, I'd like a quote for home moving.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for a Quote
                        </a>
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
}
