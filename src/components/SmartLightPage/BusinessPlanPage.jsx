import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BusinessPlanPage.css';
import SmartLightNavbar from './SmartLightNavbar';
import SmartLightFooter from './SmartLightFooter';

import SmartPdf from '../../assets/Smartlight.pdf';
import CollabVideo from '../../assets/VideoCC.mp4';

const BusinessPlanPage = () => {
    const navigate = useNavigate();
    const [hoveredSlice, setHoveredSlice] = useState({ percent: '100%', label: 'TOTALE' });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleDownloadPdf = () => {
        const url = SmartPdf;
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Smartlight.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    const handleRequestPartnership = () => {
        navigate('/contact');
    };

    return (
        <div className="business-plan-page">
            <SmartLightNavbar />

            <section className="bp-hero">
                <div className="bp-container">
                    <h1 className="bp-title">BUSINESS MODEL</h1>
                    <p className="bp-subtitle">Smart City Infrastructure: SaaS, Manutenzione e Data Monetization</p>
                </div>
            </section>

            {/* STRATEGY */}
            <section className="bp-content">
                <div className="bp-container">
                    <div className="bp-strategy-grid">
                        <div className="bp-phase-card">
                            <span className="bp-phase-num">01</span>
                            <h2>AUDIT & MONITOR</h2>
                            <h3>Efficienza Immediata</h3>
                            <p>Iniziamo con un servizio di analisi non invasiva dell'infrastruttura. L'hardware osserva passivamente il traffico, simula scenari di ottimizzazione e genera report dettagliati per la PA, validando il potenziale risparmio prima di ogni intervento diretto.</p>
                            <div className="bp-phase-metrics">
                                <span>Risk-Free</span>
                                <span>Low Entry Cost</span>
                            </div>
                        </div>

                        <div className="bp-phase-card highlight">
                            <span className="bp-phase-num">02</span>
                            <h2>ADAPTIVE CONTROL</h2>
                            <h3>Evoluzione Consapevole</h3>
                            <p>Una volta confermati i benefici di tempo e CO₂, abilitiamo il controllo attivo dei cicli semaforici tramite l'intelligenza centrale. Sfruttiamo l'hardware già installato, trasformandolo in un sistema adattivo in tempo reale senza ulteriori costi infrastrutturali.</p>
                            <div className="bp-phase-metrics">
                                <span>Proven Results</span>
                                <span>Smart Control</span>
                            </div>
                        </div>

                        <div className="bp-phase-card">
                            <span className="bp-phase-num">03</span>
                            <h2>SMART ECOSYSTEM</h2>
                            <h3>Data Driven Future</h3>
                            <p>Attraverso la rete capillare di incroci, SmartLight si evolve nel sistema nervoso digitale della città, fornendo dati strategici per lo sviluppo urbano, la logistica intelligente e la sicurezza stradale predittiva.</p>
                            <div className="bp-phase-metrics">
                                <span>Intellectual Asset</span>
                                <span>Network Effect</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESULTS (IMPATTO MISURATO) - ORA PRIMA */}
            <section className="bp-results-section">
                <div className="bp-container">
                    <h2 className="bp-section-title">IMPATTO MISURATO</h2>
                    <div className="bp-results-grid">
                        <div className="bp-result-card">
                            <span className="bp-result-value">-20%</span>
                            <span className="bp-result-label">EMISSIONI CO₂</span>
                        </div>
                        <div className="bp-result-card">
                            <span className="bp-result-value">87t</span>
                            <span className="bp-result-label">CO₂ RISPARMIATA / INCROCIO / ANNO</span>
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
                        Stima fortemente conservativa (al ribasso) nelle simulazioni SUMO. Modello emissioni: HBEFA v4.2.
                    </p>
                </div>
            </section>


            {/* LEGAL */}
            <section className="bp-legal-section">
                <div className="bp-container">
                    <h2 className="bp-section-title">SOSTENIBILITÀ LEGALE & DATA PRIVACY</h2>
                    <div className="bp-legal-content">
                        <div className="bp-legal-card">
                            <h4>AFFIDAMENTO DIRETTO</h4>
                            <p>La Fase Pilota è strutturata per rientrare ampiamente sotto la soglia dei <strong>140k €</strong> del Codice degli Appalti (IT), permettendo un'acquisizione rapida senza gare complesse.</p>
                        </div>
                        <div className="bp-legal-card">
                            <h4>COMPLIANCE ESG</h4>
                            <p>Ogni installazione contribuisce ai KPI di sostenibilità ambientale del Comune, facilitando l'accesso a fondi europei e al <strong>Green Deal europeo</strong>.</p>
                        </div>
                        <div className="bp-legal-card">
                            <h4>DATA MONETIZATION</h4>
                            <p>I flussi di traffico anonimizzati e aggregati vengono valorizzati tramite vendita a terzi (logistica, retail, mappe), trasformando l'infrastruttura in un asset informativo.</p>
                        </div>
                        <div className="bp-legal-card">
                            <h4>GDPR COMPLIANCE</h4>
                            <p>L'elaborazione Edge garantisce che nessun dato sensibile lasci l'infrastruttura locale, assicurando la massima protezione della privacy urbana.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS ROADMAP */}
            <section className="bp-roadmap-section">
                <div className="bp-container">
                    <h2 className="bp-section-title">ROADMAP DI BUSINESS</h2>
                    <div className="bp-roadmap-timeline">
                        <div className="bp-roadmap-item completed">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>SET 2025 — VINCITA BANDO CONCORSO IDEE</h4>
                                <p>SmartLight vince il bando "Concorso Idee" universitario, ottenendo il primo riconoscimento istituzionale e validando il concept del progetto.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item completed">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>OTT 2025 – FEB 2026 — EVOLUZIONE AI</h4>
                                <p>Sviluppo AI con Deep Reinforcement Learning (PPO/DQN). Integrazione con SUMO per simulazioni fisiche su topologia reale di Pisa.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item active">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>H1 2026 — TEST & DASHBOARD</h4>
                                <p>Test pilota su primo incrocio reale. Sviluppo dashboard di monitoraggio per la PA. Validazione tecnica dell'hardware in campo.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>H2 2026 — IMPLEMENTAZIONE OPERATIVA</h4>
                                <p>Implementazione operativa negli incroci. Pubblicazione risultati. Avvio data monetization layer e primo accordo locale.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>METÀ 2027 IN POI — ESPANSIONE & SCALING</h4>
                                <p>Deploy multi-città e consolidamento della rete nazionale ed europea. I ricavi da SaaS e flussi dati diventano il driver principale della crescita sostenibile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FUNDING PILOTA */}
            <section className="bp-financial-section bp-animate">
                <div className="bp-container">
                    <h2 className="bp-section-title">FUNDING PILOTA 2026</h2>
                    <p className="bp-carbon-intro">
                        Investimento stimato per la validazione tecnologica e l'avvio della certificazione ambientale.
                    </p>

                    <div className="bp-funding-grid">
                        <div className="bp-funding-chart-wrapper">
                            <div className="bp-pie-container">
                                <svg viewBox="0 0 100 100" className="bp-pie-chart">
                                    <circle r="25" cx="50" cy="50" fill="none" stroke="#000000" strokeWidth="50" />

                                    {/* Hardware: 48% */}
                                    <circle r="25" cx="50" cy="50" className="pie-segment hardware"
                                        strokeDasharray="48 100" strokeDashoffset="0" pathLength="100"
                                        onMouseEnter={() => setHoveredSlice({ percent: '48%', label: 'HARDWARE' })}
                                        onMouseLeave={() => setHoveredSlice({ percent: '100%', label: 'TOTALE' })}
                                    />

                                    {/* Installazione: 25.5% */}
                                    <circle r="25" cx="50" cy="50" className="pie-segment installation"
                                        strokeDasharray="25.5 100" strokeDashoffset="-48" pathLength="100"
                                        onMouseEnter={() => setHoveredSlice({ percent: '25%', label: 'INSTALL.' })}
                                        onMouseLeave={() => setHoveredSlice({ percent: '100%', label: 'TOTALE' })}
                                    />

                                    {/* AI Setup: 26.5% */}
                                    <circle r="25" cx="50" cy="50" className="pie-segment ai"
                                        strokeDasharray="26.5 100" strokeDashoffset="-73.5" pathLength="100"
                                        onMouseEnter={() => setHoveredSlice({ percent: '26%', label: 'AI SETUP' })}
                                        onMouseLeave={() => setHoveredSlice({ percent: '100%', label: 'TOTALE' })}
                                    />

                                    <circle r="22" cx="50" cy="50" fill="#ffffff" />
                                    <text x="50" y="48" textAnchor="middle" className="pie-percent-val">{hoveredSlice.percent}</text>
                                    <text x="50" y="58" textAnchor="middle" className="pie-label-val">{hoveredSlice.label}</text>
                                </svg>
                            </div>
                            <div className="bp-chart-legend">
                                <div className="legend-item"><span className="dot hardware"></span> Hardware</div>
                                <div className="legend-item"><span className="dot installation"></span> Installazione</div>
                                <div className="legend-item"><span className="dot ai"></span> Setup AI</div>
                            </div>
                        </div>

                        <div className="bp-funding-details">
                            <div className="bp-cost-table-wrapper">
                                <table className="bp-cost-table">
                                    <thead>
                                        <tr>
                                            <th>Categoria</th>
                                            <th>Dettaglio</th>
                                            <th>Costo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="cost-row">
                                            <td><strong>Hardware</strong></td>
                                            <td>NVIDIA Jetson, Telecamere IP, box stagni, router 5G</td>
                                            <td className="cost-val">€ 5.000</td>
                                        </tr>
                                        <tr className="cost-row">
                                            <td><strong>Installazione</strong></td>
                                            <td>Squadra tecnica, noleggio cestello, materiale vario</td>
                                            <td className="cost-val">€ 2.600</td>
                                        </tr>
                                        <tr className="cost-row">
                                            <td><strong>Setup AI & Data</strong></td>
                                            <td>Mappatura ROI, fine-tuning, test e validazione</td>
                                            <td className="cost-val">€ 3.000</td>
                                        </tr>
                                        <tr className="total-row-new">
                                            <td colSpan="2"><strong>TOTALE FASE PILOTA (2 INCROCI)</strong></td>
                                            <td className="cost-val"><strong>€ 10.600</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="bp-funding-options">
                        <div className="bp-funding-options-grid">
                            <div className="bp-funding-option-card bp-animate-stagger">
                                <div className="option-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4>ENTI LOCALI</h4>
                                <p className="option-subtitle">COLLABORAZIONE SMART CITY</p>
                                <p className="option-desc">Partnership diretta con il Comune per test in ambienti reali con supporto istituzionale.</p>
                            </div>
                            <div className="bp-funding-option-card bp-animate-stagger">
                                <div className="option-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h4>BANDI PUBBLICI</h4>
                                <p className="option-subtitle">FONDI PNRR / EUROPEI</p>
                                <p className="option-desc">Accesso a finanziamenti agevolati e a fondo perduto per progetti ad alto impatto tecnologico.</p>
                            </div>
                            <div className="bp-funding-option-card bp-animate-stagger">
                                <div className="option-icon-svg">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4>INVESTITORI SEED</h4>
                                <p className="option-subtitle">BUSINESS ANGELS & NETWORKS</p>
                                <p className="option-desc">Velocità di esecuzione e accesso a network strategici nazionali ed internazionali di CleanTech.</p>
                            </div>
                        </div>

                        <p className="bp-funding-disclaimer">
                            queste cifre non comprendono i costi delle certificazioni.
                        </p>

                        <div className="bp-invest-cta">
                            <h3 className="bp-invest-title" onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}>
                                VUOI INVESTIRE, DONARE O COLLABORARE CON NOI?
                            </h3>
                            <div className="bp-invest-arrow" onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COLLABORATION CTA */}
            <section id="contact-section" className="smartlight-collab-section">
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
