import React from 'react'
import img from '../../assets/navbar/subgirl.jpg';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import {
    Section,
    Container,
    ImgContainer,
    Title,
    InputContainer
}
from './style';

const Banner = () => {
    const { t } = useTranslation();
    const location = useLocation();

  return (
    <>
    {
        location.pathname === '/' && (
            <Section>
            <Container>
                <ImgContainer>
                    <img src={img} alt="Weirdos" />
                </ImgContainer>
                <Title>{t("Subscribe")} <br />{t("for news and offers")}</Title>
                <InputContainer>
                    <input type='email' placeholder={t("Enter your email")} />
                    <button>{t("Submit")}</button>
                </InputContainer>    
            </Container>    
        </Section>
        )
    }
    </>
  )
}

export default Banner