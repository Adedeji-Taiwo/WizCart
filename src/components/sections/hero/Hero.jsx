import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation,  Autoplay  } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    Banner,
    Container,
    SliderContainer,
    SliderItem
} from './styles';
import fashionGirl from '../../../assets/hero/fashion-girl1.jpg';
import fashionGirl2 from '../../../assets/hero/fashion-girl2.jpg';
import fashionGirl3 from '../../../assets/hero/fashion-girl3.jpg'

const data = [
    {
        id: 1,
        img: fashionGirl,
        subTitle: 'Trending item',
        title: "Women's latest fashion sale",
        pricing: '20',
        pricingFloat: '00',
        cta : 'Shop now',
    },
    {
        id: 2,
        img: fashionGirl2,
        subTitle: 'Trending accessories',
        title: 'Modern sunglasses',
        pricing: '17',
        pricingFloat: '00',
        cta : 'Shop now',
    },
    {
        id: 3,
        img: fashionGirl3,
        subTitle: 'Sale offer',
        title: 'New fashion winter sale',
        pricing: '26',
        pricingFloat: '99',
        cta : 'Shop now',
    }
]


const Hero = () => {
    SwiperCore.use([Autoplay]);

  return (
    <Banner>
      <Container>
        <SliderContainer>
            <Swiper
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            pagination={{
            type: window.innerWidth > 570 ? "progressbar" : 'bullets',
            clickable: true,
            }}
            scrollbar={{
                draggable: true
            }}
            navigation={true}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={5000}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
           
        {data.map(({id, img, subTitle, title, pricing, pricingFloat, cta}) => (
        <SwiperSlide  key={id}> 
            <SliderItem>
                <img src={img} alt="banner-image" />
                <div>
                <p>{subTitle}</p>
                <h2>{title}</h2>
                <span>starting at &#x24; <b>{pricing}</b>.{pricingFloat}</span>
                <button>{cta}</button>
                </div>
            </SliderItem>
        </SwiperSlide>
        ))}
           
        </Swiper>

        </SliderContainer>

      </Container>

    </Banner>

  )
}

export default Hero;