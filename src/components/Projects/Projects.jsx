import React, { useState } from 'react';
import { ArrowUpRight, Github, Layers, Code2 } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="projects-section hairline">
      <div className="container">
        
        {/* Section Title & Header */}
        <div className="section-header">
          <div>
            <div className="section-label">01 / FEATURED ENGINEERING CASE STUDIES</div>
            <h2 className="section-title">Production Backends & AI Architectures</h2>
          </div>
          <p className="section-desc">
            Deep technical case studies detailing microservice routing, sliding window rate limiters, local RAG vector search, and real-time concurrency.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="case-studies-list">
          {projectsData.map((project) => (
            <article key={project.id} className="case-study-card">
              
              {/* Card Sidebar / Number */}
              <div className="card-number-col">
                <span className="card-num">{project.number}</span>
                <span className="card-cat-tag">[ {project.category.toUpperCase()} ]</span>
              </div>

              {/* Main Card Content */}
              <div className="card-main-col">
                <div className="card-title-row">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-subtitle">{project.subtitle}</span>
                  </div>
                </div>

                <p className="project-summary">{project.summary}</p>

                {/* Architecture Highlight Spec */}
                <div className="arch-spec-box">
                  <span className="arch-spec-label"><Layers size={13} /> ARCHITECTURE SPEC</span>
                  <p className="arch-spec-text">{project.architectureHighlight}</p>
                </div>

                {/* Tech Stack Chips */}
                <div className="tech-stack-row">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="card-actions">
                  <button 
                    className="btn-case-study"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>VIEW CASE STUDY & SYSTEM FLOW</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-github-link"
                  >
                    <Github size={15} />
                    <span>GITHUB REPO</span>
                  </a>

                  {project.demoAvailable && (
                    <span className="demo-badge-pill">
                      ● DEMO AVAIL / REPO SPEC
                    </span>
                  )}
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Slide-over Drawer Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
