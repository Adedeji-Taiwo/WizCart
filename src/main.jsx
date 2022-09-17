import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Preloader from './components/preloader/Preloader';
import '../node_modules/normalize.css/normalize.css';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import store from './store';
import { Provider } from 'react-redux';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
     <Suspense fallback={<Preloader />}>
        <App />
     </Suspense>
    </BrowserRouter>
   </Provider>
  </React.StrictMode>
)


