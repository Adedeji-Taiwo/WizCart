import React, {useState} from 'react';
import {auth} from '../../../firebase';
import {toast} from 'react-toastify';
import Logo from '../../../assets/brandlogo/logo-black.png'
import { useTranslation } from 'react-i18next';
import { GiPadlock } from 'react-icons/gi';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import UserSidebar from '../../../components/userSideBar/UserSidebar';
import {
  PasswordWrapper,
  Section,
  Form,
} from './style';

const Password = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const {loading, visible, showPassword} = useSelector(state => state.userPasswordUpdate);


    const togglePassword = () => {
        dispatch({type: 'TOGGLE_PASSWORD_UPDATE' })
  }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "USER_PASSWORD_UPDATE_REQUEST"});

        if(!password) {
            toast.error(t('Password is required'));
            setTimeout(() =>  dispatch({type: "USER_PASSWORD_UPDATE_FAIL"}), 6000);
            return;
        }

        if ( password.length < 6) {
            toast.error(t('Password must be at least 6 characters long'));
            setTimeout(() =>  dispatch({type: "USER_PASSWORD_UPDATE_FAIL"}), 6000);
            return;
        }

        await auth.currentUser.updatePassword(password)
        .then(() => {
            toast.success(t('Password updated'));
            setTimeout(() =>  dispatch({type: "USER_PASSWORD_UPDATE_SUCCESS"}), 6000);
            setPassword("");
        })
        .catch(error => {
            toast.error(t('Operation requires recent authentication. Log in again before retrying'));
            console.log(error);
            setTimeout(() =>  dispatch({type: "USER_PASSWORD_UPDATE_FAIL"}), 6000);
        })
    }
  return (
    <>
    <UserSidebar />
    <PasswordWrapper>
    <Section>
        <img src={Logo} alt="brand-logo" />
        <Form onSubmit={handleSubmit} fadeText={loading}>
            <h3>{t('Password update')}</h3>
          <div>
            <span><GiPadlock title={t("Password")} /></span>
            <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                id="password" 
                value={password}
                placeholder={`${t("Enter new password")}...`}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => dispatch({type: 'SET_VISIBLE_UPDATE'})} 
                autoFocus
            />
            {visible && (
              <p className='password' onClick={togglePassword}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </p>
              )}
          </div>

          <div>
            <input type="submit" name="passwordUpdate" value={t("Submit")} id="submit" />
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
    </PasswordWrapper>
    </>
  )
}

export default Password;