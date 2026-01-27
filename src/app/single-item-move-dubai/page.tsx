'use client';

import { Check, Info, Truck, MapPin, Package, Clock, Calculator, AlertTriangle } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, cardStyleCompact, bulletCheckStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function SingleItemPage() {
    return (
        <ServicePageLayout
            title="Single Item Moving in Dubai"
            subtitle="Fast, careful delivery for one item — within Dubai only. Ideal for a sofa, bed, washing machine, dining table, TV, or any single bulky item that needs professional handling."
            primaryCta={{
                text: "WhatsApp for a Quote",
                href: whatsAppUrl("Hi, I'd like a quote for single item move.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            badges={[
                { icon: <Check size={16} color="green" />, text: "Dubai only" },
                { icon: <Check size={16} color="green" />, text: "Single item per booking" },
                { icon: <Info size={16} color="orange" />, text: "Price changes if there's more than one item" }
            ]}
        >

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
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {[
                                    'Buying or selling furniture on Dubizzle/Marketplace',
                                    'Moving one bulky item between apartments',
                                    'Sending a single item to storage',
                                    'Picking up an item from a shop/warehouse and delivering to your home'
                                ].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', fontWeight: 500 }}>
                                        <div style={{ width: '6px', height: '6px', background: 'var(--muted-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '0.4rem' }} />
                                        <span>{item}</span>
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
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What affects the price?</h2>
                            <p style={{ marginBottom: '2rem', opacity: 0.8, fontSize: '1.1rem' }}>We keep pricing simple and clear. Your quote depends on:</p>
                            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {[
                                    'Item type & size (sofa vs fridge vs king bed)',
                                    'Floors / stairs / elevator access',
                                    'Distance within Dubai',
                                    'Parking and long-carry distance (if the truck can\'t park near the entrance)',
                                    'Dismantle / reassembly (if needed)',
                                    'Extra manpower (for heavy/bulky items)'
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
                                Even for one item, there are real operating costs behind every trip: crew salaries, truck and maintenance, fuel and Salik, scheduling and coordination.
                            </p>
                            <p style={{ fontWeight: 600 }}>We&apos;d rather be honest about this than give a &quot;cheap&quot; price that turns into surprises later.</p>
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
                            <h3 style={{ fontSize: '1.5rem', color: '#C53030', fontWeight: 600, margin: 0 }}>Dubai-only policy (important)</h3>
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
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>How to get a fast quote (WhatsApp)</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>To send the most accurate quote, please share:</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {[
                                { icon: <Package size={20} color="var(--muted-gold)" />, text: 'Item name + photo' },
                                { icon: <MapPin size={20} color="var(--muted-gold)" />, text: 'Pickup & drop location' },
                                { icon: <Truck size={20} color="var(--muted-gold)" />, text: 'Floor + lift access (both locations)' },
                                { icon: <Clock size={20} color="var(--muted-gold)" />, text: 'Preferred date / time' }
                            ].map((item, i) => (
                                <li key={i} style={{ ...cardStyleCompact, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    {item.icon}
                                    <span style={{ fontSize: '0.95rem', color: '#555' }}>{item.text}</span>
                                </li>
                            ))}
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
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>

        </ServicePageLayout>
    );
}
