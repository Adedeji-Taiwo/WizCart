import React, { useState, useMemo, createContext, useCallback } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [accordionClick, setAccordionClick] = useState(null);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen]);


    const toggleAccordion = useCallback((id) => {
        setIsAccordionOpen(!isAccordionOpen);
        
        setAccordionClick(accordionClick === id ? null : id);
    }, [isAccordionOpen, accordionClick]);



    const closeMenu = () => {
        setIsMenuOpen(false);
    }


    const closeAccordion = () => {
        setIsAccordionOpen(false);
    }

    const value = useMemo(
        () => ({
            isMenuOpen,
            toggleMenu,
            closeMenu,
            isAccordionOpen,
            toggleAccordion,
            closeAccordion,
            accordionClick
        }),
        [isMenuOpen, toggleMenu,  isAccordionOpen, toggleAccordion, accordionClick]
    )

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
