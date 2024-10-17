import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import HomeComponent from './components/pages/Home/Home.Components';
import OnlineBookingComponent
  from './components/pages/MesPages/OnlineBookingPages';
  import LoginComponent from './components/pages/Connect/Login.Component';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/realestate" element={<OnlineBookingComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        {/* Tu peux utiliser UnderConstruction pour d'autres routes */}
      </Routes>
    </Router>
  );
}

export default App;
