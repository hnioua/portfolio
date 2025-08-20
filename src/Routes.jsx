import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProfessionalBIDataSciencePortfolioLandingPage from './pages/professional-bi-data-science-portfolio-landing-page/ProfessionalBIDataSciencePortfolioLandingPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ProfessionalBIDataSciencePortfolioLandingPage />} />
        <Route path="/professional-bi-data-science-portfolio-landing-page" element={<ProfessionalBIDataSciencePortfolioLandingPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
