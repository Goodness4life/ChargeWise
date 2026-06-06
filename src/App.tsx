import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import DemandAnalysisPage from './pages/DemandAnalysisPage';
import AIRecommendationsPage from './pages/AIRecommendationsPage';
import InvestmentInsightsPage from './pages/InvestmentInsightsPage';
import InfrastructureMapPage from './pages/InfrastructureMapPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import AppLayout from './layouts/AppLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="demand" element={<DemandAnalysisPage />} />
        <Route path="recommendations" element={<AIRecommendationsPage />} />
        <Route path="investment" element={<InvestmentInsightsPage />} />
        <Route path="map" element={<InfrastructureMapPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
