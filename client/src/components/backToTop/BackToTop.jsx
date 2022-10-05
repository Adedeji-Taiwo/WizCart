import React, { useEffect,useState } from 'react'
import { FiChevronUp } from 'react-icons/fi';
import { Section } from './style';



const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 200) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);

    
      // This function will scroll the window to the top 
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };

  return (
    <>
        {showButton && (
        <Section onClick={scrollToTop}>
            <FiChevronUp />
        </Section>
   )}
    </>
  )
};

export default BackToTop;