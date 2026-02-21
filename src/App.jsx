import React from 'react';
import SmartLightPage from './components/SmartLightPage/SmartLightPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BusinessPlanPage from './components/SmartLightPage/BusinessPlanPage';
import ContactPage from './components/SmartLightPage/ContactPage';
import TechnologyPage from './components/SmartLightPage/TechnologyPage';
import ConstructionPage from './components/SmartLightPage/ConstructionPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SmartLightPage />} />
          <Route path="/business-plan" element={<BusinessPlanPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/working-on-it" element={<ConstructionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
