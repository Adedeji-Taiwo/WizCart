import React, { useContext } from 'react'
import Logo from '../../../../assets/brandlogo/logo-black.png'
import { MenuContext } from '../../../../context/MenuContext';
import { useTranslation } from 'react-i18next'
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { BsCart3, BsPerson, BsShop } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc'
import { FaRegUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
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
    const { t } = useTranslation(); 
    const navigate = useNavigate();

    
    const handleFocus = () => {
        toggleMenu();
        document.querySelector('.mobile-nav-bar').style.display = 'none';
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



        <MobileAvatar>
                <FaRegUserCircle title={t("Profile")} />
                <div className='profile-dropdown'>
                    <div>
                        <p>{t("Sign in or create an account")}:</p>
                        <ul>
                            <li>{t("For faster checkout")}</li>
                            <li>{t("To access order history")}</li>
                        </ul>
                    </div>
                    <div>
                        <span onClick={() => navigate(`/${encodeURI(t('login'))}`)}>{t("Sign in")}</span>
                        <span>{t("Register")}</span>
                    </div>
                </div>
            </MobileAvatar>


        <HeaderUserActions>

            <Avatar>
                <BsPerson title={t("Profile")} />
                <div className='profile-dropdown'>
                    <div>
                        <p>{t("Sign in or create an account")}:</p>
                        <ul>
                            <li>{t("For faster checkout")}</li>
                            <li>{t("To access order history")}</li>
                        </ul>
                    </div>
                    <div>
                        <span onClick={() => navigate(`/${encodeURI(t('login'))}`)}>{t("Sign in")}</span>
                        <span>{t("Register")}</span>
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