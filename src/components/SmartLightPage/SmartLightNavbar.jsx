import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LogoImg from '../../assets/smartlight-logo2.jpg';
import './SmartLightNavbar.css';

const SmartLightNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash
    if (!window.location.hash) {
      try { window.scrollTo(0, 0); } catch (e) { }
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle hash scroll after page change
  useEffect(() => {
    if (location.pathname === '/' && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const header = document.querySelector('.sl-navbar');
          const headerHeight = header ? header.offsetHeight : 0;
          const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location]);

  const handleScroll = (id) => (e) => {
    if (e) e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      // Per ridurre lo scroll (fermarci prima), usiamo un offset positivo per la sezione Business
      const offset = id === 'smartlight-business-model' ? 40 : -0;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    // Update URL hash without reload
    const url = new URL(window.location);
    url.hash = id;
    window.history.pushState({}, '', url);
  };

  const handleNavClick = (id) => (e) => {
    setMobileOpen(false);
    handleScroll(id)(e);
  };

  return (
    <header className={`sl-navbar ${scrolled ? 'scrolled' : 'hidden'} ${mobileOpen ? 'open' : ''}`}>
      <div className="sl-container">
        <a href="/" className="sl-logo" onClick={(e) => {
          e.preventDefault();
          if (location.pathname !== '/') {
            navigate('/');
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}>
          <img src={LogoImg} alt="Logo" className="sl-logo-img" />
          SmartLight
        </a>

        <button
          className={`sl-hamburger ${mobileOpen ? 'is-open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span className="sl-hamburger-box">
            <span className="sl-hamburger-inner" />
          </span>
        </button>

        <nav className="sl-nav">
          <a href="#smartlight-combined-cover" className="sl-nav-link" onClick={handleNavClick('smartlight-combined-cover')}>Obiettivo</a>
          <a href="#smartlight-business-model" className="sl-nav-link" onClick={handleNavClick('smartlight-business-model')}>Business</a>
          <a href="#smartlight-how-it-works-cover" className="sl-nav-link" onClick={handleNavClick('smartlight-how-it-works-cover')}>Tecnologia</a>
          <a href="#smartlight-collab" className="sl-nav-link" onClick={handleNavClick('smartlight-collab')}>Contatti</a>
        </nav>
      </div>
    </header>
  );
};

export default SmartLightNavbar;
