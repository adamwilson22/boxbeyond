'use client';

import { Lock, Thermometer, Package, Box, CheckCircle, AlertTriangle, Info, Shield } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletCheckStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function StoragePage() {
    return (
        <ServicePageLayout
            title="Secure Storage in Dubai (Partner-Managed)"
            subtitle="Clean, secure, and climate-safe storage solutions in Dubai — coordinated by Box & Beyond through our vetted storage partners. Whether you're moving, renovating, traveling, or need business storage, we help you choose the right unit size and handle the pickup/delivery flow."
            primaryCta={{
                text: "WhatsApp for Storage Quote",
                href: whatsAppUrl("Hi, I'd like a storage quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            trustPoints={[
                { icon: <Lock size={18} />, text: "CCTV + controlled access (partner facility features vary)" },
                { icon: <Thermometer size={18} />, text: "Climate-controlled options available for Dubai heat (recommended for furniture/electronics)" },
                { icon: <Package size={18} />, text: "Flexible unit sizes (from boxes/lockers to apartment-size units)" }
            ]}
        >

            {/* Who storage is perfect for */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Who storage is perfect for</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '4rem' }}>
                        {['Between homes (handover gap between move-out and move-in)', 'Renovations (store furniture safely while work is ongoing)', 'Travel / temporary relocation', 'Decluttering (seasonal items, spare furniture)', 'Business storage (stock, archives, equipment)'].map((item, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.6rem 1.15rem', borderRadius: '999px', fontSize: '0.9rem', border: '1px solid #e8e8e8', color: '#555', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>{item}</span>
                        ))}
                    </div>

                    {/* How Box & Beyond storage works (simple) */}
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center', fontWeight: 600 }}>How Box & Beyond storage works (simple)</h2>
                    <p style={{ textAlign: 'center', color: '#666', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.6, fontSize: '1rem' }}>
                        Because storage is managed by partner facilities, we operate as your storage coordinator:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
                        {[
                            { step: 1, title: "Tell us what you're storing", text: "Home size (studio/1BR/2BR), rough item list, and expected duration." },
                            { step: 2, title: "We recommend the right unit size", text: "We match you with the appropriate partner unit size and facility features." },
                            { step: 3, title: "Pickup or drop-off", text: "You can either:\nDrop off at the facility, or\nRequest pickup + transport through Box & Beyond (quoted separately)" },
                            { step: 4, title: "Payment (advance)", text: "Storage payments are typically made in advance (monthly/quarterly/annually depending on partner plan)." },
                            { step: 5, title: "Access & retrieval", text: "Access rules vary by facility (some are appointment-based; some offer extended access). We confirm access terms upfront." }
                        ].map((s, i) => (
                            <div key={i} style={{ ...cardStyle, padding: '1.5rem' }}>
                                <div style={{ width: '36px', height: '36px', background: 'var(--muted-gold)', borderRadius: '10px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>{s.step}</div>
                                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', fontWeight: 600 }}>{s.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Storage options (sizes) */}
            <section className="section" style={{ background: '#f5f5f7' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', textAlign: 'center', fontWeight: 600 }}>Storage options (sizes)</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '1.75rem', fontSize: '1rem' }}>Storage is priced mainly by size and duration. Typical market sizing includes:</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        {[
                            { label: 'XS / locker / boxes', desc: 'Documents, luggage, small items' },
                            { label: 'Small units', desc: 'Small furniture, appliances' },
                            { label: 'Medium units', desc: 'Bedroom/studio contents' },
                            { label: 'Large units', desc: '1–2BR contents, business inventory' },
                            { label: 'XL units', desc: 'Villas / commercial storage' },
                        ].map((item, i) => (
                            <div key={i} style={{ ...cardStyle, padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <Box size={20} style={{ color: 'var(--muted-gold)', flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.label}</div>
                                    <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.4 }}>{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                        <Info size={18} style={{ color: 'var(--muted-gold)' }} />
                        <span style={{ fontSize: '0.95rem', color: '#555' }}>If you want the fastest quote: share a quick photo/video walkthrough on WhatsApp.</span>
                    </div>

                    {/* Security & facility features */}
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>Security & facility features (what to expect)</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>Most reputable Dubai storage providers compete on:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        {['24/7 CCTV monitoring', 'Fire protection systems (sprinklers/alarms vary by facility)', 'Climate control / air-conditioning to protect furniture and electronics', 'Controlled entry/access systems (facility-dependent)'].map((item, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.8rem 1.2rem', borderRadius: '12px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #eee', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
                                <Shield size={18} color="var(--muted-gold)" /> {item}
                            </span>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>We&apos;ll recommend the right facility option based on what you&apos;re storing.</p>
                </div>
            </section>

            {/* Pricing guidance (transparent) */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>Pricing guidance (transparent)</h2>
                    <p style={{ marginBottom: '1.5rem', fontWeight: 600, textAlign: 'center' }}>Storage cost depends on:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        {['Unit size (biggest factor)', 'Facility location (central locations can cost more)', 'Climate control (recommended for Dubai heat)', 'Access type (extended access features can affect price)', 'Duration / payment term (monthly vs longer commitments)'].map((factor, i) => (
                            <span key={i} style={{ background: 'var(--soft-grey)', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555' }}>{factor}</span>
                        ))}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, textAlign: 'center', marginBottom: '1.25rem', color: '#333' }}>Indicative ranges (Dubai market guides):</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
                        {[
                            { label: 'Small units', sq: 'around 25 sq ft', price: 'AED 300–400/month', desc: 'are often in this range' },
                            { label: '50 sq ft', sq: '(often suitable for studio contents)', price: 'AED 900–1,400/month', desc: 'commonly ranges' },
                            { label: 'Larger units', sq: '(75–120 sq ft+)', price: 'Varies', desc: 'vary widely based on location/features' },
                        ].map((item, i) => (
                            <div key={i} style={{ ...cardStyle, textAlign: 'center', padding: '1.75rem' }}>
                                <div style={{ fontSize: '0.85rem', color: 'var(--muted-gold)', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
                                <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.75rem' }}>{item.sq}</div>
                                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--muted-gold)', marginBottom: '0.5rem' }}>{item.price}</div>
                                <div style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.4 }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                    <div style={{ ...cardStyle, maxWidth: '640px', margin: '0 auto 2.5rem', background: 'rgba(182, 141, 93, 0.06)', borderColor: 'rgba(182, 141, 93, 0.25)', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1.25rem 1.5rem' }}>
                        <CheckCircle size={22} style={{ color: 'var(--muted-gold)', flexShrink: 0 }} />
                        <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>Final pricing is confirmed once we match your requirement to a unit size and partner facility availability. Payments are made in advance.</p>
                    </div>

                    {/* What's included vs. quoted separately */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ ...cardStyle }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <CheckCircle size={22} style={{ color: 'var(--muted-gold)' }} />
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: 0 }}>Included (storage)</h3>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#555', fontSize: '0.95rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#22c55e', flexShrink: 0 }} /> Storage unit rental (partner facility)</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} style={{ color: '#22c55e', flexShrink: 0 }} /> Basic facility security &amp; access terms (per partner plan)</li>
                            </ul>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                <Package size={22} style={{ color: 'var(--muted-gold)' }} />
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: 0 }}>Quoted separately (if requested)</h3>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: '#555', fontSize: '0.95rem' }}>
                                {['Pickup and delivery transport', 'Packing materials / professional packing', 'Dismantling and reassembly (if needed)', 'Special handling for bulky/fragile items'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What you cannot store (important) */}
            <section className="section" style={{ background: '#fff5f5', borderTop: '1px solid #ffe0e0' }}>
                <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <AlertTriangle size={24} color="#c53030" /> What you cannot store (important)
                    </h3>
                    <p style={{ color: '#555', lineHeight: 1.6, marginBottom: '1rem' }}>Most storage facilities restrict:</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        {['Perishables/food', 'Flammables, chemicals, hazardous materials', 'Illegal/prohibited items'].map((item, i) => (
                            <li key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #ffcccc', fontSize: '0.9rem', color: '#c53030' }}>{item}</li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>We&apos;ll confirm partner facility rules before booking.</p>
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
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>

        </ServicePageLayout>
    );
}
