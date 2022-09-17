import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import { vars } from './styles/Variables'
import { useTranslation } from 'react-i18next';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Overlay from './components/overlay/Overlay';
import BackToTop from './components/backToTop/BackToTop';
import Header from './components/sections/header/Header';
import { MenuProvider } from './context/MenuContext';
import Hero from './components/sections/hero/Hero';
import SplashScreen from './components/splashScreen/SplashScreen';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import RegistrationComplete from './pages/auth/registrationComplete/RegistrationComplete';
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword';
import Footer from './components/sections/footer/Footer';

import { useDispatch } from 'react-redux';
import {auth} from './firebase';


function App() {
  const { t } = useTranslation();
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        let idTokenResult = await user.getIdTokenResult();

        dispatch({
          type: 'USER_LOGIN_DETAILS',
          payload: {
            email: user.email,
            displayName: user.displayName,
            token: idTokenResult.token,
          }
        })
      }
    })
    //cleanup
    return () => unsubscribe();
  }, [dispatch])
  

  return (
    <MenuProvider>
      <GlobalStyles />
      <ThemeProvider theme={vars}>
        <Overlay />
        <SplashScreen />
        <BackToTop />
        <Header />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path={`${encodeURI(t('login'))}`} element={<Login />} />
          <Route path={`${encodeURI(t('register'))}`} element={<Register />}/>
          <Route path={`${encodeURI(t('register/complete'))}`} element={<RegistrationComplete />}/>
          <Route path={`${encodeURI(t('forgot/password'))}`} element={<ForgotPassword />}/>
        </Routes>
        <Footer />
      </ThemeProvider>
    </MenuProvider>
  )
}

export default App
