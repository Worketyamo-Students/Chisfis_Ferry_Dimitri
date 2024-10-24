import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import HomeComponent from './components/pages/Home/Home.Components';
import OnlineBookingComponent
  from './components/pages/MesPages/OnlineBookingPages';
  import LoginComponent from './components/pages/Connect/Login.Component';
import SignupForm from './components/pages/Connect/SignupForm';
import ForgotPass from './components/pages/Connect/ForgotPass';
import HomeStay from './components/pages/listing-stay-map/HomeStay';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/realestate" element={<OnlineBookingComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
        <Route path="/listing-stay-map" element={<HomeStay />} />

        {/* Tu peux utiliser UnderConstruction pour d'autres routes */}
      </Routes>
    </Router>
  );
}

export default App;
