import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-num">{project.number} // CASE STUDY</span>
            <h2 className="modal-title">{project.title}</h2>
            <span className="modal-subtitle">{project.subtitle}</span>
          </div>

          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          
          {/* Architecture Topology View */}
          <section className="modal-section">
            <h3 className="section-subtitle">01 / SYSTEM ARCHITECTURE & TOPOLOGY</h3>
            <ArchitectureDiagram type={project.diagramType} />
          </section>

          {/* Core Problem & Summary */}
          <section className="modal-section">
            <h3 className="section-subtitle">02 / ENGINEERING OVERVIEW</h3>
            <p className="modal-text">{project.summary}</p>
          </section>

          {/* Highlights & Key System Decisions */}
          <section className="modal-section">
            <h3 className="section-subtitle">03 / KEY ARCHITECTURE & SYSTEM DECISIONS</h3>
            <div className="highlights-list">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span className="highlight-text">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack Grid */}
          <section className="modal-section">
            <h3 className="section-subtitle">04 / TECHNOLOGY & INFRASTRUCTURE STACK</h3>
            <div className="tech-grid">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </section>

          {/* Footer Actions */}
          <div className="modal-actions">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-modal-primary"
            >
              <Github size={16} />
              <span>INSPECT GITHUB REPOSITORY</span>
              <ArrowRight size={14} />
            </a>

            {project.demoAvailable && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-modal-secondary"
              >
                <ExternalLink size={15} />
                <span>DEMO LINK / REPO SPEC</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
