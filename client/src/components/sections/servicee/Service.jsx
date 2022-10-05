import React from 'react';
import truck from '../../../assets/services/truck.png'
import callAgent from '../../../assets/services/call-agent.png'
import secure from '../../../assets/services/secure.png'
import multi from '../../../assets/services/multi.png'
import serviceImg from '../../../assets/services/web-shopping.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';
import { 
  ServiceWrapper,
  Container
  
 } from './style';

const Service = () => {
  const {t} = useTranslation();


  return ( 
    <ServiceWrapper>
    <Container>
    <h1>{t('Services')}</h1>
      <div>
        <LazyLoadImage 
              effect='blur'
              src={serviceImg} 
              alt="service"
              className='service-img'
          />
        <h2>
          <span className="span">{t('Shop for needs')},</span> {t('when you need them')}
        </h2>
      </div>

      <ul>
        <li>
            <figure>
              <img src={truck} loading="lazy"
                alt="service icon" />
            </figure>
            <h3>{t('Fast Delivery')}</h3>
            <p>
            {t('Have your orders delivered to your doorstep in no time and at low price')}.
            </p>     
        </li>

        {/*<li>
            <figure>
              <img src={wallet} loading="lazy"
                alt="service icon" />
            </figure>
            <h3>Multiple Brands</h3>
            <p>
              Dip into your purse to shop from our multi-brand retail.
            </p>   
        </li>*/}
        <li>
            <figure>
              <img src={multi} loading="lazy"
                alt="service icon" />
            </figure>
            <h3>{t('Multiple Brands')}</h3>
            <p>
            {t('Shop for your product needs from our multi-brand retail store')}.
            </p>   
        </li>

        <li>
            <figure>
              <img src={secure} loading="lazy"
                alt="service icon" />
            </figure>
            <h3>{t('Secure payment')}</h3>
            <p>
            {t('Make fast and secure payments using our payment options')}.
            </p>         
        </li>

        <li>
            <figure>
              <img src={callAgent} loading="lazy"
                alt="service icon" />
            </figure>
            <h3>24/7 {t('Support')}</h3>
            <p>
            {t('We are here to take care of all your needs everyday of the week')}.
            </p>
        </li>

      </ul>

    </Container>
  </ServiceWrapper>
  )
}

export default Service;