import React, { useContext, useState } from 'react'
import Logo from '../../../../assets/brandlogo/logo-black.png'
import { MenuContext } from '../../../../context/MenuContext';
import { useTranslation } from 'react-i18next'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUserAdd } from 'react-icons/ai';
import { BsCart3, BsPerson, BsShop } from 'react-icons/bs';
import { MdLogin, MdOutlineLogout } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa';
import { VscClose } from 'react-icons/vsc'
import { FaRegUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import firebase from "firebase/compat/app";
import {
    HeaderMain,
    Container,
    HeaderLogo,
    HeaderSearchContainer,
    SearchField,
    SearchBtn,
    HeaderUserActions,
    ActionBtn,
    Count,
    CancelSearchBtn,
    Avatar,
    MobileAvatar
} from './style';



const Main = () => {
    const { toggleMenu, isMenuOpen, closeMenu } = useContext(MenuContext);
    const [dropDown, setDropDown] = useState(false);
    const { t } = useTranslation(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => ({...state.userLogin}));

    
    const handleFocus = () => {
        toggleMenu();
        document.querySelector('.mobile-nav-bar').style.display = 'none';
    }

    const toggleDropdown = () => {
        setDropDown(true)
    }

    const logout = () => {
        firebase.auth().signOut();

        dispatch({
            type: "USER_LOGOUT",
            payload: null,
        });

        navigate('./login')
    }

  return (
    <HeaderMain>
        <Container>
        <HeaderLogo>
            <img onClick={() => navigate('/')} src={Logo} alt="WizCart's logo" title='WizCart'/>
        </HeaderLogo>

        <HeaderSearchContainer focus={isMenuOpen}>
            <SearchField type="search" name="search" className="search-field" placeholder={`${t("Search for a product name")}...`} onFocus={handleFocus} />
            <CancelSearchBtn focus={isMenuOpen} onClick={closeMenu}>
                <VscClose title={t("Close")} />
            </CancelSearchBtn>
            <SearchBtn focus={isMenuOpen}>
                <AiOutlineSearch title={t("Search")} />
            </SearchBtn>
        </HeaderSearchContainer>



        <MobileAvatar closeDropdown={dropDown} >
                {userInfo ? (
                    <div className='avatarContainer '>
                        <p className="avatar" onClick={() => setDropDown(false)}>
                            {userInfo.displayName ? userInfo.displayName.split(' ').map(item => item[0]).join().replace(',', '') : userInfo.email.substring(0, 2)}
                        </p>
                        <p className='avatar-icon'><FaAngleDown /></p>
                    </div>
                ):(
                    <div className='avatarContainer'>
                        <FaRegUserCircle title={t("Profile")} onClick={() => setDropDown(false)}/>
                        <p className='avatar-icon'><FaAngleDown /></p>
                    </div>
                )}
                <div className='profile-dropdown'>
                    <div>
                        {userInfo ? (
                             <p>{userInfo.displayName ? userInfo.displayName : userInfo.email.split('@')[0]}</p>
                        ):(
                            <>
                                <p>{t("Sign in or create an account")}:</p>
                                <ul>
                                    <li>{t("For faster checkout")}</li>
                                    <li>{t("To access order history")}</li>
                                </ul>
                            </>
                        )}
                    </div>
                    <div>
                        {userInfo ? (
                            <p className='icon-activity'>
                            <span className='icon'><MdOutlineLogout /></span>
                            <span onClick={() => {logout(); toggleDropdown();}}>{t("Logout")}</span>
                           </p>
                        ) : (
                            <>
                                <p className='icon-activity'>
                                    <span className='icon'><MdLogin /></span>
                                    <span onClick={() => {navigate(`/${encodeURI(t('login'))}`); toggleDropdown();}}>{t("Sign in")}</span>
                                </p>
                                <p className='icon-activity'>
                                    <span className='icon'>< AiOutlineUserAdd /></span>
                                    <span onClick={() => {navigate(`/${encodeURI(t('register'))}`); toggleDropdown();}}>{t("Register")}</span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </MobileAvatar>


        <HeaderUserActions>

            <Avatar closeDropdown={dropDown} onMouseEnter={() => setDropDown(false)}>
            {userInfo ? (
                    <div className='avatarContainer'>
                        <p className='avatar-icon'><FaAngleDown /></p>
                        <p className="avatar" onClick={() => setDropDown(false)}>
                            {userInfo.displayName ? userInfo.displayName.split(' ').map(item => item[0]).join().replace(',', '') : userInfo.email.substring(0, 2)}
                        </p>
                    </div>
                ):(
                    <BsPerson title={t("Profile")} className='user-icon'/>
                )}
                <div className='profile-dropdown'>
                    <div>
                    {userInfo ? (
                             <p>{userInfo.displayName ? userInfo.displayName : userInfo.email.split('@')[0]}</p>
                        ):(
                            <>
                                <p>{t("Sign in or create an account")}:</p>
                                <ul>
                                    <li>{t("For faster checkout")}</li>
                                    <li>{t("To access order history")}</li>
                                </ul>
                            </>
                        )}
                    </div>
                    <div>
                        {userInfo ? (
                             <p className='icon-activity'>
                             <span className='icon'><MdOutlineLogout /></span>
                             <span onClick={() => {logout(); toggleDropdown();}}>{t("Logout")}</span>
                            </p>
                        ) : (
                            <>
                                 <p className='icon-activity'>
                                    <span className='icon'><MdLogin /></span>
                                    <span onClick={() => {navigate(`/${encodeURI(t('login'))}`); toggleDropdown();}}>{t("Sign in")}</span>
                                </p>
                                <p className='icon-activity'>
                                    <span className='icon'>< AiOutlineUserAdd /></span>
                                    <span onClick={() => {navigate(`/${encodeURI(t('register'))}`); toggleDropdown();}}>{t("Register")}</span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </Avatar>

            <ActionBtn>
                <BsShop title={t("Shop")} />
            </ActionBtn>

            <ActionBtn>
                < AiOutlineHeart title={t("Wishlist")} />
            <Count>0</Count>
            </ActionBtn>

            <ActionBtn>
                <BsCart3 title={t("Shopping Cart")}/>
                <Count>0</Count>
            </ActionBtn>
        </HeaderUserActions>
    </Container>
  </HeaderMain>

  )
}

export default Main;