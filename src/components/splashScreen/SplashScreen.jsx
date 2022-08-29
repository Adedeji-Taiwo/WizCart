import React, { useEffect, useState } from 'react'
import {
    SplashScreenContainer,
 } from './style'
import shopperLg from '../../assets/loadingScreen/shopperLg.png';
import shopperMd from '../../assets/loadingScreen/shopperMd.png';
import wizCart from '../../assets/brandlogo/logo-black.png';



const SplashScreen = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000);
  }, []);

  


  return (
   <>
    {showSplashScreen && (
       <SplashScreenContainer>
          {window.innerWidth > 570 ? (
            <img src={shopperLg} alt="shopper-welcome-screen" className='shopper'/>
          ) : (
            <img src={shopperMd} alt="shopper-welcome-screen" className='shopper'/>
          )}
          <div>
            <img src={wizCart} alt="brand-logo" />
            <h2>WizCart</h2>
          </div>
      </SplashScreenContainer>
    )}
   </>
  )
}

export default SplashScreen;