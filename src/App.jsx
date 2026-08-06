import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const SmartLightPage = React.lazy(() => import('./components/SmartLightPage/SmartLightPage'));
const BusinessPlanPage = React.lazy(() => import('./components/SmartLightPage/BusinessPlanPage'));
const ContactPage = React.lazy(() => import('./components/SmartLightPage/ContactPage'));
const TechnologyPage = React.lazy(() => import('./components/SmartLightPage/TechnologyPage'));
const ConstructionPage = React.lazy(() => import('./components/SmartLightPage/ConstructionPage'));

const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0a0a0a', color: '#00d2ff' }}>
    <h2 style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '2px' }}>LOADING...</h2>
  </div>
);

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<SmartLightPage />} />
            <Route path="/business-plan" element={<BusinessPlanPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/working-on-it" element={<ConstructionPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
