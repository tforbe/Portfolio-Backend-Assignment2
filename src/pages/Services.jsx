import React from 'react';

function Services() {
  //  services list 
const servicesList = [
    {
    id: 1,
        title: "General Programming",
        description: "provide custom software solutions, automated technical workflows.",
    },
    {
    id: 2,
        title: "Web Development",
        description: "functional, user-friendly websites and web applications tailored to connect your brand with online users inside their browsers",
    },
    {
    id: 3,
        title: "SQL Relational Database Solutions",
        description: "Designing structured, fully normalized relational database schemas. Managing entity relationships, relational links, primary/foreign key connections, and diagnostic query operations.",
    }
];
// the display for the items in servicesList 
return (
    <div style={{ padding: '25px', lineHeight: '1.7', color: '#a8a8a8' }}>
    <h2 style={{ borderBottom: '3px solid #808080', paddingBottom: '10px', color: '#ffffff' }}>
        Services Offered
    </h2>
    <p style={{ fontSize: '16px', margin: '20px 0 30px 0' }}>
        List of services offered 
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {servicesList.map((service) => (
        <div 
            key={service.id} 
            style={{ border: '1px solid #6b6b6b', borderRadius: '6px', padding: '20px', backgroundColor: '#000000', boxShadow: '0 2px 4px #ffffff'}}>
            <h3 style={{ margin: '5px 0 10px 0', color: '#ffffff', fontSize: '22px' }}>
                {service.title}
            </h3>
            <p style={{ margin: '0 0 12px 0' }}>
                {service.description}
            </p>
        </div>
        ))}
    </div>
    </div>
);
}

export default Services;
