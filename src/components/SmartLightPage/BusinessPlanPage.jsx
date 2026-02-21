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
                    <p className="bp-subtitle">Crediti di Carbonio: Monetizzare la riduzione delle emissioni urbane</p>
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
                                <span>Carbon Credits</span>
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

            {/* CARBON CREDITS - ORA DOPO */}
            <section className="bp-carbon-section">
                <div className="bp-container">
                    <h2 className="bp-section-title">CREDITI DI CARBONIO</h2>
                    <p className="bp-carbon-intro">
                        Ogni incrocio ottimizzato da SmartLight riduce mediamente <strong>~87 tCO₂/anno</strong> (stima cautelativa al 13%, al netto del sim-to-real gap).
                        Queste riduzioni certificate generano crediti vendibili sul mercato regolamentato (EU&nbsp;ETS) e volontario (Verra&nbsp;VCS&nbsp;/&nbsp;Gold&nbsp;Standard).
                    </p>
                    <div className="bp-carbon-grid">
                        <div className="bp-carbon-card">
                            <div className="bp-carbon-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4>EU ETS — MERCATO REGOLAMENTATO</h4>
                            <span className="bp-carbon-price">~€74/tCO₂</span>
                            <p className="bp-carbon-source">Prezzo attuale (Feb 2026). Previsione 2027: €95–110/t.</p>
                            <span className="bp-carbon-revenue">≈ €6.438/anno per incrocio</span>
                        </div>
                        <div className="bp-carbon-card">
                            <div className="bp-carbon-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4>MERCATO VOLONTARIO — ALTA QUALITÀ</h4>
                            <span className="bp-carbon-price">~€30/tCO₂</span>
                            <p className="bp-carbon-source">Crediti BBB+ certificati Verra VCS / Gold Standard.</p>
                            <span className="bp-carbon-revenue">≈ €2.610/anno per incrocio</span>
                        </div>
                    </div>
                    <p className="bp-carbon-footnote">
                        Fonti: Trading Economics, ING Research, Ecosystem Marketplace, Sylvera (2025/2026). Calcolo basato su ~15.000 veicoli/giorno, riduzione CO₂ del 20% (stima fortemente conservativa, simulazioni SUMO), modello HBEFA v4.2.
                    </p>
                </div>
            </section>

            {/* LEGAL */}
            <section className="bp-legal-section">
                <div className="bp-container">
                    <h2 className="bp-section-title">SOSTENIBILITÀ LEGALE & CERTIFICAZIONI</h2>
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
                            <h4>CERTIFICAZIONE VERRA / GOLD STANDARD</h4>
                            <p>Le riduzioni di CO₂ sono misurate con protocollo <strong>MRV</strong> (Monitoring, Reporting, Verification) per generare crediti vendibili sui mercati certificati.</p>
                        </div>
                        <div className="bp-legal-card">
                            <h4>CARBON BORDER ADJUSTMENT (CBAM)</h4>
                            <p>Il nuovo regolamento CBAM dell'UE (operativo dal 2026) amplifica la domanda di crediti di carbonio e il valore delle riduzioni certificate.</p>
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
                                <p>SmartLight vince il bando "Concorso Idee" universitario, validando il concept e ottenendo il primo riconoscimento istituzionale del progetto.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item completed">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>OTT 2025 – FEB 2026 — EVOLUZIONE AI</h4>
                                <p>Sviluppo dell'AI con Deep Reinforcement Learning (PPO/DQN). Integrazione con SUMO per simulazioni fisiche realistiche. Validazione su topologia reale della città di Pisa.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item active">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>H1 2026 — TEST & DASHBOARD</h4>
                                <p>Test pilota su primo incrocio reale. Sviluppo dashboard di monitoraggio per la PA. Raccolta dati baseline per certificazione crediti CO₂.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>H2 2026 — IMPLEMENTAZIONE & VALIDAZIONE</h4>
                                <p>Implementazione operativa nell'incrocio pilota. Pubblicazione risultati. Avvio certificazione Verra VCS / Gold Standard. Primo accordo con ente locale.</p>
                            </div>
                        </div>
                        <div className="bp-roadmap-item">
                            <div className="bp-item-dot"></div>
                            <div className="bp-item-content">
                                <h4>METÀ 2027 IN POI — ESPANSIONE & SCALING</h4>
                                <p>Deploy multi-città e consolidamento della rete nazionale ed europea. I ricavi da crediti di carbonio certificati diventano il driver principale della crescita sostenibile.</p>
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
                                    {/* Sfondo nero per evitare gap bianchi traslucidi */}
                                    <circle r="25" cx="50" cy="50" fill="none" stroke="#000000" strokeWidth="50" />

                                    {/* Hardware: 48% (Leggermente aumentato per overlap) */}
                                    <circle r="25" cx="50" cy="50" className="pie-segment hardware"
                                        strokeDasharray="48.5 100" strokeDashoffset="0" pathLength="100"
                                        onMouseEnter={() => setHoveredSlice({ percent: '48%', label: 'HARDWARE' })}
                                        onMouseLeave={() => setHoveredSlice({ percent: '100%', label: 'TOTALE' })}
                                    />

                                    {/* Installazione: 27% (Inizio anticipato a -48 per overlap netto) */}
                                    <circle r="25" cx="50" cy="50" className="pie-segment installation"
                                        strokeDasharray="27.5 100" strokeDashoffset="-48" pathLength="100"
                                        onMouseEnter={() => setHoveredSlice({ percent: '27%', label: 'INSTALL.' })}
                                        onMouseLeave={() => setHoveredSlice({ percent: '100%', label: 'TOTALE' })}
                                    />

                                    {/* AI: 25% (Inizio anticipato a -75 per overlap netto) */}
                                    <circle r="25" cx="50" cy="50" className="pie-segment ai"
                                        strokeDasharray="25.5 100" strokeDashoffset="-75" pathLength="100"
                                        onMouseEnter={() => setHoveredSlice({ percent: '25%', label: 'AI SETUP' })}
                                        onMouseLeave={() => setHoveredSlice({ percent: '100%', label: 'TOTALE' })}
                                    />

                                    {/* Foro centrale con dati dinamici */}
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
                                            <td>NVIDIA Jetson, Telecamere IP, Box stagno/PoE/Router 5G</td>
                                            <td className="cost-val">€ 1.000 - 2.500</td>
                                        </tr>
                                        <tr className="cost-row">
                                            <td><strong>Installazione</strong></td>
                                            <td>Squadra tecnica, noleggio cestello, materiale vario</td>
                                            <td className="cost-val">€ 900 - 1.300</td>
                                        </tr>
                                        <tr className="cost-row">
                                            <td><strong>Setup AI</strong></td>
                                            <td>Mappatura ROI, fine-tuning, test e validazione</td>
                                            <td className="cost-val">€ 500 - 1.500</td>
                                        </tr>
                                        <tr className="total-row-new">
                                            <td colSpan="2"><strong>TOTALE PER INCROCIO</strong></td>
                                            <td className="cost-val"><strong>€ 2.400 - 5.300</strong></td>
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
