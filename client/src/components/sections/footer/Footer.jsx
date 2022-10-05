import React from 'react'
import Logo from '../../../assets/brandlogo/icon-logo.png';
import Banner from '../../../components/sections/banner/Banner';
import visa from '../../../assets/footer/visa.svg';
import paypal from '../../../assets/footer/paypal.svg';
import payNow from '../../../assets/footer/paynow.png';
import mastercard from '../../../assets/footer/mastercard.svg';
import maestro from '../../../assets/footer/maestro.svg';
import { facebookM, twitterM, instagramM, pinterestM, youtubeM } from '../../../assets/social-links';
import { useTranslation } from 'react-i18next';
import {
    FooterWrapper,
    FooterNav,
    Container,
    FooterNavList,
    FooterNavItem,
    FooterBottom,
    FooterBottomContainer,
    FooterSocialWrapper,
    FooterSocialLinks
} from './style'

const paymentOptions = [
  {
    id: 1,
    img: visa
  },
  {
    id: 2,
    img: mastercard
  },
  {
    id: 3,
    img: paypal,
  },
  {
    id: 4,
    img: maestro
  },
  {
    id: 5,
    img: payNow,
  }
]

const Footer = () => {
  const { t } = useTranslation();

  return (
    
  <FooterWrapper>
    <Banner />

  <FooterNav>
    
    <Container>

      <FooterNavList>
        <img src={Logo} alt="logo" />
        <FooterNavItem>
          <h2 className='brand'>WizCart</h2>
        </FooterNavItem>
      </FooterNavList>

      <FooterNavList>
      
        <FooterNavItem>
          <h2>{t("About")}</h2>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">{t("About")}</a>
        </FooterNavItem>
      
      </FooterNavList>

      <FooterNavList>
      
        <FooterNavItem>
          <h2>{t("Customer Service")}</h2>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">{t("Contact Us")}</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">FAQs</a>
        </FooterNavItem>
      
      </FooterNavList>

      <FooterNavList>
      
        <FooterNavItem>
          <h2>{t("Legal")}</h2>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">{t("Terms of Service")}</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">{t("Terms of Purchase")}</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">{t("Privacy Policy")}</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">{t("Refund Policy")}</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">{t("Cookie Policy")}</a>
        </FooterNavItem>
      
      </FooterNavList>


      <FooterNavList>

        <FooterNavItem>
          <h2>{t("Follow Us")}</h2>
        </FooterNavItem>

        <li>
        <FooterSocialWrapper>
          <li>
            <FooterSocialLinks>
              <img src={facebookM} alt="facebook" title='facebook'/>
            </FooterSocialLinks>
          </li>

          <li>
            <FooterSocialLinks>
            <img src={twitterM} alt="twitter" title='twitter'/>
            </FooterSocialLinks>
          </li>

          <li>
            <FooterSocialLinks>
            <img src={pinterestM} alt="pinterest" title='pinterest'/>
            </FooterSocialLinks>
          </li>

          <li>
            <FooterSocialLinks>
            <img src={instagramM} alt="instagram" title='instagram'/>
            </FooterSocialLinks>
          </li>
          
          <li>
            <FooterSocialLinks>
              <img src={youtubeM} alt="youtube" title='youtube'/>
            </FooterSocialLinks>
          </li>
        </FooterSocialWrapper>
        </li>

      </FooterNavList>


      <FooterNavList>
      
      <FooterNavItem>
        <h2>Future</h2>
      </FooterNavItem>
    
    </FooterNavList>

    </Container>

  </FooterNav>

  <FooterBottom>

    <FooterBottomContainer>

      <p className='payments'>
        {paymentOptions.map(({id, img}) => 
          <span  key={id}>
            <img src={img} alt="payment method"/>
          </span>

          )}
      </p>

      <p>
        &copy; {new Date().getFullYear()} <a href="#">WizCart</a>. {t("All Rights Reserved")}.
      </p>

    </FooterBottomContainer>

  </FooterBottom>

</FooterWrapper>
  )
}

export default Footer