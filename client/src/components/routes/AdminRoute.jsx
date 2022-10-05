import React, { useEffect, useState } from 'react'
import LoadingToRedirect from './loadingToRedirect/LoadingToRedirect';
import { useSelector } from 'react-redux';
import authService from '../../services/auth';


const AdminRoute = ({ children }) => {
  const [okay, setOkay] = useState(false);
  const { userInfo } = useSelector((state) => ({ ...state.userLogin }));
  const { currentAdmin } = authService;


  useEffect(() => {
    if (userInfo && userInfo.token) {
      currentAdmin(userInfo.token)
        .then((res) => {
          setOkay(true);
        })
        .catch((error) => {
          setOkay(false);
        });
    }
  }, [userInfo])
  return okay ? children : <LoadingToRedirect />;
}

export default AdminRoute