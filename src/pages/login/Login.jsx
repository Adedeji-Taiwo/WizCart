import React, { useState } from 'react'
import Logo from '../../assets/brandlogo/logo-black.png';
import { useTranslation } from 'react-i18next'
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { GiPadlock } from 'react-icons/gi';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import {
  LoginWrapper,
  Section,
  Form,
  Text
} from './style';


const Login = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const togglePassword = () => {
    setShowPassword(!showPassword);
  }


  return (
    <LoginWrapper>
    <Section>
        <img src={Logo} alt="brand-logo" />
        <Form>
          <div className='google'>
          < button className="g-button">
              <img className="g-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png" alt="Google Logo" />
              <p className="g-text">Sign in with Google</p>
            </button>
          </div>
          <div>
            OR
          </div>
          <div>
            <span><MdOutlineAlternateEmail title={t("email")} /></span>
            <input type="email" name="email" id="email" placeholder={`${t("Email")}...`} />
          </div>

          <div>
            <span><GiPadlock title={t("password")} /></span>
            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder={`${t("Password")}...`} onFocus={() => setVisible(true)} />
            {visible && (
              <p className='password' onClick={togglePassword}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </p>
              )}
          </div>

          <Text right={true}><p>Forgot your password?</p></Text>
          
          <div>
            <input type="submit" name="Login" value="Login" id="submit" />
          </div>

          <Text central={true}>Don't have an account? &nbsp; <p>Sign Up</p></Text>
        </Form>
        <div>
          
        </div>
    </Section>
    </LoginWrapper>
  )
}

export default Login