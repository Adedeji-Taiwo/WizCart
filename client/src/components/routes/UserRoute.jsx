import React from 'react'
import LoadingToRedirect from './loadingToRedirect/LoadingToRedirect';
import { useSelector } from 'react-redux';



const UserRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => ({ ...state.userLogin }));

  return userInfo && userInfo.token ? children : <LoadingToRedirect />;
}

export default UserRoute;