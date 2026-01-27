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
                href: "/#contact"
            }}
            trustPoints={[
                { icon: <Globe size={18} />, text: "Survey-led quoting (more accurate, fewer surprises)" },
                { icon: <FileText size={18} />, text: "Detailed inventory / customs packing list prepared for shipment" },
                { icon: <Shield size={18} />, text: "Sea & air freight options depending on timeline and budget" }
            ]}
        >

            {/* What we can handle (international scope) */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 600 }}>What we can handle (international scope)</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '900px', margin: '0 auto' }}>
                        {/* 1) Survey & move planning */}
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>1) Survey & move planning (recommended)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Video survey or in-home survey to estimate shipment size and requirements</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Route planning: air freight vs sea freight vs partial shipment</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Guidance on destination requirements and preparation steps (documents, timing, restrictions)</span></li>
                            </ul>
                        </div>

                        {/* 2) Professional export packing */}
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>2) Professional export packing</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Export-grade packing using international removal cartons and reinforced protection</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Disassembly, wrapping, itemising, and preparation for international transit</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Optional: custom crating coordination (artwork, fragile items, specialty pieces)</span></li>
                            </ul>
                        </div>

                        {/* 3) Inventory & shipping documentation support */}
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>3) Inventory & shipping documentation support</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>A detailed customs export packing list / inventory compiled for your shipment</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Shipment booking with sea or air carrier (through freight partners)</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Shipment tracking links where available</span></li>
                            </ul>
                        </div>

                        {/* 4) Freight coordination (sea or air) */}
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>4) Freight coordination (sea or air)</h3>
                            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1rem', lineHeight: 1.6 }}>
                                Sea freight is typically chosen for full home moves and larger shipments, with longer transit times.<br />
                                Air freight is usually for urgent, smaller shipments and essential items.
                            </p>
                            <p style={{ fontSize: '0.95rem', color: '#555', fontWeight: 600, marginBottom: '0.75rem' }}>Options can include:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Full container (FCL) or shared container (LCL) (depending on volume and destination lane)</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Air freight for boxes / personal effects</span></li>
                            </ul>
                        </div>

                        {/* 5) Customs clearance & destination delivery */}
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>5) Customs clearance & destination delivery</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Document checks and coordination to facilitate customs clearance at destination</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Destination delivery, unpacking of cartons, furniture placement, and debris removal (when included in the selected service package)</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Optional storage at origin or destination (subject to availability and scope)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What you should prepare + Important restrictions */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
                        <div>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600 }}>What you should prepare (customer checklist)</h2>
                            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1.5rem' }}>To reduce delays and unexpected charges, be ready with:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ ...bulletCheckStyle, fontWeight: 500 }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Passport copy and visa/residency documents (varies by destination)</span>
                                </li>
                                <li style={{ ...bulletCheckStyle, fontWeight: 500 }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>A clear inventory of items to be shipped</span>
                                </li>
                                <li style={{ ...bulletCheckStyle, fontWeight: 500 }}>
                                    <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>Any destination-specific approvals or permits (if needed)</span>
                                </li>
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>
                                If you&apos;re relocating into the UAE (Dubai): Dubai Customs states personal-use/used household items may be duty-exempt after inspection, while goods deemed new/commercial quantities may be charged duty (noting a 5% customs duty in such cases). Dubai Customs also lists commonly required documents such as passport copy, residency visa copy, and a written list of imported goods.
                            </p>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>Important restrictions (air/sea safety – avoid shipment holds)</h3>
                            <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '1rem' }}>Many international shipments are delayed due to restricted or dangerous goods.</p>
                            <p style={{ color: '#555', fontWeight: 600, marginBottom: '0.75rem' }}>Common items that can cause problems:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Aerosols, paints, solvents, certain cleaning chemicals</span>
                                </li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Gas canisters / flammables</span>
                                </li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                    <span>Loose lithium batteries / battery packs (air freight restrictions vary)</span>
                                </li>
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, marginBottom: '1rem' }}>
                                IATA guidance highlights that lithium and sodium-ion batteries are subject to strict rules, and spare batteries are generally not allowed in checked baggage for passengers; dangerous goods require correct preparation by qualified personnel unless excepted.
                            </p>
                            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#555' }}>
                                Best policy: If an item has a hazard symbol or contains chemicals/pressurised contents, tell us before packing so we can advise safely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's included / Extras */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ ...cardStyle }}>
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
                        <div style={{ ...cardStyle }}>
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

            {/* How it works (simple) */}
            <section className="section" style={{ background: 'var(--deep-charcoal)', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '4rem', textAlign: 'center' }}>How it works (simple)</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
                        {[
                            { step: 1, title: "Share your move details", text: "(origin, destination, date range, home size)" },
                            { step: 2, title: "Survey & plan", text: "(video/on-site)" },
                            { step: 3, title: "Export packing + inventory", text: "" },
                            { step: 4, title: "Freight + tracking", text: "" },
                            { step: 5, title: "Customs clearance + delivery", text: "(per selected service level)" }
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
                                {step.text && <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: 1.6 }}>{step.text}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing guidance (transparent) */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Pricing guidance (transparent)</h2>
                    <p style={{ marginBottom: '1.5rem', fontWeight: 600, textAlign: 'center' }}>International moving costs depend on:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        {['Shipment size (boxes vs full household)', 'Mode (sea vs air)', 'Destination lane + seasonality', 'Packing level and special items', 'Service level (door-to-door vs port-to-door)'].map((factor, i) => (
                            <span key={i} style={{ background: 'var(--soft-grey)', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555' }}>{factor}</span>
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
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request a Survey (Video / On-site)
                        </a>
                    </div>
                </div>
            </section>

        </ServicePageLayout>
    );
}
