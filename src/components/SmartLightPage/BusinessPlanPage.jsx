import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BusinessPlanPage.css';
import SmartLightNavbar from './SmartLightNavbar';
import SmartLightFooter from './SmartLightFooter';

import SmartPdf from '../../assets/Smartlight.pdf';
import CollabVideo from '../../assets/VideoCC.mp4';

const BusinessPlanPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scarica il PDF Smartlight.pdf dalla cartella assets
    const handleDownloadPdf = () => {
        const url = SmartPdf;
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Smartlight.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    // Apri la pagina contatti (usando la stessa logica di SmartLightPage)
    const handleRequestPartnership = () => {
        navigate('/contact');
    };

    return (
        <div className="business-plan-page">
            <SmartLightNavbar />

            <section className="bp-hero">
                <div className="bp-container">
                    <h1 className="bp-title">STRATEGIA DI BUSINESS</h1>
                    <p className="bp-subtitle">Hardware-Enabled SaaS: L'approccio Land & Expand per la Smart City</p>
                </div>
            </section>

            <section className="bp-content">
                <div className="bp-container">
                    <div className="bp-strategy-grid">
                        <div className="bp-phase-card">
                            <span className="bp-phase-num">01</span>
                            <h2>AUDIT & MONITOR</h2>
                            <h3>Efficienza Immediata</h3>
                            <p>Iniziamo con un servizio di analisi non invasiva dell'infrastruttura. L'hardware osserva passivamente il traffico, simula scenari di ottimizzazione e genera report dettagliati per la PA, validando il potenziale risparmio prima di ogni intervento diretto.</p>
                            <div className="bp-phase-metrics">
                                <span>Rischio Zero</span>
                                <span>Basso Costo d'Ingresso</span>
                            </div>
                        </div>

                        <div className="bp-phase-card highlight">
                            <span className="bp-phase-num">02</span>
                            <h2>ADAPTIVE CONTROL</h2>
                            <h3>Evoluzione Consapevole</h3>
                            <p>Una volta confermati i benefici di tempo e CO2, abilitiamo il controllo attivo dei cicli semaforici tramite l'intelligenza centrale. Sfruttiamo l'hardware già installato, trasformandolo in un sistema adattivo in tempo reale senza ulteriori costi infrastrutturali.</p>
                            <div className="bp-phase-metrics">
                                <span>Servizio Ricorrente</span>
                                <span>Benefici Comprovati</span>
                            </div>
                        </div>

                        <div className="bp-phase-card">
                            <span className="bp-phase-num">03</span>
                            <h2>SMART ECOSYSTEM</h2>
                            <h3>Data Driven Future</h3>
                            <p>Attraverso la rete capillare di incroci, SmartLight si evolve nel sistema nervoso digitale della città, fornendo dati strategici per lo sviluppo urbano, la logistica intelligente e la sicurezza stradale predittiva.</p>
                            <div className="bp-phase-metrics">
                                <span>Asset Strategico</span>
                                <span>Effetto di Rete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bp-roadmap-section">
                <div className="bp-container">
                    <h2 className="bp-section-title">ROADMAP DI IMPLEMENTAZIONE</h2>
                    <div className="bp-roadmap-timeline">
                        <div className="bp-roadmap-item">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>FASE 3.1 (COMPLETATA)</h4>
                                <p>Deep RL Agents (PPO/DQN) con accelerazione CUDA su hardware locale.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item active">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>FASE 3.5 (IN CORSO)</h4>
                                <p>Integrazione con SUMO per simulazioni fisiche realistiche e validazione su topologia reale del primo scenario urbano.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>FASE 4.0 (MAR 2026)</h4>
                                <p>Multi-Agent Coordination: Grid of connected intersections e comunicazione.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>FASE 5.0 (APR 2026)</h4>
                                <p>Real-World Deployment: Computer Vision via YOLOv8 su NVIDIA Jetson Edge devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bp-results-section">
                <div className="bp-container">
                    <h2 className="bp-section-title">RISULTATI ATTESI</h2>
                    <div className="bp-results-grid">
                        <div className="bp-result-card">
                            <span className="bp-result-value">-30%</span>
                            <span className="bp-result-label">EMISSIONI DI CO2</span>
                        </div>
                        <div className="bp-result-card">
                            <span className="bp-result-value">-25%</span>
                            <span className="bp-result-label">TEMPI DI ATTESA</span>
                        </div>
                        <div className="bp-result-card">
                            <span className="bp-result-value">+20%</span>
                            <span className="bp-result-label">FLUSSO DI TRAFFICO</span>
                        </div>
                    </div>
                    <p className="bp-results-disclaimer">
                        Media al ribasso nelle simulazioni SUMO.
                    </p>
                </div>
            </section>

            <section className="bp-legal-section">
                <div className="bp-container">
                    <h2 className="bp-section-title">SOSTENIBILITÀ LEGALE </h2>
                    <div className="bp-legal-content">
                        <div className="bp-legal-card">
                            <h4>AFFIDAMENTO DIRETTO</h4>
                            <p>La Fase 1 (Audit) è strutturata per rientrare ampiamente sotto la soglia dei <strong>140k €</strong> del Codice degli Appalti (IT), permettendo un'acquisizione rapida senza gare lunghe e complesse.</p>
                        </div>
                        <div className="bp-legal-card">
                            <h4>COMPLIANCE ESG (Environmental, Social, and Governance)</h4>
                            <p>Ogni installazione è certificata per contribuire ai KPI (Key Performance Indicators) di sostenibilità ambientale del Comune, facilitando l'accesso a fondi europei e Green Deal europeo.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="smartlight-collab-section">
                <video
                    className="smartlight-collab-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={CollabVideo} type="video/mp4" />
                </video>
                <div className="smartlight-collab-overlay"></div>

                <div className="smartlight-collab-container">
                    <h2 className="smartlight-collab-title">CONTATTACI</h2>
                    <p className="smartlight-collab-desc">Unisciti al progetto SmartLight. Insieme possiamo creare una città più intelligente e sostenibile per tutti.</p>
                    <div className="smartlight-collab-actions">
                        <button className="smartlight-cover-btn btn-right" onClick={handleRequestPartnership}>
                            AGGIORNA LA CITTÀ
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="smartlight-cover-btn btn-right" onClick={handleRequestPartnership}>
                            LAVORA CON NOI
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <SmartLightFooter />
        </div>
    );
};

export default BusinessPlanPage;
