'use client';

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, FileText, CheckCircle, HelpCircle } from 'lucide-react';

export default function InsuranceContent() {
    return (
        <>
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
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--text-dark)'
                        }}
                    >
                        Moving Insurance Coverage
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: '1.2rem',
                            maxWidth: '700px',
                            margin: '0 auto 2rem',
                            color: '#555',
                            lineHeight: 1.6
                        }}
                    >
                        We take every precaution, but insurance is your safety net against the unexpected.
                        <br />
                        Understand your coverage options for peace of mind.
                    </motion.p>
                </div>
            </section>

            {/* Options */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Coverage Options</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                        {/* Option 1 */}
                        <div style={{ padding: '2.5rem', border: '1px solid #eee', borderRadius: '16px', background: 'white' }}>
                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Shield size={32} color="#aaa" />
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Standard Liability</h3>
                            </div>
                            <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.6 }}>Included in every move.</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#555' }}>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><CheckCircle size={18} color="green" /> Basic protection for handling damages.</li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><CheckCircle size={18} color="green" /> Covers repair of item if damaged by crew.</li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><AlertTriangle size={18} color="orange" /> Limited compensation based on item weight/repair cost.</li>
                            </ul>
                        </div>

                        {/* Option 2 */}
                        <div style={{ padding: '2.5rem', border: '2px solid var(--muted-gold)', borderRadius: '16px', background: 'white', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--muted-gold)', color: 'white', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>RECOMMENDED</div>
                            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Shield size={32} color="var(--muted-gold)" fill="rgba(182, 141, 93, 0.2)" />
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>Comprehensive Coverage</h3>
                            </div>
                            <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.6 }}>For high-value items and third-party protection.</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#555' }}>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><CheckCircle size={18} color="green" /> Full replacement value declared by you.</li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><CheckCircle size={18} color="green" /> Covers transit, fire, theft, and total loss.</li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><CheckCircle size={18} color="green" /> Ideal for art, electronics, and antiques.</li>
                            </ul>
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: '#777', fontStyle: 'italic' }}>
                        * Comprehensive insurance is provided through our third-party insurance partner and requires an itemized inventory with declared values.
                    </p>
                </div>
            </section>

            {/* Claims Process */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>How to file a claim</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {[
                                { title: "1. Report within 24 Hours", text: "Inspect items immediately upon delivery. Send photos of any damage to our support team within 24 hours." },
                                { title: "2. Assessment", text: "Our team (or insurance surveyor) will assess the damage." },
                                { title: "3. Resolution", text: "We will arrange for professional repair, or in case of comprehensive coverage, process the reimbursement." }
                            ].map((step, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1.5rem', background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #eee' }}>
                                    <div style={{ minWidth: '32px', height: '32px', background: 'var(--deep-charcoal)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{i + 1}</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>{step.title}</h4>
                                        <p style={{ color: '#666', lineHeight: 1.6 }}>{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Exclusions */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ background: '#FFF5F5', padding: '2rem', borderRadius: '16px', border: '1px solid #FFE0E0' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#C53030', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <AlertTriangle size={20} /> Common Exclusions
                        </h3>
                        <p style={{ color: '#C53030', marginBottom: '1rem' }}>Please note that insurance typically does not cover:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#C53030', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Cash, jewelry, deeds, and personal documents (Customer must carry these).</li>
                            <li>Internal mechanical derangement of electronics (unless there is external damage).</li>
                            <li>Items packed by the owner (PBO) — as condition cannot be verified before move.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Have questions about coverage?</h2>
                    <a href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        WhatsApp Support
                    </a>
                </div>
            </section>
        </>
    );
}
