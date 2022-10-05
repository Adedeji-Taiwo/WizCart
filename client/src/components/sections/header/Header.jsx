import React from 'react'
import styled from 'styled-components';
import Cta from './cta/Cta';
import Main from './main/Main';
import MobileBottomNav from './mobileBottomNav/MobileBottomNav';
import MobileNavMenu from './mobileNavMenu/MobileNavMenu';


const HeaderWrapper = styled.header``;


const Header = () => {
    
  return (
        <HeaderWrapper>
            <Cta />
            <Main />
            <MobileBottomNav />
            <MobileNavMenu />
        </HeaderWrapper>
  )
}

export default Header;