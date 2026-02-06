'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Truck } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';

export default function Hero() {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        mouseX.set((mousePos.x - (typeof window !== 'undefined' ? window.innerWidth : 2000) / 2) / 20);
        mouseY.set((mousePos.y - (typeof window !== 'undefined' ? window.innerHeight : 1000) / 2) / 20);
    }, [mousePos, mouseX, mouseY]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section
            ref={containerRef}
            className="section"
            style={{
                textAlign: 'center',
                paddingTop: 'clamp(8rem, 20vw, 18rem)',
                paddingBottom: 'clamp(4rem, 15vw, 12rem)',
                background: 'linear-gradient(180deg, var(--soft-grey-warm) 0%, #ffffff 40%, #ffffff 100%)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            {/* Decorative blobs */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: 'clamp(320px, 70vw, 560px)',
                    height: 'clamp(320px, 70vw, 560px)',
                    background: 'radial-gradient(circle, rgba(182, 141, 93, 0.12) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: 0,
                    y,
                    x: mouseX,
                    translateY: mouseY
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '-15%',
                    left: '-8%',
                    width: 'clamp(280px, 50vw, 400px)',
                    height: 'clamp(280px, 50vw, 400px)',
                    background: 'radial-gradient(circle, rgba(182, 141, 93, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                    zIndex: 0
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Hero row: tagline | truck | sub-text */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'clamp(1.5rem, 4vw, 3rem)',
                        marginBottom: '2.5rem',
                        textAlign: 'left',
                    }}>
                        <motion.div variants={itemVariants} style={{ flex: '1 1 280px', maxWidth: '400px' }}>
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                lineHeight: 1.12,
                                marginBottom: '0.75rem',
                                fontWeight: 700,
                                letterSpacing: '-0.04em',
                                color: 'var(--text-dark)'
                            }}>
                                Moving, handled{' '}
                                <span style={{ background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>properly.</span>
                            </h1>
                            <p style={{
                                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                                color: 'var(--text-muted)',
                                lineHeight: 1.65,
                                fontWeight: 400
                            }}>
                                Professional home, office and concierge packers & movers services across Dubai.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{
                                width: 'clamp(160px, 22vw, 220px)',
                                height: 'clamp(120px, 18vw, 160px)',
                                background: 'var(--gold-gradient)',
                                borderRadius: 'var(--radius-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: 'var(--shadow-gold)',
                                border: '1px solid rgba(255,255,255,0.2)',
                            }}>
                                <Truck size={72} strokeWidth={1.5} color="rgba(255,255,255,0.95)" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} style={{ flex: '1 1 280px', maxWidth: '320px' }}>
                            <p style={{
                                fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                                color: '#555',
                                lineHeight: 1.7,
                                fontWeight: 400
                            }}>
                                We make your move simple and stress-free.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className="hero-btns"
                        style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                flexWrap: 'wrap'
                            }}>
                                <Link
                                    href="/get-a-quote"
                                    className="btn btn-primary"
                                    style={{
                                        flex: '1 1 auto',
                                        minWidth: '200px',
                                        padding: '1rem 2rem',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Get a Quote in 30 mins
                                </Link>
                                <Link
                                    href="/get-a-quote"
                                    className="btn btn-outline"
                                    style={{
                                        flex: '1 1 auto',
                                        minWidth: '200px',
                                        padding: '1rem 2rem',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Request Callback
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    bottom: '8%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '24px',
                    height: '40px',
                    borderRadius: '12px',
                    border: '2px solid var(--muted-gold)',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '8px',
                    zIndex: 1,
                    opacity: 0.7
                }}
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ width: '4px', height: '8px', borderRadius: '2px', background: 'var(--muted-gold)' }}
                />
            </motion.div>
        </section >
    );
}
