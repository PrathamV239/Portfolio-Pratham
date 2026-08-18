import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "01. WORK", href: "#work" },
    { label: "02. EXPERIENCE", href: "#experience" },
    { label: "03. RESEARCH", href: "#research" },
    { label: "04. CERTIFICATES", href: "#certificates" },
    { label: "05. CONTACT", href: "#contact" }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-container">
        
        {/* Brand / Name Logo */}
        <a href="#" className="brand-logo">
          <span className="brand-name">{profileData.name.toUpperCase()}</span>
          <span className="brand-title">// SOFTWARE ENGINEER</span>
        </a>

        {/* Status Pill */}
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">AVAILABLE FOR ROLES</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="nav-actions">
          <a 
            href={profileData.links.resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-resume-nav"
          >
            <span>RESUME</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href={profileData.links.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-resume-btn"
            >
              DOWNLOAD RESUME <Download size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
