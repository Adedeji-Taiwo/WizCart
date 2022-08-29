import React, { useState, useEffect } from 'react';
import {
    PreloaderWrapper,
    PreloaderInner,
    PreloaderIcon
} from './style.js';
import brandLogo from '../../assets/brandlogo/logo-black.png';





const Preloader = () => {
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
     if (loader) {
         setTimeout(() => {
             setLoader(false);
         }, 2000)
     } 
    }, [loader]);

  return (
   <>
    {!loader ? ('') : (
         <PreloaderWrapper>
         <PreloaderInner>
             <PreloaderIcon>
                <img src={brandLogo} alt="logo" />
             </PreloaderIcon>
         </PreloaderInner>
     </PreloaderWrapper>
    )}
   </>
  )
}

export default Preloader;