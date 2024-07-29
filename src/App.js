import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Splash } from './pages/Splash';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
function App() {
  const socket = io('http://localhost:5000'); // Connect to the server
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    // Listen for notification events from the server
    socket.on('notification', (notification) => {
      console.log("Got a socket with data", notification)
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });
    socket.on('message', (notification) => {
      console.log("Got a socket with data", notification)
    })
    // Clean up on component unmount
    return () => {
      socket.off('notification');
    };
  }, []);

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
