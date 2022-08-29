import React, { useContext } from 'react'
import { OverlayWrapper } from './style'
import { MenuContext } from '../../context/MenuContext';


const Overlay = () => {
    const { isMenuOpen, closeMenu } = useContext(MenuContext);


  return (
    <OverlayWrapper active={isMenuOpen} onClick={closeMenu}></OverlayWrapper>
  )
}

export default Overlay;