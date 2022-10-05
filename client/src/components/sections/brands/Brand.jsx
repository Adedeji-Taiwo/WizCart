import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation,  Autoplay  } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import james from '../../../assets/brands/james.png';
import harry from '../../../assets/brands/harry.svg';
import twinnings from '../../../assets/brands/twinings.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';
import {
    BrandWrapper,
    Container,
    ImgContainer,
} from './style';


const Brand = () => {
    const {t} = useTranslation();
    SwiperCore.use([Autoplay]);

  return (
    <BrandWrapper>
        <Container>
        <h1>{t('Brands')}</h1>
           <Swiper
            autoplay= {{
                delay: 3000,
                disableOnInteraction: false,
            }}
            scrollbar={{
                draggable: true
            }}
            navigation={true}
            spaceBetween={5}
            slidesPerView={3}
            centeredSlides={true}
            
            loop={true}
            speed={1500}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
             <SwiperSlide>
             <ImgContainer>
                    <LazyLoadImage 
                        effect='blur'
                        src={james} 
                        alt="brand"
                        className='brand'
                    />
                </ImgContainer>
            </SwiperSlide> 
            <SwiperSlide>
            <ImgContainer>
                    <LazyLoadImage 
                        effect='blur'
                        src={harry} 
                        alt="brand"
                        className='brand'
                    />
                </ImgContainer>
            </SwiperSlide>
            <SwiperSlide>
            <ImgContainer>
                    <LazyLoadImage 
                        effect='blur'
                        src={twinnings} 
                        alt="brand"
                        className='brand'
                    />
                </ImgContainer>
            </SwiperSlide>
           </Swiper>
        </Container>
    </BrandWrapper>
  )
}

export default Brand