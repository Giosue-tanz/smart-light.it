import React, { useEffect, useState } from 'react';
import './ContactPage.css';
import SmartLightNavbar from './SmartLightNavbar';
import SmartLightFooter from './SmartLightFooter';
import ContactVideo from '../../assets/VideoC4.mp4';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOa__VV7IAM4QaC4s7JBZAXX3SrpkNWMw3Bq9s5NDb_dRqqB4ORAkTQzgre3B1hdJO/exec';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SENDING...');

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Google Script requires no-cors for simple requests
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Since it's 'no-cors', we won't get a proper JSON response we can read,
            // but the request will still reach Google and send the email.
            setStatus('MESSAGE SENT');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Error:', error);
            setStatus('ERROR SENDING');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <div className="contact-page">
            <SmartLightNavbar />

            <section className="contact-hero">
                <video
                    src={ContactVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="contact-hero-video"
                />
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">CONTACT</h1>
                </div>
            </section>

            <section className="contact-form-section">
                <div className="contact-container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 className="contact-title">METTITI IN CONTATTO</h2>
                            <p className="contact-desc">
                                Vuoi aggiornare la tua città? O vuoi collaborare con noi? Compila il form e il nostro team ti risponderà il prima possibile.
                            </p>
                            <div className="contact-details">
                                <div className="detail-item">
                                    <strong>EMAIL</strong>
                                    <span>giosue.tanz@gmail.com</span>
                                </div>
                                <div className="detail-item">
                                    <strong>LOCATION</strong>
                                    <span>Pisa, Italia</span>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>NOME</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="James"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>COGNOME</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Bond"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="james@007.com"
                                />
                            </div>
                            <div className="form-group">
                                <label>MESSAGGIO</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Scrivi qui il tuo messaggio..."
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="contact-submit-btn">
                                {status || 'INVIA MESSAGGIO'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <SmartLightFooter />
        </div>
    );
};

export default ContactPage;
