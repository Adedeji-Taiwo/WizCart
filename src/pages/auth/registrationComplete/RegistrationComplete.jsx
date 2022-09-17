import React, { useState, useEffect } from 'react';
import { auth } from '../../../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/brandlogo/logo-black.png';
import { useTranslation } from 'react-i18next'
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { GiPadlock } from 'react-icons/gi';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  RegisterWrapper,
  Section,
  Form,
} from './styles';


const RegistrationComplete = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {loading, visible, showPassword} = useSelector(state => state.userRegisterComplete);

    const navigate = useNavigate();
    const { t }  = useTranslation();

    const togglePassword = () => {
        dispatch({type: 'TOGGLE_PASSWORD' })
  }

    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch({type: "USER_REGISTER_COMPLETE_REQUEST"})

        if(!email || !password) {
            toast.error(t('Email and password is required'));
            setTimeout(() =>  dispatch({type: "USER_REGISTER_COMPLETE_FAIL"}), 6000);
            return;
        }

        if ( password.length < 6) {
            toast.error(t('Password must be at least 6 characters long'));
            setTimeout(() =>  dispatch({type: "USER_REGISTER_COMPLETE_FAIL"}), 6000);
            return;
        }
           

        try {
            const result = await auth.signInWithEmailLink(
                email,
                window.location.href
            );

            if (result.user.emailVerified) {
                //remove user email from localstorage
                window.localStorage.removeItem("emailForRegistration");

                 //get user id token
                let user = auth.currentUser;
                await user.updatePassword(password);
                const idTokenResult = await user.getIdTokenResult();
                console.log("user", user, "token", idTokenResult);

                setTimeout(() =>  dispatch({
                    type: "USER_REGISTER_COMPLETE_SUCCESS"}), 6000);
                //redirect user
                navigate("/");
                dispatch({type: "USER_REGISTER_COMPLETE_FAIL"})
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setTimeout(() =>  dispatch({type: "USER_REGISTER_COMPLETE_FAIL"}), 6000);
        }
        //clear
        setEmail('');
        setPassword('');
    }
  return (
    <RegisterWrapper>
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
                placeholder={`${t("Email")}...`} 
                disabled
            />
          </div>

          <div>
            <span><GiPadlock title={t("Password")} /></span>
            <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                id="password" 
                value={password}
                placeholder={`${t("Password")}...`}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => dispatch({type: 'SET_VISIBLE'})} 
                autoFocus
            />
            {visible && (
              <p className='password' onClick={togglePassword}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </p>
              )}
          </div>

          <div>
            <input type="submit" name="completeRegistration" value={t("complete registration")} id="submit" />
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
    </RegisterWrapper>
  )
}

export default RegistrationComplete;