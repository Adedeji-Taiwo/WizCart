import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Preloader from './components/preloader/Preloader';
import '../node_modules/normalize.css/normalize.css';
import { BrowserRouter } from 'react-router-dom';
import './i18n';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Suspense fallback={<Preloader />}>
        <App />
     </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
