import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Splash } from './pages/Splash';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< Splash />} />
        <Route path="/flightSearch" element={< Home />} />
      </Routes>
    </>
  );
}

export default App;
