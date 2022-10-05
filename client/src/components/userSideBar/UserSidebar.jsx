import React from 'react';
import { FaHome, FaHistory, FaHeart } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { BiLogOutCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import firebase from "firebase/compat/app";
import { useTranslation } from 'react-i18next';
import {
    Container,
    Button,
    SidebarContainer,
    SlickBar,
    Item,
    Text,
    Profile,
    Details,
    Name,
    Logout
} from './style';
import { useNavigate, useLocation } from 'react-router-dom';




const UserSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {t} = useTranslation();
    const {click, profileClick} = useSelector(state => state.userSidebar);
    const {userInfo} = useSelector(state => state.userLogin);

    
    const handleClick = () => dispatch({type: 'SIDEBAR_TOGGLE'});
    const handleProfileClick = () =>  dispatch({type: 'SIDEBAR_PROFILE_TOGGLE'});
    const logout = () => {
        firebase.auth().signOut();

        dispatch({
            type: "USER_LOGOUT",
            payload: null,
        });

        navigate('/login')
    }


  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
      </Button>
      <SidebarContainer>
        <SlickBar clicked={click}>
          <Item
            onClick={() => dispatch({type: 'SIDEBAR_CLOSE'})}
            className=""
            to="/"
          >
            <FaHome />
            <Text clicked={click}>{t("Home")}</Text>
          </Item>
          <Item
            onClick={() => dispatch({type: 'SIDEBAR_CLOSE'})}
            className={location.pathname.includes('/user/history') && 'active'}
            to={`/${encodeURI(t(`${encodeURI(t('user'))}/${encodeURI(t('history'))}`))}`}
          >
            <FaHistory/>
            <Text clicked={click}>{t("History")}</Text>
          </Item>
          <Item
            onClick={() => dispatch({type: 'SIDEBAR_CLOSE'})}
            className={location.pathname.includes('/user/password') && 'active'}
            to={`/${encodeURI(t(`${encodeURI(t('user'))}/${encodeURI(t('password'))}`))}`}
          >
            <GiPadlock />
            <Text clicked={click}>{t("Password")}</Text>
          </Item>
          <Item
            onClick={() => dispatch({type: 'SIDEBAR_CLOSE'})}
            className={location.pathname.includes('/user/wishlist') && 'active'}
            to={`/${encodeURI(t(`${encodeURI(t('user'))}/${encodeURI(t('wishlist'))}`))}`}
          >
            <FaHeart />
            <Text clicked={click}>{t("Wishlist")}</Text>
          </Item>
        </SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            referrerPolicy="no-referrer" 
            src={userInfo.picture}
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <p>{userInfo.name.split(' ')[0]}</p>
              <span>{t(`${userInfo.role}`)}</span>
            </Name>

            <Logout onClick={() => logout()}>
              <BiLogOutCircle />
            </Logout>
          </Details>
        </Profile>
      </SidebarContainer>
    </Container>
  )
}

export default UserSidebar;