import React from 'react';
import Photo from '../assets/photo.jpg';
import ResumePDF from '../assets/resume.pdf';
// about me function 
function About() {
    return (
    <div style={{ padding: '25px', lineHeight: '1.7', color: '#a8a8a8' }}>
        {/* About me details */}
        <h2 style={{ borderBottom: '3px solid #808080', paddingBottom: '10px', color: '#fff' }}>
            About Me
        </h2>
        <section style={{ marginTop: '20px' }}>
            {/* details about me */}
            <p style={{ fontSize: '18px' }}>
            My name is <strong>Tristin Forbes</strong>. I am an aspiring software engineer currently, currently in a program at <strong>Centennial Collage</strong>.
            </p>
            {/* Image of me */}
            <img src={Photo} alt='Head shot photo of Tristin Forbes' height='200px' width='auto'></img>
        <p>
            I chose this carer path as a result for a enjoyment of computers and programs, 
            currently I am learning web devolvement from the 26F--Web Application Development course.        
        </p>
              {/* Resume Download Section */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <a href={ResumePDF} download="Resume.pdf" 
            style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#000000',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            letterSpacing: '1px'
        }}
        >
        Download My Resume (PDF)
        </a>
    </div>

    </section>
    </div>
    );
    }

export default About;