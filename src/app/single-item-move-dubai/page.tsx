'use client';

import { Check, Info, Calculator, AlertTriangle } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletCheckStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function SingleItemPage() {
    return (
        <ServicePageLayout
            title="Single Item Moving in Dubai"
            subtitle={<><span style={{ display: 'block' }}>Fast, careful delivery for one item — within Dubai only.</span><span style={{ display: 'block' }}>Ideal for a sofa, bed, washing machine, dining table, TV, or any single bulky item that needs professional handling.</span></>}
            primaryCta={{
                text: "WhatsApp for a Quote",
                href: whatsAppUrl("Hi, I'd like a quote for single item move.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/get-a-quote"
            }}
            trustPoints={[
                { icon: <Check size={18} />, text: "Dubai only" },
                { icon: <Check size={18} />, text: "Single item per booking" },
                { icon: <Info size={18} />, text: "Price changes if there's more than one item" }
            ]}
        >

            {/* Definition & Audience */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>What counts as “Single Item”</h3>
                            <div style={{
                                background: 'rgba(182, 141, 93, 0.12)',
                                borderLeft: '4px solid var(--muted-gold)',
                                padding: '1.5rem 1.75rem',
                                marginBottom: '2rem',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '0 2px 8px rgba(182, 141, 93, 0.15)',
                                border: '1px solid rgba(182, 141, 93, 0.25)',
                            }}>
                                <p style={{ color: 'var(--text-dark)', lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
                                A “single item move” means one primary item (e.g., 1 sofa OR 1 bed OR 1 washing machine).
                                If you have multiple items (even if small), it becomes a multi-item move and pricing changes.
                                </p>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Who this service is perfect for</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {[
                                    'Buying or selling furniture on Dubizzle/Marketplace',
                                    'Moving one bulky item between apartments/villas',
                                    'Sending a single item to storage',
                                    'Picking up an item from a shop/warehouse and delivering to your home',
                                    'Small businesses wishing to deliver single item orders'
                                ].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', fontWeight: 500 }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--muted-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '0.4rem' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ background: 'var(--deep-charcoal)', color: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600, color: 'white' }}>What’s included?</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Vehicle + driver',
                                    '1–2 movers (based on item type)',
                                    'Loading and unloading',
                                    'Basic protection during handling (wrap/blanket protection as needed)',
                                    'Placement at the drop-off location',
                                    'Additional price for installation'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.8rem', fontSize: '0.95rem', color: 'white' }}>
                                        <Check size={18} color="var(--muted-gold)" style={{ marginTop: '3px', flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
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
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>What affects the price?</h2>
                            <p style={{ marginBottom: '2rem', color: 'white', fontSize: '1.1rem', fontWeight: 500 }}>We keep pricing simple and clear. Your quote depends on:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {[
                                    'Item type & size (sofa vs fridge vs king bed)',
                                    'Floors / stairs / elevator access',
                                    'Distance within Dubai',
                                    'Parking and long-carry distance (if the truck can\'t park near the entrance)',
                                    'Dismantle / reassembly (if needed)',
                                    'Extra manpower (for heavy/bulky items)'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.95)' }}>
                                        <span style={{ width: 22, height: 22, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Calculator size={22} color="var(--muted-gold)" strokeWidth={2} />
                                        </span>
                                        <span style={{ lineHeight: 1.5 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.08)', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.15)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--muted-gold)' }}>Why single-item moves aren’t “cheap pickups”</h3>
                            <p style={{ lineHeight: 1.7, color: 'white', marginBottom: '1.5rem' }}>
                                Even for one item, there are real operating costs behind every trip: crew salaries, truck and maintenance, fuel and Salik, scheduling and coordination.
                            </p>
                            <p style={{ fontWeight: 600, color: 'white' }}>We&apos;d rather be honest about this than give a &quot;cheap&quot; price that turns into surprises later.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Policy */}
            <section className="section">
                <div className="container" style={{ textAlign: 'left' }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto', background: '#FEF2F2', padding: '1.75rem 2rem', borderRadius: 'var(--radius-md)', border: '2px solid #DC2626' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <AlertTriangle size={24} color="#DC2626" style={{ flexShrink: 0 }} />
                            <h3 style={{ fontSize: '1.35rem', color: '#DC2626', fontWeight: 700, margin: 0 }}>Dubai-only policy (important)</h3>
                        </div>
                        <p style={{ color: '#991B1B', lineHeight: 1.7, margin: 0, fontSize: '1rem' }}>
                            <span style={{ display: 'block' }}>This service is within Dubai only.</span>
                            <span style={{ display: 'block', marginTop: '0.5rem' }}>For Abu Dhabi / other Emirates, we quote separately under a different service scope.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* How to get quote */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', textAlign: 'center', fontWeight: 600 }}>How to get a fast quote (WhatsApp)</h2>
                    <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 3rem' }}>To send the most accurate quote, please share:</p>
                    <div style={{ display: 'grid', gap: '2rem', alignItems: 'stretch' }} className="how-it-works-grid">
                        {[
                            { step: 1, title: "Item name + photo", text: "Send a clear photo and item type so we can assess size and handling." },
                            { step: 2, title: "Pickup & drop location", text: "Full addresses or landmarks for both locations." },
                            { step: 3, title: "Floor / lift access", text: "Building floors and whether lifts are available at both ends." },
                            { step: 4, title: "Preferred date / time", text: "When you need the move — we’ll confirm availability and slot." }
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--muted-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', flexShrink: 0, marginBottom: '1rem' }}>{s.step}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--text-dark)' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{s.text}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.95rem', color: '#666' }}>
                            We’ll reply with a clear quote and available slots.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem' }}>FAQs</h2>
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
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to move a single item today?</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send the item photo and locations on WhatsApp and we’ll share a clear quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href={whatsAppUrl("Hi, I'd like a quote for single item move.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
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
