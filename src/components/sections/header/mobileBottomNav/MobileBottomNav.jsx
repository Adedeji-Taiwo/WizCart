import React, { useContext } from 'react'
import { MenuContext } from '../../../../context/MenuContext';
import { MobileBottomNavs } from './style'
import { AiOutlineHeart, AiOutlineMenuUnfold } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { GrHomeRounded } from 'react-icons/gr';
import { FiGrid } from 'react-icons/fi';

const MobileBottomNav = () => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <MobileBottomNavs>

    <button onClick={toggleMenu}>
      <AiOutlineMenuUnfold title='Menu'/>
    </button>

    <button>
      <BsCart3 title='Shopping Cart'/>
      <span>0</span>
    </button>

    <button>
      <GrHomeRounded title='Home'/>
    </button>

    <button>
      <AiOutlineHeart title='Wishlist'/>
      <span>0</span>
    </button>

    <button onClick={toggleMenu}>
      <FiGrid title='Category'/>
    </button>

  </MobileBottomNavs>
  )
}

export default MobileBottomNav;