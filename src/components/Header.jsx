import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, X, Instagram } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const location = useLocation();

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const navLinks = [
        { label: 'Home', link: '#home' },
        { label: 'About Us', link: '#about' },
        { label: 'Services', link: '#services' },
        { label: 'Process', link: '#process' },
        { label: 'Gallery', link: '#gallery' },
        { label: 'Reviews', link: '#reviews' },
        { label: 'Contact', link: '#contact' },
    ];

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setMobileOpen(false);
        setTimeout(() => {
            if (targetId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const section = document.getElementById(targetId);
                if (section) {
                    const offsetPosition = section.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    window.history.pushState(null, '', `#${targetId}`);
                }
            }
        }, 300);
    };

    return (
        <>
            {/* ── DESKTOP HEADER ── */}
            <header className={`header-main hidden md:block ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
                <div className="nav-container">
                    <a href="#home" style={{ textDecoration: 'none' }}>
                        <div className="flex items-center gap-4 flex-nowrap">
                            <div className="circular-logo-container" style={{
                                width: '50px', height: '50px',
                                border: `2px solid ${isScrolled ? 'rgba(0,0,0,0.1)' : 'white'}`,
                                overflow: 'hidden', borderRadius: '50%'
                            }}>
                                <img src="/logo.jpeg" alt="Logo" className="circular-logo-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span className="text-xl font-black uppercase tracking-widest" style={{ color: isScrolled ? 'var(--text-black)' : 'white', fontWeight: 900 }}>
                                STONE HOUSE
                            </span>
                        </div>
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                        <nav className="desktop-nav ml-auto">
                            {navLinks.map((lnk) => (
                                <a key={lnk.label} href={lnk.link}
                                    onClick={(e) => handleNavClick(e, lnk.link.replace('#', ''))}
                                    className="nav-link cursor-pointer"
                                    style={{ color: isScrolled ? 'var(--text-black)' : 'white' }}>
                                    {lnk.label}
                                </a>
                            ))}
                        </nav>
                        <a href="#contact" className="cta-btn cta-primary no-underline header-quote-btn hidden md:inline-flex">
                            <Phone size={12} className="quote-phone-icon" /> <span style={{ fontWeight: 600 }}>Get Quote</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* ── MOBILE TOP BAR ── hamburger RIGHT */}
            {isMobile && (
                <button
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open menu"
                    style={{
                        position: 'fixed',
                        top: '1rem',
                        right: '1.2rem',
                        zIndex: 2001,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '6px',
                        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))'
                    }}
                >
                    <span style={{ display: 'block', width: '26px', height: '3px', backgroundColor: 'white', borderRadius: '3px', marginBottom: '8px' }} />
                    <span style={{ display: 'block', width: '26px', height: '3px', backgroundColor: 'white', borderRadius: '3px', marginBottom: '8px' }} />
                    <span style={{ display: 'block', width: '26px', height: '3px', backgroundColor: 'white', borderRadius: '3px' }} />
                </button>
            )}

            {/* Logo + Name — fixed LEFT, side by side */}
            {isMobile && (
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, 'home')}
                    style={{
                        position: 'fixed',
                        top: '0.55rem',
                        left: '1rem',
                        zIndex: 2001,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '10px',
                        flexWrap: 'nowrap'
                    }}
                >
                    <div style={{ width: '62px', height: '62px', border: '2.5px solid white', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                        <img src="/logo.jpeg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span style={{ color: 'white', fontWeight: 900, fontSize: '1.3rem', letterSpacing: '0.12em', textTransform: 'uppercase', textShadow: '0 1px 6px rgba(0,0,0,0.7)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                        STONE HOUSE
                    </span>
                </a>
            )}

            {/* ── MOBILE FULL-SCREEN DRAWER ── */}
            {mobileOpen && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 3000,
                    background: 'linear-gradient(160deg, #1a3620 0%, #0d1a10 100%)',
                    display: 'flex', flexDirection: 'column',
                    padding: '1.5rem 2rem',
                    animation: 'slideInRight 0.3s cubic-bezier(0.4,0,0.2,1)'
                }}>
                    <style>{`
                        @keyframes slideInRight {
                            from { transform: translateX(100%); }
                            to   { transform: translateX(0); }
                        }
                        @keyframes fadeUp {
                            from { opacity: 0; transform: translateY(18px); }
                            to   { opacity: 1; transform: translateY(0); }
                        }
                    `}</style>

                    {/* Close */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2.5rem' }}>
                        <button onClick={() => setMobileOpen(false)} aria-label="Close menu"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: '4px' }}>
                            <X size={28} />
                        </button>
                    </div>

                    {/* Nav links */}
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {navLinks.map((lnk, i) => (
                            <a key={lnk.label} href={lnk.link}
                                onClick={(e) => handleNavClick(e, lnk.link.replace('#', ''))}
                                style={{
                                    color: 'white', textDecoration: 'none',
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: 'clamp(2rem, 8vw, 2.6rem)',
                                    fontWeight: 600, lineHeight: 1.35,
                                    opacity: 0,
                                    animation: `fadeUp 0.4s ease ${i * 0.07 + 0.1}s forwards`
                                }}>
                                {lnk.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social links */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.2rem', paddingBottom: '1rem', display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
                        <a href="https://instagram.com/thestonehouselandscaping" target="_blank" rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem' }}>
                            <Instagram size={18} />
                            Instagram
                        </a>
                        <a href="https://wa.me/919778081656" target="_blank" rel="noopener noreferrer"
                            style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem' }}>
                            WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
