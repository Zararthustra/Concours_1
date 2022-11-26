import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import './styles/Navbar.css';
import './styles/RightBloc.css';
import './styles/MidBloc.css';
import './styles/LeftBloc.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
