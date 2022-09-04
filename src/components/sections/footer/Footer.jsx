import React from 'react'
import Logo from '../../../assets/brandlogo/icon-logo.png';
import Banner from '../../banner/Banner';
import payment from '../../../assets/footer/payment.png';
import { facebook, twitter, instagram, pinterest, youtube } from '../../../assets/social-links';
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



const Footer = () => {
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
          <h2>About</h2>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">About</a>
        </FooterNavItem>
      
      </FooterNavList>

      <FooterNavList>
      
        <FooterNavItem>
          <h2>Customer Service</h2>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">Contact Us</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">FAQs</a>
        </FooterNavItem>
      
      </FooterNavList>

      <FooterNavList>
      
        <FooterNavItem>
          <h2>Legal</h2>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">Terms of Service</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">Terms of Purchase</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">Privacy Policy</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">Refund Policy</a>
        </FooterNavItem>
      
        <FooterNavItem>
          <a href="#">Cookie Policy</a>
        </FooterNavItem>
      
      </FooterNavList>


      <FooterNavList>

        <FooterNavItem>
          <h2>Follow Us</h2>
        </FooterNavItem>

        <li>
        <FooterSocialWrapper>
          <li>
            <FooterSocialLinks>
              <img src={facebook} alt="facebook" title='facebook'/>
            </FooterSocialLinks>
          </li>

          <li>
            <FooterSocialLinks>
            <img src={twitter} alt="twitter" title='twitter'/>
            </FooterSocialLinks>
          </li>

          <li>
            <FooterSocialLinks>
            <img src={pinterest} alt="pinterest" title='pinterest'/>
            </FooterSocialLinks>
          </li>

          <li>
            <FooterSocialLinks>
            <img src={instagram} alt="instagram" title='instagram'/>
            </FooterSocialLinks>
          </li>
          
          <li>
            <FooterSocialLinks>
              <img src={youtube} alt="youtube" title='youtube'/>
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

      <img src={payment} alt="payment method" className="payment-img" />

      <p>
        &copy; {new Date().getFullYear()} <a href="#">WizCart</a>. All rights reserved.
      </p>

    </FooterBottomContainer>

  </FooterBottom>

</FooterWrapper>
  )
}

export default Footer