import React from 'react';
import { BsInboxes  } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { GiPadlock } from 'react-icons/gi';
import { AiOutlineInbox } from 'react-icons/ai';
import {  MdOutlineSpaceDashboard, MdOutlineCategory } from 'react-icons/md';
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




const AdminSideBar = () => {
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
            className={location.pathname.includes('/admin/dashboard') && 'active'}
            to="/admin/dashboard"
          >
            <MdOutlineSpaceDashboard />
            <Text clicked={click}>{t("Dashboard")}</Text>
          </Item>
          <Item
            onClick={() => dispatch({type: 'SIDEBAR_CLOSE'})}
            className={location.pathname.includes('/admin/product') && 'active'}
            to="/admin/product"
          >
            <AiOutlineInbox/>
            <Text clicked={click}>{t("Product")}</Text>
          </Item>
          <Item
            onClick={() => dispatch({type: 'SIDEBAR_CLOSE'})}
            className={location.pathname.includes('/admin/products') && 'active'}
            to="/admin/products"
          >
            <BsInboxes/>
            <Text clicked={click}>{t("Products")}</Text>
          </Item>
          <Item
            onClick={() => dispatch({type: 'SIDEBAR_CLOSE'})}
            className={location.pathname.includes('/admin/category') && 'active'}
            to="/admin/category"
          >
            <BiCategory />
            <Text clicked={click}>{t("Category")}</Text>
          </Item>
          <Item
            onClick={() => dispatch({type: 'SIDEBAR_CLOSE'})}
            className={location.pathname.includes('/admin/subcategory') && 'active'}
            to="/admin/subcategory"
          >
            <MdOutlineCategory />
            <Text clicked={click}>{t("SubCategory")}</Text>
          </Item>
          <Item
            onClick={() => dispatch({type: 'SIDEBAR_CLOSE'})}
            className={location.pathname.includes('/user/password') && 'active'}
            to={`/${encodeURI(t(`${encodeURI(t('user'))}/${encodeURI(t('password'))}`))}`}
          >
            <GiPadlock />
            <Text clicked={click}>{t("Password")}</Text>
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

export default AdminSideBar;