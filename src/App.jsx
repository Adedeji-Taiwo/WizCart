import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import { vars } from './styles/Variables'
import Overlay from './components/overlay/Overlay';
import Preloader from './components/preloader/Preloader'
import Header from './components/sections/header/Header';
import { MenuProvider } from './context/MenuContext';
import Hero from './components/sections/hero/Hero';
import SplashScreen from './components/splashScreen/SplashScreen';



function App() {

  return (
    <MenuProvider>
      <GlobalStyles />
      <ThemeProvider theme={vars}>
        <Overlay />
        <SplashScreen />
        <Header />
        <Hero />
      </ThemeProvider>
    </MenuProvider>
  )
}

export default App
