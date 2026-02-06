'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { Globe, Ship, Shield, Check, FileText, Truck } from 'lucide-react';
import { cardStyle, bulletCheckStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function InternationalPage() {
    return (
        <ServicePageLayout
            title="International Relocation (From / To Dubai)"
            subtitle="Door-to-door international moving with professional packing, shipping coordination, customs documentation support, and destination delivery — managed end-to-end through Box & Beyond and our vetted global freight partners."
            primaryCta={{
                text: "WhatsApp for an International Quote",
                href: whatsAppUrl("Hi, I'd like an international relocation quote.")
            }}
            secondaryCta={{
                text: "Request a Survey (Video / On-site)",
                href: "/get-a-quote"
            }}
            trustPoints={[
                { icon: <Globe size={18} />, text: "Survey-led quoting (more accurate, fewer surprises)" },
                { icon: <FileText size={18} />, text: "Inventory & customs packing list prepared for shipment" },
                { icon: <Shield size={18} />, text: "Sea & air freight options by timeline and budget" }
            ]}
        >

            {/* What we can handle (international scope) - boxes with headers and pointers */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 600 }}>What we can handle</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ ...cardStyle, background: 'white', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Survey & move planning (recommended)</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Video survey or in-home survey to estimate shipment size and requirements', 'Route planning: air freight vs sea freight vs partial shipment', 'Guidance on destination requirements and preparation steps (documents, timing, restrictions)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', gap: '0.6rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ ...cardStyle, background: 'white', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Professional export packing</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Export-grade packing using international removal cartons and reinforced protection', 'Disassembly, wrapping, itemising, and preparation for international transit', 'Optional: custom crating coordination (artwork, fragile items, specialty pieces)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', gap: '0.6rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ ...cardStyle, background: 'white', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Inventory & shipping documentation</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Detailed customs export packing list / inventory compiled for your shipment', 'Shipment booking with sea or air carrier (through freight partners)', 'Shipment tracking links where available'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', gap: '0.6rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ ...cardStyle, background: 'white', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Freight coordination (sea or air)</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Full container (FCL) or shared container (LCL) depending on volume and destination lane', 'Air freight for boxes / personal effects', 'Sea freight for full home moves; air for urgent/smaller shipments'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', gap: '0.6rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ ...cardStyle, background: 'white', borderLeft: '4px solid var(--muted-gold)', gridColumn: '1 / -1', maxWidth: '540px', margin: '0 auto' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>Customs clearance & destination delivery</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Document checks and coordination to facilitate customs clearance at destination', 'Destination delivery, unpacking, furniture placement, debris removal (when included)', 'Optional storage at origin or destination (subject to availability and scope)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem', gap: '0.6rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What you should prepare + Important restrictions */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
                        <div style={{ ...cardStyle, background: 'white', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>What you should prepare (customer checklist)</h3>
                            <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '1rem', fontSize: '0.95rem' }}>To reduce delays and unexpected charges, be ready with:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ ...bulletCheckStyle, fontWeight: 500, fontSize: '0.95rem' }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Passport copy and visa/residency documents valid for destination</span>
                                </li>
                                <li style={{ ...bulletCheckStyle, fontWeight: 500, fontSize: '0.95rem' }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Active inventory of items to be shipped</span>
                                </li>
                                <li style={{ ...bulletCheckStyle, fontWeight: 500, fontSize: '0.95rem' }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Any destination-specific approvals (if needed)</span>
                                </li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#555', lineHeight: 1.5 }}>
                                UAE move-in: personal-use items may be duty-exempt; new/commercial quantities may incur duty. Documents typically include passport, residency visa, and inventory list.
                            </p>
                        </div>
                        <div style={{ ...cardStyle, background: 'white', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>Important restrictions (air/sea safety – avoid shipment holds)</h3>
                            <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '1rem', fontSize: '0.95rem' }}>Many shipments are delayed due to restricted or dangerous goods.</p>
                            <p style={{ color: '#555', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Common items that can cause problems:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                                <li style={{ ...bulletDotStyle, fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Aerosols, paints, solvents, certain cleaning chemicals</span>
                                </li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Gas cylinders / flammables</span>
                                </li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.9rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Li-ion batteries / hoverboards — battery packs can be high fire hazard</span>
                                </li>
                            </ul>
                            <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#555', lineHeight: 1.5, margin: 0 }}>
                                Best policy: If an item has a hazard symbol or contains chemicals/pressurised contents, tell us before packing so we can advise safely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's included / Extras */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ ...cardStyle, background: 'white', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>What&apos;s included (standard international relocation package)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <li style={{ ...bulletCheckStyle }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Survey (video/on-site) and shipment plan</span>
                                </li>
                                <li style={{ ...bulletCheckStyle }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Export packing and furniture preparation</span>
                                </li>
                                <li style={{ ...bulletCheckStyle }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Inventory / packing list for customs</span>
                                </li>
                                <li style={{ ...bulletCheckStyle }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Pickup and transport to origin facility/port/airport (as per plan)</span>
                                </li>
                                <li style={{ ...bulletCheckStyle }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Freight coordination via partner network</span>
                                </li>
                                <li style={{ ...bulletCheckStyle }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Destination delivery (based on selected package)</span>
                                </li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Exact inclusions vary by lane (country), shipment size, and service level. We confirm scope and exclusions before booking.</p>
                        </div>
                        <div style={{ ...cardStyle, background: 'white', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>Extras (quoted separately)</h3>
                            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.25rem', lineHeight: 1.5 }}>To keep pricing honest and controlled, these are typically add-ons:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Storage at origin/destination</span>
                                </li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Custom crating (artwork/fragile/special items)</span>
                                </li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Special handling for high-value items</span>
                                </li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Destination services beyond delivery/unpacking (where applicable)</span>
                                </li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Any destination inspection fees, port/terminal fees, or customs charges (country-dependent)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>How it works</h2>
                    <div style={{ display: 'grid', gap: '2rem', alignItems: 'stretch' }} className="how-it-works-grid how-it-works-5">
                        {[
                            { step: 1, title: "Share your move details", text: "Origin, destination, date range, home size." },
                            { step: 2, title: "Survey & plan", text: "Video/on-site assessment." },
                            { step: 3, title: "Export packing + inventory", text: "Packing and inventory preparation." },
                            { step: 4, title: "Freight + tracking", text: "Shipment and tracking coordination." },
                            { step: 5, title: "Customs clearance + delivery", text: "Per selected service level." }
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', position: 'relative' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--muted-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', flexShrink: 0, marginBottom: '1rem' }}>{s.step}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--text-dark)' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing guidance (transparent) - tags as pointers */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', textAlign: 'center', fontWeight: 600 }}>Pricing guidance (transparent)</h2>
                    <p style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#555' }}>International moving costs depend on:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        {['Shipment size (boxes vs full household)', 'Mode (sea vs air)', 'Destination lane seasonality', 'Packing level and special items', 'Service level (door-to-door vs port-to-door)'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.5rem 1rem', fontSize: '0.95rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                                {factor}
                            </span>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', color: '#666', lineHeight: 1.7 }}>We quote based on survey and declared inventory to avoid surprises.</p>
                </div>
            </section>

            {/* FAQs */}
            <section className="section" style={{ background: '#fafafa' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem' }}>FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "Do you offer door-to-door international relocation?", a: "Yes — we can arrange door-to-door handling through our partner network depending on destination." },
                            { q: "Can I ship by air if I'm in a hurry?", a: "Yes, for smaller/urgent shipments. Sea freight is usually more economical for full home moves." },
                            { q: "Do you help with customs rules by country?", a: "We guide you on documents and common requirements, but rules vary by country. Many movers reference country customs guides such as those published by FIDI (informational resource)." },
                            { q: "Is my shipment insured?", a: "We offer guidance on coverage options and will explain what applies before booking (based on declared value and terms)." },
                            { q: "What items should not be shipped?", a: "Hazardous/dangerous goods (chemicals, aerosols, some batteries) can be restricted—tell us in advance so we can advise." }
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
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to plan your international move?</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your origin + destination + date range + home size on WhatsApp. If you can, share a quick video walkthrough for accurate scoping.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href={whatsAppUrl("Hi, I'd like an international relocation quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for an International Quote
                        </a>
                        <a href="/get-a-quote" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request a Survey (Video / On-site)
                        </a>
                    </div>
                </div>
            </section>

        </ServicePageLayout>
    );
}
