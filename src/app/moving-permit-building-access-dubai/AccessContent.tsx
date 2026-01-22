'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, Building } from 'lucide-react';

export default function AccessContent() {
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
                        Move Permits & Building Access
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
                        Most buildings in Dubai require a Move-In / Move-Out Permit before they allow trucks to enter.
                        Don't get stuck at the gate!
                    </motion.p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>

                        {/* What You Need */}
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <FileText color="var(--muted-gold)" /> Documents typically required
                            </h2>
                            <p style={{ color: '#666', marginBottom: '1.5rem' }}>You (the tenant/owner) usually need to submit:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Ejari Certificate (for tenants)',
                                    'Title Deed (for owners)',
                                    'Passport / Visa copies',
                                    'Security Deposit Receipt (if applicable)'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.05rem' }}>
                                        <CheckCircle size={20} color="green" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What We Provide */}
                        <div style={{ background: '#f9f9f9', padding: '2.5rem', borderRadius: '24px', border: '1px solid #eee' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <Building color="var(--muted-gold)" /> What we provide
                            </h2>
                            <p style={{ color: '#666', marginBottom: '1.5rem' }}>The building management will ask for our documents. We will send you:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Trade License Copy',
                                    'Third-Party Liability Insurance Certificate',
                                    'Vehicle Registration (if truck plate is needed)'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.05rem' }}>
                                        <CheckCircle size={20} color="var(--muted-gold)" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff', borderRadius: '12px', border: '1px solid #ddd', display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                <AlertCircle size={24} color="#e53e3e" style={{ flexShrink: 0 }} />
                                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>
                                    <strong>Tip:</strong> Apply for permits at least 2-3 days in advance. Some communities (like Emaar, Nakheel, Dubai Properties) take time to approve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Links */}
            <section className="section" style={{ textAlign: 'center', borderTop: '1px solid #eee' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Moving to an Emaar property?</h2>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>Emaar has a specific online process.</p>
                    <a href="/moving-permit-emaar-dubai" className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>
                        View Emaar Permit Guide
                    </a>
                </div>
            </section>
        </>
    );
}
