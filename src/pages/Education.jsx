import React from 'react';
// education function 
function Education() {
// list of past education 
const educationList = [
    {
    id: 1,
        institution: "Centennial Collage", 
        credential: "Software engineering course diploma, not yet obtained",
        timeline: "January 2024 - Present",
    },
    {
        id: 2,
        institution: "Sutton District High School",
        credential: "Ontario Secondary School Diploma", 
        timeline: "August 2019 - June 2023",
    }
];
// the display for the item in educationList 
return (
    <div style={{ padding: '25px', lineHeight: '1.7', color: '#a8a8a8' }}>
    <h2 style={{ borderBottom: '3px solid #808080', paddingBottom: '10px', color: '#ffffff' }}>
        Education History
    </h2>
    <p style={{ fontSize: '16px', margin: '20px 0 30px 0' }}>
        The following academic list consists of my academic credentials and qualifications.
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {educationList.map((education) => (
        <div 
            key={education.id} 
            style={{ border: '1px solid #6b6b6b', borderRadius: '6px', padding: '20px', backgroundColor: '#000000', boxShadow: '0 2px 4px #ffffff'}}>
            <span style={{ fontSize: '13px', color: '#808080', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {education.timeline}
            </span>
            <h3 style={{ margin: '5px 0 2px 0', color: '#ffffff', fontSize: '22px' }}>{education.credential}</h3>
            <h4 style={{ margin: '0 0 15px 0', color: '#808080', fontWeight: '500' }}>{education.institution}</h4>
            <div style={{ marginTop: '15px' }}>
            </div>
        </div>
        ))}
    </div>
    </div>
    );
}

export default Education;
