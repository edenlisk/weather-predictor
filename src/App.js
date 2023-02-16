import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import CitiesList from './components/CitiesList';
import CityDetail from './components/CityDetail';
import HomePage from './components/HomePage';
import FullHomePage from "./components/FullHomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {
    return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<FullHomePage />} />
          <Route path="/details" element={<CityDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
