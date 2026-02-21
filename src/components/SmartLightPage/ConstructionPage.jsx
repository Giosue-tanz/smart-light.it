import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConstructionPage.css';
import SmartLightNavbar from './SmartLightNavbar';
import SmartLightFooter from './SmartLightFooter';

const ConstructionPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="construction-page">
            <SmartLightNavbar />

            <section className="construction-hero">
                <div className="construction-container">
                    <div className="construction-icon">🏗️</div>
                    <h1 className="construction-title">PAGINA IN COSTRUZIONE</h1>
                    <p className="construction-subtitle">
                        Stiamo perfezionando la piattaforma di crowdfunding e i dettagli per i finanziamenti privati.
                        Presto potrai contribuire attivamente alla rivoluzione della mobilità sostenibile.
                    </p>
                    <div className="construction-progress-bar">
                        <div className="progress-fill"></div>
                    </div>
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        TORNA INDIETRO
                    </button>
                </div>
            </section>

            <SmartLightFooter />
        </div>
    );
};

export default ConstructionPage;
