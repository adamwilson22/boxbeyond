'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    theme?: 'light' | 'dark';
}

export default function Navbar({ theme = 'light' }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Assuming this state is needed for the new JSX

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // If theme is dark, use dark text immediately. If light, waiting for scroll.
    const useDarkText = isScrolled || isMobileMenuOpen || theme === 'dark';

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
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Main Logo */}
                <Link href="/" className="logo" style={{
                    fontSize: '2.2rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    position: 'relative',
                    zIndex: 101, // Above mobile menu
                    color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                    transition: 'color 0.3s ease'
                }}>
                    Box & Beyond
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center'
                }}>
                    {['Home', 'Services', 'Contact'].map((item) => {
                        if (item === 'Services') {
                            return (
                                <div key={item} style={{ position: 'relative' }} className="nav-item">
                                    <Link
                                        href="/#services"
                                        style={{
                                            color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                                            fontSize: '0.95rem',
                                            cursor: 'pointer',
                                            fontWeight: 500
                                        }}
                                    >
                                        Services
                                    </Link>
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                style={{
                                    color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                {item}
                            </Link>
                        )
                    })}

                    <Link
                        href="/services/home-moving"
                        style={{
                            color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                            fontSize: '0.95rem',
                            fontWeight: 500
                        }}
                    >
                        Home Moving
                    </Link>
                    <Link
                        href="/secure-storage-dubai"
                        style={{
                            color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                            fontSize: '0.95rem',
                            fontWeight: 500
                        }}
                    >
                        Storage
                    </Link>
                    <Link
                        href="/concierge-add-ons-dubai"
                        style={{
                            color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                            fontSize: '0.95rem',
                            fontWeight: 500
                        }}
                    >
                        Concierge
                    </Link>
                    <Link
                        href="/single-item-move-dubai"
                        style={{
                            color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                            fontSize: '0.95rem',
                            fontWeight: 500
                        }}
                    >
                        Single Item
                    </Link>

                    <a href="#contact" className="btn-primary" style={{
                        background: 'var(--muted-gold)',
                        color: 'white',
                        padding: '0.7rem 1.5rem',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        letterSpacing: '0.02em'
                    }}>
                        Get Quote
                    </a>
                </div>
            </div>
        </motion.nav >
    );
}
