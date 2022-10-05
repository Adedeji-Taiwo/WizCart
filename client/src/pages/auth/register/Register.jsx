import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from "../../../firebase";
import { toast } from "react-toastify";
import Logo from '../../../assets/brandlogo/logo-black.png';
import google from '../../../assets/login/google.svg';
import { useTranslation } from 'react-i18next'
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
    RegisterWrapper,
    Section,
    Form,
    Text
  } from './style';
  

const Register = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.userRegister);
    const { userInfo } = useSelector(state => ({...state.userLogin}));


    
    //prevent logged in users from accessing register page
    useEffect(() => {
      if(userInfo && userInfo.token) {
          navigate('/');
      }
  }, [userInfo])


    const handleSubmit = async (e) => {
        e.preventDefault();
        let email  = e.target.email.value;

        dispatch({type: "USER_REGISTER_REQUEST"})

        if(!email) {
            toast.error(t('Email is required!'));
            setTimeout(() =>  dispatch({type: "USER_REGISTER_FAIL"}), 6000);
            return;
        }

        const completeRegUrl = process.env.NODE_ENV === 'development' 
        ? import.meta.env.VITE_REGISTER_LOCAL_REDIRECT_URL
        : import.meta.env.VITE_REGISTER_HOST_REDIRECT_URL;

        const config = {
            url: completeRegUrl,
            handleCodeInApp: true,
        }

        await auth.sendSignInLinkToEmail(email, config);
        toast.success(`${t(`Email is sent to ${email}. Click to complete registration`)}`);
        setTimeout(() =>  dispatch({type: "USER_REGISTER_SUCCESS"}), 6000);
    
        //save user email to localstorage
        window.localStorage.setItem("emailForRegistration", email);
    
        //clear
        setEmail("");
    }



    const googleSignUp = async () => {
     const completeRegUrl = process.env.NODE_ENV === 'development' 
      ? import.meta.env.VITE_REGISTER_LOCAL_REDIRECT_URL
      : import.meta.env.VITE_REGISTER_HOST_REDIRECT_URL;

      const config = {
          url: completeRegUrl,
          handleCodeInApp: true,
      }

      
      auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const email = await user.email;
        await auth.sendSignInLinkToEmail(email, config);
        toast.success(`${t(`Email is sent to ${email}. Click to complete registration`)}`);
        setTimeout(() =>  dispatch({type: "USER_REGISTER_SUCCESS"}), 6000);

        window.localStorage.setItem("emailForRegistration", email);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
    }

    
  return (
    <RegisterWrapper>
    <Section>
        <img src={Logo} alt="brand-logo" />
        <Form onSubmit={handleSubmit} fadeText={loading}>
          <div className='google' onClick={googleSignUp}>
            <div className="g-button">
              <img className="g-logo" src={google} alt="Google Logo" />
              <p className="g-text">{t("Sign up with Google")}</p>
            </div>
          </div>
          <div>
          {t("or")}
          </div>
          <div>
            <span><MdOutlineAlternateEmail title={t("Email")} /></span>
            <input 
                type="email" 
                name="email" 
                placeholder={`${t("Email")}...`} 
                autoFocus
            />
          </div>
          <div>
            <input type="submit" name="register" value={t("register")} id="submit" />
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

          <Text central={true}>{t("Already have an account?")} &nbsp; <p onClick={() => navigate(`/${encodeURI(t('login'))}`)}>{t("login")}</p></Text>

        </Form>
        <div>
          
        </div>
    </Section>
    </RegisterWrapper>
  )
}

export default Register