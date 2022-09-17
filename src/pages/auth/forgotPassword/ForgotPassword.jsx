import React, { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import Logo from '../../../assets/brandlogo/logo-black.png';
import { useTranslation } from 'react-i18next'
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    ForgotPasswordWrapper,
    Section,
    Form,
  } from './style';
  


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();
    const { loading } = useSelector(state => state.userPasswordReset);
    const { userInfo } = useSelector(state => ({...state.userLogin}));


    //prevent logged in users from accessing forgot password page
    useEffect(() => {
        if(userInfo && userInfo.token) {
            navigate('/');
        }
    }, [userInfo])


    
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "USER_PASSWORD_RESET_REQUEST"});

    if(!email) {
        toast.error(t('Email is required!'));
        setTimeout(() =>  dispatch({type: "USER_PASSWORD_RESET_FAIL"}), 6000);
        return;
    }

    const resetPasswordUrl = process.env.NODE_ENV === 'development' 
    ? import.meta.env.VITE_FORGOT_PASSWORD_LOCAL_REDIRECT
    : import.meta.env.VITE_FORGOT_PASSWORD_HOST_REDIRECT;


    const config = {
      url: resetPasswordUrl,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        toast.success("Check your email for password reset link");
        setTimeout(() =>  dispatch({type: "USER_PASSWORD_RESET_SUCCESS"}), 6000);
      })
      .catch((error) => {
        toast.error(error.message);
        setTimeout(() =>  dispatch({type: "USER_PASSWORD_RESET_FAIL"}), 6000);
      });
  };


  return (
    <ForgotPasswordWrapper>
    <Section>
        <img src={Logo} alt="brand-logo" />
        <Form onSubmit={handleSubmit} fadeText={loading}>
          <div>
            <span><MdOutlineAlternateEmail title={t("Email")} /></span>
            <input 
                type="email" 
                name="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`${t("Email")}...`} 
                autoFocus
            />
          </div>
          <div>
            <input type="submit" name="submit" value={t("submit")} id="submit" />
            {loading && (<span className='spinner'>
                <Oval
                    height={25}
                    width={25}
                    color='hsl(0, 0%, 83%)'
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#fff"
                    strokeWidth={7}
                    strokeWidthSecondary={7}
                    />
                </span>)}
          </div>
        </Form>
        <div>
          
        </div>
    </Section>
    </ForgotPasswordWrapper>
  )
}

export default ForgotPassword