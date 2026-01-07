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
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 600 }}>BOX & BEYOND</h3>
                        <p style={{ fontSize: '0.9rem', maxWidth: '250px' }}>
                            Premium moving services across Dubai and the UAE. Managed with care, delivered with excellence.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Service Areas</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'grid', gap: '0.8rem' }}>
                            <li>Dubai</li>
                            <li>Abu Dhabi</li>
                            <li>UAE Nationwide</li>
                            <li>GCC Countries</li>
                            <li>International</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'grid', gap: '0.8rem' }}>
                            <li>Email: concierge@boxbeyond.com</li>
                            <li>Phone: +971 -- --- ----</li>
                            <li>WhatsApp: +971 -- --- ----</li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    paddingTop: '3rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                    color: '#888'
                }}>
                    <p>© {new Date().getFullYear()} Box & Beyond Relocations. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
