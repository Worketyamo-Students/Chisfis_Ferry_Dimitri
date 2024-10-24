import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import HomeComponent from './pages/Home/Home1.Components';
import OnlineBookingComponent from './pages/MesPages/OnlineBookingPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/realestate" element={<OnlineBookingComponent />} />
        {/* Tu peux utiliser UnderConstruction pour d'autres routes */}
      </Routes>
    </Router>
  );
}

export default App;
