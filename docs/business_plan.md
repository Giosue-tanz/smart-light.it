# SmartLight — Business Plan
**Versione:** 3.0 | **Data:** Febbraio 2026 | **Autore:** LGIT / SmartLight Team

---

## 1. Executive Summary

SmartLight è un sistema di ottimizzazione del traffico urbano basato su Intelligenza Artificiale (Deep Reinforcement Learning) in architettura Edge. Il sistema controlla dinamicamente i cicli semaforici per ridurre emissioni di CO₂, tempi di attesa e congestione.

Il modello di business si basa sulla strategia **"CapEx Coperto"**: l'infrastruttura viene venduta alla Pubblica Amministrazione con un margine immediato che azzera i rischi di cassa, mantenendo i diritti esclusivi sui **Crediti di Carbonio** generati per garantire una scalabilità esponenziale dei ricavi ricorrenti.

---

## 2. Modello di Business Strategico

Il modello di business si fonda su un approccio ibrido studiato per azzerare il fabbisogno di cassa iniziale (tipico delle startup hardware), massimizzando al contempo il potenziale di guadagno a lungo termine nel mercato del *Climate Tech*.

### 2.1 Struttura dei Ricavi

| Fonte di Ricavo | Descrizione |
|---|---|
| **Fee di Installazione (CapEx Coperto)** | SmartLight vende l'infrastruttura hardware (Edge AI + sensori) e il setup iniziale al Comune a un prezzo *premium* per i piloti (€10.000) che scala a un prezzo competitivo a regime (€6.000/incrocio). Il prezzo copre interamente i costi vivi generando un **margine operativo netto e immediato**. |
| **Crediti di Carbonio (Core Business Passivo)** | A fronte del prezzo vantaggioso, il Comune cede a SmartLight i diritti esclusivi (5-10 anni) sulle riduzioni di CO₂ generate dall'incrocio. I crediti vengono certificati e venduti nel Mercato Volontario. |
| **Data Analytics (il "Jolly" SaaS)** | Canone mensile opzionale (€100–200/mese/incrocio) per dashboard premium con analisi predittive, conteggio veicoli e reportistica avanzata. |

### 2.2 Il Modello "CapEx Coperto" — Schema Prezzi

| Fase di Crescita | Prezzo Vendita PA | Costo Vivo SmartLight | Margine Diretto |
|---|---|---|---|
| Anno 1 (Pilota) | €10.000 | €2.500 | **+€7.500** |
| Anno 2 (Inizio Scaling) | €8.000 | €2.000 | **+€6.000** |
| Anno 3-5 (Regime) | €6.000 | €1.500 | **+€4.500** |

> Il margine di installazione resta costante e positivo grazie alle economie di scala su hardware (Edge) e setup.

---

## 3. Mercato dei Crediti di Carbonio

### 3.1 Mercato dei Crediti — Dati Certificati

#### Mercato Regolamentato EU (EU ETS — Emission Trading System)

| Parametro | Valore | Fonte |
|---|---|---|
| Prezzo EUA attuale (Feb 2026) | **~€73,75/tCO₂** | Trading Economics, EU Carbon Permits |
| Previsione media 2026 | **€83–92/tCO₂** | ING, Montel, Reuters Poll |
| Previsione 2027+ | **€95–110/tCO₂** | Macquarie Bank, Vertis |
| Trend a lungo termine | **In crescita** — cap annuale in riduzione, domanda in aumento (CBAM, settore marittimo) | Commissione Europea, EU ETS Review |

**Fonti certificate:**
- EU ETS — [Commissione Europea](https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets_en)
- Trading Economics — [tradingeconomics.com/commodity/carbon](https://tradingeconomics.com/commodity/carbon)
- ING Economic Research — previsioni EUA 2026
- Montel/Reuters Poll — sondaggio analisti luglio 2025

#### Mercato Volontario (Verra VCS / Gold Standard)

| Parametro | Valore | Fonte |
|---|---|---|
| Prezzo medio crediti volontari | **$6,34/tCO₂** (media mercato) | Ecosystem Marketplace 2025 |
| Crediti alta qualità (BBB+) | **$26–35/tCO₂** | Sylvera, ARR spot price |
| Crediti technology-based | **$20–500/tCO₂** | CarbonCredits.com, Carbonmark |
| Trend | **Flight to quality** — crediti certificati ad alta integrità con premio del 360% | Sylvera, ICVCM |

### 3.2 Tempi di Attesa (MRV)

La generazione di ricavi dai crediti non è immediata. L'iter di *Monitoraggio, Rendicontazione e Verifica* (MRV) richiede:

1. **Monitoraggio:** Raccolta dati continuativa per 6-12 mesi per dimostrare la solidità dell'algoritmo.
2. **Audit:** Verifica da parte di enti terzi (VVB per Verra/Gold Standard), che può richiedere 3-6 mesi.
3. **Collocamento:** Vendita sul mercato o tramite contratti *Forward*.

> ⚠️ **Nota Strategica:** Il primo incasso reale dai crediti avviene tipicamente al **Mese 18**. Il modello "CapEx Coperto" sull'installazione serve proprio a proteggere l'azienda in questi 18 mesi.

### 3.3 Come SmartLight Genera Crediti di Carbonio

```
Riduzione CO₂ = (Emissioni Baseline - Emissioni con SmartLight)
```

**Metodologia:**
1. **Baseline**: Misurazione emissioni CO₂ con cicli semaforici tradizionali (tempi fissi)
2. **Scenario Ottimizzato**: Misurazione emissioni con SmartLight attivo
3. **Delta**: La differenza certificata costituisce i crediti vendibili
4. **Certificazione**: Protocollo Verra VCS o Gold Standard (MRV — Monitoring, Reporting, Verification)

### 3.4 Calcolo Realistico delle Emissioni per Incrocio

#### Parametri Base (da studi accademici e simulazioni SUMO)

| Parametro | Valore | Fonte |
|---|---|---|
| Veicoli medi/giorno per incrocio urbano medio | **10.000–25.000** | ISTAT, dati traffico urbano italiano |
| Emissioni CO₂ medie per veicolo (urbano, stop & go) | **0,25 kg CO₂/km** | HBEFA v4.2, EU Handbook Emission Factors |
| Tratto medio influenzato dall'incrocio | **0,3 km** (300m totali incluso avvicinamento + allontanamento) | Studi microsimulazione |
| Tempo medio di sosta/rallentamento per veicolo | **45–90 secondi** | Dati SUMO, studi traffico |
| Emissioni da idling (motore al minimo) | **~0,9 kg CO₂/10 min** (motore 1.6L medio) | EPA, Green Car Reports |
| **Riduzione emissioni con SmartLight** | **20%** | Stima fortemente conservativa (le simulazioni SUMO mostrano 30–40%) |

#### Calcolo per 1 Incrocio — Scenario Conservativo

```
Veicoli/giorno:                15.000 (valore medio)
Emissioni per passaggio:       0,25 kg/km × 0,3 km = 0,075 kg CO₂/veicolo
Emissioni giornaliere totali:  15.000 × 0,075 = 1.125 kg CO₂/giorno
Emissioni annuali:             1.125 × 365 = 410.625 kg CO₂/anno ≈ 410,6 tCO₂/anno

Aggiunta emissioni da idling:
  - 50% dei veicoli fermi = 7.500
  - Tempo medio sosta: 60 sec = 1 min → emissione per sosta: 0,09 kg CO₂
  - Totale idling/giorno: 7.500 × 0,09 = 675 kg/giorno
  - Totale idling/anno: 675 × 365 = 246.375 kg ≈ 246,4 tCO₂/anno

EMISSIONI TOTALI BASELINE per incrocio: ~657 tCO₂/anno
```

#### Riduzione con SmartLight (~13% — stima fortemente conservativa)

```
Riduzione CO₂ annua per incrocio: 657 × 13% = ~87 tCO₂/anno
```

#### Valore Economico dei Crediti di Carbonio per Incrocio

| Mercato | Prezzo/tCO₂ | Ricavo per Incrocio/Anno |
|---|---|---|
| **EU ETS (regolamentato)** | €74/t | 87 × €74 = **€6.438/anno** |
| **EU ETS (previsione 2027)** | €95/t | 87 × €95 = **€8.265/anno** |
| **Volontario (alta qualità)** | €30/t | 87 × €30 = **€2.610/anno** |
| **Volontario (medio)** | €10/t | 87 × €10 = **€870/anno** |

> ⚠️ **Nota importante**: L'accesso diretto al mercato EU ETS richiede che le riduzioni siano riconosciute da un'entità obbligata (es. azienda con cap). Per SmartLight, il percorso più realistico iniziale è il **mercato volontario** (Verra/Gold Standard), con possibilità di accordi con enti locali per monetizzazione nel mercato regolamentato (es. tramite CBAM o programmi nazionali).

---

## 4. Piano Finanziario — Conto Economico a 5 Anni (P&L)

Le proiezioni seguenti dimostrano la solidità del modello "CapEx Coperto". I costi di installazione vengono **sottratti** ai ricavi di vendita per evidenziare il reale margine lordo. I ricavi da crediti di carbonio sono calcolati con **un anno di latenza** per riflettere realisticamente i tempi di certificazione MRV.

### 4.1 Proiezione P&L

| Voce Finanziaria | Anno 1 (2026) | Anno 2 (2027) | Anno 3 (2028) | Anno 4 (2029) | Anno 5 (2030) |
|---|---|---|---|---|---|
| *Nuovi Incroci (Venduti)* | 2 | 10 | 30 | 60 | 100 |
| *Incroci Attivi Cumulati* | 2 | 12 | 42 | 102 | 202 |
| | | | | | |
| **1. RICAVI** | | | | | |
| Ricavi da Installazione | €20.000 | €80.000 | €180.000 | €360.000 | €600.000 |
| Ricavi da Crediti CO₂ ¹ | €0 | €5.220 | €31.320 | €109.620 | €266.220 |
| **Totale Ricavi Lordi** | **€20.000** | **€85.220** | **€211.320** | **€469.620** | **€866.220** |
| | | | | | |
| **2. COSTI DIRETTI (COGS)** | | | | | |
| Costi Hardware & Setup | -€5.000 | -€20.000 | -€45.000 | -€90.000 | -€150.000 |
| **Margine Lordo (Gross Profit)** | **€15.000** | **€65.220** | **€166.320** | **€379.620** | **€716.220** |
| | | | | | |
| **3. COSTI OPERATIVI (OpEx)** | | | | | |
| R&D, Cloud & AI | -€5.000 | -€8.000 | -€12.000 | -€18.000 | -€25.000 |
| Personale e Commerciale ² | -€10.000 | -€20.000 | -€50.000 | -€120.000 | -€200.000 |
| Certificazioni (MRV) & Vari | -€10.000 | -€12.000 | -€15.000 | -€20.000 | -€25.000 |
| Manutenzione Incroci Attivi ³ | €0 | -€600 | -€3.600 | -€12.600 | -€30.600 |
| **Totale OpEx** | **-€25.000** | **-€40.600** | **-€80.600** | **-€170.600** | **-€280.600** |
| | | | | | |
| **EBITDA** | **🔴 -€10.000** | **🟢 +€24.620** | **🟢 +€85.720** | **🟢 +€209.020** | **🟢 +€435.620** |

> **¹ Crediti CO₂ — Logica temporale:** I crediti generano cassa a partire dall'anno successivo all'installazione per via dei tempi di certificazione MRV (es. all'Anno 2 si incassano i crediti dei 2 incroci dell'Anno 1: 2 × €2.610 = €5.220). Si tratta di una **semplificazione**: in realtà, gli incroci installati a fine anno potrebbero generare crediti solo parziali l'anno successivo (ciclo MRV incompleto). Nessun canone SaaS è incluso per estrema conservatività.
>
> **² Personale Anno 1:** La voce di €10.000 copre spese commerciali e operative minime. Il compenso dei founder **non è incluso** nell'Anno 1 (fase di validazione pro-bono); il team lavora in modalità *sweat equity* fino alla profittabilità.
>
> **³ Manutenzione:** Costo stimato di ~€300/anno per incrocio attivo (visite periodiche, sostituzione componenti, aggiornamenti firmware). Calcolata sugli incroci cumulati dell'anno precedente.

> 💡 **Jolly:** L'attivazione di un canone SaaS ricorrente (€100–200/mese/incrocio) accelererebbe ulteriormente il break-even.

### 4.2 Analisi del Fabbisogno Finanziario

Grazie all'alto margine della fase pilota (€10.000/incrocio) e al drastico abbattimento dei costi Cloud ottenuto sfruttando l'architettura Edge, il **burn rate massimo cumulato (scoperto finanziario) si attesta tra €0 e €10.000** nell'Anno 1.

Questa cifra rappresenta un margine di manovra discrezionale. I founder lavorano in modalità *sweat equity* durante l'Anno 1, posticipando il proprio compenso alla fase di profittabilità (Anno 2+).

> **Break-even: Inizio Anno 2 (2027)** — L'azienda raggiunge la profittabilità già durante il secondo anno, anche con le stime più conservative (R&D realistico, manutenzione inclusa, nessun SaaS). Questo modello rende la startup virtualmente indipendente da iniezioni di capitale esterno (VC), rendendo sufficienti piccoli fondi di *bootstrapping* o grants universitari per coprire la fase iniziale.

### 4.3 Strategia di Mitigazione Rischio Certificazioni

Il rischio di capitale legato alle certificazioni CO₂ viene mitigato dividendo l'iter in due fasi strategiche:

1. **Fase 1 MRV (basso costo):** Design iniziale del protocollo MRV per garantire la corretta formattazione dei dati fin dal giorno 1.
2. **Fase 2 Audit (alto costo):** Audit ufficiale dell'ente terzo (VVB) attivato solo a fine anno, subordinatamente alla comprovata efficacia dell'algoritmo Multi-Agent sui primi due incroci pilota.

### 4.4 Funding del Pilota (Anno 1)

Il test pilota iniziale per singolo incrocio richiede un investimento stimato tra **€ 2.600 e € 5.300** (CapEx + Setup). Considerando l'avvio della certificazione ambientale e le spese operative del primo anno, il fabbisogno totale per la validazione della tecnologia si attesta a ~**€ 10.000**.

| Categoria di Costo | Dettaglio (Stima prudenziale) | Costo Stimato (Euro) |
|---|---|---|
| **Hardware (Edge + Sensori)** | 1x NVIDIA Jetson (es. Orin Nano/NX), 2-4x Telecamere IP/Traffico, Box IP67, Router 4G/5G | € 1.000 - € 2.500 |
| **Installazione & Setup Fisico** | Squadra tecnica (2 persone), noleggio mezzo cestello, materiale vario | € 900 - € 1.300 |
| **Setup AI & Calibrazione** | Mappatura ROI, fine-tuning modello, test e validazione AI Engineer | € 500 - € 1.500 |
| **TOTALE STIMATO PER IL TEST** | **Per singolo incrocio (CapEx + Setup)** | **€ 2.400 - € 5.300** |

Le opzioni di finanziamento includono:

| Opzione | Descrizione |
|---|---|
| **Enti Locali** | Collaborazione diretta con il Comune come progetto Smart City. |
| **Bandi Pubblici** | Fondi PNRR, Smart Cities, Horizon Europe, bandi regionali. |
| **Investitore Seed** | Business angel o fondo Pre-Seed CleanTech per velocità di esecuzione. |

---

## 5. Roadmap di Business

### Fase 1: Validazione (2025 – H1 2026)

- 🏆 **Settembre 2025** — SmartLight vince il bando "Concorso Idee" universitario
- 🤖 **Ottobre 2025 – Febbraio 2026** — Sviluppo AI con Deep Reinforcement Learning (PPO/DQN)
- 🔬 Integrazione con SUMO per simulazioni fisiche realistiche
- 🗺️ Validazione su topologia reale della città di Pisa
-  Sviluppo dashboard di monitoraggio per la PA
- 📋 **Avvio Fase 1 Certificazione:** Consulenza per il design del protocollo MRV e setup formattazione dati

### Fase 2: Deploy e Raccolta Dati (H2 2026 – H1 2027)

- 🚀 Test pilota e installazione primi **2 incroci** reali
- 🏙️ Espansione a **10 incroci** tramite affidamenti diretti alle PA
- 📊 Avvio monitoraggio per la baseline emissiva
- 📋 **Certificazione:** Audit Ufficiale (VVB) sui dati validati del pilota

### Fase 3: Espansione & Scaling (Metà 2027+)

- 🏙️ Deploy multi-città nazionale ed europeo
- 💹 Vendita dei primi crediti di carbonio certificati
- � Economie di scala su hardware e configurazione
- 💰 La rendita passiva dai crediti CO₂ diventa il driver principale della crescita
- 🎯 Target: Consolida la presenza come leader CleanTech nel traffico adattivo

---

## 6. Vantaggi Competitivi (il "Moat")

1. **Derisking Finanziario** — A differenza di competitor che offrono l'hardware gratuitamente, SmartLight copre il CapEx al giorno zero, garantendo stabilità aziendale
2. **Lock-in Istituzionale** — I contratti di cessione dei crediti di carbonio legano l'infrastruttura a SmartLight per cicli di 5-10 anni
3. **AI Distribuita (Edge)** — L'elaborazione locale riduce i costi cloud del 90% e risolve alla radice i problemi di privacy e conformità GDPR rispetto alle soluzioni basate su flussi video centralizzati
4. **AI proprietaria** — RL addestrato su scenari urbani reali con SUMO
5. **Doppio ricavo** — fee + crediti di carbonio (modello unico nel settore)
6. **Low CapEx** — hardware edge low-cost (NVIDIA Jetson)
7. **Scalabilità** — il costo marginale per incrocio decresce con la scala
8. **Compliance ESG** — i Comuni possono usare SmartLight per i KPI ambientali

---

## 7. Mercato Indirizzabile (TAM/SAM/SOM)

| Segment | Valore | Fonte |
|---|---|---|
| **TAM** — Mercato Smart Traffic Management Italia | €750,7M (2030) | Grand View Research |
| **SAM** — Segmento AI Traffic Optimization Italia | ~€150M | Stima basata su 20% del TAM |
| **SOM** — Target realistico SmartLight (5 anni) | ~€2–5M | Basato su ~200 incroci |

---

## 8. Rischi e Mitigazione

| Rischio | Probabilità | Impatto | Mitigazione |
|---|---|---|---|
| Lentezza PA nell'adozione | Alta | Alto | Modello "CapEx Coperto" con margine immediato; affidamento diretto sotto €140k |
| Certificazione crediti CO₂ non ottenuta | Media | Alto | Strategia in 2 fasi (design MRV a basso costo → audit solo dopo validazione); partnership con consulenti Verra/GS accreditati |
| Riduzione emissioni inferiore al previsto | Bassa | Medio | Calcoli basati su stima fortemente conservativa (20%), dati verificati con SUMO (30-40%) |
| Concorrenza (Google Project Green Light) | Media | Medio | Focus su mercato italiano/EU, rapporto diretto con PA, modello carbonio unico |
| Prezzo crediti CO₂ volatile | Media | Medio | Diversificazione ricavi (installazione + crediti + analytics); il CapEx Coperto protegge il cashflow |
| Tempi MRV più lunghi del previsto | Media | Medio | Margine di installazione garantisce sostenibilità finanziaria in attesa dei crediti |

---

## 9. Fonti e Riferimenti

1. **EU ETS Prices** — Trading Economics, [tradingeconomics.com/commodity/carbon](https://tradingeconomics.com/commodity/carbon)
2. **Previsioni EUA 2026** — ING Research, Montel, Reuters Poll (Luglio 2025)
3. **Voluntary Carbon Market** — Ecosystem Marketplace, Sylvera, CarbonCredits.com
4. **HBEFA v4.2** — Handbook Emission Factors for Road Transport, [hbefa.net](https://www.hbefa.net/)
5. **Riduzione CO₂ da smart traffic** — MDPI (32–40%), ResearchGate (51.2%), Google Project Green Light (10%)
6. **Mercato Smart Cities Italia** — Grand View Research, Trade.gov, AIDIA.it
7. **Commissione Europea EU ETS** — [climate.ec.europa.eu](https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets_en)
8. **Emissioni idling** — EPA, Green Car Reports
9. **Verra VCS** — [verra.org](https://verra.org/programs/verified-carbon-standard/)
10. **Gold Standard** — [goldstandard.org](https://www.goldstandard.org/)

---

*Documento redatto e verificato con dati aggiornati a Febbraio 2026.*
