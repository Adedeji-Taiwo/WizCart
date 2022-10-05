import React, { useContext } from 'react'
import { MenuContext } from '../../../../context/MenuContext';
import { MobileBottomNavs } from './style'
import wishlist from '../../../../assets/mobileMenu/wishlist.png';
import menu from '../../../../assets/mobileMenu/menu.png';
import cart from '../../../../assets/mobileMenu/cart.png';
import home from '../../../../assets/mobileMenu/home.png';
import shop from '../../../../assets/mobileMenu/shop.png';




const MobileBottomNav = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <MobileBottomNavs>

    <button onClick={toggleMenu}>
      <img src={menu} alt="menu-button"  title='Menu' />
    </button>

    <button>
    <img src={cart} alt="cart-button"  title='Shopping Cart'/>
      <span>0</span>
    </button>

    <button>
      <img src={home} alt="home-button" title='Home'/>
    </button>

    <button>
      <img src={wishlist} alt="wishlist-button" title='Wishlist'/>
      <span>0</span>
    </button>

    <button onClick={toggleMenu}>
      <img src={shop} alt="shop-button" title='Shop'/>
    </button>

  </MobileBottomNavs>
  )
}

export default MobileBottomNav;