import React from 'react'
import Logo from '../../../../assets/brandlogo/logo-black.png'
import { useTranslation } from 'react-i18next'
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { BsCart3, BsPerson } from 'react-icons/bs';
import {
    HeaderMain,
    Container,
    HeaderLogo,
    HeaderSearchContainer,
    SearchField,
    SearchBtn,
    HeaderUserActions,
    ActionBtn,
    Count
} from './style';



const Main = () => {
    const { t } = useTranslation(); 

  return (
    <HeaderMain>
        <Container>
        <HeaderLogo>
            <img src={Logo} alt="WizCart's logo" title='WizCart'/>
        </HeaderLogo>

        <HeaderSearchContainer>
            <SearchField type="search" name="search" className="search-field" placeholder={`${t("Search for a product name")}...`} />
            <SearchBtn>
                <AiOutlineSearch title={t("Search")}/>
            </SearchBtn>
        </HeaderSearchContainer>

        <HeaderUserActions>

            <ActionBtn>
                <BsPerson title={t("Profile")} />
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