import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assest/style-index/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   {/* <AuthProvider> */}
      <App/>
    {/* </AuthProvider> */}
  </React.StrictMode>
);

reportWebVitals();
