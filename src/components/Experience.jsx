import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section hairline">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div>
            <div className="section-label">02 / WORK EXPERIENCE</div>
            <h2 className="section-title">Work Experience</h2>
          </div>
        </div>

        {/* Grid layout: Timeline + Education */}
        <div className="experience-grid">
          
          {/* Main Experience Column */}
          <div className="timeline-col">
            {experienceData.map((item, idx) => (
              <div key={idx} className="experience-card">
                
                <div className="card-top-bar">
                  <div>
                    <span className="exp-role-title">{item.role}</span>
                    <span className="exp-company"> @ {item.company}</span>
                  </div>
                  <span className="exp-badge">{item.type}</span>
                </div>

                <div className="exp-meta-row">
                  <span className="meta-item"><Calendar size={13} /> {item.period}</span>
                  <span className="meta-item"><MapPin size={13} /> {item.location}</span>
                </div>

                <p className="exp-summary-text">{item.description}</p>

                <ul className="exp-bullets">
                  {item.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="bullet-point">
                      <span className="bullet-dash">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-skills-row">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-chip">{skill}</span>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Education & Foundations Sidebar */}
          <div className="education-sidebar">
            <div className="edu-card">
              <div className="edu-header">
                <Briefcase size={16} className="edu-icon" />
                <span className="edu-tag">ACADEMIC FOUNDATION</span>
              </div>

              <h3 className="edu-degree">{educationData.degree}</h3>
              <div className="edu-inst">{educationData.institution}</div>
              
              <div className="edu-meta">
                <span>{educationData.period}</span>
              </div>

              <div className="coursework-title">RELEVANT COURSEWORK</div>
              <div className="coursework-tags">
                {educationData.coursework.map((course, cIdx) => (
                  <span key={cIdx} className="course-chip">{course}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
