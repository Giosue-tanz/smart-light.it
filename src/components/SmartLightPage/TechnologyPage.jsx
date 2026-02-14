import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './TechnologyPage.css';
import SmartLightNavbar from './SmartLightNavbar';
import SmartLightFooter from './SmartLightFooter';

import Topografia from '../../assets/tech2.png';
import CollabVideo from '../../assets/VideoCC.mp4';

const TechnologyPage = () => {
    const navigate = useNavigate();
    const observerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -15% 0px',
            threshold: 0.1
        };
        observerRef.current = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('tech-in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const targets = document.querySelectorAll('.tech-animate');
        targets.forEach(t => observerRef.current.observe(t));

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    const handleRequestPartnership = () => {
        navigate('/contact');
    };

    const handleScrollToContent = () => {
        const nextSection = document.querySelector('.tech-intro-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="tech-page">
            <SmartLightNavbar />

            {/* ═══════════════════════════════════════════
                HERO SECTION
            ═══════════════════════════════════════════ */}
            <section className="tech-hero">
                <div className="tech-hero-bg">
                    <img src={Topografia} alt="Topography" />
                    <div className="tech-hero-overlay"></div>
                </div>
                <div className="tech-container">
                    <div className="tech-hero-content">
                        <span className="tech-badge">CORE TECHNOLOGY</span>
                        <h1 className="tech-title">Smart Light AI</h1>
                        <p className="tech-subtitle">
                            Un sistema neurale proprietario che apprende, si adatta e si evolve continuamente
                            per trasformare ogni incrocio in un nodo intelligente della rete urbana.
                        </p>
                    </div>
                </div>
                <button className="tech-hero-scroll-btn" onClick={handleScrollToContent} aria-label="Scorri">
                    <svg className="scroll-chevron" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12 10L22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="scroll-chevron" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12 10L22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </section>

            {/* ═══════════════════════════════════════════
                INTRO — COME FUNZIONA
            ═══════════════════════════════════════════ */}
            <section className="tech-intro-section tech-animate">
                <div className="tech-container">
                    <div className="tech-intro-header">
                        <span className="tech-overline">COME FUNZIONA</span>
                        <h2 className="tech-section-title">L'APPROCCIO SMARTLIGHT</h2>
                        <p className="tech-intro-desc">
                            SmartLight non è un semplice algoritmo: è un <strong>ecosistema di intelligenza artificiale</strong> che
                            opera su tre livelli integrati. Dalla percezione visiva alla decisione in tempo reale,
                            fino alla coordinazione di un'intera rete urbana — ogni livello è progettato per
                            apprendere e migliorare autonomamente.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                3 LAYER ARCHITECTURE
            ═══════════════════════════════════════════ */}
            <section className="tech-architecture">
                <div className="tech-container">

                    <div className="tech-arch-grid">
                        {/* LAYER 1: PERCEPTION */}
                        <div className="tech-arch-card tech-animate">
                            <div className="tech-arch-number">01</div>
                            <div className="tech-card-content">
                                <div className="tech-card-header">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="tech-card-icon">
                                        <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M4 6H14C15.1046 6 16 6.89543 16 8V16C16 17.1046 15.1046 18 14 18H4C2.89543 18 2 17.1046 2 16V8C2 6.89543 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h3>PERCEPTION LAYER</h3>
                                </div>
                                <p className="tech-card-desc">
                                    Il primo livello digitalizza lo spazio fisico in tempo reale. Telecamere standard già presenti
                                    agli incroci alimentano la nostra rete neurale <strong>YOLOv8</strong>, che identifica e classifica
                                    ogni attore della strada: automobili, autobus, biciclette, pedoni, mezzi di emergenza e persone
                                    con disabilità. I dati vengono elaborati direttamente sull'<strong>edge device</strong> (NVIDIA Jetson),
                                    senza mai inviare immagini a server esterni, garantendo <strong>privacy totale by-design</strong>.
                                </p>
                                <p className="tech-card-desc">
                                    Il sistema non si limita a contare: traccia le traiettorie, stima le velocità e classifica
                                    i flussi per direzione. Ogni 100 millisecondi, il Perception Layer produce un
                                    <strong> vettore di stato compresso</strong> a 11 dimensioni che sintetizza l'intero scenario
                                    dell'incrocio.
                                </p>
                                <ul className="tech-feat-list">
                                    <li>YOLOv8 Object Detection in tempo reale</li>
                                    <li>Edge-AI locale — Nessun dato nel cloud</li>
                                    <li>Multi-Object Tracking con traiettorie</li>
                                    <li>Classificazione: 6 categorie (micro, private, public, freight, emergency, pedoni)</li>
                                    <li>Privacy totale — Solo dati vettoriali anonimizzati</li>
                                    <li>State vector a 11 dimensioni</li>
                                </ul>
                            </div>
                        </div>

                        {/* LAYER 2: TRAINING & DECISION */}
                        <div className="tech-arch-card tech-animate">
                            <div className="tech-arch-number">02</div>
                            <div className="tech-card-content">
                                <div className="tech-card-header">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="tech-card-icon">
                                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <h3>TRAINING & COGNITION</h3>
                                </div>
                                <p className="tech-card-desc">
                                    Il cuore del sistema è un agente di <strong>Deep Reinforcement Learning</strong> che impara a
                                    gestire i semafori attraverso l'esperienza. Utilizziamo l'algoritmo <strong>PPO (Proximal Policy
                                        Optimization)</strong> con architettura <strong>Actor-Critic</strong>: l'Actor decide la durata
                                    ottimale del verde (da 10 a 40 secondi), il Critic valuta la qualità della decisione.
                                </p>
                                <p className="tech-card-desc">
                                    L'addestramento avviene in un <strong>Digital Twin</strong> — una replica virtuale ad alta fedeltà
                                    dell'incrocio reale costruita su <strong>SUMO</strong> (Simulation of Urban MObility). L'agente affronta
                                    milioni di scenari: ore di punta, traffico notturno, emergenze improvvise, pedoni disabili.
                                    Per ogni decisione, riceve una <strong>ricompensa</strong> che bilancia la riduzione delle code,
                                    i tempi di attesa, le emissioni di CO₂ e la priorità dei mezzi di emergenza.
                                </p>
                                <ul className="tech-feat-list">
                                    <li>PPO con Actor-Critic e GAE (Generalized Advantage Estimation)</li>
                                    <li>Dueling Double DQN come architettura alternativa validata</li>
                                    <li>Reward multi-obiettivo: code, attese, CO₂, ESG</li>
                                    <li>8 scenari temporali simulati (mattina → notte)</li>
                                    <li>Digital Twin su SUMO con fisica realistica (Krauss model)</li>
                                    <li>GPU-accelerated training (CUDA) — 125+ FPS</li>
                                </ul>
                            </div>
                        </div>

                        {/* LAYER 3: MULTI-AGENT */}
                        <div className="tech-arch-card tech-animate highlight">
                            <div className="tech-arch-number">03</div>
                            <div className="tech-card-content">
                                <div className="tech-card-header">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="tech-card-icon">
                                        <path d="M12 3L14.5 9H9.5L12 3Z" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M19 21L21.5 15H16.5L19 21Z" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M5 21L7.5 15H2.5L5 21Z" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M12 9V15" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                                        <path d="M7 17L10 15" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                                        <path d="M17 17L14 15" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                                    </svg>
                                    <h3>MULTI-AGENT COORDINATION</h3>
                                </div>
                                <p className="tech-card-desc">
                                    La vera rivoluzione avviene quando gli incroci comunicano tra loro. Ogni agente non ottimizza
                                    solo il proprio incrocio (<strong>Local Intelligence</strong>), ma condivide informazioni con
                                    gli incroci adiacenti per creare una <strong>strategia di rete</strong> (Global Strategy).
                                </p>
                                <p className="tech-card-desc">
                                    Utilizziamo <strong>MAPPO (Multi-Agent PPO)</strong> con un Critic centralizzato durante il
                                    training e Actor decentralizzati durante l'esecuzione. Gli incroci "parlano" scambiando
                                    tensori di stato compressi via rete Mesh sicura, anticipando le ondate di traffico e
                                    creando <strong>onde verdi dinamiche</strong> che si adattano in tempo reale.
                                </p>
                                <ul className="tech-feat-list">
                                    <li>MAPPO con Critic centralizzato</li>
                                    <li>Comunicazione I2I via rete Mesh criptata</li>
                                    <li>Onde verdi dinamiche adattive</li>
                                    <li>R = αR_local + (1-α)R_global</li>
                                    <li>Network Optimization su griglia 3×3</li>
                                    <li>Distributed Control per scalabilità città</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CONTINUOUS TRAINING — IL CICLO PERPETUO
            ═══════════════════════════════════════════ */}
            <section className="tech-continuous-section">
                <div className="tech-container">
                    <div className="tech-continuous-header tech-animate">
                        <span className="tech-overline">APPRENDIMENTO CONTINUO</span>
                        <h2 className="tech-section-title">IL CICLO DI ADDESTRAMENTO PERPETUO</h2>
                        <p className="tech-intro-desc">
                            SmartLight non è un sistema statico che viene programmato una volta e poi dimenticato.
                            Il nostro approccio si basa su un <strong>ciclo di addestramento costante</strong>: il sistema
                            apprende, viene distribuito, raccoglie dati dal mondo reale, e usa quei dati per
                            allenarsi ancora. <strong>Ogni giorno diventa più intelligente</strong>.
                        </p>
                    </div>

                    <div className="tech-cycle-grid">
                        {/* Step 1 */}
                        <div className="tech-cycle-card tech-animate">
                            <div className="tech-cycle-phase">FASE 1</div>
                            <h4 className="tech-cycle-title">SIMULAZIONE & TRAINING</h4>
                            <div className="tech-cycle-divider"></div>
                            <p>
                                L'agente viene addestrato nel Digital Twin su SUMO con milioni di iterazioni.
                                Affronta 8 scenari temporali diversi (dall'alba alla notte) con traffico variabile,
                                emergenze casuali e condizioni meteorologiche simulate. L'addestramento utilizza
                                <strong> GPU acceleration</strong> per raggiungere 150.000+ timesteps in pochi minuti.
                            </p>
                            <div className="tech-cycle-tag">
                                <span>PPO Training</span>
                                <span>SUMO Digital Twin</span>
                                <span>CUDA GPU</span>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="tech-cycle-card tech-animate">
                            <div className="tech-cycle-phase">FASE 2</div>
                            <h4 className="tech-cycle-title">SHADOW MODE</h4>
                            <div className="tech-cycle-divider"></div>
                            <p>
                                Prima della distribuzione attiva, il modello opera in <strong>Shadow Mode</strong>:
                                osserva il traffico reale e propone decisioni <em>senza</em> attuarle. Le sue scelte
                                vengono confrontate con il controller tradizionale. Solo quando le performance superano
                                una soglia statistica significativa, il sistema viene promosso al controllo attivo.
                            </p>
                            <div className="tech-cycle-tag">
                                <span>A/B Testing</span>
                                <span>Risk-Free</span>
                                <span>Statistical Validation</span>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="tech-cycle-card tech-animate">
                            <div className="tech-cycle-phase">FASE 3</div>
                            <h4 className="tech-cycle-title">DEPLOYMENT & DATA COLLECTION</h4>
                            <div className="tech-cycle-divider"></div>
                            <p>
                                Una volta attivo, il sistema controlla i semafori in tempo reale e raccoglie
                                continuamente dati: tempi di attesa effettivi, lunghezze delle code,
                                throughput veicolare, tempi di risposta emergenze. Questi dati formano un
                                <strong> dataset proprietario</strong> che rappresenta la realtà specifica di
                                quell'incrocio — molto più accurato di qualsiasi simulazione.
                            </p>
                            <div className="tech-cycle-tag">
                                <span>Real-Time Control</span>
                                <span>Data Pipeline</span>
                                <span>KPI Monitoring</span>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="tech-cycle-card tech-animate">
                            <div className="tech-cycle-phase">FASE 4</div>
                            <h4 className="tech-cycle-title">RE-TRAINING & EVOLUZIONE</h4>
                            <div className="tech-cycle-divider"></div>
                            <p>
                                I dati raccolti dal campo vengono utilizzati per <strong>aggiornare il Digital Twin</strong>,
                                rendendolo sempre più fedele alla realtà. L'agente viene poi ri-addestrato sulla simulazione
                                aggiornata, incorporando pattern stagionali, eventi speciali e nuove infrastrutture.
                                Il ciclo si ripete <strong>settimanalmente</strong>, garantendo un miglioramento costante
                                delle performance.
                            </p>
                            <div className="tech-cycle-tag">
                                <span>Transfer Learning</span>
                                <span>Model Update</span>
                                <span>Weekly Cycle</span>
                            </div>
                        </div>
                    </div>

                    {/* Cycle arrow visual */}
                    <div className="tech-cycle-loop tech-animate">
                        <div className="tech-cycle-loop-line"></div>
                        <div className="tech-cycle-loop-label">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>IL CICLO SI RIPETE — MIGLIORAMENTO CONTINUO</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                REWARD FUNCTION — IL CUORE DELLE DECISIONI
            ═══════════════════════════════════════════ */}
            <section className="tech-reward-section tech-animate">
                <div className="tech-container">
                    <span className="tech-overline">DEEP DIVE</span>
                    <h2 className="tech-section-title">LA FUNZIONE DI RICOMPENSA</h2>
                    <div className="tech-reward-grid">
                        <div className="tech-reward-explanation">
                            <p>
                                L'intelligenza del sistema risiede nella sua <strong>funzione di ricompensa</strong>.
                                Ad ogni azione, l'agente riceve un premio o una penalità in base a molteplici criteri
                                bilanciati. Questo approccio multi-obiettivo assicura che il sistema non ottimizzi
                                solo la velocità del traffico, ma anche la sicurezza e la sostenibilità ambientale.
                            </p>
                            <div className="tech-reward-items">
                                <div className="tech-reward-item negative">
                                    <div className="reward-indicator">−</div>
                                    <div>
                                        <h5>PENALITÀ ATTESE</h5>
                                        <p>I tempi di attesa di pedoni e veicoli vengono penalizzati <em>quadraticamente</em>,
                                            incentivando l'agente a ridurre le attese lunghe più aggressivamente.</p>
                                    </div>
                                </div>
                                <div className="tech-reward-item negative">
                                    <div className="reward-indicator">−</div>
                                    <div>
                                        <h5>PENALITÀ CODE</h5>
                                        <p>Ogni tipo di veicolo ha un peso diverso: i mezzi pubblici pesano 35×,
                                            i freight 2×, incentivando la priorità al trasporto collettivo.</p>
                                    </div>
                                </div>
                                <div className="tech-reward-item negative">
                                    <div className="reward-indicator">−−</div>
                                    <div>
                                        <h5>PENALITÀ EMERGENZE</h5>
                                        <p>Un veicolo di emergenza in coda genera una penalità di 15.000 punti —
                                            il sistema impara che non c'è mai giustificazione per bloccare un'ambulanza.</p>
                                    </div>
                                </div>
                                <div className="tech-reward-item positive">
                                    <div className="reward-indicator">+</div>
                                    <div>
                                        <h5>BONUS ACCESSIBILITÀ</h5>
                                        <p>Un bonus di 2.000 punti per aver servito pedoni con disabilità,
                                            integrando l'inclusività direttamente nella logica decisionale.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tech-reward-formula">
                            <div className="tech-formula-card">
                                <div className="tech-formula-label">REWARD FUNCTION</div>
                                <div className="tech-formula-code">
                                    <code>
                                        <span className="code-comment">{"// SmartLight Reward Engine"}</span><br />
                                        <span className="code-keyword">R</span> = −W<sub>penalty</sub> − Q<sub>penalty</sub><br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;− E<sub>emergency</sub> + B<sub>access</sub><br /><br />
                                        <span className="code-comment">{"// Dove:"}</span><br />
                                        W = (t<sub>ped</sub>² + t<sub>veh</sub>²) × 0.3<br />
                                        Q = Σ(q<sub>i</sub> × w<sub>i</sub> × p<sub>i</sub>)<br />
                                        E = q<sub>emerg</sub> × 15000<br />
                                        B = 2000 if disabled
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                FASI DI ASSEMBLAGGIO
            ═══════════════════════════════════════════ */}
            <section className="tech-stack-section">
                <div className="tech-container">
                    <span className="tech-overline">DEPLOYMENT</span>
                    <h2 className="tech-section-title">FASI DI ASSEMBLAGGIO</h2>
                    <div className="tech-stack-grid">
                        <div className="tech-stack-item tech-animate">
                            <div className="tech-stack-content">
                                <h4>01. SENSING SETUP</h4>
                                <h5>INTEGRAZIONE HARDWARE</h5>
                                <p>Installazione di moduli di visione NVIDIA Jetson su infrastruttura pre-esistente. L'hardware viene assemblato per resistere a condizioni climatiche estreme mantenendo performance server-grade.</p>
                            </div>
                        </div>
                        <div className="tech-stack-item tech-animate">
                            <div className="tech-stack-content">
                                <h4>02. MODEL DEPLOY</h4>
                                <h5>LOCAL INTELLIGENCE</h5>
                                <p>Caricamento dei modelli di inferenza ottimizzati via TensorRT. In questa fase l'incrocio diventa autonomo nel rilevamento e nell'analisi dei flussi locali.</p>
                            </div>
                        </div>
                        <div className="tech-stack-item tech-animate">
                            <div className="tech-stack-content">
                                <h4>03. NETWORK SYNC</h4>
                                <h5>THE MESH</h5>
                                <p>Collegamento alla rete Mesh sicura. Gli agenti iniziano a scambiare tensori di stato con gli incroci adiacenti per abilitare la strategia di città.</p>
                            </div>
                        </div>
                        <div className="tech-stack-item tech-animate">
                            <div className="tech-stack-content">
                                <h4>04. LIVE OPTIMIZATION</h4>
                                <h5>DYNAMIC CONTROL</h5>
                                <p>Attivazione del controllo attivo con re-training continuo. Il sistema monitora il delta tra flussi ideali e reali, auto-correggendosi e migliorando settimanalmente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                DATA PIPELINE FLOW
            ═══════════════════════════════════════════ */}
            <section className="tech-flow-diagram tech-animate">
                <div className="tech-container">
                    <span className="tech-overline">PIPELINE</span>
                    <h2 className="tech-section-title">LINEA DI OTTIMIZZAZIONE</h2>
                    <div className="tech-diagram-wrapper">
                        <div className="tech-flow-step">
                            <div className="step-box">DATA INPUT</div>
                            <div className="step-desc">Acquisizione flussi RAW tramite YOLOv8 e telemetria da sensori stradali. Stato compresso a 11 dimensioni.</div>
                        </div>
                        <div className="tech-flow-arrow">
                            <svg viewBox="0 0 24 24" fill="none"><path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        </div>
                        <div className="tech-flow-step">
                            <div className="step-box highlight">AI PROCESSING</div>
                            <div className="step-desc">Elaborazione neurale PPO Actor-Critic: l'agente determina la durata ottimale del verde in base allo stato percepito.</div>
                        </div>
                        <div className="tech-flow-arrow">
                            <svg viewBox="0 0 24 24" fill="none"><path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        </div>
                        <div className="tech-flow-step">
                            <div className="step-box">SIGNAL OUTPUT</div>
                            <div className="step-desc">Attuazione fisica sui controller semaforici e feedback al sistema di re-training per il miglioramento continuo.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CTA FINALE
            ═══════════════════════════════════════════ */}
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

export default TechnologyPage;
