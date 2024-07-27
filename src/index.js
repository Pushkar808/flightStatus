import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'animate.css/animate.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="getFrame" src="/" className='md:w-[450px] md:m-auto h-screen overflow-y-auto border border-black md:rounded-[30px]'>
      <App />
    </div>
  </React.StrictMode>
);
