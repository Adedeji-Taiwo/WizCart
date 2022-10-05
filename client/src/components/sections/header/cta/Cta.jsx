import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Gb, Sg, Cn } from 'react-flags-select';
import { FaAngleDown } from 'react-icons/fa';
import { facebookm, twitterm, instagramm, pinterestm, youtubem } from '../../../../assets/social-links';
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


        const baseUrl = process.env.NODE_ENV === 'development' 
        ? import.meta.env.VITE_LOCAL_BASE_URL
        : import.meta.env.VITE_HOST_BASE_URL || 'https://wizcart.netlify.app/';

        window.location.replace(baseUrl + "?lng=" + flag);
    }

  return (
    <CtaWrapper>
      <Container>
        <HeaderSocialWrapper>
          <li>
            <HeaderSocialLinks>
              <img src={facebookm} alt="facebook" title='facebook'/>
            </HeaderSocialLinks>
          </li>

          <li>
            <HeaderSocialLinks>
            <img src={twitterm} alt="twitter" title='twitter'/>
            </HeaderSocialLinks>
          </li>

          <li>
            <HeaderSocialLinks>
            <img src={pinterestm} alt="pinterest" title='pinterest'/>
            </HeaderSocialLinks>
          </li>

          <li>
            <HeaderSocialLinks>
            <img src={instagramm} alt="instagram" title='instagram'/>
            </HeaderSocialLinks>
          </li>
          
          <li>
            <HeaderSocialLinks>
              <img src={youtubem} alt="youtube" title='youtube'/>
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
           <p>{lang === 'ms' ? <Sg /> : lang === 'zh' ? <Cn /> : <Gb />}</p>
           <p><FaAngleDown /></p>
           <div>
                <button onClick={() => handleLang('ms')} title={t('Malay')}><Sg /></button>
                <button onClick={() => handleLang('zh')} title={t('Chinese')}><Cn /></button>
                <button onClick={() => handleLang('en')} title={t('English')}><Gb /></button>
           </div>
        </HeaderTopActions>
      </Container>
    </CtaWrapper>
  )
}

export default Cta