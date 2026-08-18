import React from 'react';
import { BookOpen, ExternalLink, Award, Code2, CheckCircle2 } from 'lucide-react';
import { publicationData, profileData } from '../data/portfolioData';
import './Research.css';

export default function Research() {
  return (
    <section id="research" className="research-section hairline">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div>
            <div className="section-label">03 / ACADEMIC RESEARCH & PROBLEM SOLVING</div>
            <h2 className="section-title">IEEE Publication & DSA</h2>
          </div>
          <p className="section-desc">
            Co-authored deep learning research in precision agriculture and solved data structures and algorithms problems in C++.
          </p>
        </div>

        {/* Asymmetric Grid: IEEE Paper + DSA Box */}
        <div className="research-grid">
          
          {/* IEEE Publication Card */}
          <div className="paper-card">
            <div className="paper-header">
              <span className="paper-tag"><BookOpen size={14} /> IEEE CONFERENCE PUBLICATION</span>
              <a 
                href={publicationData.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="paper-link-btn"
              >
                <span>VIEW ON IEEE XPLORE</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <h3 className="paper-title">{publicationData.title}</h3>
            <div className="paper-publisher">{publicationData.publisher}</div>

            <div className="authors-box">
              <span className="authors-label">AUTHORS:</span>
              <span className="authors-list">
                {publicationData.authors.map((author, idx) => (
                  <span 
                    key={idx} 
                    className={`author-item ${author.includes('Pratham') ? 'is-me' : ''}`}
                  >
                    {author}{idx < publicationData.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            </div>

            <div className="abstract-box">
              <span className="abstract-label">ABSTRACT & METHODOLOGY</span>
              <p className="abstract-text">{publicationData.abstract}</p>
            </div>

            <div className="paper-specs-row">
              <div className="spec-chip">
                <span className="spec-chip-label">MATH MODEL</span>
                <span className="spec-chip-val">Penman-Monteith ($ET_0$)</span>
              </div>
              <div className="spec-chip">
                <span className="spec-chip-label">DEEP LEARNING</span>
                <span className="spec-chip-val">LSTM Time-Series</span>
              </div>
              <div className="spec-chip">
                <span className="spec-chip-label">DATA AUGMENTATION</span>
                <span className="spec-chip-val">Genetic Algorithm (GA)</span>
              </div>
            </div>

            <div className="paper-tech-tags">
              {publicationData.keyTech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* DSA & Competitive Programming Box */}
          <div className="dsa-card">
            <div className="dsa-header">
              <Code2 size={18} className="dsa-icon" />
              <span className="dsa-tag">ALGORITHMIC PROBLEM SOLVING</span>
            </div>

            <h3 className="dsa-title">DSA & Problem Solving in C++</h3>
            <p className="dsa-desc">
              Strong theoretical and practical foundation in Data Structures & Algorithms, covering Dynamic Programming, Graph Algorithms, Binary Trees, and Object-Oriented Programming principles.
            </p>

            <div className="dsa-highlights">
              <div className="dsa-item">
                <CheckCircle2 size={16} className="dsa-check" />
                <span>LeetCode & Codeforces Problem Solving in C++</span>
              </div>
              <div className="dsa-item">
                <CheckCircle2 size={16} className="dsa-check" />
                <span>Deep focus on Space/Time Complexity & Memory Optimization</span>
              </div>
              <div className="dsa-item">
                <CheckCircle2 size={16} className="dsa-check" />
                <span>VIT Vellore Core CS Curriculum (OS, Networks, OOP)</span>
              </div>
            </div>

            <a 
              href={profileData.links.leetcode} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-leetcode"
            >
              <span>INSPECT LEETCODE PROFILE</span>
              <ExternalLink size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
