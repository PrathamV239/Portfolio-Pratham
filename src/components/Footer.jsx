import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="container footer-container">

        <div className="footer-left">
          <span className="footer-brand">PRATHAM VIDHANI</span>
          <span className="footer-sub">// SOFTWARE ENGINEER</span>
        </div>

        <div className="footer-center">
          <span className="footer-copy">© {new Date().getFullYear()} PRATHAM VIDHANI. ALL RIGHTS RESERVED.</span>

        </div>

        <button className="btn-back-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <span>TOP</span>
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
}
