import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoadingContainer, Loading, Counter } from './style';
import { useTranslation } from 'react-i18next';


const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const {t} = useTranslation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000)

        //redirect once count is 0
        count === 0 && navigate('/');

        return () => clearInterval(interval);
    }, [count])

  return (
    <LoadingContainer>
    <Loading>{t('Redirecting you in')} &nbsp;<Counter>{count}</Counter>&nbsp; {t('seconds')}.</Loading>
  </LoadingContainer>
  )
}

export default LoadingToRedirect