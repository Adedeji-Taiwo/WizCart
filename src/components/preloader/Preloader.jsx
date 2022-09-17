import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
    PreloaderWrapper,
    PreloaderInner,
    PreloaderIcon
} from './style.js';
import brandLogo from '../../assets/brandlogo/logo-black.png';





const Preloader = () => {
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 2000);
        
         return () => {
            clearTimeout(timer);
         }
    }, [loader]);

  return (
   <>
    {!loader ? ('') : (
         <PreloaderWrapper>
         <PreloaderInner>
             <PreloaderIcon>
                <LazyLoadImage 
                        src={brandLogo}
                        effect='blur'
                        alt="logo"
                      />
             </PreloaderIcon>
         </PreloaderInner>
     </PreloaderWrapper>
    )}
   </>
  )
}

export default Preloader;