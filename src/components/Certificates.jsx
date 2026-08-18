import React from 'react';
import { Award, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import './Certificates.css';

export default function Certificates() {
  return (
    <section id="certificates" className="certificates-section hairline">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div>
            <div className="section-label">04 / VERIFIED CERTIFICATIONS</div>
            <h2 className="section-title">Security & Technical Credentials</h2>
          </div>
          <p className="section-desc">
            Verified industry certifications across Ethical Hacking, AI Security, and Data Analytics.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificatesData.map((cert, idx) => (
            <div key={idx} className="cert-card">
              
              <div className="cert-top-bar">
                <span className="cert-icon-box"><ShieldCheck size={18} /></span>
                <span className="cert-category">{cert.category.toUpperCase()}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">ISSUED BY: {cert.issuer}</div>

              <p className="cert-accreditation">{cert.accreditation}</p>

              <div className="cert-meta-box">
                <div className="meta-spec">
                  <span className="spec-label">CERTIFICATE ID</span>
                  <span className="spec-code">{cert.certId}</span>
                </div>
                <div className="meta-spec">
                  <span className="spec-label">DATE / VALIDITY</span>
                  <span className="spec-date">{cert.date}</span>
                </div>
              </div>

              <div className="cert-footer">
                <span className="verified-badge">
                  <CheckCircle2 size={13} /> VERIFIED CREDENTIAL
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
