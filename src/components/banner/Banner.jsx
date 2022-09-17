import React from 'react'
import img from '../../assets/navbar/subgirl.jpg';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
                    <LazyLoadImage 
                        src={img}
                        effect='blur'
                        alt="lady smile"
                      />
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