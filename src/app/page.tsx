'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { whatsAppUrl } from '@/lib/site-config';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import HumanElement from '@/components/HumanElement';
import PricingCards from '@/components/PricingCards';
import USPSection from '@/components/USPSection';
import FAQsSection from '@/components/FAQsSection';

export default function Home() {
  return (
    <main>
      <Navbar theme="dark" />
      <Hero />
      <HumanElement />
      <ServicesSection />
      <ProcessSection />
      <PricingCards />
      <USPSection />

      {/* Get a Quote CTA - links to Get a Quote tab */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #fff 0%, var(--soft-grey-warm) 100%)', textAlign: 'center', padding: '4rem 2rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', marginBottom: '1rem', letterSpacing: '-0.03em', fontWeight: 600 }}>Ready for a consultation?</h2>
            <p style={{ maxWidth: '560px', margin: '0 auto 2rem', color: '#666', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Tell us about your move and get a transparent quote. Start a conversation with our concierge team on WhatsApp or fill out our quick form.
            </p>
            <Link href="/get-a-quote" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Get a Quote in 30 mins
            </Link>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <FAQsSection />
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={whatsAppUrl("Hi, I'd like help planning a move.")}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '2.5rem',
          right: '2.5rem',
          background: 'var(--muted-gold)',
          color: 'white',
          width: '64px',
          height: '64px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 9999,
          fontSize: '1.5rem',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
        title="Chat with Concierge"
      >
        <svg fill="currentColor" width="32" height="32" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.63-.086-.118-.698-.927-.698-1.782s.434-1.262.588-1.43c.154-.168.337-.21.45-.21s.224.01.322.012c.11.002.254-.041.398.305.144.346.494 1.206.536 1.291.041.086.069.186.012.299-.057.113-.086.183-.171.282-.086.1-.186.223-.265.299-.092.086-.179.171-.282.086-.1.186-.223.265-.299.092-.086.179-.188.081-.362-.107-.183-.476-.786-1.02-1.272-.701-.625-1.292-.819-1.475-.902-.183-.083-.29-.069-.398.054-.107.122-.463.538-.587.72-.124.182-.247.154-.417.091s-1.074-.507-1.26-.598c-.186-.091-.31-.136-.355-.214-.045-.078-.045-.451.099-.856zM12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9z" />
        </svg>
      </motion.a>
    </main>
  );
}
