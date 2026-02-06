'use client';

import { Check, Clock, Monitor, FileText } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletCheckStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function OfficeMovingPage() {
    return (
        <ServicePageLayout
            title="Office & Commercial Moving in Dubai"
            subtitle={<><span style={{ display: 'block' }}>Plan-led office relocations designed to minimize downtime — with clear scope, careful handling, and professional coordination.</span><span style={{ display: 'block' }}>From small offices to multi-department moves, we manage packing, labeling, transport, and placement so your team can get back to work fast.</span></>}
            primaryCta={{
                text: "Request Corporate Quote (WhatsApp)",
                href: whatsAppUrl("Hi, I'd like a corporate quote for office relocation.")
            }}
            secondaryCta={{
                text: "Request Callback / Site Survey",
                href: "/get-a-quote"
            }}
            trustPoints={[
                { icon: <Clock size={18} />, text: "After-hours/weekend moves available (subject to SLA)" },
                { icon: <Monitor size={18} />, text: "IT equipment handling & labeling support (packing + transport)" },
                { icon: <FileText size={18} />, text: "Pre-move survey recommended for accurate scoping" }
            ]}
        >

            {/* What we can do for your office move (scope) */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 600 }}>What we can do for your office move</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
                        {/* Pre-Move Planning */}
                        <div style={{ ...cardStyle, borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', fontWeight: 600, color: 'var(--text-dark)' }}>Pre-Move Planning (Recommended)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0, margin: 0 }}>
                                {['Site survey (on-site or photo/video for small offices)', 'Move timeline planning (phased if required)', 'Packing and labeling strategy by department', 'Access and loading plan (parking, lift booking, loading bay)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Packing & Protection */}
                        <div style={{ ...cardStyle, borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', fontWeight: 600, color: 'var(--text-dark)' }}>Packing & Protection</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0, margin: 0 }}>
                                {['Packing of documents, stationery, pantry items, and non-IT equipment', 'Protective wrapping for furniture', 'Optional export-grade packing, archive boxing, and crate rental'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span><span>{item}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* IT Equipment Handling */}
                        <div style={{ ...cardStyle, borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', fontWeight: 600, color: 'var(--text-dark)' }}>IT Equipment Handling (Packing & Transport Only)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0, margin: '0 0 1rem 0' }}>
                                {['Labeling, packing, and safe transport of monitors, CPUs, and peripherals', 'Anti-static packing available if required'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6, padding: '0.75rem 1rem', background: '#f9f9f9', borderRadius: '8px', margin: 0 }}>
                                <strong>Note:</strong> Network wiring, re-installation, rack setup, and system configuration are excluded and quoted separately. We can coordinate with your IT vendor.
                            </p>
                        </div>

                        {/* Furniture Moving & Placement */}
                        <div style={{ ...cardStyle, borderLeft: '4px solid var(--muted-gold)' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', fontWeight: 600, color: 'var(--text-dark)' }}>Furniture Moving & Placement</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0, margin: '0 0 1rem 0' }}>
                                {['Move and placement of desks, cabinets, tables, and partitions in designated areas', 'Clear upfront quoting for heavy or oversized items requiring additional manpower'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.5rem', flexShrink: 0 }}>●</span><span>{item}</span></li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6, padding: '0.75rem 1rem', background: '#f9f9f9', borderRadius: '8px', margin: 0 }}>
                                <strong>Note:</strong> Furniture assembly/re-assembly is excluded unless specifically agreed.
                            </p>
                        </div>

                        {/* After-Hours & Weekend Moves */}
                        <div style={{ ...cardStyle, borderLeft: '4px solid var(--muted-gold)', gridColumn: '1 / -1', maxWidth: '540px', margin: '0 auto' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>After-Hours & Weekend Moves</h3>
                            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
                                Available to reduce business disruption, subject to building access and approvals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's included / Extras / Client responsibilities */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>What&apos;s included (standard)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                {['Crew + vehicle(s) for the move', 'Packing of agreed items (as per scope)', 'Labeling (basic) and department-wise boxing', 'Loading, transport, unloading', 'Placement of cartons/furniture to designated areas (as instructed)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletCheckStyle }}>
                                        <Check size={18} color="#22c55e" style={{ flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Exact inclusions depend on your headcount, scope, access, and packing level. We confirm scope in writing before booking.</p>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>Extras (quoted separately)</h3>
                            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.25rem', lineHeight: 1.5 }}>To keep things transparent, these are not included by default:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {['Network wiring / IT reinstallation (separate scope/cost)', 'Assembly of chairs/tables/workstations (extra)', 'Carpet installation (extra)', 'Basic handyman work (drilling, mounting, minor repairs) (extra)', 'E-waste disposal / document shredding (extra / can be coordinated)', 'Space planning / floorplan design is not included (you provide the floorplan / seating plan)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>Client responsibilities (to avoid delays)</h3>
                            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.25rem', lineHeight: 1.5 }}>To ensure a smooth move, the company/client is responsible for:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {['Move permits / approvals (we can guide on what\'s needed)', 'Lift/elevator booking and access approvals (your building management process)', 'Final seating plan / floorplan (where departments/teams sit)', 'Internal IT actions: backups, downtime window, IT engineer availability (if required)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletCheckStyle, fontSize: '0.95rem' }}>
                                        <Check size={18} color="var(--muted-gold)" style={{ flexShrink: 0 }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>How it works</h2>
                    <div style={{ display: 'grid', gap: '2rem', alignItems: 'stretch' }} className="how-it-works-grid">
                        {[
                            { step: 1, title: "Share details / book a survey", text: "Headcount, size, locations, timing constraints, photos (or site visit)." },
                            { step: 2, title: "Scope confirmation & quote", text: "You receive a clear scope, plan, and quote (including what's excluded)." },
                            { step: 3, title: "Move execution", text: "Packing → labeling → loading → transport → placement." },
                            { step: 4, title: "Handover", text: "Walkthrough to confirm placement and completion." }
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

            {/* Pricing guidance (honest) */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', textAlign: 'center', fontWeight: 600 }}>Pricing guidance (honest)</h2>
                    <p style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#555' }}>Commercial moving is priced based on:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        {['Office size / number of workstations / headcount', 'Packing intensity (documents, pantry, fragile items)', 'Access (parking distance, lift size/booking windows)', 'After-hours/weekend scheduling', 'Any extras (IT wiring, assembly, handyman, carpets)'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.5rem 1rem', fontSize: '0.95rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                                {factor}
                            </span>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', color: '#666', lineHeight: 1.7 }}>Office moves are typically bespoke quotes—we&apos;ll be transparent about what&apos;s included and what&apos;s optional.</p>
                </div>
            </section>

            {/* FAQs */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem' }}>FAQs (commercial)</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "Can you do the move on a weekend so we're ready Monday?", a: "Yes, subject to access and scheduling availability." },
                            { q: "Do you handle IT relocation?", a: "We handle packing + transport of IT equipment and labeling. Network wiring/reinstallation is separate (we can coordinate)." },
                            { q: "Do you provide crates and archive boxes?", a: "Yes, as an add-on." },
                            { q: "Do you do floorplan setup?", a: "You provide the seating plan. We place items/boxes to the instructed areas." },
                            { q: "Who arranges permits and lift access?", a: "The office/company arranges building permissions and lift booking. We can guide on requirements." }
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
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to plan your office move?</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your office size, location, move date, and photos (or request a site survey). We&apos;ll reply with a clear scope, timeline, and quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href={whatsAppUrl("Hi, I'd like a corporate quote for office relocation.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request Corporate Quote (WhatsApp)
                        </a>
                        <a href="/get-a-quote" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request Callback / Site Survey
                        </a>
                    </div>
                </div>
            </section>

        </ServicePageLayout>
    );
}
