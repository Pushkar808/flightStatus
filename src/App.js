import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Splash } from './pages/Splash';
import { Notification } from './components/Notification';
function App() {
  return (
    <>
      <Notification />
      <Routes>
        <Route path="/" element={< Splash />} />
        <Route path="/flightSearch" element={< Home />} />
      </Routes>
    </>
  );
}

export default App;
