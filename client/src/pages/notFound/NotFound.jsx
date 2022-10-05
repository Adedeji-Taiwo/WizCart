import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import notFound from '../../assets/notFound/404-not-found.svg';
import Button from '../../components/button/Button';
import {
    NotFoundWrapper,
    Container,
    Box
} from './style';

const NotFound = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    
  return (
    <NotFoundWrapper>
        <Container>
            <Box>
               <div className='not-found-text'>
                    <h1>{t('Oops! The page you are looking for is not in our shop')}.</h1>
                    <p>{t("Let's get you back to the home page")}.</p>
                    <Button 
                        text={t('Go to WizCart Home')}
                        onClick={() => navigate('/')}
                    />
               </div>
               <div className='not-found-image'>
                <img src={notFound} alt="not-found" />
                </div> 
            </Box>
        </Container>
    </NotFoundWrapper>
  )
}

export default NotFound;