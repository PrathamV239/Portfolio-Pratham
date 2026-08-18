import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, ExternalLink, ArrowUpRight, FileText } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section hairline">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div>
            <div className="section-label">05 / DIRECT INQUIRIES & RECRUITMENT</div>
            <h2 className="section-title">Initiate Contact</h2>
          </div>
          <p className="section-desc">
            Open for Software Engineer, Software Developer, and Backend Developer roles across India and Remote.
          </p>
        </div>

        {/* Contact Container */}
        <div className="contact-grid">
          
          {/* Main Action Box */}
          <div className="contact-main-box">
            <h3 className="contact-headline">
              Let's build resilient backend services and production AI infrastructure.
            </h3>

            {/* Email Copy Card */}
            <div className="email-copy-card">
              <div className="email-info">
                <Mail size={20} className="mail-icon" />
                <div>
                  <span className="email-label">PRIMARY EMAIL</span>
                  <div className="email-value">{profileData.email}</div>
                </div>
              </div>

              <button 
                className={`btn-copy-email ${copied ? 'is-copied' : ''}`}
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* Resume Download Box */}
            <div className="resume-download-box">
              <div>
                <h4 className="resume-box-title">LATEST CURRICULUM VITAE</h4>
                <p className="resume-box-desc">Download my latest resume.</p>
              </div>

              <a 
                href={profileData.links.resume} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-download-resume"
              >
                <span>DOWNLOAD RESUME PDF</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Social Profiles Grid Sidebar */}
          <div className="social-sidebar">
            <h4 className="sidebar-title">VERIFIED DIGITAL PROFILES</h4>

            <div className="social-links-list">
              
              <a 
                href={profileData.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-left">
                  <Github size={20} />
                  <div>
                    <div className="social-name">GitHub</div>
                    <div className="social-sub">@PrathamV239 • Projects & Repos</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="social-arrow" />
              </a>

              <a 
                href={profileData.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-left">
                  <Linkedin size={20} />
                  <div>
                    <div className="social-name">LinkedIn</div>
                    <div className="social-sub">@prathamvidhani • Professional Network</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="social-arrow" />
              </a>

              <a 
                href={profileData.links.leetcode} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-left">
                  <FileText size={20} />
                  <div>
                    <div className="social-name">LeetCode</div>
                    <div className="social-sub">@PrathamV239 • DSA & Problem Solving</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="social-arrow" />
              </a>

              <a 
                href={profileData.links.ieeePaper} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-left">
                  <ExternalLink size={20} />
                  <div>
                    <div className="social-name">IEEE Xplore</div>
                    <div className="social-sub">Deep Learning Publication</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="social-arrow" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
