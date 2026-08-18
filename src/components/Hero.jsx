import React from 'react';
import { ArrowDownRight, ExternalLink, Code2, ShieldCheck, Database, Cpu } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        
        {/* Main Asymmetric Grid */}
        <div className="hero-grid">
          
          {/* Left Column: Typographic Identity & Lead */}
          <div className="hero-content">
            <div className="section-label">
              SOFTWARE ENGINEER
            </div>

            <h1 className="hero-title">
              Architecting high-throughput <span className="text-highlight">backend services</span>, reactive gateways, and local RAG pipelines.
            </h1>

            <p className="hero-description">
              Specialized in production Java systems (Spring Cloud Gateway, Project Reactor, Redis, Resilience4J), C++/Qt6 desktop engines, and local vector RAG pipelines (LangChain, pgvector, Ollama). Co-authored IEEE deep learning research and solved DSA & problem-solving challenges in C++.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#work" className="btn-primary">
                <span>EXPLORE CASE STUDIES</span>
                <ArrowDownRight size={18} />
              </a>

              <a href={profileData.links.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <span>VIEW RESUME</span>
                <ExternalLink size={15} />
              </a>

              <a href={profileData.links.leetcode} target="_blank" rel="noopener noreferrer" className="btn-mono-link">
                <span>LEETCODE profile</span>
              </a>
            </div>

            {/* Tech Badges Row */}
            <div className="tech-badges-row">
              <span className="tech-chip"><Code2 size={13} /> Java 17 / Spring Boot 3</span>
              <span className="tech-chip"><Cpu size={13} /> C++ / Qt6 Compute</span>
              <span className="tech-chip"><Database size={13} /> LangChain + pgvector</span>
              <span className="tech-chip"><ShieldCheck size={13} /> Redis Rate Limiting</span>
            </div>
          </div>

          {/* Right Column: Architectural Framed Image */}
          <div className="hero-media">
            <div className="portrait-frame">
              <div className="frame-header">
                <span className="frame-tag">ENGINEER SPEC // REF: PV-2025</span>
                <span className="frame-dot"></span>
              </div>

              <div className="image-container">
                <img 
                  src="/assets/pratham.jpg" 
                  alt="Pratham Vidhani" 
                  className="portrait-img"
                />
              </div>

              <div className="frame-footer">
                <div className="meta-spec">
                  <span className="meta-label">LOCATION</span>
                  <span className="meta-val">INDIA / REMOTE</span>
                </div>
                <div className="meta-spec">
                  <span className="meta-label">FOCUS</span>
                  <span className="meta-val">DISTRIBUTED & RAG</span>
                </div>
                <div className="meta-spec">
                  <span className="meta-label">DEGREE</span>
                  <span className="meta-val">VIT VELLORE B.TECH</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Metrics Strip */}
        <div className="metrics-strip hairline">
          {profileData.metrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-spec">{metric.spec}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
