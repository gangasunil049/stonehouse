import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { StaggeredMenu } from './StaggeredMenu';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', link: '#home' },
        { label: 'About Us', link: '#about' },
        { label: 'Services', link: '#services' },
        { label: 'Gallery', link: '#gallery' },
        { label: 'Contact', link: '#contact' },
    ];

    const socialLinks = [
        { label: 'Instagram', link: 'https://instagram.com/thestonehouselandscaping' },
        { label: 'WhatsApp', link: 'https://wa.me/919778081656' }
    ];

    const handleNavClick = (e, targetId) => {
        // Prevent React Router from swallowing the local hash link
        e.preventDefault();

        console.log('Scrolling to:', targetId);
        const section = document.getElementById(targetId);
        if (section) {
            const headerOffset = 100; // Account for the sticky header
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Optionally update the URL without triggering a router jump
            window.history.pushState(null, '', `#${targetId}`);
        } else if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const isHome = location.pathname === '/';

    return (
        <header className={`header-main ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
            <div className="nav-container">

                {/* Logo */}
                <a href="#home" style={{ textDecoration: 'none' }}>
                    <div className="flex items-center gap-4 flex-nowrap">
                        <div className="circular-logo-container" style={{
                            width: '50px',
                            height: '50px',
                            border: `2px solid ${isScrolled ? 'var(--primary)' : 'white'}`,
                            overflow: 'hidden',
                            borderRadius: '50%'
                        }}>
                            <img src="/logo.jpeg" alt="Logo" className="circular-logo-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <span className="text-sm sm:text-lg md:text-xl font-black uppercase tracking-widest inline-block" style={{
                            color: isScrolled ? 'var(--primary)' : 'white',
                            fontWeight: 900,
                            lineHeight: 1
                        }}>
                            STONE HOUSE
                        </span>
                    </div>
                </a>

                {/* Navigation Desktop & Mobile Mixed Alignments */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', zIndex: 9999, position: 'relative' }}>
                    <nav className="desktop-nav ml-auto" style={{ zIndex: 9999, position: 'relative' }}>
                        {navLinks.map((linkPos) => (
                            <a
                                key={linkPos.label}
                                href={linkPos.link}
                                onClick={(e) => handleNavClick(e, linkPos.link.replace('#', ''))}
                                className="nav-link cursor-pointer"
                                style={{ color: isScrolled ? 'var(--primary)' : 'white' }}
                            >
                                {linkPos.label}
                            </a>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="md:gap-4">
                        <a href="#contact" className="cta-btn cta-primary no-underline header-quote-btn">
                            <Phone size={12} className="quote-phone-icon" /> <span style={{ fontWeight: 600 }}>Get Quote</span>
                        </a>

                        {/* Mobile Menu Wrapper */}
                        <div className="block md:hidden">
                            <StaggeredMenu
                                position="right"
                                colors={['#1a3620', '#0d1a10']}
                                items={navLinks}
                                socialItems={socialLinks}
                                displaySocials={true}
                                displayItemNumbering={true}
                                logoUrl={null}
                                menuButtonColor={isScrolled ? 'var(--primary)' : 'white'}
                                openMenuButtonColor="white"
                                accentColor="#0d1a10"
                                changeMenuColorOnOpen={true}
                                isFixed={true}
                                closeOnClickAway={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
