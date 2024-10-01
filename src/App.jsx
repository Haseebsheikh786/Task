import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import UserCrudPage from './pages/UserCrudPage';
import ConditionalPage from './pages/ConditionalPage';
import MultiStepFormPage from './pages/MultiStepFormPage';
import Navbar from './components/navbar';

const App = () => {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/users" element={<UserCrudPage />} />
          <Route path="/conditional" element={<ConditionalPage />} />
          <Route path="/multi-step-form" element={<MultiStepFormPage />} />
        </Routes>
    </Router>
  );
};

export default App;
