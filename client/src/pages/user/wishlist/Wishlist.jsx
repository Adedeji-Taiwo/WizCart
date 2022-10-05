import React from 'react'
import UserSidebar from '../../../components/userSideBar/UserSidebar';
import {
  Pages
} from './style';

const Wishlist = () => {
  return (
    <>
    <UserSidebar />
    <Pages>
      <h1>Wishlist user page</h1>
    </Pages>
    </>
  )
}

export default Wishlist;