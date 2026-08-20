import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Catch-all fallback redirecting to landing page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
