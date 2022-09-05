import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import { vars } from './styles/Variables'
import { useTranslation } from 'react-i18next';
import Overlay from './components/overlay/Overlay';
import BackToTop from './components/backToTop/BackToTop';
import Header from './components/sections/header/Header';
import { MenuProvider } from './context/MenuContext';
import Hero from './components/sections/hero/Hero';
import SplashScreen from './components/splashScreen/SplashScreen';
import Login from './pages/login/Login';
import Footer from './components/sections/footer/Footer';




function App() {
  const { t } = useTranslation();

  return (
    <MenuProvider>
      <GlobalStyles />
      <ThemeProvider theme={vars}>
        <Overlay />
        <SplashScreen />
        <BackToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path={`${encodeURI(t('login'))}`} element={<Login />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </MenuProvider>
  )
}

export default App
