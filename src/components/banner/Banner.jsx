import React from 'react'
import img from '../../assets/navbar/subgirl.jpg'
import {
    Section,
    Container,
    ImgContainer,
    Title,
    InputContainer
}
from './style';

const Banner = () => {
  return (
    <Section>
        <Container>
            <ImgContainer>
                <img src={img} alt="Weirdos" />
            </ImgContainer>
            <Title>Subscribe <br />for news and offers</Title>
            <InputContainer>
                <input type='email' placeholder="Enter your email" />
                <button>Submit</button>
            </InputContainer>    
        </Container>    
    </Section>
  )
}

export default Banner