import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './Assest/style-index/index.css';


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
