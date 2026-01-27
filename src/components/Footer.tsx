import { Star } from 'lucide-react';
import NextImage from 'next/image';
import { siteConfig, whatsAppUrl, trustedByText } from '@/lib/site-config';

export default function Footer() {
    return (
        <footer style={{
            padding: '6rem 0 3rem',
            background: 'white',
            borderTop: '1px solid var(--border-color)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <div style={{ position: 'relative', height: '120px', width: '250px', marginBottom: '1.5rem' }}>
                            <NextImage
                                src="/SVG.svg"
                                alt="Box & Beyond"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'left' }}
                            />
                        </div>
                        <p style={{ fontSize: '0.9rem', maxWidth: '250px' }}>
                            Moving services across Dubai and the UAE. Managed with care, delivered with excellence.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'grid', gap: '0.8rem' }}>
                            <li><a href="/services/home-moving" style={{ color: 'inherit', textDecoration: 'none' }}>Home Moving</a></li>
                            <li><a href="/single-item-move-dubai" style={{ color: 'inherit', textDecoration: 'none' }}>Single Item Moving</a></li>
                            <li><a href="/office-relocation-dubai" style={{ color: 'inherit', textDecoration: 'none' }}>Office Moving</a></li>
                            <li><a href="/international-relocation-dubai" style={{ color: 'inherit', textDecoration: 'none' }}>International Moving</a></li>
                            <li><a href="/secure-storage-dubai" style={{ color: 'inherit', textDecoration: 'none' }}>Secure Storage</a></li>
                            <li><a href="/concierge-add-ons-dubai" style={{ color: 'inherit', textDecoration: 'none' }}>Concierge Add-Ons</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Help & Guides</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'grid', gap: '0.8rem' }}>
                            <li><a href="/moving-permit-building-access-dubai" style={{ color: 'inherit', textDecoration: 'none' }}>Building Access Guide</a></li>
                            <li><a href="/moving-permit-emaar-dubai" style={{ color: 'inherit', textDecoration: 'none' }}>Emaar Move Guide</a></li>
                            <li><a href="/insurance-claims" style={{ color: 'inherit', textDecoration: 'none' }}>Insurance & Claims</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'grid', gap: '0.8rem' }}>
                            <li><a href={whatsAppUrl()} style={{ color: 'inherit', textDecoration: 'none' }}>WhatsApp: {siteConfig.whatsappDisplay}</a></li>
                            <li><a href={`mailto:${siteConfig.contactEmail}`} style={{ color: 'inherit', textDecoration: 'none' }}>Email: {siteConfig.contactEmail}</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    paddingTop: '3rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', color: '#FFD700', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" />)}
                            </div>
                            <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 500, marginLeft: '0.5rem' }}>4.9/5 on Google Reviews</span>
                        </div>
                        <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 500 }}>{trustedByText()}</span>
                    </div>

                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.8rem',
                        color: '#888',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <p>© {new Date().getFullYear()} Box & Beyond Relocations. All rights reserved.</p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="/admin/pricing" style={{ opacity: 0.6 }}>Admin</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
