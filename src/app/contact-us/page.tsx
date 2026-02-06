'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import Link from 'next/link';

export default function ContactUsPage() {
    return (
        <main>
            <Navbar theme="dark" />
            <section
                className="section"
                style={{
                    paddingTop: 'clamp(8rem, 18vw, 12rem)',
                    paddingBottom: '4rem',
                    background: 'white',
                }}
            >
                <div className="container" style={{ maxWidth: '700px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <h1
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: 600,
                                letterSpacing: '-0.03em',
                                color: 'var(--text-dark)',
                                marginBottom: '1rem',
                            }}
                        >
                            Contact Us
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7 }}>
                            Get in touch for quotes, questions, or support. We respond within 30 minutes during business hours.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            display: 'grid',
                            gap: '2rem',
                            textAlign: 'center',
                        }}
                    >
                        <div style={{
                            background: 'var(--soft-grey)',
                            padding: '2rem',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}>
                            <Phone size={28} color="var(--muted-gold)" />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Contact Number</h3>
                            <a href={`tel:${siteConfig.whatsappNumber}`} style={{ color: 'var(--muted-gold)', fontWeight: 600, fontSize: '1.1rem' }}>
                                {siteConfig.whatsappDisplay}
                            </a>
                        </div>
                        <div style={{
                            background: 'var(--soft-grey)',
                            padding: '2rem',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}>
                            <MapPin size={28} color="var(--muted-gold)" />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Office Address</h3>
                            <p style={{ color: '#666' }}>To be shared when available</p>
                        </div>
                        <div style={{
                            background: 'var(--soft-grey)',
                            padding: '2rem',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.75rem',
                        }}>
                            <Mail size={28} color="var(--muted-gold)" />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Email</h3>
                            <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: 'var(--muted-gold)', fontWeight: 600 }}>
                                {siteConfig.contactEmail}
                            </a>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/get-a-quote" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
