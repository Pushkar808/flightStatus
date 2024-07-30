import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'animate.css/animate.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import configureStore from "./store/store";
import { Notification } from './components/Notification';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div src="/" className='getFrame hideScrollbar md:w-[450px] md:m-auto h-screen overflow-y-auto border border-black relative'>
      <Notification />
      <Provider store={configureStore()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </div>
  </React.StrictMode>
);
