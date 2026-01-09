'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
                zIndex: 1000,
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                transition: 'var(--transition-smooth)'
            }}
        >
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <img
                        src="/PNG.png"
                        alt="Box & Beyond"
                        style={{
                            height: 'clamp(80px, 15vw, 120px)',
                            width: 'auto',
                            objectFit: 'contain',
                            marginTop: '-10px', // Minor adjustment to center visual weight
                            marginBottom: '-10px'
                        }}
                    />
                </Link>

                <div style={{
                    display: 'flex',
                    gap: 'clamp(0.5rem, 2vw, 1.5rem)',
                    alignItems: 'center'
                }}>
                    <Link href="https://wa.me/yournumber" className="btn hide-mobile" style={{
                        padding: '0.5rem 0',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 500
                    }}>
                        WhatsApp Us
                    </Link>
                    <Link href="#contact" className="btn btn-primary" style={{
                        padding: '0.6rem 1rem',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        whiteSpace: 'nowrap',
                        width: 'auto'
                    }}>
                        <span className="hide-mobile">Request Callback</span>
                        <span className="show-mobile">Contact</span>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
