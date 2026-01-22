'use client';

import { motion } from 'framer-motion';
import { Smartphone, Upload, Check, AlertTriangle } from 'lucide-react';

export default function EmaarContent() {
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
                        Emaar Move Permits
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
                        Moving into Downtown, Dubai Hills, Marina, or Arabian Ranches?
                        <br />
                        Emaar communities require an online Move-In Permit (MIP).
                    </motion.p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Step-by-Step Guide</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                        {[
                            { icon: <Smartphone size={32} color="var(--muted-gold)" />, title: "1. Login", text: "Download the 'Emaar One' app or visit the Emaar community portal. Login with your credentials." },
                            { icon: <Upload size={32} color="var(--muted-gold)" />, title: "2. Apply for Move-In", text: "Select 'Service Request' > 'Move-In Permit'. You will need to upload your Tenancy Contract / Ejari." },
                            { icon: <Check size={32} color="var(--muted-gold)" />, title: "3. Contractor Details", text: "When asked for the moving company, upload our Trade License and Insurance (we will send these to you)." },
                            { icon: <Check size={32} color="var(--muted-gold)" />, title: "4. Approval", text: "Once approved, you will receive a Gate Pass / Permit. Share this with us so security allows our trucks in." },
                        ].map((step, i) => (
                            <div key={i} style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee', textAlign: 'center' }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{step.icon}</div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', fontWeight: 600 }}>{step.title}</h3>
                                <p style={{ color: '#666', lineHeight: 1.6, fontSize: '0.95rem' }}>{step.text}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem', padding: '2rem', background: '#FFF5F5', borderRadius: '16px', border: '1px solid #FFE0E0', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#C53030', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <AlertTriangle size={20} /> Essential Note
                        </h3>
                        <p style={{ color: '#C53030' }}>
                            Emaar strictly enforces the "No Permit, No Move" rule. Please apply at least 3-4 days before your move date to avoid last-minute re-scheduling fees.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Need our documents?</h2>
                    <a href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        WhatsApp Us for Trade License
                    </a>
                </div>
            </section>
        </>
    );
}
