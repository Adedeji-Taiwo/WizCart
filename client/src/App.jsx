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
import Home from './pages/home/Home';
import SplashScreen from './components/sections/splashScreen/SplashScreen';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import RegistrationComplete from './pages/auth/registrationComplete/RegistrationComplete';
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword';
import NotFound from './pages/notFound/NotFound';
import Footer from './components/sections/footer/Footer';
import UserRoute from './components/routes/UserRoute';
import History from './pages/user/history/History';
import Password from './pages/user/password/Password';
import Wishlist from './pages/user/wishlist/Wishlist';
import AdminRoute from './components/routes/AdminRoute';
import AdminDashboard from './pages/admin/adminDashboard/AdminDashboard';
import CategoryCreate from './pages/admin/category/categoryCreate/CategoryCreate';
import CategoryUpdate from './pages/admin/category/categoryUpdate/CategoryUpdate';
import authService from './services/auth';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';


function App() {
  const { t } = useTranslation();
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        let idTokenResult = await user.getIdTokenResult();

        const { currentUser } = authService;

        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: 'USER_LOGIN_DETAILS',

              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
                picture: res.data.picture,
              },
            });
          })
          .catch((error) => console.log(error));
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
          <Route path='/' element={<Home />} />
          <Route path={`${encodeURI(t('login'))}`} element={<Login />} />
          <Route path={`${encodeURI(t('register'))}`} element={<Register />} />
          <Route path={`${encodeURI(t('register/complete'))}`} element={<RegistrationComplete />} />
          <Route path={`${encodeURI(t('forgot/password'))}`} element={<ForgotPassword />} />
          <Route path={`${encodeURI(t('user'))}/${encodeURI(t('history'))}`} element={<UserRoute><History /></UserRoute>} />
          <Route path={`${encodeURI(t(`${encodeURI(t('user'))}/${encodeURI(t('password'))}`))}`} element={<UserRoute><Password /></UserRoute>} />
          <Route path={`${encodeURI(t(`${encodeURI(t('user'))}/${encodeURI(t('wishlist'))}`))}`} element={<UserRoute><Wishlist /></UserRoute>} />
          <Route path={'admin/dashboard'} element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path={'admin/category'} element={<AdminRoute><CategoryCreate /></AdminRoute>} />
          <Route path={`admin/category/:slug`} element={<AdminRoute><CategoryUpdate /></AdminRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </MenuProvider>
  )
}

export default App
