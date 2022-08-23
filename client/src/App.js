import './App.css';
import Postaldetails from './components/form';
import Postview from './postview';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landingpage from './components/landingpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage/>}></Route>
      <Route path="/postview" element={<Postview/>}></Route>
      <Route path="/form" element={<Postaldetails/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
