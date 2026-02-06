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
            subtitle={<><span style={{ display: 'block' }}>Professional home moving for apartments and villas.</span><span style={{ display: 'block' }}>Carefully packed, professionally handled, and planned end-to-end.</span></>}
            primaryCta={{
                text: "WhatsApp for a Quote",
                href: whatsAppUrl("Hi, I'd like a quote for home moving.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/get-a-quote"
            }}
            trustPoints={[
                { icon: <Truck size={18} />, text: "Trained moving teams & detailed packing checklist" },
                { icon: <FileText size={18} />, text: "Clear, transparent pricing" },
                { icon: <Shield size={18} />, text: "Optional coverage guidance (explained before booking)" }
            ]}
        >

            {/* Intro Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Move your home without the chaos</h2>
                            <div style={{
                                background: 'rgba(182, 141, 93, 0.12)',
                                borderLeft: '4px solid var(--muted-gold)',
                                padding: '1.5rem 1.75rem',
                                marginBottom: '2rem',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '0 2px 8px rgba(182, 141, 93, 0.15)',
                                border: '1px solid rgba(182, 141, 93, 0.25)',
                            }}>
                                <p style={{ color: 'var(--text-dark)', lineHeight: 1.7, margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
                                Moving homes isn’t just transport — it’s protecting belongings, coordinating access, and keeping the day organized. Box & Beyond provides a structured moving experience designed for Dubai homes: apartments, villas, estates, metro restrictions, and tight timelines.
                                </p>
                            </div>

                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>Who this service is for</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {[
                                    'Apartment moves, from studios to three-bedroom homes',
                                    'Villa relocations and family households',
                                    'Moves within the same community',
                                    'Move-in and move-out handovers with fixed building timelines',
                                    'Customers who value professional packing, careful handling, and an organized move day'
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
                            background: 'var(--deep-charcoal)',
                            color: 'white',
                            padding: '2.5rem',
                            borderLeft: '4px solid var(--muted-gold)'
                        }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600, color: 'white' }}>What&apos;s included</h3>
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
                                    <li key={i} style={{ ...bulletCheckStyle, color: 'rgba(255,255,255,0.95)' }}>
                                        <Check size={18} color="var(--muted-gold)" style={{ flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
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
                        <div style={{ ...cardStyle, background: 'var(--deep-charcoal)', padding: '1.5rem 1.75rem', color: 'white', textAlign: 'left' }}>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'white', margin: 0 }}>High-fragile handling guidance (TVs, mirrors, artwork)</p>
                        </div>
                        <div style={{ ...cardStyle, background: 'var(--deep-charcoal)', padding: '1.5rem 1.75rem', color: 'white', textAlign: 'left' }}>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'white', margin: 0 }}>Extended insurance for the precious items.</p>
                        </div>
                        <div style={{ ...cardStyle, background: 'var(--deep-charcoal)', padding: '1.5rem 1.75rem', color: 'white', textAlign: 'left' }}>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500, color: 'white', margin: 0 }}>Storage coordination (short/long term)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>How it works</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '2rem',
                        alignItems: 'stretch',
                    }} className="how-it-works-grid">
                        {[
                            { step: 1, title: "Share move details", text: "Send your home info, locations, date, and photos/video walkthrough on WhatsApp." },
                            { step: 2, title: "Receive a clear quote", text: "We confirm scope and provide a quote based on items, home size, and packing needs." },
                            { step: 3, title: "Move day execution", text: "Team arrives, does a quick walkthrough, protects key items, and moves inventory." },
                            { step: 4, title: "Final placement & handover", text: "Items are placed as requested. We do a final walkthrough before closing." }
                        ].map((s, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                position: 'relative',
                            }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '50%', background: 'var(--muted-gold)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', flexShrink: 0,
                                    marginBottom: '1rem',
                                }}>{s.step}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--text-dark)' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Guidance */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <div style={{
                        background: 'var(--soft-grey)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '2.5rem',
                        marginBottom: '3rem',
                    }}>
                        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '0.75rem', fontWeight: 600 }}>Pricing guidance (transparent, no surprises)</h2>
                        <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '1rem' }}>
                            Home moving costs depend on:
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                            {['Home size (studio / 1BR / 2BR / villa)', 'Packing level (none / partial / full)', 'Building access (lift size, parking, long carry, stairs)', 'Dismantling requirements', 'Distance and timing (peak dates end-of-month can vary)'].map((factor, i) => (
                                <span
                                    key={i}
                                    style={{
                                        background: 'rgba(255,255,255,0.9)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: 'var(--radius-md)',
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.95rem',
                                        color: 'var(--text-dark)',
                                        fontWeight: 500,
                                    }}
                                >
                                    {factor}
                                </span>
                            ))}
                        </div>
                        <p style={{ textAlign: 'center', margin: 0, fontWeight: 600 }}>Typical starting ranges:</p>
                    </div>

                    <div style={{
                        marginTop: '1.5rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.5rem',
                    }}>
                        {MOVING_PRICING.map((tier, i) => (
                            <div key={i} style={{
                                padding: '2rem',
                                background: 'white',
                                border: '1px solid #eee',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                            }}>
                                <h3 style={{ fontSize: '1.1rem', color: '#888', marginBottom: '0.5rem' }}>{tier.title}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.9rem', color: '#aaa' }}>from</span>
                                    <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--muted-gold)' }}>AED {tier.price}</span>
                                </div>
                                <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#555', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start', padding: 0, margin: 0 }}>
                                    {tier.features.slice(0, 2).map((feat, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>• {feat}</li>
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
                        <a href="/get-a-quote" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
}
