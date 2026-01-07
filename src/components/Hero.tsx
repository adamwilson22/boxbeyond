'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="section" style={{
            textAlign: 'center',
            paddingTop: '15rem',
            paddingBottom: '10rem',
            background: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background element */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '40%',
                height: '60%',
                background: 'var(--soft-grey)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                zIndex: 0,
                opacity: 0.5
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        lineHeight: 1.05,
                        marginBottom: '2rem',
                        maxWidth: '1000px',
                        margin: '0 auto 2rem',
                        fontWeight: 400,
                        letterSpacing: '-0.04em'
                    }}>
                        Moving, handled <br /> properly.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto 4rem',
                        fontWeight: 300,
                        letterSpacing: '0.01em'
                    }}>
                        Premium residential and commercial moving services across Dubai and beyond.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <a href="https://wa.me/yournumber" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>
                        Start Your Journey
                    </a>
                    <a href="#contact" className="btn btn-outline" style={{ padding: '1.2rem 2.5rem' }}>
                        Request Callback
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
