import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ActionList from '../pages/ActionList/ActionList';
import Home from '../pages/Home/Home';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ActionList />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
