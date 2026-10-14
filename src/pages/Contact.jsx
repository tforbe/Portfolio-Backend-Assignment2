import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Contact function 
function Contact() {
const navigate = useNavigate();
// form information 
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    emailAddress: '',
    message: ''
});
// change handler
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
    ...prevData,
    [name]: value
    }));
};
// Submit handler 
const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
};
// form and panel code 
return (
    <div style={{ padding: '25px', lineHeight: '1.6', color: '#a8a8a8' }}>
        <h2 style={{ borderBottom: '3px solid #808080', paddingBottom: '10px', color: '#ffffff' }}>
            Contact Me
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginTop: '20px' }}>
        {/* Contact Information Panel*/}
            <div style={{ flex: '1', minWidth: '280px', backgroundColor: '#000000', padding: '20px', borderRadius: '6px', border: '1px solid #6b6b6b', boxShadow: '0 2px 4px #ffffff' }}>
            <h3 style={{ color: '#ffffff', marginTop: 0 }}>Get in Touch</h3>
            <p>Feel free to reach out via the interactive form or utilize my direct contact Information</p>
            <div style={{ marginTop: '20px' }}>
                <p><strong>Email:</strong> tforbes@myschool.com</p>
                <p><strong>Office Location:</strong> N/A </p>
                <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
            </div>
        </div>
        {/* Input Form Panel */}
        <div style={{ flex: '2', minWidth: '320px', backgroundColor: '#000000', padding: '20px', borderRadius: '6px', border: '1px solid #6b6b6b', boxShadow: '0 2px 4px #ffffff' }}>
            <h3 style={{ color: '#ffffff', marginTop: 0 }}>Send a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '140px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#ffffff', fontSize: '14px' }}>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={{ width: '100%', padding: '8px', backgroundColor: '#000000', border: '1px solid #6b6b6b', borderRadius: '4px', color: '#fff' }} />
                </div>
                <div style={{ flex: '1', minWidth: '140px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', color: '#ffffff', fontSize: '14px' }}>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={{ width: '100%', padding: '8px', backgroundColor: '#000000', border: '1px solid #6b6b6b', borderRadius: '4px', color: '#fff' }} />
                </div>
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '5px', color: '#ffffff', fontSize: '14px' }}>Contact Number</label>
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required 
                style={{ width: '100%', padding: '8px', backgroundColor: '#000000', border: '1px solid #6b6b6b', borderRadius: '4px', color: '#fff' }} />
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '5px', color: '#ffffff', fontSize: '14px' }}>Email Address</label>
                <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required 
                style={{ width: '100%', padding: '8px', backgroundColor: '#000000', border: '1px solid #6b6b6b', borderRadius: '4px', color: '#fff' }} />
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: '5px', color: '#ffffff', fontSize: '14px' }}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4"
                style={{ width: '100%', padding: '8px', backgroundColor: '#000000', border: '1px solid #6b6b6b', borderRadius: '4px', color: '#fff', resize: 'vertical' }} />
            </div>
            <button type="submit" 
                style={{ padding: '10px 20px', backgroundColor: '#ffffff', color: '#000000', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', alignSelf: 'flex-start', marginTop: '10px' }}>
                Submit Message
            </button>
        </form>
        </div>
    </div>
    </div>
);
}

export default Contact;
