import React from 'react';

import PortfolioImg from '../assets/portfolio.png';
import HirepathImg from '../assets/hirepath.png';
import ERDImg from '../assets/carrentaldatabase.png';
//projects function 
function Projects() {
    {/* project details */}
const projectList = [
    {id: 1,
    title: "Hirepath - Job Discovery Interface Mockup",
    image: HirepathImg,
    technologies: "HTML, Java Script",
    description: "A comprehensive proof-of-concept interface layout mapping out a future client-facing job discovery application. Establishes a cohesive dark-hero design framework, user conversion call-to-actions, and structured visual hierarchies to guide rapid front-end engineering pipelines.",
    scope: "Year 1 Semester 1 Web Design Proof-of-Concept Layout",
    role: "Webpage designer",
    outcome: "Successfully validated the layout concept, proving the visual design structure was ready for future front-end development."
    },
    {
    id: 2,
    title: "Relational Vehicle Rental Database Schema",
    image: ERDImg,
    technologies: "SQL, SQL developer",
    description: "A detailed structural database model mapping out operational entities for a vehicle rental platform. Implements normalization principles and visualizes explicit data relationships across rental tracking, customer loyalty records, vehicle inventories, and maintenance logs.",
    scope: "Database Design and Relational Architecture Systems",
    role: "Database Architect",
    outcome: "Successfully demoed live, demonstrating clean data normalization and functional relational table links."
    },
    {
    id: 3,
    title: "React Portfolio",
    image: PortfolioImg,
    technologies: "React, Vercel, JavaScript, node.js",
    description: "A live, single-page portfolio application implementing atomic component structures, static asset ingestion pipelines, and multi-route rendering systems.",
    scope: "Webpage Development Assignment",
    role: "Webpage designer and Developer",
    outcome: "To be determined"
    }
];

return (
    <div style={{ padding: '25px', lineHeight: '1.6', color: '#a8a8a8' }}>
    <h2 style={{ borderBottom: '3px solid #808080', paddingBottom: '10px', color: '#ffffff' }}>
        Past Projects
    </h2>
    <p style={{ fontSize: '16px', margin: '20px 0 30px 0' }}>
        Past and current projects 
    </p>
    <div style={{color: '#000000' }}> 
      {/* flex/grid container layout */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {projectList.map((project) => (
        <div 
            key={project.id} 
            style={{ 
            border: '1px solid #6b6b6b', 
            borderRadius: '6px', 
            padding: '20px', 
            backgroundColor: '#a8a8a8',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#000' }}>{project.title}</h3>
            <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#000000' }}>
            <strong>Technologies Utilized:</strong> {project.technologies}
            </p>
            <p style={{ margin: '0 0 10px 0' }}>{project.description}</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#000000' }}>
            <strong>Role:</strong> {project.role}
            </p>
            <p style={{ margin: 0, fontSize: '14px', color: '#000000' }}>
            <strong>Outcome: </strong>{project.outcome}
            </p>
                {/* Image Render */}
            <div style={{ marginBottom: '15px' }}>
            <img 
                src={project.image} 
                alt="Project Thumbnail" 
                style={{ width: '300px', height: 'auto', display: 'block', borderRadius: '4px', border: '1px solid #6b6b6b', float: "right" }} 
            />
            </div>

        </div>
        ))}
        </div>
    </div>
    </div>
);
}

export default Projects;
