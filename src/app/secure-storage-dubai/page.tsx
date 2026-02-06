'use client';

import { Lock, Thermometer, Package, CheckCircle, AlertTriangle, Shield, Box } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function StoragePage() {
    return (
        <ServicePageLayout
            title="Secure Storage in Dubai (Partner-Managed)"
            subtitle={<>Secure facilities with monitored access (features vary by partner). Climate-safe storage options for Dubai conditions. Storage units sized to fit anything from boxes to full homes.</>}
            primaryCta={{
                text: "WhatsApp for Storage Quote",
                href: whatsAppUrl("Hi, I'd like a storage quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/get-a-quote"
            }}
            trustPoints={[
                { icon: <Lock size={18} />, text: "Secure facilities with monitored access (features vary by partner)" },
                { icon: <Thermometer size={18} />, text: "Climate-safe storage options for Dubai conditions" },
                { icon: <Package size={18} />, text: "Storage units sized to fit anything from boxes to full homes" }
            ]}
        >

            {/* Who storage is perfect for + Storage Option Sizes + Security & facility + What cannot be stored — combined in one box */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        <div style={{ ...cardStyle, background: 'white', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Who storage is perfect for</h2>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
                                {['Between homes (handover gap between move-out and move-in)', 'Renovations (store furniture safely while work is ongoing)', 'Travel / temporary relocation', 'Decluttering (seasonal items, spare furniture)', 'Business storage (stock, archives, equipment)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', gap: '0.6rem', marginBottom: '0.5rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600 }}>Storage option sizes</h3>
                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.75rem' }}>Storage is priced mainly by size and duration. Typical market sizing includes:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    { label: 'XS / locker / boxes', desc: 'Documents, luggage, small items' },
                                    { label: 'Small units', desc: 'Small furniture, appliances' },
                                    { label: 'Medium units', desc: 'Bedroom/studio contents' },
                                    { label: 'Large units', desc: '1–2BR contents, business inventory' },
                                    { label: 'XL units', desc: 'Villas / commercial storage' },
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                                        <Box size={16} style={{ color: 'var(--muted-gold)', flexShrink: 0, marginTop: '2px' }} />
                                        <span><strong>{item.label}</strong> — {item.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ ...cardStyle, background: 'white', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Shield size={20} color="var(--muted-gold)" /> Security & facility features
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.75rem' }}>Most reputable Dubai storage providers compete on:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
                                {['24/7 CCTV monitoring', 'Fire protection systems (sprinklers/alarms vary by facility)', 'Climate control / air-conditioning to protect furniture and electronics', 'Controlled entry/access systems (facility-dependent)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', gap: '0.6rem', marginBottom: '0.5rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>We&apos;ll recommend the right facility option based on what you&apos;re storing.</p>

                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <AlertTriangle size={20} color="#c53030" /> What cannot be stored
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Most storage facilities restrict:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Perishables/food', 'Flammables, chemicals, hazardous materials', 'Illegal/prohibited items'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', gap: '0.6rem', marginBottom: '0.4rem', color: '#c53030' }}>
                                        <span style={{ color: '#c53030', fontSize: '0.5rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.75rem' }}>We&apos;ll confirm partner facility rules before booking.</p>
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.95rem', color: '#555' }}>If you want the fastest quote: share a quick photo/video walkthrough on WhatsApp.</p>
                </div>
            </section>

            {/* How Storage Works — unified process flow */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', textAlign: 'center', fontWeight: 600 }}>How storage works</h2>
                    <p style={{ textAlign: 'center', color: '#666', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>Because storage is managed by partner facilities, we operate as your storage coordinator:</p>
                    <div style={{ display: 'grid', gap: '2rem', alignItems: 'stretch' }} className="how-it-works-grid how-it-works-5">
                        {[
                            { step: 1, title: "Tell us what you're storing", desc: "Home size (studio/1BR/2BR), rough item list, and expected duration." },
                            { step: 2, title: "We recommend the right unit size", desc: "We match you with the appropriate partner unit size and facility features." },
                            { step: 3, title: "Pickup or drop-off", desc: "Drop off at facility or request pickup + transport (quoted separately)" },
                            { step: 4, title: "Payment (advance)", desc: "Storage payments typically made in advance (monthly/quarterly/annually)." },
                            { step: 5, title: "Access & retrieval", desc: "Access rules vary by facility. We confirm access terms upfront." }
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--muted-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', flexShrink: 0, marginBottom: '1rem' }}>{s.step}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-dark)' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing guidance — pointers in box */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Pricing guidance (transparent)</h2>
                    <p style={{ marginBottom: '1rem', textAlign: 'center', color: '#555' }}>Storage cost depends on:</p>
                    <div style={{ ...cardStyle, background: 'white', marginBottom: '2rem' }}>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, margin: 0 }}>
                            {['Unit size (biggest factor)', 'Facility location (central locations can cost more)', 'Climate control (recommended for Dubai heat)', 'Access type (extended access features can affect price)', 'Duration / payment term (monthly vs longer commitments)'].map((factor, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                                    <div style={{ width: '6px', height: '6px', background: 'var(--muted-gold)', borderRadius: '50%', flexShrink: 0 }} />
                                    <span>{factor}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                        {[
                            { label: 'Small units', sq: 'around 25 sq ft', price: 'AED 300–400/month' },
                            { label: '50 sq ft', sq: '(studio contents)', price: 'AED 900–1,400/month' },
                            { label: 'Larger units', sq: '(75–120 sq ft+)', price: 'Varies by location/features' },
                        ].map((item, i) => (
                            <div key={i} style={{ ...cardStyle, textAlign: 'center', padding: '1.25rem', background: 'white' }}>
                                <div style={{ fontSize: '0.85rem', color: 'var(--muted-gold)', fontWeight: 600 }}>{item.label}</div>
                                <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>{item.sq}</div>
                                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--muted-gold)' }}>{item.price}</div>
                            </div>
                        ))}
                    </div>
                    <div style={{ ...cardStyle, maxWidth: '640px', margin: '0 auto', background: 'rgba(182, 141, 93, 0.06)', borderColor: 'rgba(182, 141, 93, 0.25)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle size={22} style={{ color: 'var(--muted-gold)', flexShrink: 0 }} />
                        <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>Final pricing is confirmed once we match your requirement to a unit size and partner facility availability. Payments are made in advance.</p>
                    </div>

                    {/* What's included vs quoted separately */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        <div style={{ ...cardStyle, background: 'white', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem' }}>Included (storage)</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} /><span>Storage unit rental (partner facility)</span></li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0 }} /><span>Basic facility security & access terms (per partner plan)</span></li>
                            </ul>
                        </div>
                        <div style={{ ...cardStyle, background: 'white', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.75rem' }}>Quoted separately (if requested)</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Pickup and delivery transport', 'Packing materials / professional packing', 'Dismantling and reassembly (if needed)', 'Special handling for bulky/fragile items'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem' }}>FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "Do you manage the storage facility directly?", a: "Storage is provided by our vetted partner facilities; Box & Beyond coordinates the process and can arrange pickup/delivery if needed." },
                            { q: "How do I know what unit size I need?", a: "Tell us your home size and share a video walkthrough—we'll recommend the best fit." },
                            { q: "Do I have to pay in advance?", a: "Yes, storage is typically paid in advance (monthly or longer terms depending on partner plan)." },
                            { q: "Can I access my items anytime?", a: "Access policies vary by facility. Some offer extended access; others are appointment-based. We'll confirm access terms upfront." }
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
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to store your items securely?</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Message us on WhatsApp with your home size + duration + items, and we&apos;ll recommend the right storage unit and provide a clear quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like a storage quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Storage Quote
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
