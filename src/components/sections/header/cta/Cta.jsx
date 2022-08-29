import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Gb, Fr, Es } from 'react-flags-select';
import { FaAngleDown } from 'react-icons/fa';
import { facebook, twitter, linkedin, instagram } from '../../../../assets/social-links';
import { 
    CtaWrapper,
    Container,
    HeaderSocialWrapper,
    HeaderSocialLinks,
    HeaderAlertNews,
    HeaderTopActions,
} from './styles'



const Cta = () => {
    const [lang, setLang] = useState(`${window.location.search.substring(window.location.search.length - 2)}`);
     const { t } = useTranslation(); 

    

    const handleLang  = (flag) => {
        setLang(flag);


        let baseLink = "http://localhost:5173/";
        window.location.replace(baseLink + "?lng=" + flag);
    }

  return (
    <CtaWrapper>
      <Container>
        <HeaderSocialWrapper>
          <li>
            <HeaderSocialLinks>
              <img src={facebook} alt="facebook" title='facebook'/>
            </HeaderSocialLinks>
          </li>

          <li>
            <HeaderSocialLinks>
            <img src={twitter} alt="twitter" title='twitter'/>
            </HeaderSocialLinks>
          </li>

          <li>
            <HeaderSocialLinks>
            <img src={instagram} alt="instagram" title='instagram'/>
            </HeaderSocialLinks>
          </li>

          <li>
            <HeaderSocialLinks>
              <img src={linkedin} alt="linkedin" title='linkedin'/>
            </HeaderSocialLinks>
          </li>
        </HeaderSocialWrapper>

        <HeaderAlertNews>
          <p>
            <b>{t('Free Shipping')}</b> &nbsp;
            {t("This Week's Order Over-$55")}
          </p>
        </HeaderAlertNews>

        <HeaderTopActions>
           <p>{lang === 'es' ? <Es /> : lang === 'fr' ? <Fr /> : <Gb />}</p>
           <p><FaAngleDown /></p>
           <div>
                <button onClick={() => handleLang('fr')} title={t('French')}><Fr /></button>
                <button onClick={() => handleLang('es')} title={t('Spanish')}><Es /></button>
                <button onClick={() => handleLang('en')} title={t('English')}><Gb /></button>
           </div>
        </HeaderTopActions>
      </Container>
    </CtaWrapper>
  )
}

export default Cta